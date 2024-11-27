import { useRecoilState } from "recoil"
import loupe1 from "../../../assets/media/zsyd24gt/kk_new.jpg"
import selectLoupeAtom from "../../../atoms/selectLoup"
import armColorAtom from "../../../atoms/armColor"
import loupeColorAtom from "../../../atoms/loupeColor"

export default function SelectLoupeStep() {

    const [selectLight, setSelectLight] = useRecoilState(selectLoupeAtom)
    const [armColor,setArmColor] = useRecoilState(loupeColorAtom)
    
  function handleSelectLight(light) {
    if(light == selectLight) {
      setSelectLight(0)
    } else {
      setSelectLight(light)
    }
  }

    return (

                        
        <div id="step_3" class="ex-configurator-step active">
        <div class="ex-configurator-step-header "><h3>LOUPE</h3></div>
        <div id="a-change-loups" class="ex-configurator-step-options">
                    <div id="a_loups_ka" class={`ex-option-control-1 v2 ${selectLight == 1 && "active"}`} onClick={()=>{
                        handleSelectLight(1)
                    }} data-group="loupes">
                        <img src={loupe1}/>
                        <span>AirGo x3.5</span>
                    </div>
                    <div id="a_loups_rf" class={`ex-option-control-1 v2 ${selectLight == 2 && "active"}`} onClick={()=>{
                        handleSelectLight(2)
                    }} data-group="loupes">
                        <img src={loupe1}/>
                        <span>AirGo x4.5</span>
                    </div>
                    <div id="a_loups_kk57" class={`ex-option-control-1 v2 ${selectLight == 3 && "active"}`} onClick={()=>{
                        handleSelectLight(3)
                    }} data-group="loupes">
                        <img src={loupe1}/>
                        <span>AirGo x5.5</span>
                    </div>
                    <div id="a_loups_kk57" class={`ex-option-control-1 v2 ${selectLight == 4 && "active"}`} onClick={()=>{
                        handleSelectLight(4)
                    }} data-group="loupes">
                        <img src={loupe1}/>
                        <span>AirGo x6.5</span>
                    </div>
                    <div id="a_loups_kk57" class={`ex-option-control-1 v2 ${selectLight == 5 && "active"}`} onClick={()=>{
                        handleSelectLight(5)
                    }} data-group="loupes">
                        <img src={loupe1}/>
                        <span>slim Scope 3.5</span>
                    </div>
                    <div id="a_loups_kk57" class={`ex-option-control-1 v2 ${selectLight == 6 && "active"}`} onClick={()=>{
                        handleSelectLight(6)
                    }} data-group="loupes">
                        <img src={loupe1}/>
                        <span>slim Scope 6.5</span>
                    </div>
                    {/* <div id="a_loups_kk57" class={`ex-option-control-1 v2 ${selectLight == 5 && "active"}`} onClick={()=>{
                        handleSelectLight(5)
                    }} data-group="loupes">
                        <img src={loupe1}/>
                        <span>slim scope x6.5</span>
                    </div> */}

        </div>

       
            

        <div id="a-change-loups-desc" class="ex-configurator-step-description" >Select the loupe of your choice.</div>

 <div className="selectColor d-flex">
            <div class={`ex-option-control-2 ${armColor == "#5487a3" && "active"}`} onClick={()=>{
                setArmColor("#5487a3")
            }}  data-group="frame_color">
                 <div class="ex-option-control-2-outer" style={{borderColor: "#5487a3"}}></div>
                 <div class="ex-option-control-2-inner" style={{backgroundColor: "#5487a3"}}></div>
                 <span>Antique Plum</span>
             </div>
            <div class={`ex-option-control-2 ${armColor == "#a7896b" && "active"}`} onClick={()=>{
                setArmColor("#a7896b")
            }}  data-group="frame_color">
                 <div class="ex-option-control-2-outer" style={{borderColor: "#a7896b"}}></div>
                 <div class="ex-option-control-2-inner" style={{backgroundColor: "#a7896b"}}></div>
                 <span>Antique Plum</span>
             </div>
            <div class={`ex-option-control-2 ${armColor == "#3f4344" && "active"}`} onClick={()=>{
                setArmColor("#3f4344")
            }}  data-group="frame_color">
                 <div class="ex-option-control-2-outer" style={{borderColor: "#3f4344"}}></div>
                 <div class="ex-option-control-2-inner" style={{backgroundColor: "#3f4344"}}></div>
                 <span>Antique Plum</span>
             </div>
          </div>
    </div>

    )
}