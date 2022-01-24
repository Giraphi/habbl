
import React, { Suspense} from "react"
import { Canvas } from "@react-three/fiber";
// import { StandardEffects } from "@react-three/drei";
import Model from "./model";
import styled from "styled-components";

const StyledRoot = styled.div`
    height: 55vh;
`;

const StyledCanvas = styled(Canvas)`
    canvas:focus {
        outline: none;
    }
`

export default function ThreeCanvas() {
    return (
        <StyledRoot>
            <StyledCanvas camera={{ position: [0, 0, 17], far: 500 }}>
                <ambientLight />
                <spotLight
                    intensity={2}
                    position={[40, 50, 50]}
                    penumbra={1}
                    angle={Math.PI / 6}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    castShadow={true}
                />

                <Suspense fallback={null}>
                    <Model/>
                    {/*<StandardEffects />*/}
                </Suspense>
                <gridHelper args={[1000,400, `white`, `gray`]} position={[0,-15,0]}/>
                <mesh rotation={[- Math.PI / 2, 0,0]} position={[0,-15.5,0]}>
                    <meshPhongMaterial/>
                    <planeGeometry args={[1000,1000]} />
                </mesh>
            </StyledCanvas>
            {/*<Controls />*/}
        </StyledRoot>
    )
}


