import SearchBar from "../components/SearchBar";
import Header from '../components/Header';
import EmployeeList from '../components/EmployeeList';

export default function Home({id, setId, employees}) {
    return (
        <div>
            <Header title='Employee Directory'/>
            <SearchBar />
            <EmployeeList id={id} setId={setId} employees={employees}/>
        </div>
    )
}