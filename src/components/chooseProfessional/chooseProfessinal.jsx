import ProfessionalCard from "./chooseProfessionalCard/chooseProfessionalCard";
import dentalImg from '../../assets/img/IMG_1377-2.jpg'
import surgicalImg from '../../assets/img/IMG_0435.JPG'
import studentImg from '../../assets/img/IMG_1385-1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';
export default function Professional() {
    return(
        <section id="module2" class="section gateway section--dark">
            <div class="grid-wrap">
                <header class="col col--md-12 section__header">
                    <h2 class="h1">Choose profession</h2>
                </header>
                <div class="grid-row">
                    <div class="col col--md-12">
                        {/* <div class="gateway__links">
                            </div> */}
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                            <ProfessionalCard img={studentImg} title={"Student"}/>

                </SwiperSlide>
                <SwiperSlide>
                            <ProfessionalCard img={surgicalImg} title={"Surgical"}/>
                </SwiperSlide>
                <SwiperSlide>
                            <ProfessionalCard img={dentalImg} title={"Dental"}/>

                </SwiperSlide>
            </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}