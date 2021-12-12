import React from 'react'

const ReadOnlyRow = ({product}) => {
    return(
        <tr>
        <td>{product.pname}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
    </tr>
    )
}

export default ReadOnlyRow;