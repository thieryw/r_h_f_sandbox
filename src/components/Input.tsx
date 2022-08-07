import { memo } from "react";
import { Checkbox } from "./Checkbox"
import { TextInput } from "./TextInput";
import { Input as InputType } from "../tools/FormTypes";
import type { Controls } from "../tools/FormTypes";



export type InputProps = {
    input: InputType;
} & Controls;

export const Input = memo((props: InputProps) => {

    const { input, ...rest } = props;

    return (
        <>
            {
                (() => {
                    switch (input.type) {
                        case "text": return <TextInput
                            {...input}
                            {...rest}

                        />;
                        case "checkbox": return <Checkbox
                            {...input}
                            {...rest}
                        />
                    }
                })()

            }
        </>
    )

})