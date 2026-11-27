import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{o as n}from"./editor-BBqZ0Dht.js";import{t as r}from"./rank-SsRXWqe_.js";import{Ec as i,Uc as a,ri as o,zc as s}from"./index-BZuUy872.js";import{o as c}from"./toolbar-P4AU-QvJ.js";import"./kit-gallery-BBavj2rC.js";import{t as l}from"./example-B67lLz1F.js";import{t as u}from"./-kits.editors.shared-BZC8f-J8.js";var d=e(a(),1),f=s(),p=[{id:`ada`,label:`Ada Lovelace`,description:`Engineering lead`},{id:`grace`,label:`Grace Hopper`,description:`Platform`},{id:`alan`,label:`Alan Turing`,description:`Research`},{id:`katherine`,label:`Katherine Johnson`,description:`Data`},{id:`margaret`,label:`Margaret Hamilton`,description:`Reliability`},{id:`linus`,label:`Linus Torvalds`,description:`Infrastructure`},{id:`barbara`,label:`Barbara Liskov`,description:`API design`},{id:`dennis`,label:`Dennis Ritchie`,description:`Tooling`}],m=120;async function h(e){return await new Promise(e=>setTimeout(e,m)),r(p.map(e=>({...e,title:e.label,keywords:[e.description??``]})),e,6)}var g=`<h1>Q4 launch plan</h1>
<p>Owner: <span data-type="mention" data-id="ada" data-label="Ada Lovelace"></span> · Status: <strong>in review</strong> · Target: <em>Nov 18</em></p>
<p>We ship the new workspace editor to every team in three waves. Read the <a href="https://example.com/rfc">RFC</a> first; questions go in the thread.</p>
<h2>Milestones</h2>
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="true"><p>Design review signed off</p></li>
  <li data-type="taskItem" data-checked="true"><p>Editor behind a flag in staging</p></li>
  <li data-type="taskItem" data-checked="false"><p>Wave 1: internal teams</p></li>
  <li data-type="taskItem" data-checked="false"><p>Wave 2 and 3: everyone</p></li>
</ul>
<h2>Rollout</h2>
<table>
  <tr><th><p>Wave</p></th><th><p>Teams</p></th><th><p>Date</p></th><th><p>Owner</p></th></tr>
  <tr><td><p>1</p></td><td><p>Internal</p></td><td><p>Nov 4</p></td><td><p>Grace</p></td></tr>
  <tr><td><p>2</p></td><td><p>Beta customers</p></td><td><p>Nov 11</p></td><td><p>Katherine</p></td></tr>
  <tr><td><p>3</p></td><td><p>Everyone</p></td><td><p>Nov 18</p></td><td><p>Ada</p></td></tr>
</table>
<h2>Flag</h2>
<pre><code class="language-ts">export const editorFlag = defineFlag({
  key: "workspace-editor",
  default: false,
  rollout: { wave: 1, percent: 100 },
})</code></pre>
<blockquote><p>Rollback is one flag flip. No migration runs until wave 3 is stable for a week.</p></blockquote>
<p></p>`;function _(){let e=(0,d.useRef)(null),[t,r]=(0,d.useState)(``),[i,a]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{className:`grid h-full min-h-0 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)]`,children:[(0,f.jsx)(n,{ref:e,defaultContent:g,mentions:h,onReady:e=>r(e.getMarkdown()),onChange:e=>r(e.getMarkdown()),label:`Q4 launch plan`,className:`h-full`,toolbarEnd:(0,f.jsx)(o,{type:`button`,size:`xs`,variant:`ghost`,onClick:()=>a(e=>!e),className:`hidden font-normal text-muted-foreground lg:inline-flex lg:items-center`,"aria-pressed":i,children:`Markdown`})}),i?(0,f.jsxs)(`div`,{className:`hidden min-h-0 flex-col overflow-hidden rounded-lg border border-border lg:flex`,children:[(0,f.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center justify-between border-b border-border bg-muted/30 px-3 text-[12px] text-muted-foreground`,children:[(0,f.jsx)(`span`,{children:`Live markdown export`}),(0,f.jsx)(o,{type:`button`,size:`xs`,variant:`ghost`,className:`font-normal text-muted-foreground`,onClick:()=>r(e.current?.getMarkdown()??``),children:`Refresh`})]}),(0,f.jsx)(`div`,{className:`min-h-0 flex-1 overflow-auto p-2`,role:`region`,"aria-label":`Markdown export`,tabIndex:0,children:(0,f.jsx)(c,{code:t||`Edit the document to see its markdown.`,language:`markdown`,className:`border-0 bg-transparent whitespace-pre-wrap`})})]}):null]})}var v=`import { useRef, useState } from "react"
import { RichTextEditor, type MentionItem, type RichTextEditorHandle } from "@kitora/editors/rich-text"
import { HighlightedCode, rankItems } from "@kitora/editors"
import { Button } from "@kitora/ui/button"

/** The team the demo mentions (stub: replace with your directory). */
const PEOPLE: readonly MentionItem[] = [
  { id: "ada", label: "Ada Lovelace", description: "Engineering lead" },
  { id: "grace", label: "Grace Hopper", description: "Platform" },
  { id: "alan", label: "Alan Turing", description: "Research" },
  { id: "katherine", label: "Katherine Johnson", description: "Data" },
  { id: "margaret", label: "Margaret Hamilton", description: "Reliability" },
  { id: "linus", label: "Linus Torvalds", description: "Infrastructure" },
  { id: "barbara", label: "Barbara Liskov", description: "API design" },
  { id: "dennis", label: "Dennis Ritchie", description: "Tooling" },
]

/** Pretend server latency for the async mention search, in ms. */
const SEARCH_LATENCY_MS = 120

/** An async people search, the shape a real directory lookup has (stub: replace with your API). */
async function searchPeople(query: string): Promise<readonly MentionItem[]> {
  await new Promise((resolve) => setTimeout(resolve, SEARCH_LATENCY_MS))
  return rankItems(PEOPLE.map((person) => ({ ...person, title: person.label, keywords: [person.description ?? ""] })), query, 6)
}

const DOC = \`<h1>Q4 launch plan</h1>
<p>Owner: <span data-type="mention" data-id="ada" data-label="Ada Lovelace"></span> · Status: <strong>in review</strong> · Target: <em>Nov 18</em></p>
<p>We ship the new workspace editor to every team in three waves. Read the <a href="https://example.com/rfc">RFC</a> first; questions go in the thread.</p>
<h2>Milestones</h2>
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="true"><p>Design review signed off</p></li>
  <li data-type="taskItem" data-checked="true"><p>Editor behind a flag in staging</p></li>
  <li data-type="taskItem" data-checked="false"><p>Wave 1: internal teams</p></li>
  <li data-type="taskItem" data-checked="false"><p>Wave 2 and 3: everyone</p></li>
</ul>
<h2>Rollout</h2>
<table>
  <tr><th><p>Wave</p></th><th><p>Teams</p></th><th><p>Date</p></th><th><p>Owner</p></th></tr>
  <tr><td><p>1</p></td><td><p>Internal</p></td><td><p>Nov 4</p></td><td><p>Grace</p></td></tr>
  <tr><td><p>2</p></td><td><p>Beta customers</p></td><td><p>Nov 11</p></td><td><p>Katherine</p></td></tr>
  <tr><td><p>3</p></td><td><p>Everyone</p></td><td><p>Nov 18</p></td><td><p>Ada</p></td></tr>
</table>
<h2>Flag</h2>
<pre><code class="language-ts">export const editorFlag = defineFlag({
  key: "workspace-editor",
  default: false,
  rollout: { wave: 1, percent: 100 },
})</code></pre>
<blockquote><p>Rollback is one flag flip. No migration runs until wave 3 is stable for a week.</p></blockquote>
<p></p>\`

/** A whole document: headings, mentions, links, a task list, a table, highlighted code, a quote, and the markdown it exports. */
export function DocumentEditor() {
  const editor = useRef<RichTextEditorHandle>(null)
  const [markdown, setMarkdown] = useState("")
  const [showMarkdown, setShowMarkdown] = useState(true)
  return (
    <div className="grid h-full min-h-0 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)]">
      <RichTextEditor
        ref={editor}
        defaultContent={DOC}
        mentions={searchPeople}
        onReady={(current) => setMarkdown(current.getMarkdown())}
        onChange={(current) => setMarkdown(current.getMarkdown())}
        label="Q4 launch plan"
        className="h-full"
        toolbarEnd={
          <Button type="button" size="xs" variant="ghost" onClick={() => setShowMarkdown((v) => !v)} className="hidden font-normal text-muted-foreground lg:inline-flex lg:items-center" aria-pressed={showMarkdown}>
            Markdown
          </Button>
        }
      />
      {showMarkdown ? (
        <div className="hidden min-h-0 flex-col overflow-hidden rounded-lg border border-border lg:flex">
          <div className="flex h-8 shrink-0 items-center justify-between border-b border-border bg-muted/30 px-3 text-[12px] text-muted-foreground">
            <span>Live markdown export</span>
            <Button type="button" size="xs" variant="ghost" className="font-normal text-muted-foreground" onClick={() => setMarkdown(editor.current?.getMarkdown() ?? "")}>
              Refresh
            </Button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto p-2" role="region" aria-label="Markdown export" tabIndex={0}>
            <HighlightedCode code={markdown || "Edit the document to see its markdown."} language="markdown" className="border-0 bg-transparent whitespace-pre-wrap" />
          </div>
        </div>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./document-QKtNW8po.js`),[]));var y=[{name:`@kitora/editors`,what:`The barrel: every layer below except the three editors.`},{name:`@kitora/editors/core`,what:`Pure TS: commands, languages, link safety, ranking, markdown text edits, and the adapter interfaces (LinkPolicy, Highlighter, CodeFormatter).`},{name:`@kitora/editors/dom`,what:`DOM helpers: undoable textarea edits, scroll sync, the ImageUploader seam (data-URL default), downloads.`},{name:`@kitora/editors/react`,what:`Headless hooks: the keyboard bridge, useControllable, useMarkdownEditor for your own markup.`},{name:`@kitora/editors/ui`,what:`Styled shared parts: the roving toolbar, HighlightedCode, the token palette and document typography (PROSE_CLASS: ui's Prose at size sm, the look ai-chat's Markdown shares, plus the editor-only rules in EDITOR_ONLY_CLASS).`},{name:`@kitora/editors/rich-text`,what:`RichTextEditor on Tiptap, as compound parts (Root, Toolbar, CommandButton, Content, BubbleMenu, SlashMenu…) plus the preset built from them.`},{name:`@kitora/editors/markdown`,what:`MarkdownEditor as compound parts (Root, Toolbar, Panes, Textarea, Preview, StatusBar…) plus the preset, and MarkdownPreview with link-policy and component slots.`},{name:`@kitora/editors/code`,what:`CodeEditor on CodeMirror 6 as compound parts (Root, Header, LanguagePicker, Surface, StatusBar…) plus the preset; 13 languages, lint, completions, format.`}];function b(){return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(t,{title:`Editors kit`,children:`Edit the plan: select text for the bubble menu, type "/" on an empty line for blocks, "@" to mention someone, click into the table or the code block for their controls. The panel on the right is the markdown the document exports, live.`}),(0,f.jsx)(l,{n:1,title:`A launch-plan document`,blurb:`Headings, a mention, a link, a to-do list, a resizable table, a highlighted code block with a language picker, a quote, word count, and markdown import / export in the … menu.`,code:v,children:(0,f.jsx)(u,{testId:`document`,height:620,children:(0,f.jsx)(_,{})})}),(0,f.jsx)(l,{n:2,title:`Entries`,blurb:`One package, one entry per layer and per editor, so the code editor never pulls in Tiptap, the rich-text editor never pulls in CodeMirror, and the core imports nothing at all.`,children:(0,f.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,f.jsx)(`tbody`,{children:y.map(e=>(0,f.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,f.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px] whitespace-nowrap`,children:e.name}),(0,f.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{b as component};