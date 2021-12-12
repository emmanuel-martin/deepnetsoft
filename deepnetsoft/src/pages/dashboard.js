import React from 'react'
import Logo from "../assets/logo.png"
import "../styles/dashboard.css"
import TableData from "../components/tabledata"
const Dashboard = () => {
    
    
    return(
        
        <div className='content'>


            <div className='header'>
            <div className='logo'>
            <img src={Logo} alt='logo'/>
            </div>
            <div className='profile'>
                <p>logout</p>
            </div>
            </div>

            <div className='product-management'>
                <span >Dashboard</span>
                <div className='product-search'>
                    <input type="search" className='search-input' placeholder='Search' />
                    <select>
                        <option name="category" selected>Category</option>
                        <option name="shoes" selected>Shoes</option>
                    </select>
                    <a href='/addproducts'>
                        <button>Add Product</button>
                        </a>
                    
                </div>
                <div className='product-list'>
                    <TableData />
                </div>
            </div>
        </div>
    );

}

export default Dashboard;