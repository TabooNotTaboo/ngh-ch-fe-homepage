import User from "~/models/schemas/User.schema";
import databaseService from "./database.services";
import { RegisterRequestBody } from "~/models/requests/Users.requests";
import { hashPassword } from "~/utils/crypto";
import { signToken } from "~/utils/jwt";
import { TokenType, UserVerifyStatus } from "~/constants/enum";
import RefreshToken from "~/models/schemas/RefreshToken.schema";
import { ObjectId } from "mongodb";
import { USERS_MESSAGES } from "~/constants/messages";
import { update } from "lodash";

class UserService {
  private signAccessToken(user_id: string) {
    return signToken({
      payload: { user_id, token_type: TokenType.AccessToken },
      options: {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
      },
      secret: process.env.JWT_SECRET_ACCESS_TOKEN as string,
    });
  }

  private signRefreshToken(user_id: string) {
    return signToken({
      payload: { user_id: user_id, token_type: TokenType.RefreshToken },
      options: {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
      },
      secret: process.env.JWT_SECRET_REFRESH_TOKEN as string,
    });
  }

  private signAccessAndRefreshToken(user_id: string) {
    return Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id),
    ]);
  }

  private signEmailVerifyToken(user_id: string) {
    return signToken({
      payload: { user_id, token_type: TokenType.EmailVerifyToken },
      options: {
        expiresIn: process.env.EMAIL_VERIFY_TOKEN_EXPIRES_IN,
      },
      secret: process.env.JWT_SECRET_EMAIL_VERIFY_TOKEN as string,
    });
  }

  private signForgotPassWordToken(user_id: string) {
    return signToken({
      payload: { user_id, token_type: TokenType.ForgotPasswordToken },
      options: {
        expiresIn: process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN,
      },
      secret: process.env.JWT_SECRET_FORGOT_PASSWORD_TOKEN as string,
    });
  }

  async checkEmailExist(email: string) {
    const user = await databaseService.users.findOne({ email });
    return Boolean(user);
  }

  async register(payload: RegisterRequestBody) {
    const user_id = new ObjectId();
    const email_verify_token = await this.signEmailVerifyToken(
      user_id.toString()
    );
    await databaseService.users.insertOne(
      new User({
        ...payload,
        _id: user_id,
        email_verify_token,
        date_of_birth: new Date(payload.date_of_birth),
        password: hashPassword(payload.password),
      })
    );

    const [access_token, refresh_token] = await this.signAccessAndRefreshToken(
      user_id.toString()
    );
    await databaseService.refreshTokens.insertOne(
      new RefreshToken({ user_id: new ObjectId(user_id), token: refresh_token })
    );
    return { access_token, refresh_token };
  }

  async login(user_id: string) {
    const [access_token, refresh_token] =
      await this.signAccessAndRefreshToken(user_id);
    await databaseService.refreshTokens.insertOne(
      new RefreshToken({ user_id: new ObjectId(user_id), token: refresh_token })
    );
    return { access_token, refresh_token };
  }

  async logout(refresh_token: string) {
    await databaseService.refreshTokens.deleteOne({ token: refresh_token });
    return {
      message: USERS_MESSAGES.LOGOUT_SUCCESS,
    };
  }

  async verifyEmail(user_id: string) {
    await databaseService.users.updateOne({ _id: new ObjectId(user_id) }, [
      {
        $set: {
          email_verify_token: "",
          verify: UserVerifyStatus.Verified,
          updated_at: "$$NOW",
        },
      },
    ]);
    return {
      message: USERS_MESSAGES.EMAIL_VERIFY_SUCCESS,
    };
  }

  async resendEmailVerify(user_id: string) {
    //Giả vờ gửi email
    const email_verify_token = await this.signEmailVerifyToken(user_id);
    console.log("Send email to user_id: ", email_verify_token);

    //Cập nhật lại email_verify_token
    await databaseService.users.updateOne(
      { _id: new ObjectId(user_id) },
      {
        $set: {
          email_verify_token,
        },
        $currentDate: { updated_at: true },
      }
    );
    return {
      message: USERS_MESSAGES.RESEND_EMAIL_VERIFY_SUCCESS,
    };
  }

  async forgotPassword(user_id: string) {
    const forgot_password_token = await this.signForgotPassWordToken(user_id);
    await databaseService.users.updateOne(
      { _id: new ObjectId(user_id) },
      {
        $set: {
          forgot_password_token,
        },
        $currentDate: { updated_at: true },
      }
    );
    console.log("forgot_password_token: ", forgot_password_token);
    return {
      message: "Check your email for reset password!!!",
    };
  }
}

const userService = new UserService();
export default userService;
