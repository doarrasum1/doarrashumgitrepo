/* global $ */
var appName = 'דוורים';
document.addEventListener("deviceready", init, false);

function init() {
	console.log('deviceready');
	//fastclick - https://github.com/ftlabs/fastclick	
	FastClick.attach(document.body);
    console.log('index.js FastClick');
    //handle client side session timeout
    //setSessionTimeout();	
    //document.addEventListener("backbutton", onBackKeyDown, false);
}	

	$("#loginButton").click(
		function(event) {
		    debugger;
		    sessionStorage.clear();
		    localStorage.clear();
		    //**********************
		//for testing only
	//	username="42";
		//heker="5135";
		//region="24";
		//phone="0509555660"
		//subRegion="";
		//city="3000";
		
		//var loginData=authenticate(username, typedPassword);
		//var loginData=getDeliveryUnits(username, heker, region);
		//var loginData=getDetails(username, phone)
		//var loginData=getMaazan(username, heker, region, subRegion )
		//getStreets(username, city );
		//getSubRegions(username, heker, region )
	//	debugger;
		//**********************
			event.stopPropagation(event);
			event.preventDefault(event);
			var validated=true;
			var username = $("#username").val(); 
			var typedPassword = $("#password").val(); 
			if (username=="") 	{	validated=false; var errMsg='יש להקיש שם משתמש';	displayMessage(errMsg);	}	
			//if (validated==true && (typeof typedPassword==='undefined' || typedPassword=="") ) 	{	validated=false; var errMsg='יש להקיש סיסמא';	displayMessage(errMsg);	}
			if (validated) {		
				var target = document.getElementById('loginButton');
				var spinner = new Spinner().spin(target);								
				console.log("invoking authenticate. user: "+username+", password: "+typedPassword);
				//**********************
				//for testing only
			
				//**********************
				
					var loginData = {};
					var test = {};
					loginData= new authenticate(username, typedPassword); //loginData is an object							
					errorCode=localStorage.errorCode;
						
						if (errorCode==0) { //no error														
							var path="";
							 window.open(path + "./choose_area.html",  "_self");
							
						} else if (errorCode==1) { //authentication error
						errorLoginMessage=localStorage.errorLoginMessage;
							displayMessage(errorLoginMessage); 
						} else if (errorCode==2) {	//technical error
							navigator.notification.alert(
								'אירעה תקלה בהעברת הנתונים. \nנסה מאוחר יותר',  			// message
								null,   			   										 // callback
								'שגיאה',            										 // title
								'אישור'                  									 // buttonName
							);
						}				
						spinner.stop();	

							
		}
		});
		

//handle back button
function onBackKeyDown() {
	navigator.notification.confirm(
									'האם אתה בטוח שברצונך לצאת מהיישום?', 		  //message
									exitFromApp, 		              //callback function
									appName,                        //title
									['יציאה', 'ביטול']);                  //button labels
}									

function exitFromApp(buttonIndex) {
        if (buttonIndex === 1) {
			if (navigator.app) {
				navigator.app.exitApp();
			} else if (navigator.device) {
				navigator.device.exitApp();
              }
		}
}

function displayMessage(messageToDisplay) {	
	navigator.notification.alert(	
			messageToDisplay,											//message
			null,														//callback
			'דואר רשום',												//title
			'אישור'														//button name
			);
}

function ValidateUserLogin(username, password) {
	
	
}

$("[name='area']").change(function() {	

var target = document.getElementById('loginButton');
    var selected = document.getElementsByName('area')[0].value;
	var spinner = new Spinner().spin(target);
	getSubRegions(username, heker, selected )
	
	var subRegions= JSON.parse(sessionStorage.subRegions);
	
	var length=subRegions.subRegions.length;
	spinner.stop();	
	if(length!=0){
		document.getElementById("area1").disabled = false;
		for(var i=0; i< length; i++){
			var	sub=subRegions.subRegions;
			var melel=   " תת איזור " +sub[i]
			$("[name='area1']").append($('<option>', {
				value: sub[i],
				text: melel
			}));
	}
	}
});

$("#Approve").click(function(event) {
		event.stopPropagation(event);
		event.preventDefault(event);
		var selected = document.getElementsByName('area')[0].value;
		var selected1 = document.getElementsByName('area1')[0].value;
		localStorage.Region = selected;
		localStorage.subRegions = selected1;
		var path = "";
		window.open(path + "./lobby.html",  "_self");
});

