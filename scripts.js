var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

alert("Você terá três tentativas para acertar o número secreto.")
while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10."))
  if (numeroSecreto == chute) {
    document.write("<h2> Acertou! </h2>")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor.")
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior.")
  } tentativas = tentativas - 1
}
if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
}
