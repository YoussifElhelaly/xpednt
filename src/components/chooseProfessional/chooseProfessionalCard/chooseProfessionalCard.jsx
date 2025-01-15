import { Link } from "react-router-dom";

export default function ProfessionalCard({img , title ,proff}) {

    return (
        <Link to={`/profession/${proff?.id}`} class="gateway__link">
            <div class="gateway__bg lazy" style={{backgroundImage:`url(${proff?.image})`}}>
            </div>
            <div class="gateway__text">
                <b class="h2">{proff?.title}</b>
                {/* <span class="link--strip">View more</span> */}
            </div>
        </Link>
    )
}