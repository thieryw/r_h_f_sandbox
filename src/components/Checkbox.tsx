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
        isChecked, 
        control,
        id,
        unregister,
        setValue,
        dependentElements
    } = props;
    const [
        areDependentInputsDisplayed, 
        setAreDependentInputsDisplayed
    ] = useState(isChecked);

    const onClick = useConstCallback(() => {
        if (dependentElements === undefined) {
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
                    dependentElements === undefined ||
                        !areDependentInputsDisplayed ? id : `${id}.value`
                )}
            />

        </div>

        {
            dependentElements !== undefined && areDependentInputsDisplayed &&
            dependentElements.map(input => {
                if(input.type === "reactNode"){
                    return <div key={input.id}>
                        {
                            input.node
                        }
                    </div>
                }
                return <Input
                    key={input.name}
                    input={{
                        ...input,
                        "id": `${id}.${input.id}`
                    }}
                    register={register}
                    unregister={unregister}
                    control={control}
                    setValue={setValue}
                />
            })
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