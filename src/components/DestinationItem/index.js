import './index.css'

const DestinationItem = props => {
  const {listItem} = props
  const {name, imgUrl} = listItem
  return (
    <li>
      <img alt={name} className="image" src={imgUrl} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
