import { BestCharactersList } from "../../components/BestCharactersList";
import BestEpisodesList from "../../components/BestEpisodesList";
import { ContainerBackground } from "../../components/ContainerBackground";
import Heading from "../../components/Heading";
import { Hero } from "../../components/Hero";
import MainTemplate from "../../templates/MainTemplate";

export default function Home() {
    return(
        <>
            <MainTemplate>
                    <ContainerBackground>
                        <Hero />
                    </ContainerBackground>
                    
                    <Heading>Episódios mais bem votados</Heading>
                    <BestEpisodesList />

                    <Heading>Elenco aclamado pelo público</Heading>
                    <BestCharactersList />
            </MainTemplate>
        </>
    );
}