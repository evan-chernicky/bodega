import React from 'react'

function InventoryItemCard({image, name, price, id, onButtonReorder, handleDeleteInventory}) {
    return(
        <div className="card" onClick={() => onButtonReorder(name)}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button onClick={(e) => handleDeleteInventory(id, e)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;