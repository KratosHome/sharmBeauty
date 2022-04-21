import axios from "axios";


export default class ProductServer{
    static async ProductPage(){
        const response =  await axios.get("https://run.mocky.io/v3/a77852ec-f05a-4550-aa8d-f9b3d5badc0b")
        return response.data
    }
}