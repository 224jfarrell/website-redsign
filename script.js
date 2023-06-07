function getPrice(){
    var e = document.getElementsByName('room');
    var f = document.getElementById('num');
    for(i = 0; i < e.length; i++){
        if(e[i].checked){
            if(f !== null){
                if(e[i].value == 1){
                    var st = 90 * f.value;
                    var tx = Math.ceil((st * .07)*10)/10;
                    var t = Math.ceil((tx + st)*10)/10
                    document.getElementById("subtotal").innerHTML = "Subtotal = $" + st;
                    document.getElementById("tax").innerHTML = "Tax = $" + tx;
                    document.getElementById("total").innerHTML = "Total = $" + t;
                } else if(e[i].value == 2){
                    var st = 99 * f.value;
                    var tx = Math.ceil((st * .07)*10)/10;
                    var t = Math.ceil((tx + st)*10)/10
                    document.getElementById("subtotal").innerHTML = "Subtotal = $" + st;
                    document.getElementById("tax").innerHTML = "Tax = $" + tx;
                    document.getElementById("total").innerHTML = "Total = $" + t;
                }
            }
        }
    }
}

function creditCard(){
    var e = document.getElementsByName('card');
    for(i = 0; i < e.length; i++){
        if(e[i].checked){
            if(e[i].value == 16){
                document.getElementById('visa-num').disabled = false;
                document.getElementById('visa-cvv').disabled = false;
                document.getElementById('amex-num').disabled = true;
                document.getElementById('amex-cvv').disabled = true;
            } else if(e[i].value == 15){
                document.getElementById('visa-num').disabled = true;
                document.getElementById('visa-cvv').disabled = true;
                document.getElementById('amex-num').disabled = false;
                document.getElementById('amex-cvv').disabled = false;
            }
        }
    }
}

function redirect(){
    alert("Thank You for Choosing Sea Cove Motel! Thank you for choosing our motel for your upcoming stay. We can't wait to welcome you to our cozy and inviting establishment. We have taken every measure to ensure a comfortable and enjoyable stay for you. Our rooms are meticulously prepared, combining modern amenities and a cozy ambiance to create the perfect retreat.If you have any further questions or require any assistance, please feel free to contact our friendly front desk staff, available 24/7. We are here to address any inquiries or accommodate any special requests you may have.");
    window.location.replace('index.html');
}
