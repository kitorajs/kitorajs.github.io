import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CcCDBWVn.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./input-CLjf4jLu.js";import{Ec as i,Uc as a,_i as o,ii as s,ri as c,zc as l}from"./index-BZuUy872.js";import{t as u}from"./badge-zOMNRv4l.js";import{W as d,x as f}from"./messages-CylclMLI.js";import{A as p,At as m,E as h,J as g,R as _,S as v,Y as y,c as b,f as ee,g as x,h as S,m as te}from"./field-config-53O_jYuu.js";import{i as ne,y as re}from"./fields-DyVcPE0c.js";import{r as C,s as w,t as T}from"./field-options-eiseGCMF.js";import{a as ie}from"./choice-BX1Eh6ua.js";import{t as ae}from"./confirm-DoCftpiW.js";import{t as E}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var D=e(a(),1),O=l();function k(e){return new Promise(t=>setTimeout(t,e))}var A={welcomeTemplate:`welcome`,receiptTemplate:`receipt`,shippingTemplate:`shipping`,refundTemplate:`refund`,surveyTemplate:`survey`},j=[`receiptTemplate`,`shippingTemplate`,`refundTemplate`,`welcomeTemplate`,`surveyTemplate`],M={receiptTemplate:`Receipt email template`,shippingTemplate:`Shipping update template`,refundTemplate:`Refund notice template`,welcomeTemplate:`Welcome email template`,surveyTemplate:`Satisfaction survey template`},oe={receiptTemplate:`Receipt`,shippingTemplate:`Shipping update`,refundTemplate:`Refund notice`,welcomeTemplate:`Welcome`,surveyTemplate:`Satisfaction survey`},N=e=>e?.trim().toLowerCase()||void 0,P=e=>e?.trim().toUpperCase()||void 0,F=e=>typeof e==`object`&&!!e&&!Array.isArray(e),se=/^[A-Z]{2}$/,ce=/^SND-[A-Za-z0-9_-]+$/,le=/^SND-0+$/,I=[`welcome`,`receipt`,`shipping`,`refund`,`survey`],ue={welcome:`welcomeTemplate`,receipt:`receiptTemplate`,shipping:`shippingTemplate`,refund:`refundTemplate`,survey:`surveyTemplate`};function de(e){let t=e.trim();if(t===``)return``;let n=/SND-\s*(\d+)/i.exec(t);if(n)return`SND-${n[1]}`;if(/^[\d\s\-_]+$/.test(t)){let e=t.replace(/\D/g,``).replace(/^0+(?=\d)/,``);return e?`SND-${e}`:``}return``}var fe=e=>e.replace(/^https?:\/\//,``).replace(/\/$/,``);function pe(e){let t=Array.from(new Set(e.domains.map(e=>N(e.locale?.split(`-`)[0])).filter(e=>e!==void 0))),n=Array.from(new Set(e.domains.map(e=>e.url?fe(e.url):``).filter(Boolean)));return{id:e.id,name:e.name,handle:e.handle,domain:n[0]??``,regions:e.regions.map(e=>({code:e.code,name:e.name})),locales:t}}function me(e){return{senderId:de(e.senderId??``)||void 0,templates:{welcome:e.welcomeTemplate??void 0,receipt:e.receiptTemplate??void 0,shipping:e.shippingTemplate??void 0,refund:e.refundTemplate??void 0,survey:e.surveyTemplate??void 0},surveysEnabled:e.surveysEnabled??void 0}}var L=(e,t)=>e.templates[A[t]];function R(e){if(e.regions.length!==1)return;let t=P(e.regions[0]?.code);return t&&se.test(t)?t:void 0}var z=e=>`zone`in e,B=e=>`region`in e&&`locale`in e;function V(e){let t=R(e);return t?{region:t}:{zone:e.handle.trim().toLowerCase()}}var H=(e,t)=>({region:e.trim().toUpperCase(),locale:t.trim().toLowerCase()});function U(e,t){return z(e)||z(t)?z(e)&&z(t)&&N(e.zone)===N(t.zone):B(e)||B(t)?B(e)&&B(t)&&P(e.region)===P(t.region)&&N(e.locale)===N(t.locale):P(e.region)===P(t.region)}var W=(e,t)=>e.find(e=>U(e.match,t));function G(e,t){let n=R(e);if(!n)return[];let r=t.flatMap(e=>B(e.match)&&P(e.match.region)===n?[e.match.locale.toLowerCase()]:[]);return Array.from(new Set([...e.locales,...r]))}function he(e,t){let n=[],r=e=>{n.some(t=>U(t,e))||n.push(e)};r(V(e));for(let n of e.regions){let e=P(n.code);if(e){r({region:e});for(let n of t)B(n.match)&&P(n.match.region)===e&&r(n.match)}}let i=R(e);if(i)for(let n of G(e,t))r(H(i,n));return n}function K(e){return Array.isArray(e)?e.flatMap(e=>{if(!F(e)||!F(e.match))return[];let t=e.match,n=typeof t.zone==`string`?{zone:t.zone}:typeof t.region==`string`?typeof t.locale==`string`?{region:t.region,locale:t.locale}:{region:t.region}:void 0;if(!n)return[];let r={};if(F(e.templates))for(let t of I){let n=e.templates[t];F(n)&&typeof n.value==`string`&&(r[t]={value:n.value})}let i={match:n,templates:r};return typeof e.sender==`string`&&(i.sender=e.sender),F(e.surveys)&&typeof e.surveys.status==`boolean`&&(i.surveys={status:e.surveys.status}),[i]}):[]}function ge(e,t){let n={zoneId:e};t.sender&&(n.senderId=t.sender);for(let e of I){let r=t.templates[e]?.value;r&&(n[ue[e]]=r)}return t.surveys&&(n.surveysEnabled=t.surveys.status),n}var q=e=>!!e&&(j.some(t=>!!e[t]?.trim())||e.surveysEnabled!=null);function _e(e,t){let n=R(e),r=G(e,t),i=new Set(e.locales),a=n?r.filter(e=>W(t,H(n,e))):[],o=W(t,V(e)),s=o?ge(e.id,o):{zoneId:e.id},c={};for(let i of r){let r=n?W(t,H(n,i)):void 0;c[i]=r?ge(e.id,r):{zoneId:e.id}}return{values:{mode:Object.values(c).some(q)?`perLocale`:`base`,base:s,perLocale:c},baseLevel:n?`region`:`zone`,supportsPerLocale:!!n&&(r.length>1||a.length>0),locales:r,stale:r.filter(e=>!i.has(e)),configured:he(e,t).some(e=>W(t,e))}}function ve(e,t){return{mode:`base`,base:{zoneId:t},perLocale:Object.fromEntries(e.locales.map(e=>[e,{zoneId:t}]))}}function J(e,t){let n={};for(let e of j){let r=t[e]?.trim();r&&(n[A[e]]={value:r})}let r={match:e,templates:n},i=t.senderId?.trim();return i&&(r.sender=i),t.surveysEnabled!=null&&(r.surveys={status:t.surveysEnabled}),!r.sender&&Object.keys(n).length===0&&r.surveys==null?null:r}function ye(e,t,n){let r=[],i=J(V(e),t.base);i&&r.push(i);let a=R(e);if(n&&t.mode===`perLocale`&&a)for(let[e,n]of Object.entries(t.perLocale)){let t=J(H(a,e),{...n,senderId:void 0});t&&r.push(t)}return r}function be(e,t,n){let r=he(e,t);return[...t.filter(e=>!r.some(t=>U(e.match,t))),...n]}function xe(e,t,n,r){let i=e.senderId?.trim();return!i||i===r.senderId?[]:j.filter(i=>{let a=L(r,i),o=e=>!!e?.trim()&&e?.trim()!==a;return o(e[i])?!1:!(n.length>0&&n.every(e=>o(t[e]?.[i])))})}function Se(e,t,n){if(!F(e)){n.push({index:t,message:`Entry ${t}: \`match\` must be an object.`});return}let r=Object.keys(e).toSorted(),i=e=>r.includes(e),a=r.length===1&&i(`zone`),o=r.length===1&&i(`region`),s=r.length===2&&i(`region`)&&i(`locale`);if(!a&&!o&&!s){n.push({index:t,message:`Entry ${t}: \`match\` must be zone-only, region-only, or region+locale (got keys: ${r.join(`, `)||`none`}).`});return}if(a){let r=e.zone;typeof r!=`string`||r===``?n.push({index:t,message:`Entry ${t}: \`match.zone\` must be a non-empty handle.`}):r!==r.toLowerCase()&&n.push({index:t,message:`Entry ${t}: \`match.zone\` handle must be lowercase.`});return}let c=e.region;if((typeof c!=`string`||!se.test(c))&&n.push({index:t,message:`Entry ${t}: \`match.region\` must be an uppercase ISO 3166-1 alpha-2 code (e.g. "BE").`}),s){let r=e.locale;typeof r!=`string`||r===``?n.push({index:t,message:`Entry ${t}: \`match.locale\` must be a non-empty language code.`}):r!==r.toLowerCase()&&n.push({index:t,message:`Entry ${t}: \`match.locale\` must be lowercase (e.g. "fr").`})}}var Ce=e=>I.some(t=>t===e);function we(e){if(!Array.isArray(e))return[{message:"zoneOverrides must be an array (send `[]` to clear)."}];let t=[];return e.forEach((e,n)=>{if(!F(e)){t.push({index:n,message:`Entry ${n}: must be an object.`});return}Se(e.match,n,t);let r=e.templates;if(r!==void 0)if(!F(r))t.push({index:n,message:`Entry ${n}: \`templates\` must be an object.`});else for(let[e,i]of Object.entries(r))e===`surveys`?t.push({index:n,message:`Entry ${n}: \`surveys\` must be a sibling of \`templates\`, never nested inside it.`}):Ce(e)?(!F(i)||typeof i.value!=`string`||i.value.trim()===``)&&t.push({index:n,message:`Entry ${n}: \`templates.${e}\` must be \`{ value: string }\` with a non-empty template id (leave the field blank to inherit instead).`}):t.push({index:n,message:`Entry ${n}: unknown message event "${e}" (allowed: ${I.join(`, `)}).`});if(e.sender!==void 0){let r=typeof e.sender==`string`&&le.test(e.sender);(typeof e.sender!=`string`||!ce.test(e.sender)||r)&&t.push({index:n,message:r?`Entry ${n}: "${String(e.sender)}" is not a usable sender ID — pick a sender account that has a verified domain.`:`Entry ${n}: \`sender\` must be a sender ID like \`SND-123456789\`.`})}e.surveys!==void 0&&(!F(e.surveys)||typeof e.surveys.status!=`boolean`)&&t.push({index:n,message:`Entry ${n}: \`surveys\` must be \`{ status: boolean }\`.`})}),t}var Y=450,Te=4090,Ee=`Saved, but the mail provider could not be updated. Please try again.`,De=class extends Error{response;request;constructor(e,t){super(`${e.errors[0]?.message??`GraphQL Error (Code: ${e.status})`}: ${JSON.stringify({response:e,request:t})}`),this.name=`ClientError`,this.response=e,this.request=t}},Oe=[{id:`zone_be`,name:`Belgium`,handle:`belgium`,regions:[{id:`rg_be`,name:`Belgium`,code:`BE`}],domains:[{locale:`nl`,url:`https://help.example.com/nl-be`},{locale:`fr`,url:`https://help.example.com/fr-be`},{locale:`de-BE`,url:`https://help.example.com/de-be`}],customerLocales:[`nl`,`fr`,`de`]},{id:`zone_de`,name:`Germany`,handle:`germany`,regions:[{id:`rg_de`,name:`Germany`,code:`DE`}],domains:[{locale:`de`,url:`https://help.example.com/de`}],customerLocales:[`de`]},{id:`zone_nordics`,name:`Nordics`,handle:`nordics`,regions:[{id:`rg_se`,name:`Sweden`,code:`SE`},{id:`rg_dk`,name:`Denmark`,code:`DK`},{id:`rg_no`,name:`Norway`,code:`NO`}],domains:[{locale:`sv`,url:`https://help.example.com/sv`},{locale:`da`,url:`https://help.example.com/da`},{locale:`en`,url:`https://help.example.com/en-nordics`}],customerLocales:[`sv`,`da`,`en`]}],ke=[{match:{region:`BE`},sender:`SND-987654321`,templates:{receipt:{value:`be-receipt-v2`},shipping:{value:`be-shipping-v1`}}},{match:{region:`BE`,locale:`fr`},templates:{receipt:{value:`fr-receipt-v2`}}},{match:{region:`BE`,locale:`en`},templates:{receipt:{value:`en-receipt-v1`}}},{match:{region:`DE`},surveys:{status:!1},templates:{}}],Ae=()=>({id:`msg_settings_main`,senderId:`123456789`,welcomeTemplate:`global-welcome-v3`,receiptTemplate:`global-receipt-v4`,shippingTemplate:`global-shipping-v2`,refundTemplate:`global-refund-v1`,surveyTemplate:null,surveysEnabled:!0,overridesEnabled:!0,zoneOverrides:ke});function je(){let e=Ae(),t=!1;return{async messagingSettingsGet(){return await k(Y),{messagingSettingsGet:e}},async zoneList(){return await k(Y),{zoneList:Oe}},async zoneOverridesSet(n,r){await k(Y);let i={query:`mutation zoneOverridesSet($id: String!, $input: ZoneOverridesSetInput!)`,variables:{id:n,input:r}},a=we(r.zoneOverrides);if(a.length>0)throw new De({errors:a.map(e=>({message:e.message,path:[`zoneOverridesSet`]})),data:null,status:200},i);if(e={...e,overridesEnabled:r.overridesEnabled,zoneOverrides:r.zoneOverrides},t)throw new De({errors:[{message:Ee,path:[`zoneOverridesSet`],extensions:{code:Te}}],data:null,status:200},i);return{zoneOverridesSet:{id:e.id,overridesEnabled:e.overridesEnabled,zoneOverrides:e.zoneOverrides}}},setFailSync(e){t=e},storedOverrides:()=>e.zoneOverrides}}var X=e=>typeof e==`string`&&e.trim()!==``?e.trim():void 0;function Me(e,t){let n=[];return e!==void 0&&n.push({var:e}),t!==void 0&&n.push({lit:t}),n}function Z({name:e,label:t,inheritFrom:n,inheritFromLabel:i=`parent`,inherited:a,rules:o,normalize:s,description:l}){let u=f(),d=h(e,T({label:t,rules:o,description:l,emptyPolicy:`omit`,inherit:Me(n,X(a))},`inheritText`)),p=X(d.inherited),m=n!==void 0&&p!==void 0&&p!==X(a)?i:`Global`,g=X(d.value),_=typeof d.value==`string`?d.value:``;return(0,O.jsxs)(C,{hidden:!d.active,htmlFor:d.id,error:d.error,warning:d.warning,label:t,description:l,required:d.required,submitAs:{name:d.name,value:_,native:!0},children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,O.jsx)(r,{id:d.id,name:d.name,dir:`ltr`,autoComplete:`off`,className:`h-7 font-mono text-[12px]`,value:_,placeholder:p??`Not set`,"aria-invalid":d.error?!0:void 0,"aria-describedby":w(d.id,d.error,l),onChange:e=>d.setValue(e.target.value),onFocus:d.onFocus,onBlur:()=>{if(s){let e=s(_);e!==_&&d.setValue(e)}d.onBlur()}}),g===void 0&&p!==void 0?(0,O.jsxs)(c,{type:`button`,size:`sm`,variant:`ghost`,className:`h-7 shrink-0 px-2 text-[12px]`,onClick:()=>u.adopt(d.name),children:[`Fill from `,m]}):null,g===void 0?null:(0,O.jsxs)(c,{type:`button`,size:`sm`,variant:`ghost`,className:`h-7 shrink-0 px-2 text-[12px]`,onClick:()=>u.inherit(d.name),children:[`Use `,m]})]}),(0,O.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,"data-inherit-state":g===void 0?`inherit`:`override`,children:g===void 0?p===void 0?`Not set — nothing to inherit.`:`Inherits ${m}: ${p}`:`Overrides ${m}${p===void 0?``:` (${p})`}`})]})}function Ne({name:e,label:t,description:n,inherited:r}){let i=_(e),a=i==null?`Inherits Global (${r===!0?`on`:`off`})`:`Set for this zone (${i===!0?`on`:`off`})`;return(0,O.jsx)(ne,{name:e,label:t,description:`${n?`${n} `:``}${a}.`,tristate:!0,inherit:Me(void 0,r)})}async function Pe(e,t){let[n,r]=await Promise.all([e.messagingSettingsGet(),e.zoneList()]),i=n.messagingSettingsGet,a=r.zoneList.find(e=>e.id===t);if(!a)throw Error(`Zone ${t} not found`);let o=pe(a),s=K(i.zoneOverrides);return{settingsId:i.id,overridesEnabled:i.overridesEnabled,zone:o,globalDefault:me(i),overrides:s,model:_e(o,s)}}var Fe=[{id:`zone_be`,label:`Belgium (3 languages)`},{id:`zone_de`,label:`Germany`},{id:`zone_nordics`,label:`Nordics (3 countries)`}],Ie=Fe[0].id,Le=[{value:`base`,label:`Same for all languages`},{value:`perLocale`,label:`Per language`}],{c:Re,v:ze}=y(),Be=[ze.pattern(ce,`Must be a sender ID like SND-123456789.`),ze.pattern(/^(?!SND-0+$)/,`Not a usable sender ID — pick a sender account that has a verified domain.`)],Ve=g()(()=>({fields:[],whenHidden:`keep`}));function Q({title:e,intro:t,children:n,aside:r}){return(0,O.jsxs)(`section`,{className:`flex flex-col gap-2.5 rounded-lg border p-3`,children:[(0,O.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,O.jsx)(`h3`,{className:`text-sm font-semibold`,children:e}),t?(0,O.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:t}):null]}),r]}),n]})}function He({what:e,why:t}){return(0,O.jsxs)(`div`,{className:`rounded-md border border-dashed px-2.5 py-1.5 text-[12px] text-muted-foreground`,"data-not-supported":!0,children:[(0,O.jsxs)(`span`,{className:`font-medium text-foreground`,children:[`Not yet supported: `,e,`.`]}),` `,t]})}function Ue({tone:e,title:t,children:n}){return(0,O.jsxs)(`div`,{role:`status`,className:`rounded-md border px-2.5 py-1.5 text-[13px] ${e===`warning`?`border-amber-500/40 bg-amber-500/5`:`border-sky-500/30 bg-sky-500/5`}`,children:[(0,O.jsx)(`p`,{className:`font-medium`,children:t}),(0,O.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:n})]})}function We({form:e,zoneName:t,locale:n,stale:r,globalTemplates:i}){let a=q(x(e,`perLocale.${n}`));return(0,O.jsxs)(`details`,{open:a||r,className:`group rounded-lg border p-3`,"data-locale":n,children:[(0,O.jsxs)(`summary`,{className:`flex cursor-pointer list-none items-center justify-between gap-2`,children:[(0,O.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,O.jsx)(`span`,{className:`text-sm font-semibold`,children:n.toUpperCase()}),r?(0,O.jsx)(u,{variant:`outline`,className:`border-destructive/50 text-destructive`,children:`No longer served`}):a?(0,O.jsx)(u,{variant:`secondary`,children:`Set`}):null]}),(0,O.jsx)(`span`,{className:`text-[12px] text-primary group-open:hidden`,children:`Edit`}),(0,O.jsx)(`span`,{className:`hidden text-[12px] text-primary group-open:inline`,children:`Hide`})]}),(0,O.jsx)(`p`,{className:`mt-1 text-[12px] text-muted-foreground`,children:r?`${t} doesn't serve this language any more, but these templates are still saved and still take priority. Clear them to fall back to the zone's templates.`:`Applies to every regional variant of this language.`}),(0,O.jsx)(`div`,{className:`mt-2 flex flex-col gap-2`,children:(0,O.jsx)(v,{name:`perLocale.${n}`,children:j.map(e=>(0,O.jsx)(Z,{name:`.${e}`,label:M[e],inheritFrom:`base.${e}`,inheritFromLabel:`zone`,inherited:i(e)},e))})})]})}function Ge({pagePromise:e,server:t}){let n=(0,D.use)(e),{zone:r,globalDefault:i,model:a}=n,o=p({defaultValues:a.values,model:Ve}),{dirty:l,submitting:d}=te(o),{confirm:f,dialog:h}=ae(),[g,_]=(0,D.useState)(n.overrides),[y,S]=(0,D.useState)(null),ne=x(o,`mode`),C=x(o,`perLocale`),w=_e(r,g).configured,T=Object.entries(C).flatMap(([e,t])=>q(t)?[e]:[]),E=()=>_(K(t.storedOverrides())),k=async(e,o)=>{let s=a.supportsPerLocale&&e.mode===`perLocale`?e.perLocale:{},c=xe(e.base,s,r.locales,i);if(c.length>0&&!await f({title:`Some messages will use templates from a different sender account`,body:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`p`,{children:`${r.name} sends to ${e.base.senderId??``}, but these messages have no template of their own, so they fall back to your global templates — which belong to the sender account behind ${i.senderId??`your global setup`}:`}),(0,O.jsx)(`ul`,{className:`my-1 list-disc ps-5`,children:c.map(e=>(0,O.jsx)(`li`,{children:oe[e]},e))}),(0,O.jsx)(`p`,{children:`A sender ID and a template from two different accounts are dropped silently: the mail provider accepts the send and delivers nothing.`})]}),confirmLabel:`Save anyway`,cancelLabel:`Go back and set templates`}))return o.cancel();let l=be(r,K(t.storedOverrides()),ye(r,e,a.supportsPerLocale)),u=we(l);if(u.length>0)throw new m({message:u.map(e=>e.message).join(`
`)});try{await t.zoneOverridesSet(n.settingsId,{overridesEnabled:n.overridesEnabled,zoneOverrides:l})}catch(e){throw re(e)??e}finally{E()}return S(null),{message:`Zone settings saved.`,entries:l.length}},A=async()=>{if(await f({title:`Reset ${r.name} to global settings?`,body:`${r.name} will go back to using your global messaging setup. This is saved immediately and can't be undone. Its sender override and its five template overrides are removed${T.length>0?`, and so are its per-language templates (${T.map(e=>e.toUpperCase()).join(`, `)})`:``}. Templates themselves are not deleted.`,confirmLabel:`Reset to global`,destructive:!0}))try{await t.zoneOverridesSet(n.settingsId,{overridesEnabled:n.overridesEnabled,zoneOverrides:be(r,K(t.storedOverrides()),[])}),o.rebase(ve(a,r.id)),S({tone:`ok`,text:`${r.name} reset to global settings.`})}catch(e){S({tone:`error`,text:re(e)?.message??`Failed to reset.`})}finally{E()}};return(0,O.jsxs)(Ye,{children:[(0,O.jsxs)(b,{form:o,onSubmit:k,className:`flex flex-col gap-3`,children:[(0,O.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,O.jsx)(`h2`,{className:`text-base font-semibold`,children:r.name}),w?(0,O.jsx)(u,{children:`Active`}):null]}),(0,O.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:r.domain})]}),w?(0,O.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>void A(),children:`Reset to global`}):null]}),(0,O.jsxs)(Q,{title:`Sender account`,intro:`Leave a field empty to inherit your global setup; the placeholder shows what will be used.`,children:[(0,O.jsx)(Z,{name:`base.senderId`,label:`Sender account ID`,inherited:i.senderId,normalize:de,rules:Be,description:`Paste the ID or the whole config line — it is reduced to SND-… when you leave the field.`}),(0,O.jsx)(He,{what:`account picker, “Apply this account to all zones”`,why:`A picker modal that stages an account link only counts as dirty through app glue (G3 + pending link).`}),(0,O.jsx)(Ne,{name:`base.surveysEnabled`,label:`Send satisfaction surveys`,description:`Ask customers in this zone to rate their support conversation.`,inherited:i.surveysEnabled})]}),!a.supportsPerLocale&&r.locales.length>1?(0,O.jsxs)(Ue,{tone:`info`,title:`Per-language templates aren't available for this zone`,children:[r.name,` covers `,r.regions.length,` countries, and templates can only be targeted per country or per country-and-language — not per language across several countries. Split it into one zone per country to set templates per language, or use the templates above for the whole zone.`]}):null,a.supportsPerLocale?(0,O.jsx)(Q,{title:`Languages`,intro:`This zone serves multiple languages. Use one set of templates for all, or set them per language.`,children:(0,O.jsx)(ie,{name:`mode`,label:`Template mode`,options:Le})}):null,(0,O.jsxs)(Q,{title:`Message templates`,intro:`Empty inherits the global template.`,children:[(0,O.jsx)(v,{name:`base`,children:j.map(e=>(0,O.jsx)(Z,{name:`.${e}`,label:M[e],inherited:L(i,e)},e))}),(0,O.jsx)(He,{what:`per-template Create / Select from the template library, “Fill from” another zone`,why:`An external async value with a manual override (G10) and a replace-all confirm.`})]}),a.supportsPerLocale?(0,O.jsx)(ee,{if:Re.eq(`mode`,`perLocale`),children:(0,O.jsx)(`div`,{className:`flex flex-col gap-2`,children:a.locales.map(e=>(0,O.jsx)(We,{form:o,zoneName:r.name,locale:e,stale:a.stale.includes(e),globalTemplates:e=>L(i,e)},e))})}):null,a.supportsPerLocale&&ne===`base`&&T.length>0?(0,O.jsxs)(Ue,{tone:`warning`,title:`Per-language templates will be removed`,children:[r.name,` currently has separate templates for `,T.map(e=>e.toUpperCase()).join(`, `),`. Saving with "Same for all languages" selected deletes them and every language falls back to the templates above. Switch back to "Per language" to keep them.`]}):null,(0,O.jsxs)(`div`,{className:`flex items-center justify-end gap-2`,children:[(0,O.jsx)(c,{type:`button`,variant:`outline`,size:`sm`,onClick:()=>o.reset(`baseline`),disabled:!l||d,children:`Cancel`}),(0,O.jsx)(b.Submit,{className:s({size:`sm`}),disabled:!l||d,children:`Save Changes`})]}),(0,O.jsx)(b.Status,{className:`text-[13px]`,success:e=>(0,O.jsxs)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:[`✓ `,e.message,` (`,e.entries,` entries in the blob)`]}),error:e=>(0,O.jsx)(`p`,{className:`whitespace-pre-line text-destructive`,children:e.message})}),y?(0,O.jsx)(`p`,{className:y.tone===`ok`?`text-[13px] font-medium text-emerald-700 dark:text-emerald-400`:`text-[13px] text-destructive`,children:y.text}):null,h]}),(0,O.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,O.jsx)(Je,{store:o}),(0,O.jsx)(Ke,{title:`Stored overrides blob`,meta:`zone_overrides`,children:(0,O.jsx)(`pre`,{tabIndex:0,"aria-label":`Stored overrides blob`,className:`max-h-72 overflow-auto p-3 font-mono text-[11px] focus-visible:outline-2 focus-visible:outline-ring`,"data-stored-blob":!0,children:JSON.stringify(g,null,2)})})]})]})}function Ke({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,O.jsxs)(`aside`,{className:o(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,O.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,O.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,O.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function qe({value:e,maxHeight:t=`max-h-[420px]`}){return(0,O.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:o(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function Je({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=S(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),d);return(0,O.jsxs)(Ke,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,O.jsx)(qe,{value:i}),s.length>0?(0,O.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,O.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function Ye({children:e,stack:t=!1}){return(0,O.jsx)(`div`,{className:o(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:D.Children.toArray(e)})}function Xe(){let[e]=(0,D.useState)(je),[n,r]=(0,D.useState)(()=>({zoneId:Ie,promise:Pe(e,Ie)})),[i,a]=(0,D.useState)(!1),o=t=>r({zoneId:t,promise:Pe(e,t)});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2 text-[13px]`,children:[Fe.map(e=>(0,O.jsx)(c,{type:`button`,size:`sm`,variant:n.zoneId===e.id?`default`:`outline`,onClick:()=>o(e.id),children:e.label},e.id)),(0,O.jsxs)(`label`,{className:`ms-auto flex items-center gap-2`,children:[(0,O.jsx)(`span`,{children:`Fail saves with 4090`}),(0,O.jsx)(t,{checked:i,"aria-label":`Fail saves with 4090`,onCheckedChange:t=>{e.setFailSync(t),a(t)}})]})]}),(0,O.jsx)(D.Suspense,{fallback:(0,O.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Loading zone…`}),children:(0,O.jsx)(Ge,{pagePromise:n.promise,server:e},n.zoneId)})]})}var $=`import { Suspense, use, useState, type ReactNode, Children } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button, buttonVariants } from "@kitora/ui/button"
import { Switch } from "@kitora/ui/switch"
import { defineForm, kit, mapErrors, SubmitError, type FormStore, type SubmitContext, type Expr, type Validator, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, FieldScope, When, useForm, useFormMeta, useFormValue, useField, useFormStore, useValue, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { SegmentedField, useConfirm, type ChoiceOption, FieldShell, SwitchField, describedBy, fieldOptions } from "@kitora/form/fields"
import { Input } from "@kitora/ui/input"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- types
// Shapes of an invented support-desk app's regional-overrides page: the account
// sets global messaging defaults (a sender account and five message templates),
// and each zone (a group of countries) may override them, per language if it
// serves several. The demo's simulated server answers exactly these shapes.
//
// Operations (a typical GraphQL backend):
//   query messagingSettingsGet          — the settings row carrying the overrides blob
//   query zoneList                      — the account's zones
//   mutation zoneOverridesSet(id, input) — writes the whole blob
//
// The invariant that drives the whole page: every override field is optional and
// an omitted key means "inherit the Global value". \`surveysEnabled: false\` is an
// explicit opt-out, distinct from \`undefined\` (inherit).

/** The five message events the server accepts as \`templates\` keys. */
export type MessageEvent = "welcome" | "receipt" | "shipping" | "refund" | "survey"

/** The per-zone editing model. */
export interface ZoneConfigInput {
  zoneId: string
  /** \`SND-…\`; empty ⇒ inherit the global sender account. */
  senderId?: string
  welcomeTemplate?: string
  receiptTemplate?: string
  shippingTemplate?: string
  refundTemplate?: string
  surveyTemplate?: string
  /** \`undefined\` = inherit; \`false\` = explicit opt-out (saved as \`surveys: { status: false }\`). */
  surveysEnabled?: boolean
}

/** Match granularity, inferred from the entry's keys. */
export type ZoneOverrideMatch = { zone: string } | { region: string } | { region: string; locale: string }

/** One entry of the stored overrides blob. */
export interface ZoneOverride {
  match: ZoneOverrideMatch
  sender?: string
  templates: Partial<Record<MessageEvent, { value: string }>>
  surveys?: { status: boolean }
}

/** The five template fields of the editing model. */
export type TemplateField = "welcomeTemplate" | "receiptTemplate" | "shippingTemplate" | "refundTemplate" | "surveyTemplate"

/** Template field → message event. */
export const TEMPLATE_FIELD_TO_EVENT: Readonly<Record<TemplateField, MessageEvent>> = {
  welcomeTemplate: "welcome",
  receiptTemplate: "receipt",
  shippingTemplate: "shipping",
  refundTemplate: "refund",
  surveyTemplate: "survey",
}

/** The template fields in display order. */
export const TEMPLATE_FIELDS: readonly TemplateField[] = ["receiptTemplate", "shippingTemplate", "refundTemplate", "welcomeTemplate", "surveyTemplate"]

/** Field captions. */
export const TEMPLATE_FIELD_CAPTIONS: Readonly<Record<TemplateField, string>> = {
  receiptTemplate: "Receipt email template",
  shippingTemplate: "Shipping update template",
  refundTemplate: "Refund notice template",
  welcomeTemplate: "Welcome email template",
  surveyTemplate: "Satisfaction survey template",
}

/** Short event names for prose. */
export const TEMPLATE_FIELD_NAMES: Readonly<Record<TemplateField, string>> = {
  receiptTemplate: "Receipt",
  shippingTemplate: "Shipping update",
  refundTemplate: "Refund notice",
  welcomeTemplate: "Welcome",
  surveyTemplate: "Satisfaction survey",
}

/** One node of \`zoneList\` exactly as the query selects it. */
export interface ZoneNode {
  id: string
  name: string
  handle: string
  regions: { id: string; name: string; code: string }[]
  domains: { locale: string | null; url: string | null }[]
  customerLocales: string[]
}

/** The fields of \`messagingSettingsGet\` the page reads. */
export interface MessagingSettings {
  id: string
  /** Stored DIGITS-ONLY at the account level (the settings form renders a literal "SND-" beside it). */
  senderId: string | null
  welcomeTemplate: string | null
  receiptTemplate: string | null
  shippingTemplate: string | null
  refundTemplate: string | null
  surveyTemplate: string | null
  surveysEnabled: boolean | null
  overridesEnabled: boolean
  /** \`JSON\` scalar: the overrides blob, an array of {@link ZoneOverride} (untrusted until parsed). */
  zoneOverrides: unknown
}

/** The \`zoneOverridesSet\` input. */
export interface ZoneOverridesSetInput {
  zoneOverrides: ZoneOverride[]
  overridesEnabled: boolean
}

/** The UI descriptor the page builds from a zone node (trimmed to what the detail page reads). */
export interface Zone {
  id: string
  name: string
  handle: string
  domain: string
  regions: { code: string; name: string }[]
  /** ISO-639 language part only, lowercase (\`pt-BR\` → \`pt\`). */
  locales: string[]
}

/** The global default, in resolver shape. */
export interface GlobalDefault {
  senderId?: string
  templates: Partial<Record<MessageEvent, string>>
  surveysEnabled?: boolean
}

/** "Same for all languages" vs "Per language". */
export const LANGUAGE_MODES = ["base", "perLocale"] as const

export type LanguageMode = (typeof LANGUAGE_MODES)[number]

/**
 * What the detail form edits: \`base\`, \`mode\` and \`perLocale\` in one store, so
 * dirty, reset and undo cover all three without a separate "touched" flag.
 */
export interface ZoneDetailValues {
  mode: LanguageMode
  base: ZoneConfigInput
  /** locale → config; every OWNED locale has an entry (an empty one inherits everything). */
  perLocale: Record<string, ZoneConfigInput>
}

// ---- resolve
const lower = (s: string | undefined): string | undefined => s?.trim().toLowerCase() || undefined

const upper = (s: string | undefined): string | undefined => s?.trim().toUpperCase() || undefined

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v)

/** ISO 3166-1 alpha-2, uppercase. */
const REGION_CODE_REGEX = /^[A-Z]{2}$/

/** Sender account id: \`SND-\` then id chars. */
export const SENDER_ID_REGEX = /^SND-[A-Za-z0-9_-]+$/

/** \`SND-0…\` passes the shape and the server, yet every message is dropped. */
export const SENDER_ZERO_REGEX = /^SND-0+$/

/** The only template keys the server accepts. */
const ALLOWED_EVENTS: readonly MessageEvent[] = ["welcome", "receipt", "shipping", "refund", "survey"]

const EVENT_TO_TEMPLATE_FIELD: Readonly<Record<MessageEvent, TemplateField>> = {
  welcome: "welcomeTemplate",
  receipt: "receiptTemplate",
  shipping: "shippingTemplate",
  refund: "refundTemplate",
  survey: "surveyTemplate",
}

/** Pull \`SND-<digits>\` out of an id, a pasted config line or a bare number. */
export function toSenderId(value: string): string {
  const input = value.trim()
  if (input === "") return ""
  const tagged = /SND-\\s*(\\d+)/i.exec(input)
  if (tagged) return \`SND-\${tagged[1]}\`
  if (/^[\\d\\s\\-_]+$/.test(input)) {
    const digits = input.replace(/\\D/g, "").replace(/^0+(?=\\d)/, "")
    return digits ? \`SND-\${digits}\` : ""
  }
  return ""
}

const stripProtocol = (url: string): string => url.replace(/^https?:\\/\\//, "").replace(/\\/$/, "")

/** Zone node → UI descriptor; locales truncated at the first '-'. */
export function toZone(m: ZoneNode): Zone {
  const locales = Array.from(new Set(m.domains.map((r) => lower(r.locale?.split("-")[0])).filter((x): x is string => x !== undefined)))
  const urls = Array.from(new Set(m.domains.map((r) => (r.url ? stripProtocol(r.url) : "")).filter(Boolean)))
  return { id: m.id, name: m.name, handle: m.handle, domain: urls[0] ?? "", regions: m.regions.map((r) => ({ code: r.code, name: r.name })), locales }
}

/** The global default in resolver shape; the account-level id is digits-only and normalized here. */
export function globalDefaultOf(settings: MessagingSettings): GlobalDefault {
  return {
    senderId: toSenderId(settings.senderId ?? "") || undefined,
    templates: {
      welcome: settings.welcomeTemplate ?? undefined,
      receipt: settings.receiptTemplate ?? undefined,
      shipping: settings.shippingTemplate ?? undefined,
      refund: settings.refundTemplate ?? undefined,
      survey: settings.surveyTemplate ?? undefined,
    },
    surveysEnabled: settings.surveysEnabled ?? undefined,
  }
}

/** The Global template for one field (what an empty field inherits). */
export const globalTemplate = (globalDefault: GlobalDefault, field: TemplateField): string | undefined => globalDefault.templates[TEMPLATE_FIELD_TO_EVENT[field]]

// ── matches + ownership ──

export function usableRegionCode(zone: Zone): string | undefined {
  if (zone.regions.length !== 1) return undefined
  const code = upper(zone.regions[0]?.code)
  return code && REGION_CODE_REGEX.test(code) ? code : undefined
}

const isZoneMatch = (m: ZoneOverrideMatch): m is { zone: string } => "zone" in m

const isLocaleMatch = (m: ZoneOverrideMatch): m is { region: string; locale: string } => "region" in m && "locale" in m

export function buildMatchForZone(zone: Zone): ZoneOverrideMatch {
  const region = usableRegionCode(zone)
  return region ? { region } : { zone: zone.handle.trim().toLowerCase() }
}

export const buildLocaleMatch = (region: string, locale: string): ZoneOverrideMatch => ({ region: region.trim().toUpperCase(), locale: locale.trim().toLowerCase() })

export function sameMatch(a: ZoneOverrideMatch, b: ZoneOverrideMatch): boolean {
  if (isZoneMatch(a) || isZoneMatch(b)) return isZoneMatch(a) && isZoneMatch(b) && lower(a.zone) === lower(b.zone)
  if (isLocaleMatch(a) || isLocaleMatch(b)) return isLocaleMatch(a) && isLocaleMatch(b) && upper(a.region) === upper(b.region) && lower(a.locale) === lower(b.locale)
  return upper(a.region) === upper(b.region)
}

export const findOverrideByMatch = (overrides: readonly ZoneOverride[], match: ZoneOverrideMatch): ZoneOverride | undefined => overrides.find((o) => sameMatch(o.match, match))

/** Live locales first, then any still stored under the zone's region. */
export function ownedLocales(zone: Zone, overrides: readonly ZoneOverride[]): string[] {
  const region = usableRegionCode(zone)
  if (!region) return []
  const stored = overrides.flatMap((o) => (isLocaleMatch(o.match) && upper(o.match.region) === region ? [o.match.locale.toLowerCase()] : []))
  return Array.from(new Set([...zone.locales, ...stored]))
}

function matchesForZone(zone: Zone, overrides: readonly ZoneOverride[]): ZoneOverrideMatch[] {
  const out: ZoneOverrideMatch[] = []
  const add = (m: ZoneOverrideMatch) => {
    if (!out.some((x) => sameMatch(x, m))) out.push(m)
  }
  add(buildMatchForZone(zone))
  for (const r of zone.regions) {
    const code = upper(r.code)
    if (!code) continue
    add({ region: code })
    for (const o of overrides) if (isLocaleMatch(o.match) && upper(o.match.region) === code) add(o.match)
  }
  const region = usableRegionCode(zone)
  if (region) for (const loc of ownedLocales(zone, overrides)) add(buildLocaleMatch(region, loc))
  return out
}

// ── read: blob → form values ──

/** Keep only well-formed entries (enough for the demo's own blob). */
export function parseOverrides(raw: unknown): ZoneOverride[] {
  if (!Array.isArray(raw)) return []
  return raw.flatMap((entry): ZoneOverride[] => {
    if (!isRecord(entry) || !isRecord(entry.match)) return []
    const m = entry.match
    const match: ZoneOverrideMatch | undefined =
      typeof m.zone === "string" ? { zone: m.zone } : typeof m.region === "string" ? (typeof m.locale === "string" ? { region: m.region, locale: m.locale } : { region: m.region }) : undefined
    if (!match) return []
    const templates: ZoneOverride["templates"] = {}
    if (isRecord(entry.templates)) {
      for (const ev of ALLOWED_EVENTS) {
        const val = entry.templates[ev]
        if (isRecord(val) && typeof val.value === "string") templates[ev] = { value: val.value }
      }
    }
    const out: ZoneOverride = { match, templates }
    if (typeof entry.sender === "string") out.sender = entry.sender
    if (isRecord(entry.surveys) && typeof entry.surveys.status === "boolean") out.surveys = { status: entry.surveys.status }
    return [out]
  })
}

function overrideToInput(zoneId: string, o: ZoneOverride): ZoneConfigInput {
  const input: ZoneConfigInput = { zoneId }
  if (o.sender) input.senderId = o.sender
  for (const ev of ALLOWED_EVENTS) {
    const val = o.templates[ev]?.value
    if (val) input[EVENT_TO_TEMPLATE_FIELD[ev]] = val
  }
  if (o.surveys) input.surveysEnabled = o.surveys.status
  return input
}

/** Does a locale config hold anything a user would call configured? */
export const hasLocaleConfig = (config: ZoneConfigInput | undefined): boolean =>
  !!config && (TEMPLATE_FIELDS.some((f) => Boolean(config[f]?.trim())) || config.surveysEnabled != null)

/** The page model of one zone: what the form edits plus the facts that shape the page. */
export interface ZoneDetailModel {
  values: ZoneDetailValues
  baseLevel: "zone" | "region"
  /** "Same for all languages / Per language" applies (single-region, several owned locales). */
  supportsPerLocale: boolean
  /** Every owned locale, live first (rendered from the stored blob, not only live locales). */
  locales: string[]
  /** Owned locales the zone no longer serves. */
  stale: string[]
  /** Holds any stored entry at all (the "Active" badge and the "Reset to global" action). */
  configured: boolean
}

/** Read a zone's detail model from the blob. Every owned locale gets an entry so a locale card always has an object to edit. */
export function buildDetailModel(zone: Zone, overrides: readonly ZoneOverride[]): ZoneDetailModel {
  const region = usableRegionCode(zone)
  const locales = ownedLocales(zone, overrides)
  const live = new Set(zone.locales)
  const stored = region ? locales.filter((loc) => findOverrideByMatch(overrides, buildLocaleMatch(region, loc))) : []
  const baseOverride = findOverrideByMatch(overrides, buildMatchForZone(zone))
  const base = baseOverride ? overrideToInput(zone.id, baseOverride) : { zoneId: zone.id }
  const perLocale: Record<string, ZoneConfigInput> = {}
  for (const loc of locales) {
    const o = region ? findOverrideByMatch(overrides, buildLocaleMatch(region, loc)) : undefined
    perLocale[loc] = o ? overrideToInput(zone.id, o) : { zoneId: zone.id }
  }
  const mode = Object.values(perLocale).some(hasLocaleConfig) ? "perLocale" : "base"
  return {
    values: { mode, base, perLocale },
    baseLevel: region ? "region" : "zone",
    supportsPerLocale: Boolean(region) && (locales.length > 1 || stored.length > 0),
    locales,
    stale: locales.filter((loc) => !live.has(loc)),
    configured: matchesForZone(zone, overrides).some((m) => findOverrideByMatch(overrides, m)),
  }
}

/** The values a reset leaves: everything inherits, surveys included. */
export function emptyDetailValues(model: ZoneDetailModel, zoneId: string): ZoneDetailValues {
  return { mode: "base", base: { zoneId }, perLocale: Object.fromEntries(model.locales.map((loc) => [loc, { zoneId }])) }
}

// ── write: form values → blob ──

/** One entry, or \`null\` when it carries no real override (empty templates and sender omitted ⇒ inherit). */
export function serializeOverride(match: ZoneOverrideMatch, config: ZoneConfigInput): ZoneOverride | null {
  const templates: ZoneOverride["templates"] = {}
  for (const field of TEMPLATE_FIELDS) {
    const value = config[field]?.trim()
    if (value) templates[TEMPLATE_FIELD_TO_EVENT[field]] = { value }
  }
  const override: ZoneOverride = { match, templates }
  const sender = config.senderId?.trim()
  if (sender) override.sender = sender
  if (config.surveysEnabled != null) override.surveys = { status: config.surveysEnabled }
  return !override.sender && Object.keys(templates).length === 0 && override.surveys == null ? null : override
}

/** Base entry plus, in per-language mode, one TEMPLATE-ONLY entry per locale (a sender there is dropped). */
export function serializeDetailModel(zone: Zone, values: ZoneDetailValues, supportsPerLocale: boolean): ZoneOverride[] {
  const entries: ZoneOverride[] = []
  const baseEntry = serializeOverride(buildMatchForZone(zone), values.base)
  if (baseEntry) entries.push(baseEntry)
  const region = usableRegionCode(zone)
  if (supportsPerLocale && values.mode === "perLocale" && region) {
    for (const [loc, cfg] of Object.entries(values.perLocale)) {
      const entry = serializeOverride(buildLocaleMatch(region, loc), { ...cfg, senderId: undefined })
      if (entry) entries.push(entry)
    }
  }
  return entries
}

/** Replace every entry the zone owns (base + every locale, stale ones too) with \`entries\`. */
export function replaceZoneEntries(zone: Zone, overrides: readonly ZoneOverride[], entries: ZoneOverride[]): ZoneOverride[] {
  const owned = matchesForZone(zone, overrides)
  return [...overrides.filter((o) => !owned.some((m) => sameMatch(o.match, m))), ...entries]
}

/**
 * Events that would pair this zone's OWN sender account with a Global template
 * owned by another account — the mail provider drops those sends silently.
 * Drives the "Save anyway" confirm.
 */
export function crossAccountTemplateRisks(base: ZoneConfigInput, perLocale: Record<string, ZoneConfigInput>, servedLocales: readonly string[], globalDefault: GlobalDefault): TemplateField[] {
  const ownId = base.senderId?.trim()
  if (!ownId || ownId === globalDefault.senderId) return []
  return TEMPLATE_FIELDS.filter((field) => {
    const global = globalTemplate(globalDefault, field)
    const isOwn = (value: string | undefined) => Boolean(value?.trim()) && value?.trim() !== global
    if (isOwn(base[field])) return false
    const covered = servedLocales.length > 0 && servedLocales.every((loc) => isOwn(perLocale[loc]?.[field]))
    return !covered
  })
}

// ── validateOverrides: the server's messages ──

export interface ValidationError {
  index?: number
  message: string
}

function validateMatch(match: unknown, index: number, errors: ValidationError[]): void {
  if (!isRecord(match)) {
    errors.push({ index, message: \`Entry \${index}: \\\`match\\\` must be an object.\` })
    return
  }
  const keys = Object.keys(match).toSorted()
  const has = (k: string) => keys.includes(k)
  const zoneOnly = keys.length === 1 && has("zone")
  const regionOnly = keys.length === 1 && has("region")
  const regionLocale = keys.length === 2 && has("region") && has("locale")
  if (!zoneOnly && !regionOnly && !regionLocale) {
    errors.push({ index, message: \`Entry \${index}: \\\`match\\\` must be zone-only, region-only, or region+locale (got keys: \${keys.join(", ") || "none"}).\` })
    return
  }
  if (zoneOnly) {
    const zone = match.zone
    if (typeof zone !== "string" || zone === "") errors.push({ index, message: \`Entry \${index}: \\\`match.zone\\\` must be a non-empty handle.\` })
    else if (zone !== zone.toLowerCase()) errors.push({ index, message: \`Entry \${index}: \\\`match.zone\\\` handle must be lowercase.\` })
    return
  }
  const region = match.region
  if (typeof region !== "string" || !REGION_CODE_REGEX.test(region)) errors.push({ index, message: \`Entry \${index}: \\\`match.region\\\` must be an uppercase ISO 3166-1 alpha-2 code (e.g. "BE").\` })
  if (regionLocale) {
    const locale = match.locale
    if (typeof locale !== "string" || locale === "") errors.push({ index, message: \`Entry \${index}: \\\`match.locale\\\` must be a non-empty language code.\` })
    else if (locale !== locale.toLowerCase()) errors.push({ index, message: \`Entry \${index}: \\\`match.locale\\\` must be lowercase (e.g. "fr").\` })
  }
}

const isAllowedEvent = (key: string): boolean => ALLOWED_EVENTS.some((ev) => ev === key)

/** Every problem in the blob (not just the first); \`[]\` ⇒ safe to send. */
export function validateOverrides(root: unknown): ValidationError[] {
  if (!Array.isArray(root)) return [{ message: "zoneOverrides must be an array (send \`[]\` to clear)." }]
  const errors: ValidationError[] = []
  root.forEach((entry: unknown, index) => {
    if (!isRecord(entry)) {
      errors.push({ index, message: \`Entry \${index}: must be an object.\` })
      return
    }
    validateMatch(entry.match, index, errors)
    const templates = entry.templates
    if (templates !== undefined) {
      if (!isRecord(templates)) errors.push({ index, message: \`Entry \${index}: \\\`templates\\\` must be an object.\` })
      else
        for (const [key, val] of Object.entries(templates)) {
          if (key === "surveys") errors.push({ index, message: \`Entry \${index}: \\\`surveys\\\` must be a sibling of \\\`templates\\\`, never nested inside it.\` })
          else if (!isAllowedEvent(key)) errors.push({ index, message: \`Entry \${index}: unknown message event "\${key}" (allowed: \${ALLOWED_EVENTS.join(", ")}).\` })
          else if (!isRecord(val) || typeof val.value !== "string" || val.value.trim() === "")
            errors.push({ index, message: \`Entry \${index}: \\\`templates.\${key}\\\` must be \\\`{ value: string }\\\` with a non-empty template id (leave the field blank to inherit instead).\` })
        }
    }
    if (entry.sender !== undefined) {
      const isZero = typeof entry.sender === "string" && SENDER_ZERO_REGEX.test(entry.sender)
      if (typeof entry.sender !== "string" || !SENDER_ID_REGEX.test(entry.sender) || isZero)
        errors.push({
          index,
          message: isZero
            ? \`Entry \${index}: "\${String(entry.sender)}" is not a usable sender ID — pick a sender account that has a verified domain.\`
            : \`Entry \${index}: \\\`sender\\\` must be a sender ID like \\\`SND-123456789\\\`.\`,
        })
    }
    if (entry.surveys !== undefined && (!isRecord(entry.surveys) || typeof entry.surveys.status !== "boolean"))
      errors.push({ index, message: \`Entry \${index}: \\\`surveys\\\` must be \\\`{ status: boolean }\\\`.\` })
  })
  return errors
}

// ---- the simulated server (stub: replace with your API)
/** Round-trip latency of the stub (ms). */
const LATENCY_MS = 450

/** The provider-sync failure code the demo's failure switch triggers. */
export const SYNC_FAILURE_CODE = 4090

/** Example wording of that failure. */
export const SYNC_FAILURE_MESSAGE = "Saved, but the mail provider could not be updated. Please try again."

/** A GraphQL error as the spec defines it. */
export interface GraphQLErrorShape {
  message: string
  path?: string[]
  extensions?: { code?: number | string }
}

/** The response envelope a failed operation carries. */
export interface GraphQLResponseShape {
  errors: GraphQLErrorShape[]
  data: null
  status: number
}

/** Mirrors graphql-request's \`ClientError\`: message = first error + JSON dump; the envelope on \`.response\`. */
export class ClientError extends Error {
  readonly response: GraphQLResponseShape
  readonly request: { query: string; variables: unknown }
  constructor(response: GraphQLResponseShape, request: { query: string; variables: unknown }) {
    super(\`\${response.errors[0]?.message ?? \`GraphQL Error (Code: \${response.status})\`}: \${JSON.stringify({ response, request })}\`)
    this.name = "ClientError"
    this.response = response
    this.request = request
  }
}

const ZONES: ZoneNode[] = [
  {
    id: "zone_be",
    name: "Belgium",
    handle: "belgium",
    regions: [{ id: "rg_be", name: "Belgium", code: "BE" }],
    domains: [
      { locale: "nl", url: "https://help.example.com/nl-be" },
      { locale: "fr", url: "https://help.example.com/fr-be" },
      { locale: "de-BE", url: "https://help.example.com/de-be" },
    ],
    customerLocales: ["nl", "fr", "de"],
  },
  {
    id: "zone_de",
    name: "Germany",
    handle: "germany",
    regions: [{ id: "rg_de", name: "Germany", code: "DE" }],
    domains: [{ locale: "de", url: "https://help.example.com/de" }],
    customerLocales: ["de"],
  },
  {
    id: "zone_nordics",
    name: "Nordics",
    handle: "nordics",
    regions: [
      { id: "rg_se", name: "Sweden", code: "SE" },
      { id: "rg_dk", name: "Denmark", code: "DK" },
      { id: "rg_no", name: "Norway", code: "NO" },
    ],
    domains: [
      { locale: "sv", url: "https://help.example.com/sv" },
      { locale: "da", url: "https://help.example.com/da" },
      { locale: "en", url: "https://help.example.com/en-nordics" },
    ],
    customerLocales: ["sv", "da", "en"],
  },
]

const INITIAL_OVERRIDES: ZoneOverride[] = [
  { match: { region: "BE" }, sender: "SND-987654321", templates: { receipt: { value: "be-receipt-v2" }, shipping: { value: "be-shipping-v1" } } },
  { match: { region: "BE", locale: "fr" }, templates: { receipt: { value: "fr-receipt-v2" } } },
  // a locale Belgium no longer serves (en was retired): still stored, still winning at send time
  { match: { region: "BE", locale: "en" }, templates: { receipt: { value: "en-receipt-v1" } } },
  { match: { region: "DE" }, surveys: { status: false }, templates: {} },
]

const initialSettings = (): MessagingSettings => ({
  id: "msg_settings_main",
  senderId: "123456789",
  welcomeTemplate: "global-welcome-v3",
  receiptTemplate: "global-receipt-v4",
  shippingTemplate: "global-shipping-v2",
  refundTemplate: "global-refund-v1",
  surveyTemplate: null,
  surveysEnabled: true,
  overridesEnabled: true,
  zoneOverrides: INITIAL_OVERRIDES,
})

/** The stub's state: the account's messaging-settings row (the blob lives on it) and a failure switch. */
export interface ZonesServer {
  messagingSettingsGet(): Promise<{ messagingSettingsGet: MessagingSettings }>
  zoneList(): Promise<{ zoneList: ZoneNode[] }>
  zoneOverridesSet(id: string, input: ZoneOverridesSetInput): Promise<{ zoneOverridesSet: { id: string; overridesEnabled: boolean; zoneOverrides: unknown } }>
  /** Demo control: make the next saves fail with the provider-sync error (after committing, as the backend does). */
  setFailSync(fail: boolean): void
  /** The blob as currently stored (for the demo's side panel). */
  storedOverrides(): unknown
}

/** A fresh in-memory server (one per demo mount, so reloading the page resets it). */
export function createZonesServer(): ZonesServer {
  let row = initialSettings()
  let failSync = false
  return {
    async messagingSettingsGet() {
      await delay(LATENCY_MS)
      return { messagingSettingsGet: row }
    },
    async zoneList() {
      await delay(LATENCY_MS)
      return { zoneList: ZONES }
    },
    async zoneOverridesSet(id, input) {
      await delay(LATENCY_MS)
      const request = { query: "mutation zoneOverridesSet($id: String!, $input: ZoneOverridesSetInput!)", variables: { id, input } }
      // the server validates the same cases the client mirror does
      const invalid = validateOverrides(input.zoneOverrides)
      if (invalid.length > 0) throw new ClientError({ errors: invalid.map((e) => ({ message: e.message, path: ["zoneOverridesSet"] })), data: null, status: 200 }, request)
      // committed first; the provider sync comes after and can fail on its own
      row = { ...row, overridesEnabled: input.overridesEnabled, zoneOverrides: input.zoneOverrides }
      if (failSync)
        throw new ClientError({ errors: [{ message: SYNC_FAILURE_MESSAGE, path: ["zoneOverridesSet"], extensions: { code: SYNC_FAILURE_CODE } }], data: null, status: 200 }, request)
      return { zoneOverridesSet: { id: row.id, overridesEnabled: row.overridesEnabled, zoneOverrides: row.zoneOverrides } }
    },
    setFailSync(fail) {
      failSync = fail
    },
    storedOverrides: () => row.zoneOverrides,
  }
}

// ---- inherit-fields
/** What an empty template field shows when nothing is inherited. */
export const NOT_SET = "Not set"

/** The text of \`x\` when it is a non-blank string. */
const filled = (x: unknown): string | undefined => (typeof x === "string" && x.trim() !== "" ? x.trim() : undefined)

export interface InheritTextFieldProps {
  name: string
  label: string
  /** Absolute path of the same field one level up (a locale inherits the zone's template). */
  inheritFrom?: string
  /** What that level is called in the caption ("zone"). */
  inheritFromLabel?: string
  /** The last link of the chain: the Global (store default) value. */
  inherited?: string
  rules?: Validator[]
  /** Applied to the raw text on blur (the page normalizes a pasted config line to \`SND-…\`). */
  normalize?: (raw: string) => string
  description?: string
}

/** The chain for one field: the parent level's path (if any), then the Global value (if any). */
function chainOf(inheritFrom: string | undefined, inherited: string | boolean | undefined): Expr[] {
  const chain: Expr[] = []
  if (inheritFrom !== undefined) chain.push({ var: inheritFrom })
  if (inherited !== undefined) chain.push({ lit: inherited })
  return chain
}

/** A text override: empty = inherit (omitted from the payload), with the inherited value as placeholder. */
export function InheritTextField({ name, label, inheritFrom, inheritFromLabel = "parent", inherited, rules, normalize, description }: InheritTextFieldProps) {
  const store = useFormStore()
  // emptyPolicy "omit": a blank override is ABSENT from the payload, never \`""\` (the server treats "" as defined)
  const f = useField<string | undefined>(name, fieldOptions({ label, rules, description, emptyPolicy: "omit", inherit: chainOf(inheritFrom, filled(inherited)) }, "inheritText"))
  const effective = filled(f.inherited)
  // which link won: the Global value, unless the parent level gave a different one
  const source = inheritFrom !== undefined && effective !== undefined && effective !== filled(inherited) ? inheritFromLabel : "Global"
  const own = filled(f.value)
  const text = typeof f.value === "string" ? f.value : ""
  return (
    <FieldShell hidden={!f.active} htmlFor={f.id} error={f.error} warning={f.warning} label={label} description={description} required={f.required} submitAs={{ name: f.name, value: text, native: true }}>
      <div className="flex items-center gap-1.5">
        <Input
          id={f.id}
          name={f.name}
          dir="ltr"
          autoComplete="off"
          className="h-7 font-mono text-[12px]"
          value={text}
          placeholder={effective ?? NOT_SET}
          aria-invalid={f.error ? true : undefined}
          aria-describedby={describedBy(f.id, f.error, description)}
          onChange={(e) => f.setValue(e.target.value)}
          onFocus={f.onFocus}
          onBlur={() => {
            if (normalize) {
              const next = normalize(text)
              if (next !== text) f.setValue(next)
            }
            f.onBlur()
          }}
        />
        {own === undefined && effective !== undefined ? (
          <Button type="button" size="sm" variant="ghost" className="h-7 shrink-0 px-2 text-[12px]" onClick={() => store.adopt(f.name)}>
            Fill from {source}
          </Button>
        ) : null}
        {own !== undefined ? (
          <Button type="button" size="sm" variant="ghost" className="h-7 shrink-0 px-2 text-[12px]" onClick={() => store.inherit(f.name)}>
            Use {source}
          </Button>
        ) : null}
      </div>
      <p className="text-[11px] text-muted-foreground" data-inherit-state={own === undefined ? "inherit" : "override"}>
        {own === undefined ? (effective === undefined ? "Not set — nothing to inherit." : \`Inherits \${source}: \${effective}\`) : \`Overrides \${source}\${effective === undefined ? "" : \` (\${effective})\`}\`}
      </p>
    </FieldShell>
  )
}

export interface InheritSwitchFieldProps {
  name: string
  label: string
  description?: string
  /** The Global value shown while this field is \`undefined\`. */
  inherited?: boolean
}

/**
 * A boolean override with three states: \`undefined\` (inherit, shows the Global state), \`true\`, \`false\`
 * (explicit opt-out) — the catalog \`SwitchField tristate\` with the Global value as its inherit chain.
 */
export function InheritSwitchField({ name, label, description, inherited }: InheritSwitchFieldProps) {
  const value = useValue<unknown>(name)
  const inheriting = value === undefined || value === null
  // the inherit state rides in the description, so it sits under the label like every other caption
  const state = inheriting ? \`Inherits Global (\${inherited === true ? "on" : "off"})\` : \`Set for this zone (\${value === true ? "on" : "off"})\`
  return <SwitchField name={name} label={label} description={\`\${description ? \`\${description} \` : ""}\${state}.\`} tristate inherit={chainOf(undefined, inherited)} />
}

// ---- index
/** Everything the detail page needs once BOTH source queries have answered. */
export interface ZonePage {
  settingsId: string
  overridesEnabled: boolean
  zone: Zone
  globalDefault: GlobalDefault
  overrides: ZoneOverride[]
  model: ZoneDetailModel
}

/**
 * Run the page's two queries (the settings row carrying the blob, and the zone
 * list) and build the zone's model only when both settled — hydrating from the
 * first query alone would render a configured zone blank, and the next save
 * would then delete its entries. Rejects when the zone is unknown.
 */
export async function loadZonePage(server: ZonesServer, zoneId: string): Promise<ZonePage> {
  const [settingsRes, zonesRes] = await Promise.all([server.messagingSettingsGet(), server.zoneList()])
  const settings = settingsRes.messagingSettingsGet
  const node = zonesRes.zoneList.find((m) => m.id === zoneId)
  if (!node) throw new Error(\`Zone \${zoneId} not found\`)
  const zone = toZone(node)
  const overrides = parseOverrides(settings.zoneOverrides)
  return { settingsId: settings.id, overridesEnabled: settings.overridesEnabled, zone, globalDefault: globalDefaultOf(settings), overrides, model: buildDetailModel(zone, overrides) }
}

// ---- the page
// Real-world flow: per-zone overrides of account-wide messaging defaults for an invented
// support-desk app. The simulated server answers realistic GraphQL shapes
// (the server section above).

const ZONE_PICKS = [
  { id: "zone_be", label: "Belgium (3 languages)" },
  { id: "zone_de", label: "Germany" },
  { id: "zone_nordics", label: "Nordics (3 countries)" },
] as const

const FIRST_ZONE = ZONE_PICKS[0].id

const MODES: ChoiceOption[] = [
  { value: "base", label: "Same for all languages" },
  { value: "perLocale", label: "Per language" },
]

const { c, v } = kit<ZoneDetailValues>()

/** Client mirror of the server's sender-id check, as field rules so the message lands on the field. */
const SENDER_ID_RULES = [
  v.pattern(SENDER_ID_REGEX, "Must be a sender ID like SND-123456789."),
  // SND-0… passes the shape check and the server, yet every message is dropped
  v.pattern(/^(?!SND-0+$)/, "Not a usable sender ID — pick a sender account that has a verified domain."),
]

// the per-language draft is RETAINED while "Same for all languages" is selected (it is left out
// of the save, not cleared), so switching back restores it
const model = defineForm<ZoneDetailValues>()(() => ({ fields: [], whenHidden: "keep" }))

/** The success outcome the status line renders. */
interface SaveOutcome {
  message: string
  entries: number
}

/** A card section with a heading and muted intro, in Kitora chrome. */
function Card({ title, intro, children, aside }: { title: string; intro?: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <section className="flex flex-col gap-2.5 rounded-lg border p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-sm font-semibold">{title}</h3>
          {intro ? <p className="text-[12px] text-muted-foreground">{intro}</p> : null}
        </div>
        {aside}
      </div>
      {children}
    </section>
  )
}

/** A clearly labelled part of a real page this demo does not reproduce (and why). */
function NotSupported({ what, why }: { what: string; why: string }) {
  return (
    <div className="rounded-md border border-dashed px-2.5 py-1.5 text-[12px] text-muted-foreground" data-not-supported>
      <span className="font-medium text-foreground">Not yet supported: {what}.</span> {why}
    </div>
  )
}

/** A banner (info / warning). */
function Banner({ tone, title, children }: { tone: "info" | "warning"; title: string; children: ReactNode }) {
  const toneClass = tone === "warning" ? "border-amber-500/40 bg-amber-500/5" : "border-sky-500/30 bg-sky-500/5"
  return (
    <div role="status" className={\`rounded-md border px-2.5 py-1.5 text-[13px] \${toneClass}\`}>
      <p className="font-medium">{title}</p>
      <p className="text-[12px] text-muted-foreground">{children}</p>
    </div>
  )
}

/** One per-language card: collapsible, badged "Set" / "No longer served". */
function LocaleCard({ form, zoneName, locale, stale, globalTemplates }: { form: FormStore<ZoneDetailValues>; zoneName: string; locale: string; stale: boolean; globalTemplates: (field: (typeof TEMPLATE_FIELDS)[number]) => string | undefined }) {
  const config = useFormValue(form, \`perLocale.\${locale}\`)
  const configured = hasLocaleConfig(config)
  return (
    <details open={configured || stale} className="group rounded-lg border p-3" data-locale={locale}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <span className="text-sm font-semibold">{locale.toUpperCase()}</span>
          {stale ? <Badge variant="outline" className="border-destructive/50 text-destructive">No longer served</Badge> : configured ? <Badge variant="secondary">Set</Badge> : null}
        </span>
        <span className="text-[12px] text-primary group-open:hidden">Edit</span>
        <span className="hidden text-[12px] text-primary group-open:inline">Hide</span>
      </summary>
      <p className="mt-1 text-[12px] text-muted-foreground">
        {stale
          ? \`\${zoneName} doesn't serve this language any more, but these templates are still saved and still take priority. Clear them to fall back to the zone's templates.\`
          : "Applies to every regional variant of this language."}
      </p>
      <div className="mt-2 flex flex-col gap-2">
        <FieldScope name={\`perLocale.\${locale}\`}>
          {TEMPLATE_FIELDS.map((field) => (
            <InheritTextField key={field} name={\`.\${field}\`} label={TEMPLATE_FIELD_CAPTIONS[field]} inheritFrom={\`base.\${field}\`} inheritFromLabel="zone" inherited={globalTemplates(field)} />
          ))}
        </FieldScope>
      </div>
    </details>
  )
}

/** The detail page for one zone, rendered once both queries answered (Suspense holds it until then). */
function ZoneDetail({ pagePromise, server }: { pagePromise: Promise<ZonePage>; server: ZonesServer }) {
  const page = use(pagePromise)
  const { zone, globalDefault, model: detail } = page
  const form = useForm<ZoneDetailValues>({ defaultValues: detail.values, model })
  const { dirty, submitting } = useFormMeta(form)
  const { confirm, dialog } = useConfirm()
  // what the server holds now — refreshed after EVERY settled save, success or not
  const [stored, setStored] = useState<ZoneOverride[]>(page.overrides)
  const [notice, setNotice] = useState<{ tone: "ok" | "error"; text: string } | null>(null)
  const mode = useFormValue(form, "mode")
  const perLocale = useFormValue(form, "perLocale")
  const configured = buildDetailModel(zone, stored).configured
  const localesWithConfig = Object.entries(perLocale).flatMap(([loc, cfg]) => (hasLocaleConfig(cfg) ? [loc] : []))
  const refetch = () => setStored(parseOverrides(server.storedOverrides()))

  const save = async (values: ZoneDetailValues, ctx: SubmitContext): Promise<SaveOutcome | void> => {
    const savedPerLocale = detail.supportsPerLocale && values.mode === "perLocale" ? values.perLocale : {}
    // validated already (Form ran the rules); now the cross-account confirm holds the VALIDATED values
    const risks = crossAccountTemplateRisks(values.base, savedPerLocale, zone.locales, globalDefault)
    if (risks.length > 0) {
      const ok = await confirm({
        title: "Some messages will use templates from a different sender account",
        // the affected events as a list (the confirm body is block content since N4)
        body: (
          <>
            <p>{\`\${zone.name} sends to \${values.base.senderId ?? ""}, but these messages have no template of their own, so they fall back to your global templates — which belong to the sender account behind \${globalDefault.senderId ?? "your global setup"}:\`}</p>
            <ul className="my-1 list-disc ps-5">
              {risks.map((field) => (
                <li key={field}>{TEMPLATE_FIELD_NAMES[field]}</li>
              ))}
            </ul>
            <p>A sender ID and a template from two different accounts are dropped silently: the mail provider accepts the send and delivers nothing.</p>
          </>
        ),
        confirmLabel: "Save anyway",
        cancelLabel: "Go back and set templates",
      })
      // "Go back and set templates": nothing saved, nothing shown — N7
      if (!ok) return ctx.cancel()
    }
    // one write for the whole zone: base + every locale entry, against the CURRENT blob
    const next = replaceZoneEntries(zone, parseOverrides(server.storedOverrides()), serializeDetailModel(zone, values, detail.supportsPerLocale))
    const problems = validateOverrides(next)
    // thrown joined into one Error and shown form-level
    if (problems.length > 0) throw new SubmitError({ message: problems.map((p) => p.message).join("\\n") })
    try {
      await server.zoneOverridesSet(page.settingsId, { overridesEnabled: page.overridesEnabled, zoneOverrides: next })
    } catch (e) {
      // the GraphQL envelope on the ClientError: errors[0].message, shown form-level (no sources needed)
      throw mapErrors<ZoneDetailValues>(e) ?? e
    } finally {
      refetch()
    }
    setNotice(null)
    return { message: "Zone settings saved.", entries: next.length }
  }

  const resetToGlobal = async () => {
    const ok = await confirm({
      title: \`Reset \${zone.name} to global settings?\`,
      body: \`\${zone.name} will go back to using your global messaging setup. This is saved immediately and can't be undone. Its sender override and its five template overrides are removed\${localesWithConfig.length > 0 ? \`, and so are its per-language templates (\${localesWithConfig.map((l) => l.toUpperCase()).join(", ")})\` : ""}. Templates themselves are not deleted.\`,
      confirmLabel: "Reset to global",
      destructive: true,
    })
    if (!ok) return
    try {
      await server.zoneOverridesSet(page.settingsId, { overridesEnabled: page.overridesEnabled, zoneOverrides: replaceZoneEntries(zone, parseOverrides(server.storedOverrides()), []) })
      // everything inherits again — surveys too (undefined, never false)
      form.rebase(emptyDetailValues(detail, zone.id))
      setNotice({ tone: "ok", text: \`\${zone.name} reset to global settings.\` })
    } catch (e) {
      setNotice({ tone: "error", text: mapErrors(e)?.message ?? "Failed to reset." })
    } finally {
      refetch()
    }
  }

  return (
    <TwoCol>
      <Form form={form} onSubmit={save} className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold">{zone.name}</h2>
              {configured ? <Badge>Active</Badge> : null}
            </div>
            <p className="text-[12px] text-muted-foreground">{zone.domain}</p>
          </div>
          {configured ? (
            <Button type="button" size="sm" variant="outline" onClick={() => void resetToGlobal()}>
              Reset to global
            </Button>
          ) : null}
        </div>

        <Card title="Sender account" intro="Leave a field empty to inherit your global setup; the placeholder shows what will be used.">
          <InheritTextField name="base.senderId" label="Sender account ID" inherited={globalDefault.senderId} normalize={toSenderId} rules={SENDER_ID_RULES} description="Paste the ID or the whole config line — it is reduced to SND-… when you leave the field." />
          <NotSupported what="account picker, “Apply this account to all zones”" why="A picker modal that stages an account link only counts as dirty through app glue (G3 + pending link)." />
          <InheritSwitchField name="base.surveysEnabled" label="Send satisfaction surveys" description="Ask customers in this zone to rate their support conversation." inherited={globalDefault.surveysEnabled} />
        </Card>

        {!detail.supportsPerLocale && zone.locales.length > 1 ? (
          <Banner tone="info" title="Per-language templates aren't available for this zone">
            {zone.name} covers {zone.regions.length} countries, and templates can only be targeted per country or per country-and-language — not per language across several countries. Split it into one zone per country to set templates per language, or use the templates above for the whole zone.
          </Banner>
        ) : null}

        {detail.supportsPerLocale ? (
          <Card title="Languages" intro="This zone serves multiple languages. Use one set of templates for all, or set them per language.">
            <SegmentedField name="mode" label="Template mode" options={MODES} />
          </Card>
        ) : null}

        <Card title="Message templates" intro="Empty inherits the global template.">
          <FieldScope name="base">
            {TEMPLATE_FIELDS.map((field) => (
              <InheritTextField key={field} name={\`.\${field}\`} label={TEMPLATE_FIELD_CAPTIONS[field]} inherited={globalTemplate(globalDefault, field)} />
            ))}
          </FieldScope>
          <NotSupported what="per-template Create / Select from the template library, “Fill from” another zone" why="An external async value with a manual override (G10) and a replace-all confirm." />
        </Card>

        {detail.supportsPerLocale ? (
          <When if={c.eq("mode", "perLocale")}>
            <div className="flex flex-col gap-2">
              {detail.locales.map((loc) => (
                <LocaleCard key={loc} form={form} zoneName={zone.name} locale={loc} stale={detail.stale.includes(loc)} globalTemplates={(field) => globalTemplate(globalDefault, field)} />
              ))}
            </div>
          </When>
        ) : null}

        {detail.supportsPerLocale && mode === "base" && localesWithConfig.length > 0 ? (
          <Banner tone="warning" title="Per-language templates will be removed">
            {zone.name} currently has separate templates for {localesWithConfig.map((l) => l.toUpperCase()).join(", ")}. Saving with &quot;Same for all languages&quot; selected deletes them and every language falls back to the templates above. Switch back to &quot;Per language&quot; to keep them.
          </Banner>
        ) : null}

        <div className="flex items-center justify-end gap-2">
          <Button type="button" variant="outline" size="sm" onClick={() => form.reset("baseline")} disabled={!dirty || submitting}>
            Cancel
          </Button>
          <Form.Submit className={buttonVariants({ size: "sm" })} disabled={!dirty || submitting}>
            Save Changes
          </Form.Submit>
        </div>
        <Form.Status<SaveOutcome>
          className="text-[13px]"
          success={(r) => (
            <p className="font-medium text-emerald-700 dark:text-emerald-400">
              ✓ {r.message} ({r.entries} entries in the blob)
            </p>
          )}
          error={(err) => <p className="whitespace-pre-line text-destructive">{err.message}</p>}
        />
        {notice ? <p className={notice.tone === "ok" ? "text-[13px] font-medium text-emerald-700 dark:text-emerald-400" : "text-[13px] text-destructive"}>{notice.text}</p> : null}
        {dialog}
      </Form>
      <div className="flex min-w-0 flex-col gap-3">
        <LivePanel store={form} />
        <SidePanel title="Stored overrides blob" meta="zone_overrides">
          {/* a scrolling region must be reachable by keyboard (focusable, with a visible ring) */}
          <pre tabIndex={0} aria-label="Stored overrides blob" className="max-h-72 overflow-auto p-3 font-mono text-[11px] focus-visible:outline-2 focus-visible:outline-ring" data-stored-blob>
            {JSON.stringify(stored, null, 2)}
          </pre>
        </SidePanel>
      </div>
    </TwoCol>
  )
}

// ---- page chrome: the panels beside the form
/** A side panel: a card with a title strip (title left, muted meta right). */
function SidePanel({ title, meta, sticky = false, className, children }: { title: ReactNode; meta?: ReactNode; sticky?: boolean; className?: string; children: ReactNode }) {
  return (
    <aside className={cn("min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card", sticky && "lg:sticky lg:top-[4.5rem]", className)}>
      <div className="flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]">
        <span className="truncate font-medium">{title}</span>
        {meta !== undefined ? <span className="shrink-0 tabular-nums text-muted-foreground">{meta}</span> : null}
      </div>
      {children}
    </aside>
  )
}

/** A JSON value as a panel body (focusable: it scrolls). */
function PanelJson({ value, maxHeight = "max-h-[420px]" }: { value: unknown; maxHeight?: string }) {
  return (
    <pre dir="ltr" tabIndex={0} className={cn("overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring", maxHeight)}>
      {JSON.stringify(value, null, 2)}
    </pre>
  )
}

/** The read side of a store that {@link LivePanel} shows; every \`FormStore\` fits. */
interface LiveSource extends SnapshotSource {
  serialize(opts?: { redact?: boolean; mode?: "full" | "dirty" }): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** The store's live serialized payload, dirty flag, submit status and issues. */
function LivePanel({ store, title = "Live payload", redact = false, mode = "full" }: { store: LiveSource; title?: string; redact?: boolean; mode?: "full" | "dirty" }) {
  const { payload, dirty, status, issues } = useFormSnapshot(store, (s) => ({ payload: s.serialize({ redact, mode }), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }), deepEqual)
  return (
    <SidePanel sticky title={title} meta={\`\${dirty ? "● dirty" : "clean"} · \${status}\`}>
      <PanelJson value={payload} />
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>
              {i.path || "(form)"}: {i.message}
            </li>
          ))}
        </ul>
      ) : null}
    </SidePanel>
  )
}

/** The form beside its side panels (one column below lg). */
function TwoCol({ children, stack = false }: { children: ReactNode; stack?: boolean }) {
  return <div className={cn("grid grid-cols-1 gap-4", !stack && "lg:grid-cols-[minmax(0,1fr)_280px]")}>{Children.toArray(children)}</div>
}

// ---- the examples
export function ZoneDetailExample() {
  // demo-chrome: one simulated GraphQL server per page mount
  const [server] = useState(createZonesServer)
  // demo-chrome: the route's zone id; switching runs both queries again, as navigating does
  const [current, setCurrent] = useState<{ zoneId: string; promise: Promise<ZonePage> }>(() => ({ zoneId: FIRST_ZONE, promise: loadZonePage(server, FIRST_ZONE) }))
  // demo-chrome: make saves fail with the provider-sync error (4090) after the row is committed
  const [failSync, setFailSync] = useState(false)
  const open = (zoneId: string) => setCurrent({ zoneId, promise: loadZonePage(server, zoneId) })
  return (
    <>
      <div className="mb-3 flex flex-wrap items-center gap-2 text-[13px]">
        {ZONE_PICKS.map((m) => (
          <Button key={m.id} type="button" size="sm" variant={current.zoneId === m.id ? "default" : "outline"} onClick={() => open(m.id)}>
            {m.label}
          </Button>
        ))}
        <label className="ms-auto flex items-center gap-2">
          <span>Fail saves with 4090</span>
          <Switch
            checked={failSync}
            aria-label="Fail saves with 4090"
            onCheckedChange={(next: boolean) => {
              server.setFailSync(next)
              setFailSync(next)
            }}
          />
        </label>
      </div>
      <Suspense fallback={<p className="text-[13px] text-muted-foreground">Loading zone…</p>}>
        <ZoneDetail key={current.zoneId} pagePromise={current.promise} server={server} />
      </Suspense>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./regional-overrides-BMnbL24v.js`),[]));function Ze(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(n,{title:`Regional overrides (real-world flow)`,children:[`Per-zone overrides of an account's messaging defaults (sender account, five message templates, satisfaction surveys), with realistic GraphQL shapes. Every field is optional and empty means "inherit Global" (the placeholder shows what fires; the payload omits it); surveys keep `,(0,O.jsx)(`code`,{children:`undefined`}),` (inherit) apart from an explicit`,` `,(0,O.jsx)(`code`,{children:`false`}),`. One store holds the base templates, the mode and every language's templates (`,(0,O.jsx)(`code`,{children:`FieldScope`}),` per locale), so dirty, Cancel and undo cover all of them. Save validates, asks "Save anyway?" when the zone's own sender would pair with Global templates, then writes the whole blob once; a GraphQL failure shows `,(0,O.jsx)(`code`,{children:`errors[0].message`}),`. Parts the engine cannot express yet are marked `,(0,O.jsx)(`em`,{children:`Not yet supported`}),`.`]}),(0,O.jsx)(E,{n:1,title:`Zone detail`,blurb:`Belgium starts per-language with a stale EN entry; try SND-0, a pasted config line, switching mode, Reset to global, or the 4090 failure.`,code:$,children:(0,O.jsx)(Xe,{})})]})}export{Ze as component};