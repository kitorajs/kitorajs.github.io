import{t as e}from"./spreadsheet-xYlzSlhl.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Cc as n,Ic as r}from"./index-9y5uwRd3.js";import{_ as i,d as a,h as o,m as s,p as c,t as l}from"./-kits.spreadsheet.shared-Bb5eTkOW.js";import"./kit-gallery-B-Yr9fP4.js";import{t as u}from"./example-CZLJLtIC.js";var d=r(),f=e=>{let t=s(c(e[0])),n=e.length>1?s(c(e[1])):.19;return typeof t==`number`?typeof n==`number`?Math.round(t*n*100)/100:n:t},p=e=>new Date(Date.UTC(1899,11,30)+e*864e5).toLocaleDateString(`de-DE`,{timeZone:`UTC`});function m(){return(0,d.jsx)(e,{store:a({rows:30,cols:6,colWidths:{0:140,1:120},functions:{VAT:f},formatter:o({locale:`de-DE`,currency:`EUR`,date:p}),parseLiteral:e=>{if(/^-?\d{1,3}(\.\d{3})*(,\d+)?$|^-?\d+(,\d+)?$/.test(e.trim()))return{value:Number(e.trim().replaceAll(`.`,``).replace(`,`,`.`))};let t=/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(e.trim());return t?{value:(Date.UTC(Number(t[3]),Number(t[2])-1,Number(t[1]))-Date.UTC(1899,11,30))/864e5,inferred:`date`}:i(e)},cells:{A1:{input:`Rechnung`,format:{bold:!0}},A2:`Datum`,B2:`16.10.2026`,A3:`Netto`,B3:{input:`1.234,50`,format:{num:`currency`}},A4:`MwSt. (VAT)`,B4:{input:`=VAT(B3)`,format:{num:`currency`}},A5:{input:`Brutto`,format:{bold:!0}},B5:{input:`=B3+B4`,format:{num:`currency`,bold:!0}},A6:`Ermäßigt 7 %`,B6:{input:`=VAT(B3, 7%)`,format:{num:`currency`}}}}),toolbar:!1,label:`German invoice`})}var h=`import { Spreadsheet, createValueFormatter, parseLiteral, scalar, toNumber, useSpreadsheet, type SheetFunction } from "@kitora/spreadsheet"

/** VAT at a rate (default 19 %): \`=VAT(B2)\` or \`=VAT(B2, 7%)\`. A function is evaluated arguments in, a value out. */
const VAT: SheetFunction = (args) => {
  const amount = toNumber(scalar(args[0]))
  const rate = args.length > 1 ? toNumber(scalar(args[1])) : 0.19
  if (typeof amount !== "number") return amount
  if (typeof rate !== "number") return rate
  return Math.round(amount * rate * 100) / 100
}

/** Days as text, the way a German invoice prints them. */
const germanDate = (serial: number) => new Date(Date.UTC(1899, 11, 30) + serial * 86_400_000).toLocaleDateString("de-DE", { timeZone: "UTC" })

/**
 * Three seams swapped: a custom function (\`VAT\`), a formatter for German numbers, euros and
 * dates, and a literal parser that reads \`1.234,50\` and \`16.10.2026\` (falling back to the default
 * \`parseLiteral\` for everything else). Formulas still use \`,\` between arguments.
 */
