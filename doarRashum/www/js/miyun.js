/* global $ */
var username = localStorage.getItem("username");
var heker = localStorage.getItem("heker");
var Region = localStorage.getItem("Region");
var subRegions = localStorage.getItem("subRegions");
if(typeof subRegions == "undefined" ) {subRegions="";}
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


$(document).ready(function(){
    loadMiyun(username, heker, Region, subRegions );	
	
    Miyun = sessionStorage.Miyun;
    Miyun=$.parseJSON(Miyun);
    var errorCode= Miyun.errorCode

    if(errorCode=="0"){
        $("#Shuycho").text(Miyun.Shuycho);
        $("#Muynu").text(Miyun.Muynu);
    }
    if(errorCode=="1"){
        errorMiyunMessage =Miyun.errorMiyunMessage;
        displayMessage(errorMiyunMessage);
    }
    if(errorCode=="2"){
        messageToDisplay= ('אירעה תקלה בהעברת הנתונים. \nנסה מאוחר יותר');
        displayMessage(messageToDisplay);
    }
	
    $('#startScan').
			click(
			  function(){
                var params = 
                {
                    text_title: "סריקת ברקוד", // Android only
                    text_instructions: "כוון את המצלמה על הברקוד.", // Android only
                    camera: "back", // defaults to "back"
                    flash: "auto", // defaults to "auto". See Quirks
                    drawSight: true //defaults to true, create a red sight/line in the center of the scanner view.
                };
               cloudSky.zBar.scan(params, onSuccess, onFailure);    
}
);
        function onSuccess(s) {       
            var insert=callInsert(username, heker, Region, subRegions, s);                             
        }
        
        function onFailure(s) {
            console.log(s);            
            if (s!="cancelled") {
              var errorAlert='סליחה, המצלמה נתקלה בבעיה. ייתכן שיהיה עליך להפעיל מחדש את המכשיר';
              displayMessage(errorAlert);   
            }             
}    		
/*                  		
			      //document.addEventListener("backbutton", onBackKeyDownOnScan, false);
			      cordova.plugins.barcodeScanner.scan(
                      function (result) {			
                          var s =
                          "Result: " + result.text + ", " +
                          "Format: " + result.format + ", " +
                          "Cancelled: " + result.cancelled;
                          console.log(s);	
                          if (!(result.cancelled)) {			
                              //var resultDiv=document.getElementById("packageNum");			
                              //resultDiv.innerHTML = result.text;
                              // omer commented this out $('input.packageNum').val(result.text);
                              //$('#packageNum').attr('value', result.text);
                              //localStorage.setItem("delivery_result", result.text);                              
                              var insert=callInsert(username, heker, Region, subRegions, result.text);																  
                          } else {
                              // user has cancelled the scan - nothing to do or display	
                          }		
                          //document.removeEventListener("backbutton", onBackKeyDownOnScan, false);									
                      }, 					
                      function(error) {
                          //document.removeEventListener("backbutton", onBackKeyDownOnScan, false);
                          console.log("Scanning failed: " + error);
                          displayMessage('סליחה, המצלמה נתקלה בבעיה. ייתכן שיהיה עליך להפעיל מחדש את המכשיר');					
                      }
              )
			  });    
*/	

    $('#typeBarcode').
        click(
            function () {
                var barcodes=$('#packageNum').val();
                var insert = callInsert(username, heker, Region, subRegions, barcodes);
            }
        );

    function callInsert(username, heker, Region, subRegions, barcodes) {
        var insert = insertBarcode(username, heker, Region, subRegions, 6, 0, barcodes, "", "", 0, 0, "", "", "", "", false, 0, "");
        if (sessionStorage.getItem("submit-delivery") == "true") {								
            localStorage.removeItem("delivery_result");
            localStorage.removeItem("submit-delivery");
            //$('#packageNum').attr('value', "");
	    $('#packageNum').val('');	
            loadMiyun(username, heker, Region, subRegions );	
            Miyun = sessionStorage.Miyun;
            Miyun=$.parseJSON(Miyun);
            if(errorCode=="0"){
                $("#Shuycho").text(Miyun.Shuycho);
                $("#Muynu").text(Miyun.Muynu);
            }
            if(errorCode=="1"){
                errorMiyunMessage =Miyun.errorMiyunMessage;
                displayMessage(errorMiyunMessage);
            }
            if(errorCode=="2"){
                messageToDisplay= ('אירעה תקלה בהעברת הנתונים. \nנסה מאוחר יותר');
                displayMessage(messageToDisplay);
            }											
        }  else {									  
            messageToDisplay= ('אירעה תקלה בהעברת הנתונים. \nנסה מאוחר יותר');
            displayMessage(messageToDisplay);								
        }
    }


    $('#doneScan').click(function(){
        window.location = 'miyunPopup.html';
    });

    function displayMessage(messageToDisplay) {	
        navigator.notification.alert(	
                messageToDisplay,											//message
                null,														//callback
                'דואר רשום',												//title
                'אישור'														//button name
                );
    }

})
