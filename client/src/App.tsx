import React from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import "./App.scss";
import HtmlScroll from "./Components/HtmlScroll";
import ThreeObjFlex from "./Components/ThreeObjFlex";
import Divider from "./Components/Divider";

const App: React.FC = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <ScrollControls pages={3} damping={5}>
          <Divider />
          <HtmlScroll />
          <ThreeObjFlex />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
