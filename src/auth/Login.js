import React, { Component } from "react";
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`username: ${this.state.username}`);
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
     
        const newTodo = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };

        axios.post('http://localhost:4000/todos/register', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            email: '',
            password: '',
        })
    }

    // componentDidMount() {
    //     axios.get('http://localhost:4000/todos')
    //         .then(response => {
    //             this.setState({ todos: response.data });
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Register</h3>
        <form onSubmit={this.onSubmit}>
          {/* <div className="form-group">
            <label>Usename: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div> */}
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
