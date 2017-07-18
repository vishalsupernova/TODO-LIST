import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { update } from './actions.js';
import { add } from './actions.js';
import { check } from './actions.js'

const mapStateToProps = function (state) {
    return {
        update: state.update,
        addItems: state.Items,
        delItems: state.checkItems,
    }
    console.log(addItems)
}


class App extends React.Component {

    update(e) {
        this.props.dispatch(update(e.target.value))
    }

    onAdd(e) {
        this.props.dispatch(add(this.props.update))
    }


//     onAdd(e, value = 0){
//     this.props.dispatch({
//       type: 'ADD',
//       payload: this.props.update,
//       id: value++
//     })
//   }

    onToggel(e){
        // this.props.dispatch(toggel(e.target.value))
        console.log("TOGGEEELLLL " +e.target.value)
    }

    render() {
        return <div>
                <input type="text" onChange={this.update.bind(this)} />
                <button onClick={this.onAdd.bind(this)}>Add</button>
                <button >Delete</button>
                <ul >{this.props.addItems.map((addItem) => 
                    {return <p onClick = {this.props.addItem} key={addItem}> <input type = "checkbox" /> {addItem} </p> })}
                </ul>  
        </div>
    }
}

export default connect(mapStateToProps)(App)