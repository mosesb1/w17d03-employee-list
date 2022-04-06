import Header from '../components/Header';
import EmployeeListItem from '../components/EmployeeListItem';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Employee({employees}) {

    const params = useParams();
    const id = params.id;
    const employee = employees[id-1];
    return (
        <div className="employeeCard">
            <div className='header'>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <p className='back-arrow'>{'<'}</p>
                </Link>
                <Header title="Employee"/>
            </div>
            <EmployeeListItem employee={employee} />
            <div className='contactBox'>
                <div className='employeeContact'>
                    <h2>Call Office</h2>
                    <p>{employee.office}</p>
                </div>
                <p className='arrow'>{'>'}</p>
            </div>
            <div className='contactBox'>
                <div className='employeeContact'>
                    <h2>Call Mobile</h2>
                    <p>{employee.mobile}</p>   
                </div>
                <p className='arrow'>{'>'}</p>
            </div>
            <div className='contactBox'>
                <div className='employeeContact'>
                    <h2>SMS</h2>
                    <p>{employee.mobile}</p>
                </div>
                <p className='arrow'>{'>'}</p>
            </div>
            <div className='contactBox'>
                <div className='employeeContact'>
                    <h2>Email</h2>
                    <p>{employee.email}</p> 
                </div>
                <p className='arrow'>{'>'}</p>
            </div>
        </div>
    )
}