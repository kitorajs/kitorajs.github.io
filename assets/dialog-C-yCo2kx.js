import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./trash-2-qhjCvUtq.js";import{t as r}from"./input-C8M4VLUF.js";import{Bc as i,Cc as a,Ic as o,ti as s}from"./index-q72zUtm9.js";import{t as c}from"./label-DjxTNoON.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./dialog-DUcAD2bv.js";import{r as y,t as b}from"./build-your-own-D3bpUQ7e.js";var x=e({DialogComposeInviteForm:()=>w}),S=t(i(),1),C=o();function w(){let e=(0,S.useId)();return(0,C.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,C.jsxs)(_,{children:[(0,C.jsx)(f,{render:(0,C.jsx)(s,{}),children:`Invite member`}),(0,C.jsxs)(d,{className:`max-w-sm`,children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:`Invite a teammate`}),(0,C.jsx)(l,{children:`They get an email with a sign-in link.`})]}),(0,C.jsxs)(`div`,{className:`grid gap-2`,children:[(0,C.jsx)(c,{htmlFor:e,children:`Email`}),(0,C.jsx)(r,{id:e,type:`email`,placeholder:`ada@example.com`})]}),(0,C.jsxs)(m,{children:[(0,C.jsx)(h,{render:(0,C.jsx)(s,{variant:`outline`}),children:`Cancel`}),(0,C.jsx)(s,{children:`Send invite`})]})]})]})})}var T=e({DialogConfirmDestructive:()=>E});function E(){return(0,C.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,C.jsxs)(_,{children:[(0,C.jsx)(f,{asChild:!0,children:(0,C.jsxs)(s,{variant:`destructive`,children:[(0,C.jsx)(n,{}),`Delete project`]})}),(0,C.jsxs)(d,{children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:`Delete this project?`}),(0,C.jsx)(l,{children:`This action is permanent. All routes, deployments, and logs go with it.`})]}),(0,C.jsxs)(m,{children:[(0,C.jsx)(h,{asChild:!0,children:(0,C.jsx)(s,{variant:`outline`,children:`Cancel`})}),(0,C.jsx)(s,{variant:`destructive`,children:`Delete forever`})]})]})]})})}var D=e({DialogOneDialogManyTriggers:()=>A}),O=[{id:`INV-1042`,total:`$1,240.00`},{id:`INV-1043`,total:`$86.50`},{id:`INV-1044`,total:`$4,310.20`}],k=v();function A(){return(0,C.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[O.map(e=>(0,C.jsx)(f,{handle:k,payload:e,asChild:!0,children:(0,C.jsxs)(s,{variant:`outline`,children:[`Review `,e.id]})},e.id)),(0,C.jsx)(s,{variant:`ghost`,onClick:()=>k.openWithPayload({id:`INV-0000`,total:`$0.00`}),children:`Open without a trigger`})]}),(0,C.jsx)(_,{handle:k,children:({payload:e})=>(0,C.jsxs)(d,{children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:e?.id}),(0,C.jsxs)(l,{children:[`Total due `,e?.total,`. Approve it or send it back.`]})]}),(0,C.jsxs)(m,{children:[(0,C.jsx)(h,{asChild:!0,children:(0,C.jsx)(s,{variant:`outline`,children:`Send back`})}),(0,C.jsx)(h,{asChild:!0,children:(0,C.jsx)(s,{children:`Approve`})})]})]})})]})}var j=e({DialogScrollingBodyAndSizes:()=>P}),M=[`sm`,`md`,`lg`,`xl`,`full`],N=Array.from({length:12},(e,t)=>`Section ${t+1}. The service is provided as is. You keep the rights to what you upload and grant us the licence we need to store and show it to the people you share it with.`);function P(){let[e,t]=(0,S.useState)(`md`);return(0,C.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,C.jsx)(`div`,{className:`flex flex-wrap justify-center gap-1.5`,role:`group`,"aria-label":`Dialog size`,children:M.map(n=>(0,C.jsx)(s,{size:`sm`,variant:n===e?`default`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))}),(0,C.jsxs)(_,{children:[(0,C.jsx)(f,{asChild:!0,children:(0,C.jsx)(s,{variant:`outline`,children:`Read the terms`})}),(0,C.jsxs)(d,{size:e,children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{children:`Terms of service`}),(0,C.jsx)(l,{children:`Please read them before you accept.`})]}),(0,C.jsx)(p,{className:`flex flex-col gap-3 text-muted-foreground`,children:N.map(e=>(0,C.jsx)(`p`,{children:e},e))}),(0,C.jsxs)(m,{children:[(0,C.jsx)(h,{asChild:!0,children:(0,C.jsx)(s,{variant:`outline`,children:`Decline`})}),(0,C.jsx)(h,{asChild:!0,children:(0,C.jsx)(s,{children:`Accept`})})]})]})]})]})}var F=`import { useId } from "react"
import { Button } from "@kitora/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function DialogComposeInviteForm() {
  const id = useId()
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Dialog>
        <DialogTrigger render={<Button />}>Invite member</DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Invite a teammate</DialogTitle>
            <DialogDescription>They get an email with a sign-in link.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor={id}>Email</Label>
            <Input id={id} type="email" placeholder="ada@example.com" />
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
            <Button>Send invite</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>a(()=>import(`./compose-C8aLsM-9.js`),[]));var I=`import { Trash2 } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"

export function DialogConfirmDestructive() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">
            <Trash2 />
            Delete project
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete this project?</DialogTitle>
            <DialogDescription>This action is permanent. All routes, deployments, and logs go with it.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete forever</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>a(()=>import(`./confirm-destructive-DXkzYqgr.js`),[]));var L=`import { Button } from "@kitora/ui/button"
