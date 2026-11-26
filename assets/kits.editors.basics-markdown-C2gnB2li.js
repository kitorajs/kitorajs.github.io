import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./code-xml-B7sqReS8.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./send-3adh7YZe.js";import{t as i}from"./table-CK9dvaDS.js";import{Bc as a,Cc as o,Ic as s}from"./index-B9ukmIN1.js";import{i as c,n as l,r as u}from"./toolbar-t4KBTWO9.js";import{a as d,c as f,d as p,f as m,i as h,l as g,n as _,o as v,p as y,r as b,s as x,t as S,u as C}from"./editor-DlHEddir.js";import"./kit-gallery-Bph7isB2.js";import{t as w}from"./example-BGnSQG2Y.js";import{t as T}from"./preview-DnUhpeTJ.js";import{t as E}from"./-kits.editors.shared-DcQGKGel.js";var D=e(a(),1),O=s();function k(){let[e,t]=(0,D.useState)(`# Hello

- one
- two

Some **bold** and \`code\`.`);return(0,O.jsx)(S,{value:e,onChange:t,height:220})}var A=`import { useState } from "react"
import { MarkdownEditor } from "@kitora/editors/markdown"

/** A controlled markdown editor with the live preview beside it. Enter continues lists, Tab nests them. */
export function BasicMarkdownEditor() {
  const [value, setValue] = useState("# Hello\\n\\n- one\\n- two\\n\\nSome **bold** and \`code\`.")
  return <MarkdownEditor value={value} onChange={setValue} height={220} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>o(()=>import(`./markdown-editor-DBeSeu-q.js`),[]));var j=`### A safe renderer

Raw HTML such as <b onclick="alert(1)">this</b> shows as text, and [unsafe links](javascript:alert(1)) render as plain text.

- [x] Tables, task lists and ~~strikethrough~~ (GFM)
- [ ] Code is highlighted:

\`\`\`ts
const answer: number = 42
\`\`\`
`;function M(){return(0,O.jsx)(T,{markdown:j,className:`rounded-lg border border-border p-4`})}var N=`import { MarkdownPreview } from "@kitora/editors/markdown"

const TEXT = \`### A safe renderer

Raw HTML such as <b onclick="alert(1)">this</b> shows as text, and [unsafe links](javascript:alert(1)) render as plain text.

- [x] Tables, task lists and ~~strikethrough~~ (GFM)
- [ ] Code is highlighted:

\\\`\\\`\\\`ts
const answer: number = 42
\\\`\\\`\\\`
\`

/** Just the renderer: markdown to React elements, no HTML strings, for comments and read-only views. */
export function BasicMarkdownPreview() {
  return <MarkdownPreview markdown={TEXT} className="rounded-lg border border-border p-4" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>o(()=>import(`./markdown-preview-D0gRRW6X.js`),[]));function P(){let[e,n]=(0,D.useState)(`## Standup

- [x] Ship the editor parts
- [ ] Write the release note`);return(0,O.jsxs)(x,{value:e,onChange:n,defaultView:`split`,children:[(0,O.jsxs)(C,{children:[(0,O.jsx)(_,{command:`markdown.heading`}),(0,O.jsx)(_,{command:`markdown.bold`}),(0,O.jsx)(_,{command:`markdown.italic`}),(0,O.jsx)(_,{command:`markdown.link`}),(0,O.jsx)(u,{}),(0,O.jsx)(_,{command:`markdown.taskList`}),(0,O.jsx)(b,{label:`Code block`,edit:e=>m(e,`sql`),icon:(0,O.jsx)(t,{className:`size-3.5`})}),(0,O.jsx)(b,{label:`Insert table`,edit:y,icon:(0,O.jsx)(i,{className:`size-3.5`})}),(0,O.jsx)(c,{}),(0,O.jsx)(p,{})]}),(0,O.jsxs)(h,{height:180,children:[(0,O.jsx)(g,{label:`Standup notes`,placeholder:`What happened today?`}),(0,O.jsx)(v,{})]}),(0,O.jsx)(f,{children:({value:e,stats:t})=>{let n=(e.match(/^- \[ \]/gm)??[]).length;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`span`,{"data-testid":`compose-open-tasks`,children:[n,` open tasks`]}),(0,O.jsxs)(`span`,{className:`ms-auto`,children:[t.words,` words`]})]})}})]})}var F=`import { useState } from "react"
import { Code2, Table } from "lucide-react"
import { insertCodeFence, insertTable, ToolbarSeparator, ToolbarSpacer } from "@kitora/editors"
import { MarkdownEditorCommandButton, MarkdownEditorEditButton, MarkdownEditorPanes, MarkdownEditorPreview, MarkdownEditorRoot, MarkdownEditorStatusBar, MarkdownEditorTextarea, MarkdownEditorToolbar, MarkdownEditorViewSwitch } from "@kitora/editors/markdown"

