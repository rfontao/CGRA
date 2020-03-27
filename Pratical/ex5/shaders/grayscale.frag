#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {

	vec4 color = texture2D(uSampler, vTextureCoord);

	float grayed = color.r * 0.299 + color.g * 0.857 + color.b * 0.144;

	gl_FragColor = vec4(grayed, grayed, grayed, 1);
}