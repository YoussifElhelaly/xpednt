import Header from '../../components/Header/Header'

import Professional from '../../components/chooseProfessional/chooseProfessinal'
import { useLocation } from 'react-router-dom'

export default function ProfessionLayout({children ,proff , details}) {

    const params = useLocation()

 
    // function handleImg() {
    //     if(params.pathname.includes("dental")) {
    //         return dentalImg
    //     } 
    //     else if (params.pathname.includes("hygienist")) {
    //         return hygienistImg
    //     }
    //     else if (params.pathname.includes("surgical")) {
    //         return surgicalImg
    //     }
    //     else if (params.pathname.includes("student")) {
    //         return studentImg
    //     }
    //     else if (params.pathname.includes("others")) {
    //         return othersImg
    //     }
    // }
    // function handleContent() {
    //     if(params.pathname.includes("dental")) {
    //         return (
    //             <div>
    //         <h1 class="header__headline col--xl-7">
    //             Dental loupes
    //         </h1>


    //             <div class="header__text col--md-7 col--lg-6">
    //                 <p>Dental procedures require precision. It requires great vision and optimal eyesight. Dentistry loupes for dentists and others in the dental profession will help you achieve this, and adding dental loupes to your work routine will allow you to perform professionally without compromising on your own body and working environment.</p>
    //             </div>


    //     </div>
    //         )
    //     } 
    //     else if (params.pathname.includes("hygienist")) {
    //         return (
    //             <div>
    //         <h1 class="header__headline col--xl-7">
    //             Dental Hygiene Loupes
    //         </h1>


    //             <div class="header__text col--md-7 col--lg-6">
    //                 <p>Xpedent offers custom-crafted and personalised dental hygiene loupes for all-day wear. Level-up your professional performance without compromising on comfort and freedom of movement. Letting you experience what crystal-clear magnification and lightweight materials in the highest quality hygiene loupes, can do for your daily work routine as a dental hygienist.</p>
    //             </div>


    //     </div>
    //         )
    //     }
    //     else if (params.pathname.includes("surgical")) {
    //         return (<div>
    //             <h1 class="header__headline col--xl-7">
    //                 Surgical loupes
    //             </h1>
    
    
    //                 <div class="header__text col--md-7 col--lg-6">
    //                     <p>Xpedent offers the ultimate versatile, all-day-wear surgical loupes for physicians, surgeons and other medical professionals and medical students who require the ultimate optical loupe. Remarkably lightweight yet made from the most robust, high-end materials, Xpedent surgical magnifying glasses and surgical headlights are customised to your unique, individual needs.</p>
    //                 </div>
    
    
    //         </div>)
    //     }
    //     else if (params.pathname.includes("student")) {
    //         return (
    //             <div>
    //         <h1 class="header__headline col--xl-7">
    //             Student Loupes
    //         </h1>


    //             <div class="header__text col--md-7 col--lg-6">
    //                 <p>Start your career by not missing a thing while aiding your body with better ergonomics. Train and work in comfort and achieve better effectiveness. Student loupes from Xpedent offer you affordable quality, precision, and ergonomics from the start, customised for your individual needs.</p>
    //             </div>


    //     </div>
    //         )
    //     }
    //     else if (params.pathname.includes("others")) {
    //         return (
    //             <div>
    //         <h1 class="header__headline col--xl-7">
    //             Other professions
    //         </h1>


    //             <div class="header__text col--md-7 col--lg-6">
    //                 <p>Jewellers, electronics manufacturers, veterinarians and other professionals who require crystal-clear clarity and sharp vision can level up their performance with a pair of custom-crafted binocular loupes. Xpedent customised magnification loupes offer optimal magnification, maximised sharpness and unmatched freedom of movement.</p>
    //             </div>


    //     </div>
    //         )
    //     }
    // }

    

    return(
        <>
            <Header headerImg={details["0"]?.header_image}>
                   <div>
            <h1 class="header__headline col--xl-7">
                {proff?.title}
            </h1>
                <div class="header__text col--md-7 col--lg-6">
                    <p>{details["0"]?.header_desc}</p>
                </div>
            </div>
            </Header>
                {children}
            <Professional/>
        </>
    )
}