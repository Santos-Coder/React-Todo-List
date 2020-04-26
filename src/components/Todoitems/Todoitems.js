import React from 'react';
import './Todoitems.css';

const Todoitems = (props) => {
    const {items, deletItem} = props;
    let length = items.length;
    const listItems = length ? (
        items.map(item => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="sub icon"onClick = {() => deletItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : ( <p>There is no items to show</p>)
    return (
        <div className="listitems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="sub title">Action</span>
            </div>
            {listItems}
        </div>
    )
}

export default Todoitems; 