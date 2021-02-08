import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    //CreateExercise subclass constructor
    constructor(props) {

        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onsSubmit = this.onsSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onsSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        //keep the user on this page with a blank create user page
        this.setState({
            username: '',
        });
    }

    render() {
        return (
            <div>
                <h3>Create New Users</h3>
                <form onSubmit={this.onsSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}