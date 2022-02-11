import './app-info.css';

const AppInfo = ({ data }) => {
    let employeesNum = data.length;
    let increasedNum = (data.filter(item => item.increase === true)).length;

    return (
        <div className="app-info">
            <h1>Учет сотрудников компании Х</h1>
            <h2>Общее число сотрудников: {employeesNum}</h2>
            <h2>Премию получат: {increasedNum}</h2>
        </div>
    );
}

export default AppInfo;