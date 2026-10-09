const botaoAdquirir = document.querySelector(".box2 button");
const nomeCarro = document.querySelector(".box2 h1").textContent.trim();
 
botaoAdquirir.addEventListener("click", function () {
    alert("Parabéns! Você adquiriu o " + nomeCarro + ". Nossa equipe entrará em contato em breve.");
});