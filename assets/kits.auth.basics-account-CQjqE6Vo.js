import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,r as n,t as r}from"./profile-fz105hNk.js";import{s as i}from"./kit-docs-Cf27Kpa-.js";import{a,i as o,l as s,n as c,r as l,s as u,t as d}from"./two-factor-COETforY.js";import{Ec as f,Uc as p,zc as m}from"./index-BZuUy872.js";import{i as h}from"./settings-BhYYLeHB.js";import{t as g}from"./-kits.auth.shared-Cf7nNAf_.js";import{a as _}from"./totp-DsAW4Loj.js";import{h as v}from"./context-BBD3Rt6H.js";import{o as y,s as b}from"./use-action-DU6QhQMN.js";import{n as x}from"./oauth-Doz3w9Z1.js";import"./kit-gallery-BBavj2rC.js";import{t as S}from"./example-B67lLz1F.js";var C=e(p(),1),w=m(),T={id:`usr_ada`,name:`Ada Lovelace`,email:y.email,emailVerified:!0};function E(){let[e]=(0,C.useState)(()=>b(T));return(0,w.jsx)(t,{user:T,adapter:e})}var D=`import { useState } from "react"
import { createFakeAccountAdapter, EmailSettings, FAKE_AUTH, type AuthUser } from "@kitora/auth"

const user: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true }

export function BasicEmail() {
  // the fake accepts the password FAKE_AUTH.password ("Analytical-1843")
  const [adapter] = useState(() => createFakeAccountAdapter(user))
  return <EmailSettings user={user} adapter={adapter} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>f(()=>import(`./account-email-z64V4u6O.js`),[]));var O={id:`usr_ada`,name:`Ada Lovelace`,email:y.email,emailVerified:!0};function k(){let[e]=(0,C.useState)(()=>b(O));return(0,w.jsx)(r,{adapter:e,userInputs:[O.name,O.email]})}var A=`import { useState } from "react"
import { ChangePasswordForm, createFakeAccountAdapter, FAKE_AUTH, type AuthUser } from "@kitora/auth"

const user: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true }

export function BasicChangePassword() {
  // current password for the fake: FAKE_AUTH.password ("Analytical-1843")
  const [adapter] = useState(() => createFakeAccountAdapter(user))
  return <ChangePasswordForm adapter={adapter} userInputs={[user.name, user.email]} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>f(()=>import(`./account-password-B9fZU3S4.js`),[]));var j={id:`usr_ada`,name:`Ada Lovelace`,email:y.email,emailVerified:!0,username:`ada`};function M(){let[e]=(0,C.useState)(()=>b(j));return(0,w.jsx)(n,{user:j,adapter:e})}var N=`import { useState } from "react"
import { createFakeAccountAdapter, FAKE_AUTH, ProfileSettings, type AuthUser } from "@kitora/auth"

const user: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true, username: "ada" }

export function BasicProfile() {
  // stub: replace with your own AccountAdapter (updateProfile → PATCH /me)
  const [adapter] = useState(() => createFakeAccountAdapter(user))
  return <ProfileSettings user={user} adapter={adapter} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>f(()=>import(`./account-profile-DUp0KxjF.js`),[]));function P(){let[e,t]=(0,C.useState)(()=>v(_(3))),[n,r]=(0,C.useState)(4);return(0,w.jsx)(d,{codes:e,used:e.slice(0,2),onRegenerate:()=>{t(v(_(n))),r(e=>e+1)}})}var F=`import { useState } from "react"
import { BackupCodes, generateBackupCodes, seededRandom } from "@kitora/auth"

export function BasicBackupCodes() {
  // codes come from your server; generateBackupCodes(cryptoRandom) shown for the demo
  const [codes, setCodes] = useState(() => generateBackupCodes(seededRandom(3)))
  const [seed, setSeed] = useState(4)
  return (
    <BackupCodes
      codes={codes}
      used={codes.slice(0, 2)}
      onRegenerate={() => {
        setCodes(generateBackupCodes(seededRandom(seed)))
        setSeed((s) => s + 1)
      }}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>f(()=>import(`./security-backup-codes-ClD03Yhv.js`),[]));var I={id:`usr_ada`,name:`Ada Lovelace`,email:y.email,emailVerified:!0};function L(){let[e]=(0,C.useState)(()=>b(I));return(0,w.jsx)(a,{adapter:e})}var R=`import { useState } from "react"
import { ConnectedAccounts, createFakeAccountAdapter, FAKE_AUTH, type AuthUser } from "@kitora/auth"

const user: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true }

export function BasicConnections() {
  // the fake refuses to disconnect the last linked provider
  const [adapter] = useState(() => createFakeAccountAdapter(user))
  return <ConnectedAccounts adapter={adapter} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>f(()=>import(`./security-connections-Lt-igFyu.js`),[]));var z={id:`usr_ada`,name:`Ada Lovelace`,email:y.email,emailVerified:!0};function B(){let[e]=(0,C.useState)(()=>b(z));return(0,w.jsx)(u,{adapter:e})}var V=`import { useState } from "react"
import { createFakeAccountAdapter, FAKE_AUTH, SessionsList, type AuthUser } from "@kitora/auth"

const user: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true }

