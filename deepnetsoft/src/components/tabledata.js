import React, {useState} from 'react'
import data from "../data.json"
import ReadOnlyRow from './ReadOnlyRow';
const TableData = () => {

    const [products, setProducts] = useState(data);
  
    return(
        <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                        {products.map((product) => (
                           <ReadOnlyRow product={product} />
                        ))}
                        
                    </tbody>
                </table>
    )
}

export default TableData;