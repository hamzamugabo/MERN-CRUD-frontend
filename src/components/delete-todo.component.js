import React, { Component } from 'react';
import axios from 'axios';

export default class Delete extends Component {

    constructor(props) {
        super(props);
        this.state = {

            delete:'',
        };
    }


    componentDidMount() {
        axios.delete('http://localhost:4000/todos/delete/'+this.props.match.params.id)
            .then(response => {
               if(response){
                return this.props.history.push('/')
               }else{
                   const data = 'not deleted'
                   this.setState({delete:data})
                console.log('not deleted')
               }
            })
            .catch(function (error) {
                console.log(error);
            })
   

    }
    render() {
        return (
            <div align="center">
                
                <div>
                <h3>delete</h3>
              
               <p> {this.state.delete}</p>
            </div>
            </div>
        )
    }
}