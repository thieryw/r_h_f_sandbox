import type { Control, FieldValues, UseFormRegister, UseFormSetValue, UseFormUnregister } from "react-hook-form";
import { Input as FormElement } from "../components/Input";
import { OptionList } from "../components/OptionList";
import type { ReactNode } from "react";

export type Controls = {
    register: UseFormRegister<FieldValues>;
    control: Control<FieldValues, any>;
    unregister: UseFormUnregister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
};

export type FormElement = 
    FormElement.Text | 
    FormElement.Checkbox | 
    FormElement.OptionList |
    FormElement.Node;

export type Text = Omit<FormElement.Text, "type"> & Controls;
export type Checkbox = Omit<FormElement.Checkbox, "type"> & Controls;
export type OptionList = Omit<FormElement.OptionList, "type"> & Controls;

export type Form = {
    label?: string;
    elements?: FormElement[];
    submitText?: string;
    onSubmit: (data: FieldValues) => void;
};
declare namespace FormElement {
    export type Common = {
        type: "text" | "checkbox" | "OptionList" | "reactNode";
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
        autoComplete?: string;
    };

    export type Checkbox = Common & {
        type: "checkbox";
        isChecked?: boolean;
        dependentElements?: FormElement[];
    };

    export type OptionList = Common & {
        type: "OptionList";
        items: string[];
        defaultSelectedItem?: OptionList["items"][number];
    };

    export type Node = {
        type: "reactNode",
        node: ReactNode,
        id: string;
    }
};



