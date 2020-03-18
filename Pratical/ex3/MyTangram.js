/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {

        constructor(scene) {
                super(scene);
                this.initBuffers();
                this.diamond = new MyDiamond(scene);
                this.triangleSmall = new MyTriangleSmall(scene);
                this.parallelogram = new MyParallelogram(scene);
                this.triangle = new MyTriangle(scene);
                this.triangleBig = new MyTriangleBig(scene);
        }

        display() {

                var mat = this.scene.getAppearance

                var diamondTrans = [1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        1.0, 0.0, 0.0, 1.0];
                
                //"Green" diamond
                // this.scene.setAmbient(0/255, 239/255, 0/255, 1);
                // this.scene.setSpecular(0/255, 239/255, 0/255, 1);
                this.scene.customMaterial.apply();
                this.scene.pushMatrix();
                this.scene.multMatrix(diamondTrans);
                this.diamond.display();
                this.scene.popMatrix();

                this.scene.setDiffuse(0, 0, 0, 1);

                //Purple triangle
                this.scene.setAmbient(150/255, 80/255, 190/255, 1);
                this.scene.setSpecular(150/255, 80/255, 190/255, 1);
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI,0,0,1);
                this.scene.translate(0,-1,0);
                this.triangleSmall.display();
                this.scene.popMatrix();

                //Red triangle
                this.scene.setAmbient(255/255, 27/255, 27/255, 1);
                this.scene.setSpecular(255/255, 27/255, 27/255, 1);
                this.scene.pushMatrix();
                this.scene.rotate(-Math.PI / 4,0,0,1);
                this.scene.translate(Math.sqrt(2) - 1,Math.sqrt(2),0);
                this.triangleSmall.display();
                this.scene.popMatrix();

                //Yellow Parallelogram
                this.scene.setAmbient(255/255, 255/255, 0/255, 1);
                this.scene.setSpecular(255/255, 255/255, 0/255, 1);
                this.scene.pushMatrix();
                this.scene.rotate(-Math.PI / 4,0,0,1);
                this.scene.translate(-(4-Math.sqrt(2)),Math.sqrt(2),0);
                this.parallelogram.display();
                this.scene.popMatrix();

                //Pink triangle
                this.scene.setAmbient(255/255, 155/255, 207/255, 1);
                this.scene.setSpecular(255/255, 155/255, 207/255, 1);
                this.scene.pushMatrix();
                this.scene.rotate(-3*Math.PI / 4,0,0,1);
                this.scene.translate(-Math.sqrt(2) - 1,-(3-Math.sqrt(2)),0);
                this.triangle.display();
                this.scene.popMatrix();

                //Light blue triangle
                this.scene.setAmbient(0/255, 155/255, 255/255, 1);
                this.scene.setSpecular(0/255, 155/255, 255/255, 1);
                this.scene.pushMatrix();
                this.scene.translate(-1,-1,0);
                this.triangleBig.display();
                this.scene.popMatrix();

                //Orange triangle
                this.scene.setAmbient(255/255, 155/255, 0/255, 1);
                this.scene.setSpecular(255/255, 155/255, 0/255, 1);
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI,0,0,1);
                this.scene.translate(3,-1,0);
                this.triangleBig.display();
                this.scene.popMatrix();

        }

        enableNormalViz() {
                this.triangle.enableNormalViz();
                this.triangleBig.enableNormalViz();
                this.triangleSmall.enableNormalViz();
                this.diamond.enableNormalViz();
                this.parallelogram.enableNormalViz();
        }

        disableNormalViz() {
                this.triangle.disableNormalViz();
                this.triangleBig.disableNormalViz();
                this.triangleSmall.disableNormalViz();
                this.diamond.disableNormalViz();
                this.parallelogram.disableNormalViz();         
        }

}