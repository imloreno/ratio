export interface IField {
    name: string;
    type: string;
    label: string;
    value: string;
    required: boolean;
    disabled: boolean;
    placeholder?: string;
}

export interface IInput {
    fields: IField[];
}