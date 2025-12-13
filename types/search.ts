export interface SearchResult {
    id: string;
    name: string;
    type: "hero" | "item" | "role" | "update"; 
    subType: string;
    subTypeEs: string;
    role: string;
    }

export interface AutocompleteItem {
    id: number;
    label: string;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;