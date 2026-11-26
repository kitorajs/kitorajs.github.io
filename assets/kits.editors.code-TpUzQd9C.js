import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{b as t,s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./play-BfkkEACO.js";import{Bc as i,Cc as a,Ic as o,bi as s,hi as c,ti as l}from"./index-B9ukmIN1.js";import{n as u}from"./context-DJFRXQdX.js";import{i as d,r as f}from"./sidebar-DUjuVdBo.js";import{c as p,o as m}from"./parts-u3EZLqJn.js";import{t as h}from"./editor-c_lwRTu7.js";import"./kit-gallery-Bph7isB2.js";import{t as g}from"./example-BGnSQG2Y.js";import{t as _}from"./-kits.editors.shared-DcQGKGel.js";var v=e(i(),1),y=o(),b={file:t},x=200,S=`import`,C=[{path:`src/server.ts`,content:`import { createServer } from "node:http"
${S} { routes } from "./routes"

const PORT = Number(process.env.PORT ?? 3000)

createServer(async (req, res) => {
  const handler = routes[req.url ?? "/"]
  if (!handler) {
    res.writeHead(404).end("not found")
    return
  }
  res.writeHead(200, { "content-type": "application/json" })
  res.end(JSON.stringify(await handler(req)))
}).listen(PORT, () => console.log(\`listening on :\${PORT}\`))
`},{path:`src/routes.py`,content:`from dataclasses import dataclass


@dataclass
class Route:
    path: str
    method: str = "GET"


def matches(route: Route, path: str) -> bool:
    """True when the request path hits this route."""
    return route.path == path or route.path.endswith("*") and path.startswith(route.path[:-1])
`},{path:`styles/app.css`,content:`:root {
  --radius: 0.5rem;
  --brand: oklch(0.62 0.19 260);
}

.card {
  border-radius: var(--radius);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06);
}
`},{path:`main.go`,content:`package main

${S} "fmt"

func main() {
	for i := 0; i < 3; i++ {
		fmt.Printf("wave %d\\n", i+1)
	}
}
`},{path:`deploy.yaml`,content:`service: editor
replicas: 3
env:
  - name: FEATURE_EDITOR
    value: "true"
`}];function w(){let[e,t]=(0,v.useState)(()=>Object.fromEntries(C.map(e=>[e.path,e.content]))),[n,r]=(0,v.useState)(e),[i,a]=(0,v.useState)([C[0].path,C[1].path]),[o,l]=(0,v.useState)(C[0].path),g=t=>n[t]!==e[t],_=e=>{a(t=>t.includes(e)?t:[...t,e]),l(e)},S=e=>{let t=i.filter(t=>t!==e);a(t),o===e&&l(t[t.length-1]??``)};return(0,y.jsxs)(`div`,{className:`relative h-full overflow-hidden rounded-lg border border-border`,children:[(0,y.jsx)(m,{}),(0,y.jsx)(u,{icons:b,location:o,label:`Files`,defaultState:{width:x},children:(0,y.jsx)(p,{sidebar:(0,y.jsx)(f,{children:(0,y.jsx)(d,{nav:[{id:`explorer`,label:`Explorer`,items:C.map(e=>({id:e.path,label:e.path,href:e.path,icon:{name:`file`},...g(e.path)?{badge:{dot:`warning`}}:{}}))}],onNavigate:(e,t)=>{t.preventDefault(),_(e.id)}})}),children:(0,y.jsxs)(`div`,{className:`flex min-h-0 min-w-0 flex-col`,children:[(0,y.jsx)(`div`,{role:`group`,"aria-label":`Open files`,className:`flex h-8 shrink-0 items-end gap-px overflow-x-auto border-b border-border bg-muted/30 px-1`,children:i.map(e=>(0,y.jsxs)(`div`,{className:c(`group flex h-7 items-center gap-1 rounded-t-md border border-b-0 px-2 text-[12px]`,o===e?`border-border bg-background text-foreground`:`border-transparent text-muted-foreground hover:text-foreground`),children:[(0,y.jsx)(`button`,{type:`button`,"aria-pressed":o===e,onClick:()=>l(e),className:`max-w-40 truncate font-mono`,children:e.split(`/`).pop()}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>S(e),"aria-label":`Close ${e}`,className:`grid size-4 place-items-center rounded hover:bg-accent`,children:[g(e)?(0,y.jsx)(`span`,{className:`size-1.5 rounded-full bg-amber-500 group-hover:hidden`}):null,(0,y.jsx)(s,{className:c(`size-3`,g(e)&&`hidden group-hover:block`)})]})]},e))}),i.length===0?(0,y.jsx)(`div`,{className:`grid flex-1 place-items-center text-[12px] text-muted-foreground`,children:`Open a file from the explorer`}):i.map(n=>(0,y.jsx)(`div`,{hidden:n!==o,className:`min-h-0 flex-1`,children:(0,y.jsx)(h,{filename:n,defaultValue:e[n],onChange:e=>r(t=>({...t,[n]:e})),onSave:e=>t(t=>({...t,[n]:e})),className:`h-full rounded-none border-0`})},n))]})})})]})}var T=`import { useState } from "react"
import { FileCode2, X } from "lucide-react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, type SidebarIconComponent } from "@kitora/sidebar"
import { CodeEditor } from "@kitora/editors/code"
import { cn } from "@kitora/ui/utils"

/** \`{ name }\` icons in the explorer resolve through this registry. */
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { file: FileCode2 }

/** The explorer's width in px (an IDE file list is narrower than an app nav). */
const EXPLORER_WIDTH = 200

/** The word \`import\` inside the sample files below, kept out of line starts so the file reads as one import block followed by code. */
const IMPORT = "import"

interface File {
  readonly path: string
  readonly content: string
}

const FILES: readonly File[] = [
  {
    path: "src/server.ts",
    content: \`import { createServer } from "node:http"
\${IMPORT} { routes } from "./routes"

const PORT = Number(process.env.PORT ?? 3000)

createServer(async (req, res) => {
  const handler = routes[req.url ?? "/"]
  if (!handler) {
    res.writeHead(404).end("not found")
    return
  }
  res.writeHead(200, { "content-type": "application/json" })
  res.end(JSON.stringify(await handler(req)))
}).listen(PORT, () => console.log(\\\`listening on :\\\${PORT}\\\`))
\`,
  },
  {
    path: "src/routes.py",
    content: \`from dataclasses import dataclass


@dataclass
class Route:
    path: str
    method: str = "GET"


def matches(route: Route, path: str) -> bool:
    """True when the request path hits this route."""
    return route.path == path or route.path.endswith("*") and path.startswith(route.path[:-1])
\`,
  },
  {
    path: "styles/app.css",
    content: \`:root {
  --radius: 0.5rem;
  --brand: oklch(0.62 0.19 260);
}

.card {
  border-radius: var(--radius);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06);
}
\`,
  },
  {
    path: "main.go",
    content: \`package main

\${IMPORT} "fmt"

func main() {
	for i := 0; i < 3; i++ {
		fmt.Printf("wave %d\\\\n", i+1)
	}
}
\`,
  },
  {
    path: "deploy.yaml",
    content: \`service: editor
replicas: 3
env:
  - name: FEATURE_EDITOR
    value: "true"
\`,
  },
]

/** A small IDE: a file list, tabs with dirty dots, one editor per open file (each keeps its own undo), ⌘S saves. */
export function CodeWorkspace() {
  const [saved, setSaved] = useState<{ readonly [path: string]: string }>(() => Object.fromEntries(FILES.map((file) => [file.path, file.content])))
  const [drafts, setDrafts] = useState(saved)
  const [open, setOpen] = useState<readonly string[]>([FILES[0].path, FILES[1].path])
  const [active, setActive] = useState(FILES[0].path)
  const dirty = (path: string): boolean => drafts[path] !== saved[path]
  const openFile = (path: string): void => {
    setOpen((list) => (list.includes(path) ? list : [...list, path]))
    setActive(path)
  }
  const close = (path: string): void => {
    const rest = open.filter((p) => p !== path)
    setOpen(rest)
    if (active === path) setActive(rest[rest.length - 1] ?? "")
  }
  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-border">
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={active} label="Files" defaultState={{ width: EXPLORER_WIDTH }}>
        <SidebarLayout
          sidebar={
            <Sidebar>
              <SidebarNav
                nav={[{ id: "explorer", label: "Explorer", items: FILES.map((file) => ({ id: file.path, label: file.path, href: file.path, icon: { name: "file" }, ...(dirty(file.path) ? { badge: { dot: "warning" as const } } : {}) })) }]}
                onNavigate={(item, event) => {
                  event.preventDefault()
                  openFile(item.id)
                }}
              />
            </Sidebar>
          }
        >
      <div className="flex min-h-0 min-w-0 flex-col">
        <div role="group" aria-label="Open files" className="flex h-8 shrink-0 items-end gap-px overflow-x-auto border-b border-border bg-muted/30 px-1">
          {open.map((path) => (
            <div key={path} className={cn("group flex h-7 items-center gap-1 rounded-t-md border border-b-0 px-2 text-[12px]", active === path ? "border-border bg-background text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")}>
              <button type="button" aria-pressed={active === path} onClick={() => setActive(path)} className="max-w-40 truncate font-mono">
                {path.split("/").pop()}
              </button>
              <button type="button" onClick={() => close(path)} aria-label={\`Close \${path}\`} className="grid size-4 place-items-center rounded hover:bg-accent">
                {dirty(path) ? <span className="size-1.5 rounded-full bg-amber-500 group-hover:hidden" /> : null}
                <X className={cn("size-3", dirty(path) && "hidden group-hover:block")} />
              </button>
            </div>
          ))}
        </div>
        {open.length === 0 ? (
          <div className="grid flex-1 place-items-center text-[12px] text-muted-foreground">Open a file from the explorer</div>
        ) : (
          open.map((path) => (
            <div key={path} hidden={path !== active} className="min-h-0 flex-1">
              <CodeEditor
                filename={path}
                defaultValue={saved[path]}
                onChange={(value) => setDrafts((all) => ({ ...all, [path]: value }))}
                onSave={(value) => setSaved((all) => ({ ...all, [path]: value }))}
                className="h-full rounded-none border-0"
              />
            </div>
          ))
        )}
      </div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>a(()=>import(`./code-workspace-CT5Bk4gJ.js`),[]));var E=`{"name":"workspace-editor","rollout":{"wave":1,"percent":100},"owners":["ada","grace"],"retries":3}`,D=[`name`,`rollout`,`owners`];function O(e){try{let t=JSON.parse(e);return typeof t!=`object`||!t||Array.isArray(t)?[{from:0,to:Math.min(1,e.length),severity:`error`,message:`The config must be an object`}]:D.filter(e=>!(e in t)).map(t=>({from:0,to:Math.min(1,e.length),severity:`warning`,message:`Missing required key "${t}"`}))}catch{return[]}}function k(){let[e,t]=(0,v.useState)(null);return(0,y.jsx)(h,{filename:`rollout.json`,defaultValue:E,lint:O,onSave:()=>t(new Date().toLocaleTimeString()),height:240,headerEnd:(0,y.jsx)(`span`,{className:`me-1 text-[11px] text-muted-foreground tabular-nums`,children:e?`Saved ${e}`:`Not saved`})})}var A=`import { useState } from "react"
