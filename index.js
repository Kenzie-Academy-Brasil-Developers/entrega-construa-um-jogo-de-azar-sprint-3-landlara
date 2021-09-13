const comoJogar = document.getElementById("play")
const playDiv = document.getElementById("playDiv")
const main = document.getElementById("main")
const papel = document.getElementById("paper")
const pedra = document.getElementById("rock")
const tesoura = document.getElementById("scissor")
const abrir = document.getElementById("aprenderJogar")
const player = document.getElementById("player")
const reset = document.getElementById("reset")

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

const papelPlayer = () => 
{
  const playerPapel = document.createElement("img")  
  playerPapel.classList.add("xx")
  playerPapel.src = "papel.png"
  player.appendChild(playerPapel)
}    

const pedraPlayer = () => 
{
  const playerPedra = document.createElement("img")
  playerPedra.classList.add("xx")
  playerPedra.src = "pedra.png"
  player.appendChild(playerPedra)
}

const tesouraPlayer = () => 
{
  const playerTesoura = document.createElement("img")
  playerTesoura.classList.add("xx")
  playerTesoura.src = "tesoura.png"
  player.appendChild(playerTesoura)
}

const rolagem3 = () => 
{
  const rolagem = Math.floor(Math.random() * 3) + 1
  if (rolagem === 1) {
    pedrona()
  } else if ( rolagem === 2 ) {
    papelzao()
  } else {
    tesourona()
  }
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
  // const lista = document.getElementsByClassName("tryInOne")
  // player.removeChild(lista[1])
  // player.removeChild(lista[2])
  player.classList.add("hide")
  aparecerTudo()
  reset.classList.add("hide")
})

pedra.addEventListener("click", () => {
  apagarTudo()
  pedraPlayer()
  rolagem3()
  resetar()
  // PEDIR DICA DE COMO FAZER ISSO
  // if (rolagem3().value === pedraPlayer) {
    //   const perdeu = document.createElement("p")
    //   perdeu.innerHTML = "Que pena, voce perdeu, mas nao fique triste, havera outras derrotas. Muahahaa!!!"
    //   player.appendChild(perdeu)
    // }
  })

  papel.addEventListener("click", () => {
    apagarTudo()
    papelPlayer()
    rolagem3()
    resetar()
  })

  tesoura.addEventListener("click", () => {
    apagarTudo()
    tesouraPlayer()
    rolagem3()
    resetar()
  })
  
  