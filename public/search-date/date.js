const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

const apodDataMap = new Map();

async function getMedia() {
    const date = document.getElementById('input').value;

    if (!date) {
        alert("Please select a date.");
        return;
    }

    const selectedDate = new Date(date);
    const minDate = new Date('1995-06-16');
    const maxDate = new Date();
    maxDate.setHours(0, 0, 0, 0); // Set the maxDate to today's date with time set to 00:00:00

    if (selectedDate < minDate || selectedDate > maxDate) {
        alert(`Please enter a date between ${minDate.toDateString()} and ${maxDate.toDateString()}. Thank you.`);
        return;
    }

    // Check if data for the selected date is already in the map
    if (apodDataMap.has(date)) {
        displayData(apodDataMap.get(date));
        return;
    }

    const url = `/api/apod?date=${date}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Store the fetched data in the map
        apodDataMap.set(date, data);

        console.log(data);
        displayData(data);

    } catch (error) {
        console.error('Error fetching data:', error);
        alert("An error occurred while fetching data. Please try again later.");
    }
}

function displayData(data) {
    const astroImage = document.getElementById('astroImage');
    const astroVideo = document.getElementById('astroVideo');
    const explanation = document.getElementById('explanation');
    const title = document.getElementById('title');
    const imgDate = document.getElementById('imgDate');

    if (data.media_type === "image") {
        astroImage.src = data.url;
        astroImage.style.display = "block";
        astroVideo.style.display = "none";
    } else if (data.media_type === "video") {
        astroVideo.src = data.url;
        astroVideo.style.display = "block";
        astroImage.style.display = "none";
    }

    explanation.textContent = data.explanation;
    title.textContent = data.title;
    imgDate.textContent = data.date;
}

document.getElementById('btnGet').addEventListener('click', getMedia);
