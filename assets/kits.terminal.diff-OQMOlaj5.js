import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{o as n,r,s as i}from"./diff-viewer-Jt8ruBEh.js";import{Bc as a,Cc as o,Ic as s}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as c}from"./example-CZLJLtIC.js";import{t as l}from"./-kits.terminal.shared-BuXGOuE1.js";var u=s(),d=`${[`import { createHash } from "node:crypto"`,`import type { Request, Response } from "express"`,`import { db } from "./db"`,`import { logger } from "./logger"`].join(`
`)}

export interface Session {
  id: string
  userId: string
  createdAt: Date
  expiresAt: Date
}

const SESSION_TTL_MS = 1000 * 60 * 60

function hashToken(token: string): string {
  return createHash("sha1").update(token).digest("hex")
}

export async function createSession(userId: string): Promise<Session> {
  const id = crypto.randomUUID()
  const now = new Date()
  const session = { id, userId, createdAt: now, expiresAt: new Date(now.getTime() + SESSION_TTL_MS) }
  await db.sessions.insert(session)
  logger.info("session created", { userId })
  return session
}

export async function findSession(token: string): Promise<Session | null> {
  const row = await db.sessions.findOne({ id: hashToken(token) })
  if (!row) return null
  return row
}

export async function touchSession(session: Session): Promise<void> {
  session.expiresAt = new Date(Date.now() + SESSION_TTL_MS)
  await db.sessions.update(session.id, { expiresAt: session.expiresAt })
}

export async function destroySession(id: string): Promise<void> {
  await db.sessions.delete(id)
}

export async function listSessions(userId: string): Promise<Session[]> {
  return db.sessions.find({ userId })
}

export async function purgeExpired(): Promise<number> {
  const removed = await db.sessions.deleteMany({ expiresAt: { $lt: new Date() } })
  logger.info("purged sessions", { removed })
  return removed
}

function readCookie(req: Request, name: string): string | undefined {
  const header = req.headers.cookie ?? ""
  for (const part of header.split(";")) {
    const [k, v] = part.trim().split("=")
    if (k === name) return v
  }
  return undefined
}

export async function sessionMiddleware(req: Request, res: Response, next: () => void) {
  const token = readCookie(req, "sid")
  if (!token) return next()
  const session = await findSession(token)
  if (!session) {
    res.clearCookie("sid")
    return next()
  }
  await touchSession(session)
  res.locals.session = session
  next()
}
`,f=d.replace(`createHash("sha1")`,`createHash("sha256")`).replace(`const SESSION_TTL_MS = 1000 * 60 * 60`,`/** Sliding expiry: every request pushes it out again. */
const SESSION_TTL_MS = 1000 * 60 * 60 * 12
const TOUCH_INTERVAL_MS = 1000 * 60`).replace(`  if (!row) return null
  return row`,`  if (!row || row.expiresAt.getTime() < Date.now()) return null
  return row`).replace(`export async function touchSession(session: Session): Promise<void> {
`,`export async function touchSession(session: Session): Promise<void> {
  if (session.expiresAt.getTime() - Date.now() > SESSION_TTL_MS - TOUCH_INTERVAL_MS) return
`).replace(`  logger.info("purged sessions", { removed })
`,`  if (removed > 0) logger.info("purged sessions", { removed })
`).replace(`const [k, v] = part.trim().split("=")
    if (k === name) return v`,`const [k, ...rest] = part.trim().split("=")
    if (k === name) return decodeURIComponent(rest.join("="))`).replace(`    res.clearCookie("sid")`,`    res.clearCookie("sid", { path: "/" })`);function p(){return(0,u.jsx)(r,{oldText:d,newText:f,fileName:`src/auth/session.ts`})}var m=`import { DiffViewer } from "@kitora/terminal"

// A code review: a TypeScript module with edits in several places. Unchanged stretches fold into
// "N unchanged lines" rows (3 lines of context kept around each hunk); click one to open it, or use
// Expand all. The header toggle switches between unified and split layouts.
// The reviewed module's import lines are kept in an array so this demo file has exactly one import block.
const reviewedImports = ['import { createHash } from "node:crypto"', 'import type { Request, Response } from "express"', 'import { db } from "./db"', 'import { logger } from "./logger"'].join("\\n")

const before = \`\${reviewedImports}

export interface Session {
  id: string
  userId: string
  createdAt: Date
  expiresAt: Date
}

const SESSION_TTL_MS = 1000 * 60 * 60

function hashToken(token: string): string {
  return createHash("sha1").update(token).digest("hex")
}

export async function createSession(userId: string): Promise<Session> {
  const id = crypto.randomUUID()
  const now = new Date()
  const session = { id, userId, createdAt: now, expiresAt: new Date(now.getTime() + SESSION_TTL_MS) }
  await db.sessions.insert(session)
  logger.info("session created", { userId })
  return session
}

export async function findSession(token: string): Promise<Session | null> {
  const row = await db.sessions.findOne({ id: hashToken(token) })
  if (!row) return null
  return row
}

export async function touchSession(session: Session): Promise<void> {
  session.expiresAt = new Date(Date.now() + SESSION_TTL_MS)
  await db.sessions.update(session.id, { expiresAt: session.expiresAt })
}

export async function destroySession(id: string): Promise<void> {
  await db.sessions.delete(id)
}

export async function listSessions(userId: string): Promise<Session[]> {
  return db.sessions.find({ userId })
}

export async function purgeExpired(): Promise<number> {
  const removed = await db.sessions.deleteMany({ expiresAt: { $lt: new Date() } })
  logger.info("purged sessions", { removed })
  return removed
}

function readCookie(req: Request, name: string): string | undefined {
  const header = req.headers.cookie ?? ""
  for (const part of header.split(";")) {
    const [k, v] = part.trim().split("=")
    if (k === name) return v
  }
  return undefined
}

export async function sessionMiddleware(req: Request, res: Response, next: () => void) {
  const token = readCookie(req, "sid")
  if (!token) return next()
  const session = await findSession(token)
  if (!session) {
    res.clearCookie("sid")
    return next()
  }
  await touchSession(session)
  res.locals.session = session
  next()
}
\`

const after = before
  .replace('createHash("sha1")', 'createHash("sha256")')
  .replace("const SESSION_TTL_MS = 1000 * 60 * 60", "/** Sliding expiry: every request pushes it out again. */\\nconst SESSION_TTL_MS = 1000 * 60 * 60 * 12\\nconst TOUCH_INTERVAL_MS = 1000 * 60")
  .replace("  if (!row) return null\\n  return row", "  if (!row || row.expiresAt.getTime() < Date.now()) return null\\n  return row")
  .replace(
    "export async function touchSession(session: Session): Promise<void> {\\n",
    "export async function touchSession(session: Session): Promise<void> {\\n  if (session.expiresAt.getTime() - Date.now() > SESSION_TTL_MS - TOUCH_INTERVAL_MS) return\\n",
  )
  .replace('  logger.info("purged sessions", { removed })\\n', '  if (removed > 0) logger.info("purged sessions", { removed })\\n')
  .replace('const [k, v] = part.trim().split("=")\\n    if (k === name) return v', 'const [k, ...rest] = part.trim().split("=")\\n    if (k === name) return decodeURIComponent(rest.join("="))')
  .replace('    res.clearCookie("sid")', '    res.clearCookie("sid", { path: "/" })')

export function DiffCodeReview() {
  return <DiffViewer oldText={before} newText={after} fileName="src/auth/session.ts" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>o(()=>import(`./diff-code-review-C0G87b-l.js`),[]));var h=`{
  "name": "@acme/web",
  "version": "2.4.1",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "zod": "^3.22.0"
  }
}
`,g=`{
  "name": "@acme/web",
  "version": "2.5.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "test": "vitest",
    "lint": "oxlint ."
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "zod": "^3.22.0"
  }
}
`,_={add:`border-l-emerald-500`,del:`border-l-rose-500`,context:`border-l-transparent`};function v(){let e=i({oldText:h,newText:g,context:1});return(0,u.jsxs)(n.Root,{diff:e,className:`flex min-h-0 flex-1 flex-col bg-background font-mono text-[12px]`,children:[(0,u.jsx)(n.Header,{className:`flex h-8 items-center gap-2 border-b px-3 font-sans text-[12px]`,children:({added:e,removed:t})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`span`,{className:`font-medium`,children:`package.json`}),(0,u.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[e+t,` changes: `,e,` additions and `,t,` deletions`]})]})}),(0,u.jsx)(n.List,{rowHeight:18,className:`min-h-0 flex-1 overflow-auto py-1`,children:(e,t)=>{if(e.kind===`hunk`)return(0,u.jsxs)(n.Row,{row:e,index:t,rowHeight:18,className:`flex items-center px-3 text-[11px] text-muted-foreground`,children:[(0,u.jsx)(`span`,{className:`mr-2 h-px w-4 bg-border`}),e.header,(0,u.jsx)(`span`,{className:`ml-2 h-px flex-1 bg-border`})]},e.key);if(e.kind===`gap`)return(0,u.jsx)(n.Row,{row:e,index:t,rowHeight:18,className:`flex items-center px-3`,children:(0,u.jsx)(n.Gap,{row:e,className:`text-[11px] text-sky-700 hover:underline dark:text-sky-400`,children:e=>`Show ${e.count} hidden lines`})},e.key);if(e.kind!==`line`)return null;let{line:r}=e;return(0,u.jsxs)(n.Row,{row:e,index:t,rowHeight:18,className:`flex border-l-2 leading-[18px] ${_[r.type]} ${r.type===`add`?`bg-emerald-500/5`:r.type===`del`?`bg-rose-500/5`:``}`,children:[(0,u.jsx)(n.Gutter,{line:r,side:r.type===`del`?`old`:`new`,className:`w-10 shrink-0 select-none pr-3 text-right tabular-nums text-muted-foreground`}),(0,u.jsx)(n.Cell,{line:r,className:`whitespace-pre ${r.type===`del`?`text-rose-700 dark:text-rose-300`:r.type===`add`?`text-emerald-700 dark:text-emerald-300`:``}`,changedClassName:`underline decoration-2 underline-offset-2`})]},e.key)}})]})}var y=`import { DiffView, useDiff } from "@kitora/terminal"

