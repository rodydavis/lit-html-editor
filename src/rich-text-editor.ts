import { LitElement, html, customElement, css, state } from "lit-element";

import "@material/mwc-icon-button";

@customElement("rich-text-editor")
export class RichTextEditor extends LitElement {
  @state() content: string = "";
  @state() root: Element | null = null;

  static styles = css`
    :host {
      --editor-width: 600px;
      --editor-height: 600px;
      --editor-background: #f1f1f1;
      --editor-toolbar-height: 33px;
      --editor-toolbar-background: black;
      --editor-toolbar-on-background: white;
      --editor-toolbar-on-active-background: #a4a4a4;
    }
    main {
      width: var(--editor-width);
      height: var(--editor-height);
      display: grid;
      grid-template-areas:
        "toolbar toolbar"
        "editor editor";
      grid-template-rows: var(--editor-toolbar-height) auto;
      grid-template-columns: auto auto;
    }
    #editor-actions {
      grid-area: toolbar;
      width: var(--editor-width);
      height: var(--editor-toolbar-height);
      background-color: var(--editor-toolbar-background);
      color: var(--editor-toolbar-on-background);
      overscroll-behavior: contain;
      overflow-y: auto;
    }
    #editor {
      width: var(--editor-width);
      grid-area: editor;
      background-color: var(--editor-background);
    }
    #toolbar {
      width: 1080px;
      height: var(--editor-toolbar-height);
    }
    [contenteditable] {
      outline: 0px solid transparent;
    }
    #toolbar > mwc-icon-button {
      color: var(--editor-toolbar-on-background);
      --mdc-icon-size: 20px;
      --mdc-icon-button-size: 30px;
    }
    #toolbar > .active {
      color: var(--editor-toolbar-on-active-background);
    }
    select {
      margin-top: 5px;
      height: calc(var(--editor-toolbar-height) - 10px);
    }
    input[type="color"] {
      height: calc(var(--editor-toolbar-height) - 15px);
      -webkit-appearance: none;
      border: none;
      width: 22px;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
    }
  `;

  render() {
    return html`<main>
      <div id="editor-actions">
        <div id="toolbar">
          ${toolbar(this.getSelection(), (command, val) => {
            document.execCommand(command, false, val);
            console.log("command", command, val);
          })}
        </div>
      </div>
      <div id="editor">${this.root}</div>
    </main> `;
  }

  async firstUpdated() {
    const elem = this.parentElement!.querySelector("rich-text-editor template");
    this.content = elem?.innerHTML ?? "";
    this.reset();
  }

  reset() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.content, "text/html");
    document.execCommand("defaultParagraphSeparator", false, "br");
    document.addEventListener("selectionchange", () => {
      this.requestUpdate();
    });
    const root = doc.querySelector("body");
    root!.setAttribute("contenteditable", "true");
    this.root = root;
  }

  getSelection(): Selection {
    const selection: Selection = this.shadowRoot!.getSelection()!;
    return selection;
  }
}

function toolbar(
  selection: Selection,
  command: (c: string, val: string | undefined) => void
) {
  const tags: string[] = [];
  if (selection.type === "Range") {
    // @ts-ignore
    let parentNode = selection?.baseNode;
    if (parentNode) {
      const checkNode = () => {
        const parentTagName = parentNode?.tagName?.toLowerCase()?.trim();
        if (parentTagName) tags.push(parentTagName);
      };
      while (parentNode != null) {
        checkNode();
        parentNode = parentNode?.parentNode;
      }
    }
  }

  console.log("tags", tags);

  const commands: {
    icon: string;
    command: string | (() => void);
    active?: boolean;

    type?: string;
    values?: { value: string; name: string; font?: boolean }[];
    command_value?: string;
  }[] = [
    {
      icon: "format_clear",
      command: "removeFormat",
    },

    {
      icon: "format_bold",
      command: "bold",
      active: tags.includes("b"),
    },
    {
      icon: "format_italic",
      command: "italic",
      active: tags.includes("i"),
    },
    {
      icon: "format_underlined",
      command: "underline",
      active: tags.includes("u"),
    },
    {
      icon: "format_align_left",
      command: "justifyleft",
    },
    {
      icon: "format_align_center",
      command: "justifycenter",
    },
    {
      icon: "format_align_right",
      command: "justifyright",
    },
    {
      icon: "format_list_numbered",
      command: "insertorderedlist",
      active: tags.includes("ol"),
    },
    {
      icon: "format_list_bulleted",
      command: "insertunorderedlist",
      active: tags.includes("ul"),
    },
    {
      icon: "format_quote",
      command: "formatblock",
      command_value: "blockquote",
    },
    {
      icon: "format_indent_decrease",
      command: "outdent",
    },
    {
      icon: "format_indent_increase",
      command: "indent",
    },
    tags.includes("a")
      ? { icon: "link_off", command: "unlink" }
      : {
          icon: "add_link",
          command: () => {
            const newLink = prompt("Write the URL here", "http://");
            if (newLink && newLink != "" && newLink != "http://") {
              command("createlink", newLink);
            }
          },
        },
    {
      icon: "format_color_text",
      command: () => {
        const input = document.createElement("input");
        input.type = "color";
        input.addEventListener(
          "input",
          (e: any) => {
            const val = e.target.value;
            command("forecolor", val);
          },
          false
        );
        input.click();
      },
      type: "color",
    },
    {
      icon: "border_color",
      command: () => {
        const input = document.createElement("input");
        input.type = "color";
        input.addEventListener(
          "input",
          (e: any) => {
            const val = e.target.value;
            command("backcolor", val);
          },
          false
        );
        input.click();
      },
      type: "color",
    },
    {
      icon: "title",
      command: "formatblock",
      values: [
        { name: "Normal Text", value: "--" },
        { name: "Heading 1", value: "h1" },
        { name: "Heading 2", value: "h2" },
        { name: "Heading 3", value: "h3" },
        { name: "Heading 4", value: "h4" },
        { name: "Heading 5", value: "h5" },
        { name: "Heading 6", value: "h6" },
        { name: "Paragraph", value: "p" },
        { name: "Pre-Formatted", value: "pre" },
      ],
    },
    {
      icon: "text_format",
      command: "fontname",
      values: [
        { name: "Font Name", value: "--" },
        ...[...checkFonts()].map((f) => ({
          name: f,
          value: f,
          font: true,
        })),
      ],
    },
    {
      icon: "format_size",
      command: "fontsize",
      values: [
        { name: "Font Size", value: "--" },
        { name: "Very Small", value: "1" },
        { name: "Small", value: "2" },
        { name: "Normal", value: "3" },
        { name: "Medium Large", value: "4" },
        { name: "Large", value: "5" },
        { name: "Very Large", value: "6" },
        { name: "Maximum", value: "7" },
      ],
    },
    {
      icon: "undo",
      command: "undo",
    },
    {
      icon: "redo",
      command: "redo",
    },
    {
      icon: "content_cut",
      command: "cut",
    },
    {
      icon: "content_copy",
      command: "copy",
    },
    {
      icon: "content_paste",
      command: "paste",
    },
  ];

  return html`
    ${commands.map((n) => {
      return html`
        ${n.values
          ? html` <select
              id="${n.icon}"
              @change=${(e: any) => {
                const val = e.target.value;
                if (val === "--") {
                  command("removeFormat", undefined);
                } else if (typeof n.command === "string") {
                  command(n.command, val);
                }
              }}
            >
              ${n.values.map(
                (v) => html` <option value=${v.value}>${v.name}</option>`
              )}
            </select>`
          : html` <mwc-icon-button
              icon="${n.icon}"
              class="${n.active ? "active" : "inactive"}"
              @click=${() => {
                if (n.values) {
                } else if (typeof n.command === "string") {
                  command(n.command, n.command_value);
                } else {
                  n.command();
                }
              }}
            ></mwc-icon-button>`}
      `;
    })}
  `;
}

