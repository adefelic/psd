#define PI 3.1415926535897932384626433832795
precision mediump float;
uniform vec2 u_resolution;

// x: glFragCoord.x
// s: step
// w: stroke width
float stroke(float x, float s, float w) {
	float d = step(s, x + w*.5) - step(s, x-w*.5);
	return clamp(d, 0., 1.);
}

void main() {
	vec3 color = vec3(0);
	vec2 st = gl_FragCoord.xy/u_resolution;
	// signed distance function
	float sdf = .7+(st.x*.6-st.y);
	color += stroke(sdf, .5, .1);
	gl_FragColor = vec4(color,1.);
}