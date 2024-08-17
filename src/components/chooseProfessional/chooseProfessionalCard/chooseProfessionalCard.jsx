export default function ProfessionalCard({img , title}) {
    return (
        <a href="profession/dental/index.html" class="gateway__link">
            <div class="gateway__bg lazy" style={{backgroundImage:`url(${img})`}}>
            </div>
            <div class="gateway__text">
                <b class="h2">{title}</b>
                <span class="link--strip">View more</span>
            </div>
        </a>
    )
}