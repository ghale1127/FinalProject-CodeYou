
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");


document.addEventListener('DOMContentLoaded', async function() {
    const rssUrl = 'https://www.nasa.gov/feeds/iotd-feed';

    try {
        const response = await fetch(rssUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        const newsContainer = document.getElementById('news');
        if (!newsContainer) {
            console.error('News container element not found');
            return;
        }

        items.forEach((item) => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const description = item.querySelector('description').textContent;
            const enclosure = item.querySelector('enclosure');
            const thumbnailUrl = enclosure ? enclosure.getAttribute('url') : '';

            const card = document.createElement('div');
            card.classList.add('card');

            if (thumbnailUrl) {
                const cardImg = document.createElement('img');
                cardImg.src = thumbnailUrl;
                cardImg.alt = `${title} Image`;
                cardImg.classList.add('card-img');
                card.appendChild(cardImg);
            }

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            cardBody.innerHTML = `
                <h5 class="card-title"><a href="${link}" target="_blank" rel="noopener noreferrer">${title}</a></h5>
                <p class="card-text">${description}</p>
            `;
            card.appendChild(cardBody);
            newsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
    }
});


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});