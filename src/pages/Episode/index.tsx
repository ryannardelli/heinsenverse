import { AllEpisodes } from "../../components/AllEpisodes";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

export default function Episode() {
    return(
        <>
                <Container>
                    <Heading>Episódios</Heading>
                    <AllEpisodes />
                </Container>
        </>
    );
}