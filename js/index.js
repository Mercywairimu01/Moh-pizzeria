//Business logic
//constructor

function Pizza(size, crust, topping, quantity,total){
    this.mySize = size;
    this.myCrust = crust;
    this.myTop = topping;
    this.myQuantity = quantity;
    this.total = total;
}
//prototype
Pizza.prototype.totalCost = function(){
    return (mySize + myCrust + myTop)*(myQuantity)
}


//User interface
//submit button
$(document).ready(function(){
    $("#send").click(function(event){
        event.preventDefault();

        var mquantity = document.getElementById("quantity").value;

        if(mquantity == ""){
            alert("choose the quantity")
        }
        else{
            $("#send").show();
            $(".checkout").show();
            $(".display").slideDown();
            $("#home").slideDown();
            $("#grand").slideDown();
            
            // $("#neworder").hide();
        }

        function getSize(){
            var sizeCost = document.getElementById("pizza").value;
            return parseInt(sizeCost) 
        }
        function getCrust(){
            var crustCost = document.getElementById("crust").value;
            return parseInt(crustCost) 
        }
        function getNumber(){
            var myNumber = document.getElementById("quantity").value;
            return parseInt(myNumber) 
        }
        
        function getTopping() {
            var myTopping = document.getElementById("topping").value;
            return parseInt(myTopping);
          }
          
          
    //    Object for new customer;

        var newCustomer = new Pizza(getSize(), getCrust(), getTopping(), getNumber());
        
        // Total cost for the new customer:
        var totalCost = ((newCustomer.mySize + newCustomer.myCrust + newCustomer.myTop)*(newCustomer.myQuantity));
        $(".display").append("<h3> You have ordered " + newCustomer.myQuantity +" pizza(s) and your Total Bill is: " + totalCost +"</h3>")
        
    });

    //delivery location
    $("#home").click(function(){
        $("#grand").hide();
        $(".display").hide();
        $(".checkout").hide();
        $(".userdeliver").show();
        $("#neworder").hide();
    });

    // checkout button details
    $("#grand").click(function(){
        $("#home").show();
        $("#grand").hide();
        $(".display").hide();
        $(".checkout").show();
        $(".userdeliver").hide();
        $("#neworder").show();
        $(".table").show()
        function getSize(){
            var sizeCost = document.getElementById("pizza").value;
            return parseInt(sizeCost) 
        }
        function getCrust(){
            var crustCost = document.getElementById("crust").value;
            return parseInt(crustCost) 
        }
        function getNumber(){
            var myNumber = document.getElementById("quantity").value;
            return parseInt(myNumber) 
        }
        
        function getTopping() {
            var myTopping = document.getElementById("topping").value;
            return parseInt(myTopping);
          }
          
          
    //    Object for new customer;

        var newCustomer = new Pizza(getSize(), getCrust(), getTopping(), getNumber());
        
        // Total cost for the new customer:
        var totalCost = ((newCustomer.mySize + newCustomer.myCrust + newCustomer.myTop)*(newCustomer.myQuantity));
       $(".table").append('<tr id="pizzeria"><td id="quantity">'+ newCustomer.myQuantity + '</td><td id="size">' + $(".size option:selected").text()  + '</td><td id="crust">' + $(".crust option:selected").text()  + '</td><td id="topping">' + $(".toppings option:selected").text()+ '</td><td id="total">' + totalCost + '</td></tr>')
    });
    //new order
    $("#neworder").click(function(){
        $("#home").hide();
        $(".display").hide();
        $(".checkout").hide();
        $(".userdeliver").hide();
        $("#neworder").hide();
        $("#myForm").trigger("reset")
        $("#send").show();
        $(".grandorder").hide();

    });
        //final order button 
        $("#finalorder").click(function(event){
            event.preventDefault();
            $("#home").hide();
            $(".display").hide();
            $(".checkout").hide();
            
            // $(".userdeliver").hide();

            function getSize(){
                var sizeCost = document.getElementById("pizza").value;
                return parseInt(sizeCost) 
            }
            function getCrust(){
                var crustCost = document.getElementById("crust").value;
                return parseInt(crustCost) 
            }
            function getNumber(){
                var myNumber = document.getElementById("quantity").value;
                return parseInt(myNumber) 
            }
            
            function getTopping() {
                var myTopping = document.getElementById("topping").value;
                return parseInt(myTopping);
              }
              
           // Object for new customer;
    
            var newCustomer = new Pizza(getSize(), getCrust(), getTopping(), getNumber());
            
            // Total cost for the new customer:
            var totalCost = ((newCustomer.mySize + newCustomer.myCrust + newCustomer.myTop)*(newCustomer.myQuantity));
            var grandTotal = totalCost+150;
            let customer = $("input#name").val();
            let phone = $("input#phone").val();
            let area = $("input#place").val();
            // let location = prompt("Enter your location:")
            // alert("it will be delivered to " + location)
    
            if ($("input#name").val() && $("input#phone").val() && $("input#place").val()!=""){
      alert(`${customer} You have ordered ${newCustomer.myQuantity} pizza(s), for ${totalCost}. We have recieved your order and it will be delivered to you at ${area}. Prepare Ksh ${grandTotal}`);
                // $(".grandorder").append('<h3>'+ customer+ "You have ordered " + newCustomer.myQuantity +" pizza(s), for " + totalCost + " We have recieved your order and it will be delivered to you at "+area+ ". Prepare Ksh. "+ grandTotal +'<h3>');
                //  $(".grandorder").slideDown(1000);
                 $(".userdeliver").hide();
                 $("#neworder").show();
                 $("#finalOrder").hide()

              }
              else {
                alert("Please fill in the details for delivery!");
                $(".userdeliver").show();
                
              }
            
        });
        
});

