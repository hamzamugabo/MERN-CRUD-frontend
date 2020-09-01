import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import View from "./components/todo-view.component";
import Delete from "./components/delete-todo.component";
import DeleteAll from "./components/delete-todos.component";
import Register from "./auth/Register.auth";
import Login from "./auth/Login";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="http://localhost:3000/" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/home" className="navbar-brand">My MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/home" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li> <li className="navbar-item">
                  <Link to="/" className="nav-link">Register</Link>
                </li> <li className="navbar-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/home"  component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/show/:id" component={View} />
          <Route path="/delete/:id" component={Delete} />
          <Route path="/delete/" component={DeleteAll} />
          <Route path="/" exact component={Register} />
          <Route path="/login"  component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;