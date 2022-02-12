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
            term: '',
            filter: 'all'
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
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            })
        }));
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'rankup':
                return items.filter(item => item.rankup);
            case 'salary>1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({ filter });
    }

    render() { 
        const { data, term, filter } = this.state;
        
        const employeesNum = data.length;
        const increasedNum = (data.filter(item => item.increase === true)).length;
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    increasedNum={increasedNum}
                    employeesNum={employeesNum}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProps={this.onToggleProps}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
    
}

export default App;