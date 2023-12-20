import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, Stage} from '@react-three/drei'

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
        <Canvas>
            <pointLight position={[10, 10, 10]} />
            {/* <ambientLight /> */}
            <Stage adjustCamera={2.5} shadows={false} intensity={0.5}>
            <OrbitControls
                enableDamping
                enablePan
                enableRotate
                enableZoom
                maxDistance={20}
                minDistance={4}
            />
            <ThreeCube />
            </Stage>
        </Canvas>
    );
  };
  
  export default ThreeComponent;
  