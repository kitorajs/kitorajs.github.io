import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./math-BI29zVAU.js";import{i as r,l as i,o as a,r as o,v as s}from"./swipe-pC044DTu.js";import{c,r as l,t as u}from"./DrawerPopup-DarNp3U9.js";import{n as d,t as f}from"./DrawerViewport-DgDSmkEO.js";import{t as p}from"./folder-CcDNU7s5.js";import{t as m}from"./textarea-BzT4gNdi.js";import{Bc as h,Cc as g,Ga as _,Ic as v,Ja as y,Lo as b,Qa as x,Ro as S,Xa as C,Za as w,as as T,no as E,qa as D,ti as O,uo as ee}from"./index-q72zUtm9.js";import{t as k}from"./label-DjxTNoON.js";import{a as A,c as j,d as M,f as N,i as P,l as te,n as F,o as ne,r as I,s as L,t as R,u as re}from"./drawer-BGjdFpGF.js";var ie=.5;function z(e){switch(e){case`up`:return`down`;case`down`:return`up`;case`left`:return`right`;default:return`left`}}function ae(e){return e===null?40:e*ie}function oe(e){return e.direction===e.openDirection?e.displacement>=e.threshold||e.velocity>=.1:!1}function se(e){let{closedOffset:t,dismissDirection:r}=e,i=Math.max(0,e.displacement),a=(t-(i>t?t+Math.sqrt(i-t):i))*(r===`left`||r===`up`?-1:1),o=r===`left`||r===`right`,s=t>0?n(i/t,0,1):0;return{movementX:o?a:0,movementY:o?0:a,openProgress:s,backdropProgress:n(1-s,0,1)}}var B=t(h(),1),ce={open:E.open,swiping:e=>e?{"data-swiping":``}:null,swipeDirection:e=>e?{"data-swipe-direction":e}:null,disabled:e=>e?{"data-disabled":``}:null},V=`data-swiping`,H=`--drawer-swipe-progress`,U=`--drawer-height`,W=`--drawer-swipe-movement-x`,G=`--drawer-swipe-movement-y`;function le(e){return e===`left`||e===`right`?`pan-y`:`pan-x`}function ue(e){let{disabled:t=!1,swipeDirection:n,ref:l,...u}=e,d=b(u),f=ee(`Drawer.SwipeArea`),p=c(`Drawer.SwipeArea`),m=_(),h=p.indent?m?.visual:void 0,{open:g}=f,[v,y]=B.useState(!1),[x,C]=B.useState(null),w=n??z(p.swipeDirection),E=z(w),D=!t&&(!g||v),O=B.useRef({dialog:f,drawer:p,visual:h,openDirection:w,dismissDirection:E,enabled:D,disabled:t,element:x});T(()=>{O.current={dialog:f,drawer:p,visual:h,openDirection:w,dismissDirection:E,enabled:D,disabled:t,element:x}});let k=B.useRef(null),A=B.useRef(()=>{}),j=B.useRef(()=>{});if(k.current===null){let e=()=>O.current,t=null,n=!1,o=null,c=!1,l=null,u=0,d,f=()=>{let{dialog:t,dismissDirection:n}=e(),r=t.popupEl;if(!r)return null;let i=n===`left`||n===`right`?r.offsetWidth:r.offsetHeight;return i>0?i:null},p=()=>{let t=f(),n=e().dialog.popupEl;if(t===null||!n)return t;let r=e().dismissDirection===`left`||e().dismissDirection===`right`,i=a(n),o=r?i.x:i.y;return Number.isFinite(o)&&Math.abs(o)>.5?Math.min(t,Math.abs(o)):t},m=()=>{clearTimeout(d),e().dialog.outsidePressSuspended.current=!0},h=()=>{clearTimeout(d);let t=e().dialog.outsidePressSuspended;d=setTimeout(()=>{t.current=!1},0)},g=()=>{let{dialog:t,drawer:n,visual:r,dismissDirection:a}=e(),s=t.popupEl;if(!s||!t.open||!t.mounted)return;i(),o===null&&(o=p());let d=o;if(d===null||!Number.isFinite(d)||d<=0)return;let f=se({displacement:u,closedOffset:d,dismissDirection:a});s.style.setProperty(W,`${f.movementX}px`),s.style.setProperty(G,`${f.movementY}px`),s.setAttribute(V,``),l===null&&(l=s.style.transition),s.style.transition=`none`;let m=t.backdropRef.current;m&&(m.setAttribute(V,``),m.style.setProperty(H,`${f.backdropProgress}`),f.openProgress>0&&n.frontmostHeight>0?m.style.setProperty(U,`${n.frontmostHeight}px`):m.style.removeProperty(U)),r?.set({swipeProgress:f.openProgress,frontmostHeight:f.openProgress>0?n.frontmostHeight:0}),c=!0},_=()=>{let{dialog:t,visual:n}=e(),r=t.popupEl;r&&c&&(r.style.removeProperty(W),r.style.removeProperty(G),r.removeAttribute(V)),r&&l!==null&&(r.style.transition=l,l=null);let i=t.backdropRef.current;i&&(i.removeAttribute(V),i.style.setProperty(H,`0`),i.style.removeProperty(U)),n?.set({swipeProgress:0,frontmostHeight:0}),c=!1},v=()=>{t=null,n=!1,o=null,y(!1)},b=()=>{v(),h(),u=0,_()};A.current=()=>{u=0,_(),v()},j.current=()=>{clearTimeout(d),e().dialog.outsidePressSuspended.current=!1};let x=t=>{let r=e().dialog;r.open||(n=!0,r.setOpen(!0,`swipe`,t,e().element??void 0))},S=t=>{let n=e().dialog;n.open&&n.setOpen(!1,`swipe`,t)};k.current=r({element:()=>e().element,enabled:()=>e().enabled,directions:()=>[e().openDirection],onSwipeStart:e=>{m(),t=e,n=!1,y(!0),u=0},onProgress:(r,i)=>{if(!i||!t)return;let{openDirection:a}=e();u=s(a,i.deltaX,i.deltaY),i.direction===a&&(u<1&&!n||(n||x(t),g()))},onRelease:t=>{let{openDirection:r,disabled:i}=e();return oe({displacement:s(r,t.deltaX,t.deltaY),velocity:s(r,t.releaseVelocityX,t.releaseVelocityY),threshold:ae(f()),direction:t.direction,openDirection:r})&&!i?x(t.event):n&&S(t.event),b(),!1},onCancel:b})}let M=k.current;return T(()=>{if(x)return o({viewport:x,gesture:M,root:()=>O.current.element,enabled:()=>O.current.enabled,swipeDirection:()=>O.current.openDirection}).destroy},[x,M]),B.useEffect(()=>{D||(M.reset(),A.current())},[D,M]),B.useEffect(()=>{let e=j.current;return()=>e()},[]),S(`div`,e,{state:{open:g,swiping:v,swipeDirection:w,disabled:t},ref:[l,C],stateAttributesMapping:ce,props:[{role:`presentation`,"aria-hidden":!0,style:{pointerEvents:D?void 0:`none`,touchAction:le(w)}},d]})}var de=e({DrawerBottomSheetMobileFirst:()=>fe}),K=v();function fe(){return(0,K.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,K.jsxs)(R,{children:[(0,K.jsx)(N,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Open drawer`}),(0,K.jsx)(I,{children:(0,K.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(M,{children:`Move to project`}),(0,K.jsx)(P,{children:`Pick a destination.`})]}),(0,K.jsx)(`div`,{className:`space-y-2 px-4 pb-4`,children:[`Kitora`,`API gateway`,`Mobile app`,`Marketing`].map(e=>(0,K.jsxs)(`button`,{className:`flex w-full items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2 text-left text-sm transition-colors hover:bg-muted`,children:[(0,K.jsx)(p,{className:`size-4 text-muted-foreground`}),e]},e))}),(0,K.jsxs)(A,{children:[(0,K.jsx)(O,{children:`Move`}),(0,K.jsx)(F,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Cancel`})]})]})})]})})}var pe=e({DrawerBuildYourOwn:()=>me});function me({open:e,onOpenChange:t}){let n=(0,B.useId)();return(0,K.jsxs)(d,{open:e,onOpenChange:e=>t?.(e),children:[(0,K.jsx)(x,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Send feedback`}),(0,K.jsxs)(C,{children:[(0,K.jsx)(u,{className:`fixed inset-0 z-50 bg-black/10 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0`}),(0,K.jsx)(f,{className:`pointer-events-none fixed inset-0 z-50`,children:(0,K.jsxs)(l,{className:`pointer-events-auto fixed inset-x-0 bottom-0 z-50 flex max-h-[80vh] flex-col rounded-t-xl border-t bg-popover text-sm text-popover-foreground shadow-xl [transform:translateY(var(--drawer-swipe-movement-y,0px))] transition-transform duration-200 ease-out data-swiping:transition-none data-starting-style:translate-y-full data-ending-style:translate-y-full`,children:[(0,K.jsx)(`div`,{className:`mx-auto mt-4 h-1 w-[100px] shrink-0 rounded-full bg-muted`}),(0,K.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,K.jsxs)(`div`,{className:`flex flex-col gap-0.5 p-4 text-center`,children:[(0,K.jsx)(w,{className:`text-base font-medium`,children:`Feedback`}),(0,K.jsx)(y,{className:`text-muted-foreground`,children:`Tell us what to fix next.`})]}),(0,K.jsxs)(`div`,{className:`grid gap-2 px-4`,children:[(0,K.jsx)(k,{htmlFor:n,children:`Message`}),(0,K.jsx)(m,{id:n,rows:4,placeholder:`The export button is hard to find…`})]}),(0,K.jsxs)(`div`,{className:`flex flex-col gap-2 p-4`,children:[(0,K.jsx)(O,{children:`Submit`}),(0,K.jsx)(D,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Cancel`})]})]})]})})]})]})}var he=e({DrawerComposeFeedbackSheet:()=>ge});function ge(){let e=(0,B.useId)();return(0,K.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,K.jsxs)(R,{children:[(0,K.jsx)(N,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Send feedback`}),(0,K.jsx)(I,{children:(0,K.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(M,{children:`Feedback`}),(0,K.jsx)(P,{children:`Tell us what to fix next.`})]}),(0,K.jsxs)(`div`,{className:`grid gap-2 px-4`,children:[(0,K.jsx)(k,{htmlFor:e,children:`Message`}),(0,K.jsx)(m,{id:e,rows:4,placeholder:`The export button is hard to find…`})]}),(0,K.jsxs)(A,{children:[(0,K.jsx)(O,{children:`Submit`}),(0,K.jsx)(F,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Cancel`})]})]})})]})})}var _e=e({DrawerHandleAndSides:()=>ve});function ve(){return(0,K.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[[`start`,`end`].map(e=>(0,K.jsxs)(R,{side:e,children:[(0,K.jsxs)(N,{render:(0,K.jsx)(O,{variant:`outline`}),children:[`Open `,e,` drawer`]}),(0,K.jsxs)(I,{children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(M,{children:`Filters`}),(0,K.jsxs)(P,{children:[`Swipe toward the `,e,` edge to close.`]})]}),(0,K.jsx)(`div`,{className:`px-4`,children:(0,K.jsx)(F,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Close`})})]})]},e)),(0,K.jsxs)(R,{children:[(0,K.jsx)(N,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Bottom, own handle`}),(0,K.jsxs)(I,{handle:!1,children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(M,{children:`Share`}),(0,K.jsx)(P,{children:`The grab bar sits under the title here.`})]}),(0,K.jsx)(ne,{className:`mt-0 mb-4 w-40`})]})]})]})}var ye=e({DrawerIndentBackgroundDemo:()=>be});function be(){return(0,K.jsx)(re,{children:(0,K.jsxs)(`div`,{className:`relative overflow-hidden rounded-xl border bg-black`,children:[(0,K.jsx)(te,{}),(0,K.jsxs)(j,{className:`flex min-h-56 flex-col items-center justify-center gap-3 p-6 text-center`,children:[(0,K.jsx)(`p`,{className:`text-sm font-medium`,children:`Your app`}),(0,K.jsx)(`p`,{className:`max-w-xs text-sm text-muted-foreground`,children:`Open the drawer: this page steps back behind it and comes forward again as you swipe it away.`}),(0,K.jsxs)(R,{children:[(0,K.jsx)(N,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Open drawer`}),(0,K.jsx)(I,{children:(0,K.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(M,{children:`Share link`}),(0,K.jsx)(P,{children:`Anyone with the link can view this page.`})]}),(0,K.jsxs)(A,{children:[(0,K.jsx)(O,{children:`Copy link`}),(0,K.jsx)(F,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Done`})]})]})})]})]})]})})}var xe=e({DrawerNestedDemo:()=>Se});function Se(){return(0,K.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,K.jsxs)(R,{children:[(0,K.jsx)(N,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Open settings`}),(0,K.jsx)(I,{children:(0,K.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(M,{children:`Settings`}),(0,K.jsx)(P,{children:`Account and notifications.`})]}),(0,K.jsx)(`div`,{className:`px-4 text-sm text-muted-foreground`,children:`Notifications are on for mentions and replies.`}),(0,K.jsxs)(A,{children:[(0,K.jsxs)(R,{children:[(0,K.jsx)(N,{render:(0,K.jsx)(O,{}),children:`Delete account`}),(0,K.jsx)(I,{children:(0,K.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(M,{children:`Delete account?`}),(0,K.jsx)(P,{children:`This removes your data. It cannot be undone.`})]}),(0,K.jsxs)(A,{children:[(0,K.jsx)(O,{variant:`destructive`,children:`Delete`}),(0,K.jsx)(F,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Keep my account`})]})]})})]}),(0,K.jsx)(F,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Close`})]})]})})]})})}var Ce=e({DrawerSnapPoints:()=>we}),q=[`160px`,.5,1],J=Array.from({length:16},(e,t)=>`Stop ${t+1}`);function we(){let[e,t]=(0,B.useState)(q[0]);return(0,K.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,K.jsxs)(R,{snapPoints:q,snapPoint:e,onSnapPointChange:e=>t(e),children:[(0,K.jsx)(N,{render:(0,K.jsx)(O,{variant:`outline`}),children:`Show route`}),(0,K.jsx)(I,{className:`h-full max-h-[calc(100dvh-1rem)]`,children:(0,K.jsxs)(`div`,{className:`mx-auto flex w-full max-w-md min-h-0 flex-1 flex-col`,children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(M,{children:`Route to the station`}),(0,K.jsxs)(P,{children:[J.length,` stops, 24 minutes.`]})]}),(0,K.jsx)(`div`,{className:`flex justify-center gap-1.5 px-4 pb-2`,children:q.map(n=>(0,K.jsx)(O,{size:`xs`,variant:n===e?`default`:`outline`,onClick:()=>t(n),children:n===1?`Full`:n===.5?`Half`:`Peek`},String(n)))}),(0,K.jsx)(`ol`,{className:`min-h-0 flex-1 overflow-y-auto px-4 pb-4 text-sm text-muted-foreground`,children:J.map(e=>(0,K.jsx)(`li`,{className:`border-b py-2 last:border-b-0`,children:e},e))})]})})]})})}var Te=e({DrawerSwipeAreaDemo:()=>Ee});function Ee(){let[e,t]=(0,B.useState)(null);return(0,K.jsx)(`div`,{ref:t,className:`relative flex h-72 items-center justify-center overflow-hidden rounded-xl border bg-muted/30`,children:(0,K.jsxs)(d,{swipeDirection:`left`,modal:!1,children:[(0,K.jsx)(ue,{className:`absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-primary/15 to-transparent data-open:opacity-0`}),(0,K.jsx)(`p`,{className:`px-8 text-center text-sm text-muted-foreground`,children:`Drag from the left edge to open the menu.`}),(0,K.jsx)(x,{render:(0,K.jsx)(O,{variant:`outline`,className:`absolute bottom-3 right-3`}),children:`Open menu`}),(0,K.jsxs)(C,{container:e,children:[(0,K.jsx)(u,{className:`absolute inset-0 bg-black/20 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none`}),(0,K.jsx)(f,{className:`pointer-events-none absolute inset-0`,children:(0,K.jsxs)(l,{className:`pointer-events-auto absolute inset-y-0 left-0 flex w-56 flex-col gap-2 border-r bg-popover p-4 text-sm text-popover-foreground shadow-xl outline-none transition-[translate] duration-200 ease-out [transform:translateX(var(--drawer-swipe-movement-x,0px))] data-swiping:transition-none data-starting-style:-translate-x-full data-ending-style:-translate-x-full motion-reduce:transition-none`,children:[(0,K.jsx)(w,{className:`text-base font-medium`,children:`Menu`}),(0,K.jsx)(y,{className:`text-muted-foreground`,children:`Swipe it back to the left to close.`}),(0,K.jsxs)(`div`,{className:`mt-2 flex flex-col gap-1`,children:[(0,K.jsx)(O,{variant:`ghost`,className:`justify-start`,children:`Inbox`}),(0,K.jsx)(O,{variant:`ghost`,className:`justify-start`,children:`Projects`}),(0,K.jsx)(O,{variant:`ghost`,className:`justify-start`,children:`Settings`})]}),(0,K.jsx)(D,{render:(0,K.jsx)(O,{variant:`outline`,className:`mt-auto`}),children:`Close`})]})})]})]})})}var Y=`import { Folder } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@kitora/ui/drawer"

