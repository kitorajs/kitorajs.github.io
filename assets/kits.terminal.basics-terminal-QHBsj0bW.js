import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{a,c as o,d as s,f as c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./terminal-CYWeYT_2.js";import"./kit-gallery-BBavj2rC.js";import{t as _}from"./example-B67lLz1F.js";import{t as v}from"./-kits.terminal.shared-Cb96TasL.js";var y=e(r(),1),b=i();function x(){let[e]=(0,y.useState)(()=>s()),t=g({session:e,history:[`seq 200`,`colors`]}),[n,r]=(0,y.useState)(!0),i=(0,y.useId)();return(0,b.jsxs)(u.Root,{terminal:t,following:n,onFollowingChange:r,"data-terminal-theme":i,"aria-label":`Composed terminal`,className:h,children:[(0,b.jsx)(o,{id:i,theme:`dark`}),(0,b.jsx)(f,{title:`composed: ~`,hideDefaultActions:!0,actions:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`button`,{type:`button`,onClick:()=>r(e=>!e),"aria-pressed":!n,className:`h-6 rounded px-1.5 text-[11px] text-[var(--terminal-muted)] hover:bg-[var(--terminal-border)] hover:text-[var(--terminal-fg)]`,children:n?`Pause`:`Follow`}),(0,b.jsx)(a,{})]})}),(0,b.jsx)(u.Viewport,{className:`min-h-0 flex-1 overscroll-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--terminal-cursor)]`,contentClassName:`px-3 py-2`,children:(e,t)=>(0,b.jsx)(u.Line,{line:e,isLast:t.isLast})}),(0,b.jsx)(m,{}),(0,b.jsx)(u.Input,{})]})}var S=`import { useId, useState } from "react"
import { createFakeShell } from "@kitora/terminal/core"
import { TerminalView, useTerminal } from "@kitora/terminal/react"
import { TERMINAL_ROOT_CLASSES, TerminalActions, TerminalHeader, TerminalJumpToLatest, TerminalThemeStyle } from "@kitora/terminal/ui"

// The \`Terminal\` preset rebuilt from its public parts: the headless \`TerminalView\` pieces plus the
// styled \`TerminalThemeStyle\`, \`TerminalHeader\` (its default Copy and Clear hidden, then placed by hand as \`TerminalActions\`) and \`TerminalJumpToLatest\`. Swap any line for your
// own markup. Follow-tail is controlled here, so a Pause button in the header can hold the view.
// Each layer has its own entry (\`/core\`, \`/react\`, \`/ui\`); the \`@kitora/terminal\` barrel works too.
export function BasicTerminalCompose() {
  const [shell] = useState(() => createFakeShell())
  const terminal = useTerminal({ session: shell, history: ["seq 200", "colors"] })
  const [following, setFollowing] = useState(true)
  const id = useId()
  return (
    <TerminalView.Root terminal={terminal} following={following} onFollowingChange={setFollowing} data-terminal-theme={id} aria-label="Composed terminal" className={TERMINAL_ROOT_CLASSES}>
      <TerminalThemeStyle id={id} theme="dark" />
      <TerminalHeader
        title="composed: ~"
        hideDefaultActions
        actions={
          <>
            <button type="button" onClick={() => setFollowing((f) => !f)} aria-pressed={!following} className="h-6 rounded px-1.5 text-[11px] text-[var(--terminal-muted)] hover:bg-[var(--terminal-border)] hover:text-[var(--terminal-fg)]">
              {following ? "Pause" : "Follow"}
            </button>
            <TerminalActions />
          </>
        }
      />
      <TerminalView.Viewport className="min-h-0 flex-1 overscroll-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--terminal-cursor)]" contentClassName="px-3 py-2">
        {(line, info) => <TerminalView.Line line={line} isLast={info.isLast} />}
      </TerminalView.Viewport>
      <TerminalJumpToLatest />
      <TerminalView.Input />
    </TerminalView.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>n(()=>import(`./terminal-compose-NG6Be3Ye.js`),[]));function C(){let e=c(),t=`\x1B[35mshout>\x1B[0m `;return e.emit(`Type anything.\n${t}`),{subscribe:e.subscribe,write:n=>e.emit(`\u001b[1;33m${n.trimEnd().toUpperCase()}\u001b[0m\n${t}`),interrupt:()=>e.emit(t),complete:e=>({value:`${e}!`})}}function w(){let[e]=(0,y.useState)(C);return(0,b.jsx)(l,{title:`shout`,session:e})}var T=`import { useState } from "react"
import { createShellOutput, Terminal, type TerminalSession } from "@kitora/terminal"

/** A whole session adapter: whatever you type comes back upper-cased. Swap it for a WebSocket to a pty. */
function createShoutSession(): TerminalSession {
  const out = createShellOutput()
  const prompt = "\\u001b[35mshout>\\u001b[0m "
  out.emit(\`Type anything.\\n\${prompt}\`)
  return {
    subscribe: out.subscribe,
    write: (data) => out.emit(\`\\u001b[1;33m\${data.trimEnd().toUpperCase()}\\u001b[0m\\n\${prompt}\`),
    interrupt: () => out.emit(prompt),
    complete: (line) => ({ value: \`\${line}!\` }),
  }
}

export function BasicTerminalAdapter() {
  const [session] = useState(createShoutSession)
  return <Terminal title="shout" session={session} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>n(()=>import(`./terminal-adapter-BOPndH0t.js`),[]));function E(){let[e]=(0,y.useState)(()=>s());return(0,b.jsx)(l,{title:`user@kitora: ~`,session:e,history:[`ls`,`colors`,`build`]})}var D=`import { useState } from "react"
import { createFakeShell, Terminal } from "@kitora/terminal"

/** The built-in fake shell. Type \`help\`; ↑/↓ walk the history, Tab completes, Ctrl+C stops \`build\`, Ctrl+L clears. */
export function BasicTerminalShell() {
  const [shell] = useState(() => createFakeShell())
  return <Terminal title="user@kitora: ~" session={shell} history={["ls", "colors", "build"]} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>n(()=>import(`./terminal-shell-BKjXT3wX.js`),[]));var O=[`\x1B[1m> vitest run\x1B[0m`,``,` \x1B[32m✓\x1B[0m src/core/ansi.test.ts \x1B[2m(5 tests)\x1B[0m \x1B[33m4ms\x1B[0m`,` \x1B[32m✓\x1B[0m src/core/terminal.test.ts \x1B[2m(7 tests)\x1B[0m \x1B[33m6ms\x1B[0m`,` \x1B[31m✗\x1B[0m src/core/shell.test.ts \x1B[2m(1 test | 1 failed)\x1B[0m`,`   \x1B[31mAssertionError: expected 'hi' to be 'hello'\x1B[0m`,``,` \x1B[1mTests\x1B[0m  \x1B[1;31m1 failed\x1B[0m \x1B[2m|\x1B[0m \x1B[1;32m12 passed\x1B[0m \x1B[2m(13)\x1B[0m`,`loading 40%\rloading 100% \x1B[32mdone\x1B[0m`].join(`
`);function k(){return(0,b.jsx)(l,{title:`vitest`,initialOutput:O})}var A=`import { Terminal } from "@kitora/terminal"

// Any ANSI text: colours, bold, dim, and \`\\r\` redraws all render as a real terminal would.
const OUTPUT = [
  "\\u001b[1m> vitest run\\u001b[0m",
  "",
  " \\u001b[32m✓\\u001b[0m src/core/ansi.test.ts \\u001b[2m(5 tests)\\u001b[0m \\u001b[33m4ms\\u001b[0m",
  " \\u001b[32m✓\\u001b[0m src/core/terminal.test.ts \\u001b[2m(7 tests)\\u001b[0m \\u001b[33m6ms\\u001b[0m",
  " \\u001b[31m✗\\u001b[0m src/core/shell.test.ts \\u001b[2m(1 test | 1 failed)\\u001b[0m",
  "   \\u001b[31mAssertionError: expected 'hi' to be 'hello'\\u001b[0m",
  "",
  " \\u001b[1mTests\\u001b[0m  \\u001b[1;31m1 failed\\u001b[0m \\u001b[2m|\\u001b[0m \\u001b[1;32m12 passed\\u001b[0m \\u001b[2m(13)\\u001b[0m",
  "loading 40%\\rloading 100% \\u001b[32mdone\\u001b[0m",
].join("\\n")

/** Output only: no session, so there is no input line. */
export function BasicTerminalStatic() {
  return <Terminal title="vitest" initialOutput={OUTPUT} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>n(()=>import(`./terminal-static-CtShsYW0.js`),[]));var j=[{name:`info`,tag:`\x1B[32minfo \x1B[0m`,text:`server listening on :3000`},{name:`warn`,tag:`\x1B[33mwarn \x1B[0m`,text:`slow query \x1B[2m(412ms)\x1B[0m`},{name:`error`,tag:`\x1B[31merror\x1B[0m`,text:`connection reset by peer`}];function M(){let e=g({initialOutput:`\x1B[2m# output written from outside the view\x1B[0m
`});return(0,b.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,b.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1 border-b px-2`,children:[j.map(t=>(0,b.jsxs)(`button`,{type:`button`,className:`h-6 rounded border px-2 text-[12px] hover:bg-muted`,onClick:()=>e.write(`\u001b[2m${new Date().toLocaleTimeString()}\u001b[0m ${t.tag} ${t.text}\n`),children:[`Write `,t.name]},t.name)),(0,b.jsx)(`button`,{type:`button`,className:`ml-auto h-6 rounded border px-2 text-[12px] hover:bg-muted`,onClick:()=>e.clear(),children:`Clear`})]}),(0,b.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,b.jsx)(l,{terminal:e,header:!1,theme:{light:p,dark:d}})})]})}var N=`import { Terminal, TERMINAL_THEME_DARK, TERMINAL_THEME_LIGHT, useTerminal } from "@kitora/terminal"

const LEVELS = [
  { name: "info", tag: "\\u001b[32minfo \\u001b[0m", text: "server listening on :3000" },
  { name: "warn", tag: "\\u001b[33mwarn \\u001b[0m", text: "slow query \\u001b[2m(412ms)\\u001b[0m" },
  { name: "error", tag: "\\u001b[31merror\\u001b[0m", text: "connection reset by peer" },
] as const

/** Hold the controller yourself and write to it from anywhere: buttons, sockets, timers. */
export function BasicTerminalWrite() {
  const terminal = useTerminal({ initialOutput: "\\u001b[2m# output written from outside the view\\u001b[0m\\n" })
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-9 shrink-0 items-center gap-1 border-b px-2">
        {LEVELS.map((l) => (
          <button key={l.name} type="button" className="h-6 rounded border px-2 text-[12px] hover:bg-muted" onClick={() => terminal.write(\`\\u001b[2m\${new Date().toLocaleTimeString()}\\u001b[0m \${l.tag} \${l.text}\\n\`)}>
            Write {l.name}
          </button>
        ))}
        <button type="button" className="ml-auto h-6 rounded border px-2 text-[12px] hover:bg-muted" onClick={() => terminal.clear()}>
          Clear
        </button>
      </div>
      <div className="min-h-0 flex-1">
        <Terminal terminal={terminal} header={false} theme={{ light: TERMINAL_THEME_LIGHT, dark: TERMINAL_THEME_DARK }} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>n(()=>import(`./terminal-write-DAg4QOJl.js`),[]));function P(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(t,{title:`Basics: the terminal`,children:"`Terminal` draws ANSI output with a cursor, scrollback and an input line. What sits behind it is a `TerminalSession`: the built-in fake shell, or any adapter you write."}),(0,b.jsx)(_,{n:1,title:`Static ANSI output`,blurb:"Pass `initialOutput`: colours, bold and dim render; `\\r` redraws the line. No session, so no input line.",code:A,children:(0,b.jsx)(v,{testId:`basic-terminal-static`,height:260,children:(0,b.jsx)(k,{})})}),(0,b.jsx)(_,{n:2,title:`A shell with input and history`,blurb:"`createFakeShell()` as the session. Click in and type `help`; ↑/↓ for history, Tab to complete, Ctrl+C, Ctrl+L.",code:D,children:(0,b.jsx)(v,{testId:`basic-terminal-shell`,height:300,children:(0,b.jsx)(E,{})})}),(0,b.jsx)(_,{n:3,title:`Your own session adapter`,blurb:"Implement `write` and `subscribe` (plus optional `interrupt`, `complete`, `resize`) and the view does the rest.",code:T,children:(0,b.jsx)(v,{testId:`basic-terminal-adapter`,height:220,children:(0,b.jsx)(w,{})})}),(0,b.jsx)(_,{n:4,title:`Write from outside`,blurb:"`useTerminal()` hands you the controller: `write`, `clear`, `submit` and the buffer itself.",code:N,children:(0,b.jsx)(v,{testId:`basic-terminal-write`,height:240,children:(0,b.jsx)(M,{})})}),(0,b.jsx)(_,{n:5,title:`Compose your own`,blurb:"The `Terminal` preset rebuilt from its public parts: `TerminalView.Root`, `TerminalThemeStyle`, `TerminalHeader` (with `hideDefaultActions`, then Copy and Clear placed after Pause as `TerminalActions`), `TerminalView.Viewport`, `TerminalJumpToLatest` and `TerminalView.Input`. Follow-tail is controlled, so the header's Pause button holds the view while `seq 200` prints.",code:S,children:(0,b.jsx)(v,{testId:`basic-terminal-compose`,height:280,children:(0,b.jsx)(x,{})})})]})}export{P as component};