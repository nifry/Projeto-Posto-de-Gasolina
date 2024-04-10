//Dom

const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preço = document.querySelector('#preço')
const conta = document.querySelector('#conta')
const final = document.querySelector('#final')

//Eventos e funções

conta.addEventListener('click', ()=>{


let dist=Number(distancia.value)
let rend=Number(rendimento.value)
let pre=Number(preço.value)

let resultado = (dist/rend)*pre


final.textContent = `Prezado cliente o total do preço de sua viagem será de R$ ${resultado.toFixed(2)}`

})