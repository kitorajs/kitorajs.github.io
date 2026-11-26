import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./calendar-B4FHCcg0.js";import{t as r}from"./house-qKU6DYL7.js";import{t as i}from"./inbox-CG0KJAIy.js";import{t as a}from"./plus-DS8FiCg5.js";import{t as o}from"./search-D4xjEJsY.js";import{t as s}from"./user-BhLzwaGb.js";import{Bc as c,Cc as l,Ic as u}from"./index-B9ukmIN1.js";import{t as d}from"./badge-uhFB8J9R.js";import{t as f}from"./float-button-CFXM78tr.js";import{n as p}from"./bottom-nav-DHg3gmwl.js";var m=e({BottomNavCompose:()=>y}),h=t(c(),1),g=u(),_=[{id:`home`,href:`#bottom-nav-home`,icon:(0,g.jsx)(r,{}),label:`Home`},{id:`inbox`,href:`#bottom-nav-inbox`,icon:(0,g.jsx)(i,{}),label:`Inbox`},{id:`profile`,href:`#bottom-nav-profile`,icon:(0,g.jsx)(s,{}),label:`Profile`}],v=73;function y(){let[e,t]=(0,h.useState)(1);return(0,g.jsxs)(`div`,{className:`relative h-96 w-full max-w-[22rem] overflow-hidden rounded-[1.5rem] border border-border bg-background`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2 px-4 pt-5 text-[15px] font-semibold`,children:[`Inbox `,(0,g.jsxs)(d,{variant:`secondary`,children:[e,` drafts`]})]}),(0,g.jsx)(f,{icon:(0,g.jsx)(a,{}),label:`New draft`,withinPortal:!1,affixClassName:`absolute`,offset:v,onClick:()=>t(e=>e+1)}),(0,g.jsx)(`div`,{className:`absolute inset-x-0 bottom-0`,children:(0,g.jsx)(p,{items:_,location:`#bottom-nav-inbox`})})]})}var b=e({BottomNavDefault:()=>S}),x=[{id:`home`,href:`/`,icon:(0,g.jsx)(r,{}),label:`Home`},{id:`inbox`,href:`/inbox`,icon:(0,g.jsx)(i,{}),label:`Inbox`,badge:3,badgeLabel:`3 unread`},{id:`search`,href:`/search`,icon:(0,g.jsx)(o,{}),label:`Search`},{id:`profile`,href:`/profile`,icon:(0,g.jsx)(s,{}),label:`Profile`,badge:!0,badgeLabel:`Finish your profile`}];function S(){let[e,t]=(0,h.useState)(`/inbox`);return(0,g.jsxs)(`div`,{className:`w-full max-w-sm overflow-hidden rounded-xl border border-border`,children:[(0,g.jsxs)(`div`,{className:`px-4 py-6 text-[13px] text-muted-foreground`,children:[`Current: `,(0,g.jsx)(`span`,{"data-demo-value":`bottom-nav`,children:e})]}),(0,g.jsx)(p,{items:x,location:e,renderLink:({href:e,children:n,...r})=>(0,g.jsx)(`a`,{...r,href:e,onClick:n=>{n.preventDefault(),t(e)},children:n})})]})}var C=e({BottomNavLabelsAndScroll:()=>E}),w=[{id:`home`,href:`#home`,icon:(0,g.jsx)(r,{}),label:`Home`},{id:`inbox`,href:`#inbox`,icon:(0,g.jsx)(i,{}),label:`Inbox`},{id:`calendar`,href:`#calendar`,icon:(0,g.jsx)(n,{}),label:`Calendar`},{id:`search`,href:`#search`,icon:(0,g.jsx)(o,{}),label:`Search`},{id:`profile`,href:`#profile`,icon:(0,g.jsx)(s,{}),label:`Profile`}],T=Array.from({length:30},(e,t)=>`Message ${t+1}`);function E(){let e=(0,h.useRef)(null);return(0,g.jsxs)(`div`,{className:`relative h-80 w-full max-w-sm overflow-hidden rounded-xl border border-border`,children:[(0,g.jsx)(`div`,{ref:e,tabIndex:0,role:`region`,"aria-label":`Messages`,className:`h-full overflow-y-auto pb-16 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,children:T.map(e=>(0,g.jsx)(`p`,{className:`border-b border-border px-4 py-3 text-[13px]`,children:e},e))}),(0,g.jsx)(`div`,{className:`absolute inset-x-0 bottom-0`,children:(0,g.jsx)(p,{items:w,location:`#inbox`,labels:`active`,hideOnScroll:!0,scrollTarget:()=>e.current})})]})}var D=`import { HomeIcon, InboxIcon, PlusIcon, UserIcon } from "lucide-react"
import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { FloatButton } from "@kitora/ui/float-button"
import { ShellBottomNav, type ShellBottomNavItem } from "@kitora/shell"

