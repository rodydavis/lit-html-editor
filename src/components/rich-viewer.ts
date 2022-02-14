import { html, css, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("rich-viewer")
export class RichViewer extends LitElement {
  static styles = css`
    article {
      padding: var(--rich-padding);
      width: calc(100% - var(--rich-padding) * 2);
      height: calc(100% - var(--rich-padding) * 2);
    }

    article[contenteditable="true"] {
      border: none;
      outline: none;
    }
  `;

  @query("#content") content!: HTMLDivElement;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Object, hasChanged: () => true }) node!: Element;

  render() {
    const { readonly, node } = this;
    return html`<article
      id="content"
      contenteditable=${readonly ? "false" : "true"}
      @input=${() => this.updateSelection()}
    >
      ${node}
    </article>`;
  }

  updateSelection() {
    // @ts-ignore
    const shadowSelection = this.shadowRoot?.getSelection
      ? // @ts-ignore
        this.shadowRoot!.getSelection()
      : null;
    const selection =
      shadowSelection || document.getSelection() || window.getSelection();
    this.dispatchEvent(
      new CustomEvent("selection", {
        detail: selection,
        bubbles: true,
        composed: true,
      })
    );
  }

  firstUpdated() {
    document.execCommand("defaultParagraphSeparator", false, "br");
    document.addEventListener("selectionchange", () => {
      this.updateSelection();
    });
    window.addEventListener("selectionchange", () => {
      this.updateSelection();
    });
    document.addEventListener("keydown", () => {
      this.updateSelection();
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rich-viewer": RichViewer;
  }
}
