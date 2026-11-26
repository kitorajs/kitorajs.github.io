import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./arrow-right-DCctyhz9.js";import{t as n}from"./folder-plus-CUS3-OIA.js";import{t as r}from"./mail-8xGud2d1.js";import{t as i}from"./search-x-Cv0Bym2w.js";import{i as a,t as o}from"./states-CPUH3DFl.js";import{Cc as s,Ic as c,ti as l}from"./index-q72zUtm9.js";var u=e({EmptyStateDefault:()=>f}),d=c();function f(){return(0,d.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,d.jsx)(o,{icon:(0,d.jsx)(r,{}),title:`Inbox zero`,description:`Nothing to read right now. New messages will appear here.`,actions:(0,d.jsxs)(l,{size:`sm`,variant:`outline`,children:[`Compose`,(0,d.jsx)(t,{})]})})})}var p=e({EmptyStateResultPage:()=>m});function m(){return(0,d.jsx)(`div`,{className:`w-full`,children:(0,d.jsx)(a,{status:`404`,actions:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{size:`sm`,children:`Go home`}),(0,d.jsx)(l,{size:`sm`,variant:`outline`,children:`Contact support`})]})})})}var h=e({EmptyStateSmallAndBordered:()=>g});function g(){return(0,d.jsxs)(`div`,{className:`grid w-full gap-3 sm:grid-cols-2`,children:[(0,d.jsx)(o,{size:`sm`,icon:(0,d.jsx)(i,{}),title:`No results`,description:`Try a shorter search or clear the filters.`,actions:(0,d.jsx)(l,{size:`xs`,variant:`outline`,children:`Clear filters`})}),(0,d.jsx)(o,{size:`sm`,bordered:!0,icon:(0,d.jsx)(n,{}),title:`No projects yet`,description:`Projects group your tasks, docs and files.`,actions:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{size:`xs`,children:`New project`}),(0,d.jsx)(l,{size:`xs`,variant:`ghost`,children:`Import`})]})})]})}var _=`import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { EmptyState } from "@kitora/feedback"

// An icon, a headline, one line of copy and the action that fills the space.
export function EmptyStateDefault() {
  return (
    <div className="w-full max-w-sm">
      <EmptyState
        icon={<Mail />}
        title="Inbox zero"
        description="Nothing to read right now. New messages will appear here."
        actions={
          <Button size="sm" variant="outline">
            Compose
            <ArrowRight />
          </Button>
        }
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>s(()=>import(`./default-Bg9ao3rp.js`),[]));var v=`import { Button } from "@kitora/ui/button"
import { ResultPage } from "@kitora/feedback"

// \`ResultPage\` is the whole-page sibling of EmptyState: a status (404, 500, 403, success…) brings its own
// art and copy, and \`title\`, \`description\` and \`actions\` override them.
export function EmptyStateResultPage() {
  return (
    <div className="w-full">
      <ResultPage
        status="404"
        actions={
          <>
            <Button size="sm">Go home</Button>
            <Button size="sm" variant="outline">
              Contact support
            </Button>
          </>
        }
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>s(()=>import(`./result-page-BwKPhHB_.js`),[]));var y=`import { FolderPlus, SearchX } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { EmptyState } from "@kitora/feedback"

// \`size="sm"\` fits a panel or a table body; \`bordered\` draws the dashed drop-zone frame.
export function EmptyStateSmallAndBordered() {
  return (
    <div className="grid w-full gap-3 sm:grid-cols-2">
      <EmptyState size="sm" icon={<SearchX />} title="No results" description="Try a shorter search or clear the filters." actions={<Button size="xs" variant="outline">Clear filters</Button>} />
      <EmptyState
        size="sm"
        bordered
        icon={<FolderPlus />}
        title="No projects yet"
        description="Projects group your tasks, docs and files."
        actions={
          <>
            <Button size="xs">New project</Button>
            <Button size="xs" variant="ghost">
              Import
            </Button>
          </>
        }
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>s(()=>import(`./small-and-bordered-BxsDqM0Y.js`),[]));var b={"./demos/empty-state/default.tsx":u,"./demos/empty-state/result-page.tsx":p,"./demos/empty-state/small-and-bordered.tsx":h},x={"./demos/empty-state/default.tsx":_,"./demos/empty-state/result-page.tsx":v,"./demos/empty-state/small-and-bordered.tsx":y};export{b as modules,x as sources};