import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{t as a}from"./-kits.auth.shared-Cf7nNAf_.js";import{l as o}from"./use-action-DU6QhQMN.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,u as _}from"./invite-pCKub49q.js";import{a as v}from"./roles-BzxboshL.js";import"./kit-gallery-BBavj2rC.js";import{t as y}from"./example-B67lLz1F.js";var b=i(),x=[{id:`admin`,name:`Admin`,permissions:[]},{id:`member`,name:`Member`,permissions:[]}],S=o([]);function C(){return(0,b.jsx)(p,{roles:x,existing:[`alan@acme.dev`],adapter:S})}var w=`import { createFakeTeamAdapter, InviteMembers, type Role } from "@kitora/auth"

const roles: Role[] = [
  { id: "admin", name: "Admin", permissions: [] },
  { id: "member", name: "Member", permissions: [] },
]

// stub: replace with your API (POST /invites)
const adapter = createFakeTeamAdapter([])

export function BasicInvite() {
  // paste "Ada <ada@acme.dev>, bob@, alan@acme.dev": valid, invalid and taken emails become marked chips
  return <InviteMembers roles={roles} existing={["alan@acme.dev"]} adapter={adapter} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>n(()=>import(`./team-invite-CCK6VWCC.js`),[]));var T=[{id:`docs.view`,label:`View docs`,group:`Docs`},{id:`docs.edit`,label:`Edit docs`,group:`Docs`,requires:[`docs.view`]},{id:`billing.view`,label:`View invoices`,group:`Billing`},{id:`billing.manage`,label:`Manage plan`,group:`Billing`,requires:[`billing.view`]}],E=[{id:`owner`,name:`Owner`,permissions:T.map(e=>e.id),locked:!0},{id:`editor`,name:`Editor`,permissions:[`docs.view`,`docs.edit`]},{id:`viewer`,name:`Viewer`,permissions:[`docs.view`]}],D=o([]);function O(){return(0,b.jsx)(c,{catalog:T,defaultRoles:E,adapter:D})}var k=`import { createFakeTeamAdapter, RoleMatrix, type Permission, type Role } from "@kitora/auth"

const catalog: Permission[] = [
  { id: "docs.view", label: "View docs", group: "Docs" },
  { id: "docs.edit", label: "Edit docs", group: "Docs", requires: ["docs.view"] },
  { id: "billing.view", label: "View invoices", group: "Billing" },
  { id: "billing.manage", label: "Manage plan", group: "Billing", requires: ["billing.view"] },
]

const roles: Role[] = [
  { id: "owner", name: "Owner", permissions: catalog.map((p) => p.id), locked: true },
  { id: "editor", name: "Editor", permissions: ["docs.view", "docs.edit"] },
  { id: "viewer", name: "Viewer", permissions: ["docs.view"] },
]

// stub: replace with your API; saveRoles receives only the changed cells
const adapter = createFakeTeamAdapter([])

export function BasicRoleMatrix() {
  // granting "Manage plan" also grants "View invoices"; revoking "View docs" revokes "Edit docs"
  return <RoleMatrix catalog={catalog} defaultRoles={roles} adapter={adapter} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>n(()=>import(`./team-matrix-AQmMUQZp.js`),[]));var A=[{id:`owner`,name:`Owner`,permissions:[]},{id:`member`,name:`Member`,permissions:[]},{id:`viewer`,name:`Viewer`,permissions:[]}],j=o([{id:`1`,name:`Ada Lovelace`,email:`ada@acme.dev`,roleId:`owner`,status:`active`,lastSeenAt:Date.now(),you:!0},{id:`2`,name:`Alan Turing`,email:`alan@acme.dev`,roleId:`member`,status:`active`,lastSeenAt:Date.now()-36e5},{id:`3`,name:`Grace Hopper`,email:`grace@acme.dev`,roleId:`viewer`,status:`suspended`,lastSeenAt:Date.now()-9*864e5},{id:`4`,name:`jordan`,email:`jordan@acme.dev`,roleId:`member`,status:`invited`,lastSeenAt:Date.now()-864e5}]);function M(){return(0,b.jsx)(m,{roles:A,adapter:j})}var N=`import { createFakeTeamAdapter, MembersTable, type Member, type Role } from "@kitora/auth"

const roles: Role[] = [
  { id: "owner", name: "Owner", permissions: [] },
  { id: "member", name: "Member", permissions: [] },
  { id: "viewer", name: "Viewer", permissions: [] },
]

