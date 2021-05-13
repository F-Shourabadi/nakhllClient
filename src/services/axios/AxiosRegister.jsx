import Axios from "axios";
import ConfigRegister from "../configService/ConfigRegister";
import { Store } from "../../redux/store";
import { hideModal, showModal } from "../../redux/modal/Action";

const { dispatch } = Store;
//=================================================================\\
export const instanceAxiosWithOutToken = Axios.create({
    // baseURL: ConfigRegister.baseUrl,
    baseURL: 'http://ergast.com/',
    // timeout: 18000,
});

//=================================================================\\
export const instanceAxiosWithToken = Axios.create({
    // baseURL: ConfigRegister.baseUrl,
    baseURL: 'http://ergast.com/',
    // timeout: 18000,
    headers: {
        'Authorization': 'Bearer sdfasfd-asfd-12-23'
    },
});

//=================================================================\\
//=================instanceAxiosWithOutToken=======================\\
//=================================================================\\
instanceAxiosWithOutToken.interceptors.request.use(function (config) {
    // console.log('config-interseptor==>', config)
    return config;
}, function (error) {
    return Promise.reject(error);
});

instanceAxiosWithOutToken.interceptors.response.use(function (response) {
    console.log('config-interseptor==>', response);
    if (response.status === 200) {

        return response.data;
    } else {
        dispatch(showModal('عدم دریافت اطلاعات ...'));
    }
}, function (error) {
    return Promise.reject(error);
});


//=================================================================\\
//=================instanceAxiosWithToken==========================\\
//=================================================================\\
instanceAxiosWithToken.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    return Promise.reject(error);
});

instanceAxiosWithToken.interceptors.response.use(function (response) {
    console.log('config-interseptor==>', response)
    if (response.status === 200) {

        return response.data;
    } else {
        dispatch(showModal('عدم دریافت اطلاعات ...'));
    }
}, function (error) {
    return Promise.reject(error);
});