import { catchApiKey } from "../utils/catchApiKey";

const API_KEY = catchApiKey();
const serieId = 1396; // Breaking Bad

// Função para buscar o base URL das imagens
async function fetchBaseUrl(): Promise<string> {
  const res = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Erro ao buscar configuração de imagens");
  const data = await res.json();
  return data.images.secure_base_url;
}

// Função principal para coletar todos os personagens (otimizada)
export async function fetchAllCast(): Promise<any[]> {
  const base_url = await fetchBaseUrl();

  // endpoint agregado -> retorna todos os personagens da série inteira
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${serieId}/aggregate_credits?api_key=${API_KEY}&language=pt-BR`
  );
  if (!res.ok) throw new Error("Erro ao buscar elenco agregado");
  const data = await res.json();

  // Mapeia os personagens
  return data.cast.map((char: any) => ({
    id: char.id,
    name: char.name, // nome do ator
    character: char.roles.map((r: any) => r.character).join(", "), // pode ter vários papéis
    imageUrl: char.profile_path ? `${base_url}original${char.profile_path}` : null,
  }));
}
