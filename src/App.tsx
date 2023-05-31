import './App.css';

import {Route, Routes, useLocation} from "react-router-dom";

import AppView from "./components/view/app/app-view";

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
