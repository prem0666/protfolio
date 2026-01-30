import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function HolographicOrb({ state }) {
  const pointsRef = useRef();
  const ringRef = useRef();

  // Color mapping based on state
  const colors = {
    listening: '#00f3ff', // Cyan
    processing: '#0066ff', // Electric Blue
    speaking: '#8b00ff',   // Purple
    idle: '#00f3ff'
  };

  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta * 0.2;
    pointsRef.current.rotation.x += delta * 0.1;
    ringRef.current.rotation.z += delta * 0.5;
    
    // Pulse effect
    const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    pointsRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group>
      {/* Central Particle Sphere */}
      <Points ref={pointsRef} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={colors[state] || colors.idle}
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
        <Sphere args={[1.5, 32, 32]}>
          <meshBasicMaterial wireframe visible={false} />
        </Sphere>
      </Points>

      {/* Orbital Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color={colors[state]} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}