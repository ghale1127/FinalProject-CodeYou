const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Event listener for hamburger menu toggle
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Event listener for navigation link clicks
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Function to fetch and display APOD data
const apiCall = async () => {
    try {
        const response = await fetch('/api/apod'); // Fetch data from your backend API endpoint
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const apiData = await response.json();

        const astroImage = document.getElementById('astroImage');
        const astroVideo = document.getElementById('astroVideo');
        const explanation = document.getElementById('explanation');
        const title = document.getElementById('title');
        const imgDate = document.getElementById('imgDate');

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
        alert('An error occurred while fetching data. Please try again later.');
    }
};

// Fetch data when the page loads
window.onload = function() {
    apiCall();
};
