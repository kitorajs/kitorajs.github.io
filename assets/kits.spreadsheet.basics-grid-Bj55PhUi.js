import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,c as n,d as r,f as i,i as a,l as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./spreadsheet-L2Rdnqjx.js";import{t as m}from"./eraser-Ce-rqEFf.js";import{s as h}from"./kit-docs-Cf27Kpa-.js";import{Ec as g,Uc as _,zc as v}from"./index-BZuUy872.js";import{i as y}from"./clipboard-HvkMrbDJ.js";import{a as b,c as x,d as S,g as C,l as w,n as T,o as E,r as D,s as O,t as k,u as A}from"./-kits.spreadsheet.shared-CQUtmuET.js";import"./kit-gallery-BBavj2rC.js";import{t as j}from"./example-B67lLz1F.js";var M=v();function N(){let e=S({rows:40,cols:8,cells:{A1:{input:`Region`,format:{bold:!0}},B1:{input:`Q1`,format:{bold:!0}},C1:{input:`Q2`,format:{bold:!0}},D1:{input:`Total`,format:{bold:!0}},A2:`North`,B2:`120`,C2:`140`,D2:`=B2+C2`,A3:`South`,B3:`90`,C3:`115`,D3:`=B3+C3`}});return(0,M.jsxs)(f.Root,{store:e,children:[(0,M.jsxs)(f.FormulaBar.Root,{children:[(0,M.jsx)(f.FormulaBar.NameBox,{}),(0,M.jsx)(f.FormulaBar.Icon,{children:`=`}),(0,M.jsx)(f.FormulaBar.Input,{})]}),(0,M.jsxs)(f.Toolbar.Root,{label:`Compact formatting`,children:[(0,M.jsx)(f.Toolbar.History,{}),(0,M.jsx)(f.Toolbar.Separator,{}),(0,M.jsx)(f.Toolbar.Style,{}),(0,M.jsx)(f.Toolbar.Separator,{}),(0,M.jsx)(f.Toolbar.NumberFormat,{decimals:!1}),(0,M.jsx)(f.Toolbar.Separator,{}),(0,M.jsx)(f.Toolbar.Button,{label:`Add a region`,onClick:()=>e.setInput(3,0,`East`),children:(0,M.jsx)(`span`,{className:`px-1 text-[12px]`,children:`+ Region`})})]}),(0,M.jsx)(f.Grid,{className:`min-h-0 flex-1`,label:`Regions`,classNames:{columnHeader:`data-[selected]:text-primary`}}),(0,M.jsx)(f.StatusBar,{children:(0,M.jsx)(`span`,{className:`text-foreground`,children:`Built from parts`})})]})}var P=`import { Spreadsheet, useSpreadsheet } from "@kitora/spreadsheet"

/**
 * The \`<Spreadsheet>\` preset rebuilt from its public parts, rearranged: the formula bar sits
 * on top, the toolbar keeps only history, styles and number formats plus a button of our own,
 * and the status bar carries a note. Every part reads the store from \`Spreadsheet.Root\`.
 */
