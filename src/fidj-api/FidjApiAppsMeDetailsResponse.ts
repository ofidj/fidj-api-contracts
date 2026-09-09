// GET /apps/:app_id/me/details (JWT auth)
export interface FidjApiAppsMeDetailsResponse {
    groups?: {id: string; name: string; roles: string[]}[];
    roles: {
        type: string;
        description?: string;
    }[];
}
