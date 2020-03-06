/**
 * MyTangramd
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {

    diamond;
    bigTriangle;
    smallTriangle;
    parallelogram;

    constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(scene);
        this.bigTriangle = new MyTriangleBig(scene);
        this.smallTriangle = new MyTriangleSmall(scene);
        this.parallelogram = new MyParallelogram(scene);
    }

    display() {
        var transf = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1, 0, 0, 1
        ];

        // Greend diamond
        this.scene.pushMatrix();
        this.scene.multMatrix(transf);
        this.scene.setDiffuse(0/255, 239/255, 0/255, 1);
        this.diamond.display();
        this.scene.popMatrix();

        // Light blue triangle
        this.scene.pushMatrix();
        this.scene.translate(-1, -1, 0);
        this.scene.setDiffuse(0/255, 155/255, 255/255, 1);
        this.bigTriangle.display();
        this.scene.popMatrix();

        // Orange triangle
        this.scene.pushMatrix();
        this.scene.translate(-3, 1, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.setDiffuse(255/255, 155/255, 0/255, 1);
        this.bigTriangle.display();
        this.scene.popMatrix();

        // Purple triangle
        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.setDiffuse(150/255, 80/255, 190/255, 1);
        this.smallTriangle.display();
        this.scene.popMatrix();

        // Yellow neck
        this.scene.pushMatrix();
        this.scene.translate(2, 1.4, 0);
        this.scene.rotate(3 * Math.PI / 4, 0, 0, 1);
        this.scene.setDiffuse(255/255, 255/255, 0/255, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        // Pink triangle
        this.scene.pushMatrix();
        this.scene.translate(0.45, 2.8, 0);
        this.scene.scale(1.25, 1.25, 1.25);
        this.scene.setDiffuse(255/255, 155/255, 207/255, 1);
        this.smallTriangle.display();
        this.scene.popMatrix();

        // Red triangle
        this.scene.pushMatrix();
        this.scene.translate(1.3, 0.7, 0);
        this.scene.rotate(7*Math.PI / 4, 0, 0, 1);
        this.scene.setDiffuse(255/255, 27/255, 27/255, 1);
        this.smallTriangle.display();
        this.scene.popMatrix();

    }

}