import { memo } from "react";
import { Checkbox } from "./Checkbox"
import { TextInput } from "./TextInput";
import { Input as InputType } from "../tools/FormTypes";
import type { Controls } from "../tools/FormTypes";



export type InputProps = {
    input: InputType;
} & Controls;

export const Input = memo((props: InputProps) => {

    const { input, register, control } = props;

    return (
        <>
            {
                (() => {
                    switch (input.type) {
                        case "text": return <TextInput
                            {...input}
                            register={register}
                            key={input.name}
                            control={control}

                        />;
                        case "checkbox": return <Checkbox
                            {...input}
                            register={register}
                            control={control}
                        />
                        default: return <input
                            aria-label={input.ariaLabel}
                            type={input.type}
                            key={input.name}
                            {...register(input.name)}
                        />


                    }
                })()

            }
        </>
    )

})