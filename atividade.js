
//1- 
console.log("1º- Nome e Idade:")
const nome = "Ayrton Oliveira"
var idade = 29
console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.\n")

//2-
console.log("2º- Nome e Cidade:")
var cidade = "Recife"
console.log(nome + " é de " + cidade + ".\n")

//3- 
console.log("3º- Quatro operações:")
const num1 = 20
const num2 = 10
console.log("Número 1 = 20 e Número 2 = 10")
soma = num1 + num2
console.log("Adição: " + num1 + " + " + num2 + " = " + soma)
subtracao = num1 - num2
console.log("Subtração: " + num1 + " - " + num2 + " = " + subtracao)
multiplicacao = num1 * num2
console.log("Multiplicação: " + num1 + " * " + num2 + " = " + multiplicacao)
divisao = num1 / num2
console.log("Divisão: " + num1 + " / " + num2 + " = " + divisao + ".\n" )

//4-
console.log("4º- Área do triângulo:")
const b = 10
const h = 20
console.log("A base de um triângulo é " + b + "cm" + " e sua altura é " + h + "cm" + ", calcule a área do triângulo.")
console.log("A área do triângulo é = " +  [b*h]/2 + "cm².\n")

//5-
console.log("5º- Média:")
const nota1 = 10
const nota2 = 8
const nota3 = 7
media = [nota1+nota2+nota3] / 3
console.log("Determinado aluno obteve as seguintnes notas: 10, 8 e 7 na Av11, Av2 e Av3 respectivamente. Calcule a média:")
console.log("O Resultado da média é: " + media.toFixed(2) + ".\n")

//6-
console.log("6º- Desconto:")
var preco = 100
var desconto = 20/100
var precoFinal = preco - [preco*desconto]
console.log("SÓ HOJE!!!! Kg do Tomate com 20% de desconto!! De R$ " + preco + " por apenas R$ " + precoFinal + ".\n")

//7-
console.log("7º- IR:")
let alq = 27.5/100
var salario = 7500
let salarioBruto = salario - [salario*alq]
console.log("O salário de Jucrutes no mês de Agosto foi R$ " + salarioBruto.toFixed(2) + ".\n")

//8-
console.log("8º- Conversor de Moedas:")
var dollar = 100
var real = 5.51
let realFinal = ((dollar*real).toFixed(2))
console.log("De acordo com a cotação atual, " +  dollar + "US$ equivale a R$ " + realFinal + ".\n")

//9-
console.log("9º- Conversor de Temperatura:")
var celcius = 32
let fahrenheit = (celcius*9/5)+32
console.log("32 °C equivalem à " + fahrenheit.toFixed(2) + "°F.\n")

//10-
console.log("10º- IMC:")
var peso = 102
var altura = 1.76
let imc = peso/(altura*altura)
console.log("Para uma pessoa que possui " + altura + "m de altura e pesa " + peso + "Kg, o IMC é " + imc.toFixed(2) + ", se classificando como OBESIDADE GRAU II.")
