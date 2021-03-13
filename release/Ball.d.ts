import { Mesh, Vector3 } from "babylonjs";
import { Box } from "./Box";
export declare class Ball {
    target: Vector3;
    mesh: Mesh;
    currentBox: Box;
    constructor();
    setBox(box: Box): void;
    update(dt: number): void;
}
