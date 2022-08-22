import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser.js";
import UserList from "./Components/Users/UserList.js";



const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()},];
    });
  };

  return(<div>
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={usersList}/>
  </div>
  )
  
}

export default App;