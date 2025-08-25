import { AllEpisodes } from "../../components/AllEpisodes";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export default function Episode() {
    return(
        <>
            <MainTemplate>
                <Container>
                    <Heading>Episódios</Heading>
                    <AllEpisodes />
                </Container>
            </MainTemplate>
        </>
    );
}