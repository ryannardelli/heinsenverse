import { BestCharactersList } from "../../components/BestCharactersList";
import BestEpisodesList from "../../components/BestEpisodesList";
import { ContainerBackground } from "../../components/ContainerBackground";
import Heading from "../../components/Heading";
import { Hero } from "../../components/Hero";

export default function Home() {
    return(
        <>
            <ContainerBackground>
                <Hero />
            </ContainerBackground>
            
            <Heading>Episódios mais bem votados</Heading>
            <BestEpisodesList />

            <Heading>Elenco aclamado pelo público</Heading>
            <BestCharactersList />
        </>
    );
}