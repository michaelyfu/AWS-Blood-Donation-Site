import "./App.css";
import AddProfile from "./ui-components/AddProfile.jsx";
import EditProfile from "./ui-components/EditProfile.jsx";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import LogOutButton from "./components/LogOutButton.js";
import React, { Component } from "react";
import bg from "./components/bg.png";



class App extends Component {
  render() {
    const myStyle = {
      // backgroundImage: "url(https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwZ3JhZGllbnR8ZW58MHx8MHx8&w=1000&q=80)",
      // width: '50%',
      // height: '1000px',
      bacgkroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // backgroundImage: "url(/Users/michaelyfu/Documents/Coding/test-blood-donation-button/src/components/bg.png)"
      backgroundImage: `url('${bg}')` 
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

export default withAuthenticator(App);

// function App() {
//   return (
//     <div className="App">
//       {/* <SelectField
//   label="Fruit"
//   descriptiveText="What's your favorite fruit?"
// /> */}
//       <div className="container">
//         <AddProfile></AddProfile>
//       </div>
//     </div>
//   );
// }

// export default withAuthenticator(App);