const ITEMS: readonly ShellBottomNavItem[] = [
  { id: "home", href: "#bottom-nav-home", icon: <HomeIcon />, label: "Home" },
  { id: "inbox", href: "#bottom-nav-inbox", icon: <InboxIcon />, label: "Inbox" },
  { id: "profile", href: "#bottom-nav-profile", icon: <UserIcon />, label: "Profile" },
]

/** The bar's height (57px) plus the FloatButton's usual 16px gap: the button sits above the bar, never on it. */
const ABOVE_BAR = 57 + 16

// A phone screen: a list with a Badge, a FloatButton that clears the bottom nav by its offset, and the bar itself.
export function BottomNavCompose() {
  const [drafts, setDrafts] = useState(1)
  return (
    <div className="relative h-96 w-full max-w-[22rem] overflow-hidden rounded-[1.5rem] border border-border bg-background">
      <div className="flex items-center gap-2 px-4 pt-5 text-[15px] font-semibold">
        Inbox <Badge variant="secondary">{drafts} drafts</Badge>
      </div>
      <FloatButton icon={<PlusIcon />} label="New draft" withinPortal={false} affixClassName="absolute" offset={ABOVE_BAR} onClick={() => setDrafts((n) => n + 1)} />
      <div className="absolute inset-x-0 bottom-0">
        <ShellBottomNav items={ITEMS} location="#bottom-nav-inbox" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>l(()=>import(`./compose-HVwyHzxg.js`),[]));var O=`import { HomeIcon, InboxIcon, SearchIcon, UserIcon } from "lucide-react"
import { useState } from "react"
import { ShellBottomNav, type ShellBottomNavItem } from "@kitora/shell"

const ITEMS: readonly ShellBottomNavItem[] = [
  { id: "home", href: "/", icon: <HomeIcon />, label: "Home" },
  { id: "inbox", href: "/inbox", icon: <InboxIcon />, label: "Inbox", badge: 3, badgeLabel: "3 unread" },
  { id: "search", href: "/search", icon: <SearchIcon />, label: "Search" },
  { id: "profile", href: "/profile", icon: <UserIcon />, label: "Profile", badge: true, badgeLabel: "Finish your profile" },
]

// Four destinations as links. The current one (\`location\`) has aria-current="page", the brand colour and a pill behind its icon;
// badges are read by their labels. \`renderLink\` is where a router's link goes; here it keeps the demo on this page.
export function BottomNavDefault() {
  const [location, setLocation] = useState("/inbox")
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-border">
      <div className="px-4 py-6 text-[13px] text-muted-foreground">
        Current: <span data-demo-value="bottom-nav">{location}</span>
      </div>
      <ShellBottomNav
        items={ITEMS}
        location={location}
        renderLink={({ href, children, ...props }) => (
          <a
            {...props}
            href={href}
            onClick={(event) => {
              event.preventDefault()
              setLocation(href)
            }}
          >
            {children}
          </a>
        )}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>l(()=>import(`./default-uQTPP5wZ.js`),[]));var k=`import { CalendarIcon, HomeIcon, InboxIcon, SearchIcon, UserIcon } from "lucide-react"
import { useRef } from "react"
import { ShellBottomNav, type ShellBottomNavItem } from "@kitora/shell"

const ITEMS: readonly ShellBottomNavItem[] = [
  { id: "home", href: "#home", icon: <HomeIcon />, label: "Home" },
  { id: "inbox", href: "#inbox", icon: <InboxIcon />, label: "Inbox" },
  { id: "calendar", href: "#calendar", icon: <CalendarIcon />, label: "Calendar" },
  { id: "search", href: "#search", icon: <SearchIcon />, label: "Search" },
  { id: "profile", href: "#profile", icon: <UserIcon />, label: "Profile" },
]

const ROWS = Array.from({ length: 30 }, (_, i) => \`Message \${i + 1}\`)

// Five destinations, \`labels="active"\` (only the current label drawn; every label is still read), and \`hideOnScroll\`: scroll the list
// down and the bar slides away, scroll up (or reach the end, or Tab into it) and it comes back. Reduced motion shows and hides it at once.
export function BottomNavLabelsAndScroll() {
  const scroller = useRef<HTMLDivElement>(null)
  return (
    <div className="relative h-80 w-full max-w-sm overflow-hidden rounded-xl border border-border">
      <div ref={scroller} tabIndex={0} role="region" aria-label="Messages" className="h-full overflow-y-auto pb-16 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
        {ROWS.map((row) => (
          <p key={row} className="border-b border-border px-4 py-3 text-[13px]">
            {row}
          </p>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <ShellBottomNav items={ITEMS} location="#inbox" labels="active" hideOnScroll scrollTarget={() => scroller.current} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>l(()=>import(`./labels-and-scroll-Byjq_Mxx.js`),[]));var A={"./demos/bottom-nav/compose.tsx":m,"./demos/bottom-nav/default.tsx":b,"./demos/bottom-nav/labels-and-scroll.tsx":C},j={"./demos/bottom-nav/compose.tsx":D,"./demos/bottom-nav/default.tsx":O,"./demos/bottom-nav/labels-and-scroll.tsx":k};export{A as modules,j as sources};