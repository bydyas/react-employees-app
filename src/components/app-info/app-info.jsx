import './app-info.css';

const AppInfo = ({employeesNum, increasedNum}) => {
    return (
        <div className="app-info">
            <h1>Company employee accounting</h1>
            <h2>Total number of employees: {employeesNum}</h2>
            <h2>The award will be received: {increasedNum}</h2>
        </div>
    );
}

export default AppInfo;