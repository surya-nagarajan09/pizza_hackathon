import React,{useState} from "react";
import "./style.css";
import axios from "axios"

function Custom() {
  const url=""
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
    axios.post("url")
  };

    return (
      <form onSubmit={handleSubmit}>
        <h2>Choose your base</h2>
        <select onChange={handlebase} value={framework}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
         <h2>Choose your topigs</h2>
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