export function DrawerBottomSheetMobileFirst() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle>Move to project</DrawerTitle>
              <DrawerDescription>Pick a destination.</DrawerDescription>
            </DrawerHeader>
            <div className="space-y-2 px-4 pb-4">
              {["Kitora", "API gateway", "Mobile app", "Marketing"].map((p) => (
                <button
                  key={p}
                  className="flex w-full items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2 text-left text-sm transition-colors hover:bg-muted"
                >
                  <Folder className="size-4 text-muted-foreground" />
                  {p}
                </button>
              ))}
            </div>
            <DrawerFooter>
              <Button>Move</Button>
              <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>g(()=>import(`./bottom-sheet-mobile-first-BeIQtU5h.js`),[]));var X=`import { useId } from "react"
import { Drawer } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { Label } from "@kitora/ui/label"
import { Textarea } from "@kitora/ui/textarea"

/**
 * A bottom drawer built from the primitives' parts only: \`Drawer.Root\` (swiped down to close), \`Trigger\`, \`Portal\`, \`Backdrop\`, \`Viewport\`,
 * \`Popup\`, \`Title\`, \`Description\` and \`Close\`. The popup follows the finger through \`--drawer-swipe-movement-y\` and slides on
 * \`data-starting-style\` / \`data-ending-style\`.
 */
export function DrawerBuildYourOwn({ open, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  const id = useId()
  return (
    <Drawer.Root open={open} onOpenChange={(next) => onOpenChange?.(next)}>
      <Drawer.Trigger render={<Button variant="outline" />}>Send feedback</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-50 bg-black/10 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <Drawer.Viewport className="pointer-events-none fixed inset-0 z-50">
          <Drawer.Popup className="pointer-events-auto fixed inset-x-0 bottom-0 z-50 flex max-h-[80vh] flex-col rounded-t-xl border-t bg-popover text-sm text-popover-foreground shadow-xl [transform:translateY(var(--drawer-swipe-movement-y,0px))] transition-transform duration-200 ease-out data-swiping:transition-none data-starting-style:translate-y-full data-ending-style:translate-y-full">
            <div className="mx-auto mt-4 h-1 w-[100px] shrink-0 rounded-full bg-muted" />
            <div className="mx-auto w-full max-w-md">
              <div className="flex flex-col gap-0.5 p-4 text-center">
                <Drawer.Title className="text-base font-medium">Feedback</Drawer.Title>
                <Drawer.Description className="text-muted-foreground">Tell us what to fix next.</Drawer.Description>
              </div>
              <div className="grid gap-2 px-4">
                <Label htmlFor={id}>Message</Label>
                <Textarea id={id} rows={4} placeholder="The export button is hard to find…" />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <Button>Submit</Button>
                <Drawer.Close render={<Button variant="outline" />}>Cancel</Drawer.Close>
              </div>
            </div>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>g(()=>import(`./build-your-own-DveFUYn_.js`),[]));var Z=`import { useId } from "react"
