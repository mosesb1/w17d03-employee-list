import SearchBar from "../components/SearchBar";
import Header from '../components/Header';
import EmployeeList from '../components/EmployeeList';
import {useState} from 'react';

export default function Home({employees}) {
    const [searchText, setSearchText] = useState('');

    return (
        <div>
            <Header title='Employee Directory'/>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            <EmployeeList searchText={searchText} employees={employees}/>
        </div>
    )
}