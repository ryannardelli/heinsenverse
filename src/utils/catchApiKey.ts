export function catchApiKey() {
   const api_key = import.meta.env.VITE_TMDB_API_KEY;
   return api_key;
}