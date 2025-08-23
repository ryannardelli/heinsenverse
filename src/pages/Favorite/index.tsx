import Container from "../../components/Container";
import Heading from "../../components/Heading";
import { SubHeading } from "../../components/SubHeading";
import MainTemplate from "../../templates/MainTemplate";

export default function Favorite() {
    return(
        <>
        <MainTemplate>
            <Container>
                <Heading>Meus Favoritos</Heading>
                <SubHeading>Aqui você encontra os personagens, episódios e momentos de Breaking Bad que você mais curtiu.</SubHeading>
            </Container>
        </MainTemplate>
    </>
    );
}