const members: Member[] = [
  { id: "1", name: "Ada Lovelace", email: "ada@acme.dev", roleId: "owner", status: "active", lastSeenAt: Date.now(), you: true },
  { id: "2", name: "Alan Turing", email: "alan@acme.dev", roleId: "member", status: "active", lastSeenAt: Date.now() - 3_600_000 },
  { id: "3", name: "Grace Hopper", email: "grace@acme.dev", roleId: "viewer", status: "suspended", lastSeenAt: Date.now() - 9 * 86_400_000 },
  { id: "4", name: "jordan", email: "jordan@acme.dev", roleId: "member", status: "invited", lastSeenAt: Date.now() - 86_400_000 },
]

// stub: replace with your API (GET /members, PATCH /members/:id, DELETE /members/:id)
const adapter = createFakeTeamAdapter(members)

export function BasicMembersTable() {
  // without \`members\` the table loads adapter.listMembers() and keeps its own copy
  return <MembersTable roles={roles} adapter={adapter} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>n(()=>import(`./team-members-7b8MfFKW.js`),[]));var P=o([]);function F(){let e=_({catalog:l,defaultRoles:u});return(0,b.jsxs)(f.Root,{matrix:e,children:[(0,b.jsxs)(f.Table,{label:`Content permissions`,children:[(0,b.jsx)(f.Header,{}),v(e.catalog).slice(0,2).map(e=>(0,b.jsx)(f.Group,{group:e,children:e.permissions.map(e=>(0,b.jsx)(f.Row,{permission:e},e.id))},e.name))]}),(0,b.jsx)(f.Footer,{adapter:P})]})}var I=`import { createFakeTeamAdapter, FAKE_PERMISSIONS, FAKE_ROLES, groupPermissions, RoleMatrixParts, useRoleMatrix } from "@kitora/auth"

// stub: replace with your API (PUT /roles)
const adapter = createFakeTeamAdapter([])

// RoleMatrixParts is the same set of parts as RoleMatrix.*, without the preset:
// here only the first two permission groups, footer below.
export function BasicRoleMatrixParts() {
  const matrix = useRoleMatrix({ catalog: FAKE_PERMISSIONS, defaultRoles: FAKE_ROLES })
  return (
    <RoleMatrixParts.Root matrix={matrix}>
      <RoleMatrixParts.Table label="Content permissions">
        <RoleMatrixParts.Header />
        {groupPermissions(matrix.catalog)
          .slice(0, 2)
          .map((group) => (
            <RoleMatrixParts.Group key={group.name} group={group}>
              {group.permissions.map((p) => (
                <RoleMatrixParts.Row key={p.id} permission={p} />
              ))}
            </RoleMatrixParts.Group>
          ))}
      </RoleMatrixParts.Table>
      <RoleMatrixParts.Footer adapter={adapter} />
    </RoleMatrixParts.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>n(()=>import(`./team-matrix-parts-Br8TneRR.js`),[]));var L=e(r(),1),R=[{id:`admin`,name:`Admin`,permissions:[]},{id:`member`,name:`Member`,permissions:[]},{id:`viewer`,name:`Viewer`,permissions:[]}],z=[`active`,`invited`,`suspended`],B=[`Ada Lovelace`,`Alan Turing`,`Grace Hopper`,`Edsger Dijkstra`,`Barbara Liskov`,`Donald Knuth`,`Margaret Hamilton`,`Ken Thompson`,`Frances Allen`,`John Backus`,`Radia Perlman`,`Dennis Ritchie`].map((e,t)=>({id:`m${t+1}`,name:e,email:`${e.split(` `)[0].toLowerCase()}@acme.dev`,roleId:R[t%R.length].id,status:z[t%z.length],lastSeenAt:Date.now()-t*36e5}));function V(){let[e,t]=(0,L.useState)(B),[n,r]=(0,L.useState)(1),[i,a]=(0,L.useState)(5);return(0,b.jsxs)(`div`,{className:`grid gap-2 text-[13px]`,children:[(0,b.jsx)(`ul`,{className:`grid divide-y rounded-md border`,children:e.slice((n-1)*i,n*i).map(e=>(0,b.jsxs)(`li`,{className:`flex flex-wrap items-center gap-2 px-2 py-1.5`,children:[(0,b.jsx)(h,{member:e}),(0,b.jsxs)(`span`,{className:`min-w-0 flex-1 truncate`,children:[e.name,` `,(0,b.jsx)(`span`,{className:`text-muted-foreground`,children:e.email})]}),(0,b.jsx)(d,{status:e.status}),(0,b.jsx)(g,{roles:R,value:e.roleId,label:`Role of ${e.name}`,onValueChange:n=>t(t=>t.map(t=>t.id===e.id?{...t,roleId:n}:t))})]},e.id))}),(0,b.jsx)(s,{page:n,pageSize:i,total:e.length,pageSizes:[5,10],onPageChange:r,onPageSizeChange:e=>{a(e),r(1)}})]})}var H=`import { useState } from "react"
