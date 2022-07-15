import logo from './logo.svg';
import './App.css';
import AddProfile from './ui-components/AddProfile.jsx';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


function App() {
  return (
    <div className="App">
      test1
      <AddProfile></AddProfile>
    </div>
  );
}

export default withAuthenticator(App);
