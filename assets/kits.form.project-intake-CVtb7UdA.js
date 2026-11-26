import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CiJzHfYx.js";import{s as n}from"./kit-docs-BUovISd0.js";import{Ai as r,Bc as i,Cc as a,Ic as o,Ti as s,hi as c,ni as l,ti as u}from"./index-B9ukmIN1.js";import{t as d}from"./badge-uhFB8J9R.js";import{W as f}from"./messages-C_IMdr_-.js";import{A as p,E as ee,J as m,R as te,Y as h,c as g,f as ne,h as re}from"./field-config-17kME8Vl.js";import{a as _,c as ie,o as v,p as ae,r as y,t as oe,y as b}from"./fields-CwxxBZgA.js";import{i as x,n as S}from"./wizard-D4W23MbD.js";import{i as se}from"./fields-extra-C15csBPj.js";import{t as C}from"./confirm-Bdo0sgJx.js";import{t as w}from"./field-array-BUA8h98X.js";import{t as T}from"./display-CjsFrQus.js";import{t as ce}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var E=e(i(),1),D=o();function O(e){return new Promise(t=>setTimeout(t,e))}var le={Project:`PROJECT`,Support:`SUPPORT`},k=[{id:`r1`,name:`owner`,displayName:`Owner`},{id:`r2`,name:`marketing`,displayName:`Marketing`},{id:`r3`,name:`engineering`,displayName:`Engineering`}],ue=`NOTSURE`,A=[{system:`CRM`,name:`CRM`,existingRef:`CRM-449120`},{system:`BILLING`,name:`Billing`,existingRef:null},{system:`CMS`,name:`Content system`,existingRef:null},{system:`HELPDESK`,name:`Help desk`,existingRef:`HD-20931`},{system:`NEWSLETTER`,name:`Newsletter`,existingRef:null},{system:`BOOKING`,name:`Booking calendar`,existingRef:null},{system:`LIVECHAT`,name:`Live chat`,existingRef:null},{system:`FORMS`,name:`Form builder`,existingRef:null},{system:`SEARCH`,name:`Site search`,existingRef:null},{system:ue,name:`Not sure`,existingRef:null}],j=[{system:`SSO`,name:`Single sign-on`,existingRef:null},{system:`WAREHOUSE`,name:`Data warehouse`,existingRef:null}],de=[`CMS`,...j.map(e=>e.system)],fe={CRM:`CRM-`,BILLING:`BIL-`,CMS:`CMS-`};function pe(e){return e.existingRef??fe[e.system]??``}var me={CMS:`content space ID`,CRM:`CRM account number`,BILLING:`billing customer ID`,HELPDESK:`help-desk workspace ID`,NEWSLETTER:`newsletter list ID`,BOOKING:`booking calendar ID`,LIVECHAT:`chat widget key`,FORMS:`form workspace ID`,SEARCH:`search index name`},he=class extends Error{response;constructor(e){super(e[0]?.message??`GraphQL Error`),this.name=`ClientError`,this.response={errors:e,data:null,status:200}}},M={id:`svc_build`,name:`Website Build`,status:`ACTIVE`,slug:`website-build`},ge=[{id:`c1`,name:`Priya Shah`,email:`priya@acme.test`,canReceiveEmail:!0,edges:{teamRole:k[0]}},{id:`c2`,name:`Tom Becker`,email:`tom@acme.test`,canReceiveEmail:!0,edges:{teamRole:k[1]}}],_e=7300,N=350,P=(e,t)=>({request:{id:e,serviceId:M.id,status:`DRAFT`,notes:null,contactIds:null,ticketId:null,step:0,customBuild:null,accessibilityRequired:!1,accessibilityNotes:null,edges:{service:{...M,name:t},systems:[]}},contacts:ge,ticketsCreated:0,log:[]}),ve={message:`project request could not be updated, please try again`,path:[`projectRequestUpdate`]};function F(e,t){let n=P(e,t),r=!1,i=new Set,a=(e,t)=>{n={...n,...e,log:[...n.log,t]};for(let e of i)e()},o=e=>{throw r=!1,a({},`${e} → errors[0].message`),new he([{...ve,path:[e]}])};return{subscribe(e){return i.add(e),()=>{i.delete(e)}},snapshot:()=>n,failNextCall(e){r=e},reset(){r=!1,n=P(e,t);for(let e of i)e()},async projectRequestGet(){return await O(N),{projectRequestGet:n.request}},async projectRequestUpdate(e){await O(N),r&&o(`projectRequestUpdate`);let t=n.request,i={...t,step:e.step,status:e.step===100?`PENDING`:t.status,notes:e.notes??t.notes,contactIds:e.contactIds??t.contactIds,ticketId:e.ticketId??t.ticketId,customBuild:e.customBuild??t.customBuild,accessibilityRequired:e.accessibilityRequired,accessibilityNotes:e.accessibilityNotes??t.accessibilityNotes};return a({request:i},`projectRequestUpdate(step: ${e.step}${e.customBuild===void 0||e.customBuild===null?``:`, customBuild: ${e.customBuild}`}${e.ticketId?`, ticketId: ${e.ticketId}`:``})`),{projectRequestUpdate:i}},async projectSystemsReplace(t){await O(N),r&&o(`projectSystemsReplace`);let i=t.map(t=>({system:t.system,accountRef:t.accountRef??null,projectRequestId:e})),s={...n.request,edges:{...n.request.edges,systems:i}};return a({request:s},`projectSystemsReplace(${t.map(e=>e.system).join(`, `)})`),{projectSystemsReplace:s}},async ticketCreate(e){await O(N),r&&o(`ticketCreate`);let t=n.ticketsCreated+1,i=String(_e+t);return a({ticketsCreated:t},`ticketCreate(${e.kind}, primary ${e.primaryContactId}, ${e.contactIds?.length??0} contacts) → ${i}`),{ticketCreate:{ticketRef:i}}},async contactCreate(e){await O(N),r&&o(`contactCreate`);let t=k.find(t=>t.id===e.teamRoleId)??k[1],i={id:`c${n.contacts.length+1}`,name:e.name,email:e.email,canReceiveEmail:e.canReceiveEmail,edges:{teamRole:t}};return a({contacts:[...n.contacts,i]},`contactCreate(${e.email}) → ${i.id}`),{contactCreate:i}},async contactUpdate(e,t){await O(N),r&&o(`contactUpdate`);let i=k.find(e=>e.id===t.teamRoleId)??k[1],s=n.contacts.map(n=>n.id===e?{...n,name:t.name,email:t.email,canReceiveEmail:t.canReceiveEmail,edges:{teamRole:i}}:n),c=s.find(t=>t.id===e)??s[0];return a({contacts:s},`contactUpdate(${e})`),{contactUpdate:c}}}}function ye(e){return(e.find(e=>e.edges.teamRole.name===`owner`)??e[0])?.id??``}function I({title:e,message:t}){return(0,D.jsxs)(`p`,{role:`alert`,className:`rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-[13px]`,children:[(0,D.jsx)(`span`,{className:`font-medium text-destructive`,children:e}),` `,(0,D.jsx)(`span`,{children:t})]})}function be(e){let t=b(e)?.message??``;return t.charAt(0).toUpperCase()+t.slice(1)}function xe({label:e,state:t}){return(0,D.jsxs)(`div`,{"aria-current":t===`current`?`step`:void 0,className:c(`flex items-center gap-2 border-y bg-muted/40 px-3 py-2 text-sm`,t===`todo`&&`text-muted-foreground`),children:[(0,D.jsx)(`span`,{className:c(`grid size-4 shrink-0 place-items-center rounded-full border`,t===`done`&&`border-emerald-600 bg-emerald-600 text-white`,t===`current`&&`border-primary border-dashed`),children:t===`done`?(0,D.jsx)(r,{className:`size-3`,"aria-hidden":!0}):null}),(0,D.jsx)(`span`,{className:`font-semibold`,children:e}),t===`done`?(0,D.jsx)(`span`,{className:`sr-only`,children:`(completed)`}):null]})}function L(e){return e.progressSteps.findIndex(t=>t.id===e.current?.id)}var R=(e,t,n,r)=>{let i=L(r),a=r.progressSteps.findIndex(t=>t.id===e.id);return(0,D.jsxs)(D.Fragment,{children:[i<0?null:(0,D.jsx)(xe,{label:e.label,state:a<i?`done`:a===i?`current`:`todo`}),t]})};function z({title:e}){let t=x(),n=L(t);if(n<0)return null;let r=t.progressSteps.length,i=(n===0?.2:n)/r*100;return(0,D.jsxs)(`div`,{className:`flex flex-col`,children:[e,(0,D.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 text-[13px]`,children:[(0,D.jsxs)(`span`,{className:`tabular-nums`,children:[n,` of `,r,` tasks completed`]}),(0,D.jsx)(`span`,{className:`h-1.5 w-1/5 overflow-hidden rounded-full bg-muted`,role:`progressbar`,"aria-valuenow":Math.round(i),"aria-valuemin":0,"aria-valuemax":100,"aria-label":`Tasks completed`,children:(0,D.jsx)(`span`,{className:`block h-full rounded-full bg-emerald-600`,style:{width:`${i}%`}})})]})]})}function B({lastLabel:e,gate:t,stepErrorTitle:n=`Error`,onExit:r}){let i=x(),a=te(t),o=L(i);if(o<0)return null;let c=a!=null&&a!==``,d=i.pending,f=i.stepError?.message??null;return(0,D.jsxs)(`div`,{className:`flex flex-col`,children:[f?(0,D.jsx)(`div`,{className:`mt-3`,children:(0,D.jsx)(I,{title:n,message:f})}):null,(0,D.jsxs)(`div`,{className:`mt-3 flex justify-end gap-2 border-t pt-3`,children:[(0,D.jsx)(u,{type:`button`,variant:`outline`,size:`sm`,onClick:o===0&&r?r:i.back,disabled:d||i.isFirst&&!r,children:`Go Back`}),i.isLast?(0,D.jsx)(g.Submit,{className:l({size:`sm`}),disabled:!c,pendingLabel:`Submitting…`,children:e(c)}):(0,D.jsxs)(u,{type:`button`,size:`sm`,onClick:()=>void i.next(),disabled:d,children:[d?(0,D.jsx)(s,{className:`size-3.5 animate-spin`,"aria-hidden":!0}):null,`Next`]})]})]})}function Se({name:e,cards:t}){let n=ee(e,{label:`Build type`,required:!0}),i=x(),a=i.pending?n.value:null,o=i.stepError?.message??null,l=e=>{n.setValue(e),i.next()};return(0,D.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,D.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:t.map(e=>(0,D.jsxs)(`div`,{className:c(`flex flex-col gap-2.5 rounded-lg border p-4`,n.value===e.value&&`border-primary`),children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,D.jsx)(`span`,{className:`text-sm font-bold`,children:e.title}),e.badge?(0,D.jsx)(d,{variant:`secondary`,children:e.badge}):null]}),(0,D.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:e.body}),(0,D.jsxs)(`ul`,{className:`flex flex-col gap-1 text-[13px]`,children:[e.pros.map(e=>(0,D.jsxs)(`li`,{className:`flex items-start gap-1.5`,children:[(0,D.jsx)(r,{className:`mt-0.5 size-3.5 shrink-0 text-emerald-600`,"aria-hidden":!0}),e]},e)),e.cons.map(e=>(0,D.jsxs)(`li`,{className:`flex items-start gap-1.5 text-destructive`,children:[(0,D.jsx)(`span`,{"aria-hidden":!0,className:`w-3.5 shrink-0 text-center`,children:`×`}),e]},e))]}),(0,D.jsx)(`div`,{className:`border-t pt-2.5`,children:(0,D.jsxs)(u,{type:`button`,size:`sm`,variant:e.primary?`default`:`outline`,disabled:a!==null,onClick:()=>l(e.value),"aria-label":`Select ${e.title}`,children:[a===e.value?(0,D.jsx)(s,{className:`size-3.5 animate-spin`,"aria-hidden":!0}):null,`Select →`]})})]},e.value))}),o?(0,D.jsx)(I,{title:`Error`,message:o}):null]})}function V({name:e,create:t,onCreated:n}){let i=ee(e,{label:`Intake ticket`}),{confirm:a,dialog:o}=C(),[c,l]=(0,E.useState)(!1),[d,f]=(0,E.useState)(null),p=async()=>{if(await a({title:`Check your details first`,body:`Missing or wrong details slow the project kickoff. Make sure your goals, contacts and systems are complete.`,confirmLabel:`Continue`,cancelLabel:`Cancel`})){l(!0),f(null);try{let e=await t();f({ok:!0,text:`[${e}] Thanks! A producer will reply within two working days.`});let r=Number(e);i.setValue(r),await n(r)}catch(e){f({ok:!1,text:be(e)})}finally{l(!1)}}},m=i.value;return(0,D.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,D.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Each contact gets a confirmation email. If it has not arrived yet, no problem — we follow up once we have read your request.`}),m==null?(0,D.jsxs)(u,{type:`button`,variant:`outline`,size:`sm`,className:`w-fit`,disabled:c,onClick:()=>void p(),children:[c?(0,D.jsx)(s,{className:`size-3.5 animate-spin`,"aria-hidden":!0}):null,`Create intake ticket`]}):(0,D.jsxs)(`p`,{className:`flex items-center gap-1.5 text-[13px] font-medium`,children:[`Request created. Ticket ID: #`,m,(0,D.jsx)(r,{className:`size-4 text-emerald-600`,"aria-hidden":!0})]}),d?d.ok?(0,D.jsxs)(`p`,{className:`rounded-md border border-emerald-600/30 bg-emerald-500/5 px-2.5 py-1.5 text-[13px]`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Ticket created.`}),` `,d.text]}):(0,D.jsx)(I,{title:`Error`,message:d.text}):null,o]})}var Ce={system:``,accountRef:``},H=`Pick at least one system and give a valid account reference`,we=/^(?!None$).{6,}$/,U=`Please fill in this field`,Te=`Add at least one contact`,Ee=e=>({value:e.system,label:e.name}),De=A.filter(e=>!de.includes(e.system)).map(Ee),Oe=[...A,...j].map(Ee),ke=Object.fromEntries([...A,...j].map(e=>[e.system,pe(e)])),{c:W,e:G}=h(),Ae=h(),je=G.filter(G.if(W.eq(`buildType`,`custom`),G.lookup(`customOptions`),G.lookup(`templateOptions`)),e=>e.c.or(e.c.eq(`value`,e.ref(`.system`)),e.c.notIn(`value`,G.map(`/systems`,e=>e.ref(`system`))))),Me=m()(()=>({fields:[],whenHidden:`keep`,data:{templateOptions:De,customOptions:Oe,defaultRefs:ke},effects:[{on:[`systems.*.system`],do:[{set:`.accountRef`,to:G.lookup(`defaultRefs`,G.ref(`.system`))}]},{on:[`buildType`],when:W.and(W.eq(`buildType`,`custom`),W.none(`systems`,e=>e.c.eq(`system`,`CMS`))),do:[{set:`systems`,to:G.op(`merge`,G.filter(`systems`,e=>e.c.filled(`system`)),G.lit([{system:`CMS`,accountRef:ke.CMS??``}]))}]}]})),Ne=[{value:`template`,title:`Template build`,badge:`Suggested`,primary:!0,body:`Start from one of our tested site templates, adapted to your brand. The fastest way to launch with a solid, maintained base.`,pros:[`Kickoff and review rounds included`,`Built on our maintained templates`,`Edit every page from one dashboard`,`Updates and fixes applied for you`,`Full support included after launch`],cons:[`Multiple languages not supported`]},{value:`custom`,title:`Custom build`,body:`A site designed and built from scratch on a headless content system. Pick this only when a template cannot cover what you need.`,pros:[`Kickoff and review rounds included`,`Your own design system`,`Flexible content model`,`Multiple languages available`],cons:[`Longer timeline`,`Paid support plan needed after launch`]}],Pe=[{value:`yes`,label:`Yes`},{value:`no`,label:`No`}],Fe=k.map(e=>({value:e.id,label:e.displayName})),Ie={name:``,email:``,teamRoleId:``,canReceiveEmail:!1},K=F(`pr_build_01`,`Website Build`),q=F(`pr_audit_01`,`Site Audit`);function Le(e){let t=e.request,n=(t.edges.systems??[]).map(e=>({system:e.system??``,accountRef:e.accountRef??``}));return{buildType:t.customBuild===null||t.customBuild===void 0?``:t.customBuild?`custom`:`template`,systems:n.length?n:[Ce],contactIds:t.contactIds?.length?t.contactIds:e.contacts.map(e=>e.id),notes:t.notes??``,a11y:`no`,a11yNotes:``,ticketId:t.ticketId??null}}function J(e,t){return{notes:e.notes,contactIds:e.contactIds,ticketId:e.ticketId,step:t,accessibilityRequired:e.a11y===`yes`,accessibilityNotes:e.a11yNotes}}async function Re(e,t){let n=K.snapshot().request;if(e===`buildType`){await K.projectRequestUpdate({step:1,contactIds:n.contactIds,customBuild:t.buildType===`custom`,notes:n.notes,ticketId:n.ticketId,accessibilityRequired:n.accessibilityRequired??!1});return}await K.projectSystemsReplace(t.systems.map(e=>({system:e.system,accountRef:e.accountRef}))),await K.projectRequestUpdate(J(t,1))}async function ze(e){try{return{id:(await K.projectRequestUpdate(J(e,100))).projectRequestUpdate.id}}catch(e){throw b(e)??e}}async function Be(e,t){let n=e.snapshot().contacts.filter(e=>t.contactIds.includes(e.id));return(await e.ticketCreate({primaryContactId:ye(n),kind:le.Project,message:t.notes,contactIds:n.map(e=>e.id),projectRequestId:e.snapshot().request.id})).ticketCreate.ticketRef??``}function Ve({system:e}){if(typeof e!=`string`||e===``||e===`NOTSURE`)return null;let t=me[e]??`${e} reference`;return(0,D.jsxs)(`details`,{className:`text-[13px]`,children:[(0,D.jsx)(`summary`,{className:`cursor-pointer text-primary`,children:`How to find`}),(0,D.jsxs)(`p`,{className:`mt-1 rounded-md border bg-muted/30 px-2 py-1.5`,children:[`How to find your `,t,`: open that tool's account settings, copy the `,t,` and paste it in the row.`]})]})}function He({contact:e,server:t}){let[n,r]=(0,E.useState)(!1);return e?(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,D.jsx)(`span`,{className:`text-muted-foreground`,children:e.email}),(0,D.jsx)(d,{variant:`outline`,children:e.edges.teamRole.displayName}),e.canReceiveEmail?null:(0,D.jsx)(`span`,{className:`text-muted-foreground`,children:`(no emails)`}),(0,D.jsx)(u,{type:`button`,size:`sm`,variant:`ghost`,onClick:()=>r(!0),children:`Edit`}),(0,D.jsx)(ie,{title:`Edit project contact`,open:n,onOpenChange:r,form:{defaultValues:{name:e.name,email:e.email,teamRoleId:e.edges.teamRole.id,canReceiveEmail:e.canReceiveEmail}},onSubmit:n=>t.contactUpdate(e.id,n),submitLabel:`Save changes`,children:(0,D.jsx)(Ue,{})})]}):null}function Ue(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(_,{name:`name`,label:`Full name`,required:!0,requiredMessage:`Name is required`}),(0,D.jsx)(_,{name:`email`,label:`Email`,type:`email`,required:!0,requiredMessage:`Email is required`}),(0,D.jsx)(y,{name:`teamRoleId`,label:`Role`,options:Fe,required:!0,requiredMessage:`Role is required`}),(0,D.jsx)(oe,{name:`canReceiveEmail`,label:`Can receive email`})]})}function We({server:e,contacts:t}){let n=t.map(e=>({value:e.id,label:e.name})),{confirm:r,dialog:i}=C(),a=ae({label:`Add contact`,title:`Add project contact`,form:{defaultValues:Ie},fields:(0,D.jsx)(Ue,{}),submitLabel:`Save changes`,onCreate:async t=>{let n=await e.contactCreate(t);return{value:n.contactCreate.id,label:n.contactCreate.name}}});return(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,D.jsx)(`h3`,{className:`text-sm font-semibold`,children:`Project contacts`}),(0,D.jsxs)(w,{name:`contactIds`,label:`Contacts`,rowLabel:`Contact`,min:1,minMessage:Te,newRow:``,layout:`stack`,children:[(0,D.jsx)(y,{name:`.`,label:`Contact`,options:n,required:!0,requiredMessage:Te,createRelated:a}),(0,D.jsx)(T,{name:`.`,label:``,tone:`inline`,render:n=>(0,D.jsx)(He,{contact:t.find(e=>e.id===n),server:e})}),(0,D.jsx)(w.RowActions,{remove:!0,confirmRemove:()=>r({title:`Remove project contact`,body:`Are you sure? This contact will no longer get project updates.`,confirmLabel:`Remove`,destructive:!0})})]}),(0,D.jsx)(w.Add,{to:`contactIds`,children:`Add contact`}),i]})}function Y({title:e,children:t}){return(0,D.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,D.jsx)(`h3`,{className:`text-sm font-semibold`,children:e}),(0,D.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:t})]})}function Ge({name:e}){return(0,D.jsxs)(`div`,{className:`mb-3 flex items-center gap-2`,children:[(0,D.jsx)(`h2`,{className:`text-base font-semibold`,children:e}),(0,D.jsx)(T,{name:`buildType`,label:``,tone:`inline`,render:e=>(0,D.jsx)(d,{variant:`secondary`,children:e===`custom`?`Custom build`:`Template build`})})]})}function Ke({state:e,side:t}){return(0,D.jsxs)(Q,{children:[(0,D.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-lg border p-4 text-[13px]`,children:[(0,D.jsxs)(`p`,{className:`rounded-md border border-emerald-600/30 bg-emerald-500/5 px-2.5 py-1.5`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Project request sent`}),` We have your request and will be in touch soon.`]}),(0,D.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Server step 100, status `,e.request.status,`, ticket #`,e.request.ticketId??`—`,`. A real app would open the request here.`]})]}),t]})}function qe({state:e,server:n,failNext:r,onFailNext:i,onReload:a,onReset:o}){return(0,D.jsx)(tt,{title:`Server`,meta:`projectRequestGet`,children:(0,D.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,D.jsxs)(`p`,{className:`tabular-nums`,children:[`step `,e.request.step??0,` · customBuild `,String(e.request.customBuild??null),` · ticket `,e.request.ticketId??`—`,` · contacts `,e.contacts.length]}),(0,D.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsx)(`span`,{children:`Next call answers a GraphQL error`}),(0,D.jsx)(t,{checked:r,onCheckedChange:e=>{i(e),n.failNextCall(e)},"aria-label":`Next call answers a GraphQL error`})]}),(0,D.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,D.jsx)(u,{type:`button`,size:`sm`,variant:`outline`,onClick:a,children:`Reload from server`}),(0,D.jsx)(u,{type:`button`,size:`sm`,variant:`ghost`,onClick:o,children:`Start over`})]}),e.log.length>0?(0,D.jsx)(`ol`,{className:`max-h-56 overflow-auto rounded border bg-muted/30 p-2 font-mono text-[11px]`,children:e.log.map((e,t)=>(0,D.jsx)(`li`,{children:e},`${t}-${e}`))}):null]})})}function Je({state:e,side:t}){let n=p({defaultValues:Le(e),model:Me});return(0,D.jsxs)(Q,{children:[(0,D.jsxs)(g,{form:n,onSubmit:ze,className:`flex flex-col gap-3`,children:[(0,D.jsxs)(S,{completed:(e.request.step??0)>0?[`buildType`]:[],onStepComplete:e=>Re(e,n.getValues()),progress:(0,D.jsx)(z,{title:(0,D.jsx)(Ge,{name:e.request.edges.service.name})}),renderStep:R,nav:(0,D.jsx)(B,{gate:`ticketId`,lastLabel:e=>e?`Complete Request`:`Create Request`}),children:[(0,D.jsxs)(S.Step,{id:`buildType`,label:`Build type`,progress:!1,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,D.jsx)(`h2`,{className:`text-base font-semibold`,children:e.request.edges.service.name}),(0,D.jsx)(`a`,{className:`text-[13px] text-primary hover:underline`,href:`https://studio.example/guides/choosing-a-build`,target:`_blank`,rel:`noreferrer`,children:`How to choose a build type`})]}),(0,D.jsx)(Se,{name:`buildType`,cards:Ne})]}),(0,D.jsxs)(S.Step,{id:`details`,label:`Tell us about the project`,children:[(0,D.jsx)(Y,{title:`Systems to connect`,children:`Choose the tools the new site should connect to. Pick “Not sure” if you want us to help you decide.`}),(0,D.jsxs)(w,{name:`systems`,label:`Systems`,rowLabel:`System`,min:1,minMessage:H,newRow:{system:``,accountRef:``},layout:`stack`,children:[(0,D.jsxs)(`div`,{className:`grid grid-cols-1 items-start gap-2 sm:grid-cols-2`,children:[(0,D.jsx)(y,{name:`.system`,label:`System`,placeholder:`Select a system`,options:je,required:!0,requiredMessage:H}),(0,D.jsx)(_,{name:`.accountRef`,label:`Account reference`,placeholder:`Enter the reference`,dir:`ltr`,disabledIf:W.eq(`.system`,ue),whenDisabled:`send`,rules:[Ae.v.pattern(we,H)]})]}),(0,D.jsx)(T,{name:`.system`,label:``,tone:`inline`,render:e=>(0,D.jsx)(Ve,{system:e})}),(0,D.jsx)(ne,{if:W.not(W.and(W.eq(`.system`,`CMS`),W.eq(`buildType`,`custom`))),children:(0,D.jsx)(w.RowActions,{remove:!0})})]}),(0,D.jsx)(w.Add,{to:`systems`,children:`Add system`}),(0,D.jsx)(We,{server:K,contacts:e.contacts}),(0,D.jsx)(Y,{title:`Project notes`,children:`Tell us about your goals, deadlines, current site and anything else we should know.`}),(0,D.jsxs)(`details`,{className:`rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,children:[(0,D.jsx)(`summary`,{className:`cursor-pointer font-medium`,children:`What helps us scope the project`}),(0,D.jsx)(`p`,{className:`mt-1`,children:`Mention these in your notes if they apply:`}),(0,D.jsxs)(`ul`,{className:`list-disc ps-5`,children:[(0,D.jsx)(`li`,{children:`Is there a launch date or event the site must be ready for?`}),(0,D.jsx)(`li`,{children:`Will content move over from an existing site, and roughly how many pages?`})]})]}),(0,D.jsx)(v,{name:`notes`,label:`Notes`,placeholder:`Type your message...`,required:!0,requiredMessage:U,rows:4}),(0,D.jsx)(se,{name:`a11y`,label:`Does the site need to meet an accessibility standard?`,options:Pe}),(0,D.jsx)(v,{name:`a11yNotes`,label:`Which standard or audit (e.g. a conformance level, an upcoming review)?`,placeholder:`Type the details...`,visibleIf:W.eq(`a11y`,`yes`),required:!0,requiredMessage:U,rows:4})]}),(0,D.jsx)(S.Step,{id:`ticket`,label:`Create an intake ticket`,children:(0,D.jsx)(V,{name:`ticketId`,create:()=>Be(K,n.getValues()),onCreated:e=>K.projectRequestUpdate({...J(n.getValues(),2),ticketId:e})})})]}),(0,D.jsx)(g.Status,{className:`text-sm`,error:e=>(0,D.jsx)(I,{title:`Request not submitted`,message:e.message.charAt(0).toUpperCase()+e.message.slice(1)})})]}),(0,D.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[t,(0,D.jsx)(Z,{store:n})]})]})}var Ye=m()(()=>({fields:[]})),Xe=[`Website admin`,`Domain registrar`,`Hosting dashboard`,`Design files (if any)`],Ze=[`request`,`access`,`ticket`];function Qe(e){let t=e.request;return{contactIds:t.contactIds?.length?t.contactIds:e.contacts.map(e=>e.id),notes:t.notes??``,ticketId:t.ticketId??null}}var X=(e,t)=>({notes:e.notes,contactIds:e.contactIds,ticketId:e.ticketId,step:t,accessibilityRequired:!1});function $e({state:e,side:t,onExit:n}){let r=p({defaultValues:Qe(e),model:Ye});return(0,D.jsxs)(Q,{children:[(0,D.jsxs)(g,{form:r,className:`flex flex-col gap-3`,onSubmit:async e=>{try{await q.projectRequestUpdate(X(e,100))}catch(e){throw b(e)??e}},children:[(0,D.jsxs)(S,{onStepComplete:async e=>{await q.projectRequestUpdate(X(r.getValues(),Ze.findIndex(t=>t===e)+1))},progress:(0,D.jsx)(z,{title:(0,D.jsx)(`h2`,{className:`mb-3 text-base font-semibold`,children:e.request.edges.service.name})}),renderStep:R,nav:(0,D.jsx)(B,{gate:`ticketId`,onExit:n,lastLabel:e=>e?`Complete Request`:`Create Request`}),children:[(0,D.jsxs)(S.Step,{id:`request`,label:`Request a ${e.request.edges.service.name}`,children:[(0,D.jsx)(Y,{title:`What should we look at?`,children:`Share the pages, problems or goals the audit should focus on.`}),(0,D.jsx)(v,{name:`notes`,label:`Notes`,placeholder:`Type your message...`,required:!0,requiredMessage:U,rows:4}),(0,D.jsx)(We,{server:q,contacts:e.contacts})]}),(0,D.jsxs)(S.Step,{id:`access`,label:`Share access with the studio`,children:[(0,D.jsxs)(`p`,{className:`rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,children:[`We need read access to run the audit. Once this request and its ticket exist, open `,(0,D.jsx)(`strong`,{children:`Account › Team access`}),` to invite the studio to each tool.`]}),(0,D.jsx)(`ul`,{className:`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium`,children:Xe.map(e=>(0,D.jsx)(`li`,{children:e},e))})]}),(0,D.jsx)(S.Step,{id:`ticket`,label:`Create an intake ticket`,children:(0,D.jsx)(V,{name:`ticketId`,create:()=>Be(q,r.getValues()),onCreated:e=>q.projectRequestUpdate({...X(r.getValues(),3),ticketId:e})})})]}),(0,D.jsx)(g.Status,{className:`text-sm`,error:e=>(0,D.jsx)(I,{title:`Request not submitted`,message:e.message.charAt(0).toUpperCase()+e.message.slice(1)})})]}),(0,D.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[t,(0,D.jsx)(Z,{store:r})]})]})}function et(e){let t=(0,E.useSyncExternalStore)(e.subscribe,e.snapshot,e.snapshot),[n,r]=(0,E.useState)(0),[i,a]=(0,E.useState)(!1),o=()=>r(e=>e+1);return{state:t,loads:n,panel:(0,D.jsx)(qe,{state:t,server:e,failNext:i,onFailNext:a,onReload:o,onReset:()=>{e.reset(),a(!1),o()}})}}function tt({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,D.jsxs)(`aside`,{className:c(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,D.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function nt({value:e,maxHeight:t=`max-h-[420px]`}){return(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:c(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function Z({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=re(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),f);return(0,D.jsxs)(tt,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,D.jsx)(nt,{value:i}),s.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function Q({children:e,stack:t=!1}){return(0,D.jsx)(`div`,{className:c(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:E.Children.toArray(e)})}function rt(){let e=et(K);return(0,D.jsx)(D.Fragment,{children:e.state.request.step===100?(0,D.jsx)(Ke,{state:e.state,side:e.panel}):(0,D.jsx)(Je,{state:e.state,side:e.panel},e.loads)})}function it(){let e=et(q),[t,n]=(0,E.useState)(!1);return(0,D.jsx)(D.Fragment,{children:e.state.request.step===100?(0,D.jsx)(Ke,{state:e.state,side:e.panel}):(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[t?(0,D.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Go Back → a real app returns to the services list.`}):null,(0,D.jsx)($e,{state:e.state,side:e.panel,onExit:()=>n(!0)},e.loads)]})})}var $=`import { useState, useSyncExternalStore, type ReactNode, Children } from "react"
import { Check, Loader2 } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Button, buttonVariants } from "@kitora/ui/button"
import { Switch } from "@kitora/ui/switch"
import { defineForm, kit, mapErrors, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, useForm, When, Wizard, useField, useValue, useWizard, type RenderWizardStep, type WizardApi, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { CheckboxField, DisplayField, FieldArray, FormDialog, RadioGroupField, relatedForm, SelectField, TextareaField, TextField, useConfirm, type SelectOption } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- the simulated server (stub: replace with your API)
/** \`ProjectRequestInput\`. \`step\` 100 = submitted. */
export interface ProjectRequestInput {
  contactIds?: string[] | null
  accessibilityRequired: boolean
  accessibilityNotes?: string | null
  customBuild?: boolean | null
  notes?: string | null
  ticketId?: number | null
  step: number
}

/** \`ProjectSystemInput\`: one row of the systems-to-connect selection. */
export interface ProjectSystemInput {
  system: string
  accountRef?: string | null
}

/** A connected system as the request query selects it. */
export interface ProjectSystem {
  system?: string | null
  accountRef?: string | null
  projectRequestId: string
}

/** The fields of \`projectRequestGet\` / \`projectRequestUpdate\` the pages read. */
export interface ProjectRequest {
  id: string
  serviceId: string
  status: string
  notes?: string | null
  contactIds?: string[] | null
  ticketId?: number | null
  step?: number | null
  customBuild?: boolean | null
  accessibilityRequired?: boolean | null
  accessibilityNotes?: string | null
  edges: {
    service: { id: string; name: string; status: string; slug: string }
    systems?: ProjectSystem[] | null
  }
}

/** \`TicketKind\`. */
export const TICKET_KINDS = { Project: "PROJECT", Support: "SUPPORT" } as const

export type TicketKind = (typeof TICKET_KINDS)[keyof typeof TICKET_KINDS]

/** \`TicketCreateInput\`. */
export interface TicketCreateInput {
  contactIds?: string[] | null
  message: string
  primaryContactId: string
  projectRequestId?: string | null
  kind: TicketKind
}

/** \`TicketCreateResponse\`: the ref is nullable. */
export interface TicketCreateResponse {
  ticketRef?: string | null
}

/** \`Contact\` as \`contactCreate\` selects it. */
export interface Contact {
  id: string
  name: string
  email: string
  canReceiveEmail: boolean
  edges: { teamRole: { id: string; name: string; displayName: string } }
}

/** \`ContactCreateInput\`: the contact dialog's four fields. */
export interface ContactCreateInput {
  name: string
  email: string
  teamRoleId: string
  canReceiveEmail: boolean
}

/** Team roles; \`owner\` decides the ticket's primary contact (\`findPrimaryContact\`). */
export const TEAM_ROLES = [
  { id: "r1", name: "owner", displayName: "Owner" },
  { id: "r2", name: "marketing", displayName: "Marketing" },
  { id: "r3", name: "engineering", displayName: "Engineering" },
] as const

/**
 * A system the new site can connect to: \`system\`, \`name\` and the account the client already
 * has (whose reference prefills the row). \`NOT_SURE\` is the "Not sure" entry the step's copy
 * tells clients to pick.
 */
export interface SystemTemplate {
  system: string
  name: string
  /** The client's existing account reference, or null when they have none on file. */
  existingRef: string | null
}

export const NOT_SURE = "NOTSURE"

/** The content system a custom build always connects (added once, not removable while custom is chosen). */
export const CMS_SYSTEM = "CMS"

/** What the system list answers in this stub. */
export const TEMPLATES: readonly SystemTemplate[] = [
  { system: "CRM", name: "CRM", existingRef: "CRM-449120" },
  { system: "BILLING", name: "Billing", existingRef: null },
  { system: CMS_SYSTEM, name: "Content system", existingRef: null },
  { system: "HELPDESK", name: "Help desk", existingRef: "HD-20931" },
  { system: "NEWSLETTER", name: "Newsletter", existingRef: null },
  { system: "BOOKING", name: "Booking calendar", existingRef: null },
  { system: "LIVECHAT", name: "Live chat", existingRef: null },
  { system: "FORMS", name: "Form builder", existingRef: null },
  { system: "SEARCH", name: "Site search", existingRef: null },
  { system: NOT_SURE, name: "Not sure", existingRef: null },
]

/** Offered only in a custom build. */
export const CUSTOM_ONLY_TEMPLATES: readonly SystemTemplate[] = [
  { system: "SSO", name: "Single sign-on", existingRef: null },
  { system: "WAREHOUSE", name: "Data warehouse", existingRef: null },
]

/** Systems the template build hides. */
export const CUSTOM_ONLY_SYSTEMS: readonly string[] = [CMS_SYSTEM, ...CUSTOM_ONLY_TEMPLATES.map((t) => t.system)]

/** What a new row's reference starts with when the client has none on file. */
const REF_PREFIX: Readonly<Record<string, string>> = { CRM: "CRM-", BILLING: "BIL-", [CMS_SYSTEM]: "CMS-" }

/** The reference a freshly chosen system gets: the existing one, else the prefix, else empty. */
export function defaultRefFor(t: SystemTemplate): string {
  return t.existingRef ?? REF_PREFIX[t.system] ?? ""
}

/** The "How to find" popup's subject per system. */
export const REF_LABEL: Readonly<Record<string, string>> = {
  [CMS_SYSTEM]: "content space ID",
  CRM: "CRM account number",
  BILLING: "billing customer ID",
  HELPDESK: "help-desk workspace ID",
  NEWSLETTER: "newsletter list ID",
  BOOKING: "booking calendar ID",
  LIVECHAT: "chat widget key",
  FORMS: "form workspace ID",
  SEARCH: "search index name",
}

/** One GraphQL error entry as a GraphQL client hands it over. */
export interface GraphQLErrorEntry {
  message: string
  path?: string[]
}

/** The thrown failure: a GraphQL client's \`ClientError\` carries the response on \`.response\`. */
export class ClientError extends Error {
  readonly response: { errors: GraphQLErrorEntry[]; data: null; status: number }
  constructor(errors: GraphQLErrorEntry[]) {
    super(errors[0]?.message ?? "GraphQL Error")
    this.name = "ClientError"
    this.response = { errors, data: null, status: 200 }
  }
}

/** What the stub server holds for one project request, plus a log of the calls it answered. */
export interface IntakeServerState {
  request: ProjectRequest
  contacts: readonly Contact[]
  ticketsCreated: number
  log: readonly string[]
}

const SERVICE = { id: "svc_build", name: "Website Build", status: "ACTIVE", slug: "website-build" }

const INITIAL_CONTACTS: readonly Contact[] = [
  { id: "c1", name: "Priya Shah", email: "priya@acme.test", canReceiveEmail: true, edges: { teamRole: TEAM_ROLES[0] } },
  { id: "c2", name: "Tom Becker", email: "tom@acme.test", canReceiveEmail: true, edges: { teamRole: TEAM_ROLES[1] } },
]

const FIRST_TICKET_REF = 7300

const LATENCY_MS = 350

const fresh = (id: string, name: string): IntakeServerState => ({
  request: { id, serviceId: SERVICE.id, status: "DRAFT", notes: null, contactIds: null, ticketId: null, step: 0, customBuild: null, accessibilityRequired: false, accessibilityNotes: null, edges: { service: { ...SERVICE, name }, systems: [] } },
  contacts: INITIAL_CONTACTS,
  ticketsCreated: 0,
  log: [],
})

/** The rejection the "next call fails" switch produces: the GraphQL envelope, an illustrative message. */
export const REJECTION: GraphQLErrorEntry = { message: "project request could not be updated, please try again", path: ["projectRequestUpdate"] }

/**
 * One project request's GraphQL API, in memory. \`projectRequestUpdate\` merges its input like a
 * partial update (absent keys keep the stored value) and returns the request;
 * \`projectSystemsReplace\` replaces the request's rows.
 */
export function createIntakeServer(id: string, serviceName: string) {
  let state = fresh(id, serviceName)
  let failNext = false
  const listeners = new Set<() => void>()
  const write = (patch: Partial<IntakeServerState>, line: string) => {
    state = { ...state, ...patch, log: [...state.log, line] }
    for (const l of listeners) l()
  }
  const fail = (op: string) => {
    failNext = false
    write({}, \`\${op} → errors[0].message\`)
    throw new ClientError([{ ...REJECTION, path: [op] }])
  }
  return {
    subscribe(l: () => void) {
      listeners.add(l)
      return () => {
        listeners.delete(l)
      }
    },
    snapshot: () => state,
    /** Make the next mutation answer with a GraphQL error (one-shot). */
    failNextCall(on: boolean) {
      failNext = on
    },
    reset() {
      failNext = false
      state = fresh(id, serviceName)
      for (const l of listeners) l()
    },
    /** \`projectRequestGet(id)\`. */
    async projectRequestGet(): Promise<{ projectRequestGet: ProjectRequest }> {
      await delay(LATENCY_MS)
      return { projectRequestGet: state.request }
    },
    /** \`projectRequestUpdate(input, id)\`: partial update; returns the request. */
    async projectRequestUpdate(input: ProjectRequestInput): Promise<{ projectRequestUpdate: ProjectRequest }> {
      await delay(LATENCY_MS)
      if (failNext) fail("projectRequestUpdate")
      const prev = state.request
      const request: ProjectRequest = {
        ...prev,
        step: input.step,
        status: input.step === 100 ? "PENDING" : prev.status,
        notes: input.notes ?? prev.notes,
        contactIds: input.contactIds ?? prev.contactIds,
        ticketId: input.ticketId ?? prev.ticketId,
        customBuild: input.customBuild ?? prev.customBuild,
        accessibilityRequired: input.accessibilityRequired,
        accessibilityNotes: input.accessibilityNotes ?? prev.accessibilityNotes,
      }
      write({ request }, \`projectRequestUpdate(step: \${input.step}\${input.customBuild === undefined || input.customBuild === null ? "" : \`, customBuild: \${input.customBuild}\`}\${input.ticketId ? \`, ticketId: \${input.ticketId}\` : ""})\`)
      return { projectRequestUpdate: request }
    },
    /** \`projectSystemsReplace(projectRequestId, input)\`. */
    async projectSystemsReplace(input: ProjectSystemInput[]): Promise<{ projectSystemsReplace: ProjectRequest }> {
      await delay(LATENCY_MS)
      if (failNext) fail("projectSystemsReplace")
      const rows = input.map((r) => ({ system: r.system, accountRef: r.accountRef ?? null, projectRequestId: id }))
      const request: ProjectRequest = { ...state.request, edges: { ...state.request.edges, systems: rows } }
      write({ request }, \`projectSystemsReplace(\${input.map((r) => r.system).join(", ")})\`)
      return { projectSystemsReplace: request }
    },
    /** \`ticketCreate(input)\`: the ticket ref the page turns into \`ticketId\` with \`Number(...)\`. */
    async ticketCreate(input: TicketCreateInput): Promise<{ ticketCreate: TicketCreateResponse }> {
      await delay(LATENCY_MS)
      if (failNext) fail("ticketCreate")
      const n = state.ticketsCreated + 1
      const ref = String(FIRST_TICKET_REF + n)
      write({ ticketsCreated: n }, \`ticketCreate(\${input.kind}, primary \${input.primaryContactId}, \${input.contactIds?.length ?? 0} contacts) → \${ref}\`)
      return { ticketCreate: { ticketRef: ref } }
    },
    /** \`contactCreate(input)\`. */
    async contactCreate(input: ContactCreateInput): Promise<{ contactCreate: Contact }> {
      await delay(LATENCY_MS)
      if (failNext) fail("contactCreate")
      const role = TEAM_ROLES.find((r) => r.id === input.teamRoleId) ?? TEAM_ROLES[1]
      const contact: Contact = { id: \`c\${state.contacts.length + 1}\`, name: input.name, email: input.email, canReceiveEmail: input.canReceiveEmail, edges: { teamRole: role } }
      write({ contacts: [...state.contacts, contact] }, \`contactCreate(\${input.email}) → \${contact.id}\`)
      return { contactCreate: contact }
    },
    /** \`contactUpdate(id, input)\`. */
    async contactUpdate(contactId: string, input: ContactCreateInput): Promise<{ contactUpdate: Contact }> {
      await delay(LATENCY_MS)
      if (failNext) fail("contactUpdate")
      const role = TEAM_ROLES.find((r) => r.id === input.teamRoleId) ?? TEAM_ROLES[1]
      const contacts = state.contacts.map((c) => (c.id === contactId ? { ...c, name: input.name, email: input.email, canReceiveEmail: input.canReceiveEmail, edges: { teamRole: role } } : c))
      const updated = contacts.find((c) => c.id === contactId) ?? contacts[0]
      write({ contacts }, \`contactUpdate(\${contactId})\`)
      return { contactUpdate: updated }
    },
  }
}

export type IntakeServer = ReturnType<typeof createIntakeServer>

/** The owner, else the first contact; "" when none. */
export function findPrimaryContact(contacts: readonly Contact[]): string {
  return (contacts.find((c) => c.edges.teamRole.name === "owner") ?? contacts[0])?.id ?? ""
}

// ---- chrome
/** An error toast, inline: a title plus \`errors[0].message\` with a capital first letter. */
export function ErrorToast({ title, message }: { title: string; message: string }) {
  return (
    <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-[13px]">
      <span className="font-medium text-destructive">{title}</span> <span>{message}</span>
    </p>
  )
}

/** A thrown GraphQL failure → the toast body: the default \`mapErrors\` source reads \`response.errors[0].message\`. */
export function toastMessage(err: unknown): string {
  const raw = mapErrors(err)?.message ?? ""
  return raw.charAt(0).toUpperCase() + raw.slice(1)
}

// ── the accordion ────────────────────────────────────────────────────

/** One accordion header: a round marker (checked when done, ringed when current) + the task title. */
function TaskHeader({ label, state }: { label: string; state: "done" | "current" | "todo" }) {
  return (
    <div aria-current={state === "current" ? "step" : undefined} className={cn("flex items-center gap-2 border-y bg-muted/40 px-3 py-2 text-sm", state === "todo" && "text-muted-foreground")}>
      <span
        className={cn(
          "grid size-4 shrink-0 place-items-center rounded-full border",
          state === "done" && "border-emerald-600 bg-emerald-600 text-white",
          state === "current" && "border-primary border-dashed",
        )}
      >
        {state === "done" ? <Check className="size-3" aria-hidden /> : null}
      </span>
      <span className="font-semibold">{label}</span>
      {state === "done" ? <span className="sr-only">(completed)</span> : null}
    </div>
  )
}

/** Where the current step sits among the accordion tasks (the progress steps); -1 on a \`progress={false}\` page. */
function currentTask(w: WizardApi): number {
  return w.progressSteps.findIndex((s) => s.id === w.current?.id)
}

/**
 * Wizard \`renderStep\`: each task's header with its body under it, in step order, so
 * the done and current headers sit above the open body and the later ones below it.
 * State is by POSITION (before the current task = done), as the pages draw it: a task
 * passed and then returned past with Back shows as todo again. On a page outside the
 * tasks (\`progress={false}\`, never passed here) no header shows: only the body.
 */
export const accordionStep: RenderWizardStep = (step, body, _state, w) => {
  const at = currentTask(w)
  const i = w.progressSteps.findIndex((s) => s.id === step.id)
  // \`body\` keeps the same slot on every call (the header slot only empties): a changed
  // shape would remount the step's fields when the wizard leaves the choice page
  return (
    <>
      {at < 0 ? null : <TaskHeader label={step.label} state={i < at ? "done" : i === at ? "current" : "todo"} />}
      {body}
    </>
  )
}

/**
 * Wizard \`progress\` slot: \`title\` (the page title + its badge), then "{n} of {total}
 * tasks completed" + a bar. Renders nothing on a \`progress={false}\` page (the choice
 * page is its own page).
 */
export function AccordionProgress({ title }: { title?: ReactNode }) {
  const w = useWizard()
  const at = currentTask(w)
  if (at < 0) return null
  const tasks = w.progressSteps.length
  // an empty first task still shows a sliver (0.2 of one task)
  const progress = ((at === 0 ? 0.2 : at) / tasks) * 100
  return (
    <div className="flex flex-col">
      {title}
      <div className="mb-3 flex items-center gap-2 text-[13px]">
        <span className="tabular-nums">
          {at} of {tasks} tasks completed
        </span>
        <span className="h-1.5 w-1/5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label="Tasks completed">
          <span className="block h-full rounded-full bg-emerald-600" style={{ width: \`\${progress}%\` }} />
        </span>
      </div>
    </div>
  )
}

export interface AccordionNavProps {
  /** Primary button text on the last task: \`(ticketCreated) => …\` ("Create Request" / "Complete Request"). */
  lastLabel: (ticketCreated: boolean) => ReactNode
  /** The value that must be set before the last task can finish (the ticket id). */
  gate: string
  /** Title of the error toast when a step save fails (default "Error"). */
  stepErrorTitle?: string
  /** Go Back on the first task, when it leaves the wizard (the audit page returns to the services list). */
  onExit?: () => void
}

/**
 * Wizard \`nav\` slot, under the last task header: the step-save error, then Go Back +
 * the primary button. Next runs the wizard's \`next()\` (validate → \`onStepComplete\` =
 * the step's mutations), whose pending state and failure the wizard reports
 * (\`useWizard().pending\` / \`stepError\`). Renders nothing on a \`progress={false}\` page.
 */
export function AccordionNav({ lastLabel, gate, stepErrorTitle = "Error", onExit }: AccordionNavProps) {
  const w = useWizard()
  const gateValue = useValue<unknown>(gate)
  const at = currentTask(w)
  if (at < 0) return null
  const ticketCreated = gateValue !== null && gateValue !== undefined && gateValue !== ""
  // the wizard owns the step commit's pending state and failure (gap A)
  const pending = w.pending
  const error = w.stepError?.message ?? null
  const firstTask = at === 0
  return (
    <div className="flex flex-col">
      {error ? (
        <div className="mt-3">
          <ErrorToast title={stepErrorTitle} message={error} />
        </div>
      ) : null}
      <div className="mt-3 flex justify-end gap-2 border-t pt-3">
        <Button type="button" variant="outline" size="sm" onClick={firstTask && onExit ? onExit : w.back} disabled={pending || (w.isFirst && !onExit)}>
          Go Back
        </Button>
        {w.isLast ? (
          <Form.Submit className={buttonVariants({ size: "sm" })} disabled={!ticketCreated} pendingLabel="Submitting…">
            {lastLabel(ticketCreated)}
          </Form.Submit>
        ) : (
          <Button type="button" size="sm" onClick={() => void w.next()} disabled={pending}>
            {pending ? <Loader2 className="size-3.5 animate-spin" aria-hidden /> : null}
            Next
          </Button>
        )}
      </div>
    </div>
  )
}

// ── the template-vs-custom choice page ───────────────────────────────

export interface ChoiceCard {
  value: string
  title: string
  badge?: string
  body: ReactNode
  pros: readonly string[]
  cons: readonly string[]
  primary?: boolean
}

/**
 * The build-type page: two cards, each with its own Select button that writes the
 * choice AND commits the step — the wizard's \`next()\`, whose \`onStepComplete\` is the
 * \`projectRequestUpdate(step: 1, customBuild)\` call.
 */
export function ChoiceCardsField({ name, cards }: { name: string; cards: readonly ChoiceCard[] }) {
  const f = useField<string>(name, { label: "Build type", required: true })
  const w = useWizard()
  // the wizard owns the commit's pending state and failure (gap A); the spinner goes on the chosen card
  const pending = w.pending ? f.value : null
  const error = w.stepError?.message ?? null
  const choose = (value: string) => {
    f.setValue(value)
    void w.next()
  }
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {cards.map((card) => (
          <div key={card.value} className={cn("flex flex-col gap-2.5 rounded-lg border p-4", f.value === card.value && "border-primary")}>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">{card.title}</span>
              {card.badge ? <Badge variant="secondary">{card.badge}</Badge> : null}
            </div>
            <p className="text-[13px] text-muted-foreground">{card.body}</p>
            <ul className="flex flex-col gap-1 text-[13px]">
              {card.pros.map((p) => (
                <li key={p} className="flex items-start gap-1.5">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-600" aria-hidden />
                  {p}
                </li>
              ))}
              {card.cons.map((p) => (
                <li key={p} className="flex items-start gap-1.5 text-destructive">
                  <span aria-hidden className="w-3.5 shrink-0 text-center">
                    ×
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="border-t pt-2.5">
              <Button type="button" size="sm" variant={card.primary ? "default" : "outline"} disabled={pending !== null} onClick={() => choose(card.value)} aria-label={\`Select \${card.title}\`}>
                {pending === card.value ? <Loader2 className="size-3.5 animate-spin" aria-hidden /> : null}
                Select →
              </Button>
            </div>
          </div>
        ))}
      </div>
      {error ? <ErrorToast title="Error" message={error} /> : null}
    </div>
  )
}

// ── the intake-ticket task ───────────────────────────────────────────

export interface TicketFieldProps {
  name: string
  /** \`ticketCreate\` + the page's callback: resolves with the ticket ref (a numeric string). */
  create: () => Promise<string>
  /** The page's step save (\`ticketId\`, \`step\`) after the ticket exists. */
  onCreated: (ticketId: number) => Promise<unknown>
}

/**
 * The ticket task: "Create intake ticket" asks "Check your details first", calls
 * \`ticketCreate\`, stores \`Number(ticketRef)\` as the field value and saves the step.
 * Once set, it shows "Request created. Ticket ID: #…".
 */
export function TicketField({ name, create, onCreated }: TicketFieldProps) {
  const f = useField<number | null>(name, { label: "Intake ticket" })
  const { confirm, dialog } = useConfirm()
  const [pending, setPending] = useState(false)
  const [notice, setNotice] = useState<{ ok: boolean; text: string } | null>(null)
  const run = async () => {
    const go = await confirm({
      title: "Check your details first",
      body: "Missing or wrong details slow the project kickoff. Make sure your goals, contacts and systems are complete.",
      confirmLabel: "Continue",
      cancelLabel: "Cancel",
    })
    if (!go) return
    setPending(true)
    setNotice(null)
    try {
      const ref = await create()
      setNotice({ ok: true, text: \`[\${ref}] Thanks! A producer will reply within two working days.\` })
      const id = Number(ref)
      f.setValue(id)
      await onCreated(id)
    } catch (err) {
      setNotice({ ok: false, text: toastMessage(err) })
    } finally {
      setPending(false)
    }
  }
  const ticketId = f.value
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[13px] text-muted-foreground">Each contact gets a confirmation email. If it has not arrived yet, no problem — we follow up once we have read your request.</p>
      {ticketId === null || ticketId === undefined ? (
        <Button type="button" variant="outline" size="sm" className="w-fit" disabled={pending} onClick={() => void run()}>
          {pending ? <Loader2 className="size-3.5 animate-spin" aria-hidden /> : null}
          Create intake ticket
        </Button>
      ) : (
        <p className="flex items-center gap-1.5 text-[13px] font-medium">
          Request created. Ticket ID: #{ticketId}
          <Check className="size-4 text-emerald-600" aria-hidden />
        </p>
      )}
      {notice ? notice.ok ? <p className="rounded-md border border-emerald-600/30 bg-emerald-500/5 px-2.5 py-1.5 text-[13px]"><span className="font-medium">Ticket created.</span> {notice.text}</p> : <ErrorToast title="Error" message={notice.text} /> : null}
      {dialog}
    </div>
  )
}

// ---- the page
// A real-world flow: an invented web studio's project-intake pages. Example 1 is the build request:
// a template-vs-custom choice page whose Select commits, then two accordion tasks — systems to
// connect (select + reference rows), contacts (create in a dialog), notes, an accessibility question
// with a conditional note — and an intake ticket. Example 2 is a shorter site-audit request: three
// accordion tasks (request, share access, ticket). The stub server answers concrete GraphQL shapes;
// its errors travel in a GraphQL client's envelope and show as \`errors[0].message\` under an error title.

// ── example 1: the build request ─────────────────────────────────────

/** \`ProjectSystemInput\` as the row edits it (\`accountRef\` never null in the UI). */
interface SystemRow {
  system: string
  accountRef: string
}

interface BuildValues {
  /** The build-type choice; "" until chosen. Sent as \`customBuild\` (true for "custom"). */
  buildType: string
  systems: SystemRow[]
  contactIds: string[]
  notes: string
  /** The Yes/No radios; sent as \`accessibilityRequired\` (true for "yes"). */
  a11y: string
  a11yNotes: string
  ticketId: number | null
}

const EMPTY_ROW: SystemRow = { system: "", accountRef: "" }

/** One message, shown for an empty selection and for a reference that is "None" or 5 characters or fewer. */
const SYSTEMS_MESSAGE = "Pick at least one system and give a valid account reference"

/** A reference other than "None", longer than 5 characters. */
const PROPER_REF = /^(?!None$).{6,}$/

const FILL_MESSAGE = "Please fill in this field"

const CONTACTS_MESSAGE = "Add at least one contact"

const toOption = (t: { system: string; name: string }) => ({ value: t.system, label: t.name })

/** The select's options per build type: template hides the content system, SSO and warehouse; custom adds SSO and warehouse. */
const TEMPLATE_OPTIONS = TEMPLATES.filter((t) => !CUSTOM_ONLY_SYSTEMS.includes(t.system)).map(toOption)

const CUSTOM_OPTIONS = [...TEMPLATES, ...CUSTOM_ONLY_TEMPLATES].map(toOption)

/** System → the reference a new row starts with (the existing one, else CRM- / BIL- / CMS-, else empty). */
const DEFAULT_REFS = Object.fromEntries([...TEMPLATES, ...CUSTOM_ONLY_TEMPLATES].map((t) => [t.system, defaultRefFor(t)]))

const { c, e } = kit<BuildValues>()

const rk = kit<SystemRow>()

/**
 * A row's system options: the build type's list minus the systems other rows picked
 * (its own pick stays), so a system cannot be chosen twice. \`e.filter\` over an
 * expression; \`.system\` is the enclosing row, \`/systems\` the root array.
 */
const SYSTEM_OPTIONS = e.filter(e.if(c.eq("buildType", "custom"), e.lookup("customOptions"), e.lookup("templateOptions")), (o) =>
  o.c.or(o.c.eq("value", o.ref(".system")), o.c.notIn("value", e.map("/systems", (x) => x.ref("system")))),
)

const model = defineForm<BuildValues>()(() => ({
  fields: [],
  // the page keeps a hidden accessibility note and still sends it
  whenHidden: "keep",
  data: { templateOptions: TEMPLATE_OPTIONS, customOptions: CUSTOM_OPTIONS, defaultRefs: DEFAULT_REFS },
  effects: [
    // picking a system replaces the row's reference with that system's default
    { on: ["systems.*.system"], do: [{ set: ".accountRef", to: e.lookup("defaultRefs", e.ref(".system")) }] },
    // custom build: a content-system row is added once (it cannot be removed while custom is chosen)
    {
      on: ["buildType"],
      when: c.and(
        c.eq("buildType", "custom"),
        c.none("systems", (r) => r.c.eq("system", CMS_SYSTEM)),
      ),
      do: [{ set: "systems", to: e.op("merge", e.filter("systems", (r) => r.c.filled("system")), e.lit([{ system: CMS_SYSTEM, accountRef: DEFAULT_REFS[CMS_SYSTEM] ?? "" }])) }],
    },
  ],
}))

const CARDS: readonly ChoiceCard[] = [
  {
    value: "template",
    title: "Template build",
    badge: "Suggested",
    primary: true,
    body: "Start from one of our tested site templates, adapted to your brand. The fastest way to launch with a solid, maintained base.",
    pros: ["Kickoff and review rounds included", "Built on our maintained templates", "Edit every page from one dashboard", "Updates and fixes applied for you", "Full support included after launch"],
    cons: ["Multiple languages not supported"],
  },
  {
    value: "custom",
    title: "Custom build",
    body: "A site designed and built from scratch on a headless content system. Pick this only when a template cannot cover what you need.",
    pros: ["Kickoff and review rounds included", "Your own design system", "Flexible content model", "Multiple languages available"],
    cons: ["Longer timeline", "Paid support plan needed after launch"],
  },
]

const YES_NO: SelectOption[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
]

const ROLE_OPTIONS: SelectOption[] = TEAM_ROLES.map((r) => ({ value: r.id, label: r.displayName }))

const EMPTY_CONTACT: ContactCreateInput = { name: "", email: "", teamRoleId: "", canReceiveEmail: false }

const buildServer = createIntakeServer("pr_build_01", "Website Build")

const auditServer = createIntakeServer("pr_audit_01", "Site Audit")

/** The values the page hydrates from \`projectRequestGet\` (notes, systems, ticket; contacts or all contacts). The accessibility answer is not hydrated. */
function buildInitial(s: IntakeServerState): BuildValues {
  const r = s.request
  const rows = (r.edges.systems ?? []).map((x) => ({ system: x.system ?? "", accountRef: x.accountRef ?? "" }))
  return {
    buildType: r.customBuild === null || r.customBuild === undefined ? "" : r.customBuild ? "custom" : "template",
    systems: rows.length ? rows : [EMPTY_ROW],
    contactIds: r.contactIds?.length ? r.contactIds : s.contacts.map((x) => x.id),
    notes: r.notes ?? "",
    a11y: "no",
    a11yNotes: "",
    ticketId: r.ticketId ?? null,
  }
}

/** The step save's input: the form's answers + the step number. \`customBuild\` is left out (undefined) after the choice page. */
function buildRequestInput(x: BuildValues, step: number): ProjectRequestInput {
  return { notes: x.notes, contactIds: x.contactIds, ticketId: x.ticketId, step, accessibilityRequired: x.a11y === "yes", accessibilityNotes: x.a11yNotes }
}

/** Step saves, as the page runs them on Next. */
async function buildStepSave(id: string, x: BuildValues): Promise<void> {
  const r = buildServer.snapshot().request
  if (id === "buildType") {
    // the choice page: the stored request's answers + the choice
    await buildServer.projectRequestUpdate({ step: 1, contactIds: r.contactIds, customBuild: x.buildType === "custom", notes: r.notes, ticketId: r.ticketId, accessibilityRequired: r.accessibilityRequired ?? false })
    return
  }
  // task 1: the system rows first, then the request
  await buildServer.projectSystemsReplace(x.systems.map((row) => ({ system: row.system, accountRef: row.accountRef })))
  await buildServer.projectRequestUpdate(buildRequestInput(x, 1))
}

/** The last button: the step-100 save; a GraphQL error becomes the form-level message (core's default source reads \`errors[0].message\`). */
async function buildSubmit(x: BuildValues): Promise<{ id: string }> {
  try {
    const res = await buildServer.projectRequestUpdate(buildRequestInput(x, 100))
    return { id: res.projectRequestUpdate.id }
  } catch (err) {
    throw mapErrors<BuildValues>(err) ?? err
  }
}

/** \`ticketCreate\` with the selected contacts and the notes as the message. */
async function createTicket(server: IntakeServer, x: { contactIds: string[]; notes: string }): Promise<string> {
  const contacts = server.snapshot().contacts.filter((ct) => x.contactIds.includes(ct.id))
  const res = await server.ticketCreate({ primaryContactId: findPrimaryContact(contacts), kind: TICKET_KINDS.Project, message: x.notes, contactIds: contacts.map((ct) => ct.id), projectRequestId: server.snapshot().request.id })
  return res.ticketCreate.ticketRef ?? ""
}

/** The "How to find" popup per system: its subject from \`REF_LABEL\`. */
function HowToFind({ system }: { system: unknown }) {
  if (typeof system !== "string" || system === "" || system === NOT_SURE) return null
  const label = REF_LABEL[system] ?? \`\${system} reference\`
  return (
    <details className="text-[13px]">
      <summary className="cursor-pointer text-primary">How to find</summary>
      <p className="mt-1 rounded-md border bg-muted/30 px-2 py-1.5">How to find your {label}: open that tool&apos;s account settings, copy the {label} and paste it in the row.</p>
    </details>
  )
}

/** A contact's card under its row: name, email, role, and Edit (\`contactUpdate\` in the contact dialog). */
function ContactCard({ contact, server }: { contact: Contact | undefined; server: IntakeServer }) {
  // demo-chrome: the edit dialog's open state
  const [open, setOpen] = useState(false)
  if (!contact) return null
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      <span className="text-muted-foreground">{contact.email}</span>
      <Badge variant="outline">{contact.edges.teamRole.displayName}</Badge>
      {contact.canReceiveEmail ? null : <span className="text-muted-foreground">(no emails)</span>}
      <Button type="button" size="sm" variant="ghost" onClick={() => setOpen(true)}>
        Edit
      </Button>
      <FormDialog<ContactCreateInput, unknown>
        title="Edit project contact"
        open={open}
        onOpenChange={setOpen}
        form={{ defaultValues: { name: contact.name, email: contact.email, teamRoleId: contact.edges.teamRole.id, canReceiveEmail: contact.canReceiveEmail } }}
        onSubmit={(input) => server.contactUpdate(contact.id, input)}
        submitLabel="Save changes"
      >
        <ContactFields />
      </FormDialog>
    </div>
  )
}

/** The contact dialog's four fields: all required but the checkbox. */
function ContactFields() {
  return (
    <>
      <TextField name="name" label="Full name" required requiredMessage="Name is required" />
      <TextField name="email" label="Email" type="email" required requiredMessage="Email is required" />
      <SelectField name="teamRoleId" label="Role" options={ROLE_OPTIONS} required requiredMessage="Role is required" />
      <CheckboxField name="canReceiveEmail" label="Can receive email" />
    </>
  )
}

/** The contacts block shared by both pages: one row per selected contact; "Add contact" creates one through the dialog and selects it. */
function ContactsBlock({ server, contacts }: { server: IntakeServer; contacts: readonly Contact[] }) {
  const options: SelectOption[] = contacts.map((ct) => ({ value: ct.id, label: ct.name }))
  const { confirm, dialog } = useConfirm()
  const addContact = relatedForm<ContactCreateInput>({
    label: "Add contact",
    title: "Add project contact",
    form: { defaultValues: EMPTY_CONTACT },
    fields: <ContactFields />,
    submitLabel: "Save changes",
    onCreate: async (input) => {
      const res = await server.contactCreate(input)
      return { value: res.contactCreate.id, label: res.contactCreate.name }
    },
  })
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">Project contacts</h3>
      <FieldArray name="contactIds" label="Contacts" rowLabel="Contact" min={1} minMessage={CONTACTS_MESSAGE} newRow="" layout="stack">
        <SelectField name="." label="Contact" options={options} required requiredMessage={CONTACTS_MESSAGE} createRelated={addContact} />
        <DisplayField name="." label="" tone="inline" render={(id) => <ContactCard contact={contacts.find((ct) => ct.id === id)} server={server} />} />
        {/* the row goes only on confirm (N5) */}
        <FieldArray.RowActions remove confirmRemove={() => confirm({ title: "Remove project contact", body: "Are you sure? This contact will no longer get project updates.", confirmLabel: "Remove", destructive: true })} />
      </FieldArray>
      <FieldArray.Add to="contactIds">Add contact</FieldArray.Add>
      {dialog}
    </div>
  )
}

/** Section heading inside a task (title + muted intro). */
function TaskIntro({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-[13px] text-muted-foreground">{children}</p>
    </div>
  )
}

/** The page title + its build-type badge. */
function BuildTitle({ name }: { name: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <h2 className="text-base font-semibold">{name}</h2>
      <DisplayField name="buildType" label="" tone="inline" render={(m) => <Badge variant="secondary">{m === "custom" ? "Custom build" : "Template build"}</Badge>} />
    </div>
  )
}

/** Shown once the server records step 100: the page confirms and moves on to the request. */
function Submitted({ state, side }: { state: IntakeServerState; side: ReactNode }) {
  return (
    <TwoCol>
      <div className="flex flex-col gap-2 rounded-lg border p-4 text-[13px]">
        <p className="rounded-md border border-emerald-600/30 bg-emerald-500/5 px-2.5 py-1.5">
          <span className="font-medium">Project request sent</span> We have your request and will be in touch soon.
        </p>
        <p className="text-muted-foreground">
          Server step 100, status {state.request.status}, ticket #{state.request.ticketId ?? "—"}. A real app would open the request here.
        </p>
      </div>
      {side}
    </TwoCol>
  )
}

/** The server panel both examples show: log, the failure switch, reload / start over. */
function ServerPanel({ state, server, failNext, onFailNext, onReload, onReset }: { state: IntakeServerState; server: IntakeServer; failNext: boolean; onFailNext: (on: boolean) => void; onReload: () => void; onReset: () => void }) {
  return (
    <SidePanel title="Server" meta="projectRequestGet">
      <div className="flex flex-col gap-2 p-3 text-[13px]">
        <p className="tabular-nums">
          step {state.request.step ?? 0} · customBuild {String(state.request.customBuild ?? null)} · ticket {state.request.ticketId ?? "—"} · contacts {state.contacts.length}
        </p>
        <label className="flex items-center justify-between gap-3">
          <span>Next call answers a GraphQL error</span>
          <Switch
            checked={failNext}
            onCheckedChange={(on) => {
              onFailNext(on)
              server.failNextCall(on)
            }}
            aria-label="Next call answers a GraphQL error"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <Button type="button" size="sm" variant="outline" onClick={onReload}>
            Reload from server
          </Button>
          <Button type="button" size="sm" variant="ghost" onClick={onReset}>
            Start over
          </Button>
        </div>
        {state.log.length > 0 ? (
          <ol className="max-h-56 overflow-auto rounded border bg-muted/30 p-2 font-mono text-[11px]">
            {state.log.map((line, i) => (
              <li key={\`\${i}-\${line}\`}>{line}</li>
            ))}
          </ol>
        ) : null}
      </div>
    </SidePanel>
  )
}

/** Example 1's form, remounted by "Reload from server" to show the page's hydration. */
function BuildForm({ state, side }: { state: IntakeServerState; side: ReactNode }) {
  const form = useForm<BuildValues>({ defaultValues: buildInitial(state), model })
  // the page skips the choice page once the server's step is above 0
  const completed = (state.request.step ?? 0) > 0 ? ["buildType"] : []
  return (
    <TwoCol>
      <Form form={form} onSubmit={buildSubmit} className="flex flex-col gap-3">
        <Wizard
          completed={completed}
          onStepComplete={(id) => buildStepSave(id, form.getValues())}
          progress={<AccordionProgress title={<BuildTitle name={state.request.edges.service.name} />} />}
          renderStep={accordionStep}
          nav={<AccordionNav gate="ticketId" lastLabel={(t) => (t ? "Complete Request" : "Create Request")} />}
        >
          {/* its own page: not one of the accordion's tasks */}
          <Wizard.Step id="buildType" label="Build type" progress={false}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base font-semibold">{state.request.edges.service.name}</h2>
              <a className="text-[13px] text-primary hover:underline" href="https://studio.example/guides/choosing-a-build" target="_blank" rel="noreferrer">
                How to choose a build type
              </a>
            </div>
            <ChoiceCardsField name="buildType" cards={CARDS} />
          </Wizard.Step>
          <Wizard.Step id="details" label="Tell us about the project">
            <TaskIntro title="Systems to connect">Choose the tools the new site should connect to. Pick “Not sure” if you want us to help you decide.</TaskIntro>
            <FieldArray
              name="systems"
              label="Systems"
              rowLabel="System"
              min={1}
              minMessage={SYSTEMS_MESSAGE}
              newRow={{ system: "", accountRef: "" }}
              layout="stack"
            >
              <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-2">
                <SelectField name=".system" label="System" placeholder="Select a system" options={SYSTEM_OPTIONS} required requiredMessage={SYSTEMS_MESSAGE} />
                {/* disabled for the row's sibling system "Not sure" */}
                {/* still SENT while disabled: the request carries \`{ system: "NOTSURE", accountRef: "" }\` (N6) */}
                <TextField name=".accountRef" label="Account reference" placeholder="Enter the reference" dir="ltr" disabledIf={c.eq(".system", NOT_SURE)} whenDisabled="send" rules={[rk.v.pattern(PROPER_REF, SYSTEMS_MESSAGE)]} />
              </div>
              <DisplayField name=".system" label="" tone="inline" render={(s) => <HowToFind system={s} />} />
              {/* the content-system row stays while the sibling build type is custom */}
              <When if={c.not(c.and(c.eq(".system", CMS_SYSTEM), c.eq("buildType", "custom")))}>
                <FieldArray.RowActions remove />
              </When>
            </FieldArray>
            <FieldArray.Add to="systems">Add system</FieldArray.Add>
            <ContactsBlock server={buildServer} contacts={state.contacts} />
            <TaskIntro title="Project notes">Tell us about your goals, deadlines, current site and anything else we should know.</TaskIntro>
            <details className="rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]">
              <summary className="cursor-pointer font-medium">What helps us scope the project</summary>
              <p className="mt-1">Mention these in your notes if they apply:</p>
              <ul className="list-disc ps-5">
                <li>Is there a launch date or event the site must be ready for?</li>
                <li>Will content move over from an existing site, and roughly how many pages?</li>
              </ul>
            </details>
            <TextareaField name="notes" label="Notes" placeholder="Type your message..." required requiredMessage={FILL_MESSAGE} rows={4} />
            <RadioGroupField name="a11y" label="Does the site need to meet an accessibility standard?" options={YES_NO} />
            {/* reads the sibling a11y answer */}
            <TextareaField name="a11yNotes" label="Which standard or audit (e.g. a conformance level, an upcoming review)?" placeholder="Type the details..." visibleIf={c.eq("a11y", "yes")} required requiredMessage={FILL_MESSAGE} rows={4} />
          </Wizard.Step>
          <Wizard.Step id="ticket" label="Create an intake ticket">
            <TicketField
              name="ticketId"
              create={() => createTicket(buildServer, form.getValues())}
              onCreated={(ticketId) => buildServer.projectRequestUpdate({ ...buildRequestInput(form.getValues(), 2), ticketId })}
            />
          </Wizard.Step>
        </Wizard>
        <Form.Status className="text-sm" error={(err) => <ErrorToast title="Request not submitted" message={err.message.charAt(0).toUpperCase() + err.message.slice(1)} />} />
      </Form>
      <div className="flex min-w-0 flex-col gap-3">
        {side}
        <LivePanel store={form} />
      </div>
    </TwoCol>
  )
}

// ── example 2: the site-audit request ────────────────────────────────

interface AuditValues {
  contactIds: string[]
  notes: string
  ticketId: number | null
}

const auditModel = defineForm<AuditValues>()(() => ({ fields: [] }))

/** What the studio needs access to for an audit. */
const ACCESS_ITEMS = ["Website admin", "Domain registrar", "Hosting dashboard", "Design files (if any)"] as const

const AUDIT_STEPS = ["request", "access", "ticket"] as const

function auditInitial(s: IntakeServerState): AuditValues {
  const r = s.request
  return { contactIds: r.contactIds?.length ? r.contactIds : s.contacts.map((x) => x.id), notes: r.notes ?? "", ticketId: r.ticketId ?? null }
}

/** The step save: notes, contacts and ticket with \`step = section\` (1-based); accessibility is always false on this page. */
const auditInput = (x: AuditValues, step: number): ProjectRequestInput => ({ notes: x.notes, contactIds: x.contactIds, ticketId: x.ticketId, step, accessibilityRequired: false })

function AuditForm({ state, side, onExit }: { state: IntakeServerState; side: ReactNode; onExit: () => void }) {
  const form = useForm<AuditValues>({ defaultValues: auditInitial(state), model: auditModel })
  return (
    <TwoCol>
      <Form
        form={form}
        className="flex flex-col gap-3"
        onSubmit={async (x) => {
          try {
            await auditServer.projectRequestUpdate(auditInput(x, 100))
          } catch (err) {
            throw mapErrors<AuditValues>(err) ?? err
          }
        }}
      >
        <Wizard
          onStepComplete={async (id) => {
            await auditServer.projectRequestUpdate(auditInput(form.getValues(), AUDIT_STEPS.findIndex((s) => s === id) + 1))
          }}
          progress={<AccordionProgress title={<h2 className="mb-3 text-base font-semibold">{state.request.edges.service.name}</h2>} />}
          renderStep={accordionStep}
          nav={<AccordionNav gate="ticketId" onExit={onExit} lastLabel={(t) => (t ? "Complete Request" : "Create Request")} />}
        >
          <Wizard.Step id="request" label={\`Request a \${state.request.edges.service.name}\`}>
            <TaskIntro title="What should we look at?">Share the pages, problems or goals the audit should focus on.</TaskIntro>
            <TextareaField name="notes" label="Notes" placeholder="Type your message..." required requiredMessage={FILL_MESSAGE} rows={4} />
            <ContactsBlock server={auditServer} contacts={state.contacts} />
          </Wizard.Step>
          <Wizard.Step id="access" label="Share access with the studio">
            <p className="rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]">
              We need read access to run the audit. Once this request and its ticket exist, open <strong>Account › Team access</strong> to invite the studio to each tool.
            </p>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium">
              {ACCESS_ITEMS.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </Wizard.Step>
          <Wizard.Step id="ticket" label="Create an intake ticket">
            <TicketField name="ticketId" create={() => createTicket(auditServer, form.getValues())} onCreated={(ticketId) => auditServer.projectRequestUpdate({ ...auditInput(form.getValues(), 3), ticketId })} />
          </Wizard.Step>
        </Wizard>
        <Form.Status className="text-sm" error={(err) => <ErrorToast title="Request not submitted" message={err.message.charAt(0).toUpperCase() + err.message.slice(1)} />} />
      </Form>
      <div className="flex min-w-0 flex-col gap-3">
        {side}
        <LivePanel store={form} />
      </div>
    </TwoCol>
  )
}

// ── the page ─────────────────────────────────────────────────────────

/** One example's server wiring: snapshot, reload key, failure switch. */
function useServerDemo(server: IntakeServer) {
  const state = useSyncExternalStore(server.subscribe, server.snapshot, server.snapshot)
  // demo-chrome: remount the form from the server record, as a page reload does
  const [loads, setLoads] = useState(0)
  // demo-chrome: the stub's one-shot failure switch
  const [failNext, setFailNext] = useState(false)
  const reload = () => setLoads((n) => n + 1)
  const reset = () => {
    server.reset()
    setFailNext(false)
    reload()
  }
  const panel = <ServerPanel state={state} server={server} failNext={failNext} onFailNext={setFailNext} onReload={reload} onReset={reset} />
  return { state, loads, panel }
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
export function WebsiteBuildExample() {
  const build = useServerDemo(buildServer)
  return (
    <>
      {build.state.request.step === 100 ? <Submitted state={build.state} side={build.panel} /> : <BuildForm key={build.loads} state={build.state} side={build.panel} />}
    </>
  )
}

export function SiteAuditExample() {
  const audit = useServerDemo(auditServer)
  // demo-chrome: the audit page's first Go Back leaves for the services list
  const [exited, setExited] = useState(false)
  return (
    <>
      {audit.state.request.step === 100 ? (
        <Submitted state={audit.state} side={audit.panel} />
      ) : (
        <div className="flex flex-col gap-2">
          {exited ? <p className="text-[13px] text-muted-foreground">Go Back → a real app returns to the services list.</p> : null}
          <AuditForm key={audit.loads} state={audit.state} side={audit.panel} onExit={() => setExited(true)} />
        </div>
      )}
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>a(()=>import(`./project-intake-BznLloac.js`),[]));function at(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(n,{title:`Project intake (real-world flow)`,children:[`An invented web studio's project-intake pages, built on the engine. The build-type page commits on Select; the tasks are an accordion (every task's header around the open step, from the wizard's `,(0,D.jsx)(`code`,{children:`renderStep`}),`; the choice page is a `,(0,D.jsx)(`code`,{children:`progress={false}`}),` step); system rows prefill their reference per system through a row-wildcard effect and offer only the systems no other row picked (`,(0,D.jsx)(`code`,{children:`e.filter`}),`); contacts are created in a dialog and selected (`,(0,D.jsx)(`code`,{children:`relatedForm`}),`); the accessibility note is required only on Yes; the ticket button stores the ticket id the server returns. Every call answers a GraphQL-shaped stub; flip the server switch to see an error as the page shows it (`,(0,D.jsx)(`code`,{children:`errors[0].message`}),` under the error title).`]}),(0,D.jsx)(ce,{n:1,title:`Website build request`,blurb:`Pick a build type, fill the first task, create the ticket, complete. “Reload from server” shows what the page hydrates.`,code:$,children:(0,D.jsx)(rt,{})}),(0,D.jsx)(ce,{n:2,title:`Site audit request`,blurb:`Three accordion tasks; every Next saves the step number; Go Back on the first task leaves the page.`,code:$,children:(0,D.jsx)(it,{})})]})}export{at as component};