var nomeGiocatore = window.prompt("Ciao, giocatore inserisci il tuo nome MUAHHAHAHAHHAHAH")
alert("Ciao" + " " + nomeGiocatore + " " + "questo gioco si chiama SASSO, CARTA, FORBICE!");

document.getElementById("nomePlayer").innerHTML= "Nome immesso:" + " " + nomeGiocatore;

var sceltaUtente;

function clickCarta(){
    sceltaUtente = "Carta";
    alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}

function clickSasso(){
    sceltaUtente = "Sasso";
    alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}

function clickForbice(){
    sceltaUtente = "Forbice";
    alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}

function confermaFunClick(){
    document.getElementById("carta").style.display = 'none';
    document.getElementById("sasso").style.display = 'none';
    document.getElementById("forbice").style.display = 'none';
    document.getElementById("confermaBottone").style.display = 'none';
    var sceltaComputer;
    if (sceltaUtente == "carta"){
        sceltaComputer = "forbici"
    }
    if (sceltaUtente == "forbici"){
        sceltaComputer = "sasso"
    }
    if (sceltaUtente == "sasso"){
        sceltaComputer = "carta"
    }
    if (sceltaUtente == "carta"){
        document.getElementById("SceltaPC").innerHTML = nomeGiocatore + " il computer ha scelto forbici!"
    }
    if (sceltaUtente == "forbici"){
        document.getElementById("SceltaPC").innerHTML = nomeGiocatore + " il computer ha scelto sasso!"
    }
    if (sceltaUtente == "sasso"){
        document.getElementById("SceltaPC").innerHTML = nomeGiocatore + " il computer ha scelto carta!"
    }
    document.getElementById("titolo").innerHTML = nomeGiocatore + " HAI P! MUAHAHHAA";
    document.getElementById("titolo").innerHTML = nomeGiocatore + " HAI PE! MUAHAHHAA";
    document.getElementById("titolo").innerHTML = nomeGiocatore + " HAI PER! MUAHAHHAA";
    document.getElementById("titolo").innerHTML = nomeGiocatore + " HAI PERS! MUAHAHHAA";
    document.getElementById("titolo").innerHTML = nomeGiocatore + " HAI PERSO! MUAHAHHAA";
}