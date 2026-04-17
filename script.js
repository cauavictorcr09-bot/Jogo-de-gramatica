function pedirNome() {
    // Esta variável vai guardar o nome digitado pelo usuário
    let nome;

    // Esta expressão regular permite:
    // - letras maiúsculas e minúsculas
    // - letras com acento
    // - espaços
    // Não permite números nem símbolos
    let regexNome = /^[A-Za-zÀ-ÿ\s]+$/;

    while (true) {
        // Abre o prompt para o usuário digitar o nome
        nome = prompt("Digite seu nome completo:");

        // Se o usuário clicar em Cancelar, o prompt retorna null
        if (nome === null) {
            alert("Cadastro cancelado.");
            return null;
        }

        // Remove espaços do começo e do fim
        nome = nome.trim();

        // Não permite campo vazio
        if (nome === "") {
            alert("O nome não pode ficar vazio.");
            continue;
        }

        // Verifica se o nome possui apenas letras e espaços
        if (!regexNome.test(nome)) {
            alert("Digite apenas letras e espaços no nome.");
            continue;
        }

        // Divide o nome em partes para verificar se existe nome e sobrenome
        let partesNome = nome.split(/\s+/);

        // Exige pelo menos duas palavras
        if (partesNome.length < 2) {
            alert("Digite o nome completo, com nome e sobrenome.");
            continue;
        }

        // Exige pelo menos 3 caracteres no total
        if (nome.length < 3) {
            alert("Digite um nome válido.");
            continue;
        }

        // Se estiver tudo certo, retorna o nome
        return nome;
    }
}
function pedirIdade() {
    // Esta variável vai guardar o texto digitado no prompt
    let idadeTexto;

    // O laço repete até a idade ficar válida
    while (true) {
        idadeTexto = prompt("Digite sua idade:");

        // Se o usuário cancelar, a função para aqui
        if (idadeTexto === null) {
            alert("Cadastro cancelado.");
            return null;
        }

        // Remove espaços desnecessários
        idadeTexto = idadeTexto.trim();

        // Não permite campo vazio
        if (idadeTexto === "") {
            alert("A idade não pode ficar vazia.");
            continue;
        }

        // Number converte o texto em número
        let idade = Number(idadeTexto);

        // isNaN verifica se não é número
        // idade < 0 impede número negativo
        // Number.isInteger impede número decimal
        if (isNaN(idade) || idade < 0 || !Number.isInteger(idade)) {
            alert("Digite uma idade válida usando apenas números inteiros.");
            continue;
        }

        // Se estiver correta, retorna a idade
        return idade;
    }

}
function pedirSexo() {
    // Variável que vai guardar o valor digitado
    let sexo;

    // Repete até o usuário digitar uma opção válida
    while (true) {
        sexo = prompt("Digite seu sexo: masculino, feminino ou outro");

        // Se cancelar, encerra a função
        if (sexo === null) {
            alert("Cadastro cancelado.");
            return null;
        }

        // trim remove espaços antes e depois
        // toLowerCase transforma tudo em letra minúscula
        sexo = sexo.trim().toLowerCase();

        // Não permite vazio
        if (sexo === "") {
            alert("O campo sexo não pode ficar vazio.");
            continue;
        }

        // Verifica se foi digitada uma das opções permitidas
        if (sexo !== "masculino" && sexo !== "feminino" && sexo !== "outro") {
            alert("Digite apenas: masculino, feminino ou outro.");
            continue;
        }

        // Se estiver tudo certo, retorna o sexo
        return sexo;
    }
}
function pedirCidade() {
    // Esta variável vai guardar o valor digitado
    let cidadeCompleta;

    // Esta expressão regular exige:
    // - nome da cidade com letras e espaços
    // - hífen separando
    // - UF com exatamente 2 letras
    // Exemplos válidos:
    // Brasília - DF
    // Rio de Janeiro - RJ
    let regexCidadeUF = /^[A-Za-zÀ-ÿ\s]+ - [A-Za-z]{2}$/;

    while (true) {
        // Pede cidade e UF no formato correto
        cidadeCompleta = prompt("Digite sua cidade e UF no formato: Cidade - UF\nExemplo: Brasília - DF");

        // Se cancelar, retorna null
        if (cidadeCompleta === null) {
            alert("Cadastro cancelado.");
            return null;
        }

        // Remove espaços do começo e do fim
        cidadeCompleta = cidadeCompleta.trim();

        // Não permite vazio
        if (cidadeCompleta === "") {
            alert("A cidade não pode ficar vazia.");
            continue;
        }

        // Verifica se o formato está correto
        if (!regexCidadeUF.test(cidadeCompleta)) {
            alert("Digite no formato correto: Cidade - UF. Exemplo: Brasília - DF");
            continue;
        }

        // Separa cidade e UF usando o hífen
        let partes = cidadeCompleta.split(" - ");
        let nomeCidade = partes[0].trim();
        let uf = partes[1].trim().toUpperCase();

        // Garante que o nome da cidade não seja curto demais
        if (nomeCidade.length < 2) {
            alert("Digite uma cidade válida.");
            continue;
        }

        // Garante que a UF tenha 2 letras
        if (uf.length !== 2) {
            alert("Digite uma UF válida com 2 letras.");
            continue;
        }

        // Junta novamente com a UF em maiúsculas
        cidadeCompleta = nomeCidade + " - " + uf;

        // Retorna o valor correto
        return cidadeCompleta;
    }
}
function pedirEstadoCivil() {
    // Esta variável vai guardar o estado civil digitado pelo usuário
    let estadoCivil;

    // O laço vai se repetir até o usuário digitar uma opção válida
    while (true) {
        estadoCivil = prompt(
            "Digite seu estado civil: solteiro, solteira, casado, casada, divorciado, divorciada, viúvo, viúva, namorando, amancebado ou amancebada"
        );

        // Se o usuário clicar em Cancelar, o prompt retorna null
        if (estadoCivil === null) {
            alert("Cadastro cancelado.");
            return null;
        }

        // trim() remove espaços extras
        // toLowerCase() transforma tudo em minúsculo
        estadoCivil = estadoCivil.trim().toLowerCase();

        // Verifica se ficou vazio
        if (estadoCivil === "") {
            alert("O estado civil não pode ficar vazio.");
            continue;
        }

        // Aqui validamos se o texto digitado está entre as opções permitidas
        if (
            estadoCivil !== "solteiro" &&
            estadoCivil !== "solteira" &&
            estadoCivil !== "casado" &&
            estadoCivil !== "casada" &&
            estadoCivil !== "divorciado" &&
            estadoCivil !== "divorciada" &&
            estadoCivil !== "viúvo" &&
            estadoCivil !== "viuvo" &&
            estadoCivil !== "viuva" &&
            estadoCivil !== "viúva" &&
            estadoCivil !== "namorando" &&
            estadoCivil !== "amancebada" &&
            estadoCivil !== "amancebado"
        ) {
            alert("Digite um estado civil válido.");
            continue;
        }

        // Se passou em tudo, a função devolve o valor correto
        return estadoCivil;
    }
}
function iniciarCadastro(){
    // Chama as funções para pedir cada informação
    let nome = pedirNome();
    if (nome === null) {
        document.getElementById("resultado").innerHTML =
            "<h2>Cadastro cancelado</h2><p>O usuário cancelou o preenchimento.</p>";
        return;
    }
    let idade = pedirIdade();
    if (idade === null) {
        document.getElementById("resultado").innerHTML =
            "<h2>Cadastro cancelado</h2><p>O usuário cancelou o preenchimento.</p>";
        return;
    }

    let sexo = pedirSexo();
    if (sexo === null) {
        document.getElementById("resultado").innerHTML =
            "<h2>Cadastro cancelado</h2><p>O usuário cancelou o preenchimento.</p>";
        return;
    }

    let cidade = pedirCidade();
    if (cidade === null) {
        document.getElementById("resultado").innerHTML =
            "<h2>Cadastro cancelado</h2><p>O usuário cancelou o preenchimento.</p>";
        return;
    }

    let estadoCivil = pedirEstadoCivil();
    if (estadoCivil === null) {
        document.getElementById("resultado").innerHTML =
            "<h2>Cadastro cancelado</h2><p>O usuário cancelou o preenchimento.</p>";
        return;
    }

    // Exibe os resultados
    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>" +
        "<p><strong>Nome completo:</strong> " + nome + "</p>" +
        "<p><strong>Idade:</strong> " + idade + " anos</p>" +
        "<p><strong>Sexo:</strong> " + sexo + "</p>" +
        "<p><strong>Cidade:</strong> " + cidade + "</p>" +
        "<p><strong>Estado Civil:</strong> " + estadoCivil + "</p>" +
        "<p><strong>parabens:</strong> " + nome + ", você pode jogar acesse o site do jogo pelo link abaixo!</p>" +
        "<p><a href='https://jogo-grama-artica.vercel.app/' target='_blank'>Show time</a></p>";
}