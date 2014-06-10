#pragma strict
var TS : float;
var paused : boolean;

function Start () {
	TS = Time.timeScale;
}

function Update () {
	if(Input.GetKeyUp("p")){
		if(!paused){
			paused = true;
		}else {
				paused = false;
		}
	}
	if(paused){
		if(Time.timeScale > 0.0){
			Time.timeScale = 0.0;
			audio.Pause();
		} 
	}else {
		if(Time.timeScale < TS){
			Time.timeScale = TS;
			audio.Play();
		}
	}
}