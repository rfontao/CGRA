/**
 * MyUnitCube   
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {

        this.vertices = [];
        this.normals = [];
        this.indices = [];

        var dist = 0.5;

        for (let i = 0; i < 6; i++) {

            var normal = [0, 0, 0];
            switch (i) {
                case 0:
                    normal[0] = 1; break;
                case 1:
                    normal[2] = 1; break;
                case 2:
                    normal[0] = -1; break;
                case 3:
                    normal[2] = -1; break;
                case 4:
                    normal[1] = 1; break;
                case 5:
                    normal[1] = -1; break;
            }

            if (Math.abs(normal[2]) == 1) {
                var aux = dist*normal[2];
                this.vertices.push(aux, dist, aux);
                this.vertices.push(-aux, dist, aux);
                this.vertices.push(-aux, -dist, aux);
                this.vertices.push(aux, -dist, aux);
            }
            else if (Math.abs(normal[0]) == 1) {
                var aux = dist*normal[0];
                this.vertices.push(aux, dist, -aux);
                this.vertices.push(aux, dist, aux);
                this.vertices.push(aux, -dist, aux);
                this.vertices.push(aux, -dist, -aux);
            }
            else if (Math.abs(normal[1]) == 1) {
                var aux = dist*normal[1];
                this.vertices.push(dist, aux, -aux);
                this.vertices.push(-dist, aux, -aux);
                this.vertices.push(-dist, aux, aux);
                this.vertices.push(dist, aux, aux);
            }

            this.normals.push(...normal, ...normal, ...normal, ...normal);

            this.indices.push(i*4, i*4+1, i*4+2);
            this.indices.push(i*4+3, i*4, i*4+2);
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    }
    
    updateBuffers() {

    }
}

