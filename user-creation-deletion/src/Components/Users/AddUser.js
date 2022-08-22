import React, {useState} from 'react';
import './AddUser.css';
import Card from '../UI/Card.js';

const AddUser = (props) => {

    const [enteredName, setEnteredName] = useState('');

    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
    <Card>
    <div className = 'user'>
        <div className = 'user-controller'>
            <form onSubmit={addUserHandler}>
                <div className = 'user__control'>
                    <label htmlFor="username">UserName</label>
                    <input id="username" type='text' value={enteredName} onChange={nameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type='number' value={enteredAge} onChange={ageChangeHandler}/>
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    </div>
    </Card>
    )

};

export default AddUser;