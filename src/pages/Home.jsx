import Professional from "../components/chooseProfessional/chooseProfessinal"
import headerImg from '../assets/img/00.webp'
import Header from "../components/Header/Header"
import Certf from "../components/certifcate/certf"
import TestmonilsSlider from "../components/testmonilsSlider/testmonilsSlider"
import { useRecoilValue } from "recoil"
import modelsPriceAtom from "../atoms/allModels"
import Calc from "../utlities/subTotal"

export default function HomePage() {
    const modelsPrice = useRecoilValue(modelsPriceAtom)



    
    return(
        <>
        <Header headerImg={headerImg}>
        <div>
            <h1 class="header__headline col--xl-7">
            Custom loupes tailored <br/> to your needs
            </h1>


                <div class="header__text col--md-7 col--lg-6">
                    <p>Xpedent is a company that specializes in crafting custom loupes tailored precisely to the needs of dental professionals, surgeons, and other precision-focused specialists. With a commitment to enhancing clarity, comfort, and performance, Xpedent offers personalized solutions that ensure every detail is perfectly aligned with the user’s unique requirements. Whether you need specific magnification levels, ergonomic designs, or other custom features, Xpedent delivers loupes that enhance precision and improve outcomes in your work.</p>
                </div>


        </div>
        </Header>
            <div className="home">
                <Certf/>
                <TestmonilsSlider/>
                <Professional/>
            </div>
        </>

    )
}