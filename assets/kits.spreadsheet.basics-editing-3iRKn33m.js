import{t as e}from"./spreadsheet-L2Rdnqjx.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,zc as r}from"./index-BZuUy872.js";import{d as i,t as a}from"./-kits.spreadsheet.shared-CQUtmuET.js";import"./kit-gallery-BBavj2rC.js";import{t as o}from"./example-B67lLz1F.js";var s=r();function c(){return(0,s.jsx)(e,{store:i({rows:40,cols:8,cells:{A1:{input:`Step 1`,format:{bold:!0}},B1:{input:`Step 5`,format:{bold:!0}},C1:{input:`Quarter`,format:{bold:!0}},D1:{input:`Day`,format:{bold:!0}},E1:{input:`×2`,format:{bold:!0}},A2:`1`,A3:`2`,B2:`5`,B3:`10`,C2:`Q1`,D2:`2026-01-01`,D3:`2026-01-02`,E2:`=A2*2`}}),statusBar:!1})}var l=`import { Spreadsheet, useSpreadsheet } from "@kitora/spreadsheet"

/**
 * Select a block and drag the small square at its corner: numbers continue their step,
 * "Q1" counts on, dates add days, formulas shift their references. Ctrl+C / Ctrl+V
 * copy as tab-separated text, so pasting to and from Excel or Sheets works.
 */
