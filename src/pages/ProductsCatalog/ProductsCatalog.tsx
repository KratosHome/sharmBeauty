import "./ProductsCatalog.css";
import {useEffect} from "react";
import ProductServer, {ProductSetverNew} from "../../API/ProductServer";
import {ProductList} from "../../components/bloks/ProductList/ProductList";
import {Loader} from "../../components/bloks/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {rootState} from "../../redux/reducers/rootReduser";
import {getProductAction} from "../../redux/actions/getProdut";


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

    const state = useSelector((state: rootState) => {
        return state.getProduct.products
    })
    const dispatch = useDispatch()

    useEffect(() => {
        getProductAction()(dispatch)
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
                    {state.map.length ? (
                            <>
                                {state.map((prod: any) => (
                                    <ProductList key={prod.name} product={prod}/>))}
                            </>
                        )
                        :
                        <Loader/>
                    }

                </div>
            </div>
        </>
    );
};
