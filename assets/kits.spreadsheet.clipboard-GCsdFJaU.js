import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{n as a}from"./clipboard-Bym_G4Ge.js";import{d as o,i as s,l as c,n as l,r as u,t as d,u as f}from"./-kits.spreadsheet.shared-Bb5eTkOW.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";var m=e(n(),1),h=i(),g=`City	Population	Area km²
Tokyo	13960000	2194
Delhi	16787941	1484
Shanghai	24870895	6341
São Paulo	12325232	1521`;function _(){let e=o({rows:60,cols:8,colWidths:{0:110}}),t=f(e),[n,r]=(0,m.useState)(g),i=e.engine.extent(),d=a(Array.from({length:i.rows},(t,n)=>Array.from({length:i.cols},(t,r)=>e.engine.input(n,r))));return(0,h.jsx)(c,{store:e,children:(0,h.jsxs)(`div`,{className:`grid h-full grid-cols-[1fr_260px] max-md:grid-cols-1 max-md:grid-rows-[1fr_200px]`,children:[(0,h.jsxs)(`div`,{className:`flex min-h-0 min-w-0 flex-col`,children:[(0,h.jsx)(s,{}),(0,h.jsx)(u,{className:`min-h-0 flex-1`,label:`Clipboard sheet`}),(0,h.jsx)(l,{})]}),(0,h.jsxs)(`div`,{className:`flex min-h-0 flex-col gap-1.5 border-l p-2 text-[12px] max-md:border-t max-md:border-l-0`,children:[(0,h.jsx)(`label`,{htmlFor:`tsv-box`,className:`font-medium`,children:`Text to paste`}),(0,h.jsx)(`textarea`,{id:`tsv-box`,"data-testid":`tsv-box`,value:n,onChange:e=>r(e.target.value),spellCheck:!1,className:`min-h-0 flex-1 resize-none rounded-md border bg-muted/30 p-1.5 font-mono text-[11px] outline-none focus:ring-2 focus:ring-ring/50`}),(0,h.jsx)(`button`,{type:`button`,"data-testid":`paste-tsv`,onClick:()=>e.paste(n),className:`h-7 rounded-md bg-primary px-2 font-medium text-primary-foreground hover:bg-primary/90`,children:`Paste at the selected cell`}),(0,h.jsxs)(`div`,{className:`text-muted-foreground tabular-nums`,children:[`Sheet as TSV · v`,t.version]}),(0,h.jsx)(`pre`,{"data-testid":`tsv-out`,className:`max-h-28 min-h-10 overflow-auto rounded-md border bg-muted/30 p-1.5 font-mono text-[11px] whitespace-pre`,children:d||`(empty)`})]})]})})}var v=`import { useState } from "react"
import { FormulaBar, SpreadsheetGrid, SpreadsheetProvider, SpreadsheetStatusBar, toTsv, useSheetState, useSpreadsheet } from "@kitora/spreadsheet"

const SAMPLE = "City\\tPopulation\\tArea km²\\nTokyo\\t13960000\\t2194\\nDelhi\\t16787941\\t1484\\nShanghai\\t24870895\\t6341\\nSão Paulo\\t12325232\\t1521"

/**
 * The clipboard speaks tab-separated values. Copy cells here and paste them into Excel or
 * Sheets (or the reverse); the box on the right shows the sheet as TSV, and its button
 * pastes the box's text at the selected cell the same way Ctrl+V does.
 */
export function ClipboardSheet() {
  const store = useSpreadsheet({ rows: 60, cols: 8, colWidths: { 0: 110 } })
  const state = useSheetState(store)
  const [text, setText] = useState(SAMPLE)
  const extent = store.engine.extent()
  const asTsv = toTsv(Array.from({ length: extent.rows }, (_, r) => Array.from({ length: extent.cols }, (_, c) => store.engine.input(r, c))))
  return (
    <SpreadsheetProvider store={store}>
      <div className="grid h-full grid-cols-[1fr_260px] max-md:grid-cols-1 max-md:grid-rows-[1fr_200px]">
        <div className="flex min-h-0 min-w-0 flex-col">
          <FormulaBar />
          <SpreadsheetGrid className="min-h-0 flex-1" label="Clipboard sheet" />
          <SpreadsheetStatusBar />
        </div>
        <div className="flex min-h-0 flex-col gap-1.5 border-l p-2 text-[12px] max-md:border-t max-md:border-l-0">
          <label htmlFor="tsv-box" className="font-medium">
            Text to paste
          </label>
          <textarea id="tsv-box" data-testid="tsv-box" value={text} onChange={(e) => setText(e.target.value)} spellCheck={false} className="min-h-0 flex-1 resize-none rounded-md border bg-muted/30 p-1.5 font-mono text-[11px] outline-none focus:ring-2 focus:ring-ring/50" />
          <button type="button" data-testid="paste-tsv" onClick={() => store.paste(text)} className="h-7 rounded-md bg-primary px-2 font-medium text-primary-foreground hover:bg-primary/90">
            Paste at the selected cell
          </button>
          <div className="text-muted-foreground tabular-nums">Sheet as TSV · v{state.version}</div>
          <pre data-testid="tsv-out" className="max-h-28 min-h-10 overflow-auto rounded-md border bg-muted/30 p-1.5 font-mono text-[11px] whitespace-pre">
            {asTsv || "(empty)"}
          </pre>
        </div>
      </div>
    </SpreadsheetProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>r(()=>import(`./clipboard-C4TEG2PJ.js`),[]));function y(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`Clipboard`,children:`Copy writes the selection's displayed text as tab-separated values; paste reads them back. Text the sheet copied itself pastes its formulas (shifted) and formats, and a selection that is a multiple of the copied block is tiled.`}),(0,h.jsx)(p,{n:1,title:`Paste TSV, read TSV`,blurb:`Select a cell, then paste the box's text (or copy rows from any spreadsheet app and press Ctrl+V). The panel shows the sheet's inputs as TSV after every change.`,code:v,children:(0,h.jsx)(d,{testId:`clipboard`,height:420,children:(0,h.jsx)(_,{})})})]})}export{y as component};