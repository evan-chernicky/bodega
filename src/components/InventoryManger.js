import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventory, setInventory] = useState([])
    const [reorderList, setReorderList] = useState([])

    useEffect( () => {
        fetch('http://localhost:8001/inventory')
        .then(resp => resp.json())
        .then(inventoryData => setInventory(inventoryData))
    }, [])

    function handleDeleteInventory(id) {

        fetch(`http://localhost:8001/inventory/${id}`, {
            method: "DELETE",
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    }

    function setReorder(name ) {

        return inventory.filter(inventoryItem => {

            if (name === inventoryItem.name && !reorderList.includes(inventoryItem)) {
                setReorderList([...reorderList, inventoryItem] )
            }

        })
        
    }

    function removeReorder(name) {

        const removedItem = reorderList.find( el => el.name === name)
        const removedIndex = reorderList.indexOf(removedItem)
        // const newArray = reorderList.filter( el => reorderList.indexOf(el) !== removedIndex)
        const newArray = [...reorderList]
        newArray.splice(removedIndex, 1)

        setReorderList(newArray)

    }


console.log()


    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} onButtonReorder={setReorder} handleDeleteInventory={handleDeleteInventory} />
            <ReorderInventoryList reorderList={reorderList} onButtonReorder={removeReorder} handleDeleteInventory={handleDeleteInventory}  />
        </div>
    );
}

export default InventoryManager;