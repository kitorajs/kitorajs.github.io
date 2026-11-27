import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{a as n,s as r}from"./flows-J8W-vVYY.js";import{t as i}from"./quote-BEazyQZ_.js";import{t as a}from"./sparkles-gGx-f077.js";import{Ec as o,Uc as s,ii as c,zc as l}from"./index-BZuUy872.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./-kits.auth.shared-Cf7nNAf_.js";import{d as v,f as y}from"./context-BBD3Rt6H.js";import{c as b,t as x,u as S}from"./use-action-DU6QhQMN.js";import{a as ee,i as C,r as w,t as T}from"./password-BullAH3O.js";import{t as E}from"./oauth-Doz3w9Z1.js";import{A as D,At as O,Y as k,c as A,g as j}from"./field-config-53O_jYuu.js";import{a as M}from"./fields-DyVcPE0c.js";import{r as N}from"./fields-extra-W6GCx72F.js";import"./kit-gallery-BBavj2rC.js";import{t as P}from"./example-B67lLz1F.js";var F=l(),I=b(),L=[{id:`google`,label:`Google`},{id:`github`,label:`GitHub`},{id:`apple`,label:`Apple`},{id:`gitlab`,label:`GitLab`}];function te(){return(0,F.jsx)(n,{adapter:I,methods:[`magic-link`],providers:L,title:`Sign in with email`,description:`We'll email you a link that signs you in. No password needed.`})}var R=`import { createFakeAuthAdapter, SignInForm, type OAuthProvider } from "@kitora/auth"

const adapter = createFakeAuthAdapter()
const providers: OAuthProvider[] = [
  { id: "google", label: "Google" },
  { id: "github", label: "GitHub" },
  { id: "apple", label: "Apple" },
  { id: "gitlab", label: "GitLab" },
]

// magic link only, no password to forget; with more than two providers the buttons become a grid
export function PasswordlessSignIn() {
  return <SignInForm adapter={adapter} methods={["magic-link"]} providers={providers} title="Sign in with email" description="We'll email you a link that signs you in. No password needed." />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>o(()=>import(`./passwordless-KHExK8uU.js`),[]));var z=e(s(),1),B=b(),V=[{id:`github`,label:`GitHub`}];function H(){let[e,t]=(0,z.useState)(``),[n,r]=(0,z.useState)(``),[i,a]=(0,z.useState)(null),o=x(B.signInWithPassword);return i?(0,F.jsxs)(m,{tone:`success`,children:[`Signed in as `,i,`.`]}):(0,F.jsxs)(p.Root,{className:`max-w-[340px]`,children:[(0,F.jsxs)(p.Header,{children:[(0,F.jsx)(p.Title,{children:`Log in`}),(0,F.jsx)(p.Description,{children:`Use your work account.`})]}),(0,F.jsxs)(p.Body,{children:[(0,F.jsx)(E,{providers:V,onSelect:()=>{}}),(0,F.jsx)(h,{children:`or with email`}),(0,F.jsxs)(`form`,{className:`grid gap-3`,onSubmit:async t=>{t.preventDefault();let r=await o.run({email:e,password:n,remember:!1});r?.ok&&a(r.value.status===`signed-in`?r.value.user.name:`a two-step account`)},children:[o.message?(0,F.jsx)(m,{children:o.message}):null,(0,F.jsx)(f,{label:`Email`,children:(0,F.jsx)(u,{type:`email`,value:e,onChange:e=>t(e.target.value),autoComplete:`username`})}),(0,F.jsx)(f,{label:`Password`,aside:(0,F.jsx)(g,{className:`text-[12px]`,children:`Forgot?`}),children:(0,F.jsx)(T,{value:n,onChange:e=>r(e.target.value),autoComplete:`current-password`})}),(0,F.jsx)(d,{pending:o.pending,children:`Log in`})]})]}),(0,F.jsx)(p.Footer,{children:`Protected by two-step verification.`})]})}var U=`import { useState } from "react"
import { AuthCard, AuthDivider, AuthField, AuthInput, AuthMessage, createFakeAuthAdapter, LinkButton, OAuthButtons, AuthPasswordInput, SubmitButton, useAuthAction, type OAuthProvider } from "@kitora/auth"

const adapter = createFakeAuthAdapter()
const providers: OAuthProvider[] = [{ id: "github", label: "GitHub" }]

