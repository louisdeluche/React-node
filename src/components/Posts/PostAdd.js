import React, { Component } from 'react';

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
                user_id: localStorage.getItem("id"),
                content: this.state.article.content,
            })
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    };

    inputValueChanged = e => {
console.log(localStorage.getItem("id"));
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
            window.location = "http://localhost:3000/accueil";
        }
        return (

            <section className="ftco-section contact-section">
                <br/>
                <br/>
                <br/>
                <br/>

                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">



            <div className="col-md-6 col-md-offset-3">
                <h2>Ajout article</h2>
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
                        <input name="user_id"  type="hidden" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </div>
                </form>
            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}




export default PostAdd;