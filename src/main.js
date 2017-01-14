import pokemonGif from 'pokemon-gif'

let clicked = false

function showPokemon() {
  const index = Math.round(Math.random() * 721)
  const gif = document.createElement('img')
  gif.setAttribute('src', pokemonGif(index))
  document.querySelector('.box').appendChild(gif)
}

const button = document.querySelector('.button')
button.addEventListener('click',() => {
    clicked = !clicked
    clicked ? showPokemon() : null
})
