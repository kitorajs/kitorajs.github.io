import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./alert-dialog-t7ITvAJX.js";import{t as f}from"./trash-2-0f767-k3.js";import{t as p}from"./input-2rqm_FXH.js";import{Bc as m,Cc as h,Ic as g,Ja as _,Ka as v,Qa as y,Xa as b,Ya as x,Za as S,qa as C,ti as w}from"./index-9y5uwRd3.js";import{t as T}from"./label-BCdE7eBP.js";var E=e({AlertDialogBuildYourOwn:()=>k}),D=t(m(),1),O=g();function k({open:e,onOpenChange:t}){let n=(0,D.useRef)(null);return(0,O.jsxs)(d,{open:e,onOpenChange:e=>t?.(e),children:[(0,O.jsxs)(y,{render:(0,O.jsx)(w,{variant:`destructive`}),children:[(0,O.jsx)(f,{}),`Delete account`]}),(0,O.jsxs)(b,{children:[(0,O.jsx)(v,{className:`fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-starting-style:opacity-0 data-ending-style:opacity-0`}),(0,O.jsxs)(x,{initialFocus:n,className:`fixed top-1/2 left-1/2 z-50 grid w-full max-w-xs -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 outline-none transition-[opacity,scale] duration-150 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-sm`,children:[(0,O.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,O.jsx)(S,{className:`text-base font-medium`,children:`Delete this account?`}),(0,O.jsx)(_,{className:`text-sm text-muted-foreground`,children:`This permanently removes the account and all its data. This action cannot be undone.`})]}),(0,O.jsxs)(`div`,{className:`-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end`,children:[(0,O.jsx)(C,{ref:n,render:(0,O.jsx)(w,{variant:`outline`}),children:`Cancel`}),(0,O.jsx)(w,{children:`Delete forever`})]})]})]})]})}var A=e({AlertDialogCancelFirst:()=>j});function j(){return(0,O.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,O.jsxs)(u,{children:[(0,O.jsx)(a,{asChild:!0,children:(0,O.jsx)(w,{variant:`destructive`,children:`Delete project`})}),(0,O.jsxs)(i,{children:[(0,O.jsxs)(l,{children:[(0,O.jsx)(r,{children:`Delete this project?`}),(0,O.jsx)(n,{children:`Its boards, files and history go with it. This cannot be undone.`})]}),(0,O.jsxs)(s,{children:[(0,O.jsx)(o,{variant:`destructive`,children:`Delete project`}),(0,O.jsx)(c,{children:`Keep project`})]})]})]})})}var M=e({AlertDialogComposeTypeToConfirm:()=>P}),N=`acme-web`;function P(){let e=(0,D.useId)(),[t,d]=(0,D.useState)(``);return(0,O.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,O.jsxs)(u,{children:[(0,O.jsx)(a,{asChild:!0,children:(0,O.jsx)(w,{variant:`destructive`,children:`Delete project`})}),(0,O.jsxs)(i,{children:[(0,O.jsxs)(l,{children:[(0,O.jsxs)(r,{children:[`Delete `,N,`?`]}),(0,O.jsx)(n,{children:`All deployments and logs are removed. This cannot be undone.`})]}),(0,O.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,O.jsxs)(T,{htmlFor:e,children:[`Type `,N,` to confirm`]}),(0,O.jsx)(p,{id:e,value:t,onChange:e=>d(e.target.value),autoComplete:`off`})]}),(0,O.jsxs)(s,{children:[(0,O.jsx)(c,{children:`Cancel`}),(0,O.jsx)(o,{disabled:t!==N,children:`Delete`})]})]})]})})}var F=e({AlertDialogConfirmDestructive:()=>I});function I(){return(0,O.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,O.jsxs)(u,{children:[(0,O.jsx)(a,{asChild:!0,children:(0,O.jsxs)(w,{variant:`destructive`,children:[(0,O.jsx)(f,{}),`Delete account`]})}),(0,O.jsxs)(i,{children:[(0,O.jsxs)(l,{children:[(0,O.jsx)(r,{children:`Delete this account?`}),(0,O.jsx)(n,{children:`This permanently removes the account and all its data. This action cannot be undone.`})]}),(0,O.jsxs)(s,{children:[(0,O.jsx)(c,{children:`Cancel`}),(0,O.jsx)(o,{children:`Delete forever`})]})]})]})})}var L=`import { useRef } from "react"
import { Trash2 } from "lucide-react"
import { AlertDialog } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"

