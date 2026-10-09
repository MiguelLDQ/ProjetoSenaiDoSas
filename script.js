const campoBusca = document.getElementById("campoBusca");
const botoesFiltro = document.querySelectorAll(".botaoFiltro");
const cartoes = document.querySelectorAll("#listaCarros .box1");
const semResultado = document.getElementById("semResultado");
let filtroAtual = "todos";

function aplicarFiltro() {
    const texto = campoBusca.value.trim().toLowerCase();
    let visiveis = 0;

    cartoes.forEach(function (cartao) {
        const nome = cartao.querySelector(".sas").textContent.trim().toLowerCase();
        const combinaCategoria = filtroAtual === "todos" || cartao.dataset.categoria === filtroAtual;
        const combinaNome = nome.includes(texto);

        if (combinaCategoria && combinaNome) {
            cartao.classList.remove("escondido");
            visiveis++;
        } else {
            cartao.classList.add("escondido");
        }
    });

    if (visiveis === 0) {
        semResultado.classList.add("mostrar");
    } else {
        semResultado.classList.remove("mostrar");
    }
}

botoesFiltro.forEach(function (botao) {
    botao.addEventListener("click", function () {
        botoesFiltro.forEach(function (outro) {
            outro.classList.remove("ativo");
        });
        botao.classList.add("ativo");
        filtroAtual = botao.dataset.filtro;
        aplicarFiltro();
    });
});

campoBusca.addEventListener("input", aplicarFiltro);