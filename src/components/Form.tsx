import { memo } from "react";
import { useForm } from "react-hook-form";
import type { Form as FormType } from "../tools/FormTypes";
import { makeStyles } from "../theme";
import { Input } from "./Input";


type FormProps = FormType


export const Form = memo((props: FormProps) => {

    const { label, elements, submitText, onSubmit } = props;

    const { register, handleSubmit, control, unregister, setValue } = useForm();

    const { classes } = useStyles();

    return <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>

        {
            label !== undefined && <h2>{label}</h2>
        }
        {
            elements &&
            elements.map(input => {
                if(input.type === "reactNode"){
                    return <div key={input.id}>
                        {
                            input.node
                        }
                    </div>
                }
                return <Input
                    input={input}
                    register={register}
                    unregister={unregister}
                    key={input.name}
                    control={control}
                    setValue={setValue}
                />
            })

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