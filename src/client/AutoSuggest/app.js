import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {getStarships} from './actions.js';
import {fetched} from './actions.js';
import {error} from './actions.js';
import {filter} from './actions.js';

const mapStateToProps = function(state){
  console.log('State'+JSON.stringify(state))
  return{
    starships: state.starships,
    filterShips: state.filterShips
  }
}

class App extends React.Component{

  componentWillMount(){
    this.props.dispatch(getStarships())
  }

  filter(e){
    this.props.dispatch(filter(e.target.value))
  }

  render(){
    return<div>
      <input type = "Text" onChange = {this.filter.bind(this)}/>
    <h4>{this.props.filterShips.map((filterShip) => {return <li>{filterShip.name}</li>})}</h4>
    </div>
  }
}

export default connect(mapStateToProps)(App)

{/* <ul>
    {this.props.starships.map( (starship) => {return <li key={starship.model}>{starship.name}</li>} )}</ul> */}