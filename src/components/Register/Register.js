import React from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';

class Register extends React.Component {
    state = {
        regiser: {
            email: {},
            password: {}
        },
        redirect: false

    };

    formSubmitted = e => {
        // this.setState({isLoadingDisplayed: true});
        e.preventDefault();

        fetch('http://localhost:3001/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: this.state.regiser.email,
                password: this.state.regiser.password,
            })
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    };

    inputValueChanged = e => {

        const { name, value } = e.target;
        this.setState(prevState => ({
            regiser: {
                ...prevState.regiser,
                [name]: value
            }
        }));
    };

    render() {

        const { redirect } = this.state;
        if (redirect) {
            console.log("aze");
            return <Redirect to='/accueil' />;
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Inscription</h2>
                <form name="form" method="POST" onSubmit={this.formSubmitted}>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mot de Passe</label>
                        <input name="password" onChange={this.inputValueChanged} type="password"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Confirmer le Mot de Passe</label>
                        <input name="confirmPassword" onChange={this.inputValueChanged} type="password"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">S'inscrire</button>
                    </div>
                </form>
            </div>
        );
    }

};

export default Register