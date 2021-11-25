function limpar() {
    document.getElementById("xA").value = ""; 
    document.getElementById("M").value = ""; 
    document.getElementById("yA").value = ""; 
    document.getElementById("display").value = "";
 }

 function equacaoReduzida() {
    var m = document.getElementById("M").value;
    var pAx = Number(document.getElementById("xA").value);
    var pAy = Number(document.getElementById("yA").value);
    var n = pAx - (m * pAy);
    var y = n > 0 ? `+${n}` : n;

    document.getElementById("display").value = `Y = ${m}x ${y} `;
}