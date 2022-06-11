let number = document.getElementById('number')
let numberContador = 0
let texto = document.getElementById('text')
let active = document.getElementById('btnStatusNegativo')
let active2 = document.getElementById('btnStatusPositivo')

function increment() {
  numberContador++
  number.innerHTML = numberContador

  if (numberContador >= 0) {
    text.innerHTML = "|"
    texto.classList.add("positivo")
    active.classList.remove("disabled")
    texto.classList.remove("negativo")
  }

  if (numberContador >= 11) {
    text.innerHTML = "Não é possível adicionar + de 10"
    numberContador = 11
    number.innerHTML = numberContador
    active2.classList.add("disabled")
    texto.classList.add("negativo")
    texto.classList.remove("positivo")

  }


}

function decrement() {
  numberContador--
  number.innerHTML = numberContador

  if (numberContador <= -1) {
    text.innerHTML = "Não é possivel adicionar valor negativo"
    numberContador = -1
    number.innerHTML = numberContador
    active.classList.add("disabled")
    texto.classList.add("negativo")
    texto.classList.remove("positivo")

  }
  if (numberContador <= 10 && numberContador >= 0) {
    text.innerHTML = "|"
    texto.classList.add("positivo")
    active.classList.remove("disabled")
    active2.classList.remove("disabled")
    texto.classList.remove("negativo")
  }

}