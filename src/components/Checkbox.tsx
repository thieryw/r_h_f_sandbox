import { memo, useState } from "react";
import type { Checkbox as CheckboxType } from "../tools/FormTypes"
import { Input } from "./Input";
import { useConstCallback } from "powerhooks/useConstCallback";
import { makeStyles } from "../theme";


export type CheckboxProps = CheckboxType;

export const Checkbox = memo((props: CheckboxProps) => {
    const { 
        ariaLabel, 
        name, 
        register, 
        dependentInputs, 
        isChecked, 
        control,
        id,
        unregister
    } = props;
    const [
        areDependentInputsDisplayed, 
        setAreDependentInputsDisplayed
    ] = useState(isChecked);

    const onClick = useConstCallback(() => {
        if (dependentInputs === undefined) {
            return;
        }
        setAreDependentInputsDisplayed(!areDependentInputsDisplayed);
        if (!areDependentInputsDisplayed) {
            return;
        }
        unregister(id)

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
                {...register(
                    dependentInputs === undefined ||
                        !areDependentInputsDisplayed ? id : `${id}.value`
                )}
            />

        </div>

        {
            dependentInputs !== undefined && areDependentInputsDisplayed &&
            dependentInputs.map(input => <Input
                key={input.name}
                input={{
                    ...input,
                    "id": `${id}.${input.id}`
                }}
                register={register}
                unregister={unregister}
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