import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Routes,Route,Link} from "react-router-dom";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path = "/profile" element={<Profile />} />
                    <Route path = "/dialogs" element={<Dialogs />} />
                </Routes>
            </div>

        </div>
    );
}

export default App;
