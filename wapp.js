

const input = document.querySelector('input')
const button = document.querySelector('button')
const values = document.querySelector ('b')
input.focus()
let randomNum = Math.floor(Math.random() * 100) + 1
let resetButton    
let guessCount = 1


function getRandomNumber () {
     const userGuess = Number(input.value)
     if(guessCount === 1) {
        values.textContent = 'Числа которые вы вводили:'
     }
     values.textContent += userGuess + ' '


    if(input.value < randomNum) {
        document.querySelector('p').textContent = 'Ваше число меньше загаданного'
        
    } else if (input.value > randomNum) {
         document.querySelector('p').textContent = 'Ваше число больше загаданного '
    }

      if (input.value == randomNum) {
    document.querySelector('p').textContent = 'Вы угадали!' 
    document.querySelector('p').style.color = 'black'
    document.querySelector('p').style.fontSize = '20px'
    document.body.style.backgroundColor = '#228b22'
    setGameOver()
    
} else if (guessCount === 10){
     document.querySelector('p').textContent = 'Вы проиграли!!'
     document.querySelector('p').style.color = 'black'
     document.querySelector('p').style.fontSize = '20px'
     document.body.style.backgroundColor = 'red'
     setGameOver()
}
 guessCount++
 input.value = ''
 input.focus()
} 


button.addEventListener('click', getRandomNumber)


function setGameOver () {
input.disabled = true
button.disabled = true 
const buttonRef = document.getElementById('buttonRef')
buttonRef.addEventListener('click', () => window.location.reload());


}

// // function resetGame() {
// //     guessCount = 1

// //     input.disabled = false
// //     button.disabled = false 
// //     input.value = ''
// //     input.focus()
// //     document.body.style.backgroundColor = 'white'
    
// //     randomNum = Math.floor(Math.random() * 100) + 1
// }
const buttonRef = document.getElementById('buttonRef')
buttonRef.addEventListener('click', () => window.location.reload());

const buttons = document.querySelectorAll('.buttons button')



buttons.forEach(button => {button.addEventListener('click', function () {
    const value = this.getAttribute('id');
    if(value) { input.value += value}
})
})
