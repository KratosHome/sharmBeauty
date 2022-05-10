
export enum GetProductTypes {
    SET_PRODUCT_ENUM = "SET_PRODUCT_ENUM",
}

interface setProduct {
    type: GetProductTypes.SET_PRODUCT_ENUM;
    product: any
}
export type productType = setProduct