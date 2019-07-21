import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';

class PostAdd extends Component {
    



    state = {
        article: {
            title: {},
            content: {},
            user_id: {}
        },
        redirect: false

    };

    formSubmitted = e => {
// TODO: récup userID quand auth ok


        e.preventDefault();

        fetch('http://localhost:3001/articles/create', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                title: this.state.article.title,
                user_id: "5d308785e27c2e2a6c609d13",
                content: this.state.article.content,
            })
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    };

    inputValueChanged = e => {

        const { name, value } = e.target;
        this.setState(prevState => ({
            article: {
                ...prevState.article,
                [name]: value
            }
        }));


    };


    render() {

        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/accueil' />;
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Connexion</h2>
                <form name="form" method="POST" onSubmit={this.formSubmitted}>
                    <div className="form-group">
                        <label>Titre</label>
                        <input name="title" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>content</label>
                        <input name="content" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        {/*<input name="user_id" onChange={this.inputValueChanged} type="hidden" className="form-control" />*/}
                        <input name="user_id" value="5d308785e27c2e2a6c609d13" type="hidden" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Connexion</button>
                    </div>
                </form>
            </div>
        );
    }

}




export default PostAdd;