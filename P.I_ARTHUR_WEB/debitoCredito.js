// =========================================carato cvv ======================================

function validarEntrada(event) {
    let keyCode = event.keyCode || event.which;

    // Permite apenas números (códigos ASCII entre 48 e 57)
    if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
    }

    // Limita a entrada a 3 dígitos
    let cvv = event.target.value;
    if (cvv.length >= 3) {
        event.target.value = cvv.slice(0, 3);
    }
}

// ====================================cartao nome tirular======================================

function formatarNome(event) {
    let nome = event.target.value;

    // Remove todos os caracteres não alfabéticos e números
    nome = nome.replace(/[^a-zA-Z\s]/g, '');

    // Converte a primeira letra de cada palavra para maiúscula
    nome = nome.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
    });

    event.target.value = nome;
}

function validarDigitacao(event) {
    let keyCode = event.keyCode || event.which;

    // Impede a digitação de números e caracteres especiais
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 33 && keyCode <= 47) || (keyCode >= 58 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) {
        event.preventDefault();
    }
}

// =======================================PARCELAMENTO===================================

// =======================================BOTÃO===================================
function toggleConteudo(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display === "none") {
        elemento.style.display = "block"; // Exibe o conteúdo
    } else {
        elemento.style.display = "none"; // Oculta o conteúdo
    }
}