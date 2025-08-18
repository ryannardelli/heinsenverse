/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string;
  // outras variáveis de ambiente que você usar
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
