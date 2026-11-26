import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-q72zUtm9.js";import{t as o}from"./badge-Be8rVEaF.js";import{n as s,t as c}from"./card-WiouR7Ep.js";import{t as l}from"./separator-DbMx24vO.js";import{n as u,r as d,t as f}from"./link-7QG8tT9M.js";var p=e({LinkClickableCard:()=>g}),m=t(n(),1),h=i();function g(){let[e,t]=(0,m.useState)(0);return(0,h.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-2`,children:[(0,h.jsx)(u,{render:(0,h.jsx)(c,{className:`transition-shadow hover:ring-foreground/25`}),children:(0,h.jsxs)(s,{className:`flex flex-col gap-3`,children:[(0,h.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,h.jsx)(`h3`,{className:`text-sm font-medium`,children:(0,h.jsx)(d,{href:`#atlas`,children:`Atlas redesign`})}),(0,h.jsx)(o,{variant:`secondary`,children:`Active`})]}),(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:`Shipped to twelve teams last quarter. Click anywhere on the card to open it; the tag link and the button keep their own clicks.`}),(0,h.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,h.jsx)(f,{href:`#design-tag`,className:`text-[13px]`,children:`#design`}),(0,h.jsx)(a,{size:`sm`,variant:`outline`,onClick:()=>t(e=>e+1),children:`Archive`})]})]})}),(0,h.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Archive pressed `,e,`×. Tab: the card link first, then the tag link, then the button; the ring is drawn around the whole card.`]})]})}var _=e({LinkComposeHelpCard:()=>v});function v(){return(0,h.jsx)(c,{className:`w-full max-w-sm`,children:(0,h.jsxs)(s,{className:`flex flex-col gap-3 text-sm`,children:[(0,h.jsx)(`p`,{className:`font-medium`,children:`Need help with the import?`}),(0,h.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Check the `,(0,h.jsx)(f,{href:`#csv-format`,children:`CSV format`}),` or ask in the `,(0,h.jsx)(f,{href:`https://github.com/`,external:!0,children:`discussions`}),`.`]}),(0,h.jsx)(l,{}),(0,h.jsxs)(`div`,{className:`flex gap-4 text-[13px]`,children:[(0,h.jsx)(f,{href:`#docs`,underline:`none`,children:`Docs`}),(0,h.jsx)(f,{href:`#status`,underline:`none`,children:`Status`}),(0,h.jsx)(f,{href:`#contact`,underline:`none`,children:`Contact`})]})]})})}var y=e({LinkDefault:()=>b});function b(){return(0,h.jsxs)(`div`,{className:`flex flex-col items-start gap-3 text-sm`,children:[(0,h.jsxs)(`p`,{children:[`Read the `,(0,h.jsx)(f,{href:`#guide`,children:`setup guide`}),` before you start (underline on hover).`]}),(0,h.jsxs)(`p`,{children:[`Inside dense prose, `,(0,h.jsx)(f,{href:`#terms`,underline:`always`,children:`always underline`}),` so the link is found without colour.`]}),(0,h.jsxs)(`p`,{children:[`In a nav row, `,(0,h.jsx)(f,{href:`#home`,underline:`none`,children:`no underline`}),` at all.`]}),(0,h.jsxs)(`p`,{children:[`Hosted on `,(0,h.jsx)(f,{href:`https://github.com/`,external:!0,children:`GitHub`}),`: opens a new tab, with an icon and announced text.`]})]})}var x=e({LinkRouterAndButton:()=>C});function S({to:e,children:t,...n}){return(0,h.jsx)(`a`,{href:`#${e}`,...n,children:t})}function C(){let[e,t]=(0,m.useState)(0);return(0,h.jsxs)(`div`,{className:`flex flex-col items-start gap-3 text-sm`,children:[(0,h.jsxs)(`p`,{children:[`Go to `,(0,h.jsx)(f,{render:(0,h.jsx)(S,{to:`/settings/billing`}),children:`billing settings`})," (a router link through `render`)."]}),(0,h.jsxs)(`p`,{children:[`Did not get the email?`,` `,(0,h.jsx)(f,{render:(0,h.jsx)(`button`,{type:`button`}),onClick:()=>t(e=>e+1),children:`Resend it`}),e>0?(0,h.jsxs)(`span`,{className:`text-muted-foreground`,children:[` · sent `,e,`×`]}):null]}),(0,h.jsxs)(`p`,{children:[(0,h.jsx)(f,{render:(0,h.jsx)(`button`,{type:`button`,disabled:!0}),children:`Resend in 30s`}),` (a disabled button)`]})]})}var w=e({LinkRouterAndExternal:()=>E});function T({to:e,children:t,...n}){return(0,h.jsx)(`a`,{href:`#${e}`,...n,children:t})}function E(){return(0,h.jsxs)(`div`,{className:`grid w-full max-w-xl gap-3 sm:grid-cols-2`,children:[(0,h.jsxs)(u,{className:`flex flex-col gap-1 rounded-lg border p-4 text-sm hover:bg-muted/50`,children:[(0,h.jsx)(`h3`,{className:`font-medium`,children:(0,h.jsx)(d,{render:(0,h.jsx)(T,{to:`/settings/billing`}),children:`Billing settings`})}),(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:"A router link through `render`: client-side navigation, the whole card is the target."})]}),(0,h.jsxs)(u,{className:`flex flex-col gap-1 rounded-lg border p-4 text-sm hover:bg-muted/50`,children:[(0,h.jsx)(`h3`,{className:`font-medium`,children:(0,h.jsx)(d,{href:`https://github.com/`,external:!0,children:`Open the repository`})}),(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:"`external` opens a new tab with a safe `rel`, an icon and announced text."})]})]})}var D=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Card, CardContent } from "@kitora/ui/card"
import { Link, LinkBox, LinkOverlay } from "@kitora/ui/link"

