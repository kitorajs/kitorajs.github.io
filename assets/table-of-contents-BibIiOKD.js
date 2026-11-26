import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{t as a}from"./table-of-contents-CZqkAgBT.js";var o=e({TableOfContentsGivenList:()=>u}),s=t(n(),1),c=i(),l=[{id:`toc-given-overview`,label:`Overview`,level:2},{id:`toc-given-limits`,label:`Rate limits`,level:2},{id:`toc-given-burst`,label:`Burst allowance`,level:3},{id:`toc-given-errors`,label:`Errors`,level:2}];function u(){let[e,t]=(0,s.useState)(`toc-given-limits`),n=(0,s.useRef)(null);return(0,c.jsxs)(`div`,{className:`flex w-full max-w-md items-start gap-6 text-[13px]`,children:[(0,c.jsx)(a,{headings:l,activeId:e,onActiveChange:t,scrollRoot:n,updateHash:!1,title:`Contents`,className:`w-44`}),(0,c.jsxs)(`div`,{ref:n,className:`flex flex-col gap-2`,children:[l.map(e=>(0,c.jsx)(`p`,{id:e.id,className:e.level===2?`font-medium`:`ps-3 text-muted-foreground`,children:e.label},e.id)),(0,c.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Active: `,(0,c.jsx)(`b`,{className:`text-foreground`,children:e??`none`})]})]})]})}var d=e({TableOfContentsScrollSpy:()=>p}),f=[{id:`toc-demo-install`,title:`Install`,level:2},{id:`toc-demo-npm`,title:`With npm`,level:3},{id:`toc-demo-pnpm`,title:`With pnpm`,level:3},{id:`toc-demo-configure`,title:`Configure`,level:2},{id:`toc-demo-theme`,title:`Theme`,level:3},{id:`toc-demo-deploy`,title:`Deploy`,level:2}];function p(){let e=(0,s.useRef)(null);return(0,c.jsxs)(`div`,{className:`flex w-full max-w-2xl gap-6`,children:[(0,c.jsx)(`div`,{ref:e,tabIndex:0,"aria-label":`Guide`,className:`h-72 flex-1 overflow-y-auto rounded-lg border p-4 text-[13px] leading-6 outline-none focus-visible:ring-2 focus-visible:ring-ring/50`,children:f.map(e=>(0,c.jsxs)(`section`,{className:`pb-6`,children:[(0,c.jsx)(e.level===2?`h2`:`h3`,{id:e.id,className:e.level===2?`mb-2 text-base font-semibold`:`mb-1.5 text-sm font-medium`,children:e.title}),(0,c.jsx)(`p`,{className:`text-muted-foreground`,children:`Every section of the guide has a few paragraphs, so the box scrolls and the list follows along. Scroll this box, or pick a section from the list beside it.`}),(0,c.jsx)(`p`,{className:`mt-2 text-muted-foreground`,children:`The active entry is the first heading in the top third of the box, or the last one scrolled past.`})]},e.id))}),(0,c.jsx)(a,{container:e,scrollRoot:e,updateHash:!1,className:`w-40 shrink-0`})]})}var m=`import { useRef, useState } from "react"
import { TableOfContents } from "@kitora/shell"

const HEADINGS = [
  { id: "toc-given-overview", label: "Overview", level: 2 },
  { id: "toc-given-limits", label: "Rate limits", level: 2 },
  { id: "toc-given-burst", label: "Burst allowance", level: 3 },
  { id: "toc-given-errors", label: "Errors", level: 2 },
]

// The list can come from data (a CMS, MDX's exported headings) instead of the page, and the active entry can be controlled:
// here the host shows which one the list reports. \`scrollRoot\` is the column the headings sit in, so a pick scrolls that
// column, not the page.
export function TableOfContentsGivenList() {
  const [active, setActive] = useState<string | null>("toc-given-limits")
  const column = useRef<HTMLDivElement | null>(null)
  return (
    <div className="flex w-full max-w-md items-start gap-6 text-[13px]">
      <TableOfContents headings={HEADINGS} activeId={active} onActiveChange={setActive} scrollRoot={column} updateHash={false} title="Contents" className="w-44" />
      <div ref={column} className="flex flex-col gap-2">
        {HEADINGS.map((heading) => (
          <p key={heading.id} id={heading.id} className={heading.level === 2 ? "font-medium" : "ps-3 text-muted-foreground"}>
            {heading.label}
          </p>
        ))}
        <p className="text-muted-foreground">
          Active: <b className="text-foreground">{active ?? "none"}</b>
        </p>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>r(()=>import(`./given-list-BZUJEzAL.js`),[]));var h=`import { useRef } from "react"
import { TableOfContents } from "@kitora/shell"

const SECTIONS = [
  { id: "toc-demo-install", title: "Install", level: 2 },
  { id: "toc-demo-npm", title: "With npm", level: 3 },
  { id: "toc-demo-pnpm", title: "With pnpm", level: 3 },
  { id: "toc-demo-configure", title: "Configure", level: 2 },
  { id: "toc-demo-theme", title: "Theme", level: 3 },
  { id: "toc-demo-deploy", title: "Deploy", level: 2 },
] as const

// Headings are read from the article (h2 and h3, nested by level); the scroll spy marks the section being read with
// aria-current="location" and the bar on the link's start edge. Following a link scrolls smoothly (a jump under reduced motion)
// and moves focus to the heading. \`scrollRoot\` points the spy at the scrolling box instead of the window.
export function TableOfContentsScrollSpy() {
  const article = useRef<HTMLDivElement | null>(null)
  return (
    <div className="flex w-full max-w-2xl gap-6">
      <div ref={article} tabIndex={0} aria-label="Guide" className="h-72 flex-1 overflow-y-auto rounded-lg border p-4 text-[13px] leading-6 outline-none focus-visible:ring-2 focus-visible:ring-ring/50">
        {SECTIONS.map((section) => {
          const Heading = section.level === 2 ? "h2" : "h3"
          return (
            <section key={section.id} className="pb-6">
              <Heading id={section.id} className={section.level === 2 ? "mb-2 text-base font-semibold" : "mb-1.5 text-sm font-medium"}>
                {section.title}
              </Heading>
              <p className="text-muted-foreground">
                Every section of the guide has a few paragraphs, so the box scrolls and the list follows along. Scroll this box, or pick a section from the list beside it.
              </p>
              <p className="mt-2 text-muted-foreground">The active entry is the first heading in the top third of the box, or the last one scrolled past.</p>
            </section>
          )
        })}
      </div>
      <TableOfContents container={article} scrollRoot={article} updateHash={false} className="w-40 shrink-0" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>r(()=>import(`./scroll-spy-xmXmfpOk.js`),[]));var g={"./demos/table-of-contents/given-list.tsx":o,"./demos/table-of-contents/scroll-spy.tsx":d},_={"./demos/table-of-contents/given-list.tsx":m,"./demos/table-of-contents/scroll-spy.tsx":h};export{g as modules,_ as sources};