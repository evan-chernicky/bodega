import React from 'react'

function InventoryItemCard({image, name, price, onButtonReorder}) {
    return(
        <div className="card" onClick={() => onButtonReorder(name)}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button onClick={() => console.log('delete')}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;