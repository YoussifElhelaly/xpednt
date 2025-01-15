import Header from "../../components/Header/Header";
import headerImg from '../../assets/img/004.webp'
import oprfdcgt from '../../assets/img/004.webp'
import v0vbfil2m from '../../assets/img/004.webp'
import zye5rrj from '../../assets/img/004.webp'
import oa3ixhy3 from '../../assets/img/004.webp'

import video from '../../assets/loupe.mp4'
import getLight from "../../features/getLights";
import { useEffect, useState } from "react";
export default function LoupesLights() {


    const [data, setData]= useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            setData(await getLight())
        }
        fetchData()
    },[])

    return (
        <>
            <Header headerImg={headerImg}>
            <div>
                <h1 class="header__headline col--xl-7">
                    Loupes &amp; Lights
                </h1>
                <div class="header__text col--md-7 col--lg-6">
                    <p>Experience unmatched clarity and precision with our premium loupes and lights, meticulously crafted to enhance your vision and focus during procedures. Combining ergonomic design with advanced technology, our solutions ensure comfort, durability, and optimal performance for dental and medical professionals alike. Illuminate your expertise with Xpedent.</p>
                </div>
            </div>
            </Header>
            <section id="module1" class="section image-text ">

                <div class="grid-wrap">
                    <div class="grid-row grid-row--align-center grid-row--reverse">
                        <header class="col col--sm-6 col--md-5 section__header">

                                <h2 class="h1">Loupes</h2>

                                <div class="rich-text">
                                <p>Xpedent loupes are designed to deliver precision, clarity, and comfort for dental and medical professionals. Crafted with advanced optics, they provide crystal-clear magnification to enhance accuracy and reduce eye strain. Our ergonomic designs prioritise posture and minimise fatigue, ensuring all-day comfort during procedures. Lightweight yet durable, Xpedent loupes are customisable to fit your unique needs, making them the perfect tool for enhancing performance and protecting your health. Experience innovation and reliability with Xpedent loupes, where quality meets functionality.</p>
                                </div>

                                <a class="btn btn--link " href="/loupes-lights/loupes/" title="Explore our loupes" rel="noreferrer">
                                <span>Explore our loupes</span>
                                </a>
                        </header>
                        <div class="col col--sm-6 col--md-7">
                            <video className="videoLight" src={video} autoPlay muted loop></video>
                        </div>
                        {/* <div class="col col--sm-6 col--md-7">
                                <img class="lazy margin-auto lazy--loaded" src={tmrnt24s} alt="Dental loupes for dentists and hygienists Galilean HD in Icon frame v2, raw colour"/>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* <section id="module2" class="section image-text ">

                <div class="grid-wrap">
                    <div class="grid-row grid-row--align-center">
                        <header class="col col--sm-6 col--md-5 section__header">

                                <h2 class="h1">Lights</h2>

                                <div class="rich-text">
                                    <p>To get the most out of your loupes, supplement your clinic lighting with bright, white shadow-free light, illuminating your field of view precisely.</p>
                                </div>

                <a class="btn btn--link " href="/loupes-lights/lights/" title="Explore our Lights" rel="noreferrer">
                <span>Explore our Lights</span>
                </a>
                        </header>
                        <div class="col col--sm-6 col--md-7">
                                <img class="lazy margin-auto lazy--loaded" src={oprfdcgt} alt="Loupes light dental Essential Nano mounted to dental loupes"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="module3" class="section image-text section--grey-extra-light-dusted">

                <div class="grid-wrap">
                    <div class="grid-row grid-row--align-center grid-row--reverse">
                        <header class="col col--sm-6 col--md-5 section__header">

                                <h2 class="h1">Magnification</h2>

                                <div class="rich-text">
                                    <p>Xpedent offers you a wide range of magnifications available in five loupe systems: <span class="NormalTextRun SCXW11781812 BCX0">Galilean Essential, Galilean HD, Kepler Kompakt</span><span class="NormalTextRun SCXW11781812 BCX0">, Kepler Reflekt</span><span class="NormalTextRun SCXW11781812 BCX0"> and Kepler Advanced.</span>&nbsp;</p>
                                </div>

                <a class="btn btn--link " href="/loupes-lights/magnifications/" title="Explore our Magnifications" rel="noreferrer">
                <span>Explore our Magnifications</span>
                </a>
                        </header>
                        <div class="col col--sm-6 col--md-7">
                                <img class="lazy margin-auto lazy--loaded" src={v0vbfil2m} alt="Loupes+Light Page Mag Image"/>
                        </div>
                    </div>
                </div>
            </section> */}
            {
                    data.map((ergo , index)=>{
                       
                        return(
                            <>
                            {
                                index % 2 == 0 ?
                                <div class="grid-wrap">
                                <div class="grid-row product-features__item">
                                    <div class="col col--no-pad product-features__image-wrap col--md-8">
                                        <div class="product-features__image">
                                            <img src={ergo.image} alt="Working distance"/>


                                        </div>
                                    </div>
                                    <div class="col col--md-4 product-features__content">
                                            <div>
                                                <h3 data-count="1">{ergo.title}</h3>
                                                <p>{ergo.description}</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                                
                                :
                                <div class="grid-wrap">
                                <div class="grid-row product-features__item product-features__item--right">
                                    <div class="col col--no-pad product-features__image-wrap col col--md-8 product-features__image-wrap--right">
                                        <div class="product-features__image product-features__image--right">
                                            <img src={ergo.image} alt="Declination angle"/>


                                        </div>
                                    </div>
                                    <div class="col col--md-4 product-features__content product-features__content--right">
                                            <div>
                                                <h3 data-count="2">{ergo.title}</h3>
                                                <p>{ergo.description} </p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            }
                            </>

                        )
                    },[])
                }
       
        </>
    )   
}