// A compact, GitHub-style variant rebuilt from the headless parts: one line-number gutter, a coloured
// edge instead of a full gutter tint, hunk headers as thin dividers and an inline expand link.
// Nothing here is private API: \`useDiff\` + \`DiffView.*\` are exactly what the \`DiffViewer\` preset uses.
const before = \`{
  "name": "@acme/web",
  "version": "2.4.1",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "zod": "^3.22.0"
  }
}
\`

const after = \`{
  "name": "@acme/web",
  "version": "2.5.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "test": "vitest",
    "lint": "oxlint ."
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "zod": "^3.22.0"
  }
}
\`

const EDGE = { add: "border-l-emerald-500", del: "border-l-rose-500", context: "border-l-transparent" } as const

export function DiffFromParts() {
  const diff = useDiff({ oldText: before, newText: after, context: 1 })
  return (
    <DiffView.Root diff={diff} className="flex min-h-0 flex-1 flex-col bg-background font-mono text-[12px]">
      <DiffView.Header className="flex h-8 items-center gap-2 border-b px-3 font-sans text-[12px]">
        {({ added, removed }) => (
          <>
            <span className="font-medium">package.json</span>
            <span className="text-muted-foreground tabular-nums">
              {added + removed} changes: {added} additions and {removed} deletions
            </span>
          </>
        )}
      </DiffView.Header>
      <DiffView.List rowHeight={18} className="min-h-0 flex-1 overflow-auto py-1">
        {(row, index) => {
          if (row.kind === "hunk")
            return (
              <DiffView.Row key={row.key} row={row} index={index} rowHeight={18} className="flex items-center px-3 text-[11px] text-muted-foreground">
                <span className="mr-2 h-px w-4 bg-border" />
                {row.header}
                <span className="ml-2 h-px flex-1 bg-border" />
              </DiffView.Row>
            )
          if (row.kind === "gap")
            return (
              <DiffView.Row key={row.key} row={row} index={index} rowHeight={18} className="flex items-center px-3">
                <DiffView.Gap row={row} className="text-[11px] text-sky-700 hover:underline dark:text-sky-400">
                  {(gap) => \`Show \${gap.count} hidden lines\`}
                </DiffView.Gap>
              </DiffView.Row>
            )
          if (row.kind !== "line") return null
          const { line } = row
          return (
            <DiffView.Row key={row.key} row={row} index={index} rowHeight={18} className={\`flex border-l-2 leading-[18px] \${EDGE[line.type]} \${line.type === "add" ? "bg-emerald-500/5" : line.type === "del" ? "bg-rose-500/5" : ""}\`}>
              <DiffView.Gutter line={line} side={line.type === "del" ? "old" : "new"} className="w-10 shrink-0 select-none pr-3 text-right tabular-nums text-muted-foreground" />
              <DiffView.Cell
                line={line}
                className={\`whitespace-pre \${line.type === "del" ? "text-rose-700 dark:text-rose-300" : line.type === "add" ? "text-emerald-700 dark:text-emerald-300" : ""}\`}
                changedClassName="underline decoration-2 underline-offset-2"
              />
            </DiffView.Row>
          )
        }}
      </DiffView.List>
    </DiffView.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>o(()=>import(`./diff-from-parts-DlYJn3PJ.js`),[]));var b=e(a(),1),x=1e5;function S(e,t){let n=[];for(let e=1;e<=x;e++)n.push(`${String(e).padStart(6,`0`)}  event=request status=200 path=/api/items/${e%977} ms=${e*7%300}`);let r=[...n];for(let n=0;n<e;n++){let i=Math.floor((n+1)*x/(e+1)+t*131)%x;n%3==0?r[i]=r[i].replace(`status=200`,`status=500`).replace(/ms=\d+/,`ms=2310`):n%3==1?r.splice(i,0,`------  event=deploy version=v${t}.${n} by=ci`):r.splice(i,2)}return{before:n.join(`
