export interface FidjApiResetPasswordRequest {
    token: string;
    password: string;
}

export interface FidjApiVerifyEmailRequest {
    token: string;
}
