import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./avatar-DegXKoDd.js";import{n as i,s as a}from"./inbox-jJ9cvERE.js";import{Bc as o,Cc as s,Cn as c,Ic as l}from"./index-q72zUtm9.js";import{t as u}from"./separator-DbMx24vO.js";var d=e({NotificationCenterBellPopoverList:()=>h}),f=t(o(),1),p=l(),m=6e4;function h(){let[e]=(0,f.useState)(()=>{let e=Date.now();return a([{id:`1`,title:`Grace H commented on Migration plan`,group:`mentions`,actor:`Grace H`,createdAt:e-2*m,read:!1},{id:`2`,title:`Alex Kim merged #412: auth refactor`,group:`activity`,actor:`Alex Kim`,tone:`success`,createdAt:e-14*m,read:!1},{id:`3`,title:`Linus T requested review on rate-limit spec`,group:`mentions`,actor:`Linus T`,createdAt:e-60*m,read:!0}])});return(0,p.jsx)(c,{children:(0,p.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,p.jsx)(i,{store:e,groups:[{id:`mentions`,label:`Mentions`},{id:`activity`,label:`Activity`}]})})})}var g=e({NotificationCenterComposeAppTopBar:()=>v}),_=6e4;function v(){let[e]=(0,f.useState)(()=>{let e=Date.now();return a([{id:`1`,title:`Priya Shah commented on Q3 roadmap`,group:`mentions`,actor:`Priya Shah`,createdAt:e-2*_,read:!1},{id:`2`,title:`Leo Park assigned you Fix login bug`,group:`assigned`,actor:`Leo Park`,createdAt:e-60*_,read:!1},{id:`3`,title:`Ana Ruiz shared Brand kit`,group:`shared`,actor:`Ana Ruiz`,createdAt:e-1440*_,read:!0}])});return(0,p.jsxs)(`header`,{className:`flex w-full max-w-md flex-wrap items-center gap-3 rounded-lg border border-border bg-card px-3 py-2`,children:[(0,p.jsx)(`span`,{className:`text-sm font-semibold`,children:`Acme`}),(0,p.jsx)(u,{orientation:`vertical`,className:`h-5`}),(0,p.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`Dashboard`}),(0,p.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,p.jsx)(c,{children:(0,p.jsx)(i,{store:e})}),(0,p.jsx)(r,{className:`size-7`,children:(0,p.jsx)(n,{children:`AB`})})]})]})}var y=`import { useState } from "react"
import { createInboxStore, NotificationBell } from "@kitora/feedback"
import { EnsureOverlayUi } from "@kitora/overlay"

const MIN = 60_000

export function NotificationCenterBellPopoverList() {
  // The inbox is a store the app fills (from a socket, a poll, a server render).
  const [inbox] = useState(() => {
    const now = Date.now()
    return createInboxStore([
      { id: "1", title: "Grace H commented on Migration plan", group: "mentions", actor: "Grace H", createdAt: now - 2 * MIN, read: false },
      { id: "2", title: "Alex Kim merged #412: auth refactor", group: "activity", actor: "Alex Kim", tone: "success", createdAt: now - 14 * MIN, read: false },
      { id: "3", title: "Linus T requested review on rate-limit spec", group: "mentions", actor: "Linus T", createdAt: now - 60 * MIN, read: true },
    ])
  })
  return (
    // the bell's panel is an overlay-kit Popover: EnsureOverlayUi mounts the stack when the app root has not
    <EnsureOverlayUi>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <NotificationBell store={inbox} groups={[{ id: "mentions", label: "Mentions" }, { id: "activity", label: "Activity" }]} />
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>s(()=>import(`./bell-popover-list-AVjKj5NJ.js`),[]));var b=`import { useState } from "react"
import { createInboxStore, NotificationBell } from "@kitora/feedback"
import { EnsureOverlayUi } from "@kitora/overlay"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Separator } from "@kitora/ui/separator"

const MIN = 60_000

export function NotificationCenterComposeAppTopBar() {
  const [inbox] = useState(() => {
    const now = Date.now()
    return createInboxStore([
      { id: "1", title: "Priya Shah commented on Q3 roadmap", group: "mentions", actor: "Priya Shah", createdAt: now - 2 * MIN, read: false },
      { id: "2", title: "Leo Park assigned you Fix login bug", group: "assigned", actor: "Leo Park", createdAt: now - 60 * MIN, read: false },
      { id: "3", title: "Ana Ruiz shared Brand kit", group: "shared", actor: "Ana Ruiz", createdAt: now - 24 * 60 * MIN, read: true },
    ])
  })
  return (
    <header className="flex w-full max-w-md flex-wrap items-center gap-3 rounded-lg border border-border bg-card px-3 py-2">
      <span className="text-sm font-semibold">Acme</span>
      <Separator orientation="vertical" className="h-5" />
      <span className="text-sm text-muted-foreground">Dashboard</span>
      <div className="ml-auto flex items-center gap-2">
        <EnsureOverlayUi>
          <NotificationBell store={inbox} />
        </EnsureOverlayUi>
        <Avatar className="size-7">
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>s(()=>import(`./compose-Df0rLxQZ.js`),[]));var x={"./demos/notification-center/bell-popover-list.tsx":d,"./demos/notification-center/compose.tsx":g},S={"./demos/notification-center/bell-popover-list.tsx":y,"./demos/notification-center/compose.tsx":b};export{x as modules,S as sources};