import { Button } from "@kitora/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@kitora/ui/drawer"
import { Label } from "@kitora/ui/label"
import { Textarea } from "@kitora/ui/textarea"

export function DrawerComposeFeedbackSheet() {
  const id = useId()
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>Send feedback</DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle>Feedback</DrawerTitle>
              <DrawerDescription>Tell us what to fix next.</DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-2 px-4">
              <Label htmlFor={id}>Message</Label>
              <Textarea id={id} rows={4} placeholder="The export button is hard to find…" />
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>g(()=>import(`./compose-D9iYE1CT.js`),[]));var Q=`import { Button } from "@kitora/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHandle, DrawerHeader, DrawerTitle, DrawerTrigger } from "@kitora/ui/drawer"

// \`side="start"\` / \`side="end"\` make a side drawer that follows the reading direction (swiped away toward its own edge). The bottom drawer
// turns off the built-in grab bar (\`handle={false}\`) and places a wider \`DrawerHandle\` of its own under the header.
export function DrawerHandleAndSides() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {(["start", "end"] as const).map((side) => (
        <Drawer key={side} side={side}>
          <DrawerTrigger render={<Button variant="outline" />}>Open {side} drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Filters</DrawerTitle>
              <DrawerDescription>Swipe toward the {side} edge to close.</DrawerDescription>
            </DrawerHeader>
            <div className="px-4">
              <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>Bottom, own handle</DrawerTrigger>
        <DrawerContent handle={false}>
          <DrawerHeader>
            <DrawerTitle>Share</DrawerTitle>
            <DrawerDescription>The grab bar sits under the title here.</DrawerDescription>
          </DrawerHeader>
          <DrawerHandle className="mt-0 mb-4 w-40" />
        </DrawerContent>
      </Drawer>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>g(()=>import(`./handle-and-sides-D-ubGH0z.js`),[]));var $=`import { Button } from "@kitora/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerIndent, DrawerIndentBackground, DrawerProvider, DrawerTitle, DrawerTrigger } from "@kitora/ui/drawer"

