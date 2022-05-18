import "./SalePageItems.css"
import {useTimer} from "../../../hooks/useTimer";
import {Link} from "react-router-dom";

interface SalePageImtenIn {
    title: string,
    imgSale: string
    tamerSale: any
    id: string
}


export const SalePageImtem: React.SFC<SalePageImtenIn> = ({title, imgSale, tamerSale, id}) => {

    let [timer] = useTimer(tamerSale.month, tamerSale.day, tamerSale.year)

    return (
        <>
            <Link to={`/promotions/${id}`}>
                <div className='salePageConteiner'>
                    <h2>{title}</h2>
                    <div className='salePageTimer'>
                        {timer.seconds || timer.minutes || timer.hours || timer.days > 1
                            ?
                            <>
                                <span>До кінця акції </span>
                                <span>{timer.days} дні </span>
                                <span>{timer.hours} годин </span>
                                <span>{timer.minutes}.</span>
                                <span>{timer.seconds} хв.</span>
                            </>
                            : <span>Акція закінчилась 😢</span>
                        }

                    </div>
                    <div>
                        <img className='saleImg' src={imgSale} alt={title}/>
                    </div>
                </div>
            </Link>
        </>
    )
};