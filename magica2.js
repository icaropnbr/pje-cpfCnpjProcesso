document.getElementById("removePontos").addEventListener("click", removePontos);


function removePontos(){
  var texto = prompt("Cole aqui o CPF/CNPJ ou Nº do Processo: ");
  texto.trim();
  var textoAlterado = new RegExp(/\D/g);
  var txt = texto.replace(textoAlterado,'');
  
  alert(txt);
  
  
}
