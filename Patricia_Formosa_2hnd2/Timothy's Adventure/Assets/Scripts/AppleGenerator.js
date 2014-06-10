#pragma strict
var apple : Rigidbody;

function  generateapples() {

var xposition: float;

xposition = Random.Range(-5.0f,5.0f);

Debug.Log(xposition);

xposition = transform.position.x + xposition;

Instantiate(apple, Vector3(xposition,5,0),Quaternion.identity);
}
function Start(){
	InvokeRepeating("generateapples",0,2.0);
}

function Update(){
	if(transform.position.x > 22){
		transform.position.x = 22;
}
	if(transform.position.x < -8){
		transform.position.x = -8;
	}
}