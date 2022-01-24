import React, {useEffect, useRef} from "react";
import {OrbitControls, TransformControls, useGLTF} from "@react-three/drei";
import MeModel, {MeGLTFResult} from "./models/me-model";
import {useFrame} from "@react-three/fiber";
import {Group, Mesh} from "three";
import {easings, useSpring, animated} from "@react-spring/three";

export default function Model() {
    const orbitRef = useRef<any>()
    const meGlTf = useGLTF(`${process.env.PUBLIC_URL}/models/me.glb`) as MeGLTFResult;

    const spring = useSpring({
        config: { duration: 700, easing: easings.easeInOutSine },
        loop: { reverse: true },
        from: {
            rotateX: -0.04,
            rotateY: 0.025,
            rotateZ: -0.03,
        },
        to: {
            rotateX: 0.04,
            rotateY: -0.025,
            rotateZ: 0.03,
        }
    });

    return (
        <>
            {/*<TransformControls ref={transformControlsRef} mode={"rotate"}>*/}
            <group position={[0, -3, 0]} rotation={[0, 0, 0.07]} dispose={null} scale={[50,50,50]}>
                <animated.group
                    rotation-x={spring.rotateX}
                    rotation-y={spring.rotateY}
                    rotation-z={spring.rotateZ}
                >
                    <MeModel meGltfResult={meGlTf} />
                </animated.group>
            </group>
            {/*</TransformControls>*/}
            <OrbitControls ref={orbitRef}/>
        </>
    )
}
