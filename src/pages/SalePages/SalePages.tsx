import './SalePages.css'
import {useTypeSelector} from "../../hooks/useTupeSelecrot";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getSaleAction} from '../../redux/actions/SaleAcrion';
import {Loader} from "../../components/bloks/Loader/Loader";
import {saleTypes} from "../../types/saleTypes";
import {SalePageImtem} from "./SalePageItems/SalePagesItems";

export const SalePages = () => {

    const {loading, sale} = useTypeSelector(
        (state) => state.sale);

    const dispatch = useDispatch()
    useEffect(() => {
        getSaleAction()(dispatch)
    }, [dispatch]);


    return (
        <div className="SalePagesContainder">
            <div className="SalePagesContainder">
                <h1>Акції</h1>
            </div>
            <div className="SalePagesContainder">
                {loading ? <Loader/> : null}
                {sale.map((item: saleTypes) => (
                    <SalePageImtem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imgSale={item.imgSale}
                        tamerSale={item.timer}
                    />
                ))}
            </div>
        </div>
    );
};

