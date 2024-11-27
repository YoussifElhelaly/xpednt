import LightImg from '../../../assets/img/x001.webp'


export default function LightRangeCard ({img , title}) {
    return(
        <div className="col col--xs-6 col--lg-3" data-filter-value="Dental Hygienists,Periodontist,Dental Student,Orthodontist,Cosmetic Dentist">

        <a href="/loupes-lights/lights/total-pure-total-intense/" className="filter__item">
            <div className="filter__item__image lazy lazy--bg lazy--loaded" style={{backgroundImage:`url(${LightImg})` , backgroundSize : "contain"}}></div>

            <div className="filter__item__text">
                <span className="filter__item__title">Dragon Fly</span>
            </div>
        </a>
    </div>

    )
}