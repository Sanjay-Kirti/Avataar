import React from 'react'
import '../Styles/Caraousel.css';
import { Swiper, SwiperSlide} from "swiper/react";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

import slide_image_1 from "../assets/books.png";
import slide_image_2 from "../assets/clothing.jpg";
import slide_image_3 from "../assets/electronics.png";
import slide_image_4 from "../assets/Furniture.jpg";
import slide_image_5 from "../assets/Gaming.png";
import slide_image_6 from "../assets/Movie.png";

const Caraousel = () => {
  return (
    <div className='container'>
    <h1 className='heading' > Featured Product</h1>
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    }}
    Pagination={{el:'.swiper-pagination', clickable: true}}
    Navigation={{
      nextEL:'.swiper-button-next',
      prevEL: '.swiper-button-prev',
      clickable: true,
    }}
    modules={[EffectCoverflow, Pagination, Navigation]}

    className='swiper_container'
    >
      <SwiperSlide>
        <img src={slide_image_1} alt='slide_image' width={250} height={300} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_2} alt='slide_image'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_3} alt='slide_image'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_4} alt='slide_image'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_5} alt='slide_image'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_6} alt='slide_image'/>
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper_button-prev slider-arrow">
         <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper_button-next slider-arrow">
         <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
        </div>          
    </Swiper>

  </div>
  )
}

export default Caraousel
