import Header from "../components/Header/Header";
import headerImg from '../assets/media/pamkf0ub/contact_header_01d4b3.jpg'
export default function ContactUs() {
    return(
        <>
            <Header headerImg={headerImg}>
                <div>
                    <h1 class="header__headline col--xl-7">
                        Find your local dealer <br/>or contact us directly
                    </h1>


                    <div class="header__text col--md-7 col--lg-6">
                        <p>Call us, email us or fill out the contact form with any comments or queries that you may have. We will then get back to you as soon as possible. <br/><br/>Thank you in advance!</p>
                    </div>
                </div>
            </Header>
        </>
    )
}