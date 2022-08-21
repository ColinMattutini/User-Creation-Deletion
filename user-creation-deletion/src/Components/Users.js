import React from 'react';
import './Users.css';

const Users = (props) => {

    return(
        <form>
        <div className='new-user__controls'>
            <div className='new-user__control'>
                <label>Name</label>
                <input type='text'/>
            </div>
            <div className='new-user__control'>
                <label>Age</label>
            </div>
            <button type='button'>Submit</button>
        </div>
        </form>

    )

}

export default Users;