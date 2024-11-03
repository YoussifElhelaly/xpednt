import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import dentalImg from '../../assets/img/IMG_1377-2.jpg'
import surgicalImg from '../../assets/img/IMG_0435.JPG'
import studentImg from '../../assets/img/IMG_1385-1.jpg'
import './TestimonialsSwiper.css'
export default function TestmonilsSlider() {
    return (
        <section id="module2" class="section gateway section--dark">
            <div class="grid-wrap">
                <header class="col col--md-12 section__header">
                    <h2 class="h1">Testimonials</h2>
                </header>
                   <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                     breakpoints={{
                        140: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination , Navigation]}
                    className="TestimonialsSwiper"
                >
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col case" data-filter-value="Dental-prof, Loupes-prod, Lights-prod, Denmark">
                                <div class="case__link">
                                    <div class="case__image lazy lazy--bg lazy--placeholder lazy--loaded" style={{backgroundImage:`url(${dentalImg})` , backgroundSize:"cover"}}></div>
                                    <div class="case__content">
                                        <small class="case__subtitle">Dental</small>
                                        <p class="case__headline h3">
                                            I can feel a clear relief<br/>in my neck muscles
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
               
                </Swiper>
            </div>
        </section>
    )
}