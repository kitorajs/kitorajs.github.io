import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./file-code-fHPJWagc.js";import{t as r}from"./file-CpLOeWrK.js";import{t as i}from"./folder-BMIhIs7B.js";import{Bc as a,Cc as o,Ic as s,Oi as c,ti as l}from"./index-9y5uwRd3.js";import{t as u}from"./badge-CMT8Lr82.js";import"./kit-gallery-B-Yr9fP4.js";import{t as d}from"./example-CZLJLtIC.js";import{t as f}from"./tabster-uhLnQE7S.js";var p=e(a(),1),m=s();function h(e){let t=e.params?.body??`// ${e.title}\nimport { Tabster } from "@kitora/tabster"\n\nexport function Demo() {\n  return <Tabster panels={{ editor: EditorPanel }} initialPanels={[{ id: "a", component: "editor", title: "demo.tsx" }]} />\n}\n`;return(0,m.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border bg-surface-1 px-3 py-1.5 text-[11px] text-muted-foreground`,children:[(0,m.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,m.jsx)(n,{className:`size-3`}),e.params?.language??`tsx`]}),(0,m.jsx)(`span`,{className:`font-mono`,children:`UTF-8 · LF`})]}),(0,m.jsx)(`pre`,{tabIndex:0,className:`flex-1 overflow-auto bg-background px-4 py-3 font-mono text-[12px] leading-relaxed text-foreground`,children:t})]})}var g=[{name:`src`,folder:!0,depth:0,open:!0},{name:`kit`,folder:!0,depth:1,open:!0},{name:`tabster`,folder:!0,depth:2,open:!0},{name:`tabster.tsx`,folder:!1,depth:3,open:!1},{name:`types.ts`,folder:!1,depth:3,open:!1},{name:`use-keyboard.ts`,folder:!1,depth:3,open:!1},{name:`index.ts`,folder:!1,depth:3,open:!1},{name:`datagrid`,folder:!0,depth:2,open:!1},{name:`task-list`,folder:!0,depth:2,open:!1},{name:`README.md`,folder:!1,depth:0,open:!1}];function _(){return(0,m.jsxs)(`div`,{className:`flex h-full flex-col bg-surface-1`,children:[(0,m.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Explorer`}),(0,m.jsx)(`ul`,{className:`flex-1 overflow-auto py-1 text-[12px]`,children:g.map(e=>(0,m.jsxs)(`li`,{className:`flex cursor-pointer items-center gap-1 px-2 py-0.5 hover:bg-muted`,style:{paddingLeft:8+e.depth*12},children:[e.folder?(0,m.jsx)(c,{className:`size-3 transition-transform ${e.open?`rotate-90`:``}`}):(0,m.jsx)(`span`,{className:`inline-block size-3`}),e.folder?(0,m.jsx)(i,{className:`size-3 text-muted-foreground`}):(0,m.jsx)(r,{className:`size-3 text-muted-foreground`}),(0,m.jsx)(`span`,{children:e.name})]},`${e.depth}:${e.name}`))})]})}function v(){return(0,m.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,m.jsx)(`div`,{className:`border-b border-border px-3 py-1.5 text-[11px] text-muted-foreground`,children:(0,m.jsx)(u,{variant:`outline`,className:`text-[10px]`,children:`zsh`})}),(0,m.jsx)(`pre`,{tabIndex:0,className:`flex-1 overflow-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-muted-foreground`,children:`$ pnpm dev
  ➜  Local:   http://localhost:7001/
  ➜  Network: use --host to expose

