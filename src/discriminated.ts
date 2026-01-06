type TextField = {kind: "text"; maxLength: number};
type NumberField = {kind: "number"; min: any}

type Field = TextField | NumberField;

export function describeField(field: Field): string {

    switch(field.kind) {
        case "text": 
            return "This represent the text field";
        case "number":
            return "This represent the number field";
    }

    return "Something went wrong";
}
