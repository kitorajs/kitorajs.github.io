const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ui-gxFEB4Cj.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{F as t,R as n,Y as r,Z as i}from"./data-grid-highlight-uXUikv3_.js";import{Ec as a,Uc as o,ri as s,zc as c}from"./index-BZuUy872.js";import{i as l}from"./virtual-list-Cm6WgnC8.js";import{t as u}from"./data-grid-virtual-DeMoi-lo.js";import{n as d}from"./lib-C0E9zsFn.js";import{t as f}from"./lazy-B3jAiMH-.js";var p=c(),m=`export function greet(name: string): string {
  return \`Hello, \${name}\`
}
`;function h(){return(0,p.jsx)(f,{filename:`greet.ts`,defaultValue:m,label:`Loaded on demand`})}var g=`import { LazyCodeEditor } from "@kitora/editors/code/lazy"

const source = 'export function greet(name: string): string {\\n  return \`Hello, \${name}\`\\n}\\n'

// The lazy entry draws the editor's frame, sized to the file, at once; CodeMirror loads in its own chunk on first render.
// It takes the same props as CodeEditor from @kitora/editors/code, which loads CodeMirror up front.
export function LazyEditor() {
  return <LazyCodeEditor filename="greet.ts" defaultValue={source} label="Loaded on demand" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>a(()=>import(`./performance-lazy-editor-Dz6-A6mK.js`),[]));var _=e(o(),1),v=(0,_.lazy)(()=>a(()=>import(`./ui-gxFEB4Cj.js`).then(e=>e.t).then(e=>({default:e.ThemeCustomizer})),__vite__mapDeps([0])));function y(){let[e,t]=(0,_.useState)(!1);return e?(0,p.jsx)(_.Suspense,{fallback:(0,p.jsx)(`p`,{role:`status`,className:`text-sm text-muted-foreground`,children:`Loading the customizer…`}),children:(0,p.jsx)(v,{className:`w-full`})}):(0,p.jsx)(s,{onClick:()=>t(!0),children:`Customize the theme`})}var b=`import { lazy, Suspense, useState } from "react"
import { Button } from "@kitora/ui/button"

// A heavy panel in a chunk of its own: the import runs the first time the panel renders, not when the page loads.
const ThemeCustomizer = lazy(() => import("@kitora/theme/ui").then((m) => ({ default: m.ThemeCustomizer })))

