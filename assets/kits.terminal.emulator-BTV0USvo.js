import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./hammer-DEDUTHmQ.js";import{t as r}from"./square-CGjoGtCk.js";import{Bc as i,Cc as a,Go as o,Ic as s,Uo as c}from"./index-9y5uwRd3.js";import{d as l,f as u,i as d,l as f,n as p,u as m}from"./terminal-Br_-mZ6c.js";import"./kit-gallery-B-Yr9fP4.js";import{t as h}from"./example-CZLJLtIC.js";import{t as g}from"./-kits.terminal.shared-BuXGOuE1.js";var _=e(i(),1),v=s();function y(){let[e]=(0,_.useState)(()=>{let e=l({banner:``});return e.run(`build`),e}),t=`inline-flex h-6 items-center gap-1 rounded px-1.5 font-sans text-[11px] text-[var(--terminal-muted)] hover:bg-[var(--terminal-border)] hover:text-[var(--terminal-fg)]`;return(0,v.jsx)(d,{title:`pnpm build`,session:e,actions:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`button`,{type:`button`,className:t,onClick:()=>void e.run(`build`),children:[(0,v.jsx)(n,{className:`size-3`,"aria-hidden":`true`}),` Run`]}),(0,v.jsxs)(`button`,{type:`button`,className:t,onClick:()=>e.interrupt(),children:[(0,v.jsx)(r,{className:`size-3`,"aria-hidden":`true`}),` Stop`]})]})})}var b=`import { useState } from "react"
import { Hammer, Square } from "lucide-react"
import { createFakeShell, Terminal } from "@kitora/terminal"

