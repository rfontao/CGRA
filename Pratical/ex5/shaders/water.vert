attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

uniform float timeFactor;

varying vec3 coords;

void main() {

	// vTextureCoord = aTextureCoord + vec2(0.0075 * timeFactor, 0.0075 * timeFactor);
	vTextureCoord = aTextureCoord + vec2(0.006 * timeFactor, 0.006 * timeFactor);
    // vTextureCoord = aTextureCoord;

    vec3 height_offset = aVertexNormal * 0.04 * (texture2D(uSampler2, vTextureCoord).b - 0.5);

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + height_offset, 1.0);

}

