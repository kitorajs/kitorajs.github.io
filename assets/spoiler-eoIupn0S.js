import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,n as r}from"./collapsible-Eke8HmKG.js";import{t as i}from"./rating-DxsvfJAX.js";import{n as a,t as o}from"./avatar-DDurds49.js";import{Ao as s,Bc as c,Cc as l,Eo as u,Ic as d,as as f,hi as p}from"./index-B9ukmIN1.js";import{n as m,t as h}from"./card-B_Tor3B1.js";import{i as g}from"./link-C-rclok5.js";var _=t(c(),1),v=d(),y=`[mask-image:linear-gradient(to_bottom,black_calc(100%-2.5rem),transparent)]`;function b({maxHeight:e=96,open:t,defaultOpen:i=!1,onOpenChange:a,labels:o,fade:c=!0,className:l,contentClassName:d,triggerClassName:m,children:h,...b}){let[x,S]=u({controlled:t,default:i,name:`Spoiler`,state:`open`}),C=e=>{a?.(e),S(e)},w=s(),T=_.useRef(null),E=_.useRef(null),[D,O]=_.useState(0);f(()=>{let e=E.current;if(!e)return;let t=()=>O(e.scrollHeight);if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let k=D>e,A=k&&!x,j=t=>{if(!A||!T.current)return;let n=T.current.getBoundingClientRect();t.target.getBoundingClientRect().bottom>n.top+e&&C(!0)};return(0,v.jsxs)(r,{"data-slot":`spoiler`,open:x,onOpenChange:e=>C(e),className:p(`flex flex-col items-start gap-1.5`,l),...k?null:{"data-fits":``},...b,children:[(0,v.jsx)(`div`,{ref:T,id:w,"data-slot":`spoiler-content`,...A?{"data-clipped":``}:null,onFocusCapture:j,className:p(`w-full overflow-hidden transition-[max-height] duration-200 ease-out motion-reduce:transition-none`,A&&c&&y,d),style:k?{maxHeight:x?D:e}:void 0,children:(0,v.jsx)(`div`,{ref:E,children:h})}),k?(0,v.jsx)(n,{"data-slot":`spoiler-trigger`,"aria-controls":w,className:p(g(),`text-[13px]`,m),children:x?o?.showLess??`Show less`:o?.showMore??`Show more`}):null]})}var x=e({SpoilerComposeReview:()=>S});function S(){return(0,v.jsx)(h,{className:`w-full max-w-md`,children:(0,v.jsxs)(m,{className:`flex flex-col gap-3`,children:[(0,v.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,v.jsx)(o,{children:(0,v.jsx)(a,{children:`MK`})}),(0,v.jsxs)(`div`,{className:`flex flex-col`,children:[(0,v.jsx)(`span`,{className:`text-sm font-medium`,children:`Maya K.`}),(0,v.jsx)(i,{"aria-label":`Maya's rating`,value:4.5,allowHalf:!0,readOnly:!0,size:`sm`})]})]}),(0,v.jsx)(b,{maxHeight:60,children:(0,v.jsx)(`p`,{className:`text-[13px] leading-relaxed`,children:`We moved three teams onto it in a week. The import kept every issue and comment, the keyboard shortcuts match what we had before, and search is instant even on our oldest project. The only thing we missed was a bulk edit for labels, which arrived in the next release. Support answered within the hour every time we asked.`})})]})})}var C=e({SpoilerControlled:()=>T}),w=[`Faster cold builds`,`Rating field`,`Right-to-left menus`,`New billing page`,`Audit log export`,`Webhook retries`,`SAML for teams`,`Dark mode charts`];function T(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-2`,children:[(0,v.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Open: `,e?`yes`:`no`]}),(0,v.jsx)(b,{maxHeight:72,open:e,onOpenChange:t,labels:{showMore:`Show all ${w.length} changes`,showLess:`Show fewer`},children:(0,v.jsx)(`ul`,{className:`list-disc space-y-1 ps-5 text-[13px]`,children:w.map(e=>(0,v.jsx)(`li`,{children:e},e))})})]})}var E=e({SpoilerDefault:()=>D});function D(){return(0,v.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-6 text-[13px] leading-relaxed`,children:[(0,v.jsxs)(b,{maxHeight:64,children:[(0,v.jsx)(`p`,{className:`mb-2`,children:`Workspaces hold your projects, members and billing. Every project belongs to exactly one workspace, and moving a project keeps its history, its environments and its deploy keys.`}),(0,v.jsx)(`p`,{className:`mb-2`,children:`Members can be invited by email or joined automatically from a verified domain. Roles decide what a member can change: owners manage billing, admins manage members, and developers deploy.`}),(0,v.jsx)(`p`,{children:`Removing a member signs them out everywhere at once and revokes every token they created.`})]}),(0,v.jsx)(b,{maxHeight:64,children:(0,v.jsx)(`p`,{children:`Short content that fits shows no button and no fade.`})})]})}var O=`import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Card, CardContent } from "@kitora/ui/card"
import { Rating } from "@kitora/ui/rating"
import { Spoiler } from "@kitora/ui/spoiler"

export function SpoilerComposeReview() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Maya K.</span>
            <Rating aria-label="Maya's rating" value={4.5} allowHalf readOnly size="sm" />
          </div>
        </div>
        <Spoiler maxHeight={60}>
          <p className="text-[13px] leading-relaxed">
            We moved three teams onto it in a week. The import kept every issue and comment, the keyboard shortcuts match what we had before, and search is instant even on our oldest project. The only thing we missed was a bulk edit for labels, which arrived in the next release. Support answered within the hour every time we asked.
          </p>
        </Spoiler>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>l(()=>import(`./compose-BGJngaE1.js`),[]));var k=`import { useState } from "react"
import { Spoiler } from "@kitora/ui/spoiler"

const CHANGES = ["Faster cold builds", "Rating field", "Right-to-left menus", "New billing page", "Audit log export", "Webhook retries", "SAML for teams", "Dark mode charts"]

export function SpoilerControlled() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-[13px] text-muted-foreground">Open: {open ? "yes" : "no"}</p>
      <Spoiler maxHeight={72} open={open} onOpenChange={setOpen} labels={{ showMore: \`Show all \${CHANGES.length} changes\`, showLess: "Show fewer" }}>
        <ul className="list-disc space-y-1 ps-5 text-[13px]">
          {CHANGES.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Spoiler>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>l(()=>import(`./controlled-DpaYMvy5.js`),[]));var A=`import { Spoiler } from "@kitora/ui/spoiler"

export function SpoilerDefault() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6 text-[13px] leading-relaxed">
      <Spoiler maxHeight={64}>
        <p className="mb-2">
          Workspaces hold your projects, members and billing. Every project belongs to exactly one workspace, and moving a project keeps its history, its environments and its deploy keys.
        </p>
        <p className="mb-2">
          Members can be invited by email or joined automatically from a verified domain. Roles decide what a member can change: owners manage billing, admins manage members, and developers deploy.
        </p>
        <p>Removing a member signs them out everywhere at once and revokes every token they created.</p>
      </Spoiler>
      <Spoiler maxHeight={64}>
        <p>Short content that fits shows no button and no fade.</p>
      </Spoiler>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>l(()=>import(`./default-OvkT1vMz.js`),[]));var j={"./demos/spoiler/compose.tsx":x,"./demos/spoiler/controlled.tsx":C,"./demos/spoiler/default.tsx":E},M={"./demos/spoiler/compose.tsx":O,"./demos/spoiler/controlled.tsx":k,"./demos/spoiler/default.tsx":A};export{j as modules,M as sources};