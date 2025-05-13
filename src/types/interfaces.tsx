interface FormElement {
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
    defaultValue: any;
    name: string;
}

export interface FormComponentSource {
    elements: Array<FormElement>;
    action: Function;
    button: string;
};