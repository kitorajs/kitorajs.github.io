import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,ri as i,zc as a}from"./index-BZuUy872.js";import{t as o}from"./editor-BzM2X2KL.js";import"./kit-gallery-BBavj2rC.js";import{t as s}from"./example-B67lLz1F.js";import{t as c}from"./preview-BcGYAfGt.js";import{t as l}from"./-kits.editors.shared-BZC8f-J8.js";var u=e(r(),1),d=a();async function f(e){return await new Promise(t=>{let n=new FileReader;n.addEventListener(`load`,()=>t(typeof n.result==`string`?n.result:``)),n.readAsDataURL(e)})}function p(){let[e,t]=(0,u.useState)(``),[n,r]=(0,u.useState)([`Steps to reproduce:

1. Open a doc
2. Paste a table from Sheets
3. Column widths reset

Expected: widths kept.`]);return(0,d.jsxs)(`div`,{className:`space-y-3`,children:[n.map((e,t)=>(0,d.jsxs)(`article`,{className:`rounded-lg border border-border`,children:[(0,d.jsxs)(`header`,{className:`border-b border-border bg-muted/30 px-3 py-1.5 text-[12px] text-muted-foreground`,children:[(0,d.jsx)(`span`,{className:`font-medium text-foreground`,children:t===0?`katherine`:`you`}),` commented`]}),(0,d.jsx)(c,{markdown:e,className:`px-3 py-2`})]},t)),(0,d.jsx)(o,{value:e,onChange:t,defaultView:`write`,height:150,uploadImage:f,placeholder:`Leave a comment. Paste a screenshot to attach it.`,label:`Comment`,statusBar:!1}),(0,d.jsx)(`div`,{className:`flex justify-end`,children:(0,d.jsx)(i,{type:`button`,size:`sm`,disabled:e.trim()===``,onClick:()=>{r(t=>[...t,e]),t(``)},children:`Comment`})})]})}var m=`import { useState } from "react"
import { MarkdownEditor, MarkdownPreview } from "@kitora/editors/markdown"
import { Button } from "@kitora/ui/button"

/** Reads a pasted screenshot as a data URL; a real app uploads it and answers the hosted URL. */
async function uploadImage(file: File): Promise<string> {
  return await new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => resolve(typeof reader.result === "string" ? reader.result : ""))
    reader.readAsDataURL(file)
  })
}

/**
 * A GitHub-style issue comment: Write / Preview without a split, image paste uploads and inserts
 * the markdown, and Comment posts it to the timeline above.
 */
export function IssueComment() {
  const [draft, setDraft] = useState("")
  const [posted, setPosted] = useState<readonly string[]>(["Steps to reproduce:\\n\\n1. Open a doc\\n2. Paste a table from Sheets\\n3. Column widths reset\\n\\nExpected: widths kept."])
  return (
    <div className="space-y-3">
      {posted.map((markdown, index) => (
        <article key={index} className="rounded-lg border border-border">
          <header className="border-b border-border bg-muted/30 px-3 py-1.5 text-[12px] text-muted-foreground">
            <span className="font-medium text-foreground">{index === 0 ? "katherine" : "you"}</span> commented
          </header>
          <MarkdownPreview markdown={markdown} className="px-3 py-2" />
        </article>
      ))}
      <MarkdownEditor
        value={draft}
        onChange={setDraft}
        defaultView="write"
        height={150}
        uploadImage={uploadImage}
        placeholder="Leave a comment. Paste a screenshot to attach it."
        label="Comment"
        statusBar={false}
      />
      <div className="flex justify-end">
        <Button
          type="button"
          size="sm"
          disabled={draft.trim() === ""}
          onClick={() => {
            setPosted((list) => [...list, draft])
            setDraft("")
          }}
        >
          Comment
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>n(()=>import(`./issue-comment-_gHDZChg.js`),[]));var h=`# Kitora

Composable, headless-first UI kits for **power users**: dense, keyboard-first, accessible.

## Install

