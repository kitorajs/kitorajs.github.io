import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./rotate-cw-Ds2wx6VW.js";import{Bc as r,Cc as i,Ic as a,ni as o}from"./index-9y5uwRd3.js";import{c as s,r as c,t as l}from"./field-options-BxYA8-No.js";import{K as u,W as d,n as f}from"./messages-BpgLhfTN.js";import{A as p,At as m,E as h,F as g,c as _,h as v,r as y}from"./field-config-62hz5rv-.js";import{a as b}from"./fields-3rMiSNLY.js";import{t as x}from"./color-scheme-CTH3fBVS.js";import{t as S}from"./example-CZLJLtIC.js";import{n as C,s as w,t as T}from"./demos-DilKtWQ6.js";var E=e(r(),1),D=a(),O={vendor:`vendor`,load:`load`};function k(e,t){return e.kind===O.load?e.detail??t.t(`captcha.loadFailed`):e.code===void 0?t.t(`captcha.error`):t.t(`captcha.errorCode`,{code:e.code})}function A({name:e,provider:t,verifiedText:r,required:i=!0,...a}){let o=f(),u=a.label??o.t(`captcha.label`),d=h(e,l({...a,label:u,required:i},`captcha`,{props:{provider:t.id}})),p=g(),m=x(),_=(0,E.useRef)(null),v=(0,E.useRef)(null),[b,S]=(0,E.useState)(null),C=b===null?null:k(b,o),[w,T]=(0,E.useState)(0),A=(0,E.useRef)(d.setValue);A.current=d.setValue;let j=typeof d.value==`string`?d.value:``;return(0,E.useEffect)(()=>{let e=_.current;if(!p||!e)return;let n=document.createElement(`div`);e.appendChild(n);let r=!0;return S(null),t.render(n,{onToken:e=>{r&&(S(null),A.current(e))},onExpire:()=>{r&&A.current(``)},onError:e=>{r&&(S({kind:O.vendor,code:e}),A.current(``))}},{theme:m}).then(e=>{r?v.current=e:e.remove()}).catch(e=>{r&&S({kind:O.load,detail:e instanceof Error?e.message:void 0})}),()=>{r=!1,v.current?.remove(),v.current=null,n.remove()}},[p,t,m,w]),(0,E.useEffect)(()=>{j===``&&v.current?.getToken()&&v.current.reset()},[j]),(0,D.jsx)(c,{hidden:!d.active,readOnly:d.readOnly,htmlFor:d.id,error:d.error,warning:d.warning,label:u,description:a.description,required:d.required,span:a.span,readOnlyContent:(0,D.jsx)(y,{value:j?r??o.t(`captcha.verified`):null}),submitAs:{name:d.name,value:j},children:(0,D.jsxs)(`div`,{id:d.id,role:`group`,"aria-labelledby":d.labelledBy??s(d.id),className:`flex flex-col gap-1`,children:[(0,D.jsx)(`div`,{ref:_,className:`min-h-[65px] max-w-[300px]`,"data-captcha-provider":t.id}),(0,D.jsx)(`div`,{role:`status`,className:`flex min-h-4 items-center gap-1.5 text-xs`,children:C?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`span`,{className:`text-destructive`,children:C}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>T(e=>e+1),className:`inline-flex items-center gap-1 rounded px-1 font-medium hover:bg-accent`,children:[(0,D.jsx)(n,{className:`size-3`}),o.t(`action.retry`)]})]}):j?(0,D.jsx)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:r??o.t(`captcha.verified`)}):null})]})})}var j=`https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit`,M=`turnstile`,N={pass:`1x00000000000000000000AA`,block:`2x00000000000000000000AB`,interactive:`3x00000000000000000000FF`},P=e=>typeof e==`object`&&!!e&&[`render`,`reset`,`remove`,`getResponse`].every(t=>typeof Reflect.get(e,t)==`function`);function F(){if(typeof window>`u`)return;let e=Reflect.get(window,`turnstile`);return P(e)?e:void 0}function I(e=j){let t=F();return t?Promise.resolve(t):new Promise((t,n)=>{let r=document.querySelector(`script[data-captcha-script="${M}"]`),i=r??document.createElement(`script`);i.addEventListener(`load`,()=>{let e=F();e?t(e):n(Error(`Turnstile script loaded without its API`))},{once:!0}),i.addEventListener(`error`,()=>n(Error(`Turnstile script could not load`)),{once:!0}),r||(i.src=e,i.async=!0,i.defer=!0,i.dataset.captchaScript=M,document.head.appendChild(i))})}function L({siteKey:e,size:t=`flexible`,action:n,load:r=I}){return{id:`turnstile`,async render(i,a,o){let s=await r(),c=s.render(i,{sitekey:e,theme:o.theme,size:t,action:n,"response-field":!1,callback:e=>typeof e==`string`?a.onToken(e):void 0,"expired-callback":()=>a.onExpire(),"error-callback":e=>a.onError(typeof e==`string`||typeof e==`number`?String(e):void 0)});if(c===void 0)throw Error(`Turnstile did not render`);return{getToken:()=>s.getResponse(c)||void 0,reset:()=>s.reset(c),remove:()=>s.remove(c)}}}}var R={missing:`Complete the verification`,rejected:`Verification failed, please try again`,unavailable:`Verification is unavailable right now, please try again`};async function z(e,t,n,r={}){let i={...R,...r.messages},a=u(e,t);if(typeof a!=`string`||a.trim()===``)return[{path:t,message:i.missing}];try{return(await n(a,{remoteIp:r.remoteIp,signal:r.signal})).success?[]:[{path:t,message:i.rejected}]}catch{return[{path:t,message:i.unavailable}]}}var B=`https://challenges.cloudflare.com/turnstile/v0/siteverify`,V={pass:`1x0000000000000000000000000000000AA`,fail:`2x0000000000000000000000000000000AA`,spent:`3x0000000000000000000000000000000AA`},H=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function U(e){if(!H(e))return{success:!1,errorCodes:[`invalid-response`]};let t=Array.isArray(e[`error-codes`])?e[`error-codes`].filter(e=>typeof e==`string`):[];return{success:e.success===!0,errorCodes:t,...typeof e.hostname==`string`?{hostname:e.hostname}:{}}}function W({secret:e,fetch:t,url:n=B}){return async(r,i)=>{let a=t??(typeof fetch==`function`?fetch:void 0);if(!a)throw Error("turnstileVerifier: no fetch available — pass `fetch`");let o=new URLSearchParams({secret:e,response:r});i.remoteIp&&o.set(`remoteip`,i.remoteIp);let s=await a(n,{method:`POST`,body:o,signal:i.signal});if(!s.ok)throw Error(`turnstileVerifier: siteverify answered ${s.status}`);return U(await s.json())}}var G={email:``,captcha:``},K=250,q=L({siteKey:N.pass}),J=W({secret:V.pass,fetch:async(e,t)=>{await new Promise(e=>setTimeout(e,K));let n=t.body.get(`secret`)===V.pass&&!!t.body.get(`response`);return{ok:!0,status:200,json:async()=>({success:n,"error-codes":n?[]:[`invalid-input-response`]})}}}),Y={async signUp(e){let t=await z(e,`captcha`,J);if(t.length)throw new m({fields:Object.fromEntries(t.map(e=>[e.path,e.message]))});return{id:`usr_`+e.email.length}}};function X(){let e=p({defaultValues:G});return(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,D.jsxs)(_,{form:e,onSubmit:Y.signUp,children:[(0,D.jsx)(b,{name:`email`,type:`email`,label:`Email`,required:!0}),(0,D.jsx)(A,{name:`captcha`,provider:q,description:`Cloudflare's test site key: always passes, no real challenge.`}),(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 pt-2`,children:[(0,D.jsx)(_.Submit,{className:o({size:`sm`,className:`w-fit`}),pendingLabel:`Saving…`,children:`Sign up`}),(0,D.jsx)(_.Status,{className:`text-[13px]`,pending:(0,D.jsx)(`span`,{className:`text-muted-foreground`,children:`Submitting…`}),invalid:(0,D.jsx)(`span`,{className:`text-destructive`,children:`Fix the highlighted fields.`}),success:e=>(0,D.jsxs)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:[`Verified on the server · `,e.id]}),error:e=>(0,D.jsx)(`span`,{className:`text-destructive`,children:e.message})})]})]}),(0,D.jsx)(Z,{form:e})]})}function Z({form:e}){let{payload:t,dirty:n,status:r,issues:i}=v(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),d);return(0,D.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,D.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),i.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:i.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var Q=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, SubmitError, type Issue, type SubmitStatus } from "@kitora/form/core"
import { CaptchaField, TextField, TURNSTILE_TEST_SITE_KEYS, turnstileProvider } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { TURNSTILE_TEST_SECRETS, turnstileVerifier, verifyCaptcha, type FetchLike } from "@kitora/form/server"