export function BasicSessions() {
  // stub: listSessions / revokeSession / revokeOtherSessions on your API
  const [adapter] = useState(() => createFakeAccountAdapter(user))
  return <SessionsList adapter={adapter} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>f(()=>import(`./security-sessions-BFVevkpv.js`),[]));var H={id:`usr_ada`,name:`Ada Lovelace`,email:y.email,emailVerified:!0};function U(){let[e]=(0,C.useState)(()=>b(H));return(0,w.jsx)(o,{adapter:e})}var W=`import { useState } from "react"
import { createFakeAccountAdapter, FAKE_AUTH, TwoFactorStatus, type AuthUser } from "@kitora/auth"

const user: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true }

export function BasicTwoFactor() {
  // the fake accepts the code FAKE_AUTH.code ("123456"); turning off asks for FAKE_AUTH.password
  const [adapter] = useState(() => createFakeAccountAdapter(user))
  return <TwoFactorStatus adapter={adapter} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>f(()=>import(`./security-two-factor-D5PPTdTJ.js`),[]));var G=[{id:`google`,label:`Google`,account:`ada@example.com`},{id:`github`,label:`GitHub`,account:`ada-l`},{id:`gitlab`,label:`GitLab`,account:`ada`}];function K(){let[e,t]=(0,C.useState)(G);return(0,w.jsxs)(h.Root,{children:[(0,w.jsx)(h.Header,{children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(h.Title,{children:`Linked accounts`}),(0,w.jsx)(h.Description,{children:`Sign in with any of these.`})]})}),(0,w.jsxs)(h.Body,{className:`grid gap-2`,children:[e.length===0?(0,w.jsx)(`p`,{className:`text-muted-foreground`,children:`Nothing linked.`}):null,e.map(e=>(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(x,{provider:e.id}),(0,w.jsx)(`span`,{className:`font-medium`,children:e.label}),(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:e.account}),(0,w.jsx)(s,{className:`ml-auto`,question:`Unlink ${e.label}?`,confirmLabel:`Unlink`,onConfirm:()=>t(t=>t.filter(t=>t.id!==e.id)),children:`Unlink`})]},e.id))]}),(0,w.jsxs)(h.Footer,{children:[(0,w.jsxs)(`span`,{className:`mr-auto text-[12px] text-muted-foreground`,children:[e.length,` linked`]}),(0,w.jsx)(`button`,{type:`button`,className:`text-[12.5px] font-medium text-primary underline-offset-4 hover:underline`,onClick:()=>t(G),children:`Reset`})]})]})}var q=`import { useState } from "react"
import { InlineConfirm, ProviderIcon } from "@kitora/auth"
import { SettingsSection } from "@kitora/shell"

const linked = [
  { id: "google", label: "Google", account: "ada@example.com" },
  { id: "github", label: "GitHub", account: "ada-l" },
  { id: "gitlab", label: "GitLab", account: "ada" },
]

