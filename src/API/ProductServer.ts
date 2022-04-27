import axios from "axios";


export default class ProductServer{
    static async ProductPage(){
        const response =  await axios.get("https://run.mocky.io/v3/451e0284-9783-4e41-b797-f7100fa696e1")
        return response.data
    }
}