import { createDialogHandle, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"

interface Invoice {
  readonly id: string
  readonly total: string
}

const invoices: readonly Invoice[] = [
  { id: "INV-1042", total: "$1,240.00" },
  { id: "INV-1043", total: "$86.50" },
  { id: "INV-1044", total: "$4,310.20" },
]

const review = createDialogHandle<Invoice>()

export function DialogOneDialogManyTriggers() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {invoices.map((invoice) => (
          <DialogTrigger key={invoice.id} handle={review} payload={invoice} asChild>
            <Button variant="outline">Review {invoice.id}</Button>
          </DialogTrigger>
        ))}
        <Button variant="ghost" onClick={() => review.openWithPayload({ id: "INV-0000", total: "$0.00" })}>
          Open without a trigger
        </Button>
      </div>
      <Dialog handle={review}>
        {({ payload }) => (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{payload?.id}</DialogTitle>
              <DialogDescription>Total due {payload?.total}. Approve it or send it back.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Send back</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Approve</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>a(()=>import(`./one-dialog-many-triggers-edqDzL8q.js`),[]));var R=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"

const SIZES = ["sm", "md", "lg", "xl", "full"] as const

const SECTIONS = Array.from({ length: 12 }, (_, i) => \`Section \${i + 1}. The service is provided as is. You keep the rights to what you upload and grant us the licence we need to store and show it to the people you share it with.\`)

// A long dialog: the terms sit in a \`DialogBody\`, so only the body scrolls and the title and the buttons stay in view on a short screen.
// \`size\` widens the dialog from the \`sm\` breakpoint up (\`sm\` is the default width).
export function DialogScrollingBodyAndSizes() {
  const [size, setSize] = useState<(typeof SIZES)[number]>("md")
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap justify-center gap-1.5" role="group" aria-label="Dialog size">
        {SIZES.map((s) => (
          <Button key={s} size="sm" variant={s === size ? "default" : "outline"} aria-pressed={s === size} onClick={() => setSize(s)}>
            {s}
          </Button>
        ))}
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Read the terms</Button>
        </DialogTrigger>
        <DialogContent size={size}>
          <DialogHeader>
            <DialogTitle>Terms of service</DialogTitle>
            <DialogDescription>Please read them before you accept.</DialogDescription>
          </DialogHeader>
          <DialogBody className="flex flex-col gap-3 text-muted-foreground">
            {SECTIONS.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Decline</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Accept</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>a(()=>import(`./scrolling-body-and-sizes-DokjrOjn.js`),[]));var z={"./demos/dialog/build-your-own.tsx":y,"./demos/dialog/compose.tsx":x,"./demos/dialog/confirm-destructive.tsx":T,"./demos/dialog/one-dialog-many-triggers.tsx":D,"./demos/dialog/scrolling-body-and-sizes.tsx":j},B={"./demos/dialog/build-your-own.tsx":b,"./demos/dialog/compose.tsx":F,"./demos/dialog/confirm-destructive.tsx":I,"./demos/dialog/one-dialog-many-triggers.tsx":L,"./demos/dialog/scrolling-body-and-sizes.tsx":R};export{z as modules,B as sources};