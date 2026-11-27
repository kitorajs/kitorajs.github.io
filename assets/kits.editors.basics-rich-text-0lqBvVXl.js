const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor-BBqZ0Dht.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./calendar-days-D1rxO_ek.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./hash-BG8ZiI9f.js";import{S as i,_ as a,a as o,b as s,c,d as l,f as ee,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as te,x as S}from"./editor-BBqZ0Dht.js";import{t as C}from"./rank-SsRXWqe_.js";import{Ec as w,Uc as ne,zc as T}from"./index-BZuUy872.js";import{i as E,n as D,r as O,t as k}from"./toolbar-P4AU-QvJ.js";import{a as A}from"./shell-FNzHunqu.js";import"./kit-gallery-BBavj2rC.js";import{t as j}from"./example-B67lLz1F.js";import{t as M}from"./-kits.editors.shared-BZC8f-J8.js";var N=T();function P(){return(0,N.jsx)(g,{defaultContent:`<p>Select some text to see the <strong>bubble menu</strong>, or type <code>/</code> on a new line.</p>`,minHeight:120})}var F=`import { RichTextEditor } from "@kitora/editors/rich-text"

/** The smallest rich-text editor: starting HTML, and everything else on by default. Type "/" for blocks. */
export function BasicRichText() {
  return <RichTextEditor defaultContent="<p>Select some text to see the <strong>bubble menu</strong>, or type <code>/</code> on a new line.</p>" minHeight={120} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>w(()=>import(`./rich-text-BT1kOMia.js`),[]));var I=[{id:`u1`,label:`Ada Lovelace`,description:`Engineering`},{id:`u2`,label:`Grace Hopper`,description:`Compilers`},{id:`u3`,label:`Alan Turing`,description:`Research`},{id:`u4`,label:`Katherine Johnson`,description:`Flight dynamics`}];function L(){return(0,N.jsx)(g,{defaultContent:`<p>Type @ to mention someone: </p>`,mentions:e=>C(I.map(e=>({...e,title:e.label})),e,8),toolbar:!1,statusBar:!1,minHeight:80})}var R=`import { RichTextEditor, type MentionItem } from "@kitora/editors/rich-text"
import { rankItems } from "@kitora/editors"

const PEOPLE: readonly MentionItem[] = [
  { id: "u1", label: "Ada Lovelace", description: "Engineering" },
  { id: "u2", label: "Grace Hopper", description: "Compilers" },
  { id: "u3", label: "Alan Turing", description: "Research" },
  { id: "u4", label: "Katherine Johnson", description: "Flight dynamics" },
]

/** Mentions: give the editor a source for "@". It may be async (a server search). */
export function BasicMentions() {
  return (
    <RichTextEditor
      defaultContent="<p>Type @ to mention someone: </p>"
      mentions={(query) => rankItems(PEOPLE.map((person) => ({ ...person, title: person.label })), query, 8)}
      toolbar={false}
      statusBar={false}
      minHeight={80}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>w(()=>import(`./rich-text-mentions-B6uvpTGe.js`),[]));var z=e(ne(),1),B=`## Release notes

