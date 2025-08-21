import { AboutComponent } from "../../components/AboutComponent";
import Container from "../../components/Container";
import MainTemplate from "../../templates/MainTemplate";

export default function About() {
    return(
        <>
        <MainTemplate>
            <Container>
                <AboutComponent />
            </Container>
        </MainTemplate>
    </>
    );
}