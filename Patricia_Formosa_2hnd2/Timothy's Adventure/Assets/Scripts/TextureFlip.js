﻿#pragma strict
var X : float;

function Start () {
	X = transform.localScale.x;
}

function FixedUpdate () {
	if(Input.GetKey("a")){
	transform.localScale.x = X;
	}else if(Input.GetKey("d")){
	transform.localScale.x = -X;
	}
}