/**
 * Compose your own: the \`MarkdownEditor\` preset rebuilt from its public parts (each also reachable as \`MarkdownEditor.Root\`, \`MarkdownEditor.Toolbar\`, …), trimmed to the
 * buttons this host wants, with a custom status bar through the StatusBar render slot.
 */
export function ComposeMarkdownEditor() {
  const [value, setValue] = useState("## Standup\\n\\n- [x] Ship the editor parts\\n- [ ] Write the release note")
  return (
    <MarkdownEditorRoot value={value} onChange={setValue} defaultView="split">
      <MarkdownEditorToolbar>
        <MarkdownEditorCommandButton command="markdown.heading" />
        <MarkdownEditorCommandButton command="markdown.bold" />
        <MarkdownEditorCommandButton command="markdown.italic" />
        <MarkdownEditorCommandButton command="markdown.link" />
        <ToolbarSeparator />
        <MarkdownEditorCommandButton command="markdown.taskList" />
        <MarkdownEditorEditButton label="Code block" edit={(state) => insertCodeFence(state, "sql")} icon={<Code2 className="size-3.5" />} />
        <MarkdownEditorEditButton label="Insert table" edit={insertTable} icon={<Table className="size-3.5" />} />
        <ToolbarSpacer />
        <MarkdownEditorViewSwitch />
      </MarkdownEditorToolbar>
      <MarkdownEditorPanes height={180}>
        <MarkdownEditorTextarea label="Standup notes" placeholder="What happened today?" />
        <MarkdownEditorPreview />
      </MarkdownEditorPanes>
      <MarkdownEditorStatusBar>
        {({ value: text, stats }) => {
          const open = (text.match(/^- \\[ \\]/gm) ?? []).length
          return (
            <>
              <span data-testid="compose-open-tasks">{open} open tasks</span>
              <span className="ms-auto">{stats.words} words</span>
            </>
          )
        }}
      </MarkdownEditorStatusBar>
    </MarkdownEditorRoot>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>o(()=>import(`./compose-markdown-irQS98R9.js`),[]));function I(){return(0,O.jsx)(d,{defaultValue:`Looks good to me, **ship it**.`,defaultView:`write`,statusBar:!1,height:120,label:`Review comment`,toolbarEnd:(0,O.jsx)(l,{label:`Post comment`,children:(0,O.jsx)(r,{className:`size-3.5`})})})}var L=`import { Send } from "lucide-react"
import { ToolbarButton } from "@kitora/editors/ui"
import { MarkdownEditorPreset } from "@kitora/editors/markdown"

/** The preset under its own name (the same component as \`MarkdownEditor\`): write view first, a host button at the toolbar's end, no status bar. */
export function MarkdownPresetByName() {
  return (
    <MarkdownEditorPreset
      defaultValue="Looks good to me, **ship it**."
      defaultView="write"
      statusBar={false}
      height={120}
      label="Review comment"
      toolbarEnd={
        <ToolbarButton label="Post comment">
          <Send className="size-3.5" />
        </ToolbarButton>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>o(()=>import(`./markdown-preset-xUD0AQQJ.js`),[]));function R(){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(n,{title:`Basics: markdown`,children:`A textarea that knows markdown, and a renderer that turns markdown into React elements without ever writing HTML.`}),(0,O.jsx)(w,{n:1,title:`The markdown editor`,blurb:"Controlled with `value` / `onChange`. Toolbar buttons and ⌘B / ⌘I / ⌘K edit the selection; Enter continues a list; Tab nests it.",code:A,children:(0,O.jsx)(E,{testId:`basic-markdown-editor`,children:(0,O.jsx)(k,{})})}),(0,O.jsx)(w,{n:2,title:`The renderer`,blurb:"`MarkdownPreview` for comments and read-only views: GFM tables, tasks and strikethrough, highlighted code, raw HTML shown as text, unsafe links dropped.",code:N,children:(0,O.jsx)(E,{testId:`basic-markdown-preview`,children:(0,O.jsx)(M,{})})}),(0,O.jsx)(w,{n:3,title:`Compose your own`,blurb:"The preset rebuilt from its public parts: `MarkdownEditorRoot`, `MarkdownEditorToolbar`, `MarkdownEditorCommandButton`, `MarkdownEditorEditButton`, `MarkdownEditorViewSwitch`, `MarkdownEditorPanes`, `MarkdownEditorTextarea`, `MarkdownEditorPreview` and a `MarkdownEditorStatusBar` render slot that counts open tasks.",code:F,children:(0,O.jsx)(E,{testId:`compose-markdown-editor`,children:(0,O.jsx)(P,{})})}),(0,O.jsx)(w,{n:4,title:`The preset by name`,blurb:"`MarkdownEditorPreset` is `MarkdownEditor` without the part statics: here the write view first, a host button in `toolbarEnd`, and no status bar.",code:L,children:(0,O.jsx)(E,{testId:`markdown-preset`,children:(0,O.jsx)(I,{})})})]})}export{R as component};