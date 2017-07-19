import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { update, add, strike, complete, changeStatus } from './actions.js';


const mapStateToProps = function (state) {
    return {
        update: state.update,
        addItems: state.Items,
        change: state.complete,
        status: state.status,
        text: state.text,

    }
}


class App extends React.Component {

    update(e) {
        this.props.dispatch(update(e.target.value))
    }

    onAdd(e) {
        this.props.dispatch(add(this.props.update))
    }

    changeStatus(e){
        console.log(e.target.value)
        this.props.dispatch(changeStatus(e.target.value))
    }

    onComplete(e){
        this.props.dispatch(complete())
        // console.log(e.target.value)
    }

    onStrike(e){
        this.props.dispatch(strike(e.target.innerHTML))
    }

    render() {
        return <div>
            <input type="text" id = "textfield" value={this.props.update} onChange={this.update.bind(this)} />
            <button onClick={this.onAdd.bind(this)}>Add Task</button>
            <button onClick={this.onComplete.bind(this)}>Delete Task</button>
            
            <ul>{this.props.addItems.map((Item) => 
                {return <p key={Item.text}>
                <input type = "checkbox" value = {Item.text} onChange = {this.changeStatus.bind(this)}/>
                <span  onClick = {this.onStrike.bind(this)}>{Item.text}</span></p>})}
            </ul>
        </div>
    }
}

export default connect(mapStateToProps)(App)