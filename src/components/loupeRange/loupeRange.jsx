import LoupeRangeCard from "./loupeRangeCard/loupeRangeCard";
import og2futik from '../../assets/img/x003.png'
import qjgh03av from '../../assets/img/004.webp'

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
            <a class="btn btn--link  _jc_modal_form" href="#contact-form-popup" title="get in touch" rel="noreferrer">
            <span>get in touch</span>
            </a>
            </div>
        </section>
    )
}