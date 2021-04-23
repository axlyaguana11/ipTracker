import Template from './templates/Template'
import './styles/styles.css'
import catchValue from './utils/catchValue'

//This is what makes the app work
(async function App() {
    const content = null || document.querySelector('#content')
    content.innerHTML = await Template()
    
    //This function gets data to show in the map
    const latitud = async () => {
        const latitude = await document.querySelector('#latLng').textContent.split(',')[0]
        const longitude = await document.querySelector('#latLng').textContent.split(',')[1]

        await map.panTo([latitude, longitude])
        await L.marker([latitude, longitude]).addTo(map)
    }

    //The map is initialized
    let map = await L.map('map').setView([-3.989038, -79.203560], 13);

    await L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //await L.marker([-3.989038, -79.203560]).addTo(map)
    await L.control.zoom().setPosition('bottomleft') 
 
    //DOM elements are  selected
    const submitBtn = document.querySelector('#submit')
    const btnMap = document.querySelector('.btn-map')

    

    //We invoke the function to show the user its public IP
    catchValue()
    
    //These events get and show data
    submitBtn.addEventListener('click', catchValue)
    btnMap.addEventListener('click', latitud)
    
})()


