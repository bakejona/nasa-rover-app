import ImageCard from './ImageCard'

// Renders a grid of image cards
function ImageGrid({ images, onSelect }) {
    return (
        <div className="image-grid">
            {images.map((item, index) => (
                <ImageCard
                    key={index}
                    item={item}
                    onSelect={onSelect}
                />
            ))}
        </div>
    )
}

export default ImageGrid