import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";
import LogOut from "./LogOut.css"
function LogOutButton() {
  return (
    <div className="LogOut">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            {/* <h1>Hello {user.username}</h1> */}
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
export default LogOutButton;
