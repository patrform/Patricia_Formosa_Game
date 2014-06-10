#pragma strict


static var score : int;
static var apple : int;
static var live : int;
static var coin : int;
static var enemy : int;
static var health : int;

function Start () {
score = 0;
live = 3;
coin = 0;
enemy = 0;
health = 100;
}

var textStyle:GUISkin;

function Update () {


	
	
	
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="coin")
	{
		score++;
		Destroy(other.gameObject);
		
	}
	
	if(other.gameObject.tag=="apple")
	{
		score++;
		Destroy(other.gameObject);
		
	}
		if(other.gameObject.tag=="MushroomEnemy")
	{
		score++;
		live = live - 1;
		Destroy(other.gameObject);
		
	}
}

	
	function OnGUI()
	{
		GUI.Label(Rect(150,5,150,50), "Score: " + score);
		GUI.Label(Rect(150,25,150,50), "Live: " + live);
		GUI.Label(Rect(150,45,150,50),"Health: " + health);
	}
	
	
	