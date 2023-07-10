import './App.css';

import MainView from "./components/view/app/main-view";

import * as qs from "qs";
import axios from "axios";
import Cookies from 'js-cookie';
import PopupProvider from "./provider/popup-provider";
import ToastProvider from './provider/toast-provider';
import AccountProvider from "./provider/account-provider";
import {makeUseAxios} from 'axios-hooks';
import UploadProvider from "./provider/upload-provider";
import UploadTrack from "./components/auth/container/upload/track/upload-track";

const token = Cookies.get('token');

export const HoleApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    timeout: 12000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
    },
    paramsSerializer: (params) => qs.stringify(params)
});

export const useAxios = makeUseAxios({
    axios: HoleApi,
});

function App() {
    return (
        <div className="App">
            <AccountProvider>
                <PopupProvider>
                    <ToastProvider>
                        <UploadProvider>
                            <MainView/>
                            <UploadTrack />
                        </UploadProvider>
                    </ToastProvider>
                </PopupProvider>
            </AccountProvider>
        </div>
    );
}

export default App;
