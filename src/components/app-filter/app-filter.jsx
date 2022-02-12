import './app-filter.css';

const AppFilter = ({filter, onUpdateFilter}) => {
    const btnsData = [
        {filterName: 'all', label: 'All employees'},
        {filterName: 'rankup', label: 'Ranked up'},
        {filterName: 'salary>1000', label: 'Salary > 1000$'},
    ]

    const buttons = btnsData.map(({ filterName, label }) => {
        const clazz = filter === filterName ? 'btn-light' : 'btn-outline-light';

        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={filterName}
                onClick={() => onUpdateFilter(filterName)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;