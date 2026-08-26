import { useState } from "react"
import SearchForm from "./components/SearchForm"

function App() {

  // State ------------------------------------------------------
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  // API Call ------------------------------------------------------
  async function handleSearch({ query, startYear, endYear }) {

    // Reset state before new search
    setImages([])
    setError(null)
    setLoading(true)

    try {
      const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image&year_start=${startYear}&year_end=${endYear}`

      const response = await fetch(url)
      
      // Check if response is ok
      if (!response.ok) {
        throw new Error('Something went wrong with the request')
      }

      // Parse the JSON response and update the state with the images
      const data = await response.json()
      const items = data.collection.items

      setImages(items)

    } catch {
      // Display error message if request fails
      setError('Failed to fetch images. Please try again.')

    } finally {
      // turns off loading when request is complete
      setLoading(false)
    }
  }


  // Render the component -----------------------------------------------
  return (
    <div>
      <h1>NASA Rover Explorer</h1>
      <SearchForm onSearch={handleSearch} />

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error state */}
      {error && <p>{error}</p>}

      {/* Empty state - will only show with no error and not loading */}
      {images.length === 0 && !loading && !error && (
      <p>No images found. Please try a different search.</p>
      )}

      {/* Results count */}
      <p>Results found: {images.length}</p>
    </div>
  )
}

export default App