import { Form } from "./components/Form";
import { useConstCallback } from "powerhooks/useConstCallback";


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
                "id": "nom",
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
                "id": "prenom",
                "name": "prenom",
                "ariaLabel": "prenom",
            },
            {
                "type": "checkbox",
                "ariaLabel": "avez vous plus de 18 ans ?",
                "name": "avez vous plus de 18 ans ? ",
                "id": "18+",
                "dependentInputs": [
                    {
                        "type": "text",
                        "name": "travaille pratiqué",
                        "id": "travaille",
                        "ariaLabel": "travaille pratiqué",
                        "required": true,
                        "minLength": 5,
                        "minLengthErrorMessage": "champ trop court !",
                        "requiredErrorMessage": "champ obligatoir"
                    },
                    {
                        "type": "text",
                        "id": "animal",
                        "name": "animal préféré",
                        "ariaLabel": "animal préféré",
                    },
                    {
                        "type": "checkbox",
                        "ariaLabel": "other checkbox",
                        "name": "other checkbox",
                        "id": "otherCheckbox",
                        "dependentInputs": [
                            {
                                "type": "text",
                                "name": "text2",
                                "ariaLabel": "text2",
                                "id": "pipi",
                                "minLength": 3
                            }
                        ]
                    }
                ]
            }
        ]}
    />
}