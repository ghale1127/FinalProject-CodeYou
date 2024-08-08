The Space News

Overview -

This project is a web application that uses NASA’s open APIs which display the latest news from NASA in a responsive web application design. The web application fetches news articles from NASA's RSS feed and presents them in a user-friendly format with cards displaying images, titles, and descriptions.It also includes a feature to fetch and display the Astronomy Picture of the Day (APOD) for a selected date. The application is built using JavaScript, HTML, and CSS, and it runs on an Express server that serves static files.

Resources

The resources i have used for this projects are as follows:
Pictures :
All the pictures were downloaded from the Internet .
Fonts : 
All the font for this web application were provided by 
“https://fonts.google.com/ ”
Icons : 
The icons that were used in this application are  from	“https://fontawesome.com/ ”
APIs : 
NASA Image of the day - “https://www.nasa.gov/feeds/iotd-feed“
Astronomy Picture of the day - “ https://api.nasa.gov/ “
				
Project Overview 

The project is organized and woks as follows :

Initial load :  The landing page provides a interactive Image Slider which has detailed which gives the overview of what to expect and has the options to navigate the web application .
News : It fetches the RSS feed from NASA APi and then parses the XML response to extract news items. For each news item, a card is created with an image, title, and description, and appended to the news container.
Astronomy : It fetches data from NASA's Astronomy Picture of the Day (APOD) API using a hardcoded API key and then processes the response to either show an image or a video, and updates the page with the title, date, and explanation of the APOD.
Search date : 
About me :


Setup
Clone the repository from :
https://github.com/ghale1127/FinalProject-CodeYou.git
Install Node.js from https://nodejs.org/en/download/prebuilt-installer/current .
Create a .env file in the root directory and add your NASA API key: and port to 3000.
Initialize npm with command : npm init -y
Installing express, node-fetch and dotenv : npm install express , npm install node-fetch@2 , npm install dotenv.
Start server with . node server.js
The application will be accessible at “http://localhost:3000 ”.