/** A streamed build: spinners and a progress bar redraw in place with \`\\r\` and \`ESC[K\`. Ctrl+C (or Stop) interrupts it. */
export function TerminalBuild() {
  const [shell] = useState(() => {
    const s = createFakeShell({ banner: "" })
    void s.run("build")
    return s
  })
  const button = "inline-flex h-6 items-center gap-1 rounded px-1.5 font-sans text-[11px] text-[var(--terminal-muted)] hover:bg-[var(--terminal-border)] hover:text-[var(--terminal-fg)]"
  return (
    <Terminal
      title="pnpm build"
      session={shell}
      actions={
        <>
          <button type="button" className={button} onClick={() => void shell.run("build")}>
            <Hammer className="size-3" aria-hidden="true" /> Run
          </button>
          <button type="button" className={button} onClick={() => shell.interrupt()}>
            <Square className="size-3" aria-hidden="true" /> Stop
          </button>
        </>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>a(()=>import(`./terminal-build-xEFHBixn.js`),[]));function x(){let[e]=(0,_.useState)(()=>{let e=l({banner:``});return e.run(`colors`),e});return(0,v.jsx)(d,{title:`colors`,session:e})}var S=`import { useState } from "react"
import { createFakeShell, Terminal } from "@kitora/terminal"

/** The fake shell's \`colors\` command: the 16 base colours (themeable), the 256-colour cube and greys, a truecolor ramp and every attribute. */
export function TerminalColors() {
  const [shell] = useState(() => {
    const s = createFakeShell({ banner: "" })
    void s.run("colors")
    return s
  })
  return <Terminal title="colors" session={shell} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>a(()=>import(`./terminal-colors-9sU2_Zki.js`),[]));function C(e){let t=e.match(/\d+(?:\.\d+)?|[-+*/()]/g)??[],n=0,r=()=>{let e=t[n++];if(e===`(`){let e=a();return n++,e}return e===`-`?-r():e===void 0?NaN:Number(e)},i=()=>{let e=r();for(;t[n]===`*`||t[n]===`/`;)e=t[n++]===`*`?e*r():e/r();return e},a=()=>{let e=i();for(;t[n]===`+`||t[n]===`-`;)e=t[n++]===`+`?e+i():e-i();return e},o=a();return n===t.length?o:NaN}function w(){let e=u(),t=`\x1B[36m›\x1B[0m `;return e.emit(`\u001b[2mcalc — try 2 * (3 + 4) or 1/3\u001b[0m\n${t}`),{subscribe:e.subscribe,write(n){let r=n.trim(),i=C(r);Number.isFinite(i)?e.emit(`\u001b[1;32m= ${i}\u001b[0m\n`):r&&e.emit(`\u001b[31mnot arithmetic: ${r}\u001b[0m\n`),e.emit(t)},interrupt:()=>e.emit(t)}}function T(){let[e]=(0,_.useState)(w),t=m({session:e,history:[`2 * (3 + 4)`]});return(0,v.jsxs)(f.Root,{terminal:t,rowHeight:22,className:`relative flex h-full flex-col bg-muted/40 font-mono text-[13px] [&_[data-terminal-cursor]]:border-b-2 [&_[data-terminal-cursor]]:border-muted-foreground/50 [&_[data-terminal-cursor][data-focused]]:border-primary [&_[data-terminal-cursor][data-focused]:not([data-on])]:border-transparent`,children:[(0,v.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-background px-3 font-sans text-[12px]`,children:[(0,v.jsx)(`span`,{className:`font-medium`,children:`Calculator`}),(0,v.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[t.input.history.length,` in history`]})]}),(0,v.jsx)(f.Viewport,{className:`min-h-0 flex-1`,contentClassName:`py-2 pr-3`,children:(e,t)=>(0,v.jsxs)(`div`,{className:`flex`,children:[(0,v.jsx)(`span`,{className:`w-10 shrink-0 pr-3 text-right text-muted-foreground tabular-nums select-none`,children:t.index+1}),(0,v.jsx)(f.Line,{line:e,isLast:t.isLast})]})}),(0,v.jsx)(f.Input,{})]})}var E=`import { useState } from "react"
import { createShellOutput, TerminalView, useTerminal, type TerminalSession } from "@kitora/terminal"

/** + - * / and parentheses, by recursive descent (no eval). Returns NaN on bad input. */
function calc(src: string): number {
  const tokens = src.match(/\\d+(?:\\.\\d+)?|[-+*/()]/g) ?? []
  let i = 0
  const atom = (): number => {
    const t = tokens[i++]
    if (t === "(") {
      const v = sum()
      i++
      return v
    }
    if (t === "-") return -atom()
    return t === undefined ? Number.NaN : Number(t)
  }
  const product = (): number => {
    let v = atom()
    while (tokens[i] === "*" || tokens[i] === "/") v = tokens[i++] === "*" ? v * atom() : v / atom()
    return v
  }
  const sum = (): number => {
    let v = product()
    while (tokens[i] === "+" || tokens[i] === "-") v = tokens[i++] === "+" ? v + product() : v - product()
    return v
  }
  const v = sum()
  return i === tokens.length ? v : Number.NaN
}

/** A tiny calculator REPL as the session: each line is evaluated as arithmetic. */
function createCalcSession(): TerminalSession {
  const out = createShellOutput()
  const prompt = "\\u001b[36m›\\u001b[0m "
  out.emit(\`\\u001b[2mcalc — try 2 * (3 + 4) or 1/3\\u001b[0m\\n\${prompt}\`)
  return {
    subscribe: out.subscribe,
    write(data) {
      const expr = data.trim()
      const value = calc(expr)
      if (Number.isFinite(value)) out.emit(\`\\u001b[1;32m= \${value}\\u001b[0m\\n\`)
      else if (expr) out.emit(\`\\u001b[31mnot arithmetic: \${expr}\\u001b[0m\\n\`)
      out.emit(prompt)
    },
    interrupt: () => out.emit(prompt),
  }
}

/** The headless parts in your own markup: a light card, a line-number gutter and an underline cursor. No preset involved. */
export function TerminalCustom() {
  const [session] = useState(createCalcSession)
  const terminal = useTerminal({ session, history: ["2 * (3 + 4)"] })
  return (
    <TerminalView.Root
      terminal={terminal}
      rowHeight={22}
      className="relative flex h-full flex-col bg-muted/40 font-mono text-[13px] [&_[data-terminal-cursor]]:border-b-2 [&_[data-terminal-cursor]]:border-muted-foreground/50 [&_[data-terminal-cursor][data-focused]]:border-primary [&_[data-terminal-cursor][data-focused]:not([data-on])]:border-transparent"
    >
      <div className="flex h-8 items-center justify-between border-b bg-background px-3 font-sans text-[12px]">
        <span className="font-medium">Calculator</span>
        <span className="text-muted-foreground tabular-nums">{terminal.input.history.length} in history</span>
      </div>
      <TerminalView.Viewport className="min-h-0 flex-1" contentClassName="py-2 pr-3">
        {(line, info) => (
          <div className="flex">
            <span className="w-10 shrink-0 pr-3 text-right text-muted-foreground tabular-nums select-none">{info.index + 1}</span>
            <TerminalView.Line line={line} isLast={info.isLast} />
          </div>
        )}
      </TerminalView.Viewport>
      <TerminalView.Input />
    </TerminalView.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>a(()=>import(`./terminal-custom-CxlgAGFM.js`),[]));var D=1e5;function O(){let[e]=(0,_.useState)(()=>l({banner:``})),[t]=(0,_.useState)(()=>{let e=``;for(let t=1;t<=D;t++)e+=`\u001b[2m${String(t).padStart(6)}\u001b[0m  ${t%15==0?`\x1B[35mFizzBuzz\x1B[0m`:t%5==0?`\x1B[36mBuzz\x1B[0m`:t%3==0?`\x1B[33mFizz\x1B[0m`:String(t)}\n`;return{text:e,started:performance.now()}}),n=m({session:e,scrollback:D,initialOutput:t.text}),[r]=(0,_.useState)(()=>Math.round(performance.now()-t.started)),i=c(),a=o();return(0,v.jsx)(d,{terminal:n,title:`100,000 lines`,actions:(0,v.jsxs)(`span`,{className:`font-sans text-[11px] text-[var(--terminal-muted)] tabular-nums`,children:[n.lines.length.toLocaleString(i),` lines · built in `,a?r:`–`,` ms`]})})}var k=`import { useState } from "react"
import { useDefaultLocale, useHydrated } from "@kitora/primitives/react"
import { createFakeShell, Terminal, useTerminal } from "@kitora/terminal"

const LINES = 100_000

/** 100k preloaded lines with a 100k scrollback cap. Only the visible rows are in the DOM; \`seq 100000\` adds another 100k live. */
export function TerminalScrollback() {
  const [shell] = useState(() => createFakeShell({ banner: "" }))
  const [stats] = useState(() => {
    let text = ""
    for (let i = 1; i <= LINES; i++) text += \`\\u001b[2m\${String(i).padStart(6)}\\u001b[0m  \${i % 15 === 0 ? "\\u001b[35mFizzBuzz\\u001b[0m" : i % 5 === 0 ? "\\u001b[36mBuzz\\u001b[0m" : i % 3 === 0 ? "\\u001b[33mFizz\\u001b[0m" : String(i)}\\n\`
    return { text, started: performance.now() }
  })
  const terminal = useTerminal({ session: shell, scrollback: LINES, initialOutput: stats.text })
  const [ms] = useState(() => Math.round(performance.now() - stats.started))
  // the count in the reader's locale; the measured time once the page has hydrated (a dash in the server HTML)
  const locale = useDefaultLocale()
  const hydrated = useHydrated()
  return (
    <Terminal
      terminal={terminal}
      title="100,000 lines"
      actions={
        <span className="font-sans text-[11px] text-[var(--terminal-muted)] tabular-nums">
          {terminal.lines.length.toLocaleString(locale)} lines · built in {hydrated ? ms : "–"} ms
        </span>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>a(()=>import(`./terminal-scrollback-DIcwfnHr.js`),[]));var A={...p,name:`solarized`,foreground:`#93a1a1`,background:`#002b36`,cursor:`#93a1a1`,selection:`rgba(147, 161, 161, 0.25)`,chrome:`#073642`,border:`#0b4452`,muted:`#93a1a1`,ansi:[`#073642`,`#dc322f`,`#859900`,`#b58900`,`#4aa3e0`,`#d33682`,`#2aa198`,`#eee8d5`,`#586e75`,`#cb4b16`,`#93a1a1`,`#839496`,`#6c71c4`,`#d33682`,`#2aa198`,`#fdf6e3`]};function j({theme:e,label:t}){let[n]=(0,_.useState)(()=>{let e=l({banner:``});return e.run(`tree`).then(()=>e.run(`cat package.json`)),e});return(0,v.jsx)(d,{title:t,theme:e,session:n})}function M(){return(0,v.jsxs)(`div`,{className:`grid h-full grid-cols-1 gap-px bg-border md:grid-cols-3`,children:[(0,v.jsx)(j,{theme:`dark`,label:`dark`}),(0,v.jsx)(j,{theme:`light`,label:`light`}),(0,v.jsx)(j,{theme:A,label:`custom: solarized`})]})}var N=`import { useState } from "react"
import { createFakeShell, Terminal, TERMINAL_THEME_DARK, type TerminalTheme } from "@kitora/terminal"

/** A theme is plain data: 16 ANSI colours plus foreground, background, cursor, selection and chrome. */
const SOLARIZED: TerminalTheme = {
  ...TERMINAL_THEME_DARK,
  name: "solarized",
  foreground: "#93a1a1",
  background: "#002b36",
  cursor: "#93a1a1",
  selection: "rgba(147, 161, 161, 0.25)",
  chrome: "#073642",
  border: "#0b4452",
  // Solarized, with the muted text and the blue (the prompt) lifted from #657b83 / #268bd2 so they pass WCAG AA on the dark base.
  muted: "#93a1a1",
  ansi: ["#073642", "#dc322f", "#859900", "#b58900", "#4aa3e0", "#d33682", "#2aa198", "#eee8d5", "#586e75", "#cb4b16", "#93a1a1", "#839496", "#6c71c4", "#d33682", "#2aa198", "#fdf6e3"],
}

function Pane({ theme, label }: { readonly theme: "dark" | "light" | TerminalTheme; readonly label: string }) {
  const [shell] = useState(() => {
    const s = createFakeShell({ banner: "" })
    void s.run("tree").then(() => s.run("cat package.json"))
    return s
  })
  return <Terminal title={label} theme={theme} session={shell} />
}

/** The same session output in the built-in dark and light themes and a custom one. */
export function TerminalThemes() {
  return (
    <div className="grid h-full grid-cols-1 gap-px bg-border md:grid-cols-3">
      <Pane theme="dark" label="dark" />
      <Pane theme="light" label="light" />
      <Pane theme={SOLARIZED} label="custom: solarized" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>a(()=>import(`./terminal-themes-CdDBveDY.js`),[]));function P(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(t,{title:`Terminal emulator`,children:"A terminal view, not a VT100: SGR colours (16, 256, truecolor), `\\r` / `\\b` redraws, erase-line and clear-screen, a blinking cursor, input with history, and virtualised scrollback that stays fast at 100k lines."}),(0,v.jsx)(h,{n:1,title:`Colour test`,blurb:`The 16 themeable colours, the 256-colour cube and greys, a truecolor ramp, and bold, dim, italic, underline, inverse and strike.`,code:S,children:(0,v.jsx)(g,{testId:`terminal-colors`,height:420,children:(0,v.jsx)(x,{})})}),(0,v.jsx)(h,{n:2,title:`A streamed build`,blurb:`Output arrives in chunks over time; spinners and the progress bar redraw in place. Stop (or Ctrl+C) interrupts, Run starts it again.`,code:b,children:(0,v.jsx)(g,{testId:`terminal-build`,height:360,children:(0,v.jsx)(y,{})})}),(0,v.jsx)(h,{n:3,title:`100,000 lines of scrollback`,blurb:"Preloaded at mount with a 100k cap; only the visible rows are in the DOM. Scroll up and the view stops following until you jump back. Try `seq 100000`.",code:k,children:(0,v.jsx)(g,{testId:`terminal-scrollback`,height:360,children:(0,v.jsx)(O,{})})}),(0,v.jsx)(h,{n:4,title:`Themes`,blurb:`Built-in dark and light, and a custom palette. A theme is data: 16 ANSI colours plus fg, bg, cursor, selection and chrome.`,code:N,children:(0,v.jsx)(g,{testId:`terminal-themes`,height:320,children:(0,v.jsx)(M,{})})}),(0,v.jsx)(h,{n:5,title:`Rebuilt from the parts`,blurb:"`TerminalView.Root`, `Viewport`, `Line` and `Input` in your own markup: a line-number gutter, an underline cursor and a calculator session.",code:E,children:(0,v.jsx)(g,{testId:`terminal-custom`,height:280,children:(0,v.jsx)(T,{})})})]})}export{P as component};