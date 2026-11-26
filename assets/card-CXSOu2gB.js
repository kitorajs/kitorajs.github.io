import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-Clz4Lth_.js";import{t as n}from"./progress-CDG4ypA_.js";import{Cc as r,Ic as i,ti as a}from"./index-q72zUtm9.js";import{t as o}from"./badge-Be8rVEaF.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./card-WiouR7Ep.js";var p=e({CardComposeUsagePlan:()=>h}),m=i();function h(){return(0,m.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,m.jsxs)(f,{className:`w-full max-w-sm`,children:[(0,m.jsxs)(s,{children:[(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,m.jsx)(u,{children:`Pro plan`}),(0,m.jsx)(o,{children:`Active`})]}),(0,m.jsx)(d,{children:`Renews on Dec 1.`})]}),(0,m.jsxs)(l,{className:`space-y-1.5 text-sm`,children:[(0,m.jsxs)(`div`,{className:`flex justify-between`,children:[(0,m.jsx)(`span`,{className:`text-muted-foreground`,children:`Build minutes`}),(0,m.jsx)(`span`,{className:`tabular-nums`,children:`720 / 1,000`})]}),(0,m.jsx)(n,{value:72,"aria-label":`Build minutes used`})]}),(0,m.jsxs)(c,{className:`flex flex-wrap gap-2`,children:[(0,m.jsx)(a,{size:`sm`,children:`Upgrade`}),(0,m.jsx)(a,{size:`sm`,variant:`ghost`,children:`Billing`})]})]})})}var g=e({CardLinkAndVariants:()=>_});function _(){return(0,m.jsxs)(`div`,{className:`grid w-full max-w-3xl gap-4 sm:grid-cols-3`,children:[(0,m.jsx)(f,{interactive:!0,render:e=>(0,m.jsx)(`a`,{href:`#billing`,...e,children:e.children}),children:(0,m.jsxs)(s,{children:[(0,m.jsx)(u,{render:e=>(0,m.jsx)(`h3`,{...e,children:e.children}),children:`Billing`}),(0,m.jsx)(d,{children:`The whole card is a link: hover and focus it.`})]})}),(0,m.jsx)(f,{variant:`elevated`,children:(0,m.jsxs)(s,{children:[(0,m.jsx)(u,{render:e=>(0,m.jsx)(`h3`,{...e,children:e.children}),children:`Elevated`}),(0,m.jsx)(d,{children:`A soft shadow lifts it off the page.`})]})}),(0,m.jsxs)(f,{variant:`ghost`,children:[(0,m.jsxs)(s,{children:[(0,m.jsx)(u,{render:e=>(0,m.jsx)(`h3`,{...e,children:e.children}),children:`Ghost`}),(0,m.jsx)(d,{children:`No fill, edge or shadow.`})]}),(0,m.jsx)(l,{className:`text-muted-foreground`,children:`Groups its parts only.`})]})]})}var v=e({CardWithHeaderFooter:()=>y});function y(){return(0,m.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,m.jsxs)(f,{className:`w-full max-w-sm`,children:[(0,m.jsxs)(s,{children:[(0,m.jsx)(u,{children:`Notifications`}),(0,m.jsx)(d,{children:`Manage how you get pinged.`})]}),(0,m.jsxs)(l,{className:`space-y-3 text-sm`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-muted-foreground`,children:`Email`}),(0,m.jsx)(t,{defaultChecked:!0,"aria-label":`Email notifications`})]}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-muted-foreground`,children:`Slack`}),(0,m.jsx)(t,{"aria-label":`Slack notifications`})]})]}),(0,m.jsx)(c,{children:(0,m.jsx)(a,{className:`w-full`,children:`Save`})})]})})}var b=`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Progress } from "@kitora/ui/progress"

export function CardComposeUsagePlan() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle>Pro plan</CardTitle>
            <Badge>Active</Badge>
          </div>
          <CardDescription>Renews on Dec 1.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Build minutes</span>
            <span className="tabular-nums">720 / 1,000</span>
          </div>
          <Progress value={72} aria-label="Build minutes used" />
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button size="sm">Upgrade</Button>
          <Button size="sm" variant="ghost">
            Billing
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>r(()=>import(`./compose-BjhhXaKi.js`),[]));var x=`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"

export function CardLinkAndVariants() {
  return (
    <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
      <Card interactive render={(props) => <a href="#billing" {...props}>{props.children}</a>}>
        <CardHeader>
          <CardTitle render={(props) => <h3 {...props}>{props.children}</h3>}>Billing</CardTitle>
          <CardDescription>The whole card is a link: hover and focus it.</CardDescription>
        </CardHeader>
      </Card>
      <Card variant="elevated">
        <CardHeader>
          <CardTitle render={(props) => <h3 {...props}>{props.children}</h3>}>Elevated</CardTitle>
          <CardDescription>A soft shadow lifts it off the page.</CardDescription>
        </CardHeader>
      </Card>
      <Card variant="ghost">
        <CardHeader>
          <CardTitle render={(props) => <h3 {...props}>{props.children}</h3>}>Ghost</CardTitle>
          <CardDescription>No fill, edge or shadow.</CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground">Groups its parts only.</CardContent>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./link-and-variants-Djf75KYv.js`),[]));var S=`import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Switch } from "@kitora/ui/switch"

export function CardWithHeaderFooter() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage how you get pinged.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Email</span>
            <Switch defaultChecked aria-label="Email notifications" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Slack</span>
            <Switch aria-label="Slack notifications" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>r(()=>import(`./with-header-footer-CJW-Bl5k.js`),[]));var C={"./demos/card/compose.tsx":p,"./demos/card/link-and-variants.tsx":g,"./demos/card/with-header-footer.tsx":v},w={"./demos/card/compose.tsx":b,"./demos/card/link-and-variants.tsx":x,"./demos/card/with-header-footer.tsx":S};export{C as modules,w as sources};