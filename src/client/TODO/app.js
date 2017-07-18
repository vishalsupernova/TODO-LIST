import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { update } from './actions.js';
import { add } from './actions.js';
import { strike } from './actions.js';
import { filter } from './actions.js'

const mapStateToProps = function (state) {
    return {
        update: state.update,
        addItems: state.Items,
        filter: state.Strikes
    }
}


class App extends React.Component {

    update(e) {
        this.props.dispatch(update(e.target.value))
    }

    onAdd(e) {
        this.props.dispatch(add(this.props.update))
    }

    onStrike(e) {
        this.props.dispatch(strike(e.target.value))
        console.log("TOGGEEEL " + e.target.value)
    }

    //     onAdd(e, value = 0){
    //     this.props.dispatch({
    //       type: 'ADD',
    //       payload: this.props.update,
    //       id: value++
    //     })
    //   }
    onFilter(e){
        this.props.dispatch(filter(this.props.filter))
    }

    render() {
        return <div>
            <input type="text" onChange={this.update.bind(this)} />
            <button onClick={this.onAdd.bind(this)}>Add</button>
            <button onClick={this.onFilter.bind(this)}>Delete</button>
            <ul >{this.props.addItems.map((addItem) => {
                return <p onClick={this.props.addItem} key={addItem.id} >
                    <input type="checkbox" value={addItem} onChange = {this.onStrike.bind(this)}/> {addItem} </p>
            })}
            </ul>
        </div>
    }
}

export default connect(mapStateToProps)(App)