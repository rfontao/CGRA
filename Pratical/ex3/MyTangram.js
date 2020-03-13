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
                this.parallelogram = new MyParallelogram(scene);
                this.triangle = new MyTriangle(scene);
                this.triangleBig = new MyTriangleBig(scene);
        }

        display() {

                var squareTrans = [1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        1.0, 0.0, 0.0, 1.0];
                
                //Green square
                this.scene.pushMatrix();
                this.scene.multMatrix(squareTrans);
                this.square.display();
                this.scene.popMatrix();

                //Purple triangle
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI,0,0,1);
                this.scene.translate(0,-1,0);
                this.triangleSmall.display();
                this.scene.popMatrix();

                //Red triangle
                this.scene.pushMatrix();
                this.scene.rotate(-Math.PI / 4,0,0,1);
                this.scene.translate(Math.sqrt(2) - 1,Math.sqrt(2),0);
                this.triangleSmall.display();
                this.scene.popMatrix();

                //Yellow Parallelogram
                this.scene.pushMatrix();
                this.scene.rotate(-Math.PI / 4,0,0,1);
                this.scene.translate(-(4-Math.sqrt(2)),Math.sqrt(2),0);
                this.parallelogram.display();
                this.scene.popMatrix();

                //Pink triangle
                this.scene.pushMatrix();
                this.scene.rotate(-3*Math.PI / 4,0,0,1);
                this.scene.translate(-Math.sqrt(2) - 1,-(3-Math.sqrt(2)),0);
                this.triangle.display();
                this.scene.popMatrix();

                //Light blue triangle
                this.scene.pushMatrix();
                this.scene.translate(-1,-1,0);
                this.triangleBig.display();
                this.scene.popMatrix();

                //Orange triangle
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI,0,0,1);
                this.scene.translate(3,-1,0);
                this.triangleBig.display();
                this.scene.popMatrix();

        }

}