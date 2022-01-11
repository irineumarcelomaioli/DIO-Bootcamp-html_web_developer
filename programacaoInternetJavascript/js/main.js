
/* INICIO - INTRODUÇÃO AO JAVASCRIPT */
//alert("meu primeiro js");
/*
var nome = "Irineu Marcelo Maioli"
var idade = 37
var idade2 = 10
var frase = "Japão é o melhor time do mundo";
// alert("Nome " + nome+ " tem " + idade + " anos");
// alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(idade * idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/
/* FIM - INTRODUÇÃO AO JAVASCRIPT */

/* INICIO - ARRAY E DICIONÁRIO */
/*
var lista = ['maça', 'pera', 'laranja'];
console.log(lista);
console.log(lista[1]); // imprimi só a pera
lista.push('uva');
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(' | '));

var fruta = { nome: 'maça', cor: 'vermelha' };
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [{ nome: 'maça', cor: 'vermelha' }, { nome: 'uva', cor: 'rocha' }];
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);
*/
/* FIM - ARRAY E DICIONÁRIO */

/* INICIO - CONDICIONAIS, LAÇOS DE REPETIÇÕES E DATE */
/*
//var idade = prompt("Qual sua idade");
var idade = 18;

if (idade >= 18) {
  console.log ('maior de idade ')
} else {
  console.log( 'menor de idade ')
}

console.log('Laço while');
var count = 0;
while (count <= 5) {
  console.log(count);
  // count = count + 1;
  count++;
}

console.log('Laço for');
var count2;

for (count2 = 0; count2 < 5; count2++){
  console.log(count2);
}

var d = new Date();
console.log(d);
console.log(d.getMonth() + 1); // Para trazer o mês corrente, pois o date inicia no 0(zero);
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getDay()); // dia da semana
console.log(d.getDate()); 
*/
/* FIM - CONDICIONAIS, LAÇOS DE REPETIÇÕES E DATE */

/* INICIO - Desenvolvendo página web com javascript */
/*
function soma(n1, n2) {
  return n1 + n2;
}
console.log(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade) {
  var validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual é sua idade: ");
console.log(validaIdade(idade));

*/
/* FIM - Desenvolvendo página web com javascript */

/* INICIO - Manipulando elementos da página */

function clicou() {
  // console.log('Obrigado por clicar');
  document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar</b>";
  
}

function redirecionar() {
  window.open("https://globalonlineacademy.org/");
  // window.location.href = "https://globalonlineacademy.org/";
}

function trocar(elemento) {
  // document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mouse';
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
  // document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui';
  elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
  alert('Página carregada com sucesso!');
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}

/* FIM - Manipulando elementos da página */

















