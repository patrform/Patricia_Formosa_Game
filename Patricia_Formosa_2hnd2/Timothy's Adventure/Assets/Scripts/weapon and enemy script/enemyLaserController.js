#pragma strict

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}
function Start () {

}

function Update () {
	//the enemy laser shooting towards the spaceship
	transform.Translate(Vector3.left * 15 * Time.deltaTime);
}