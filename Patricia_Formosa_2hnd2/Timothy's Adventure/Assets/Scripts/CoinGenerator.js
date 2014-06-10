#pragma strict

var coin:Rigidbody;


function createCoin()
{
	var xposition:int;
	var yposition:int;
	
	xposition = Random.Range(4,-50);
	yposition = Random.Range(-4,4);
	
	xposition = transform.position.x + xposition;
	
	Instantiate(coin,Vector3(xposition,yposition,0),Quaternion.identity);
}


function Start () {
	InvokeRepeating("createCoin",2.0,5.0);
}

function Update () {

}