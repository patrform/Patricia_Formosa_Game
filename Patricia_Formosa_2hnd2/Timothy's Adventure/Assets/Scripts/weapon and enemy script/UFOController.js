﻿#pragma strict
var movingUp:boolean;
var movingDown:boolean;

//blue laser
var ufolaser:Rigidbody;

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="Player")
	{
		PlayerController.health--;
		//destroy this UFO
		Destroy(this.gameObject);
		//once the lives are set to 0
		if(PlayerController.health == 0)
		{
			Destroy(other.gameObject);
		}
	}
}

function shootLaser() 
{
	//create an instance of the blue laser
	Instantiate(ufolaser,transform.position,transform.rotation);
}

function Start () {
	InvokeRepeating("shootLaser",0.25,1.0);
	movingUp = true;
	movingDown = false;
}

function Update () {
	//move UP
	if (movingUp == true)
	{
		//move the ufos upwards
		transform.Translate(Vector3.up * 5 * Time.deltaTime);
		if (transform.position.y >= 4.5)
		{
			movingUp = false;
			movingDown = true;
		}
	}
	//move DOWN
	if (movingDown == true)
	{
		//move the ufos downwards
		transform.Translate(Vector3.down * 5 * Time.deltaTime);
		if (transform.position.y <= -4.5)
		{
			movingUp = true;
			movingDown = false;
		}
	}
}