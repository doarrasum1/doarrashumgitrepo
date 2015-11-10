/* global $ */
var appName = 'דוורים';
var username = localStorage.getItem("username");
var heker = localStorage.getItem("heker");
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

var Regions = localStorage.getItem("Regions");
Regions=Regions.split(",");

	//document.getElementById("area1").disabled = true;	
//$("#area1").css("visibility", "hidden");	
		for(var i=0; i< Regions.length; i++){
			var	Region=(Regions);
			var melel=   " איזור " +Region[i]
			$("[name='area']").append($('<option>', {
			value: Region[i],
			text: melel
		}));
	}



function displayMessage(messageToDisplay) {	
	navigator.notification.alert(	
			messageToDisplay,											//message
			null,														//callback
			'דואר רשום',												//title
			'אישור'														//button name
			);
}



$("[name='area']").change(function () {

    $('#area1')
    .find('option')
    .remove()
    .end()
    //.append('<option value="תת איזור">תת איזור</option>')
    //.val('תת איזור')
    ;

var target = document.getElementById('loginButton');
    var selected = document.getElementsByName('area')[0].value;
	var spinner = new Spinner().spin(target);
	getSubRegions(username, heker, selected)
	
    ////remove existing subregions
	//var select = document.getElementById("subarea");
	//var length = select.options.length;
	//for (i = 0; i < length; i++) {
	//    select.options[i] = null;
	//}



    //var subRegions = localStorage.subRegions;
	var subRegions = sessionStorage.getItem("subRegions");
	if(subRegions != ""){
		subRegions=subRegions.split(",");
		}
	var length=subRegions.length;
	spinner.stop();
	
	if (subRegions.length > 2) {
	    //.getElementById("area1").disabled = false;
	    $("#area1").css("visibility", "visible");
	    for (var i = 0; i < length; i++) {
	        var sub = subRegions;
	        var temp = sub[i];
	        temp = temp.replace("[", "");
	        temp = temp.replace("]", "");
	        temp = temp.replace("\"", "");
	        temp = temp.replace("\"", "");



	        var melel = " תת איזור " + temp;
	        $("#area1").append($('<option>', {
	            value: temp,
	            text: melel
	        }));
	    }
	}
	else {
	    $('#area1').css("visibility", "hidden");
	}
});

$("#Approve").click(function(event) {
    
        var validated = true;
		event.stopPropagation(event);
		event.preventDefault(event);
		var selected = document.getElementsByName('area')[0].value;
		if(selected=="אזור חלוקה") {
			validated=false;
			var messageToDisplay="יש לבחור איזור חלוקה";
			displayMessage(messageToDisplay);
			//alert("יש לבחור איזור חלוקה");
		}
		localStorage.Region = selected;
		if ($('#area1').css("visibility") != "hidden") {
		    var selected1 = document.getElementsByName('subarea')[0].value;
		    if (!selected1)
		    {
		        selected1 = "0";
		    }
			localStorage.subRegions = selected1;
		}
		
		else{
		selected1 = "";
		localStorage.subRegions = selected1;
		}
		
		if(validated==true){
			var path = "";
			window.open(path + "./lobby.html",  "_self");
		}
});

