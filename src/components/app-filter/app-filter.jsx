import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                    All employees
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Ranking up
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Salary &gt; 100$
            </button>
        </div>
    );
}

export default AppFilter;