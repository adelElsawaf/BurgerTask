'use client'
import Image from 'next/image';
import g4_burger_image from '../../assets/group_4/Burger Image.png'
import { Alfa_Slab_One } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import styles from './slider_section.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Alfa_Slab_One_Font = Alfa_Slab_One({ subsets: ['latin'], weight: ['400'] })
const Montserrat_Font = Montserrat({ subsets: ['latin'], weight: ['400'] })
const Bebas_Neue_Font = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const SliderSection = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    }

    return (
        <Swiper
            slidesPerView={1}

            onSlideChange={handleSlideChange}
        >
            {[1, 2, 3].map((index) => (
                <SwiperSlide key={index} className='container-fluid d-flex justify-content-center'>
                    <div className=" shadow d-flex justify-content-center ">
                        <div className="row shadow mb-5 p-4 w-75">
                            <div className="col-12 col-lg-6 d-flex  mt-3  align-items-start flex-column">
                                <h1 className={`${Bebas_Neue_Font.className} ${styles.line_height_none}`}>DISCOVER</h1>
                                <h1 className={`text-uppercase  display-5 ${Alfa_Slab_One_Font.className}`}>
                                    UPCOMING EVENTS
                                </h1>
                                <div className="mt-4">
                                    <h4 className={`${Montserrat_Font.className} ${styles.line_height_lg}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                        accumsan lacus vel facilisis.
                                    </h4>
                                </div>
                                <div className="d-flex h-100">
                                    <div className='mt-auto'>
                                        {[...Array(3).keys()].map((index) => (
                                            <FontAwesomeIcon
                                                key={index}
                                                icon={faCircle}
                                                className={`ms-2 ${index === activeIndex ? 'text-warning' : `${styles.light_grey}`}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3 col-lg-6 ">
                                <Image src={g4_burger_image} alt="Event Image" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper >

    );
};


export default SliderSection;