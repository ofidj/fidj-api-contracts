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
    // Which screen collects a credential: 'fidj-ui' when the provider hands the
    // sign-in to the front end WEB_PUBLIC_UI_URL names, 'provider-page' when it
    // serves its own script-free page. Reported because the switch behind it
    // fails closed and silently, and an operator who cannot see which one is
    // serving is left guessing whether their configuration took.
    signin?: 'fidj-ui' | 'provider-page';
    // Public ids of the apps whose requests are being refused right now. Ids
    // only, and no counts: this endpoint takes no credential, so a measure of
    // the pressure would tell whoever is causing it how well it is working.
    'forced-apps'?: string[];
    isOk?: boolean;
}
