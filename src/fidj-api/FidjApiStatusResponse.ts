// GET /status
export interface FidjApiStatusResponse {
    version?: string; // canonical (mirrors package.json)
    env?: string;
    built?: string; // bpInfo.version
    'version-web'?: string;
    'version-api'?: string;
    urls?: string | Record<string, string>;
    'principal-app'?: string;
    'test-apps'?: string | string[];
    docs?: string;
    isOk?: boolean;
}
