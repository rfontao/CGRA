/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			2, 0, 0,	//1
			0, 2, 0 	//2
		];

		this.normals = [];
		var normal = [0, 0, 1];
		this.normals.push(...normal, ...normal, ...normal);

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

