var votosBranco = Number(prompt("DIGITE O NUMERO DE VOTOS BRANCOS"))
var votosNulos = Number(prompt("DIGITE O NUMERO DE VOTOS NULOS"))
var votosValidos = Number(prompt("DIGITE O NUMERO DE VOTOS VALIDOS"))

var total = votosBranco + votosNulos + votosValidos
var porcentagemBranco = total * votosBranco / 100
var porcentagemNulos = total * votosNulos / 100
var porcentagemValidos = total * votosValidos / 100

alert("SAO " + porcentagemBranco + "% VOTOS BRANCOS" +"\n" + "SAO " + porcentagemNulos + "% VOTOS NULOS"+"\n" + "SAO " + porcentagemValidos + "% VOTOS VALIDOS" + "\n")