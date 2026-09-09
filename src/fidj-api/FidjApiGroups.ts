export interface FidjApiGroup {
    id: string;
    name: string;
    roles: string[];
    members: string[];
    version: number;
}
export interface FidjApiGroupsResponse {
    groups: FidjApiGroup[];
}
export interface FidjApiGroupWriteRequest {
    name: string;
    roles: string[];
    members: string[];
    version?: number;
}
