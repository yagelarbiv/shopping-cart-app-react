
import React, { useState } from 'react'
import ProductsService from '../Service/Products-Service';
import { Navigate } from 'react-router-dom';

export default function DeleteProduct() {
  const [id,SetId] = useState("");
  function deletePro(){
    let service = new ProductsService();
    service.deleteProduct(id);
    Navigate("/");
  }
  return (
    <div>
      <label for="id">Product ID: </label>
      <input type="text" className='border-2' id="id" onChange={(e)=>SetId(e.target.value)} />
      <button onClick={deletePro}>Delete</button>
    </div>
  )
}
