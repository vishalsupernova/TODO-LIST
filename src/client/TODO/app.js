import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { update, add, strike, complete, changeStatus, del, double, edit } from './actions.js';
import keypress from 'react-keypress';

const mapStateToProps = function (state) {
    console.log("APP", state.Id)
    return {
        update: state.update,
        addItems: state.Items,
        change: state.complete,
        status: state.status,
        double: state.Items,         
    }
}

class App extends React.Component {

    update(e) {
        this.props.dispatch(update(e.target.value))
    }

    onAdd(e) {
        if (e.keyCode == 13)
            this.props.dispatch(add(this.props.update))
    }

    changeStatus(e) {
        console.log("Change Status " + e.target.value)
        this.props.dispatch(changeStatus(e.target.value))
    }

    onComplete(e) {
        console.log(" button" + e.target.innerHTML)
        this.props.dispatch(complete())
    }

    onDelete(e) {
        console.log("DELETE " + e.target.value)
        this.props.dispatch(del(e.target.value))
    }

    
    onDouble(e) {
        console.log("DOUBLE ",e.target)
        this.props.dispatch(double(e.target.id))
    }
    disableEdit(e){
        console.log("VALUE", e.target.id, e.target.value)
        if (e.keyCode == 13)
        this.props.dispatch(edit(e.target.id, e.target.value))
    }
    render() {
        return <div>
            <input type="text" value={this.props.update}
                onKeyDown={this.onAdd.bind(this)} onChange={this.update.bind(this)} placeholder="Enter the Task" />
            <ul>{this.props.addItems.map((Item) => {
                return <p key={Item.id}>
                    <input type="checkbox" value={Item.text} onChange={this.changeStatus.bind(this)} />
                    <span id={Item.id} onDoubleClick={this.onDouble.bind(this)} >
                        {Item.status ? <input type="text" id={Item.id} onKeyUp={this.disableEdit.bind(this)}/> : <span id={Item.id}>{Item.text}</span>}
                    </span>
                    <button value={Item.id} onClick={this.onDelete.bind(this)}>D</button></p>
            })}
            </ul>
        </div>
    }
}

export default connect(mapStateToProps)(App)

{/* <button onClick={this.onAdd.bind(this)}>Add Task</button> */ }

{/*<button onClick={this.onComplete.bind(this)}> */ }

{/* <img height = "10px" width = "15px" src="C:\Users\vilakkapat\Downloads\delete.jpg" /> */ }