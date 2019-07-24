import React from 'react';

class Register extends React.Component {
    state = {
        regiser: {
            email: {},
            name: {},
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
                name: this.state.regiser.name,
                password: this.state.regiser.password,
            })
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    };

    inputValueChanged = e => {

        console.log(this.state);
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
            window.location = "http://localhost:3000/connexion";
        }
        return (

            <section className="ftco-section contact-section">

                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">
            <div className="col-md-6 col-md-offset-3">
                <h2>Inscription</h2>
                <form name="form" method="POST" onSubmit={this.formSubmitted}>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Pseudo</label>
                        <input name="name" onChange={this.inputValueChanged} type="text" className="form-control" />
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
                        </div>
                    </div>
                </div>

            </section>
        );
    }

};

export default Register