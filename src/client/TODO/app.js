import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { update, add, strike, complete, changeStatus, del } from './actions.js';
import keypress from 'react-keypress';

const mapStateToProps = function (state) {
    return {
        update: state.update,
        addItems: state.Items,
        change: state.complete,
        status: state.status,
    }
}

class App extends React.Component {

    update(e) {
           this.props.dispatch(update(e.target.value))   
    }

    onAdd(e) {
        console.log("CODE" +e.keyCode)
        if(e.keyCode ==13)
        this.props.dispatch(add(this.props.update))
    }

    changeStatus(e){
        console.log(e.target.value)
        this.props.dispatch(changeStatus(e.target.value))
    }

    onComplete(e){
        console.log(" button" +e.target.innerHTML)
        this.props.dispatch(complete())
    }

    onStrike(e){
        // console.log(e.target.innerHTML)
        this.props.dispatch(strike())
    }

    onDelete(e){
        console.log("DELETE " +e.target.value)
        this.props.dispatch(del(e.target.value))
    }

    render() {
        return <div>
            <input type="text" id = "textfield" value={this.props.update} 
            onKeyDown={this.onAdd.bind(this)} onChange={this.update.bind(this) } placeholder = "Please Enter" />
            
            <ul>{this.props.addItems.map((Item) => 
                {return <p key={Item.id}>
                <input type = "checkbox" value = {Item.text} onChange = {this.changeStatus.bind(this)}/>
                <span >{Item.text}</span>
                <button value={Item.id} onClick={this.onDelete.bind(this)}>D</button></p> })}
            </ul>
        </div>
    }
}

export default connect(mapStateToProps)(App)

{/* <button onClick={this.onAdd.bind(this)}>Add Task</button> */}

{/*<button onClick={this.onComplete.bind(this)}> */}

{/* <img height = "10px" width = "15px" src="C:\Users\vilakkapat\Downloads\delete.jpg" /> */}