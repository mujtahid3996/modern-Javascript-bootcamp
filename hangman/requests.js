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

const getCountry =(countrycode) => 
    {
       return fetch(`https://restcountries.eu/rest/v2/alpha/${countrycode}`)
        .then( response => {
            if(response.status === 200)
            {
                return response.json()
            }
            else{
                throw new Error('unable to fetch from Api')
            }
        })

    }

const getLocation =() =>
    new Promise((resolve,reject) => {
        const ipreqest= new XMLHttpRequest()
        ipreqest.addEventListener('readystatechange',(e) => {
            if(e.target.readyState === 4 && e.target.status === 200){
                const ip = JSON.parse(e.target.responseText)
                resolve(ip)
            }
            else if(e.target.readyState === 4) {
                reject('error')
            }
        })

        ipreqest.open('GET',`https://ipinfo.io/json?token=264f91917867b4`)
        ipreqest.send()
    })
