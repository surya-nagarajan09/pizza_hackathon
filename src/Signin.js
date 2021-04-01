import React from "react";

function Signin() {
  return (
    <div>
      <div>
        <form>
          <label>Email:</label>
          <input placeholder="enter mail" />
          <br />
          <label>Passcode:</label>
          <input placeholder="enter passcode" type="password" />
        </form>
      </div>
      <button>Sign in</button>
    </div>
  );
}
export default Signin;
