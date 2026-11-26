import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{p as n,s as r}from"./provider-CJrNxsO0.js";import{p as i,u as a}from"./stroke-FK0Ft7zS.js";import{a as o,i as s,n as c,r as l,t as u}from"./focus-BaqxxK9o.js";import{n as d,r as ee,t as te}from"./regions-DCg8W9dJ.js";import{Bc as f,Cc as p,Ic as m}from"./index-B9ukmIN1.js";import{c as ne,i as h,l as re,u as ie}from"./dom-cbm3J_z6.js";import{t as ae}from"./react-Ckck-cMk.js";import"./kit-gallery-Bph7isB2.js";import{t as g}from"./example-BGnSQG2Y.js";function _(e){if(o(e))return!1;if(s(e)&&e.matches(u))return e.focus(),e.ownerDocument.activeElement===e;let t=c(e);return t?(t.focus(),e.ownerDocument.activeElement===t):!1}function oe(e){let t=[...e.ancestor.children],n=Math.min(e.index,t.length-1);for(let r=n;r<t.length;r++){let n=t[r];if(n&&_(n))return e.ancestor.ownerDocument.activeElement}for(let r=n-1;r>=0;r--){let n=t[r];if(n&&_(n))return e.ancestor.ownerDocument.activeElement}return null}function se(e={}){let t=e.document??document,n=e.root??t.body,r=null,a=[],o=e=>{let t=e.target;if(!(!i(t)||!n.contains(t))){r=t,a=[];for(let e=t,r=t.parentElement;r&&n.contains(r);e=r,r=r.parentElement)a.push({ancestor:r,index:[...r.children].indexOf(e)})}},s=()=>{let e=t.activeElement;return e===null||e===t.body||!e.isConnected},c=new MutationObserver(()=>{if(!r||r.isConnected||!s())return;let n=r;r=null;let i=a.find(e=>e.ancestor.isConnected);if(!i)return;let o=oe(i)??(_(i.ancestor)?t.activeElement:null)??(l(i.ancestor)?i.ancestor:null);o&&e.onRecover?.({removed:n,focused:o})});return c.observe(n,{childList:!0,subtree:!0}),t.addEventListener(`focusin`,o,!0),{detach(){c.disconnect(),t.removeEventListener(`focusin`,o,!0)}}}var v=`data-kb-group`,y=`data-kb-group-tabindex`,b=[`a[href]`,`area[href]`,`button:not([disabled])`,`input:not([disabled]):not([type=hidden])`,`select:not([disabled])`,`textarea:not([disabled])`,`iframe`,`summary`,`[contenteditable]:not([contenteditable=false])`,`[tabindex]`].join(`,`);function x(e){return[...e.querySelectorAll(`${b},[${y}]`)].filter(re)}function ce(e,t={}){let n=!1,r=e.getAttribute(`tabindex`);r===null&&(e.tabIndex=0),e.setAttribute(v,`closed`);let i=()=>{for(let t of x(e)){if(t.hasAttribute(y)){t.tabIndex=-1;continue}t.setAttribute(y,t.getAttribute(`tabindex`)??``),t.tabIndex=-1}},a=()=>{for(let t of x(e)){if(t.parentElement?.closest(`[data-kb-group]`)!==e)continue;let n=t.getAttribute(y);n!==null&&(n===``?t.removeAttribute(`tabindex`):t.setAttribute(`tabindex`,n),t.removeAttribute(y))}},o={isOpen:()=>n,enter(){n||(n=!0,e.setAttribute(v,`open`),a(),x(e).find(t=>t.tabIndex>=0&&t.parentElement?.closest(`[data-kb-group]`)===e)?.focus(),t.onEnter?.())},exit(r={}){n&&(n=!1,e.setAttribute(v,`closed`),i(),r.focus!==!1&&e.focus(),t.onExit?.())},refresh(){n||i()},destroy(){e.removeEventListener(`keydown`,s),e.removeEventListener(`focusout`,c),n=!0;for(let t of x(e)){let e=t.getAttribute(y);e!==null&&(e===``?t.removeAttribute(`tabindex`):t.setAttribute(`tabindex`,e),t.removeAttribute(y))}e.removeAttribute(v),r===null&&e.removeAttribute(`tabindex`)}},s=t=>{!ie(t)||t.defaultPrevented||(t.key===`Enter`&&t.target===e&&!n?(t.preventDefault(),o.enter()):t.key===`Escape`&&n&&t.target!==e&&(t.preventDefault(),o.exit()))},c=t=>{let r=`relatedTarget`in t&&ne(t.relatedTarget)?t.relatedTarget:null;!n||r===null||e.contains(r)||o.exit({focus:!1})};return e.addEventListener(`keydown`,s),e.addEventListener(`focusout`,c),i(),o}var S=e(f(),1),C=m(),w=`flex h-7 items-center rounded px-2 text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring focus:bg-muted data-[active]:bg-muted aria-disabled:text-muted-foreground aria-disabled:line-through`,T=[`Red`,`Orange`,`Yellow`,`Green`,`Blue`,`Indigo`,`Violet`];function E({label:e,testId:t,children:n}){return(0,C.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,C.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function le(){let e=(0,S.useRef)(null),t=(0,S.useRef)(null),[n,r]=(0,S.useState)(``),[i,a]=(0,S.useState)(`none`),o=T.filter(e=>e.toLowerCase().includes(n.toLowerCase())),s=(0,S.useRef)(o);return s.current=o,(0,S.useEffect)(()=>{if(!e.current||!t.current)return;let n=h(t.current,{mode:`activedescendant`,keyTarget:e.current,homeEnd:!1,onActivate:e=>a(s.current[e]??`none`)});return()=>n.destroy()},[]),(0,C.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,C.jsxs)(`div`,{className:`w-48`,children:[(0,C.jsx)(`input`,{ref:e,role:`combobox`,"aria-expanded":`true`,"aria-controls":`kb-nav-colors`,"aria-label":`Colour`,"data-testid":`kb-nav-combo`,value:n,onChange:e=>r(e.target.value),className:`h-7 w-full rounded border bg-background px-2 text-[12px]`}),(0,C.jsx)(`ul`,{ref:t,id:`kb-nav-colors`,role:`listbox`,"aria-label":`Colours`,className:`mt-1 rounded border p-1`,children:o.map(e=>(0,C.jsx)(`li`,{role:`option`,"aria-selected":e===i,"data-roving-item":!0,className:w,children:e},e))})]}),(0,C.jsx)(E,{label:`Enter picked`,testId:`kb-nav-combo-picked`,children:i})]})}var D=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { createRoving } from "@kitora/keyboard/roving"

