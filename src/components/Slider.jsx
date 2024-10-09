
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider({ products, cardSize, paddingX, imageClass }) {
  console.log(products, "CHECKKKKKKKKKKKKKK****");
  
  return (
    <>
      <Swiper
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide per view for small screens
          },
          768: {
            slidesPerView: 2, // 2 slides per view for medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides per view for larger screens
          },
          1280: {
            slidesPerView: 4, // 4 slides per view for extra large screens
          },
        }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <Card 
              product={product} 
              cardSize={cardSize} 
              paddingX={paddingX} 
              imageClass={imageClass} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
