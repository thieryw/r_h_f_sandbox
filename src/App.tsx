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
        elements={[
            {
                "name": "nom",
                "id": "nom",
                "type": "text",
                "ariaLabel": "nom",
                "required": true,
                "requiredErrorMessage": "champ obligatoire !",
                "autoComplete": "given-name"
            },
            {
                "type": "text",
                "id": "prenom",
                "name": "prenom",
                "ariaLabel": "prenom",
                "required": true,
                "requiredErrorMessage": "champ obligatoire !",
                "autoComplete": "family-name"
            },
            {
                "type": "checkbox",
                "name": "avez vous une voiture ?",
                "id": "hasCar",
                "dependentElements": [
                    {
                        "type": "OptionList",
                        "name": "Model",
                        "id": "brand",
                        "items": ["Mercedes", "B M W", "Bentley", "Porch"]
                    }
                ]
                    
            },
            {
                "type": "reactNode",
                "node": <div>This is a react node</div>,
                "id": "react node"
            }
        ]}
    />
}