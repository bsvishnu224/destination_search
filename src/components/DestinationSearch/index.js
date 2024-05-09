// Write your code here

import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const SearchResult = destinationsList.filter(eachplace =>
      eachplace.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="search-container">
          <div>
            <input
              type="search"
              onChange={this.onChangeInput}
              value={searchInput}
            />
          </div>
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="item-container">
          {SearchResult.map(eachplace => (
            <DestinationItem place={eachplace} key={eachplace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
