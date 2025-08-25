import { CastCard } from "../../components/CastCard";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export default function Cast() {
    return(
        <>
        <MainTemplate>
            <Container>
                <Heading>Elenco</Heading>
                <CastCard />
            </Container>
        </MainTemplate>
    </>
    );
}