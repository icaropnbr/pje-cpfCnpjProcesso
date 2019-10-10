document.getElementById("ajustaCpf").addEventListener("click", ajustaCpf);
document.getElementById("ajustaCnpj").addEventListener("click", ajustaCnpj);
document.getElementById("ajustaProcesso").addEventListener("click", ajustaProcesso);

function ajustaCpf(){
  var cpf = prompt("Cole aqui o CNPJ: ");
  cpf.trim();
  var cpfNormal = new RegExp(/\D/g);
  var txt = cpf.replace(cpfNormal,'');
  
  if(txt.length == 14) {
  	alert("CNPJ: " + txt);
  } else {
  	alert("CNPJ inválido!");
  }
}

function ajustaCnpj(){
  var cpf = prompt("Cole aqui o CNPJ: ");
  cpf.trim();
  var cpfNormal = new RegExp(/\D/g);
  var txt = cpf.replace(cpfNormal,'');
  
  if(txt.length == 14) {
  	alert("CNPJ: " + txt);
  } else {
  	alert("CNPJ inválido!");
  }
}

function ajustaProcesso(){
  var cpf = prompt("Cole aqui o CNPJ: ");
  cpf.trim();
  var cpfNormal = new RegExp(/\D/g);
  var txt = cpf.replace(cpfNormal,'');
  
  if(txt.length == 14) {
  	alert("CNPJ: " + txt);
  } else {
  	alert("CNPJ inválido!");
  }
}