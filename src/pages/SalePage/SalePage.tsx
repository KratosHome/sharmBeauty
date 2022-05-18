import {useTypeSelector} from "../../hooks/useTupeSelecrot";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getSaleAction} from "../../redux/actions/SaleAcrion";
import {useParams} from "react-router";
import {saleTypes} from "../../types/saleTypes";
import {Loader} from "../../components/bloks/Loader/Loader";
import {SalePItem} from "./SalePItem/SalePItem";
import "./SalePage.css"

export const SalePage = () => {
    const {loading, sale} = useTypeSelector(
        (state) => state.sale);

    const dispatch = useDispatch()
    useEffect(() => {
        getSaleAction()(dispatch)
    }, [dispatch]);

    const pageId = useParams();
    const getSale = sale.filter(
        (word: saleTypes) => word.id == pageId.id
    );

    console.log(getSale)

    return (
        <div className="SalePageCont">
            {loading ? <Loader/> : null}
            {getSale.map((item: any) => (
                <SalePItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imgSale={item.imgSale}
                    tamerSale={item.timer}
                />
            ))}
        </div>
    )
};