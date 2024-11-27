import ProfessionalCard from "./chooseProfessionalCard/chooseProfessionalCard";
import dentalImg from '../../assets/img/IMG_1377-2.webp'
import surgicalImg from '../../assets/img/IMG_0435.webp'
import studentImg from '../../assets/img/IMG_1385-1.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';
import { useEffect, useState } from "react";
import getProfession from "../../features/getProfession";
export default function Professional() {

    const [data , setData] = useState([])

    useEffect(()=>{
        const fetchData =async ()=>{
            setData(await getProfession())
        }
        fetchData()
    },[])

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
                {
                    data.map((proff)=>{
                        console.log(proff)
                        return (
                            <SwiperSlide>
                                        <ProfessionalCard proff={proff} img={studentImg} title={"Student"}/>

                            </SwiperSlide>
                        )
                    })
                }
          
            </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}