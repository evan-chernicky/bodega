import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({reorderList, onButtonReorder, handleDeleteInventory}) {
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
            {reorderList.map(inventoryItem =>
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

export default ReorderInventoryList;