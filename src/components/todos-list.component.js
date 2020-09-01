import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
           
          
        </td>
        <td>  <Link to={"/show/"+props.todo._id}>View</Link></td>
        <td>  <Link to={"/delete/"+props.todo._id}>Delete</Link></td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        
    this.onSubmit = this.onSubmit.bind(this);
        this.state = {todos: []};
    }
    onSubmit(e) {
        e.preventDefault();
        
        axios.post('http://localhost:4000/todos/delete')
            .then((res) => {
                if(res){
                    axios.get('http://localhost:4000/todos/home')
                }else{
                    axios.get('http://localhost:4000/todos/home')
                }
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/home')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <p>
                <h3>Todos List</h3>
               {/* <strong> <Link to={"/delete/"}>Delete All Todos</Link></strong> */}
                </p>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}