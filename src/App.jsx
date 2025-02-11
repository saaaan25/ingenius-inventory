import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Inventory from './pages/Inventory'
import Users from './pages/Users'
import Deliveries from './pages/Deliveries'
import Requests from './pages/Requests'
import Reports from './pages/Reports'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import SideBar from './components/Sidebar'
import Request from './pages/Request'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SideBar/>}>
                    <Route path='/inventory' element={<Inventory/>}/>
                    <Route path='/requests' element={<Requests/>}/>
                    <Route path='/reports' element={<Reports/>}/>
                    <Route path='/purchases' element={<Purchases/>}/>
                    <Route path='/deliveries' element={<Deliveries/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/requests/:id' element={<Request/>}/>
                </Route>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App