// A combobox on aria-activedescendant: focus stays in the input (typing keeps
// working) while the arrows move the active option, which is named by
// aria-activedescendant and marked data-active for styling.

const ITEM = "flex h-7 items-center rounded px-2 text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring focus:bg-muted data-[active]:bg-muted aria-disabled:text-muted-foreground aria-disabled:line-through"
const COLORS = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"] as const

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function NavCombobox() {
  const input = useRef<HTMLInputElement>(null)
  const listbox = useRef<HTMLUListElement>(null)
  const [query, setQuery] = useState("")
  const [picked, setPicked] = useState("none")
  const shown = COLORS.filter((color) => color.toLowerCase().includes(query.toLowerCase()))
  // onActivate reads the latest filtered list without re-binding
  const shownRef = useRef(shown)
  shownRef.current = shown
  useEffect(() => {
    if (!input.current || !listbox.current) return
    const roving = createRoving(listbox.current, {
      mode: "activedescendant",
      keyTarget: input.current,
      homeEnd: false, // Home / End move the caret
      onActivate: (index) => setPicked(shownRef.current[index] ?? "none"),
    })
    return () => roving.destroy()
  }, [])
  return (
    <div className="flex flex-wrap items-start gap-4">
      <div className="w-48">
        <input
          ref={input}
          role="combobox"
          aria-expanded="true"
          aria-controls="kb-nav-colors"
          aria-label="Colour"
          data-testid="kb-nav-combo"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-7 w-full rounded border bg-background px-2 text-[12px]"
        />
        <ul ref={listbox} id="kb-nav-colors" role="listbox" aria-label="Colours" className="mt-1 rounded border p-1">
          {shown.map((color) => (
            <li key={color} role="option" aria-selected={color === picked} data-roving-item className={ITEM}>
              {color}
            </li>
          ))}
        </ul>
      </div>
      <Stat label="Enter picked" testId="kb-nav-combo-picked">
        {picked}
      </Stat>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>p(()=>import(`./nav-combobox-BVK8Bdp9.js`),[]));var ue=`flex h-7 items-center rounded px-2 text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring focus:bg-muted data-[active]:bg-muted aria-disabled:text-muted-foreground aria-disabled:line-through`,O=`h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,k=[`Alpha`,`Bravo`,`Charlie`,`Delta`,`Echo`];function de(){let[e,t]=(0,S.useState)(k),[n,r]=(0,S.useState)(k),i=(0,S.useRef)(null);return(0,S.useEffect)(()=>{let e=se(),t=i.current?h(i.current):null;return()=>{t?.destroy(),e.detach()}},[]),(0,C.jsxs)(`div`,{className:`flex flex-wrap items-start gap-6`,children:[(0,C.jsxs)(`div`,{className:`space-y-1`,children:[(0,C.jsx)(`div`,{className:`text-[12px] text-muted-foreground`,children:`Roving list: Delete removes the focused row`}),(0,C.jsx)(`ul`,{ref:i,"aria-label":`Deletable rows`,"data-testid":`kb-nav-delete-list`,className:`w-40 rounded border p-1`,onKeyDown:e=>{let n=e.target instanceof HTMLElement?e.target.dataset.label:void 0;e.key===`Delete`&&n&&t(e=>e.filter(e=>e!==n))},children:e.map(e=>(0,C.jsx)(`li`,{"data-roving-item":!0,"data-label":e,className:ue,children:e},e))})]}),(0,C.jsxs)(`div`,{className:`space-y-1`,children:[(0,C.jsx)(`div`,{className:`text-[12px] text-muted-foreground`,children:`Table: each row's own Delete button`}),(0,C.jsx)(`table`,{"data-testid":`kb-nav-delete-table`,className:`text-[12px]`,children:(0,C.jsx)(`tbody`,{children:n.map(e=>(0,C.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,C.jsx)(`td`,{className:`py-1 pr-3`,children:e}),(0,C.jsx)(`td`,{className:`py-1`,children:(0,C.jsx)(`button`,{type:`button`,"data-testid":`kb-nav-delete-${e}`,className:O,onClick:()=>r(t=>t.filter(t=>t!==e)),children:`Delete`})})]},e))})})]}),(0,C.jsx)(`button`,{type:`button`,className:O,"data-testid":`kb-nav-delete-reset`,onClick:()=>{t(k),r(k)},children:`Reset`})]})}var A=`import { useEffect, useRef, useState } from "react"
import { recoverFocus } from "@kitora/keyboard"
import { createRoving } from "@kitora/keyboard/roving"

// Deleting the focused row: recoverFocus() hands focus from a deleted focused
// element to the element now at its place (the next row), else the one before,
// never <body>. A roving list also recovers by index on its own, and tells a
// virtual row merely scrolled out of view from a deleted one.

const ITEM = "flex h-7 items-center rounded px-2 text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring focus:bg-muted data-[active]:bg-muted aria-disabled:text-muted-foreground aria-disabled:line-through"
const BUTTON = "h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
const INITIAL_ROWS = ["Alpha", "Bravo", "Charlie", "Delta", "Echo"] as const

export function NavDelete() {
  const [rows, setRows] = useState<readonly string[]>(INITIAL_ROWS)
  const [tableRows, setTableRows] = useState<readonly string[]>(INITIAL_ROWS)
  const list = useRef<HTMLUListElement>(null)
  useEffect(() => {
    const recovery = recoverFocus()
    const roving = list.current ? createRoving(list.current) : null
    return () => {
      roving?.destroy()
      recovery.detach()
    }
  }, [])
  return (
    <div className="flex flex-wrap items-start gap-6">
      <div className="space-y-1">
        <div className="text-[12px] text-muted-foreground">Roving list: Delete removes the focused row</div>
        <ul
          ref={list}
          aria-label="Deletable rows"
          data-testid="kb-nav-delete-list"
          className="w-40 rounded border p-1"
          onKeyDown={(event) => {
            const label = event.target instanceof HTMLElement ? event.target.dataset.label : undefined
            if (event.key === "Delete" && label) setRows((all) => all.filter((row) => row !== label))
          }}
        >
          {rows.map((row) => (
            <li key={row} data-roving-item data-label={row} className={ITEM}>
              {row}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-1">
        <div className="text-[12px] text-muted-foreground">Table: each row's own Delete button</div>
        <table data-testid="kb-nav-delete-table" className="text-[12px]">
          <tbody>
            {tableRows.map((row) => (
              <tr key={row} className="border-b last:border-b-0">
                <td className="py-1 pr-3">{row}</td>
                <td className="py-1">
                  <button type="button" data-testid={\`kb-nav-delete-\${row}\`} className={BUTTON} onClick={() => setTableRows((all) => all.filter((r) => r !== row))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className={BUTTON}
        data-testid="kb-nav-delete-reset"
        onClick={() => {
          setRows(INITIAL_ROWS)
          setTableRows(INITIAL_ROWS)
        }}
      >
        Reset
      </button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>p(()=>import(`./nav-delete-Dnt0OAvQ.js`),[]));var j=Array.from({length:22},(e,t)=>`Photo ${t+1}`),fe=5;function pe(e){return getComputedStyle(e).gridTemplateColumns.split(` `).filter(Boolean).length||1}function M({label:e,testId:t,children:n}){return(0,C.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,C.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function N(){let e=(0,S.useRef)(null),[t,n]=(0,S.useState)(!1),[r,i]=(0,S.useState)(0),[a,o]=(0,S.useState)(fe);(0,S.useEffect)(()=>{if(!e.current)return;let t=h(e.current,{layout:`grid`,flow:!0,onActiveChange:i});return()=>t.destroy()},[]),(0,S.useEffect)(()=>{let t=e.current;if(!t)return;let n=()=>o(pe(t));n();let r=new ResizeObserver(n);return r.observe(t),()=>r.disconnect()},[]);let s=Array.from({length:Math.ceil(j.length/a)},(e,t)=>j.slice(t*a,(t+1)*a));return(0,C.jsxs)(`div`,{dir:t?`rtl`:`ltr`,className:`space-y-2`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,C.jsxs)(`label`,{className:`flex items-center gap-1.5 text-[12px]`,children:[(0,C.jsx)(`input`,{type:`checkbox`,"data-testid":`kb-nav-grid-rtl`,checked:t,onChange:e=>n(e.target.checked)}),`Right to left`]}),(0,C.jsx)(M,{label:`active`,testId:`kb-nav-grid-active`,children:r})]}),(0,C.jsx)(`div`,{ref:e,role:`grid`,"aria-label":`Photos`,"data-testid":`kb-nav-grid`,className:`grid max-w-xl gap-1.5`,style:{gridTemplateColumns:`repeat(auto-fill, minmax(88px, 1fr))`},children:s.map(e=>(0,C.jsx)(`div`,{role:`row`,className:`contents`,children:e.map(e=>(0,C.jsx)(`div`,{role:`gridcell`,"data-roving-item":!0,className:`flex h-12 items-center justify-center rounded border text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring`,children:e},e))},e[0]))})]})}var P=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { createRoving } from "@kitora/keyboard/roving"

// A roving grid: the column count is read from the resolved
// grid-template-columns, so resizing just works. Up / Down keep the column;
// Home / End = row; Ctrl+Home / Ctrl+End = corners; PageUp / PageDown = 5 rows.
// flow: Left / Right continue into the next row (a media grid). Under the
// nearest dir="rtl", Left means "next".
// ARIA wants grid > row > gridcell, so the cells are chunked into rows of the
// resolved column count; each row is display: contents, so the CSS grid (and
// the roving's column count) is the same as with bare cells.

const CELLS = Array.from({ length: 22 }, (_, index) => \`Photo \${index + 1}\`)

/** Rows before the grid is measured (and on the server). */
const FALLBACK_COLUMNS = 5

/** Columns of a CSS grid from its resolved \`grid-template-columns\`. */
function columnsOf(el: HTMLElement): number {
  return getComputedStyle(el).gridTemplateColumns.split(" ").filter(Boolean).length || 1
}

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function NavGrid() {
  const grid = useRef<HTMLDivElement>(null)
  const [rtl, setRtl] = useState(false)
  const [active, setActive] = useState(0)
  const [columns, setColumns] = useState(FALLBACK_COLUMNS)
  useEffect(() => {
    if (!grid.current) return
    const roving = createRoving(grid.current, { layout: "grid", flow: true, onActiveChange: setActive })
    return () => roving.destroy()
  }, [])
  useEffect(() => {
    const el = grid.current
    if (!el) return
    const measure = () => setColumns(columnsOf(el))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  const rows = Array.from({ length: Math.ceil(CELLS.length / columns) }, (_, row) => CELLS.slice(row * columns, (row + 1) * columns))
  return (
    <div dir={rtl ? "rtl" : "ltr"} className="space-y-2">
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-1.5 text-[12px]">
          <input type="checkbox" data-testid="kb-nav-grid-rtl" checked={rtl} onChange={(event) => setRtl(event.target.checked)} />
          Right to left
        </label>
        <Stat label="active" testId="kb-nav-grid-active">
          {active}
        </Stat>
      </div>
      <div ref={grid} role="grid" aria-label="Photos" data-testid="kb-nav-grid" className="grid max-w-xl gap-1.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(88px, 1fr))" }}>
        {rows.map((row) => (
          <div key={row[0]} role="row" className="contents">
            {row.map((cell) => (
              <div key={cell} role="gridcell" data-roving-item className="flex h-12 items-center justify-center rounded border text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>p(()=>import(`./nav-grid-B0cVJOcg.js`),[]));var F=`h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,I=[`Invoice 1042`,`Invoice 1043`,`Invoice 1044`];function L({label:e,testId:t,children:n}){return(0,C.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,C.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function R(){let e=(0,S.useRef)(null),[t,n]=(0,S.useState)(`none`);return(0,S.useEffect)(()=>{let t=e.current;if(!t)return;let n=h(t,{orientation:`both`}),r=[...t.querySelectorAll(`[data-roving-item]`)].map(e=>ce(e));return()=>{for(let e of r)e.destroy();n.destroy()}},[]),(0,C.jsxs)(`div`,{className:`space-y-2`,children:[(0,C.jsx)(`div`,{ref:e,"data-testid":`kb-nav-groups`,className:`flex flex-wrap gap-2`,children:I.map(e=>(0,C.jsxs)(`div`,{"data-roving-item":!0,"aria-label":e,role:`group`,className:`w-44 space-y-1.5 rounded border p-2 outline-none focus-visible:outline-2 focus-visible:outline-ring data-[kb-group=open]:border-ring`,children:[(0,C.jsx)(`div`,{className:`text-[12px] font-medium`,children:e}),(0,C.jsxs)(`div`,{className:`flex gap-1`,children:[(0,C.jsx)(`button`,{type:`button`,className:F,onClick:()=>n(`${e}: open`),children:`Open`}),(0,C.jsx)(`button`,{type:`button`,className:F,onClick:()=>n(`${e}: pay`),children:`Pay`})]})]},e))}),(0,C.jsx)(L,{label:`clicked`,testId:`kb-nav-groups-log`,children:t})]})}var z=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { createFocusGroup, createRoving } from "@kitora/keyboard/roving"

// Focus groups: the cards are one roving list and each card is a focus group.
// Tab lands on the list once; arrows walk the cards; Enter goes into a card (its
// buttons join the tab order); Escape comes back out to the card.

const BUTTON = "h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
const CARDS = ["Invoice 1042", "Invoice 1043", "Invoice 1044"] as const

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function NavGroups() {
  const list = useRef<HTMLDivElement>(null)
  const [log, setLog] = useState("none")
  useEffect(() => {
    const el = list.current
    if (!el) return
    const roving = createRoving(el, { orientation: "both" })
    const groups = [...el.querySelectorAll<HTMLElement>("[data-roving-item]")].map((card) => createFocusGroup(card))
    return () => {
      for (const group of groups) group.destroy()
      roving.destroy()
    }
  }, [])
  return (
    <div className="space-y-2">
      <div ref={list} data-testid="kb-nav-groups" className="flex flex-wrap gap-2">
        {CARDS.map((card) => (
          <div key={card} data-roving-item aria-label={card} role="group" className="w-44 space-y-1.5 rounded border p-2 outline-none focus-visible:outline-2 focus-visible:outline-ring data-[kb-group=open]:border-ring">
            <div className="text-[12px] font-medium">{card}</div>
            <div className="flex gap-1">
              <button type="button" className={BUTTON} onClick={() => setLog(\`\${card}: open\`)}>
                Open
              </button>
              <button type="button" className={BUTTON} onClick={() => setLog(\`\${card}: pay\`)}>
                Pay
              </button>
            </div>
          </div>
        ))}
      </div>
      <Stat label="clicked" testId="kb-nav-groups-log">
        {log}
      </Stat>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>p(()=>import(`./nav-groups-DDTbwzFJ.js`),[]));var B=[`Bold`,`Italic`,`Underline`,`Strike`,`Code`,`Link`];function V({label:e,testId:t,children:n}){return(0,C.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,C.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function me(){let[e,t]=(0,S.useState)(``),{ref:n,roving:r}=ae({orientation:`horizontal`,loop:!0,onActivate:e=>t(B[e]??``)});return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsx)(`div`,{ref:n,role:`toolbar`,"aria-label":`Formatting`,"data-testid":`kb-nav-hook`,className:`inline-flex w-fit gap-1 rounded-md border p-1`,children:B.map(e=>(0,C.jsx)(`button`,{type:`button`,"data-roving-item":``,className:`h-7 rounded px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,children:e},e))}),(0,C.jsxs)(`div`,{className:`flex gap-3`,children:[(0,C.jsx)(V,{label:`Bound`,testId:`kb-nav-hook-bound`,children:r?`yes`:`no`}),(0,C.jsx)(V,{label:`Activated`,testId:`kb-nav-hook-last`,children:e||`—`})]})]})}var H=`import { useState, type ReactNode } from "react"
import { useRoving } from "@kitora/keyboard/roving"

// The React hook: useRoving binds the same roving primitive to a ref. One tab
// stop, Left / Right with wrap, Enter calls the latest handler: the handler may
// change every render, it is read through a ref and the binding is kept.

const TOOLS = ["Bold", "Italic", "Underline", "Strike", "Code", "Link"] as const

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function NavHook() {
  const [last, setLast] = useState("")
  const { ref, roving } = useRoving<HTMLDivElement>({ orientation: "horizontal", loop: true, onActivate: (index) => setLast(TOOLS[index] ?? "") })
  return (
    <div className="flex flex-col gap-2">
      <div ref={ref} role="toolbar" aria-label="Formatting" data-testid="kb-nav-hook" className="inline-flex w-fit gap-1 rounded-md border p-1">
        {TOOLS.map((tool) => (
          <button key={tool} type="button" data-roving-item="" className="h-7 rounded px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring">
            {tool}
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <Stat label="Bound" testId="kb-nav-hook-bound">
          {roving ? "yes" : "no"}
        </Stat>
        <Stat label="Activated" testId="kb-nav-hook-last">
          {last || "—"}
        </Stat>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>p(()=>import(`./nav-hook-CyIb_yhN.js`),[]));var he=`flex h-7 items-center rounded px-2 text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring focus:bg-muted data-[active]:bg-muted aria-disabled:text-muted-foreground aria-disabled:line-through`,U=[`Apple`,`Apricot`,`Banana`,`Blueberry`,`Cherry`,`Date`,`Fig`,`Grape`],ge=2;function W({label:e,testId:t,children:n}){return(0,C.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,C.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function _e(){let e=(0,S.useRef)(null),[t,n]=(0,S.useState)(U[0]),[r,i]=(0,S.useState)(`none`);return(0,S.useEffect)(()=>{if(!e.current)return;let t=h(e.current,{loop:!0,onActiveChange:e=>n(U[e]??``),onActivate:e=>i(U[e]??``)});return()=>t.destroy()},[]),(0,C.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,C.jsx)(`ul`,{ref:e,role:`listbox`,"aria-label":`Fruit`,"data-testid":`kb-nav-list`,className:`w-40 rounded border p-1`,children:U.map((e,t)=>(0,C.jsx)(`li`,{role:`option`,"aria-selected":e===r,"aria-disabled":t===ge||void 0,"data-roving-item":!0,className:he,children:e},e))}),(0,C.jsxs)(`div`,{className:`space-y-1`,children:[(0,C.jsx)(W,{label:`active`,testId:`kb-nav-list-active`,children:t}),(0,C.jsx)(W,{label:`Enter chose`,testId:`kb-nav-list-chosen`,children:r}),(0,C.jsx)(`p`,{className:`max-w-xs text-[12px] text-muted-foreground`,children:`Banana is disabled and skipped. Type letters to jump; the same letter again cycles.`})]})]})}var G=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { createRoving } from "@kitora/keyboard/roving"

// A roving list: one tab stop; ArrowUp / ArrowDown with loop (the last wraps to
// the first); Home / End / PageUp / PageDown; aria-disabled items are stepped
// over; type letters to jump (the same letter again cycles); Enter activates.

const ITEM = "flex h-7 items-center rounded px-2 text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring focus:bg-muted data-[active]:bg-muted aria-disabled:text-muted-foreground aria-disabled:line-through"
const FRUITS = ["Apple", "Apricot", "Banana", "Blueberry", "Cherry", "Date", "Fig", "Grape"] as const
const DISABLED_FRUIT = 2

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function NavList() {
  const ul = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState<string>(FRUITS[0])
  const [chosen, setChosen] = useState("none")
  useEffect(() => {
    if (!ul.current) return
    const roving = createRoving(ul.current, {
      loop: true, // ArrowDown on the last wraps to the first
      onActiveChange: (index) => setActive(FRUITS[index] ?? ""),
      onActivate: (index) => setChosen(FRUITS[index] ?? ""), // Enter
    })
    return () => roving.destroy()
  }, [])
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ul ref={ul} role="listbox" aria-label="Fruit" data-testid="kb-nav-list" className="w-40 rounded border p-1">
        {FRUITS.map((fruit, index) => (
          <li key={fruit} role="option" aria-selected={fruit === chosen} aria-disabled={index === DISABLED_FRUIT || undefined} data-roving-item className={ITEM}>
            {fruit}
          </li>
        ))}
      </ul>
      <div className="space-y-1">
        <Stat label="active" testId="kb-nav-list-active">
          {active}
        </Stat>
        <Stat label="Enter chose" testId="kb-nav-list-chosen">
          {chosen}
        </Stat>
        <p className="max-w-xs text-[12px] text-muted-foreground">Banana is disabled and skipped. Type letters to jump; the same letter again cycles.</p>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>p(()=>import(`./nav-list-DtHRQkus.js`),[]));var K=`h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`;function ve({label:e,testId:t,children:n}){return(0,C.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,C.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function ye(){let e=(0,S.useRef)(null),t=(0,S.useRef)(null),[i,o]=(0,S.useState)(`none`);return(0,S.useEffect)(()=>{let i=e.current,s=t.current;if(!i||!s)return;let c=te({root:i}),l=n({platform:a(),report:()=>{}}),u=l.plugin(ee(c)),f=r(l),p=d(c,{parent:s,className:`flex flex-wrap gap-2 text-[12px] [&_a]:underline [&_a]:underline-offset-2`}),m=()=>o(c.current()?.label??`none`);return document.addEventListener(`focusin`,m),()=>{document.removeEventListener(`focusin`,m),p.detach(),f.detach(),u(),c.detach()}},[]),(0,C.jsxs)(`div`,{className:`space-y-2`,children:[(0,C.jsx)(`div`,{ref:t,"data-testid":`kb-nav-skip`}),(0,C.jsxs)(`div`,{ref:e,className:`grid gap-2 sm:grid-cols-3`,children:[(0,C.jsxs)(`aside`,{"data-kb-region":`filters`,"aria-label":`Filters`,"data-testid":`kb-nav-region-filters`,className:`space-y-1 rounded border p-2`,children:[(0,C.jsx)(`div`,{className:`text-[12px] font-medium`,children:`Filters`}),(0,C.jsx)(`button`,{type:`button`,className:K,children:`Status`}),` `,(0,C.jsx)(`button`,{type:`button`,className:K,children:`Owner`})]}),(0,C.jsxs)(`section`,{"data-kb-region":`results`,"aria-label":`Results`,"data-testid":`kb-nav-region-results`,className:`space-y-1 rounded border p-2`,children:[(0,C.jsx)(`div`,{className:`text-[12px] font-medium`,children:`Results`}),(0,C.jsx)(`button`,{type:`button`,className:K,children:`First result`}),` `,(0,C.jsx)(`button`,{type:`button`,className:K,children:`Second result`})]}),(0,C.jsx)(`section`,{"data-kb-region":`details`,"aria-label":`Details`,"data-testid":`kb-nav-region-details`,className:`rounded border p-2 text-[12px] text-muted-foreground`,children:`Details (nothing focusable: the region itself takes focus)`})]}),(0,C.jsx)(ve,{label:`focused region`,testId:`kb-nav-region`,children:i})]})}var q=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { attachKeyboard, createKeyboard, createRegionNavigator, detectPlatform, mountSkipLinks, regionNavigationPlugin } from "@kitora/keyboard"

// Regions and skip links: F6 and Shift+F6 (rebindable, shadowed by dialogs)
// cycle the data-kb-region elements and come back to where you were in each; the
// skip links are generated from the same regions. In an app, leave out \`root\`
// and \`parent\`: the navigator then covers the document and the skip links go
// first in <body>.

const BUTTON = "h-7 rounded border bg-background px-2 text-[12px] hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function NavRegions() {
  const root = useRef<HTMLDivElement>(null)
  const skipHost = useRef<HTMLDivElement>(null)
  const [region, setRegion] = useState("none")
  useEffect(() => {
    const el = root.current
    const host = skipHost.current
    if (!el || !host) return
    const nav = createRegionNavigator({ root: el }) // remembers the last focus per region
    const kb = createKeyboard({ platform: detectPlatform(), report: () => {} })
    const removePlugin = kb.plugin(regionNavigationPlugin(nav))
    const attachment = attachKeyboard(kb)
    const skip = mountSkipLinks(nav, { parent: host, className: "flex flex-wrap gap-2 text-[12px] [&_a]:underline [&_a]:underline-offset-2" })
    const onFocus = () => setRegion(nav.current()?.label ?? "none")
    document.addEventListener("focusin", onFocus)
    return () => {
      document.removeEventListener("focusin", onFocus)
      skip.detach()
      attachment.detach()
      removePlugin()
      nav.detach()
    }
  }, [])
  return (
    <div className="space-y-2">
      <div ref={skipHost} data-testid="kb-nav-skip" />
      <div ref={root} className="grid gap-2 sm:grid-cols-3">
        <aside data-kb-region="filters" aria-label="Filters" data-testid="kb-nav-region-filters" className="space-y-1 rounded border p-2">
          <div className="text-[12px] font-medium">Filters</div>
          <button type="button" className={BUTTON}>
            Status
          </button>{" "}
          <button type="button" className={BUTTON}>
            Owner
          </button>
        </aside>
        <section data-kb-region="results" aria-label="Results" data-testid="kb-nav-region-results" className="space-y-1 rounded border p-2">
          <div className="text-[12px] font-medium">Results</div>
          <button type="button" className={BUTTON}>
            First result
          </button>{" "}
          <button type="button" className={BUTTON}>
            Second result
          </button>
        </section>
        <section data-kb-region="details" aria-label="Details" data-testid="kb-nav-region-details" className="rounded border p-2 text-[12px] text-muted-foreground">
          Details (nothing focusable: the region itself takes focus)
        </section>
      </div>
      <Stat label="focused region" testId="kb-nav-region">
        {region}
      </Stat>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>p(()=>import(`./nav-regions-Bl9HRdSR.js`),[]));var be=`flex h-7 items-center rounded px-2 text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring focus:bg-muted data-[active]:bg-muted aria-disabled:text-muted-foreground aria-disabled:line-through`,J=1e4,Y=28,X=224,Z=4;function Q({label:e,testId:t,children:n}){return(0,C.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,C.jsx)(`span`,{"data-testid":t,className:`font-mono tabular-nums`,children:n})]})}function xe(){let e=(0,S.useRef)(null),t=(0,S.useRef)(null),[n,r]=(0,S.useState)(0),[i,a]=(0,S.useState)(0);(0,S.useEffect)(()=>{let n=e.current,i=t.current;if(!n||!i)return;let o=h(i,{source:{count:()=>J,elementAt:e=>i.querySelector(`[data-index="${e}"]`),mounted:()=>[...i.querySelectorAll(`[data-index]`)].map(e=>[Number(e.getAttribute(`data-index`)),e]),indexOf:e=>Number(e.closest(`[data-index]`)?.getAttribute(`data-index`)??-1),labelAt:e=>`Row ${e+1}`,idAt:e=>`row-${e}`,indexOfId:e=>e.startsWith(`row-`)?Number(e.slice(4)):-1,reveal:e=>{let t=e*Y;t<n.scrollTop?n.scrollTop=t:t+Y>n.scrollTop+X&&(n.scrollTop=t+Y-X),r(n.scrollTop)}},onActiveChange:a});return()=>o.destroy()},[]);let o=Math.max(0,Math.floor(n/Y)-Z),s=Math.min(J,Math.ceil((n+X)/Y)+Z);return(0,C.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,C.jsx)(`div`,{ref:e,"data-testid":`kb-nav-virtual`,className:`w-56 overflow-auto rounded border`,style:{height:X},onScroll:e=>r(e.currentTarget.scrollTop),children:(0,C.jsx)(`div`,{ref:t,role:`listbox`,"aria-label":`Ten thousand rows`,className:`relative`,style:{height:J*Y},children:Array.from({length:s-o},(e,t)=>o+t).map(e=>(0,C.jsxs)(`div`,{"data-index":e,role:`option`,"aria-selected":e===i,"aria-setsize":J,"aria-posinset":e+1,className:`absolute inset-x-0 ${be}`,style:{top:e*Y,height:Y},children:[`Row `,e+1]},e))})}),(0,C.jsxs)(`div`,{className:`space-y-1`,children:[(0,C.jsx)(Q,{label:`active`,testId:`kb-nav-virtual-active`,children:i+1}),(0,C.jsx)(Q,{label:`mounted`,testId:`kb-nav-virtual-mounted`,children:s-o})]})]})}var $=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { createRoving, type RovingSource } from "@kitora/keyboard/roving"

// A virtual list: ten thousand rows, about a dozen mounted. The roving source is
// index-based: navigation asks count() and labelAt(i), never a DOM node, so End,
// PageUp and typeahead reach rows that were never mounted; reveal(i) scrolls the
// row in, it mounts, and focus lands on it.

const ITEM = "flex h-7 items-center rounded px-2 text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-ring focus:bg-muted data-[active]:bg-muted aria-disabled:text-muted-foreground aria-disabled:line-through"
const VIRTUAL_COUNT = 10_000
const ROW_HEIGHT = 28
const VIEW_HEIGHT = 224
const OVERSCAN = 4

function Stat({ label, testId, children }: { label: string; testId: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-2 text-[12px]">
      <span className="text-muted-foreground">{label}</span>
      <span data-testid={testId} className="font-mono tabular-nums">
        {children}
      </span>
    </div>
  )
}

export function NavVirtual() {
  const scroller = useRef<HTMLDivElement>(null)
  const list = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(0)
  const [active, setActive] = useState(0)
  useEffect(() => {
    const view = scroller.current
    const el = list.current
    if (!view || !el) return
    const source: RovingSource = {
      count: () => VIRTUAL_COUNT,
      elementAt: (index) => el.querySelector<HTMLElement>(\`[data-index="\${index}"]\`), // null when not mounted
      mounted: () => [...el.querySelectorAll<HTMLElement>("[data-index]")].map((row): readonly [number, HTMLElement] => [Number(row.getAttribute("data-index")), row]),
      indexOf: (target) => Number(target.closest("[data-index]")?.getAttribute("data-index") ?? -1),
      labelAt: (index) => \`Row \${index + 1}\`,
      idAt: (index) => \`row-\${index}\`, // with indexOfId: a row scrolled out is not "deleted"
      indexOfId: (id) => (id.startsWith("row-") ? Number(id.slice(4)) : -1),
      reveal: (index) => {
        const y = index * ROW_HEIGHT
        if (y < view.scrollTop) view.scrollTop = y
        else if (y + ROW_HEIGHT > view.scrollTop + VIEW_HEIGHT) view.scrollTop = y + ROW_HEIGHT - VIEW_HEIGHT
        setTop(view.scrollTop)
      },
    }
    const roving = createRoving(el, { source, onActiveChange: setActive })
    return () => roving.destroy()
  }, [])
  const first = Math.max(0, Math.floor(top / ROW_HEIGHT) - OVERSCAN)
  const last = Math.min(VIRTUAL_COUNT, Math.ceil((top + VIEW_HEIGHT) / ROW_HEIGHT) + OVERSCAN)
  return (
    <div className="flex flex-wrap items-start gap-4">
      <div ref={scroller} data-testid="kb-nav-virtual" className="w-56 overflow-auto rounded border" style={{ height: VIEW_HEIGHT }} onScroll={(event) => setTop(event.currentTarget.scrollTop)}>
        <div ref={list} role="listbox" aria-label="Ten thousand rows" className="relative" style={{ height: VIRTUAL_COUNT * ROW_HEIGHT }}>
          {Array.from({ length: last - first }, (_, k) => first + k).map((index) => (
            <div key={index} data-index={index} role="option" aria-selected={index === active} aria-setsize={VIRTUAL_COUNT} aria-posinset={index + 1} className={\`absolute inset-x-0 \${ITEM}\`} style={{ top: index * ROW_HEIGHT, height: ROW_HEIGHT }}>
              Row {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-1">
        <Stat label="active" testId="kb-nav-virtual-active">
          {active + 1}
        </Stat>
        <Stat label="mounted" testId="kb-nav-virtual-mounted">
          {last - first}
        </Stat>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>p(()=>import(`./nav-virtual-KGkHBF_z.js`),[]));function Se(){return(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(t,{title:`Navigation`,children:[`The roving entry (`,(0,C.jsx)(`code`,{className:`font-mono text-[12px]`,children:`@kitora/keyboard/roving`}),`) makes a list or grid one tab stop and moves focus by index, so virtual lists work; the main entry adds app navigation: F6 regions, generated skip links and focus that survives a deleted row.`]}),(0,C.jsx)(g,{n:1,title:`A list`,blurb:`Roving tabindex with loop, a skipped disabled item, typeahead and Enter (K61, K63, K65, K66).`,code:G,children:(0,C.jsx)(_e,{})}),(0,C.jsx)(g,{n:2,title:`A grid`,blurb:`Columns read from CSS, rows by Up / Down, corners by Ctrl+Home / End, Left / Right mirrored under RTL (K64, K67).`,code:P,children:(0,C.jsx)(N,{})}),(0,C.jsx)(g,{n:3,title:`A virtual list`,blurb:`Ten thousand rows, about a dozen mounted: End, PageUp and typeahead reach unmounted rows, which mount and take focus (index-based source).`,code:$,children:(0,C.jsx)(xe,{})}),(0,C.jsx)(g,{n:4,title:`A combobox`,blurb:`aria-activedescendant: focus stays in the input while the arrows move the active option (K62).`,code:D,children:(0,C.jsx)(le,{})}),(0,C.jsx)(g,{n:5,title:`Focus groups`,blurb:`Each card is one stop: Enter goes in, Escape comes out (K68).`,code:z,children:(0,C.jsx)(R,{})}),(0,C.jsx)(g,{n:6,title:`Regions and skip links`,blurb:`F6 and Shift+F6 cycle the regions and come back to where you were in each; the skip links are generated from the same regions (K69, K70).`,code:q,children:(0,C.jsx)(ye,{})}),(0,C.jsx)(g,{n:7,title:`Deleting the focused row`,blurb:`Focus moves to the next row (or the previous one at the end), never to the top of the page (K74).`,code:A,children:(0,C.jsx)(de,{})}),(0,C.jsx)(g,{n:8,title:`The React hook`,blurb:`useRoving binds the same primitive to a ref: one tab stop, Left / Right with wrap, Enter calls the latest handler without re-binding (K61, K63, K146).`,code:H,children:(0,C.jsx)(me,{})})]})}export{Se as component};