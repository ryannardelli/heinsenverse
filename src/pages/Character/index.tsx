import { CharacterCard } from "../../components/CharacterCard";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export default function Character() {
    return(
        <>
        <MainTemplate>
            <Container>
                <Heading>Personagens</Heading>
                <CharacterCard />
            </Container>
        </MainTemplate>
    </>
    );
}