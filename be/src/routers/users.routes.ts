import { wrapRequestHandler } from "./../utils/handlers";
import { Router } from "express";
import {
  emailVerifyController,
  forgotPassWordController,
  loginController,
  logoutControler,
  registerController,
  resendVerifyEmailController,
  verifyForgotPasswordController,
} from "~/controllers/users.controllers";
import {
  accessTokenValidator,
  emailVerifyTokenValidator,
  forgotPassWordValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator,
  verifyForgotPasswordTokenValidator,
} from "~/middlewares/users.middlewares";

const usersRouter = Router();

/*
 * Description: Register a new user
 * Route: [POST] /users/register
 * Body: { name:string, email: string, password: string, confirm_password: string, date_of_birth: ISO8061 }
 */
usersRouter.post(
  "/register",
  registerValidator,
  wrapRequestHandler(registerController)
);

/**
 * Description: Login a user
 * Route: [POST] /users/login
 * Body: { email: string, password: string }
 */
usersRouter.post("/login", loginValidator, wrapRequestHandler(loginController));

/**
 * Description: Logout a user
 * Route: [POST] /users/logout
 * Headers: { Authorization: Bearer <access_token> }
 * Body: { refresh_token: string }
 */
usersRouter.post(
  "/logout",
  accessTokenValidator,
  refreshTokenValidator,
  wrapRequestHandler(logoutControler)
);

/**
 * Description: verify email
 * Route: [POST] /users/verify-email
 * Body: { email_verify_token: string }
 */
usersRouter.post(
  "/verify-email",
  emailVerifyTokenValidator,
  wrapRequestHandler(emailVerifyController)
);

/**
 * Description. Verify email when user client click on the link in email
 * Path: /resend-verify-email
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 * Body: {}
 */
usersRouter.post(
  "/resend-verify-email",
  accessTokenValidator,
  wrapRequestHandler(resendVerifyEmailController)
);

/**
 * Description: forgot password
 * Route: [POST] /users/resend-verify-email
 * Header: { Authorization: Bearer <access_token> }
 * Body: {email: string}
 */
usersRouter.post(
  "/forgot-password",
  forgotPassWordValidator,
  wrapRequestHandler(forgotPassWordController)
);

/**
 * Description: verify link in email forgot password
 * Route: [POST] /users/verify-fotgot-password
 * Header: { Authorization: Bearer <access_token> }
 * Body: {}
 */
usersRouter.post(
  "/verify-fotgot-password",
  verifyForgotPasswordTokenValidator,
  wrapRequestHandler(verifyForgotPasswordController)
);

export default usersRouter;
