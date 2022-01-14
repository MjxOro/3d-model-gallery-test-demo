import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Html, Torus, Box as BoxDrei, Scroll } from "@react-three/drei";
import { Flex, Box } from "@react-three/flex";
import Model from "./MambaPanther";

const ThreeObjFlex = () => {
  const { viewport } = useThree();
  const torusRef = useRef<any>();
  const cubeRef = useRef<any>();
  useFrame(() => {
    torusRef.current.rotation.x = torusRef.current.rotation.y += 0.01;
    cubeRef.current.rotation.x = cubeRef.current.rotation.y += 0.01;
  });
  return (
    <Scroll>
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
            <Torus ref={torusRef}>
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
            <BoxDrei ref={cubeRef}>
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
            <Html as="h1">Desmond's 3d Model</Html>
          </Box>
          <Box centerAnchor marginTop={2}>
            <Model scale={[0.25, 0.25, 0.25]} />
          </Box>
        </Flex>
      </group>
    </Scroll>
  );
};

export default ThreeObjFlex;