`),after:r.join(`
`)}}function C(){let[e,t]=(0,b.useState)(1),{before:n,after:i}=(0,b.useMemo)(()=>S(9,e),[e]);return(0,u.jsx)(r,{oldText:n,newText:i,fileName:`access.log (100,000 lines)`,showTiming:!0,actions:(0,u.jsx)(`button`,{type:`button`,onClick:()=>t(e=>e+1),className:`inline-flex h-7 items-center rounded-md px-2 text-[12px] text-muted-foreground hover:bg-muted hover:text-foreground`,children:`New edits`})})}var w=`import { useMemo, useState } from "react"
import { DiffViewer } from "@kitora/terminal"

// 100,000 lines with a handful of scattered edits. Myers' O(ND) diff over interned line ids (common
// prefix and suffix trimmed first) finishes in milliseconds; the header shows the measured time.
// Expand all renders the full 100k-row file, virtualised, so only the visible rows are in the DOM.
const LINES = 100_000

function generate(edits: number, seed: number): { before: string; after: string } {
  const old: string[] = []
  for (let i = 1; i <= LINES; i++) old.push(\`\${String(i).padStart(6, "0")}  event=request status=200 path=/api/items/\${i % 977} ms=\${(i * 7) % 300}\`)
  const next = [...old]
  for (let e = 0; e < edits; e++) {
    const at = Math.floor(((e + 1) * LINES) / (edits + 1) + seed * 131) % LINES
    if (e % 3 === 0) next[at] = next[at].replace("status=200", "status=500").replace(/ms=\\d+/, "ms=2310")
    else if (e % 3 === 1) next.splice(at, 0, \`------  event=deploy version=v\${seed}.\${e} by=ci\`)
    else next.splice(at, 2)
  }
  return { before: old.join("\\n"), after: next.join("\\n") }
}

export function DiffLargeFile() {
  const [seed, setSeed] = useState(1)
  const { before, after } = useMemo(() => generate(9, seed), [seed])
  return (
    <DiffViewer
      oldText={before}
      newText={after}
      fileName="access.log (100,000 lines)"
      showTiming
      actions={
        <button type="button" onClick={() => setSeed((s) => s + 1)} className="inline-flex h-7 items-center rounded-md px-2 text-[12px] text-muted-foreground hover:bg-muted hover:text-foreground">
          New edits
        </button>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>o(()=>import(`./diff-large-file-DSiSdifg.js`),[]));function T(){return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(t,{title:`Diff viewer`,children:"A line diff (Myers O(ND), linear space, behind a swappable `DiffAlgorithm`) with word-level highlights, unified and split layouts, folded unchanged regions and virtualised rows."}),(0,u.jsx)(c,{n:1,title:`A code review`,blurb:`Several hunks in one file; unchanged stretches fold to 3 lines of context. Click a fold to open it, or switch to Split.`,code:m,children:(0,u.jsx)(l,{testId:`diff-code-review`,height:480,children:(0,u.jsx)(p,{})})}),(0,u.jsx)(c,{n:2,title:`A 100,000-line file`,blurb:`Nine scattered edits in 100k lines. The header shows the diff time; Expand all renders the whole file, virtualised.`,code:w,children:(0,u.jsx)(l,{testId:`diff-large-file`,height:420,children:(0,u.jsx)(C,{})})}),(0,u.jsx)(c,{n:3,title:`Rebuilt from the parts`,blurb:"A compact GitHub-style variant from `useDiff` and `DiffView.*`: one gutter, coloured edges, inline expand links.",code:y,children:(0,u.jsx)(l,{testId:`diff-from-parts`,height:340,children:(0,u.jsx)(v,{})})})]})}export{T as component};