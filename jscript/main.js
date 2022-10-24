function recuperoEmail() {
    let listaEmail = ["chri@hotmail.it", "christian@hotmail.it", "salvati@hotmail.it"];
    let inputEmail = document.getElementById("inputEmail");
    let email = inputEmail.value;

    let emailIn = listaEmail.includes(email)

    if (emailIn == true) {
        alert("La tua email risulta essere registrata nel nostro Database, premi OK per proseguire");
    } else {
        alert("La tua email non risulta nel nostro Database, prosegui con la Registrazione");
    }
}