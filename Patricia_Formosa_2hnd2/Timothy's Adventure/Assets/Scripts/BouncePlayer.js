#pragma strict
var BounceAmount: float;

function OnTriggerEnter(other : Collider) {
	if(other.tag == "Player"){
		var CM : CharacterMotor = other.transform.GetComponent("CharacterMotor");
		CM.movement.velocity.y = BounceAmount;
	}
}

