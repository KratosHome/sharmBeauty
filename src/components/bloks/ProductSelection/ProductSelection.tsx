import "./ProductSelection.css"
import {FormEvent, useEffect, useState} from "react";
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
    const handleClick = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setSize(+e.target.value)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                {product.prod.length >= 6
                    ?
                    <label>
                        <select value={size} onChange={handleClick}>
                            {product.prod.map((item: any) => (
                                <option value={item.size} className="ProductSize" key={item.id}>
                                    {item.size} мл.
                                </option>
                            ))
                            }
                        </select>
                    </label>
                    :
                    <div onClick={(e) => console.log(e.target)} className="ProductSizeContainer">
                        {product.prod.map((item: any) => (
                            <div className="ProductSize" key={item.id}>
                                <input
                                    type="checkbox"
                                    className='custom-checkbox'
                                    name={"lable"}
                                    onChange={handleClick}
                                    value={item.size}
                                />
                                <label htmlFor={"lable"}>{item.size} мл</label>
                            </div>
                        ))}
                    </div>

                }

                <button type='submit'>Submit</button>
            </form>


            <del>{product.prise} мл.</del>
            <div>{product.newPrise} грн.</div>
        </>
    )
};