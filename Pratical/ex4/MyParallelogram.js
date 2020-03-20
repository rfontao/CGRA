/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	// 0
			2, 0, 0,	// 1
			3, 1, 0,	// 2
			1, 1, 0,    // 3

			// Back side
			0, 0, 0,    // 4
			2, 0, 0,    // 5
			3, 1, 0,    // 6
			1, 1, 0     // 7
		];

		this.normals = [];
		var normal = [0, 0, 1];
		this.normals.push(...normal, ...normal, ...normal, ...normal);
		normal = [0, 0, -1];
		this.normals.push(...normal, ...normal, ...normal, ...normal);

		//Counter-clockwise reference of vertices
		this.indices = [
			// Front
			0, 1, 2,
			0, 2, 3,

			// Back
			6, 5, 4,
			7, 6, 4
		];

		// Texture
		this.texCoords = [
			0.25, 0.75,
			0.75, 0.75,
			1, 1,
			0.5, 1,

			0.25, 0.75,
			0.75, 0.75,
			1, 1,
			0.5, 1
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

