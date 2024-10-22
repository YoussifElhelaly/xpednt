import iro from '@jaames/iro';
import { useEffect, useRef, useState } from 'react';
import hexToHSL from '../../utlities/hexToHsl';
import hslToHex from '../../utlities/HslToHex';


export default function ColorPicker({setColor , color}) {

    const colorInput = useRef()

    useEffect(()=>{
        let colorPicker = new iro.ColorPicker(colorInput.current , {
            // Set the size of the color picker
            width: 250,
            // Set the initial color to pure red
            color: hexToHSL(color),
            layout:[{
                component: iro.ui.Slider,
                options: {
                  id: 'hue-slider',
                  sliderType: 'hue'
                }}, {
                    component: iro.ui.Slider,
                    options: {
                      sliderType: 'saturation'
                    }
                  },]
        })
        colorPicker.on('color:change', (color)=>{
            color.hsl = {h:color.hue , s:color.saturation , l:50}
            setColor(hslToHex(color.hsl.h , color.hsl.s , color.hsl.l))
        });

        

    },[])

    return (
        <div class="wrap">
        <div class="half">
          <div class="colorPicker" ref={colorInput}></div>
        </div>
      </div>
    )
}