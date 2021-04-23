const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle((error, puzzle) => {
    //this is getpuzzle with fetch
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
    
})

getCountry('USA').then((country)=>{
    console.log(country.name)
}).catch(error =>{
    console.log(error)
})

// getLocation().then((ip) =>{
//     console.log(ip.city)
//     console.log(ip.country)
//     console.log(ip.region)
// }).catch((error) => {
//     console.log(error)
// })

// Making an HTTP request


// const countryCode = "MX"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyStatet === 4) {
//         console.log('Unable to fetch data')
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()