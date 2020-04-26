import React, { Component } from 'react';
import './Additem.css';

class Additem extends Component {
    state = {
        name: '',
        age: ''
    }
    ChangeHandler= (e) => {
        this.setState ({
        [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
       if (e.target.name.value === '') {
           return false;
       } else {
        this.props.addItem(this.state);
        this.setState ({
            name: '',
            age: ''
        })
       }
    }
    render () {
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                    <input className="name" type="text" placeholder="Enter your name" id="name" onChange={this.ChangeHandler} value={this.state.name} ></input>
                    <input className="age" type="number" placeholder="Enter your age" id="age" onChange={this.ChangeHandler} value={this.state.age} ></input>
                    <input className="sub" type="submit" value="ADD"></input>
                </form>
            </div>
        )
    }
}

export default Additem;