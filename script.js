// ============================================
// CARTA SECRETA POR LOCALIZAÇÃO
// ============================================


// 100 centímetros = 1 metro

const distanciaPermitida = 1;


// Guarda o lugar secreto

let lugarSecreto = null;


// ============================================
// REGISTRAR O LUGAR
// ============================================

function registrarLugar() {

    const mensagem =
        document.getElementById("mensagem");


    if (!navigator.geolocation) {

        mensagem.innerText =
            "❌ Seu navegador não suporta localização.";

        return;

    }


    mensagem.innerText =
        "📡 Pegando sua localização...";


    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            const latitude =
                posicao.coords.latitude;

            const longitude =
                posicao.coords.longitude;

            const precisao =
                posicao.coords.accuracy;


            lugarSecreto = {

                latitude: latitude,

                longitude: longitude

            };


            document.getElementById("inicio")
                .classList.add("escondido");


            document.getElementById("teste")
                .classList.remove("escondido");


            document.getElementById("precisao")
                .innerText =
                "📡 Precisão atual do GPS: " +
                precisao.toFixed(1) +
                " metros";


            document.getElementById("resultado")
                .innerText =
                "✨ Lugar secreto registrado!";


            console.log(
                "Latitude:",
                latitude
            );

            console.log(
                "Longitude:",
                longitude
            );

            console.log(
                "Precisão:",
                precisao
            );

        },

        function(erro) {

            mensagem.innerText =
                "⚠️ Não consegui acessar sua localização. " +
                "Permita o acesso ao GPS e tente novamente.";

        },

        {

            enableHighAccuracy: true,

            timeout: 15000,

            maximumAge: 0

        }

    );

}



// ============================================
// VERIFICAR LOCAL
// ============================================

function verificarLugar() {

    const resultado =
        document.getElementById("resultado");


    if (!lugarSecreto) {

        resultado.innerText =
            "❌ Primeiro registre o lugar.";

        return;

    }


    resultado.innerText =
        "📡 Verificando localização...";


    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            const latitudeAtual =
                posicao.coords.latitude;

            const longitudeAtual =
                posicao.coords.longitude;

            const precisao =
                posicao.coords.accuracy;


            const distancia =
                calcularDistancia(

                    latitudeAtual,

                    longitudeAtual,

                    lugarSecreto.latitude,

                    lugarSecreto.longitude

                );


            document.getElementById("precisao")
                .innerText =
                "📡 Precisão atual: " +
                precisao.toFixed(1) +
                " metros";


            console.log(
                "Distância:",
                distancia,
                "metros"
            );


            // ====================================
            // DENTRO DO RAIO
            // ====================================

            if (distancia <= distanciaPermitida) {

                abrirCarta();

            }

            else {

                resultado.innerText =
                    "🔒 Carta bloqueada. " +
                    "Você está a " +
                    distancia.toFixed(2) +
                    " metros do lugar secreto.";

            }

        },

        function() {

            resultado.innerText =
                "⚠️ Não consegui encontrar sua localização.";

        },

        {

            enableHighAccuracy: true,

            timeout: 15000,

            maximumAge: 0

        }

    );

}



// ============================================
// CALCULAR DISTÂNCIA
// ============================================

function calcularDistancia(

    lat1,
    lon1,
    lat2,
    lon2

) {


    const R = 6371000;


    const dLat =
        (lat2 - lat1)
        * Math.PI / 180;


    const dLon =
        (lon2 - lon1)
        * Math.PI / 180;


    const a =

        Math.sin(dLat / 2) *
        Math.sin(dLat / 2)

        +

        Math.cos(
            lat1 * Math.PI / 180
        )

        *

        Math.cos(
            lat2 * Math.PI / 180
        )

        *

        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);


    const c =

        2 *

        Math.atan2(

            Math.sqrt(a),

            Math.sqrt(1 - a)

        );


    return R * c;

}



// ============================================
// ABRIR CARTA
// ============================================

function abrirCarta() {


    document.getElementById("teste")
        .classList.add("escondido");


    document.getElementById("carta")
        .classList.remove("escondido");


    document.querySelector(".subtitle")
        .innerText =
        "Você encontrou o lugar secreto. 💙";


    console.log(
        "💌 CARTA DESBLOQUEADA!"
    );

}
