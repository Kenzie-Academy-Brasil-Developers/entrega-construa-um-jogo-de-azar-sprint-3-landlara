const comoJogar = document.getElementById("play")
const playDiv = document.getElementById("playDiv")
const main = document.getElementById("main")
const papel = document.getElementById("paper")
const pedra = document.getElementById("rock")
const tesoura = document.getElementById("scissor")
const abrir = document.getElementById("aprenderJogar")
const player = document.getElementById("player")
const reset = document.getElementById("reset")
const paragrafos = document.getElementById("textoDePlay")

const pedrona = () => 
{
  const playerPedra = document.createElement("img")
  playerPedra.classList.add("tryInOne")
  playerPedra.src = "pedra.png"
  player.appendChild(playerPedra)
}
const papelzao = () => 
{
  const playerPapel = document.createElement("img")  
  playerPapel.classList.add("tryInOne")
  playerPapel.src = "papel.png"
  player.appendChild(playerPapel)
}

const tesourona = () =>
{
  const playerTesoura = document.createElement("img")
  playerTesoura.classList.add("tryInOne")
  playerTesoura.src = "tesoura.png"
  player.appendChild(playerTesoura)
}

const pedraPlayer = () => 
{
  const playerPedra = document.createElement("img")
  playerPedra.classList.add("xx")
  playerPedra.src = "pedra.png"
  player.appendChild(playerPedra)
  return "1"
}
const papelPlayer = () => 
{
  const playerPapel = document.createElement("img")  
  playerPapel.classList.add("xx")
  playerPapel.src = "papel.png"
  player.appendChild(playerPapel)
  return "2"
}    

const tesouraPlayer = () => 
{
  const playerTesoura = document.createElement("img")
  playerTesoura.classList.add("xx")
  playerTesoura.src = "tesoura.png"
  player.appendChild(playerTesoura)
  return "3"
}

const rolagem3 = () => 
{
  const rolagem = Math.floor(Math.random() * 3) + 1
  if (rolagem === 1) {
    pedrona()
    return "1"
  } else if ( rolagem === 2 ) {
    papelzao()
    return "2"
  } else {
    tesourona()
    return "3"
  }
}

const criarTexto = () => 
{
  const criarText = document.createElement("p")
  criarText.innerHTML = "Player"
  criarText.classList.add("bonito")
  player.appendChild(criarText)
  const criarText2 = document.createElement("p")
  criarText2.innerHTML = "Maquina"
  criarText2.classList.add("bot")
  player.appendChild(criarText2)
}
const apagarTudo = () => 
{
  papel.classList.add("hide")
  pedra.classList.add("hide")
  tesoura.classList.add("hide")
  player.classList.remove("hide")
}
const aparecerTudo = () => 
{
  papel.classList.remove("hide")
  pedra.classList.remove("hide")
  tesoura.classList.remove("hide")
  player.classList.add("hide")
}
const resetar = () => {
  reset.classList.remove("hide")
}

const sumiu = () => {
  paragrafos.classList.add("hide")
  comoJogar.classList.add("hide")
}


// EVENTO DE CLICK PARA SABER COMO JOGAR //
comoJogar.addEventListener("click", () => 
{ 
 if (abrir) { 
   abrir.classList.remove("hide")
   abrir.addEventListener("click", (e) => 
   {
     if (e.target.id === "fechar") {
       abrir.classList.add("hide")
     }
     console.log(e.target)
   })   
 }   
})

reset.addEventListener("click", () => 
{
  location.reload()
})

pedra.addEventListener("click", () => {
  apagarTudo()
  resetar()
  criarTexto()
  sumiu()
  rolagem3()
  pedraPlayer()
})

papel.addEventListener("click", () => {
  apagarTudo()
  resetar()
  criarTexto()
  sumiu()
  papelPlayer()
  rolagem3()
  // const minVar = rolagem3()
  // const outraVar = papelPlayer()
  // const maisUmaVar = pedraPlayer()
  // const outraAinda = tesouraPlayer()
  // if (minVar == outraAinda) {
  //     const perdeu = document.createElement("p")
  //     perdeu.classList.add("derrota")
  //     perdeu.innerHTML = "Que pena, voce perdeu, mas nao fique triste, havera outras derrotas. Muahahaa!!!"
  //     player.appendChild(perdeu)
  //   } else if (minVar === outraVar) {
  //     const empate = document.createElement("p")
  //     empate.classList.add("empate")
  //     empate.innerHTML = "Que sorte a sua, empatou, mas na proxima voce nao escapara!!!"
  //     player.appendChild(empate)
  //   } else if (minVar == maisUmaVar) {
  //     const ganhou = document.createElement("p")
  //     ganhou.classList.add("vitoria")
  //     ganhou.innerHTML = "Como ousa ganhar da minha pessoa? Voce nao ve que tera consequencias extratosfericas!?"
  //     player.appendChild(ganhou)
  //   }
})

tesoura.addEventListener("click", () => {
  apagarTudo()
  resetar()
  criarTexto()
  sumiu()
  rolagem3()
  tesouraPlayer()
})

