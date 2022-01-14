import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Flex, Box } from "@react-three/flex";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Scroll,
  ScrollControls,
  Torus,
  Html,
  useScroll,
  Plane,
  Box as BoxDrei,
} from "@react-three/drei";
import "./App.scss";
import Model from "./Components/MambaPanther";

const BackGrid: React.FC<any> = ({ ...props }) => {
  const { viewport } = useThree();

  return (
    <>
      {/*
    <Plane {...props} args={[80, 80, 128, 128]}>
      <meshStandardMaterial color="#98ffcc" wireframe side={THREE.DoubleSide} />
    </Plane>
    */}
      <BoxDrei {...props} args={[160, 160, 80, 64, 64, 64]}>
        <meshStandardMaterial
          color="#98ffcc"
          wireframe
          side={THREE.DoubleSide}
        />
      </BoxDrei>
    </>
  );
};
const HtmlScroll: React.FC = () => {
  const { size, viewport } = useThree();
  return (
    <Scroll html>
      <div
        className="bruh"
        style={{
          width: `${size.width}px`,
          height: "100vh",
        }}
      >
        <header className="bruh__header">
          <h1 className="bruh__name"> WEBSITE NAME</h1>
          <nav className="bruh__nav">
            <p className="bruh__options">Home</p>
            <p className="bruh__options">About </p>
            <p className="bruh__options">Projects </p>
          </nav>
        </header>
      </div>{" "}
      {/*
      <div
        className="bruh"
        style={{
          width: `${size.width}px`,
          height: "100vh",
        }}
      >
        <header className="bruh__header">
          <h1 className="bruh__name"> WEBSITE NAME</h1>
          <nav className="bruh__nav">
            <p className="bruh__options">Home</p>
            <p className="bruh__options">About </p>
            <p className="bruh__options">Projects </p>
          </nav>
        </header> </div>
      */}
    </Scroll>
  );
};
const Flexing = () => {
  const { viewport } = useThree();
  const torusRef1 = useRef<any>();
  const torusRef2 = useRef<any>();
  useFrame(() => {
    torusRef1.current.rotation.x = torusRef1.current.rotation.y += 0.01;
    torusRef2.current.rotation.x = torusRef2.current.rotation.y += 0.01;
  });
  return (
    <group>
      <Flex
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        size={[viewport.width, 0, 0]}
        position={[-viewport.width / 2, 0, 0]}
      >
        <Box justifyContent="center" alignItems="center">
          <Html as="h1">TORUS</Html>
        </Box>
        <Box centerAnchor>
          <Torus ref={torusRef1}>
            <meshToonMaterial color="yellow" />
          </Torus>
        </Box>
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        size={[viewport.width, 0, 0]}
        position={[-viewport.width / 2, -viewport.height, 0]}
      >
        <Box justifyContent="center" alignItems="center">
          <Html as="h1">Cube</Html>
        </Box>
        <Box centerAnchor>
          <BoxDrei ref={torusRef2}>
            <meshToonMaterial color="pink" />
          </BoxDrei>
        </Box>
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        size={[viewport.width, 0, 0]}
        position={[-viewport.width / 2, -2 * viewport.height, 0]}
      >
        <Box justifyContent="center" alignItems="center">
          <Html as="h1">Desmond's Scam</Html>
        </Box>
        <Box centerAnchor marginTop={2}>
          <Model scale={[0.25, 0.25, 0.25]} />
        </Box>
      </Flex>
    </group>
  );
};
const ThreeBackground = () => {
  return (
    <Scroll>
      <Flexing />
    </Scroll>
  );
};
const Divider: React.FC = () => {
  const { viewport } = useThree();
  return (
    <Scroll>
      <BackGrid
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5.5 * viewport.height, -8]}
      />
    </Scroll>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <ScrollControls pages={3} damping={5}>
          <Divider />
          <HtmlScroll />
          <ThreeBackground />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
