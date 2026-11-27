import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./input-CLjf4jLu.js";import{$a as r,Cn as i,Ec as a,Ja as o,Qa as s,Uc as c,Xa as l,Ya as u,Za as d,co as f,eo as p,ri as m,zc as h}from"./index-BZuUy872.js";import{t as g}from"./label-Cw7IrV7Q.js";var _=e({DialogBuildYourOwn:()=>b}),v=t(c(),1),y=h();function b({open:e,onOpenChange:t}){let a=(0,v.useId)();return(0,y.jsxs)(f,{open:e,onOpenChange:e=>t?.(e),children:[(0,y.jsx)(p,{render:(0,y.jsx)(m,{}),children:`Invite member`}),(0,y.jsxs)(s,{children:[(0,y.jsx)(o,{className:`fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-starting-style:opacity-0 data-ending-style:opacity-0`}),(0,y.jsxs)(d,{className:`fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 outline-none transition-[opacity,scale] duration-150 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-sm`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(r,{className:`text-base leading-none font-medium`,children:`Invite a teammate`}),(0,y.jsx)(l,{className:`text-muted-foreground`,children:`They get an email with a sign-in link.`})]}),(0,y.jsxs)(`div`,{className:`grid gap-2`,children:[(0,y.jsx)(g,{htmlFor:a,children:`Email`}),(0,y.jsx)(n,{id:a,type:`email`,placeholder:`ada@example.com`})]}),(0,y.jsxs)(`div`,{className:`-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end`,children:[(0,y.jsx)(u,{render:(0,y.jsx)(m,{variant:`outline`}),children:`Cancel`}),(0,y.jsx)(m,{children:`Send invite`})]}),(0,y.jsx)(u,{render:(0,y.jsx)(i,{className:`absolute top-2 end-2`})})]})]})]})}var x=`import { useId } from "react"
import { Dialog } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { CloseButton } from "@kitora/ui/close-button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

/** A dialog built from the primitives' parts only: \`Dialog.Root\`, \`Trigger\`, \`Portal\`, \`Backdrop\`, \`Popup\`, \`Title\`, \`Description\` and \`Close\`, styled on their state attributes. */
export function DialogBuildYourOwn({ open, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  const id = useId()
  return (
    <Dialog.Root open={open} onOpenChange={(next) => onOpenChange?.(next)}>
      <Dialog.Trigger render={<Button />}>Invite member</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 outline-none transition-[opacity,scale] duration-150 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-sm">
          <div className="flex flex-col gap-2">
            <Dialog.Title className="text-base leading-none font-medium">Invite a teammate</Dialog.Title>
            <Dialog.Description className="text-muted-foreground">They get an email with a sign-in link.</Dialog.Description>
          </div>
          <div className="grid gap-2">
            <Label htmlFor={id}>Email</Label>
            <Input id={id} type="email" placeholder="ada@example.com" />
          </div>
          <div className="-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end">
            <Dialog.Close render={<Button variant="outline" />}>Cancel</Dialog.Close>
            <Button>Send invite</Button>
          </div>
          <Dialog.Close render={<CloseButton className="absolute top-2 end-2" />} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>a(()=>import(`./build-your-own-C4oiNpQ6.js`),[]));export{b as n,_ as r,x as t};