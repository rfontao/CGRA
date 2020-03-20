/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
        
        this.quad = new MyQuad(scene);
        this.topMaterial = new CGFappearance(scene);
        this.topMaterial.loadTexture('images/mineTop.png');
        this.botMaterial = new CGFappearance(scene);
        this.botMaterial.loadTexture('images/mineBottom.png');
        this.sideMaterial = new CGFappearance(scene);
        this.sideMaterial.loadTexture('images/mineSide.png');

	}
	
	display() {

        if (this.scene.nearestFiltering)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        this.sideMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.quad.display();    
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();    
        this.scene.popMatrix();    

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();    
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, -1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();    
        this.scene.popMatrix();

        if (this.scene.nearestFiltering)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        this.botMaterial.apply();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();    
        this.scene.popMatrix();  
        
        if (this.scene.nearestFiltering)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        this.topMaterial.apply();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, -1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();    
        this.scene.popMatrix();

    }
    
}

