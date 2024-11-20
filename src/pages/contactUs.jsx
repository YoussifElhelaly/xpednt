import Header from "../components/Header/Header";
import headerImg from '../assets/img/IMG_1102.jpg'
import createContact from "../features/createContact";
export default function ContactUs() {

    async function handleSubmmit(e) {
        createContact(e)
    }

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
            <form onSubmit={handleSubmmit} className="conf-modal-content">
                <div class="form-group input-name">
                    <input type="text" name="name" class="input-text" placeholder="Name" required/>
                </div>
                <div class="form-group input-email">
                    <input type="email" name="email" class="input-text" placeholder="Email" required/>
                </div>
                <div class="form-group input-name">
                    <input type="text" name="job" class="input-text" placeholder="job" required/>
                </div>
                <div class="form-group input-message">
                    <input type="text" name="note" class="input-text" placeholder="Note" required/>
                </div>
                <div class="form-group">
                        <button type="submit" class="g-recaptcha form-submit-btn">Send</button>
                    </div>
            </form>
        </>
    )
}