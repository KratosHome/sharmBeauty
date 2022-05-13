import "./ProductsCatalog.css";
import {useEffect} from "react";
import {ProductList} from "../../components/bloks/ProductList/ProductList";
import {Loader} from "../../components/bloks/Loader/Loader";
import {useDispatch} from "react-redux";
import {getProductAction} from "../../redux/actions/getProdut";
import {productTypes} from "../../types/productTypes";
import {useTypeSelector} from "../../hooks/useTupeSelecrot";

export const ProductsCatalog = () => {
    const {loading, products} = useTypeSelector(
        (state) => state.getProduct);

    const dispatch = useDispatch()
    useEffect(() => {
        getProductAction()(dispatch)
    }, [dispatch]);

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
                    {loading ? <Loader/> : null}
                    {products.map((prod: productTypes) => (
                        <ProductList key={prod.name} product={prod}/>))}
                </div>
            </div>
        </>
    );
};
