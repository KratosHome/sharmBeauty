import "./ProductСharacteristics.css"

interface ProductСharacteristicsType {
    item: any;
}

export const ProductСharacteristics: React.FC<ProductСharacteristicsType> = ({item}) => {

    return (
        <div className="ProductСharacteristics">
            <h1>{item.name}</h1>
            <div>Бренд: <span>{item.brend}</span></div>
            <div>Країна: <span>{item.countri}</span></div>
            <div>Стать: <span>{item.female}</span></div>
            <div>Тип аромату: <span>{item.aroma_type}</span></div>
            <div>Начальна нота: <span>{item.initial_note}</span></div>
            <div>Нота сердця: <span>{item.heart_note}</span></div>
            <div>Кінцева нота: <span>{item.final_note}</span></div>
        </div>
    )
};