import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./avatar-DpYkDbpD.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f}from"./table-CB0TuZaG.js";import{t as p}from"./ellipsis-BestnnOQ.js";import{Bc as m,Cc as h,Ic as g,ti as _}from"./index-9y5uwRd3.js";import{t as v}from"./badge-CMT8Lr82.js";var y=e({TableBasic:()=>S}),b=g(),x=[{id:`INV-001`,status:`Paid`,amount:`$250.00`},{id:`INV-002`,status:`Pending`,amount:`$150.00`},{id:`INV-003`,status:`Unpaid`,amount:`$350.00`}];function S(){return(0,b.jsx)(`div`,{className:`w-full max-w-md overflow-x-auto`,children:(0,b.jsxs)(f,{children:[(0,b.jsx)(u,{children:`Recent invoices`}),(0,b.jsx)(d,{children:(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{children:`Invoice`}),(0,b.jsx)(l,{children:`Status`}),(0,b.jsx)(l,{className:`text-right`,children:`Amount`})]})}),(0,b.jsx)(c,{children:x.map(e=>(0,b.jsxs)(a,{children:[(0,b.jsx)(o,{className:`font-medium`,children:e.id}),(0,b.jsx)(o,{children:e.status}),(0,b.jsx)(o,{className:`text-right tabular-nums`,children:e.amount})]},e.id))}),(0,b.jsx)(i,{children:(0,b.jsxs)(a,{children:[(0,b.jsx)(o,{colSpan:2,children:`Total`}),(0,b.jsx)(o,{className:`text-right tabular-nums`,children:`$750.00`})]})})]})})}var C=e({TableComposeMemberList:()=>T}),w=[{name:`Ada Lovelace`,initials:`AL`,role:`Owner`},{name:`Grace Hopper`,initials:`GH`,role:`Admin`},{name:`Alan Turing`,initials:`AT`,role:`Member`}];function T(){return(0,b.jsx)(`div`,{className:`w-full max-w-md overflow-x-auto`,children:(0,b.jsxs)(f,{children:[(0,b.jsx)(d,{children:(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{children:`Member`}),(0,b.jsx)(l,{children:`Role`}),(0,b.jsx)(l,{className:`w-10`,children:(0,b.jsx)(`span`,{className:`sr-only`,children:`Actions`})})]})}),(0,b.jsx)(c,{children:w.map(e=>(0,b.jsxs)(a,{children:[(0,b.jsx)(o,{children:(0,b.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsx)(r,{className:`size-7`,children:(0,b.jsx)(n,{children:e.initials})}),e.name]})}),(0,b.jsx)(o,{children:(0,b.jsx)(v,{variant:e.role===`Owner`?`default`:`outline`,children:e.role})}),(0,b.jsx)(o,{children:(0,b.jsx)(_,{variant:`ghost`,size:`icon`,"aria-label":`Actions for ${e.name}`,children:(0,b.jsx)(p,{})})})]},e.name))})]})})}var E=e({TableSortableSticky:()=>k}),D=t(m(),1),O=[{name:`Ada Lovelace`,role:`Engineer`,joined:2019},{name:`Grace Hopper`,role:`Admiral`,joined:2015},{name:`Alan Turing`,role:`Researcher`,joined:2021},{name:`Katherine Johnson`,role:`Analyst`,joined:2017},{name:`Edsger Dijkstra`,role:`Engineer`,joined:2020},{name:`Barbara Liskov`,role:`Architect`,joined:2016},{name:`Donald Knuth`,role:`Author`,joined:2014},{name:`Margaret Hamilton`,role:`Director`,joined:2018}];function k(){let[e,t]=(0,D.useState)({key:`name`,direction:`ascending`}),n=e.direction===`none`?O:O.toSorted((t,n)=>(t[e.key]<n[e.key]?-1:1)*(e.direction===`ascending`?1:-1)),r=t=>e.key===t?e.direction:`none`;return(0,b.jsxs)(f,{size:`sm`,stickyHeader:!0,containerClassName:`max-h-56 max-w-lg rounded-md border border-border`,children:[(0,b.jsx)(d,{children:(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{children:(0,b.jsx)(s,{direction:r(`name`),onDirectionChange:e=>t({key:`name`,direction:e}),children:`Name`})}),(0,b.jsx)(l,{children:`Role`}),(0,b.jsx)(l,{children:(0,b.jsx)(s,{direction:r(`joined`),onDirectionChange:e=>t({key:`joined`,direction:e}),children:`Joined`})})]})}),(0,b.jsx)(c,{children:n.map(e=>(0,b.jsxs)(a,{children:[(0,b.jsx)(o,{children:e.name}),(0,b.jsx)(o,{className:`text-muted-foreground`,children:e.role}),(0,b.jsx)(o,{className:`tabular-nums`,children:e.joined})]},e.name))})]})}var A=`import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@kitora/ui/table"

const invoices = [
  { id: "INV-001", status: "Paid", amount: "$250.00" },
  { id: "INV-002", status: "Pending", amount: "$150.00" },
  { id: "INV-003", status: "Unpaid", amount: "$350.00" },
]

export function TableBasic() {
  return (
    <div className="w-full max-w-md overflow-x-auto">
      <Table>
        <TableCaption>Recent invoices</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.id}>
              <TableCell className="font-medium">{inv.id}</TableCell>
              <TableCell>{inv.status}</TableCell>
              <TableCell className="text-right tabular-nums">{inv.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right tabular-nums">$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>h(()=>import(`./basic-1QqSr1Ql.js`),[]));var j=`import { MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@kitora/ui/table"

const members = [
  { name: "Ada Lovelace", initials: "AL", role: "Owner" },
  { name: "Grace Hopper", initials: "GH", role: "Admin" },
  { name: "Alan Turing", initials: "AT", role: "Member" },
]

export function TableComposeMemberList() {
  return (
    <div className="w-full max-w-md overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((m) => (
            <TableRow key={m.name}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="size-7">
                    <AvatarFallback>{m.initials}</AvatarFallback>
                  </Avatar>
                  {m.name}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={m.role === "Owner" ? "default" : "outline"}>{m.role}</Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" aria-label={\`Actions for \${m.name}\`}>
                  <MoreHorizontal />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>h(()=>import(`./compose-BnFVP9i2.js`),[]));var M=`import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableSortButton, type TableSortDirection } from "@kitora/ui/table"

const people = [
  { name: "Ada Lovelace", role: "Engineer", joined: 2019 },
  { name: "Grace Hopper", role: "Admiral", joined: 2015 },
  { name: "Alan Turing", role: "Researcher", joined: 2021 },
  { name: "Katherine Johnson", role: "Analyst", joined: 2017 },
  { name: "Edsger Dijkstra", role: "Engineer", joined: 2020 },
  { name: "Barbara Liskov", role: "Architect", joined: 2016 },
  { name: "Donald Knuth", role: "Author", joined: 2014 },
  { name: "Margaret Hamilton", role: "Director", joined: 2018 },
]

type Key = "name" | "joined"

export function TableSortableSticky() {
  const [sort, setSort] = useState<{ key: Key; direction: TableSortDirection }>({ key: "name", direction: "ascending" })
  const rows = sort.direction === "none" ? people : people.toSorted((a, b) => (a[sort.key] < b[sort.key] ? -1 : 1) * (sort.direction === "ascending" ? 1 : -1))
  const directionOf = (key: Key) => (sort.key === key ? sort.direction : "none")
  return (
    <Table size="sm" stickyHeader containerClassName="max-h-56 max-w-lg rounded-md border border-border">
      <TableHeader>
        <TableRow>
          <TableHead>
            <TableSortButton direction={directionOf("name")} onDirectionChange={(direction) => setSort({ key: "name", direction })}>
              Name
            </TableSortButton>
          </TableHead>
          <TableHead>Role</TableHead>
          <TableHead>
            <TableSortButton direction={directionOf("joined")} onDirectionChange={(direction) => setSort({ key: "joined", direction })}>
              Joined
            </TableSortButton>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((p) => (
          <TableRow key={p.name}>
            <TableCell>{p.name}</TableCell>
            <TableCell className="text-muted-foreground">{p.role}</TableCell>
            <TableCell className="tabular-nums">{p.joined}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>h(()=>import(`./sortable-sticky-yfRdXEIk.js`),[]));var N={"./demos/table/basic.tsx":y,"./demos/table/compose.tsx":C,"./demos/table/sortable-sticky.tsx":E},P={"./demos/table/basic.tsx":A,"./demos/table/compose.tsx":j,"./demos/table/sortable-sticky.tsx":M};export{N as modules,P as sources};