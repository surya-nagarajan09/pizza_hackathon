import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Order() {
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
            <span key={x.id}>Name:{x.base}</span>
            <br />
            <span key={x.id}>price:{x.sauce}</span>
            <br />
            <span key={x.id}>Size:{x.cheese}</span>
            <p key={x.id}>
              <button className="button">Add</button>
            </p>
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
