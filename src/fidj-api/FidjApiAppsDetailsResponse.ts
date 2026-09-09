import {FidjApiAppUrl} from './FidjApiAppsCreateRequest';

// GET /apps/:app_id/details (owner only)
export interface FidjApiAppsDetailsResponse {
    app: {
        id: string;
        owner: string;
        title: string;
        description?: string;
        deletionPending?: boolean;
        rolesByDefault: {type: string; description?: string}[];
        rolesAvailable: {type: string; description?: string}[];
        homes?: FidjApiAppUrl[];
        githubs?: FidjApiAppUrl[];
        endpoints?: FidjApiAppUrl[];
        urls?: FidjApiAppUrl[];
        tti_hours?: number;
        salt?: string;
        configurationAsJSON?: string;
    };
}
