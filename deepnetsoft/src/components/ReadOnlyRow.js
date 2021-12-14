import React from 'react'

const ReadOnlyRow = ({product, handleEditClick, handleDeleteClick}) => {
    return(
        <tr>
        <td>{product.pname}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>
            <button type="button" onClick={(event) => handleEditClick(event, product)}>Edit</button>
        </td>
        <td>
            <button onClick={handleDeleteClick}>Delete</button>
        </td>
    </tr>
    )
}

export default ReadOnlyRow;