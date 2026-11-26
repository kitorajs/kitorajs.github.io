import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-9y5uwRd3.js";import{i as o}from"./adapter-MuxtTBM4.js";import{K as s,U as c,W as l,X as u,Y as d,q as f}from"./messages-BpgLhfTN.js";import{A as p,c as m,g as h,p as g}from"./field-config-62hz5rv-.js";import{t as _}from"./tab-sync-DF9Npdix.js";import{a as v,o as y,r as b}from"./fields-3rMiSNLY.js";import{t as x}from"./tags-DKNuobw4.js";import{t as S}from"./example-CZLJLtIC.js";import{r as ee}from"./presence-D7z7_1Y4.js";import{a as te,c as C,d as ne,f as w,i as re,l as T,n as ie,o as ae,r as oe,s as E,t as se,u as D}from"./awareness-CR0kcyqK.js";import"./demos-DilKtWQ6.js";function ce(e){if(!e)return()=>!1;if(typeof e==`function`)return e;let t=e.map(e=>e.split(`.`));return e=>{let n=e.split(`.`);return t.some(e=>e.length===n.length&&e.every((e,t)=>e===`*`||e===n[t]))}}var O=(e,t)=>e?`${e}.${t}`:String(t);function k(e){if(typeof e!=`object`||!e||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}var A=e=>e===null||typeof e==`string`||typeof e==`boolean`||typeof e==`number`&&Number.isFinite(e);function j(e,t,n){if(n.exclude(t)){n.local.add(t);return}if(typeof e==`string`&&n.text(t))return new T(e);if(A(e))return e;if(Array.isArray(e)){let r=new E,i=[];return e.forEach((e,r)=>{i.push(j(e,O(t,r),n)??null)}),r.push(i),r}if(k(e)){let r=new C;for(let[i,a]of Object.entries(e)){if(c.has(i))continue;let e=j(a,O(t,i),n);e!==void 0&&r.set(i,e)}return r}n.local.add(t)}function le(e,t){let n=Math.min(e.length,t.length),r=0;for(;r<n&&e.charCodeAt(r)===t.charCodeAt(r);)r++;return r>0&&r<n&&de(e.charCodeAt(r-1))&&r--,r}function ue(e,t,n){let r=Math.min(e.length,t.length)-n,i=0;for(;i<r&&e.charCodeAt(e.length-1-i)===t.charCodeAt(t.length-1-i);)i++;return i>0&&i<r&&fe(e.charCodeAt(e.length-i))&&i--,i}var de=e=>e>=55296&&e<=56319,fe=e=>e>=56320&&e<=57343;function pe(e,t){let n=e.toString();if(n===t)return;let r=le(n,t),i=ue(n,t,r),a=n.length-r-i;a>0&&e.delete(r,a);let o=t.slice(r,t.length-i);o&&e.insert(r,o)}function M(e){return e instanceof T?e.toString():e instanceof E?e.toArray().map(M):e instanceof C?F(e):e}function N(e,t,n,r,i){if(r.exclude(n)){r.local.add(n);return}if(typeof t==`string`&&e instanceof T)return pe(e,t);if(Array.isArray(t)&&e instanceof E)return me(e,t,n,r);if(k(t)&&e instanceof C)return P(e,t,n,r);if(A(t)&&!(typeof t==`string`&&r.text(n))&&e===t)return;let a=j(t,n,r);a!==void 0&&i(a)}function me(e,t,n,r){let i=e.toArray(),a=i.map(M),o=Math.min(i.length,t.length),s=0;for(;s<o&&l(a[s],t[s]);)s++;let c=0;for(;c<o-s&&l(a[i.length-1-c],t[t.length-1-c]);)c++;let u=i.length-s-c,d=t.length-s-c;if(u===d){for(let a=s;a<s+u;a++)N(i[a],t[a],O(n,a),r,t=>{e.delete(a,1),e.insert(a,[t])});return}u>0&&e.delete(s,u);let f=t.slice(s,s+d).map((e,t)=>j(e,O(n,s+t),r)??null);f.length>0&&e.insert(s,f)}function P(e,t,n,r){for(let n of Array.from(e.keys()))(t[n]===void 0||!Object.hasOwn(t,n))&&e.delete(n);for(let[i,a]of Object.entries(t))c.has(i)||N(e.get(i),a,O(n,i),r,t=>e.set(i,t))}function F(e){let t={};for(let[n,r]of e.entries())c.has(n)||!f(n)||(t[n]=M(r));return t}function I(e,t,n){if(t!==``&&n.exclude(t)){n.local.add(t);return}if(!A(e)){if(Array.isArray(e))return e.forEach((e,r)=>I(e,O(t,r),n));if(k(e)){for(let[r,i]of Object.entries(e))c.has(r)||I(i,O(t,r),n);return}t!==``&&n.local.add(t)}}var L={undo:`undo`,redo:`redo`};function he(e,t){let n=d(t);for(let t=1;t<=n.length;t++)if(e.getSensitivity(n.slice(0,t).join(`.`))!==void 0)return!0;return!1}var ge=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function _e(e,t){let{doc:n}=t,r=n.getMap(t.root??`form`),i={binding:`kitora-form`},a={binding:`kitora-form:seed`},o=new ae(r,{trackedOrigins:new Set([i]),captureTimeout:t.captureTimeout??500}),c=ce(t.text),d=n=>he(e,n)||(t.exclude?.(n)??!1),f=!1,p=!1,m=!1,h=()=>({text:c,exclude:d,local:new Set});function g(t){let i=e.getValues();ge(i)&&n.transact(()=>P(r,i,``,h()),t)}function _(t){let n=e.getValues(),i=h();I(n,``,i);let a=F(r);for(let e of i.local){let t=s(n,e);t!==void 0&&(a=u(a,e,t))}if(!l(a,n)){p=!0;try{e.applyExternal(a,{origin:t})}finally{p=!1}}}let v=(e,n)=>{if(!(m||n.origin===i||n.origin===a)){if(t.onRemoteText&&n.origin!==o)for(let n of e)n.target instanceof T&&t.onRemoteText(n.path.join(`.`),n.delta);_(n.origin===o?`programmatic`:`external`)}};r.observeDeep(v);let y=e.onEvent(e=>{if(m||!f||p||e.type!==`change`||e.origin===`external`)return;let t=e.meta?.history;if(t===L.undo||t===L.redo){t===L.undo?o.undo():o.redo(),_(`programmatic`);return}g(i)}),b=()=>{m||(r.size===0?g(a):_(`external`),f=!0)};return{doc:n,root:r,undoManager:o,ready:t.whenSynced?Promise.resolve(t.whenSynced).then(b):Promise.resolve(b()),undo:()=>o.undo()!==null,redo:()=>o.redo()!==null,canUndo:()=>o.canUndo(),canRedo:()=>o.canRedo(),destroy(){m=!0,r.unobserveDeep(v),y(),o.destroy()}}}var R={sync1:`sync1`,sync2:`sync2`,update:`update`,awareness:`awareness`},ve=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function ye(e){if(!ve(e)||typeof e.from!=`string`)return!1;switch(e.kind){case R.sync1:return e.sv instanceof Uint8Array&&typeof e.reply==`boolean`;case R.sync2:return e.update instanceof Uint8Array&&typeof e.to==`string`;case R.update:case R.awareness:return e.update instanceof Uint8Array;default:return!1}}var z=0;function be(){return z++,typeof crypto<`u`&&typeof crypto.randomUUID==`function`?crypto.randomUUID():`peer-${Date.now()}-${z}-${Math.random()}`}function xe(e,t={}){let n=!t.awareness,r=t.awareness??new se(e),i=t.transport??(t.room?_(`kitora-collab:`+t.room):null),a=be(),o={provider:a},s=()=>{},c=new Promise(e=>{s=e});if(!i)return s(),{doc:e,awareness:r,connected:!1,whenSynced:c,destroy:()=>{n&&r.destroy()}};let l=e=>i.send(e),u=e=>l({kind:R.awareness,from:a,update:oe(r,e)});i.listen(t=>{if(!(!ye(t)||t.from===a))switch(t.kind){case R.sync1:l({kind:R.sync2,from:a,to:t.from,update:ne(e,t.sv)}),t.reply&&(l({kind:R.sync1,from:a,sv:w(e),reply:!1}),r.getLocalState()!==null&&u([e.clientID]));return;case R.sync2:if(t.to!==a)return;D(e,t.update,o),s();return;case R.update:D(e,t.update,o);return;case R.awareness:ie(r,t.update,o);return}});let d=(e,t)=>{t!==o&&l({kind:R.update,from:a,update:e})},f=(e,t)=>{t!==o&&u([...e.added,...e.updated,...e.removed])};e.on(`update`,d),r.on(`update`,f);let p=()=>re(r,[e.clientID],`leave`);typeof window<`u`&&window.addEventListener(`pagehide`,p),l({kind:R.sync1,from:a,sv:w(e),reply:!0}),r.getLocalState()!==null&&u([e.clientID]);let m=setTimeout(s,t.syncTimeoutMs??300),h=!1;return{doc:e,awareness:r,connected:!0,whenSynced:c,destroy(){h||(h=!0,clearTimeout(m),typeof window<`u`&&window.removeEventListener(`pagehide`,p),p(),e.off(`update`,d),r.off(`update`,f),i.close(),n&&r.destroy())}}}var B={user:`user`,focus:`focus`},Se=`#64748b`,Ce=/^#[0-9a-f]{3,8}$/i,V=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function we(e){return typeof e==`string`&&Ce.test(e)?e:Se}function Te(e,t,n){if(!V(t))return null;let r=t[B.user];if(!V(r)||typeof r.name!=`string`||r.name.trim()===``)return null;let i=t[B.focus];return{clientId:e,user:{name:r.name.slice(0,40),color:we(r.color)},focus:typeof i==`string`&&i!==``&&f(i)?i:null,self:e===n}}function H(e){let t=[];for(let[n,r]of e.getStates()){let i=Te(n,r,e.clientID);i&&t.push(i)}return t.toSorted((e,t)=>e.self===t.self?e.clientId-t.clientId:e.self?-1:1)}function Ee(e,t,n){t.setLocalStateField(B.user,n),t.setLocalStateField(B.focus,null);let r=null,i=e.onEvent(e=>{e.type===`focus`?(r=e.path,t.setLocalStateField(B.focus,e.path)):e.type===`blur`&&r===e.path&&(r=null,t.setLocalStateField(B.focus,null))});return()=>{i(),t.getLocalState()!==null&&t.setLocalStateField(B.focus,null)}}var U=e(n(),1),W=i(),G=`data-collab-scope`,De=/^[\w.-]+$/;function K(e,t){let n=0,r=0;for(let i of t){if(n>=e)break;i.retain===void 0?i.delete===void 0?i.insert!==void 0&&(r+=typeof i.insert==`string`?i.insert.length:1):(r-=Math.min(i.delete,e-n),n+=i.delete):n+=i.retain}return Math.max(0,e+r)}function Oe(e){return(t,n)=>{if(typeof document>`u`)return;let r=document.activeElement;if(!(r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement)||r.name!==t||r.closest(`[data-collab-scope="${e}"]`)===null)return;let{selectionStart:i,selectionEnd:a}=r;if(i===null||a===null)return;let o=K(i,n),s=K(a,n);requestAnimationFrame(()=>{document.activeElement===r&&r.setSelectionRange(o,s)})}}function ke(e){let[t]=(0,U.useState)(()=>Ae());return(0,U.useSyncExternalStore)(n=>t.subscribe(e,n),()=>t.get(e),()=>q)}var q=[];function Ae(){let e=null;return{get(t){return t?(e?.awareness!==t&&(e={awareness:t,peers:H(t)}),e.peers):q},subscribe(t,n){if(!t)return()=>{};let r=()=>{e={awareness:t,peers:H(t)},n()};return t.on(`change`,r),()=>t.off(`change`,r)}}}function je(e,t){let n=(0,U.useId)(),[r]=(0,U.useState)(()=>t.text),[i]=(0,U.useState)(()=>t.transport),[a,o]=(0,U.useState)(null),{room:s}=t,{name:c,color:l}=t.user;return(0,U.useEffect)(()=>{let t=new te,a=xe(t,i?{transport:i()??void 0}:{room:s}),u=Ee(e,a.awareness,{name:c,color:l}),d=_e(e,{doc:t,text:r,whenSynced:a.whenSynced,onRemoteText:Oe(n)});return o({doc:t,provider:a,binding:d}),()=>{d.destroy(),u(),a.destroy(),t.destroy(),o(null)}},[e,s,c,l,n,r,i]),{session:a,peers:ke(a?.provider.awareness??null),scope:n,scopeProps:{[G]:n}}}function Me(e,t){return e.map(e=>({clientId:String(e.clientId),self:e.self,user:{id:String(e.clientId),name:e.user.name,color:e.user.color},status:o.active,lastActive:0,cursor:null,selection:null,viewport:null,custom:{focus:e.focus,focusLabel:e.focus===null?null:t?.[e.focus]??e.focus}}))}function Ne({peers:e,scope:t}){let n=e.filter(e=>!e.self&&e.focus!==null&&De.test(e.focus)).map(e=>`[${G}="${t}"] [name="${e.focus}"]{outline:2px solid ${e.user.color};outline-offset:1px}`);return n.length===0?null:(0,W.jsx)(`style`,{children:n.join(`
`)})}var Pe={title:`Forms that prove themselves`,status:`draft`,tags:[`forms`],body:`Every demo is evidence.`},J=[{value:`draft`,label:`Draft`},{value:`review`,label:`In review`},{value:`published`,label:`Published`}],Fe={title:`Title`,status:`Status`,tags:`Tags`,body:`Body`},Ie={name:`Ana`,color:`#e11d48`},Le={name:`Bo`,color:`#2563eb`};function Re({form:e}){let t=h(e,`title`),n=h(e,`body`),r=h(e,`tags`),i=h(e,`status`);return(0,W.jsxs)(`article`,{"aria-label":`Live preview`,className:`space-y-1 rounded-md border bg-muted/30 p-3 text-sm`,children:[(0,W.jsxs)(`p`,{className:`text-[11px] uppercase tracking-wide text-muted-foreground`,children:[`Preview · `,J.find(e=>e.value===i)?.label??i]}),(0,W.jsx)(`h4`,{className:`text-base font-semibold`,children:t||`Untitled`}),(0,W.jsx)(`p`,{className:`whitespace-pre-wrap`,children:n}),(0,W.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:r.map(e=>`#${e}`).join(` `)})]})}function Y({user:e}){let t=p({defaultValues:Pe}),{session:n,peers:r,scope:i,scopeProps:o}=je(t,{room:`article-42`,user:e,text:[`title`,`body`]}),s=Me(r,Fe),c=s.filter(e=>!e.self&&e.custom?.focusLabel).map(e=>`${e.user.name} · ${e.custom?.focusLabel}`);return(0,W.jsxs)(`div`,{...o,"data-pane":e.name,className:`flex min-w-0 flex-1 flex-col gap-3 rounded-md border p-3`,children:[(0,W.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,W.jsx)(`p`,{className:`text-xs font-medium text-muted-foreground`,children:e.name}),(0,W.jsx)(`p`,{"aria-live":`polite`,className:`ml-auto truncate text-[11px] text-muted-foreground`,children:c.join(`, `)}),(0,W.jsx)(ee,{peers:s,label:`People in this form`})]}),(0,W.jsx)(Ne,{peers:r,scope:i}),(0,W.jsxs)(m,{form:t,children:[(0,W.jsx)(v,{name:`title`,label:`Title`}),(0,W.jsx)(b,{name:`status`,label:`Status`,options:J}),(0,W.jsx)(x,{name:`tags`,label:`Tags`,placeholder:`add a tag…`}),(0,W.jsx)(y,{name:`body`,label:`Body`,rows:4})]}),(0,W.jsxs)(`div`,{className:`flex gap-2`,children:[(0,W.jsx)(a,{type:`button`,size:`sm`,variant:`outline`,disabled:!n,onClick:()=>n?.binding.undo(),children:`Undo my edit`}),(0,W.jsx)(a,{type:`button`,size:`sm`,variant:`outline`,disabled:!n,onClick:()=>n?.binding.redo(),children:`Redo`})]}),(0,W.jsx)(Re,{form:t})]})}function ze(){return(0,W.jsxs)(`div`,{className:`flex flex-col gap-4 lg:flex-row`,children:[(0,W.jsx)(Y,{user:Ie}),(0,W.jsx)(Y,{user:Le})]})}var X=`import { PresenceAvatars } from "@kitora/collab"
import { Button } from "@kitora/ui/button"
import { PresenceRings, toCollabPeers, useYjsForm, type CollabUser } from "@kitora/form/collab"
import { SelectField, TagsField, TextareaField, TextField } from "@kitora/form/fields"
import { Form, useForm, useFormValue } from "@kitora/form/react"

