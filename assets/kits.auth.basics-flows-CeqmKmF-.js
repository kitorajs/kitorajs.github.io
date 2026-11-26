import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{a as n,c as r,i,n as a,o,r as s}from"./flows-sqgyItlj.js";import{Bc as c,Cc as l,Ic as u}from"./index-B9ukmIN1.js";import{t as d}from"./checkbox-DcWEP8V9.js";import{a as f,c as p,d as m,i as h,n as g,o as _,r as ee,s as v,t as y}from"./-kits.auth.shared-C1T4AirR.js";import{c as b,d as x,f as S,o as C,t as w}from"./use-action-NSZ3o2et.js";import{t as T}from"./password-Dg8oa0Al.js";import{t as E}from"./oauth-DMVUrSa7.js";import"./kit-gallery-Bph7isB2.js";import{t as D}from"./example-BGnSQG2Y.js";var O=e(c(),1),k=u(),A=b(),te=[{id:`google`,label:`Google`},{id:`github`,label:`GitHub`}];function ne(){let[e,t]=(0,O.useState)(``),[n,r]=(0,O.useState)(``),[i,a]=(0,O.useState)(!1),[o,s]=(0,O.useState)(null),c=w(A.signInWithPassword),l=w(A.signInWithOAuth),[u,d]=(0,O.useState)(null);return o?(0,k.jsxs)(g.Root,{children:[(0,k.jsxs)(g.Title,{children:[`Hi `,o.name]}),(0,k.jsx)(g.Footer,{className:`text-left`,children:(0,k.jsx)(v,{onClick:()=>s(null),children:`Sign out`})})]}):(0,k.jsxs)(g.Root,{className:`max-w-[340px]`,children:[(0,k.jsxs)(g.Header,{children:[(0,k.jsx)(g.Title,{children:`Welcome back`}),(0,k.jsx)(g.Description,{children:`Built from AuthCard, AuthField, AuthPasswordInput and OAuthButtons.`})]}),(0,k.jsxs)(g.Body,{children:[(0,k.jsx)(E,{providers:te,layout:`icons`,onSelect:async e=>{d(e.id);let t=await l.run({provider:e.id});d(null),t?.ok&&t.value.status===`signed-in`&&s(t.value.user)},pending:u}),(0,k.jsx)(ee,{children:`or with email`}),(0,k.jsxs)(`form`,{className:`grid gap-3`,onSubmit:async t=>{t.preventDefault();let r=await c.run({email:e,password:n,remember:!0});r?.ok&&r.value.status===`signed-in`&&s(r.value.user)},children:[c.message??l.message?(0,k.jsx)(_,{children:c.message??l.message}):null,(0,k.jsx)(h,{label:`Email`,children:(0,k.jsx)(f,{type:`email`,name:`email`,autoComplete:`username`,required:!0,value:e,onChange:e=>t(e.target.value),placeholder:`you@company.com`})}),(0,k.jsx)(h,{label:`Password`,hint:i?`Shown: anyone nearby can read it.`:void 0,children:(0,k.jsx)(T,{name:`password`,autoComplete:`current-password`,required:!0,value:n,onChange:e=>r(e.target.value),revealed:i,onRevealedChange:a})}),(0,k.jsx)(p,{pending:c.pending,pendingLabel:`Signing in…`,children:`Continue`})]})]})]})}var j=`import { useState, type FormEvent } from "react"
import { AuthCard, AuthDivider, AuthField, AuthInput, AuthMessage, createFakeAuthAdapter, LinkButton, OAuthButtons, AuthPasswordInput, SubmitButton, useAuthAction, type AuthUser, type OAuthProvider } from "@kitora/auth"

// swap for your adapter: Auth.js, Clerk, Supabase, your REST API…
const adapter = createFakeAuthAdapter()
const providers: OAuthProvider[] = [
  { id: "google", label: "Google" },
  { id: "github", label: "GitHub" },
]

// SignInForm, rebuilt from the public parts and the headless useAuthAction hook:
// the same markup the preset renders, so every piece can move, restyle or go.
export function ComposeSignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [revealed, setRevealed] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)
  const signIn = useAuthAction(adapter.signInWithPassword)
  const oauth = useAuthAction(adapter.signInWithOAuth)
  const [pendingProvider, setPendingProvider] = useState<string | null>(null)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const r = await signIn.run({ email, password, remember: true })
    if (r?.ok && r.value.status === "signed-in") setUser(r.value.user)
  }
  const withProvider = async (p: OAuthProvider) => {
    setPendingProvider(p.id)
    const r = await oauth.run({ provider: p.id })
    setPendingProvider(null)
    if (r?.ok && r.value.status === "signed-in") setUser(r.value.user)
  }

  if (user) {
    return (
      <AuthCard.Root>
        <AuthCard.Title>Hi {user.name}</AuthCard.Title>
        <AuthCard.Footer className="text-left">
          <LinkButton onClick={() => setUser(null)}>Sign out</LinkButton>
        </AuthCard.Footer>
      </AuthCard.Root>
    )
  }

  return (
    <AuthCard.Root className="max-w-[340px]">
      <AuthCard.Header>
        <AuthCard.Title>Welcome back</AuthCard.Title>
        <AuthCard.Description>Built from AuthCard, AuthField, AuthPasswordInput and OAuthButtons.</AuthCard.Description>
      </AuthCard.Header>
      <AuthCard.Body>
        <OAuthButtons providers={providers} layout="icons" onSelect={withProvider} pending={pendingProvider} />
        <AuthDivider>or with email</AuthDivider>
        <form className="grid gap-3" onSubmit={submit}>
          {(signIn.message ?? oauth.message) ? <AuthMessage>{signIn.message ?? oauth.message}</AuthMessage> : null}
          <AuthField label="Email">
            <AuthInput type="email" name="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
          </AuthField>
          <AuthField label="Password" hint={revealed ? "Shown: anyone nearby can read it." : undefined}>
            <AuthPasswordInput name="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} revealed={revealed} onRevealedChange={setRevealed} />
          </AuthField>
          <SubmitButton pending={signIn.pending} pendingLabel="Signing in…">
            Continue
          </SubmitButton>
        </form>
      </AuthCard.Body>
    </AuthCard.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>l(()=>import(`./compose-sign-in-BuC1uX2Q.js`),[]));var M=async(e,t,n)=>(await new Promise(e=>setTimeout(e,250)),t===`/session`&&n.email===`rest@example.com`&&n.password===`hunter22`?{status:200,body:{user:{id:`u_rest`,name:`Rest User`,email:`rest@example.com`,emailVerified:!0}}}:t===`/session`?{status:401,body:{error:`bad login`}}:t===`/magic-link`?{status:202,body:{sentTo:String(n.email)}}:{status:404,body:{}}),N={401:`invalid-credentials`,403:`forbidden`,404:`not-found`,423:`account-locked`,429:`rate-limited`},P=e=>x(N[e]??`unknown`);function F(e){return{async signInWithPassword({email:t,password:n,remember:r}){let i=await e(`POST`,`/session`,{email:t,password:n,remember:r});return i.status===200&&i.body.user?S({status:`signed-in`,user:i.body.user}):P(i.status)},async sendMagicLink({email:t}){let n=await e(`POST`,`/magic-link`,{email:t});return n.status===202?S({sentTo:n.body.sentTo??t}):P(n.status)},async signInWithOAuth(){return x(`forbidden`,{message:`This workspace signs in with email only.`})},async resendCode(){return S({cooldown:30})}}}function I(){let[e,t]=(0,O.useState)([]),[r,i]=(0,O.useState)(null),[a]=(0,O.useState)(()=>F(async(e,n,r)=>{let i=await M(e,n,r);return t(t=>[...t.slice(-4),`${e} ${n} → ${i.status}`]),i}));return(0,k.jsx)(m,{appName:`Rest`,children:(0,k.jsxs)(`div`,{className:`grid w-full max-w-[380px] gap-2`,children:[r?(0,k.jsxs)(`p`,{className:`text-[13px]`,children:[`Signed in as `,r.name,` through the custom adapter.`]}):(0,k.jsx)(n,{adapter:a,providers:[],autoFocus:!1,onSignedIn:i}),(0,k.jsx)(`ol`,{"aria-label":`Adapter calls`,"data-testid":`adapter-log`,className:`min-h-[52px] rounded-md border bg-muted/30 px-2.5 py-1.5 font-mono text-[11.5px] text-muted-foreground`,children:e.length?e.map((e,t)=>(0,k.jsx)(`li`,{children:e},`${t}-${e}`)):(0,k.jsx)(`li`,{children:`No calls yet. Try rest@example.com / hunter22.`})})]})})}var L=`import { useState } from "react"
