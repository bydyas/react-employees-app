import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="His name"
                        name="name"
                        value={name} 
                        onClick={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary ($)"
                        name="salary"
                        value={salary} 
                        onClick={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;