export function LinkClickableCard() {
  const [archived, setArchived] = useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <LinkBox render={<Card className="transition-shadow hover:ring-foreground/25" />}>
        <CardContent className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-medium">
              <LinkOverlay href="#atlas">Atlas redesign</LinkOverlay>
            </h3>
            <Badge variant="secondary">Active</Badge>
          </div>
          <p className="text-muted-foreground">
            Shipped to twelve teams last quarter. Click anywhere on the card to open it; the tag link and the button keep their own clicks.
          </p>
          <div className="flex items-center justify-between gap-2">
            <Link href="#design-tag" className="text-[13px]">
              #design
            </Link>
            <Button size="sm" variant="outline" onClick={() => setArchived((n) => n + 1)}>
              Archive
            </Button>
          </div>
        </CardContent>
      </LinkBox>
      <p className="text-xs text-muted-foreground">Archive pressed {archived}×. Tab: the card link first, then the tag link, then the button; the ring is drawn around the whole card.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>r(()=>import(`./clickable-card-C5Yzoh4S.js`),[]));var O=`import { Card, CardContent } from "@kitora/ui/card"
import { Link } from "@kitora/ui/link"
import { Separator } from "@kitora/ui/separator"

export function LinkComposeHelpCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="flex flex-col gap-3 text-sm">
        <p className="font-medium">Need help with the import?</p>
        <p className="text-muted-foreground">
          Check the <Link href="#csv-format">CSV format</Link> or ask in the <Link href="https://github.com/" external>discussions</Link>.
        </p>
        <Separator />
        <div className="flex gap-4 text-[13px]">
          <Link href="#docs" underline="none">
            Docs
          </Link>
          <Link href="#status" underline="none">
            Status
          </Link>
          <Link href="#contact" underline="none">
            Contact
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>r(()=>import(`./compose-C_J6q-M4.js`),[]));var k=`import { Link } from "@kitora/ui/link"

export function LinkDefault() {
  return (
    <div className="flex flex-col items-start gap-3 text-sm">
      <p>
        Read the <Link href="#guide">setup guide</Link> before you start (underline on hover).
      </p>
      <p>
        Inside dense prose, <Link href="#terms" underline="always">always underline</Link> so the link is found without colour.
      </p>
      <p>
        In a nav row, <Link href="#home" underline="none">no underline</Link> at all.
      </p>
      <p>
        Hosted on <Link href="https://github.com/" external>GitHub</Link>: opens a new tab, with an icon and announced text.
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>r(()=>import(`./default-BebLQk0d.js`),[]));var A=`import { useState, type ComponentProps } from "react"
import { Link } from "@kitora/ui/link"

function RouterLink({ to, children, ...props }: ComponentProps<"a"> & { to: string }) {
  return (
    <a href={\`#\${to}\`} {...props}>
      {children}
    </a>
  )
}

export function LinkRouterAndButton() {
  const [sent, setSent] = useState(0)

  return (
    <div className="flex flex-col items-start gap-3 text-sm">
      <p>
        Go to <Link render={<RouterLink to="/settings/billing" />}>billing settings</Link> (a router link through \`render\`).
      </p>
      <p>
        Did not get the email?{" "}
        <Link render={<button type="button" />} onClick={() => setSent((n) => n + 1)}>
          Resend it
        </Link>
        {sent > 0 ? <span className="text-muted-foreground"> · sent {sent}×</span> : null}
      </p>
      <p>
        <Link render={<button type="button" disabled />}>Resend in 30s</Link> (a disabled button)
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./router-and-button-I1X65G_R.js`),[]));var j=`import type { ComponentProps } from "react"
import { LinkBox, LinkOverlay } from "@kitora/ui/link"

function RouterLink({ to, children, ...props }: ComponentProps<"a"> & { to: string }) {
  return (
    <a href={\`#\${to}\`} {...props}>
      {children}
    </a>
  )
}

export function LinkRouterAndExternal() {
  return (
    <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
      <LinkBox className="flex flex-col gap-1 rounded-lg border p-4 text-sm hover:bg-muted/50">
        <h3 className="font-medium">
          <LinkOverlay render={<RouterLink to="/settings/billing" />}>Billing settings</LinkOverlay>
        </h3>
        <p className="text-muted-foreground">A router link through \`render\`: client-side navigation, the whole card is the target.</p>
      </LinkBox>
      <LinkBox className="flex flex-col gap-1 rounded-lg border p-4 text-sm hover:bg-muted/50">
        <h3 className="font-medium">
          <LinkOverlay href="https://github.com/" external>
            Open the repository
          </LinkOverlay>
        </h3>
        <p className="text-muted-foreground">\`external\` opens a new tab with a safe \`rel\`, an icon and announced text.</p>
      </LinkBox>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>r(()=>import(`./router-and-external-Bf5yyrpg.js`),[]));var M={"./demos/link/clickable-card.tsx":p,"./demos/link/compose.tsx":_,"./demos/link/default.tsx":y,"./demos/link/router-and-button.tsx":x,"./demos/link/router-and-external.tsx":w},N={"./demos/link/clickable-card.tsx":D,"./demos/link/compose.tsx":O,"./demos/link/default.tsx":k,"./demos/link/router-and-button.tsx":A,"./demos/link/router-and-external.tsx":j};export{M as modules,N as sources};