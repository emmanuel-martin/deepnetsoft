import React, {useState, Fragment} from 'react'
import data from "../data.json"
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from '../components/EditableRow'
import {nanoid} from "nanoid"
const TableData = () => {

    const [products, setProducts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      pname: "",
      price: "",
      quantity: "",
      category: "",
    });
  
    const [editFormData, setEditFormData] = useState({
        pname: "",
        price: "",
        quantity: "",
        category: "",
    });
  
    const [editProductId, setEditProductId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newProduct = {
        id: nanoid(),
        pname: addFormData.pname,
        price : addFormData.price,
        quantity: addFormData.quantity,
        category: addFormData.category,
      };
  
      const newProducts = [...products, newProduct];
      setProducts(newProducts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedProduct = {
        id: editProductId,
        pname: editFormData.pname,
        price: editFormData.price,
        quanity: editFormData.quantity,
        category: editFormData.category,
      };
  
      const newProducts = [...products];
  
      const index = products.findIndex((product) => product.id === editProductId);
  
      newProducts[index] = editedProduct;
  
      setProducts(newProducts);
      setEditProductId(null);
    };
  
    const handleEditClick = (event, product) => {
      event.preventDefault();
      setEditProductId(product.id);
  
      const formValues = {
        pname: product.pname,
        price: product.price,
        quanity: product.quanity,
        category: product.category,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditProductId(null);
    };
  
    const handleDeleteClick = (productId) => {
      const newProducts = [...products];
  
      const index = products.findIndex((product) => product.id === productId);
  
      newProducts.splice(index, 1);
  
      setProducts(newProducts);
    };
    return(
        <form onSubmit={handleEditFormSubmit}>
        <table>

                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <Fragment>
                                {editProductId === product.id ? <EditableRow editFormdata={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> : <ReadOnlyRow product={product} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>}
                            </Fragment>
                           
                        ))}
                        
                    </tbody>
                </table>
                </form>
    )
}

export default TableData;