/**
 * An alert dialog built from the primitives' parts only: \`AlertDialog.Root\`, \`Trigger\`, \`Portal\`, \`Backdrop\`, \`Popup\`, \`Title\`,
 * \`Description\` and \`Close\`. \`initialFocus\` points at the cancel button, so an Enter pressed out of habit cancels instead of deleting.
 */
export function AlertDialogBuildYourOwn({ open, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  const cancelRef = useRef<HTMLButtonElement>(null)
  return (
    <AlertDialog.Root open={open} onOpenChange={(next) => onOpenChange?.(next)}>
      <AlertDialog.Trigger render={<Button variant="destructive" />}>
        <Trash2 />
        Delete account
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <AlertDialog.Popup initialFocus={cancelRef} className="fixed top-1/2 left-1/2 z-50 grid w-full max-w-xs -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 outline-none transition-[opacity,scale] duration-150 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-sm">
          <div className="grid gap-1.5">
            <AlertDialog.Title className="text-base font-medium">Delete this account?</AlertDialog.Title>
            <AlertDialog.Description className="text-sm text-muted-foreground">This permanently removes the account and all its data. This action cannot be undone.</AlertDialog.Description>
          </div>
          <div className="-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end">
            <AlertDialog.Close ref={cancelRef} render={<Button variant="outline" />}>
              Cancel
            </AlertDialog.Close>
            <Button>Delete forever</Button>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>h(()=>import(`./build-your-own-BLV6NZKP.js`),[]));var R=`import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@kitora/ui/alert-dialog"
import { Button } from "@kitora/ui/button"

// The destructive action comes first in the footer, yet focus opens on "Keep project": an alert dialog starts on its \`AlertDialogCancel\`
// (the least destructive choice), so an Enter pressed out of habit cancels. Pass \`initialFocus\` to the content to choose otherwise.
export function AlertDialogCancelFirst() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete project</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this project?</AlertDialogTitle>
            <AlertDialogDescription>Its boards, files and history go with it. This cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction variant="destructive">Delete project</AlertDialogAction>
            <AlertDialogCancel>Keep project</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>h(()=>import(`./cancel-first-DBq_JnOP.js`),[]));var z=`import { useId, useState } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@kitora/ui/alert-dialog"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

const PROJECT = "acme-web"

export function AlertDialogComposeTypeToConfirm() {
  const id = useId()
  const [value, setValue] = useState("")
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete project</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {PROJECT}?</AlertDialogTitle>
            <AlertDialogDescription>All deployments and logs are removed. This cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid gap-1.5">
            <Label htmlFor={id}>Type {PROJECT} to confirm</Label>
            <Input id={id} value={value} onChange={(e) => setValue(e.target.value)} autoComplete="off" />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled={value !== PROJECT}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>h(()=>import(`./compose-BhRFcrVA.js`),[]));var B=`import { Trash2 } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@kitora/ui/alert-dialog"
import { Button } from "@kitora/ui/button"

export function AlertDialogConfirmDestructive() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">
            <Trash2 />
            Delete account
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this account?</AlertDialogTitle>
            <AlertDialogDescription>This permanently removes the account and all its data. This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete forever</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>h(()=>import(`./confirm-destructive-BsX1ZFF9.js`),[]));var V={"./demos/alert-dialog/build-your-own.tsx":E,"./demos/alert-dialog/cancel-first.tsx":A,"./demos/alert-dialog/compose.tsx":M,"./demos/alert-dialog/confirm-destructive.tsx":F},H={"./demos/alert-dialog/build-your-own.tsx":L,"./demos/alert-dialog/cancel-first.tsx":R,"./demos/alert-dialog/compose.tsx":z,"./demos/alert-dialog/confirm-destructive.tsx":B};export{V as modules,H as sources};