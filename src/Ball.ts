import { Mesh, Vector3 } from "babylonjs";
import { Box } from "./Box";

//ball class handles its own movement
export  class Ball
{
    //target position for movement
    target:Vector3 = null;
    //mesh of the ball
    mesh:Mesh;
    //current box the ball is next to
    currentBox:Box;
    constructor()
    {
        this.mesh = Mesh.CreateSphere('sphere1', 16, 1);
    }

    //sets the target and moves to it.
    setBox(box:Box)
    {
        if(this.currentBox)
        {
            if(this.currentBox == box) return;
            this.currentBox.resetColor();
        }
        
        this.currentBox = box;
        this.target = box.mesh.position;
    }

    //update called to move the ball
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
                //this is to prevent too much if the last update moved the ball inside the box.
                this.mesh.position = Vector3.Lerp(this.mesh.position,lastPos,1 + (1 - dist));
            }
            else this.mesh.position = Vector3.Lerp(this.mesh.position,this.target, alpha);
            
        }
    }
}