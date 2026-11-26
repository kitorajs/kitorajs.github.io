import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{Bc as n,Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{a,c as o,d as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./editor-c_lwRTu7.js";import{o as g}from"./toolbar-t4KBTWO9.js";import{t as _}from"./lazy-nx2aO-8u.js";import"./kit-gallery-Bph7isB2.js";import{t as v}from"./example-BGnSQG2Y.js";import{t as y}from"./preview-DnUhpeTJ.js";import{t as b}from"./-kits.editors.shared-DcQGKGel.js";var x=e(n(),1),S=i(),C=`export function greet(name: string): string {
  return \`Hello, \${name}!\`
}
`;function w(){let[e,t]=(0,x.useState)(C);return(0,S.jsx)(m,{filename:`greet.ts`,value:e,onChange:t,height:160})}var T=`import { useState } from "react"
import { CodeEditor } from "@kitora/editors/code"

const START = \`export function greet(name: string): string {
  return \\\`Hello, \\\${name}!\\\`
}
\`

/** A controlled code editor. The language comes from the file name; ⌘F searches, Alt+Z wraps. */
export function BasicCodeEditor() {
  const [code, setCode] = useState(START)
  return <CodeEditor filename="greet.ts" value={code} onChange={setCode} height={160} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>r(()=>import(`./code-editor-XE660ONr.js`),[]));var E=`select team, count(*) as seats
from members
where active = true
group by team
order by seats desc;`;function D(){return(0,S.jsx)(g,{code:E,language:`sql`})}var O=`import { HighlightedCode } from "@kitora/editors"

const SQL = \`select team, count(*) as seats
from members
where active = true
group by team
order by seats desc;\`

/** Read-only highlighting with the same palette as the editors, for docs and snippets. */
export function BasicHighlightedCode() {
  return <HighlightedCode code={SQL} language="sql" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./highlighted-code-BLPu98Vq.js`),[]));var k=new Set([`select`,`from`,`where`,`group`,`by`,`order`,`desc`,`and`,`as`,`count`]),A={highlight:e=>e.split(`
`).map(e=>e.split(/(\b)/).filter(Boolean).map(e=>({kind:k.has(e.toLowerCase())?`keyword`:/^\d+$/.test(e)?`number`:`plain`,text:e})))},j=e=>e.startsWith(`https://docs.example.com/`)?e:null,M=`See [the guide](https://docs.example.com/sql) for joins; [this other link](https://elsewhere.example.org) stays text.`;function N(){return(0,S.jsxs)(`div`,{className:`grid gap-2`,children:[(0,S.jsx)(g,{highlighter:A,language:`sql`,code:`select team, count(*) as seats
from members
where seats > 10
order by seats desc;`}),(0,S.jsx)(y,{markdown:M,linkPolicy:j,className:`rounded-lg border border-border p-3`})]})}var P=`import type { Highlighter, TokenKind } from "@kitora/display/core"
import { HighlightedCode } from "@kitora/editors"
import { MarkdownPreview } from "@kitora/editors/markdown"

/** Words this tiny highlighter colours; everything else stays plain. */
const KEYWORDS = new Set(["select", "from", "where", "group", "by", "order", "desc", "and", "as", "count"])

/**
 * A custom \`Highlighter\`: Kitora's one highlighting seam, so any engine (Shiki, Prism, a server
 * call) fits the same shape, and a \`HighlighterProvider\` would set it for every kit at once. This one
 * splits each line on word boundaries and marks SQL keywords and numbers with the seam's token kinds,
 * so the kit's shared colours still apply.
 */
const sqlKeywords: Highlighter = {
  highlight: (code) =>
    code.split("\\n").map((line) =>
      line
        .split(/(\\b)/)
        .filter(Boolean)
        .map((part) => {
          const kind: TokenKind = KEYWORDS.has(part.toLowerCase()) ? "keyword" : /^\\d+$/.test(part) ? "number" : "plain"
          return { kind, text: part }
        }),
    ),
}

/** A link policy adapter: only links to this company's docs become links; the rest render as text. */
const docsOnly = (href: string): string | null => (href.startsWith("https://docs.example.com/") ? href : null)

const NOTE = \`See [the guide](https://docs.example.com/sql) for joins; [this other link](https://elsewhere.example.org) stays text.\`

/** Swapping the adapters: a custom highlighter on read-only code, and a custom link policy on the markdown renderer. */
export function CustomHighlighter() {
  return (
    <div className="grid gap-2">
      <HighlightedCode highlighter={sqlKeywords} language="sql" code={"select team, count(*) as seats\\nfrom members\\nwhere seats > 10\\norder by seats desc;"} />
      <MarkdownPreview markdown={NOTE} linkPolicy={docsOnly} className="rounded-lg border border-border p-3" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>r(()=>import(`./custom-highlighter-B7DBJRdK.js`),[]));var F=`{"name":"kitora","private":true,"scripts":{"dev":"vite"}}`;function I(){let[e,t]=(0,x.useState)(F),[n,r]=(0,x.useState)(null);return(0,S.jsxs)(p,{filename:`package.json`,value:e,onChange:t,onSave:()=>r(new Date().toLocaleTimeString()),children:[(0,S.jsxs)(c,{children:[(0,S.jsx)(u,{}),(0,S.jsx)(`span`,{className:`flex-1`}),(0,S.jsx)(a,{languages:[`json`,`yaml`,`plaintext`]}),(0,S.jsx)(s,{}),(0,S.jsx)(f,{}),(0,S.jsx)(o,{})]}),(0,S.jsx)(h,{height:140}),(0,S.jsx)(l,{children:({cursor:e,language:t})=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`span`,{children:[`Ln `,e.line,`, Col `,e.column,` · `,t]}),(0,S.jsx)(`span`,{className:`ms-auto`,children:n?`Saved ${n}`:`Not saved`})]})})]})}var L=`import { useState } from "react"
