import React, { useEffect, useState } from "react";
import axios from "axios";

function Menu() {
  const [product,setProduct] = useState([]);
 
  useEffect(() => {
    axios.get('https://producstsss.herokuapp.com/').then(res => {
      setProduct(res.data);
      console.log(res.data)
    });
  }, []);
  return (
    <div>
      <div>{
        product.map((x)=>(
          <div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <img src={product.url}/>
          <p> {product.size}</p>
        
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Menu;
