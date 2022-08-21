import React, {useState} from 'react';
import Users from './Components/Users.js';
import NewUser from './Components/NewUser.js';


const App = () => {

  const [user, setUser] = useState('');
  
  const addUserHandler = (user) => {
    setUser(prevUser => {
      return [user, ...prevUser];
    });
  }


  return (
    <div>
      {/* <Users/> */}
      <NewUser onAddUser={addUserHandler}/>
    </div>
  );
}

export default App;