import "./App.css";
import "./styles.css";
import AddProfile from "./ui-components/AddProfile.jsx";
import EditProfile from "./ui-components/EditProfile.jsx";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import LogOutButton from "./components/LogOutButton.js";
import React, { Component } from "react";
import bg from "./components/bg.png";
import png3 from "./components/png3.png";
import joy1 from "./components/joy1.png";
import joy2 from "./components/joy2.png";
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const myTheme = {
  googleSignInButton: { backgroundColor: "red", borderColor: "red" },
  button: { backgroundColor: "green", borderColor: "red" },
  signInButtonIcon: { backgroundColor: "green"}
};

class App extends Component {
  render() {
    const myStyle = {
      // backgroundImage: "url(https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwZ3JhZGllbnR8ZW58MHx8MHx8&w=1000&q=80)",
      bacgkroundPosition: 'center',
      backgroundSize: 'cover',
      // backgroundSize: 'contain',
      // backgroundRepeat: 'initial',
      border: '0',
      // backgroundImage: "url(/Users/michaelyfu/Documents/Coding/test-blood-donation-button/src/components/bg.png)"
      // backgroundImage: `url('${bg}')` 
      // backgroundImage:  `url('${joy1}')`
      backgroundImage:  `url('${joy2}')`
      // "url(https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwZ3JhZGllbnR8ZW58MHx8MHx8&w=1000&q=80)",
        // "url(https://www.xmple.com/wallpaper/turquoise-gradient-blue-linear-1920x1080-c2-b2f1d4-87ceeb-a-165-f-14.svg)"
      };
    return (
      <div className="App" style={myStyle}>
        <div className="container">
          <AddProfile></AddProfile>
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App, myTheme);