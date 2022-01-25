
import React, { Suspense} from "react"
import { Canvas } from "@react-three/fiber";
// import { StandardEffects } from "@react-three/drei";
import Model from "./model";
import styled from "styled-components";
import FlyingPageObjects from "./flying-page-objects";

const StyledRoot = styled.div`
    height: 55vh;
`;

const StyledCanvas = styled(Canvas)`
    canvas:focus {
        outline: none;
    }
`

// #ffc7f1

export default function ThreeCanvas() {
    return (
        <StyledRoot>
            <StyledCanvas camera={{ position: [0, 0, 20], far: 500 }}>
                <ambientLight />
                <spotLight
                    intensity={2}
                    position={[40, 50, 50]}
                    penumbra={1}
                    angle={Math.PI / 6}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    castShadow={true}
                    color={"deeppink"}
                />

                <Suspense fallback={null}>
                    <Model/>
                    {/*<StandardEffects />*/}
                </Suspense>
                <gridHelper args={[1000,400, `white`, `white`]} position={[0,-15,0]}/>
                <mesh rotation={[- Math.PI / 2, 0,0]} position={[0,-15.5,0]}>
                    <meshPhongMaterial color={"#ffc7f1"}/>
                    <planeGeometry args={[1000,1000]} />
                </mesh>

                <group position={[0, 0, 0]}>
                    <FlyingPageObjects numObjects={50} minDistance={20} maxDistance={40} height={20}>
                        <meshStandardMaterial attach="material" color="red" />
                        {/*heart geometry*/}
                        {/*https://threejs.org/docs/#api/en/extras/core/Shape*/}
                        <boxBufferGeometry args={[1, 1, 1]} />
                    </FlyingPageObjects>
                </group>
            </StyledCanvas>
            {/*<Controls />*/}
        </StyledRoot>
    )
}


