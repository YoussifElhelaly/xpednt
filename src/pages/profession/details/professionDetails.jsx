import { useEffect, useState } from "react"
import getProfDetails from "../../../features/getProfessionDetails"
import { useParams } from "react-router-dom"
import ProfessionLayout from "../professionLayout"

export default function ProfessionDetails() {

    const [data,setData] = useState({})
    const {proffId} = useParams()
    useEffect(()=>{
        const fetchData = async()=>{
            setData(await getProfDetails(proffId))
        }
        fetchData()
    },[proffId])
    console.log(data.title)

    return (
        <ProfessionLayout proff={data}>
            {
                data?.details?.map((proff)=>{
                    return(
                        <section id="module1" class="section section--grey-extra-light-dusted">
                            <div class="grid-wrap grid-wrap--small">
                                <header class="section__header">
                                    <h2>{proff.body_title}</h2>
                                </header>
                                <div class="rich-text">
                                    <p>{proff.body_content}</p>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        
        
    </ProfessionLayout>
    )
}