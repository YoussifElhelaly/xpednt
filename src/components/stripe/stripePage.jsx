import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './stripeForm.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default function StripePage() {
    const stripe = useStripe();
    const elements = useElements();
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [clientSecret, setClientSecret] = useState('');

        const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Payment successful:', paymentIntent);
    }
  };
    

  useEffect(()=>{
    async function callStripe() {
      let res = await axios.post("http://192.168.1.8/Lyrebird/dashbordXpedent/public/api/create-payment-intent" , {
           "amount":100 * 10,
           "currency" : "GBP",
           "customer_name" : "mohamed",
           "customer_email" : "mohamed.elhelaly@gmail.com",
           "payment_method" : "card"
       })
      setClientSecret(res.data.data.client_secret)
      
      }
      callStripe()
  },[])

    return (
        <form onSubmit={handleSubmit} className='formStripe'>
          <label >CardHolder Name</label>
            <input className='inputStripe' type="text" placeholder='CardHolder Name' required minLength={8}/>
          <label >Email</label>
            <input className='inputStripe' type="email" placeholder='Email' required/>
            <div>
              <label >Country</label>
                <CountryDropdown
                value={country}
                onChange={(val) => setCountry(val)} />
                    
            </div>
            <label >City</label>
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => setRegion(val)} />
                <label >ZIP Code</label>
                  <input className='inputStripe' type="number" placeholder='ZIP Code' required minLength={5}/>
                <label >Card Number</label>
                <div className='inputStripe'>
                  <CardElement />
                </div>
            <button type="submit" disabled={!stripe || !elements}>
              Pay
            </button>
        </form>
    )
}