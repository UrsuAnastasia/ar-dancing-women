import { ARButton, XR, Controllers } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { CharacterAnimationsProvider } from "../../contexts/CharacterAnimations";
import Interface from "./Interface";
import React, { useCallback, useState } from "react";

export const XrOverlayContainer = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  let interfaceRef = useCallback((node) => {
    if (node !== null) {
      setOverlayContent(node);
    }
  }, []);

  return (
    <React.Fragment>
      <CharacterAnimationsProvider>
        <ARButton
          className="ar-button"
          sessionInit={{
            requiredFeatures: ["hit-test"],
            optionalFeatures: ["dom-overlay"],
            domOverlay: {
              root: overlayContent,
            },
          }}
        />
        <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
          <XR foveation={0}>
            <Controllers />
            <Experience />
          </XR>
        </Canvas>
        <Interface ref={interfaceRef} />
      </CharacterAnimationsProvider>
    </React.Fragment>
  );
};
