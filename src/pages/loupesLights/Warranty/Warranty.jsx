import Header from "../../../components/Header/Header";
import HeaderImg from "../../../assets/media/3szmys2m/warranty_header_01802f.jpg";
export default function WarrantyPage () {
    return(
        <>
            <Header headerImg={HeaderImg}>
                <div>
                    <h1 className="header__headline col--xl-7">
                        ExamVision <br/>Product Warranty
                    </h1>
                    <div className="header__text col--md-7 col--lg-6">
                        <p>All ExamVision products come with a comprehensive warranty as standard.<br/><br/>This warranty covers all manufacturing defects which might manifest within the warranty term.</p>
                    </div>
                </div>
            </Header>
            <section id="module1" className="section section--grey-extra-light-dusted">
                    <div className="grid-wrap grid-wrap--small">
                        <header className="section__header">
                            <h2>Warranty</h2>
                        </header>
                        <div className="rich-text">
                            <p>Please note, our warranty does not cover defects caused by normal wear or tear, misuse, neglect, accidental damage, modification, shipping in non-original packaging, or faults due to improper fitting, maintenance, service or cleaning procedures. This warranty is also void if the product is not used according to our<span><a rel="noopener" href="/support/#module1" target="_blank" data-anchor="#module1"> Instructions for Use</a></span>.</p>
                            <p>Additional information:</p>
                            <ul>
                            <li>Soft parts such as nose pads and temple tips are not covered, as these are treated as ‘consumable’ parts and need to be replaced as they wear.</li>
                            <li>Detachable cables are considered replaceable parts that can be expected to wear. Detachable cables are covered for manufacturing defects for one year.</li>
                            <li>A battery is defined as defective, if it drops to below 50% of its original specification within the specified warranty term.</li>
                            </ul>
                            <p>Read more about the <a rel="noopener" href="/media/qokjbkxe/2024-07-warranty.pdf" target="_blank" title="ExamVision Warranties Loupes And Lights">ExamVision Product Warranty.</a></p>
                        </div>

                    </div>
            </section>
        </>
    )
}