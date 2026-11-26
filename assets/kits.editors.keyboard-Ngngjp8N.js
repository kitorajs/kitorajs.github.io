import{n as e,r as t}from"./cheatsheet-8D0Y-FyF.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{o as r}from"./editor-iQGpXTtw.js";import{t as i}from"./provider-D0Iw1w2F.js";import{u as a}from"./hooks-BRcZguZq.js";import{t as o}from"./shortcuts-editor-DdhxgHrZ.js";import{Cc as s,Ic as c}from"./index-9y5uwRd3.js";import{t as l}from"./editor-D8VGyGC7.js";import{t as u}from"./editor-CY9HZjAh.js";import"./kit-gallery-B-Yr9fP4.js";import{t as d}from"./example-CZLJLtIC.js";import{t as f}from"./-kits.editors.shared-EEX68O0f.js";var p=c();function m(){return(0,p.jsx)(e,{entries:a(t),className:`max-h-80 overflow-auto`})}function h(){return(0,p.jsx)(i,{children:(0,p.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]`,children:[(0,p.jsxs)(`div`,{className:`space-y-3`,children:[(0,p.jsx)(r,{defaultContent:`<p>Try <strong>⌘B</strong>, <em>⌘I</em>, ⌘K for a link, ⌘⌥2 for a heading. Rebind Bold on the right and try again.</p>`,minHeight:100,statusBar:!1}),(0,p.jsx)(u,{defaultValue:`Select a word and press ⌘B.

⌘⇧P cycles write / split / preview.`,height:130,statusBar:!1}),(0,p.jsx)(l,{language:`json`,defaultValue:`{"press":"Shift+Alt+F to format","wrap":"Alt+Z"}`,height:90})]}),(0,p.jsxs)(`div`,{className:`space-y-3`,children:[(0,p.jsx)(`section`,{"aria-label":`Shortcuts editor`,className:`rounded-lg border border-border`,children:(0,p.jsx)(o,{className:`max-h-80`})}),(0,p.jsx)(`section`,{"aria-label":`Cheatsheet`,className:`rounded-lg border border-border p-2`,children:(0,p.jsx)(m,{})})]})]})})}var g=`import { CheatsheetPanel, KeyboardProvider, ShortcutsEditor, cheatsheetEntries, useKeyboardValue } from "@kitora/keyboard"
import { CodeEditor } from "@kitora/editors/code"
import { MarkdownEditor } from "@kitora/editors/markdown"
import { RichTextEditor } from "@kitora/editors/rich-text"

/** The live cheatsheet of every registered command, grouped by category. */
function LiveCheatsheet() {
  const entries = useKeyboardValue(cheatsheetEntries)
  return <CheatsheetPanel entries={entries} className="max-h-80 overflow-auto" />
}

/**
 * Editors under one KeyboardProvider: their commands join the app's registry, show in the
 * cheatsheet and the shortcuts editor, and a rebind there changes the editor (and its tooltips) at once.
 */
export function EditorsKeyboard() {
  return (
    <KeyboardProvider>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div className="space-y-3">
          <RichTextEditor defaultContent="<p>Try <strong>⌘B</strong>, <em>⌘I</em>, ⌘K for a link, ⌘⌥2 for a heading. Rebind Bold on the right and try again.</p>" minHeight={100} statusBar={false} />
          <MarkdownEditor defaultValue={"Select a word and press ⌘B.\\n\\n⌘⇧P cycles write / split / preview."} height={130} statusBar={false} />
          <CodeEditor language="json" defaultValue={'{"press":"Shift+Alt+F to format","wrap":"Alt+Z"}'} height={90} />
        </div>
        <div className="space-y-3">
          <section aria-label="Shortcuts editor" className="rounded-lg border border-border">
            <ShortcutsEditor className="max-h-80" />
          </section>
          <section aria-label="Cheatsheet" className="rounded-lg border border-border p-2">
            <LiveCheatsheet />
          </section>
        </div>
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>s(()=>import(`./keyboard-9J_IcgZx.js`),[]));function _(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(n,{title:`Keyboard`,children:`Every editor command is a @kitora/keyboard command with a default key. Under a KeyboardProvider they join the app's registry: users rebind them in the shortcuts editor and the change reaches the editor and its tooltips at once. Without a provider each editor runs a local engine, so shortcuts always work.`}),(0,p.jsx)(d,{n:1,title:`Rebind editor shortcuts`,blurb:`Find Bold in the shortcuts editor (category Editor), record a new key, then press it in the rich-text or markdown editor. The cheatsheet updates too.`,code:g,children:(0,p.jsx)(f,{testId:`editors-keyboard`,children:(0,p.jsx)(h,{})})})]})}export{_ as component};