import "./App.css";
import AddProfile from "./ui-components/AddProfile.jsx";
import EditProfile from "./ui-components/EditProfile.jsx";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import LogOutButton from "./components/LogOutButton.js";
import React, { Component } from "react";



class App extends Component {
  render() {
    const myStyle = {
      // backgroundImage: "url(https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwZ3JhZGllbnR8ZW58MHx8MHx8&w=1000&q=80)",
      // // height:"100",
      // marginTop:'-70px',
      // // fontSize:'50px',
      bacgkroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // width: '88%',
      // height: '800px',
      backgroundImage:
        "url(https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwZ3JhZGllbnR8ZW58MHx8MHx8&w=1000&q=80)",
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
