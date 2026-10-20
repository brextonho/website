import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'

const ThreeCube: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
  
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
    });
  
    return (
      <mesh ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'cyan'} /> */}
        <meshNormalMaterial/> 
      </mesh>
    );
  };
  
  const ThreeComponent: React.FC = () => {
    return (
        <Canvas camera={{ position: [0, 0, 8] }}>
            <OrbitControls
                enableDamping
                enablePan
                enableRotate
                enableZoom
                maxDistance={20}
                minDistance={4}
            />
            <ThreeCube />
        </Canvas>
    );
  };
  
  export default ThreeComponent;
  