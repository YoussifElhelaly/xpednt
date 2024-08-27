import LoupeRangeCard from "./loupeRangeCard/loupeRangeCard";
import og2futik from '../../assets/media/og2futik/ka_gate_02a977.jpg'
import akakongy from '../../assets/media/akakongy/2024-02-kr-gateway350f.jpg'
import qjgh03av from '../../assets/media/qjgh03av/kk_detail19523.jpg'
import emjh5xtb from '../../assets/media/emjh5xtb/2023-11-gal-page-front-loupe2d74.jpg'
import ccdnjr30 from '../../assets/media/ccdnjr30/demo-ergonomics.jpg'
export default function LoupeRange() {
    return (
        <section id="module1" class="section section--dark ta-center ">
            <div class="grid-wrap">
                <div class="grid-row grid-row--center">
                    <div class="col col--sm-9 col--lg-7 col--xl-5">
                        <h2 class="h1 product-filter__headline">Loupe range</h2>
                    </div>
                </div>
                        <div id="productFilterContainer" class="grid-row filter__item-list">
                            <LoupeRangeCard title={"Airgo"} img={og2futik} mag={["1.2X"]}/>
                            <LoupeRangeCard title={"Galilean"} img={qjgh03av} mag={["1.2X"]}/>
                        </div>
            <a class="btn btn--link  _jc_modal_form" href="#contact-form-popup" title="Find your dealer" rel="noreferrer">
            <span>Find your dealer</span>
            </a>
            </div>
        </section>
    )
}