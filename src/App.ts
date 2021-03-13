import * as BABYLON from "babylonjs";
import { Ball } from "./Ball";
import { Box } from "./Box";

export class App
{

    ball:Ball;
    boxes:Box[] = [];
    constructor()
    {
        // Get the canvas DOM element
        var canvas:HTMLCanvasElement = document.createElement("canvas");
        document.body.style.margin = "0px";
        document.body.appendChild(canvas);
        canvas.style.margin = "0";
        canvas.style.padding = "0";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = "100%";
        canvas.style.height = "100%";

        // Load the 3D engine
        var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
        // CreateScene function that creates and return the scene
        var scene = new BABYLON.Scene(engine);
        // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}
        var camera = new BABYLON.ArcRotateCamera('camera1',0,1,15, new BABYLON.Vector3(0,0,0), scene);
        camera.inertialAlphaOffset = 0;
        camera.inertialBetaOffset = 0;
        camera.inertialRadiusOffset = 0;
        camera.inertialPanningX = 0;
        camera.inertialPanningY = 0;
        camera.inertia = 0;
        camera.speed = 100000000;
        // Target the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
        // Attach the camera to the canvas
        camera.attachControl(canvas,false);
        // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        // Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
        
        this.ball = new Ball();
        scene.addMesh(this.ball.mesh);


        let box1 = new Box("red box", new BABYLON.Vector3(-5,0,0), new BABYLON.Color3(1,0,0), scene, this.onClick.bind(this));
        this.boxes.push(box1);
        scene.addMesh(box1.mesh);

        let box2 = new Box("green box", new BABYLON.Vector3(5,0,0), new BABYLON.Color3(0,1,0), scene, this.onClick.bind(this));
        this.boxes.push(box2);
        scene.addMesh(box2.mesh);

        let box3 = new Box("blue box", new BABYLON.Vector3(0,0,5), new BABYLON.Color3(0,0,1), scene, this.onClick.bind(this));
        this.boxes.push(box3);
        scene.addMesh(box3.mesh);
        
        // run the render loop
        engine.runRenderLoop(() => {
            scene.render();
            this.ball.update(engine.getDeltaTime());
            this.setButtonEnabled(this.ball.target == null);
        });
        // the canvas/window resize event handler
        window.addEventListener('resize', function(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            engine.resize();
        });
    }

    setButtonEnabled(enable:boolean)
    {
        this.boxes.forEach(b => b.button.disabled = !enable)
    }

    onClick(box:Box)
    {
        if(!this.ball.target) this.ball.setBox(box)
    }
}