import {Component} from 'react'

import './index.css'

import DestinationItem from "../DestinationItem"

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  inputLetter=(event)=>{
      this.setState({
          searchInput:event.target.value
      })
  }

  render() {
      const {searchInput}=this.state
      const {destinationList}=this.props
      const searchList=destinationList.filter(each=>
          each.name.toLowerCase().includes(searchInput.toLowerCase()),
      )
    return (
      <div className="background">
        <h1 className="heading">Destination Search</h1>
        <div>
        <input onChange={this.inputLetter} type="search" value={searchInput} placeholder="Search" />
        <img alt={search icon} className="searchIcon" src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"/>
        </div>
        <ul>
            {
                searchList.map(eachItem=>(
                    <DestinationItem listItem={eachItem} key={eachItem.id}/>
                ))
            }
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
