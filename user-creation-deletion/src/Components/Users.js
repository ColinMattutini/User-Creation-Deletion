import React from 'react';
import './Users.css';
import Card from './UI/Card.js';
import UserList from './UserList.js';
// import UserSaved from './UserSaved.js';

const Users = (props) => {

    const DummyUsers = [
        {name: 'person1', age: 32},
        {name: 'person2', age:24}
      ];

    return(
        <div>
        <Card className='users'>
            <UserList users={DummyUsers}/>
        </Card>
        </div>

    )

}

export default Users;