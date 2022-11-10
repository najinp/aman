import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const MAINV = [
    { id: 1, content: "말을 할까말까", description: "고민중", link: "/" },
    { id: 2, content: "말을 할까말까", description: "고민중", link: "/" },
    { id: 3, content: "말을 할까말까", description: "고민중", link: "/" },
]

const MainVisual = () => {
    const [slideNum, setSlideNum] = useState(0);
    const SLIDE = useRef(null);
    return (
        <section className="MainVisual">
            <div className="container">
                {/* <Swiper
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={'mainvisual_slide'}
                >
                    {
                        MAINV.map((img, idx) => {
                            return (
                                <SwiperSlide><figure key={img.id} className={slideNum === idx ? 'on' : ''}>
                                    <img src={process.env.PUBLIC_URL + "/assets/images/Amangirimain0" + img.id + ".jpg"} alt="" />
                                </figure></SwiperSlide>
                            )
                        })
                    }
                </Swiper> */}
                <Slider
                    centerMode={true}
                    centerPadding={'300px'}
                    afterChange={index => setSlideNum(index)}
                    arrows={false}
                    ref={SLIDE}
                    className={'mainvisual_slide'}
                >
                    {
                        MAINV.map((img, idx) => {
                            return (
                                <figure key={img.id} className={slideNum === idx ? 'on' : ''}>
                                    <img src={process.env.PUBLIC_URL + "/assets/images/Amangirimain0" + img.id + ".jpg"} alt="" />
                                </figure>
                            )
                        })
                    }
                </Slider>
                <div className="box">
                    <div className="num">
                        0{slideNum + 1} <span>/ 0{MAINV.length}</span>
                    </div>
                </div>
                <div className="arrows">
                    <i className='xi-angle-left' onClick={() => MAINV.current.slickPrev()}></i>
                    <i className='xi-angle-right' onClick={() => MAINV.current.slickNext()}></i>
                </div>
            </div>
        </section>
    )
}

export default MainVisual;