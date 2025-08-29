export async function fetchAllCharacters(): Promise<any[]> {
    try {
        // api da tv maze / 169 é o id de breaking bad
        const res = await fetch('https://api.tvmaze.com/shows/169/cast');

        if(!res.ok) throw new Error("Aconteceu um erro inesperado ao fazer sua requisição.")
        
        return res.json();
    } catch(e) {
        console.log("Erro ao acessar os personagens.", e)
    }
}