import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{t as n}from"./flows-a2T88_i-.js";import{t as r}from"./shield-check-Do7Razr0.js";import{Bc as i,Cc as a,Ic as o}from"./index-q72zUtm9.js";import{d as s,t as c}from"./-kits.auth.shared-B697pN85.js";import{c as l,o as u}from"./use-action-BLj5e3rx.js";import"./kit-gallery-Atvibnty.js";import{t as d}from"./example-B8EaWveR.js";var f=e(i(),1),p=o(),m=l(),h=[{id:`google`,label:`Google`},{id:`github`,label:`GitHub`}],g=()=>(0,p.jsxs)(`span`,{className:`flex items-center gap-1.5 text-[13px] font-semibold`,children:[(0,p.jsx)(`span`,{className:`grid size-6 place-items-center rounded-md bg-primary text-primary-foreground`,children:(0,p.jsx)(r,{className:`size-3.5`})}),`Acme`]}),_=[[`Sign in`,`${u.email} · ${u.password}`],[`Two-step`,`${u.mfaEmail} · same password, then ${u.code}`],[`Locked`,u.lockedEmail],[`Taken on sign-up`,u.takenEmail],[`Every code`,u.code]];function v(){let[e,t]=(0,f.useState)({view:`sign-in`});return(0,p.jsx)(s,{auth:m,providers:h,appName:`Acme`,children:(0,p.jsxs)(`div`,{className:`grid h-full md:grid-cols-[1fr_240px]`,children:[(0,p.jsx)(`div`,{className:`grid place-items-center overflow-auto bg-muted/30 p-6`,children:(0,p.jsx)(n,{state:e,onStateChange:t,logo:(0,p.jsx)(g,{}),terms:`I agree to the Terms of Service and Privacy Policy.`})}),(0,p.jsxs)(`aside`,{className:`hidden border-l p-4 text-[12.5px] md:block`,children:[(0,p.jsx)(`p`,{className:`mb-2 text-[11px] font-medium tracking-wide text-muted-foreground uppercase`,children:`Try`}),(0,p.jsx)(`dl`,{className:`grid gap-2`,children:_.map(([e,t])=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{className:`text-muted-foreground`,children:e}),(0,p.jsx)(`dd`,{className:`font-mono text-[11.5px] break-all`,children:t})]},e))}),(0,p.jsx)(`p`,{className:`mt-4 mb-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase`,children:`View`}),(0,p.jsx)(`code`,{"data-testid":`journey-view`,className:`rounded bg-muted px-1.5 py-0.5 font-mono text-[11.5px]`,children:e.view})]})]})})}var y=`import { useState } from "react"
import { ShieldCheck } from "lucide-react"
import { AuthFlow, AuthKitProvider, createFakeAuthAdapter, FAKE_AUTH, type AuthFlowState, type OAuthProvider } from "@kitora/auth"

const adapter = createFakeAuthAdapter()
const providers: OAuthProvider[] = [
  { id: "google", label: "Google" },
  { id: "github", label: "GitHub" },
]

const Logo = () => (
  <span className="flex items-center gap-1.5 text-[13px] font-semibold">
    <span className="grid size-6 place-items-center rounded-md bg-primary text-primary-foreground">
      <ShieldCheck className="size-3.5" />
    </span>
    Acme
  </span>
)

/** What to try, so a reviewer can walk every branch of the fake. */
const TRIES = [
  ["Sign in", \`\${FAKE_AUTH.email} · \${FAKE_AUTH.password}\`],
  ["Two-step", \`\${FAKE_AUTH.mfaEmail} · same password, then \${FAKE_AUTH.code}\`],
  ["Locked", FAKE_AUTH.lockedEmail],
  ["Taken on sign-up", FAKE_AUTH.takenEmail],
  ["Every code", FAKE_AUTH.code],
] as const

export function AuthJourney() {
  // controlled, so the current view can be shown (or mirrored into the URL)
  const [state, setState] = useState<AuthFlowState>({ view: "sign-in" })
  return (
    <AuthKitProvider auth={adapter} providers={providers} appName="Acme">
      <div className="grid h-full md:grid-cols-[1fr_240px]">
        <div className="grid place-items-center overflow-auto bg-muted/30 p-6">
          <AuthFlow state={state} onStateChange={setState} logo={<Logo />} terms="I agree to the Terms of Service and Privacy Policy." />
        </div>
        <aside className="hidden border-l p-4 text-[12.5px] md:block">
          <p className="mb-2 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">Try</p>
          <dl className="grid gap-2">
            {TRIES.map(([label, value]) => (
              <div key={label}>
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-mono text-[11.5px] break-all">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 mb-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">View</p>
          <code data-testid="journey-view" className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11.5px]">
            {state.view}
          </code>
        </aside>
      </div>
    </AuthKitProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>a(()=>import(`./journey-BuY6WloP.js`),[]));var b=[{name:`core`,entry:`@kitora/auth/core`,what:`The adapter contracts (AuthAdapter, AccountAdapter, TeamAdapter) with coded results and in-memory fakes; the auth flow state machine; password policy and a pluggable strength estimator; the OTP input model; backup codes; TOTP secrets and otpauth URIs; a QR encoder; roles, permissions with dependencies, diffs, invites. No React, no DOM.`},{name:`dom`,entry:`@kitora/auth/dom`,what:`Browser behaviour behind adapters: ClipboardAdapter (browserClipboard), FileSaver (browserFileSaver, saveBackupCodes), capsLockOn. Imports only the core; no React.`},{name:`react`,entry:`@kitora/auth/react`,what:`AuthKitProvider (adapters, policy, estimator, clipboard, file saver), useAuthAction, useOtpInput and usePasswordReveal (prop getters), usePasswordStrength, useRoleMatrix, useControllableState, useCooldown, useNow, useCopy, useQrCode. Headless: no styling.`},{name:`ui`,entry:`@kitora/auth/ui (also the @kitora/auth barrel)`,what:`Parts (AuthCard, AuthField, AuthInput, AuthMessage, SubmitButton, OtpInput, AuthPasswordInput (ui's PasswordInput wired to the field; a bare password input is @kitora/ui/password-input), PasswordStrengthMeter, PasswordChecklist, OAuthButtons, QrCode) and the presets built only from them: sign in, sign up, forgot and reset, two-step challenge, email verification, AuthFlow, account and security settings (framed by @kitora/shell's SettingsSection), role matrix, members, invites.`}];function x(){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(t,{title:`Auth kit`,children:"The whole journey on one adapter: sign in with a password, a magic link or OAuth; a second step for accounts that have it; sign up with a strength meter and email verification; and password recovery. Swap `createFakeAuthAdapter()` for your backend and nothing else changes."}),(0,p.jsx)(d,{n:1,title:`The auth journey`,blurb:"`AuthFlow` over the core's `authFlowReducer`, controlled here so the current view shows on the right. The panel lists what the fake adapter accepts.",code:y,children:(0,p.jsx)(c,{testId:`auth-journey`,height:640,children:(0,p.jsx)(v,{})})}),(0,p.jsx)(d,{n:2,title:`Layers`,blurb:`One package, four layer entries plus the barrel; use only the core on a server, only the dom adapters or hooks with your own markup, or the styled parts and presets.`,children:(0,p.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,p.jsx)(`tbody`,{children:b.map(e=>(0,p.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,p.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,p.jsx)(`td`,{className:`hidden py-1.5 pr-3 align-top font-mono text-[12px] whitespace-nowrap text-muted-foreground sm:table-cell`,children:e.entry}),(0,p.jsx)(`td`,{className:`py-1.5 break-words text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{x as component};