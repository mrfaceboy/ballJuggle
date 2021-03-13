import { Color3, Mesh, Scene, StandardMaterial, Vector3 } from "babylonjs";
export declare class Box {
    mesh: Mesh;
    button: HTMLButtonElement;
    colorMat: StandardMaterial;
    whiteMat: StandardMaterial;
    constructor(name: string, position: Vector3, color: Color3, scene: Scene, onClick: (box: Box) => void);
    resetColor(): void;
    setwhite(): void;
}
