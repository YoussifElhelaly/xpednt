import React, { Suspense, useEffect, useRef, useState } from 'react';

import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import './orderCarbon.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import axiosInstance from '../api/apiAiox';
import { toast } from 'sonner';
import selectFrameAtom from '../atoms/selectFrame';
import selectLightAtom from '../atoms/selectLight';
import selectLoupeAtom from '../atoms/selectLoup';
import { useRecoilValue } from 'recoil';
import CalcPrice from '../utlities/subTotal';
import modelsPriceAtom from '../atoms/allModels';
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import createOrder from '../features/createOrder';
import armColorAtom from '../atoms/armColor';
import loupeColorAtom from '../atoms/loupeColor';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import CustomLoader from '../components/Loader/Loader';
import A4 from '../components/Frames/A4';
import carbonPrice from '../utlities/carbonXPrice';
export default function OrderCarbonX() {

    const [isActive , setIsActive] = useState(false)

    const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
     usePhoneInput({
         defaultCountry: 'gb',
         value:"",
         countries: defaultCountries,
         onChange: (data) => {
             
         },
     });
  const [withLight , setWithLight] = useState(false)
  const [loupe , setLoupe] = useState("3.5X")
   const stripe = useStripe();
   const elements = useElements();
   const [countryC, setCountryC] = useState('');
   const [region, setRegion] = useState('');
   const nameHolder = useRef()
   const email = useRef()
   const selectFrameValue = useRecoilValue(selectFrameAtom)
   const selectLightValue = useRecoilValue(selectLightAtom)
   const selectLoupeValue = useRecoilValue(selectLoupeAtom)
   const colorFrameValue = useRecoilValue(armColorAtom)
   const colorLoupeValue = useRecoilValue(loupeColorAtom)
   const prices = useRecoilValue(modelsPriceAtom)
   const [clientSecret, setClientSecret] = useState('');
   let sumTotal = CalcPrice(selectFrameValue.name , prices) + CalcPrice(selectLightValue.name , prices) + CalcPrice(selectLoupeValue.name , prices)
       const handleSubmit = async (event) => {
         event.preventDefault();

        
         let res = await callStripe()
   
         if(res) {
          const { error, paymentIntent } = await stripe.confirmCardPayment(res, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          });
          createOrder(event , {
            frame : "carbonX" ,
            loupe  ,
            light : withLight ? 1 : 0 ,
            frameColor : "noColor" ,
            loupeColor : "noColor"
          })
              toast.success("Your Order Created Successfully");
          if (error) {
       
          } else {
          }

        }
       };
       async function callStripe() {
         try {

           let res = await axiosInstance.post("/create-payment-intent" , {
             "amount":carbonPrice(loupe , withLight ) * 10,
             "currency" : "GBP",
             "customer_name" : nameHolder.current.value,
             "customer_email" : email.current.value,
             "payment_method" : "card"
           })
           
           return res.data.data.client_secret
         }catch(e) {
         
           if(e.response?.data.errors) {
             let result = Object.values(e.response?.data.errors)
             result.forEach((mess)=>{
               toast.error(mess)
             })
           } 
         } 
       }


    return (
    <section className='orderCarbonX'>

        <div className='paymentPill'>
          <div className="options">
            <h1>CARBON X</h1>
            {/* <button onClick={()=>{
              setWithLight(false)
            }} className={`ex-configurator-step-button a-change-position_step_2 ${withLight ? "" :"active"}`}>With loupe</button> */}
            <div className="optionsLoupe">
            <button onClick={()=>{
              setLoupe("3.5X")
            }} className={`ex-configurator-step-button a-change-position_step_2 ${loupe == "3.5X" ? "active" :""}`}>3.5X</button>
            <button onClick={()=>{
              setLoupe("4.5X")
            }} className={`ex-configurator-step-button a-change-position_step_2 ${loupe == "4.5X" ? "active" :""}`}>4.5X</button>
            <button onClick={()=>{
              setLoupe("5.5X")
            }} className={`ex-configurator-step-button a-change-position_step_2 ${loupe == "5.5X" ? "active" :""}`}>5.5X</button>
            <button onClick={()=>{
              setLoupe("6.5X")
            }} className={`ex-configurator-step-button a-change-position_step_2 ${loupe == "6.5X" ? "active" :""}`}>6.5X</button>

            </div>
            <button onClick={()=>{
              setWithLight(!withLight)
            }} className={`ex-configurator-step-button a-change-position_step_2 ${withLight ? "active" : ""}`}>With wireless light firefly</button>
            <div className="price">
              <p className='note'>*Price include VAT*</p>
              <p>Price : {carbonPrice(loupe , withLight )} GBP</p>
            </div>
          </div>
        <form onSubmit={handleSubmit} className='formStripe'>
        <label >CardHolder Name</label>
        <input ref={nameHolder} className='inputStripe' name='card_name' type="text" placeholder='CardHolder Name' required minLength={8}/>
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
                  <input name='zip_code' className='inputStripe' type="number" placeholder='ZIP Code' required minLength={5}/>
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
                  <input type="tel" name="phone" required min={'9'} class="input-text"/>
                </div>
                <label >Card Number</label>
                <div className='inputStripe'>
                  <CardElement />
                </div>
                <button class="ex-configurator-step-button a-change-position_step_2"  disabled={!stripe || !elements}>BUY </button>
        </form>
      
        </div>
      </section>

    )
}