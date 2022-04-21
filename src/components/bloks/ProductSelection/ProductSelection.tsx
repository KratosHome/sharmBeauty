import "./ProductSelection.css"
import React, {useEffect, useState} from "react";
import {MayButton} from "../../UL/MayButton/MayButton";


interface ProductSelectionInterfase {
    product: any
    setPercentageDiscount: any

}

export const ProductSelection: React.FC<ProductSelectionInterfase> = ({
                                                                          product,
                                                                          setPercentageDiscount,

                                                                      }) => {
        const [size, setSize] = useState(product.prod[0].size)

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(size)
        }
        const handleClick = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
            setSize(e.currentTarget.value)
        }

        const [filterPrise, setFilterPrise] = useState([])

        useEffect(() => {
            let filter = product.prod.filter((bla: any) => bla.size === size)
            let prise = filter.map((e: any) => ((e.prise - e.newPrise) /  e.prise) * 100)
            setPercentageDiscount(Math.trunc(prise))
            console.log(filter)
            setFilterPrise(filter)
        }, [size, product, setPercentageDiscount])


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
                        <label className="ProductSizeContainer2">
                            <select value={size} onChange={handleClick}>
                                {product.prod.map((item: any) => (
                                    <option value={item.size} className="ProductSize" key={item.id}>
                                        {item.size} мл.
                                    </option>
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
                                <input
                                    key={item.id}
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