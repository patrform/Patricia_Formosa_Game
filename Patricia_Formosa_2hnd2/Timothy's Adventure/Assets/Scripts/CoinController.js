#pragma strict

var topMargin:int;
var bottomMargin:int;

var moveUp:boolean;
var moveDown:boolean;


function Start(){
	
	topMargin=-5;
	bottomMargin=-5;
	
	//the coin will start by moving up
	moveUp = true;
	moveDown = false;

}

function Update () {
	if(moveUp==true)
	{
		//move coin up
		transform.Translate(Vector3.up*5*Time.deltaTime);
		if(transform.position.y>=topMargin)
		{
			moveUp=false;
			moveDown=true;
		}
		if(moveDown==true)
		{
			transform.Translate(Vector3.down*5*Time.deltaTime);
			if(transform.position.y<=bottomMargin)
			{
				moveUp=true;
				moveDown=false;
			}
		}
	}
}