\`\`\`bash
pnpm add @kitora/editors
\`\`\`

## Use

\`\`\`tsx
import { MarkdownEditor } from "@kitora/editors/markdown"

export function Notes() {
  return <MarkdownEditor defaultValue="# Notes" />
}
\`\`\`

## Kits

| Kit | Entry | Status |
| --- | --- | :---: |
| Rich text | \`@kitora/editors/rich-text\` | Stable |
| Markdown | \`@kitora/editors/markdown\` | Stable |
| Code | \`@kitora/editors/code\` | Beta |

## Roadmap

- [x] Live preview with scroll sync
- [x] List continuation and Tab nesting
- [ ] Collaborative cursors

> Every editor binds its shortcuts on the keyboard kit, so users can rebind them.

---

MIT © Kitora
`;function g(){let[e,t]=(0,u.useState)(h),[n,r]=(0,u.useState)(`split`),i=e===h;return(0,d.jsx)(o,{value:e,onChange:t,view:n,onViewChange:r,height:480,label:`README.md`,toolbarEnd:(0,d.jsxs)(`span`,{className:`me-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground`,children:[(0,d.jsx)(`span`,{className:i?`size-1.5 rounded-full bg-emerald-500`:`size-1.5 rounded-full bg-amber-500`}),i?`Saved`:`Edited`]})})}var _=`import { useState } from "react"
import { MarkdownEditor, type MarkdownView } from "@kitora/editors/markdown"

/** The word \`import\` inside the sample files below, kept out of line starts so the file reads as one import block followed by code. */
const IMPORT = "import"

const README = \`# Kitora

Composable, headless-first UI kits for **power users**: dense, keyboard-first, accessible.

## Install

\\\`\\\`\\\`bash
pnpm add @kitora/editors
\\\`\\\`\\\`

## Use

\\\`\\\`\\\`tsx
\${IMPORT} { MarkdownEditor } from "@kitora/editors/markdown"

export function Notes() {
  return <MarkdownEditor defaultValue="# Notes" />
}
\\\`\\\`\\\`

## Kits

| Kit | Entry | Status |
| --- | --- | :---: |
| Rich text | \\\`@kitora/editors/rich-text\\\` | Stable |
| Markdown | \\\`@kitora/editors/markdown\\\` | Stable |
| Code | \\\`@kitora/editors/code\\\` | Beta |

## Roadmap

- [x] Live preview with scroll sync
- [x] List continuation and Tab nesting
- [ ] Collaborative cursors

> Every editor binds its shortcuts on the keyboard kit, so users can rebind them.

---

MIT © Kitora
\`

/** A README editor: split view with scroll sync, every toolbar command, a word count, and the view kept in the URL-like state above. */
export function ReadmeEditor() {
  const [value, setValue] = useState(README)
  const [view, setView] = useState<MarkdownView>("split")
  const saved = value === README
  return (
    <MarkdownEditor
      value={value}
      onChange={setValue}
      view={view}
      onViewChange={setView}
      height={480}
      label="README.md"
      toolbarEnd={
        <span className="me-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground">
          <span className={saved ? "size-1.5 rounded-full bg-emerald-500" : "size-1.5 rounded-full bg-amber-500"} />
          {saved ? "Saved" : "Edited"}
        </span>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>n(()=>import(`./readme-editor-DCT7rLsL.js`),[]));function v(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(t,{title:`Markdown`,children:`Plain-text markdown with a live preview: a long document side by side, and a GitHub-style comment box.`}),(0,d.jsx)(s,{n:1,title:`A README editor`,blurb:`Split view with scroll sync, tables, task lists, fenced code with highlighting, a saved / edited marker in the toolbar, ⌘⇧P to cycle the view.`,code:_,children:(0,d.jsx)(l,{testId:`readme-editor`,children:(0,d.jsx)(g,{})})}),(0,d.jsx)(s,{n:2,title:`An issue comment`,blurb:`Write / Preview instead of split; paste a screenshot to upload it and insert its markdown; Comment posts to the timeline.`,code:m,children:(0,d.jsx)(l,{testId:`issue-comment`,children:(0,d.jsx)(p,{})})})]})}export{v as component};