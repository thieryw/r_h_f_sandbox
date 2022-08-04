import { Form } from "./components/Form";
import { useConstCallback } from "powerhooks";


export function App() {

    const onSubmit = useConstCallback((data)=>{
        console.log(data);
    });

    return <Form
        onSubmit={onSubmit}
        label="Form"
        submitText="submit"
        inputs={[
            {
                "name": "nom",
                "type": "text",
                "ariaLabel": "nom",
                "required": true,
                "maxLength": 10,
                "minLength": 5,
                "requiredErrorMessage": "champ obligatoire !",
                "maxLengthErrorMessage": "champ trop long !",
                "minLengthErrorMessage": "Champ trop court !",
                "patternErrorMessage": "Camp doit contenire au moin une majuscule",
                "pattern": /[A-Z]/
            },
            {
                "type": "text",
                "name": "prenom",
                "ariaLabel": "prenom",
            },
            {
                "type": "checkbox",
                "ariaLabel": "avez vous plus de 18 ans ?",
                "name": "avez vous plus de 18 ans ? ",
                "dependentInputs": [
                    {
                        "type": "text",
                        "name": "travaille pratiqué",
                        "ariaLabel": "travaille pratiqué",
                        "required": true,
                        "minLength": 5,
                        "minLengthErrorMessage": "champ trop court !",
                        "requiredErrorMessage": "champ obligatoir"
                    },
                    {
                        "type": "text",
                        "name": "animal préféré",
                        "ariaLabel": "animal préféré",
                    }
                ]
            }
        ]}
    />
}