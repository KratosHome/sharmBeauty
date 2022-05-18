import {useTypeSelector} from "../../hooks/useTupeSelecrot";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getSaleAction} from "../../redux/actions/SaleAcrion";
import {useParams} from "react-router";
import {saleTypes} from "../../types/saleTypes";



export const SalePage = () => {
    const {loading, sale} = useTypeSelector(
        (state) => state.sale);

    const dispatch = useDispatch()
    useEffect(() => {
        getSaleAction()(dispatch)
    }, [dispatch]);

    const pageId = useParams();
    const getSale = sale.filter(
        (word: saleTypes) => word.id === pageId.id
    );

    console.log(sale)

    return (
        <>
            text
        </>
    )
};