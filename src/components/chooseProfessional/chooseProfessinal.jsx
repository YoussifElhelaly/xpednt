import ProfessionalCard from "./chooseProfessionalCard/chooseProfessionalCard";
import dentalImg from '../../assets/media/piin3kkz/home_dental_gate_0149c2.jpg'
import hygienistImg from '../../assets/media/rbzlb2ie/professions-ess-hyginist_all-professions-chart-image_02bf597.jpg'
import surgicalImg from '../../assets/media/wbbppdyt/2023-11-medical-gateway20c1.jpg'
import studentImg from '../../assets/media/5cfh3jaq/professions-ess-student_all-professions-chart-image_02bb4b4.jpg'
import othersImg from '../../assets/media/bcievr5z/2023-11-others-gateway1989.jpg'
export default function Professional() {
    return(
        <section id="module2" class="section gateway section--dark">

    <div class="grid-wrap">
        <header class="col col--md-12 section__header">
            <h2 class="h1">Choose<br />profession</h2>
        </header>
        <div class="grid-row">
            <div class="col col--md-12 gateway__wrap">
                <div class="gateway__links">
                    <ProfessionalCard img={dentalImg} title={"Dental"}/>
                    <ProfessionalCard img={hygienistImg} title={"Hygienist"}/>
                    <ProfessionalCard img={surgicalImg} title={"Surgical"}/>
                    <ProfessionalCard img={studentImg} title={"Student"}/>
                    <ProfessionalCard img={othersImg} title={"Others"}/>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}