import { MemberAvatar, MembersPager, MemberStatusBadge, RoleSelect, type Member, type Role } from "@kitora/auth"

const roles: Role[] = [
  { id: "admin", name: "Admin", permissions: [] },
  { id: "member", name: "Member", permissions: [] },
  { id: "viewer", name: "Viewer", permissions: [] },
]

const statuses: Member["status"][] = ["active", "invited", "suspended"]
const names = ["Ada Lovelace", "Alan Turing", "Grace Hopper", "Edsger Dijkstra", "Barbara Liskov", "Donald Knuth", "Margaret Hamilton", "Ken Thompson", "Frances Allen", "John Backus", "Radia Perlman", "Dennis Ritchie"]
const seed: Member[] = names.map((name, i) => ({
  id: \`m\${i + 1}\`,
  name,
  email: \`\${name.split(" ")[0].toLowerCase()}@acme.dev\`,
  roleId: roles[i % roles.length].id,
  status: statuses[i % statuses.length],
  lastSeenAt: Date.now() - i * 3_600_000,
}))

// A members list of your own, from the parts the MembersTable preset uses.
export function BasicTeamParts() {
  const [members, setMembers] = useState(seed)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const shown = members.slice((page - 1) * pageSize, page * pageSize)
  return (
    <div className="grid gap-2 text-[13px]">
      <ul className="grid divide-y rounded-md border">
        {shown.map((m) => (
          <li key={m.id} className="flex flex-wrap items-center gap-2 px-2 py-1.5">
            <MemberAvatar member={m} />
            <span className="min-w-0 flex-1 truncate">
              {m.name} <span className="text-muted-foreground">{m.email}</span>
            </span>
            <MemberStatusBadge status={m.status} />
            {/* stub: replace with your API (PATCH /members/:id) */}
            <RoleSelect roles={roles} value={m.roleId} label={\`Role of \${m.name}\`} onValueChange={(roleId) => setMembers((all) => all.map((x) => (x.id === m.id ? { ...x, roleId } : x)))} />
          </li>
        ))}
      </ul>
      <MembersPager
        page={page}
        pageSize={pageSize}
        total={members.length}
        pageSizes={[5, 10]}
        onPageChange={setPage}
        onPageSizeChange={(size) => {
          setPageSize(size)
          setPage(1)
        }}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>n(()=>import(`./team-parts-DOCiMUZm.js`),[]));function U(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(t,{title:`Basics: roles and members`,children:"Roles and permissions are plain data; the matrix edits a working copy, keeps dependencies whole and saves only the changed cells. Members and invites go through a small `TeamAdapter`."}),(0,b.jsx)(y,{n:1,title:`A role matrix`,blurb:`Permissions × roles. Click a cell or a group header (tri-state); arrows move between cells, Space toggles. Owner is locked. Changed cells are marked until you save or discard.`,code:k,children:(0,b.jsx)(a,{testId:`basic-role-matrix`,className:`p-3`,children:(0,b.jsx)(O,{})})}),(0,b.jsx)(y,{n:2,title:`A members table`,blurb:`Role select per row (the last owner and you are locked), status, last active, a row menu with resend and remove-with-confirm, search and a role filter.`,code:N,children:(0,b.jsx)(a,{testId:`basic-members`,className:`p-3`,children:(0,b.jsx)(M,{})})}),(0,b.jsx)(y,{n:3,title:`Invite members`,blurb:`Type or paste a list: each email becomes a chip, invalid and already-member ones are marked and skipped.`,code:w,children:(0,b.jsx)(a,{testId:`basic-invite`,className:`max-w-lg p-4`,children:(0,b.jsx)(C,{})})}),(0,b.jsx)(y,{n:4,title:`A role matrix from RoleMatrixParts`,blurb:"`RoleMatrixParts` (Root, Table, Header, Group, Row, Footer) with only the first two permission groups and the footer below.",code:I,children:(0,b.jsx)(a,{testId:`basic-role-matrix-parts`,className:`p-3`,children:(0,b.jsx)(F,{})})}),(0,b.jsx)(y,{n:5,title:`A members list from parts`,blurb:"Your own rows from `MemberAvatar`, `MemberStatusBadge` and `RoleSelect`, paged by `MembersPager` (first, prev, pages, next, last, page size).",code:H,children:(0,b.jsx)(a,{testId:`basic-team-parts`,className:`p-3`,children:(0,b.jsx)(V,{})})})]})}export{U as component};