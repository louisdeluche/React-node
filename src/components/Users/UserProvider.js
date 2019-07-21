import React, { Component } from 'react';
import UserContext from './UserContext';

class UserProvider extends Component {

    state = {
        users: {
            0: {
                name: "Alberto",
                email: "ninegagers@hehe.gag"
            }
        }
    }
    
    // state = {
    //     users: {

    //     }
    // }

    // componentDidMount() {
    //   fetch('http://localhost:3001/users/')
    //     .then(res => res.json())
    //     .then((data) => {
    //         this.setState({ users: data.data });
    //     })
    //     .catch(console.log);
    // }
    
    render() {
        if( this.state.users !== undefined ){
            return (
                <UserContext.Provider
                    value={{
                        user: this.state.users
                        }
                    }
                >
                    {this.props.children}
                </UserContext.Provider>
            );
        }else{
            return (
                <div>Y'a rien !</div>
            );
        }
    }
}

export default UserProvider;