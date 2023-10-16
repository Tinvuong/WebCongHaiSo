function onClick(){
    let a = parseInt(document.getElementById("aVar").value);
    let b = parseInt(document.getElementById("bVar").value);
    let c = a+b;
    document.getElementById("result").innerHTML = "Result: "+ c;
}