type Signup = { email: string; captcha: string }
type Saved = { id: string }

const defaultValues: Signup = { email: "", captcha: "" }
/** Fake network latency (ms) for the stand-in verify call. */
const LATENCY_MS = 250
// module scope: keep the provider stable (use your real site key in production)
const turnstile = turnstileProvider({ siteKey: TURNSTILE_TEST_SITE_KEYS.pass })

/**
 * Stand-in for Cloudflare's siteverify, which a browser cannot call (it is server-only and needs the secret).
 * With the TEST secret it answers what Cloudflare answers for it: success. On your server, drop \`fetch\` and use the real one.
 */
const siteverifyStub: FetchLike = async (_url, init) => {
  await new Promise((resolve) => setTimeout(resolve, LATENCY_MS))
  const ok = init.body.get("secret") === TURNSTILE_TEST_SECRETS.pass && Boolean(init.body.get("response"))
  return { ok: true, status: 200, json: async () => ({ success: ok, "error-codes": ok ? [] : ["invalid-input-response"] }) }
}

// stub: replace with your API — this half runs on YOUR server (siteverify needs the secret)
const verifier = turnstileVerifier({ secret: TURNSTILE_TEST_SECRETS.pass, fetch: siteverifyStub })
const api = {
  async signUp(values: Signup): Promise<Saved> {
    const issues = await verifyCaptcha(values, "captcha", verifier) // [] when Turnstile accepts the token
    if (issues.length) throw new SubmitError({ fields: Object.fromEntries(issues.map((i) => [i.path, i.message])) })
    return { id: "usr_" + values.email.length }
  },
}

