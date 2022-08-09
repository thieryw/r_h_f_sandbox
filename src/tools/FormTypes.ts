import type { Control, FieldValues, UseFormRegister, UseFormSetValue, UseFormUnregister } from "react-hook-form";
import { InputType } from "zlib";
import { Input } from "../components/Input";
import { OptionList } from "../components/OptionList";

export type Controls = {
    register: UseFormRegister<FieldValues>;
    control: Control<FieldValues, any>;
    unregister: UseFormUnregister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
};

export type Input = Input.Text | Input.Checkbox | Input.OptionList;
export type Text = Omit<Input.Text, "type"> & Controls;
export type Checkbox = Omit<Input.Checkbox, "type"> & Controls;
export type OptionList = Omit<Input.OptionList, "type"> & Controls;

export type Form = {
    label?: string;
    inputs?: Input[];
    submitText?: string;
};
declare namespace Input {
    export type Common = {
        type: "text" | "checkbox" | "OptionList";
        name: string;
        id: string;
        ariaLabel?: string;
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
        required?: boolean;
    };

    export type Checkbox = Common & {
        type: "checkbox";
        isChecked?: boolean;
        dependentInputs?: Input[];
    };

    export type OptionList = Common & {
        type: "OptionList";
        items: string[];
        defaultSelectedItem?: OptionList["items"][number];
    }
};



