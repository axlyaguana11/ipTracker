//import getValue from '../utils/getValue'

import typeOfInput from '../utils/typeOfInput'
import catchValue from '../utils/catchValue'


const Template = () => {
    const view = `
        <header class="header">
        <div class="header-container">
            <h1 class="h1">IP Address Tracker</h1>
            <div class="input-container">
                <input type="text" placeholder="Search for any domain" id="address">
                <input type="submit" value="" id="submit">
            </div>
            <div class="btn-container">
                <a class="btn-map" href="#map">See in the Map</a>
            </div>
            <div class="results-container">
                <ul class="results-list">
                    <li class="result-item">
                        <h2 class="result-item-h2">IP ADDRESS</h2>
                        <p class="result" id="ipAddress">--</p>
                    </li>
                    <li class="result-item">
                        <h2 class="result-item-h2">LOCATION</h2>
                        <p class="result" id="location">--</p>
                    </li>
                    <li class="result-item">
                        <h2 class="result-item-h2">TIMEZONE</h2>
                        <p class="result" id="timezone">--</p>
                    </li>
                    <li class="result-item">
                        <h2 class="result-item-h2">ISP</h2>
                        <p class="result" id="isp">--</p>
                    </li>
                    <li class="result-item">
                        <h2 class="result-item-h2">LAT/LNG</h2>
                        <p class="result" id="latLng">--</p>
                    </li>
                </ul>
            </div>
        </div>
        </header>
        <main class="main">
        <section class="map" id="map">
            <!-- map -->
        </section>
        </main>
        <footer class="footer">
        <div class="footer-container">
            <p class="footer-container-p">Developed by <a href="https://axlyaguana11.github.io/" target="_blank">Axel Yaguana</a></p>
            <ul class="footer-list-container">
                <li class="footer-list-item">
                    <a href="#" target="_blank">Twitter</a>
                </li>
                <li class="footer-list-item">
                    <a href="#" target="_blank">LinkedIn</a>
                </li>
                <li class="footer-list-item">
                    <a href="#" target="_blank">GitHub</a>
                </li>
            </ul>
        </div>
        
        </footer>
        
    `
    return view
}

export default Template