import React, { useState } from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'

const Residencies = () => {
    const [swiper, setSwiper] = useState(null)

    return (
        <>
            <section className="r-wrapper">
                <div className="padding innerWidth r-container">
                    <div className="r-head flexCenter" style={{justifyContent: 'space-between'}}>
                        <div className="flexColStart">
                            <span className='orangeText'>Best Choice</span>
                            <span className='primaryText'>Popular Residencies</span>
                        </div>
                        <div className="flexCenter r-buttons">
                            <button onClick={() => swiper?.slidePrev()}>&lt;</button>
                            <button onClick={() => swiper?.slideNext()}>&gt;</button>
                        </div>
                    </div>

                    <Swiper 
                        onSwiper={setSwiper}
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 1
                            },
                            600: {
                                slidesPerView: 2
                            },
                            750: {
                                slidesPerView: 3
                            },
                            1100: {
                                slidesPerView: 4
                            }
                        }}>
                            
                        {
                            data.map((card, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div className="r-card">
                                            <img src={card.image} alt={card.name} />
                                            <span className="secondaryText r-price">
                                                <span style={{ color: "orange" }}>Rs </span>
                                                <span>{card.price}</span><br />
                                            </span>
                                            <span className="primaryText">
                                                {card.name}
                                            </span><br />
                                            <span className="secondaryText">
                                                {card.detail}
                                            </span><br />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Residencies