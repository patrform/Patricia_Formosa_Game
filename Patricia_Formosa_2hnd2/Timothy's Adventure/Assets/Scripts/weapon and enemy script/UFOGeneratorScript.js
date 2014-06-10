#pragma strict
var ufo:Rigidbody;

//creates an instance of UFO at
//a random postion in x and y
function createUFO()
{
//x,y,z
//set the x position
var xpos:int;
xpos = transform.position.x + Random.Range(1.5,11);

//set the y position
var ypos:int;
ypos = transform.position.y + Random.Range(-5,3);

//create a ufo relative to the game object
Instantiate(ufo,Vector3(xpos,ypos,0),Quaternion.identity);
}

function Start () {
	//parameter 1: wait 5.0 seconds
	//parameter 2: wait 5.0 seconds
	InvokeRepeating("createUFO",8.0, 8.0);
}

function Update () {

}