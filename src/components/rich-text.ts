import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { live } from "../utils/live";

import "./rich-toolbar";
import "./rich-viewer";

@customElement("rich-text")
export class RichText extends LitElement {
  static styles = css`
    :host {
      --rich-color: black;
      --rich-background: white;
      --rich-action-active-color: red;
      --icon-size: 24px;
      --rich-padding: 8px;
    }
    main {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 1fr auto;
      grid-template-columns: 1fr;
      grid-template-areas:
        "viewer"
        "toolbar";
    }

    rich-toolbar {
      grid-area: toolbar;
      width: 100%;
      overflow-x: auto;
      background-color: var(--rich-background);
      color: var(--rich-color);
      border-top: 1px solid var(--rich-color);
    }

    rich-viewer {
      grid-area: viewer;
      flex: 1;
      width: 100%;
      overflow-y: auto;
      background-color: var(--rich-background);
      color: var(--rich-color);
    }

    @media (hover: hover) and (pointer: fine) {
      main {
        grid-template-rows: auto 1fr;
        grid-template-areas:
          "toolbar"
          "viewer";
      }
      rich-toolbar {
        border-top: none;
        border-bottom: 1px solid var(--rich-color);
      }
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --rich-background: black;
        --rich-color: white;
      }
    }
  `;

  @live selection: Selection | null = null;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Object, hasChanged: () => true }) node: Element =
    document.createElement("div");

  render() {
    const { selection, readonly, node } = this;
    return html`<main>
      <rich-toolbar
        .selection=${selection}
        .node=${node}
        @set-content=${(e: Event) => {
          const event = e as CustomEvent<string>;
          const parser = new DOMParser();
          const doc = parser.parseFromString(event.detail, "text/html");
          const root = doc.querySelector("body");
          this.node.innerHTML = root?.innerHTML ?? "";
          this.requestUpdate();
        }}
      ></rich-toolbar>
      <rich-viewer
        ?readonly=${readonly}
        @selection=${(e: Event) => {
          const event = e as CustomEvent;
          this.selection = event.detail;
        }}
        .node=${node}
      >
      </rich-viewer>
    </main>`;
  }

  firstUpdated() {
    const children = this.children;
    if (children.length > 0) {
      // Check if <template> is the first child
      const template = children[0];
      if (template.tagName === "TEMPLATE") {
        const content = template.innerHTML.trim();
        if (content.length > 0) {
          this.node.innerHTML = content;
          this.requestUpdate();
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rich-text": RichText;
  }
}
