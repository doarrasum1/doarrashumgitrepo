/* global $ */
var appName = 'דוורים';
var Maazan="";

document.addEventListener("deviceready", init, false);

////**********************
//				//for testing only
//				var username="42";
//				var heker="5135";
//				var region="43";
//				var subRegion=
//			//**********************
//			//	debugger;
 
 
 $(document).ready(function(){
	$("#maazanIcon").click(function(event) {
		event.stopPropagation(event);
		event.preventDefault(event);
		var path = "";
		window.open(path + "./doch.html",  "_self");
});
});

function init() {
	console.log('deviceready');
	//fastclick - https://github.com/ftlabs/fastclick	
	FastClick.attach(document.body);
    console.log('index.js FastClick');
    //handle client side session timeout
    //setSessionTimeout();	
	//document.addEventListener("backbutton", onBackKeyDown, false);
}	


			
 	



function displayMessage(messageToDisplay) {	
	navigator.notification.alert(	
			messageToDisplay,											//message
			null,														//callback
			'דואר רשום',												//title
			'אישור'														//button name
			);
}

