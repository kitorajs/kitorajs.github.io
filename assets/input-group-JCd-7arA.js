import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./at-sign-DLWHfEaA.js";import{t as r}from"./search-BZ0gLa1o.js";import{t as i}from"./send-BbGn8CvN.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./input-group-BPUTNiVu.js";import{Bc as d,Cc as f,Di as p,Ic as m}from"./index-9y5uwRd3.js";import{t as h}from"./label-BCdE7eBP.js";var g=e({InputGroupBasic:()=>y}),_=t(d(),1),v=m();function y(){let e=(0,_.useId)(),t=(0,_.useId)(),d=(0,_.useId)(),f=(0,_.useId)();return(0,v.jsxs)(`div`,{className:`grid w-full max-w-sm gap-3`,children:[(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{children:(0,v.jsx)(r,{})}),(0,v.jsx)(o,{id:e,"aria-label":`Search`,placeholder:`Search…`})]}),(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{children:(0,v.jsx)(a,{children:`$`})}),(0,v.jsx)(o,{id:t,"aria-label":`Price`,inputMode:`decimal`,placeholder:`0.00`}),(0,v.jsx)(s,{align:`inline-end`,children:(0,v.jsx)(a,{children:`USD`})})]}),(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{children:(0,v.jsx)(n,{})}),(0,v.jsx)(o,{id:d,"aria-label":`Username`,placeholder:`username`}),(0,v.jsx)(s,{align:`inline-end`,children:(0,v.jsx)(l,{children:`Check`})})]}),(0,v.jsxs)(u,{children:[(0,v.jsx)(c,{id:f,"aria-label":`Note`,placeholder:`Write a note…`}),(0,v.jsxs)(s,{align:`block-end`,children:[(0,v.jsx)(a,{children:`0 / 280`}),(0,v.jsx)(l,{size:`icon-xs`,variant:`default`,"aria-label":`Send`,className:`ml-auto`,children:(0,v.jsx)(i,{})})]})]})]})}var b=e({InputGroupComposeShareLink:()=>x});function x(){let e=(0,_.useId)();return(0,v.jsxs)(`div`,{className:`grid w-full max-w-sm gap-2`,children:[(0,v.jsx)(h,{htmlFor:e,children:`Share link`}),(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{children:(0,v.jsx)(a,{children:`https://`})}),(0,v.jsx)(o,{id:e,readOnly:!0,defaultValue:`kitora.dev/s/9f2a`}),(0,v.jsx)(s,{align:`inline-end`,children:(0,v.jsx)(l,{size:`icon-xs`,"aria-label":`Copy link`,children:(0,v.jsx)(p,{})})})]}),(0,v.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Anyone with the link can view.`})]})}var S=`import { useId } from "react"
import { AtSign, Search, Send } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "@kitora/ui/input-group"

export function InputGroupBasic() {
  const searchId = useId()
  const priceId = useId()
  const userId = useId()
  const noteId = useId()
  return (
    <div className="grid w-full max-w-sm gap-3">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput id={searchId} aria-label="Search" placeholder="Search…" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id={priceId} aria-label="Price" inputMode="decimal" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <AtSign />
        </InputGroupAddon>
        <InputGroupInput id={userId} aria-label="Username" placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Check</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea id={noteId} aria-label="Note" placeholder="Write a note…" />
        <InputGroupAddon align="block-end">
          <InputGroupText>0 / 280</InputGroupText>
          <InputGroupButton size="icon-xs" variant="default" aria-label="Send" className="ml-auto">
            <Send />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>f(()=>import(`./basic-B4u__QNp.js`),[]));var C=`import { useId } from "react"
import { Copy } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@kitora/ui/input-group"
import { Label } from "@kitora/ui/label"

export function InputGroupComposeShareLink() {
  const id = useId()
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor={id}>Share link</Label>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id={id} readOnly defaultValue="kitora.dev/s/9f2a" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Copy link">
            <Copy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <p className="text-xs text-muted-foreground">Anyone with the link can view.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>f(()=>import(`./compose-DT5tuuhD.js`),[]));var w={"./demos/input-group/basic.tsx":g,"./demos/input-group/compose.tsx":b},T={"./demos/input-group/basic.tsx":S,"./demos/input-group/compose.tsx":C};export{w as modules,T as sources};