import { CodeEditorFilename, CodeEditorFormatButton, CodeEditorHeader, CodeEditorLanguagePicker, CodeEditorRoot, CodeEditorSaveButton, CodeEditorStatusBar, CodeEditorSurface, CodeEditorWrapButton } from "@kitora/editors/code"

const START = \`{"name":"kitora","private":true,"scripts":{"dev":"vite"}}\`

/**
 * The code editor from its parts: a header with the file name, a language picker limited to
 * three languages, wrap, format and save, the CodeMirror surface, and a status bar that adds
 * the last save time through its render slot.
 */
export function CodeEditorFromParts() {
  const [code, setCode] = useState(START)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  return (
    <CodeEditorRoot filename="package.json" value={code} onChange={setCode} onSave={() => setSavedAt(new Date().toLocaleTimeString())}>
      <CodeEditorHeader>
        <CodeEditorFilename />
        <span className="flex-1" />
        <CodeEditorLanguagePicker languages={["json", "yaml", "plaintext"]} />
        <CodeEditorWrapButton />
        <CodeEditorFormatButton />
        <CodeEditorSaveButton />
      </CodeEditorHeader>
      <CodeEditorSurface height={140} />
      <CodeEditorStatusBar>
        {({ cursor, language }) => (
          <>
            <span>
              Ln {cursor.line}, Col {cursor.column} · {language}
            </span>
            <span className="ms-auto">{savedAt ? \`Saved \${savedAt}\` : "Not saved"}</span>
          </>
        )}
      </CodeEditorStatusBar>
    </CodeEditorRoot>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>r(()=>import(`./code-parts-D9adXdro.js`),[]));function R(){return(0,S.jsx)(d,{defaultValue:`SELECT id, title
FROM issues
WHERE open;`,language:`sql`,readOnly:!0,header:!1,statusBar:!1,height:80,label:`Query`})}var z=`import { CodeEditorPreset } from "@kitora/editors/code"

/** The preset under its own name (the same component as \`CodeEditor\`): read-only, no header, no status bar. */
export function CodePresetByName() {
  return <CodeEditorPreset defaultValue={"SELECT id, title\\nFROM issues\\nWHERE open;"} language="sql" readOnly header={false} statusBar={false} height={80} label="Query" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./code-preset-BTY8MR3U.js`),[]));function B(){return(0,S.jsx)(_,{filename:`greet.ts`,defaultValue:`export function greet(name: string): string {
  return \`Hello, \${name}\`
}
`,label:`Loaded on demand`})}var V=`import { LazyCodeEditor } from "@kitora/editors/code/lazy"

/** The code editor loaded on demand: a frame the size of the file shows at once, CodeMirror arrives in its own chunk. */
export function LazyCode() {
  return <LazyCodeEditor filename="greet.ts" defaultValue={'export function greet(name: string): string {\\n  return \`Hello, \${name}\`\\n}\\n'} label="Loaded on demand" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>r(()=>import(`./code-lazy-B7xsGjtF.js`),[]));function H(){return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(t,{title:`Basics: code`,children:"`CodeEditor` is CodeMirror 6 with the kit's look; `HighlightedCode` shows code read-only with the same colours."}),(0,S.jsx)(v,{n:1,title:`The code editor`,blurb:`A file name picks the language and shows the header (language picker, wrap, format). The status bar tracks the caret and problems.`,code:T,children:(0,S.jsx)(b,{testId:`basic-code-editor`,children:(0,S.jsx)(w,{})})}),(0,S.jsx)(v,{n:2,title:`Read-only highlighting`,blurb:`No editor, no CodeMirror: the highlighter in scope (the built-in one by default, Shiki when a provider sets it) rendered as React spans.`,code:O,children:(0,S.jsx)(b,{testId:`basic-highlighted-code`,children:(0,S.jsx)(D,{})})}),(0,S.jsx)(v,{n:3,title:`Custom adapters`,blurb:"Every seam is small and typed with a default: here a hand-written `Highlighter` (Kitora's one highlighting seam) replaces the built-in one, and a `linkPolicy` lets only docs links through the markdown renderer.",code:P,children:(0,S.jsx)(b,{testId:`custom-highlighter`,children:(0,S.jsx)(N,{})})}),(0,S.jsx)(v,{n:4,title:`From parts`,blurb:"`CodeEditorRoot` with `CodeEditorHeader`, `CodeEditorFilename`, `CodeEditorLanguagePicker`, `CodeEditorWrapButton`, `CodeEditorFormatButton`, `CodeEditorSaveButton`, `CodeEditorSurface` and a `CodeEditorStatusBar` render slot. ⌘S saves.",code:L,children:(0,S.jsx)(b,{testId:`code-editor-from-parts`,children:(0,S.jsx)(I,{})})}),(0,S.jsx)(v,{n:5,title:`The preset by name`,blurb:"`CodeEditorPreset` is `CodeEditor` without the part statics: read-only, no header, no status bar.",code:z,children:(0,S.jsx)(b,{testId:`code-preset`,children:(0,S.jsx)(R,{})})}),(0,S.jsx)(v,{n:6,title:`Loaded on demand`,blurb:"`LazyCodeEditor` from `@kitora/editors/code/lazy` takes the same props as `CodeEditor`. It draws a frame the size of the file at once and loads CodeMirror (about 300 kB gzip) in its own chunk on first render.",code:V,children:(0,S.jsx)(b,{testId:`code-lazy`,children:(0,S.jsx)(B,{})})})]})}export{H as component};