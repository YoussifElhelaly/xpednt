import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import StripePage from './stripePage';
const stripePromise = loadStripe('pk_test_51Oqxd5B37QGPmlGBfBH8cZU2Oj5qJb8yypb5wC9PDDibIRXuoIsO550gkMI93bvhjl5oLcBHRgisukMAtQgxJHLL00yx6cUkWv');
export default function StripeForm() {
  
  let [data , setData] = useState({})


    return (
    <Elements stripe={stripePromise}>
        <StripePage />
      </Elements>
      )
}