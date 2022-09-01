const icones = document.querySelectorAll(".icones");
const informacoes = document.querySelectorAll(".info");

icones.forEach((icone) => {
    icone.addEventListener("click", function () {
        informacoes.forEach((info) => {
            const iconeSelecionado = info.classList.contains("selecionado");
            if (iconeSelecionado) {
                esconderInformacoes(info);
            } else {
                mostrarInformacoes(info);
            }
        });
    });
});

function esconderInformacoes(info) {
    info.classList.remove("selecionado");
}

function mostrarInformacoes(info) {
    info.classList.add("selecionado");
}
