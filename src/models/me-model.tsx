import React from "react";
import {Mesh} from "three";
import {GLTF} from "three-stdlib";

export type MeGLTFResult = GLTF & {
    nodes: {
        mesh_0: Mesh;
    };
};

export interface MeModelProps {
    meGltfResult: MeGLTFResult;
    scale?: [number, number, number];
    rotation?: [number, number, number];
    position?: [number, number, number];
}

export default function MeModel(props: MeModelProps) {
    return (
        <mesh
            geometry={props.meGltfResult.nodes.mesh_0.geometry}
            material={props.meGltfResult.nodes.mesh_0.material}
            receiveShadow={true}
        />
    );
}
