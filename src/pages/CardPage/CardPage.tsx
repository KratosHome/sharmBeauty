import "./CardPage.css"
import {MayButton} from "../../components/UL/MayButton/MayButton";
import {useForm} from "react-hook-form";
import {ContactDetails} from "./ContactDetails/ContactDetails";
import {ProductInCard} from "./ProductInCard/ProductInCard";

interface FormValues {
    email: string;
    name: string;
    surname: string;
    mobile: number;
}

export const CardPage = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormValues>({mode: "onBlur"});


    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });


    return (
        <form className="cardContainer" onSubmit={onSubmit}>
            <div>
                <h1>1 Оформлення замовлення</h1>
                <section className="carСlientInfo">
                    <h2>Ваші контактні дані</h2>
                    <ContactDetails register={register} errors={errors}/>
                </section>
                <section>
                    <h3>Ваше Замовлення</h3>
                    <ProductInCard/>
                </section>
            </div>
            <div>
                <h2>Ітоги</h2>
                <div>n товар на сумму</div>
                <div>стоімость доставки</div>
                <div>До спалти</div>
                <MayButton>Заказ підтвержую</MayButton>
            </div>
        </form>
    )
};