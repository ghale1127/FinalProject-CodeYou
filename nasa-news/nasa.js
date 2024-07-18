document.addEventListener('DOMContentLoaded', function() {
    const rssUrl = 'https://www.nasa.gov/feeds/iotd-feed';

    fetch(rssUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(xml => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');

            const newsContainer = document.getElementById('news');

            items.forEach((item, index) => {
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;
                const description = item.querySelector('description').textContent;
                const thumbnailUrl = item.querySelector('enclosure').getAttribute('url'); // Get thumbnail URL

                // Create news item container
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                // Create thumbnail image
                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnailUrl;
                thumbnailImg.alt = title + ' Image';
                thumbnailImg.classList.add('thumbnail');
                newsItem.appendChild(thumbnailImg);

                // Create news item details
                const newsDetails = document.createElement('div');
                newsDetails.classList.add('news-details');
                newsDetails.innerHTML = `
                    <h2><a href="${link}" target="_blank">${title}</a></h2>
                    <p>${description}</p>
                `;
                newsItem.appendChild(newsDetails);

                // Append news item to container
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
});