import { CodeEditor, type Diagnostic } from "@kitora/editors/code"

const CONFIG = \`{"name":"workspace-editor","rollout":{"wave":1,"percent":100},"owners":["ada","grace"],"retries":3}\`

/** Keys the config must have: a host rule on top of the built-in JSON syntax check. */
const REQUIRED_KEYS = ["name", "rollout", "owners"] as const

function checkConfig(code: string): readonly Diagnostic[] {
  try {
    const parsed: unknown = JSON.parse(code)
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return [{ from: 0, to: Math.min(1, code.length), severity: "error", message: "The config must be an object" }]
    const missing = REQUIRED_KEYS.filter((key) => !(key in parsed))
    return missing.map((key) => ({ from: 0, to: Math.min(1, code.length), severity: "warning", message: \`Missing required key "\${key}"\` }))
  } catch {
    // syntax errors are reported by the built-in JSON linter
    return []
  }
}

/** A JSON config editor: syntax errors and a custom rule as lint, Shift+Alt+F pretty-prints, ⌘S saves. */
export function JsonConfigEditor() {
  const [savedAt, setSavedAt] = useState<string | null>(null)
  return (
    <CodeEditor
      filename="rollout.json"
      defaultValue={CONFIG}
      lint={checkConfig}
      onSave={() => setSavedAt(new Date().toLocaleTimeString())}
      height={240}
      headerEnd={<span className="me-1 text-[11px] text-muted-foreground tabular-nums">{savedAt ? \`Saved \${savedAt}\` : "Not saved"}</span>}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>a(()=>import(`./json-config-D2W8M84f.js`),[]));var j={members:[`id`,`name`,`team`,`active`,`joined_at`],teams:[`id`,`name`,`plan`,`seats`],invoices:[`id`,`team_id`,`amount`,`paid_at`]},M=[{team:`Platform`,seats:14,plan:`Business`},{team:`Data`,seats:9,plan:`Team`},{team:`Research`,seats:6,plan:`Team`},{team:`Design`,seats:4,plan:`Starter`}];function N(e){let t=e.matchBefore(/\w*/);return!t||t.from===t.to&&!e.explicit?null:{from:t.from,options:Object.entries(j).flatMap(([e,t])=>[{label:e,type:`class`,detail:`table`},...t.map(t=>({label:t,type:`property`,detail:e}))])}}function P(){let e=(0,v.useRef)(null),[t,n]=(0,v.useState)(null),i=()=>n({query:e.current?.getValue()??``,ms:12+Math.round(Math.random()*30)});return(0,y.jsxs)(`div`,{role:`group`,"aria-label":`SQL console`,className:`flex h-full flex-col gap-2`,onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),i())},children:[(0,y.jsx)(h,{ref:e,language:`sql`,defaultValue:`select t.name as team, t.seats, t.plan