import { AuthKitProvider, fail, ok, SignInForm, type AuthAdapter, type AuthErrorCode, type AuthResult, type AuthUser, type SignInOutcome } from "@kitora/auth"

// A custom AuthAdapter over your own HTTP API. The screens only ever see this
// small interface; here a fake transport stands in for \`fetch\` so the demo runs
// offline, and every call lands in the log under the form.
interface HttpReply {
  readonly status: number
  readonly body: { readonly user?: AuthUser; readonly sentTo?: string; readonly cooldown?: number; readonly error?: string }
}
type Transport = (method: "POST", path: string, body: Readonly<Record<string, string | boolean>>) => Promise<HttpReply>

// stub: replace with your API (e.g. fetch(\`/api\${path}\`, { method, body: JSON.stringify(body) }))
const fakeServer: Transport = async (_method, path, body) => {
  await new Promise((r) => setTimeout(r, 250))
  if (path === "/session" && body.email === "rest@example.com" && body.password === "hunter22") return { status: 200, body: { user: { id: "u_rest", name: "Rest User", email: "rest@example.com", emailVerified: true } } }
  if (path === "/session") return { status: 401, body: { error: "bad login" } }
  if (path === "/magic-link") return { status: 202, body: { sentTo: String(body.email) } }
  return { status: 404, body: {} }
}

