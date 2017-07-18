import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getStarships } from './actions.js';
import { fetched } from './actions.js';
import { error } from './actions.js';
import { filter } from './actions.js';
import { dropdown } from './actions.js'

const mapStateToProps = function (state) {
  // console.log('State' + JSON.stringify(state))
  return {
    starships: state.starships,
    filterShips: state.filterShips,
    lists: state.lists,
    selectedStarship: state.selectedStarship,
  }
}

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(getStarships())
  }

  filter(e) {
    this.props.dispatch(filter(e.target.value))
  }

  dropDown(e){
    this.props.dispatch(dropdown(e.target.innerHTML))
    console.log(e.target.innerHTML)
  }

  // dropDown(e){
  //     this.props.dispatch({
  //       type: 'DROP',
  //       payload: e.target.innerHTML,
  //       id:
  //     })
  //   }

  // onAdd(e){
  //   this.props.dispatch({
  //     type: 'ADD',
  //     payload: e.target.value,
  //     id: 0
  //   })
  // }

  render() {
    return <div>
        <ul>
          {this.props.starships.map((starship) => { return <li key={starship.episode_id} onClick={this.dropDown.bind(this)} >{starship.title}</li> })}
        </ul>
        <div><span>{this.props.selectedStarship && this.props.selectedStarship.producer}</span></div>
    </div>
  }
}

export default connect(mapStateToProps)(App)



    // <input type = "Text" onChange = {this.filter.bind(this)}/>
    // <h4>{this.props.filterShips.map((filterShip) => {return <li>{filterShip.name}</li>})}</h4>
