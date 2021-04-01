import React, { useState } from "react";

function Signup() {
  const url = "";
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    code: "",
    email: "",
    passcode: "",
    phonenumber: ""
  });
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function submit(e) {
    axios
      .post(url, {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        code: data.code,
        email: data.email,
        passcode: data.passcode,
        phonenumber: data.phonenumber
      })
      .then(res => {
        console.log(res.data);
      });
  }
  return (
    <div>
      <form onSubmit={e => submit(e)}>
        <p>first Name</p>
        <input
          onChange={e => handle(e)}
          id="first_name"
          value={data.first_name}
          type="text"
          placeholder="enter first name"
        />
        <p>Last Name</p>
        <input
          onChange={e => handle(e)}
          id="last_name"
          value={data.last_name}
          type="text"
          placeholder="enter Last name"
        />
        <p>address </p>
        <input
          type="text"
          onChange={e => handle(e)}
          id="address"
          value={data.address}
          placeholder="enter adress"
        />
        <label>Zip code</label>
        <input
          type="number"
          placeholder="Enter code"
          onChange={e => handle(e)}
          id="code"
          value={data.code}
        />
        <p>Email adress</p>
        <input
          placeholder="Enter email"
          onChange={e => handle(e)}
          id="email"
          value={data.email}
        />
        <p>Passcode</p>
        <input
          type="password"
          placeholder="Enter passcode"
          onChange={e => handle(e)}
          id="passcode"
          value={data.passcode}
        />
        <p>Phone number</p>
        <input
          type="number"
          placeholder="Enter mobile number"
          onChange={e => handle(e)}
          id="phonenumber"
          value={data.phonenumber}
        />
      </form>
      <div>
        <button type="submit">Sign up</button>
      </div>
    </div>
  );
}
export default Signup;
