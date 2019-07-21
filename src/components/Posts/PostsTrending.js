import React, { Component } from 'react';

class PostsTrending extends Component {

    state = {
        articles: []
    };

    componentDidMount() {
        fetch('http://localhost:3002/api/v1/articles', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ articles: data });
            })
            .then(() => this.setState({redirect: true}))
            .catch(err => console.error('Caught error: ', err));
    };

    handleDelete(id_article){
        fetch('http://localhost:3002/articles/delete', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                id_article: id_article
            })
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    }

    render() {

        if( this.state.articles !== undefined ){
            console.log(this.state.articles);
            console.log(Object.keys(this.state.articles));
            console.log(this.state.articles.articles);
            return (
                <div> Blog :

                         {Object.keys(this.state.articles).map(carID => (
                    <div>
                        <h2>{this.state.articles[carID].title}</h2>
                            {/*<p>{this.state.articles[carID].user.email}</p>*/}
                        <div>
                            <p> {this.state.articles[carID].content}</p>
                            <p>     publié par {this.state.articles[carID].user.name} le {this.state.articles[carID].date} </p>
                            <p>___________</p>
                         <button onClick={() => this.handleDelete(this.state.articles[carID].id)}> Supprimer l'article </button>
                        </div>

                        

                    </div>
                ))}
                </div>
            ); 
        }else{
            return (
                <div>Y'a rien !</div>
            );
        }
    }
}

export default PostsTrending;