function getPrice(){
    var e = document.getElementsByName('room');
    var f = document.getElementsByName('num');
    for(i = 0; i < e.length; i++){
        if(e[i].checked){
            if(e[i].value == 1){
                document.getElementById("price").innerHTML = "Price = $89.99";
            } else if(e[i].value == 2){
                document.getElementById("price").innerHTML = "Price = $98.99";
            }
        }
    }
    console.log(f.value);
}