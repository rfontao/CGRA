#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

varying vec4 coords;

struct lightProperties {
    vec4 position;                  
    vec4 ambient;                   
    vec4 diffuse;                   
    vec4 specular;                  
    vec4 half_vector;
    vec3 spot_direction;            
    float spot_exponent;            
    float spot_cutoff;              
    float constant_attenuation;     
    float linear_attenuation;       
    float quadratic_attenuation;    
    bool enabled;                   
};

#define NUMBER_OF_LIGHTS 8
uniform lightProperties uLight[NUMBER_OF_LIGHTS];

void main() {
	if (coords.y < 0.5) {
		gl_FragColor = vec4(138.0/255.0, 138.0/255.0, 228.0/255.0, 1);
	}
	else {
		gl_FragColor = vec4(230.0/255.0, 229.0/255.0, 0.0/255.0, 1);
	}
}

