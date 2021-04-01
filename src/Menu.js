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
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwestdale.lavapizza.ca%2Fwp-content%2Fuploads%2F2017%2F01%2Fsingle-pizza-pic.png&f=1&nofb=1" />
            </p>
            <span key={x.id}>Name:{x.name}</span>
            <br />
            <span key={x.id}>price:{x.price}</span>
            <br />
            <span key={x.id}>Size:{x.size}</span>
            <p key={x.id}>
              <button>Add</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
