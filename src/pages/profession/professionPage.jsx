import Header from "../../components/Header/Header";
import headerImg from '../../assets/img/018.png'
import nawk0ipq from '../../assets/media/nawk0ipq/gal_gallery_02.jpg'
import Professional from "../../components/chooseProfessional/chooseProfessinal";
export default function ProfessionPage() {
    return(
        <>
            <Header headerImg={headerImg}>
            <div>
            <h1 class="header__headline col--xl-7">
                Custom-crafted<br/>loupes for dedicated<br/>professionals
            </h1>


                <div class="header__text col--md-7 col--lg-6">
                    <p>XPEDENT provides high-end, custom-tailored loupes, no matter if you work within dentistry, surgery or any other profession, where magnification and clear vision is paramount. So, this section might help you to target the perfect loupe solution for you.</p>
                </div>


        </div>
            </Header>
            <section id="module1" class="section image-text section--grey-extra-light-dusted">

    <div class="grid-wrap">
        <div class="grid-row grid-row--align-center grid-row--reverse">
            <header class="col col--sm-6 col--md-5 section__header">

                    <h2 class="h1">Profession</h2>

                    <div class="rich-text">
                        <p>XPEDENT loupes are custom-crafted and made to measure exactly to you. But the functional use of a loupe varies, depending whether you work as a dentist doing complicated procedures all day, an experienced surgeon standing and performing demanding surgery, a hygienist, a student or something entirely different.</p>
                        <p>XPEDENT clients currently enjoying perfect vision at work:</p>
                        <ul>
                        <li>General dental surgeons</li>
                        <li>Dental hygienists</li>
                        <li>Orthodontists</li>
                        <li>Surgeons</li>
                        <li>Cosmetic surgeons</li>
                        <li>Veterinary surgeons</li>
                        <li>Electronics manufacturers</li>
                        <li>Jewellers</li>
                        </ul>
                    </div>

            </header>
            <div class="col col--sm-6 col--md-7">
                    <img class="lazy margin-auto lazy--loaded" src={nawk0ipq} alt="XPEDENT Magnifying Loupes for Dentists Hygienists Surgeons GAL Gallery 02"/>
            </div>
        </div>
    </div>
</section>
            <Professional/>
        </>
    )
}