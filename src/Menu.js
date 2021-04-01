import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Menu() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://producstsss.herokuapp.com/").then(res => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="display">
      <div className="each">
        {product.map(x => (
          <div className="display">
            <p key={x.id}>
              <img src="https://i.postimg.cc/9XJVsgrK/single-pizza-pic.png" />
            </p>
            <span key={x.id}>Name:{x.name}</span>
            <br />
            <span key={x.id}>price:{x.price}</span>
            <br />
            <span key={x.id}>Size:{x.size}</span>
            <p key={x.id}>
              <button className="button">Add</button>
            </p>
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
