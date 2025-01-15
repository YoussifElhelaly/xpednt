import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";


export default function Header({headerImg , flip , children , order}) {
    const location = useLocation();
    const currentPath = location.pathname;

    console.log(currentPath)

    return(
        <header class="header header--has-aside">

        <div class="header__media ">
            <img src={headerImg} alt="" style={flip && {transform: "scaleX(-1)"}}/>
        </div>


        <div class="header__content grid-wrap">
        {children}

            <div class="btn__wrap col--md-6">
                {
                    currentPath === "/profession" ?
                        <LinkScroll class="btn btn--link " 
                        to="module2" 
                        title="Choose profession" 
                        smooth={true}
                        duration={500}
                        rel="noreferrer">
                        <span>Choose profession</span>
                        </LinkScroll>
                    :
                        <Link class="btn btn--link " 
                        to="/profession" 
                        title="Choose profession" 
                        rel="noreferrer">
                        <span>Choose profession</span>
                        </Link>
                }
               
                    <Link class="btn btn--link popup-content _jc_bjs" 
                            to="/orderCarbonX"
                            title="Order Carbon X" 
                            rel="noreferrer">
                            <span>Order Carbon X</span>
                    </Link>
                     
                    <Link class="btn btn--link popup-content _jc_bjs" 
                    to="/CustomeYourLoupe"
                    title="customize your loupe" 
                    rel="noreferrer">
                    <span>customize your loupe</span>
                    </Link>
                
              
            </div>
        </div>

        

        {/* <div class="grid-wrap">
        <Link class="btn--scroll" smooth={true} duration={500} to="module1">Scroll</Link>
        </div> */}
        </header>
    )
}