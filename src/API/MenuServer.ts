import axios from "axios";

interface Menu{
    id: number
}
export default class MenuServer{
    static async MenPage(){
        const response =  await axios.get("https://run.mocky.io/v3/53d37ea0-3e11-45ef-930d-bf2a4132bec2")
        return response.data
    }
}