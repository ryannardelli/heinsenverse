import styles from './styles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { useBestCharacterContext } from '../../hooks/useBestCharacterContext';
import { CardBestCharacters } from '../CardBestCharacters';

export function BestCharactersList() {
    const context = useBestCharacterContext();

    if (!context) return <div>Contexto não disponível</div>;

    const { characters, loading, error } = context;

    if (loading) return <div>Carregando personagens...</div>;
    if (error) return <div>{error}</div>;

  return (
    <main>
      <div className={styles.container}>
        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          initialSlide={2}
          centeredSlides={true}
          slidesPerView='auto'
          speed={800}
          slideToClickedSlide={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { spaceBetween: 40 },
            430: { spaceBetween: 50 },
            580: { spaceBetween: 70 },
            650: { spaceBetween: 30 },
          }}
        >
          {characters.map(characters => (
            <SwiperSlide
              className={styles.swiperSlide}
              key={characters.id}
              style={{
                backgroundImage: `url(${characters.imageUrl ?? '/fallback.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <CardBestCharacters
                name={characters.name}
                character={characters.character}
                popularity={Number(characters.popularity).toFixed(2)}
                image={characters.imageUrl ?? '/fallback.jpg'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}

