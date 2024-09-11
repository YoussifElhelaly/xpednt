import ceLogo from '../../assets/img/ce-marking-certificate-250x250.webp'
import sgsLogo from '../../assets/img/SGS_Logo.svg.png'
import fdaLogo from '../../assets/img/images.png'
import './certfi.css'

export default function Certf() {
    return (
        <div className="certifacte">
            <div className="img">
                <img src={ceLogo} alt="" />
            </div>
            <div className="img">
                <img src={fdaLogo} alt="" />
            </div>
            <div className="img">
                <img src={sgsLogo} alt="" />
            </div>
        </div>
    )
}