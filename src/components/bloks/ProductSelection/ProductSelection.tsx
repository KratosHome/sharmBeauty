import "./ProductSelection.css"
import React, {useEffect, useState} from "react";
import {MayButton} from "../../UL/MayButton/MayButton";
import {useDispatch, useSelector} from "react-redux";
import {addInCard, cardActions} from "../../../redux/actions/cardAcrion";
import {rootState} from "../../../redux/reducers/rootReduser";


interface ProductSelectionInterfase {
    product: any
    setPercentageDiscount: any

}

export const ProductSelection: React.FC<ProductSelectionInterfase> = ({
                                                                          product,
                                                                          setPercentageDiscount,

                                                                      }) => {


        const [size, setSize] = useState(product.prod[0].size)
        const [id, setId] = useState(product.prod[0].id)

        const [filterSize, setFilterSize] = useState([])
        const [getProduct, setGetProduct] = useState<any>(1)
        useEffect(() => {
            let filter = product.prod.filter((bla: any) => bla.size === size)
            let prise = filter.map((e: any) => ((e.prise - e.newPrise) / e.prise) * 100)
            setPercentageDiscount(Math.trunc(prise))
            setFilterSize(filter)
            filter.map((e: any) => setGetProduct(e))
        }, [size])


        const [filterId, setFilterId] = useState([])
        useEffect(() => {
            let filter = product.prod.filter((bla: any) => bla.id === id)
            setFilterId(filter)
        }, [id])


        const handleClick = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
            setSize(e.currentTarget.value)
            setId(e.currentTarget.id)

        }

        const handleClick1 = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
            setSize(e.currentTarget.value)
            console.log((e.target as any))
        }

        const dispatch = useDispatch()
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(cardActions(product))
            dispatch(addInCard(id))
        }

        const state = useSelector((state: rootState) => {
            return state.product.addToCard
        })


        return (
            <>
                <div>
                    {filterSize.map((item: any) => (
                        <div key={item.id} className="prise">
                            <del>{item.prise} грн.</del>
                            <div className="newPrise">{item.newPrise} грн.</div>
                        </div>))}
                    {filterId.map((item: any) => (
                        <div key={item.id}>
                            {item.id}
                        </div>
                    ))}
                </div>
                {product.prod.length >= 6
                    ?
                    <form onSubmit={handleSubmit}>
                        <label className="ProductSizeContainer2">
                            <select onChange={handleClick1}>
                                {product.prod.map((item: any) => (
                                    <option
                                        value={item.size}
                                        className="ProductSize"
                                        key={item.id}
                                        id={item.id}
                                    >{item.size}</option>
                                ))
                                }
                            </select>
                            <MayButton>ДО КОШИКУ</MayButton>
                        </label>
                    </form>
                    :
                    <form onSubmit={handleSubmit}>
                        <div className="ProductSizeContainer">
                            {product.prod.map((item: any) => (
                                <div key={item.id}>
                                    <input
                                        id={item.id}
                                        className={item.size === size ? "ProductSize ProductSizechosen" : "ProductSize"}
                                        onClick={handleClick}
                                        type="button"
                                        name={"lable"}
                                        key={item.id}
                                        value={item.size}
                                    />
                                </div>
                            ))}
                        </div>
                        {
                            state.some((item: any) => item === id)
                                ? <MayButton disabled TruFolse={true}>
                                    У КОШИКУ
                                </MayButton>
                                : <MayButton>
                                    ДО КОШИКУ
                                </MayButton>
                        }

                    </form>
                }

            </>
        )
    }
;