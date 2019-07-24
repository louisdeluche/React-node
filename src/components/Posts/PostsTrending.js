import React, { Component } from 'react';
class PostsTrending extends Component {

    state = {
        articles: [],
        redirect: false
    };

    componentDidMount() {
        fetch('http://localhost:3001/articles', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ articles: data.articles });
            })
            // .then(() => this.setState({redirect: true}))
            .catch(err => console.error('Caught error: ', err));
    };

    handleDelete(id_article){
        console.log('http://localhost:3001/articles/'+id_article);
        fetch('http://localhost:3001/articles/'+id_article, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json"
            },
            // body: JSON.stringify({
            //     articleId: id_article
            // })
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    }

    render() {

        const { redirect } = this.state;
        if (redirect) {
            document.location.reload(true)
        }

        if( this.state.articles !== undefined ){
            console.log(localStorage.getItem("name"));
            console.log(Object.keys(this.state.articles));
            return (
                <section className="ftco-section">
                    <div className="container">

                        <div className="form-group">
                            <br/>

                            { localStorage.getItem("name") != null
                                ? (<button id="PostsTrending" className="btn btn-primary">Ajouter un article</button>)
                                : (<br/>)
                            }

                        </div>
                        <p>___________</p>
                        <div className="row">
                            <div className="col-lg-12">

                            {Object.keys(this.state.articles).map(carID => (
                    <div>
                        <h2>{this.state.articles[carID].title}</h2>
                            <p>{this.state.articles[carID].autor}</p>
                        <div>
                            <p> {this.state.articles[carID].content}</p>
                            {/*<p>     publié par {this.state.articles[carID].user.name} le {this.state.articles[carID].date} </p>*/}
                            <p>___________</p>
                            { this.state.articles[carID].autor == localStorage.getItem("name")
                                ? (<button onClick={() => this.handleDelete(this.state.articles[carID].id)}> Supprimer l'article </button>)
                                : (<br/>)
                            }

                        </div>



                    </div>
                ))}

                            </div>
                        </div>
                    </div>

                </section>
            );
        }else{
            return (
                <div>Y'a rien !</div>
            );
        }
    }
}

export default PostsTrending;