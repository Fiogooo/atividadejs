const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputCelular = document.querySelector('#celular');
const botaoSalvar = document.querySelector('#adicionar');
const botaoLimpar = document.querySelector('#limpar');
const botaoExcluir = document.getElementsByClassName('btn btn-danger btn-sm');
const botaoEditar = document.getElementsByClassName('btn btn-secondary btn-sm');

function btnLimpar(event){
  inputNome.value = "";
  inputEmail.value = "";
  inputCelular.value = "";
}
function btnSalvar(event) {
  event.preventDefault();
  const tBody = document.querySelector('#tabela')
  const tr = document.createElement("tr");
  const tdBtn = document.createElement("td");
  const tdNome = document.createElement("td");
  const tdEmail = document.createElement("td");
  const tdCelular = document.createElement("td");
  const btnEditar = document.createElement("button");
  const btnExcluir = document.createElement("button");
  tdCelular.innerText = inputCelular.value;
  tdEmail.innerText = inputEmail.value;
  tdNome.innerText = inputNome.value;
  btnEditar.type = "button";
  btnExcluir.type = "button";
  btnEditar.innerText = "Editar"
  btnExcluir.innerText = "Excluir"
  btnEditar.className = "btn btn-secondary btn-sm"
  btnExcluir.className = "btn btn-danger btn-sm"
  tdBtn.appendChild(btnEditar)
  tdBtn.appendChild(btnExcluir)
  tr.appendChild(tdNome);
  tr.appendChild(tdEmail);
  tr.appendChild(tdCelular);
  tr.appendChild(tdBtn);
  tBody.appendChild(tr);
  inputNome.value = "";
  inputEmail.value = "";
  inputCelular.value = "";
  const botaoExcluir = document.getElementsByClassName('btn btn-danger btn-sm');
  for( index = 0; index < botaoExcluir.length; index += 1) {
    botaoExcluir[index].addEventListener("click", btaoExcluir)
  }
  const botaoEditar = document.getElementsByClassName('btn btn-secondary btn-sm');
  for( index = 0; index < botaoEditar.length; index += 1) {
    botaoEditar[index].addEventListener("click", btaoEditar)
  }
}
function btaoExcluir (event){ 
  const elementohtml = event.target.parentNode.parentNode;
  elementohtml.remove()
}
function btaoEditar (event) {
  const elementohtml = event.target.parentNode.parentNode;
  const nome = elementohtml.firstElementChild;
  const email= nome.nextElementSibling;
  const celular = email.nextElementSibling;
  inputNome.value = nome.innerText;
  inputEmail.value = email.innerText;
  inputCelular.value = celular.innerText;
  elementohtml.remove()
}
botaoSalvar.addEventListener("click", btnSalvar);
botaoLimpar.addEventListener("click", btnLimpar);

for( index = 0; index < botaoExcluir.length; index += 1) {
  botaoExcluir[index].addEventListener("click", btaoExcluir)
}

for( index = 0; index < botaoEditar.length; index += 1) {
  botaoEditar[index].addEventListener("click", btaoEditar)
}