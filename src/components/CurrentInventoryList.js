import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList({inventory, onButtonReorder, handleDeleteInventory}) {

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventory.map(inventoryItem =>
                 <InventoryItemCard 
                    key={inventoryItem.id}
                    image={inventoryItem.image}
                    name={inventoryItem.name}
                    price={inventoryItem.price}
                    id={inventoryItem.id}
                    onButtonReorder={onButtonReorder} 
                    handleDeleteInventory={handleDeleteInventory}
                />
                )}
            </div>
        </div>
    );
}

export default CurrentInventoryList;