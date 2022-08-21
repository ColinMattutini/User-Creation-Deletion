import React, {useState} from 'react';
import './Users.css';
import Card from './UI/Card.js';

const Users = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = (event) => {

        setEnteredAge(event.target.value);
    }


    const submitHandler = (event) =>{
        event.preventDefault();

        const userData = {
            name: enteredName,
            age: enteredAge
        };

        props.onSaveUserData(userData);
        setEnteredName('');
        setEnteredAge('');

    };

    return(
        <Card>
            <form onSubmit={submitHandler}>
        <div className='new-user'>
        
        <div className='new-user__controls'>
            <div className='new-user__control'>
                <label>Name</label>
                <input type='text' value={enteredName} onChange={nameChangeHandler}/>
            </div>
            <div className='new-user__control'>
                <label>Age</label>
                <input type='number' value={enteredAge} onChange={ageChangeHandler}/>
            </div>
            <button type='submit'>Submit</button>
        </div>
        </div>
        </form>
        </Card>

    )

}

export default Users;