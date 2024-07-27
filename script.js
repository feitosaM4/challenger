// Mapeamento de substituições para criptografar e descriptografar
const substituicoes = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Função para criptografar o texto
function criptografar() {
    const textoOriginal = document.getElementById('textoinput').value.toLowerCase();
    let textoCriptografado = "";

    for (let letra of textoOriginal) {
        textoCriptografado += substituicoes[letra] || letra;
    }

    document.getElementById('outputtexto').value = textoCriptografado;
    atualizarVisibilidade(textoCriptografado);
}

// Função para descriptografar o texto
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

// Função para recortar o texto criptografado/descriptografado
function recortar() {
    const outputTexto = document.getElementById('outputtexto');
    const menssagem = document.querySelector('.menssagem'); // Selecionar o parágrafo correto

    // Verifica se há texto para recortar
    if (outputTexto.value.trim() === "") {
        menssagem.textContent = 'Nenhuma mensagem encontrada'; // Mostra a mensagem se não houver texto
    } else {
        menssagem.textContent = ''; // Limpa a mensagem se houver texto
    }

    // Selecionar o texto dentro do textarea e copiar para a área de transferência
    outputTexto.select();
    document.execCommand('copy'); // Usar 'copy' para copiar o texto
    
    // Limpar o texto do textarea após copiar
    outputTexto.value = '';

    // Atualizar visibilidade
    atualizarVisibilidade(outputTexto.value);

    alert('Texto copiado e removido da área de saída.');
}

function atualizarVisibilidade(texto) {
    const imagem1 = document.getElementById('imagem1');
    const imagem2 = document.getElementById('imagem2');
    const menssagem = document.querySelector('.menssagem');
    const instrucoes = document.querySelector('.instrucoes');

    console.log("Texto recebido:", texto); // Adiciona log do texto recebido

    if (texto.trim() === "") {
        console.log("Texto vazio - mostrando imagem2 e menssagem"); // Log para quando o texto estiver vazio
        imagem2.style.display = 'block';
        menssagem.style.display = 'none';
        instrucoes.style.display = 'block';
    } else {
        console.log("Texto não vazio - mostrando instrucoes"); // Log para quando o texto não estiver vazio
        imagem2.style.display = 'none';
        menssagem.style.display = 'none';
        instrucoes.style.display = 'block';
    }

    imagem1.style.display = 'block'; // Garante que imagem1 seja sempre visível
}
