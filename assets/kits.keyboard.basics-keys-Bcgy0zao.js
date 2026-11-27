import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./provider-Chu9Vnk7.js";import{i as r,n as i}from"./kbd-CZ2z7L7Q.js";import{Ec as a,Uc as o,zc as s}from"./index-BZuUy872.js";import{t as c}from"./react-TGocNVSk.js";import"./kit-gallery-BBavj2rC.js";import{t as l}from"./example-B67lLz1F.js";var u=s(),d=[`Mod+K`,`Mod+Shift+P`,`g i`,`Escape`];function f(){return(0,u.jsx)(n,{children:(0,u.jsxs)(`div`,{className:`grid w-fit grid-cols-[auto_auto_auto] items-center gap-x-4 gap-y-1.5 text-[12px]`,children:[(0,u.jsx)(`span`,{className:`text-muted-foreground`,children:`Your platform`}),(0,u.jsx)(`span`,{className:`text-muted-foreground`,children:`macOS`}),(0,u.jsx)(`span`,{className:`text-muted-foreground`,children:`Windows`}),d.map(e=>[(0,u.jsx)(r,{binding:e},`${e}-own`),(0,u.jsx)(i,{binding:e,platform:`mac`},`${e}-mac`),(0,u.jsx)(i,{binding:e,platform:`win`},`${e}-win`)])]})})}var p=`import { Kbd, KeyboardProvider, ProviderKbd } from "@kitora/keyboard"

// Kbd draws a binding as key caps with a platform's glyphs. ProviderKbd uses the platform the provider
// detected (⌘ on a Mac, Ctrl elsewhere); Kbd with \`platform\` draws a fixed one and needs no provider.

const BINDINGS = ["Mod+K", "Mod+Shift+P", "g i", "Escape"] as const

export function KbdHint() {
  return (
    <KeyboardProvider>
      <div className="grid w-fit grid-cols-[auto_auto_auto] items-center gap-x-4 gap-y-1.5 text-[12px]">
        <span className="text-muted-foreground">Your platform</span>
        <span className="text-muted-foreground">macOS</span>
        <span className="text-muted-foreground">Windows</span>
        {BINDINGS.map((binding) => [
          <ProviderKbd key={\`\${binding}-own\`} binding={binding} />,
          <Kbd key={\`\${binding}-mac\`} binding={binding} platform="mac" />,
          <Kbd key={\`\${binding}-win\`} binding={binding} platform="win" />,
        ])}
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>a(()=>import(`./kbd-hint-C4oEMWsL.js`),[]));var m=e(o(),1),h=[`Apple`,`Banana`,`Cherry`,`Grape`,`Mango`];function g(){let[e,t]=(0,m.useState)(`nothing`),{ref:n}=c({orientation:`vertical`,loop:!0});return(0,u.jsxs)(`div`,{className:`flex items-start gap-4 text-[12px]`,children:[(0,u.jsx)(`div`,{ref:n,role:`toolbar`,"aria-orientation":`vertical`,"aria-label":`Fruit`,"data-testid":`kb-basics-roving`,className:`flex w-40 flex-col gap-0.5 rounded-md border p-1`,children:h.map(e=>(0,u.jsx)(`button`,{type:`button`,"data-roving-item":``,onClick:()=>t(e),className:`h-7 rounded px-2 text-start hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,children:e},e))}),(0,u.jsxs)(`span`,{role:`status`,children:[`Picked: `,e]})]})}var _=`import { useState } from "react"
import { useRoving } from "@kitora/keyboard/roving"

// Roving focus: the whole list is one Tab stop. Up and Down move between items (wrapping at the ends),
// Home and End jump; Enter or Space clicks the focused button as usual.

const FRUITS = ["Apple", "Banana", "Cherry", "Grape", "Mango"] as const

export function RovingList() {
  const [picked, setPicked] = useState("nothing")
  const { ref } = useRoving<HTMLDivElement>({ orientation: "vertical", loop: true })
  return (
    <div className="flex items-start gap-4 text-[12px]">
      <div ref={ref} role="toolbar" aria-orientation="vertical" aria-label="Fruit" data-testid="kb-basics-roving" className="flex w-40 flex-col gap-0.5 rounded-md border p-1">
        {FRUITS.map((fruit) => (
          <button key={fruit} type="button" data-roving-item="" onClick={() => setPicked(fruit)} className="h-7 rounded px-2 text-start hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring">
            {fruit}
          </button>
        ))}
      </div>
      <span role="status">Picked: {picked}</span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>a(()=>import(`./roving-list-BTwLhXYa.js`),[]));function v(){return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(t,{title:`Key caps and focus`,children:`Showing a key on screen, and moving focus through a list with the arrow keys.`}),(0,u.jsx)(l,{n:1,title:`A Kbd key hint`,blurb:`The same bindings for your platform, macOS and Windows.`,code:p,children:(0,u.jsx)(f,{})}),(0,u.jsx)(l,{n:2,title:`A roving-focus list`,blurb:`Tab into the list, then use Up, Down, Home and End.`,code:_,children:(0,u.jsx)(g,{})})]})}export{v as component};