// Renders a single image card and title
function ImageCard ({ item, onSelect}) {

    const imageUrl = item.links[0]?.href
    const title = item.data[0]?.title

    return (
        <div onClick={() => onSelect(item)}>
             <img src={imageUrl} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default ImageCard