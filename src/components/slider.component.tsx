import {Swiper, SwiperSlide, SwiperProps, SwiperSlideProps, useSwiper, useSwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation, SwiperOptions, EffectCube} from 'swiper'
import "swiper/css";
import "swiper/css/pagination";

type props = SwiperOptions & {
    className? : string
    children? : any[]
}
export default function Slider({className = '', children, ...params} : props){
    return(
        <Swiper className={` ${className}`} modules={[Autoplay, Pagination, Navigation]} {...params} >
            { children?.map((child, index) => <SwiperSlide key={index} > {child} </SwiperSlide> ) }
        </Swiper>
    )
}