from teams t
where t.seats > 3
order by t.seats desc;`,completions:N,height:150,label:`Query`,header:!0,headerEnd:(0,y.jsxs)(l,{type:`button`,size:`xs`,onClick:i,className:`me-1`,children:[(0,y.jsx)(r,{className:`size-3`}),`Run`]})}),(0,y.jsx)(`div`,{className:`min-h-0 flex-1 overflow-auto rounded-lg border border-border`,children:t?(0,y.jsxs)(`table`,{className:`w-full text-[12px] tabular-nums`,children:[(0,y.jsxs)(`caption`,{className:`border-b border-border px-3 py-1 text-start text-[11px] text-muted-foreground`,children:[M.length,` rows · `,t.ms,` ms`]}),(0,y.jsx)(`thead`,{className:`bg-muted/40 text-muted-foreground`,children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{className:`px-3 py-1 text-start font-medium`,children:`team`}),(0,y.jsx)(`th`,{className:`px-3 py-1 text-end font-medium`,children:`seats`}),(0,y.jsx)(`th`,{className:`px-3 py-1 text-start font-medium`,children:`plan`})]})}),(0,y.jsx)(`tbody`,{children:M.map(e=>(0,y.jsxs)(`tr`,{className:`border-t border-border`,children:[(0,y.jsx)(`td`,{className:`px-3 py-1`,children:e.team}),(0,y.jsx)(`td`,{className:`px-3 py-1 text-end`,children:e.seats}),(0,y.jsx)(`td`,{className:`px-3 py-1`,children:e.plan})]},e.team))})]}):(0,y.jsx)(`div`,{className:`grid h-full min-h-20 place-items-center text-[12px] text-muted-foreground`,children:`Press Run or ⌘Enter. Type a letter for schema completions.`})})]})}var F=`import { useRef, useState } from "react"
import { Play } from "lucide-react"
import { CodeEditor, type CodeEditorHandle, type CompletionContext, type CompletionResult } from "@kitora/editors/code"
import { Button } from "@kitora/ui/button"

