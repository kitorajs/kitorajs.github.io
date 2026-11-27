import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Ec as t,zc as n}from"./index-BZuUy872.js";import{t as r}from"./copy-DHicobTO.js";var i=e({CopyButtonDefault:()=>o}),a=n();function o(){return(0,a.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,a.jsx)(r,{value:`npm install @kitora/display`}),(0,a.jsx)(r,{value:`npm install @kitora/display`,showText:!0,label:`Copy command`})]})}var s=e({CopyButtonTokenRow:()=>l}),c=`dk_demo_xxxxxxxxxxxxxxxxxxxxxxxx`;function l(){return(0,a.jsxs)(`div`,{className:`flex w-full max-w-sm items-center gap-2 rounded-md border border-border bg-surface-1 px-2.5 py-1.5`,children:[(0,a.jsx)(`code`,{className:`min-w-0 flex-1 truncate font-mono text-xs`,children:c}),(0,a.jsx)(r,{value:()=>c,label:`Copy API key`,showText:!0})]})}var u=`import { CopyButton } from "@kitora/display"

// An icon button that copies \`value\`, swaps to a check, and announces the result politely. \`showText\`
// adds the word; \`label\` is the accessible name.
export function CopyButtonDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <CopyButton value="npm install @kitora/display" />
      <CopyButton value="npm install @kitora/display" showText label="Copy command" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(u,()=>t(()=>import(`./default-Cj0dAGMN.js`),[]));var d=`import { CopyButton } from "@kitora/display"

const TOKEN = "dk_demo_xxxxxxxxxxxxxxxxxxxxxxxx"

// Next to a value it copies: a function \`value\` reads the text at click time, and \`onCopy\` reports
// whether the clipboard accepted it.
export function CopyButtonTokenRow() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 rounded-md border border-border bg-surface-1 px-2.5 py-1.5">
      <code className="min-w-0 flex-1 truncate font-mono text-xs">{TOKEN}</code>
      <CopyButton value={() => TOKEN} label="Copy API key" showText />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>t(()=>import(`./token-row-DUbgjRUk.js`),[]));var f={"./demos/copy-button/default.tsx":i,"./demos/copy-button/token-row.tsx":s},p={"./demos/copy-button/default.tsx":u,"./demos/copy-button/token-row.tsx":d};export{f as modules,p as sources};