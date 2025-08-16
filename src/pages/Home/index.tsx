import { CardBestEpisodes } from "../../components/CardBestEpisodes";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

import styles from './styles.module.css';

export default function Home() {
    return(
        <>
            <MainTemplate>
                <Container>
                    <Heading>Melhores Episódios</Heading>
                    <div className={styles.cardGrid}>
                        <CardBestEpisodes title="Ozymandias" season={5} episode={14} description="Um dos episódios mais tensos da série, com reviravoltas devastadoras." image="https://s2-oglobo.glbimg.com/grKWT060igw7u0kBntY9yAyt9Co=/0x0:1909x1079/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/t/P/iovFp0QCK9FHjMN2B25w/ozy.jpg" />

                        <CardBestEpisodes title="Ozymandias" season={5} episode={14} description="Um dos episódios mais tensos da série, com reviravoltas devastadoras." image="https://s2-oglobo.glbimg.com/grKWT060igw7u0kBntY9yAyt9Co=/0x0:1909x1079/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/t/P/iovFp0QCK9FHjMN2B25w/ozy.jpg" />

                         <CardBestEpisodes title="Ozymandias" season={5} episode={14} description="Um dos episódios mais tensos da série, com reviravoltas devastadoras." image="https://s2-oglobo.glbimg.com/grKWT060igw7u0kBntY9yAyt9Co=/0x0:1909x1079/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/t/P/iovFp0QCK9FHjMN2B25w/ozy.jpg" />
                    </div>
                </Container>
            </MainTemplate>
        </>
    );
}