import type { Control, FieldValues, NonUndefined, UseFormRegister } from "react-hook-form";


export type InputType = NonUndefined<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>["type"]>;

export type Controls = {
    register: UseFormRegister<FieldValues>;
    control: Control<FieldValues, any>;

}


export type Input = Input.Input | Input.Text | Input.Checkbox;
export type Text = Omit<Input.Input & Input.Text, "type"> & Controls;
export type Checkbox = Omit<Input.Input & Input.Checkbox, "type" | "required"> & Controls;


type Input_ = Input;


export type Form = {
    label?: string;
    inputs?: Input[];
    submitText?: string;
};


declare namespace Input {
    export type Input = {
        type: InputType;
        name: string;
        ariaLabel: string;
        required?: boolean;
    };

    export type Text = {
        type: "text";
        maxLength?: number;
        minLength?: number;
        pattern?: RegExp;
        patternErrorMessage?: string;
        maxLengthErrorMessage?: string;
        minLengthErrorMessage?: string;
        requiredErrorMessage?: string;
    } & Omit<Input, "type">;

    export type Checkbox = {
        type: "checkbox";
        isChecked?: boolean;
        dependentInputs?: Input_[];
    } & Omit<Input, "type" | "required">;

};


