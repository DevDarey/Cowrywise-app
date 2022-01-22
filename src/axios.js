import axios from 'axios'

const DOMAIN = ""
let baseURL = "https://api.unsplash.com"


export default axios.create({
    DOMAIN,
    baseURL: baseURL
})