// A settings panel written by hand from the parts the presets use:
// SettingsSection (shell's card parts) for the frame, ProviderIcon for the brand mark, InlineConfirm for the remove.
export function BasicSettingsParts() {
  const [rows, setRows] = useState(linked)
  return (
    <SettingsSection.Root>
      <SettingsSection.Header>
        <div>
          <SettingsSection.Title>Linked accounts</SettingsSection.Title>
          <SettingsSection.Description>Sign in with any of these.</SettingsSection.Description>
        </div>
      </SettingsSection.Header>
      <SettingsSection.Body className="grid gap-2">
        {rows.length === 0 ? <p className="text-muted-foreground">Nothing linked.</p> : null}
        {rows.map((row) => (
          <div key={row.id} className="flex flex-wrap items-center gap-2">
            <ProviderIcon provider={row.id} />
            <span className="font-medium">{row.label}</span>
            <span className="text-muted-foreground">{row.account}</span>
            {/* stub: replace with your API (DELETE /identities/:id) */}
            <InlineConfirm className="ml-auto" question={\`Unlink \${row.label}?\`} confirmLabel="Unlink" onConfirm={() => setRows((r) => r.filter((x) => x.id !== row.id))}>
              Unlink
            </InlineConfirm>
          </div>
        ))}
      </SettingsSection.Body>
      <SettingsSection.Footer>
        <span className="mr-auto text-[12px] text-muted-foreground">{rows.length} linked</span>
        <button type="button" className="text-[12.5px] font-medium text-primary underline-offset-4 hover:underline" onClick={() => setRows(linked)}>
          Reset
        </button>
      </SettingsSection.Footer>
    </SettingsSection.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>f(()=>import(`./settings-parts-BTu8ay_G.js`),[]));var J={id:`usr_ada`,name:`Ada Lovelace`,email:y.email,emailVerified:!0};function Y(){let[e]=(0,C.useState)(()=>b(J)),[t,n]=(0,C.useState)(`scan`),[r,i]=(0,C.useState)(0);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsxs)(`div`,{className:`grid gap-1.5 text-[12px] text-muted-foreground`,children:[`SetupSteps on its own, at each step:`,(0,w.jsx)(c,{step:`scan`}),(0,w.jsx)(c,{step:`codes`})]}),(0,w.jsx)(l,{adapter:e,step:t,onStepChange:n,onEnabled:()=>n(`done`),onCancel:()=>{n(`scan`),i(e=>e+1)}},r),(0,w.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Step: `,t]})]})}var X=`import { useState } from "react"
import { createFakeAccountAdapter, FAKE_AUTH, SetupSteps, TwoFactorSetup, type AuthUser, type TwoFactorStep } from "@kitora/auth"

const user: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true }

export function BasicTwoFactorSetup() {
  // the fake accepts the code FAKE_AUTH.code ("123456")
  const [adapter] = useState(() => createFakeAccountAdapter(user))
  const [step, setStep] = useState<TwoFactorStep>("scan")
  const [done, setDone] = useState(0)
  return (
    <div className="grid gap-4">
      <div className="grid gap-1.5 text-[12px] text-muted-foreground">
        SetupSteps on its own, at each step:
        <SetupSteps step="scan" />
        <SetupSteps step="codes" />
      </div>
      {/* the flow alone, without the on/off status around it; \`key\` restarts it */}
      <TwoFactorSetup key={done} adapter={adapter} step={step} onStepChange={setStep} onEnabled={() => setStep("done")} onCancel={() => { setStep("scan"); setDone((n) => n + 1) }} />
      <p className="text-[12px] text-muted-foreground">Step: {step}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>f(()=>import(`./two-factor-setup-C3Jm20zP.js`),[]));function Z(){return(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(i,{title:`Basics: account and security`,children:[`Each settings panel is one preset over the AccountAdapter. The fake accepts the password `,(0,w.jsx)(`code`,{children:`Analytical-1843`}),` and the code `,(0,w.jsx)(`code`,{children:`123456`}),`.`]}),(0,w.jsx)(S,{n:1,title:`Profile`,blurb:`Name, username and avatar. Save is enabled only when something changed; Discard puts it back.`,code:N,children:(0,w.jsx)(g,{testId:`basic-profile`,className:`p-4`,children:(0,w.jsx)(M,{})})}),(0,w.jsx)(S,{n:2,title:`Email address`,blurb:`A verified badge, and a change that needs the current password and stays pending until the new address is confirmed.`,code:D,children:(0,w.jsx)(g,{testId:`basic-email`,className:`p-4`,children:(0,w.jsx)(E,{})})}),(0,w.jsx)(S,{n:3,title:`Change password`,blurb:`Current password, a new one with strength meter and policy checklist, confirmation, and an option to sign out other sessions.`,code:A,children:(0,w.jsx)(g,{testId:`basic-password`,className:`p-4`,children:(0,w.jsx)(k,{})})}),(0,w.jsx)(S,{n:4,title:`Sessions`,blurb:`Signed-in devices with location, IP and last activity. Revoke one (inline confirm) or every other session.`,code:V,children:(0,w.jsx)(g,{testId:`basic-sessions`,className:`p-4`,children:(0,w.jsx)(B,{})})}),(0,w.jsx)(S,{n:5,title:`Connected accounts`,blurb:`Connect and disconnect providers. The adapter refuses to remove the last way to sign in, and the row shows why.`,code:R,children:(0,w.jsx)(g,{testId:`basic-connections`,className:`p-4`,children:(0,w.jsx)(L,{})})}),(0,w.jsx)(S,{n:6,title:`Two-step verification`,blurb:`Off → scan the QR (or type the key) → enter the first code → save backup codes → on. Turning it off asks for the password.`,code:W,children:(0,w.jsx)(g,{testId:`basic-two-factor`,className:`p-4`,children:(0,w.jsx)(U,{})})}),(0,w.jsx)(S,{n:7,title:`Backup codes`,blurb:`Copy, download as a text file, regenerate with a confirm. Used codes are struck through.`,code:F,children:(0,w.jsx)(g,{testId:`basic-backup-codes`,className:`max-w-md p-4`,children:(0,w.jsx)(P,{})})}),(0,w.jsx)(S,{n:8,title:`Authenticator setup on its own`,blurb:"`TwoFactorSetup` without the status around it, with its step controlled, and the `SetupSteps` dots it draws on top, shown alone.",code:X,children:(0,w.jsx)(g,{testId:`basic-two-factor-setup`,className:`max-w-md p-4`,children:(0,w.jsx)(Y,{})})}),(0,w.jsx)(S,{n:9,title:`A settings panel from parts`,blurb:"Shell's `SettingsSection` card parts (Root, Header, Title, Description, Body, Footer) framing a hand-written list, with `ProviderIcon` marks and an `InlineConfirm` on each Unlink.",code:q,children:(0,w.jsx)(g,{testId:`basic-settings-parts`,className:`max-w-md p-4`,children:(0,w.jsx)(K,{})})})]})}export{Z as component};