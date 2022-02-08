import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            rankup: false,
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }));
    }

    onRankup = () => {
        this.setState(({ rankup }) => ({
            rankup: !rankup
        }));
    }

    render() {
        const { name, salary, onDelete} = this.props;
        const { increase, rankup } = this.state;
        
        let classNames = 'list-group-item d-flex justify-content-between';

        if (increase) classNames += ' increase';
        if (rankup) classNames += ' like';

        return (
            <li className={classNames}>
                <span
                    className="list-group-item-label"
                    onClick={this.onRankup}>
                    {name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button
                        type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
    
}

export default EmployeesListItem;