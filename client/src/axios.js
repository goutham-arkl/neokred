import axios from 'axios'


    const header=localStorage.getItem('accessToken')
    ?{"token":"Bearer "+localStorage.getItem('accessToken')}
    :{"token":"Bearer "}

 



const instance=axios.create({
    baseURL:"https://xf6n4h-5000.csb.app/api/auth",
    headers:header,
    withCredentials:true
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default instance