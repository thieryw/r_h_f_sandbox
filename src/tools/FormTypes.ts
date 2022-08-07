import type { Control, FieldValues, NonUndefined, UseFormRegister } from "react-hook-form";

export type InputType = NonUndefined<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>["type"]>;

export type Controls = {
    register: UseFormRegister<FieldValues>;
    control: Control<FieldValues, any>;
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
        type: InputType;
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


