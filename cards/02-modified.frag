#define PI 3.1415926535897932384626433832795
precision mediump float;
uniform vec2 u_resolution;

void main() {
	vec3 color = vec3(0);
	vec2 st = gl_FragCoord.xy/u_resolution;
	// cos is moving between 0 and pi, so 1 and -1
	color += step(.5 + cos((st.y-.2)*PI*PI*.55)*.25, st.x);
	gl_FragColor = vec4(color,1.);
}