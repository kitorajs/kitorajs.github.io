import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,ri as i,zc as a}from"./index-BZuUy872.js";import{K as o,U as s,W as c,X as l,Y as u,q as d}from"./messages-CylclMLI.js";import{A as f,c as p,g as m,p as h}from"./field-config-53O_jYuu.js";import{t as g}from"./tab-sync-ggs0eJRY.js";import{a as _,o as v,r as y}from"./fields-DyVcPE0c.js";import{t as b}from"./tags-cb1NBuZ5.js";import{i as ee}from"./adapter-DeY7Vegk.js";import{t as x}from"./example-B67lLz1F.js";import{r as te}from"./presence-CAsaFc4o.js";import{a as ne,c as S,d as re,f as C,i as ie,l as w,n as ae,o as oe,r as se,s as T,t as ce,u as E}from"./awareness-C_gsDZw3.js";import"./demos-PewJ5Ayd.js";function le(e){if(!e)return()=>!1;if(typeof e==`function`)return e;let t=e.map(e=>e.split(`.`));return e=>{let n=e.split(`.`);return t.some(e=>e.length===n.length&&e.every((e,t)=>e===`*`||e===n[t]))}}var D=(e,t)=>e?`${e}.${t}`:String(t);function O(e){if(typeof e!=`object`||!e||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}var k=e=>e===null||typeof e==`string`||typeof e==`boolean`||typeof e==`number`&&Number.isFinite(e);function A(e,t,n){if(n.exclude(t)){n.local.add(t);return}if(typeof e==`string`&&n.text(t))return new w(e);if(k(e))return e;if(Array.isArray(e)){let r=new T,i=[];return e.forEach((e,r)=>{i.push(A(e,D(t,r),n)??null)}),r.push(i),r}if(O(e)){let r=new S;for(let[i,a]of Object.entries(e)){if(s.has(i))continue;let e=A(a,D(t,i),n);e!==void 0&&r.set(i,e)}return r}n.local.add(t)}function ue(e,t){let n=Math.min(e.length,t.length),r=0;for(;r<n&&e.charCodeAt(r)===t.charCodeAt(r);)r++;return r>0&&r<n&&fe(e.charCodeAt(r-1))&&r--,r}function de(e,t,n){let r=Math.min(e.length,t.length)-n,i=0;for(;i<r&&e.charCodeAt(e.length-1-i)===t.charCodeAt(t.length-1-i);)i++;return i>0&&i<r&&pe(e.charCodeAt(e.length-i))&&i--,i}var fe=e=>e>=55296&&e<=56319,pe=e=>e>=56320&&e<=57343;function me(e,t){let n=e.toString();if(n===t)return;let r=ue(n,t),i=de(n,t,r),a=n.length-r-i;a>0&&e.delete(r,a);let o=t.slice(r,t.length-i);o&&e.insert(r,o)}function j(e){return e instanceof w?e.toString():e instanceof T?e.toArray().map(j):e instanceof S?P(e):e}function M(e,t,n,r,i){if(r.exclude(n)){r.local.add(n);return}if(typeof t==`string`&&e instanceof w)return me(e,t);if(Array.isArray(t)&&e instanceof T)return he(e,t,n,r);if(O(t)&&e instanceof S)return N(e,t,n,r);if(k(t)&&!(typeof t==`string`&&r.text(n))&&e===t)return;let a=A(t,n,r);a!==void 0&&i(a)}function he(e,t,n,r){let i=e.toArray(),a=i.map(j),o=Math.min(i.length,t.length),s=0;for(;s<o&&c(a[s],t[s]);)s++;let l=0;for(;l<o-s&&c(a[i.length-1-l],t[t.length-1-l]);)l++;let u=i.length-s-l,d=t.length-s-l;if(u===d){for(let a=s;a<s+u;a++)M(i[a],t[a],D(n,a),r,t=>{e.delete(a,1),e.insert(a,[t])});return}u>0&&e.delete(s,u);let f=t.slice(s,s+d).map((e,t)=>A(e,D(n,s+t),r)??null);f.length>0&&e.insert(s,f)}function N(e,t,n,r){for(let n of Array.from(e.keys()))(t[n]===void 0||!Object.hasOwn(t,n))&&e.delete(n);for(let[i,a]of Object.entries(t))s.has(i)||M(e.get(i),a,D(n,i),r,t=>e.set(i,t))}function P(e){let t={};for(let[n,r]of e.entries())s.has(n)||!d(n)||(t[n]=j(r));return t}function F(e,t,n){if(t!==``&&n.exclude(t)){n.local.add(t);return}if(!k(e)){if(Array.isArray(e))return e.forEach((e,r)=>F(e,D(t,r),n));if(O(e)){for(let[r,i]of Object.entries(e))s.has(r)||F(i,D(t,r),n);return}t!==``&&n.local.add(t)}}var I={undo:`undo`,redo:`redo`};function ge(e,t){let n=u(t);for(let t=1;t<=n.length;t++)if(e.getSensitivity(n.slice(0,t).join(`.`))!==void 0)return!0;return!1}var _e=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function ve(e,t){let{doc:n}=t,r=n.getMap(t.root??`form`),i={binding:`kitora-form`},a={binding:`kitora-form:seed`},s=new oe(r,{trackedOrigins:new Set([i]),captureTimeout:t.captureTimeout??500}),u=le(t.text),d=n=>ge(e,n)||(t.exclude?.(n)??!1),f=!1,p=!1,m=!1,h=()=>({text:u,exclude:d,local:new Set});function g(t){let i=e.getValues();_e(i)&&n.transact(()=>N(r,i,``,h()),t)}function _(t){let n=e.getValues(),i=h();F(n,``,i);let a=P(r);for(let e of i.local){let t=o(n,e);t!==void 0&&(a=l(a,e,t))}if(!c(a,n)){p=!0;try{e.applyExternal(a,{origin:t})}finally{p=!1}}}let v=(e,n)=>{if(!(m||n.origin===i||n.origin===a)){if(t.onRemoteText&&n.origin!==s)for(let n of e)n.target instanceof w&&t.onRemoteText(n.path.join(`.`),n.delta);_(n.origin===s?`programmatic`:`external`)}};r.observeDeep(v);let y=e.onEvent(e=>{if(m||!f||p||e.type!==`change`||e.origin===`external`)return;let t=e.meta?.history;if(t===I.undo||t===I.redo){t===I.undo?s.undo():s.redo(),_(`programmatic`);return}g(i)}),b=()=>{m||(r.size===0?g(a):_(`external`),f=!0)};return{doc:n,root:r,undoManager:s,ready:t.whenSynced?Promise.resolve(t.whenSynced).then(b):Promise.resolve(b()),undo:()=>s.undo()!==null,redo:()=>s.redo()!==null,canUndo:()=>s.canUndo(),canRedo:()=>s.canRedo(),destroy(){m=!0,r.unobserveDeep(v),y(),s.destroy()}}}var L={sync1:`sync1`,sync2:`sync2`,update:`update`,awareness:`awareness`},ye=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function be(e){if(!ye(e)||typeof e.from!=`string`)return!1;switch(e.kind){case L.sync1:return e.sv instanceof Uint8Array&&typeof e.reply==`boolean`;case L.sync2:return e.update instanceof Uint8Array&&typeof e.to==`string`;case L.update:case L.awareness:return e.update instanceof Uint8Array;default:return!1}}var R=0;function xe(){return R++,typeof crypto<`u`&&typeof crypto.randomUUID==`function`?crypto.randomUUID():`peer-${Date.now()}-${R}-${Math.random()}`}function Se(e,t={}){let n=!t.awareness,r=t.awareness??new ce(e),i=t.transport??(t.room?g(`kitora-collab:`+t.room):null),a=xe(),o={provider:a},s=()=>{},c=new Promise(e=>{s=e});if(!i)return s(),{doc:e,awareness:r,connected:!1,whenSynced:c,destroy:()=>{n&&r.destroy()}};let l=e=>i.send(e),u=e=>l({kind:L.awareness,from:a,update:se(r,e)});i.listen(t=>{if(!(!be(t)||t.from===a))switch(t.kind){case L.sync1:l({kind:L.sync2,from:a,to:t.from,update:re(e,t.sv)}),t.reply&&(l({kind:L.sync1,from:a,sv:C(e),reply:!1}),r.getLocalState()!==null&&u([e.clientID]));return;case L.sync2:if(t.to!==a)return;E(e,t.update,o),s();return;case L.update:E(e,t.update,o);return;case L.awareness:ae(r,t.update,o);return}});let d=(e,t)=>{t!==o&&l({kind:L.update,from:a,update:e})},f=(e,t)=>{t!==o&&u([...e.added,...e.updated,...e.removed])};e.on(`update`,d),r.on(`update`,f);let p=()=>ie(r,[e.clientID],`leave`);typeof window<`u`&&window.addEventListener(`pagehide`,p),l({kind:L.sync1,from:a,sv:C(e),reply:!0}),r.getLocalState()!==null&&u([e.clientID]);let m=setTimeout(s,t.syncTimeoutMs??300),h=!1;return{doc:e,awareness:r,connected:!0,whenSynced:c,destroy(){h||(h=!0,clearTimeout(m),typeof window<`u`&&window.removeEventListener(`pagehide`,p),p(),e.off(`update`,d),r.off(`update`,f),i.close(),n&&r.destroy())}}}var z={user:`user`,focus:`focus`},Ce=`#64748b`,we=/^#[0-9a-f]{3,8}$/i,B=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function Te(e){return typeof e==`string`&&we.test(e)?e:Ce}function Ee(e,t,n){if(!B(t))return null;let r=t[z.user];if(!B(r)||typeof r.name!=`string`||r.name.trim()===``)return null;let i=t[z.focus];return{clientId:e,user:{name:r.name.slice(0,40),color:Te(r.color)},focus:typeof i==`string`&&i!==``&&d(i)?i:null,self:e===n}}function V(e){let t=[];for(let[n,r]of e.getStates()){let i=Ee(n,r,e.clientID);i&&t.push(i)}return t.toSorted((e,t)=>e.self===t.self?e.clientId-t.clientId:e.self?-1:1)}function De(e,t,n){t.setLocalStateField(z.user,n),t.setLocalStateField(z.focus,null);let r=null,i=e.onEvent(e=>{e.type===`focus`?(r=e.path,t.setLocalStateField(z.focus,e.path)):e.type===`blur`&&r===e.path&&(r=null,t.setLocalStateField(z.focus,null))});return()=>{i(),t.getLocalState()!==null&&t.setLocalStateField(z.focus,null)}}var H=e(r(),1),U=a(),W=`data-collab-scope`,Oe=/^[\w.-]+$/;function G(e,t){let n=0,r=0;for(let i of t){if(n>=e)break;i.retain===void 0?i.delete===void 0?i.insert!==void 0&&(r+=typeof i.insert==`string`?i.insert.length:1):(r-=Math.min(i.delete,e-n),n+=i.delete):n+=i.retain}return Math.max(0,e+r)}function ke(e){return(t,n)=>{if(typeof document>`u`)return;let r=document.activeElement;if(!(r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement)||r.name!==t||r.closest(`[data-collab-scope="${e}"]`)===null)return;let{selectionStart:i,selectionEnd:a}=r;if(i===null||a===null)return;let o=G(i,n),s=G(a,n);requestAnimationFrame(()=>{document.activeElement===r&&r.setSelectionRange(o,s)})}}function Ae(e){let[t]=(0,H.useState)(()=>je());return(0,H.useSyncExternalStore)(n=>t.subscribe(e,n),()=>t.get(e),()=>K)}var K=[];function je(){let e=null;return{get(t){return t?(e?.awareness!==t&&(e={awareness:t,peers:V(t)}),e.peers):K},subscribe(t,n){if(!t)return()=>{};let r=()=>{e={awareness:t,peers:V(t)},n()};return t.on(`change`,r),()=>t.off(`change`,r)}}}function Me(e,t){let n=(0,H.useId)(),[r]=(0,H.useState)(()=>t.text),[i]=(0,H.useState)(()=>t.transport),[a,o]=(0,H.useState)(null),{room:s}=t,{name:c,color:l}=t.user;return(0,H.useEffect)(()=>{let t=new ne,a=Se(t,i?{transport:i()??void 0}:{room:s}),u=De(e,a.awareness,{name:c,color:l}),d=ve(e,{doc:t,text:r,whenSynced:a.whenSynced,onRemoteText:ke(n)});return o({doc:t,provider:a,binding:d}),()=>{d.destroy(),u(),a.destroy(),t.destroy(),o(null)}},[e,s,c,l,n,r,i]),{session:a,peers:Ae(a?.provider.awareness??null),scope:n,scopeProps:{[W]:n}}}function Ne(e,t){return e.map(e=>({clientId:String(e.clientId),self:e.self,user:{id:String(e.clientId),name:e.user.name,color:e.user.color},status:ee.active,lastActive:0,cursor:null,selection:null,viewport:null,custom:{focus:e.focus,focusLabel:e.focus===null?null:t?.[e.focus]??e.focus}}))}function Pe({peers:e,scope:t}){let n=e.filter(e=>!e.self&&e.focus!==null&&Oe.test(e.focus)).map(e=>`[${W}="${t}"] [name="${e.focus}"]{outline:2px solid ${e.user.color};outline-offset:1px}`);return n.length===0?null:(0,U.jsx)(`style`,{children:n.join(`
`)})}var Fe={title:`Forms that prove themselves`,status:`draft`,tags:[`forms`],body:`Every demo is evidence.`},q=[{value:`draft`,label:`Draft`},{value:`review`,label:`In review`},{value:`published`,label:`Published`}],Ie={title:`Title`,status:`Status`,tags:`Tags`,body:`Body`},Le={name:`Ana`,color:`#e11d48`},Re={name:`Bo`,color:`#2563eb`};function ze({form:e}){let t=m(e,`title`),n=m(e,`body`),r=m(e,`tags`),i=m(e,`status`);return(0,U.jsxs)(`article`,{"aria-label":`Live preview`,className:`space-y-1 rounded-md border bg-muted/30 p-3 text-sm`,children:[(0,U.jsxs)(`p`,{className:`text-[11px] uppercase tracking-wide text-muted-foreground`,children:[`Preview · `,q.find(e=>e.value===i)?.label??i]}),(0,U.jsx)(`h4`,{className:`text-base font-semibold`,children:t||`Untitled`}),(0,U.jsx)(`p`,{className:`whitespace-pre-wrap`,children:n}),(0,U.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:r.map(e=>`#${e}`).join(` `)})]})}function J({user:e}){let t=f({defaultValues:Fe}),{session:n,peers:r,scope:a,scopeProps:o}=Me(t,{room:`article-42`,user:e,text:[`title`,`body`]}),s=Ne(r,Ie),c=s.filter(e=>!e.self&&e.custom?.focusLabel).map(e=>`${e.user.name} · ${e.custom?.focusLabel}`);return(0,U.jsxs)(`div`,{...o,"data-pane":e.name,className:`flex min-w-0 flex-1 flex-col gap-3 rounded-md border p-3`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(`p`,{className:`text-xs font-medium text-muted-foreground`,children:e.name}),(0,U.jsx)(`p`,{"aria-live":`polite`,className:`ml-auto truncate text-[11px] text-muted-foreground`,children:c.join(`, `)}),(0,U.jsx)(te,{peers:s,label:`People in this form`})]}),(0,U.jsx)(Pe,{peers:r,scope:a}),(0,U.jsxs)(p,{form:t,children:[(0,U.jsx)(_,{name:`title`,label:`Title`}),(0,U.jsx)(y,{name:`status`,label:`Status`,options:q}),(0,U.jsx)(b,{name:`tags`,label:`Tags`,placeholder:`add a tag…`}),(0,U.jsx)(v,{name:`body`,label:`Body`,rows:4})]}),(0,U.jsxs)(`div`,{className:`flex gap-2`,children:[(0,U.jsx)(i,{type:`button`,size:`sm`,variant:`outline`,disabled:!n,onClick:()=>n?.binding.undo(),children:`Undo my edit`}),(0,U.jsx)(i,{type:`button`,size:`sm`,variant:`outline`,disabled:!n,onClick:()=>n?.binding.redo(),children:`Redo`})]}),(0,U.jsx)(ze,{form:t})]})}function Be(){return(0,U.jsxs)(`div`,{className:`flex flex-col gap-4 lg:flex-row`,children:[(0,U.jsx)(J,{user:Le}),(0,U.jsx)(J,{user:Re})]})}var Y=`import { PresenceAvatars } from "@kitora/collab"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>n(()=>import(`./yjs-D-DV0x_0.js`),[]));var X={title:`Forms that prove themselves`,status:`draft`,tags:[`forms`],body:`Every demo is evidence.`},Z=[{value:`draft`,label:`Draft`},{value:`review`,label:`In review`},{value:`published`,label:`Published`}],Ve=e=>typeof e==`object`&&!!e&&`from`in e&&`path`in e&&`value`in e&&typeof e.from==`string`&&typeof e.path==`string`;function He({form:e}){let t=m(e,`title`),n=m(e,`body`),r=m(e,`tags`),i=m(e,`status`);return(0,U.jsxs)(`article`,{"aria-label":`Live preview`,className:`space-y-1 rounded-md border bg-muted/30 p-3 text-sm`,children:[(0,U.jsxs)(`p`,{className:`text-[11px] uppercase tracking-wide text-muted-foreground`,children:[`Preview · `,Z.find(e=>e.value===i)?.label??i]}),(0,U.jsx)(`h4`,{className:`text-base font-semibold`,children:t||`Untitled`}),(0,U.jsx)(`p`,{className:`whitespace-pre-wrap`,children:n}),(0,U.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:r.map(e=>`#${e}`).join(` `)})]})}var Ue={async saveField(e){console.log(`saved`,e)}};function Q({who:e}){let t=(0,H.useId)(),n=f({defaultValues:X,autosave:{on:`blur`,save:Ue.saveField}}),r=(0,H.useRef)(null),i=(0,H.useCallback)(e=>{if(!e)return;let i=new BroadcastChannel(`article-collab`);return r.current=i,i.addEventListener(`message`,e=>{!Ve(e.data)||e.data.from===t||n.applyExternal(l(n.getValues(),e.data.path,e.data.value),{origin:`external`})}),()=>{i.close(),r.current=null}},[n,t]);return h(n,`change`,e=>{if(e.origin!==`user`||!e.path)return;let i={from:t,path:e.path,value:o(n.getValues(),e.path)};r.current?.postMessage(i)}),(0,U.jsxs)(`div`,{ref:i,className:`flex min-w-0 flex-1 flex-col gap-3 rounded-md border p-3`,children:[(0,U.jsx)(`p`,{className:`text-xs font-medium text-muted-foreground`,children:e}),(0,U.jsxs)(p,{form:n,children:[(0,U.jsx)(_,{name:`title`,label:`Title`}),(0,U.jsx)(y,{name:`status`,label:`Status`,options:Z}),(0,U.jsx)(b,{name:`tags`,label:`Tags`,placeholder:`add a tag…`}),(0,U.jsx)(v,{name:`body`,label:`Body`,rows:4})]}),(0,U.jsx)(He,{form:n})]})}function We(){return(0,U.jsxs)(`div`,{className:`flex flex-col gap-4 lg:flex-row`,children:[(0,U.jsx)(Q,{who:`Editor A`}),(0,U.jsx)(Q,{who:`Editor B`})]})}var $=`import { useCallback, useId, useRef } from "react"
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>n(()=>import(`./lww-Bsi-GieO.js`),[]));function Ge(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(t,{title:`Collaborative CMS editor — Yjs merge + presence`,children:[`Two people, two stores, one Y.Doc per pane synced over a BroadcastChannel (open this page in a second tab and it joins the same room). Title and body are Yjs text, so typing in the same field at the same time merges; tags merge as a list; status is one atomic value. Remote changes enter the form through `,(0,U.jsx)(`code`,{children:`applyExternal`}),`, undo only reverts your own edits, and each person sees who else is here and a coloured ring on the field they are in. Not claimed: offline persistence (add y-indexeddb) or a server (plug in y-websocket; the recipe is in the `,(0,U.jsx)(`code`,{children:`@kitora/form/collab`}),` entry).`]}),(0,U.jsx)(x,{n:1,title:`Two editors on one Yjs document`,blurb:`Type in Title from both panes at once: both keep their letters. Focus a field in one pane to ring it in the other. Undo in one pane leaves the other person's edits alone.`,code:Y,children:(0,U.jsx)(Be,{})}),(0,U.jsx)(x,{n:2,title:`Without Yjs: field-level last-writer-wins`,blurb:`The dependency-free stand-in: edits to different fields both land in both panes; two edits of the same field keep the later one whole. No presence.`,code:$,children:(0,U.jsx)(We,{})})]})}export{Ge as component};