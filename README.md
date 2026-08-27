# NASA Rover Image Explorer

A React web application that lets users search and browse images captured by NASA's Mars Curiosity Rover using the NASA Image and Video Library API.

## Features

- Search images by keyword and year range
- Responsive image grid displaying results
- Click any image to view an enlarged version with title and description
- Handles empty results and API errors gracefully

## Tech Stack

- React with Vite
- CSS for styling
- NASA Image and Video Library API

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository

```bash
git clone https://github.com/bakejona/nasa-rover-app.git
```

2. Navigate into the project directory

```bash
cd nasa-rover-app
```

3. Install dependencies

```bash
npm install
```

> **Note:** An API key is included per assignment requirements and stored 
> in the .env file as a credential management best practice. The NASA 
> Image and Video Library API functions without a key in the request, 
> which was discovered during testing. The key is stored securely and 
> excluded from version control via .gitignore.

4. Start the development server

```bash
npm run dev
```

5. Open your browser and navigate to the localhost URL shown in your terminal (typically `http://localhost:5173`)

---

## Usage

- Enter a search keyword in the search field
- Enter a start year and end year to filter results by date range
- Click **Search** to fetch images from the NASA API
- Click any image to open an enlarged view with its title and description
- Click **Close** or click outside the image to return to the grid
- If no results are found a message will display confirming the empty state
- If the API request fails a friendly error message will display without crashing the app

---

## Project Structure

```
nasa-rover-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchForm.jsx    # keyword and year range inputs
│   │   ├── ImageGrid.jsx     # maps results into image cards
│   │   ├── ImageCard.jsx     # individual image thumbnail and title
│   │   └── ImageModal.jsx    # enlarged image view with close button
│   ├── App.jsx               # state management and API call logic
│   ├── App.css               # application styling
│   └── main.jsx              # app entry point
├── .env                      # local environment variables (not committed)
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## API Reference

**NASA Image and Video Library**

- Base URL: `https://images-api.nasa.gov`
- Endpoint: `/search`
- Method: `GET`
- Parameters used:
  - `q` — search keyword
  - `media_type` — filtered to `image`
  - `year_start` — start year for date range
  - `year_end` — end year for date range

Full API documentation available at [https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_NASA_API_KEY` | Your NASA API key from api.nasa.gov |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint across the project |
