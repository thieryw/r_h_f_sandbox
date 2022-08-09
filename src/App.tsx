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
                "name": "avez vous une voiture ?",
                "id": "hasCar",
                "dependentInputs": [
                    {
                        "type": "OptionList",
                        "name": "Model",
                        "id": "brand",
                        "items": ["Mercedes", "B M W", "Bentley", "Porch"]
                    }
                ]
                    
            }
        ]}
    />
}