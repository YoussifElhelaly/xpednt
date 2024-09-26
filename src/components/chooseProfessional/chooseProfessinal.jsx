import ProfessionalCard from "./chooseProfessionalCard/chooseProfessionalCard";
import dentalImg from '../../assets/media/piin3kkz/home_dental_gate_0149c2.jpg'
import hygienistImg from '../../assets/media/rbzlb2ie/professions-ess-hyginist_all-professions-chart-image_02bf597.jpg'
import surgicalImg from '../../assets/media/wbbppdyt/2023-11-medical-gateway20c1.jpg'
import studentImg from '../../assets/media/5cfh3jaq/professions-ess-student_all-professions-chart-image_02bb4b4.jpg'
import othersImg from '../../assets/media/bcievr5z/2023-11-others-gateway1989.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCreative } from "swiper/modules";
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