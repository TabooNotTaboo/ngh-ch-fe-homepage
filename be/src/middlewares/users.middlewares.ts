import { hashPassword } from "~/utils/crypto";
import { validate } from "./../utils/validation";
import { checkSchema } from "express-validator";
import { USERS_MESSAGES } from "~/constants/messages";
import databaseService from "~/services/database.services";
import userService from "~/services/users.services";
import { verifyToken } from "~/utils/jwt";
import { ErrorWithStatus } from "~/models/Errors";
import HTTP_STATUS from "~/constants/httpStatus";
import { JsonWebTokenError } from "jsonwebtoken";
import { Request } from "express";
import { ObjectId } from "mongodb";

export const loginValidator = validate(
  checkSchema(
    {
      email: {
        isEmail: {
          errorMessage: USERS_MESSAGES.EMAIL_INVALID,
        },
        notEmpty: {
          errorMessage: USERS_MESSAGES.EMAIL_IS_REQUIRED,
        },
        trim: true,
        custom: {
          options: async (value, { req }) => {
            const user = await databaseService.users.findOne({
              email: value,
              password: hashPassword(req.body.password),
            });
            if (user === null) {
              throw new Error(USERS_MESSAGES.EMAIL_OR_PASSWORD_INCORRECT);
            }
            req.user = user;
            return true;
          },
        },
      },
      password: {
        isString: {
          errorMessage: USERS_MESSAGES.PASSWORD_MUST_BE_STRING,
        },
        notEmpty: {
          errorMessage: USERS_MESSAGES.PASSWORD_IS_REQUIRED,
        },
        isLength: {
          options: {
            min: 6,
            max: 50,
          },
          errorMessage: USERS_MESSAGES.PASSWORD_LENGTH,
        },
        isStrongPassword: {
          options: {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          },
          errorMessage: USERS_MESSAGES.PASSWORD_MUST_BE_STRONG,
        },
      },
    },
    ["body"]
  )
);

export const registerValidator = validate(
  checkSchema(
    {
      name: {
        isString: {
          errorMessage: USERS_MESSAGES.NAME_MUST_BE_STRING,
        },
        notEmpty: {
          errorMessage: USERS_MESSAGES.NAME_IS_REQUIRED,
        },
        isLength: {
          options: {
            min: 1,
            max: 100,
          },
          errorMessage: USERS_MESSAGES.NAME_LENGTH,
        },
        trim: true,
      },
      email: {
        isEmail: {
          errorMessage: USERS_MESSAGES.EMAIL_INVALID,
        },
        notEmpty: {
          errorMessage: USERS_MESSAGES.EMAIL_IS_REQUIRED,
        },
        trim: true,
        custom: {
          options: async (value) => {
            const isExist = await userService.checkEmailExist(value);
            if (isExist) {
              throw new Error(USERS_MESSAGES.EMAIL_ALREADY_EXISTS);
            }
            return true;
          },
        },
      },
      password: {
        isString: {
          errorMessage: USERS_MESSAGES.PASSWORD_MUST_BE_STRING,
        },
        notEmpty: {
          errorMessage: USERS_MESSAGES.PASSWORD_IS_REQUIRED,
        },
        isLength: {
          options: {
            min: 6,
            max: 50,
          },
          errorMessage: USERS_MESSAGES.PASSWORD_LENGTH,
        },
        isStrongPassword: {
          options: {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          },
          errorMessage: USERS_MESSAGES.PASSWORD_MUST_BE_STRONG,
        },
      },
      confirm_password: {
        isString: {
          errorMessage: USERS_MESSAGES.CONFIRM_PASSWORD_MUST_BE_STRING,
        },
        notEmpty: {
          errorMessage: USERS_MESSAGES.CONFIRM_PASSWORD_IS_REQUIRED,
        },
        isLength: {
          options: {
            min: 6,
            max: 50,
          },
          errorMessage: USERS_MESSAGES.CONFIRM_PASSWORD_LENGTH,
        },
        isStrongPassword: {
          options: {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          },
          errorMessage: USERS_MESSAGES.CONFIRM_PASSWORD_MUST_BE_STRONG,
        },
        custom: {
          options: (value, { req }) => {
            if (value !== req.body.password) {
              throw new Error(USERS_MESSAGES.CONFIRM_PASSWORD_NOT_MATCH);
            }
            return true;
          },
        },
      },
      date_of_birth: {
        isISO8601: {
          options: {
            strict: true,
            strictSeparator: true,
          },
          errorMessage: USERS_MESSAGES.DATE_OF_BIRTH_MUST_BE_ISO8061,
        },
      },
    },
    ["body"]
  )
);

