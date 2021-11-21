function limpar() {
   document.getElementById("xA").value = ""; 
   document.getElementById("xB").value = ""; 
   document.getElementById("yA").value = ""; 
   document.getElementById("yB").value = ""; 
   document.getElementById("display").value = "";
}

function calcDst() {
    var xA = Number(document.getElementById("xA").value);
    var xB = Number(document.getElementById("xB").value);
    var yA = Number(document.getElementById("yA").value);
    var yB = Number(document.getElementById("yB").value);

    var primeiraParte = Math.pow((xB-xA) , 2);
    var segundaParte = Math.pow((yB-yA) , 2);
    var soma = primeiraParte + segundaParte;
    var resultado = Math.sqrt(soma);
    document.getElementById("display").value = resultado;
    document.getElementById("display").value = resultado.toFixed(3)
 } 

 function calcPm() {
    var xA = Number(document.getElementById("xA").value);
    var xB = Number(document.getElementById("xB").value);
    var yA = Number(document.getElementById("yA").value);
    var yB = Number(document.getElementById("yB").value);

    var primeiraParte = (xA + xB) / 2
    var segundaParte = (yA + yB) / 2

    document.getElementById("display").value = `PM = (${primeiraParte}-${segundaParte})`;
    
 }
