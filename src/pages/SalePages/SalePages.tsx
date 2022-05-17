import './SalePages.css'
import {useTypeSelector} from "../../hooks/useTupeSelecrot";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getSaleAction} from '../../redux/actions/SaleAcrion';
import {useParams} from "react-router";
import {Loader} from "../../components/bloks/Loader/Loader";
import {saleTypes} from "../../types/saleTypes";

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
                    <div key={item.id} className='salePageConteiner'>
                        <h2>{item.title}</h2>
                        <div>
                            <img className='saleImg' src={item.imgSale} alt={item.title}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