export function BasicAdapters() {
  const store = useSpreadsheet({
    rows: 30,
    cols: 6,
    colWidths: { 0: 140, 1: 120 },
    functions: { VAT },
    formatter: createValueFormatter({ locale: "de-DE", currency: "EUR", date: germanDate }),
    parseLiteral: (input) => {
      const german = /^-?\\d{1,3}(\\.\\d{3})*(,\\d+)?$|^-?\\d+(,\\d+)?$/
      if (german.test(input.trim())) return { value: Number(input.trim().replaceAll(".", "").replace(",", ".")) }
      const date = /^(\\d{1,2})\\.(\\d{1,2})\\.(\\d{4})$/.exec(input.trim())
      if (date) return { value: (Date.UTC(Number(date[3]), Number(date[2]) - 1, Number(date[1])) - Date.UTC(1899, 11, 30)) / 86_400_000, inferred: "date" }
      return parseLiteral(input)
    },
    cells: {
      A1: { input: "Rechnung", format: { bold: true } },
      A2: "Datum",
      B2: "16.10.2026",
      A3: "Netto",
      B3: { input: "1.234,50", format: { num: "currency" } },
      A4: "MwSt. (VAT)",
      B4: { input: "=VAT(B3)", format: { num: "currency" } },
      A5: { input: "Brutto", format: { bold: true } },
      B5: { input: "=B3+B4", format: { num: "currency", bold: true } },
      A6: "Ermäßigt 7 %",
      B6: { input: "=VAT(B3, 7%)", format: { num: "currency" } },
    },
  })
  return <Spreadsheet store={store} toolbar={false} label="German invoice" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>n(()=>import(`./adapters-Cu76z9rP.js`),[]));function g(){return(0,d.jsx)(e,{store:a({rows:30,cols:6,colWidths:{0:190,1:110,2:170},cells:{A1:{input:`Formula`,format:{bold:!0}},B1:{input:`Result`,format:{bold:!0}},C1:{input:`What`,format:{bold:!0}},D1:{input:`Data`,format:{bold:!0}},D2:`12`,D3:`4`,D4:`7.5`,D5:`20`,D6:`1`,...Object.fromEntries([[`=1+2*3`,`Precedence`],[`=(1+2)*3`,`Parentheses`],[`=2^10`,`Power`],[`=D2/D3`,`Cell references`],[`=SUM(D2:D6)`,`SUM over a range`],[`=AVG(D2:D6)`,`AVG (also AVERAGE)`],[`=MIN(D2:D6)`,`MIN`],[`=MAX(D2:D6)`,`MAX`],[`=IF(D2>10,"big","small")`,`IF`],[`=ROUND(D2/D3,2)`,`ROUND`],[`="Total: "&SUM(D2:D6)`,`Join text with &`],[`=D2/0`,`Errors show as values`],[`=NOPE(1)`,`Unknown function`]].flatMap(([e=``,t=``],n)=>[[`A${n+2}`,`'${e}`],[`B${n+2}`,e],[`C${n+2}`,t]]))}}),statusBar:!1})}var _=`import { Spreadsheet, useSpreadsheet } from "@kitora/spreadsheet"

/** Every function the engine ships, each next to its formula (column B shows column A's text as a formula). */
export function BasicFormulas() {
  const examples = [
    ["=1+2*3", "Precedence"],
    ["=(1+2)*3", "Parentheses"],
    ["=2^10", "Power"],
    ["=D2/D3", "Cell references"],
    ["=SUM(D2:D6)", "SUM over a range"],
    ["=AVG(D2:D6)", "AVG (also AVERAGE)"],
    ["=MIN(D2:D6)", "MIN"],
    ["=MAX(D2:D6)", "MAX"],
    ['=IF(D2>10,"big","small")', "IF"],
    ["=ROUND(D2/D3,2)", "ROUND"],
    ['="Total: "&SUM(D2:D6)', "Join text with &"],
    ["=D2/0", "Errors show as values"],
    ["=NOPE(1)", "Unknown function"],
  ]
  const store = useSpreadsheet({
    rows: 30,
    cols: 6,
    colWidths: { 0: 190, 1: 110, 2: 170 },
    cells: {
      A1: { input: "Formula", format: { bold: true } },
      B1: { input: "Result", format: { bold: true } },
      C1: { input: "What", format: { bold: true } },
      D1: { input: "Data", format: { bold: true } },
      D2: "12",
      D3: "4",
      D4: "7.5",
      D5: "20",
      D6: "1",
      ...Object.fromEntries(examples.flatMap(([formula = "", what = ""], i) => [[\`A\${i + 2}\`, \`'\${formula}\`], [\`B\${i + 2}\`, formula], [\`C\${i + 2}\`, what]])),
    },
  })
  return <Spreadsheet store={store} statusBar={false} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>n(()=>import(`./formulas-B2mXt0SE.js`),[]));function v(){return(0,d.jsx)(e,{store:a({rows:20,cols:6,colWidths:{0:150,2:150},cells:{A1:{input:`Step`,format:{bold:!0}},B1:{input:`Value`,format:{bold:!0}},A2:`Start (edit me)`,B2:`10`,A3:`Double it`,B3:`=B2*2`,A4:`Add 5`,B4:`=B3+5`,A5:`Square`,B5:`=B4^2`,A6:`Percent of 1,000`,B6:{input:`=B5/1000`,format:{num:`percent`,decimals:1}},A7:{input:`Sum of the chain`,format:{bold:!0}},B7:{input:`=SUM(B2:B5)`,format:{bold:!0,num:`number`,decimals:0}},C2:`A cycle:`,D2:`=D3+1`,D3:`=D2+1`,C3:`Type 1 in D3 to break it`}}),statusBar:!1})}var y=`import { Spreadsheet, useSpreadsheet } from "@kitora/spreadsheet"

