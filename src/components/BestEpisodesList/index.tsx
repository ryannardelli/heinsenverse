import { useContext, useEffect } from "react";
import { EpisodesContext } from "../../contexts/BestEpisodesContext";
import { CardBestEpisodes } from "../CardBestEpisodes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from './styles.module.css';
import { SwiperComponent } from "../SwiperComponent";
import { SwiperSlideComponent } from "../SwiperSliderComponent";

export default function EpisodesList() {
  const context = useContext(EpisodesContext);

  useEffect(() => {
    console.log(context);
  }, [context]);

  if (!context) return <div>Contexto não disponível!</div>;

  const { episodes, loading, error } = context;

  if (loading) return <div>Carregando episódios...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <div className={styles.container}>
        <Swiper
          modules={[Pagination]}
          grabCursor={true}
          initialSlide={2}
          centeredSlides={true}
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            430: { spaceBetween: 50 },
            580: { spaceBetween: 70 },
            650: { spaceBetween: 30 },
          }}
        >
          {episodes.map((episode) => (
            <SwiperSlide
              className={styles.swiperSlide}
              key={episode.id}
              style={{
                backgroundImage: `url(${episode.imageUrl ?? "/fallback.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardBestEpisodes
                title={episode.name}
                description={episode.overview}
                season={episode.season_number === 0 ? 1 : episode.season_number}
                episode={episode.episode_number}
                image={episode.imageUrl ?? "/fallback.jpg"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
