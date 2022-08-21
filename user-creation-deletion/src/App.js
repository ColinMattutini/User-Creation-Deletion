import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser.js";
import UserList from "./Components/Users/UserList.js";

const App = () => {
  return(<div>
    <AddUser />
    <UserList />
  </div>
  )
  
}

export default App;