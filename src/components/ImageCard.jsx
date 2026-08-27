// Renders a single image card and title
function ImageCard ({ item, onSelect}) {

    const imageUrl = item.links[0]?.href
    const title = item.data[0]?.title

    return (
        <div className="image-card" onClick={() => onSelect(item)}>
             <img src={imageUrl}
                alt={title}
                style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
             />
            <p>{title}</p>
        </div>
    )
}

export default ImageCard