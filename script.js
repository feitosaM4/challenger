const substituicoes = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};


function criptografar() {
    const textoOriginal = document.getElementById('textoinput').value.toLowerCase();
    let textoCriptografado = "";

    for (let letra of textoOriginal) {
        textoCriptografado += substituicoes[letra] || letra;
    }

    document.getElementById('outputtexto').value = textoCriptografado;
    atualizarVisibilidade(textoCriptografado);
}


function descriptografar() {
    const textoCriptografado = document.getElementById('textoinput').value.toLowerCase();
    let textoOriginal = "";
    let i = 0;

    while (i < textoCriptografado.length) {
        let encontrado = false;

        for (let chave in substituicoes) {
            if (textoCriptografado.startsWith(substituicoes[chave], i)) {
                textoOriginal += chave;
                i += substituicoes[chave].length;
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            textoOriginal += textoCriptografado[i];
            i++;
        }
    }

    document.getElementById('outputtexto').value = textoOriginal;
    atualizarVisibilidade(textoOriginal);
}


function recortar() {
    const outputTexto = document.getElementById('outputtexto');
    const menssagem = document.querySelector('.menssagem'); 
    // Verifica se há texto para recortar
    if (outputTexto.value.trim() === "") {
        menssagem.textContent = 'Nenhuma mensagem encontrada'; 
    } else {
        menssagem.textContent = ''; 
    }

   
    outputTexto.select();
    document.execCommand('copy'); 
    
   
    outputTexto.value = '';

    
    atualizarVisibilidade(outputTexto.value);

    alert('Texto copiado e removido da área de saída.');
}

function atualizarVisibilidade(texto) {
    const imagem1 = document.getElementById('imagem1');
    const imagem2 = document.getElementById('imagem2');
    const menssagem = document.querySelector('.menssagem');
    const instrucoes = document.querySelector('.instrucoes');

    console.log("Texto recebido:", texto); 

    if (texto.trim() === "") {
        console.log("Texto vazio - mostrando imagem2 e menssagem"); 
        imagem2.style.display = 'block';
        menssagem.style.display = 'none';
        instrucoes.style.display = 'block';
    } else {
        console.log("Texto não vazio - mostrando instrucoes"); 
        imagem2.style.display = 'none';
        menssagem.style.display = 'none';
        instrucoes.style.display = 'block';
    }

    imagem1.style.display = 'block'; 
}
