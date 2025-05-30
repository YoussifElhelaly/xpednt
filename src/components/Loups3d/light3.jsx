/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ./public/A1-A4/A1.glb 
*/

import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import selectFrameAtom from '../../atoms/selectFrame';
import handleYAxis from '../../utlities/handleYAxis';

import { useRecoilValue } from 'recoil';
import * as THREE from 'three';
import loupeColorAtom from '../../atoms/loupeColor';

export function Light3d3() {


  const gltf = useLoader(GLTFLoader, '/loupes/ER5.5X.glb');
  const frame = useRecoilValue(selectFrameAtom)
  const loupeColor = useRecoilValue(loupeColorAtom)
  const clonedScene = gltf.scene.clone();

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if ((child.name == "柱体005" && child.isMesh) || (child.name == "柱体009" && child.isMesh)) {
        child.material.color = new THREE.Color(loupeColor); // Change color to red
        child.material.needsUpdate = true;
      }
      // if (child.name == "平面011" && child.isMesh) {
      //   child.material.color = new THREE.Color(faceColor); // Change color to red
      //   child.material.needsUpdate = true;
      // }
    });
    // gltf.scene.current.parent.remove(gltf.current);
  }, [gltf, loupeColor]);
  return (
    <>
      <primitive object={gltf.scene} position={[-0.035, 0.015, handleYAxis(frame.id)]} rotation={[0, Math.PI / 50, 0]} />
      <primitive object={clonedScene} position={[0.035, 0.015, handleYAxis(frame.id)]} rotation={[0, Math.PI / 50, 0]} />
    </>

  )
}

useGLTF.preload('/loupes/ER5.5X.glb')
