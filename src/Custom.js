import React,{useState} from "react";
import "./style.css";
import axios from "axios"

function Custom() {
  const url="https://producstsss.herokuapp.com/create_product"
   const [framework,setFramework] = useState('react');
   const [top,setTop]=useState("react")

 function handlebase(e){
    setFramework(e.target.value);
 };
  function handletop(e){
 
    setTop(e.target.value)
 };

  function handleSubmit(e){
    e.preventDefault();
    console.log(framework);
    console.log(top)
    axios
      .post(url, {
        first_name: framework,
        last_name:top,
     
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

    return (
      <form onSubmit={handleSubmit}>
        <h2>Choose your base</h2>
        <select onChange={handlebase} value={framework}>
          <option value="Thin Crust">Thin Crust</option>
          <option value="Thick Crust ">Thick Crust </option>
          <option value="Authentic Wood-Fired Crusts">Authentic Wood-Fired Crusts</option>
          <option value="Focaccia">Custom Crusts</option>
          <option value="Custom Crusts">Custom Crusts</option>
        </select>
         <h2>Choose your Sauce</h2>
        <select onChange={handletop} value={top}>
          <option value="Spicy Red Sauces">Spicy Red Sauces</option>
          <option value="Peppery Red Sauce">Peppery Red Sauce</option>
          <option value="Sweet Pizza Sauces">Sweet Pizza Sauces</option>
            <option value="Sweet Pizza Sauces">Sweet Pizza Sauces</option>
          <option value="Pesto Sauce on Pizza">Pesto Sauce on Pizza</option>

        </select>
        <h2>Choose your </h2>
        <select onChange={handletop} value={top}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
}

export default Custom;
