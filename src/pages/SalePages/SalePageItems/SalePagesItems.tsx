import "./SalePageItems.css"

interface SalePageImtenIn {
    title: string,
    imgSale: string
}


export const SalePageImten: React.SFC<SalePageImtenIn> = ({title, imgSale}) => {
    return (
        <>
            <div className='salePageConteiner'>
                <h2>{title}</h2>
                <div>
                    <img className='saleImg' src={imgSale} alt={title}/>
                </div>
            </div>
        </>
    )
};