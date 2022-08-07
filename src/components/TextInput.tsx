import { memo } from "react";
import type { Text } from "../tools/FormTypes";
import { makeStyles } from "../theme";
import { useFormState } from "react-hook-form";
import { Error } from "./Error";


type TextInputProps = Text;

export const TextInput = memo((props: TextInputProps) => {

    const {
        ariaLabel,
        register,
        required,
        maxLength,
        maxLengthErrorMessage,
        requiredErrorMessage,
        minLength,
        minLengthErrorMessage,
        pattern,
        patternErrorMessage,
        control,
        name,
        id
    } = props;


    const { errors } = useFormState({ control });

    const { classes } = useStyles();

    return <div className={classes.root}>
        <h4>
            {required !== undefined && "*"} {name}
        </h4>

        <input
            className={classes.input}
            type="text"
            aria-label={ariaLabel}
            {...register(props.id, {
                required,
                maxLength,
                minLength,
                pattern
            })}
        />

        <Error 
            possibleErrors={[
                {
                    "type": "required",
                    "message": requiredErrorMessage ?? "Field is required !"
                },
                {
                    "type": "maxLength",
                    "message": maxLengthErrorMessage ?? "Input exceeds max length !"
                },
                {
                    "type": "minLength",
                    "message": minLengthErrorMessage ?? "Input does not meet min length !"
                },
                {
                    "type": "pattern",
                    "message": patternErrorMessage ?? "Input does not match required pattern !"
                }
            ]}
            errors={errors}
            inputId={id}
        />
    </div>

})


const useStyles = makeStyles()({
    "root": {
        "display": "flex",
        "flexDirection": "column"
    },
    "input": {
        "padding": 10,
        "minWidth": 200,
        "maxWidth": 200
    },
    "errorMsg": {
        "color": "red",
        "maxWidth": 200
    }
})