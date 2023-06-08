function insert(num) {
    var visor = window.document.querySelector('p#visor')

    visor.innerHTML += num
}

function clean() {
    var visor = window.document.querySelector('p#visor')

    visor.innerHTML = ""
}

function back() {
    var visor = window.document.querySelector('p#visor')

    visor.innerHTML = visor.innerHTML.substring(0, visor.innerHTML.length - 1)
}

function calcular() {
    var visor = window.document.querySelector('p#visor')

    if (visor.innerHTML) {
        visor.innerHTML = eval(visor.innerHTML)
    } else {
        visor.innerHTML = "<p class='visor-vazio'>Entre com uma expressão matemática</p>"
    }
}