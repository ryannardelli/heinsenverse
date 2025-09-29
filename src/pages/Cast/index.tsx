import { CastCard } from "../../components/CastCard";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

export default function Cast() {
    return(
        <>
            <Container>
                <Heading>Elenco</Heading>
                <CastCard />
            </Container>
        </>
    );
}