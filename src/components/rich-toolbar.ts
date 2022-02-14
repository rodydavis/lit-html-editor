import { html, css, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { checkFonts } from "../utils/check-fonts";
import { live } from "../utils/live";

import "./rich-action";
import { editorCommand } from "./rich-action";

@customElement("rich-toolbar")
export class RichToolbar extends LitElement {
  static styles = css`
    header {
      width: 100%;
      color: var(--rich-color);
      display: flex;
      flex-direction: row;
    }
    input[type="color"] {
      -webkit-appearance: none;
      border: none;
      width: var(--icon-size);
      height: var(--icon-size);
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
    }
  `;

  @live selection: Selection | null = null;
  @query("#fg-color") fgColorInput!: HTMLInputElement;
  @query("#bd-color") bdColorInput!: HTMLInputElement;
  @state() fileHandle?: any;
  @property({ type: Object, hasChanged: () => true }) node!: Element;

  render() {
    const tags = this.getTags();
    return html`<header>
      <rich-action icon="format_clear" command="removeFormat"></rich-action>
      <rich-action
        icon="format_bold"
        command="bold"
        ?active=${tags.includes("b")}
      ></rich-action>
      <rich-action
        icon="format_italic"
        command="italic"
        ?active=${tags.includes("i")}
      ></rich-action>
      <rich-action
        icon="format_underlined"
        command="underline"
        ?active=${tags.includes("u")}
      ></rich-action>
      <rich-action icon="format_align_left" command="justifyleft"></rich-action>
      <rich-action
        icon="format_align_center"
        command="justifycenter"
      ></rich-action>
      <rich-action
        icon="format_align_right"
        command="justifyright"
      ></rich-action>
      <rich-action
        icon="format_list_numbered"
        command="insertorderedlist"
        ?active=${tags.includes("ol")}
      ></rich-action>
      <rich-action
        icon="format_list_bulleted"
        command="insertunorderedlist"
        ?active=${tags.includes("ul")}
      ></rich-action>
      <rich-action
        icon="format_quote"
        command="formatblock"
        value="blockquote"
      ></rich-action>
      <rich-action
        icon="format_indent_decrease"
        command="outdent"
      ></rich-action>
      <rich-action icon="format_indent_increase" command="indent"></rich-action>
      <rich-action
        icon="add_link"
        ?active=${tags.includes("a")}
        @action=${() => {
          const newLink = prompt("Write the URL here", "https://");
          // Check if valid url
          if (newLink && newLink.match(/^(http|https):\/\/[^ "]+$/)) {
            editorCommand("createlink", newLink);
          }
        }}
      >
      </rich-action>
      <rich-action
        icon="link_off"
        ?active=${tags.includes("a")}
        command="unlink"
      >
      </rich-action>
      <rich-action
        icon="format_color_text"
        @action=${() => this.fgColorInput.click()}
      >
        <input
          type="color"
          id="fg-color"
          @input=${(e: Event) => {
            const input = e.target as HTMLInputElement;
            editorCommand("forecolor", input.value);
          }}
        />
      </rich-action>
      <rich-action
        icon="border_color"
        @action=${() => this.bdColorInput.click()}
      >
        <input
          type="color"
          id="bd-color"
          @input=${(e: Event) => {
            const input = e.target as HTMLInputElement;
            editorCommand("backcolor", input.value);
          }}
        />
      </rich-action>
      <rich-action
        icon="title"
        command="formatblock"
        .values=${[
          { name: "Normal Text", value: "--" },
          { name: "Heading 1", value: "h1" },
          { name: "Heading 2", value: "h2" },
          { name: "Heading 3", value: "h3" },
          { name: "Heading 4", value: "h4" },
          { name: "Heading 5", value: "h5" },
          { name: "Heading 6", value: "h6" },
          { name: "Paragraph", value: "p" },
          { name: "Pre-Formatted", value: "pre" },
        ]}
      ></rich-action>
      <rich-action
        icon="text_format"
        command="fontname"
        .values=${[
          { name: "Font Name", value: "--" },
          ...Array.from(checkFonts()).map((font) => ({
            name: font,
            value: font,
          })),
        ]}
      ></rich-action>
      <rich-action
        icon="format_size"
        command="fontsize"
        .values=${[
          { name: "Font Size", value: "--" },
          { name: "Very Small", value: "1" },
          { name: "Small", value: "2" },
          { name: "Normal", value: "3" },
          { name: "Medium Large", value: "4" },
          { name: "Large", value: "5" },
          { name: "Very Large", value: "6" },
          { name: "Maximum", value: "7" },
        ]}
      ></rich-action>
      <rich-action icon="undo" command="undo"></rich-action>
      <rich-action icon="redo" command="redo"></rich-action>
      <rich-action icon="content_cut" command="cut"></rich-action>
      <rich-action icon="content_copy" command="copy"></rich-action>
      <rich-action icon="content_paste" command="paste"></rich-action>
      <rich-action
        icon="file_upload"
        @action=${async () => {
          if ("showOpenFilePicker" in window) {
            // File system api
            // @ts-ignore
            const [fileHandle] = await window.showOpenFilePicker();
            this.fileHandle = fileHandle;
            if (fileHandle) {
              const file = await fileHandle.getFile();
              const contents = await file.text();
              this.dispatchEvent(
                new CustomEvent("set-content", {
                  detail: contents,
                  bubbles: true,
                  composed: true,
                })
              );
            }
          } else {
            // Fallback to input
            const input = document.createElement("input");
            input.type = "file";
            input.click();
            input.onchange = async () => {
              const file = input.files![0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  const data = reader.result as string;
                  this.dispatchEvent(
                    new CustomEvent("set-content", {
                      detail: data,
                      bubbles: true,
                      composed: true,
                    })
                  );
                };
                reader.readAsText(file);
              }
            };
          }
        }}
      ></rich-action>
      <rich-action
        icon="file_download"
        @action=${async () => {
          const contents = this.node.innerHTML;
          if (this.fileHandle) {
            const writable = await this.fileHandle.createWritable();
            await writable.write(
              [
                `<!DOCTYPE html>`,
                `<html lang="en">`,
                `  <head> </head>`,
                `  <body>${contents}</body>`,
                `</html>`,
              ].join("\n")
            );
            await writable.close();
          } else {
            // Download file
            const url = window.URL.createObjectURL(
              new Blob([contents], { type: "text/html" })
            );
            const link = document.createElement("a");
            link.href = url;
            link.download = "index.html";
            link.click();
          }
        }}
      ></rich-action>
    </header>`;
  }

  getTags() {
    const { selection } = this;
    let tags: string[] = [];
    if (selection) {
      if (selection.type === "Range") {
        // @ts-ignore
        let parentNode = selection?.baseNode;
        if (parentNode) {
          const checkNode = () => {
            const tag = parentNode?.tagName?.toLowerCase()?.trim();
            if (tag) tags.push(tag);
          };
          while (parentNode != null) {
            checkNode();
            parentNode = parentNode?.parentNode;
          }
        }
        // Remove root tag
        tags.pop();
      } else {
        const content = this.selection?.toString() || "";
        tags = (content.match(/<[^>]+>/g) || [])
          .filter((tag) => !tag.startsWith("</"))
          .map((tag) => tag.replace(/<|>/g, ""));
      }
    }
    return tags;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rich-toolbar": RichToolbar;
  }
}
