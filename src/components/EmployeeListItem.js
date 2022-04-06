import { Link } from "react-router-dom";

export default function EmployeeListItem({employee}) {
    return (
      <section className="employeeItem">
        <img src={employee.img} alt={employee.name} className="employeeImg" />
        <Link to={`/${employee.id}`}>
            <div className="employeeInfo">
                <h3 className="employeeName">{employee.name}</h3>
                <p className="employeeTitle">{employee.title}</p>
            </div>
        </Link>
      </section>
    );
  }