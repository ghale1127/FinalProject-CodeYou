<h1>
	THE SPACE NEWS
</h1>

<h2>Overview 


---
</h2>
 \
This project is a web application that uses NASA’s open APIs which display the latest news from NASA in a responsive web application design. The web application fetches news articles from NASA's RSS feed and presents them in a user-friendly format with cards displaying images, titles, and descriptions.It also includes a feature to fetch and display the Astronomy Picture of the Day (APOD) for a selected date. The application is built using JavaScript, HTML, and CSS, and it runs on an Express server that serves static files.





<h2>Resources 

---
</h2>


The resources i have used for this projects are as follows:



* Pictures :
    * All the pictures were downloaded from the Internet .
* Fonts : 
    * All the font for this web application were provided by  \
“[https://fonts.google.com/](https://fonts.google.com/) ”
* Icons : 
    * The icons that were used in this application are  from	“[https://fontawesome.com/](https://fontawesome.com/) ”
* APIs : 
    * NASA Image of the day - “<code>[https://www.nasa.gov/feeds/iotd-feed](https://www.nasa.gov/feeds/iotd-feed)"</code>
    * Astronomy Picture of the day - “ [https://api.nasa.gov/](https://api.nasa.gov/) “

        				


<h2>Project Features

---
</h2>




1. Create a node.js web server using a modern framework such as Express.js:  My app uses Express.js to serve 5 html routes and display them on Localhost:3000. Index.html, astro.html, home.html,date.html,nasa.html and me.html
2. Retrieve data from a third-party API and use it to display something within your app : My app  retrieves data from NASA's APOD API using the /api/apod endpoint in your server.js file. This data is then displayed on the search-date, astro.html page. 
3. Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app :  I have used map in my date.html page to store and retrieve data though selected date to reduce server load and speed up the response time.
4. responsive design : Each page uses media queries and flexbox to adapt the design for multiple screen sizes. 

<h2>Project Overview</h2>



---

The project is organized and woks as follows :



* Initial load :  The landing page provides an interactive Image Slider which has detailed which gives the overview of what to expect and has the options to navigate the web application .
* News : It fetches the RSS feed from NASA APi and then parses the XML response to extract news items. For each news item, a card is created with an image, title, and description, and appended to the news container.
* Astronomy : It fetches data from NASA's Astronomy Picture of the Day (APOD) API using a hardcoded API key and then processes the response to either show an image or a video, and updates the page with the title, date, and explanation of the APOD.
* Search date :   handles the fetching of data from the NASA APOD API based on the selected date and uses map to store fetched data, improving efficiency by avoiding unnecessary API calls for previously searched dates. 
* About me : It has descriptions of what users can find on the site, information on me and Social media links and an email contact button.

<h2>Set Up</h2>



---

Please visit [https://api.nasa.gov/](https://api.nasa.gov/) to retrieve your free APi key.



* Clone the repository from :
    * <code>[https://github.com/ghale1127/FinalProject-CodeYou.git](https://github.com/ghale1127/FinalProject-CodeYou.git)</code>
* Install Node.js from [https://nodejs.org/en/download/prebuilt-installer/current](https://nodejs.org/en/download/prebuilt-installer/current) .
* Create a .env file in the root directory and add your NASA API key: and port to 3000. 
* Initialize npm with command : npm init -y
* Installing express, node-fetch and dotenv.
* Start server with . node server.js
* The application will be accessible at “[http://localhost:3000](http://localhost:3000) ”.
