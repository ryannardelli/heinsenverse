import Container from "../../components/Container";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export default function Home() {
    return(
        <>
            <MainTemplate>
                <Container>
                    <Heading>Olá, Mundo!</Heading>
                </Container>
            </MainTemplate>
        </>
    );
}