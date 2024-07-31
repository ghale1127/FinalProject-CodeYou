const apiKey = "tU1AVMmsKwLOMuTs4VF69ofaUYCjVwNiIJuB2p8T";
const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".navigation")

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

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
}) 