export function SignupForm() {
  const form = useForm<Signup, Signup, Saved>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form} onSubmit={api.signUp}>
        <TextField name="email" type="email" label="Email" required />
        {/* token string; required by default; posts as "captcha" */}
        <CaptchaField name="captcha" provider={turnstile} description="Cloudflare's test site key: always passes, no real challenge." />
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Saving…">Sign up</Form.Submit>
          <Form.Status<Saved>
            className="text-[13px]"
            pending={<span className="text-muted-foreground">Submitting…</span>}
            invalid={<span className="text-destructive">Fix the highlighted fields.</span>}
            success={(r) => <span className="text-emerald-700 dark:text-emerald-400">Verified on the server · {r.id}</span>}
            error={(e) => <span className="text-destructive">{e.message}</span>}
          />
        </div>
      </Form>
      <Payload form={form} />
    </div>
  )
}


interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>i(()=>import(`./captcha-eaio_cdU.js`),[]));var $={id:`checkbox`,async render(e,t){let n=document.createElement(`label`);n.className=`flex h-7 items-center gap-2 text-[13px]`;let r=document.createElement(`input`);return r.type=`checkbox`,r.addEventListener(`change`,()=>r.checked?t.onToken(`human-${Date.now()}`):t.onExpire()),n.append(r,`I am not a robot (demo provider)`),e.replaceChildren(n),{getToken:()=>r.checked?`checked`:void 0,reset:()=>{r.checked=!1},remove:()=>e.replaceChildren()}}};function ee(){let e=p({defaultValues:{captcha:``}});return(0,D.jsxs)(w,{children:[(0,D.jsxs)(_,{form:e,children:[(0,D.jsx)(A,{name:`captcha`,label:`Check`,provider:$}),(0,D.jsx)(`button`,{type:`button`,className:`${T} w-fit`,onClick:()=>e.reset(),children:`Reset form (resets the challenge)`})]}),(0,D.jsx)(C,{store:e})]})}var te=`import { CaptchaField, type CaptchaProvider } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Check = { captcha: string }

const defaultValues: Check = { captcha: "" }

// any vendor fits the slot: render into the container, report a token, reset, remove
const checkboxProvider: CaptchaProvider = {
  id: "checkbox",
  async render(container, callbacks) {
    const box = document.createElement("input")
    box.type = "checkbox"
    box.addEventListener("change", () => (box.checked ? callbacks.onToken("human") : callbacks.onExpire()))
    container.replaceChildren(box)
    return { getToken: () => (box.checked ? "human" : undefined), reset: () => { box.checked = false }, remove: () => container.replaceChildren() }
  },
}

export function CheckForm() {
  const form = useForm<Check>({ defaultValues })
  return (
    <Form form={form}>
      <CaptchaField name="captcha" label="Check" provider={checkboxProvider} />
    </Form>
  )
}`;function ne(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(t,{title:`CAPTCHA`,children:[`A slot, not a vendor: `,(0,D.jsx)(`code`,{children:`CaptchaField`}),` takes a `,(0,D.jsx)(`code`,{children:`CaptchaProvider`}),` (render, token, reset) and stores the token as its value; the server checks it with `,(0,D.jsx)(`code`,{children:`verifyCaptcha`}),` before doing anything else. The Turnstile adapter loads Cloudflare's script only when the field renders; this page uses Cloudflare's public test keys.`]}),(0,D.jsx)(S,{n:1,title:`Turnstile sign-up`,blurb:`Token posts under the field's name; the handler verifies it server-side and fails closed.`,code:Q,children:(0,D.jsx)(X,{})}),(0,D.jsx)(S,{n:2,title:`Your own provider`,blurb:`The same field over a provider written in a few lines; a form reset resets the challenge.`,code:te,children:(0,D.jsx)(ee,{})})]})}export{ne as component};