import axios from "axios";

interface Menu{
    id: number
}
export default class ProductServer{
    static async ProductPage(){
        const response =  await axios.get("https://run.mocky.io/v3/fc924f49-360c-446b-8400-0709507133e5")
        return response.data
    }
}