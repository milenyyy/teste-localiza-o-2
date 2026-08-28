/* =====================================================
   PARTE 1 — ABRIR CARTA
===================================================== */

function abrirCarta() {

    const carta =
        document.getElementById("carta");

    carta.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   IR PARA OS CORAÇÕES
===================================================== */

function mostrarMensagem() {

    const coracoes =
        document.getElementById("coracoes");

    coracoes.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   CORAÇÕES INFINITOS
===================================================== */

const chuva =
    document.getElementById("chuvaCoracoes");


function criarCoracao() {

    const coracao =
        document.createElement("div");

    coracao.className =
        "coracao-caindo";

    coracao.innerHTML =
        Math.random() > 0.5 ? "♥" : "♡";

    coracao.style.setProperty(
        "--posicao",
        Math.random() * 100 + "%"
    );

    coracao.style.setProperty(
        "--tamanho",
        (15 + Math.random() * 30) + "px"
    );

    coracao.style.setProperty(
        "--duracao",
        (7 + Math.random() * 8) + "s"
    );

    coracao.style.setProperty(
        "--atraso",
        (Math.random() * 8) + "s"
    );

    chuva.appendChild(coracao);

}


/* cria muitos corações */

for (let i = 0; i < 45; i++) {

    criarCoracao();

}


/* =====================================================
   PALAVRAS FORA DOS CORAÇÕES
===================================================== */

const palavras = [

    "INCRÍVEL",
    "MARAVILHOSO",
    "LINDO",
    "ESPECIAL",
    "ÚNICO",
    "GENTIL",
    "ADMIRÁVEL",
    "BRILHANTE",
    "PRECIOSO",
    "ENCANTADOR",
    "DIVERTIDO",
    "IMPORTANTE",
    "EXTRAORDINÁRIO",
    "FASCINANTE",
    "MEMORÁVEL"

];


const palavrasContainer =
    document.getElementById("palavrasEstrelas");


palavras.forEach((palavra) => {

    const elemento =
        document.createElement("div");

    elemento.className =
        "palavra-estrela-fundo";

    elemento.innerText =
        palavra;

    elemento.style.setProperty(
        "--x",
        Math.random() * 90 + 5 + "%"
    );

    elemento.style.setProperty(
        "--y",
        Math.random() * 80 + 10 + "%"
    );

    elemento.style.setProperty(
        "--tamanho-palavra",
        (10 + Math.random() * 7) + "px"
    );

    elemento.style.setProperty(
        "--tempo",
        (2 + Math.random() * 3) + "s"
    );

    elemento.style.setProperty(
        "--atraso",
        Math.random() * 5 + "s"
    );

    palavrasContainer.appendChild(elemento);

});


/* =====================================================
   IR PARA PARTE 2
===================================================== */

function irParaParte2() {

    const parte2 =
        document.getElementById("investigacao");

    parte2.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   PARTE 2 — PISTAS
===================================================== */

function abrirPista(numero) {

    const texto =
        document.getElementById("textoPista");


    const pistas = {

        1:
            "Uma gravação antiga dizia que algumas respostas não estão escondidas em lugares... mas em palavras.",

        2:
            "Uma pequena chave estava sobre a mesa. Ao lado dela havia apenas uma frase: aquilo que parece impossível pode ser apenas uma porta esperando a palavra certa.",

        3:
            "A última pista dizia: 'Procure aquilo que existe entre asas e reflexos. Não é uma palavra qualquer.'"

    };


    texto.style.opacity = "0";


    setTimeout(() => {

        texto.innerText =
            pistas[numero];

        texto.style.opacity = "1";

    }, 300);

}


/* =====================================================
   SENHA
===================================================== */

function verificarSenha() {

    const campo =
        document.getElementById("senha");

    const resultado =
        document.getElementById("resultadoSenha");

    const senha =
        campo.value.trim().toLowerCase();


    if (senha === "borboletas em vidro") {

        resultado.innerText =
            "✓ ACESSO CONCEDIDO";

        resultado.style.color =
            "#e5a7b4";


        document
            .getElementById("investigacaoFinal")
            .style.display = "block";


    } else {

        resultado.innerText =
            "✕ Senha incorreta. Ainda existe algo escondido.";

        resultado.style.color =
            "#c97889";

    }

}


/* =====================================================
   ENTER NA SENHA
===================================================== */

document
    .getElementById("senha")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            verificarSenha();

        }

    });


