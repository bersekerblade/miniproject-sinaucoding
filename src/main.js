import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

//import axios
//generate global base url
const axiosInstance = axios.create({
    baseURL: 'http://159.223.57.121:8090',
})

//untuk set header authorization, jika bukan login atau register
const checkAuthInterceptor = (config) => {
    if(!config.url.includes('login') || !config.url.includes('register')){
        //untuk get token yang di save di local storage waktu login
        const accessToken = window.localStorage.getItem('accessToken') || ''
        if(accessToken) {
            config.headers.Authorization = 'Bearer ' + accessToken

            
        }
    }
    return config
}


//buat listen setiap kali ada req ke server
axiosInstance.interceptors.request.use(function(config){
    config = checkAuthInterceptor(config)
    return config
}, function (error) {
    return Promise.reject(error)
})

const app = createApp(App)
app.config.globalProperties.$axios = {...axiosInstance}
app.use(store)
app.use(router)
app.mount('#app')

