import EmployeeListItem from './EmployeeListItem';

export default function EmployeeList({employees}){
    const employeeList = [];
    employees.forEach((employee,idx) => {
        employeeList.push(<EmployeeListItem employee={employee} key={idx}/>)
    })
    return (
        <div>
            {employeeList}
        </div>
    )
}