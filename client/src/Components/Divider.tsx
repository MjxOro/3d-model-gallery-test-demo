import * as THREE from "three";
import React from "react";
import { Box as BoxDrei, Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const BackGrid: React.FC<any> = ({ ...props }) => {
  return (
    <>
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

export default Divider;
