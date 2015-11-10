//var serverUrl="https://193.46.64.172:9464/WcfRashumDavarim";
var serverUrl="https://cg.israelpost.co.il:9464/WcfRashumDavarim";

//authenticate

   

function authenticate(username, password) {	
	var soapMessage=createLoginSoapMessage(username, password);
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				async: false,
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/authenticate"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {	
			
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorLoginMessage=$(data).find("error").text();																	
				} else { //login successful	
					returnObject.errorCode=0;
					returnObject.name=$(data).find("Name").text();
					returnObject.heker=$(data).find("heker").text();
					returnObject.notReported=$(data).find("NotReported").text();
					returnObject.percentDay=$(data).find("PercentDay").text();					
					returnObject.city=$(data).find("city").text();
					returnObject.cityName=$(data).find("cityName").text();
					returnObject.phone=$(data).find("phone").text();					
					
					var i=0;
					returnObject.Regions=[];					
					$(data).find('string').each(function(){   
						var Regions = $(data).find('string')[i].innerHTML;											
						returnObject.Regions.push(Regions); 
						i=i+1;
					});		
					}			
                var obj = { 
						"errorCode": returnObject.errorCode,
						"name": returnObject.name,
						"heker": returnObject.heker,
						"notReported": returnObject.notReported,
						"percentDay": returnObject.percentDay,
						"city": returnObject.city,
						"cityName": returnObject.cityName,
						"phone": returnObject.phone,
						"Regions": returnObject.Regions,
						"errorLoginMessage": returnObject.errorLoginMessage,
          }					
				console.log(obj);
				localStorage.setItem("errorCode", returnObject.errorCode);
				localStorage.setItem("name", returnObject.name);
				localStorage.setItem("heker", returnObject.heker);
				localStorage.setItem("notReported", returnObject.notReported);
				localStorage.setItem("percentDay", returnObject.percentDay);
				localStorage.setItem("city", returnObject.city);
				localStorage.setItem("cityName", returnObject.cityName);
				localStorage.setItem("phone", returnObject.phone);
				localStorage.setItem("Regions", returnObject.Regions);
				localStorage.setItem("username", username);
				localStorage.setItem("errorLoginMessage", returnObject.errorLoginMessage);
				
				
				return 1;
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;				
			});

	
}

function createLoginSoapMessage(username, password) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:authenticate> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
	         			<!--Optional:--> \
	         			<tem:password>'+password+'</tem:password> \
	      			</tem:authenticate> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}
//

//getDataForMenu ????
function getDataForMenu(username, heker, region, subRegion) {	
	var soapMessage=createDataForMenuSoapMessage(username, heker, region, subRegion);
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/getDataForMenu"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {												
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorLoginMessage=$(data).find("error").text();																	
				} else { //login successful												
					returnObject.errorCode=0;
					//returnObject.name=$(data).find("Name").text();
					//returnObject.heker=$(data).find("heker").text();
					//returnObject.notReported=$(data).find("notReported").text();
					//returnObject.percentDay=$(data).find("PercentDay").text();
					//returnObject.city=$(data).find("city").text();																	
				}
				return returnObject;
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;				
			});

	
}

function createDataForMenuSoapMessage(username, heker, region, subRegion ) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:createDataForMenuSoapMessage> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
	         			<!--Optional:--> \
	         			<tem:heker>'+heker+'</tem:heker> \
						<!--Optional:--> \
	         			<tem:region>'+region+'</tem:region> \
						<!--Optional:--> \
	         			<tem:subRegion>'+subRegion+'</tem:subRegion> \
	      			</tem:createDataForMenuSoapMessage> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}

