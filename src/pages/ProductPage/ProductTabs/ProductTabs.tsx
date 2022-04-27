import "./ProductTabs.css"
import {useState} from "react";
import {ProdcutDescription} from "./ProdcutDescription/ProdcutDescription";
import {TabsCharacteristic} from "./TabsCharacteristic/TabsCharacteristic";
import {ProductReviews} from "./ProductReviews/ProductReviews";
import {ProductDelivery} from "./ProductDelivery/ProductDelivery";
import {ProductPayment} from "./ProductPayment/ProductPayment";

export const ProductTabs: React.SFC<{}> = () => {
    const [tab, setTab] = useState(1);

    return (
        <div>
            <div className="ProductTabsContainer">
                <div className={tab === 1 ? "ProductTabsActiv" : "ProductTabsDizable"}
                     onClick={() => setTab(1)}>
                    опис
                </div>
                <div className={tab === 2 ? "ProductTabsActiv" : "ProductTabsDizable"}
                     onClick={() => setTab(2)}>
                    всі характеристикі
                </div>
                <div className={tab === 3 ? "ProductTabsActiv" : "ProductTabsDizable"}
                     onClick={() => setTab(3)}>
                    відгуки
                </div>
                <div className={tab === 4 ? "ProductTabsActiv" : "ProductTabsDizable"}
                     onClick={() => setTab(4)}>
                    доставка
                </div>
                <div className={tab === 5 ? "ProductTabsActiv" : "ProductTabsDizable"}
                     onClick={() => setTab(5)}>
                    оплата
                </div>
            </div>
            <ProdcutDescription tab={tab}/>
            <TabsCharacteristic tab={tab}/>
            <ProductReviews tab={tab}/>
            <ProductDelivery tab={tab}/>
            <ProductPayment tab={tab}/>
        </div>
    )
};