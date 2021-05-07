import React, { Component } from 'react';


class GetOnlinePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []        
        };
    }
    componentDidMount() {
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }
    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol>
                    {
                        posts.map(post => (
                            <li key={post.id} align="start">
                                <div>
                                    <p>{post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }    
    }
  }

  export default GetOnlinePost;