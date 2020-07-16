function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!")
}

function redirecionar(){
    window.open("https://globalllabs.academy/");
    //window.location.href = "https://globalllabs.academy/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Página carregada.");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

var validar;
function validarIdade(idade){
    validar;
    if (idade >= 18){
        validar = true;  
    }else{
        validar = false;
    }
    return validar
}

var idade = prompt("Qual sua idade?");
validarIdade(idade);
console.log(validar);

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai, Brasil!", "Brasil", "Alemanha"));

var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

var count;
for(count=0; count <= 5; count ++){
    alert(count);
}

var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
}
//count++ é igual a count = count +1

var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade.");
}else{
    alert("Menor de idade.");
};

var frutas = [{nome:"maçã",cor: "verde"}, {nome:"cereja",cor: "vermelha"}];
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maçã",cor: "verde"};
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["maçã", "pêra", "laranja", "banana"];
lista.push("uva");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));

var nome = "Caroliny Lucht Ost";
var n1 = 5;
var n2 = 3;
var frase = "Brasil é o melhor time do mundo."
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);

console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("Brasil", "Alemanha"));
alert(frase.replace("Brasil", "Alemanha"))
console.log(frase.toUpperCase());
*/