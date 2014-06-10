#pragma strict
var target: GameObject;
var adjust : float;
var c1: Color;
var jump : boolean;

function Start(){
	renderer.material.color = c1;
}

function OnTriggerEnter(other : Collider){
	if(!jump){
 		if(other.tag == "Player"){
 			target.GetComponent(Teleport).jump = true;
 			other.gameObject.transform.position = Vector3(target.transform.position.x, target.transform.position.y + adjust, 0);
 		}
 	}
 }
 function OnTriggerExit(other : Collider){	
 	if(other.tag == "Player"){
 		jump = false;
 	}
 }	