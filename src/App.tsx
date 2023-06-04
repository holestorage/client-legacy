import './App.css';

import {Route, Routes, useLocation} from "react-router-dom";

import AppView from "./components/view/app/app-view";

const axios = require('axios');

export const HoleApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    timeout: 1000,
    headers: {

    }
});

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <Routes location={location}>
                <Route path="/app/*" element={<AppView/>} />
            </Routes>
        </div>
    );
}

export default App;
