import { productType } from "../redux/type/getProductType"

export interface saleTypes {
    id: string
    title: string
    data: string
    imgSale: string
    product: productType[]
}