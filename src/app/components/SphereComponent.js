// src/app/components/SphereComponent.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <lineBasicMaterial attach="material" color="teal" wireframe />
    </mesh>
  );
};

const SphereComponent = () => {
  return (
    <Canvas>
      <Sphere />
    </Canvas>
  );
};

export default SphereComponent;
