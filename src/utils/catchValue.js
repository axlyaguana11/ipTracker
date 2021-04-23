const API = 'https://geo.ipify.org/api/v1?apiKey='
const APIKEY = process.env.APIKEY


const catchValue = async () => {
    const valueCatched = await document.querySelector('#address').value
    const ipAddress = await document.querySelector('#ipAddress')
    const location = await document.querySelector('#location')
    const timezone = await document.querySelector('#timezone')
    const isp = await document.querySelector('#isp')
    const latLng = await document.querySelector('#latLng')



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

            let latitude = data.location.lat
            let longitude = data.location.lng

            ipAddress.textContent = `${ip}`
            location.textContent = `${city}, ${region}, ${country}, ${postalCode}`
            timezone.textContent = `${timeWhereItIs}`
            isp.textContent = `${internetServiceProvider}`
            latLng.textContent = `${latitude}, ${longitude}`

            //L.setView([latitude, longitude], 13)
            //L.marker([latitude, longitude]).addTo(map)

            console.log(country, region)
            //return [latitude, longitude]
        })
        .catch(error => alert(`Oops, it's an error: ${error}. Please, enter a valid domain or try in another browser`))
}

export default catchValue