export function BasicCompose() {
  const store = useSpreadsheet({
    rows: 40,
    cols: 8,
    cells: {
      A1: { input: "Region", format: { bold: true } },
      B1: { input: "Q1", format: { bold: true } },
      C1: { input: "Q2", format: { bold: true } },
      D1: { input: "Total", format: { bold: true } },
      A2: "North",
      B2: "120",
      C2: "140",
      D2: "=B2+C2",
      A3: "South",
      B3: "90",
      C3: "115",
      D3: "=B3+C3",
    },
  })
  return (
    <Spreadsheet.Root store={store}>
      <Spreadsheet.FormulaBar.Root>
        <Spreadsheet.FormulaBar.NameBox />
        <Spreadsheet.FormulaBar.Icon>=</Spreadsheet.FormulaBar.Icon>
        <Spreadsheet.FormulaBar.Input />
      </Spreadsheet.FormulaBar.Root>
      <Spreadsheet.Toolbar.Root label="Compact formatting">
        <Spreadsheet.Toolbar.History />
        <Spreadsheet.Toolbar.Separator />
        <Spreadsheet.Toolbar.Style />
        <Spreadsheet.Toolbar.Separator />
        <Spreadsheet.Toolbar.NumberFormat decimals={false} />
        <Spreadsheet.Toolbar.Separator />
        <Spreadsheet.Toolbar.Button label="Add a region" onClick={() => store.setInput(3, 0, "East")}>
          <span className="px-1 text-[12px]">+ Region</span>
        </Spreadsheet.Toolbar.Button>
      </Spreadsheet.Toolbar.Root>
      <Spreadsheet.Grid className="min-h-0 flex-1" label="Regions" classNames={{ columnHeader: "data-[selected]:text-primary" }} />
      <Spreadsheet.StatusBar>
        <span className="text-foreground">Built from parts</span>
      </Spreadsheet.StatusBar>
    </Spreadsheet.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>g(()=>import(`./compose-yswpwq7_.js`),[]));var F=e(_(),1),I={A1:`Price`,B1:`12`,A2:`Qty`,B2:`3`,A3:`Total`,B3:`=B1*B2`};function L(){let[e,t]=(0,F.useState)(I),[n,r]=(0,F.useState)(0),i=S({rows:20,cols:6},{cells:e,onCellsChange:e=>{t(e),r(e=>e+1)}});return(0,M.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,M.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-b px-2 text-[13px]`,children:[(0,M.jsx)(`button`,{type:`button`,className:`h-7 rounded-md border px-2 hover:bg-muted`,onClick:()=>t(I),children:`Reset`}),(0,M.jsxs)(`span`,{"data-testid":`controlled-summary`,className:`ml-auto text-muted-foreground tabular-nums`,children:[Object.keys(e).length,` cells in host state · `,n,` changes · B1 = `,(0,M.jsx)(`b`,{className:`text-foreground`,children:typeof e.B1==`string`?e.B1:e.B1?.input??``})]})]}),(0,M.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,M.jsx)(f,{store:i,toolbar:!1,statusBar:!1})})]})}var R=`import { useState } from "react"
import { Spreadsheet, useSpreadsheet, type CellRecord } from "@kitora/spreadsheet"

const START: CellRecord = { A1: "Price", B1: "12", A2: "Qty", B2: "3", A3: "Total", B3: "=B1*B2" }

/**
 * Controlled cells: the host owns them in React state. Every edit (typing, paste, fill,
 * undo) comes back through \`onCellsChange\`; setting new \`cells\` (Reset) replaces the sheet.
 * The same record could be saved to a server or local storage.
 */
export function BasicControlled() {
  const [cells, setCells] = useState<CellRecord>(START)
  const [changes, setChanges] = useState(0)
  const store = useSpreadsheet(
    { rows: 20, cols: 6 },
    {
      cells,
      onCellsChange: (next) => {
        setCells(next)
        setChanges((n) => n + 1)
      },
    },
  )
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-9 shrink-0 items-center gap-2 border-b px-2 text-[13px]">
        <button type="button" className="h-7 rounded-md border px-2 hover:bg-muted" onClick={() => setCells(START)}>
          Reset
        </button>
        <span data-testid="controlled-summary" className="ml-auto text-muted-foreground tabular-nums">
          {Object.keys(cells).length} cells in host state · {changes} changes · B1 = <b className="text-foreground">{typeof cells.B1 === "string" ? cells.B1 : (cells.B1?.input ?? "")}</b>
        </span>
      </div>
      <div className="min-h-0 flex-1">
        <Spreadsheet store={store} toolbar={false} statusBar={false} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>g(()=>import(`./controlled-Bj0PWE-k.js`),[]));function z(){return(0,M.jsx)(w,{store:S({rows:100,cols:10,cells:{A1:`Click a cell and type`,A2:`Shift+arrows select`,A3:`Ctrl+arrows jump`}}),children:(0,M.jsx)(D,{className:`h-full`,label:`Scratch grid`})})}var B=`import { SpreadsheetGrid, SpreadsheetProvider, useSpreadsheet } from "@kitora/spreadsheet"

/** Just the grid: no toolbar, no formula bar. Every key still works (F2, Enter, Tab, arrows, Ctrl+Z). */
export function BasicGridOnly() {
  const store = useSpreadsheet({ rows: 100, cols: 10, cells: { A1: "Click a cell and type", A2: "Shift+arrows select", A3: "Ctrl+arrows jump" } })
  return (
    <SpreadsheetProvider store={store}>
      <SpreadsheetGrid className="h-full" label="Scratch grid" />
    </SpreadsheetProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>g(()=>import(`./grid-only-DRF8FOwx.js`),[]));function V(){return(0,M.jsx)(f,{store:S({rows:50,cols:8,cells:{A1:{input:`Item`,format:{bold:!0}},B1:{input:`Qty`,format:{bold:!0}},C1:{input:`Price`,format:{bold:!0}},D1:{input:`Total`,format:{bold:!0}},A2:`Coffee`,B2:`2`,C2:`$3.50`,D2:`=B2*C2`,A3:`Bagel`,B3:`1`,C3:`$2.25`,D3:`=B3*C3`,C4:{input:`Sum`,format:{bold:!0,align:`right`}},D4:{input:`=SUM(D2:D3)`,format:{bold:!0,num:`currency`}}}})})}var H=`import { Spreadsheet, useSpreadsheet } from "@kitora/spreadsheet"

/** The whole thing: a store with a few cells, and \`<Spreadsheet>\` around it. */
export function BasicSpreadsheet() {
  const store = useSpreadsheet({
    rows: 50,
    cols: 8,
    cells: {
      A1: { input: "Item", format: { bold: true } },
      B1: { input: "Qty", format: { bold: true } },
      C1: { input: "Price", format: { bold: true } },
      D1: { input: "Total", format: { bold: true } },
      A2: "Coffee",
      B2: "2",
      C2: "$3.50",
      D2: "=B2*C2",
      A3: "Bagel",
      B3: "1",
      C3: "$2.25",
      D3: "=B3*C3",
      C4: { input: "Sum", format: { bold: true, align: "right" } },
      D4: { input: "=SUM(D2:D3)", format: { bold: true, num: "currency" } },
    },
  })
  return <Spreadsheet store={store} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>g(()=>import(`./minimal-IFU3N6Qb.js`),[]));function U(){let e=S({rows:30,cols:6,cells:{A1:{input:`Item`,format:{bold:!0}},B1:{input:`Qty`,format:{bold:!0}},C1:{input:`Price`,format:{bold:!0}},D1:{input:`Total`,format:{bold:!0}},A2:`Pens`,B2:`12`,C2:`1.5`,D2:`=B2*C2`,A3:`Paper`,B3:`4`,C3:`6`,D3:`=B3*C3`,E1:`Note: restock Friday`}});return(0,M.jsxs)(u,{store:e,children:[(0,M.jsxs)(i,{label:`Sheet tools`,children:[(0,M.jsx)(c,{}),(0,M.jsx)(l,{}),(0,M.jsx)(o,{}),(0,M.jsx)(a,{}),(0,M.jsx)(l,{}),(0,M.jsx)(d,{}),(0,M.jsx)(l,{}),(0,M.jsx)(n,{}),(0,M.jsx)(t,{}),(0,M.jsx)(l,{}),(0,M.jsx)(p,{label:`Clear the note`,onClick:()=>e.setInput(0,4,``),children:(0,M.jsx)(m,{className:`size-3.5`})})]}),(0,M.jsxs)(b,{children:[(0,M.jsx)(x,{}),(0,M.jsx)(E,{}),(0,M.jsx)(O,{})]}),(0,M.jsx)(D,{className:`min-h-0 flex-1`,label:`Stock`}),(0,M.jsx)(T,{})]})}var W=`import { Eraser } from "lucide-react"
import { SpreadsheetAlignButtons, SpreadsheetFormulaBarRoot, SpreadsheetFormulaIcon, SpreadsheetFormulaInput, SpreadsheetFreezeMenu, SpreadsheetGrid, SpreadsheetHistoryButtons, SpreadsheetNameBox, SpreadsheetNumberFormatButtons, SpreadsheetRoot, SpreadsheetSortButtons, SpreadsheetStatusBar, SpreadsheetStyleButtons, SpreadsheetToolButton, SpreadsheetToolbarRoot, SpreadsheetToolbarSeparator, useSpreadsheet } from "@kitora/spreadsheet"

/**
 * Every part imported by its own name instead of through \`Spreadsheet.*\`: the toolbar frame
 * filled with each group (history, style, align, number format, sort, freeze) in an order of
 * our own, a custom button that clears the notes cell, and the formula bar built from its pieces.
 */
export function BasicNamedParts() {
  const store = useSpreadsheet({
    rows: 30,
    cols: 6,
    cells: {
      A1: { input: "Item", format: { bold: true } },
      B1: { input: "Qty", format: { bold: true } },
      C1: { input: "Price", format: { bold: true } },
      D1: { input: "Total", format: { bold: true } },
      A2: "Pens",
      B2: "12",
      C2: "1.5",
      D2: "=B2*C2",
      A3: "Paper",
      B3: "4",
      C3: "6",
      D3: "=B3*C3",
      E1: "Note: restock Friday",
    },
  })
  return (
    <SpreadsheetRoot store={store}>
      <SpreadsheetToolbarRoot label="Sheet tools">
        <SpreadsheetHistoryButtons />
        <SpreadsheetToolbarSeparator />
        <SpreadsheetStyleButtons />
        <SpreadsheetAlignButtons />
        <SpreadsheetToolbarSeparator />
        <SpreadsheetNumberFormatButtons />
        <SpreadsheetToolbarSeparator />
        <SpreadsheetSortButtons />
        <SpreadsheetFreezeMenu />
        <SpreadsheetToolbarSeparator />
        <SpreadsheetToolButton label="Clear the note" onClick={() => store.setInput(0, 4, "")}>
          <Eraser className="size-3.5" />
        </SpreadsheetToolButton>
      </SpreadsheetToolbarRoot>
      <SpreadsheetFormulaBarRoot>
        <SpreadsheetNameBox />
        <SpreadsheetFormulaIcon />
        <SpreadsheetFormulaInput />
      </SpreadsheetFormulaBarRoot>
      <SpreadsheetGrid className="min-h-0 flex-1" label="Stock" />
      <SpreadsheetStatusBar />
    </SpreadsheetRoot>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>g(()=>import(`./named-parts-B0HeKCBA.js`),[]));var{Root:G,FormulaBar:K,Grid:q,StatusBar:J}=s;function Y(){let e=S({rows:30,cols:6,cells:{A1:{input:`Month`,format:{bold:!0}},B1:{input:`Visits`,format:{bold:!0}},A2:`Jan`,B2:`340`,A3:`Feb`,B3:`410`,A4:`Total`,B4:`=SUM(B2:B3)`}});return(0,M.jsxs)(G,{store:e,children:[(0,M.jsx)(r,{children:(0,M.jsx)(p,{label:`Add March`,onClick:()=>e.setInput(3,0,`Mar`),children:(0,M.jsx)(`span`,{className:`px-1 text-[12px]`,children:`+ Month`})})}),(0,M.jsx)(K,{}),(0,M.jsx)(q,{className:`min-h-0 flex-1`,label:`Visits`}),(0,M.jsx)(J,{})]})}var X=`import { SpreadsheetParts, SpreadsheetToolbar, SpreadsheetToolButton, useSpreadsheet } from "@kitora/spreadsheet"

/** The parts as one object, so a wrapper can pass them around or rename them in one line. */
const { Root, FormulaBar, Grid, StatusBar } = SpreadsheetParts

/**
 * \`SpreadsheetParts\` is the same set of parts \`Spreadsheet.*\` carries, without the preset.
 * Here the preset toolbar (\`SpreadsheetToolbar\`, every group in order) gets one extra button
 * as its children, and the rest of the layout comes from the parts object.
 */
export function BasicPartsObject() {
  const store = useSpreadsheet({
    rows: 30,
    cols: 6,
    cells: {
      A1: { input: "Month", format: { bold: true } },
      B1: { input: "Visits", format: { bold: true } },
      A2: "Jan",
      B2: "340",
      A3: "Feb",
      B3: "410",
      A4: "Total",
      B4: "=SUM(B2:B3)",
    },
  })
  return (
    <Root store={store}>
      <SpreadsheetToolbar>
        <SpreadsheetToolButton label="Add March" onClick={() => store.setInput(3, 0, "Mar")}>
          <span className="px-1 text-[12px]">+ Month</span>
        </SpreadsheetToolButton>
      </SpreadsheetToolbar>
      <FormulaBar />
      <Grid className="min-h-0 flex-1" label="Visits" />
      <StatusBar />
    </Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>g(()=>import(`./parts-object-CYxnRbES.js`),[]));function Z(){let e=S({rows:20,cols:5,cells:{A1:`Input`,B1:`3`,A2:`Squared`,B2:`=B1*B1`}}),t=A(e),[n,r]=(0,F.useState)(4),i=e.engine.value(1,1);return(0,M.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,M.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-b px-2 text-[13px]`,children:[(0,M.jsxs)(`button`,{type:`button`,className:`h-7 rounded-md border px-2 hover:bg-muted`,onClick:()=>{e.setInput(0,1,String(n)),r(n+1)},children:[`store.setInput(B1, `,n,`)`]}),(0,M.jsx)(`button`,{type:`button`,disabled:!t.canUndo,className:`h-7 rounded-md border px-2 hover:bg-muted disabled:opacity-40`,onClick:()=>e.undo(),children:`store.undo()`}),(0,M.jsxs)(`span`,{className:`ml-auto text-muted-foreground tabular-nums`,children:[`B2 = `,(0,M.jsx)(`b`,{className:`text-foreground`,children:C(i)}),` · active `,y(t.selection.active)]})]}),(0,M.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,M.jsx)(f,{store:e,toolbar:!1,statusBar:!1})})]})}var Q=`import { useState } from "react"
import { Spreadsheet, addrName, formatValue, useSheetState, useSpreadsheet } from "@kitora/spreadsheet"

/** The store is plain TypeScript: write cells, undo, and read computed values from your own controls. */
export function BasicStoreApi() {
  const store = useSpreadsheet({ rows: 20, cols: 5, cells: { A1: "Input", B1: "3", A2: "Squared", B2: "=B1*B1" } })
  const state = useSheetState(store)
  const [n, setN] = useState(4)
  const value = store.engine.value(1, 1)
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-9 shrink-0 items-center gap-2 border-b px-2 text-[13px]">
        <button
          type="button"
          className="h-7 rounded-md border px-2 hover:bg-muted"
          onClick={() => {
            store.setInput(0, 1, String(n))
            setN(n + 1)
          }}
        >
          store.setInput(B1, {n})
        </button>
        <button type="button" disabled={!state.canUndo} className="h-7 rounded-md border px-2 hover:bg-muted disabled:opacity-40" onClick={() => store.undo()}>
          store.undo()
        </button>
        <span className="ml-auto text-muted-foreground tabular-nums">
          B2 = <b className="text-foreground">{formatValue(value)}</b> · active {addrName(state.selection.active)}
        </span>
      </div>
      <div className="min-h-0 flex-1">
        <Spreadsheet store={store} toolbar={false} statusBar={false} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>g(()=>import(`./store-api-B_Pt1Yb3.js`),[]));function $(){return(0,M.jsxs)(`div`,{children:[(0,M.jsx)(h,{title:`Basics: the grid`,children:"A store holds the sheet; `Spreadsheet` draws it with a toolbar, formula bar and status bar. Each part also works on its own."}),(0,M.jsx)(j,{n:1,title:`The whole spreadsheet`,blurb:"`useSpreadsheet` with a few cells by address, and `<Spreadsheet>`. Type in a cell, or edit D2's formula in the formula bar.",code:H,children:(0,M.jsx)(k,{testId:`basic-minimal`,height:300,children:(0,M.jsx)(V,{})})}),(0,M.jsx)(j,{n:2,title:`Just the grid`,blurb:"`SpreadsheetProvider` + `SpreadsheetGrid`, no chrome. Keys, mouse, clipboard and undo all live in the grid.",code:B,children:(0,M.jsx)(k,{testId:`basic-grid-only`,height:240,children:(0,M.jsx)(z,{})})}),(0,M.jsx)(j,{n:3,title:`The store from your own controls`,blurb:"The store is plain TypeScript: `setInput`, `undo`, and `engine.value` for computed results.",code:Q,children:(0,M.jsx)(k,{testId:`basic-store-api`,height:260,children:(0,M.jsx)(Z,{})})}),(0,M.jsx)(j,{n:4,title:`Compose your own`,blurb:"The preset rebuilt from `Spreadsheet.Root`, `.FormulaBar.*`, `.Toolbar.*`, `.Grid` and `.StatusBar`: formula bar on top, a trimmed toolbar with a button of our own.",code:P,children:(0,M.jsx)(k,{testId:`basic-compose`,height:280,children:(0,M.jsx)(N,{})})}),(0,M.jsx)(j,{n:5,title:`Every part by its own name`,blurb:"The same parts imported by name: `SpreadsheetRoot`, `SpreadsheetToolbarRoot` with `SpreadsheetHistoryButtons`, `SpreadsheetStyleButtons`, `SpreadsheetAlignButtons`, `SpreadsheetNumberFormatButtons`, `SpreadsheetSortButtons`, `SpreadsheetFreezeMenu`, `SpreadsheetToolbarSeparator` and a `SpreadsheetToolButton` of our own, then `SpreadsheetFormulaBarRoot` with `SpreadsheetNameBox`, `SpreadsheetFormulaIcon` and `SpreadsheetFormulaInput`.",code:W,children:(0,M.jsx)(k,{testId:`basic-named-parts`,height:300,children:(0,M.jsx)(U,{})})}),(0,M.jsx)(j,{n:6,title:`The parts object and the preset toolbar`,blurb:"`SpreadsheetParts` holds every part without the preset; `SpreadsheetToolbar` is the full toolbar, and its children land after the last group.",code:X,children:(0,M.jsx)(k,{testId:`basic-parts-object`,height:280,children:(0,M.jsx)(Y,{})})}),(0,M.jsx)(j,{n:7,title:`Controlled cells`,blurb:"Pass `cells` and `onCellsChange` to `useSpreadsheet` and the host owns the data: edits come back as a cell record, and new `cells` replace the sheet.",code:R,children:(0,M.jsx)(k,{testId:`basic-controlled`,height:260,children:(0,M.jsx)(L,{})})})]})}export{$ as component};