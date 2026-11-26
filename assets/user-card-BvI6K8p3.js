import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n,ti as r}from"./index-q72zUtm9.js";import{t as i}from"./badge-Be8rVEaF.js";import{a,n as o,o as s,t as c}from"./card-WiouR7Ep.js";import{i as l}from"./people-Cg6ti21N.js";var u=e({UserCardComposeTeamList:()=>p}),d=n(),f=[{name:`Ada Lovelace`,email:`ada@example.com`,presence:`online`,role:`Owner`},{name:`Grace Hopper`,email:`grace@example.com`,presence:`away`,role:`Admin`}];function p(){return(0,d.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,d.jsxs)(c,{className:`w-full max-w-sm`,children:[(0,d.jsxs)(a,{className:`flex flex-row flex-wrap items-center justify-between gap-2`,children:[(0,d.jsx)(s,{children:`Team`}),(0,d.jsx)(r,{size:`sm`,variant:`outline`,children:`Invite`})]}),(0,d.jsx)(o,{className:`grid gap-2`,children:f.map(e=>(0,d.jsx)(l,{person:{name:e.name,presence:e.presence},secondary:e.email,size:`sm`,trailing:(0,d.jsx)(i,{variant:`secondary`,children:e.role})},e.email))})]})})}var m=e({UserCardSizes:()=>h});function h(){return(0,d.jsx)(`div`,{className:`flex justify-center items-stretch flex-col gap-2`,children:(0,d.jsxs)(`div`,{className:`grid w-full max-w-sm gap-2`,children:[(0,d.jsx)(l,{person:{name:`Grace Hopper`,presence:`online`},secondary:`@grace`,size:`lg`}),(0,d.jsx)(l,{person:{name:`Linus Torvalds`,presence:`away`},secondary:`Maintainer`,size:`md`}),(0,d.jsx)(l,{person:{name:`Ada Lovelace`,presence:`offline`},secondary:`ada@example.com`,size:`sm`})]})})}var g=`import { PersonCard } from "@kitora/display"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"

const TEAM = [
  { name: "Ada Lovelace", email: "ada@example.com", presence: "online", role: "Owner" },
  { name: "Grace Hopper", email: "grace@example.com", presence: "away", role: "Admin" },
] as const

export function UserCardComposeTeamList() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2">
          <CardTitle>Team</CardTitle>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </CardHeader>
        <CardContent className="grid gap-2">
          {TEAM.map((u) => (
            <PersonCard key={u.email} person={{ name: u.name, presence: u.presence }} secondary={u.email} size="sm" trailing={<Badge variant="secondary">{u.role}</Badge>} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>t(()=>import(`./compose-DVybkA-H.js`),[]));var _=`import { PersonCard } from "@kitora/display"

export function UserCardSizes() {
  return (
    <div className="flex justify-center items-stretch flex-col gap-2">
      <div className="grid w-full max-w-sm gap-2">
        <PersonCard person={{ name: "Grace Hopper", presence: "online" }} secondary="@grace" size="lg" />
        <PersonCard person={{ name: "Linus Torvalds", presence: "away" }} secondary="Maintainer" size="md" />
        <PersonCard person={{ name: "Ada Lovelace", presence: "offline" }} secondary="ada@example.com" size="sm" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./sizes-WK6FqB08.js`),[]));var v={"./demos/user-card/compose.tsx":u,"./demos/user-card/sizes.tsx":m},y={"./demos/user-card/compose.tsx":g,"./demos/user-card/sizes.tsx":_};export{v as modules,y as sources};