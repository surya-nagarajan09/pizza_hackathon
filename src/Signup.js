import React from "react";

function Signup() {
  return (
    <div>
      <form>
        <p>first Name</p>
        <input type="text" placeholder="enter first name" />
        <p>Last Name</p>
        <input type="text" placeholder="enter Last name" />
        <p>address </p>
        <input type="text" placeholder="enter adress" />
        <label>Zip code</label>
        <input type="number" placeholder="Enter code" />
        <p>Email adress</p>
        <input placeholder="Enter email" />
        <p>Passcode</p>
        <input type="password" placeholder="Enter passcode" />
        <p>Phone number</p>
        <input type="number" placeholder="Enter mobile number" />
      </form>
      <div>
        <button>Sign up</button>
      </div>
    </div>
  );
}
export default Signup;
