import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://run.mocky.io/v3/216816ca-0b94-4ead-b0f9-870b24119793"
})

export const SaleServer = {
    getSale() {
        return instance.get("")
    }
}