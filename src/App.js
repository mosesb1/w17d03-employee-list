import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Employee from './pages/Employee';
import employees from './data';
import './App.css';

export default function App(){
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home employees={employees}/>}/>
                <Route path='/:id' element={<Employee employees={employees}/>}/>
            </Routes>
        </div>
    )
}