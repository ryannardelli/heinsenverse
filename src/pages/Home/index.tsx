import EpisodesList from "../../components/BestEpisodesList";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export default function Home() {
    return(
        <>
            <MainTemplate>
                <Container>
                    <Heading>Melhores Episódios</Heading>            
                    <EpisodesList />
                </Container>
            </MainTemplate>
        </>
    );
}