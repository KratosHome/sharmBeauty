import axios from "axios";


export default class ProductServer{
    static async ProductPage(){
        const response =  await axios.get("https://run.mocky.io/v3/e312a749-4f00-480f-8be1-b22a8b2294ca")
        return response.data
    }
}