export function LazyPanel() {
  const [open, setOpen] = useState(false)
  if (!open) return <Button onClick={() => setOpen(true)}>Customize the theme</Button>
  return (
    <Suspense fallback={<p role="status" className="text-sm text-muted-foreground">Loading the customizer…</p>}>
      <ThemeCustomizer className="w-full" />
    </Suspense>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>a(()=>import(`./performance-lazy-panel-D0bzjY8h.js`),[]));var x=[`Acme`,`Globex`,`Initech`,`Umbrella`,`Hooli`],S=Array.from({length:1e4},(e,t)=>({id:`o-${t+1}`,customer:x[t%x.length]??``,total:t*37%900+100})),C=t()([{id:`id`,header:`Order`,cell:e=>e.id},{id:`customer`,header:`Customer`,cell:e=>e.customer,meta:{sortFieldId:`customer`}},{id:`total`,header:`Total`,cell:e=>`$${e.total}`,meta:{sortFieldId:`total`,align:`right`}}]);function w(){return(0,p.jsx)(`div`,{className:`w-full`,children:(0,p.jsx)(i,{defaultPageSize:1/0,children:(0,p.jsx)(r,{adapter:(0,_.useMemo)(()=>n({initial:S}),[]),children:(0,p.jsx)(u,{columns:C,height:320,rowHeight:36,useAdapterDefaults:!1})})})})}var T=`import { useMemo } from "react"
import { createInMemoryAdapter, DataGridProvider, DataGridUIProvider, DataGridVirtual, defineColumns } from "@kitora/datagrid"

interface Order {
  id: string
  customer: string
  total: number
}

const CUSTOMERS = ["Acme", "Globex", "Initech", "Umbrella", "Hooli"]
const orders: Order[] = Array.from({ length: 10_000 }, (_, i) => ({ id: \`o-\${i + 1}\`, customer: CUSTOMERS[i % CUSTOMERS.length] ?? "", total: ((i * 37) % 900) + 100 }))

const columns = defineColumns<Order>()([
  { id: "id", header: "Order", cell: (row) => row.id },
  { id: "customer", header: "Customer", cell: (row) => row.customer, meta: { sortFieldId: "customer" } },
  { id: "total", header: "Total", cell: (row) => \`$\${row.total}\`, meta: { sortFieldId: "total", align: "right" } },
])

// 10,000 rows in memory, one page (defaultPageSize Infinity): DataGridVirtual mounts only the rows in its height.
export function VirtualRows() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: orders }), [])
  return (
    <div className="w-full">
      <DataGridUIProvider defaultPageSize={Infinity}>
        <DataGridProvider adapter={adapter}>
          <DataGridVirtual columns={columns} height={320} rowHeight={36} useAdapterDefaults={false} />
        </DataGridProvider>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>a(()=>import(`./performance-grid-XqGENurG.js`),[]));function E(){return(0,p.jsx)(l,{"aria-label":`One hundred thousand rows`,count:1e5,rowHeight:28,height:280,className:`w-full max-w-md`,itemClassName:`gap-2 border-b border-border/50`,renderItem:e=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`span`,{className:`w-14 text-right text-[11px] tabular-nums text-muted-foreground`,children:[`#`,e]}),(0,p.jsxs)(`span`,{className:`truncate`,children:[`Row `,e+1]})]})})}var D=`import { VirtualList } from "@kitora/collections/ui"

// 100,000 rows of a fixed height: only the rows in view, plus a few above and below, are in the DOM.
export function LongList() {
  return (
    <VirtualList
      aria-label="One hundred thousand rows"
      count={100_000}
      rowHeight={28}
      height={280}
      className="w-full max-w-md"
      itemClassName="gap-2 border-b border-border/50"
      renderItem={(index) => (
        <>
          <span className="w-14 text-right text-[11px] tabular-nums text-muted-foreground">#{index}</span>
          <span className="truncate">Row {index + 1}</span>
        </>
      )}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>a(()=>import(`./performance-list-CoRuSy63.js`),[]));function O(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...d(),...e.components},{Api:n,Entries:r,Relies:i,SizeOf:a,Snippet:o}=t;return n||A(`Api`,!0),r||A(`Entries`,!0),i||A(`Relies`,!0),a||A(`SizeOf`,!0),o||A(`Snippet`,!0),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.p,{children:`A page pays for the code it imports and for the rows it renders. Four habits keep both small: import the narrowest entry, load heavy engines only where they are used, let your bundler drop what you do not use, and render only the rows on screen.`}),`
`,(0,p.jsx)(t.h2,{children:`Import the smallest entry`}),`
`,(0,p.jsxs)(t.p,{children:[`Every package is split into entries: its layers (`,(0,p.jsx)(t.code,{children:`core`}),`, `,(0,p.jsx)(t.code,{children:`dom`}),`, `,(0,p.jsx)(t.code,{children:`react`}),`, `,(0,p.jsx)(t.code,{children:`ui`}),`) and, in the larger kits, one entry per component or per engine. Import from the narrowest entry that has what you need. The collections kit, for example:`]}),`
`,(0,p.jsx)(r,{package:`@kitora/collections`}),`
`,(0,p.jsxs)(t.p,{children:[`The headless hook `,(0,p.jsx)(t.code,{children:`useVirtualList`}),` comes from `,(0,p.jsx)(t.code,{children:`@kitora/collections/react`}),` (`,(0,p.jsx)(a,{entry:`@kitora/collections/react`}),`); the styled `,(0,p.jsx)(t.code,{children:`VirtualList`}),` from `,(0,p.jsx)(t.code,{children:`@kitora/collections/ui`}),` (`,(0,p.jsx)(a,{entry:`@kitora/collections/ui`}),`). Where a package's root re-exports its layers, a named import from the root costs the same as one from the layer, and the size check measures that on every release. `,(0,p.jsx)(t.a,{href:`/docs/getting-started/bundle-size`,children:`Bundle size`}),` explains the budgets.`]}),`
`,(0,p.jsx)(t.h2,{children:`Load heavy engines on demand`}),`
`,(0,p.jsx)(t.p,{children:`The big third-party engines (the code editor, rich text, maps, syntax highlighting, collaboration) live in entries of their own, so a page pays for one only where it uses it. The size check fails any other entry that pulls one of them in up front.`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Engine`}),(0,p.jsx)(t.th,{children:`Entry`}),(0,p.jsx)(t.th,{children:`Budget`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Code editor, loaded up front`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@kitora/editors/code`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(a,{entry:`@kitora/editors/code`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Code editor, loaded when it renders`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@kitora/editors/code/lazy`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(a,{entry:`@kitora/editors/code/lazy`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Rich text, loaded up front`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@kitora/editors/rich-text`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(a,{entry:`@kitora/editors/rich-text`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Rich text, loaded when it renders`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@kitora/editors/rich-text/lazy`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(a,{entry:`@kitora/editors/rich-text/lazy`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Maps: MapLibre loads when a map mounts`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@kitora/maps/ui`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(a,{entry:`@kitora/maps/ui`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Shiki highlighting: the engine and each grammar load when needed`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@kitora/display/shiki`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(a,{entry:`@kitora/display/shiki`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Form fields: the rich-text and location fields load the editor and the map when they render`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@kitora/form/fields`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(a,{entry:`@kitora/form/fields`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Collaboration (Yjs)`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@kitora/collab/yjs`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(a,{entry:`@kitora/collab/yjs`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Form collaboration (Yjs)`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@kitora/form/collab`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(a,{entry:`@kitora/form/collab`})})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[`Yjs is in the two collaboration entries only: `,(0,p.jsx)(t.code,{children:`@kitora/collab`}),` and the form engine's other entries never import it, so a page that does not collaborate never ships it. A map's engine loader is the `,(0,p.jsx)(t.code,{children:`loader`}),` prop, which you can swap to preload the engine or to stub it in tests.`]}),`
`,(0,p.jsx)(t.p,{children:`The lazy editors take the same props as the eager ones and draw the editor's frame at once, marked busy, so the page does not jump when the engine arrives.`}),`
`,(0,p.jsx)(o,{title:`The code editor, loaded on demand`,source:g,children:(0,p.jsx)(h,{})}),`
`,(0,p.jsxs)(t.p,{children:[`For a heavy part of your own, do the same with `,(0,p.jsx)(t.code,{children:`lazy`}),` and `,(0,p.jsx)(t.code,{children:`Suspense`}),` from React and an `,(0,p.jsx)(t.code,{children:`import()`}),` of its entry: the bundler puts it in a chunk of its own, which loads the first time the part renders. The site header opens the design-language customizer this way.`]}),`
`,(0,p.jsx)(o,{title:`A panel loaded the first time it opens`,source:b,children:(0,p.jsx)(y,{})}),`
`,(0,p.jsx)(t.h2,{children:`Let the bundler drop what you do not use`}),`
`,(0,p.jsxs)(t.p,{children:[`Every package's `,(0,p.jsx)(t.code,{children:`package.json`}),` lists only its CSS files under `,(0,p.jsx)(t.code,{children:`sideEffects`}),`, so your bundler drops any module none of whose exports you use. The build also marks top-level calls such as `,(0,p.jsx)(t.code,{children:`createContext`}),` as pure, so using one export of a module does not keep the rest of it alive; a release check bundles each built module on its own to prove the marks are there.`]}),`
`,(0,p.jsx)(t.h2,{children:`Render only the rows on screen`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DataGridVirtual`}),` sits inside the same providers as `,(0,p.jsx)(n,{name:`DataGrid`}),`, takes a `,(0,p.jsx)(t.code,{children:`height`}),` and a fixed `,(0,p.jsx)(t.code,{children:`rowHeight`}),`, and mounts only the rows in its height, inside a scroll body sized for all of them. The `,(0,p.jsx)(t.a,{href:`/kits/datagrid/virtual`,children:`virtual grid demo`}),` runs it with search, filters and sorting on.`]}),`
`,(0,p.jsx)(o,{title:`Ten thousand rows in a virtual grid`,source:T,children:(0,p.jsx)(w,{})}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(n,{name:`VirtualList`}),` does the same for any list: rows of one height with `,(0,p.jsx)(t.code,{children:`rowHeight`}),`, or rows of different heights with `,(0,p.jsx)(t.code,{children:`estimateSize`}),`, each measured once it mounts. Scroll it from code with `,(0,p.jsx)(t.code,{children:`handleRef`}),`. The collections kit's listbox and tree view use the same window (`,(0,p.jsx)(t.a,{href:`/kits/collections/scale`,children:`ten thousand rows`}),`).`]}),`
`,(0,p.jsx)(o,{title:`A hundred thousand rows in a virtual list`,source:D,children:(0,p.jsx)(E,{})}),`
`,(0,p.jsx)(i,{on:[`scripts/packages-size/budgets.json`,`scripts/packages-size/check.mjs`,`scripts/packages-size/side-effects.mjs`,`packages/*/package.json`,`packages/editors/src/code/lazy.tsx`,`packages/editors/src/rich-text/lazy.tsx`,`packages/maps/src/dom/index.ts`,`packages/display/src/shiki/index.ts`,`packages/form/src/fields/location.tsx`,`packages/form/src/fields/rich-text.tsx`,`packages/collab/src/index.ts`,`src/components/language-switcher.tsx`,`packages/datagrid/src/ui/data-grid-virtual.tsx`,`packages/collections/src/core/virtual.ts`,`packages/collections/src/ui/virtual-list.tsx`,`src/docs/examples/__tests__/performance.test.tsx`]})]})}function k(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(O,{...e})}):O(e)}function A(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};