// import React, { Component } from 'react';

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) => {
    return <ul className="list-group col-sm-10">
        {items.map(item => ( 
            <li 
                onClick={() => onItemSelect((item))}
                key={item[valueProperty]} 
                className={ item === selectedItem ? "list-group-item list-group-item-action active bg-primary" : "list-group-item list-group-item-action"} 
                style={{ cursor: "pointer" }}
            >
                 {item[textProperty]}
            </li>
        ))}
    </ul>;
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id',
};
 
export default ListGroup;