import { CastFavorite } from "../../components/CastFavorite";
import { CharacterFavorite } from "../../components/CharacterFavorite";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import { SubHeading } from "../../components/SubHeading";
import { useAllCastContext } from "../../hooks/useAllCastContext";
import { useAllCharactersContext } from "../../hooks/useAllCharactersContext";
import MainTemplate from "../../templates/MainTemplate";

export default function Favorite() {

    const { favoritesCast } = useAllCastContext();
    const { favoritesCharacter } = useAllCharactersContext();

    const hasFavorites = favoritesCast.length > 0 || favoritesCharacter.length > 0;

    return(
        <>
        <MainTemplate>
            <Container>

                {hasFavorites ? (
                <>
                    <CastFavorite />
                    <CharacterFavorite />
                 </>
                ) : (
                    <>
                        <Heading>Meus Favoritos</Heading>
                        <SubHeading>Aqui você encontra os personagens, elenco que você mais curtiu.</SubHeading>
                    </>
                )}
            </Container>
        </MainTemplate>
    </>
    );
}