[tabster] dock ready · 3 groups · 5 panels`})]})}function y(){return(0,m.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,m.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Notes`}),(0,m.jsxs)(`div`,{className:`flex-1 overflow-auto px-4 py-3 text-[12px] leading-relaxed`,children:[(0,m.jsxs)(`p`,{children:[`Drag a tab title to another group, an edge of the dock, or out of the window. Every move emits an updated layout JSON via `,(0,m.jsx)(`code`,{children:`onLayoutChange`}),`.`]}),(0,m.jsxs)(`p`,{className:`mt-2`,children:[`Override individual keys via the `,(0,m.jsx)(`code`,{children:`keyboard`}),` prop.`]})]})]})}var b={editor:h,explorer:_,terminal:v,notes:y},x=[{id:`editor`,component:`editor`,title:`tabster.tsx`},{id:`explorer`,component:`explorer`,title:`Explorer`,position:{referencePanel:`editor`,direction:`left`}}];function S(){let e=(0,p.useRef)(null);return(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,m.jsx)(l,{variant:`outline`,size:`sm`,onClick:()=>e.current?.addPanel({id:`notes.${Date.now()}`,component:`notes`,title:`Notes (floating)`,floating:!0}),children:`New floating note`}),(0,m.jsx)(l,{variant:`outline`,size:`sm`,onClick:()=>{let t=`terminal.${Date.now()}`;e.current?.addPanel({id:t,component:`terminal`,title:`Terminal (popout)`}),e.current?.popoutPanel(t)},children:`New terminal popout`}),(0,m.jsx)(l,{variant:`outline`,size:`sm`,onClick:()=>{let t=e.current?.activePanel();t&&e.current?.dockPanel(t)},children:`Dock active back`})]}),(0,m.jsx)(`div`,{className:`mt-3 h-[640px] overflow-hidden rounded-lg border border-border bg-background`,children:(0,m.jsx)(f,{panels:b,initialPanels:x,onReady:({api:t})=>{e.current=t}})}),(0,m.jsx)(`p`,{className:`mt-3 text-[11px] text-muted-foreground`,children:`The popped-out window stays in sync with the main app's React tree.`})]})}var C=`import { useRef } from "react"
import { ChevronRight, File, FileCode, Folder } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Tabster, type TabsterApi, type TabsterPanelRenderProps, type TabsterPanelSpec } from "@kitora/tabster"

function EditorPanel(props: TabsterPanelRenderProps<{ language?: string; body?: string }>) {
  const body = props.params?.body ?? \`// \${props.title}\\nimport { Tabster } from "@kitora/tabster"\\n\\nexport function Demo() {\\n  return <Tabster panels={{ editor: EditorPanel }} initialPanels={[{ id: "a", component: "editor", title: "demo.tsx" }]} />\\n}\\n\`
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border bg-surface-1 px-3 py-1.5 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <FileCode className="size-3" />
          {props.params?.language ?? "tsx"}
        </span>
        <span className="font-mono">UTF-8 · LF</span>
      </div>
      <pre tabIndex={0} className="flex-1 overflow-auto bg-background px-4 py-3 font-mono text-[12px] leading-relaxed text-foreground">
        {body}
      </pre>
    </div>
  )
}

const FILES = [
  { name: "src", folder: true, depth: 0, open: true },
  { name: "kit", folder: true, depth: 1, open: true },
  { name: "tabster", folder: true, depth: 2, open: true },
  { name: "tabster.tsx", folder: false, depth: 3, open: false },
  { name: "types.ts", folder: false, depth: 3, open: false },
  { name: "use-keyboard.ts", folder: false, depth: 3, open: false },
  { name: "index.ts", folder: false, depth: 3, open: false },
  { name: "datagrid", folder: true, depth: 2, open: false },
  { name: "task-list", folder: true, depth: 2, open: false },
  { name: "README.md", folder: false, depth: 0, open: false },
]

function ExplorerPanel() {
  return (
    <div className="flex h-full flex-col bg-surface-1">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Explorer</div>
      <ul className="flex-1 overflow-auto py-1 text-[12px]">
        {FILES.map((f) => (
          <li key={\`\${f.depth}:\${f.name}\`} className="flex cursor-pointer items-center gap-1 px-2 py-0.5 hover:bg-muted" style={{ paddingLeft: 8 + f.depth * 12 }}>
            {f.folder ? <ChevronRight className={\`size-3 transition-transform \${f.open ? "rotate-90" : ""}\`} /> : <span className="inline-block size-3" />}
            {f.folder ? <Folder className="size-3 text-muted-foreground" /> : <File className="size-3 text-muted-foreground" />}
            <span>{f.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TerminalPanel() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border px-3 py-1.5 text-[11px] text-muted-foreground">
        <Badge variant="outline" className="text-[10px]">
          zsh
        </Badge>
      </div>
      <pre tabIndex={0} className="flex-1 overflow-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-muted-foreground">
        {"$ pnpm dev\\n  ➜  Local:   http://localhost:7001/\\n  ➜  Network: use --host to expose\\n\\n[tabster] dock ready · 3 groups · 5 panels"}
      </pre>
    </div>
  )
}

function NotesPanel() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Notes</div>
      <div className="flex-1 overflow-auto px-4 py-3 text-[12px] leading-relaxed">
        <p>
          Drag a tab title to another group, an edge of the dock, or out of the window. Every move emits an updated layout JSON via <code>onLayoutChange</code>.
        </p>
        <p className="mt-2">
          Override individual keys via the <code>keyboard</code> prop.
        </p>
      </div>
    </div>
  )
}

const PANELS = { editor: EditorPanel, explorer: ExplorerPanel, terminal: TerminalPanel, notes: NotesPanel }

const INITIAL: TabsterPanelSpec[] = [
  { id: "editor", component: "editor", title: "tabster.tsx" },
  { id: "explorer", component: "explorer", title: "Explorer", position: { referencePanel: "editor", direction: "left" } },
]

// A panel lives in one of three places: docked in the grid, floating in-page (drag the title bar,
// resize the corners) or popped out to a real OS window.
export function FloatAndPopout() {
  const apiRef = useRef<TabsterApi | null>(null)
  const openFloating = () => apiRef.current?.addPanel({ id: \`notes.\${Date.now()}\`, component: "notes", title: "Notes (floating)", floating: true })
  const openPopout = () => {
    const id = \`terminal.\${Date.now()}\`
    apiRef.current?.addPanel({ id, component: "terminal", title: "Terminal (popout)" })
    // window.open needs a user gesture: call it from the click handler
    apiRef.current?.popoutPanel(id)
  }
  const dockActive = () => {
    const active = apiRef.current?.activePanel()
    if (active) apiRef.current?.dockPanel(active)
  }
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={openFloating}>
          New floating note
        </Button>
        <Button variant="outline" size="sm" onClick={openPopout}>
          New terminal popout
        </Button>
        <Button variant="outline" size="sm" onClick={dockActive}>
          Dock active back
        </Button>
      </div>

      <div className="mt-3 h-[640px] overflow-hidden rounded-lg border border-border bg-background">
        <Tabster
          panels={PANELS}
          initialPanels={INITIAL}
          onReady={({ api }) => {
            apiRef.current = api
          }}
        />
      </div>

      <p className="mt-3 text-[11px] text-muted-foreground">The popped-out window stays in sync with the main app's React tree.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>o(()=>import(`./floating-DYcr6VQW.js`),[]));function w(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Float + popout`,children:`Each panel can live in three places: docked into the layout, floating in-page (drag the title bar, resize the corners), or popped out to a real OS window — useful for second-monitor work. Popout needs a user gesture, so it runs from the button's click.`}),(0,m.jsx)(d,{n:1,title:`Floating, popout and dock back`,blurb:`Open a floating note or a popped-out terminal, then dock the active panel back into the grid.`,code:C,children:(0,m.jsx)(S,{})})]})}export{w as component};