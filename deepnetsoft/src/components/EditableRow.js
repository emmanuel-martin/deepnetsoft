import React from 'react'

const EditableRow = (editFormData, handleEditFormChange, handleCancelClick) => {
    return (
        <tr>
            <td>
                <input type="text" required="required" name="pname" value={editFormData.pname} placeholder='Enter Product Name' onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" name="price"  value={editFormData.price} placeholder='Enter Price' onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" name="quantity" value={editFormData.quantity} placeholder='Enter Quantity' onChange={handleEditFormChange}></input>
            </td>
            <td>
                <button type='submit'>save</button>
                <button type='button' onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRow;