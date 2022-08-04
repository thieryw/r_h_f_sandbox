import { memo, useState } from "react";
import { Checkbox as CheckboxType } from "../tools/FormTypes"
import { Input } from "./Input";
import { useConstCallback } from "powerhooks/useConstCallback";
import { makeStyles } from "../theme";



export type CheckboxProps = CheckboxType;


export const Checkbox = memo((props: CheckboxProps) => {
    const { ariaLabel, name, register, dependentInputs, isChecked, control } = props;
    const [areDependentInputsDisplayed, setAreDependentInputsDisplayed] = useState(isChecked);

    const onClick = useConstCallback(() => {
        setAreDependentInputsDisplayed(!areDependentInputsDisplayed);
    })

    const { classes } = useStyles();

    return <div

        className={classes.root}
    >
        <div className={classes.primaryInputWrapper}>
            <h4>{name}</h4>
            <input
                type="checkbox"
                onClick={onClick}
                aria-label={ariaLabel}
                checked={isChecked}
                {...register(name)}
            />

        </div>
        {
            dependentInputs !== undefined && areDependentInputsDisplayed &&
            dependentInputs.map(input => <Input
                key={input.name}
                input={input}
                register={register}
                control={control}
            />)
        }
    </div>

})


const useStyles = makeStyles()({
    "root": {
        "border": "solid grey 1px",
        "padding": 10
    },
    "primaryInputWrapper": {
        "display": "flex"

    }
})