//getDeliveryUnits
function getDeliveryUnits(username, heker, region) {	
	var soapMessage=createDeliveryUnitsSoapMessage(username, heker, region);
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/getDeliveryUnits"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {												
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorLoginMessage=$(data).find("error").text();																	
				} else { // successful												
					returnObject.errorCode=0;					
					var i=0;
					returnObject.Code=[];
					returnObject.Desc=[];
					$(data).find('DropDown').each(function(){   
						var Code = $(this).find('Code').text();
						var Desc = $(this).find('Desc').text();												
						returnObject.Code.push(Code); 
						returnObject.Desc[i]=Desc;
						i=i+1;						
					});
                    //shai 21-09
					localStorage.setItem("delivery_units", JSON.stringify(returnObject));
					console.log("getDeliveryUnits populated");
			}																									
				console.log(returnObject);
				return returnObject;
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;				
			});

	
}

function createDeliveryUnitsSoapMessage(username, heker, region ) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:getDeliveryUnits> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
	         			<!--Optional:--> \
	         			<tem:heker>'+heker+'</tem:heker> \
						<!--Optional:--> \
	         			<tem:region>'+region+'</tem:region> \
	      			</tem:getDeliveryUnits> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}

//getDetails
function getDetails(username, phone) {	
	var soapMessage=createDetailsSoapMessage(username, phone);
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/getDetails"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {												
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorLoginMessage=$(data).find("error").text();																	
				} else { //login successful												
					returnObject.errorCode=0;
					returnObject.city=$(data).find("city").text();
					returnObject.firstName=$(data).find("firstName").text();
					returnObject.houseNo=$(data).find("houseNo").text();
					returnObject.lastName=$(data).find("lastName").text();
					returnObject.street=$(data).find("street").text();
					returnObject.streetText=$(data).find("streetText").text();												
				}				
				console.log(returnObject);				
				return returnObject;
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;				
			});

	
}

function createDetailsSoapMessage(username, phone ) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:getDetails> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
	         			<!--Optional:--> \
	         			<tem:phone>'+phone+'</tem:phone> \
	      			</tem:getDetails> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}


//getMaazan
function getMaazan(username, heker, region, subRegion ) {	
	var soapMessage=createMaazanSoapMessage(username, heker, region, subRegion );
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				async: false,
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/getMaazan"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {												
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorLoginMessage=$(data).find("error").text();																	
				} else { //login successful												
					returnObject.errorCode=0;
					returnObject.NimseruLachaluka=$(data).find("NimseruLachaluka").text();
					returnObject.acher=$(data).find("acher").text();
					returnObject.avud=$(data).find("avud").text();
					returnObject.ddg=$(data).find("ddg").text();
					returnObject.hachzaraLasholeach=$(data).find("hachzaraLasholeach").text();
					returnObject.hodaa=$(data).find("hodaa").text();
					returnObject.huavarLashaliach=$(data).find("huavarLashaliach").text();
					returnObject.huchzeruLaMR=$(data).find("huchzeruLaMR").text();
					returnObject.hutzuLachaluka=$(data).find("hutzuLachaluka").text();
					returnObject.lehachzaraLasholeach=$(data).find("lehachzaraLasholeach").text();
					returnObject.leloDivuach=$(data).find("leloDivuach").text();
					returnObject.merchazChaluka=$(data).find("merchazChaluka").text();
					returnObject.nimseruLaniman=$(data).find("nimseruLaniman").text();											
				}
				
				console.log(returnObject);
				sessionStorage.setItem("Maazan", JSON.stringify(returnObject));				
				return JSON.stringify(returnObject);
				
				
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;				
			});

	
}

function createMaazanSoapMessage(username, heker, region, subRegion ) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:getMaazan> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
	         			<!--Optional:--> \
	         			<tem:heker>'+heker+'</tem:heker> \
						<!--Optional:--> \
	         			<tem:region>'+region+'</tem:region> \
						<!--Optional:--> \
	         			<tem:subRegion>'+subRegion+'</tem:subRegion> \
	      			</tem:getMaazan> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}

