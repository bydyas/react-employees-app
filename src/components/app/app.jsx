import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Thomas Anderson', salary: 800, increase: false, rankup: true, id: 1 },
                { name: 'Ragnar Lodbrok', salary: 8050, increase: true, rankup: false, id: 2 },
                { name: 'Will Smith', salary: 1800, increase: false, rankup: false, id: 3 },
            ],
        };
        this.maxId = 3;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false,
            rankup: false,
            id: ++this.maxId
        };

        this.setState(({ data }) => {
            return {
                data: [...data, newEmployee],
            }
        });
    }

    onToggleProps = (id, prop) => {
        console.log('increase' + id);
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            })
        }));
    }

    render() { 
        return (
            <div className="app">
                <AppInfo data={this.state.data}/>
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProps={this.onToggleProps}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
    
}

export default App;