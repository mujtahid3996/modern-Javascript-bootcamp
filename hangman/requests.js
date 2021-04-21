const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}

const getCountry =(countrycode,callback)=>{
    
 const countryRequest = new XMLHttpRequest()

 countryRequest.addEventListener('readystatechange', (e) => {
     if (e.target.readyState === 4 && e.target.status === 200) {
         const country = JSON.parse(e.target.responseText)
         callback(undefined,country.name)
        
     } else if (e.target.readyStatet === 4) {
         console.log('Unable to fetch data')
         callback('error',undefined)
     }
 })

 countryRequest.open('GET', `
 https://restcountries.eu/rest/v2/alpha/${countrycode}`)
 countryRequest.send()
}