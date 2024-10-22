import { Html, Text, useProgress } from '@react-three/drei';
import React from 'react';

export default function CustomLoader() {
  const { progress } = useProgress();
  return (
    <>
    <Text
    position={[0, 0, 0]}
    fontSize={0.011}
    color="black"
    anchorX="center"
    anchorY="middle"
    >
        {progress.toFixed(2)}
      </Text>
      </>
      )

  
}
