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
                    document.getElementById("total").innerHTML = "Tax = $" + t;
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
                document.getElementById('visa').disabled = false;
                document.getElementById('amex').disabled = true;
            } else if(e[i].value == 15){
                document.getElementById('visa').disabled = true;
                document.getElementById('amex').disabled = false;
            }
        }
    }
}
