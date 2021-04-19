//'https://geo.ipify.org/api/v1?apiKey=at_3L0043xoCy2KqnmovvRcZHmrREJbW&ipAddress=8.8.8.8'

import typeOfInput from './typeOfInput'

const API = 'https://geo.ipify.org/api/v1?apiKey='
const APIKEY = 'at_3L0043xoCy2KqnmovvRcZHmrREJbW'

//Selecting element
const addressElement = document.querySelector('#address')
const userInput = addressElement.value 

//Real API

const addressInput = typeOfInput(userInput)

//Getting value

const getValue = async() => {
    const urlAPI = `${API}${APIKEY}&${addressInput}=${userInput}`
    try {
        const response = await fetch(urlAPI)
        const data = await response.json()
        return data
    } catch(error) {
        console.log('Fetch Error', error)
        alert('It is an error, try a valid address.')
    }
}

export default getValue