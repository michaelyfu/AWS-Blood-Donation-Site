import './App.css';
import AddProfile from './ui-components/AddProfile.jsx';
import EditProfile from './ui-components/EditProfile.jsx';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


function App() {
  return (
    <div className="App">
      {/* <SelectField
  label="Fruit"
  descriptiveText="What's your favorite fruit?"
/> */}
      <AddProfile></AddProfile>
    </div>
  );
}

export default withAuthenticator(App);
