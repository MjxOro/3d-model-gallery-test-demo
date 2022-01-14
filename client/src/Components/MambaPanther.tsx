/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";

import glbfile from "../assets/MambaPanther.glb";

type GLTFResult = GLTF & {
  nodes: {
    Kobeeeeee: THREE.Mesh;
    helmet: THREE.Mesh;
    Plane: THREE.Mesh;
    Mamba: THREE.Mesh;
    Forever: THREE.Mesh;
    Wakanda: THREE.Mesh;
    Text: THREE.Mesh;
    Text002: THREE.Mesh;
    Text003: THREE.Mesh;
    Cube: THREE.Mesh;
    LA_Lakers_3D: THREE.Mesh;
    Text001: THREE.Mesh;
    necklace001: THREE.Mesh;
    necklace002: THREE.Mesh;
    necklace003: THREE.Mesh;
    necklace004: THREE.Mesh;
    necklace005: THREE.Mesh;
    necklace007: THREE.Mesh;
    necklace008: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Text004: THREE.Mesh;
    Text005: THREE.Mesh;
  };
  materials: {};
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | null | undefined>();
  const spotLight = useRef<any>();
  const { scene } = useThree();
  const { nodes, materials } = useGLTF(glbfile) as GLTFResult;
  useEffect(() => {
    if (spotLight.current && group.current)
      spotLight.current.target = group.current;
  }, [scene]);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.Kobeeeeee.geometry}
          material={nodes.Kobeeeeee.material}
          position={[-0.15, 0.25, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.18}
        />
        <mesh
          geometry={nodes.helmet.geometry}
          material={nodes.helmet.material}
          position={[-2.21, 4.8, -0.05]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.04}
        />
        <mesh
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[0, 5, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[4.57, 5, 5]}
        />
        <mesh
          geometry={nodes.Mamba.geometry}
          material={nodes.Mamba.material}
          position={[-3.59, 2.75, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.5}
        />
        <mesh
          geometry={nodes.Forever.geometry}
          material={nodes.Forever.material}
          position={[1.99, 2.75, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.5}
        />
        <mesh
          geometry={nodes.Wakanda.geometry}
          material={nodes.Wakanda.material}
          position={[4.19, 2.75, -0.5]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.5}
        />
        <mesh
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          position={[-2.34, 2.75, -0.5]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.5}
        />
        <mesh
          geometry={nodes.Text002.geometry}
          material={nodes.Text002.material}
          position={[4.57, 9.5, -0.25]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.29}
        />
        <mesh
          geometry={nodes.Text003.geometry}
          material={nodes.Text003.material}
          position={[-4.57, 9.5, -0.25]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.29}
        />
        <mesh
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[0, 0, -0.5]}
          scale={[4.25, 0.75, 2.75]}
        />
        <mesh
          geometry={nodes.LA_Lakers_3D.geometry}
          material={nodes.LA_Lakers_3D.material}
          position={[-2.75, 0.25, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.02}
        />
        <mesh
          geometry={nodes.Text001.geometry}
          material={nodes.Text001.material}
          position={[1.6, 0.4, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.necklace001.geometry}
          material={nodes.necklace001.material}
          position={[-2.71, 1.22, -1.34]}
          rotation={[0, 0, -Math.PI / 9]}
        />
        <mesh
          geometry={nodes.necklace002.geometry}
          material={nodes.necklace002.material}
          position={[-2.14, 0.95, -2.26]}
          rotation={[0.08, -0.03, -0.35]}
        />
        <mesh
          geometry={nodes.necklace003.geometry}
          material={nodes.necklace003.material}
          position={[0, 0.6, -3.6]}
          rotation={[0.26, 0, 0]}
        />
        <mesh
          geometry={nodes.necklace004.geometry}
          material={nodes.necklace004.material}
          position={[2.14, 0.95, -2.26]}
          rotation={[0.08, 0.03, 0.35]}
        />
        <mesh
          geometry={nodes.necklace005.geometry}
          material={nodes.necklace005.material}
          position={[2.71, 1.22, -1.34]}
          rotation={[0, 0, Math.PI / 9]}
        />
        <mesh
          geometry={nodes.necklace007.geometry}
          material={nodes.necklace007.material}
          position={[-1.3, 0.78, -3.03]}
          rotation={[0.19, -0.01, -0.14]}
        />
        <mesh
          geometry={nodes.necklace008.geometry}
          material={nodes.necklace008.material}
          position={[1.3, 0.78, -3.03]}
          rotation={[0.19, 0.01, 0.14]}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[2.93, 1.34, -0.98]}
          scale={[1, 0.32, 1]}
        />
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[3.3, 1.32, -1.1]}
          scale={[1, 0.21, 1]}
        />
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[-3.06, 1.3, -0.99]}
          scale={[1, 0.38, 1]}
        />
        <mesh
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[-3.46, 1.26, -1.15]}
          scale={[1, 0.3, 1]}
        />
        <mesh
          geometry={nodes.Text004.geometry}
          material={nodes.Text004.material}
          position={[-1.05, 9.5, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Text005.geometry}
          material={nodes.Text005.material}
          position={[1.64, 9.5, -0.5]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        />
      </group>
      <spotLight
        color={"purple"}
        position={[0, 7, 0]}
        angle={0.5}
        ref={spotLight}
        intensity={3}
      />
      <spotLight
        color={"white"}
        position={[0, 30, 0]}
        angle={0.5}
        intensity={0.5}
      />
    </>
  );
}

useGLTF.preload("/Mamba_Panther.glb");