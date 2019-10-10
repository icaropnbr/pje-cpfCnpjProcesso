
function ajustaCpf() {
  var cpf = prompt("Cole aqui o CPF: ");
  cpf.trim();
  var cpfNormal = new RegExp(/\D/g);
  var txt = cpf.replace(cpfNormal,'');
  
  if(txt.length == 11) {
  	alert("CPF: " + txt);
  } else {
  	alert("CPF inválido!");
  }
}
function ajustaCnpj() {
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
function ajustaProcesso() {
  var cpf = prompt("Cole aqui o nº do Processo: ");
  cpf.trim();
  var cpfNormal = new RegExp(/\D/g);
  var txt = cpf.replace(cpfNormal,'');
  
  if(txt.length == 20) {
  	alert("Nº do processo: " + txt);
  } else {
  	alert("Nº do processo inválido!");
  }
}
