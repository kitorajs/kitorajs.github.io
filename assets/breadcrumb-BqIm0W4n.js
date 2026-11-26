import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./share-2-CIRrfyN2.js";import{Bc as r,Cc as i,Ic as a,ti as o}from"./index-9y5uwRd3.js";import{n as s,t as c}from"./breadcrumbs-D9HZluIH.js";import{t as l}from"./separator-CJFdFqN7.js";var u=e({BreadcrumbComposePageHeader:()=>f}),d=a();function f(){return(0,d.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,d.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,d.jsxs)(c.Root,{children:[(0,d.jsx)(c.Item,{children:(0,d.jsx)(c.Link,{href:`#projects`,children:`Projects`})}),(0,d.jsx)(c.Separator,{}),(0,d.jsx)(c.Item,{children:(0,d.jsx)(c.Page,{children:`acme-web`})})]}),(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,d.jsx)(`h2`,{className:`text-lg font-semibold`,children:`acme-web`}),(0,d.jsxs)(`div`,{className:`flex gap-2`,children:[(0,d.jsx)(o,{size:`icon-sm`,variant:`outline`,"aria-label":`Share project`,children:(0,d.jsx)(n,{})}),(0,d.jsx)(o,{size:`sm`,children:`Deploy`})]})]}),(0,d.jsx)(l,{})]})})}var p=e({BreadcrumbDefault:()=>_}),m=t(r(),1),h=[{id:`workspaces`,label:`Workspaces`,href:`#workspaces`},{id:`kitora`,label:`Kitora`,href:`#kitora`},{id:`settings`,label:`Settings`}],g=[{id:`acme`,label:`Acme`,href:`#acme`},{id:`eng`,label:`Engineering`,href:`#eng`},{id:`platform`,label:`Platform`,href:`#platform`},{id:`api`,label:`API gateway`,href:`#api`},{id:`rfc`,label:`RFC 112: rate limits`}];function _(){let[e,t]=(0,m.useState)(`nothing yet`);return(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-3 text-[13px]`,children:[(0,d.jsx)(s,{items:h,onNavigate:(e,n)=>{n.preventDefault(),t(e.label)}}),(0,d.jsx)(s,{items:g,max:3,onNavigate:(e,n)=>{n.preventDefault(),t(e.label)}}),(0,d.jsxs)(`span`,{role:`status`,className:`text-muted-foreground`,children:[`Last clicked: `,e]})]})}var v=`import { Share2 } from "lucide-react"
import { Breadcrumbs } from "@kitora/shell"
import { Button } from "@kitora/ui/button"
import { Separator } from "@kitora/ui/separator"

export function BreadcrumbComposePageHeader() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="w-full max-w-md space-y-2">
        <Breadcrumbs.Root>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#projects">Projects</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>
            <Breadcrumbs.Page>acme-web</Breadcrumbs.Page>
          </Breadcrumbs.Item>
        </Breadcrumbs.Root>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">acme-web</h2>
          <div className="flex gap-2">
            <Button size="icon-sm" variant="outline" aria-label="Share project">
              <Share2 />
            </Button>
            <Button size="sm">Deploy</Button>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./compose-TXosudF-.js`),[]));var y=`import { useState } from "react"
import { ShellBreadcrumbs, type Crumb } from "@kitora/shell"

const TRAIL: readonly Crumb[] = [
  { id: "workspaces", label: "Workspaces", href: "#workspaces" },
  { id: "kitora", label: "Kitora", href: "#kitora" },
  { id: "settings", label: "Settings" },
]

const LONG_TRAIL: readonly Crumb[] = [
  { id: "acme", label: "Acme", href: "#acme" },
  { id: "eng", label: "Engineering", href: "#eng" },
  { id: "platform", label: "Platform", href: "#platform" },
  { id: "api", label: "API gateway", href: "#api" },
  { id: "rfc", label: "RFC 112: rate limits" },
]

export function BreadcrumbDefault() {
  const [last, setLast] = useState("nothing yet")
  return (
    <div className="flex flex-col items-center gap-3 text-[13px]">
      <ShellBreadcrumbs
        items={TRAIL}
        onNavigate={(crumb, e) => {
          e.preventDefault()
          setLast(crumb.label)
        }}
      />
      <ShellBreadcrumbs
        items={LONG_TRAIL}
        max={3}
        onNavigate={(crumb, e) => {
          e.preventDefault()
          setLast(crumb.label)
        }}
      />
      <span role="status" className="text-muted-foreground">
        Last clicked: {last}
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>i(()=>import(`./default-DFaLCyVJ.js`),[]));var b={"./demos/breadcrumb/compose.tsx":u,"./demos/breadcrumb/default.tsx":p},x={"./demos/breadcrumb/compose.tsx":v,"./demos/breadcrumb/default.tsx":y};export{b as modules,x as sources};