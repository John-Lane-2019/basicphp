/*
    The function formSubmit() is called when the form "myform" is submitted.
    It should run some validations and show the output.
*/
function formSubmit(){

var dropDown=document.getElementById('provinces');//grabs the <select> element
var selectedProvince=dropDown.options[dropDown.selectedIndex].text; //create a variable that stores the drop down as an array.
var salesTax=[0.13,0.05,0.15];
var salesTaxApplied=0;
var deliveryOptionDropDown=document.getElementById('delivery');
var selectedDeliveryOption=deliveryOptionDropDown.options[deliveryOptionDropDown.selectedIndex].text;
var deliveryFees=[10,20,30,40];
var deliveryFeeApplied=0;
var grandTally=0;
var one=1;

var nameInputByUser=document.getElementById('name').value;
if(nameInputByUser==""){

    var incorrectNameMessage="Please enter your full name."
    document.getElementById('name').focus();
    document.getElementById('error1').innerHTML=incorrectNameMessage;
    
}
else{
    var nameGoingOnReceipt=nameInputByUser;
}

var emailInputByUser=document.getElementById('email').value;
if(emailInputByUser==""){
    var incorrectEmailMessage="Please enter your email address."
    document.getElementById('email').focus();
    document.getElementById('error2').innerHTML=incorrectEmailMessage;
    
}
else{
    var emailGoingOnReceipt=emailInputByUser;
    
}

var phoneInputByUser=document.getElementById('phone').value;
if(phoneInputByUser==""){
    var incorrectPhoneMessage="Please enter your phone number.";
    document.getElementById('phone').focus();
    document.getElementById('error3').innerHTML=incorrectPhoneMessage;
    
}
else{
    var phoneNumberGoingOnReceipt=phoneInputByUser;
}

var regexPhoneNumber = /^\({0,1}[2-9]{1}[0-9]{2}\){1} {1}[2-9]{1}[0-9]{2}-{0,1}[0-9]{0,4}$/;
if(!regexPhoneNumber.test(phoneInputByUser)){
    var incorrectPhoneMessage="Please enter your phone number in the correct format.";
    document.getElementById('error3').innerHTML=incorrectPhoneMessage;
   document.getElementById('phone').focus();

}

var addressInputByUser=document.getElementById('address').value;
if(addressInputByUser==""){
    var incorrectAddressMessage="Please enter your address.";
    document.getElementById('address').focus();
    document.getElementById('error4').innerHTML=incorrectAddressMessage;
    
}
else{
    var addressGoingOnReceipt=addressInputByUser;
}

var postalCodeInputByUser=document.getElementById('postal_code').value;
if(postalCodeInputByUser==""){
    var incorrectPostalCodeMessage="Please enter your postal code."
    document.getElementById('postal_code').focus();
    document.getElementById('error5').innerHTML=incorrectPostalCodeMessage;
}
else{
    var postalCodeGoingOnReceipt=postalCodeInputByUser; //this if/else no longer required due to regex if/else.
}

var regexPostalCode = /^[A-Z][0-9][A-Z]\s[0-9][A-Z][0-9]$/;
if(!regexPostalCode.test(postalCodeInputByUser)){
    var incorrectPostalCodeMessage="Please enter your postal code in the correct format."
    document.getElementById('postal_code').focus();
    document.getElementById('error5').innerHTML=incorrectPostalCodeMessage;
}

var widgetA_OrderQuantity=document.getElementById('widget_a').value;
if(widgetA_OrderQuantity!=""){
    var tenDollars=10;
    var widgetA_OrderQuantityParsed=parseInt(widgetA_OrderQuantity);
    var firstNumberGoingOnItemTally=tenDollars*widgetA_OrderQuantityParsed;
    
}
else{
    var incorrectQuantityMessageOne="Please enter a value from 0-10 for Widget A";
    document.getElementById('error6').innerHTML=incorrectQuantityMessageOne;
    document.getElementById('widget_a').focus();
}

var widgetB_OrderQuantity=document.getElementById('widget_b').value;
if(widgetB_OrderQuantity!=""){
    var twentyDollars=20;
    var widgetB_OrderQuantityParsed=parseInt(widgetB_OrderQuantity);
    var secondNumberGoingOnItemTally= widgetB_OrderQuantityParsed*twentyDollars;
}
else{
    var incorrectQuantityMessageTwo="Please enter a value from 0-10 for Widget B";
    document.getElementById('error7').innerHTML=incorrectQuantityMessageTwo;
    document.getElementById('widget_b').focus();
}

var widgetC_OrderQuantity=document.getElementById('widget_c').value;
if(widgetC_OrderQuantity!=""){
    var thirtyDollars=30;
    var widgetC_OrderQuantityParsed=parseInt(widgetC_OrderQuantity)
    var thirdNumberGoingOnItemTally=widgetC_OrderQuantityParsed*thirtyDollars;
}
else{
    var incorrectQuantityMessageThree="Please enter a value from 0-10 for Widget C";
    document.getElementById('error8').innerHTML=incorrectQuantityMessageThree;
    document.getElementById('widget_c').focus();
}


if(selectedProvince=="-----Select-----"){
    var incorrectProvinceMessage="Please select a province to ship to."
    document.getElementById('error9').innerHTML=incorrectProvinceMessage;
    //document.getElementById('no_selection').focus();
}


if(nameInputByUser!=""&&emailInputByUser!=""&&phoneInputByUser!=""&&addressInputByUser!=""&&postalCodeInputByUser!=""){
    document.getElementById('formResult1').innerHTML=nameGoingOnReceipt;
    document.getElementById('formResult2').innerHTML=emailGoingOnReceipt;
    document.getElementById('formResult3').innerHTML=phoneNumberGoingOnReceipt;
    document.getElementById('formResult4').innerHTML=addressGoingOnReceipt;
    document.getElementById('formResult5').innerHTML=postalCodeGoingOnReceipt;
}

if(!isNaN(firstNumberGoingOnItemTally)&&!isNaN(secondNumberGoingOnItemTally)&&!isNaN(thirdNumberGoingOnItemTally)){

    var itemTally=firstNumberGoingOnItemTally+secondNumberGoingOnItemTally+thirdNumberGoingOnItemTally;

    var itemTallyMessage=`Total Widgets Purchased: $${itemTally}`;
    
    document.getElementById('formResult6').innerHTML=itemTallyMessage;
}

if(selectedProvince=="Ontario"){

    salesTaxApplied=salesTax[0];
    var shippingTo_Ontario=selectedProvince;
    var provinceMessageOne=`Your item is shipping to: ${shippingTo_Ontario}`;
    document.getElementById('formResult7').innerHTML=provinceMessageOne;
}

if(selectedProvince=="Quebec"){

    salesTaxApplied=salesTax[2];
    var shippingTo_Quebec=selectedProvince;
    var provinceMessageTwo=`Your item is shipping to: ${shippingTo_Quebec}`;
    document.getElementById('formResult8').innerHTML=provinceMessageTwo;
    
}
if(selectedProvince=="Alberta"){
    
    salesTaxApplied=salesTax[1];
    var shippingTo_Alberta=selectedProvince;
    var provinceMessageThree=`Your item is shipping to: ${shippingTo_Alberta}`;
    document.getElementById('formResult9').innerHTML=provinceMessageThree;
}

if(salesTaxApplied!==0){

    document.getElementById('formResult10').innerHTML=`Sales tax: ${salesTaxApplied}`;
}

if(selectedDeliveryOption=="One Day"){

    var deliveryFeeApplied=deliveryFees[3]
    document.getElementById('formResult11').innerHTML=`Delivery Fee: $${deliveryFeeApplied}`;
}

if(selectedDeliveryOption=="Two Days"){
    var deliveryFeeApplied=deliveryFees[2];
    document.getElementById('formResult12').innerHTML=`Delivery Fee: $${deliveryFeeApplied}`;
}

if(selectedDeliveryOption=="Three Days"){
    var deliveryFeeApplied=deliveryFees[1];
    document.getElementById('formResult13').innerHTML=`Delivery Fee: $${deliveryFeeApplied}`;
}

if(selectedDeliveryOption=="Four Days"){
    var deliveryFeeApplied=deliveryFees[0];
    document.getElementById('formResult14').innerHTML=`Deliver Fee: $${deliveryFeeApplied}`;
}

if(selectedDeliveryOption=="-----Select-----"){
    var noDeliveryOptionSelected="Please select a delivery option."
    document.getElementById('error10').innerHTML=noDeliveryOptionSelected;
}

grandTally=(one+salesTaxApplied)*(deliveryFeeApplied+itemTally);

var grandTallyDisplayed=grandTally.toFixed(2);

if(!isNaN(grandTally)){
    document.getElementById('formResult16').innerHTML=`Total $${grandTallyDisplayed}`;
}


    //Write your code here



    // Return false will stop the form from submitting and keep it on the current page.
    return false;
}