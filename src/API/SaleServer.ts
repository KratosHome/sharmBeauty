import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://run.mocky.io/v3/10c1d963-0738-4104-bd50-d7c39ad7d0cb"
})

export const SaleServer = {
    getSale() {
        return instance.get("")
    }
}