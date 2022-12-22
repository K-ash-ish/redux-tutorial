import React from "react";
import IceCreamView from "./features/icecream/IceCreamView";
import CakeView from "./features/cake/CakeView";
import UserView from "./features/user/UserView";
function App() {
  return <div className="App">
    <CakeView />
    <IceCreamView />
    <UserView />
  </div>;
}

export default App;
