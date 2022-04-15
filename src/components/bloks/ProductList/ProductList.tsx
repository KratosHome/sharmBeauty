import "./ProductList.css"

interface ProductType{
    product: any,
}

export const ProductList: React.FC <ProductType>= ({product}:ProductType) => {

    return (
        <div className="ProductListContainer row1 row2">
            <img className="ProductListImg" src={product.img} />
            <div>{product.name}</div>
            <div>{product.prise} грн.</div>
            <div>{product.size} мл.</div>
        </div>
    )
};