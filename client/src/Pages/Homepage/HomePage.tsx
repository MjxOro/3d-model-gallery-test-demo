import React from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import PageScroll from "./PageScroll";

const Homepage: React.FC = () => {
  return (
    <Canvas orthographic camera={{ zoom: 80 }}>
      <ambientLight />
      <ScrollControls>
        <Scroll html>
          <PageScroll />
          <h1>Hello World.</h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};
