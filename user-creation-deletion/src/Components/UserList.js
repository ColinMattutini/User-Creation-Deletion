
import React from 'react';
import UserSaved from './UserSaved.js';

const UserList = (props) => {

    return(
    <ul className="user-list">
        {props.users.map((user) => (

        
        <UserSaved
            // key={user.id}
            name={user.name}
            age={user.age}/>))}
    </ul>

    );

};

export default UserList;