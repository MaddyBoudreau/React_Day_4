import { useState } from 'react'
import CarList from './components/CarList'
import { BrowserRouter as Router,
    Routes,
    Route,
    Link 
} from 'react-router-dom'
import Profile from './views/Profile'
import Home from './views/Home'
import Inventory from './views/Inventory'

export default function App() {

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/" element={<Home />}  />
                </Routes>
            </Router>
        </>
    )
}