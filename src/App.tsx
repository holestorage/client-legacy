import './App.css';

import {Route, Routes, useLocation} from "react-router-dom";
import AppView from "./components/view/app/app-view";
import HomeView from "./components/view/home/home-view";

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <Routes location={location}>
                <Route path="/*" element={<HomeView/>}/>
                <Route path="/app/*" element={<AppView/>}/>
            </Routes>
        </div>
    );
}

export default App;
