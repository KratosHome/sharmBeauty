import "./ProductPage.css"
import {useParams} from "react-router";

const ProductPage = () => {
    const pageId = useParams();

    return (
        <div>
            <div></div>
            <div>
                <div>Коментарій</div>
                <div>Покупок на сайте</div>
            </div>
        </div>
    )
}

export default ProductPage