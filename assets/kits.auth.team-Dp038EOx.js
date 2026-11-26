import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n,n as r,t as i}from"./tabs-C_iMeG9z.js";import{s as a}from"./kit-docs-BUovISd0.js";import{Bc as o,Cc as s,Ic as c}from"./index-B9ukmIN1.js";import{d as l,t as u}from"./-kits.auth.shared-C1T4AirR.js";import{l as d}from"./use-action-NSZ3o2et.js";import{c as f,d as p,f as m,o as h,p as g,t as _,u as v}from"./invite-DxFW6AYO.js";import{a as y}from"./roles-DkuZMrjS.js";import"./kit-gallery-Bph7isB2.js";import{t as b}from"./example-BGnSQG2Y.js";var x=e(o(),1),S=c(),C=g(),w=d(C,{latency:450});function T(){let[e,a]=(0,x.useState)(C),o=(0,x.useMemo)(()=>m.map(t=>({...t,count:e.filter(e=>e.roleId===t.id).length})),[e]);return(0,S.jsx)(l,{team:w,children:(0,S.jsxs)(`div`,{className:`flex h-full flex-col gap-3 p-4 text-[13px]`,children:[(0,S.jsxs)(`header`,{className:`flex items-start justify-between gap-3`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h1`,{className:`text-[15px] font-semibold tracking-tight`,children:`Team and permissions`}),(0,S.jsxs)(`p`,{className:`text-[12.5px] text-muted-foreground`,children:[`Acme workspace · `,e.filter(e=>e.status===`active`).length,` active · `,e.filter(e=>e.status===`invited`).length,` pending invites`]})]}),(0,S.jsx)(_,{roles:m.filter(e=>!e.locked),existing:e.map(e=>e.email),onInvited:e=>a(t=>[...t,...e])})]}),(0,S.jsxs)(i,{defaultValue:`members`,className:`flex min-h-0 flex-1 flex-col`,children:[(0,S.jsxs)(n,{children:[(0,S.jsx)(t,{value:`members`,children:`Members`}),(0,S.jsx)(t,{value:`roles`,children:`Roles`})]}),(0,S.jsx)(r,{value:`members`,className:`min-h-0 flex-1 overflow-auto pt-2`,children:(0,S.jsx)(h,{roles:m,members:e,onMembersChange:a,pageSize:8})}),(0,S.jsxs)(r,{value:`roles`,className:`flex min-h-0 flex-1 flex-col gap-2 pt-2`,children:[(0,S.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:o.map(e=>(0,S.jsxs)(`span`,{className:`inline-flex h-6 items-center gap-1 rounded-md border px-2 text-[12px]`,children:[e.name,(0,S.jsx)(`span`,{className:`text-muted-foreground tabular-nums`,children:e.count})]},e.id))}),(0,S.jsx)(f,{catalog:p,defaultRoles:m,className:`min-h-0 flex-1`})]})]})]})})}var E=`import { useMemo, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kitora/ui/tabs"
import { AuthKitProvider, createFakeTeamAdapter, FAKE_PERMISSIONS, FAKE_ROLES, fakeTeamMembers, InviteDialog, MembersTable, RoleMatrix, type Member } from "@kitora/auth"

// stub: replace with your API; one adapter feeds the table, the invite dialog and the matrix
const seed = fakeTeamMembers()
const team = createFakeTeamAdapter(seed, { latency: 450 })

export function TeamAdmin() {
  // the page owns the member list, so a sent invite shows up in the table at once
  const [members, setMembers] = useState<readonly Member[]>(seed)
  const counts = useMemo(() => FAKE_ROLES.map((r) => ({ ...r, count: members.filter((m) => m.roleId === r.id).length })), [members])
  return (
    <AuthKitProvider team={team}>
      <div className="flex h-full flex-col gap-3 p-4 text-[13px]">
        <header className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-[15px] font-semibold tracking-tight">Team and permissions</h1>
            <p className="text-[12.5px] text-muted-foreground">Acme workspace · {members.filter((m) => m.status === "active").length} active · {members.filter((m) => m.status === "invited").length} pending invites</p>
          </div>
          <InviteDialog roles={FAKE_ROLES.filter((r) => !r.locked)} existing={members.map((m) => m.email)} onInvited={(added) => setMembers((m) => [...m, ...added])} />
        </header>
        <Tabs defaultValue="members" className="flex min-h-0 flex-1 flex-col">
          <TabsList>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="roles">Roles</TabsTrigger>
          </TabsList>
          <TabsContent value="members" className="min-h-0 flex-1 overflow-auto pt-2">
            <MembersTable roles={FAKE_ROLES} members={members} onMembersChange={setMembers} pageSize={8} />
          </TabsContent>
          <TabsContent value="roles" className="flex min-h-0 flex-1 flex-col gap-2 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {counts.map((r) => (
                <span key={r.id} className="inline-flex h-6 items-center gap-1 rounded-md border px-2 text-[12px]">
                  {r.name}
                  <span className="text-muted-foreground tabular-nums">{r.count}</span>
                </span>
              ))}
            </div>
            <RoleMatrix catalog={FAKE_PERMISSIONS} defaultRoles={FAKE_ROLES} className="min-h-0 flex-1" />
          </TabsContent>
        </Tabs>
      </div>
    </AuthKitProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>s(()=>import(`./team-admin-DrPlAMyj.js`),[]));var D=d([]);function O(){let e=v({catalog:p,defaultRoles:m});return(0,S.jsxs)(f.Root,{matrix:e,defaultCollapsed:[`Security`],className:`h-full`,children:[(0,S.jsx)(f.Footer,{adapter:D,className:`border-t-0 border-b`}),(0,S.jsxs)(f.Table,{label:`Workspace permissions`,children:[(0,S.jsx)(f.Header,{corner:(0,S.jsxs)(`span`,{className:`normal-case`,children:[p.length,` permissions`]}),renderRole:e=>(0,S.jsxs)(`span`,{className:`inline-flex flex-col items-center leading-tight`,children:[(0,S.jsx)(`span`,{children:e.name}),(0,S.jsx)(`span`,{className:`text-[10.5px] font-normal text-muted-foreground`,children:e.locked?`locked`:e.builtIn?`built-in`:`custom`})]})}),y(e.catalog).map(e=>(0,S.jsx)(f.Group,{group:e,children:e.permissions.map(e=>(0,S.jsx)(f.Row,{permission:e},e.id))},e.name))]})]})}var k=`import { createFakeTeamAdapter, FAKE_PERMISSIONS, FAKE_ROLES, groupPermissions, RoleMatrix, useRoleMatrix } from "@kitora/auth"

// stub: replace with your API
const adapter = createFakeTeamAdapter([])

// The same matrix as the preset, assembled from its parts: a custom role header,
// "Security" collapsed at first, and the footer moved above the table.
export function RebuiltRoleMatrix() {
  const matrix = useRoleMatrix({ catalog: FAKE_PERMISSIONS, defaultRoles: FAKE_ROLES })
  return (
    <RoleMatrix.Root matrix={matrix} defaultCollapsed={["Security"]} className="h-full">
      <RoleMatrix.Footer adapter={adapter} className="border-t-0 border-b" />
      <RoleMatrix.Table label="Workspace permissions">
        <RoleMatrix.Header
          corner={<span className="normal-case">{FAKE_PERMISSIONS.length} permissions</span>}
          renderRole={(role) => (
            <span className="inline-flex flex-col items-center leading-tight">
              <span>{role.name}</span>
              <span className="text-[10.5px] font-normal text-muted-foreground">{role.locked ? "locked" : role.builtIn ? "built-in" : "custom"}</span>
            </span>
          )}
        />
        {groupPermissions(matrix.catalog).map((group) => (
          <RoleMatrix.Group key={group.name} group={group}>
            {group.permissions.map((p) => (
              <RoleMatrix.Row key={p.id} permission={p} />
            ))}
          </RoleMatrix.Group>
        ))}
      </RoleMatrix.Table>
    </RoleMatrix.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>s(()=>import(`./team-matrix-parts-Bx5yE5fE.js`),[]));function A(){return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(a,{title:`Team and permissions`,children:`A workspace admin page on the fake adapter: 28 members over three pages, invites that land in the table, and five roles across fifteen permissions in five groups, with dependencies (granting "Delete projects" grants "Edit" and "View").`}),(0,S.jsx)(b,{n:1,title:`Team admin`,blurb:`MembersTable, InviteDialog and RoleMatrix sharing one TeamAdapter from AuthKitProvider.`,code:E,children:(0,S.jsx)(u,{testId:`team-admin`,height:640,children:(0,S.jsx)(T,{})})}),(0,S.jsx)(b,{n:2,title:`The matrix, rebuilt from parts`,blurb:`RoleMatrix.Root, Table, Header (custom role cells), Group, Row and Footer (moved above the table): the preset is made of exactly these.`,code:k,children:(0,S.jsx)(u,{testId:`team-matrix-parts`,height:520,className:`p-3`,children:(0,S.jsx)(O,{})})})]})}export{A as component};