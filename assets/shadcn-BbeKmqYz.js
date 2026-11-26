import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Ai as t,Bc as n,Cc as r,Ic as i,_i as a,bi as o,ti as s,vi as c,yi as l}from"./index-B9ukmIN1.js";import{t as u}from"./label-DoQXlIRk.js";import{t as d}from"./checkbox-DcWEP8V9.js";import{a as f,c as p,i as m,l as h,o as g,r as _,s as v,t as y}from"./dialog-XB0zm5GH.js";import{n as b}from"./lib-CKWRlO6G.js";import{_ as x,a as ee,c as te,d as S,f as C,g as ne,i as w,l as T,m as re,n as E,o as ie,r as ae,s as oe,t as se,v as D,y as O}from"./dist-C3VPJStQ.js";var k=i(),A=e(n(),1),ce=Object.defineProperty,le=(e,t)=>ce(e,`name`,{value:t,configurable:!0});function j(e){let[t,n]=A.useState(void 0);return ne(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=0,r=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let i=r[0];window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>{let t,r;if(`borderBoxSize`in i){let e=i.borderBoxSize,n=Array.isArray(e)?e[0]:e;t=n.inlineSize,r=n.blockSize}else t=e.offsetWidth,r=e.offsetHeight;n({width:t,height:r})})});return r.observe(e,{box:`border-box`}),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}else n(void 0)},[e]),t}le(j,`useSize`);var ue=Object.defineProperty,M=(e,t)=>ue(e,`name`,{value:t,configurable:!0}),N=`Checkbox`,[P,de]=x(N),[F,I]=P(N);function L(e){let{__scopeCheckbox:t,checked:n,children:r,defaultChecked:i,disabled:a,form:o,name:s,onCheckedChange:c,required:l,value:u=`on`,internal_do_not_use_render:d}=e,[f,p]=re({prop:n,defaultProp:i??!1,onChange:c,caller:N}),[m,h]=A.useState(null),[g,_]=A.useState(null),[v,y]=A.useState(null),b=m?!!o||!!m.closest(`form`):!0,x={checked:f,disabled:a,setChecked:p,control:m,setControl:h,name:s,form:o,value:u,userClick:v,onUserClick:y,required:l,defaultChecked:G(i)?!1:i,isFormControl:b,bubbleInput:g,setBubbleInput:_};return(0,k.jsx)(F,{scope:t,...x,children:W(d)?d(x):r})}M(L,`CheckboxProvider`);var R=`CheckboxTrigger`,z=A.forwardRef(M(function({__scopeCheckbox:e,onKeyDown:t,onClick:n,...r},i){let{control:a,value:o,disabled:s,checked:c,required:l,setControl:u,setChecked:d,onUserClick:f,isFormControl:p,bubbleInput:m}=I(R,e),h=D(i,u),g=A.useRef(c);return A.useEffect(()=>{let e=a?.form;if(e){let t=M(()=>d(g.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[a,d]),(0,k.jsx)(S.button,{type:`button`,role:`checkbox`,"aria-checked":G(c)?`mixed`:c,"aria-required":l,"data-state":K(c),"data-disabled":s?``:void 0,disabled:s,value:o,...r,ref:h,onKeyDown:O(t,e=>{e.key===`Enter`&&e.preventDefault()}),onClick:O(n,e=>{let t=e.isPropagationStopped();f({requestedChecked:G(c)?!0:!c,hasConsumerStoppedPropagation:t}),d(e=>G(e)?!0:!e),m&&p&&(t||e.stopPropagation())})})},`CheckboxTrigger`)),B=A.forwardRef(M(function(e,t){let{__scopeCheckbox:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d}=e;return(0,k.jsx)(L,{__scopeCheckbox:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(z,{...d,ref:t,__scopeCheckbox:n}),e&&(0,k.jsx)(fe,{__scopeCheckbox:n})]})})},`Checkbox`)),V=`CheckboxIndicator`,H=A.forwardRef(M(function(e,t){let{__scopeCheckbox:n,forceMount:r,...i}=e,a=I(V,n);return(0,k.jsx)(T,{present:r||G(a.checked)||a.checked===!0,children:(0,k.jsx)(S.span,{"data-state":K(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t,style:{pointerEvents:`none`,...e.style}})})},`CheckboxIndicator`)),U=`CheckboxBubbleInput`,fe=A.forwardRef(M(function({__scopeCheckbox:e,onClick:t,...n},r){let{control:i,userClick:a,checked:o,defaultChecked:s,required:c,disabled:l,name:u,value:d,form:f,bubbleInput:p,setBubbleInput:m}=I(U,e),h=D(r,m),g=j(i),_=A.useRef(!1),v=A.useRef(o),y=A.useRef(a),b=A.useRef(null);A.useEffect(()=>{let e=p;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set;if(!n)return;let r=v.current!==o;v.current=o;let i=a!==null&&a!==y.current;if(y.current=a,i)b.current=r?null:a,r&&(e.indeterminate=G(o),n.call(e,G(o)?!1:o)),e.dispatchEvent(new Event(`click`,{bubbles:!a.hasConsumerStoppedPropagation}));else if(r){let t=b.current;b.current=null;let r=t?.requestedChecked===o;_.current=!0,e.indeterminate=G(o),n.call(e,G(o)?!1:o),e.dispatchEvent(new Event(`click`,{bubbles:!(r&&t.hasConsumerStoppedPropagation)})),_.current=!1}},[p,o,a]);let x=A.useRef(G(o)?!1:o);return(0,k.jsx)(S.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:s??x.current,required:c,disabled:l,name:u,value:d,form:f,...n,tabIndex:-1,ref:h,onClick:O(t,e=>{_.current&&e.stopPropagation()}),style:{...n.style,...g,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`CheckboxBubbleInput`));function W(e){return typeof e==`function`}M(W,`isFunction`);function G(e){return e===`indeterminate`}M(G,`isIndeterminate`);function K(e){return G(e)?`indeterminate`:e?`checked`:`unchecked`}M(K,`getState`);function q(...e){return a(l(e))}var pe=c(`inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/90`,outline:`border bg-background hover:bg-accent`,destructive:`bg-destructive text-white hover:bg-destructive/90`}},defaultVariants:{variant:`default`}});function J({className:e,variant:t,asChild:n=!1,...r}){return(0,k.jsx)(n?C:`button`,{"data-slot":`button`,className:q(pe({variant:t}),e),...r})}function me({className:e,...n}){return(0,k.jsx)(B,{"data-slot":`checkbox`,className:q(`peer size-4 shrink-0 rounded-[4px] border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground`,e),...n,children:(0,k.jsx)(H,{className:`flex items-center justify-center`,children:(0,k.jsx)(t,{className:`size-3.5`})})})}function he({className:e,htmlFor:t,...n}){return(0,k.jsx)(`label`,{htmlFor:t,"data-slot":`label`,className:q(`text-sm leading-none font-medium select-none`,e),...n})}var ge=se,_e=te,ve=E;function ye({className:e,children:t,...n}){return(0,k.jsxs)(ie,{children:[(0,k.jsx)(ee,{className:`fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out`}),(0,k.jsxs)(ae,{className:q(`fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-1/2 gap-4 rounded-lg border bg-background p-6`,e),...n,children:[t,(0,k.jsx)(E,{className:`absolute top-4 right-4 opacity-70 hover:opacity-100`,"aria-label":`Close`,children:(0,k.jsx)(o,{"aria-hidden":`true`})})]})]})}function be({className:e,...t}){return(0,k.jsx)(`div`,{className:q(`flex flex-col gap-2`,e),...t})}function Y({className:e,...t}){return(0,k.jsx)(`div`,{className:q(`flex justify-end gap-2`,e),...t})}function xe({className:e,...t}){return(0,k.jsx)(oe,{className:q(`text-lg font-semibold`,e),...t})}function Se({className:e,...t}){return(0,k.jsx)(w,{className:q(`text-sm text-muted-foreground`,e),...t})}function Ce(){return(0,k.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,children:[(0,k.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,k.jsx)(me,{id:`shadcn-updates`,name:`updates`,defaultChecked:!0}),(0,k.jsx)(he,{htmlFor:`shadcn-updates`,children:`Email me product updates`})]}),(0,k.jsxs)(ge,{children:[(0,k.jsx)(_e,{asChild:!0,children:(0,k.jsx)(J,{variant:`outline`,children:`Delete project`})}),(0,k.jsxs)(ye,{children:[(0,k.jsxs)(be,{children:[(0,k.jsx)(xe,{children:`Delete this project?`}),(0,k.jsx)(Se,{children:`Its boards and files go too. This cannot be undone.`})]}),(0,k.jsxs)(Y,{children:[(0,k.jsx)(ve,{asChild:!0,children:(0,k.jsx)(J,{variant:`outline`,children:`Cancel`})}),(0,k.jsx)(J,{variant:`destructive`,children:`Delete`})]})]})]})]})}var X=`import { type ComponentProps } from "react"
import { Checkbox as RadixCheckbox, CheckboxIndicator as RadixCheckboxIndicator } from "@radix-ui/react-checkbox"
import { Dialog as RadixDialog, DialogClose as RadixDialogClose, DialogContent as RadixDialogContent, DialogDescription as RadixDialogDescription, DialogOverlay as RadixDialogOverlay, DialogPortal as RadixDialogPortal, DialogTitle as RadixDialogTitle, DialogTrigger as RadixDialogTrigger } from "@radix-ui/react-dialog"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx, type ClassValue } from "clsx"
import { CheckIcon, XIcon } from "lucide-react"
import { twMerge } from "tailwind-merge"

// Before: the shadcn/ui way. These helpers are what \`components/ui/*.tsx\` and \`lib/utils.ts\` hold once copied into an app: Radix
// parts wrapped with Tailwind classes, \`cva\` variants and Radix Slot for \`asChild\`. The app owns (and maintains) every line. (The
// copied files import Radix as \`DialogPrimitive\`; here the same parts are named \`RadixDialog…\`.)
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva("inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border bg-background hover:bg-accent",
      destructive: "bg-destructive text-white hover:bg-destructive/90",
    },
  },
  defaultVariants: { variant: "default" },
})

function Button({ className, variant, asChild = false, ...props }: ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return <Comp data-slot="button" className={cn(buttonVariants({ variant }), className)} {...props} />
}

function Checkbox({ className, ...props }: ComponentProps<typeof RadixCheckbox>) {
  return (
    <RadixCheckbox data-slot="checkbox" className={cn("peer size-4 shrink-0 rounded-[4px] border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className)} {...props}>
      <RadixCheckboxIndicator className="flex items-center justify-center">
        <CheckIcon className="size-3.5" />
      </RadixCheckboxIndicator>
    </RadixCheckbox>
  )
}

function Label({ className, htmlFor, ...props }: ComponentProps<"label">) {
  return <label htmlFor={htmlFor} data-slot="label" className={cn("text-sm leading-none font-medium select-none", className)} {...props} />
}

const Dialog = RadixDialog
const DialogTrigger = RadixDialogTrigger
const DialogClose = RadixDialogClose

function DialogContent({ className, children, ...props }: ComponentProps<typeof RadixDialogContent>) {
  return (
    <RadixDialogPortal>
      <RadixDialogOverlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out" />
      <RadixDialogContent className={cn("fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-1/2 gap-4 rounded-lg border bg-background p-6", className)} {...props}>
        {children}
        <RadixDialogClose className="absolute top-4 right-4 opacity-70 hover:opacity-100" aria-label="Close">
          <XIcon aria-hidden="true" />
        </RadixDialogClose>
      </RadixDialogContent>
    </RadixDialogPortal>
  )
}

function DialogHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />
}

function DialogFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex justify-end gap-2", className)} {...props} />
}

function DialogTitle({ className, ...props }: ComponentProps<typeof RadixDialogTitle>) {
  return <RadixDialogTitle className={cn("text-lg font-semibold", className)} {...props} />
}

function DialogDescription({ className, ...props }: ComponentProps<typeof RadixDialogDescription>) {
  return <RadixDialogDescription className={cn("text-sm text-muted-foreground", className)} {...props} />
}

// The screen itself: what an app writes on top of the copied files.
export function ShadcnBefore() {
  return (
    <form className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="shadcn-updates" name="updates" defaultChecked />
        <Label htmlFor="shadcn-updates">Email me product updates</Label>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Delete project</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete this project?</DialogTitle>
            <DialogDescription>Its boards and files go too. This cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>r(()=>import(`./shadcn-before-C69Utu86.js`),[]));function we(){return(0,k.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,children:[(0,k.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,k.jsx)(d,{id:`kitora-updates`,name:`updates`,defaultChecked:!0}),(0,k.jsx)(u,{htmlFor:`kitora-updates`,children:`Email me product updates`})]}),(0,k.jsxs)(y,{children:[(0,k.jsx)(h,{asChild:!0,children:(0,k.jsx)(s,{variant:`outline`,children:`Delete project`})}),(0,k.jsxs)(m,{children:[(0,k.jsxs)(v,{children:[(0,k.jsx)(p,{children:`Delete this project?`}),(0,k.jsx)(f,{children:`Its boards and files go too. This cannot be undone.`})]}),(0,k.jsxs)(g,{children:[(0,k.jsx)(_,{asChild:!0,children:(0,k.jsx)(s,{variant:`outline`,children:`Cancel`})}),(0,k.jsx)(s,{variant:`destructive`,children:`Delete`})]})]})]})]})}var Z=`import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"
