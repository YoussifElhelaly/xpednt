import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './css/jcl.min56a5.css'
import './css/main.min8459.css'
import 'swiper/css/pagination';
import ScrollToTop from './components/scrollTop';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const stripePromise = loadStripe('pk_test_51Oqxd5B37QGPmlGBfBH8cZU2Oj5qJb8yypb5wC9PDDibIRXuoIsO550gkMI93bvhjl5oLcBHRgisukMAtQgxJHLL00yx6cUkWv');

root.render(

    <BrowserRouter>
      <RecoilRoot>
        <ScrollToTop>
        <Elements stripe={stripePromise}>

          <App />
        </Elements>
        </ScrollToTop>
      </RecoilRoot>  
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
