import "./ProductSelection.css"
import React, {FormEvent, useEffect, useState} from "react";
import {MayButton} from "../../UL/MayButton/MayButton";


interface ProductSelectionInterfase {
    product: any
}

export const ProductSelection: React.FC<ProductSelectionInterfase> = ({product}) => {
    const [test, setTest] = useState()

    useEffect(() => {
        product.prod.map((pr: any) => (
            setTest((pr))
            //  bla = pr.filter((bla: any) => bla.length > 1)
        ))
    }, [])

    let bla = product.prod.filter((bla: any) => bla.id > 1)


    const [size, setSize] = useState(product.prod[0].size)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(size)
    }
    const handleClick = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
        setSize(e.currentTarget.value)
    }


    return (
        <>

            {product.prod.length >= 6
                ?
                <form onSubmit={handleSubmit}>
                    <label>
                        <select value={size} onChange={handleClick}>
                            {product.prod.map((item: any) => (
                                <option value={item.size} className="ProductSize" key={item.id}>
                                    {item.size} мл.
                                </option>
                            ))
                            }
                        </select>
                        <button type='submit'>Submit</button>
                    </label>
                </form>
                :
                <form onSubmit={handleSubmit} className="ProductSizeContainer">
                    {product.prod.map((item: any) => (
                        <div className="ProductSize" key={item.id}>
                            <input
                                onClick={handleClick}
                                type="button"
                                className='custom-checkbox'
                                name={"lable"}
                                value={item.size}
                            />
                        </div>
                    ))}
                    <button type='submit'>Submit</button>
                </form>
            }
            <del>{product.prise} мл.</del>
            <div>{product.newPrise} грн.</div>
        </>
    )
};