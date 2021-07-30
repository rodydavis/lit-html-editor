import { LitElement } from "lit-element";
import "@material/mwc-icon-button";
export declare class RichTextEditor extends LitElement {
    content: string;
    root: Element | null;
    static styles: import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
    firstUpdated(): Promise<void>;
    getValue(): string;
    setValue(value: string): void;
    reset(): void;
    renderToolbar(command: (c: string, val: string | undefined) => void): import("lit-element").TemplateResult;
}
export declare function checkFonts(): string[];
