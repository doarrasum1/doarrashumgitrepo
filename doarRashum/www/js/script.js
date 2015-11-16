// validate the phone number
function checkPhoneNumber(phone) {
    var reg = /^(05)\d{8}$/;
    return reg.test(phone) ? true : false;
}

// validate the barcode number
function checkBarcodeNumber(barcode) {
    var reg = /^[A-Z]{2}\d{9}[A-Z]{2}$/;
    return reg.test(barcode) ? true : false;
}