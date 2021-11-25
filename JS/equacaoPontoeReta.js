function limpar() {
    document.getElementById("xA").value = ""; 
    document.getElementById("equacaoA").value = ""; 
    document.getElementById("yA").value = ""; 
    document.getElementById("equacaoB").value = ""; 
    document.getElementById("equacaoC").value = ""; 
    document.getElementById("display").value = "";
 }

 function distanciaPontoEReta() {
    var pAx = Number(document.getElementById("xA").value);
    var pAy = Number(document.getElementById("yA").value);
    var a = Number(document.getElementById("equacaoA").value);
    var b = Number(document.getElementById("equacaoB").value);
    var c = Number(document.getElementById("equacaoC").value);
    console.log("A = " + a)
    console.log("B = " + b)
    console.log("C = " + c)
    console.log(pAx, pAy)
    var superior = (a * pAx) + (b * pAy) + c;
    var inferior = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));

    console.log(superior)
    console.log(inferior)

    var resultado = Math.abs(superior / inferior);

    document.getElementById("display").value = `D ${resultado.toFixed(3)}`;

}