import { Canvas } from "@react-three/fiber";
import Experience from "./components/xr-women/Experience";
import Interface from "./components/xr-women/Interface";


function App() {
  return (
    <>
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
