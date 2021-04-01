import React, { useEffect, useState } from "react";
import axios from "axios";

function Menu() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://producstsss.herokuapp.com/").then(res => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
    <ul>{product.map(x=>(
      <div className="display">
       <li key={x.id}><img  src={x.url}/></li>
      <li key={x.id}>{x.name}</li>
      <li key={x.id}>{x.price}</li>
      <li key={x.id}>{x.size}</li>
      </div>
      
    ))
    }
    </ul>
    </div>
  );
}

export default Menu;
