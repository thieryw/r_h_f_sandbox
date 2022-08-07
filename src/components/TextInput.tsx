import { memo } from "react";
import type { Text } from "../tools/FormTypes";
import { makeStyles } from "../theme";
import { useFormState } from "react-hook-form";


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
        {
            [
                {
                    "errorType": "required",
                    "errorMessage": requiredErrorMessage ?? "Field is required !"
                },
                {
                    "errorType": "maxLength",
                    "errorMessage": maxLengthErrorMessage ?? "Input exceeds max length !"
                },
                {
                    "errorType": "minLength",
                    "errorMessage": minLengthErrorMessage ?? "Input does not meet min length !"
                },
                {
                    "errorType": "pattern",
                    "errorMessage": patternErrorMessage ?? "Input does not match required pattern !"
                }
            ].map(({ errorMessage, errorType }) => {
                const error = (()=>{
                    if(!id.includes(".")){
                        return errors[id];
                    }

                    const [ a, b] = id.split(".");
                    const err =  errors[a];

                    if(err === undefined){
                        return err;
                    }
                    return err[b];

                })()
                return (
                    error && error?.type as any === errorType && <p className={classes.errorMsg} key={errorMessage}>{errorMessage}</p>
                )
            })
        }
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