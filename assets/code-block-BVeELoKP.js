import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{n as r,t as i}from"./code-block-qBHLFEGc.js";var a=e({CodeBlockCodeTabs:()=>c}),o=n(),s=[{name:`pnpm`,code:`pnpm add @kitora/display`,language:`bash`},{name:`npm`,code:`npm install @kitora/display`,language:`bash`},{name:`yarn`,code:`yarn add @kitora/display`,language:`bash`}];function c(){return(0,o.jsx)(`div`,{className:`w-full`,children:(0,o.jsx)(r,{files:s})})}var l=e({CodeBlockLineNumbersAndHighlight:()=>d}),u=[`import { CodeBlock } from "@kitora/display"`,``,`export function Example({ source }: { source: string }) {`,`  return <CodeBlock code={source} language="tsx" lineNumbers highlight="12-13" />`,`}`].join(`
`);function d(){return(0,o.jsx)(`div`,{className:`w-full`,children:(0,o.jsx)(i,{title:`example.tsx`,language:`tsx`,code:u,lineNumbers:!0,highlight:`12-13`,startLine:10})})}var f=e({CodeBlockTerminalStyleWithCopy:()=>p});function p(){return(0,o.jsx)(`div`,{className:`w-full`,children:(0,o.jsx)(i,{title:`terminal`,language:`bash`,code:`pnpm add @kitora/ui @kitora/display`})})}var m=`import { CodeTabs } from "@kitora/display"

const FILES = [
  { name: "pnpm", code: "pnpm add @kitora/display", language: "bash" },
  { name: "npm", code: "npm install @kitora/display", language: "bash" },
  { name: "yarn", code: "yarn add @kitora/display", language: "bash" },
] as const

// Several snippets in one frame: the arrow keys move between the tabs, and copy takes the active one.
export function CodeBlockCodeTabs() {
  return (
    <div className="w-full">
      <CodeTabs files={FILES} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>t(()=>import(`./code-tabs-BCjg8S-V.js`),[]));var h=`import { CodeBlock } from "@kitora/display"

/** The snippet as lines, joined below, so the demo file itself has only one top-level export. */
const SOURCE = [
  \`import { CodeBlock } from "@kitora/display"\`,
  \`\`,
  \`export function Example({ source }: { source: string }) {\`,
  \`  return <CodeBlock code={source} language="tsx" lineNumbers highlight="12-13" />\`,
  \`}\`,
].join("\\n")

// \`lineNumbers\` draws the gutter, \`highlight\` takes a fence-style string ("12-13") or an array of line
// numbers, and \`startLine\` shifts both when the snippet is cut from a longer file (here from line 10).
export function CodeBlockLineNumbersAndHighlight() {
  return (
    <div className="w-full">
      <CodeBlock title="example.tsx" language="tsx" code={SOURCE} lineNumbers highlight="12-13" startLine={10} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>t(()=>import(`./line-numbers-and-highlight-D-e3Avzh.js`),[]));var g=`import { CodeBlock } from "@kitora/display"

// A titled block with the language chip and a copy button in its header; copying goes through the
// display kit's clipboard adapter and is announced politely.
export function CodeBlockTerminalStyleWithCopy() {
  return (
    <div className="w-full">
      <CodeBlock title="terminal" language="bash" code="pnpm add @kitora/ui @kitora/display" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>t(()=>import(`./terminal-style-with-copy-UxpQAof2.js`),[]));var _={"./demos/code-block/code-tabs.tsx":a,"./demos/code-block/line-numbers-and-highlight.tsx":l,"./demos/code-block/terminal-style-with-copy.tsx":f},v={"./demos/code-block/code-tabs.tsx":m,"./demos/code-block/line-numbers-and-highlight.tsx":h,"./demos/code-block/terminal-style-with-copy.tsx":g};export{_ as modules,v as sources};