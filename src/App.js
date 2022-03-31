import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import "./styles.css";

// big cube that surronds scene w teaxture
function Skybox() {
  // three hook
  const { scene } = useThree;
  // cubeLoader accepts array to use images to wrap
  const loader = new CubeTextureLoader();
}

function Sphere() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        color="white"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <Sphere />
    </Canvas>
  );
}
