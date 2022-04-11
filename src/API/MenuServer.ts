import axios from "axios";

interface Menu{
    id: number
}
export default class MenuServer{
    static async MenPage(){
        const response =  await axios.get("https://run.mocky.io/v3/a2540c5f-fe5b-4a7f-adbe-76b701e3de19")
        return response.data
    }
}