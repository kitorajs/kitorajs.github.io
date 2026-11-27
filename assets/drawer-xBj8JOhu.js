import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./math-BI29zVAU.js";import{i as r,l as i,o as a,r as o,v as s}from"./swipe-lOVJkebc.js";import{c,r as l,t as u}from"./DrawerPopup-CSUMVQ3r.js";import{n as d,t as f}from"./DrawerViewport-BzugjBKN.js";import{t as p}from"./folder-Cv19nptf.js";import{t as m}from"./textarea-OAkG_lap.js";import{$a as h,Bo as g,Ec as _,Qa as v,Uc as y,Xa as b,Ya as x,cs as S,eo as C,fo as ee,io as w,qa as te,ri as T,zc as E,zo as ne}from"./index-BZuUy872.js";import{t as D}from"./label-Cw7IrV7Q.js";import{a as O,c as k,d as A,f as j,i as M,l as re,n as N,o as ie,r as P,s as F,t as I,u as ae}from"./drawer-C3lnoXAe.js";var oe=.5;function L(e){switch(e){case`up`:return`down`;case`down`:return`up`;case`left`:return`right`;default:return`left`}}function se(e){return e===null?40:e*oe}function ce(e){return e.direction===e.openDirection?e.displacement>=e.threshold||e.velocity>=.1:!1}function le(e){let{closedOffset:t,dismissDirection:r}=e,i=Math.max(0,e.displacement),a=(t-(i>t?t+Math.sqrt(i-t):i))*(r===`left`||r===`up`?-1:1),o=r===`left`||r===`right`,s=t>0?n(i/t,0,1):0;return{movementX:o?a:0,movementY:o?0:a,openProgress:s,backdropProgress:n(1-s,0,1)}}var R=t(y(),1),ue={open:w.open,swiping:e=>e?{"data-swiping":``}:null,swipeDirection:e=>e?{"data-swipe-direction":e}:null,disabled:e=>e?{"data-disabled":``}:null},z=`data-swiping`,B=`--drawer-swipe-progress`,V=`--drawer-height`,H=`--drawer-swipe-movement-x`,U=`--drawer-swipe-movement-y`;function de(e){return e===`left`||e===`right`?`pan-y`:`pan-x`}function fe(e){let{disabled:t=!1,swipeDirection:n,ref:l,...u}=e,d=ne(u),f=ee(`Drawer.SwipeArea`),p=c(`Drawer.SwipeArea`),m=te(),h=p.indent?m?.visual:void 0,{open:_}=f,[v,y]=R.useState(!1),[b,x]=R.useState(null),C=n??L(p.swipeDirection),w=L(C),T=!t&&(!_||v),E=R.useRef({dialog:f,drawer:p,visual:h,openDirection:C,dismissDirection:w,enabled:T,disabled:t,element:b});S(()=>{E.current={dialog:f,drawer:p,visual:h,openDirection:C,dismissDirection:w,enabled:T,disabled:t,element:b}});let D=R.useRef(null),O=R.useRef(()=>{}),k=R.useRef(()=>{});if(D.current===null){let e=()=>E.current,t=null,n=!1,o=null,c=!1,l=null,u=0,d,f=()=>{let{dialog:t,dismissDirection:n}=e(),r=t.popupEl;if(!r)return null;let i=n===`left`||n===`right`?r.offsetWidth:r.offsetHeight;return i>0?i:null},p=()=>{let t=f(),n=e().dialog.popupEl;if(t===null||!n)return t;let r=e().dismissDirection===`left`||e().dismissDirection===`right`,i=a(n),o=r?i.x:i.y;return Number.isFinite(o)&&Math.abs(o)>.5?Math.min(t,Math.abs(o)):t},m=()=>{clearTimeout(d),e().dialog.outsidePressSuspended.current=!0},h=()=>{clearTimeout(d);let t=e().dialog.outsidePressSuspended;d=setTimeout(()=>{t.current=!1},0)},g=()=>{let{dialog:t,drawer:n,visual:r,dismissDirection:a}=e(),s=t.popupEl;if(!s||!t.open||!t.mounted)return;i(),o===null&&(o=p());let d=o;if(d===null||!Number.isFinite(d)||d<=0)return;let f=le({displacement:u,closedOffset:d,dismissDirection:a});s.style.setProperty(H,`${f.movementX}px`),s.style.setProperty(U,`${f.movementY}px`),s.setAttribute(z,``),l===null&&(l=s.style.transition),s.style.transition=`none`;let m=t.backdropRef.current;m&&(m.setAttribute(z,``),m.style.setProperty(B,`${f.backdropProgress}`),f.openProgress>0&&n.frontmostHeight>0?m.style.setProperty(V,`${n.frontmostHeight}px`):m.style.removeProperty(V)),r?.set({swipeProgress:f.openProgress,frontmostHeight:f.openProgress>0?n.frontmostHeight:0}),c=!0},_=()=>{let{dialog:t,visual:n}=e(),r=t.popupEl;r&&c&&(r.style.removeProperty(H),r.style.removeProperty(U),r.removeAttribute(z)),r&&l!==null&&(r.style.transition=l,l=null);let i=t.backdropRef.current;i&&(i.removeAttribute(z),i.style.setProperty(B,`0`),i.style.removeProperty(V)),n?.set({swipeProgress:0,frontmostHeight:0}),c=!1},v=()=>{t=null,n=!1,o=null,y(!1)},b=()=>{v(),h(),u=0,_()};O.current=()=>{u=0,_(),v()},k.current=()=>{clearTimeout(d),e().dialog.outsidePressSuspended.current=!1};let x=t=>{let r=e().dialog;r.open||(n=!0,r.setOpen(!0,`swipe`,t,e().element??void 0))},S=t=>{let n=e().dialog;n.open&&n.setOpen(!1,`swipe`,t)};D.current=r({element:()=>e().element,enabled:()=>e().enabled,directions:()=>[e().openDirection],onSwipeStart:e=>{m(),t=e,n=!1,y(!0),u=0},onProgress:(r,i)=>{if(!i||!t)return;let{openDirection:a}=e();u=s(a,i.deltaX,i.deltaY),i.direction===a&&(u<1&&!n||(n||x(t),g()))},onRelease:t=>{let{openDirection:r,disabled:i}=e();return ce({displacement:s(r,t.deltaX,t.deltaY),velocity:s(r,t.releaseVelocityX,t.releaseVelocityY),threshold:se(f()),direction:t.direction,openDirection:r})&&!i?x(t.event):n&&S(t.event),b(),!1},onCancel:b})}let A=D.current;return S(()=>{if(b)return o({viewport:b,gesture:A,root:()=>E.current.element,enabled:()=>E.current.enabled,swipeDirection:()=>E.current.openDirection}).destroy},[b,A]),R.useEffect(()=>{T||(A.reset(),O.current())},[T,A]),R.useEffect(()=>{let e=k.current;return()=>e()},[]),g(`div`,e,{state:{open:_,swiping:v,swipeDirection:C,disabled:t},ref:[l,x],stateAttributesMapping:ue,props:[{role:`presentation`,"aria-hidden":!0,style:{pointerEvents:T?void 0:`none`,touchAction:de(C)}},d]})}var pe=e({DrawerBottomSheetMobileFirst:()=>me}),W=E();function me(){return(0,W.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,W.jsxs)(I,{children:[(0,W.jsx)(j,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Open drawer`}),(0,W.jsx)(P,{children:(0,W.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,W.jsxs)(F,{children:[(0,W.jsx)(A,{children:`Move to project`}),(0,W.jsx)(M,{children:`Pick a destination.`})]}),(0,W.jsx)(`div`,{className:`space-y-2 px-4 pb-4`,children:[`Kitora`,`API gateway`,`Mobile app`,`Marketing`].map(e=>(0,W.jsxs)(`button`,{className:`flex w-full items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2 text-left text-sm transition-colors hover:bg-muted`,children:[(0,W.jsx)(p,{className:`size-4 text-muted-foreground`}),e]},e))}),(0,W.jsxs)(O,{children:[(0,W.jsx)(T,{children:`Move`}),(0,W.jsx)(N,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Cancel`})]})]})})]})})}var he=e({DrawerBuildYourOwn:()=>ge});function ge({open:e,onOpenChange:t}){let n=(0,R.useId)();return(0,W.jsxs)(d,{open:e,onOpenChange:e=>t?.(e),children:[(0,W.jsx)(C,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Send feedback`}),(0,W.jsxs)(v,{children:[(0,W.jsx)(u,{className:`fixed inset-0 z-50 bg-black/10 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0`}),(0,W.jsx)(f,{className:`pointer-events-none fixed inset-0 z-50`,children:(0,W.jsxs)(l,{className:`pointer-events-auto fixed inset-x-0 bottom-0 z-50 flex max-h-[80vh] flex-col rounded-t-xl border-t bg-popover text-sm text-popover-foreground shadow-xl [transform:translateY(var(--drawer-swipe-movement-y,0px))] transition-transform duration-200 ease-out data-swiping:transition-none data-starting-style:translate-y-full data-ending-style:translate-y-full`,children:[(0,W.jsx)(`div`,{className:`mx-auto mt-4 h-1 w-[100px] shrink-0 rounded-full bg-muted`}),(0,W.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,W.jsxs)(`div`,{className:`flex flex-col gap-0.5 p-4 text-center`,children:[(0,W.jsx)(h,{className:`text-base font-medium`,children:`Feedback`}),(0,W.jsx)(b,{className:`text-muted-foreground`,children:`Tell us what to fix next.`})]}),(0,W.jsxs)(`div`,{className:`grid gap-2 px-4`,children:[(0,W.jsx)(D,{htmlFor:n,children:`Message`}),(0,W.jsx)(m,{id:n,rows:4,placeholder:`The export button is hard to find…`})]}),(0,W.jsxs)(`div`,{className:`flex flex-col gap-2 p-4`,children:[(0,W.jsx)(T,{children:`Submit`}),(0,W.jsx)(x,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Cancel`})]})]})]})})]})]})}var _e=e({DrawerComposeFeedbackSheet:()=>ve});function ve(){let e=(0,R.useId)();return(0,W.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,W.jsxs)(I,{children:[(0,W.jsx)(j,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Send feedback`}),(0,W.jsx)(P,{children:(0,W.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,W.jsxs)(F,{children:[(0,W.jsx)(A,{children:`Feedback`}),(0,W.jsx)(M,{children:`Tell us what to fix next.`})]}),(0,W.jsxs)(`div`,{className:`grid gap-2 px-4`,children:[(0,W.jsx)(D,{htmlFor:e,children:`Message`}),(0,W.jsx)(m,{id:e,rows:4,placeholder:`The export button is hard to find…`})]}),(0,W.jsxs)(O,{children:[(0,W.jsx)(T,{children:`Submit`}),(0,W.jsx)(N,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Cancel`})]})]})})]})})}var ye=e({DrawerHandleAndSides:()=>be});function be(){return(0,W.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[[`start`,`end`].map(e=>(0,W.jsxs)(I,{side:e,children:[(0,W.jsxs)(j,{render:(0,W.jsx)(T,{variant:`outline`}),children:[`Open `,e,` drawer`]}),(0,W.jsxs)(P,{children:[(0,W.jsxs)(F,{children:[(0,W.jsx)(A,{children:`Filters`}),(0,W.jsxs)(M,{children:[`Swipe toward the `,e,` edge to close.`]})]}),(0,W.jsx)(`div`,{className:`px-4`,children:(0,W.jsx)(N,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Close`})})]})]},e)),(0,W.jsxs)(I,{children:[(0,W.jsx)(j,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Bottom, own handle`}),(0,W.jsxs)(P,{handle:!1,children:[(0,W.jsxs)(F,{children:[(0,W.jsx)(A,{children:`Share`}),(0,W.jsx)(M,{children:`The grab bar sits under the title here.`})]}),(0,W.jsx)(ie,{className:`mt-0 mb-4 w-40`})]})]})]})}var xe=e({DrawerIndentBackgroundDemo:()=>Se});function Se(){return(0,W.jsx)(ae,{children:(0,W.jsxs)(`div`,{className:`relative overflow-hidden rounded-xl border bg-black`,children:[(0,W.jsx)(re,{}),(0,W.jsxs)(k,{className:`flex min-h-56 flex-col items-center justify-center gap-3 p-6 text-center`,children:[(0,W.jsx)(`p`,{className:`text-sm font-medium`,children:`Your app`}),(0,W.jsx)(`p`,{className:`max-w-xs text-sm text-muted-foreground`,children:`Open the drawer: this page steps back behind it and comes forward again as you swipe it away.`}),(0,W.jsxs)(I,{children:[(0,W.jsx)(j,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Open drawer`}),(0,W.jsx)(P,{children:(0,W.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,W.jsxs)(F,{children:[(0,W.jsx)(A,{children:`Share link`}),(0,W.jsx)(M,{children:`Anyone with the link can view this page.`})]}),(0,W.jsxs)(O,{children:[(0,W.jsx)(T,{children:`Copy link`}),(0,W.jsx)(N,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Done`})]})]})})]})]})]})})}var Ce=e({DrawerNestedDemo:()=>we});function we(){return(0,W.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,W.jsxs)(I,{children:[(0,W.jsx)(j,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Open settings`}),(0,W.jsx)(P,{children:(0,W.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,W.jsxs)(F,{children:[(0,W.jsx)(A,{children:`Settings`}),(0,W.jsx)(M,{children:`Account and notifications.`})]}),(0,W.jsx)(`div`,{className:`px-4 text-sm text-muted-foreground`,children:`Notifications are on for mentions and replies.`}),(0,W.jsxs)(O,{children:[(0,W.jsxs)(I,{children:[(0,W.jsx)(j,{render:(0,W.jsx)(T,{}),children:`Delete account`}),(0,W.jsx)(P,{children:(0,W.jsxs)(`div`,{className:`mx-auto w-full max-w-md`,children:[(0,W.jsxs)(F,{children:[(0,W.jsx)(A,{children:`Delete account?`}),(0,W.jsx)(M,{children:`This removes your data. It cannot be undone.`})]}),(0,W.jsxs)(O,{children:[(0,W.jsx)(T,{variant:`destructive`,children:`Delete`}),(0,W.jsx)(N,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Keep my account`})]})]})})]}),(0,W.jsx)(N,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Close`})]})]})})]})})}var Te=e({DrawerSnapPoints:()=>Ee}),G=[`160px`,.5,1],K=Array.from({length:16},(e,t)=>`Stop ${t+1}`);function Ee(){let[e,t]=(0,R.useState)(G[0]);return(0,W.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,W.jsxs)(I,{snapPoints:G,snapPoint:e,onSnapPointChange:e=>t(e),children:[(0,W.jsx)(j,{render:(0,W.jsx)(T,{variant:`outline`}),children:`Show route`}),(0,W.jsx)(P,{className:`h-full max-h-[calc(100dvh-1rem)]`,children:(0,W.jsxs)(`div`,{className:`mx-auto flex w-full max-w-md min-h-0 flex-1 flex-col`,children:[(0,W.jsxs)(F,{children:[(0,W.jsx)(A,{children:`Route to the station`}),(0,W.jsxs)(M,{children:[K.length,` stops, 24 minutes.`]})]}),(0,W.jsx)(`div`,{className:`flex justify-center gap-1.5 px-4 pb-2`,children:G.map(n=>(0,W.jsx)(T,{size:`xs`,variant:n===e?`default`:`outline`,onClick:()=>t(n),children:n===1?`Full`:n===.5?`Half`:`Peek`},String(n)))}),(0,W.jsx)(`ol`,{className:`min-h-0 flex-1 overflow-y-auto px-4 pb-4 text-sm text-muted-foreground`,children:K.map(e=>(0,W.jsx)(`li`,{className:`border-b py-2 last:border-b-0`,children:e},e))})]})})]})})}var De=e({DrawerSwipeAreaDemo:()=>Oe});function Oe(){let[e,t]=(0,R.useState)(null);return(0,W.jsx)(`div`,{ref:t,className:`relative flex h-72 items-center justify-center overflow-hidden rounded-xl border bg-muted/30`,children:(0,W.jsxs)(d,{swipeDirection:`left`,modal:!1,children:[(0,W.jsx)(fe,{className:`absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-primary/15 to-transparent data-open:opacity-0`}),(0,W.jsx)(`p`,{className:`px-8 text-center text-sm text-muted-foreground`,children:`Drag from the left edge to open the menu.`}),(0,W.jsx)(C,{render:(0,W.jsx)(T,{variant:`outline`,className:`absolute bottom-3 right-3`}),children:`Open menu`}),(0,W.jsxs)(v,{container:e,children:[(0,W.jsx)(u,{className:`absolute inset-0 bg-black/20 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none`}),(0,W.jsx)(f,{className:`pointer-events-none absolute inset-0`,children:(0,W.jsxs)(l,{className:`pointer-events-auto absolute inset-y-0 left-0 flex w-56 flex-col gap-2 border-r bg-popover p-4 text-sm text-popover-foreground shadow-xl outline-none transition-[translate] duration-200 ease-out [transform:translateX(var(--drawer-swipe-movement-x,0px))] data-swiping:transition-none data-starting-style:-translate-x-full data-ending-style:-translate-x-full motion-reduce:transition-none`,children:[(0,W.jsx)(h,{className:`text-base font-medium`,children:`Menu`}),(0,W.jsx)(b,{className:`text-muted-foreground`,children:`Swipe it back to the left to close.`}),(0,W.jsxs)(`div`,{className:`mt-2 flex flex-col gap-1`,children:[(0,W.jsx)(T,{variant:`ghost`,className:`justify-start`,children:`Inbox`}),(0,W.jsx)(T,{variant:`ghost`,className:`justify-start`,children:`Projects`}),(0,W.jsx)(T,{variant:`ghost`,className:`justify-start`,children:`Settings`})]}),(0,W.jsx)(x,{render:(0,W.jsx)(T,{variant:`outline`,className:`mt-auto`}),children:`Close`})]})})]})]})})}var q=`import { Folder } from "lucide-react"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>_(()=>import(`./bottom-sheet-mobile-first-DwYjBT6R.js`),[]));var J=`import { useId } from "react"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>_(()=>import(`./build-your-own-_Psv_ODt.js`),[]));var Y=`import { useId } from "react"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>_(()=>import(`./compose-B8GwoO4N.js`),[]));var X=`import { Button } from "@kitora/ui/button"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>_(()=>import(`./handle-and-sides-DCDEn7jh.js`),[]));var Z=`import { Button } from "@kitora/ui/button"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>_(()=>import(`./indent-background-KcEpbZJI.js`),[]));var Q=`import { Button } from "@kitora/ui/button"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>_(()=>import(`./nested-CKgrn62s.js`),[]));var ke=`import { useState } from "react"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(ke,()=>_(()=>import(`./snap-points-CVimFJ7U.js`),[]));var $=`import { useState } from "react"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>_(()=>import(`./swipe-area-DMF6Wm7i.js`),[]));var Ae={"./demos/drawer/bottom-sheet-mobile-first.tsx":pe,"./demos/drawer/build-your-own.tsx":he,"./demos/drawer/compose.tsx":_e,"./demos/drawer/handle-and-sides.tsx":ye,"./demos/drawer/indent-background.tsx":xe,"./demos/drawer/nested.tsx":Ce,"./demos/drawer/snap-points.tsx":Te,"./demos/drawer/swipe-area.tsx":De},je={"./demos/drawer/bottom-sheet-mobile-first.tsx":q,"./demos/drawer/build-your-own.tsx":J,"./demos/drawer/compose.tsx":Y,"./demos/drawer/handle-and-sides.tsx":X,"./demos/drawer/indent-background.tsx":Z,"./demos/drawer/nested.tsx":Q,"./demos/drawer/snap-points.tsx":ke,"./demos/drawer/swipe-area.tsx":$};export{Ae as modules,je as sources};