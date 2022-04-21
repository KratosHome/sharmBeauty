import axios from "axios";

interface Menu{
    id: number
}
export default class ProductServer{
    static async ProductPage(){
        const response =  await axios.get("https://run.mocky.io/v3/5bea8d0e-45fa-4a09-b188-b2292212dd63")
        return response.data
    }
}