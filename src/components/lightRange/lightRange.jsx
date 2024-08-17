import LightRangeCard from "./lightRangeCard/lightRangeCard";

export default function LightRange() {
    return(
        <section id="module1" className="section section--dark ta-center ">
        <div className="grid-wrap">
            <div className="grid-row grid-row--center">
            <div className="col col--sm-9 col--lg-7 col--xl-5">
                <h2 className="h1 product-filter__headline">Light range</h2>
            </div>
            </div>

            <div id="productFilterContainer" className="grid-row filter__item-list">
                <LightRangeCard />
            </div>
            <a className="btn btn--link  _jc_modal_form" href="#contact-form-popup" title="Find your dealer" rel="noreferrer">
                <span>Find your dealer</span>
            </a>
        </div>
    </section>
    ) 
}