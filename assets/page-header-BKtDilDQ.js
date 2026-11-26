import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./plus-C7zFbiHD.js";import{t as r}from"./save-DIROwgG4.js";import{Bc as i,Cc as a,Ic as o,ti as s}from"./index-q72zUtm9.js";import{t as c}from"./badge-Be8rVEaF.js";import{n as l}from"./breadcrumbs-CaiP9isi.js";import{n as u,r as d,t as f}from"./page-5VykEPaJ.js";var p=e({PageHeaderComposeProjectsHeader:()=>v}),m=t(i(),1),h=o(),g=[{id:`acme`,label:`Acme`,href:`#acme`},{id:`projects`,label:`Projects`}],_=[{id:`active`,label:`Active`,count:12},{id:`archived`,label:`Archived`,count:4},{id:`templates`,label:`Templates`}];function v(){let[e,t]=(0,m.useState)(`active`);return(0,h.jsx)(`div`,{className:`w-full max-w-2xl rounded-lg border border-border bg-background`,children:(0,h.jsxs)(f.Root,{children:[(0,h.jsxs)(f.Header,{tabs:!0,children:[(0,h.jsx)(f.Kicker,{children:(0,h.jsx)(l,{items:g,onNavigate:(e,t)=>t.preventDefault()})}),(0,h.jsxs)(f.Heading,{actions:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{variant:`outline`,size:`sm`,children:`Import`}),(0,h.jsxs)(s,{size:`sm`,children:[(0,h.jsx)(n,{}),`New project`]})]}),children:[(0,h.jsxs)(f.Title,{className:`flex flex-wrap items-center gap-2`,children:[`Projects `,(0,h.jsx)(c,{variant:`secondary`,children:`12 active`})]}),(0,h.jsx)(f.Description,{children:`Everything your team is shipping this quarter.`})]}),(0,h.jsx)(`div`,{className:`mt-2`,children:(0,h.jsx)(u,{tabs:_,active:e,onSelect:(e,n)=>{n.preventDefault(),t(e.id)}})})]}),(0,h.jsx)(f.Body,{children:(0,h.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Showing `,_.find(t=>t.id===e)?.label.toLowerCase(),` projects.`]})})]})})}var y=e({PageHeaderWithKickerDescriptionActions:()=>b});function b(){return(0,h.jsx)(`div`,{className:`w-full rounded-lg border border-border bg-background`,children:(0,h.jsx)(d,{kicker:`Settings`,title:`Project preferences`,description:`Update project name, default branch, and visibility. Changes apply immediately.`,actions:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{variant:`outline`,size:`sm`,children:`Cancel`}),(0,h.jsxs)(s,{size:`sm`,children:[(0,h.jsx)(r,{}),`Save changes`]})]}),children:(0,h.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`The settings form goes here.`})})})}var x=`import { useState } from "react"
import { Plus } from "lucide-react"
import { Page, PageTabs, ShellBreadcrumbs, type Crumb, type PageTab } from "@kitora/shell"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"

const TRAIL: readonly Crumb[] = [
  { id: "acme", label: "Acme", href: "#acme" },
  { id: "projects", label: "Projects" },
]

const TABS: readonly PageTab[] = [
  { id: "active", label: "Active", count: 12 },
  { id: "archived", label: "Archived", count: 4 },
  { id: "templates", label: "Templates" },
]

export function PageHeaderComposeProjectsHeader() {
  const [tab, setTab] = useState("active")
  return (
    <div className="w-full max-w-2xl rounded-lg border border-border bg-background">
      <Page.Root>
        <Page.Header tabs>
          <Page.Kicker>
            <ShellBreadcrumbs items={TRAIL} onNavigate={(_, e) => e.preventDefault()} />
          </Page.Kicker>
          <Page.Heading
            actions={
              <>
                <Button variant="outline" size="sm">
                  Import
                </Button>
                <Button size="sm">
                  <Plus />
                  New project
                </Button>
              </>
            }
          >
            <Page.Title className="flex flex-wrap items-center gap-2">
              Projects <Badge variant="secondary">12 active</Badge>
            </Page.Title>
            <Page.Description>Everything your team is shipping this quarter.</Page.Description>
          </Page.Heading>
          <div className="mt-2">
            <PageTabs
              tabs={TABS}
              active={tab}
              onSelect={(t, e) => {
                e.preventDefault()
                setTab(t.id)
              }}
            />
          </div>
        </Page.Header>
        <Page.Body>
          <p className="text-[13px] text-muted-foreground">Showing {TABS.find((t) => t.id === tab)?.label.toLowerCase()} projects.</p>
        </Page.Body>
      </Page.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>a(()=>import(`./compose-xgpyH35K.js`),[]));var S=`import { Save } from "lucide-react"
import { ShellPage } from "@kitora/shell"
import { Button } from "@kitora/ui/button"

export function PageHeaderWithKickerDescriptionActions() {
  return (
    <div className="w-full rounded-lg border border-border bg-background">
      <ShellPage
        kicker="Settings"
        title="Project preferences"
        description="Update project name, default branch, and visibility. Changes apply immediately."
        actions={
          <>
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">
              <Save />
              Save changes
            </Button>
          </>
        }
      >
        <p className="text-[13px] text-muted-foreground">The settings form goes here.</p>
      </ShellPage>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>a(()=>import(`./with-kicker-description-actions-CbiOCORP.js`),[]));var C={"./demos/page-header/compose.tsx":p,"./demos/page-header/with-kicker-description-actions.tsx":y},w={"./demos/page-header/compose.tsx":x,"./demos/page-header/with-kicker-description-actions.tsx":S};export{C as modules,w as sources};