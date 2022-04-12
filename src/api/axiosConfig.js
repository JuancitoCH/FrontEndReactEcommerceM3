import axios from 'axios'

const instance = axios.create({
    baseURL:"https://eccomerce-346201.rj.r.appspot.com/"
})

const get= async (url)=>{
    return await instance.get(url,{
        withCredentials:true
    })
}
const post= async (url,data)=>{
    return await instance.post(url,data,{
        withCredentials:true
    })
}
const del= async (url,data)=>{
    return await instance.delete(url,data,{
        withCredentials:true,
        
        
    })
}

export default instance
export { get,post,del }