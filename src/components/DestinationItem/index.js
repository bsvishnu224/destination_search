// Write your code here

import './index.css'

const DestinationItem = props => {
  const {place} = props
  return (
    <li className="container">
      <img className="img" src={place.imgUrl} alt={place.name} />
      <p>{place.name}</p>
    </li>
  )
}

export default DestinationItem