//getStreets
function getStreets(username, city ) {	
	var soapMessage=createStreetsSoapMessage(username, city );
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				async: false,
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/getStreets"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {												
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorstreetMessage=$(data).find("error").text();	
					sessionStorage.setItem("errorstreetCode", returnObject.errorCode);
					sessionStorage.setItem("errorstreetMessage", returnObject.errorstreetMessage);					
				} else { //login successful				
					returnObject.errorCode=0;					
					var i=0;
					returnObject.streets=[];	
						
					$(data).find('string').each(function(){   
						var street = $(data).find('string')[i].innerHTML;											
						returnObject.streets.push(street); 
						i=i+1;
					});																	
				}
				sessionStorage.setItem("errorstreetCode", returnObject.errorCode);
				sessionStorage.setItem("streets", returnObject.streets);
				console.log(returnObject);	
				return returnObject.errorCode;
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;	
				sessionStorage.setItem("errorstreetCode", returnObject.errorCode);				
			});

	
}

function createStreetsSoapMessage(username, city ) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:getStreets> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
	         			<!--Optional:--> \
	         			<tem:city>'+city+'</tem:city> \
	      			</tem:getStreets> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}

//getSubRegions
function getSubRegions(username, heker, region ) {	
	var soapMessage=createSubRegionsSoapMessage(username, heker, region );
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				async: false,
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/getSubRegions"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {												
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorLoginMessage=$(data).find("error").text();																	
				} else { //login successful												
					returnObject.errorCode=0;
					var i=0;
					returnObject.subRegions=[];					
					$(data).find('string').each(function(){   
						var subRegions = $(data).find('string')[i].innerHTML;											
						returnObject.subRegions.push(subRegions); 
						i=i+1;
					});																			
				}
				console.log(returnObject);	
				sessionStorage.setItem("subRegions", JSON.stringify(returnObject.subRegions));	
				return returnObject;
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;				
			});

	
}

function createSubRegionsSoapMessage(username, heker, region ) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:getSubRegions> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
	         			<!--Optional:--> \
	         			<tem:heker>'+heker+'</tem:heker> \
						<!--Optional:--> \
	         			<tem:region>'+region+'</tem:region> \
	      			</tem:getSubRegions> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}

//insertBarcode ????
function insertBarcode(username, heker, region, subRegion, actionCode, actionDetailedCode, barcodes, firstName, lastName, city, street, streetText, houseNo, signature, phone, flgMessageShiyuch, yechida, davarPhoneNo) {
    var soapMessage = createBarcodeSoapMessage(username, heker, region, subRegion, actionCode, actionDetailedCode, barcodes, firstName, lastName, city, street, streetText, houseNo, signature, phone, flgMessageShiyuch, yechida, davarPhoneNo);
    $
    .ajax(
                  {
                      url: serverUrl,
                      dataType: "xml",
                      type: "POST",
                      async: false,
                      contentType: "text/xml;charset=utf-8",
                      headers: {
                          "SOAPAction": "http://tempuri.org/IService1/insertBarcode"
                      },
                      crossDomain: true,
                      data: soapMessage,
                      timeout: 30000 //30 seconds timeout
                  }).done(function (data) {
                      var returnObject = {};
                      var returndata = $(data).find("success").text();
                      if (returndata != "true") {
                          $(data).find("error").text() == 100 ? returnObject.errorCode = 100 : returnObject.errorCode = 1; // my function
                          //shai 24-09 start
                          returnObject.success = false;
                          //shai 24-09 end
                          returnObject.errorMessage = $(data).find("error").text();
                          sessionStorage.setItem("submit-delivery", "false");
                          console.log("insertBarcode error");
                      } else { //successful             
                          console.log("insertBarcode success");
                          sessionStorage.setItem("submit-delivery", "true");
                          returnObject.errorCode = 0;
                          //shai 24-09 start
                          returnObject.success = true;
                          //shai 24-09 end
                      }
                      console.log("returnObject= " + JSON.stringify(returnObject));
                      return returnObject;
                  }).fail(function (jqXHR, textStatus, thrownError) {
                      console.log('insertBarcode failed: ' + thrownError);
                      var returnObject = {};
                      sessionStorage.setItem("submit-delivery", "error");
                      returnObject.errorCode = 2;
                      //shai 24-09 start
                      returnObject.success = false;
                      //shai 24-09 end

                  });


}




