import {useEffect, useState} from "react";
import "./mayInput.css"


interface inputeProps {
    label: string;
    labelText: string;
    type: string
    register: any
    required: string
    patternValue: any
    patternMessage: string
    errors: any
}

export const MayInput: React.FC<inputeProps> = ({
                                                    label,
                                                    labelText,
                                                    type,
                                                    register,
                                                    required,
                                                    patternValue,
                                                    patternMessage,
                                                    errors
                                                }) => {

    const [getError, setGetError] = useState<any>()

    useEffect(() => {
        for (const [key, value] of Object.entries(errors)) {
            setGetError(value)
        }
    }, [errors])

    console.log(getError)
    return (
        <div className="mayInputContainer">
            <label htmlFor={label}>{labelText}</label>
            <input
                id={label}
                type={type}
                {...register(label, {
                    required: patternMessage,
                    pattern: {
                        value: patternValue,
                        message: patternMessage,
                    },
                })}
            />
            {getError && <div>{getError.message}</div>}
        </div>
    );
};

