import "./ProductImg.css"
import {useState} from "react";

interface ProductImgType {
    img: string[]
}

export const ProductImg: React.FC<ProductImgType> = ({img}) => {
    const [imgCheng, setImgCheng] = useState(img[0]);
    return (
        <div className="productImgTest">
            <img src={imgCheng} className="ProductImgFirst" alt="img change"/>
            {img.map((img, index) => (
                <img
                    className="ProductImgAther"
                    style={{border: imgCheng === img ? "1px solid #2dbbf0" : ""}}
                    key={index}
                    src={img}
                    alt={img}
                    onClick={() => setImgCheng(img)}
                />
            ))}
        </div>
    );
};