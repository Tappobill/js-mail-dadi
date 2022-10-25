function recuperoEmail() {
    let listaEmail = ["chri@hotmail.it", "christian@hotmail.it", "salvati@hotmail.it"];
    let inputEmail = document.getElementById("inputEmail");
    let email = inputEmail.value;

    let emailIn = listaEmail.includes(email)

    if (emailIn) {
        alert("La tua email risulta essere registrata nel nostro Database, premi OK per proseguire");
    } else {
        alert("La tua email non risulta nel nostro Database, prosegui con la Registrazione");
    }
}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function calcoloPartite() {
    let randomplayer = getRandomInt(1, 6);
    let randompc = getRandomInt(1, 6);
    document.getElementById("player").value = randomplayer;
    document.getElementById("pc").value = randompc;
    let matchpcinput = document.getElementById("matchpc");
    let matchplayerinput = document.getElementById("matchplayer");
    let resultsdiv = document.getElementById("results");
    let matchpcvalue = parseInt(matchpcinput.value);
    let matchplayervalue = parseInt(matchplayerinput.value);

    if (randomplayer > randompc) {
        resultsdiv.innerHTML = `Player Win`;
        matchplayervalue = matchplayervalue + 1;
        matchplayerinput.value = matchplayervalue;
    } else if (randomplayer < randompc) {
        resultsdiv.innerHTML = `Pc Win`;
        matchpcvalue = matchpcvalue + 1;
        matchpcinput.value = matchpcvalue;
    } else {
        resultsdiv.innerHTML = `Siete due niubbi`;
    }

}


// let numero1 =parseInt(prompt("Scrivi il primo numero"))
// let numero2 =parseInt(prompt("Scrivi il secondo numero"))a

// if (numero1 > numero2) {
//     console.log(numero1)
// } else {
//     console.log(numero2)
// }


// let parola1 = prompt("Scrivi la prima parola")
// let parola2 = prompt("Scrivi la seconda parola")

// if (parola1.length > parola2.length) {
//     console.log(parola2 + " " + parola1)
// } else {
//     console.log(parola1 + " " + parola2)
// }


// let totale = 0;

// for (let i = 0; i < 10; i++) {
//     let totale1 = parseInt(prompt("Inserisci un numero"));
//     totale = totale + totale1;
// }

// console.log(totale);


// let lista = [];

// for (let i = 0; i < 6; i++) {

//     let numero =parseInt(prompt("Numero"));
//     if (numero % 2 != 0) {
//         lista.push(numero);
//     } else {
//         console.log("non è dispari");
//     }

// }
// console.log(lista);


// let limite = parseInt(prompt("Di quanti numeri vuoi sommare il cubo?"));

// for (let i=1; i <= limite; i++){
//     let cubo = Math.pow(i, 3);
//     console.log(cubo);
// }


