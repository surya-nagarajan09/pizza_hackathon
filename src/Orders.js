import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Order() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://order-detailsll.herokuapp.com/").then(res => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <div>
        {product.map(x => (
          <div className="order">
            <span key={x.id}>Details</span>
            <br />
            <span key={x.id}> Name:{x.name}</span>
            <br />
            <span key={x.id}> Address:{x.adress}</span>
            <br />
            
            <span key={x.id}> Phone Number:{x.phone}</span>
            <br />
            <p/>
            <span key={x.id}>Custom Pizza</span>
            <br />
            <span key={x.id}>Base:{x.base}</span>
            <br />
            <span key={x.id}>Cheese:{x.cheese}</span>
            <br />
            <span key={x.id}>Meat:{x.meat}</span>
            <br />
            <span key={x.id}>Sauce:{x.sauce}</span>
            <br />
            <span key={x.id}>veggie:{x.veggie}</span>
            <br />
            <p>Price Details</p>
            <span key={x.id}>Number of Pizza:{x.qty}</span>
            <br />
            <span key={x.id}> Total Price:{(x.qty)*300}</span>
            <br />
           
        
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
