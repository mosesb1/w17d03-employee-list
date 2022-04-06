import EmployeeListItem from './EmployeeListItem';

export default function EmployeeList({employees, searchText}){
    const employeeList = [];
    employees.forEach((employee,idx) => {
        if(employee.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1){
            return;
        }
        employeeList.push(<EmployeeListItem employee={employee} key={idx}/>)
    })
    return (
        <div>
            {employeeList}
        </div>
    )
}