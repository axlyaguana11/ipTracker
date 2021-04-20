const API = 'https://geo.ipify.org/api/v1?apiKey='
const APIKEY = 'at_3L0043xoCy2KqnmovvRcZHmrREJbW'


const catchValue = async () => {
    const valueCatched = await document.querySelector('#address').value
    const ipAddress = await document.querySelector('#ipAddress')
    const location = await document.querySelector('#location')
    const timezone = await document.querySelector('#timezone')
    const isp = await document.querySelector('#isp')



    fetch(`${API}${APIKEY}&domain=${valueCatched}`)
        .then(response => response.json())
        .then(data => {

            let postalCode = data.location.postalCode
            let country = data.location.country
            let region = data.location.region
            let city = data.location.city

            let ip = data.ip

            let timeWhereItIs = data.location.timezone

            let internetServiceProvider = data.isp

            ipAddress.textContent = `${ip}`
            location.textContent = `${city}, ${region}, ${country}, ${postalCode}`
            timezone.textContent = `${timeWhereItIs}`
            isp.textContent = `${internetServiceProvider}`


            console.log(country, region)
        })
        .catch(error => alert(`Oops, it's an error: ${error}. Please, enter a valid domain or try in another browser`))
}

export default catchValue
