/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {

        constructor(scene) {
                super(scene);
                this.initBuffers();
                this.square = new MyDiamond(scene);
                this.triangleSmall = new MyTriangleSmall(scene);
                this.triangleBig 
        }

        display() {

                var squareTrans = [1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        1.0, 0.0, 0.0, 1.0];

                this.scene.pushMatrix();
                this.scene.multMatrix(squareTrans);
                this.square.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.scene.rotate(Math.PI,0,0,1);
                this.scene.translate(0,-1,0);
                this.triangleSmall.display();
                this.scene.popMatrix();

        }

}