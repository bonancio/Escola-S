function posicaoRelativaDuasRetas() {
    var mRetaUm = Number(document.getElementById("xA").value);
    var nRetaUm = Number(document.getElementById("yA").value);
    var mRetaDois = Number(document.getElementById("xB").value);
    var nRetaDois = Number(document.getElementById("yB").value);

    var resultado = "";

    if(mRetaUm === mRetaDois) {
        resultado += " Paralela";
        if(nRetaUm === nRetaDois){
            resultado += " Coincidente"
        }
    }else {
        resultado += " Concorrente";
        if((mRetaUm * mRetaDois) == -1){
            resultado += " Perpendicular"
        }
    }
    document.getElementById("display").value = `${resultado}`

    console.log(resultado)
}

function limpar() {
    document.getElementById("xA").value = ""; 
    document.getElementById("xB").value = ""; 
    document.getElementById("yA").value = ""; 
    document.getElementById("yB").value = ""; 
    document.getElementById("display").value = "";
 }