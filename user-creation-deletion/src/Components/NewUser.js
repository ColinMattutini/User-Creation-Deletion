import React, {useState} from 'react';
import './NewUser.css';
import NewUserForm from './NewUserForm.js';


const NewUser = (props) => {
    const [isEditing, setIsEditing] = useState(false);


    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        };
        props.onAddUser(userData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return(
        <div className='new-user'>
            {!isEditing && <button onClick={startEditingHandler}>Add New User</button>}
            {isEditing && <NewUserForm onSaveUserData={saveUserDataHandler} onCancel={stopEditingHandler}/>}

        </div>
    );

};

export default NewUser;