import { Label } from "@kitora/ui/label"

// After: the same screen on @kitora/ui. Nothing is copied into the app: each component is an import with the shadcn name and
// props, \`asChild\` included. The look comes from the active design language, so there are no class strings to keep in sync.
export function ShadcnAfter() {
  return (
    <form className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="kitora-updates" name="updates" defaultChecked />
        <Label htmlFor="kitora-updates">Email me product updates</Label>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Delete project</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete this project?</DialogTitle>
            <DialogDescription>Its boards and files go too. This cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>r(()=>import(`./shadcn-after-B0cJZL_c.js`),[]));function Q(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...b(),...e.components},{Api:n,Install:r,Relies:i,Snippet:a}=t;return n||$(`Api`,!0),r||$(`Install`,!0),i||$(`Relies`,!0),a||$(`Snippet`,!0),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(t.p,{children:[(0,k.jsx)(n,{package:`@kitora/ui`}),` has the shadcn/ui component names and props, one entry per component. The difference is where the code lives: shadcn/ui copies each component's source into your app, on Radix with `,(0,k.jsx)(t.code,{children:`cva`}),` variants and Tailwind classes; Kitora ships them as a package on its own primitives, so you import them and copy nothing.`]}),`
`,(0,k.jsx)(t.h2,{children:`Before and after`}),`
`,(0,k.jsxs)(t.p,{children:[`The Before is a screen as a shadcn/ui app has it, with the copied `,(0,k.jsx)(t.code,{children:`Button`}),`, `,(0,k.jsx)(t.code,{children:`Checkbox`}),`, `,(0,k.jsx)(t.code,{children:`Label`}),` and `,(0,k.jsx)(t.code,{children:`Dialog`}),` files folded into one example. The After is the same screen on kitora: the JSX is the same, only the imports change.`]}),`
`,(0,k.jsx)(a,{title:`Before`,source:X,children:(0,k.jsx)(Ce,{})}),`
`,(0,k.jsx)(a,{title:`After`,source:Z,children:(0,k.jsx)(we,{})}),`
`,(0,k.jsxs)(t.p,{children:[`The two behave the same: the checkbox toggles from the box, the label and Space, and posts `,(0,k.jsx)(t.code,{children:`updates=on`}),` with the form; the dialog opens by mouse, Enter and Space, moves focus to its first button, keeps Tab inside, and closes on Escape, Cancel or the corner button with focus back on the trigger. The page's test drives both with the same clicks and keys and compares what a person and a screen reader meet after every step.`]}),`
`,(0,k.jsx)(t.h2,{children:`Moving over`}),`
`,(0,k.jsxs)(t.p,{children:[`Install the package; the `,(0,k.jsx)(t.a,{href:`/docs/getting-started/install`,children:`install page`}),` shows the CSS imports your stylesheet needs beside it.`]}),`
`,(0,k.jsx)(r,{packages:[`@kitora/ui`]}),`
`,(0,k.jsxs)(t.ol,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Change the imports.`}),` `,(0,k.jsx)(t.code,{children:`@/components/ui/dialog`}),` becomes `,(0,k.jsx)(t.code,{children:`@kitora/ui/dialog`}),`, `,(0,k.jsx)(t.code,{children:`@/components/ui/checkbox`}),` becomes `,(0,k.jsx)(t.code,{children:`@kitora/ui/checkbox`}),`, and so on. The names stay: `,(0,k.jsx)(t.code,{children:`Dialog`}),`, `,(0,k.jsx)(t.code,{children:`DialogTrigger`}),`, `,(0,k.jsx)(t.code,{children:`DialogContent`}),`, `,(0,k.jsx)(t.code,{children:`DialogHeader`}),`, `,(0,k.jsx)(t.code,{children:`DialogFooter`}),`, `,(0,k.jsx)(t.code,{children:`DialogTitle`}),`, `,(0,k.jsx)(t.code,{children:`DialogDescription`}),`, `,(0,k.jsx)(t.code,{children:`DialogClose`}),`, `,(0,k.jsx)(t.code,{children:`Checkbox`}),`, `,(0,k.jsx)(t.code,{children:`Button`}),`, `,(0,k.jsx)(t.code,{children:`Label`}),`.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsxs)(t.strong,{children:[`Keep `,(0,k.jsx)(t.code,{children:`asChild`}),`.`]}),` `,(0,k.jsx)(t.code,{children:`Button`}),`, `,(0,k.jsx)(t.code,{children:`DialogTrigger`}),` and `,(0,k.jsx)(t.code,{children:`DialogClose`}),` take `,(0,k.jsx)(t.code,{children:`asChild`}),` as shadcn/ui does. They also take `,(0,k.jsx)(t.code,{children:`render`}),`, the primitives' spelling of the same thing, which takes the element as a prop instead of as the only child.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Delete the copied files`}),` once nothing imports them (`,(0,k.jsx)(t.code,{children:`components/ui/*`}),` and the `,(0,k.jsx)(t.code,{children:`cn`}),` helper, which `,(0,k.jsx)(t.code,{children:`@kitora/ui/utils`}),` also exports).`]}),`
`]}),`
`,(0,k.jsx)(t.h2,{children:`What changes`}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.strong,{children:`State attributes.`}),` Radix writes one `,(0,k.jsx)(t.code,{children:`data-state`}),` attribute; Kitora writes one attribute per state. A class written for Radix needs the new name:`]}),`
`,(0,k.jsxs)(t.table,{children:[(0,k.jsx)(t.thead,{children:(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.th,{children:`shadcn/ui (Radix)`}),(0,k.jsx)(t.th,{children:`Kitora`})]})}),(0,k.jsxs)(t.tbody,{children:[(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{children:(0,k.jsx)(t.code,{children:`data-[state=checked]:`})}),(0,k.jsx)(t.td,{children:(0,k.jsx)(t.code,{children:`data-checked:`})})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{children:(0,k.jsx)(t.code,{children:`data-[state=unchecked]:`})}),(0,k.jsx)(t.td,{children:(0,k.jsx)(t.code,{children:`data-unchecked:`})})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{children:(0,k.jsx)(t.code,{children:`data-[state=open]:`})}),(0,k.jsx)(t.td,{children:(0,k.jsx)(t.code,{children:`data-open:`})})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{children:(0,k.jsx)(t.code,{children:`data-[state=closed]:`})}),(0,k.jsx)(t.td,{children:(0,k.jsx)(t.code,{children:`data-closed:`})})]})]})]}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.strong,{children:`The look.`}),` shadcn/ui's look is the class strings in your copied files, so restyling means editing them. Kitora's components read the active design language: the dialog's radius, shadow and backdrop come from the `,(0,k.jsx)(t.code,{children:`dialog`}),` slot, and the checkbox's size, radius and fill from the `,(0,k.jsx)(t.code,{children:`checkbox`}),` slot, so one language restyles every dialog and checkbox at once. You can still pass `,(0,k.jsx)(t.code,{children:`className`}),`. `,(0,k.jsx)(t.a,{href:`/docs/concepts/design-languages`,children:`Design languages`}),` explains the slots, and the `,(0,k.jsx)(t.a,{href:`/kits/theme/languages`,children:`languages gallery`}),` switches them live.`]}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.strong,{children:`A few extras.`}),` `,(0,k.jsx)(t.code,{children:`Checkbox`}),` draws its own label and description with `,(0,k.jsx)(t.code,{children:`label`}),` and `,(0,k.jsx)(t.code,{children:`description`}),`; `,(0,k.jsx)(t.code,{children:`DialogContent`}),` names its corner button with `,(0,k.jsx)(t.code,{children:`closeLabel`}),`, takes `,(0,k.jsx)(t.code,{children:`size`}),`, and has a `,(0,k.jsx)(t.code,{children:`DialogBody`}),` part for long content. `,(0,k.jsx)(n,{name:`Dialog`}),`, `,(0,k.jsx)(n,{name:`Checkbox`}),` and `,(0,k.jsx)(n,{name:`Button`}),` list every prop.`]}),`
`,(0,k.jsxs)(t.p,{children:[`To go one level down, to the unstyled parts these components are built on, see `,(0,k.jsx)(t.a,{href:`/docs/migrating/radix`,children:`From Radix`}),`.`]}),`
`,(0,k.jsx)(i,{on:[`packages/ui/src/dialog.tsx`,`packages/ui/src/checkbox.tsx`,`packages/ui/src/button.tsx`,`packages/ui/src/label.tsx`,`packages/ui/src/utils.ts`,`src/kit/components/__tests__/rebuild/harness.tsx`,`src/docs/examples/__tests__/radix-equivalence.ts`,`src/docs/examples/__tests__/migrating-shadcn.test.tsx`,`src/docs/examples/__tests__/migrating-radix.test.tsx`]})]})}function Te(e={}){let{wrapper:t}={...b(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(Q,{...e})}):Q(e)}function $(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Te as default};