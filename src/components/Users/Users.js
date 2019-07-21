import React, { Fragment } from 'react';
import UserContext from './UserContext';
import './UserStyle.css';

const Users = () => (
    
    <UserContext.Consumer>
        {context => (
            <Fragment>
                {Object.keys(context.user).map(key => (
                    <div className="header-user">
                        <p> {context.user[key].email}, known as : {context.user[key].name} </p>
                    </div>
                ))}
            </Fragment>
        )}
    </UserContext.Consumer>
);

export default Users;