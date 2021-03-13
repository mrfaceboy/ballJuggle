import { Color3, Mesh, Scene, StandardMaterial, Vector3 } from "babylonjs";


export  class Box
{
    mesh:Mesh;
    button:HTMLButtonElement;
    colorMat:StandardMaterial;
    whiteMat:StandardMaterial;
    constructor(name:string, position:Vector3, color:Color3, scene:Scene, onClick:(box:Box) => void)
    {
        this.mesh = Mesh.CreateBox('box', 1);
        let mat = new StandardMaterial("",scene);
        this.colorMat = mat;
        mat.diffuseColor = color;
        this.mesh.material = mat;
        this.mesh.position = position;

        let mat2 = new StandardMaterial("",scene);
        mat2.diffuseColor = new Color3(1,1,1);
        this.whiteMat = mat2;


        this.button = document.createElement("button");
        document.getElementById("buttonContainer").appendChild(this.button);
        this.button.className = "boxButton";
        this.button.onclick = () => {onClick(this)};
        // this.button.textContent = name;
        this.button.style.backgroundColor = "rgb(" + Math.floor(color.r*255) + "," + Math.floor(color.g*255) + "," + Math.floor(color.b*255) + ")";
    }

    resetColor()
    {
        this.mesh.material = this.colorMat;
    }
    setwhite()
    {
        this.mesh.material = this.whiteMat;
    }
    
}