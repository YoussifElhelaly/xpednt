export default function LoupeRangeCard({title, img , mag}) {
    return (
        <div className="col col--xs-6 col--lg-3" data-filter-value="Dental Student,Dental Hygienists,Periodontist">
            <a href="/loupes-lights/loupes/galilean-essential/" className="filter__item">
                <div className="filter__item__image lazy lazy--bg lazy--loaded" style={{backgroundImage:`url(${img})` , backgroundSize:"contain"}}></div>

                <div className="filter__item__text">
                    <span className="filter__item__title">{title}</span>

                        <div className="filter__item__richtext">
                            <p>Magnifications:</p>
                                <ul>
                                    {
                                        mag.map((ele)=>{
                                            return (
                                                <li>{ele}</li>

                                            )
                                        })
                                    }
                                </ul>
                        </div>
                </div>
            </a>
        </div>
    )
}