function createBarcodeSoapMessage(username, heker, region, subRegion, actionCode, actionDetailedCode, barcodes, firstName, lastName, city, street, streetText, houseNo, signature, phone, flgMessageShiyuch, yechida, davarPhoneNo) {
    var xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:arr="http://schemas.microsoft.com/2003/10/Serialization/Arrays"> \
   <soapenv:Header/> \
   <soapenv:Body> \
      <tem:insertBarcode> \
         <!--Optional:--> \
         <tem:userName>'+ username + '</tem:userName> \
         <!--Optional:--> \
         <tem:heker>'+ heker + '</tem:heker> \
         <!--Optional:--> \
         <tem:region>'+ region + '</tem:region> \
         <!--Optional:--> \
         <tem:subRegion>'+ subRegion + '</tem:subRegion> \
         <!--Optional:--> \
         <tem:actionCode>'+ actionCode + '</tem:actionCode> \
         <!--Optional:--> \
         <tem:actionDetailedCode>'+ actionDetailedCode + '</tem:actionDetailedCode> \
         <!--Optional:--> \
         <tem:barcodes> \
            <!--Zero or more repetitions:--> \
            <arr:string>'+ barcodes + '</arr:string> \
         </tem:barcodes> \
         <!--Optional:--> \
         <tem:firstName>'+ firstName + '</tem:firstName> \
         <!--Optional:--> \
         <tem:lastName>'+ lastName + '</tem:lastName> \
         <!--Optional:--> \
         <tem:city>'+ city + '</tem:city> \
         <!--Optional:--> \
         <tem:street>'+ street + '</tem:street> \
         <!--Optional:--> \
         <tem:streetText>'+ streetText + '</tem:streetText> \
         <!--Optional:--> \
         <tem:houseNo>'+ houseNo + '</tem:houseNo> \
         <!--Optional:--> \
         <tem:signature>'+ signature + '</tem:signature> \
         <!--Optional:--> \
         <tem:phone>'+ phone + '</tem:phone> \
         <!--Optional:--> \
         <tem:flgMessageShiyuch>'+ flgMessageShiyuch + '</tem:flgMessageShiyuch> \
         <!--Optional:--> \
         <tem:yechida>'+ yechida + '</tem:yechida> \
         <!--Optional:--> \
         <tem:davarPhoneNo>'+ davarPhoneNo + '</tem:davarPhoneNo> \
      </tem:insertBarcode> \
   </soapenv:Body> \
</soapenv:Envelope>';
    console.log("input xml= " + xml);
    return xml;
}


//
//loadMiyun ????
function loadMiyun(username, heker, region, subRegion ) {	
	var soapMessage=createMiyunSoapMessage(username, heker, region, subRegion );
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/loadMiyun"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {												
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorLoginMessage=$(data).find("error").text();																	
				} else { //login successful												
					returnObject.errorCode=0;
					//returnObject.name=$(data).find("Name").text();
					//returnObject.heker=$(data).find("heker").text();
					//returnObject.notReported=$(data).find("notReported").text();
					//returnObject.percentDay=$(data).find("PercentDay").text();
					//returnObject.city=$(data).find("city").text();																	
				}
				return returnObject;
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;				
			});

	
}

function createMiyunSoapMessage(username, heker, region, subRegion ) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:loadMiyun> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
	         			<!--Optional:--> \
	         			<tem:heker>'+heker+'</tem:heker> \
						<!--Optional:--> \
	         			<tem:region>'+region+'</tem:region> \
						<!--Optional:--> \
	         			<tem:subRegion>'+subRegion+'</tem:subRegion> \
	      			</tem:loadMiyun> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}