export const accessTokenValidator = validate(
  checkSchema(
    {
      Authorization: {
        trim: true,
        custom: {
          options: async (value, { req }) => {
            const access_token = (value || "").split(" ")[1];
            if (!access_token) {
              throw new ErrorWithStatus(
                USERS_MESSAGES.ACCESS_TOKEN_IS_REQUIRED,
                HTTP_STATUS.UNAUTHORIZED
              );
            }
            try {
              const decoded_authorization = await verifyToken({
                token: access_token,
                secret: process.env.JWT_SECRET_ACCESS_TOKEN as string,
              });
              (req as Request).decoded_authorization = decoded_authorization;
            } catch (error) {
              throw new ErrorWithStatus(
                (error as JsonWebTokenError).message,
                HTTP_STATUS.UNAUTHORIZED
              );
            }

            return true;
          },
        },
      },
    },
    ["headers"]
  )
);

export const refreshTokenValidator = validate(
  checkSchema(
    {
      refresh_token: {
        trim: true,
        custom: {
          options: async (value: string, { req }) => {
            if (!value) {
              throw new ErrorWithStatus(
                USERS_MESSAGES.REFRESH_TOKEN_IS_REQUIRED,
                HTTP_STATUS.UNAUTHORIZED
              );
            }
            try {
              const [decoded_refresh_token, refresh_token] = await Promise.all([
                verifyToken({
                  token: value,
                  secret: process.env.JWT_SECRET_REFRESH_TOKEN as string,
                }),
                databaseService.refreshTokens.findOne({ token: value }),
              ]);
              if (refresh_token === null) {
                throw new ErrorWithStatus(
                  USERS_MESSAGES.REFRESH_TOKEN_IS_USED_OR_NOT_EXIST,
                  HTTP_STATUS.UNAUTHORIZED
                );
              }
              (req as Request).decoded_refresh_token = decoded_refresh_token;
            } catch (error) {
              if (error instanceof JsonWebTokenError) {
                throw new ErrorWithStatus(
                  USERS_MESSAGES.REFRESH_TOKEN_INVALID,
                  HTTP_STATUS.UNAUTHORIZED
                );
              }
              throw error;
            }
            return true;
          },
        },
      },
    },
    ["body"]
  )
);

export const emailVerifyTokenValidator = validate(
  checkSchema(
    {
      email_verify_token: {
        trim: true,
        custom: {
          options: async (value: string, { req }) => {
            if (!value) {
              throw new ErrorWithStatus(
                USERS_MESSAGES.EMAIL_VERIFY_TOKEN_IS_REQUIRED,
                HTTP_STATUS.UNAUTHORIZED
              );
            }
            try {
              const decoded_email_verify_token = await verifyToken({
                token: value,
                secret: process.env.JWT_SECRET_EMAIL_VERIFY_TOKEN as string,
              });

              (req as Request).decoded_email_verify_token =
                decoded_email_verify_token;
            } catch (error) {
              if (error instanceof JsonWebTokenError) {
                throw new ErrorWithStatus(
                  USERS_MESSAGES.REFRESH_TOKEN_INVALID,
                  HTTP_STATUS.UNAUTHORIZED
                );
              }
              throw error;
            }
            return true;
          },
        },
      },
    },
    ["body"]
  )
);

export const forgotPassWordValidator = validate(
  checkSchema(
    {
      email: {
        isEmail: {
          errorMessage: USERS_MESSAGES.EMAIL_INVALID,
        },
        notEmpty: {
          errorMessage: USERS_MESSAGES.EMAIL_IS_REQUIRED,
        },
        trim: true,
        custom: {
          options: async (value, { req }) => {
            const user = await databaseService.users.findOne({
              email: value,
            });
            if (user === null) {
              throw new Error(USERS_MESSAGES.USER_NOT_FOUND);
            }
            req.user = user;
            return true;
          },
        },
      },
    },
    ["body"]
  )
);

export const verifyForgotPasswordTokenValidator = validate(
  checkSchema(
    {
      forgot_password_token: {
        trim: true,
        custom: {
          options: async (value: string, { req }) => {
            if (!value) {
              throw new ErrorWithStatus(
                USERS_MESSAGES.FORGOT_PASSWORD_TOKEN_IS_REQUIRED,
                HTTP_STATUS.UNAUTHORIZED
              );
            }
            try {
              const decoded_forgot_password_token = await verifyToken({
                token: value,
                secret: process.env.JWT_SECRET_FORGOT_PASSWORD_TOKEN as string,
              });
              const { user_id } = decoded_forgot_password_token;
              const user = await databaseService.users.findOne({
                _id: new ObjectId(user_id),
              });

              if (user === null) {
                throw new ErrorWithStatus(
                  USERS_MESSAGES.USER_NOT_FOUND,
                  HTTP_STATUS.UNAUTHORIZED
                );
              }
              if (user.forgot_password_token !== value) {
                throw new ErrorWithStatus(
                  USERS_MESSAGES.FORGOT_PASSWORD_TOKEN_IS_INVALID,
                  HTTP_STATUS.UNAUTHORIZED
                );
              }
            } catch (error) {
              if (error instanceof JsonWebTokenError) {
                throw new ErrorWithStatus(
                  USERS_MESSAGES.REFRESH_TOKEN_INVALID,
                  HTTP_STATUS.UNAUTHORIZED
                );
              }
              throw error;
            }
            return true;
          },
        },
      },
    },
    ["body"]
  )
);
