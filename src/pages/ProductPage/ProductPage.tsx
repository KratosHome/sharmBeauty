import "./ProductPage.css"
import {useParams} from "react-router";
import {useEffect} from "react";
import {ProductPageItem} from "./ProductPageItem/ProductPageItem";
import {Loader} from "../../components/bloks/Loader/Loader";
import {productTypes} from "../../types/productTypes";
import {useDispatch} from "react-redux";
import {getProductAction} from "../../redux/actions/getProdut";
import {useTypeSelector} from "../../hooks/useTupeSelecrot";

const ProductPage = () => {
    const {loading, products} = useTypeSelector(
        (state) => state.getProduct);

    const dispatch = useDispatch()
    useEffect(() => {
        getProductAction()(dispatch)
    }, []);

    const pageId = useParams();
    const getProductInProduct = products.filter(
        (word: productTypes) => word.link === pageId.id
    );

    return (
        <div>
            {loading ? <Loader/> : null}
            {getProductInProduct.map((item: productTypes) => (
                <ProductPageItem key={item.name} item={item}/>
            ))}
        </div>
    )
}

export default ProductPage