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

                // Init materials
                this.redMaterial = new CGFappearance(this.scene);
                this.redMaterial.setAmbient(255/255, 27/255, 27/255, 1);
                this.redMaterial.setDiffuse(0, 0, 0, 1);
                this.redMaterial.setSpecular(255/255, 27/255, 27/255, 1);
                this.redMaterial.setShininess(10.0);

                this.purpleMaterial = new CGFappearance(this.scene);
                this.purpleMaterial.setAmbient(150/255, 80/255, 190/255, 1);
                this.purpleMaterial.setDiffuse(0, 0, 0, 1);
                this.purpleMaterial.setSpecular(150/255, 80/255, 190/255, 1);
                this.redMaterial.setShininess(10.0);

                this.yellowMaterial = new CGFappearance(this.scene);
                this.yellowMaterial.setAmbient(255/255, 255/255, 0/255, 1);
                this.yellowMaterial.setDiffuse(0, 0, 0, 1);
                this.yellowMaterial.setSpecular(255/255, 255/255, 0/255, 1);
                this.yellowMaterial.setShininess(10.0);

                this.pinkMaterial = new CGFappearance(this.scene);
                this.pinkMaterial.setAmbient(255/255, 155/255, 207/255, 1);
                this.pinkMaterial.setDiffuse(0, 0, 0, 1);
                this.pinkMaterial.setSpecular(255/255, 155/255, 207/255, 1);
                this.pinkMaterial.setShininess(10.0);

                
                this.lightBlueMaterial = new CGFappearance(this.scene);
                this.lightBlueMaterial.setAmbient(0/255, 155/255, 255/255, 1);
                this.lightBlueMaterial.setDiffuse(0, 0, 0, 1);
                this.lightBlueMaterial.setSpecular(0/255, 155/255, 255/255, 1);
                this.lightBlueMaterial.setShininess(10.0);

                this.orangeMaterial = new CGFappearance(this.scene);
                this.orangeMaterial.setAmbient(255/255, 155/255, 0/255, 1);
                this.orangeMaterial.setDiffuse(0, 0, 0, 1);
                this.orangeMaterial.setSpecular(255/255, 155/255, 0/255, 1);
                this.orangeMaterial.setShininess(10.0);

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

                //Purple triangle
                this.purpleMaterial.apply();
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI,0,0,1);
                this.scene.translate(0,-1,0);
                this.triangleSmall.display();
                this.scene.popMatrix();

                //Red triangle
                this.redMaterial.apply();
                this.scene.pushMatrix();
                this.scene.rotate(-Math.PI / 4,0,0,1);
                this.scene.translate(Math.sqrt(2) - 1,Math.sqrt(2),0);
                this.triangleSmall.display();
                this.scene.popMatrix();

                //Yellow Parallelogram
                this.yellowMaterial.apply();
                this.scene.pushMatrix();
                this.scene.rotate(-Math.PI / 4,0,0,1);
                this.scene.translate(-(4-Math.sqrt(2)),Math.sqrt(2),0);
                this.parallelogram.display();
                this.scene.popMatrix();

                //Pink triangle
                this.pinkMaterial.apply();
                this.scene.pushMatrix();
                this.scene.rotate(-3*Math.PI / 4,0,0,1);
                this.scene.translate(-Math.sqrt(2) - 1,-(3-Math.sqrt(2)),0);
                this.triangle.display();
                this.scene.popMatrix();

                //Light blue triangle
                this.lightBlueMaterial.apply();
                this.scene.pushMatrix();
                this.scene.translate(-1,-1,0);
                this.triangleBig.display();
                this.scene.popMatrix();

                //Orange triangle
                this.orangeMaterial.apply();
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