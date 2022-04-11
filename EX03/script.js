let id = 0; 
let =arraycontador = []; 

function adicionar(p2) { 
  p2.innerHTML = ++arraycontador[p2.id];
}
function resetar(p2) { 
  arraycontador[p2.id] = -1;
  p2.innerHTML = arraycontador[p2.id];
}
function proximoId() { 
  return id++;
}


function criarContador() {
  let id = proximoId(); 
  const text = document.getElementById("nomeContador").value; 
  document.getElementById("nomeContador").value = ""; 
  const divContadores = document.getElementById("contadores"); 
  const novaDiv = document.createElement("div"); 

  novaDiv.id = id; 
  novaDiv.className = "contador"; 

  const p = document.createElement("p"); 
  const p2 = document.createElement("p"); 
  const button = document.createElement("button"); 

  p2.id = id; 
  p.innerHTML = text; 
  button.innerHTML = "Zerar"; 
  arraycontador.push(0); 
  p2.innerHTML = arraycontador[id];  

  novaDiv.onclick = function () { 
    adicionar(p2);
  }; 
  button.onclick = function () { 
    resetar(p2);
  };

  novaDiv.appendChild(p); 
  novaDiv.appendChild(p2); 
  novaDiv.appendChild(button); 
  novaDiv.style.backgroundColor = "#f0" + id.toString() * 4; 
  divContadores.appendChild(novaDiv);
}