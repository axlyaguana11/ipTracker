const API = 'https://geo.ipify.org/api/v1?apiKey='
const APIKEY = 'at_3L0043xoCy2KqnmovvRcZHmrREJbW'


const catchValue = async () => {
    const valueCatched = await document.querySelector('#address').value
    fetch(`${API}${APIKEY}&domain=${valueCatched}`)
        .then(response => response.json())
        .then(data => {
            let country = data.location.country
            let region = data.location.region
            console.log(country, region)
        })
        .catch(error => console.log(error))
        console.log(valueCatched)
}

export default catchValue
