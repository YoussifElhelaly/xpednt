import SelectFrameStep from "./selectFrame/selectFrame";
import './CustomeLoupe.css'
import { useMultistepForm } from "../../customHook/multiStepForm";
import SelectLightStep from "./selectLight/selectLight";
import SelectTipStep from "./selectTip/selectTip";
import SelectLoupeStep from "./selectLoupe/selectLoupe";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { A1 } from "../../components/Frames/A1";
import { OrbitControls, Stage, Text } from "@react-three/drei";
import CustomLoader from "../../components/Loader/Loader";
import A2 from "../../components/Frames/A2";
import A3 from "../../components/Frames/A3";
import selectFrameAtom from "../../atoms/selectFrame";
import { useRecoilValue } from "recoil";
import selectLightAtom from "../../atoms/selectLight";
import { SlimScope6 } from "../../components/Lights3d/slimeScope3";
import selectLoupeAtom from "../../atoms/selectLoup";
import { DragonFLy } from "../../components/Lights3d/dragonFly";
import { Light3d4 } from "../../components/Loups3d/light4";
import { Light3d3 } from "../../components/Loups3d/light3";
import { Light3d2 } from "../../components/Loups3d/light2";
import { Light3d1 } from "../../components/Loups3d/light1";
import StripePage from "../../components/stripe/stripePage";
import StripeForm from "../../components/stripe/stripeForm";
import axios from "axios";
import { Light3d5 } from "../../components/Loups3d/light5";
import { Light3d6 } from "../../components/Loups3d/light6";
import { Light3d7 } from "../../components/Loups3d/light7";
export default function CustomeYourLoupe () {
    const { steps, currentStepIndex , goTo, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <SelectFrameStep  />,
      <SelectTipStep  />,
      <SelectLoupeStep  />,
      <SelectLightStep   />,
      <StripeForm/>
    ])
    
    


  const selectFrameValue = useRecoilValue(selectFrameAtom)
  const selectLightValue = useRecoilValue(selectLightAtom)
  const selectLoupeValue = useRecoilValue(selectLoupeAtom)



    const renderModel = () => {
    
        switch (selectFrameValue.id) {
          case 1:
            return <A1  />;
          case 2:
            return <A2  />;
          case 3:
            return <A3 />;
          default:
            return null;
        }
      };
      const renderLoupe = () => {
        switch (selectLoupeValue.id) {
          case 1:
            return <Light3d1  />;
          case 2:
            return <Light3d2  />;
          case 3:
            return <Light3d3 />;
            case 4 : 
            return <Light3d4 />;
            case 5 : 
            return <Light3d5 x={4}/>
            case 6 : 
            return <Light3d6 />;
            case 7 : 
            return <Light3d7 />;
            
          default:
            return null;
        }
      };
      const renderLight = () => {
        switch (selectLightValue.id) {
          case 1:
            return <DragonFLy  />;
          default:
            return null;
        }
      };

    return (
        <>
            <div class="container d-flex justify-content-around ex-main CustomeYourLoupe">
                        <div class="text-center ex-left">
                        <Canvas >
   
                        <Suspense fallback={<CustomLoader />}>
                        <Stage environment={"sunset"} position={[10,0,0]} intensity={1}>

                        {
                          renderModel()
                        }
                        { 
                          renderLight()
                        }
                        {
                          renderLoupe()
                        }
                        </Stage>
                        </Suspense>
                        <OrbitControls
                            enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={0}
                            maxDistance={0.2}
                            minDistance={0.2}
                        />
                        </Canvas>
                        </div>
                        <div class="text-center ex-right">          
                                
                            {step}

                            
                            <div>

                        
                                {
                                    !isLastStep && 
                                    <div class="ex-configurator-step-button a-change-position_step_2" onClick={next}>
                                            NEXT STEP
                                        </div>
                                }
                                {
                                    !isFirstStep &&
                                    <div class="ex-configurator-step-button a-change-position_step_2" onClick={back}>
                                    BACK STEP
                                </div>
                                }
                                </div>
                
                                  
                           
                        </div>
            </div>
            <div class="step-list-wrapper">
                    <ul class="step-list">
                        <li id="step-list-item-frame" onClick={()=>{
                            goTo(0)
                        }} class={`step-list-item ${currentStepIndex >= 0 && "current"}`}>
                            <div class="step-icon">
                                <span>1</span>
                            </div>
                            <div class="step-text">
                                <h4 class="step-title">FRAME</h4>
                                
                            </div>
                        </li>
                        <li id="step-list-item-tips" onClick={()=>{
                            goTo(1)
                        }} class={`step-list-item ${currentStepIndex >= 1 && "current"}`}>
                            <div class="step-icon">
                                <span>2</span>
                            </div>
                            <div class="step-text">
                                <h4 class="step-title">TEMPLE COLOUR</h4>
                             
                            </div>
                        </li>
                        <li id="step-list-item-loupe" onClick={()=>{
                            goTo(2)
                        }} class={`step-list-item ${currentStepIndex >= 2 && "current"}`}>
                            <div class="step-icon">
                                <span>3</span>
                            </div>
                            <div class="step-text">
                                <h4 class="step-title">LOUPE</h4>
                                <p class="step-choice"><span id="step-list-item-loupe-text"></span><span id="step-list-item-loupe-color-text"></span></p>
                            </div>
                        </li>
                        <li id="step-list-item-light"  onClick={()=>{
                            goTo(3)
                        }} class={`step-list-item ${currentStepIndex >= 3 && "current"}`}>
                            <div class="step-icon">
                                <span>4</span>
                            </div>
                            <div class="step-text">
                                <h4 class="step-title">LIGHT</h4>
                                <p class="step-choice" id="step-list-item-light-text"></p>
                            </div>
                        </li>
                        <li id="step-list-item-form" onClick={()=>{
                            goTo(4)
                        }} class={`${currentStepIndex >= 4 && "current"} step-list-item`}>
                            <div class="step-icon">
                                <span>5</span>
                            </div>
                            <div class="step-text">
                                <h4 class="step-title">PAYMENT</h4>
                                <p class="step-choice"></p>
                            </div>
                        </li>
                    </ul>
            </div>
        </>
    )
}