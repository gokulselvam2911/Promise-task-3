# Promise-task-3
# Advice App
Web Application depolyed on netlify [Advice App](https://randomfreeadvice.netlify.app/)
## Overview

The Advice App is a web application that provides users with random advice or allows them to search for advice based on specific words using the Advice Slip API. The application is built with HTML, CSS, and JavaScript, and it uses Bootstrap for styling.

## Features

- **Random Advice**: Fetches and displays a random piece of advice.
- **Search Advice**: Allows users to search for advice based on specific words.
- **Responsive Design**: The application is styled using Bootstrap to be responsive and visually appealing.

## Project Structure

- `index.html`: The main HTML file that sets up the structure of the application.
- `styles.css`: The CSS file for custom styling of the application.
- `script.js`: The JavaScript file that handles API interactions and DOM manipulation.

## How It Works
### Input Field
- Users can type a word into the input field and click the "Search Advice" button.

### Fetching Definitions
### Random Advice: 
- When the "Get Random Advice" button is clicked, the application fetches a random piece of advice from the Advice Slip API.
### Search Advice: 
- When the "Search Advice" button is clicked, the application fetches advice that matches the entered word from the Advice Slip API.
### Displaying Results
- The application displays the fetched advice in Bootstrap cards.
- If the word is not found or an error occurs, an appropriate error message is displayed.

## API Used
### Advice Slip API:
- Random Advice Endpoint: https://api.adviceslip.com/advice
- Search Advice Endpoint: https://api.adviceslip.com/advice/search/{query}
- Example: To get advice containing the word "life", use https://api.adviceslip.com/advice/search/life.

## Acknowledgements
The Advice Slip API used in this project is freely available and provides random advice and advice based on search queries.
