import { Ball } from "./Ball";
import { Box } from "./Box";
export declare class App {
    ball: Ball;
    boxes: Box[];
    constructor();
    setButtonEnabled(): void;
    onClick(box: Box): void;
}
