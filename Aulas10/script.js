//pegar uma referência ao botão
let btGerarRobo = document.querySelector('button')

//adicionar um evento para criar a imagem
btGerarRobo.addEventListener('click', gerarRobo)

//quando ocorrer o evento click, o EventHandler vai 'ouvir' e 'tratar' esse evento: vai executar algum código
function gerarRobo(){
    const inputTxt = document.querySelector('#txString')
    const valor = inputTxt.value
    let imgRobo = document.querySelector('img')
    //https://robohash.org/teste
    imgRobo.src = 'https://robohash.org/texto?size=200x200'
}