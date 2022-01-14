import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";

const PageScroll: React.FC = () => {
  const { viewport } = useThree();
  const scrollHook = useScroll();
  const pages = 3;
  useFrame((state, delta) => {
    const pageOffset = -pages * viewport.height * scrollHook.offset;
    state.camera.position.y = pageOffset;
  });
  return (
    <>
      <h1>Homepage</h1>
    </>
  );
};
export default PageScroll;
