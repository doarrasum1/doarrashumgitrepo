/* global $ */
var appName = 'דוורים';
document.addEventListener("deviceready", init, false);


var name = localStorage.getItem("name");
$("#LoginName").text(name);

/*
var name = "alex";
$("#LoginName").text(name);
*/

//var mydate =  displayToday();
//$("#Myheaderdate").text(mydate);

function Disconect(){
	CleanLocalStorageClear();
	SessionStorageClear();
}


function CleanLocalStorageClear (){
	
	localStorage.clear();
	
}

function SessionStorageClear(){
	
	sessionStorage.clear();
}


//function displayToday() {     
//      var now=new Date();
//      return [AddZero(now.getDate()), AddZero(now.getMonth() + 1), now.getFullYear()].join("/");       
//}
//function AddZero(num) {
//      return (num >= 0 && num < 10) ? "0" + num : num + "";
//}


/*
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
*/

