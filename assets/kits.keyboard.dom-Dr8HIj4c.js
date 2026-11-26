import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{l as n,p as r,s as i,u as a}from"./provider-DEyelEMR.js";import{u as o}from"./stroke-FK0Ft7zS.js";import{Bc as s,Cc as c,Ic as l}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as u}from"./example-B8EaWveR.js";var d=e(s(),1),f=l();function p(){let[e]=(0,d.useState)(()=>r({platform:typeof navigator>`u`?`win`:o(),report:()=>{}}));return e}function m({label:e,testId:t,children:n}){return(0,f.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,f.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,f.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function h(){let e=p(),[t,r]=(0,d.useState)(`nothing yet`),[a,o]=(0,d.useState)(``);return(0,d.useEffect)(()=>{let t=e=>()=>r(e),a=e.register({"go.inbox":{title:`Go to inbox`,run:t(`go.inbox`)},"go.home":{title:`Go home`,run:t(`go.home`)},"file.saveAll":{title:`Save all`,run:t(`file.saveAll`)}}),s=e.bind(`default`,[{key:`g i`,command:`go.inbox`,when:n(`chords`)},{key:`g`,command:`go.home`,when:n(`chords`)},{key:`Mod+K Mod+S`,command:`file.saveAll`,when:n(`chords`)}]),c=e.subscribe(t=>{t===`pending`&&o(e.pending()?.pressed.join(` `)??``)}),l=i(e);return()=>{l.detach(),c(),s.dispose(),a()}},[e]),(0,f.jsxs)(`div`,{"data-kb-scope":`chords`,"data-testid":`kb-chords-panel`,tabIndex:0,className:`space-y-1 rounded border border-dashed p-3 focus-visible:outline-2 focus-visible:outline-ring`,children:[(0,f.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Click here, then press `,(0,f.jsx)(`kbd`,{children:`g`}),` `,(0,f.jsx)(`kbd`,{children:`i`}),`, `,(0,f.jsx)(`kbd`,{children:`g`}),` alone and wait, or `,(0,f.jsx)(`kbd`,{children:`Mod+K`}),` `,(0,f.jsx)(`kbd`,{children:`Mod+S`}),`.`]}),(0,f.jsx)(m,{label:`pending`,testId:`kb-chords-pending`,children:a||`—`}),(0,f.jsx)(m,{label:`ran`,testId:`kb-chords-ran`,children:t})]})}var g=`import { useEffect, useState, type ReactNode } from "react"
import { attachKeyboard, createKeyboard, detectPlatform, scopeWhen, type Keyboard } from "@kitora/keyboard"

// Chords and sequences: the dom layer schedules kb.tick() at the pending deadline
// (the core has no timers), so an ambiguous prefix like \`g\` fires after the 1 s
// timeout. The bindings live while focus is inside the \`chords\` scope.

/** An engine for this demo; the platform is read on the client (the server render says \`win\`). */
function useEngine(): Keyboard {
  const [kb] = useState(() => createKeyboard({ platform: typeof navigator === "undefined" ? "win" : detectPlatform(), report: () => {} }))
  return kb
}

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function DomChords() {
  const kb = useEngine()
  const [ran, setRan] = useState("nothing yet")
  const [pending, setPending] = useState("")
  useEffect(() => {
    const show = (id: string) => () => setRan(id)
    const undo = kb.register({
      "go.inbox": { title: "Go to inbox", run: show("go.inbox") },
      "go.home": { title: "Go home", run: show("go.home") },
      "file.saveAll": { title: "Save all", run: show("file.saveAll") },
    })
    const rules = kb.bind("default", [
      { key: "g i", command: "go.inbox", when: scopeWhen("chords") },
      { key: "g", command: "go.home", when: scopeWhen("chords") }, // fires when the sequence times out
      { key: "Mod+K Mod+S", command: "file.saveAll", when: scopeWhen("chords") },
    ])
    const stopPending = kb.subscribe((kind) => {
      if (kind === "pending") setPending(kb.pending()?.pressed.join(" ") ?? "")
    })
    const attachment = attachKeyboard(kb)
    return () => {
      attachment.detach()
      stopPending()
      rules.dispose()
      undo()
    }
  }, [kb])
  return (
    <div data-kb-scope="chords" data-testid="kb-chords-panel" tabIndex={0} className="space-y-1 rounded border border-dashed p-3 focus-visible:outline-2 focus-visible:outline-ring">
      <p className="text-[12px] text-muted-foreground">
        Click here, then press <kbd>g</kbd> <kbd>i</kbd>, <kbd>g</kbd> alone and wait, or <kbd>Mod+K</kbd> <kbd>Mod+S</kbd>.
      </p>
      <Stat label="pending" testId="kb-chords-pending">
        {pending || "—"}
      </Stat>
      <Stat label="ran" testId="kb-chords-ran">
        {ran}
      </Stat>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>c(()=>import(`./dom-chords-DyMNNx5V.js`),[]));var _=`h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,v=`h-7 w-full rounded border bg-background px-2 text-[12px]`;function y(){let[e]=(0,d.useState)(()=>r({platform:typeof navigator>`u`?`win`:o(),report:()=>{}}));return e}function b({label:e,testId:t,children:n}){return(0,f.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,f.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,f.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function x(){let e=(0,d.useRef)(null);return(0,d.useEffect)(()=>{let t=e.current;if(!t||t.shadowRoot)return;let n=t.attachShadow({mode:`open`}).appendChild(document.createElement(`input`));n.placeholder=`inside a shadow root`,n.setAttribute(`aria-label`,`Shadow root field`),n.style.cssText=`box-sizing:border-box;height:28px;width:100%;border:1px solid #8884;border-radius:4px;padding:0 8px;font:inherit;font-size:12px;background:transparent;color:inherit`},[]),(0,f.jsx)(`div`,{ref:e,"data-testid":`kb-fields-shadow-host`})}function S(){let e=y(),[t,r]=(0,d.useState)(0),[a,o]=(0,d.useState)(0);return(0,d.useEffect)(()=>{let t=e.register({"demo.count":{title:`Count`,run:()=>r(e=>e+1)},"demo.submit":{title:`Submit`,run:()=>o(e=>e+1)}}),a=e.bind(`default`,[{key:`j`,command:`demo.count`,when:n(`fields`)},{key:`Mod+Enter`,command:`demo.submit`,when:n(`fields`)}]),s=i(e);return()=>{s.detach(),a.dispose(),t()}},[e]),(0,f.jsxs)(`div`,{"data-kb-scope":`fields`,className:`grid gap-2 sm:grid-cols-2`,children:[(0,f.jsx)(`button`,{type:`button`,className:_,"data-testid":`kb-fields-button`,children:`Focus me, press j`}),(0,f.jsx)(`input`,{className:v,placeholder:`input: j types`,"aria-label":`Input field`,"data-testid":`kb-fields-input`}),(0,f.jsx)(`textarea`,{className:`min-h-12 w-full rounded border bg-background p-2 text-[12px]`,placeholder:`textarea`,"aria-label":`Textarea field`,"data-testid":`kb-fields-textarea`}),(0,f.jsx)(`div`,{contentEditable:!0,suppressContentEditableWarning:!0,role:`textbox`,"aria-label":`Rich text`,className:`min-h-12 rounded border p-2 text-[12px]`,"data-testid":`kb-fields-editable`,children:`contenteditable`}),(0,f.jsx)(x,{}),(0,f.jsxs)(`div`,{className:`space-y-1`,children:[(0,f.jsx)(b,{label:`j count`,testId:`kb-fields-count`,children:t}),(0,f.jsx)(b,{label:`Mod+Enter`,testId:`kb-fields-submits`,children:a})]})]})}var C=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { attachKeyboard, createKeyboard, detectPlatform, scopeWhen, type Keyboard } from "@kitora/keyboard"

// Typing in fields: inputs, textareas, selects, contenteditable and inputs inside
// open shadow roots are fields. A plain key (j) never fires while typing; a Mod
// combo (Mod+Enter) still does (the smart policy). Keys between compositionstart
// and compositionend (IME) are never shortcuts.

const BUTTON = "h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
const FIELD = "h-7 w-full rounded border bg-background px-2 text-[12px]"

/** An engine for this demo; the platform is read on the client (the server render says \`win\`). */
function useEngine(): Keyboard {
  const [kb] = useState(() => createKeyboard({ platform: typeof navigator === "undefined" ? "win" : detectPlatform(), report: () => {} }))
  return kb
}

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

/** An input inside an open shadow root: the dom layer sees through it and treats it as a field. */
function ShadowInput() {
  const host = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = host.current
    if (!el || el.shadowRoot) return
    const input = el.attachShadow({ mode: "open" }).appendChild(document.createElement("input"))
    input.placeholder = "inside a shadow root"
    input.setAttribute("aria-label", "Shadow root field")
    input.style.cssText = "box-sizing:border-box;height:28px;width:100%;border:1px solid #8884;border-radius:4px;padding:0 8px;font:inherit;font-size:12px;background:transparent;color:inherit"
  }, [])
  return <div ref={host} data-testid="kb-fields-shadow-host" />
}

export function DomFields() {
  const kb = useEngine()
  const [count, setCount] = useState(0)
  const [submits, setSubmits] = useState(0)
  useEffect(() => {
    const undo = kb.register({
      "demo.count": { title: "Count", run: () => setCount((n) => n + 1) },
      "demo.submit": { title: "Submit", run: () => setSubmits((n) => n + 1) },
    })
    const rules = kb.bind("default", [
      { key: "j", command: "demo.count", when: scopeWhen("fields") }, // a plain key: never while typing
      { key: "Mod+Enter", command: "demo.submit", when: scopeWhen("fields") }, // a Mod combo: also in fields
    ])
    const attachment = attachKeyboard(kb)
    return () => {
      attachment.detach()
      rules.dispose()
      undo()
    }
  }, [kb])
  return (
    <div data-kb-scope="fields" className="grid gap-2 sm:grid-cols-2">
      <button type="button" className={BUTTON} data-testid="kb-fields-button">
        Focus me, press j
      </button>
      <input className={FIELD} placeholder="input: j types" aria-label="Input field" data-testid="kb-fields-input" />
      <textarea className="min-h-12 w-full rounded border bg-background p-2 text-[12px]" placeholder="textarea" aria-label="Textarea field" data-testid="kb-fields-textarea" />
      <div contentEditable suppressContentEditableWarning role="textbox" aria-label="Rich text" className="min-h-12 rounded border p-2 text-[12px]" data-testid="kb-fields-editable">
        contenteditable
      </div>
      <ShadowInput />
      <div className="space-y-1">
        <Stat label="j count" testId="kb-fields-count">
          {count}
        </Stat>
        <Stat label="Mod+Enter" testId="kb-fields-submits">
          {submits}
        </Stat>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>c(()=>import(`./dom-fields-DTFlz3XP.js`),[]));var w=`<!doctype html><html><body style="font:12px system-ui;margin:8px;color-scheme:light dark"><button id="inside">Inside the iframe: press x</button></body></html>`;function T(){let[e]=(0,d.useState)(()=>r({platform:typeof navigator>`u`?`win`:o(),report:()=>{}}));return e}function E({label:e,testId:t,children:n}){return(0,f.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,f.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,f.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function D(){let e=T(),t=(0,d.useRef)(null),[n,r]=(0,d.useState)(0);return(0,d.useEffect)(()=>{let n=e.register({"frame.x":{title:`x in the frame`,run:()=>r(e=>e+1)}}),a=e.bind(`default`,[{key:`x`,command:`frame.x`}]),o=null,s=t.current,c=()=>{o?.detach();let t=s?.contentDocument;o=t?i(e,{document:t}):null};return s?.addEventListener(`load`,c),s?.contentDocument?.readyState===`complete`&&s.contentDocument.getElementById(`inside`)&&c(),()=>{s?.removeEventListener(`load`,c),o?.detach(),a.dispose(),n()}},[e]),(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,f.jsx)(`iframe`,{ref:t,title:`Keyboard iframe demo`,srcDoc:w,sandbox:`allow-same-origin`,"data-testid":`kb-iframe`,className:`h-14 w-72 rounded border`}),(0,f.jsx)(E,{label:`x in the iframe`,testId:`kb-iframe-count`,children:n})]})}var O=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { attachKeyboard, createKeyboard, detectPlatform, type Keyboard } from "@kitora/keyboard"

// Iframes: attach the same engine to a same-origin iframe's document as well
// (one listener there too). Nothing relies on the parent realm's instanceof.

const FRAME_DOC = \`<!doctype html><html><body style="font:12px system-ui;margin:8px;color-scheme:light dark"><button id="inside">Inside the iframe: press x</button></body></html>\`

/** An engine for this demo; the platform is read on the client (the server render says \`win\`). */
function useEngine(): Keyboard {
  const [kb] = useState(() => createKeyboard({ platform: typeof navigator === "undefined" ? "win" : detectPlatform(), report: () => {} }))
  return kb
}

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function DomIframe() {
  const kb = useEngine()
  const frame = useRef<HTMLIFrameElement>(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    const undo = kb.register({ "frame.x": { title: "x in the frame", run: () => setCount((n) => n + 1) } })
    const rules = kb.bind("default", [{ key: "x", command: "frame.x" }])
    let attachment: { detach(): void } | null = null
    const el = frame.current
    // (re)attach whenever the frame's document loads
    const connect = () => {
      attachment?.detach()
      const doc = el?.contentDocument
      attachment = doc ? attachKeyboard(kb, { document: doc }) : null
    }
    el?.addEventListener("load", connect)
    // the frame may have loaded before this effect ran
    if (el?.contentDocument?.readyState === "complete" && el.contentDocument.getElementById("inside")) connect()
    return () => {
      el?.removeEventListener("load", connect)
      attachment?.detach()
      rules.dispose()
      undo()
    }
  }, [kb])
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* No scripts of its own; the keyboard kit attaches to its contentDocument, which needs the same origin. */}
      <iframe ref={frame} title="Keyboard iframe demo" srcDoc={FRAME_DOC} sandbox="allow-same-origin" data-testid="kb-iframe" className="h-14 w-72 rounded border" />
      <Stat label="x in the iframe" testId="kb-iframe-count">
        {count}
      </Stat>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>c(()=>import(`./dom-iframe-CHqZzQDe.js`),[]));function k(){let[e]=(0,d.useState)(()=>r({platform:typeof navigator>`u`?`win`:o(),report:()=>{}}));return e}function A({label:e,testId:t,children:n}){return(0,f.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,f.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,f.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function j(e){let t=[e.ctrlKey&&`Ctrl`,e.metaKey&&`Meta`,e.altKey&&`Alt`,e.shiftKey&&`Shift`].filter(Boolean).join(`+`);return`${e.type} ${t?`${t}+`:``}${e.key} (${e.code||`no code`})${e.repeat?` repeat`:``}${e.isComposing?` composing`:``}`}function M(){let e=k(),[t,n]=(0,d.useState)(`press any key`),[r,a]=(0,d.useState)([]),[o,s]=(0,d.useState)(`pointer`);return(0,d.useEffect)(()=>{let t=i(e,{onDispatch:({stroke:e,decision:r})=>{e&&n(`${j(e)} → ${r.outcome}${r.reason?` (${r.reason})`:``}`),s(t.modality())}}),r=t.keys.subscribe(()=>a(t.keys.pressed()));return()=>{r(),t.detach()}},[e]),(0,f.jsxs)(`div`,{className:`space-y-1`,children:[(0,f.jsx)(A,{label:`last`,testId:`kb-inspector-last`,children:t}),(0,f.jsx)(A,{label:`held`,testId:`kb-held`,children:r.length>0?r.join(` + `):`nothing`}),(0,f.jsx)(A,{label:`modality`,testId:`kb-modality`,children:o})]})}var N=`import { useEffect, useState, type ReactNode } from "react"
import { attachKeyboard, createKeyboard, detectPlatform, type DomDispatch, type Keyboard, type KeyStroke, type Modality } from "@kitora/keyboard"

// Key inspector: every key event as the engine sees it, the keys held right now
// (reset on window blur) and the input modality. attachKeyboard adds one keydown
// and one keyup listener per document, in the capture phase.

/** An engine for this demo; the platform is read on the client (the server render says \`win\`). */
function useEngine(): Keyboard {
  const [kb] = useState(() => createKeyboard({ platform: typeof navigator === "undefined" ? "win" : detectPlatform(), report: () => {} }))
  return kb
}

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

function strokeText(stroke: KeyStroke): string {
  const mods = [stroke.ctrlKey && "Ctrl", stroke.metaKey && "Meta", stroke.altKey && "Alt", stroke.shiftKey && "Shift"].filter(Boolean).join("+")
  return \`\${stroke.type} \${mods ? \`\${mods}+\` : ""}\${stroke.key} (\${stroke.code || "no code"})\${stroke.repeat ? " repeat" : ""}\${stroke.isComposing ? " composing" : ""}\`
}

export function DomInspector() {
  const kb = useEngine()
  const [last, setLast] = useState("press any key")
  const [held, setHeld] = useState<readonly string[]>([])
  const [modality, setModality] = useState<Modality>("pointer")
  useEffect(() => {
    const attachment = attachKeyboard(kb, {
      onDispatch: ({ stroke, decision }: DomDispatch) => {
        // stroke is null when the dom timer fired a pending sequence
        if (stroke) setLast(\`\${strokeText(stroke)} → \${decision.outcome}\${decision.reason ? \` (\${decision.reason})\` : ""}\`)
        // "keyboard" | "pointer" | "virtual", also on <html data-modality>
        setModality(attachment.modality())
      },
    })
    // held keys (attachment.keys.isPressed("Shift") asks for one), reset on blur
    const stopHeld = attachment.keys.subscribe(() => setHeld(attachment.keys.pressed()))
    return () => {
      stopHeld()
      attachment.detach()
    }
  }, [kb])
  return (
    <div className="space-y-1">
      <Stat label="last" testId="kb-inspector-last">
        {last}
      </Stat>
      <Stat label="held" testId="kb-held">
        {held.length > 0 ? held.join(" + ") : "nothing"}
      </Stat>
      <Stat label="modality" testId="kb-modality">
        {modality}
      </Stat>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>c(()=>import(`./dom-inspector-CJa2x0nS.js`),[]));var P=`h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`;function F(){let[e]=(0,d.useState)(()=>r({platform:typeof navigator>`u`?`win`:o(),report:()=>{}}));return e}function I({label:e,testId:t,children:n}){return(0,f.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,f.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,f.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function L(){let e=F(),[t]=(0,d.useState)(a),[r,o]=(0,d.useState)(!1),[s,c]=(0,d.useState)(0),l=(0,d.useRef)(null),u=(0,d.useRef)(null),p=(0,d.useRef)(null);return(0,d.useEffect)(()=>{let r=e.register({"page.new":{title:`New (page)`,run:()=>c(e=>e+1)},"dialog.close":{title:`Close dialog`,run:()=>{l.current?.(),l.current=null,o(!1),u.current?.focus()}}}),a=e.bind(`default`,[{key:`n`,command:`page.new`,when:n(`overlay`)},{key:`Escape`,command:`dialog.close`,overlay:`demo-dialog`}]),s=i(e,{layers:t});return()=>{s.detach(),a.dispose(),r()}},[e,t]),(0,d.useEffect)(()=>{r&&p.current?.focus()},[r]),(0,f.jsxs)(`div`,{"data-kb-scope":`overlay`,className:`space-y-2`,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,f.jsx)(`button`,{ref:u,type:`button`,className:P,onClick:()=>{l.current=t.push(`demo-dialog`),o(!0)},"data-testid":`kb-overlay-open`,children:`Open dialog`}),(0,f.jsx)(I,{label:`page n`,testId:`kb-overlay-count`,children:s}),(0,f.jsx)(I,{label:`overlayOpen`,testId:`kb-overlay-open-key`,children:String(r)})]}),r?(0,f.jsxs)(`div`,{ref:p,role:`dialog`,"aria-label":`Demo dialog`,tabIndex:-1,"data-testid":`kb-overlay-dialog`,className:`rounded border bg-card p-3 text-[12px] shadow-sm focus-visible:outline-2 focus-visible:outline-ring`,children:[`A layer is on top: `,(0,f.jsx)(`kbd`,{children:`n`}),` does nothing here, `,(0,f.jsx)(`kbd`,{children:`Escape`}),` closes.`]}):null]})}var R=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { attachKeyboard, createKeyboard, createLayerStack, detectPlatform, scopeWhen, type Keyboard } from "@kitora/keyboard"

// A dialog shadows the page: while the dialog's layer is on top of the layer
// stack only its own rules take part, so the page's \`n\` sits out until it
// closes. In an app, pass @kitora/overlay's adapter over its own stack
// instead of createLayerStack().

const BUTTON = "h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"

/** An engine for this demo; the platform is read on the client (the server render says \`win\`). */
function useEngine(): Keyboard {
  const [kb] = useState(() => createKeyboard({ platform: typeof navigator === "undefined" ? "win" : detectPlatform(), report: () => {} }))
  return kb
}

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function DomOverlay() {
  const kb = useEngine()
  const [layers] = useState(createLayerStack)
  const [open, setOpen] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const closeRef = useRef<(() => void) | null>(null)
  const opener = useRef<HTMLButtonElement>(null)
  const dialog = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const closeDialog = () => {
      closeRef.current?.() // pop the layer
      closeRef.current = null
      setOpen(false)
      opener.current?.focus()
    }
    const undo = kb.register({
      "page.new": { title: "New (page)", run: () => setPageCount((n) => n + 1) },
      "dialog.close": { title: "Close dialog", run: closeDialog },
    })
    const rules = kb.bind("default", [
      { key: "n", command: "page.new", when: scopeWhen("overlay") }, // the page's key
      { key: "Escape", command: "dialog.close", overlay: "demo-dialog" }, // only while that dialog is on top
    ])
    const attachment = attachKeyboard(kb, { layers })
    return () => {
      attachment.detach()
      rules.dispose()
      undo()
    }
  }, [kb, layers])
  useEffect(() => {
    if (open) dialog.current?.focus()
  }, [open])
  const show = () => {
    closeRef.current = layers.push("demo-dialog")
    setOpen(true)
  }
  return (
    <div data-kb-scope="overlay" className="space-y-2">
      <div className="flex items-center gap-3">
        <button ref={opener} type="button" className={BUTTON} onClick={show} data-testid="kb-overlay-open">
          Open dialog
        </button>
        <Stat label="page n" testId="kb-overlay-count">
          {pageCount}
        </Stat>
        <Stat label="overlayOpen" testId="kb-overlay-open-key">
          {String(open)}
        </Stat>
      </div>
      {open ? (
        <div ref={dialog} role="dialog" aria-label="Demo dialog" tabIndex={-1} data-testid="kb-overlay-dialog" className="rounded border bg-card p-3 text-[12px] shadow-sm focus-visible:outline-2 focus-visible:outline-ring">
          A layer is on top: <kbd>n</kbd> does nothing here, <kbd>Escape</kbd> closes.
        </div>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>c(()=>import(`./dom-overlay-CHA5hVhT.js`),[]));var z=`h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,B=[`Alpha`,`Bravo`,`Charlie`,`Delta`];function V(){let[e]=(0,d.useState)(()=>r({platform:typeof navigator>`u`?`win`:o(),report:()=>{}}));return e}function H({label:e,testId:t,children:n}){return(0,f.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,f.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,f.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function U(){let e=V(),[t,r]=(0,d.useState)(0),[a,o]=(0,d.useState)(0);return(0,d.useEffect)(()=>{let t=e.register({"demo.next":{title:`Global next`,run:()=>o(e=>e+1)}}),r=e.bind(`default`,[{key:`j`,command:`demo.next`,when:n(`owned`)}]),a=i(e);return()=>{a.detach(),r.dispose(),t()}},[e]),(0,f.jsxs)(`div`,{"data-kb-scope":`owned`,className:`flex flex-wrap items-start gap-4`,children:[(0,f.jsx)(`ul`,{role:`listbox`,"aria-label":`Owned keys list`,"aria-activedescendant":`kb-owned-${t}`,tabIndex:0,"data-kb-owns":`ArrowUp ArrowDown j k`,"data-testid":`kb-owned-list`,onKeyDown:e=>{let t=e.key===`ArrowDown`||e.key===`j`?1:e.key===`ArrowUp`||e.key===`k`?-1:0;t!==0&&(e.preventDefault(),r(e=>(e+t+B.length)%B.length))},className:`w-40 rounded border p-1 text-[12px] focus-visible:outline-2 focus-visible:outline-ring`,children:B.map((e,n)=>(0,f.jsx)(`li`,{id:`kb-owned-${n}`,role:`option`,"aria-selected":n===t,className:`rounded px-2 py-0.5 ${n===t?`bg-muted font-medium`:``}`,children:e},e))}),(0,f.jsxs)(`div`,{className:`space-y-2`,children:[(0,f.jsx)(`button`,{type:`button`,className:z,"data-testid":`kb-owned-outside`,children:`Outside the list: j is global`}),(0,f.jsx)(H,{label:`active option`,testId:`kb-owned-active`,children:B[t]}),(0,f.jsx)(H,{label:`global j`,testId:`kb-owned-global`,children:a})]})]})}var W=`import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react"
import { attachKeyboard, createKeyboard, detectPlatform, scopeWhen, type Keyboard } from "@kitora/keyboard"

// Widgets own their keys: the list declares j, k and the arrows as its own with
// data-kb-owns, so its handler wins over the global j while focus is inside it.
// Outside the list, j runs the global command. The binding is scoped to this card.

const BUTTON = "h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
const OPTIONS = ["Alpha", "Bravo", "Charlie", "Delta"] as const

/** An engine for this demo; the platform is read on the client (the server render says \`win\`). */
function useEngine(): Keyboard {
  const [kb] = useState(() => createKeyboard({ platform: typeof navigator === "undefined" ? "win" : detectPlatform(), report: () => {} }))
  return kb
}

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function DomOwned() {
  const kb = useEngine()
  const [active, setActive] = useState(0)
  const [global, setGlobal] = useState(0)
  useEffect(() => {
    const undo = kb.register({ "demo.next": { title: "Global next", run: () => setGlobal((n) => n + 1) } })
    const rules = kb.bind("default", [{ key: "j", command: "demo.next", when: scopeWhen("owned") }])
    const attachment = attachKeyboard(kb)
    return () => {
      attachment.detach()
      rules.dispose()
      undo()
    }
  }, [kb])
  const move = (event: KeyboardEvent) => {
    const step = event.key === "ArrowDown" || event.key === "j" ? 1 : event.key === "ArrowUp" || event.key === "k" ? -1 : 0
    if (step === 0) return
    event.preventDefault()
    setActive((at) => (at + step + OPTIONS.length) % OPTIONS.length)
  }
  return (
    <div data-kb-scope="owned" className="flex flex-wrap items-start gap-4">
      <ul
        role="listbox"
        aria-label="Owned keys list"
        aria-activedescendant={\`kb-owned-\${active}\`}
        tabIndex={0}
        data-kb-owns="ArrowUp ArrowDown j k"
        data-testid="kb-owned-list"
        onKeyDown={move}
        className="w-40 rounded border p-1 text-[12px] focus-visible:outline-2 focus-visible:outline-ring"
      >
        {OPTIONS.map((label, index) => (
          <li key={label} id={\`kb-owned-\${index}\`} role="option" aria-selected={index === active} className={\`rounded px-2 py-0.5 \${index === active ? "bg-muted font-medium" : ""}\`}>
            {label}
          </li>
        ))}
      </ul>
      <div className="space-y-2">
        <button type="button" className={BUTTON} data-testid="kb-owned-outside">
          Outside the list: j is global
        </button>
        <Stat label="active option" testId="kb-owned-active">
          {OPTIONS[active]}
        </Stat>
        <Stat label="global j" testId="kb-owned-global">
          {global}
        </Stat>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>c(()=>import(`./dom-owned-CQiBj8Cq.js`),[]));var G=Array.from({length:24},(e,t)=>`Row ${t+1}`);function K(){let[e]=(0,d.useState)(()=>r({platform:typeof navigator>`u`?`win`:o(),report:()=>{}}));return e}function q(){let e=K(),t=(0,d.useRef)(null);return(0,d.useEffect)(()=>{let r=e=>()=>{let n=[...t.current?.querySelectorAll(`tr`)??[]],r=n.findIndex(e=>e===document.activeElement);n[Math.min(n.length-1,Math.max(0,r+e))]?.focus({preventScroll:!0})},a=e.register({"rows.next":{title:`Next row`,run:r(1)},"rows.prev":{title:`Previous row`,run:r(-1)}}),o=e.bind(`default`,[{key:`ArrowDown`,command:`rows.next`,when:n(`reveal`)},{key:`ArrowUp`,command:`rows.prev`,when:n(`reveal`)}]),s=i(e,{reveal:!0});return()=>{s.detach(),o.dispose(),a()}},[e]),(0,f.jsx)(`div`,{"data-kb-scope":`reveal`,"data-testid":`kb-reveal-scroller`,className:`h-40 overflow-auto rounded border`,children:(0,f.jsxs)(`table`,{className:`w-full text-[12px]`,children:[(0,f.jsx)(`thead`,{"data-testid":`kb-reveal-head`,className:`sticky top-0 bg-muted`,children:(0,f.jsx)(`tr`,{children:(0,f.jsx)(`th`,{className:`h-8 px-2 text-left font-medium`,children:`Name (sticky header)`})})}),(0,f.jsx)(`tbody`,{ref:t,children:G.map(e=>(0,f.jsx)(`tr`,{tabIndex:0,className:`focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring`,children:(0,f.jsx)(`td`,{className:`h-7 border-t px-2`,children:e})},e))})]})})}var J=`import { useEffect, useRef, useState } from "react"
import { attachKeyboard, createKeyboard, detectPlatform, scopeWhen, type Keyboard } from "@kitora/keyboard"

// Focus revealed past a sticky header: with \`reveal: true\` a keyboard focus move
// scrolls the target clear of sticky bars in both directions. A sticky <thead>
// counts on its own; mark other sticky bars with data-kb-sticky.

const ROWS = Array.from({ length: 24 }, (_, index) => \`Row \${index + 1}\`)

/** An engine for this demo; the platform is read on the client (the server render says \`win\`). */
function useEngine(): Keyboard {
  const [kb] = useState(() => createKeyboard({ platform: typeof navigator === "undefined" ? "win" : detectPlatform(), report: () => {} }))
  return kb
}

export function DomReveal() {
  const kb = useEngine()
  const body = useRef<HTMLTableSectionElement>(null)
  useEffect(() => {
    const step = (delta: number) => () => {
      const rows = [...(body.current?.querySelectorAll("tr") ?? [])]
      const at = rows.findIndex((row) => row === document.activeElement)
      const next = rows[Math.min(rows.length - 1, Math.max(0, at + delta))]
      next?.focus({ preventScroll: true }) // the dom layer does the revealing
    }
    const undo = kb.register({
      "rows.next": { title: "Next row", run: step(1) },
      "rows.prev": { title: "Previous row", run: step(-1) },
    })
    const rules = kb.bind("default", [
      { key: "ArrowDown", command: "rows.next", when: scopeWhen("reveal") },
      { key: "ArrowUp", command: "rows.prev", when: scopeWhen("reveal") },
    ])
    const attachment = attachKeyboard(kb, { reveal: true })
    return () => {
      attachment.detach()
      rules.dispose()
      undo()
    }
  }, [kb])
  return (
    <div data-kb-scope="reveal" data-testid="kb-reveal-scroller" className="h-40 overflow-auto rounded border">
      <table className="w-full text-[12px]">
        <thead data-testid="kb-reveal-head" className="sticky top-0 bg-muted">
          <tr>
            <th className="h-8 px-2 text-left font-medium">Name (sticky header)</th>
          </tr>
        </thead>
        <tbody ref={body}>
          {ROWS.map((label) => (
            <tr key={label} tabIndex={0} className="focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring">
              <td className="h-7 border-t px-2">{label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>c(()=>import(`./dom-reveal-Dl1sC_yg.js`),[]));function Y(){return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(t,{title:`DOM layer`,children:`One capture-phase listener per document feeds the engine; the dom layer decides what the core cannot see: is the target a field, is an IME composing, does a focused widget own the key, which overlay is on top, which scopes hold focus.`}),(0,f.jsx)(u,{n:1,title:`Key inspector`,blurb:`Every key event as the engine sees it, the keys held right now (reset on window blur) and the input modality (K12, K16, K77, K87).`,code:N,children:(0,f.jsx)(M,{})}),(0,f.jsx)(u,{n:2,title:`Chords and sequences`,blurb:`The dom layer schedules the engine's tick at the pending deadline, so an ambiguous prefix fires after the timeout (K22–K24).`,code:g,children:(0,f.jsx)(h,{})}),(0,f.jsx)(u,{n:3,title:`Typing in fields`,blurb:`A plain j in an input, textarea, contenteditable or a shadow-root input types; Mod+Enter still fires there; IME keys never fire (K9, K88–K90, K94).`,code:C,children:(0,f.jsx)(S,{})}),(0,f.jsx)(u,{n:4,title:`Widgets own their keys`,blurb:`The list declares j, k and the arrows as its own, so its handler wins over the global j while focus is inside it (K92); the binding is scoped to this card (K27, K131).`,code:W,children:(0,f.jsx)(U,{})}),(0,f.jsx)(u,{n:5,title:`A dialog shadows the page`,blurb:`While the dialog's layer is on top only its own rules take part; the page's n comes back when it closes (K28, K31).`,code:R,children:(0,f.jsx)(L,{})}),(0,f.jsx)(u,{n:6,title:`Iframes`,blurb:`Attach to a same-origin iframe's document as well; nothing relies on the parent realm's instanceof.`,code:O,children:(0,f.jsx)(D,{})}),(0,f.jsx)(u,{n:7,title:`Focus revealed past a sticky header`,blurb:`Click a row, then use the arrows: the focused row is scrolled clear of the sticky header in both directions (K80).`,code:J,children:(0,f.jsx)(q,{})})]})}export{Y as component};