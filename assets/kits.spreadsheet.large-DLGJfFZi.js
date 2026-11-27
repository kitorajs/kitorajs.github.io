import{t as e}from"./spreadsheet-L2Rdnqjx.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,zc as r}from"./index-BZuUy872.js";import{d as i,t as a}from"./-kits.spreadsheet.shared-CQUtmuET.js";import"./kit-gallery-BBavj2rC.js";import{t as o}from"./example-B67lLz1F.js";var s=r(),c=1e4,l=50,u=[`North`,`South`,`East`,`West`,`Central`],d=[`Ava`,`Ben`,`Chloe`,`Dev`,`Elif`,`Farah`,`Gus`,`Hana`],f=[`Starter`,`Team`,`Business`,`Enterprise`,`Add-on`];function p(e){let t=e;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)}function m(e,t){let n=e[Math.floor(t*e.length)];if(n===void 0)throw Error(`empty list`);return n}function h(){let e=p(42),t=[`Order`,`Date`,`Region`,`Rep`,`Product`,`Units`,`Price`,`Revenue`,`Cost`,`Margin`,`Margin %`],n=t.length;for(let e=n;e<l;e++)t.push(`Metric ${e-n+1}`);let r=3+c-1,i=[t,Array.from({length:l},()=>null)];for(let t=0;t<c;t++){let n=3+t,r=1+Math.floor(e()*40),a=20+Math.floor(e()*480),o=[`SO-${String(1e5+t)}`,String(45658+Math.floor(t/28)),m(u,e()),m(d,e()),m(f,e()),String(r),String(a),`=F${n}*G${n}`,String(Math.round(r*a*(.35+e()*.4))),`=H${n}-I${n}`,`=J${n}/H${n}`];for(let t=o.length;t<l;t++)o.push(String(Math.round(e()*1e4)/100));i.push(o)}let a={num:`currency`,decimals:0};return{rows:c+2,cols:l,freeze:{rows:2,cols:1},defaultColWidth:92,colWidths:{0:96,1:96},grid:i,columnFormats:{1:{num:`date`},6:a,7:a,8:a,9:a,10:{num:`percent`,decimals:1}},cells:{A1:{input:`Order`,format:{bold:!0}},A2:{input:`Totals`,format:{bold:!0}},F2:{input:`=SUM(F3:F${r})`,format:{bold:!0,num:`number`,decimals:0}},G2:{input:`=AVG(G3:G${r})`,format:{...a,bold:!0}},H2:{input:`=SUM(H3:H${r})`,format:{...a,bold:!0}},I2:{input:`=SUM(I3:I${r})`,format:{...a,bold:!0}},J2:{input:`=SUM(J3:J${r})`,format:{...a,bold:!0}},K2:{input:`=J2/H2`,format:{num:`percent`,decimals:1,bold:!0}}}}}function g(){return(0,s.jsx)(e,{store:i(h),label:`Sales ledger`})}var _=`import { Spreadsheet, useSpreadsheet, type CellFormat, type SpreadsheetInit } from "@kitora/spreadsheet"

/** Rows of data under the two frozen header rows. */
const DATA_ROWS = 10_000
const COLS = 50
const REGIONS = ["North", "South", "East", "West", "Central"] as const
const REPS = ["Ava", "Ben", "Chloe", "Dev", "Elif", "Farah", "Gus", "Hana"] as const
const PRODUCTS = ["Starter", "Team", "Business", "Enterprise", "Add-on"] as const

/** A small seeded generator, so every load shows the same data. */
function random(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

function pick<T>(list: readonly T[], r: number): T {
  const v = list[Math.floor(r * list.length)]
  if (v === undefined) throw new Error("empty list")
  return v
}

/** 10,000 sales rows × 50 columns: data, per-row formulas, and live totals in a frozen row. */
function ledger(): SpreadsheetInit {
  const rnd = random(42)
  const header = ["Order", "Date", "Region", "Rep", "Product", "Units", "Price", "Revenue", "Cost", "Margin", "Margin %"]
  const named = header.length
  for (let c = named; c < COLS; c++) header.push(\`Metric \${c - named + 1}\`)
  const first = 3
  const last = first + DATA_ROWS - 1
  // Row 2 holds the live totals; its formulas and formats come from \`cells\` below.
  const totals: (string | null)[] = Array.from({ length: COLS }, () => null)
  const grid: (string | null)[][] = [header, totals]
  for (let i = 0; i < DATA_ROWS; i++) {
    const r = first + i
    const units = 1 + Math.floor(rnd() * 40)
    const price = 20 + Math.floor(rnd() * 480)
    const row: (string | null)[] = [
      \`SO-\${String(100000 + i)}\`,
      String(45658 + Math.floor(i / 28)),
      pick(REGIONS, rnd()),
      pick(REPS, rnd()),
      pick(PRODUCTS, rnd()),
      String(units),
      String(price),
      \`=F\${r}*G\${r}\`,
      String(Math.round(units * price * (0.35 + rnd() * 0.4))),
      \`=H\${r}-I\${r}\`,
      \`=J\${r}/H\${r}\`,
    ]
    for (let c = row.length; c < COLS; c++) row.push(String(Math.round(rnd() * 10000) / 100))
    grid.push(row)
  }
  const money: CellFormat = { num: "currency", decimals: 0 }
  return {
    rows: DATA_ROWS + 2,
    cols: COLS,
    freeze: { rows: 2, cols: 1 },
    defaultColWidth: 92,
    colWidths: { 0: 96, 1: 96 },
    grid,
    columnFormats: { 1: { num: "date" }, 6: money, 7: money, 8: money, 9: money, 10: { num: "percent", decimals: 1 } },
    cells: {
      A1: { input: "Order", format: { bold: true } },
      A2: { input: "Totals", format: { bold: true } },
      F2: { input: \`=SUM(F\${first}:F\${last})\`, format: { bold: true, num: "number", decimals: 0 } },
      G2: { input: \`=AVG(G\${first}:G\${last})\`, format: { ...money, bold: true } },
      H2: { input: \`=SUM(H\${first}:H\${last})\`, format: { ...money, bold: true } },
      I2: { input: \`=SUM(I\${first}:I\${last})\`, format: { ...money, bold: true } },
      J2: { input: \`=SUM(J\${first}:J\${last})\`, format: { ...money, bold: true } },
      K2: { input: "=J2/H2", format: { num: "percent", decimals: 1, bold: true } },
    },
  }
}

/** 500,000 cells, virtualised: only what is on screen is rendered. Edit any Units or Price cell and the totals update. */
export function LargeSheet() {
  const store = useSpreadsheet(ledger)
  return <Spreadsheet store={store} label="Sales ledger" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>n(()=>import(`./large-BVxAJGDn.js`),[]));function v(){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(t,{title:`10,000 × 50`,children:`Half a million cells with 30,000 formulas. Only the cells on screen are in the DOM, so scrolling, selecting and editing stay instant; a change recomputes only what depends on it.`}),(0,s.jsx)(o,{n:1,title:`A sales ledger`,blurb:`Rows 1 and 2 (header and live totals) and the Order column are frozen. Ctrl+↓ jumps to the last row, Ctrl+→ to the last column. Edit a Units cell and watch Revenue, Margin and the totals update.`,code:_,children:(0,s.jsx)(a,{testId:`large`,height:600,children:(0,s.jsx)(g,{})})})]})}export{v as component};