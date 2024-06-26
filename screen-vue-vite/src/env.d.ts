declare interface ImportMetaEnv {
    readonly VITE_APP_TITLE:string;
    readonly VITE_BASE_URL:string;
    readonly VITE_BASE_API:string;
    readonly VITE_SERVER_PORT:string;
    readonly VITE_USE_MOCK:string;
    readonly VITE_BASE_WS:string
}

declare interface ImportMeta {
    readonly env: ImportMetaEnv;
}
