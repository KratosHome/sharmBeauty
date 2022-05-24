import "./CardPage.css"
import {useTypeSelector} from "../../hooks/useTupeSelecrot";
import {MayInput} from "../../components/UL/MayInput/MayInput";
import {MayButton} from "../../components/UL/MayButton/MayButton";
import {useForm} from "react-hook-form";

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

    const emailBla = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });

    const {product} = useTypeSelector(
        (state) => state.product);

    return (
        <div className="cardContainer">
            <div>
                <h1>Оформлення замовлення</h1>
                <section className="carСlientInfo">
                    <h2>Ваші контактні дані</h2>
                    <form onSubmit={onSubmit}>
                        <MayInput
                            label={"surname"}
                            labelText={"Фамілія"}
                            type={"text"}
                            register={register}
                            required={"Введіть Фамілію"}
                            patternValue={emailBla}
                            patternMessage={"Введіть правельну фамілію"}
                            errors={errors}
                        />
                        <MayButton>fdsv</MayButton>
                        <label htmlFor="surname">Фамілія</label>
                        <input id="surname" type="text"/>
                        <label htmlFor="name">Ім'я</label>
                        <input id="name" type="text"/>
                    </form>
                    <div>
                        <label htmlFor="mobile">Мобільний телефон</label>
                        <input id="mobile" type="text"/>
                        <label htmlFor="email">Електронна пошта</label>
                        <input id="email" type="text"/>
                    </div>
                </section>
                <section>
                    <h3>Ваше Замовлення</h3>
                </section>
            </div>
            <div>
                <h2>Ітоги</h2>
                <div>n товар на сумму</div>
                <div>стоімость доставки</div>
                <div>До спалти</div>
                <MayButton>Заказ підтвержую</MayButton>
            </div>
        </div>
    )
};