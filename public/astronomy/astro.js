//const dontenv = require("dotenv").config();
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const apiKey = "tU1AVMmsKwLOMuTs4VF69ofaUYCjVwNiIJuB2p8T";
//const dotenv = require('dotenv').config();
//const apiKey = process.env.API_KEY;
//console.log(process.env);
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

  });

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


const apiCall = async () => {
    const url = 'https://api.nasa.gov/planetary/apod?';
    const endpoint = `${url}api_key=${apiKey}`;

    const response = await fetch(endpoint);
    const apiData = await response.json();

    try {
        const astroImage = document.getElementById('astroImage');
        const astroVideo = document.getElementById('astroVideo');
        const explanation = document.getElementById('explanation');
        const title = document.getElementById('title');
        if (apiData.media_type === "image") {
            astroImage.src = apiData.url;
            astroImage.style.display = "block";
            astroVideo.style.display = "none";
        } else if (apiData.media_type === "video") {
            astroVideo.src = apiData.url;
            astroVideo.style.display = "block";
            astroImage.style.display = "none";
        }

        explanation.textContent = apiData.explanation;
        title.textContent = apiData.title;
        imgDate.textContent = apiData.date;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

window.onload = function() {
    apiCall();
};
