import { Outlet } from "react-router";
import Container from "../../components/Container";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

export default function MainTemplate() {
  return (
    <>
        <Container>
            <Header />
        </Container>
        
        <Outlet />
        
        <Footer />
    </>
  );
}
