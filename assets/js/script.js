const minInput = document.getElementById('min')
const maxInput = document.getElementById('max')

const btnGerar = document.getElementById('generate')

const result = document.getElementById('result')

function calculate() {
    let min = parseInt(minInput.value)
    let max = parseInt(maxInput.value)

    var resultado= Math.floor( Math.random() * (max - min + 1)) + min;

    result.textContent = resultado;
    // result.innerText = resultado;

}

btnGerar.addEventListener('click', calculate );