//updatePhone
function updatePhone(username, phone ) {	
	var soapMessage=createPhoneSoapMessage(username, phone );
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/updatePhone"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {												
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorLoginMessage=$(data).find("error").text();																	
				} else { //login successful												
					returnObject.errorCode=0;																					
				}
				return returnObject;
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;				
			});

	
}

function createPhoneSoapMessage(username, phone ) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:updatePhone> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
						<!--Optional:--> \
	         			<tem:phone>'+phone+'</tem:phone> \
	      			</tem:updatePhone> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}








/*
//sendSms
function sendSms(username, barcode ) {	
	var soapMessage=createSmsSoapMessage(username, barcode );
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/sendSms"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {												
				var returnObject={};
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {				
					returnObject.errorCode=1;			
					returnObject.errorLoginMessage=$(data).find("error").text();																	
				} else { //login successful												
					returnObject.errorCode=0;
					//returnObject.name=$(data).find("Name").text();
					//returnObject.heker=$(data).find("heker").text();
					//returnObject.notReported=$(data).find("notReported").text();
					//returnObject.percentDay=$(data).find("PercentDay").text();
					//returnObject.city=$(data).find("city").text();																	
				}
				return returnObject;
			}).fail(function(jqXHR, textStatus, thrownError) {															
				console.log('login failed: '+thrownError);
				var returnObject={};
				returnObject.errorCode=2;				
			});

	
}

function createSmsSoapMessage(username, barcode ) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
				<soapenv:Body> \
	      			<tem:sendSms> \
	         			<!--Optional:--> \
	         			<tem:userName>'+username+'</tem:userName> \
						<!--Optional:--> \
	         			<tem:barcode>'+barcode+'</tem:barcode> \
	      			</tem:sendSms> \
				</soapenv:Body> \
			</soapenv:Envelope>';		   
	return xml;   	
}

//delivery
function delivery (username, region, actionCode, actionDetailedCode, barcodes, firstName, lastName, city, street, streetText, houseNo, signature, phone) {
	var soapMessage=createDeliverySoapMessage(username, region, actionCode, actionDetailedCode, barcodes, firstName, lastName, city, street, streetText, houseNo, signature, phone);
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/delivery"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {		
				$("#loginButton").removeAttr('disabled');						
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {							
					var errorLoginMessage=$(data).find("error").text();							
					displayMessage(errorLoginMessage);
				} else { //login successful							
					// check if there are pending reports to send to the server. if yes - send them							
					handleDataBase();
					readFromDB();
					//window.setInterval(pendingReportsInterval, 1000); //checked every 1 second
					document.addEventListener("online", pendingReports, false);		
					var name=$(data).find("Name").text();							
					document.getElementById('HelloUserName').innerHTML=('שלום '+name);
					$("body").pagecontainer("change", "#MainPage", {} );
				}
			}).fail(function(jqXHR, textStatus, thrownError) {							
				$("#loginButton").removeAttr('disabled');				
				console.log('delivery failed: '+thrownError);
				navigator.notification.alert(
						'אירעה תקלה בהעברת הנתונים. \nנסה מאוחר יותר',  			// message
						null,   			    // callback
						'שגיאה',            		// title
						'אישור'                  // buttonName
				);
			});

}

function createDeliverySoapMessage(username, region, actionCode, actionDetailedCode, barcodes, firstName, lastName, city, street, streetText, houseNo, signature, phone) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:arr="http://schemas.microsoft.com/2003/10/Serialization/Arrays"> \
		   <soapenv:Header/> \
	   <soapenv:Body> \
	      <tem:delivery> \
	         <!--Optional:--> \
	         <tem:	>'+username+'</tem:userName> \
	         <!--Optional:--> \
	         <tem:region>'+region+'</tem:region> \
	         <!--Optional:--> \
	         <tem:actionCode>'+actionCode+'</tem:actionCode> \
	         <!--Optional:--> \
	         <tem:actionDetailedCode>'+actionDetailedCode+'</tem:actionDetailedCode> \
	         <!--Optional:--> \
	         <tem:barcodes> \
	            <!--Zero or more repetitions:--> \
	            <arr:string>'+barcodes+'</arr:string> \
	         </tem:barcodes> \
	         <!--Optional:--> \
	         <tem:firstName>'+firstName+'</tem:firstName> \
	         <!--Optional:--> \
	         <tem:lastName>'+lastName+'</tem:lastName> \
	         <!--Optional:--> \
	         <tem:city>'+city+'</tem:city> \
	         <!--Optional:--> \
	         <tem:street>'+street+'</tem:street> \
	         <!--Optional:--> \
	         <tem:streetText>'+streetText+'</tem:streetText> \
	         <!--Optional:--> \
	         <tem:houseNo>'+houseNo+'</tem:houseNo> \
	         <!--Optional:--> \
	         <tem:signature>'+signature+'</tem:signature> \
	         <!--Optional:--> \
	         <tem:phone>'+phone+'</tem:phone> \
	      </tem:delivery> \
	   </soapenv:Body> \
	</soapenv:Envelope>';
	return xml;
}

//getDeliveryUnits
function getDeliveryUnits (username, region) {
	var soapMessage=creategetDeliveryUnitsSoapMessage(username, region);
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/getDeliveryUnits"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {		
				$("#loginButton").removeAttr('disabled');						
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {							
					var errorLoginMessage=$(data).find("error").text();							
					displayMessage(errorLoginMessage);
				} else { //login successful							
					// check if there are pending reports to send to the server. if yes - send them							
					handleDataBase();
					readFromDB();
					//window.setInterval(pendingReportsInterval, 1000); //checked every 1 second
					document.addEventListener("online", pendingReports, false);		
					var name=$(data).find("Name").text();							
					document.getElementById('HelloUserName').innerHTML=('שלום '+name);
					$("body").pagecontainer("change", "#MainPage", {} );
				}
			}).fail(function(jqXHR, textStatus, thrownError) {							
				$("#loginButton").removeAttr('disabled');				
				console.log('getDeliveryUnits failed: '+thrownError);
				navigator.notification.alert(
						'אירעה תקלה בהעברת הנתונים. \nנסה מאוחר יותר',  			// message
						null,   			    // callback
						'שגיאה',            		// title
						'אישור'                  // buttonName
				);
			});

}

function creategetDeliveryUnitsSoapMessage(username, region) {
	var xml='<?xml version="1.0" encoding="UTF-8"?> \
		<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tempuri.org/"> \
	  <SOAP-ENV:Body> \
	    <ns1:getDeliveryUnits> \
	      <ns1:userName>'+username+'</ns1:userName> \
	      <ns1:region>'+region+'</ns1:region> \
	    </ns1:getDeliveryUnits> \
	  </SOAP-ENV:Body> \
	</SOAP-ENV:Envelope>';
	return xml;
}


//getDetails
function getDetails(username, phone) {
	var soapMessage=creategetDetailsSoapMessage(username, phone);
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/getDetails"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {		
				$("#loginButton").removeAttr('disabled');						
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {							
					var errorLoginMessage=$(data).find("error").text();							
					displayMessage(errorLoginMessage);
				} else { //login successful							
					// check if there are pending reports to send to the server. if yes - send them							
					handleDataBase();
					readFromDB();
					//window.setInterval(pendingReportsInterval, 1000); //checked every 1 second
					document.addEventListener("online", pendingReports, false);		
					var name=$(data).find("Name").text();							
					document.getElementById('HelloUserName').innerHTML=('שלום '+name);
					$("body").pagecontainer("change", "#MainPage", {} );
				}
			}).fail(function(jqXHR, textStatus, thrownError) {							
				$("#loginButton").removeAttr('disabled');				
				console.log('getDetails failed: '+thrownError);
				navigator.notification.alert(
						'אירעה תקלה בהעברת הנתונים. \nנסה מאוחר יותר',  			// message
						null,   			    // callback
						'שגיאה',            		// title
						'אישור'                  // buttonName
				);
			});
	
}

function creategetDetailsSoapMessage(username, phone) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
	   <soapenv:Body> \
	      <tem:getDetails> \
	         <!--Optional:--> \
	         <tem:userName>'+username+'</tem:userName> \
	         <!--Optional:--> \
	         <tem:phone>'+phone+'</tem:phone> \
	      </tem:getDetails> \
	   </soapenv:Body> \
	</soapenv:Envelope>';
	return xml;
}

//getStreets
function getStreets(username, city) {
	var soapMessage=creategetStreetsSoapMessage(username, city);
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/getStreets"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {		
				$("#loginButton").removeAttr('disabled');						
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {							
					var errorLoginMessage=$(data).find("error").text();							
					displayMessage(errorLoginMessage);
				} else { 											
					var streetlist=$(data).find("StreetsList").text();
					console.log("street list loading:");					
					for (var i=0; i<streetlist.length; i++) {
						console.log(streetlist[i]);
					}															
				}
			}).fail(function(jqXHR, textStatus, thrownError) {							
				$("#loginButton").removeAttr('disabled');				
				console.log('getStreets failed: '+thrownError);
				navigator.notification.alert(
						'אירעה תקלה בהעברת הנתונים. \nנסה מאוחר יותר',  			// message
						null,   			    // callback
						'שגיאה',            		// title
						'אישור'                  // buttonName
				);
			});
	
}

function creategetStreetsSoapMessage(username, city) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
	   <soapenv:Body> \
	      <tem:getStreets> \
	         <!--Optional:--> \
	         <tem:userName>'+username+'</tem:userName> \
	         <!--Optional:--> \
	         <tem:city>'+city+'</tem:city> \
	      </tem:getStreets> \
	   </soapenv:Body> \
	</soapenv:Envelope>';
	return xml;
}

//loadMiyun
function loadMiyun(username, region) {
	var soapMessage=createloadMiyunSoapMessage(username, region);
	$
	.ajax(
			{
				url : serverUrl,
				dataType : "xml",
				type : "POST",
				contentType : "text/xml;charset=utf-8",
				headers: {
			        "SOAPAction": "http://tempuri.org/IService1/loadMiyun"
			    },
				crossDomain: true,
				data : soapMessage,
				timeout: 30000 //30 seconds timeout
			}).done(function(data) {		
				$("#loginButton").removeAttr('disabled');						
				var returndata=$(data).find("success").text();													
				if (returndata != "true") {							
					var errorLoginMessage=$(data).find("error").text();							
					displayMessage(errorLoginMessage);
				} else { //login successful							
					// check if there are pending reports to send to the server. if yes - send them							
					handleDataBase();
					readFromDB();
					//window.setInterval(pendingReportsInterval, 1000); //checked every 1 second
					document.addEventListener("online", pendingReports, false);		
					var name=$(data).find("Name").text();							
					document.getElementById('HelloUserName').innerHTML=('שלום '+name);
					$("body").pagecontainer("change", "#MainPage", {} );
				}
			}).fail(function(jqXHR, textStatus, thrownError) {							
				$("#loginButton").removeAttr('disabled');				
				console.log('loadMiyun failed: '+thrownError);
				navigator.notification.alert(
						'אירעה תקלה בהעברת הנתונים. \nנסה מאוחר יותר',  			// message
						null,   			    // callback
						'שגיאה',            		// title
						'אישור'                  // buttonName
				);
			});
	
}

function createloadMiyunSoapMessage(username, region) {
	var xml='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> \
		   <soapenv:Header/> \
	   <soapenv:Body> \
	      <tem:loadMiyun> \
	         <!--Optional:--> \
	         <tem:userName>'+username+'</tem:userName> \
	         <!--Optional:--> \
	         <tem:region>'+region+'</tem:region> \
	      </tem:loadMiyun> \
	   </soapenv:Body> \
	</soapenv:Envelope>';
	return xml;
}
*/