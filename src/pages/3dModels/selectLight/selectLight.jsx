import { useRecoilState } from 'recoil'
import dragonFly from '../../../assets/img/x001.webp'
import selectLightAtom from '../../../atoms/selectLight'
export default function SelectLightStep() {
    const [selectLight, setSelectLight] = useRecoilState(selectLightAtom)
   
  function handleSelectLight(light, name) {
    if(light == selectLight.id) {
      setSelectLight({id:0,name:""})
    } else {
      setSelectLight({id : light , name})
    }
  }
    return (
             
        <div id="step_4" class="ex-configurator-step active">
        <div class="ex-configurator-step-header"><h3>LIGHT</h3></div>
        <div id="a-change-lights" class="ex-configurator-step-options grid">
           
                    <div id="a_lights_total" onClick={()=>{
                        handleSelectLight(1 , "Dragon FLy")
                    }} class={`ex-option-control-1 v2 ${selectLight == 1 && "active"}` } data-group="lights">
                        <img src={dragonFly} />
                        <span>Dragon FLy</span>
                    </div>
                 

        </div>
            
    </div>
    )
}