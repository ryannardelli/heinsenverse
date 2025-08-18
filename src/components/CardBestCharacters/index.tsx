type BestCharacters = {
    name: string;
    character: string;
    popularity: number;
}

export function CardBestCharacters({ name, character, popularity }: BestCharacters) {
    return(
         <>
            <div className="title">
                <h1>{name}</h1>
            </div>

            <div className="content">
                <div className="score">{popularity}</div>
                <div className="text">
                    <h2>{name}</h2>
                    <p>{character}</p>
                </div>
            </div>
        </>
    );
}