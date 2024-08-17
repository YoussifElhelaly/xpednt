import { Link } from "react-scroll";


export default function Header({headerImg , children}) {
    return(
        <header class="header header--has-aside">

        <div class="header__media lazy">
            <img src={headerImg} alt="" />
        </div>


        <div class="header__content grid-wrap">
        {children}
       
            <div class="btn__wrap col--md-6">
                <Link class="btn btn--link " 
                to="module2" 
                title="Choose profession" 
                smooth={true}
                duration={500}
                rel="noreferrer">
                <span>Choose profession</span>
                </Link>
                <a class="btn btn--link popup-content _jc_bjs" 
                href="#product-popup" 
                title="Design your own loupe" 
                target="" 
                
                rel="noreferrer">
                <span>Design your own loupe</span>
                </a>
            </div>
        </div>

        

        <div class="grid-wrap">
        <Link class="btn--scroll" smooth={true} duration={500} to="module1">Scroll</Link>
        </div>
        </header>
    )
}