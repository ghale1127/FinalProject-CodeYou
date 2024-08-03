const apiKey = "tU1AVMmsKwLOMuTs4VF69ofaUYCjVwNiIJuB2p8T";
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
}); 


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


            const url = 'https://api.nasa.gov/planetary/apod?';
            const endPoint = `${url}date=${date}&api_key=${apiKey}`;

            try {
                const response = await fetch(endPoint);
                const data = await response.json();

                console.log(data);

                const astroImage = document.getElementById('astroImage');
                const astroVideo = document.getElementById('astroVideo');
                const explanation = document.getElementById('explanation');
                const title = document.getElementById('title');

                title.innerHTML = `"${title}"`;

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

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        document.getElementById('btnGet').addEventListener('click', getMedia);

