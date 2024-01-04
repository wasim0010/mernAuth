import axios from "axios"

 const instance = axios.create({
baseURL:"http://localhost:3000"
 })



 export  const post =(url, data) =>
    instance.post(url,data)
 