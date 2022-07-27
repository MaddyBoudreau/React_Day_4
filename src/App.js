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
import InventorySingle from './views/InventorySingle'

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
                            <Link to="/Inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/Profile">Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="Inventory">
                        {/* URL Prefix of /Inventory */}
                        <Route path=":id" element={<InventorySingle />} />
                        <Route path="" element={<Inventory />} />
                    </Route>
                    <Route path="/" element={<Home />}  />
                </Routes>
            </Router>
        </>
    )
}