#pragma strict
var bong: AudioClip;
var jump: AudioClip;
//var Player : GameObject;
//var spawnPoint : Transform;


function Update () {
	if(Input.GetKeyUp("space")){
		if(!audio.isPlaying){
			audio.clip = jump;
			audio.Play();
		}
	}
	if(Input.GetKey("a")){
		if(!audio.isPlaying){
			audio.clip = bong;
			audio.Play();
		}
	}
}
//function OnTriggerEnter(other : Collider){
			//Destroy(other.gameObject);
			//var P : GameObject = Instantiate(Player, spawnPoint.position, Quaternion.identity);
		

			//}
		
		
	
