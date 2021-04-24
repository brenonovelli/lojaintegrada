const textBarraAvisoTopo = "Ganhe frete grátis acims de R$ 100 em apps.";

const ctnBody = document.querySelector("body");

ctnBody.insertAdjacentHTML(
  "afterBegin",
  `<div class="barraAvisoTopo"><span>${textBarraAvisoTopo}</span></div>`
);

const barraAvisoTopo = document.querySelector(".barraAvisoTopo");
const barraAvisoTopoAltura = barraAvisoTopo.clientHeight;

ctnBody.style.marginTop = `${barraAvisoTopoAltura}px`;

const cabecalho = document.querySelector("#cabecalho");
cabecalho.style.paddingTop = `${barraAvisoTopoAltura * 2}px`;

const atalhosMobile = document.querySelector(".atalhos-mobile");
atalhosMobile.style.top = `${barraAvisoTopoAltura}px`;