/** The schema the completions offer: tables, then their columns. */
const SCHEMA = {
  members: ["id", "name", "team", "active", "joined_at"],
  teams: ["id", "name", "plan", "seats"],
  invoices: ["id", "team_id", "amount", "paid_at"],
} as const

const ROWS = [
  { team: "Platform", seats: 14, plan: "Business" },
  { team: "Data", seats: 9, plan: "Team" },
  { team: "Research", seats: 6, plan: "Team" },
  { team: "Design", seats: 4, plan: "Starter" },
]

/** Completions from the schema: every table and column, with its kind. */
function schemaCompletions(context: CompletionContext): CompletionResult | null {
  const word = context.matchBefore(/\\w*/)
  if (!word || (word.from === word.to && !context.explicit)) return null
  return {
    from: word.from,
    options: Object.entries(SCHEMA).flatMap(([table, columns]) => [
      { label: table, type: "class", detail: "table" },
      ...columns.map((column) => ({ label: column, type: "property", detail: table })),
    ]),
  }
}

/** A SQL console: schema-aware completions, Run (or ⌘Enter) shows results under the editor. */
export function SqlConsole() {
  const editor = useRef<CodeEditorHandle>(null)
  const [ran, setRan] = useState<{ readonly query: string; readonly ms: number } | null>(null)
  const run = (): void => setRan({ query: editor.current?.getValue() ?? "", ms: 12 + Math.round(Math.random() * 30) })
  return (
    // a group around the console that turns ⌘/Ctrl+Enter inside it into "run"
    <div
      role="group"
      aria-label="SQL console"
      className="flex h-full flex-col gap-2"
      onKeyDown={(event) => {
        if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
          event.preventDefault()
          run()
        }
      }}
    >
      <CodeEditor
        ref={editor}
        language="sql"
        defaultValue={"select t.name as team, t.seats, t.plan\\nfrom teams t\\nwhere t.seats > 3\\norder by t.seats desc;"}
        completions={schemaCompletions}
        height={150}
        label="Query"
        header
        headerEnd={
          <Button type="button" size="xs" onClick={run} className="me-1">
            <Play className="size-3" />
            Run
          </Button>
        }
      />
      <div className="min-h-0 flex-1 overflow-auto rounded-lg border border-border">
        {ran ? (
          <table className="w-full text-[12px] tabular-nums">
            <caption className="border-b border-border px-3 py-1 text-start text-[11px] text-muted-foreground">
              {ROWS.length} rows · {ran.ms} ms
            </caption>
            <thead className="bg-muted/40 text-muted-foreground">
              <tr>
                <th className="px-3 py-1 text-start font-medium">team</th>
                <th className="px-3 py-1 text-end font-medium">seats</th>
                <th className="px-3 py-1 text-start font-medium">plan</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.team} className="border-t border-border">
                  <td className="px-3 py-1">{row.team}</td>
                  <td className="px-3 py-1 text-end">{row.seats}</td>
                  <td className="px-3 py-1">{row.plan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="grid h-full min-h-20 place-items-center text-[12px] text-muted-foreground">Press Run or ⌘Enter. Type a letter for schema completions.</div>
        )}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>a(()=>import(`./sql-console-DAkD0JBn.js`),[]));function I(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(n,{title:`Code`,children:`CodeMirror 6 with the kit's chrome: a small IDE, a config file with validation, and a query console with schema completions.`}),(0,y.jsx)(g,{n:1,title:`A mini IDE`,blurb:`Explorer, tabs with unsaved dots, one editor per open file so each keeps its undo history; TypeScript, Python, CSS, Go and YAML; ⌘S saves the active file.`,code:T,children:(0,y.jsx)(_,{testId:`code-workspace`,height:420,children:(0,y.jsx)(w,{})})}),(0,y.jsx)(g,{n:2,title:`A JSON config with lint`,blurb:`Syntax errors from the built-in JSON linter plus a host rule for required keys; Shift+Alt+F pretty-prints; ⌘S saves.`,code:A,children:(0,y.jsx)(_,{testId:`json-config`,children:(0,y.jsx)(k,{})})}),(0,y.jsx)(g,{n:3,title:`A SQL console`,blurb:`Completions from the schema (tables and their columns), Run or ⌘Enter, and a compact results table.`,code:F,children:(0,y.jsx)(_,{testId:`sql-console`,height:340,children:(0,y.jsx)(P,{})})})]})}export{I as component};