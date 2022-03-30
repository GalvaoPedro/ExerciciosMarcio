const taxa = document.getElementById('inputTX');
const real = document.getElementById('inputRD');
const dolar = document.getElementById('inputDR');

const botaoconfirmar = document.getElementById('botaoconfirmar');
const botaolimpar = document.getElementById('botaolimpar');
const botaoRD = document.getElementById('botaoRD');
const botaoDR = document.getElementById('botaoDR');

botaoRD.disabled = true;
botaoDR.disabled = true;
botaolimpar.disabled = true;
real.disabled = true;
dolar.disabled = true;

function confirmaTaxa() {
  if (taxa.value === '') {
    return alert('Digite a taxa de conversão para continuar');
  }
  taxa.disabled = true;
  botaoconfirmar.disabled = true;
  botaolimpar.disabled = false;
  real.disabled = false;
  dolar.disabled = false;
  botaoRD.disabled = false;
  botaoDR.disabled = false;
}

function limpar() {
  taxa.value = '';
  botaoconfirmar.disabled = false;
  botaoRD.disabled = true;
  botaoDR.disabled = true;
  taxa.disabled = false;
  real.value = '';
  dolar.value = '';
}

function converterRD() {
  let dolares = 0;
  dolares = real.value / taxa.value;
  console.log(dolares);
  alert(dolares + ' dolares');
}

function converterDR() {
  let real = 0;
  real = dolar.value * taxa.value;
  console.log(real);
  alert(real + ' reais');
}