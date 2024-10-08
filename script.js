const textArea = document.querySelector(".texto-area");
const textoResposta = document.querySelector(".texto-resposta");
const mensagem = document.getElementById("mensagem");

function criptografar() {
    const textoCriptografado = criptografarTexto(textArea.value);
    textoResposta.value = textoCriptografado;
    textArea.value = "";
}

function criptografarTexto(stringCriptografar) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringCriptografar = stringCriptografar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringCriptografar = stringCriptografar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }

    return stringCriptografar;
}

function descriptografar() {
    const textoDescriptografado = descriptografarTexto(textArea.value);
    textoResposta.value = textoDescriptografado;
}

function descriptografarTexto(stringDescriptografar) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDescriptografar = stringDescriptografar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDescriptografar = stringDescriptografar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }

    return stringDescriptografar;
}

function recortar() {
   
    if (textoResposta.value.trim() === "") {
        mensagem.textContent = 'Nenhuma mensagem encontrada';
        mensagem.classList.add('show');
    } else {
        mensagem.classList.remove('show');
    }

   
    textoResposta.select();

    
    navigator.clipboard.writeText(textoResposta.value).then(() => {
        
        textoResposta.value = '';
    }).catch(err => {
        console.error('Falha ao copiar o texto: ', err);
    });

    atualizarVisibilidade(textoResposta.value);
}

function atualizarVisibilidade(texto) {
   
    console.log('Atualizar visibilidade com texto:', texto);
}
