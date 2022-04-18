import axios from "axios";

interface Menu{
    id: number
}
export default class ProductServer{
    static async ProductPage(){
        const response =  await axios.get("https://run.mocky.io/v3/642d7bbe-9437-436f-a16e-afdca57889e2")
        return response.data
    }
}