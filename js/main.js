const form = document.querySelector("form");
const resposta = document.querySelector("pre");
const carros = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = form.inModelo.value;
  const valor = +form.inValor.value;

  carros.push({ modelo, valor });
  form.inModelo.value = "";
  form.inValor.value = "";
  form.inModelo.focus();
});
//ajustar os caracteres , tirar os espaços
form.btnListar.addEventListener("click", (e) => {
  e.preventDefault();

  if (carros.length == 0) {
    clearMsg();
    return (resposta.innerText = `Error...Inserir dados do veiculo primeiro...`);
  }

  let lista = carros.reduce((acc, carro) => {
    acc = acc + carro.modelo + " R$" + carro.valor.toFixed(2) + "\n";
    return acc;
  }, "");

  resposta.innerText = `${lista}`;
});

form.btnFiltrar.addEventListener("click", (e) => {
  e.preventDefault();

  let maximo = Number(prompt("Informe o valor maximo desejado"));

  if (carros.length == 0) {
    alert("Error...digitar dados do veiculo primeiro");
    return;
  }

  if (maximo <= 0) {
    alert("Error...o valor precisa ser maior que zero 0");
    return;
  }

  if (isNaN(maximo)) {
    alert("Error...caracter invalido");
    return;
  }

  const carrosFilter = carros.filter((carro) => carro.valor <= maximo);
  if (carrosFilter == 0) {
    clearMsg();
    resposta.innerText = `Error...não possui veiculo(s) no valor solicitado...`;
    return;
  }

  let lista = "";
  for (const carro of carrosFilter) {
    lista += `${carro.modelo} R$${carro.valor.toFixed(2)}\n`;
  }

  resposta.innerText = `Veiculos até R$${maximo.toFixed(2)}:\n\n${"-".repeat(
    50
  )}\n\n${lista}`;
});

function clearMsg() {
  setTimeout(() => {
    resposta.innerText = "";
  }, 1700);
}

  const btnReset = document.querySelector('#btnReset');
  btnReset.addEventListener('click', ()=>{
    resposta.innerText = '';
  })