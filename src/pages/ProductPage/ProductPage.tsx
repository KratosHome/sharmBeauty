import "./ProductPage.css"
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import ProductServer from "../../API/ProductServer";
import {ProductPageItem} from "./ProductPageItem/ProductPageItem";
import {Loader} from "../../components/bloks/Loader/Loader";

const ProductPage = () => {
    const [getProduct, setGetProduct] = useState<any[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const getProduct = await ProductServer.ProductPage();
        setGetProduct(getProduct);
    }

    const pageId = useParams();
    const getProductInProduct = getProduct.filter(
        (word) => word.link === pageId.id
    );


    return (
        <div>
            {getProduct.length ? (
                    <>
                        {getProductInProduct.map(item => (
                            <ProductPageItem key={item.name} item={item}/>
                        ))}
                    </>
                )
                :
                (
                    <Loader/>
                )
            }
        </div>
    )
}

export default ProductPage