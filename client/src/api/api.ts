<<<<<<< HEAD
export const SERVER = 'http://127.0.0.1:3000/'
=======
import axios from 'axios'

const $host = axios.create({
    baseURL: process.env.API_URL
})


export {
    $host
}
>>>>>>> butt
