/*

const URL = 'https://geo.ipify.org/api/v1?apiKey='

const apiKey = 'at_3L0043xoCy2KqnmovvRcZHmrREJbW'

const numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const mailSymbol = ['@']


const userInput = document.querySelector('#address') //Not the value, but the element

const searchSubmit = document.querySelector('#submit')

console.log(userInput)



const whatIsIt = (userValues) => {
    //Validate what type of code it is
}

*/

import Template from './templates/Template'


(async function App() {
    const content = null || document.querySelector('#content')
    content.innerHTML = await Template()
})()