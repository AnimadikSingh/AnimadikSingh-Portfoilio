import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Augment the React module to add missing Three.js intrinsic elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

// Also augment global JSX namespace for compatibility
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

const ReactiveSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the sphere slowly
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Smoothly interpolate scale based on hover
      const targetScale = hovered ? 2.5 : 2.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[1.5, 0, 0]} 
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={hovered ? "#00D9FF" : "#9D4EDD"} // Cyan to Purple
          attach="material"
          distort={hovered ? 0.6 : 0.3} 
          speed={hovered ? 4 : 1.5} 
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

const BackgroundParticles = () => {
   return (
     <Stars 
       radius={100} 
       depth={50} 
       count={5000} 
       factor={4} 
       saturation={0} 
       fade 
       speed={1} 
     />
   );
};

export const Scene: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]} 
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00D9FF" />
      
      <BackgroundParticles />
      <ReactiveSphere />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />
    </Canvas>
  );
};