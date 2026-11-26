import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import{t as r}from"./description-list-DqovcqOi.js";var i=e({DescriptionListGrid:()=>s}),a=n(),o=[{term:`Region`,value:`eu-west-1`},{term:`Runtime`,value:`Node 22`},{term:`Memory`,value:`1 GB`},{term:`Commit`,value:`a1c9e07`,mono:!0,copy:`a1c9e07`},{term:`Created`,value:`15 Oct 2026, 14:02`},{term:`Owner`,value:`Platform team`},{term:`Domains`,value:`acme.dev, www.acme.dev, api.acme.dev`,wide:!0}];function s(){return(0,a.jsx)(`div`,{className:`w-full`,children:(0,a.jsx)(r,{layout:`grid`,columns:3,items:o})})}var c=e({DescriptionListInline:()=>u}),l=[{term:`Status`,value:`Active`},{term:`Plan`,value:`Team, billed yearly`},{term:`Customer ID`,value:`cus_9f2a71`,mono:!0,copy:`cus_9f2a71`},{term:`Owner`,value:`Ada Lovelace`,hint:`Receives billing email`},{term:`Renews`,value:`1 Mar 2027`}];function u(){return(0,a.jsx)(`div`,{className:`w-full max-w-md`,children:(0,a.jsx)(r,{items:l})})}var d=e({DescriptionListStackedParts:()=>f});function f(){return(0,a.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,a.jsxs)(r.Root,{layout:`stacked`,children:[(0,a.jsxs)(r.Item,{children:[(0,a.jsx)(r.Term,{children:`Repository`}),(0,a.jsx)(r.Details,{children:(0,a.jsx)(`a`,{href:`#repo`,className:`underline underline-offset-2`,children:`acme/web`})})]}),(0,a.jsxs)(r.Item,{children:[(0,a.jsx)(r.Term,{children:`Reviewers`}),(0,a.jsx)(r.Details,{children:(0,a.jsxs)(`ul`,{className:`list-disc ps-4`,children:[(0,a.jsx)(`li`,{children:`Grace Hopper`}),(0,a.jsx)(`li`,{children:`Alan Turing`})]})})]})]})})}var p=`import { DescriptionList } from "@kitora/display"

const ITEMS = [
  { term: "Region", value: "eu-west-1" },
  { term: "Runtime", value: "Node 22" },
  { term: "Memory", value: "1 GB" },
  { term: "Commit", value: "a1c9e07", mono: true, copy: "a1c9e07" },
  { term: "Created", value: "15 Oct 2026, 14:02" },
  { term: "Owner", value: "Platform team" },
  { term: "Domains", value: "acme.dev, www.acme.dev, api.acme.dev", wide: true },
]

// \`layout="grid"\` stacks each pair in columns (2, 3 or 4) for a detail header; \`wide\` spans a whole row.
export function DescriptionListGrid() {
  return (
    <div className="w-full">
      <DescriptionList layout="grid" columns={3} items={ITEMS} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>t(()=>import(`./grid-D3JCiS6F.js`),[]));var m=`import { DescriptionList } from "@kitora/display"

const ITEMS = [
  { term: "Status", value: "Active" },
  { term: "Plan", value: "Team, billed yearly" },
  { term: "Customer ID", value: "cus_9f2a71", mono: true, copy: "cus_9f2a71" },
  { term: "Owner", value: "Ada Lovelace", hint: "Receives billing email" },
  { term: "Renews", value: "1 Mar 2027" },
]

// The default \`inline\` layout: term and value side by side in a divided list. \`mono\` sets the value in
// monospace, \`copy\` adds a copy button and \`hint\` an (i) on the term.
export function DescriptionListInline() {
  return (
    <div className="w-full max-w-md">
      <DescriptionList items={ITEMS} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>t(()=>import(`./inline-NXs1-wD4.js`),[]));var h=`import { DescriptionList } from "@kitora/display"

// \`layout="stacked"\` puts the term above its value. The parts (\`Root\`, \`Item\`, \`Term\`, \`Details\`) take any
// node, here a link and a list.
export function DescriptionListStackedParts() {
  return (
    <div className="w-full max-w-sm">
      <DescriptionList.Root layout="stacked">
        <DescriptionList.Item>
          <DescriptionList.Term>Repository</DescriptionList.Term>
          <DescriptionList.Details>
            <a href="#repo" className="underline underline-offset-2">
              acme/web
            </a>
          </DescriptionList.Details>
        </DescriptionList.Item>
        <DescriptionList.Item>
          <DescriptionList.Term>Reviewers</DescriptionList.Term>
          <DescriptionList.Details>
            <ul className="list-disc ps-4">
              <li>Grace Hopper</li>
              <li>Alan Turing</li>
            </ul>
          </DescriptionList.Details>
        </DescriptionList.Item>
      </DescriptionList.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>t(()=>import(`./stacked-parts-LTyZfRtA.js`),[]));var g={"./demos/description-list/grid.tsx":i,"./demos/description-list/inline.tsx":c,"./demos/description-list/stacked-parts.tsx":d},_={"./demos/description-list/grid.tsx":p,"./demos/description-list/inline.tsx":m,"./demos/description-list/stacked-parts.tsx":h};export{g as modules,_ as sources};