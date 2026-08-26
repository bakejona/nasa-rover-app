// Displays a large version of the image when clicked on in the gallery
function ImageModal({ item, onClose }) {

    // Extract the image URL and metadata from the item object
    const imageUrl = item.links[0]?.href
    const title = item.data[0]?.title
    const description = item.data[0]?.description

    return (
        // Overlay - clicking the background closes the modal
        <div onClick={onClose}>
            
            {/* Modal container - stop click from accidentally closing overlay */}
            <div onClick={(e) => e.stopPropagation()}>

                {/* Close button */}
                <button onClick={onClose}>Close</button>

                {/* Image and metadata */}
                <img src={imageUrl} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>

            </div>
        </div>
    )
}

export default ImageModal