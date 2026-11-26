import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n,ti as r}from"./index-q72zUtm9.js";import{t as i}from"./badge-Be8rVEaF.js";import{n as a,t as o}from"./card-WiouR7Ep.js";var s=e({BadgeComposeDeployList:()=>u}),c=n(),l=[{id:`d1`,branch:`main`,status:`Live`,variant:`default`},{id:`d2`,branch:`feat/billing`,status:`Preview`,variant:`secondary`},{id:`d3`,branch:`fix/auth`,status:`Failed`,variant:`destructive`}];function u(){return(0,c.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,c.jsx)(o,{className:`w-full max-w-md py-2`,children:(0,c.jsx)(a,{className:`divide-y divide-border px-3`,children:l.map(e=>(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 py-2`,children:[(0,c.jsx)(`span`,{className:`flex-1 truncate font-mono text-sm`,children:e.branch}),(0,c.jsx)(i,{variant:e.variant,children:e.status}),(0,c.jsx)(r,{size:`xs`,variant:`ghost`,children:`Logs`})]},e.id))})})})}var d=e({BadgeSizes:()=>f});function f(){return(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,c.jsx)(i,{size:`sm`,children:`Small`}),(0,c.jsx)(i,{children:`Medium`}),(0,c.jsx)(i,{size:`lg`,children:`Large`}),(0,c.jsx)(i,{size:`sm`,variant:`outline`,children:`Beta`}),(0,c.jsx)(i,{size:`lg`,variant:`secondary`,children:`v2.4.0`})]})}var p=e({BadgeVariants:()=>m});function m(){return(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,c.jsx)(i,{children:`Default`}),(0,c.jsx)(i,{variant:`secondary`,children:`Secondary`}),(0,c.jsx)(i,{variant:`outline`,children:`Outline`}),(0,c.jsx)(i,{variant:`destructive`,children:`Destructive`})]})}var h=`import { Badge } from "@kitora/ui/badge"
import { Card, CardContent } from "@kitora/ui/card"
import { Button } from "@kitora/ui/button"

const DEPLOYS = [
  { id: "d1", branch: "main", status: "Live", variant: "default" as const },
  { id: "d2", branch: "feat/billing", status: "Preview", variant: "secondary" as const },
  { id: "d3", branch: "fix/auth", status: "Failed", variant: "destructive" as const },
]

export function BadgeComposeDeployList() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-md py-2">
        <CardContent className="divide-y divide-border px-3">
          {DEPLOYS.map((d) => (
            <div key={d.id} className="flex flex-wrap items-center gap-2 py-2">
              <span className="flex-1 truncate font-mono text-sm">{d.branch}</span>
              <Badge variant={d.variant}>{d.status}</Badge>
              <Button size="xs" variant="ghost">
                Logs
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>t(()=>import(`./compose-C2ynrI45.js`),[]));var g=`import { Badge } from "@kitora/ui/badge"

export function BadgeSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge>Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="sm" variant="outline">
        Beta
      </Badge>
      <Badge size="lg" variant="secondary">
        v2.4.0
      </Badge>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>t(()=>import(`./sizes-BV7TcVEk.js`),[]));var _=`import { Badge } from "@kitora/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./variants-D3jWYjEi.js`),[]));var v={"./demos/badge/compose.tsx":s,"./demos/badge/sizes.tsx":d,"./demos/badge/variants.tsx":p},y={"./demos/badge/compose.tsx":h,"./demos/badge/sizes.tsx":g,"./demos/badge/variants.tsx":_};export{v as modules,y as sources};