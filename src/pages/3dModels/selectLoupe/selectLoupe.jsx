import { useRecoilState } from "recoil"
import loupe1 from "../../../assets/media/zsyd24gt/kk_new.jpg"
import selectLoupeAtom from "../../../atoms/selectLoup"

export default function SelectLoupeStep() {

    const [selectLight, setSelectLight] = useRecoilState(selectLoupeAtom)
    
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
                    {/* <div id="a_loups_kk57" class={`ex-option-control-1 v2 ${selectLight == 5 && "active"}`} onClick={()=>{
                        handleSelectLight(5)
                    }} data-group="loupes">
                        <img src={loupe1}/>
                        <span>slim scope x6.5</span>
                    </div> */}

        </div>

       
            

        <div id="a-change-loups-desc" class="ex-configurator-step-description" >Select the loupe of your choice.</div>

 
    </div>

    )
}