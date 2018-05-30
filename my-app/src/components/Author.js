import React, { Component } from 'react';

class Author extends Component {
    render() {
        return <div>
            <h1>Hello, {this.props.name}</h1>
        </div>;
    }
}


export default Author;