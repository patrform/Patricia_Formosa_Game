#pragma strict

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}
function Start () {
	//destroy the explosion after 1.25 seconds
	Destroy(this.gameObject.gameObject,1.25f);
}

function Update () {

}