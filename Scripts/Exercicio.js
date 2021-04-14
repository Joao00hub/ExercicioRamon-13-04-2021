async function pegarRandon(){
let resposta = await fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(dado => preencherDados(dado.message))

}

function preencherDados(dado) {
    console.log("<img class='estiloFoto' src='"+dado+"'>")
    document.getElementById('fotoTeste').innerHTML = "<img class='estiloFoto bg-dark shadow animate__animated animate__bounceIn' src='"+dado+"'>";
};