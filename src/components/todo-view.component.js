import React, { Component } from 'react';
import axios from 'axios';

export default class View extends Component {

    constructor(props) {
        super(props);
        this.state = {

            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        };
    }


    componentDidMount() {
        axios.get('http://localhost:4000/todos/show/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                }) 
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
   

    }
    render() {
        return (
            <div align="center">
                
                <div>
                <h3>View</h3>
               <p>{this.state.todo_description}</p> 
               <p> {this.state.todo_responsible}</p>
                <p>{this.state.todo_priority}</p>
               <p> {this.state.todo_completed}</p>
            </div>
            </div>
        )
    }
}