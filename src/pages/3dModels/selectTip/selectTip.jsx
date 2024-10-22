import { useRecoilState } from "recoil"
import armColorAtom from "../../../atoms/armColor"
import ColorPicker from "../../../components/colorPicker/colorPicker"

export default function SelectTipStep() {
    const [armColor,setArmColor] = useRecoilState(armColorAtom)
    return (
             
        <div id="step_2" class="ex-configurator-step active">
        <div class="ex-configurator-step-header"><h3>TEMPLE TIP COLOUR</h3></div>
        <div id="a-change-tips-color" class="ex-configurator-step-options">
                   
        <div className="selectColor">
           <ColorPicker setColor={setArmColor} color={armColor} />
          </div>
        </div>
 
    </div>
    )
}