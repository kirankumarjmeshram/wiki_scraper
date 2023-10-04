# wiki_scraper

## Project Overview
This Flask application is designed to scrape data from web pages starting from a given URL and store the scraped data in a MongoDB database. It provides a set of API endpoints to interact with the application, including initiating web scraping and retrieving the stored data.

[Wiki Scraper Web App Link](https://shimmering-bublanina-8dc8db.netlify.app/)

[Backend api Link](https://wikiscraperapi.onrender.com/)

## Features
Web scraping functionality for extracting data from web pages.
Storage of scraped data in a MongoDB database.
API endpoints for initiating web scraping and retrieving stored data.

## Technologies Used
### Frontend
- React, react-bootstrap

### Backend
- Python (Flask)

### Database
- MongoDB

### Web Scraping
- BeautifulSoup

## API Link api: https://wikiscraperapi.onrender.com/

### POST 
- api/scrape

### GET ONE
- api/get_urls?url={url}

### GET ALL
- api/get_all_data