export function checkFonts(): string[] {
  const fontCheck = new Set(
    [
      // Windows 10
      "Arial",
      "Arial Black",
      "Bahnschrift",
      "Calibri",
      "Cambria",
      "Cambria Math",
      "Candara",
      "Comic Sans MS",
      "Consolas",
      "Constantia",
      "Corbel",
      "Courier New",
      "Ebrima",
      "Franklin Gothic Medium",
      "Gabriola",
      "Gadugi",
      "Georgia",
      "HoloLens MDL2 Assets",
      "Impact",
      "Ink Free",
      "Javanese Text",
      "Leelawadee UI",
      "Lucida Console",
      "Lucida Sans Unicode",
      "Malgun Gothic",
      "Marlett",
      "Microsoft Himalaya",
      "Microsoft JhengHei",
      "Microsoft New Tai Lue",
      "Microsoft PhagsPa",
      "Microsoft Sans Serif",
      "Microsoft Tai Le",
      "Microsoft YaHei",
      "Microsoft Yi Baiti",
      "MingLiU-ExtB",
      "Mongolian Baiti",
      "MS Gothic",
      "MV Boli",
      "Myanmar Text",
      "Nirmala UI",
      "Palatino Linotype",
      "Segoe MDL2 Assets",
      "Segoe Print",
      "Segoe Script",
      "Segoe UI",
      "Segoe UI Historic",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "SimSun",
      "Sitka",
      "Sylfaen",
      "Symbol",
      "Tahoma",
      "Times New Roman",
      "Trebuchet MS",
      "Verdana",
      "Webdings",
      "Wingdings",
      "Yu Gothic",
      // macOS
      "American Typewriter",
      "Andale Mono",
      "Arial",
      "Arial Black",
      "Arial Narrow",
      "Arial Rounded MT Bold",
      "Arial Unicode MS",
      "Avenir",
      "Avenir Next",
      "Avenir Next Condensed",
      "Baskerville",
      "Big Caslon",
      "Bodoni 72",
      "Bodoni 72 Oldstyle",
      "Bodoni 72 Smallcaps",
      "Bradley Hand",
      "Brush Script MT",
      "Chalkboard",
      "Chalkboard SE",
      "Chalkduster",
      "Charter",
      "Cochin",
      "Comic Sans MS",
      "Copperplate",
      "Courier",
      "Courier New",
      "Didot",
      "DIN Alternate",
      "DIN Condensed",
      "Futura",
      "Geneva",
      "Georgia",
      "Gill Sans",
      "Helvetica",
      "Helvetica Neue",
      "Herculanum",
      "Hoefler Text",
      "Impact",
      "Lucida Grande",
      "Luminari",
      "Marker Felt",
      "Menlo",
      "Microsoft Sans Serif",
      "Monaco",
      "Noteworthy",
      "Optima",
      "Palatino",
      "Papyrus",
      "Phosphate",
      "Rockwell",
      "Savoye LET",
      "SignPainter",
      "Skia",
      "Snell Roundhand",
      "Tahoma",
      "Times",
      "Times New Roman",
      "Trattatello",
      "Trebuchet MS",
      "Verdana",
      "Zapfino",
    ].sort()
  );
  const fontAvailable = new Set<string>();
  // @ts-ignore
  for (const font of fontCheck.values()) {
    // @ts-ignore
    if (document.fonts.check(`12px "${font}"`)) {
      fontAvailable.add(font);
    }
  }
  // @ts-ignore
  return fontAvailable.values();
}
