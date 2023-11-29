/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
// import { Druid } from "./Druid";
import { useThree } from "@react-three/fiber";
import Woman from "./Woman";

export const Experience = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);

  const { isPresenting } = useXR();

  useHitTest((hitMatrix) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
  });

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {isPresenting &&
        models.map(({ position, id }) => {
          return (
            <>
              <group position={[0, -1, 0]}>
                <Woman key={id} position={position} />
              </group>
            </>
          );
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh
            rotation={[-0.5 * Math.PI, 0, 0]}
            ref={reticleRef}
            receiveShadow
          >
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && <Woman />}
    </>
  );
};
