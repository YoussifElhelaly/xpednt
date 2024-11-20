import Header from "../components/Header/Header";
import headerImg from '../assets/img/020.png'
import { useEffect, useState } from "react";
import getErgo from "../features/getErgo";
export default function ErgonomicsPage() {

    const [data, setData]= useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            setData(await getErgo())
        }
        fetchData()
    },[])

    return(
        <>
        <Header headerImg={headerImg}>
            <div>
                <h1 class="header__headline col--xl-7">
                    Ergonomics
                </h1>
                <div class="header__text col--md-7 col--lg-6">
                    <p>Good ergonomics are a crucial prerequisite for a long, enjoyable and healthy working life. Magnifying ergonomic loupes from ExamVision will help you achieve improved posture, physical wellbeing and allow you to perform at your best.</p>
                </div>
            </div>
        </Header>
            <section id="module2" class="section product-features section--grey-extra-light">
                                <div class="grid-row grid-row--center">
                                    <header class="product-features__header col col--sm-9 col--lg-7 col--xl-5">
                                        <h2>The most essential ergonomic factors when purchasing loupes</h2>

                                            <p>Dentists and medical specialists generally purchase magnifying loupes for two reasons: to enhance visual acuity and treatment quality and to improve working posture and comfort.  

                            There are three essential, ergonomic factors to consider when looking for the right loupe:</p>
                                    </header>
                                </div>
                {
                    data.map((ergo , index)=>{
                        console.log(ergo)
                        return(
                            <>
                            {
                                index % 2 == 0 ?
                                <div class="grid-wrap">
                                    <div class="grid-row product-features__item">
                                        <div class="col col--no-pad product-features__image-wrap col--md-8">
                                            <div class="product-features__image">
                                                <img src={ergo.image} alt="Working distance"/>
    
    
                                            </div>
                                        </div>
                                        <div class="col col--md-4 product-features__content">
                                                <div>
                                                    <h3 data-count="1">{ergo.title}</h3>
                                                    <p>{ergo.description}</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                
                                :
                                   <div class="grid-wrap">
                                        <div class="grid-row product-features__item product-features__item--right">
                                            <div class="col col--no-pad product-features__image-wrap col col--md-8 product-features__image-wrap--right">
                                                <div class="product-features__image product-features__image--right">
                                                    <img src={ergo.image} alt="Declination angle"/>


                                                </div>
                                            </div>
                                            <div class="col col--md-4 product-features__content product-features__content--right">
                                                    <div>
                                                        <h3 data-count="2">{ergo.title}</h3>
                                                        <p>{ergo.description} </p>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                            </>

                        )
                    },[])
                }
            </section>
           
        </>
    )
}