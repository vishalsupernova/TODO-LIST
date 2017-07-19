import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { update, add, strike, filter, complete } from './actions.js';


const mapStateToProps = function (state) {
    return {
        update: state.update,
        addItems: state.Items,
        filter: state.Strikes,
        complete: state.complete,
        change: state.complete
    }
}


class App extends React.Component {

    update(e) {
        this.props.dispatch(update(e.target.value))
    }

    onAdd(e) {
        this.props.dispatch(add())
    }

    onStrike(e) {
        this.props.dispatch(strike(e.target.value))
        console.log("TOGGEEEL " + e.target.value)
    }

    onFilter(e){
        this.props.dispatch(filter(this.props.filter))
    }

    onComplete(e){
        console.log("VALUE " +e.target.value)
        this.props.dispatch(complete(e.target.value))
    }

    render() {
        return <div>
            <input type="text" value = {this.props.update} onChange={this.update.bind(this)} />
            <button onClick={this.onAdd.bind(this)}>Add</button>
            <button onClick={this.onFilter.bind(this)}>Delete</button>
            <ul >{this.props.addItems.map((addItem) => {
                return <p onClick={this.props.addItem} key={addItem} >
                    <input type="checkbox" value= {addItem} onChange = {this.onComplete.bind(this)} /> {addItem} </p>
            })}
            </ul>
        </div>
    }
}

export default connect(mapStateToProps)(App)