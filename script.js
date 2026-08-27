let localSecreto = null;

const distanciaPermitida = 1; // 1 metro = 100 cm


function definirLocal() {

    const status = document.getElementById("status");

    if (!navigator.geolocation) {

        status.innerText =
            "Seu navegador não suporta localização.";

        return;
    }

    status.innerText =
        "📍 Descobrindo onde você está...";

    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            localSecreto = {

                latitude: posicao.coords.latitude,

                longitude: posicao.coords.longitude

            };

            document.getElementById("bloqueada").style.display =
                "none";

            document.getElementById("teste").style.display =
                "block";

            document.getElementById("statusTeste").innerText =
                "✨ Lugar secreto registrado!";

        },

        function() {

            status.innerText =
                "⚠️ Você precisa permitir o acesso à localização.";

        },

        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}


function verificarLocal() {

    const status =
        document.getElementById("statusTeste");

    if (!localSecreto) {

        status.innerText =
            "Primeiro defina o lugar secreto.";

        return;

    }

    status.innerText =
        "📡 Verificando sua localização...";

    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            const distancia = calcularDistancia(

                posicao.coords.latitude,

                posicao.coords.longitude,

                localSecreto.latitude,

                localSecreto.longitude

            );

            console.log(
                "Distância:",
                distancia.toFixed(2),
                "metros"
            );


            if (distancia <= distanciaPermitida) {

                abrirCarta();

            } else {

                status.innerText =
                    "🔒 Ainda não! Você está a " +
                    distancia.toFixed(2) +
                    " metros do local.";

            }

        },

        function() {

            status.innerText =
                "⚠️ Não consegui acessar sua localização.";

        },

        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}


function calcularDistancia(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const R = 6371000;

    const dLat =
        (lat2 - lat1) * Math.PI / 180;

    const dLon =
        (lon2 - lon1) * Math.PI / 180;

    const a =

        Math.sin(dLat / 2) ** 2 +

        Math.cos(lat1 * Math.PI / 180) *

        Math.cos(lat2 * Math.PI / 180) *

        Math.sin(dLon / 2) ** 2;

    const c =
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;

}


function abrirCarta() {

    document.getElementById("teste").style.display =
        "none";

    document.getElementById("carta").style.display =
        "block";

    document.querySelector(".subtitulo").innerText =
        "Você chegou ao lugar certo... 💙";

}
