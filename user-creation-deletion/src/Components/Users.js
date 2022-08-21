import React from 'react';
import './Users.css';
import Card from './UI/Card.js';

const Users = (props) => {

    return(
        <Card>
        <div className='new-user'>
        <form>
        <div className='new-user__controls'>
            <div className='new-user__control'>
                <label>Name</label>
                <input type='text'/>
            </div>
            <div className='new-user__control'>
                <label>Age</label>
                <input type='number'/>
            </div>
            <button type='button'>Submit</button>
        </div>
        </form>
        </div>
        </Card>

    )

}

export default Users;