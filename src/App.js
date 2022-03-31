import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import "./styles.css";

// big cube that surronds scene w teaxture
function Skybox() {
  // three hook
  const scene = useThree;
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg"
  ]);
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  // null bc no geometry was used . So we return nothing
  return null;
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
      <Skybox />
      <Sphere />
    </Canvas>
  );
}
