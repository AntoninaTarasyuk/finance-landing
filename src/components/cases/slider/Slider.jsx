import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  GalleryItem1,
  GalleryItem2,
  GalleryItem3,
  GalleryItem4,
  GalleryItem5,
  GalleryItem6,
} from '../gallery/GalleryItems';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function Slider() {
  return (
    <Swiper
      className='mySwiper'
      modules={[Navigation, EffectFade]}
      spaceBetween={20}
      slidesPerView={1}
      speed={800}
      effect='fade'
      navigation
      loop
    >
      <SwiperSlide>
        <GalleryItem1 />
      </SwiperSlide>
      <SwiperSlide>
        <GalleryItem2 />
      </SwiperSlide>
      <SwiperSlide>
        <GalleryItem3 />
      </SwiperSlide>
      <SwiperSlide>
        <GalleryItem4 />
      </SwiperSlide>
      <SwiperSlide>
        <GalleryItem5 />
      </SwiperSlide>
      <SwiperSlide>
        <GalleryItem6 />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
