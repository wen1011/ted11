import './App.css'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Layout'
import TourList from './components/TourList'
import TourDetail from './components/TourDetail'
import LoadingPage from './components/LoadingPage'
function App() {
    return (
        <div className="App">
            <Outlet />
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/tour-list">
                        <Route index element={<TourList />} />
                        <Route path=":id" element={<TourDetail />} />
                    </Route>
                    <Route path="*" element={<LoadingPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
