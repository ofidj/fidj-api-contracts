// PUT /me or POST /me
export interface FidjApiUsersMeUpdateRequest {
    password?: string;
    currentPassword?: string;
    name?: string;
}
