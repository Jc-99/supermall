import axios from "axios";

export function request(config) {
    const instance = axios.create({
        // baseURL: 'http://localhost:8081',
        baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1',
        timeout: 50000,
    })

    //2.axios的拦截器
    //2.1请求拦截器的作用
    instance.interceptors.request.use(config => {
        //在发送请求之前可以做一些事情
        return config
    }, err => {
        console.log(err)
    })

    //2.2响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    //3.发送真正的网络请求
    return instance(config)
}