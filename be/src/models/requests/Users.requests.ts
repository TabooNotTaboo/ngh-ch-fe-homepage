import { JwtPayload } from "jsonwebtoken";
import { TokenType } from "~/constants/enum";

export interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  date_of_birth: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface EmailVerifyRequestBody {
  email_verify_token: string;
}

export interface TokenPayload extends JwtPayload {
  user_id: string;
  token_type: TokenType;
}

export interface LogoutRequestBody {
  refresh_token: string;
}

export interface ForgotPassWordRequestBody {
  email: string;
}

export interface VerifyForgotPassWordTokenRequestBody {
  forgot_password_token: string;
}
