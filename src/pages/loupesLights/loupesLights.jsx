import Header from "../../components/Header/Header";
import headerImg from '../../assets/img/004.png'
import oprfdcgt from '../../assets/img/004.png'
import v0vbfil2m from '../../assets/img/004.png'
import zye5rrj from '../../assets/img/004.png'
import oa3ixhy3 from '../../assets/img/004.png'

import video from '../../assets/loupe.mp4'
export default function LoupesLights() {
    return (
        <>
            <Header headerImg={headerImg}>
            <div>
                <h1 class="header__headline col--xl-7">
                    Loupes &amp; Lights
                </h1>
                <div class="header__text col--md-7 col--lg-6">
                    <p>With five design awards, we are proud to offer the most customisable loupes on the market. They will fit any prescription when needed. You will experience incredible detail with maximum sharpness to gain the precision you are looking for, while working optimal ergonomically. Without compromises!</p>
                </div>
            </div>
            </Header>
            <section id="module1" class="section image-text ">

                <div class="grid-wrap">
                    <div class="grid-row grid-row--align-center grid-row--reverse">
                        <header class="col col--sm-6 col--md-5 section__header">

                                <h2 class="h1">Loupes</h2>

                                <div class="rich-text">
                                    <p>Explore our finest, custom-crafted Danish loupes. ExamVision TTL loupes use the highest quality components available, handcrafted to your exact specifications. From 2.3x to 6.4x magnifications available.</p>
                                </div>

                                <a class="btn btn--link " href="/loupes-lights/loupes/" title="Explore our loupes" rel="noreferrer">
                                <span>Explore our loupes</span>
                                </a>
                        </header>
                        <div class="col col--sm-6 col--md-7">
                            <video src={video} autoPlay muted loop></video>
                        </div>
                        {/* <div class="col col--sm-6 col--md-7">
                                <img class="lazy margin-auto lazy--loaded" src={tmrnt24s} alt="Dental loupes for dentists and hygienists Galilean HD in Icon frame v2, raw colour"/>
                        </div> */}
                    </div>
                </div>
            </section>
            <section id="module2" class="section image-text ">

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
                                    <p>ExamVision offers you a wide range of magnifications available in five loupe systems: <span class="NormalTextRun SCXW11781812 BCX0">Galilean Essential, Galilean HD, Kepler Kompakt</span><span class="NormalTextRun SCXW11781812 BCX0">, Kepler Reflekt</span><span class="NormalTextRun SCXW11781812 BCX0"> and Kepler Advanced.</span>&nbsp;</p>
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
            </section>
            <section id="module4" class="section image-text ">

                <div class="grid-wrap">
                    <div class="grid-row grid-row--align-center">
                        <header class="col col--sm-6 col--md-5 section__header">

                                <h2 class="h1">Optics &amp; Safety</h2>

                                <div class="rich-text">
                                    <p>ExamVision top quality optics - and specialist advice. ExamVision specialises in optics and optical solutions. We recognise the needs of the individual user and our aim is to improve your vision and ergonomic posture by finding the perfect solution for you.</p>
                                </div>

                <a class="btn btn--link " href="/loupes-lights/optics-safety/" title="Explore ExamVision Optics &amp; safety" rel="noreferrer">
                <span>Explore ExamVision Optics &amp; safety</span>
                </a>
                        </header>
                        <div class="col col--sm-6 col--md-7">
                                <img class="lazy margin-auto lazy--loaded" src={zye5rrj} alt="Smiling dentist wearing his loupes glasses Galilean HD in Icon frame v2 in black colour"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="module5" class="section image-text section--grey-extra-light-dusted">

                <div class="grid-wrap">
                    <div class="grid-row grid-row--align-center grid-row--reverse">
                        <header class="col col--sm-6 col--md-5 section__header">

                                <h2 class="h1">Frames</h2>

                                <div class="rich-text">
                                    <p>ExamVision frames are lightweight, made from high-end materials and most important, they offer an exceptional balance, are durable, stable and they won't deform.</p>
                                </div>

                <a class="btn btn--link " href="/loupes-lights/frames/" title="Explore our Frames" rel="noreferrer">
                <span>Explore our Frames</span>
                </a>
                        </header>
                        <div class="col col--sm-6 col--md-7">
                                <img class="lazy margin-auto lazy--loaded" src={oa3ixhy3} alt="FRAME MIXED 01"/>
                        </div>
                    </div>
                </div>
            </section>
       
        </>
    )   
}