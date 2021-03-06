#define PI 3.1415926535897932384626433832795
precision mediump float;
uniform vec2 u_resolution;

void main() {
	vec3 color = vec3(0);
	vec2 st = gl_FragCoord.xy/u_resolution;
	color += step(.5, (st.x+st.y) * .5);
	gl_FragColor = vec4(color,1.);
}