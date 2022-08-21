import React, {useState} from 'react';
import Users from './Components/Users.js';
import NewUser from './Components/NewUser.js';
import UserList from './Components/UserList.js';



const App = () => {

  const [user, setUser] = useState('');
  
  const addUserHandler = (user) => {
    setUser(prevUser => {
      return [user, ...prevUser];
    });
  }


  return (
    <div>
      <NewUser onAddUser={addUserHandler}/>
      <Users users={user}/>
      
    </div>
  );
}

export default App;