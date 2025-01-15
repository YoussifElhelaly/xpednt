import Header from "../components/Header/Header";
import headerImg from '../assets/img/IMG_1102.webp'
import createContact from "../features/createContact";
import {
    defaultCountries,
    FlagImage,
    parseCountry,
    usePhoneInput,
  } from 'react-international-phone';
import { useState } from "react";
export default function ContactUs() {

    
    const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
        defaultCountry: 'gb',
        value:"",
        countries: defaultCountries,
        onChange: (data) => {
            
        },
    });
    async function handleSubmmit(e) {

        createContact(e , country)
    }

    const [isActive , setIsActive] = useState(false)

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
                <div class="form-group input-email input-phone">
                    <div className="countries" onClick={()=>{
                        setIsActive(!isActive)
                    }}>
                        <div className="activeCountry">
                            <FlagImage
                                        iso2={country.iso2}
                                        style={{ marginRight: '8px' }}
                                        />
                            <span>+{country.dialCode}</span>
                        </div>
                                <ul className={`${isActive ? "active" : ""}`}>
                    
                                {defaultCountries.map((c)=>{
                                        const country = parseCountry(c);
                                        return (
                                            <li onClick={()=>{
                                                setCountry(country.iso2)
                                            }}>
                                            
                                                <FlagImage
                                                iso2={country.iso2}
                                                style={{ marginRight: '8px' , width:"40px" }}
                                                />
                                                <span>+{country.dialCode}</span>
                                            </li>
                                        )
                                })}
                            </ul>
                    </div>
                    <input type="tel" name="phone" required  class="input-text"/>
                </div>
                <div class="form-group input-message">
                    <input type="text" name="note" class="input-text" placeholder="Note" defaultValue={""}/>
                </div>
                <div class="form-group">
                        <button type="submit" class="g-recaptcha form-submit-btn">Send</button>
                    </div>
            </form>
        </>
    )
}