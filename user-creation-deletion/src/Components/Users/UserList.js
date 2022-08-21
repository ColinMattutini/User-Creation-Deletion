import React from 'react';
import './UserList.css';
import Card from '../UI/Card.js';

const UserList = (props) => {
    return(
    <Card>
    <div className='userlist'>
        <div className='userlist-control'>
            <div classname='userlist_control'>
                
                    <h2>User</h2>
                    <label htmlFor="age">Age</label>
                
            </div>
        </div>
    </div>
    </Card>
    )

}

export default UserList;