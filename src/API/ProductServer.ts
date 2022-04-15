import axios from "axios";

interface Menu{
    id: number
}
export default class ProductServer{
    static async ProductPage(){
        const response =  await axios.get("https://run.mocky.io/v3/38467a22-c803-4787-aecb-6d484ef107d5")
        return response.data
    }
}