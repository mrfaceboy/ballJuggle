import { Mesh, Vector3 } from "babylonjs";
import { Box } from "./Box";


export  class Ball
{
    target:Vector3 = null;
    speed = 1;
    mesh:Mesh;
    currentBox:Box;
    constructor()
    {
        this.mesh = Mesh.CreateSphere('sphere1', 16, 1);
    }

    setBox(box:Box)
    {
        if(this.currentBox)
        {
            this.currentBox.resetColor();
        }
        this.currentBox = box;
        this.target = box.mesh.position;
    }

    update(dt:number)
    {
        if(this.target)
        {
            
            let dist = Vector3.Distance(this.target, this.mesh.position);
            var alpha =  1 / dist * dt /1000 * 5;
            if(dist <= 1)
            {
                let lastPos = this.mesh.position;
                this.mesh.position = this.target;
                this.target = null;
                this.currentBox.setwhite();
                this.mesh.position = Vector3.Lerp(this.mesh.position,lastPos,1 + (1 - dist));
            }
            else this.mesh.position = Vector3.Lerp(this.mesh.position,this.target, alpha);
            
        }
    }
}