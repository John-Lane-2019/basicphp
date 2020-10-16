<?php

$errors = '';
$name = $_POST['name'];//fetching HTML values.
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$postalCode = $_POST['postalcode'];


$quantityOfWidgetsOrdered = $_POST['widget_a_quantity'] + $_POST['widget_b_quantity'] + $_POST['widget_c_quantity'];

$priceList=[10,20,30]; //handling the price and quantity of individual widgets.
$widget_A_Quantity = $_POST['widget_a_quantity'];
$widget_A_Total = $widget_A_Quantity * $priceList[0];
$widget_B_Quantity = $_POST['widget_b_quantity'];
$widget_B_Total = $widget_B_Quantity * $priceList[1];
$widget_C_Quantity = $_POST['widget_c_quantity'];
$widget_C_Total = $widget_C_Quantity * $priceList[2];

$widgetTotal = $widget_A_Total+$widget_B_Total+$widget_C_Total;//tally of how many widgets were purchased.

$province = $_POST['province'];//fetches value from province menu.

$provincialTaxRates = [0.13,0.15,0.05];//tax rates for Ontario, Quebec, and Alberta respectively.
$taxApplied;

$delivery=$_POST['delivery'];//fetches delivery time
$deliveryRates=[40,30,20,10];
$deliveryRateApplied;

$one=1;

///error handling///
if(trim($name) == ''){
    $errors .= 'Name is required <br>';
}

if($email == ''){
    $errors .= 'Email is required <br>';
}

if($phone == ''){
    $errors .= 'Phone number is required <br>';
}

if($address == ''){
    $errors .= 'Address is required <br>';
}

if($postalCode == ''){
    $errors .= 'Postal code is required <br>';
}

if($quantityOfWidgetsOrdered === 0 ){
    $errors .= 'Please order a Widget <br>';
}
if($province=='no_selection'){
    $errors .= 'Please select a province <br>';
}

if($province=='Ontario'){
    $taxApplied=$provincialTaxRates[0];
    
}

if($province=='Quebec'){
    $taxApplied=$provincialTaxRates[1];
    
}

if($province=='Alberta'){
    $taxApplied=$provincialTaxRates[2];
}

if($delivery=='select'){
    $errors .='Please select a delivery time <br>';
}

if($delivery=='one_day'){
    $deliveryRateApplied=$deliveryRates[0];
}

if($delivery=='two_days'){
    $deliveryRateApplied=$deliveryRates[1];
}

if($delivery=='three_days'){
    $deliveryRateApplied=$deliveryRates[2];
}

if($delivery=='four_days'){
    $deliveryRateApplied=$deliveryRates[3];
}

if($errors != ''){
    echo $errors;//show errors if there are any errors
}
///outputting validated information from form///
else{
    $grandTotal=($widgetTotal+$deliveryRateApplied) * ($taxApplied+$one);
    $grandTotalDispayed=number_format($grandTotal,2);
    echo "
        **RECEIPT**<br><br>
        Name: $name <br>
        Email: $email <br>
        Phone Number: $phone <br>
        Address: $address <br>
        Province: $province <br>
        Postal Code: $postalCode <br><br>
        Number of Widgets Ordered: $quantityOfWidgetsOrdered <br><br>
        Widget A Quantity:  $widget_A_Quantity<br>
        Widget A Total: $$widget_A_Total<br><br>
        Widget B Quantity:  $widget_B_Quantity <br>
        Widget B Total: $$widget_B_Total<br><br>
        Widget C Quantity: $widget_C_Quantity<br>
        Widget C Total: $$widget_C_Total<br><br>
        Widget Total: $$widgetTotal<br><br>
        Tax Rate: $taxApplied<br><br>
        Delivery Fee: $$deliveryRateApplied<br><br>
        Grand Total: $$grandTotalDispayed<br><br>
        **THANK YOU FOR YOUR PURCHASE**
        ";
}

?>