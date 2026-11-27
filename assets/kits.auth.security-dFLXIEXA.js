import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{a as n,c as r,i,o as a,s as o}from"./two-factor-COETforY.js";import{t as s}from"./log-out-CX3b2zuH.js";import{Ec as c,Uc as l,ri as u,zc as d}from"./index-BZuUy872.js";import{t as f}from"./-kits.auth.shared-Cf7nNAf_.js";import{t as p}from"./context-BBD3Rt6H.js";import{o as m,s as h}from"./use-action-DU6QhQMN.js";import{n as g}from"./use-cooldown-BgcGf5Ow.js";import"./kit-gallery-BBavj2rC.js";import{t as _}from"./example-B67lLz1F.js";var v=e(l(),1),y=d(),b={id:`usr_ada`,name:`Ada Lovelace`,email:m.email,emailVerified:!0};function x(){let[e]=(0,v.useState)(()=>h(b)),t=r(e),n=g();return(0,y.jsxs)(`div`,{className:`grid gap-2 p-4 text-[13px]`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsxs)(`h3`,{className:`font-semibold`,children:[`Where you're signed in `,(0,y.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`(`,t.sessions.length,`)`]})]}),(0,y.jsxs)(u,{size:`sm`,variant:`ghost`,disabled:t.sessions.length<2||t.revoking!==null,onClick:()=>void t.revokeOthers(),children:[(0,y.jsx)(s,{"aria-hidden":!0}),` Everywhere else`]})]}),(0,y.jsx)(`ul`,{className:`grid grid-cols-1 gap-2 sm:grid-cols-2`,children:t.sessions.map(e=>(0,y.jsxs)(a.Root,{session:e,className:`rounded-lg border bg-card px-3 data-current:border-primary/40`,children:[(0,y.jsx)(a.Icon,{session:e}),(0,y.jsxs)(`div`,{className:`min-w-0`,children:[(0,y.jsx)(a.Title,{session:e}),(0,y.jsx)(a.Meta,{session:e,now:n})]}),e.current?null:(0,y.jsx)(a.Actions,{children:(0,y.jsx)(u,{size:`icon-sm`,variant:`ghost`,"aria-label":`Sign out ${e.browser} on ${e.os}`,disabled:t.revoking===e.id,onClick:()=>void t.revoke(e.id),children:(0,y.jsx)(s,{"aria-hidden":!0})})})]},e.id))})]})}var S=`import { useState } from "react"
import { LogOut } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { createFakeAccountAdapter, FAKE_AUTH, SessionRow, useNow, useSessionList, type AuthUser } from "@kitora/auth"

const user: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true }

// SessionsList rebuilt from its public pieces: the useSessionList hook and the SessionRow parts,
// laid out as cards with a one-click sign-out instead of the preset's inline confirm.
export function CustomSessions() {
  const [adapter] = useState(() => createFakeAccountAdapter(user))
  const list = useSessionList(adapter)
  const now = useNow()
  return (
    <div className="grid gap-2 p-4 text-[13px]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Where you're signed in <span className="text-muted-foreground tabular-nums">({list.sessions.length})</span></h3>
        <Button size="sm" variant="ghost" disabled={list.sessions.length < 2 || list.revoking !== null} onClick={() => void list.revokeOthers()}>
          <LogOut aria-hidden /> Everywhere else
        </Button>
      </div>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {list.sessions.map((s) => (
          <SessionRow.Root key={s.id} session={s} className="rounded-lg border bg-card px-3 data-current:border-primary/40">
            <SessionRow.Icon session={s} />
            <div className="min-w-0">
              <SessionRow.Title session={s} />
              <SessionRow.Meta session={s} now={now} />
            </div>
            {s.current ? null : (
              <SessionRow.Actions>
                <Button size="icon-sm" variant="ghost" aria-label={\`Sign out \${s.browser} on \${s.os}\`} disabled={list.revoking === s.id} onClick={() => void list.revoke(s.id)}>
                  <LogOut aria-hidden />
                </Button>
              </SessionRow.Actions>
            )}
          </SessionRow.Root>
        ))}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>c(()=>import(`./security-custom-sessions-DINrGOI5.js`),[]));var C={id:`usr_ada`,name:`Ada Lovelace`,email:m.email,emailVerified:!0};function w(){let[e]=(0,v.useState)(()=>h(C));return(0,y.jsx)(p,{account:e,children:(0,y.jsxs)(`div`,{className:`mx-auto grid max-w-2xl gap-4 p-4 text-[13px] sm:p-6`,children:[(0,y.jsxs)(`header`,{children:[(0,y.jsx)(`h1`,{className:`text-[16px] font-semibold tracking-tight`,children:`Security`}),(0,y.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Set up an authenticator with code `,(0,y.jsx)(`code`,{className:`font-mono`,children:m.code}),`; turn it off with `,(0,y.jsx)(`code`,{className:`font-mono`,children:m.password}),`.`]})]}),(0,y.jsx)(i,{}),(0,y.jsx)(o,{}),(0,y.jsx)(n,{})]})})}var T=`import { useState } from "react"
import { AuthKitProvider, ConnectedAccounts, createFakeAccountAdapter, FAKE_AUTH, SessionsList, TwoFactorStatus, type AuthUser } from "@kitora/auth"

const user: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true }

export function SecurityPage() {
  const [account] = useState(() => createFakeAccountAdapter(user))
  return (
    <AuthKitProvider account={account}>
      <div className="mx-auto grid max-w-2xl gap-4 p-4 text-[13px] sm:p-6">
        <header>
          <h1 className="text-[16px] font-semibold tracking-tight">Security</h1>
          <p className="text-muted-foreground">
            Set up an authenticator with code <code className="font-mono">{FAKE_AUTH.code}</code>; turn it off with <code className="font-mono">{FAKE_AUTH.password}</code>.
          </p>
        </header>
        <TwoFactorStatus />
        <SessionsList />
        <ConnectedAccounts />
      </div>
    </AuthKitProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>c(()=>import(`./security-page-D3pOmfYx.js`),[]));function E(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(t,{title:`Security`,children:`Two-step verification with an authenticator app and a scannable QR code, backup codes, signed-in sessions and connected accounts, all on one AccountAdapter.`}),(0,y.jsx)(_,{n:1,title:`A security page`,blurb:`Set up two-step (code 123456), review backup codes, revoke sessions, link and unlink providers.`,code:T,children:(0,y.jsx)(f,{testId:`security-page`,children:(0,y.jsx)(w,{})})}),(0,y.jsx)(_,{n:2,title:`Sessions, rebuilt from parts`,blurb:`The same data through useSessionList and the SessionRow parts, laid out as cards with a one-click sign-out.`,code:S,children:(0,y.jsx)(f,{testId:`custom-sessions`,children:(0,y.jsx)(x,{})})})]})}export{E as component};