import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";


export default function Header({headerImg , flip , children}) {
    return(
        <header class="header header--has-aside">

        <div class="header__media lazy">
            <img src={headerImg} alt="" style={flip && {transform: "scaleX(-1)"}}/>
        </div>


        <div class="header__content grid-wrap">
        {children}
       
            <div class="btn__wrap col--md-6">
                <LinkScroll class="btn btn--link " 
                to="module2" 
                title="Choose profession" 
                smooth={true}
                duration={500}
                rel="noreferrer">
                <span>Choose profession</span>
                </LinkScroll>
                <Link class="btn btn--link popup-content _jc_bjs" 
                to="/CustomeYourLoupe"
                title="customize your loupe" 
                rel="noreferrer">
                <span>customize your loupe</span>
                </Link>
            </div>
        </div>

        

        <div class="grid-wrap">
        <Link class="btn--scroll" smooth={true} duration={500} to="module1">Scroll</Link>
        </div>
        </header>
    )
}