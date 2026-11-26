import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./user-plus-bAIjDwLE.js";import{Cc as n,Ic as r,ti as i}from"./index-B9ukmIN1.js";import{a,n as o,o as s,r as c,t as l}from"./card-B_Tor3B1.js";import{n as u}from"./people-CL6LYWEM.js";var d=e({AvatarStackComposeProjectCard:()=>m}),f=r(),p=[{name:`Alex Kim`,presence:`online`},{name:`Grace Hopper`,presence:`away`},{name:`Linus Torvalds`},{name:`Mira Otieno`},{name:`Ada Lovelace`}];function m(){return(0,f.jsxs)(l,{className:`w-full max-w-sm`,children:[(0,f.jsxs)(a,{children:[(0,f.jsx)(s,{children:`Checkout redesign`}),(0,f.jsx)(c,{children:`5 people · updated 2h ago`})]}),(0,f.jsxs)(o,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,f.jsx)(u,{people:p,max:3,size:`sm`,presence:!0}),(0,f.jsxs)(i,{size:`sm`,variant:`outline`,children:[(0,f.jsx)(t,{}),`Invite`]})]})]})}var h=e({AvatarStackSizes:()=>_}),g=[{name:`Alex Kim`},{name:`Grace Hopper`},{name:`Linus Torvalds`},{name:`Mira Otieno`},{name:`Ada Lovelace`},{name:`Hedy Lamarr`},{name:`Margaret Hamilton`}];function _(){return(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-6`,children:[(0,f.jsx)(u,{people:g,size:`xs`}),(0,f.jsx)(u,{people:g,size:`sm`}),(0,f.jsx)(u,{people:g,size:`md`}),(0,f.jsx)(u,{people:g,size:`lg`})]})}var v=`import { UserPlus } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { AvatarStack, type PersonLike } from "@kitora/display"

const TEAM: readonly PersonLike[] = [
  { name: "Alex Kim", presence: "online" },
  { name: "Grace Hopper", presence: "away" },
  { name: "Linus Torvalds" },
  { name: "Mira Otieno" },
  { name: "Ada Lovelace" },
]

export function AvatarStackComposeProjectCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Checkout redesign</CardTitle>
        <CardDescription>5 people · updated 2h ago</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center justify-between gap-2">
        <AvatarStack people={TEAM} max={3} size="sm" presence />
        <Button size="sm" variant="outline">
          <UserPlus />
          Invite
        </Button>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>n(()=>import(`./compose-C9un598W.js`),[]));var y=`import { AvatarStack, type PersonLike } from "@kitora/display"

const TEAM: readonly PersonLike[] = [
  { name: "Alex Kim" },
  { name: "Grace Hopper" },
  { name: "Linus Torvalds" },
  { name: "Mira Otieno" },
  { name: "Ada Lovelace" },
  { name: "Hedy Lamarr" },
  { name: "Margaret Hamilton" },
]

export function AvatarStackSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <AvatarStack people={TEAM} size="xs" />
      <AvatarStack people={TEAM} size="sm" />
      <AvatarStack people={TEAM} size="md" />
      <AvatarStack people={TEAM} size="lg" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>n(()=>import(`./sizes-BLl8A3Tm.js`),[]));var b={"./demos/avatar-stack/compose.tsx":d,"./demos/avatar-stack/sizes.tsx":h},x={"./demos/avatar-stack/compose.tsx":v,"./demos/avatar-stack/sizes.tsx":y};export{b as modules,x as sources};