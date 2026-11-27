import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{c as t,o as n,s as r}from"./cheatsheet-SysYmzKC.js";import{t as i}from"./bell-C51rsixf.js";import{s as a}from"./kit-docs-Cf27Kpa-.js";import{t as o}from"./search-B6QTpngp.js";import{t as s}from"./keyboard-layers-C6YOI-El.js";import{t as c}from"./input-CLjf4jLu.js";import{t as ee}from"./command-palette-C8vgjOP2.js";import{d as l,f as te,h as u,p as d,r as f,t as p}from"./provider-Chu9Vnk7.js";import{u as m}from"./stroke-Ds8jL2d2.js";import{a as h,i as g,n as _,s as v,t as y}from"./a11y-BTeMNu_j.js";import{r as b}from"./focus-DPO7pjdh.js";import{a as x,d as S,f as ne,o as re,s as C,u as w}from"./hooks-B0tbzz3E.js";import{t as ie}from"./palette-UxrbKfhU.js";import{i as T,t as E}from"./kbd-CZ2z7L7Q.js";import{i as D,r as O,u as k}from"./editor-model-TldbhRn0.js";import{i as ae}from"./hints-CWOTt5cv.js";import{Ec as A,Uc as j,_i as M,ri as N,zc as oe}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as P}from"./example-B67lLz1F.js";var F=oe(),I=[{id:`kb-compose-filters`,label:`Filters`},{id:`kb-compose-results`,label:`Results`},{id:`kb-compose-pager`,label:`Pagination`}];function se(){let e=y();return(0,F.jsx)(t,{focusable:!0,render:e=>(0,F.jsx)(`nav`,{"aria-label":`Skip to section`,...e}),children:(0,F.jsx)(`div`,{className:`flex gap-1 rounded-md border bg-background p-1 shadow-sm`,children:I.map(t=>(0,F.jsx)(`a`,{href:`#${t.id}`,className:`rounded px-2 py-0.5 text-[12px] font-medium outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring`,onClick:n=>{let r=document.getElementById(t.id);r&&(n.preventDefault(),b(r),e(`Moved to ${t.label}`))},children:t.label},t.id))})})}function ce(){return(0,F.jsx)(g,{children:(0,F.jsxs)(`div`,{className:`grid gap-2 text-[13px]`,"data-testid":`kb-a11y-compose`,children:[(0,F.jsx)(se,{}),I.map(e=>(0,F.jsx)(`section`,{id:e.id,"aria-label":e.label,className:`rounded-md border px-2 py-1 text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:e.label},e.id))]})})}var L=`import { focusElement, LiveAnnouncer, useAnnounce, VisuallyHidden } from "@kitora/keyboard"

// Compose your own: a skip-link bar built from the primitives SkipLink itself uses. VisuallyHidden
// (focusable) hides the bar until focus enters it, \`focusElement\` moves focus into a section (adding
// tabindex="-1" where needed) and \`useAnnounce\` speaks where focus went through the LiveAnnouncer.

const SECTIONS = [
  { id: "kb-compose-filters", label: "Filters" },
  { id: "kb-compose-results", label: "Results" },
  { id: "kb-compose-pager", label: "Pagination" },
]

function SkipBar() {
  const announce = useAnnounce()
  return (
    <VisuallyHidden focusable render={(props) => <nav aria-label="Skip to section" {...props} />}>
      <div className="flex gap-1 rounded-md border bg-background p-1 shadow-sm">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={\`#\${section.id}\`}
            className="rounded px-2 py-0.5 text-[12px] font-medium outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
            onClick={(event) => {
              const el = document.getElementById(section.id)
              if (!el) return
              event.preventDefault()
              focusElement(el)
              announce(\`Moved to \${section.label}\`)
            }}
          >
            {section.label}
          </a>
        ))}
      </div>
    </VisuallyHidden>
  )
}

export function A11yCompose() {
  return (
    <LiveAnnouncer>
      <div className="grid gap-2 text-[13px]" data-testid="kb-a11y-compose">
        <SkipBar />
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} aria-label={section.label} className="rounded-md border px-2 py-1 text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {section.label}
          </section>
        ))}
      </div>
    </LiveAnnouncer>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>A(()=>import(`./a11y-compose-P-RYmz9f.js`),[]));var R=e(j(),1),z=[`Apple`,`Apricot`,`Banana`,`Blackberry`,`Blueberry`,`Cherry`,`Grape`,`Mango`];function le(){let e=y(),[t,n]=(0,R.useState)(``),r=z.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,F.jsx)(c,{"aria-label":`Filter fruit`,placeholder:`Filter fruit`,value:t,onChange:t=>{let r=t.target.value;n(r);let i=z.filter(e=>e.toLowerCase().includes(r.toLowerCase())).length;e(i===0?`No results`:`${i} result${i===1?``:`s`}`)},className:`h-7 w-44`}),(0,F.jsx)(N,{size:`sm`,variant:`outline`,onClick:()=>e(`Could not save: offline`,`assertive`),children:`Fail loudly`}),(0,F.jsx)(`span`,{className:`text-muted-foreground`,children:r.join(`, `)||`Nothing`})]})}function ue(){let{last:e}=h();return(0,F.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Last announced: `,(0,F.jsx)(`span`,{"data-testid":`kb-live-last`,children:e??`nothing yet`})]})}function de(){return(0,F.jsx)(g,{children:(0,F.jsxs)(`div`,{className:`grid gap-2 text-[13px]`,"data-testid":`kb-live-announcer`,children:[(0,F.jsx)(le,{}),(0,F.jsx)(ue,{})]})})}var B=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { LiveAnnouncer, useAnnounce, useLiveAnnouncer } from "@kitora/keyboard"

// LiveAnnouncer keeps the kit's ONE pair of live regions (polite and assertive) mounted for its
// subtree, so even the first message is heard, and hands \`announce\` to everything inside.
// \`useAnnounce\` below speaks through it; \`useLiveAnnouncer().last\` shows what was said.

const FRUIT = ["Apple", "Apricot", "Banana", "Blackberry", "Blueberry", "Cherry", "Grape", "Mango"]

function Filter() {
  const announce = useAnnounce()
  const [query, setQuery] = useState("")
  const hits = FRUIT.filter((f) => f.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Input
        aria-label="Filter fruit"
        placeholder="Filter fruit"
        value={query}
        onChange={(e) => {
          const next = e.target.value
          setQuery(next)
          const n = FRUIT.filter((f) => f.toLowerCase().includes(next.toLowerCase())).length
          announce(n === 0 ? "No results" : \`\${n} result\${n === 1 ? "" : "s"}\`)
        }}
        className="h-7 w-44"
      />
      <Button size="sm" variant="outline" onClick={() => announce("Could not save: offline", "assertive")}>
        Fail loudly
      </Button>
      <span className="text-muted-foreground">{hits.join(", ") || "Nothing"}</span>
    </div>
  )
}

function LastSaid() {
  const { last } = useLiveAnnouncer()
  return (
    <p className="text-[12px] text-muted-foreground">
      Last announced: <span data-testid="kb-live-last">{last ?? "nothing yet"}</span>
    </p>
  )
}

export function LiveAnnouncerBasics() {
  return (
    <LiveAnnouncer>
      <div className="grid gap-2 text-[13px]" data-testid="kb-live-announcer">
        <Filter />
        <LastSaid />
      </div>
    </LiveAnnouncer>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>A(()=>import(`./live-announcer-Be5EmZLm.js`),[]));var V=[`Home`,`Projects`,`Issues`,`Reports`,`Settings`];function H(){let[e,t]=(0,R.useState)(`not yet`);return(0,F.jsxs)(`div`,{className:`grid gap-2 text-[13px]`,"data-testid":`kb-skip-link`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(r,{target:`kb-skip-article`,placement:`inline`,onSkip:e=>t(e?`focus is on #${e.id}`:`no target`),children:`Skip to article`}),(0,F.jsx)(`nav`,{"aria-label":`Demo`,className:`flex gap-1`,children:V.map(e=>(0,F.jsx)(`a`,{href:`#${e.toLowerCase()}`,onClick:e=>e.preventDefault(),className:`rounded px-1.5 py-0.5 text-muted-foreground hover:bg-muted`,children:e},e))})]}),(0,F.jsxs)(`article`,{id:`kb-skip-article`,className:`rounded-md border p-2 outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:[(0,F.jsx)(`h3`,{className:`font-medium`,children:`Release notes`}),(0,F.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Tab into this card: the first stop is the skip link. Press Enter, then Tab once more. `,(0,F.jsx)(`a`,{href:`#notes`,onClick:e=>e.preventDefault(),className:`underline`,children:`Read more`})]})]}),(0,F.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Skipped: `,(0,F.jsx)(`span`,{"data-testid":`kb-skip-status`,children:e})]})]})}var U=`import { useState } from "react"
import { SkipLink } from "@kitora/keyboard"

// SkipLink: hidden until the first Tab, then visible. Enter moves focus INTO the target (here the
// article, which gets tabindex="-1" because it is not focusable on its own), so the next Tab goes
// to the article's first link instead of back through the nav. \`placement="inline"\` keeps it in
// this card; a page uses the default \`fixed\` (top-left of the viewport) as the first thing in <body>.

const NAV = ["Home", "Projects", "Issues", "Reports", "Settings"]

export function SkipLinkBasics() {
  const [skipped, setSkipped] = useState("not yet")
  return (
    <div className="grid gap-2 text-[13px]" data-testid="kb-skip-link">
      <div className="flex items-center gap-2">
        <SkipLink target="kb-skip-article" placement="inline" onSkip={(el) => setSkipped(el ? \`focus is on #\${el.id}\` : "no target")}>
          Skip to article
        </SkipLink>
        <nav aria-label="Demo" className="flex gap-1">
          {NAV.map((item) => (
            <a key={item} href={\`#\${item.toLowerCase()}\`} onClick={(e) => e.preventDefault()} className="rounded px-1.5 py-0.5 text-muted-foreground hover:bg-muted">
              {item}
            </a>
          ))}
        </nav>
      </div>
      <article id="kb-skip-article" className="rounded-md border p-2 outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <h3 className="font-medium">Release notes</h3>
        <p className="text-muted-foreground">
          Tab into this card: the first stop is the skip link. Press Enter, then Tab once more. <a href="#notes" onClick={(e) => e.preventDefault()} className="underline">Read more</a>
        </p>
      </article>
      <p className="text-[12px] text-muted-foreground">
        Skipped: <span data-testid="kb-skip-status">{skipped}</span>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>A(()=>import(`./skip-link-r2XuZGiP.js`),[]));function fe(){return(0,F.jsxs)(`div`,{className:`flex items-center gap-2 text-[13px]`,"data-testid":`kb-visually-hidden`,children:[(0,F.jsx)(t,{render:({children:e,...t})=>(0,F.jsx)(`h3`,{...t,children:e}),children:`Toolbar`}),(0,F.jsxs)(N,{size:`icon-sm`,variant:`outline`,children:[(0,F.jsx)(o,{className:`size-4`,"aria-hidden":!0}),(0,F.jsx)(t,{children:`Search`})]}),(0,F.jsxs)(N,{size:`icon-sm`,variant:`outline`,className:`relative`,children:[(0,F.jsx)(i,{className:`size-4`,"aria-hidden":!0}),(0,F.jsx)(`span`,{"aria-hidden":!0,className:`absolute top-1 right-1 size-1.5 rounded-full bg-red-500`}),(0,F.jsx)(t,{children:`Notifications, 3 unread`})]}),(0,F.jsx)(t,{focusable:!0,children:(0,F.jsx)(N,{size:`sm`,variant:`secondary`,children:`Keyboard help`})}),(0,F.jsx)(`span`,{className:`text-muted-foreground`,children:`Tab through the buttons: the third one only appears while it has focus.`})]})}var W=`import { Bell, Search } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { VisuallyHidden } from "@kitora/keyboard"

// VisuallyHidden: text a screen reader reads and the eye does not see. The icon buttons get their
// names from it, the dot's count is spoken, and the heading is hidden through the \`render\` slot so
// the outline still has it. The focusable variant comes back into view while focus is inside it:
// Tab to the button to the right of the bell.

export function VisuallyHiddenBasics() {
  return (
    <div className="flex items-center gap-2 text-[13px]" data-testid="kb-visually-hidden">
      <VisuallyHidden render={({ children, ...props }) => <h3 {...props}>{children}</h3>}>Toolbar</VisuallyHidden>
      <Button size="icon-sm" variant="outline">
        <Search className="size-4" aria-hidden />
        <VisuallyHidden>Search</VisuallyHidden>
      </Button>
      <Button size="icon-sm" variant="outline" className="relative">
        <Bell className="size-4" aria-hidden />
        <span aria-hidden className="absolute top-1 right-1 size-1.5 rounded-full bg-red-500" />
        <VisuallyHidden>Notifications, 3 unread</VisuallyHidden>
      </Button>
      <VisuallyHidden focusable>
        <Button size="sm" variant="secondary">
          Keyboard help
        </Button>
      </VisuallyHidden>
      <span className="text-muted-foreground">Tab through the buttons: the third one only appears while it has focus.</span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>A(()=>import(`./visually-hidden-sWc4MLfG.js`),[]));var G=e=>D(e).filter(k),pe=e=>e.keymap.effective().map(e=>({uid:e.uid,command:e.command,keyText:e.keyText}));function me(){let e=f(),t=w(G),n=w(pe);x({"mail.reply":{title:`Reply`,run:()=>`Replied`},"mail.archive":{title:`Archive`,run:()=>`Archived`},"mail.inbox":{title:`Go to Inbox`,run:()=>`Inbox`}}),S(`default`,[{key:`r`,command:`mail.reply`,when:`scope.mail`},{key:`e`,command:`mail.archive`,when:`scope.mail`},{key:`g i`,command:`mail.inbox`,when:`scope.mail`}]);let r=()=>{let t=e.keymap.exportUser();for(let n of G(e))t=O(t,n);e.keymap.importUser(t)},i=`h-7 rounded-md border bg-background px-2 text-[12px] font-medium hover:bg-muted`;return(0,F.jsxs)(`div`,{"data-kb-scope":`mail`,className:`flex flex-col gap-2 text-[12px]`,children:[(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,F.jsxs)(`button`,{type:`button`,className:i,onClick:r,disabled:t.length===0,children:[`Add Alt to every single-key shortcut (`,t.length,`)`]}),(0,F.jsx)(`button`,{type:`button`,className:i,onClick:()=>e.keymap.importUser([]),children:`Reset`}),(0,F.jsxs)(`span`,{className:`text-muted-foreground`,children:[`withModifier("g i") = `,(0,F.jsx)(T,{binding:u(`g i`)})]})]}),(0,F.jsx)(`ul`,{className:`flex flex-col gap-0.5`,"data-kb-remap-keys":``,children:n.map(e=>(0,F.jsxs)(`li`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`span`,{className:`w-28 font-mono`,children:e.command}),e.keyText?(0,F.jsx)(T,{binding:e.keyText}):null]},e.uid))})]})}function he(){return(0,F.jsx)(p,{children:(0,F.jsx)(me,{})})}var K=`import { addModifier, buildEditorRows, isCharacterRow, KeyboardProvider, ProviderKbd, useCommands, useKeyboard, useKeyboardValue, useKeymap, withModifier, type EditorRow, type Keyboard } from "@kitora/keyboard"

// Remap with a modifier (WCAG 2.1.4): addModifier rewrites a single-key row in
// the user layer — a removal of the default plus the same keys with Alt on the
// first press ("g i" → "Alt+G I") — so it keeps working with single-key
// shortcuts off. This is the shortcuts editor's "Add Alt", applied to every
// row at once. The rules are scoped to this card (\`data-kb-scope="mail"\`).

const characterRows = (kb: Keyboard): EditorRow[] => buildEditorRows(kb).filter(isCharacterRow)
const effectiveKeys = (kb: Keyboard) => kb.keymap.effective().map((rule) => ({ uid: rule.uid, command: rule.command, keyText: rule.keyText }))

function Mail() {
  const keyboard = useKeyboard()
  const rows = useKeyboardValue(characterRows)
  const keys = useKeyboardValue(effectiveKeys)
  useCommands({
    "mail.reply": { title: "Reply", run: () => "Replied" },
    "mail.archive": { title: "Archive", run: () => "Archived" },
    "mail.inbox": { title: "Go to Inbox", run: () => "Inbox" },
  })
  useKeymap("default", [
    { key: "r", command: "mail.reply", when: "scope.mail" },
    { key: "e", command: "mail.archive", when: "scope.mail" },
    { key: "g i", command: "mail.inbox", when: "scope.mail" },
  ])
  const remapAll = () => {
    let user = keyboard.keymap.exportUser()
    for (const row of characterRows(keyboard)) user = addModifier(user, row)
    keyboard.keymap.importUser(user)
  }
  const button = "h-7 rounded-md border bg-background px-2 text-[12px] font-medium hover:bg-muted"
  return (
    <div data-kb-scope="mail" className="flex flex-col gap-2 text-[12px]">
      <div className="flex flex-wrap items-center gap-1.5">
        <button type="button" className={button} onClick={remapAll} disabled={rows.length === 0}>
          Add Alt to every single-key shortcut ({rows.length})
        </button>
        <button type="button" className={button} onClick={() => keyboard.keymap.importUser([])}>
          Reset
        </button>
        <span className="text-muted-foreground">
          withModifier("g i") = <ProviderKbd binding={withModifier("g i")} />
        </span>
      </div>
      <ul className="flex flex-col gap-0.5" data-kb-remap-keys="">
        {keys.map((rule) => (
          <li key={rule.uid} className="flex items-center gap-2">
            <span className="w-28 font-mono">{rule.command}</span>
            {rule.keyText ? <ProviderKbd binding={rule.keyText} /> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AddModifier() {
  return (
    <KeyboardProvider>
      <Mail />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>A(()=>import(`./add-modifier-BPIrs5Nc.js`),[]));var q=`you`,ge=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:q,status:`open`},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,status:`open`},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,status:`open`},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:q,status:`open`},{id:105,title:`Export keybindings as JSON`,assignee:`jonas`,status:`open`},{id:107,title:`Screen readers announce aria-keyshortcuts`,assignee:`mira`,status:`open`},{id:110,title:`IME composition never fires a shortcut`,assignee:q,status:`closed`}],_e=(e,t)=>e.filter(e=>t===`inbox`?e.status===`open`:e.status===`closed`),ve=[{key:`Mod+K`,command:`app.palette`},{key:`g i`,command:`nav.inbox`},{key:`g d`,command:`nav.done`},{key:`j`,command:`list.next`},{key:`ArrowDown`,command:`list.next`,when:`listFocus`},{key:`k`,command:`list.prev`},{key:`ArrowUp`,command:`list.prev`,when:`listFocus`},{key:`x`,command:`list.toggleSelect`},{key:`Escape`,command:`list.clear`,when:`selection.count > 0`},{key:`i`,command:`issue.assignMe`},{key:`e`,command:`issue.archive`},{key:`Mod+Enter`,command:`issue.close`}];function ye(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var be={ArrowDown:`list.next`,ArrowUp:`list.prev`},xe=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:be[e.key];function Se(){let e=f(),[t,n]=(0,R.useState)(ge),[r,i]=(0,R.useState)(`inbox`),[a,o]=(0,R.useState)(101),s=ne(),[c,l]=(0,R.useState)([]),[u,d]=(0,R.useState)(!1),[p,m]=(0,R.useState)(!1),[h,g]=(0,R.useState)([]),[y,b]=(0,R.useState)(`Ready`),w=(0,R.useMemo)(()=>_e(t,r),[t,r]),T=w.find(e=>e.id===a)??null,D=new Set(c.length>0?c:T?[T.id]:[]),O=(e,t)=>{n(t=>t.map(t=>D.has(t.id)?e(t):t)),b(t)},k=e=>{let t=w.findIndex(e=>e.id===a),n=w[Math.max(0,Math.min(w.length-1,t+e))];if(n)return o(n.id),`#${n.id} ${n.title}`},A=e=>{i(e),l([]),o(null),b(`Opened ${e===`inbox`?`Inbox`:`Done`}`)},j=(e,t)=>({title:e,category:`Issue`,enabled:`issue.selected || selection.count > 0`,disabledReason:`Select an issue first`,run:t});x({"app.palette":{title:`Show command palette`,category:`General`,keywords:[`commands`],run:()=>m(!0)},"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>A(`inbox`)},"nav.done":{title:`Go to Done`,category:`Go to`,run:()=>A(`done`)},"list.next":{title:`Next issue`,category:`List`,run:()=>k(1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>k(-1)},"list.toggleSelect":{title:`Select issue`,category:`List`,enabled:`issue.selected`,disabledReason:`Select an issue first`,run:()=>l(e=>T===null?e:e.includes(T.id)?e.filter(e=>e!==T.id):[...e,T.id])},"list.clear":{title:`Clear selection`,category:`List`,enabled:`selection.count > 0`,run:()=>l([])},"issue.assignMe":j(`Assign to me`,()=>O(e=>({...e,assignee:q}),`Assigned to you`)),"issue.archive":j(`Archive issue`,()=>O(e=>({...e,status:`archived`}),`Archived ${D.size}`)),"issue.close":j(`Close issue`,()=>O(e=>({...e,status:e.status===`closed`?`open`:`closed`}),`Status changed`))}),S(`default`,ve),C({"issue.selected":T!==null,"selection.count":c.length}),re(`listFocus`,u),(0,R.useEffect)(()=>te(e,`tracker.characterKeys`),[e]),_({message:(e,t)=>{let n=v(e,t);return n&&g(e=>[n.text,...e].slice(0,8)),n}});let N=ie();return(0,F.jsxs)(`div`,{className:`grid gap-3 lg:grid-cols-[1fr_18rem]`,children:[(0,F.jsxs)(`div`,{className:`flex h-[260px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]`,"data-tracker":``,children:[(0,F.jsxs)(`div`,{className:`flex min-h-9 shrink-0 flex-wrap items-center gap-1.5 border-b bg-muted/30 px-2 py-0.5`,children:[(0,F.jsx)(`span`,{className:`font-medium`,children:r===`inbox`?`Inbox`:`Done`}),(0,F.jsx)(E,{command:`issue.assignMe`,className:`h-7 whitespace-nowrap`}),(0,F.jsx)(E,{command:`issue.archive`,className:`h-7 whitespace-nowrap`}),(0,F.jsx)(E,{command:`app.palette`,className:`ml-auto h-7 whitespace-nowrap`})]}),(0,F.jsx)(`div`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":T?`a11y-issue-${T.id}`:void 0,tabIndex:0,onFocus:()=>d(!0),onBlur:()=>d(!1),onClick:e=>{let t=ye(e.target);t!==null&&o(t)},onKeyDown:e=>{let t=xe(e);t&&(e.preventDefault(),s(t,`keyboard`))},className:`min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:w.map(e=>(0,F.jsxs)(`div`,{id:`a11y-issue-${e.id}`,role:`option`,"aria-selected":e.id===a,"data-issue-id":e.id,className:M(`flex h-8 items-center gap-2 border-b border-border/50 px-2`,e.id===a&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,F.jsx)(`span`,{className:M(`size-3 shrink-0 rounded-sm border`,c.includes(e.id)?`border-primary bg-primary`:`border-border`),"aria-hidden":!0}),(0,F.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,F.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),(0,F.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))}),(0,F.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,F.jsx)(ae,{className:`h-6`}),(0,F.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:y})]})]}),(0,F.jsxs)(`div`,{className:`rounded-md border p-2 text-[12px]`,children:[(0,F.jsx)(`h3`,{className:`mb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`Spoken (newest first)`}),h.length===0?(0,F.jsx)(`p`,{className:`text-muted-foreground`,children:`Press j, e or Mod+K and run something.`}):null,(0,F.jsx)(`ol`,{className:`flex flex-col gap-0.5`,"data-kb-announced":``,children:h.map((e,t)=>(0,F.jsx)(`li`,{className:M(`truncate`,t>0&&`text-muted-foreground`),children:e},`${t}-${e}`))})]}),(0,F.jsx)(ee,{...N.props,shortcut:!1,open:p,onOpenChange:e=>{m(e),e||N.reset()}})]})}var Ce=e=>D(e).filter(k),we=e=>e.characterKeys(),J=`h-6 rounded border bg-background px-1.5 text-[11px] font-medium hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`;function Te(){let e=f(),t=w(Ce),r=w(we),i=t=>e.keymap.importUser(O(e.keymap.exportUser(),t));return(0,F.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,F.jsx)(n,{}),` `,(0,F.jsxs)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,"data-kb-character-count":``,children:[t.length,` single-key shortcuts · `,r?`on`:`off`]}),(0,F.jsx)(`button`,{type:`button`,className:M(J,`h-7`),onClick:()=>e.keymap.importUser([]),children:`Reset user keymap`})]}),(0,F.jsx)(`div`,{className:`max-h-64 overflow-auto rounded-md border`,tabIndex:0,role:`region`,"aria-label":`Single-key shortcuts`,children:(0,F.jsxs)(`table`,{className:`w-full text-[12px]`,"data-kb-character-rows":``,children:[(0,F.jsx)(`thead`,{className:`sticky top-0 bg-muted/80 backdrop-blur`,children:(0,F.jsxs)(`tr`,{className:`text-left text-[11px] text-muted-foreground`,children:[(0,F.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Command`}),(0,F.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Key`}),(0,F.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`With a modifier`}),(0,F.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:(0,F.jsx)(`span`,{className:`sr-only`,children:`Remap`})})]})}),(0,F.jsx)(`tbody`,{children:t.map(e=>(0,F.jsxs)(`tr`,{className:`border-t border-border/50`,"data-command":e.commandId,children:[(0,F.jsx)(`td`,{className:`px-2 py-0.5`,children:e.title}),(0,F.jsx)(`td`,{className:M(`px-2 py-0.5`,!r&&`line-through opacity-50`),children:e.keyText?(0,F.jsx)(T,{binding:e.keyText}):null}),(0,F.jsx)(`td`,{className:`px-2 py-0.5`,children:e.keyText?(0,F.jsx)(T,{binding:u(e.keyText)}):null}),(0,F.jsx)(`td`,{className:`px-2 py-0.5 text-right`,children:(0,F.jsx)(`button`,{type:`button`,className:J,onClick:()=>i(e),"aria-label":`Add Alt to ${e.title}`,"data-kb-remap":e.commandId,children:`Add Alt`})})]},e.key))})]})})]})}var Ee=l(`tracker.keymap`);function De(){return(0,F.jsx)(p,{store:Ee,layers:s()??void 0,children:(0,F.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,F.jsx)(Te,{}),(0,F.jsx)(Se,{})]})})}var Y=`import { useEffect, useMemo, useState, type KeyboardEvent } from "react"
import { addModifier, buildEditorRows, CharacterKeysSwitch, CommandButton, isCharacterRow, KeyboardProvider, localStorageKeymapStore, PendingChord, persistCharacterKeys, ProviderKbd, resultAnnouncement, useAnnounceResults, useCommandPalette, useCommands, useContextKey, useContextKeys, useKeyboard, useKeyboardValue, useKeymap, useRunCommand, withModifier, type CommandSpec, type EditorRow, type KeybindingRule, type Keyboard } from "@kitora/keyboard"
import { CommandPalette, useKeyboardLayerSource } from "@kitora/overlay"
import { cn } from "@kitora/ui/utils"

// WCAG 2.1.4: single-character shortcuts are fast for sighted keyboard users
// and a hazard for speech-input and screen-reader users, so there must be a
// way to turn them off or remap them. CharacterKeysSwitch turns every
// single-key binding off (Mod+K still works); "Add Alt" rewrites one in the
// user layer (a removal plus the new key) so it keeps working with the switch
// off. The choice persists. Every command result is spoken through one polite
// live region, and the list mirrors what a screen reader hears.

type View = "inbox" | "done"

interface Issue {
  readonly id: number
  readonly title: string
  readonly assignee: string | null
  readonly status: "open" | "closed" | "archived"
}

const ME = "you"
const ISSUES: readonly Issue[] = [
  { id: 101, title: "Palette loses focus after closing a nested page", assignee: ME, status: "open" },
  { id: 102, title: "Record chords in the shortcuts editor", assignee: "mira", status: "open" },
  { id: 103, title: "AZERTY users cannot trigger Mod+/", assignee: null, status: "open" },
  { id: 104, title: "Cheatsheet should hide keys that do nothing here", assignee: ME, status: "open" },
  { id: 105, title: "Export keybindings as JSON", assignee: "jonas", status: "open" },
  { id: 107, title: "Screen readers announce aria-keyshortcuts", assignee: "mira", status: "open" },
  { id: 110, title: "IME composition never fires a shortcut", assignee: ME, status: "closed" },
]

const issuesIn = (issues: readonly Issue[], view: View) => issues.filter((issue) => (view === "inbox" ? issue.status === "open" : issue.status === "closed"))

const DEFAULT_KEYS: readonly KeybindingRule[] = [
  { key: "Mod+K", command: "app.palette" },
  { key: "g i", command: "nav.inbox" },
  { key: "g d", command: "nav.done" },
  { key: "j", command: "list.next" },
  { key: "ArrowDown", command: "list.next", when: "listFocus" },
  { key: "k", command: "list.prev" },
  { key: "ArrowUp", command: "list.prev", when: "listFocus" },
  { key: "x", command: "list.toggleSelect" },
  { key: "Escape", command: "list.clear", when: "selection.count > 0" },
  { key: "i", command: "issue.assignMe" },
  { key: "e", command: "issue.archive" },
  { key: "Mod+Enter", command: "issue.close" },
]

// The issue listbox keeps focus on itself (aria-activedescendant), so its rows
// take no focus and no handlers: one click handler on the listbox finds the
// row through \`data-issue-id\`, and its own key handler runs the list commands.
// The kit's ArrowUp/ArrowDown bindings (when: listFocus) run first and stop the
// key; the listbox handles it only when no binding took it (e.g. one removed).
function issueIdAt(target: EventTarget): number | null {
  const id = target instanceof Element ? target.closest("[data-issue-id]")?.getAttribute("data-issue-id") : null
  return id ? Number(id) : null
}
const LISTBOX_KEYS: Readonly<Record<string, string>> = { ArrowDown: "list.next", ArrowUp: "list.prev" }
const listboxCommand = (event: KeyboardEvent<HTMLElement>): string | undefined =>
  event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ? undefined : LISTBOX_KEYS[event.key]

function Tracker() {
  const keyboard = useKeyboard()
  const [issues, setIssues] = useState(ISSUES)
  const [view, setView] = useState<View>("inbox")
  const [activeId, setActiveId] = useState<number | null>(101)
  const runCommand = useRunCommand()
  const [selected, setSelected] = useState<readonly number[]>([])
  const [listFocus, setListFocus] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [announced, setAnnounced] = useState<readonly string[]>([])
  const [flash, setFlash] = useState("Ready")

  const visible = useMemo(() => issuesIn(issues, view), [issues, view])
  const active = visible.find((issue) => issue.id === activeId) ?? null
  const targets = new Set(selected.length > 0 ? selected : active ? [active.id] : [])
  const update = (change: (issue: Issue) => Issue, message: string) => {
    setIssues((list) => list.map((issue) => (targets.has(issue.id) ? change(issue) : issue)))
    setFlash(message)
  }
  const move = (step: number) => {
    const at = visible.findIndex((issue) => issue.id === activeId)
    const next = visible[Math.max(0, Math.min(visible.length - 1, at + step))]
    if (!next) return undefined
    setActiveId(next.id)
    return \`#\${next.id} \${next.title}\` // a string result is spoken
  }
  const go = (next: View) => {
    setView(next)
    setSelected([])
    setActiveId(null)
    setFlash(\`Opened \${next === "inbox" ? "Inbox" : "Done"}\`)
  }
  const issueCommand = (title: string, run: () => void): CommandSpec<undefined> => ({ title, category: "Issue", enabled: "issue.selected || selection.count > 0", disabledReason: "Select an issue first", run })

  useCommands({
    "app.palette": { title: "Show command palette", category: "General", keywords: ["commands"], run: () => setPaletteOpen(true) },
    "nav.inbox": { title: "Go to Inbox", category: "Go to", run: () => go("inbox") },
    "nav.done": { title: "Go to Done", category: "Go to", run: () => go("done") },
    "list.next": { title: "Next issue", category: "List", run: () => move(1) },
    "list.prev": { title: "Previous issue", category: "List", run: () => move(-1) },
    "list.toggleSelect": {
      title: "Select issue",
      category: "List",
      enabled: "issue.selected",
      disabledReason: "Select an issue first",
      run: () => setSelected((ids) => (active === null ? ids : ids.includes(active.id) ? ids.filter((id) => id !== active.id) : [...ids, active.id])),
    },
    "list.clear": { title: "Clear selection", category: "List", enabled: "selection.count > 0", run: () => setSelected([]) },
    "issue.assignMe": issueCommand("Assign to me", () => update((issue) => ({ ...issue, assignee: ME }), "Assigned to you")),
    "issue.archive": issueCommand("Archive issue", () => update((issue) => ({ ...issue, status: "archived" }), \`Archived \${targets.size}\`)),
    "issue.close": issueCommand("Close issue", () => update((issue) => ({ ...issue, status: issue.status === "closed" ? "open" : "closed" }), "Status changed")),
  })
  useKeymap("default", DEFAULT_KEYS)
  useContextKeys({ "issue.selected": active !== null, "selection.count": selected.length })
  useContextKey("listFocus", listFocus)

  useEffect(() => persistCharacterKeys(keyboard, "tracker.characterKeys"), [keyboard]) // off stays off on the next visit
  // The default message is kept; every spoken line is also listed below.
  useAnnounceResults({
    message: (result, title) => {
      const said = resultAnnouncement(result, title)
      if (said) setAnnounced((list) => [said.text, ...list].slice(0, 8))
      return said
    },
  })

  const palette = useCommandPalette()

  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_18rem]">
      <div className="flex h-[260px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]" data-tracker="">
        <div className="flex min-h-9 shrink-0 flex-wrap items-center gap-1.5 border-b bg-muted/30 px-2 py-0.5">
          <span className="font-medium">{view === "inbox" ? "Inbox" : "Done"}</span>
          <CommandButton command="issue.assignMe" className="h-7 whitespace-nowrap" />
          <CommandButton command="issue.archive" className="h-7 whitespace-nowrap" />
          <CommandButton command="app.palette" className="ml-auto h-7 whitespace-nowrap" />
        </div>
        <div
          role="listbox"
          aria-label="Issues"
          aria-activedescendant={active ? \`a11y-issue-\${active.id}\` : undefined}
          tabIndex={0}
          onFocus={() => setListFocus(true)}
          onBlur={() => setListFocus(false)}
          onClick={(event) => {
            const id = issueIdAt(event.target)
            if (id !== null) setActiveId(id)
          }}
          onKeyDown={(event) => {
            const command = listboxCommand(event)
            if (!command) return
            event.preventDefault()
            runCommand(command, "keyboard")
          }}
          className="min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset"
        >
          {visible.map((issue) => (
            <div
              key={issue.id}
              id={\`a11y-issue-\${issue.id}\`}
              role="option"
              aria-selected={issue.id === activeId}
              data-issue-id={issue.id}
              className={cn("flex h-8 items-center gap-2 border-b border-border/50 px-2", issue.id === activeId && "bg-primary/10 shadow-[inset_2px_0_0] shadow-primary")}
            >
              <span className={cn("size-3 shrink-0 rounded-sm border", selected.includes(issue.id) ? "border-primary bg-primary" : "border-border")} aria-hidden />
              <span className="w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">#{issue.id}</span>
              <span className="min-w-0 flex-1 truncate">{issue.title}</span>
              <span className="w-10 shrink-0 text-right text-[11px] text-muted-foreground">{issue.assignee ?? "—"}</span>
            </div>
          ))}
        </div>
        <div className="flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground">
          <PendingChord className="h-6" />
          <span className="truncate" data-tracker-flash="">
            {flash}
          </span>
        </div>
      </div>
      <div className="rounded-md border p-2 text-[12px]">
        <h3 className="mb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">Spoken (newest first)</h3>
        {announced.length === 0 ? <p className="text-muted-foreground">Press j, e or Mod+K and run something.</p> : null}
        <ol className="flex flex-col gap-0.5" data-kb-announced="">
          {announced.map((text, index) => (
            <li key={\`\${index}-\${text}\`} className={cn("truncate", index > 0 && "text-muted-foreground")}>
              {text}
            </li>
          ))}
        </ol>
      </div>
      <CommandPalette
        {...palette.props}
        shortcut={false}
        open={paletteOpen}
        onOpenChange={(open) => {
          setPaletteOpen(open)
          if (!open) palette.reset()
        }}
      />
    </div>
  )
}

// Module-level readers, so useKeyboardValue caches them between renders.
const characterRows = (kb: Keyboard): EditorRow[] => buildEditorRows(kb).filter(isCharacterRow)
const characterKeysOn = (kb: Keyboard): boolean => kb.characterKeys()

const ROW_BUTTON = "h-6 rounded border bg-background px-1.5 text-[11px] font-medium hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"

function CharacterRows() {
  const keyboard = useKeyboard()
  const rows = useKeyboardValue(characterRows)
  const on = useKeyboardValue(characterKeysOn)
  const remap = (row: EditorRow) => keyboard.keymap.importUser(addModifier(keyboard.keymap.exportUser(), row))
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <CharacterKeysSwitch /> {/* also in ShortcutsEditor's toolbar and the cheatsheet */}
        <span className="text-[12px] text-muted-foreground tabular-nums" data-kb-character-count="">
          {rows.length} single-key shortcuts · {on ? "on" : "off"}
        </span>
        <button type="button" className={cn(ROW_BUTTON, "h-7")} onClick={() => keyboard.keymap.importUser([])}>
          Reset user keymap
        </button>
      </div>
      <div className="max-h-64 overflow-auto rounded-md border" tabIndex={0} role="region" aria-label="Single-key shortcuts">
        <table className="w-full text-[12px]" data-kb-character-rows="">
          <thead className="sticky top-0 bg-muted/80 backdrop-blur">
            <tr className="text-left text-[11px] text-muted-foreground">
              <th className="px-2 py-1 font-medium">Command</th>
              <th className="px-2 py-1 font-medium">Key</th>
              <th className="px-2 py-1 font-medium">With a modifier</th>
              <th className="px-2 py-1 font-medium">
                <span className="sr-only">Remap</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-t border-border/50" data-command={row.commandId}>
                <td className="px-2 py-0.5">{row.title}</td>
                <td className={cn("px-2 py-0.5", !on && "line-through opacity-50")}>{row.keyText ? <ProviderKbd binding={row.keyText} /> : null}</td>
                <td className="px-2 py-0.5">{row.keyText ? <ProviderKbd binding={withModifier(row.keyText)} /> : null}</td>
                <td className="px-2 py-0.5 text-right">
                  <button type="button" className={ROW_BUTTON} onClick={() => remap(row)} aria-label={\`Add Alt to \${row.title}\`} data-kb-remap={row.commandId}>
                    Add Alt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Opt-in persistence of the user layer, so a remap survives a reload.
const keymapStore = localStorageKeymapStore("tracker.keymap")

export function CharacterKeys() {
  const layers = useKeyboardLayerSource() // the palette's overlay shadows the page's keys while open
  return (
    <KeyboardProvider store={keymapStore} layers={layers ?? undefined}>
      <div className="flex flex-col gap-3">
        <CharacterRows />
        <Tracker />
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>A(()=>import(`./character-keys-CGriL3f3.js`),[]));var X=[{key:`j`,command:`list.next`},{key:`k`,command:`list.prev`},{key:`x`,command:`list.toggleSelect`},{key:`e`,command:`issue.archive`},{key:`i`,command:`issue.assignMe`},{key:`s`,command:`issue.star`},{key:`c`,command:`issue.new`},{key:`g i`,command:`nav.inbox`},{key:`Mod+K`,command:`app.palette`},{key:`Mod+Enter`,command:`issue.close`}];function Oe(){let e=d({platform:typeof navigator>`u`?`win`:m()}),t=e=>e.replace(/^\w+\./,``);return e.register(Object.fromEntries(X.map(e=>[e.command,{title:t(e.command),run:()=>void 0}]))),e.bind(`default`,X),e}var ke=e=>e.analyze({screenReader:!0}).filter(e=>e.kind===`screen-reader`);function Ae(){let e=w(ke);return(0,F.jsx)(`div`,{className:`max-h-56 overflow-auto rounded-md border`,tabIndex:0,role:`region`,"aria-label":`Screen-reader findings`,children:(0,F.jsxs)(`ul`,{className:`flex flex-col text-[12px]`,"data-kb-sr-findings":``,children:[e.length===0?(0,F.jsx)(`li`,{className:`px-2 py-3 text-center text-muted-foreground`,children:`No binding starts with a browse-mode key.`}):null,e.map(e=>{let t=e.rules[0];return(0,F.jsxs)(`li`,{className:`flex items-center gap-2 border-b border-border/50 px-2 py-1 last:border-b-0`,"data-finding":`screen-reader`,children:[t?(0,F.jsx)(T,{binding:t.keyText}):null,(0,F.jsx)(`span`,{className:`font-mono text-[11px] text-muted-foreground`,children:t?.command}),(0,F.jsx)(`span`,{className:`truncate text-muted-foreground`,title:e.message,children:`browse-mode key in NVDA, JAWS and VoiceOver Quick Nav`})]},t?.uid??e.message)})]})})}function je(){let[e]=(0,R.useState)(Oe);return(0,F.jsx)(p,{keyboard:e,attach:!1,children:(0,F.jsx)(Ae,{})})}var Z=`import { useState } from "react"
import { createKeyboard, detectPlatform, KeyboardProvider, ProviderKbd, useKeyboardValue, type Keyboard, type KeybindingRule } from "@kitora/keyboard"

// Screen-reader key lint: letters and digits are browse-mode navigation keys
// in NVDA, JAWS and VoiceOver Quick Nav, so the reader takes them before the
// page. The analyzer lists every binding that starts with one on demand; pass
// \`screenReaderLint: true\` to createKeyboard to also warn at bind time in
// development. This engine is not attached to the document (attach={false}):
// it only lints the keymap.

const KEYMAP: readonly KeybindingRule[] = [
  { key: "j", command: "list.next" },
  { key: "k", command: "list.prev" },
  { key: "x", command: "list.toggleSelect" },
  { key: "e", command: "issue.archive" },
  { key: "i", command: "issue.assignMe" },
  { key: "s", command: "issue.star" },
  { key: "c", command: "issue.new" },
  { key: "g i", command: "nav.inbox" },
  { key: "Mod+K", command: "app.palette" },
  { key: "Mod+Enter", command: "issue.close" },
]

function createLintedKeyboard(): Keyboard {
  const kb = createKeyboard({ platform: typeof navigator === "undefined" ? "win" : detectPlatform() })
  const title = (id: string) => id.replace(/^\\w+\\./, "")
  kb.register(Object.fromEntries(KEYMAP.map((rule) => [rule.command, { title: title(rule.command), run: () => undefined }])))
  kb.bind("default", KEYMAP)
  return kb
}

const screenReaderFindings = (kb: Keyboard) => kb.analyze({ screenReader: true }).filter((finding) => finding.kind === "screen-reader")

function Findings() {
  const findings = useKeyboardValue(screenReaderFindings)
  return (
    <div className="max-h-56 overflow-auto rounded-md border" tabIndex={0} role="region" aria-label="Screen-reader findings">
      <ul className="flex flex-col text-[12px]" data-kb-sr-findings="">
        {findings.length === 0 ? <li className="px-2 py-3 text-center text-muted-foreground">No binding starts with a browse-mode key.</li> : null}
        {findings.map((finding) => {
          const rule = finding.rules[0]
          return (
            <li key={rule?.uid ?? finding.message} className="flex items-center gap-2 border-b border-border/50 px-2 py-1 last:border-b-0" data-finding="screen-reader">
              {rule ? <ProviderKbd binding={rule.keyText} /> : null}
              <span className="font-mono text-[11px] text-muted-foreground">{rule?.command}</span>
              <span className="truncate text-muted-foreground" title={finding.message}>
                browse-mode key in NVDA, JAWS and VoiceOver Quick Nav
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function ScreenReaderLint() {
  const [keyboard] = useState(createLintedKeyboard)
  return (
    <KeyboardProvider keyboard={keyboard} attach={false}>
      <Findings />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>A(()=>import(`./screen-reader-lint-Be1StcZb.js`),[]));function Q(){let[e,t]=(0,R.useState)(2),[n,r]=(0,R.useState)([]);return x({"mail.archive":{title:`Archive`,enabled:`mail.selected > 0`,disabledReason:`Select a message first`,run:()=>`Archived ${e}`},"mail.selectAll":{title:`Select all`,run:()=>t(5)},"mail.clear":{title:`Clear selection`,run:()=>t(0)},"mail.sync":{title:`Sync mailbox`,run:()=>{throw Error(`offline`)}}}),S(`default`,[{key:`Alt+E`,command:`mail.archive`,when:`scope.inbox`},{key:`Alt+A`,command:`mail.selectAll`,when:`scope.inbox`},{key:`Alt+S`,command:`mail.sync`,when:`scope.inbox`}]),C({"mail.selected":e}),_({message:(e,t)=>{let n=v(e,t);return n&&r(e=>[`${n.politeness}: ${n.text}`,...e].slice(0,6)),n}}),(0,F.jsxs)(`div`,{"data-kb-scope":`inbox`,className:`grid gap-3 text-[12px] md:grid-cols-[1fr_18rem]`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,F.jsxs)(`p`,{className:`text-muted-foreground`,children:[e,` messages selected.`]}),(0,F.jsxs)(`div`,{className:`flex flex-wrap gap-1.5`,children:[(0,F.jsx)(E,{command:`mail.archive`}),(0,F.jsx)(E,{command:`mail.selectAll`}),(0,F.jsx)(E,{command:`mail.clear`}),(0,F.jsx)(E,{command:`mail.sync`})]})]}),(0,F.jsxs)(`div`,{className:`rounded-md border p-2`,children:[(0,F.jsx)(`h3`,{className:`mb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,children:`Spoken (newest first)`}),n.length===0?(0,F.jsx)(`p`,{className:`text-muted-foreground`,children:`Run something: archive, clear the selection and archive again, or sync.`}):null,(0,F.jsx)(`ol`,{className:`flex flex-col gap-0.5`,"data-kb-spoken":``,children:n.map((e,t)=>(0,F.jsx)(`li`,{className:`truncate`,children:e},`${t}-${e}`))})]})]})}function Me(){return(0,F.jsx)(p,{children:(0,F.jsx)(Q,{})})}var $=`import { useState } from "react"
import { CommandButton, KeyboardProvider, resultAnnouncement, useAnnounceResults, useCommands, useContextKeys, useKeymap } from "@kitora/keyboard"

// Spoken results: every command result goes through one polite live region
// (failures through an assertive one). A command that returns "Archived 2" is
// spoken as is; a disabled run speaks its reason; a throw speaks "<title>
// failed". Framework-free: announceResults(kb), or createAnnouncer().announce("Saved").
// The keys are scoped to this card (\`data-kb-scope="inbox"\`).

function Inbox() {
  const [selected, setSelected] = useState(2)
  const [spoken, setSpoken] = useState<readonly string[]>([])
  useCommands({
    "mail.archive": { title: "Archive", enabled: "mail.selected > 0", disabledReason: "Select a message first", run: () => \`Archived \${selected}\` },
    "mail.selectAll": { title: "Select all", run: () => setSelected(5) },
    "mail.clear": { title: "Clear selection", run: () => setSelected(0) },
    "mail.sync": {
      title: "Sync mailbox",
      run: () => {
        throw new Error("offline")
      },
    },
  })
  useKeymap("default", [
    { key: "Alt+E", command: "mail.archive", when: "scope.inbox" },
    { key: "Alt+A", command: "mail.selectAll", when: "scope.inbox" },
    { key: "Alt+S", command: "mail.sync", when: "scope.inbox" },
  ])
  useContextKeys({ "mail.selected": selected })
  // The default message is kept; every spoken line is also listed here.
  useAnnounceResults({
    message: (result, title) => {
      const said = resultAnnouncement(result, title)
      if (said) setSpoken((list) => [\`\${said.politeness}: \${said.text}\`, ...list].slice(0, 6))
      return said
    },
  })
  return (
    <div data-kb-scope="inbox" className="grid gap-3 text-[12px] md:grid-cols-[1fr_18rem]">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground">{selected} messages selected.</p>
        <div className="flex flex-wrap gap-1.5">
          <CommandButton command="mail.archive" />
          <CommandButton command="mail.selectAll" />
          <CommandButton command="mail.clear" />
          <CommandButton command="mail.sync" />
        </div>
      </div>
      <div className="rounded-md border p-2">
        <h3 className="mb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">Spoken (newest first)</h3>
        {spoken.length === 0 ? <p className="text-muted-foreground">Run something: archive, clear the selection and archive again, or sync.</p> : null}
        <ol className="flex flex-col gap-0.5" data-kb-spoken="">
          {spoken.map((text, index) => (
            <li key={\`\${index}-\${text}\`} className="truncate">
              {text}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export function SpokenResults() {
  return (
    <KeyboardProvider>
      <Inbox />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>A(()=>import(`./spoken-results-pi3t4Glp.js`),[]));function Ne(){return(0,F.jsxs)(`div`,{children:[(0,F.jsx)(a,{title:`Accessibility`,children:`Single-letter shortcuts are fast for sighted keyboard users and a hazard for speech-input and screen-reader users. WCAG 2.1.4 asks for a way to turn them off or remap them; the kit ships both, flags the keys screen readers already use, and speaks every command result.`}),(0,F.jsx)(P,{n:1,title:`Turn single-key shortcuts off (K129)`,blurb:`Untick the switch, click in the app and press j: nothing happens; Mod+K still opens the palette. Add Alt remaps one key so it works again. The same switch sits in the editor's toolbar and the cheatsheet, and the choice is kept in localStorage.`,code:Y,children:(0,F.jsx)(De,{})}),(0,F.jsx)(P,{n:2,title:`Remap with a modifier (K130)`,blurb:`Add Alt rewrites a single-key shortcut in the user layer (a removal plus the new key), so it keeps working with the switch off. Here it is applied to every single-key row at once.`,code:K,children:(0,F.jsx)(he,{})}),(0,F.jsx)(P,{n:3,title:`Screen-reader key lint (K132)`,blurb:`Letters and digits are browse-mode navigation keys in NVDA, JAWS and VoiceOver Quick Nav: the reader takes them before the page. The analyzer lists every binding that starts with one.`,code:Z,children:(0,F.jsx)(je,{})}),(0,F.jsx)(P,{n:4,title:`Spoken results (K133)`,blurb:`Every command result goes through one polite live region (failures through an assertive one). The list mirrors what a screen reader hears.`,code:$,children:(0,F.jsx)(Me,{})}),(0,F.jsx)(P,{n:5,title:`VisuallyHidden`,blurb:"Text for screen readers only: icon-button names, a count shown as a dot, a heading through the `render` slot. `focusable` brings it back into view while focus is inside.",code:W,children:(0,F.jsx)(fe,{})}),(0,F.jsx)(P,{n:6,title:`SkipLink`,blurb:`Hidden until focused; Enter moves focus into the target, making it focusable with tabindex=-1 when it is not, so the next Tab continues from there.`,code:U,children:(0,F.jsx)(H,{})}),(0,F.jsx)(P,{n:7,title:`LiveAnnouncer`,blurb:"Keeps the kit's one pair of live regions mounted for a subtree and hands `announce` down; `useAnnounce` inside speaks through it, and `last` shows what was said.",code:B,children:(0,F.jsx)(de,{})}),(0,F.jsx)(P,{n:8,title:`Compose your own`,blurb:`A skip bar of your own from the same primitives: VisuallyHidden (focusable, rendered as a nav), focusElement and useAnnounce. Tab into the card to reveal it.`,code:L,children:(0,F.jsx)(ce,{})})]})}export{Ne as component};