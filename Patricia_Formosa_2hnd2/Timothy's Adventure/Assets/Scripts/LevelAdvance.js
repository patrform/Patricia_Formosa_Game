#pragma strict

var Level = "";
function OnTriggerStay(other : Collider){
if(other.tag == "Player"){
if(Input.GetKeyUp("up")){
Application.LoadLevel(Level);
		}
	}
}