/** HTTP status → the kit's closed set of error codes. */
const STATUS_CODES: Readonly<Record<number, AuthErrorCode>> = { 401: "invalid-credentials", 403: "forbidden", 404: "not-found", 423: "account-locked", 429: "rate-limited" }
const toError = (status: number) => fail(STATUS_CODES[status] ?? "unknown")

function httpAuthAdapter(send: Transport): Pick<AuthAdapter, "signInWithPassword" | "sendMagicLink" | "signInWithOAuth" | "resendCode"> {
  return {
    async signInWithPassword({ email, password, remember }): Promise<AuthResult<SignInOutcome>> {
      const r = await send("POST", "/session", { email, password, remember })
      return r.status === 200 && r.body.user ? ok({ status: "signed-in", user: r.body.user }) : toError(r.status)
    },
    async sendMagicLink({ email }) {
      const r = await send("POST", "/magic-link", { email })
      return r.status === 202 ? ok({ sentTo: r.body.sentTo ?? email }) : toError(r.status)
    },
    async signInWithOAuth() {
      return fail("forbidden", { message: "This workspace signs in with email only." })
    },
    async resendCode() {
      return ok({ cooldown: 30 })
    },
  }
}

export function CustomAdapterSignIn() {
  const [log, setLog] = useState<string[]>([])
  const [user, setUser] = useState<AuthUser | null>(null)
  // Wrap the transport once so every request and its status lands in the log.
  const [adapter] = useState(() =>
    httpAuthAdapter(async (method, path, body) => {
      const reply = await fakeServer(method, path, body)
      setLog((l) => [...l.slice(-4), \`\${method} \${path} → \${reply.status}\`])
      return reply
    }),
  )
  return (
    <AuthKitProvider appName="Rest">
      <div className="grid w-full max-w-[380px] gap-2">
        {user ? <p className="text-[13px]">Signed in as {user.name} through the custom adapter.</p> : <SignInForm adapter={adapter} providers={[]} autoFocus={false} onSignedIn={setUser} />}
        <ol aria-label="Adapter calls" data-testid="adapter-log" className="min-h-[52px] rounded-md border bg-muted/30 px-2.5 py-1.5 font-mono text-[11.5px] text-muted-foreground">
          {log.length ? log.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>) : <li>No calls yet. Try rest@example.com / hunter22.</li>}
        </ol>
      </div>
    </AuthKitProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>l(()=>import(`./custom-adapter-Cg7H6IyD.js`),[]));var R=b();function z(){return(0,k.jsx)(s,{autoFocus:!1,adapter:R,defaultEmail:`ada@example.com`,onBack:()=>{}})}var B=`import { createFakeAuthAdapter, ForgotPasswordForm } from "@kitora/auth"

const adapter = createFakeAuthAdapter()

// always answers "check your email", so it never reveals which addresses have accounts
export function BasicForgot() {
  return <ForgotPasswordForm autoFocus={false} adapter={adapter} defaultEmail="ada@example.com" onBack={() => {}} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>l(()=>import(`./forgot-B1la0ftV.js`),[]));var V=b();function H(){let[e,t]=(0,O.useState)(`tok_valid`);return(0,k.jsxs)(`div`,{className:`grid justify-items-center gap-3`,children:[(0,k.jsxs)(`label`,{className:`flex items-center gap-2 text-[12px] text-muted-foreground`,children:[(0,k.jsx)(d,{checked:e===C.expiredToken,onCheckedChange:e=>t(e?C.expiredToken:`tok_valid`)}),`Simulate an expired link`]}),(0,k.jsx)(i,{autoFocus:!1,adapter:V,token:e,onDone:()=>{},onRequestNew:()=>{}},e)]})}var U=`import { useState } from "react"
import { Checkbox } from "@kitora/ui/checkbox"
import { createFakeAuthAdapter, FAKE_AUTH, ResetPasswordForm } from "@kitora/auth"

const adapter = createFakeAuthAdapter()

export function BasicReset() {
  // the token comes from the link: /reset?token=…
  const [token, setToken] = useState("tok_valid")
  return (
    <div className="grid justify-items-center gap-3">
      <label className="flex items-center gap-2 text-[12px] text-muted-foreground">
        <Checkbox checked={token === FAKE_AUTH.expiredToken} onCheckedChange={(on) => setToken(on ? FAKE_AUTH.expiredToken : "tok_valid")} />
        Simulate an expired link
      </label>
      <ResetPasswordForm autoFocus={false} key={token} adapter={adapter} token={token} onDone={() => {}} onRequestNew={() => {}} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>l(()=>import(`./reset-FI2oBx6H.js`),[]));var W=b();function G(){let[e,t]=(0,O.useState)(null);return e?(0,k.jsxs)(`p`,{className:`text-[13px]`,children:[`Signed in as `,e.name,`.`]}):(0,k.jsx)(n,{adapter:W,providers:[{id:`google`,label:`Google`}],onSignedIn:t,onForgotPassword:()=>{}})}var K=`import { useState } from "react"
import { createFakeAuthAdapter, SignInForm, type AuthUser } from "@kitora/auth"

// swap for your adapter: Auth.js, Clerk, Supabase, your REST API…
const adapter = createFakeAuthAdapter()

export function BasicSignIn() {
  const [user, setUser] = useState<AuthUser | null>(null)
  if (user) return <p className="text-[13px]">Signed in as {user.name}.</p>
  return <SignInForm adapter={adapter} providers={[{ id: "google", label: "Google" }]} onSignedIn={setUser} onForgotPassword={() => {}} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>l(()=>import(`./sign-in-BxTOP4ro.js`),[]));var q=b();function J(){let[e,t]=(0,O.useState)(null);return e?(0,k.jsxs)(`p`,{className:`text-[13px]`,children:[`Account created. We sent a code to `,e,`.`]}):(0,k.jsx)(o,{adapter:q,terms:`I agree to the Terms and Privacy Policy.`,onSignedUp:({user:e})=>t(e.email)})}var Y=`import { useState } from "react"
import { createFakeAuthAdapter, SignUpForm } from "@kitora/auth"

const adapter = createFakeAuthAdapter()

export function BasicSignUp() {
  const [email, setEmail] = useState<string | null>(null)
  if (email) return <p className="text-[13px]">Account created. We sent a code to {email}.</p>
  return <SignUpForm adapter={adapter} terms="I agree to the Terms and Privacy Policy." onSignedUp={({ user }) => setEmail(user.email)} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>l(()=>import(`./sign-up-BuKYvh4M.js`),[]));var X=b(),re={id:`chl_1`,methods:[`totp`,`sms`,`backup`],destinations:{sms:`+1 ••• ••• 0142`}};function ie(){let[e,t]=(0,O.useState)(!1);return e?(0,k.jsx)(`p`,{className:`text-[13px]`,children:`Verified.`}):(0,k.jsx)(r,{autoFocus:!1,adapter:X,challenge:re,onVerified:()=>t(!0)})}var Z=`import { useState } from "react"
import { createFakeAuthAdapter, TwoFactorChallenge, type MfaChallenge } from "@kitora/auth"

const adapter = createFakeAuthAdapter()
// what signInWithPassword returns when the account has two-step on
const challenge: MfaChallenge = { id: "chl_1", methods: ["totp", "sms", "backup"], destinations: { sms: "+1 ••• ••• 0142" } }

export function BasicTwoFactor() {
  const [verified, setVerified] = useState(false)
  if (verified) return <p className="text-[13px]">Verified.</p>
  return <TwoFactorChallenge autoFocus={false} adapter={adapter} challenge={challenge} onVerified={() => setVerified(true)} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>l(()=>import(`./two-factor-D6WUZv5h.js`),[]));var ae=b();function oe(){let[e,t]=(0,O.useState)(!1);return e?(0,k.jsx)(`p`,{className:`text-[13px]`,children:`Email verified.`}):(0,k.jsx)(a,{autoFocus:!1,adapter:ae,email:`ada@example.com`,initialCooldown:0,onVerified:()=>t(!0)})}var Q=`import { useState } from "react"
import { createFakeAuthAdapter, EmailVerification } from "@kitora/auth"

const adapter = createFakeAuthAdapter()

export function BasicVerifyEmail() {
  const [verified, setVerified] = useState(false)
  if (verified) return <p className="text-[13px]">Email verified.</p>
  return <EmailVerification autoFocus={false} adapter={adapter} email="ada@example.com" initialCooldown={0} onVerified={() => setVerified(true)} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>l(()=>import(`./verify-email-CCKdQlxv.js`),[]));var $=({children:e})=>(0,k.jsx)(`code`,{className:`rounded bg-muted px-1 py-px font-mono text-[11.5px]`,children:e});function se(){return(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(t,{title:`Basics: flows`,children:["Every screen talks to the backend through an adapter and reports its outcome through a callback, so routing stays yours. These run on `createFakeAuthAdapter()`: sign in with ",(0,k.jsx)($,{children:C.email}),` and `,(0,k.jsx)($,{children:C.password}),`, and every code is `,(0,k.jsx)($,{children:C.code}),`.`]}),(0,k.jsx)(D,{n:1,title:`Sign in`,blurb:`Password or magic link, OAuth, Remember me, coded errors (wrong password, lockout with locked@example.com, rate limit after 5 tries).`,code:K,children:(0,k.jsx)(y,{testId:`basic-sign-in`,center:!0,children:(0,k.jsx)(G,{})})}),(0,k.jsx)(D,{n:2,title:`Sign up`,blurb:`Name, email, a new password with meter and checklist, required terms. taken@example.com is already registered.`,code:Y,children:(0,k.jsx)(y,{testId:`basic-sign-up`,center:!0,children:(0,k.jsx)(J,{})})}),(0,k.jsx)(D,{n:3,title:`Forgot password`,blurb:`Sends the link, then a 'check your email' state with a resend cooldown.`,code:B,children:(0,k.jsx)(y,{testId:`basic-forgot`,center:!0,children:(0,k.jsx)(z,{})})}),(0,k.jsx)(D,{n:4,title:`Reset password`,blurb:`New password twice, with policy; an expired token offers a new link.`,code:U,children:(0,k.jsx)(y,{testId:`basic-reset`,center:!0,children:(0,k.jsx)(H,{})})}),(0,k.jsx)(D,{n:5,title:`Two-step challenge`,blurb:`Authenticator code with auto-submit, text message with resend, or a backup code; trust this device.`,code:Z,children:(0,k.jsx)(y,{testId:`basic-two-factor`,center:!0,children:(0,k.jsx)(ie,{})})}),(0,k.jsx)(D,{n:6,title:`Email verification`,blurb:`A 6-digit code that submits itself, resend with cooldown, change email.`,code:Q,children:(0,k.jsx)(y,{testId:`basic-verify-email`,center:!0,children:(0,k.jsx)(oe,{})})}),(0,k.jsx)(D,{n:7,title:`Compose your own`,blurb:`SignInForm rebuilt from the public parts (AuthCard.*, AuthField, AuthInput, AuthPasswordInput with its reveal controlled, OAuthButtons, AuthDivider, AuthMessage, SubmitButton) and the headless useAuthAction hook.`,code:j,children:(0,k.jsx)(y,{testId:`basic-compose`,center:!0,children:(0,k.jsx)(ne,{})})}),(0,k.jsx)(D,{n:8,title:`Custom adapter`,blurb:`An AuthAdapter written over your own HTTP API: status codes map to the kit's error codes, and every call shows in the log. Sign in with rest@example.com and hunter22.`,code:L,children:(0,k.jsx)(y,{testId:`basic-custom-adapter`,center:!0,children:(0,k.jsx)(I,{})})})]})}export{se as component};