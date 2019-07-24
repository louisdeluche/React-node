import React from 'react';

class Login extends React.Component {
    state = {
        login: {
            email: {},
            password: {}
        },
        redirect: false

    };

    formSubmitted = e => {
        // this.setState({isLoadingDisplayed: true});
        e.preventDefault();

        fetch('http://localhost:3001/users/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: this.state.login.email,
                password: this.state.login.password,
            })
        })

            .then(res =>{
                res.json().then(function(defs){

                    localStorage.setItem("email",defs.data.user.email)
                    localStorage.setItem("name",defs.data.user.name)
                    localStorage.setItem("id",defs.data.user._id)

                });
            }  )
            .then(() => {
                this.setState({ redirect: true })
            })
            .catch(err => console.error('Caught error: ', err));
    };

    inputValueChanged = e => {

        console.log(this.state);
        const { name, value } = e.target;
        this.setState(prevState => ({
            login: {
                ...prevState.login,
                [name]: value
            }
        }));
    };

    render() {

        const { redirect } = this.state;
        if (redirect) {
            window.location = "http://localhost:3000/accueil";
        }
        return (
            <section className="ftco-section contact-section">

                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">
            <div className="col-md-6 col-md-offset-3">
                <h2>Connexion</h2>
                <form name="form" method="POST" onSubmit={this.formSubmitted}>
                    <div className="form-group">
                        <label>email</label>
                        <input name="email" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mot de Passe</label>
                        <input name="password" onChange={this.inputValueChanged} type="password"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Connexion</button>
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

export default Login