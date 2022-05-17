import "./SalePageItems.css"
import {useTimer} from "../../../hooks/useTimer";
import {useEffect, useState} from "react";

interface SalePageImtenIn {
    title: string,
    imgSale: string
    tamerSale: any
}


export const SalePageImtem: React.SFC<SalePageImtenIn> = ({title, imgSale, tamerSale}) => {

    let [timer] = useTimer(tamerSale.month, tamerSale.day, tamerSale.year)

    return (
        <>
            <div className='salePageConteiner'>
                <h2>{title}</h2>
                <div className='salePageTimer'>
                    {timer.seconds || timer.minutes || timer.hours || timer.days > 1
                        ?
                        <>
                            <span>До кінця акції </span>
                            <span>{timer.days} днів </span>
                            <span>{timer.hours} годин </span>
                            <span>{timer.minutes}.</span>
                            <span>{timer.seconds} хвилин</span>
                        </>
                        : <span>Акція закінчилась 😢</span>
                    }

                </div>
                <div>
                    <img className='saleImg' src={imgSale} alt={title}/>
                </div>
            </div>
        </>
    )
};