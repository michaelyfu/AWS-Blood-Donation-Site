import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";
import LogOut from "./LogOut.css"
import { Button } from "@aws-amplify/ui-react";
function LogOutButton() {
  return (
    <div className="LogOut">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            {/* <h1>Hello {user.username}</h1> */}
            <Button variation="primary" onClick={signOut}>Sign out</Button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
export default LogOutButton;
