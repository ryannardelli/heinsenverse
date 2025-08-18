import { catchApiKey } from "../utils/catchApiKey"

const api_key = catchApiKey();

type ImageType = "poster_sizes" | "backdrop_sizes" | "logo_sizes" | "profile_sizes" | "still_sizes";

export async function fetchConfiguration() {
    const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`);
    const data = await response.json();
    return data;
}

export async function fetchBaseUrl() {
    const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`);
    const data = await response.json();
    return data.images.base_url;
}

export async function fetchSize(type: ImageType) {
    const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`);
    const data = await response.json();
    return data.images[type];
}