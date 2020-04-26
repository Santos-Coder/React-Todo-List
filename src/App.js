import React, { Component } from 'react';
import Todoitems from './components/Todoitems/Todoitems';
import Additem from './components/Additem/Additem';


class App extends Component {
  state = {
    items: [
      {id:1, name:'Mahmoud', age: 34},
      {id:2, name:'Ahmed', age: 36},
      {id:3, name:'Omar', age: 22}
    ]
  } 
  deletItem = (id) => {
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id);
    // items.splice(i,1);
    let items = this.state.items.filter(item => {return item.id !== id})
    this.setState ({items})
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render() {
    return (
      <div className="App container">
        <h1>Todo List App</h1>
        <Todoitems items = {this.state.items} deletItem = {this.deletItem}/>
        <Additem addItem = {this.addItem}/>
      </div>
    )
  }
}

export default App;
