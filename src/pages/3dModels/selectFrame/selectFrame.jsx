import CurveIcon from  '../../../assets/003.png'
import CarbonIcon from  '../../../assets/002.png'
import MetroIcon from  '../../../assets/001.png'
import ColorPicker from '../../../components/colorPicker/colorPicker'
import faceColorAtom from '../../../atoms/faceColor'
import selectFrameAtom from '../../../atoms/selectFrame'
import selectStepsAtom from '../../../atoms/steps'
import { useRecoilState } from 'recoil'

export default function SelectFrameStep() {


    const [_ , setSelectFrame] = useRecoilState(selectFrameAtom)

    // const [faceColor,setFaceColor] = useRecoilState(faceColorAtom)

    return(
        <div id="step_1" class="ex-configurator-step active">
        <div class="ex-configurator-step-header"><h3>SELECT FRAME</h3></div>
        
        <div id="a-change-models" class="ex-configurator-step-options">
                    <div id="a_models_fashion" onClick={()=>{
                        setSelectFrame({
                            id:1,
                            name:"Albert"
                        })
                    }} class="ex-option-control-1 " data-group="frame_model">
                        <img src={CurveIcon} />
                        <span><span class="underline"><span class="underline-hide">Albert</span></span></span>
                    </div>
                    <div id="a_models_carbonV2" onClick={()=>{
                        setSelectFrame({
                            id:2,
                            name:"Piccadilly"
                        })
                    }} class="ex-option-control-1 " data-group="frame_model">
                        <img src={CarbonIcon} />
                        <span><span class="underline"><span class="underline-hide">Piccadilly </span></span></span>
                    </div>
                    
                    <div id="a_models_metro" onClick={()=>{
                         setSelectFrame({
                            id:3,
                            name:"Holmes"
                        })
                    }} class="ex-option-control-1 " data-group="frame_model">
                        <img src={MetroIcon} />
                        <span><span class="underline"><span class="underline-hide">Holmes</span></span></span>
                    </div>

        </div>
      
        {/* <div className="selectColor">
           <ColorPicker setColor={setFaceColor} color={faceColor}/>
            
          </div> */}
     
    </div>
    )
}