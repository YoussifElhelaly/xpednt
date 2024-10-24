import CurveIcon from  '../../../assets/media/akvdjnbo/carbonv2_ico.jpg'
import CarbonIcon from  '../../../assets/media/tdsp1cpe/fashion_ico.jpg'
import MetroIcon from  '../../../assets/media/0zdhbfip/metro_ico.jpg'
import ColorPicker from '../../../components/colorPicker/colorPicker'
import faceColorAtom from '../../../atoms/faceColor'
import selectFrameAtom from '../../../atoms/selectFrame'
import selectStepsAtom from '../../../atoms/steps'
import { useRecoilState } from 'recoil'

export default function SelectFrameStep() {


    const [_ , setSelectFrame] = useRecoilState(selectFrameAtom)

    const [faceColor,setFaceColor] = useRecoilState(faceColorAtom)

    return(
        <div id="step_1" class="ex-configurator-step active">
        <div class="ex-configurator-step-header"><h3>SELECT FRAME</h3></div>
        
        <div id="a-change-models" class="ex-configurator-step-options">
                    <div id="a_models_fashion" onClick={()=>{
                        setSelectFrame(1)
                    }} class="ex-option-control-1 " data-group="frame_model">
                        <img src={CurveIcon} />
                        <span><span class="underline"><span class="underline-hide">Curve</span></span></span>
                    </div>
                    <div id="a_models_carbonV2" onClick={()=>{
                        setSelectFrame(2)
                    }} class="ex-option-control-1 " data-group="frame_model">
                        <img src={CarbonIcon} />
                        <span><span class="underline"><span class="underline-hide">Carbon </span></span></span>
                    </div>
                    
                    <div id="a_models_metro" onClick={()=>{
                        setSelectFrame(3)
                    }} class="ex-option-control-1 " data-group="frame_model">
                        <img src={MetroIcon} />
                        <span><span class="underline"><span class="underline-hide">Essential Metro</span></span></span>
                    </div>

        </div>
      
        <div className="selectColor">
           <ColorPicker setColor={setFaceColor} color={faceColor}/>
            
          </div>
     
    </div>
    )
}