import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

import Screen3Item1 from "./Screen3Item1.jsx";
import Screen3Item2 from "./Screen3Item2.jsx";
import Screen3Item3 from "./Screen3Item3.jsx";
import Screen3Item4 from "./Screen3Item4.jsx";
import Screen3Item5 from "./Screen3Item5.jsx";
import Screen3Item6 from "./Screen3Item6.jsx";
import { useEffect, useState } from 'react';

export default function Screen3Slider(){
    const [visibleElements, setVisibleElements] = useState(4.3)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        setSlides()
    }, [windowWidth])

    function setSlides() {
        if (windowWidth >= 1920) {
            setVisibleElements(4.15)
        }
        if (windowWidth < 1920) {
            setVisibleElements(3.5)
            if (windowWidth < 1680) {
                setVisibleElements(3)
                if (windowWidth < 1440) {
                    setVisibleElements(2.6)
                    if (windowWidth < 980) {
                        setVisibleElements(1.6)
                        if (windowWidth < 768) {
                            setVisibleElements(1.35)
                            if (windowWidth < 640) {
                                setVisibleElements(1)
                            }
                        }
                    }
                }
            }
        }
    }

    return <>
    <Swiper
        slidesPerView={ visibleElements }
        spaceBetween={30}
        navigation={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
        <SwiperSlide> <Screen3Item1 /> </SwiperSlide>
        <SwiperSlide> <Screen3Item2 /> </SwiperSlide>
        <SwiperSlide> <Screen3Item3 /> </SwiperSlide>
        <SwiperSlide> <Screen3Item4 /> </SwiperSlide>
        <SwiperSlide> <Screen3Item5 /> </SwiperSlide>
        <SwiperSlide> <Screen3Item6 /> </SwiperSlide>

    </Swiper>
    </>
}