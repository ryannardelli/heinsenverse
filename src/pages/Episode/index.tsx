import { AllEpisodes } from "../../components/AllEpisodes";
import Container from "../../components/Container";
import FilterHeading from "../../components/FilterHeading";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export default function Episode() {
    return(
        <>
            <MainTemplate>
                <Container>
                    <Heading>Episódios</Heading>
                    <FilterHeading />
                    <AllEpisodes />
                </Container>
            </MainTemplate>
        </>
    );
}