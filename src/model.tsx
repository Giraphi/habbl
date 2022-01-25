import React, {useRef} from "react";
import {OrbitControls, useGLTF} from "@react-three/drei";
import MeModel, {MeGLTFResult} from "./models/me-model";
import {easings, useSpring, animated} from "@react-spring/three";

// loop: {reverse: true} would be what we actually want, but
// it sometimes breaks if component is re-rendered

const springAConfig = {
    config: {duration: 600, easing: easings.easeInOutSine},
    loop: true,
    from: {
        rotateX: 0.02,
        rotateY: -0.04,
        rotateZ: -0.01,
    },
    to: [{
        rotateX: -0.02,
        rotateY: 0.04,
        rotateZ: 0.01,
    },
    {
        rotateX: 0.02,
        rotateY: -0.04,
        rotateZ: -0.01,
    }
    ]
}

const springBConfig = {
    config: {duration: 900, easing: easings.easeInOutSine},
    loop: true,
    from: {
        rotateX: -0.04,
        rotateY: 0.025,
        rotateZ: -0.03,
    },
    to: [
        {
            rotateX: 0.04,
            rotateY: -0.025,
            rotateZ: 0.03,
        },
        {
            rotateX: -0.04,
            rotateY: 0.025,
            rotateZ: -0.03,
        }
    ]
}

export default function Model() {
    const orbitRef = useRef<any>()
    const meGlTf = useGLTF(`${process.env.PUBLIC_URL}/models/me.glb`) as MeGLTFResult;

    const springA = useSpring(springAConfig);
    const springB = useSpring(springBConfig);

    return (
        <>
            {/*<TransformControls ref={transformControlsRef} mode={"rotate"}>*/}
            <group position={[-6, -3, 0]} rotation={[0, Math.PI / 3, 0.07]} dispose={null} scale={[50, 50, 50]}>
                <animated.group
                    rotation-x={springA.rotateX}
                    rotation-y={springA.rotateY}
                    rotation-z={springA.rotateZ}
                >
                    <MeModel meGltfResult={meGlTf}/>
                </animated.group>
            </group>

            <group position={[6, -3, 0]} rotation={[0, -Math.PI / 3, 0.07]} dispose={null} scale={[50, 50, 50]}>
                <animated.group
                    rotation-x={springB.rotateX}
                    rotation-y={springB.rotateY}
                    rotation-z={springB.rotateZ}
                >
                    <MeModel meGltfResult={meGlTf}/>
                </animated.group>
            </group>


            {/*</TransformControls>*/}
            <OrbitControls ref={orbitRef}/>
        </>
    )
}
