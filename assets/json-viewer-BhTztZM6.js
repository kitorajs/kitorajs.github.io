import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n}from"./index-B9ukmIN1.js";import{t as r}from"./badge-uhFB8J9R.js";import{a as i,n as a,o,r as s,t as c}from"./card-B_Tor3B1.js";import{t as l}from"./json-viewer-hRIfxd4t.js";var u=e({JsonViewerCollapsibleNodes:()=>p}),d=n(),f={user:{id:`u-alex`,name:`Alex Kim`,email:`alex@example.com`},session:{token:`tok_abc123`,expires:`2026-12-31T23:59:59Z`,ip:`203.0.113.42`},roles:[`admin`,`maintainer`],mfa:!0};function p(){return(0,d.jsx)(l,{value:f,rootName:`session`,className:`w-full max-w-md`})}var m=e({JsonViewerComposeWebhookEvent:()=>g}),h={event:`invoice.paid`,id:`evt_9f2a`,data:{amount:1200,currency:`usd`,customer:{id:`cus_42`,email:`ada@example.com`}},livemode:!1};function g(){return(0,d.jsxs)(c,{className:`w-full max-w-md`,children:[(0,d.jsxs)(i,{children:[(0,d.jsxs)(o,{className:`flex flex-wrap items-center gap-2`,children:[`invoice.paid`,(0,d.jsx)(r,{variant:`secondary`,children:`200 OK`})]}),(0,d.jsx)(s,{children:`Delivered 2 minutes ago`})]}),(0,d.jsx)(a,{className:`overflow-x-auto`,children:(0,d.jsx)(l,{value:h,rootName:`payload`,toolbar:!1})})]})}var _=`import { JsonViewer } from "@kitora/display"

const SESSION = {
  user: { id: "u-alex", name: "Alex Kim", email: "alex@example.com" },
  session: {
    token: "tok_abc123",
    expires: "2026-12-31T23:59:59Z",
    ip: "203.0.113.42",
  },
  roles: ["admin", "maintainer"],
  mfa: true,
}

export function JsonViewerCollapsibleNodes() {
  return <JsonViewer value={SESSION} rootName="session" className="w-full max-w-md" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./collapsible-nodes-TRnsLxzH.js`),[]));var v=`import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { JsonViewer } from "@kitora/display"

const payload = {
  event: "invoice.paid",
  id: "evt_9f2a",
  data: { amount: 1200, currency: "usd", customer: { id: "cus_42", email: "ada@example.com" } },
  livemode: false,
}

export function JsonViewerComposeWebhookEvent() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex flex-wrap items-center gap-2">
          invoice.paid
          <Badge variant="secondary">200 OK</Badge>
        </CardTitle>
        <CardDescription>Delivered 2 minutes ago</CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <JsonViewer value={payload} rootName="payload" toolbar={false} />
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>t(()=>import(`./compose-DFz_5UKp.js`),[]));var y={"./demos/json-viewer/collapsible-nodes.tsx":u,"./demos/json-viewer/compose.tsx":m},b={"./demos/json-viewer/collapsible-nodes.tsx":_,"./demos/json-viewer/compose.tsx":v};export{y as modules,b as sources};