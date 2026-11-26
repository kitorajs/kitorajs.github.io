import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{a as n,s as r}from"./flows-a2T88_i-.js";import{t as i}from"./quote-CwfTt_wT.js";import{t as a}from"./sparkles-BCjOdQum.js";import{Bc as o,Cc as s,Ic as c,ni as ee}from"./index-q72zUtm9.js";import{A as l,At as u,Y as d,c as f,g as p}from"./field-config-DXiPz8Cg.js";import{a as m}from"./fields-CoJCsIMd.js";import{r as h}from"./fields-extra-uoDLzrFQ.js";import{S as g,a as _,c as v,i as y,n as b,o as x,r as S,s as te,t as C,x as w}from"./-kits.auth.shared-B697pN85.js";import{c as T,t as E,u as D}from"./use-action-BLj5e3rx.js";import{a as O,i as k,r as A,t as j}from"./password-CLqc96WA.js";import{t as M}from"./oauth-BPpSbxB9.js";import"./kit-gallery-Atvibnty.js";import{t as N}from"./example-B8EaWveR.js";var P=c(),F=T(),I=[{id:`google`,label:`Google`},{id:`github`,label:`GitHub`},{id:`apple`,label:`Apple`},{id:`gitlab`,label:`GitLab`}];function L(){return(0,P.jsx)(n,{adapter:F,methods:[`magic-link`],providers:I,title:`Sign in with email`,description:`We'll email you a link that signs you in. No password needed.`})}var R=`import { createFakeAuthAdapter, SignInForm, type OAuthProvider } from "@kitora/auth"

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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>s(()=>import(`./passwordless-D-sDZgLq.js`),[]));var z=e(o(),1),B=T(),V=[{id:`github`,label:`GitHub`}];function H(){let[e,t]=(0,z.useState)(``),[n,r]=(0,z.useState)(``),[i,a]=(0,z.useState)(null),o=E(B.signInWithPassword);return i?(0,P.jsxs)(x,{tone:`success`,children:[`Signed in as `,i,`.`]}):(0,P.jsxs)(b.Root,{className:`max-w-[340px]`,children:[(0,P.jsxs)(b.Header,{children:[(0,P.jsx)(b.Title,{children:`Log in`}),(0,P.jsx)(b.Description,{children:`Use your work account.`})]}),(0,P.jsxs)(b.Body,{children:[(0,P.jsx)(M,{providers:V,onSelect:()=>{}}),(0,P.jsx)(S,{children:`or with email`}),(0,P.jsxs)(`form`,{className:`grid gap-3`,onSubmit:async t=>{t.preventDefault();let r=await o.run({email:e,password:n,remember:!1});r?.ok&&a(r.value.status===`signed-in`?r.value.user.name:`a two-step account`)},children:[o.message?(0,P.jsx)(x,{children:o.message}):null,(0,P.jsx)(y,{label:`Email`,children:(0,P.jsx)(_,{type:`email`,value:e,onChange:e=>t(e.target.value),autoComplete:`username`})}),(0,P.jsx)(y,{label:`Password`,aside:(0,P.jsx)(te,{className:`text-[12px]`,children:`Forgot?`}),children:(0,P.jsx)(j,{value:n,onChange:e=>r(e.target.value),autoComplete:`current-password`})}),(0,P.jsx)(v,{pending:o.pending,children:`Log in`})]})]}),(0,P.jsx)(b.Footer,{children:`Protected by two-step verification.`})]})}var U=`import { useState } from "react"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>s(()=>import(`./sign-in-parts-DlMb1GJ5.js`),[]));var W=T(),G=[{id:`google`,label:`Google`},{id:`github`,label:`GitHub`},{id:`microsoft`,label:`Microsoft`},{id:`okta`,label:`SSO`,icon:`sso`}];function K(){let[e,t]=(0,z.useState)(null);return(0,P.jsxs)(`div`,{className:`grid h-full md:grid-cols-2`,children:[(0,P.jsxs)(`div`,{className:`relative hidden flex-col justify-between overflow-hidden bg-zinc-950 p-8 text-zinc-100 md:flex`,children:[(0,P.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,oklch(0.55_0.17_155/0.35),transparent_55%),radial-gradient(circle_at_90%_90%,oklch(0.6_0.15_260/0.3),transparent_50%)]`}),(0,P.jsxs)(`span`,{className:`relative flex items-center gap-2 text-[14px] font-semibold`,children:[(0,P.jsx)(a,{className:`size-4`}),` Northwind`]}),(0,P.jsxs)(`figure`,{className:`relative max-w-sm`,children:[(0,P.jsx)(i,{className:`mb-3 size-5 text-zinc-500`}),(0,P.jsx)(`blockquote`,{className:`text-[15px] leading-relaxed`,children:`Northwind replaced four tools for our ops team. Onboarding took an afternoon.`}),(0,P.jsx)(`figcaption`,{className:`mt-3 text-[12.5px] text-zinc-400`,children:`Priya Raman · Head of Operations, Lumen`})]})]}),(0,P.jsx)(`div`,{className:`grid place-items-center p-6`,children:e?(0,P.jsx)(r,{user:e,onSignOut:()=>t(null)}):(0,P.jsx)(n,{bare:!0,className:`max-w-[340px]`,adapter:W,providers:G,title:`Welcome back`,description:`Sign in to your Northwind workspace.`,onSignedIn:t,onForgotPassword:()=>{},onSignUp:()=>{}})})]})}var q=`import { useState } from "react"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>s(()=>import(`./sign-in-split-CoqxkmBt.js`),[]));var J={name:``,email:``,password:``},{v:Y}=d(),X=T(),Z={rule:`fn`,deps:[`name`,`email`],fn:(e,t)=>{let n=typeof t==`object`&&t?Object.values(t).filter(t=>typeof t==`string`&&t!==e):[];return g(typeof e==`string`?e:``,w,{userInputs:n}).find(e=>!e.passed)?.label}};function Q({form:e}){let t=p(e,`password`),n=O(t,{userInputs:[p(e,`name`),p(e,`email`)]});return(0,P.jsxs)(`div`,{className:`-mt-1 grid gap-1.5`,children:[(0,P.jsx)(k,{strength:t?n.strength:null}),t?(0,P.jsx)(A,{rules:n.rules}):null]})}function ne(){let e=l({defaultValues:J,validateOn:`blur`,revalidateOn:`change`});return(0,P.jsxs)(b.Root,{children:[(0,P.jsxs)(b.Header,{children:[(0,P.jsx)(b.Title,{children:`Create your account`}),(0,P.jsx)(b.Description,{children:`Fields, validation and submit from @kitora/form; strength and policy from the auth kit.`})]}),(0,P.jsxs)(f,{form:e,onSubmit:async e=>{let t=await X.signUp(e);if(!t.ok){let e=D(t.error);throw new u(t.error.field===`email`?{fields:{email:e}}:{message:e,code:t.error.code})}return t.value.user.email},children:[(0,P.jsx)(m,{name:`name`,label:`Full name`,required:!0,autoComplete:`name`}),(0,P.jsx)(m,{name:`email`,label:`Email`,type:`email`,required:!0,autoComplete:`email`,rules:[Y.email(`Enter a valid email`)]}),(0,P.jsx)(h,{name:`password`,label:`Password`,required:!0,autoComplete:`new-password`,rules:[Z]}),(0,P.jsx)(Q,{form:e}),(0,P.jsx)(f.Submit,{className:ee({className:`w-full`}),pendingLabel:`Creating account…`,children:`Create account`}),(0,P.jsx)(f.Status,{success:e=>(0,P.jsxs)(`p`,{className:`text-[12.5px] text-emerald-700 dark:text-emerald-400`,children:[`Account created for `,e,`. Check your inbox.`]}),error:e=>e.message?(0,P.jsx)(`p`,{className:`text-[12.5px] text-destructive`,children:e.message}):null})]})]})}var $=`import { buttonVariants } from "@kitora/ui/button"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>s(()=>import(`./sign-up-form-engine-CVaNsgF4.js`),[]));function re(){return(0,P.jsxs)(`div`,{children:[(0,P.jsx)(t,{title:`Sign-in pages`,children:`The same presets in different products: a branded split screen, passwordless, a screen rebuilt from the parts, and sign-up on the form engine.`}),(0,P.jsx)(N,{n:1,title:`Split screen`,blurb:"`SignInForm` with `bare` (no card) beside a brand panel; four providers including an SSO entry with its own icon key.",code:q,children:(0,P.jsx)(C,{testId:`sign-in-split`,height:560,children:(0,P.jsx)(K,{})})}),(0,P.jsx)(N,{n:2,title:`Passwordless`,blurb:'`methods={["magic-link"]}`: email a link, then a "check your email" state with a resend cooldown.',code:R,children:(0,P.jsx)(C,{testId:`sign-in-passwordless`,center:!0,children:(0,P.jsx)(L,{})})}),(0,P.jsx)(N,{n:3,title:`Rebuilt from parts`,blurb:"`AuthCard.*`, `AuthField`, `AuthPasswordInput`, `OAuthButtons` and `SubmitButton` with the headless `useAuthAction`: the preset's behaviour in your own layout.",code:U,children:(0,P.jsx)(C,{testId:`sign-in-parts`,center:!0,children:(0,P.jsx)(H,{})})}),(0,P.jsx)(N,{n:4,title:`Sign up on @kitora/form`,blurb:"The form engine owns fields, validation and submit; the kit's `checkPolicy` becomes a form rule and the meter reads the live value. Adapter errors surface as the form's status.",code:$,children:(0,P.jsx)(C,{testId:`sign-up-form-engine`,center:!0,children:(0,P.jsx)(ne,{})})})]})}export{re as component};