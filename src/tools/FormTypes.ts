import type { Control, FieldValues, UseFormRegister, UseFormUnregister } from "react-hook-form";

export type Controls = {
    register: UseFormRegister<FieldValues>;
    control: Control<FieldValues, any>;
    unregister: UseFormUnregister<FieldValues>;
};

export type Input = Input.Text | Input.Checkbox;
export type Text = Omit<Input.Text, "type"> & Controls;
export type Checkbox = Omit<Input.Checkbox, "type" | "required"> & Controls;

export type Form = {
    label?: string;
    inputs?: Input[];
    submitText?: string;
};
declare namespace Input {
    export type Common = {
        type: "text" | "checkbox";
        name: string;
        id: string;
        ariaLabel: string;
        required?: boolean;
    };

    export type Text = Common & {
        type: "text";
        maxLength?: number;
        minLength?: number;
        pattern?: RegExp;
        patternErrorMessage?: string;
        maxLengthErrorMessage?: string;
        minLengthErrorMessage?: string;
        requiredErrorMessage?: string;
    };

    export type Checkbox = Common & {
        type: "checkbox";
        isChecked?: boolean;
        dependentInputs?: Input[];
    };
};




