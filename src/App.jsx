import { useState } from "react"
import "./App.css"
import SearchForm from "./components/SearchForm"
import ImageGrid from "./components/ImageGrid"
import ImageModal from './components/ImageModal'

function App() {

  // State ------------------------------------------------------
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)



  // API Call ------------------------------------------------------
  async function handleSearch(query, startYear, endYear) {

    // Reset state before new search
    setImages([])
    setError(null)
    setLoading(true)

    try {
      const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image&year_start=${startYear}&year_end=${endYear}`

      const response = await fetch(url)
      
          // Handle specific HTTP error codes
        if (response.status === 400) {
        setError("Invalid search request. Please check your inputs and try again.");
        return;
      }
      if (response.status === 404) {
        setError("The search endpoint could not be found. Please try again later.");
        return;
      }
      if (!response.ok) {
        setError(`Something went wrong. Please try again. (Error ${response.status})`);
        return;
      }

      const data = await response.json();
      const items = data.collection.items;

      setImages(items);

    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
     
  }

  // Handle image selection --------------------------------------
  function handleSelectImage(item) {
    setSelectedImage(item)
  }

  // Clears the selected image and closes the modal
  function handleCloseModal() {
    setSelectedImage(null)
  }


  // Render the component -----------------------------------------------
  return (
    <div className="status-message">
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

      {/* Image grid - only renders when there are search results */}
      {images.length > 0 && (
        <ImageGrid
        images={images}
        onSelect={handleSelectImage}
        />
      )}

      {/* Modal — only renders when an image is selected */}
      {selectedImage && (
        <ImageModal
          item={selectedImage}
          onClose={handleCloseModal}
        />
      )}
      </div>
  )
}

export default App