// the SignInForm preset, rebuilt from the public parts and the headless useAuthAction
export function SignInFromParts() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [done, setDone] = useState<string | null>(null)
  const signIn = useAuthAction(adapter.signInWithPassword)
  if (done) return <AuthMessage tone="success">Signed in as {done}.</AuthMessage>
  return (
    <AuthCard.Root className="max-w-[340px]">
      <AuthCard.Header>
        <AuthCard.Title>Log in</AuthCard.Title>
        <AuthCard.Description>Use your work account.</AuthCard.Description>
      </AuthCard.Header>
      <AuthCard.Body>
        <OAuthButtons providers={providers} onSelect={() => {}} />
        <AuthDivider>or with email</AuthDivider>
        <form
          className="grid gap-3"
          onSubmit={async (e) => {
            e.preventDefault()
            const r = await signIn.run({ email, password, remember: false })
            if (r?.ok) setDone(r.value.status === "signed-in" ? r.value.user.name : "a two-step account")
          }}
        >
          {signIn.message ? <AuthMessage>{signIn.message}</AuthMessage> : null}
          <AuthField label="Email">
            <AuthInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
          </AuthField>
          <AuthField label="Password" aside={<LinkButton className="text-[12px]">Forgot?</LinkButton>}>
            <AuthPasswordInput value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          </AuthField>
          <SubmitButton pending={signIn.pending}>Log in</SubmitButton>
        </form>
      </AuthCard.Body>
      <AuthCard.Footer>Protected by two-step verification.</AuthCard.Footer>
    </AuthCard.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>o(()=>import(`./sign-in-parts-Cp1BuYWi.js`),[]));var W=b(),G=[{id:`google`,label:`Google`},{id:`github`,label:`GitHub`},{id:`microsoft`,label:`Microsoft`},{id:`okta`,label:`SSO`,icon:`sso`}];function K(){let[e,t]=(0,z.useState)(null);return(0,F.jsxs)(`div`,{className:`grid h-full md:grid-cols-2`,children:[(0,F.jsxs)(`div`,{className:`relative hidden flex-col justify-between overflow-hidden bg-zinc-950 p-8 text-zinc-100 md:flex`,children:[(0,F.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,oklch(0.55_0.17_155/0.35),transparent_55%),radial-gradient(circle_at_90%_90%,oklch(0.6_0.15_260/0.3),transparent_50%)]`}),(0,F.jsxs)(`span`,{className:`relative flex items-center gap-2 text-[14px] font-semibold`,children:[(0,F.jsx)(a,{className:`size-4`}),` Northwind`]}),(0,F.jsxs)(`figure`,{className:`relative max-w-sm`,children:[(0,F.jsx)(i,{className:`mb-3 size-5 text-zinc-500`}),(0,F.jsx)(`blockquote`,{className:`text-[15px] leading-relaxed`,children:`Northwind replaced four tools for our ops team. Onboarding took an afternoon.`}),(0,F.jsx)(`figcaption`,{className:`mt-3 text-[12.5px] text-zinc-400`,children:`Priya Raman · Head of Operations, Lumen`})]})]}),(0,F.jsx)(`div`,{className:`grid place-items-center p-6`,children:e?(0,F.jsx)(r,{user:e,onSignOut:()=>t(null)}):(0,F.jsx)(n,{bare:!0,className:`max-w-[340px]`,adapter:W,providers:G,title:`Welcome back`,description:`Sign in to your Northwind workspace.`,onSignedIn:t,onForgotPassword:()=>{},onSignUp:()=>{}})})]})}var q=`import { useState } from "react"
import { Quote, Sparkles } from "lucide-react"
import { createFakeAuthAdapter, SignedIn, SignInForm, type AuthUser, type OAuthProvider } from "@kitora/auth"

const adapter = createFakeAuthAdapter()
const providers: OAuthProvider[] = [
  { id: "google", label: "Google" },
  { id: "github", label: "GitHub" },
  { id: "microsoft", label: "Microsoft" },
  { id: "okta", label: "SSO", icon: "sso" },
]

export function SplitSignIn() {
  const [user, setUser] = useState<AuthUser | null>(null)
  return (
    <div className="grid h-full md:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-zinc-950 p-8 text-zinc-100 md:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,oklch(0.55_0.17_155/0.35),transparent_55%),radial-gradient(circle_at_90%_90%,oklch(0.6_0.15_260/0.3),transparent_50%)]" />
        <span className="relative flex items-center gap-2 text-[14px] font-semibold">
          <Sparkles className="size-4" /> Northwind
        </span>
        <figure className="relative max-w-sm">
          <Quote className="mb-3 size-5 text-zinc-500" />
          <blockquote className="text-[15px] leading-relaxed">Northwind replaced four tools for our ops team. Onboarding took an afternoon.</blockquote>
          <figcaption className="mt-3 text-[12.5px] text-zinc-400">Priya Raman · Head of Operations, Lumen</figcaption>
        </figure>
      </div>
      <div className="grid place-items-center p-6">
        {user ? (
          <SignedIn user={user} onSignOut={() => setUser(null)} />
        ) : (
          // bare: no card frame, so it sits on the page itself
          <SignInForm bare className="max-w-[340px]" adapter={adapter} providers={providers} title="Welcome back" description="Sign in to your Northwind workspace." onSignedIn={setUser} onForgotPassword={() => {}} onSignUp={() => {}} />
        )}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>o(()=>import(`./sign-in-split-C7S9Jxq5.js`),[]));var J={name:``,email:``,password:``},{v:Y}=k(),X=b(),Z={rule:`fn`,deps:[`name`,`email`],fn:(e,t)=>{let n=typeof t==`object`&&t?Object.values(t).filter(t=>typeof t==`string`&&t!==e):[];return y(typeof e==`string`?e:``,v,{userInputs:n}).find(e=>!e.passed)?.label}};function Q({form:e}){let t=j(e,`password`),n=ee(t,{userInputs:[j(e,`name`),j(e,`email`)]});return(0,F.jsxs)(`div`,{className:`-mt-1 grid gap-1.5`,children:[(0,F.jsx)(C,{strength:t?n.strength:null}),t?(0,F.jsx)(w,{rules:n.rules}):null]})}function ne(){let e=D({defaultValues:J,validateOn:`blur`,revalidateOn:`change`});return(0,F.jsxs)(p.Root,{children:[(0,F.jsxs)(p.Header,{children:[(0,F.jsx)(p.Title,{children:`Create your account`}),(0,F.jsx)(p.Description,{children:`Fields, validation and submit from @kitora/form; strength and policy from the auth kit.`})]}),(0,F.jsxs)(A,{form:e,onSubmit:async e=>{let t=await X.signUp(e);if(!t.ok){let e=S(t.error);throw new O(t.error.field===`email`?{fields:{email:e}}:{message:e,code:t.error.code})}return t.value.user.email},children:[(0,F.jsx)(M,{name:`name`,label:`Full name`,required:!0,autoComplete:`name`}),(0,F.jsx)(M,{name:`email`,label:`Email`,type:`email`,required:!0,autoComplete:`email`,rules:[Y.email(`Enter a valid email`)]}),(0,F.jsx)(N,{name:`password`,label:`Password`,required:!0,autoComplete:`new-password`,rules:[Z]}),(0,F.jsx)(Q,{form:e}),(0,F.jsx)(A.Submit,{className:c({className:`w-full`}),pendingLabel:`Creating account…`,children:`Create account`}),(0,F.jsx)(A.Status,{success:e=>(0,F.jsxs)(`p`,{className:`text-[12.5px] text-emerald-700 dark:text-emerald-400`,children:[`Account created for `,e,`. Check your inbox.`]}),error:e=>e.message?(0,F.jsx)(`p`,{className:`text-[12.5px] text-destructive`,children:e.message}):null})]})]})}var $=`import { buttonVariants } from "@kitora/ui/button"
import { kit, SubmitError, type Validator } from "@kitora/form/core"
import { PasswordField, TextField } from "@kitora/form/fields"
import { Form, useForm, useFormValue } from "@kitora/form/react"
import { AuthCard, checkPolicy, createFakeAuthAdapter, DEFAULT_PASSWORD_POLICY, errorMessage, PasswordChecklist, PasswordStrengthMeter, usePasswordStrength } from "@kitora/auth"

type Signup = { name: string; email: string; password: string }
const defaultValues: Signup = { name: "", email: "", password: "" }
const { v } = kit<Signup>()
const adapter = createFakeAuthAdapter()

// the kit's password policy as a form-engine rule: the first failing rule is the message
const passwordPolicyRule: Validator = {
  rule: "fn",
  deps: ["name", "email"],
  fn: (value, values) => {
    const inputs = typeof values === "object" && values !== null ? Object.values(values).filter((x): x is string => typeof x === "string" && x !== value) : []
    return checkPolicy(typeof value === "string" ? value : "", DEFAULT_PASSWORD_POLICY, { userInputs: inputs }).find((r) => !r.passed)?.label
  },
}

// the strength meter and checklist read the field's live value
function PasswordHelp({ form }: { readonly form: ReturnType<typeof useForm<Signup>> }) {
  const password = useFormValue(form, "password")
  const name = useFormValue(form, "name")
  const email = useFormValue(form, "email")
  const check = usePasswordStrength(password, { userInputs: [name, email] })
  return (
    <div className="-mt-1 grid gap-1.5">
      <PasswordStrengthMeter strength={password ? check.strength : null} />
      {password ? <PasswordChecklist rules={check.rules} /> : null}
    </div>
  )
}

export function SignUpOnFormEngine() {
  const form = useForm<Signup, Signup, string>({ defaultValues, validateOn: "blur", revalidateOn: "change" })
  return (
    <AuthCard.Root>
      <AuthCard.Header>
        <AuthCard.Title>Create your account</AuthCard.Title>
        <AuthCard.Description>Fields, validation and submit from @kitora/form; strength and policy from the auth kit.</AuthCard.Description>
      </AuthCard.Header>
      <Form
        form={form}
        onSubmit={async (values) => {
          const r = await adapter.signUp(values)
          // a coded adapter error becomes a SubmitError: on its field when it names one, else the form's status
          if (!r.ok) {
            const message = errorMessage(r.error)
            throw new SubmitError<Signup>(r.error.field === "email" ? { fields: { email: message } } : { message, code: r.error.code })
          }
          return r.value.user.email
        }}
      >
        <TextField name="name" label="Full name" required autoComplete="name" />
        <TextField name="email" label="Email" type="email" required autoComplete="email" rules={[v.email("Enter a valid email")]} />
        <PasswordField name="password" label="Password" required autoComplete="new-password" rules={[passwordPolicyRule]} />
        <PasswordHelp form={form} />
        <Form.Submit className={buttonVariants({ className: "w-full" })} pendingLabel="Creating account…">
          Create account
        </Form.Submit>
        <Form.Status<string>
          success={(email) => <p className="text-[12.5px] text-emerald-700 dark:text-emerald-400">Account created for {email}. Check your inbox.</p>}
          error={(err) => (err.message ? <p className="text-[12.5px] text-destructive">{err.message}</p> : null)}
        />
      </Form>
    </AuthCard.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>o(()=>import(`./sign-up-form-engine-CMA2pS1N.js`),[]));function re(){return(0,F.jsxs)(`div`,{children:[(0,F.jsx)(t,{title:`Sign-in pages`,children:`The same presets in different products: a branded split screen, passwordless, a screen rebuilt from the parts, and sign-up on the form engine.`}),(0,F.jsx)(P,{n:1,title:`Split screen`,blurb:"`SignInForm` with `bare` (no card) beside a brand panel; four providers including an SSO entry with its own icon key.",code:q,children:(0,F.jsx)(_,{testId:`sign-in-split`,height:560,children:(0,F.jsx)(K,{})})}),(0,F.jsx)(P,{n:2,title:`Passwordless`,blurb:'`methods={["magic-link"]}`: email a link, then a "check your email" state with a resend cooldown.',code:R,children:(0,F.jsx)(_,{testId:`sign-in-passwordless`,center:!0,children:(0,F.jsx)(te,{})})}),(0,F.jsx)(P,{n:3,title:`Rebuilt from parts`,blurb:"`AuthCard.*`, `AuthField`, `AuthPasswordInput`, `OAuthButtons` and `SubmitButton` with the headless `useAuthAction`: the preset's behaviour in your own layout.",code:U,children:(0,F.jsx)(_,{testId:`sign-in-parts`,center:!0,children:(0,F.jsx)(H,{})})}),(0,F.jsx)(P,{n:4,title:`Sign up on @kitora/form`,blurb:"The form engine owns fields, validation and submit; the kit's `checkPolicy` becomes a form rule and the meter reads the live value. Adapter errors surface as the form's status.",code:$,children:(0,F.jsx)(_,{testId:`sign-up-form-engine`,center:!0,children:(0,F.jsx)(ne,{})})})]})}export{re as component};