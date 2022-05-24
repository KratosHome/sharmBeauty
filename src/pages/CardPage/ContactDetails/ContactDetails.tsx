import {MayInput} from "../../../components/UL/MayInput/MayInput";
import "./ContactDetails.css"

interface ContactDetails {
    register: any
    errors: any
}

export const ContactDetails: React.FC<ContactDetails> = ({register, errors}) => {

    const nameRegularExpressions = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
    const emailRegularExpressions = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const numberRegularExpressions = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

    return (
        <div className="CardPageInput">
            <MayInput
                label={"surname"}
                labelText={"Фамілія"}
                type={"text"}
                register={register}
                required={"Введіть фамілію"}
                patternValue={nameRegularExpressions}
                patternMessage={"Введіть правельну фамілію"}
                errors={errors}
                mustBeCompleted={true}
            />
            <MayInput
                label={"name"}
                labelText={"Ім'я"}
                type={"text"}
                register={register}
                required={"Введіть ім'я"}
                patternValue={nameRegularExpressions}
                patternMessage={"Введіть правельнe ім'я"}
                errors={errors}
                mustBeCompleted={true}
            />
            <MayInput
                label={"number"}
                labelText={"Мобільний телефон"}
                type={"text"}
                register={register}
                required={"Введіть телефон"}
                patternValue={numberRegularExpressions}
                patternMessage={"Введіть правельний мобільний телефон"}
                errors={errors}
                mustBeCompleted={true}
            />
            <MayInput
                label={"email"}
                labelText={"Електронна пошта"}
                type={"text"}
                register={register}
                required={"Введіть електронну пошту"}
                patternValue={emailRegularExpressions}
                patternMessage={"Введіть правельну електронну пошту"}
                errors={errors}
                mustBeCompleted={true}
            />
        </div>
    );
};