/**
 * Change B2 and everything downstream updates in dependency order: the chain B3 → B6,
 * the range total, and the cycle in D2/D3, which shows #CIRC! until you break it.
 */
export function BasicRecalc() {
  const store = useSpreadsheet({
    rows: 20,
    cols: 6,
    colWidths: { 0: 150, 2: 150 },
    cells: {
      A1: { input: "Step", format: { bold: true } },
      B1: { input: "Value", format: { bold: true } },
      A2: "Start (edit me)",
      B2: "10",
      A3: "Double it",
      B3: "=B2*2",
      A4: "Add 5",
      B4: "=B3+5",
      A5: "Square",
      B5: "=B4^2",
      A6: "Percent of 1,000",
      B6: { input: "=B5/1000", format: { num: "percent", decimals: 1 } },
      A7: { input: "Sum of the chain", format: { bold: true } },
      B7: { input: "=SUM(B2:B5)", format: { bold: true, num: "number", decimals: 0 } },
      C2: "A cycle:",
      D2: "=D3+1",
      D3: "=D2+1",
      C3: "Type 1 in D3 to break it",
    },
  })
  return <Spreadsheet store={store} statusBar={false} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>n(()=>import(`./recalc-Cr65fN80.js`),[]));function b(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(t,{title:`Basics: formulas`,children:"A cell starting with `=` is a formula: + - * / ^, & for text, comparisons, cell references (`$` pins a row or column) and ranges, and SUM, AVG, MIN, MAX, COUNT, IF, ROUND, ABS, AND, OR, NOT, CONCAT. While you type one, click a cell to insert its reference."}),(0,d.jsx)(u,{n:1,title:`Operators and functions`,blurb:`Column A is the formula as text, column B the same formula evaluated. Errors are values: #DIV/0!, #NAME?, #VALUE!, #REF!, #CIRC!.`,code:_,children:(0,d.jsx)(l,{testId:`basic-formulas`,height:420,children:(0,d.jsx)(g,{})})}),(0,d.jsx)(u,{n:2,title:`Recalculation order`,blurb:`Edit B2: only its dependents recompute, each after the cells it reads. D2 and D3 read each other and show #CIRC! until one becomes a number.`,code:y,children:(0,d.jsx)(l,{testId:`basic-recalc`,height:300,children:(0,d.jsx)(v,{})})}),(0,d.jsx)(u,{n:3,title:`Custom adapters`,blurb:"Your own function (`functions: { VAT }`), a German number, currency and date formatter (`createValueFormatter`), and a literal parser for `1.234,50`. Type `=VAT(B3, 16%)` anywhere.",code:h,children:(0,d.jsx)(l,{testId:`basic-adapters`,height:260,children:(0,d.jsx)(m,{})})})]})}export{b as component};