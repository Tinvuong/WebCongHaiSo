function onClick(){
    let a = parseInt(document.getElementById("aVar").value);
    let b = parseInt(document.getElementById("bVar").value);
    let c = a+b;
    if(isNaN(c)){
        c = "Please enter number!"
    }
    document.getElementById("result").innerHTML = "Result: "+ c;
}
