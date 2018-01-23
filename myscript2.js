$(document).ready(function(){
	
	$("h2").mousedown(function(){
		$( "h1").css("background-color","red");
	});	
	$("h2").mouseup(function(){
		$("h1").css("background-color","green");
	});
	
		
});