import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Notes App</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
};
export default Header;
