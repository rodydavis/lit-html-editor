import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "@material/mwc-icon-button";
import "@material/mwc-icon";

@customElement("rich-action")
export class RichAction extends LitElement {
  static styles = css`
    * {
      --mdc-icon-size: var(--icon-size);
      --mdc-icon-button-size: var(--icon-size);
    }
    section {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    section * {
      margin: 2px;
    }
    mwc-icon-button[active] {
      color: var(--rich-action-active-color);
    }
    mwc-icon {
      cursor: pointer;
    }
  `;

  @property({ type: String }) command = "";
  @property({ type: String }) value?: string;
  @property({ type: String }) icon = "info";
  @property({ type: Boolean }) active = false;
  @property({ type: Array, hasChanged: () => true }) values: Option[] = [];

  render() {
    const { icon, command, value, active, values } = this;
    const hasItems = values.length > 0;
    return html`<section>
      ${hasItems
        ? html` <mwc-icon>${icon}</mwc-icon>
            <select
              @change=${(e: Event) => {
                const event = e as CustomEvent;
                const select = event.target as HTMLSelectElement;
                const selectedValue = select.value;
                if (selectedValue === "--") {
                  editorCommand("removeFormat", undefined);
                } else {
                  editorCommand(command, selectedValue);
                }
              }}
            >
              ${values.map(
                (v) =>
                  html`<option value=${v.value} ?selected=${v.value === value}>
                    ${v.name}
                  </option>`
              )}
            </select>`
        : html`<mwc-icon-button
            ?active="${active}"
            icon=${icon}
            @click=${() => {
              if (command) {
                editorCommand(command, value);
              } else {
                this.dispatchEvent(
                  new Event("action", {
                    bubbles: true,
                    composed: true,
                  })
                );
              }
            }}
          ></mwc-icon-button>`}
      <div><slot></slot></div>
    </section>`;
  }
}

interface Option {
  name: string;
  value: string;
}

export function editorCommand(command: string, value?: string) {
  document.execCommand(command, true, value);
}

declare global {
  interface HTMLElementTagNameMap {
    "rich-action": RichAction;
  }
}