/* =====================================================
   IR PARA PARTE 3
===================================================== */

function irParaParte3() {

    const universo =
        document.getElementById("universo");

    universo.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   PARTE 3 — ÁUDIO AMBIENTE
===================================================== */

let audioContext = null;

let osciladores = [];

let audioLigado = false;


function criarSomUniverso() {

    if (audioLigado) {
        return;
    }

    audioLigado = true;


    try {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();


        const frequencias = [
            110,
            164.81,
            220
        ];


        frequencias.forEach((frequencia, index) => {

            const oscilador =
                audioContext.createOscillator();

            const ganho =
                audioContext.createGain();


            oscilador.type = "sine";

            oscilador.frequency.value =
                frequencia;


            ganho.gain.value =
                0.018;


            oscilador.connect(ganho);

            ganho.connect(
                audioContext.destination
            );


            oscilador.start();


            osciladores.push({
                oscilador,
                ganho
            });

        });


    } catch (erro) {

        console.log(
            "Áudio não disponível neste navegador."
        );

    }

}


/* =====================================================
   COMEÇAR UNIVERSO
===================================================== */

function comecarUniverso() {

    criarSomUniverso();


    const intro =
        document.getElementById("universoIntro");

    const ceu =
        document.getElementById("ceu");


    intro.style.opacity = "0";


    setTimeout(() => {

        intro.style.display = "none";

        ceu.style.display = "block";


        setTimeout(() => {

            ceu.style.opacity = "1";

        }, 100);

    }, 1200);

}


/* =====================================================
   PALAVRAS DAS ESTRELAS
===================================================== */

const palavrasUniverso = {

    1: "INCRÍVEL",

    2: "ESPECIAL",

    3: "MARAVILHOSO",

    4: "GENTIL",

    5: "ÚNICO",

    6: "ADMIRÁVEL",

    7: "BRILHANTE",

    8: "ENCANTADOR",

    9: "PRECIOSO",

    10: "INESQUECÍVEL"

};


let estrelasEncontradas = 0;


function clicarEstrela(numero) {

    const estrela =
        document.querySelector(
            ".estrela-" + numero
        );


    if (
        estrela.dataset.clicada === "true"
    ) {

        return;

    }


    estrela.dataset.clicada =
        "true";


    estrela.style.color =
        "#e5a7b4";


    estrela.style.transform =
        "scale(1.8)";


    estrelasEncontradas++;


    const palavra =
        document.getElementById(
            "palavraEstrela"
        );


    palavra.innerText =
        palavrasUniverso[numero];


    palavra.style.opacity = "1";


    palavra.style.transform =
        "translate(-50%, -50%) scale(1.1)";


    setTimeout(() => {

        palavra.style.opacity = "0";

        palavra.style.transform =
            "translate(-50%, -50%) scale(0.8)";

    }, 1600);


    if (estrelasEncontradas >= 10) {

        revelarConstelacao();

    }

}


/* =====================================================
   CONSTELAÇÃO
===================================================== */

function revelarConstelacao() {

    const constelacao =
        document.getElementById(
            "constelacao"
        );


    setTimeout(() => {

        constelacao.classList.add(
            "mostrar"
        );

    }, 1000);


    setTimeout(() => {

        const mensagem =
            document.querySelector(
                ".ceu-mensagem"
            );


        mensagem.innerHTML =
            "Você encontrou todas as estrelas.<br>" +
            "<span>Mas ainda existe uma última coisa para enxergar.</span>";

    }, 2500);


    setTimeout(() => {

        mostrarFinalUniverso();

    }, 6500);

}


/* =====================================================
   FINAL DO UNIVERSO
===================================================== */

function mostrarFinalUniverso() {

    const final =
        document.getElementById(
            "universoFinal"
        );


    final.style.display =
        "flex";

}


/* =====================================================
   CONTINUAR PARA PRÓXIMA PARTE
===================================================== */

function continuarSite() {

    const proxima =
        document.getElementById(
            "proximaParte"
        );


    proxima.scrollIntoView({
        behavior: "smooth"
    });

}
