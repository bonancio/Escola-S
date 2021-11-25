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

 function calcEquaReta() {
   var pAx = Number(document.getElementById("xA").value);
   var pAy = Number(document.getElementById("yA").value);
   var pBx = Number(document.getElementById("xB").value);
   var pBy = Number(document.getElementById("yB").value);

   var m = [
       [pAx, pBx, 1, pAx],
       [pAy, pBy, 1, pAy]
   ]

   var n1 = ((-1 * m[0][1]) * m[1][0])
   var x1 = ((-1 * m[0][2]) * m[1][1])
   var y1 = ((-1 * m[0][3]) * m[1][2])

   var n2 = m[0][0] * m[1][1]
   var y2 = m[0][1] * m[1][2]
   var x2 = m[0][2] * m[1][3]

   var somaX = x1 + x2 > 0 ? `+${x1 + x2}` : `${x1 + x2}`;
   var somaY = y1 + y2 > 0 ? `+${y1 + y2}` : `${y1 + y2}`;
   var somaN = n1 + n2 > 0 ? `+${n1 + n2}` : `${n1 + n2}`;

   document.getElementById("display").value = `Equação da Reta: ${somaX}x ${somaY}y ${somaN} = 0 `;

}

function calcCoef() {
   var pAx = Number(document.getElementById("xA").value);
   var pAy = Number(document.getElementById("yA").value);
   var pBx = Number(document.getElementById("xB").value);
   var pBy = Number(document.getElementById("yB").value);
   var coefienteAngular = (pAy - pBy) / (pAx - pBx);
   document.getElementById("display").value = `Coefiente Angular ${coefienteAngular}`;
}
