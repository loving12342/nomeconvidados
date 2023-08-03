var nomepessoas = [];

function enviarnomes(){
 var nomeconvidado = document.getElementById("nomes").value;
 nomepessoas.push(nomeconvidado);
 document.getElementById("mostarnomes").innerHTML=nomepessoas.toString(); 
}

function emordemalfabetica(){
    nomepessoas.sort();
    var i = nomepessoas.join("<br>");
    document.getElementById("ordemalfabetica").innerHTML=i.toString();
}

function nomelistas(){
    var i = nomepessoas.join("<br>");
    document.getElementById("nomesemlista").innerHTML=i.toString();
}
function persquisarnome(){
    var s = document.getElementById("pesquisarnome").value;
    var encontrado = 0;
    var contador;
    for (contador =0; contador < nomepessoas.length; contador++){
        if(s==nomepessoas[contador]){
            encontrado = encontrado + 1;
        }
    } 
    document.getElementById("nomeslocalizados").innerHTML= "Nome encontrado" + encontrado + "vez(es)";
}