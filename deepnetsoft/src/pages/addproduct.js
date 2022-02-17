import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import "../styles/login.css"
import data from "../data.json"
import {nanoid} from "nanoid"
const AddProduct = () => {

    const [products, setProducts] = useState(data);
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
        <div className="container">

            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
           
            <div className="login-box">
                <div className="heading">
                    <span>Add Product</span>
                </div>
                
                    <form onSubmit={handleAddFormSubmit}>
                    <input type="text" name='pname' required placeholder="Name" className="input-form" onChange={handleAddFormChange}/><br></br>
                    <input type="text" name='price' required placeholder="Price" className="input-form" onChange={handleAddFormChange}/><br></br>
                    <input type="text" name='quantity' required placeholder="Quantity" className="input-form" onChange={handleAddFormChange}/><br></br>
                    <input type="text" name='category' required placeholder="Category" className="input-form" onChange={handleAddFormChange}/><br></br>

                    <button type='submit' className='button'>Add</button>
                    </form>
            </div>
        </div>
    );

}

export default AddProduct;


up