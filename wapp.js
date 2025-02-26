

const input = document.querySelector('input')
const button = document.querySelector('button')
const values = document.querySelector ('b')
const gueses = document.getElementById('gueses')
input.focus()
let randomNum = Math.floor(Math.random() * 100) + 1
let resetButton    
let guessCount = 1
let guesesNum = 9


function getRandomNumber () {
     const userGuess = Number(input.value)
     if(guessCount === 1 && guesesNum === 9) {
        values.textContent = 'Числа которые вы вводили: '
        

     }
     values.textContent += userGuess + ' '
     gueses.textContent = 'Осталось попыток: ' + guesesNum
     
     


    if(input.value < randomNum) {
        document.querySelector('p').textContent = 'Ваше число меньше загаданного'
        
    } else if (input.value > randomNum) {
         document.querySelector('p').textContent = 'Ваше число больше загаданного '
    }

      if (input.value == randomNum) {
    document.querySelector('p').textContent = 'Вы угадали!' 
    document.querySelector('p').style.color = '#0df519b2'
    document.querySelector('p').style.fontSize = '20px'
    document.querySelector('p').style.textTransform = 'uppercase'
    document.querySelector('p').style.backgroundColor = '#2e2c2c79'
    document.querySelector('p').style.height = '30px'
    document.querySelector('p').classList.add('bounce-top')
    
    
    setGameOver()
    
} else if (guessCount === 10){
     document.querySelector('p').textContent = 'Вы проиграли!'
     document.querySelector('p').style.color = '#d61616c0'
     document.querySelector('p').style.fontSize = '20px'
     document.querySelector('p').style.textTransform = 'uppercase'
     document.querySelector('p').style.backgroundColor = '#2e2c2c79'
     document.querySelector('p').style.height = '30px'
     document.querySelector('p').classList.add('tracking-in-contract')
     setGameOver()
}
 guesesNum--
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
    button.classList.add('rotate-vert-center')
    const delAnim = () => {
        button.classList.remove('rotate-vert-center')  
    }
    setTimeout(delAnim,500)
    if(value) { input.value += value}
})
})

const clear = document.getElementById('C')

clear.addEventListener('click', function () {
    input.value = ''
})
