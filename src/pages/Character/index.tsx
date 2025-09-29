import { CharacterCard } from "../../components/CharacterCard";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

export default function Character() {
    return(
        <>
            <Container>
                <Heading>Personagens</Heading>
                <CharacterCard />
            </Container>
        </>
    );
}