// Write your code here.
// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesListDetails, updating, isClicked} = props
  const {thumbnailAltText, thumbnailUrl, id} = imagesListDetails

  const onUpdate = () => {
    updating(id)
  }
  const isClickedButton = isClicked ? 'thumbnail-update' : ''

  return (
    <li>
      <button type="button" onClick={onUpdate}>
        <img
          className={`thumbnail ${isClickedButton}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
