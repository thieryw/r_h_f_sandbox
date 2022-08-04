import { memo } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import type { Form as FormType } from "../tools/FormTypes";
import { makeStyles } from "../theme";
import { Input } from "./Input";


type FormProps = FormType & {
    onSubmit: (data: FieldValues) => void;
}


export const Form = memo((props: FormProps) => {

    const { label, inputs, submitText, onSubmit } = props;

    const { register, handleSubmit, control } = useForm();



    const { classes } = useStyles();

    return <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>

        {
            label !== undefined && <h2>{label}</h2>
        }
        {
            inputs &&
            inputs.map(input => <Input
                input={input}
                register={register}
                key={input.name}
                control={control}
            />)
        }


        <input value={submitText ?? "submit"} type="submit" />


    </form>
})


const useStyles = makeStyles()({
    "root": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "gap": 30,
        "padding": 50
    }
})