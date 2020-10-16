<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Forms and Validations</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="js/form.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Bilbo+Swash+Caps" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Kalam" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" href="css/form.css">
   
</head>
<body>
  
  <form name="myform" method="POST" action="result.php"> 
    <label>Name</label>
    <input id="name" placeholder="Name" type="text" name="name"><br/>
    
    <label>Email</label>
    <input id="email" placeholder="email@domain.com"  title="Please enter in email@domain.com format."  type="email" name="email"><br/>

    <label>Phone</label>
    <input id="phone" placeholder="Phone Number"  title="Please follow 111-111-1111 pattern." type="tel" name="phone"><br/>

    <label>Address</label>
    <input id="address"  placeholder="Your Address" type="text" name="address"><br/><!--change placeholder-->

    <label>Postal Code</label>
    <input id="postal_code"  title="Please enter in format A0A A0A" placeholder="A0A A0A" type="postalcode" name="postalcode"><br/>

    <label>Widget A $10</label>
    <input id="widget_a" placeholder="Widget A" type="number" name="widget_a_quantity" value="0" min="0" max="10">
    
    <label>Widget B $20</label>
    <input id="widget_b" placeholder="Widget B" type="number" name="widget_b_quantity" value="0" min="0" max="10" >

    <label>Widget C $30</label>
    <input id="widget_c" placeholder="Widget C" type="number" name="widget_c_quantity" value="0" min="0" max="10">
    

    <label>Province</label>
    <select id="province" name="province">
        <option value="no_selection">-----Select-----</option>
        <option value="Ontario">Ontario</option>
        <option value="Quebec">Quebec</option>
        <option value="Alberta">Alberta</option>
    </select><br/>

    <label>Delivery Time</label>
    <select name="delivery" id="delivery">
        <option value="select">-----Select-----</option>
        <option value="one_day">One Day</option>
        <option value="two_days">Two Days</option>
        <option value="three_days">Three Days</option>
        <option value="four_days">Four Days</option>
    </select>

    <br/><br/>

    <input type="submit" value="Submit">
    <p id="error1" name="error1"></p>
    <p id="error2"></p>
    <p id="error3"></p>
    <p id="error4"></p>
    <p id="error5"></p>
    <p id="error6"></p>
    <p id="error7"></p>
    <p id="error8"></p>
    <p id="error9"></p>
    <p id="error10"></p>
    <p id="error11"></p>
   
  </form>  
  
  <div class="formData">
    <p>Your Receipt:</p>
    <p id="formResult1"></p>
    <p id="formResult2"></p>
    <p id="formResult3"></p>
    <p id="formResult4"></p>
    <p id="formResult5"></p>
    <p id="formResult6"></p>
    <p id="formResult7"></p>
    <p id="formResult8"></p>
    <p id="formResult9"></p>
    <p id="formResult10"></p>
    <p id="formResult11"></p>
    <p id="formResult12"></p>
    <p id="formResult13"></p>
    <p id="formResult14"></p>
    <p id="formResult15"></p>
    <p id="formResult16"></p>
    
  </div>
  
</body>

<script language="php">
  echo("This is HTML script tags.");
  </script>
</html>








