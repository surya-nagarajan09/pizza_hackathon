import React, { useEffect, useState } from "react";
import axios from "axios";

function Menu() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://producstsss.herokuapp.com/").then(res => {
      setUserList(res.data.data);
    });
  }, []);
  return <div />;
}

export default Menu;