- **Faster** search
- A new [changelog](https://example.com/changelog)

| Plan | Seats |
| ---- | ----- |
| Team | 10    |
`;function V(){let[e,t]=(0,z.useState)(B);return(0,N.jsxs)(`div`,{className:`grid grid-cols-1 gap-2 md:grid-cols-2`,children:[(0,N.jsx)(g,{defaultContent:B,contentType:`markdown`,onChange:e=>t(e.getMarkdown()),statusBar:!1,minHeight:200}),(0,N.jsx)(`pre`,{className:`min-h-[200px] overflow-auto rounded-lg border border-border bg-muted/40 p-3 font-mono text-[12px] leading-relaxed whitespace-pre-wrap`,"aria-label":`Markdown output`,children:e})]})}var H=`import { useState } from "react"
import { RichTextEditor } from "@kitora/editors/rich-text"

const START = \`## Release notes

- **Faster** search
- A new [changelog](https://example.com/changelog)

| Plan | Seats |
| ---- | ----- |
| Team | 10    |
\`

/** Markdown in, markdown out: seed the editor with markdown and read \`getMarkdown()\` on every change. */
export function BasicMarkdownRoundTrip() {
  const [markdown, setMarkdown] = useState(START)
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <RichTextEditor defaultContent={START} contentType="markdown" onChange={(editor) => setMarkdown(editor.getMarkdown())} statusBar={false} minHeight={200} />
      <pre className="min-h-[200px] overflow-auto rounded-lg border border-border bg-muted/40 p-3 font-mono text-[12px] leading-relaxed whitespace-pre-wrap" aria-label="Markdown output">
        {markdown}
      </pre>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>w(()=>import(`./rich-text-markdown-C6BY_hVq.js`),[]));var U=[{id:`ada`,label:`Ada Lovelace`},{id:`grace`,label:`Grace Hopper`}];function W(){let{editor:e}=s();return(0,N.jsx)(D,{label:`Insert today's date`,onClick:()=>e?.chain().focus().insertContent(new Date().toISOString().slice(0,10)).run(),children:(0,N.jsx)(t,{className:`size-3.5`})})}function G(){return(0,N.jsxs)(m,{defaultContent:`<h2>Meeting notes</h2><p>Type / for blocks, @ for people.</p>`,mentions:e=>U.filter(t=>t.label.toLowerCase().includes(e.toLowerCase())),label:`Meeting notes`,children:[(0,N.jsxs)(a,{children:[(0,N.jsx)(te,{}),(0,N.jsx)(_,{}),(0,N.jsx)(O,{}),(0,N.jsx)(b,{}),(0,N.jsx)(v,{command:`richText.bold`}),(0,N.jsx)(v,{command:`richText.italic`}),(0,N.jsx)(v,{command:`richText.link`}),(0,N.jsx)(v,{command:`richText.taskList`}),(0,N.jsx)(O,{}),(0,N.jsx)(p,{}),(0,N.jsx)(c,{}),(0,N.jsx)(W,{}),(0,N.jsx)(E,{}),(0,N.jsx)(l,{})]}),(0,N.jsx)(ee,{}),(0,N.jsx)(o,{}),(0,N.jsx)(f,{minHeight:140}),(0,N.jsx)(h,{}),(0,N.jsx)(u,{children:e=>(0,N.jsxs)(`span`,{children:[e.words,` words`]})}),(0,N.jsx)(d,{}),(0,N.jsx)(x,{})]})}var K=`import { CalendarDays } from "lucide-react"
import { ToolbarButton, ToolbarSeparator, ToolbarSpacer } from "@kitora/editors/ui"
import { RichTextBlockPicker, RichTextBubbleMenu, RichTextCommandButton, RichTextContent, RichTextContextBar, RichTextInsertImageButton, RichTextInsertTableButton, RichTextMentionMenu, RichTextMoreMenu, RichTextPromptBar, RichTextRedoButton, RichTextRoot, RichTextSlashMenu, RichTextStatusBar, RichTextToolbar, RichTextUndoButton, useRichTextContext, type MentionItem } from "@kitora/editors/rich-text"

const PEOPLE: readonly MentionItem[] = [
  { id: "ada", label: "Ada Lovelace" },
  { id: "grace", label: "Grace Hopper" },
]

/** A host button inside the kit toolbar: \`ToolbarButton\` plus the editor from \`useRichTextContext\`. */
function InsertDateButton() {
  const { editor } = useRichTextContext()
  return (
    <ToolbarButton label="Insert today's date" onClick={() => editor?.chain().focus().insertContent(new Date().toISOString().slice(0, 10)).run()}>
      <CalendarDays className="size-3.5" />
    </ToolbarButton>
  )
}

/**
 * The rich-text editor from its parts: a trimmed toolbar with one host button, the link prompt,
 * the table / code-block bar, the document, the bubble, slash and mention menus, and a status bar
 * that writes its own text through the render slot.
 */
export function RichTextFromParts() {
  return (
    <RichTextRoot defaultContent="<h2>Meeting notes</h2><p>Type / for blocks, @ for people.</p>" mentions={(query) => PEOPLE.filter((person) => person.label.toLowerCase().includes(query.toLowerCase()))} label="Meeting notes">
      <RichTextToolbar>
        <RichTextUndoButton />
        <RichTextRedoButton />
        <ToolbarSeparator />
        <RichTextBlockPicker />
        <RichTextCommandButton command="richText.bold" />
        <RichTextCommandButton command="richText.italic" />
        <RichTextCommandButton command="richText.link" />
        <RichTextCommandButton command="richText.taskList" />
        <ToolbarSeparator />
        <RichTextInsertTableButton />
        <RichTextInsertImageButton />
        <InsertDateButton />
        <ToolbarSpacer />
        <RichTextMoreMenu />
      </RichTextToolbar>
      <RichTextPromptBar />
      <RichTextContextBar />
      <RichTextContent minHeight={140} />
      <RichTextBubbleMenu />
      <RichTextStatusBar>{(state) => <span>{state.words} words</span>}</RichTextStatusBar>
      <RichTextSlashMenu />
      <RichTextMentionMenu />
    </RichTextRoot>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>w(()=>import(`./rich-text-parts-gXtJmqVk.js`),[]));function q(){return(0,N.jsx)(y,{defaultContent:`<p>The preset, with the bubble menu off and the document capped at 160px.</p>`,bubbleMenu:!1,minHeight:100,maxHeight:160,label:`Preset`})}var J=`import { RichTextEditorPreset } from "@kitora/editors/rich-text"

/** The preset under its own name (the same component as \`RichTextEditor\`), with the bubble menu off and a height cap. */
export function RichTextPresetByName() {
  return <RichTextEditorPreset defaultContent="<p>The preset, with the bubble menu off and the document capped at 160px.</p>" bubbleMenu={false} minHeight={100} maxHeight={160} label="Preset" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>w(()=>import(`./rich-text-preset-DUVbld4o.js`),[]));var Y=[`bug`,`design`,`docs`,`performance`,`release`],X={open:!1,items:[],query:``,active:0,rect:null};function Z(e){let t=X,n=new Set,r=e=>{t=e;for(let e of n)e()};return{render:S().render,get:()=>t,subscribe:e=>(n.add(e),()=>n.delete(e)),select:t=>{e(t),r(X)},highlight:e=>r({...t,active:e}),show:r}}function re(){let[e,t]=(0,z.useState)(`Fix the login page #`),n=(0,z.useRef)(null),[a]=(0,z.useState)(()=>Z(e=>t(t=>t.replace(/#\w*$/,`#${e} `)))),o=(0,z.useSyncExternalStore)(a.subscribe,a.get,a.get),s=e=>{t(e);let r=/#(\w*)$/.exec(e),i=r?.[1]??``,o=r?Y.filter(e=>e.startsWith(i.toLowerCase())):[];a.show(r?{open:!0,items:o,query:i,active:0,rect:n.current?.getBoundingClientRect()??null}:X)};return(0,N.jsxs)(`div`,{className:`rounded-lg border border-border`,children:[(0,N.jsx)(k,{label:`Tags`,controls:`tag-input`,children:(0,N.jsx)(D,{label:`Add a tag`,keyText:`#`,onClick:()=>s(`${e.trimEnd()} #`),children:(0,N.jsx)(r,{className:`size-3.5`})})}),(0,N.jsx)(`input`,{id:`tag-input`,ref:n,"aria-label":`Issue title`,value:e,onChange:e=>s(e.target.value),onKeyDown:e=>{if(!(!o.open||o.items.length===0))if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;a.highlight((o.active+t+o.items.length)%o.items.length)}else if(e.key===`Enter`){e.preventDefault();let t=o.items[o.active];t!==void 0&&a.select(t)}else e.key===`Escape`&&a.show(X)},className:`h-8 w-full bg-transparent px-2 text-[13px] outline-none focus-visible:ring-1 focus-visible:ring-ring`}),(0,N.jsx)(i,{store:a,label:`Tags`,itemKey:e=>e,renderItem:e=>(0,N.jsxs)(`span`,{className:`text-[13px]`,children:[`#`,e]})})]})}var Q=`import { useRef, useState, useSyncExternalStore } from "react"
import { Hash } from "lucide-react"
import { createSuggestionStore, SuggestionMenu, type SuggestionSnapshot, type SuggestionStore } from "@kitora/editors/rich-text"
import { EditorToolbar, ToolbarButton } from "@kitora/editors/ui"

const TAGS = ["bug", "design", "docs", "performance", "release"] as const
type Tag = (typeof TAGS)[number]

const CLOSED: SuggestionSnapshot<Tag> = { open: false, items: [], query: "", active: 0, rect: null }

/**
 * A suggestion store driven by a plain input instead of Tiptap: \`SuggestionMenu\` only reads
 * \`get\`, \`subscribe\`, \`select\` and \`highlight\`, so any text field can open the same menu. The
 * Tiptap \`render\` hooks come from \`createSuggestionStore\` and stay unused here.
 */
function inputTagStore(onPick: (tag: Tag) => void): SuggestionStore<Tag> & { readonly show: (snapshot: SuggestionSnapshot<Tag>) => void } {
  let snapshot = CLOSED
  const listeners = new Set<() => void>()
  const set = (next: SuggestionSnapshot<Tag>): void => {
    snapshot = next
    for (const listener of listeners) listener()
  }
  return {
    render: createSuggestionStore<Tag>().render,
    get: () => snapshot,
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    select: (tag) => {
      onPick(tag)
      set(CLOSED)
    },
    highlight: (index) => set({ ...snapshot, active: index }),
    show: set,
  }
}

/** \`EditorToolbar\` + \`ToolbarButton\` over an input, and a \`SuggestionMenu\` that opens on "#". */
export function TagInputSuggestions() {
  const [text, setText] = useState("Fix the login page #")
  const input = useRef<HTMLInputElement>(null)
  const [store] = useState(() => inputTagStore((tag) => setText((current) => current.replace(/#\\w*$/, \`#\${tag} \`))))
  const snapshot = useSyncExternalStore(store.subscribe, store.get, store.get)

  const update = (next: string): void => {
    setText(next)
    const match = /#(\\w*)$/.exec(next)
    const query = match?.[1] ?? ""
    const items = match ? TAGS.filter((tag) => tag.startsWith(query.toLowerCase())) : []
    store.show(match ? { open: true, items, query, active: 0, rect: input.current?.getBoundingClientRect() ?? null } : CLOSED)
  }

  return (
    <div className="rounded-lg border border-border">
      <EditorToolbar label="Tags" controls="tag-input">
        <ToolbarButton label="Add a tag" keyText="#" onClick={() => update(\`\${text.trimEnd()} #\`)}>
          <Hash className="size-3.5" />
        </ToolbarButton>
      </EditorToolbar>
      <input
        id="tag-input"
        ref={input}
        aria-label="Issue title"
        value={text}
        onChange={(event) => update(event.target.value)}
        onKeyDown={(event) => {
          if (!snapshot.open || snapshot.items.length === 0) return
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault()
            const step = event.key === "ArrowDown" ? 1 : -1
            store.highlight((snapshot.active + step + snapshot.items.length) % snapshot.items.length)
          } else if (event.key === "Enter") {
            event.preventDefault()
            const tag = snapshot.items[snapshot.active]
            if (tag !== undefined) store.select(tag)
          } else if (event.key === "Escape") {
            store.show(CLOSED)
          }
        }}
        className="h-8 w-full bg-transparent px-2 text-[13px] outline-none focus-visible:ring-1 focus-visible:ring-ring"
      />
      <SuggestionMenu store={store} label="Tags" itemKey={(tag) => tag} renderItem={(tag) => <span className="text-[13px]">#{tag}</span>} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>w(()=>import(`./suggestion-menu-BLn_XCO1.js`),[]));var ie=(0,z.lazy)(()=>w(()=>import(`./editor-BBqZ0Dht.js`).then(e=>e.y).then(e=>({default:e.RichTextEditorPreset})),__vite__mapDeps([0])));function ae(e){return(0,N.jsx)(z.Suspense,{fallback:(0,N.jsx)(A,{kind:`rich-text`,header:e.toolbar===!1?!1:`toolbar`,statusBar:e.statusBar!==!1,bodyStyle:{minHeight:e.minHeight??160,maxHeight:e.maxHeight},className:e.className}),children:(0,N.jsx)(ie,{...e})})}function oe(){return(0,N.jsx)(ae,{defaultContent:`<p>This editor's code loaded when it first rendered; the frame you saw first is the same size.</p>`,minHeight:100,label:`Loaded on demand`})}var $=`import { LazyRichTextEditor } from "@kitora/editors/rich-text/lazy"

/** The editor loaded on demand: the frame shows at once, tiptap arrives in its own chunk. Same props as \`RichTextEditor\`. */
export function LazyRichText() {
  return <LazyRichTextEditor defaultContent="<p>This editor's code loaded when it first rendered; the frame you saw first is the same size.</p>" minHeight={100} label="Loaded on demand" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>w(()=>import(`./rich-text-lazy-CyaB52V2.js`),[]));function se(){return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(n,{title:`Basics: rich text`,children:"`RichTextEditor` is one component: toolbar, bubble menu, slash menu, tables, images and shortcuts are on by default; turn parts off with props."}),(0,N.jsx)(j,{n:1,title:`The editor`,blurb:`Starting HTML and nothing else. Select text for the bubble menu; type / on a new line for blocks.`,code:F,children:(0,N.jsx)(M,{testId:`basic-rich-text`,children:(0,N.jsx)(P,{})})}),(0,N.jsx)(j,{n:2,title:`Mentions`,blurb:"Pass `mentions`, a sync or async source for what follows @. Without a toolbar or status bar it is a compact input.",code:R,children:(0,N.jsx)(M,{testId:`basic-mentions`,children:(0,N.jsx)(L,{})})}),(0,N.jsx)(j,{n:3,title:`Markdown in, markdown out`,blurb:'`contentType="markdown"` reads markdown; `editor.getMarkdown()` writes it, tables included.',code:H,children:(0,N.jsx)(M,{testId:`basic-markdown-round-trip`,children:(0,N.jsx)(V,{})})}),(0,N.jsx)(j,{n:4,title:`From parts`,blurb:"`RichTextRoot` with `RichTextToolbar`, `RichTextUndoButton`, `RichTextRedoButton`, `RichTextBlockPicker`, `RichTextCommandButton`, `RichTextInsertTableButton`, `RichTextInsertImageButton`, `RichTextMoreMenu`, `RichTextPromptBar`, `RichTextContextBar`, `RichTextContent`, `RichTextBubbleMenu`, `RichTextStatusBar`, `RichTextSlashMenu` and `RichTextMentionMenu`, plus a host `ToolbarButton`.",code:K,children:(0,N.jsx)(M,{testId:`rich-text-from-parts`,children:(0,N.jsx)(G,{})})}),(0,N.jsx)(j,{n:5,title:`The preset by name`,blurb:"`RichTextEditorPreset` is `RichTextEditor` without the part statics; turn parts off with props.",code:J,children:(0,N.jsx)(M,{testId:`rich-text-preset`,children:(0,N.jsx)(q,{})})}),(0,N.jsx)(j,{n:6,title:`Toolbar and type-ahead for any field`,blurb:"`EditorToolbar` and `ToolbarButton` over a plain input, and `SuggestionMenu` reading a hand-driven `SuggestionStore`. Type # for tags.",code:Q,children:(0,N.jsx)(M,{testId:`suggestion-menu`,children:(0,N.jsx)(re,{})})}),(0,N.jsx)(j,{n:7,title:`Loaded on demand`,blurb:"`LazyRichTextEditor` from `@kitora/editors/rich-text/lazy` takes the same props as `RichTextEditor`. It draws the frame, toolbar band and status band at once and loads tiptap (about 300 kB gzip) in its own chunk on first render.",code:$,children:(0,N.jsx)(M,{testId:`rich-text-lazy`,children:(0,N.jsx)(oe,{})})})]})}export{se as component};