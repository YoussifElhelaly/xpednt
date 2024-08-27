import Professional from "../components/chooseProfessional/chooseProfessinal"
import headerImg from '../assets/img/00.png'
import Header from "../components/Header/Header"

export default function HomePage() {


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
            <section id="module1" class="section ">

<div class="grid-wrap grid-wrap--small">
    <div class="grid-row">
        <header class="col col--sm-6">
           
            <h2>We deliver solutions to professionals for whom precision is paramount</h2>
<a class="btn btn--link  _jc_modal_form" 
    href="#contact-form-popup" 
    title="FIND YOUR DEALER" 
     
    rel="noreferrer">
<span>FIND YOUR DEALER</span>
</a>
        </header>
        <div class="col col--sm-6">
            <ul class="usp-list list-style-none">
                <li>
                    <h3>Excellent vision and precision </h3>
                    <p>Our optics help you achieve the crystal clear image you need for high-quality, precision work.</p>
                </li>
                <li>
                    <h3>Work satisfaction</h3>
                    <p>Achieved through better treatment results, faster work and happier, well treated patients.</p>
                </li>
                <li>
                    <h3>Style and functionality</h3>
                    <p>Four-times winner of the international product design award - Red Dot Design Award. This means style and great, Danish design for you.</p>
                </li>
                <li>
                    <h3>Longer working life</h3>
                    <p>An improved <a href="ergonomics/index.html" title="Ergonomics">ergonomic</a> position via customised loupes is proven to avoid musculoskeletal problems.</p>
                </li>
                <li>
                    <h3>Peace of mind</h3>
                    <p>With a warranty of up to five years on our loupes and unrivalled dealer service support.</p>
                </li>
                <li>
                    <h3>Customised solution</h3>
                    <p>Our specialists in optics and ergonomics ensure a solution completely tailored to you.</p>
                </li>
            </ul>
            
        </div>
    </div>
</div>
</section>

                <Professional/>
            </div>
        </>

    )
}