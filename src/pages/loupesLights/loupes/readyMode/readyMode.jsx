import Header from "../../../../components/Header/Header";
import headerImg from '../../../../assets/img/020.webp'
import ccdnjr30 from '../../../../assets/img/021.webp'
import './readyMade.css'

export default function ReadyMade() {
    return(
        <>
            <Header headerImg={headerImg} order={true}>
                <div>
                    <h1 class="header__headline col--xl-7">
                        CarbonX
                    </h1>
                    <div class="header__text col--md-7 col--lg-6">
                        <p>Introducing our premium CarbonX Loupe, offering different magnifications for precision clarity. Featuring adjustable pupillary distance, it’s crafted from ultra-light carbon fiber for all-day comfort. Perfect for professionals seeking durability and performance in one sleek design.</p>
                    </div>
                </div>
            </Header>
            <section id="module2" class="section ">
                <div class="grid-wrap grid-wrap--small">
                    <header class="section__header">
                        <h2>Ready Made Loupe</h2>
                    </header>
                    <div class="rich-text">
                        <p><span>X4 sizes are available 3.5 / 4.5 / 5.5 / 6.5 </span>&nbsp;</p>
                        <p><span>Xpedent Galianlens ERGO loupe combines Schott Glass and Achromatic Optical Path Design to assure high image quality</span></p>
                        <p><span>The Flip-Up function brings unobstructed vision and eye contact with your patients with a single adjustment.</span></p>
                        <p><span>The whole structure made, of ultra-light alloy, creates a cool metalic look, ensuring excellent structural strength and durability, while minimising the weight and the pressure on the nose when wearing</span></p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Magnification</th>
                                <th>Working Distance</th>
                                <th>Pupillary Distance Adjustment</th>
                                <th>Depth Of Field</th>
                                <th>Depth Of View</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Magnification">3.5X</td>
                                <td data-label="Working Distance" rowSpan={4}>280-380mm <br /> 360-460mm <br /> 440-540mm <br /> 500-600mm </td>
                                <td data-label="Pupillary Distance Adjustment" rowSpan={4}>50-80MM</td>
                                <td data-label="Depth Of Field">100mm</td>
                                <td data-label="Depth Of View">70-90mm</td>
                                <td data-label="Weight">75g</td>
                            </tr>
                            <tr>
                                <td data-label="Magnification">4.5X</td>
                                <td className="hidden" data-label="Working Distance" rowSpan={4}>280-380mm <br /> 360-460mm <br /> 440-540mm <br /> 500-600mm </td>
                                <td className="hidden" data-label="Pupillary Distance Adjustment" rowSpan={4}>50-80MM</td>
                                
                                <td data-label="Depth Of Field">100mm</td>
                                <td data-label="Depth Of View">50-80mm</td>
                                <td data-label="Weight">80g</td>
                            </tr>
                            <tr>
                                <td data-label="Magnification">5.5X</td>
                                <td className="hidden" data-label="Working Distance" rowSpan={4}>280-380mm <br /> 360-460mm <br /> 440-540mm <br /> 500-600mm </td>
                                <td className="hidden" data-label="Pupillary Distance Adjustment" rowSpan={4}>50-80MM</td>
                                
                                <td data-label="Depth Of Field">90mm</td>
                                <td data-label="Depth Of View">50-75mm</td>
                                <td data-label="Weight">88g</td>
                            </tr>
                            <tr>
                                <td data-label="Magnification">6.5X</td>
                                <td className="hidden" data-label="Working Distance" rowSpan={4}>280-380mm <br /> 360-460mm <br /> 440-540mm <br /> 500-600mm </td>
                                <td className="hidden" data-label="Pupillary Distance Adjustment" rowSpan={4}>50-80MM</td>
                                
                                <td data-label="Depth Of Field">80mm</td>
                                <td data-label="Depth Of View">50-75mm</td>
                                <td data-label="Weight">87g</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section id="module3" class="section image-text section--grey-extra-light-dusted">

    <div class="grid-wrap">
        <div class="grid-row grid-row--align-center grid-row--reverse">
            <header class="col col--sm-6 col--md-5 section__header">

                    <h2 class="h1">Ergonomics</h2>

                    <div class="rich-text">
                        <p>Loupes help improve your work position significantly. Longer working distances place greater demand on your vision. Loupes offer the solution.&nbsp;</p>
<p>Good ergonomics are a crucial prerequisite for a long, enjoyable and healthy working life.</p>
                    </div>

    <a class="btn btn--link " href="/ergonomics/" title="Ergonomics" rel="noreferrer">
    <span>Ergonomics</span>
    </a>
            </header>
            <div class="col col--sm-6 col--md-7">
                    <img class="lazy margin-auto lazy--loaded" src={ccdnjr30} alt="Demo Ergonomics"/>
            </div>
        </div>
    </div>
</section>
        </>
    )
}