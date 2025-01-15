import { useRecoilState } from "recoil"
import armColorAtom from "../../../atoms/armColor"
import ColorPicker from "../../../components/colorPicker/colorPicker"

export default function SelectTipStep() {
    const [armColor,setArmColor] = useRecoilState(armColorAtom)
    return (
             
        <div id="step_2" class="ex-configurator-step active">
        <div class="ex-configurator-step-header"><h3>TEMPLE COLOUR</h3></div>
        <div id="a-change-tips-color" class="ex-configurator-step-options">
                   
        <div className="selectColor d-flex">
            <div class={`ex-option-control-2 ${armColor == "#5487a3" && "active"}`} onClick={()=>{
                setArmColor("#5487a3")
            }}  data-group="frame_color">
                 <div class="ex-option-control-2-outer" style={{borderColor: "#5487a3"}}></div>
                 <div class="ex-option-control-2-inner" style={{backgroundColor: "#5487a3"}}></div>
                 <span>Light Blue</span>
             </div>
            <div class={`ex-option-control-2 ${armColor == "#a7896b" && "active"}`} onClick={()=>{
                setArmColor("#a7896b")
            }}  data-group="frame_color">
                 <div class="ex-option-control-2-outer" style={{borderColor: "#a7896b"}}></div>
                 <div class="ex-option-control-2-inner" style={{backgroundColor: "#a7896b"}}></div>
                 <span>Rose Gold</span>
             </div>
            <div class={`ex-option-control-2 ${armColor == "#3f4344" && "active"}`} onClick={()=>{
                setArmColor("#3f4344")
            }}  data-group="frame_color">
                 <div class="ex-option-control-2-outer" style={{borderColor: "#3f4344"}}></div>
                 <div class="ex-option-control-2-inner" style={{backgroundColor: "#3f4344"}}></div>
                 <span>Ultra Black</span>
             </div>
          </div>
        </div>
 
    </div>
    )
}