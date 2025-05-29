import React, { useRef, useState } from 'react';
import './stripeForm.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import selectFrameAtom from '../../atoms/selectFrame';
import selectLightAtom from '../../atoms/selectLight';
import selectLoupeAtom from '../../atoms/selectLoup';
import { useRecoilValue } from 'recoil';
import CalcPrice from '../../utlities/subTotal';
import modelsPriceAtom from '../../atoms/allModels';
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import armColorAtom from '../../atoms/armColor';
import loupeColorAtom from '../../atoms/loupeColor';
import createPreOrder from '../../features/createPreOrder';
import faceColorAtom from '../../atoms/faceColor';

export default function StripePage() {
  const [isActive , setIsActive] = useState(false)

     const { country, setCountry } =
      usePhoneInput({
          defaultCountry: 'gb',
          value:"",
          countries: defaultCountries,
          onChange: (data) => {
              
          },
      });
 
    const [countryC, setCountryC] = useState('');
    const [region, setRegion] = useState('');
    const email = useRef()
    const selectFrameValue = useRecoilValue(selectFrameAtom)
    const selectLoupeValue = useRecoilValue(selectLoupeAtom)
    const selectLightValue = useRecoilValue(selectLightAtom)
  const armColorValue = useRecoilValue(armColorAtom)
    const loupeColorValue = useRecoilValue(loupeColorAtom)
    const prices = useRecoilValue(modelsPriceAtom)

    // let sumTotal = CalcPrice(selectFrameValue.name , prices) + CalcPrice(selectLightValue.name , prices) + CalcPrice(selectLoupeValue.name , prices)
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(selectLightValue.name)
          createPreOrder(event, {
            frameName: selectFrameValue.name,
            loupeName: selectLoupeValue.name || 0,
            lightName: selectLightValue.name || 0 ,
            frameColor: armColorValue, 
            loupeColor: loupeColorValue
          })
    
        //   if(res) {
        //    const { error, paymentIntent } = await stripe.confirmCardPayment(res, {
        //      payment_method: {
        //        card: elements.getElement(CardElement),
        //      },
        //    });
        //    if (error) {
        //      toast.error(error.message);
        //    } else {
            
        //      toast.success("Your Order Created Successfully");
        //    }

        //  }
        };
        // async function callStripe() {
        //   try {

        //     let res = await axiosInstance.post("/create-payment-intent" , {
        //       "amount":sumTotal * 10,
        //       "currency" : "GBP",
        //       "customer_name" : nameHolder.current.value,
        //       "customer_email" : email.current.value,
        //       "payment_method" : "card"
        //     })
            
        //     return res.data.data.client_secret
        //   }catch(e) {
        //     if(e.response?.data.errors) {
        //       let result = Object.values(e.response?.data.errors)
        //       result.forEach((mess)=>{
        //         toast.error(mess)
        //       })
        //     } 
        //   } 
        // }


    return (
      <div className='paymentPill'>
        <form onSubmit={handleSubmit} className='formStripe'>
          <label >Name</label>
            <input name='name' ref={email} className='inputStripe' type="text" placeholder='Name' required/>
          <label >Email</label>
            <input name='email' ref={email} className='inputStripe' type="email" placeholder='Email' required/>
            <div>
              <label >Country</label>
                <CountryDropdown
                value={countryC}
                name='country'
                onChange={(val) => setCountryC(val)} />
            </div>
            <label >City</label>
              <RegionDropdown
                country={countryC}
                value={region}
                name='city'
                onChange={(val) => setRegion(val)} />
                <label >Address</label>
                  <input  name='address' className='inputStripe' type="text" placeholder='Address' required minLength={5}/>
                <label >ZIP Code</label>
                  <input name='zip_code' className='inputStripe' type="text" placeholder='ZIP Code' required minLength={4}/>
                <label >Phone Number</label>
            <div class="form-group input-email input-phone inputStripe">
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
                               <input type="tel" name="phone_number" required min={'9'} class="input-text"/>
                           </div>
                           <button class="ex-configurator-step-button a-change-position_step_2">Contact us </button>
        </form>
        {/* <div className='pill'>
          <h2>PILL :</h2>
          <ul>
            
                <li className='model'>FRAME : {selectFrameValue.name} <span className='price'>{CalcPrice(selectFrameValue.name , prices)} GBP</span></li>

              
           
            {
              selectLightValue.id != 0 && 
              <>
                <li className='model'>LIGHT : {selectLightValue.name} <span className='price'>{CalcPrice(selectLightValue.name , prices)} GBP</span></li>

              
              </>
            }
            {
              selectLoupeValue.id != 0 && 
              <>
                <li className='model'>LOUPE : {selectLoupeValue.name} <span className='price'>{CalcPrice(selectLoupeValue.name , prices)} GBP</span></li>
              
              
              </>
            }
            <hr />
            <p>TOTAL : {sumTotal} GBP</p>
          </ul>
        </div> */}
      </div>
    )
}