import "./ProductSelection.css"
import React, {useEffect, useRef, useState} from "react";
import {MayButton} from "../../UL/MayButton/MayButton";
import {useDispatch, useSelector} from "react-redux";
import {rootState} from "../../../redux/reducers/rootReduser";
import {cardActions} from "../../../redux/actions/cardAcrion";


interface ProductSelectionInterfase {
    product: any
    setPercentageDiscount: any

}

export const ProductSelection: React.FC<ProductSelectionInterfase> = ({
                                                                          product,
                                                                          setPercentageDiscount,

                                                                      }) => {

        const state = useSelector((state: rootState) => {
            return state
        })


        const dispatch = useDispatch() // відправляти

        const [size, setSize] = useState(product.prod[0].size)
        const ref = useRef()

        const [id, setId] = useState(product.prod[0].id)

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(cardActions(size))
        }


        const handleClick = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
            setSize(e.currentTarget.value)
            setId(e.currentTarget.id)
        }

        const [filterPrise, setFilterPrise] = useState([])
        useEffect(() => {
            let filter = product.prod.filter((bla: any) => bla.size === size)
            let prise = filter.map((e: any) => ((e.prise - e.newPrise) / e.prise) * 100)
            setPercentageDiscount(Math.trunc(prise))
            setFilterPrise(filter)
        }, [size])
        return (
            <>
                <div>
                    {filterPrise.map((item: any) => (
                        <div key={item.id} className="prise">
                            <del>{item.prise} грн.</del>
                            <div className="newPrise">{item.newPrise} грн.</div>
                        </div>))}
                </div>
                {product.prod.length >= 6
                    ?
                    <form onSubmit={handleSubmit}>
                        <div>
                            {product.prod.map((item: any) => (
                                id === item.id ? <div key={item.id}>{item.id}</div> : null
                            ))}
                        </div>
                        <label className="ProductSizeContainer2">
                            <select value={size} onChange={handleClick}>
                                {product.prod.map((item: any) => (
                                    <option value={item.size} className="ProductSize" key={item.id}>
                                        {item.size} мл.
                                    </option>
                                ))
                                }
                            </select>
                            <div>bla</div>
                            <MayButton>ДО КОШИКУ</MayButton>
                        </label>
                    </form>
                    :
                    <form onSubmit={handleSubmit}>
                        <div>
                            {product.prod.map((item: any) => (
                                id === item.id ? <div key={item.id}>{item.id}</div> : null
                            ))}
                        </div>
                        <div className="ProductSizeContainer">
                            {product.prod.map((item: any) => (
                                <input
                                    key={item.id}
                                    id={item.id}
                                    className={item.size === size ? "ProductSize ProductSizechosen" : "ProductSize"}
                                    onClick={handleClick}
                                    type="button"
                                    name={"lable"}
                                    value={item.size}
                                />
                            ))}
                        </div>
                        <MayButton>ДО КОШИКУ</MayButton>
                    </form>
                }

            </>
        )
    }
;