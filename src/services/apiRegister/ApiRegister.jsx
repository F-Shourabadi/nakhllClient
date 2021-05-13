import { instanceAxiosWithToken, instanceAxiosWithOutToken } from './../axios/AxiosRegister';
const  ApiRegister = () => {
    return {
        apiRequest: (data, method, url, token) => token
            ? instanceAxiosWithToken({ method, url, data })
            : instanceAxiosWithOutToken({ method, url, data }),
    }
}

export default ApiRegister;