type Article = { title: string; status: string; tags: string[]; body: string }

const defaultValues: Article = { title: "Forms that prove themselves", status: "draft", tags: ["forms"], body: "Every demo is evidence." }
const STATUSES = [{ value: "draft", label: "Draft" }, { value: "review", label: "In review" }, { value: "published", label: "Published" }]
const LABELS = { title: "Title", status: "Status", tags: "Tags", body: "Body" }
const ANA: CollabUser = { name: "Ana", color: "#e11d48" }
const BO: CollabUser = { name: "Bo", color: "#2563eb" }

/** What a reader would see: the live article, from the form's own values. */
function Preview({ form }: { form: ReturnType<typeof useForm<Article>> }) {
  const title = useFormValue(form, "title")
  const body = useFormValue(form, "body")
  const tags = useFormValue(form, "tags")
  const status = useFormValue(form, "status")
  return (
    <article aria-label="Live preview" className="space-y-1 rounded-md border bg-muted/30 p-3 text-sm">
      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Preview · {STATUSES.find((s) => s.value === status)?.label ?? status}</p>
      <h4 className="text-base font-semibold">{title || "Untitled"}</h4>
      <p className="whitespace-pre-wrap">{body}</p>
      <p className="text-[11px] text-muted-foreground">{tags.map((t) => \`#\${t}\`).join(" ")}</p>
    </article>
  )
}

// Every form in the same room edits one Y.Doc. The built-in provider syncs over a
// BroadcastChannel (tabs of one origin, no server); the @kitora/form/collab entry has the y-websocket recipe.
export function ArticleEditor({ user }: { user: CollabUser }) {
  const form = useForm<Article>({ defaultValues })
  const { session, peers, scope, scopeProps } = useYjsForm(form, {
    room: "article-42",
    user, // { name: "Ana", color: "#e11d48" }
    text: ["title", "body"], // these merge letter by letter; status stays one atomic value
  })

  const people = toCollabPeers(peers, LABELS) // collab's avatar stack draws the form's peers
  const where = people.filter((p) => !p.self && p.custom?.focusLabel).map((p) => \`\${p.user.name} · \${p.custom?.focusLabel}\`)

  return (
    <div {...scopeProps} data-pane={user.name} className="flex min-w-0 flex-1 flex-col gap-3 rounded-md border p-3">
      <div className="flex items-center gap-2">
        <p className="text-xs font-medium text-muted-foreground">{user.name}</p>
        {/* who is editing which field, in words; the coloured ring on the field says the same */}
        <p aria-live="polite" className="ml-auto truncate text-[11px] text-muted-foreground">{where.join(", ")}</p>
        <PresenceAvatars peers={people} label="People in this form" />
      </div>
      <PresenceRings peers={peers} scope={scope} />
      <Form form={form}>
        <TextField name="title" label="Title" />
        <SelectField name="status" label="Status" options={STATUSES} />
        <TagsField name="tags" label="Tags" placeholder="add a tag…" />
        <TextareaField name="body" label="Body" rows={4} />
      </Form>
      <div className="flex gap-2">
        {/* local undo: reverts MY last edit, never someone else's */}
        <Button type="button" size="sm" variant="outline" disabled={!session} onClick={() => session?.binding.undo()}>
          Undo my edit
        </Button>
        <Button type="button" size="sm" variant="outline" disabled={!session} onClick={() => session?.binding.redo()}>
          Redo
        </Button>
      </div>
      <Preview form={form} />
    </div>
  )
}

// two people in one room on one page; a second tab of this page joins the same room
export function TwoEditors() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <ArticleEditor user={ANA} />
      <ArticleEditor user={BO} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>r(()=>import(`./yjs-Bn_FthGt.js`),[]));var Be={title:`Forms that prove themselves`,status:`draft`,tags:[`forms`],body:`Every demo is evidence.`},Z=[{value:`draft`,label:`Draft`},{value:`review`,label:`In review`},{value:`published`,label:`Published`}],Ve=e=>typeof e==`object`&&!!e&&`from`in e&&`path`in e&&`value`in e&&typeof e.from==`string`&&typeof e.path==`string`;function He({form:e}){let t=h(e,`title`),n=h(e,`body`),r=h(e,`tags`),i=h(e,`status`);return(0,W.jsxs)(`article`,{"aria-label":`Live preview`,className:`space-y-1 rounded-md border bg-muted/30 p-3 text-sm`,children:[(0,W.jsxs)(`p`,{className:`text-[11px] uppercase tracking-wide text-muted-foreground`,children:[`Preview · `,Z.find(e=>e.value===i)?.label??i]}),(0,W.jsx)(`h4`,{className:`text-base font-semibold`,children:t||`Untitled`}),(0,W.jsx)(`p`,{className:`whitespace-pre-wrap`,children:n}),(0,W.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:r.map(e=>`#${e}`).join(` `)})]})}var Ue={async saveField(e){console.log(`saved`,e)}};function Q({who:e}){let t=(0,U.useId)(),n=p({defaultValues:Be,autosave:{on:`blur`,save:Ue.saveField}}),r=(0,U.useRef)(null),i=(0,U.useCallback)(e=>{if(!e)return;let i=new BroadcastChannel(`article-collab`);return r.current=i,i.addEventListener(`message`,e=>{!Ve(e.data)||e.data.from===t||n.applyExternal(u(n.getValues(),e.data.path,e.data.value),{origin:`external`})}),()=>{i.close(),r.current=null}},[n,t]);return g(n,`change`,e=>{if(e.origin!==`user`||!e.path)return;let i={from:t,path:e.path,value:s(n.getValues(),e.path)};r.current?.postMessage(i)}),(0,W.jsxs)(`div`,{ref:i,className:`flex min-w-0 flex-1 flex-col gap-3 rounded-md border p-3`,children:[(0,W.jsx)(`p`,{className:`text-xs font-medium text-muted-foreground`,children:e}),(0,W.jsxs)(m,{form:n,children:[(0,W.jsx)(v,{name:`title`,label:`Title`}),(0,W.jsx)(b,{name:`status`,label:`Status`,options:Z}),(0,W.jsx)(x,{name:`tags`,label:`Tags`,placeholder:`add a tag…`}),(0,W.jsx)(y,{name:`body`,label:`Body`,rows:4})]}),(0,W.jsx)(He,{form:n})]})}function We(){return(0,W.jsxs)(`div`,{className:`flex flex-col gap-4 lg:flex-row`,children:[(0,W.jsx)(Q,{who:`Editor A`}),(0,W.jsx)(Q,{who:`Editor B`})]})}var $=`import { useCallback, useId, useRef } from "react"
import { getIn, setIn } from "@kitora/form/core"
import { SelectField, TagsField, TextareaField, TextField } from "@kitora/form/fields"
import { Form, useForm, useFormEvent, useFormValue } from "@kitora/form/react"

type Article = { title: string; status: string; tags: string[]; body: string }
type Patch = { from: string; path: string; value: unknown }

const defaultValues: Article = { title: "Forms that prove themselves", status: "draft", tags: ["forms"], body: "Every demo is evidence." }
const STATUSES = [{ value: "draft", label: "Draft" }, { value: "review", label: "In review" }, { value: "published", label: "Published" }]
const isPatch = (x: unknown): x is Patch =>
  typeof x === "object" && x !== null && "from" in x && "path" in x && "value" in x && typeof x.from === "string" && typeof x.path === "string"

/** What a reader would see: the live article, from the form's own values. */
function Preview({ form }: { form: ReturnType<typeof useForm<Article>> }) {
  const title = useFormValue(form, "title")
  const body = useFormValue(form, "body")
  const tags = useFormValue(form, "tags")
  const status = useFormValue(form, "status")
  return (
    <article aria-label="Live preview" className="space-y-1 rounded-md border bg-muted/30 p-3 text-sm">
      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Preview · {STATUSES.find((s) => s.value === status)?.label ?? status}</p>
      <h4 className="text-base font-semibold">{title || "Untitled"}</h4>
      <p className="whitespace-pre-wrap">{body}</p>
      <p className="text-[11px] text-muted-foreground">{tags.map((t) => \`#\${t}\`).join(" ")}</p>
    </article>
  )
}

// stub: replace with your API (PATCH /articles/:id) — each field autosaves on blur
const api = {
  async saveField(patch: Record<string, unknown>): Promise<void> {
    console.log("saved", patch)
  },
}

// Mount two panes (or open a second tab): each is its own store on one BroadcastChannel
export function ArticleEditor({ who }: { who: string }) {
  const me = useId()
  const form = useForm<Article>({ defaultValues, autosave: { on: "blur", save: api.saveField } })
  const channel = useRef<BroadcastChannel | null>(null)

  // a ref callback owns the channel (React 19 cleanup): it opens on mount and closes on unmount
  const connect = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return
      const ch = new BroadcastChannel("article-collab")
      channel.current = ch
      ch.addEventListener("message", (e: MessageEvent) => {
        if (!isPatch(e.data) || e.data.from === me) return
        // origin "external": never re-broadcast (no echo loop); other fields' edits are kept
        form.applyExternal(setIn(form.getValues(), e.data.path, e.data.value), { origin: "external" })
      })
      return () => {
        ch.close()
        channel.current = null
      }
    },
    [form, me],
  )

  // field-level last-writer-wins: only USER edits go out
  useFormEvent(form, "change", (e) => {
    if (e.origin !== "user" || !e.path) return
    const patch: Patch = { from: me, path: e.path, value: getIn(form.getValues(), e.path) }
    channel.current?.postMessage(patch)
  })

  return (
    <div ref={connect} className="flex min-w-0 flex-1 flex-col gap-3 rounded-md border p-3">
      <p className="text-xs font-medium text-muted-foreground">{who}</p>
      <Form form={form}>
        <TextField name="title" label="Title" />
        <SelectField name="status" label="Status" options={STATUSES} />
        <TagsField name="tags" label="Tags" placeholder="add a tag…" />
        <TextareaField name="body" label="Body" rows={4} />
      </Form>
      <Preview form={form} />
    </div>
  )
}

// two panes on one page, each its own store on the same channel
export function TwoEditors() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <ArticleEditor who="Editor A" />
      <ArticleEditor who="Editor B" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./lww-CSjDPbII.js`),[]));function Ge(){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(t,{title:`Collaborative CMS editor — Yjs merge + presence`,children:[`Two people, two stores, one Y.Doc per pane synced over a BroadcastChannel (open this page in a second tab and it joins the same room). Title and body are Yjs text, so typing in the same field at the same time merges; tags merge as a list; status is one atomic value. Remote changes enter the form through `,(0,W.jsx)(`code`,{children:`applyExternal`}),`, undo only reverts your own edits, and each person sees who else is here and a coloured ring on the field they are in. Not claimed: offline persistence (add y-indexeddb) or a server (plug in y-websocket; the recipe is in the `,(0,W.jsx)(`code`,{children:`@kitora/form/collab`}),` entry).`]}),(0,W.jsx)(S,{n:1,title:`Two editors on one Yjs document`,blurb:`Type in Title from both panes at once: both keep their letters. Focus a field in one pane to ring it in the other. Undo in one pane leaves the other person's edits alone.`,code:X,children:(0,W.jsx)(ze,{})}),(0,W.jsx)(S,{n:2,title:`Without Yjs: field-level last-writer-wins`,blurb:`The dependency-free stand-in: edits to different fields both land in both panes; two edits of the same field keep the later one whole. No presence.`,code:$,children:(0,W.jsx)(We,{})})]})}export{Ge as component};