// \`DrawerProvider\` shares which drawers are open; \`DrawerIndent\` is your app, scaled back while one is, in step with a swipe (drag the
// handle down slowly and watch the page grow back); \`DrawerIndentBackground\` is the colour behind it. The wrapper is \`relative\`.
export function DrawerIndentBackgroundDemo() {
  return (
    <DrawerProvider>
      <div className="relative overflow-hidden rounded-xl border bg-black">
        <DrawerIndentBackground />
        <DrawerIndent className="flex min-h-56 flex-col items-center justify-center gap-3 p-6 text-center">
          <p className="text-sm font-medium">Your app</p>
          <p className="max-w-xs text-sm text-muted-foreground">Open the drawer: this page steps back behind it and comes forward again as you swipe it away.</p>
          <Drawer>
            <DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-md">
                <DrawerHeader>
                  <DrawerTitle>Share link</DrawerTitle>
                  <DrawerDescription>Anyone with the link can view this page.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Copy link</Button>
                  <DrawerClose render={<Button variant="outline" />}>Done</DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </DrawerIndent>
      </div>
    </DrawerProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>g(()=>import(`./indent-background-Del7iHGN.js`),[]));var De=`import { Button } from "@kitora/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@kitora/ui/drawer"

// A drawer inside a drawer: the first steps back (\`--nested-drawers\`, \`data-nested-drawer-open\`) and grows back while the second is swiped
// away. Escape, a swipe and the Android back gesture close the top drawer only.
export function DrawerNestedDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>Open settings</DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle>Settings</DrawerTitle>
              <DrawerDescription>Account and notifications.</DrawerDescription>
            </DrawerHeader>
            <div className="px-4 text-sm text-muted-foreground">Notifications are on for mentions and replies.</div>
            <DrawerFooter>
              <Drawer>
                <DrawerTrigger render={<Button />}>Delete account</DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-md">
                    <DrawerHeader>
                      <DrawerTitle>Delete account?</DrawerTitle>
                      <DrawerDescription>This removes your data. It cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button variant="destructive">Delete</Button>
                      <DrawerClose render={<Button variant="outline" />}>Keep my account</DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
              <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(De,()=>g(()=>import(`./nested-OhFgb33O.js`),[]));var Oe=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@kitora/ui/drawer"

const SNAP_POINTS = ["160px", 0.5, 1] as const
type SnapPoint = (typeof SNAP_POINTS)[number]

const STOPS = Array.from({ length: 16 }, (_, i) => \`Stop \${i + 1}\`)

// A map-style bottom sheet with three resting heights: a 160px peek, half the screen and the full height. Swipe between them; a swipe down
// from the peek closes it. The current snap point is controlled here so the buttons can move it too.
export function DrawerSnapPoints() {
  const [snapPoint, setSnapPoint] = useState<SnapPoint | null>(SNAP_POINTS[0])
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Drawer snapPoints={SNAP_POINTS} snapPoint={snapPoint} onSnapPointChange={(point) => setSnapPoint(point as SnapPoint | null)}>
        <DrawerTrigger render={<Button variant="outline" />}>Show route</DrawerTrigger>
        <DrawerContent className="h-full max-h-[calc(100dvh-1rem)]">
          <div className="mx-auto flex w-full max-w-md min-h-0 flex-1 flex-col">
            <DrawerHeader>
              <DrawerTitle>Route to the station</DrawerTitle>
              <DrawerDescription>{STOPS.length} stops, 24 minutes.</DrawerDescription>
            </DrawerHeader>
            <div className="flex justify-center gap-1.5 px-4 pb-2">
              {SNAP_POINTS.map((point) => (
                <Button key={String(point)} size="xs" variant={point === snapPoint ? "default" : "outline"} onClick={() => setSnapPoint(point)}>
                  {point === 1 ? "Full" : point === 0.5 ? "Half" : "Peek"}
                </Button>
              ))}
            </div>
            <ol className="min-h-0 flex-1 overflow-y-auto px-4 pb-4 text-sm text-muted-foreground">
              {STOPS.map((stop) => (
                <li key={stop} className="border-b py-2 last:border-b-0">
                  {stop}
                </li>
              ))}
            </ol>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Oe,()=>g(()=>import(`./snap-points-B9o-vdR2.js`),[]));var ke=`import { useState } from "react"
import { Drawer } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"

// \`Drawer.SwipeArea\` is an invisible strip along the edge a drawer comes from: drag it inward and the drawer follows your finger, then opens
// when you pass half of it or flick (try it on the left edge of the frame; the button is the keyboard route). It lives inside the \`Drawer.Root\`,
// and here the whole drawer is portaled into the frame, so everything is positioned inside it instead of the screen.
export function DrawerSwipeAreaDemo() {
  const [frame, setFrame] = useState<HTMLDivElement | null>(null)
  return (
    <div ref={setFrame} className="relative flex h-72 items-center justify-center overflow-hidden rounded-xl border bg-muted/30">
      <Drawer.Root swipeDirection="left" modal={false}>
        <Drawer.SwipeArea className="absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-primary/15 to-transparent data-open:opacity-0" />
        <p className="px-8 text-center text-sm text-muted-foreground">Drag from the left edge to open the menu.</p>
        <Drawer.Trigger render={<Button variant="outline" className="absolute bottom-3 right-3" />}>Open menu</Drawer.Trigger>
        <Drawer.Portal container={frame}>
          <Drawer.Backdrop className="absolute inset-0 bg-black/20 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
          <Drawer.Viewport className="pointer-events-none absolute inset-0">
            <Drawer.Popup className="pointer-events-auto absolute inset-y-0 left-0 flex w-56 flex-col gap-2 border-r bg-popover p-4 text-sm text-popover-foreground shadow-xl outline-none transition-[translate] duration-200 ease-out [transform:translateX(var(--drawer-swipe-movement-x,0px))] data-swiping:transition-none data-starting-style:-translate-x-full data-ending-style:-translate-x-full motion-reduce:transition-none">
              <Drawer.Title className="text-base font-medium">Menu</Drawer.Title>
              <Drawer.Description className="text-muted-foreground">Swipe it back to the left to close.</Drawer.Description>
              <div className="mt-2 flex flex-col gap-1">
                <Button variant="ghost" className="justify-start">Inbox</Button>
                <Button variant="ghost" className="justify-start">Projects</Button>
                <Button variant="ghost" className="justify-start">Settings</Button>
              </div>
              <Drawer.Close render={<Button variant="outline" className="mt-auto" />}>Close</Drawer.Close>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(ke,()=>g(()=>import(`./swipe-area-ZP9cCSHB.js`),[]));var Ae={"./demos/drawer/bottom-sheet-mobile-first.tsx":de,"./demos/drawer/build-your-own.tsx":pe,"./demos/drawer/compose.tsx":he,"./demos/drawer/handle-and-sides.tsx":_e,"./demos/drawer/indent-background.tsx":ye,"./demos/drawer/nested.tsx":xe,"./demos/drawer/snap-points.tsx":Ce,"./demos/drawer/swipe-area.tsx":Te},je={"./demos/drawer/bottom-sheet-mobile-first.tsx":Y,"./demos/drawer/build-your-own.tsx":X,"./demos/drawer/compose.tsx":Z,"./demos/drawer/handle-and-sides.tsx":Q,"./demos/drawer/indent-background.tsx":$,"./demos/drawer/nested.tsx":De,"./demos/drawer/snap-points.tsx":Oe,"./demos/drawer/swipe-area.tsx":ke};export{Ae as modules,je as sources};