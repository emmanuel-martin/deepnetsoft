import React, {useState, Fragment} from 'react'
import data from "../data.json"
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from '../components/EditableRow'
import {nanoid} from "nanoid"
const TableData = () => {

    const [products, setProducts] = useState(data);
    const [editFormdata, setEditFormData] = useState({
        pname: '',
        price: '',
        quantity: '',
        category: ''
    });
    const [editProductId, setEditProductId] = useState(null);

    const handleEditClick = (event, product) =>{
        event.preventDefault();
        setEditProductId(product.id);
        const formValues = {
            pname: product.pname,
            price: product.price,
            quantity: product.quantity,
            category: product.category
        }
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...editFormdata};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }
    
    const[addFormData, setAddFormData] = useState(
        {
            pname: '',
            price: '',
            quantity: '',
            category: ''
        }
    );
    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');

        const fieldValue = event.target.value;

        const newFormData = {...addFormData};

        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);

    };

    const handleAddFormSubmit = (event) =>{
        event.preventDefault();

        const newProduct = {
            id: nanoid(),
            pname: addFormData.pname,
            price: addFormData.price,
            quantity: addFormData.quantity,
            category: addFormData.category
        };

        const newProducts = [...products, newProduct];
        setProducts(newProducts);

    }
    return(
        <form>
        <table>

                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <Fragment>
                                {editProductId === product.id ? <EditableRow editFormdata={editFormdata} handleEditFormChange={handleEditFormChange}/> : <ReadOnlyRow product={product} handleEditClick={handleEditClick}/>}
                                
                            </Fragment>
                           
                        ))}
                        
                    </tbody>
                </table>
                </form>
    )
}

export default TableData;