import React from 'react';
import Card from './UI/Card';
import './UserSaved.css';


const UserSaved = (props) => {

    return(
        <li>
            <div className="user-item">
            
                <div className="user-item__name">
                    <h2>{props.name}</h2>
                    <div className="user-item__age">
                        {props.age}
                    </div>
                </div>
                </div>
                
            

        </li>

    );

};

export default UserSaved;