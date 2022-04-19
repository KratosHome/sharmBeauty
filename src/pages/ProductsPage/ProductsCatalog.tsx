import "./ProductsCatalog.css";
import {useState, useEffect} from "react";
import ProductServer from "../../API/ProductServer";
import {ProductList} from "../../components/bloks/ProductList/ProductList";

type categories = {}

interface ProductPage {
    brend: string,
    name: string,
    id: number,
    prise: number,
    newPrise: number,
    size: number,
    count: number,
    grade: number,
    categories: any[],
    countri: string,
    female: string,
    img: string
}

export const ProductsCatalog: React.SFC<{}> = () => {
    const [getProduct, setGetProduct] = useState<ProductPage[]>([]);

    async function fetchProducts() {
        const getProduct = await ProductServer.ProductPage();
        setGetProduct(getProduct);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="row1 row2">
                <h1 className="ProductH1">Макіяж</h1>
                <div className="product_sorted">
                    Сортировка по:
                    <select>
                        <option>bla</option>
                        <option>bla</option>
                    </select>
                </div>
            </div>
            <div className="productContainer row1 row2">
                <div className="filter">filter</div>
                <div className="ProductsCatalogProducts">
                    {getProduct.map(prod => (
                        <ProductList key={prod.name} product={prod}/>))}
                </div>
            </div>
        </>
    );
};