export function BasicFillCopy() {
  const store = useSpreadsheet({
    rows: 40,
    cols: 8,
    cells: {
      A1: { input: "Step 1", format: { bold: true } },
      B1: { input: "Step 5", format: { bold: true } },
      C1: { input: "Quarter", format: { bold: true } },
      D1: { input: "Day", format: { bold: true } },
      E1: { input: "×2", format: { bold: true } },
      A2: "1",
      A3: "2",
      B2: "5",
      B3: "10",
      C2: "Q1",
      D2: "2026-01-01",
      D3: "2026-01-02",
      E2: "=A2*2",
    },
  })
  return <Spreadsheet store={store} statusBar={false} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(l,()=>n(()=>import(`./fill-copy-Df_mfgxf.js`),[]));function u(){return(0,s.jsx)(e,{store:i({rows:20,cols:5,colWidths:{0:130,1:140},cells:{A1:{input:`Format`,format:{bold:!0}},B1:{input:`Shows`,format:{bold:!0}},A2:`General`,B2:`1234.5678`,A3:`Number`,B3:{input:`1234.5678`,format:{num:`number`}},A4:`Currency`,B4:{input:`1234.5678`,format:{num:`currency`}},A5:`Percent`,B5:{input:`0.1234`,format:{num:`percent`,decimals:1}},A6:`Date`,B6:{input:`46000`,format:{num:`date`}},A7:`Typed 12%`,B7:`12%`,A8:`Typed $1,200`,B8:`$1,200`,A9:`Typed 2026-10-15`,B9:`2026-10-15`,A10:`Bold, centred`,B10:{input:`Heads up`,format:{bold:!0,align:`center`}},A11:`Italic, right`,B11:{input:`Footnote`,format:{italic:!0,align:`right`}}}}),statusBar:!1})}var d=`import { Spreadsheet, useSpreadsheet } from "@kitora/spreadsheet"

/** The same number in every format, plus bold, italic and alignment. Select cells and use the toolbar or Ctrl+B / Ctrl+I. */
export function BasicFormats() {
  const store = useSpreadsheet({
    rows: 20,
    cols: 5,
    colWidths: { 0: 130, 1: 140 },
    cells: {
      A1: { input: "Format", format: { bold: true } },
      B1: { input: "Shows", format: { bold: true } },
      A2: "General",
      B2: "1234.5678",
      A3: "Number",
      B3: { input: "1234.5678", format: { num: "number" } },
      A4: "Currency",
      B4: { input: "1234.5678", format: { num: "currency" } },
      A5: "Percent",
      B5: { input: "0.1234", format: { num: "percent", decimals: 1 } },
      A6: "Date",
      B6: { input: "46000", format: { num: "date" } },
      A7: "Typed 12%",
      B7: "12%",
      A8: "Typed $1,200",
      B8: "$1,200",
      A9: "Typed 2026-10-15",
      B9: "2026-10-15",
      A10: "Bold, centred",
      B10: { input: "Heads up", format: { bold: true, align: "center" } },
      A11: "Italic, right",
      B11: { input: "Footnote", format: { italic: true, align: "right" } },
    },
  })
  return <Spreadsheet store={store} statusBar={false} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>n(()=>import(`./formats-DO21Ym9W.js`),[]));var f=[[`Ada`,`Engineering`,`142000`,`2019-04-01`],[`Grace`,`Research`,`156000`,`2016-09-12`],[`Linus`,`Platform`,`131000`,`2021-01-18`],[`Margaret`,`Engineering`,`168000`,`2014-06-30`],[`Ken`,`Platform`,`125000`,`2022-11-07`],[`Barbara`,`Research`,`149000`,`2018-02-26`],[`Dennis`,`Engineering`,`138000`,`2020-08-03`],[`Radia`,`Network`,`152000`,`2017-05-15`]];function p(){return(0,s.jsx)(e,{store:i({rows:30,cols:12,freeze:{rows:1,cols:1},colWidths:{1:120},columnFormats:{2:{num:`currency`,decimals:0}},grid:[[`Name`,`Team`,`Salary`,`Started`],...f],cells:{A1:{input:`Name`,format:{bold:!0}},B1:{input:`Team`,format:{bold:!0}},C1:{input:`Salary`,format:{bold:!0}},D1:{input:`Started`,format:{bold:!0}}}}),statusBar:!1})}var m=`import { Spreadsheet, useSpreadsheet } from "@kitora/spreadsheet"

const PEOPLE = [
  ["Ada", "Engineering", "142000", "2019-04-01"],
  ["Grace", "Research", "156000", "2016-09-12"],
  ["Linus", "Platform", "131000", "2021-01-18"],
  ["Margaret", "Engineering", "168000", "2014-06-30"],
  ["Ken", "Platform", "125000", "2022-11-07"],
  ["Barbara", "Research", "149000", "2018-02-26"],
  ["Dennis", "Engineering", "138000", "2020-08-03"],
  ["Radia", "Network", "152000", "2017-05-15"],
] as const

/** Row 1 and column A are frozen. Put the cursor in a column and press Sort: the header row stays put. */
export function BasicFreezeSort() {
  const store = useSpreadsheet({
    rows: 30,
    cols: 12,
    freeze: { rows: 1, cols: 1 },
    colWidths: { 1: 120 },
    columnFormats: { 2: { num: "currency", decimals: 0 } },
    grid: [["Name", "Team", "Salary", "Started"], ...PEOPLE],
    cells: {
      A1: { input: "Name", format: { bold: true } },
      B1: { input: "Team", format: { bold: true } },
      C1: { input: "Salary", format: { bold: true } },
      D1: { input: "Started", format: { bold: true } },
    },
  })
  return <Spreadsheet store={store} statusBar={false} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>n(()=>import(`./freeze-sort-BuOCxNDA.js`),[]));function h(){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(t,{title:`Basics: editing`,children:`Formats live on the cell, separate from its value. Fill, paste, sort and every format change are one undo step each.`}),(0,s.jsx)(o,{n:1,title:`Formats`,blurb:`Number, currency, percent and date, set per cell or implied by what you type (12%, $1,200, 2026-10-15); bold, italic and alignment.`,code:d,children:(0,s.jsx)(a,{testId:`basic-formats`,height:360,children:(0,s.jsx)(u,{})})}),(0,s.jsx)(o,{n:2,title:`Fill handle and clipboard`,blurb:`Select A2:A3 and drag the corner square down: 3, 4, 5… Drag C2 for Q2, Q3; E2 copies its formula with the reference shifted. Ctrl+C / Ctrl+V use the system clipboard as tab-separated text.`,code:l,children:(0,s.jsx)(a,{testId:`basic-fill`,height:320,children:(0,s.jsx)(c,{})})}),(0,s.jsx)(o,{n:3,title:`Frozen panes and sort`,blurb:`The header row and the name column stay put while you scroll. Click a Salary cell and Sort A→Z: rows reorder under the frozen header.`,code:m,children:(0,s.jsx)(a,{testId:`basic-freeze`,height:300,children:(0,s.jsx)(p,{})})})]})}export{h as component};