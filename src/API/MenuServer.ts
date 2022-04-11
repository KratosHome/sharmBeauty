import axios from "axios";

interface Menu{
    id: number
}
export default class MenuServer{
    static async MenPage(){
        const response =  await axios.get("https://run.mocky.io/v3/a25b766c-e47d-4ab4-ab6a-747f627b1295")
        return response.data
    }
}