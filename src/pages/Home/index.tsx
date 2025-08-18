import EpisodesList from "../../components/BestEpisodesList";
import Container from "../../components/Container";
import { ContainerBackground } from "../../components/ContainerBackground";
import Heading from "../../components/Heading";
import { Hero } from "../../components/Hero";
import MainTemplate from "../../templates/MainTemplate";

export default function Home() {
    return(
        <>
            <MainTemplate>
                <Container>
                    <ContainerBackground>
                        <Hero />
                    </ContainerBackground>
                    
                    <Heading>Melhores Episódios</Heading>           
                    <EpisodesList />
                </Container>
            </MainTemplate>
        </>
    );
}