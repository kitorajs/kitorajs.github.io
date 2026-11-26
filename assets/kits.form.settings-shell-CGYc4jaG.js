import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CA6hUnoS.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{Bc as r,Cc as i,Ic as a,hi as o,ti as s}from"./index-9y5uwRd3.js";import{t as c}from"./badge-CMT8Lr82.js";import{t as l}from"./skeleton-DwsB03zU.js";import{M as u}from"./messages-BpgLhfTN.js";import{A as d,J as f,Nt as p,P as m,R as h,Y as g,c as _,f as v,z as y}from"./field-config-62hz5rv-.js";import{n as ee}from"./plugins-DTs_adI5.js";import{a as b,i as x,t as S,u as C,y as w}from"./fields-3rMiSNLY.js";import{t as te}from"./submit-pipeline-CfLjfYT6.js";import{i as T}from"./fields-extra-DjnCI2Jb.js";import{t as ne}from"./submit-phases-BOl0iau1.js";import{r as E}from"./choice-ZQTH2Ken.js";import{t as re}from"./confirm-C3IgtwlA.js";import{t as D}from"./display-BL6k8-He.js";import{t as O}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";function ie(e=`,`){return{get:t=>typeof t==`string`?t.split(e).map(e=>e.trim()).filter(e=>e!==``):[],set:t=>Array.isArray(t)?t.filter(e=>typeof e==`string`).join(e):``}}function ae(e){let t=Object.entries(e);return{get:e=>t.find(([,t])=>Object.is(t,e))?.[0]??``,set:(t,n)=>typeof t==`string`&&Object.prototype.hasOwnProperty.call(e,t)?e[t]:n}}function oe(e,t=!0){let n=t=>!(Object.is(t,e)||t==null||t===``||Array.isArray(t)&&t.length===0);return{get:e=>n(e),set:(r,i)=>r===!0?n(i)?i:t:e}}var k={commaList:ie,choice:ae,nonEmpty:oe},A=e(r(),1),j=a(),M=600;function N(e){return new Promise(t=>setTimeout(t,e))}var P={created:`created`,pending:`pending`,active:`active`,needsUpgrade:`needs_upgrade`},se=Object.values(P),F={email:`EMAIL`,phone:`PHONE`,contactId:`CONTACT_ID`,externalRef:`EXTERNAL_REF`},I={helpdesk:`HELPDESK`,relayChat:`RELAY_CHAT`},ce=`RELAY_`,le=200,ue=class extends Error{response;constructor(e,t){super(`${t}: ${JSON.stringify({operation:e})}`),this.name=`ClientError`,this.response={errors:[{message:t,path:[e]}],data:null,status:le}}},de=[`none`,`save`,`finish`,`code`],fe={save:`invalid workspace id`,finish:`connector could not be activated, please try again`,code:`could not generate the install snippet`};function L(e,t,n,r){let i=e===I.helpdesk?`Helpdesk sync`:`Chat relay`,a=e===I.helpdesk?`Ticket events from your helpdesk workspace`:`Conversations relayed server to server into your chat inbox`,o=t===P.active;return{id:e===I.helpdesk?`con_helpdesk_01`:`con_relay_chat_01`,channel:e,status:t,step:n,isHosted:r,workspaceId:o?`187001234`:null,contactKey:F.contactId,accessToken:o?`tok_demo_0001`:null,eventClosed:!1,eventCreated:!1,eventAssigned:!1,eventHookClosed:o,eventHookCreated:!1,eventHookAssigned:!1,relayMessages:!0,relayEdits:!1,excludeSources:o?`phone`:``,archiveSources:``,excludeInternal:!1,edges:{template:{name:i,subTitle:a,channel:e}}}}function pe(e){return`// Acme Connect – ${e.edges.template.name}\nconnect.on("ticket.closed", (event) => {\n  // forwards the event to ${e.channel}\n})`}function R(e){let t=e,n=`none`,r=[],i=new Set,a=()=>{for(let e of i)e()},o=(e,t,n)=>{r=[...r,{n:r.length+1,operation:e,variables:t,ok:n}],a()},s=(e,t,r)=>{if(n===e)throw n=`none`,o(t,r,!1),new ue(t,fe[e])},c=e=>{let n=t.status===P.active?{}:{status:P.pending,step:2};return t={...t,...e,...n},t};return{get:()=>t,calls:()=>r,subscribe(e){return i.add(e),()=>i.delete(e)},setFailNext(e){n=e},async helpdeskSetup(e,t){await N(M),s(`save`,`helpdeskSetup`,{id:e,input:t});let n=t.notify,r=c({workspaceId:t.workspaceId,contactKey:t.helpdeskContactKey,eventClosed:n?.eventClosed??null,eventCreated:n?.eventCreated??null,eventAssigned:n?.eventAssigned??null,eventHookClosed:n?.eventClosedWebhook??null,eventHookCreated:n?.eventCreatedWebhook??null,eventHookAssigned:n?.eventAssignedWebhook??null});return o(`helpdeskSetup`,{id:e,input:t},!0),{helpdeskSetup:r}},async relayChatSetup(e,t){await N(M),s(`save`,`relayChatSetup`,{id:e,input:t});let n=c({workspaceId:t.workspaceId,accessToken:t.accessToken,contactKey:t.contactKey,relayMessages:t.notify.relayMessages,relayEdits:t.notify.relayEdits,eventCreated:t.notify.eventCreated,eventHookCreated:t.notify.eventCreatedWebhook,eventAssigned:t.notify.eventAssigned,eventHookAssigned:t.notify.eventAssignedWebhook,excludeSources:t.excludeSources,archiveSources:t.archiveSources,excludeInternal:t.excludeInternal??null});return o(`relayChatSetup`,{id:e,input:t},!0),{relayChatSetup:n}},async connectorActivate(e){return await N(M),s(`finish`,`connectorActivate`,{id:e}),t={...t,status:P.active},o(`connectorActivate`,{id:e},!0),{connectorActivate:!0}},async generateCode(e){await N(M);let n=t.channel.startsWith(`RELAY_`)?`relayInstallSnippet`:`connectorInstallSnippet`;return s(`code`,n,{id:e}),o(n,{id:e},!0),pe(t)},async connectorSaveDraft(e,n){return await N(M),t={...t,workspaceId:n.workspaceId??t.workspaceId,contactKey:n.contactKey??t.contactKey},o(`connectorSaveDraft`,{id:e,input:n},!0),{connectorSaveDraft:t}}}}function me(e){return typeof e==`object`&&!!e&&`id`in e&&`status`in e&&`step`in e}function z(e,t){return[P.created,P.pending,P.needsUpgrade].includes(e)&&t===1}function B(e,t){let n={};return e&&(n.workspaceId=e),t&&(n.contactKey=t),Object.keys(n).length===0?null:n}var V=[{value:`web`,label:`web`},{value:`phone`,label:`phone`},{value:`email_forward`,label:`email_forward`},{value:`partner_api`,label:`partner_api`}];function H(e){return e.startsWith(ce)}function he(e,t){return t.hosted?`finish`:H(e.channel)?`relay-addon`:e.status===P.pending&&(e.step??0)>1&&t.showsCode||!t.showsCode&&e.eventHookClosed===!0?`code`:t.showsCode?`stay`:`finish`}function U(e){return e===``?e:e.charAt(0).toUpperCase()+e.slice(1)}function W(e){return Object.values(F).find(t=>t===e)??F.email}var G=[{value:F.email,label:`Email`},{value:F.phone,label:`Phone`},{value:F.contactId,label:`Contact ID`},{value:F.externalRef,label:`External reference`}],ge={title:`Activating the connector`,message:`The first sync is starting. It usually finishes within a few minutes.`},K=`/connectors`,q=g(),_e=e=>q.c.eq(q.e.ctx(`page`),e),ve=q.c.eq(q.e.ctx(`step`),2),ye={title:`Questions?`,message:`Our support team can check your relay settings with you. Just reply to the welcome email.`,tone:`info`};function be(e){return w(e)??e}function xe({server:e,onLeave:t,children:n}){let[r,i]=(0,A.useState)(`form`),[a,o]=(0,A.useState)(()=>e.get()),[s,c]=(0,A.useState)(null),l=()=>e.generateCode(a.id).then(e=>({ok:!0,code:e}),e=>({ok:!1,message:w(e)?.message??`Could not load the code`})),u={server:e,page:r,record:a,code:s,openCode:()=>{c(l()),i(`code`)},backToForm:t=>{t&&o(e.get()),i(`form`)},refetch:()=>o(e.get()),leave:t};return(0,j.jsx)(y,{value:{page:r,hosted:a.isHosted===!0,step:a.step??0,relay:H(a.channel)},children:n(u)})}function Se({code:e}){let t=(0,A.use)(e),[n,r]=(0,A.useState)(!1);return t.ok?(0,j.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,j.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`text-[13px] font-medium`,children:`Copy the snippet`}),(0,j.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`The snippet is ready. Copy it, then follow the steps below.`})]}),(0,j.jsx)(s,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>{navigator.clipboard?.writeText(t.code),r(!0)},children:n?`Copied`:`Copy to clipboard`})]}),(0,j.jsx)(`pre`,{className:`overflow-x-auto rounded-md border bg-muted p-2 font-mono text-[12px]`,children:t.code})]}):(0,j.jsxs)(`p`,{className:`rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-[13px] text-destructive`,children:[`Error — `,U(t.message)]})}function Ce({snippetName:e,relay:t}){return(0,j.jsxs)(`ol`,{className:`list-decimal space-y-0.5 ps-5 text-[13px]`,children:[[`Open your helpdesk → Settings → Apps.`,`Click “Add custom app”.`,`Name it “${e}”.`,`Under Permissions, allow read access to tickets and conversations.`,`Paste the whole snippet into the Script field.`,`Click “Save”, then select “Enable”.`].map(e=>(0,j.jsx)(`li`,{children:e},e)),t?null:(0,j.jsx)(`li`,{children:`Disable the previous version of the app so events are not sent twice.`})]})}function we({onBack:e,onFinish:t}){let n=h(`snippetInstalled`)===!0,r=m(e=>p.has(e.getStatus()));return(0,j.jsxs)(`div`,{className:`flex justify-end gap-2 border-t pt-3`,children:[(0,j.jsx)(s,{type:`button`,size:`sm`,variant:`outline`,onClick:e,children:`Go back`}),(0,j.jsx)(v,{if:ve,children:(0,j.jsx)(s,{type:`button`,size:`sm`,disabled:!n||r,onClick:t,children:`Finish setup`})}),(0,j.jsx)(v,{if:ve,not:!0,children:(0,j.jsx)(s,{type:`button`,size:`sm`,disabled:!n||r,onClick:t,children:`Save changes`})})]})}function Te({shell:e,form:t,save:n,showCode:r,snippetName:i,fields:a,events:o,codeIntro:d}){let{record:f,server:p}=e,m=f.edges.template.name,h=H(f.channel),g=f.status===P.active,{confirm:y,dialog:ee}=re(),b=()=>t.isDirty({sent:!0}),x=async()=>{try{return(await p.connectorActivate(f.id)).connectorActivate}catch(t){throw e.refetch(),be(t)}},C=()=>e.leave({to:K,toast:{...ge,tone:`caution`},why:h?`Finished. A second toast follows: “${ye.title} ${ye.message}”`:`Finished.`}),w=e=>{let n=e.save;return me(n)?he(n,{hosted:n.isHosted===!0,showsCode:u(t.evaluate(r))}):null},T=te([{id:`save`,label:`Save ${m}`,inputs:e=>e,run:async e=>{try{return await n(e)}catch(e){throw be(e)}}},{id:`finish`,label:`Finish setup`,when:(e,t)=>{let n=w(t);return n!==null&&n!==`stay`},gate:(e,t)=>{let n=w(t);return n===`code`||n===`relay-addon`},run:x}]),E=t=>{T.pipeline.reset(),e.backToForm(t)},D=async(n,i)=>{if(e.page===`code`)return await T.onSubmit(n,i),C(),`finished`;if(!b()&&g)return u(t.evaluate(r))?(e.openCode(),`code`):(e.leave({to:K,why:`Nothing changed on an active connector: no request was sent.`}),`left`);let a=w(await T.onSubmit(n,i));return a===null||a===`stay`?`saved-stay`:(a===`finish`&&C(),a===`code`&&e.openCode(),a===`relay-addon`&&y({title:`Relay add-on`,body:`Stand-in for the relay add-on modal. Save continues to the install snippet; Cancel stays on the settings.`,confirmLabel:`Save`,cancelLabel:`Cancel`}).then(t=>{t&&e.openCode()}),a===`finish`?`finished`:a)},O=()=>e.leave({to:K,why:z(f.status,f.step)?`Back from a new setup.`:`Back to the connector's page.`}),ie=async()=>{await y({title:`Adding ${m}`,body:`Leave this setup? The connector is not active until every step is done. You can come back and finish it later.`,confirmLabel:`Discard`,cancelLabel:`Keep editing`})&&O()},ae=async()=>{if(!b()&&g){e.leave({to:K,why:`Nothing changed on an active connector: no request was sent.`});return}await y({title:`Is the app enabled?`,body:`Did you save and enable “${i}” in your helpdesk? If not, go back and finish that step first.`,confirmLabel:`Yes, complete setup`,cancelLabel:`No, go back`})&&t.submit(D)};return(0,j.jsxs)(_,{form:t,onSubmit:D,className:`flex flex-col gap-3`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(s,{type:`button`,size:`sm`,variant:`ghost`,onClick:()=>e.page===`code`?E(!1):O(),children:`← Back`}),(0,j.jsxs)(`h3`,{className:`text-sm font-semibold`,children:[`Activating `,m]}),(0,j.jsxs)(c,{variant:`outline`,className:`ms-auto`,children:[f.status,` · step `,f.step??`–`]})]}),(0,j.jsxs)(v,{if:_e(`form`),children:[(0,j.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-lg border p-3`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`text-[13px] font-semibold`,children:m}),(0,j.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:f.edges.template.subTitle})]}),a]}),o,(0,j.jsxs)(`div`,{className:`flex justify-end gap-2 border-t pt-3`,children:[(0,j.jsx)(s,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>void ie(),children:`Go back`}),(0,j.jsx)(v,{if:r,children:(0,j.jsx)(_.Submit,{className:`h-7 rounded-md bg-primary px-3 text-[13px] font-medium text-primary-foreground disabled:opacity-50`,children:`Next`})}),(0,j.jsx)(v,{if:r,not:!0,children:(0,j.jsx)(_.Submit,{className:`h-7 rounded-md bg-primary px-3 text-[13px] font-medium text-primary-foreground disabled:opacity-50`,children:`Save changes`})})]}),(0,j.jsx)(ne,{phases:T.phases})]}),(0,j.jsxs)(v,{if:_e(`code`),children:[d,h?(0,j.jsx)(`p`,{className:`rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5 text-[13px]`,children:`This snippet is shared by every relayed channel, so add it once; adding it twice relays each message twice.`}):null,(0,j.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-lg border p-3`,children:[e.code?(0,j.jsx)(A.Suspense,{fallback:(0,j.jsx)(l,{className:`h-24 w-full`}),children:(0,j.jsx)(Se,{code:e.code})}):null,(0,j.jsx)(`p`,{className:`text-[13px] font-medium`,children:`Finish the connection with these steps:`}),(0,j.jsx)(Ce,{snippetName:i,relay:h}),(0,j.jsx)(S,{name:`snippetInstalled`,local:!0,label:`I added the snippet and enabled the app.`})]}),(0,j.jsx)(we,{onBack:()=>E(b()&&g),onFinish:()=>void ae()}),(0,j.jsx)(ne,{phases:T.phases})]}),(0,j.jsx)(_.Status,{className:`text-[13px]`,error:e=>(0,j.jsxs)(`p`,{className:`rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-destructive`,children:[(0,j.jsx)(`span`,{className:`font-medium`,children:`Error`}),` — `,U(e.message)]})}),ee]})}function J({label:e,inApp:t,webhook:n,rules:r}){return(0,j.jsxs)(`div`,{className:`grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border-b py-1 last:border-b-0`,children:[(0,j.jsx)(`span`,{className:`text-[13px]`,children:e}),t?(0,j.jsx)(S,{name:t,label:`In-app`}):(0,j.jsx)(`span`,{className:`w-24 text-[12px] text-muted-foreground`,children:`—`}),(0,j.jsx)(S,{name:n,label:`Webhook`,rules:r})]})}var Y=g(),X=(e,t)=>[{on:[t],when:Y.c.eq(t,!0),do:[{set:e,to:!1}]},{on:[e],when:Y.c.eq(e,!0),do:[{set:t,to:!1}]}],Ee=f()(()=>({fields:[],whenHidden:`keep-and-send`,effects:[...X(`notify.eventClosed`,`notify.eventClosedWebhook`),...X(`notify.eventCreated`,`notify.eventCreatedWebhook`),...X(`notify.eventAssigned`,`notify.eventAssignedWebhook`)]})),De=Y.c.and(Y.c.not(Y.c.ctx(`hosted`)),Y.c.or(Y.c.eq(`notify.eventClosedWebhook`,!0),Y.c.eq(`notify.eventCreatedWebhook`,!0),Y.c.eq(`notify.eventAssignedWebhook`,!0))),Oe={eventClosedWebhook:`Ticket closed`,eventAssignedWebhook:`Ticket assigned`,eventCreatedWebhook:`Ticket created`};function ke(e){return{workspaceId:e.workspaceId??``,helpdeskContactKey:W(e.contactKey),notify:{eventClosed:e.eventClosed??!1,eventAssigned:e.eventAssigned??!1,eventCreated:e.eventCreated??!1,eventCreatedWebhook:e.eventHookCreated??!1,eventClosedWebhook:e.eventHookClosed??!1,eventAssignedWebhook:e.eventHookAssigned??!1},snippetInstalled:!1}}function Ae(e,t){let n=z(e.record.status,e.record.step);return ee({when:()=>n,save:async({values:n})=>{let r=t(n);r&&await e.server.connectorSaveDraft(e.record.id,r)}})}function je({shell:e}){let t=d({defaultValues:ke(e.record),model:Ee,plugins:[Ae(e,e=>B(e.workspaceId,e.helpdeskContactKey))]});return(0,j.jsx)(Te,{shell:e,form:t,save:async t=>{let n={workspaceId:t.workspaceId,helpdeskContactKey:t.helpdeskContactKey,notify:t.notify};return(await e.server.helpdeskSetup(e.record.id,n)).helpdeskSetup},showCode:De,snippetName:`Acme Connect – Helpdesk`,fields:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(b,{name:`workspaceId`,label:`Helpdesk workspace ID`,description:`Helpdesk → Admin → Workspace.`,required:!0,requiredMessage:`ID is required`}),(0,j.jsx)(T,{name:`helpdeskContactKey`,label:`Match contacts by`,options:[...G]})]}),events:(0,j.jsxs)(`div`,{className:`rounded-lg border p-3`,children:[(0,j.jsx)(`p`,{className:`mb-1 text-[13px] font-semibold`,children:`Events`}),(0,j.jsx)(J,{label:`Ticket closed`,webhook:`notify.eventClosedWebhook`}),(0,j.jsx)(J,{label:`Ticket created`,inApp:`notify.eventCreated`,webhook:`notify.eventCreatedWebhook`,rules:[Y.v.assert(Y.c.not(Y.c.and(Y.c.eq(`notify.eventCreated`,!0),Y.c.eq(`notify.eventCreatedWebhook`,!0))),`In-app and webhook can’t both be on`)]}),(0,j.jsx)(J,{label:`Ticket assigned`,inApp:`notify.eventAssigned`,webhook:`notify.eventAssignedWebhook`})]}),codeIntro:(0,j.jsxs)(`div`,{className:`rounded-lg border p-3`,children:[(0,j.jsx)(`p`,{className:`text-[13px] font-semibold`,children:`Webhook events`}),(0,j.jsx)(D,{name:`notify`,label:`Sent by the install snippet`,tone:`inline`,render:e=>typeof e==`object`&&e?Object.entries(e).filter(([e,t])=>t===!0&&e in Oe).map(([e])=>Oe[e]).join(`, `):``})]})})}var Z=g(),Me=f()(()=>({fields:[],whenHidden:`keep-and-send`,effects:[{on:[`notify.eventCreatedWebhook`],when:Z.c.eq(`notify.eventCreatedWebhook`,!0),do:[{set:`notify.eventCreated`,to:!1}]},{on:[`notify.eventCreated`],when:Z.c.eq(`notify.eventCreated`,!0),do:[{set:`notify.eventCreatedWebhook`,to:!1}]}]})),Ne=Z.c.not(Z.c.ctx(`hosted`)),Pe=[`excludeSources`,`archiveSources`,`excludeInternal`],Fe=`555000111`;function Ie(e){return{workspaceId:e.workspaceId??``,contactKey:W(e.contactKey),accessToken:e.accessToken??``,notify:{eventCreated:e.eventCreated??!1,eventAssigned:e.eventAssigned??!1,relayMessages:!0,eventCreatedWebhook:e.eventHookCreated??!1,eventAssignedWebhook:e.eventHookAssigned??!1,relayEdits:e.relayEdits??!1},excludeSources:e.excludeSources??``,archiveSources:e.archiveSources??``,excludeInternal:e.excludeInternal??!1,snippetInstalled:!1}}function Le(){let e=m(e=>Pe.filter(t=>e.isDirty(t)).join(`, `));return(0,j.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Changed server-side options: `,e===``?`none`:e]})}var Re=[`excludeSources`,`archiveSources`,`excludeInternal`];function ze({form:e}){let[t,n]=(0,A.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s,{type:`button`,size:`sm`,variant:`outline`,className:`w-fit`,onClick:()=>n(!0),children:`Edit settings`}),(0,j.jsxs)(C,{parent:e,pick:Re,empty:{excludeSources:``,archiveSources:``,excludeInternal:!1},open:t,onOpenChange:n,title:`Relay settings`,submitLabel:`Save`,children:[(0,j.jsx)(E,{name:`excludeSources`,label:`Skip these sources`,options:[...V],view:k.commaList()}),(0,j.jsx)(E,{name:`archiveSources`,label:`Archive without notifying`,options:[...V],view:k.commaList()}),(0,j.jsx)(S,{name:`excludeInternal`,label:`Skip internal conversations`,description:`Don't relay conversations between teammates. Useful when staff also chat in the same inbox.`})]})]})}function Be({shell:e}){let t=d({defaultValues:Ie(e.record),model:Me,context:{primaryWorkspaceId:Fe},plugins:[Ae(e,e=>B(e.workspaceId,e.contactKey))]});return(0,j.jsx)(Te,{shell:e,form:t,save:async t=>{let n={workspaceId:t.workspaceId,accessToken:t.accessToken,contactKey:t.contactKey,notify:t.notify,excludeSources:t.excludeSources,archiveSources:t.archiveSources,excludeInternal:t.excludeInternal};return(await e.server.relayChatSetup(e.record.id,n)).relayChatSetup},showCode:Ne,snippetName:`Acme Connect – Relay`,fields:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(b,{name:`workspaceId`,label:`Chat workspace ID`,required:!0,requiredMessage:`ID is required`,rules:[Z.v.assert(Z.c.ne(`workspaceId`,Z.e.ctx(`primaryWorkspaceId`)),`This workspace ID is already used by another connector.`)],description:`Try ${Fe} (the helpdesk connector's ID) to see the rule.`}),(0,j.jsx)(b,{name:`accessToken`,label:`Access token`,required:!0,requiredMessage:`Access token is required`}),(0,j.jsx)(T,{name:`contactKey`,label:`Match contacts by`,options:[...G]})]}),events:(0,j.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-lg border p-3`,children:[(0,j.jsx)(`p`,{className:`text-[13px] font-semibold`,children:`Events`}),(0,j.jsx)(x,{name:`notify.relayMessages`,label:`Messages (relayed, always on)`,disabled:!0}),(0,j.jsx)(x,{name:`notify.relayEdits`,label:`Message edits (relayed)`}),(0,j.jsx)(J,{label:`Ticket created`,inApp:`notify.eventCreated`,webhook:`notify.eventCreatedWebhook`}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-md bg-muted/40 p-2`,children:[(0,j.jsx)(`p`,{className:`text-[13px] font-medium`,children:`Relay settings`}),(0,j.jsx)(D,{name:`excludeSources`,label:`Skip these sources`,tone:`inline`,render:e=>e===``?`none`:String(e)}),(0,j.jsx)(D,{name:`archiveSources`,label:`Archive without notifying`,tone:`inline`,render:e=>e===``?`none`:String(e)}),(0,j.jsx)(D,{name:`excludeInternal`,label:`Skip internal conversations`,tone:`inline`,render:e=>e===!0?`yes`:`no`}),(0,j.jsx)(ze,{form:t}),(0,j.jsx)(Le,{})]})]})})}var Ve=[1,2];function He({channel:e}){let[n,r]=(0,A.useState)({status:P.created,step:1,hosted:!1}),[i,a]=(0,A.useState)(()=>R(L(e,n.status,n.step,n.hosted))),[o,c]=(0,A.useState)(`none`),[l,u]=(0,A.useState)(0),[d,f]=(0,A.useState)(null),p=(0,A.useSyncExternalStore)(i.subscribe,i.calls,i.calls),m=t=>{r(t),a(R(L(e,t.status,t.step,t.hosted))),c(`none`),f(null),u(e=>e+1)};return(0,j.jsxs)(We,{children:[(0,j.jsx)(`div`,{className:`min-w-0`,children:d?(0,j.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-lg border p-3 text-[13px]`,children:[(0,j.jsxs)(`p`,{children:[`Navigated to `,(0,j.jsx)(`code`,{children:d.to}),`. `,d.why]}),d.toast?(0,j.jsxs)(`p`,{className:`rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5`,children:[(0,j.jsx)(`span`,{className:`font-medium`,children:d.toast.title}),` — `,d.toast.message]}):null,(0,j.jsx)(s,{type:`button`,size:`sm`,className:`w-fit`,onClick:()=>{f(null),u(e=>e+1)},children:`Reopen the setup page`})]}):(0,j.jsx)(xe,{server:i,onLeave:f,children:t=>e===I.helpdesk?(0,j.jsx)(je,{shell:t}):(0,j.jsx)(Be,{shell:t})},l)}),(0,j.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,j.jsx)(Q,{title:`Server record`,meta:`connectorGet`,children:(0,j.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1`,children:[(0,j.jsx)(`span`,{className:`w-12 text-muted-foreground`,children:`status`}),se.map(e=>(0,j.jsx)(s,{type:`button`,size:`sm`,variant:n.status===e?`default`:`outline`,className:`h-6 px-2 text-[12px]`,onClick:()=>m({...n,status:e}),children:e},e))]}),(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(`span`,{className:`w-12 text-muted-foreground`,children:`step`}),Ve.map(e=>(0,j.jsx)(s,{type:`button`,size:`sm`,variant:n.step===e?`default`:`outline`,className:`h-6 px-2 text-[12px]`,onClick:()=>m({...n,step:e}),children:e},e))]}),(0,j.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,j.jsx)(`span`,{children:`Hosted install (isHosted)`}),(0,j.jsx)(t,{checked:n.hosted,onCheckedChange:e=>m({...n,hosted:e}),"aria-label":`Hosted install`})]}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1`,children:[(0,j.jsx)(`span`,{className:`w-12 text-muted-foreground`,children:`fail`}),de.map(e=>(0,j.jsx)(s,{type:`button`,size:`sm`,variant:o===e?`default`:`outline`,className:`h-6 px-2 text-[12px]`,onClick:()=>{i.setFailNext(e),c(e)},children:e},e))]}),(0,j.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Changing the record reopens the page. “fail” makes the next such call answer a GraphQL error once.`})]})}),(0,j.jsx)(Q,{title:`Requests`,meta:p.length,children:(0,j.jsx)(Ue,{empty:`No requests yet.`,children:p.map(e=>(0,j.jsxs)(`div`,{className:e.ok?``:`text-destructive`,children:[e.n,`. `,e.operation,` `,e.ok?``:`(error)`,(0,j.jsx)(`pre`,{className:`overflow-x-auto whitespace-pre-wrap break-all text-muted-foreground`,children:JSON.stringify(e.variables)})]},e.n))})})]})]})}function Ue({empty:e,children:t}){let n=A.Children.toArray(t);return(0,j.jsx)(`div`,{className:`space-y-0.5 p-3 font-mono text-[11px]`,children:n.length===0?(0,j.jsx)(`p`,{className:`font-sans text-muted-foreground`,children:e}):n})}function Q({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,j.jsxs)(`aside`,{className:o(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,j.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,j.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,j.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function We({children:e,stack:t=!1}){return(0,j.jsx)(`div`,{className:o(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:A.Children.toArray(e)})}function Ge(){return(0,j.jsx)(He,{channel:I.helpdesk})}function Ke(){return(0,j.jsx)(He,{channel:I.relayChat})}var $=`import { Suspense, use, useState, useSyncExternalStore, type ReactNode, Children } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Skeleton } from "@kitora/ui/skeleton"
import { Switch } from "@kitora/ui/switch"
import { BUSY_STATUSES, defineForm, kit, mapErrors, saveOnLeave, truthy, type Cond, type FormStore, type PipelinePhase, type SubmitContext, type Validator } from "@kitora/form/core"
import { AppContextProvider, Form, useForm, useFormState, useSubmitPipeline, useValue, When } from "@kitora/form/react"
import { CheckboxField, DisplayField, MultiSelectField, PickSubFormDialog, RadioGroupField, SubmitPhases, SwitchField, TextField, useConfirm, views } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Mock latency of a demo submit (ms) — long enough to see the pending state. */
const MOCK_SUBMIT_MS = 600

/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- the simulated server (stub: replace with your API)
/** Connector lifecycle values the shell branches on. */
export const CONNECTOR_STATUS = {
  created: "created",
  pending: "pending",
  active: "active",
  needsUpgrade: "needs_upgrade",
} as const

export type ConnectorStatus = (typeof CONNECTOR_STATUS)[keyof typeof CONNECTOR_STATUS]

/** Canonical iteration order for the demo's status picker. */
export const CONNECTOR_STATUSES: readonly ConnectorStatus[] = Object.values(CONNECTOR_STATUS)

/** Which contact field the connector matches records on, in the order the radio group renders them. */
export const CONTACT_KEY = {
  email: "EMAIL",
  phone: "PHONE",
  contactId: "CONTACT_ID",
  externalRef: "EXTERNAL_REF",
} as const

export type ContactKey = (typeof CONTACT_KEY)[keyof typeof CONTACT_KEY]

/** Channel values of the two connectors shown. A server-relayed channel's id starts with \`RELAY_\`. */
export const CHANNEL = { helpdesk: "HELPDESK", relayChat: "RELAY_CHAT" } as const

export type Channel = (typeof CHANNEL)[keyof typeof CHANNEL]

/** The prefix \`isRelayChannel\` tests. */
export const RELAY_CHANNEL_PREFIX = "RELAY_"

/** \`connectorGet\` selection, narrowed to the keys read here; nullability as generated. */
export interface Connector {
  id: string
  channel: Channel
  status: ConnectorStatus
  step: number | null
  isHosted: boolean | null
  workspaceId: string | null
  contactKey: string | null
  accessToken: string | null
  eventClosed: boolean | null
  eventCreated: boolean | null
  eventAssigned: boolean | null
  eventHookClosed: boolean | null
  eventHookCreated: boolean | null
  eventHookAssigned: boolean | null
  relayMessages: boolean | null
  relayEdits: boolean | null
  excludeSources: string | null
  archiveSources: string | null
  excludeInternal: boolean | null
  edges: { template: { name: string; subTitle: string; channel: string } }
}

/** Which ticket events the helpdesk connector forwards, each by its in-app or webhook transport. */
export interface HelpdeskEventsInput {
  eventCreated: boolean
  eventCreatedWebhook: boolean
  eventAssigned: boolean
  eventAssignedWebhook: boolean
  eventClosed: boolean
  eventClosedWebhook: boolean
}

/** The helpdesk connector's setup input. */
export interface HelpdeskSetupInput {
  notify?: HelpdeskEventsInput | null
  helpdeskContactKey: ContactKey
  workspaceId: string
}

/** The event keys the chat-relay connector sets. */
export interface RelayEventsInput {
  relayMessages: boolean
  relayEdits: boolean
  eventCreated: boolean
  eventCreatedWebhook: boolean
  eventAssigned: boolean
  eventAssignedWebhook: boolean
}

/** The chat-relay connector's setup input. */
export interface RelayChatSetupInput {
  notify: RelayEventsInput
  workspaceId: string
  accessToken: string
  contactKey: ContactKey
  excludeInternal?: boolean | null
  excludeSources: string
  archiveSources: string
}

/** The keys a draft save of either connector can send. */
export interface DraftInput {
  workspaceId?: string
  contactKey?: ContactKey
}

/** One GraphQL error as the spec (and a typical client) carries it. */
export interface GraphQLErrorEntry {
  message: string
  path: string[]
}

/** \`ClientError.response\`: the GraphQL response that failed. */
export interface GraphQLErrorResponse {
  errors: GraphQLErrorEntry[]
  data: null
  status: number
}

/** HTTP status a GraphQL client reports for a GraphQL-level error (the transport succeeded). */
const GRAPHQL_ERROR_HTTP_STATUS = 200

/** What a GraphQL client throws for an \`errors[]\` answer: the page reads \`err.response.errors[0].message\`. */
export class GraphQLClientError extends Error {
  readonly response: GraphQLErrorResponse
  constructor(operation: string, message: string) {
    super(\`\${message}: \${JSON.stringify({ operation })}\`)
    this.name = "ClientError"
    this.response = { errors: [{ message, path: [operation] }], data: null, status: GRAPHQL_ERROR_HTTP_STATUS }
  }
}

/** Where the demo's next call fails once (\`none\` = nothing fails). */
export const FAIL_POINTS = ["none", "save", "finish", "code"] as const

export type FailPoint = (typeof FAIL_POINTS)[number]

/** Placeholder backend texts per failing operation. */
const FAIL_TEXT: Readonly<Record<Exclude<FailPoint, "none">, string>> = {
  save: "invalid workspace id",
  finish: "connector could not be activated, please try again",
  code: "could not generate the install snippet",
}

/** One call the stub received, for the demo's request log. */
export interface ServerCall {
  n: number
  operation: string
  variables: unknown
  ok: boolean
}

/** Every value a record holds before its first setup (a fresh \`created\` connector). */
export function seedConnector(channel: Channel, status: ConnectorStatus, step: number, isHosted: boolean): Connector {
  const name = channel === CHANNEL.helpdesk ? "Helpdesk sync" : "Chat relay"
  const subTitle = channel === CHANNEL.helpdesk ? "Ticket events from your helpdesk workspace" : "Conversations relayed server to server into your chat inbox"
  const active = status === CONNECTOR_STATUS.active
  return {
    id: channel === CHANNEL.helpdesk ? "con_helpdesk_01" : "con_relay_chat_01",
    channel,
    status,
    step,
    isHosted,
    workspaceId: active ? "187001234" : null,
    // assumption: a fresh record already carries a contact key (the backend owns the real default)
    contactKey: CONTACT_KEY.contactId,
    accessToken: active ? "tok_demo_0001" : null,
    eventClosed: false,
    eventCreated: false,
    eventAssigned: false,
    eventHookClosed: active,
    eventHookCreated: false,
    eventHookAssigned: false,
    relayMessages: true,
    relayEdits: false,
    excludeSources: active ? "phone" : "",
    archiveSources: "",
    excludeInternal: false,
    edges: { template: { name, subTitle, channel } },
  }
}

/** The generated install snippet (placeholder body: a real one is built by the backend). */
function installSnippet(record: Connector): string {
  return \`// Acme Connect – \${record.edges.template.name}\\nconnect.on("ticket.closed", (event) => {\\n  // forwards the event to \${record.channel}\\n})\`
}

/** A stateful stub of the operations above, one record per server, with a call log and a fail-once switch. */
export function createConnectorServer(seed: Connector) {
  let record = seed
  let failNext: FailPoint = "none"
  let calls: readonly ServerCall[] = []
  const listeners = new Set<() => void>()
  const emit = (): void => {
    for (const l of listeners) l()
  }
  const log = (operation: string, variables: unknown, ok: boolean): void => {
    calls = [...calls, { n: calls.length + 1, operation, variables, ok }]
    emit()
  }
  /** Fail this operation once when the switch points at it. */
  const failIf = (point: Exclude<FailPoint, "none">, operation: string, variables: unknown): void => {
    if (failNext !== point) return
    failNext = "none"
    log(operation, variables, false)
    throw new GraphQLClientError(operation, FAIL_TEXT[point])
  }
  /** After a setup save: a non-active record moves to pending / step 2 (see the header). */
  const afterSave = (patch: Partial<Connector>): Connector => {
    const moved = record.status === CONNECTOR_STATUS.active ? {} : { status: CONNECTOR_STATUS.pending, step: 2 }
    record = { ...record, ...patch, ...moved }
    return record
  }
  return {
    /** The current record (\`connectorGet\`). */
    get: (): Connector => record,
    calls: (): readonly ServerCall[] => calls,
    subscribe(listener: () => void): () => void {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    setFailNext(point: FailPoint): void {
      failNext = point
    },
    async helpdeskSetup(id: string, input: HelpdeskSetupInput): Promise<{ helpdeskSetup: Connector }> {
      await delay(MOCK_SUBMIT_MS)
      failIf("save", "helpdeskSetup", { id, input })
      const adv = input.notify
      const saved = afterSave({
        workspaceId: input.workspaceId,
        contactKey: input.helpdeskContactKey,
        eventClosed: adv?.eventClosed ?? null,
        eventCreated: adv?.eventCreated ?? null,
        eventAssigned: adv?.eventAssigned ?? null,
        eventHookClosed: adv?.eventClosedWebhook ?? null,
        eventHookCreated: adv?.eventCreatedWebhook ?? null,
        eventHookAssigned: adv?.eventAssignedWebhook ?? null,
      })
      log("helpdeskSetup", { id, input }, true)
      return { helpdeskSetup: saved }
    },
    async relayChatSetup(id: string, input: RelayChatSetupInput): Promise<{ relayChatSetup: Connector }> {
      await delay(MOCK_SUBMIT_MS)
      failIf("save", "relayChatSetup", { id, input })
      const saved = afterSave({
        workspaceId: input.workspaceId,
        accessToken: input.accessToken,
        contactKey: input.contactKey,
        relayMessages: input.notify.relayMessages,
        relayEdits: input.notify.relayEdits,
        eventCreated: input.notify.eventCreated,
        eventHookCreated: input.notify.eventCreatedWebhook,
        eventAssigned: input.notify.eventAssigned,
        eventHookAssigned: input.notify.eventAssignedWebhook,
        excludeSources: input.excludeSources,
        archiveSources: input.archiveSources,
        excludeInternal: input.excludeInternal ?? null,
      })
      log("relayChatSetup", { id, input }, true)
      return { relayChatSetup: saved }
    },
    async connectorActivate(id: string): Promise<{ connectorActivate: boolean }> {
      await delay(MOCK_SUBMIT_MS)
      failIf("finish", "connectorActivate", { id })
      record = { ...record, status: CONNECTOR_STATUS.active }
      log("connectorActivate", { id }, true)
      return { connectorActivate: true }
    },
    /** \`connectorInstallSnippet\`, or \`relayInstallSnippet\` for a server-relayed channel (the code page picks by channel). */
    async generateCode(id: string): Promise<string> {
      await delay(MOCK_SUBMIT_MS)
      const operation = record.channel.startsWith(RELAY_CHANNEL_PREFIX) ? "relayInstallSnippet" : "connectorInstallSnippet"
      failIf("code", operation, { id })
      log(operation, { id }, true)
      return installSnippet(record)
    },
    async connectorSaveDraft(id: string, input: DraftInput): Promise<{ connectorSaveDraft: Connector }> {
      await delay(MOCK_SUBMIT_MS)
      record = { ...record, workspaceId: input.workspaceId ?? record.workspaceId, contactKey: input.contactKey ?? record.contactKey }
      log("connectorSaveDraft", { id, input }, true)
      return { connectorSaveDraft: record }
    },
  }
}

export type ConnectorServer = ReturnType<typeof createConnectorServer>

// ---- shell
/** The two "pages" of the shell: the settings form, then the install-snippet page. */
export const SHELL_PAGES = ["form", "code"] as const

export type ShellPage = (typeof SHELL_PAGES)[number]

/** Where a successful save leads. \`stay\` = no branch matched, the page stays put. */
export const NEXT_AFTER_SAVE = ["finish", "code", "relay-addon", "stay"] as const

export type NextAfterSave = (typeof NEXT_AFTER_SAVE)[number]

/** Narrow the save phase's result back to the saved record. */
export function isConnector(x: unknown): x is Connector {
  return typeof x === "object" && x !== null && "id" in x && "status" in x && "step" in x
}

/** A new setup: created / pending / needs-upgrade at step 1. */
export function isNewSetup(status: ConnectorStatus, step: number | null): boolean {
  const early: readonly ConnectorStatus[] = [CONNECTOR_STATUS.created, CONNECTOR_STATUS.pending, CONNECTOR_STATUS.needsUpgrade]
  return early.includes(status) && step === 1
}

/**
 * The draft input for either connector: each key only when non-empty, and no
 * call at all when nothing is left (\`null\`). \`contactKey\` is the channel's own
 * contact-key value (\`helpdeskContactKey\` for the helpdesk connector).
 */
export function toDraftInput(workspaceId: string, contactKey: ContactKey | ""): DraftInput | null {
  const input: DraftInput = {}
  if (workspaceId) input.workspaceId = workspaceId
  if (contactKey) input.contactKey = contactKey
  return Object.keys(input).length === 0 ? null : input
}

/**
 * The conversation sources the workspace has seen, the options of the source
 * pickers — a stand-in answer of a \`conversationSources: [String!]!\` query.
 */
export const SOURCE_OPTIONS: readonly { value: string; label: string }[] = [
  { value: "web", label: "web" },
  { value: "phone", label: "phone" },
  { value: "email_forward", label: "email_forward" },
  { value: "partner_api", label: "partner_api" },
]

/** A server-relayed channel (its id carries the relay prefix). */
export function isRelayChannel(channel: string): boolean {
  return channel.startsWith(RELAY_CHANNEL_PREFIX)
}

/**
 * The after-save branch, in its order: a hosted install finishes at once; a
 * server-relayed channel opens the add-on modal; a pending record past step 1
 * with a snippet page goes to it; no snippet page but a webhook on "closed"
 * still goes to it; no snippet page finishes; anything else stays.
 */
export function nextAfterSave(saved: Connector, o: { hosted: boolean; showsCode: boolean }): NextAfterSave {
  if (o.hosted) return "finish"
  if (isRelayChannel(saved.channel)) return "relay-addon"
  if (saved.status === CONNECTOR_STATUS.pending && (saved.step ?? 0) > 1 && o.showsCode) return "code"
  if (!o.showsCode && saved.eventHookClosed === true) return "code"
  if (!o.showsCode) return "finish"
  return "stay"
}

/** The page shows the server's first error message capitalised. */
export function capitalizeFirst(s: string): string {
  return s === "" ? s : s.charAt(0).toUpperCase() + s.slice(1)
}

/** A stored \`contactKey\` (a free string on \`Connector\`) as the input enum; unknown values fall back to email. */
export function toContactKey(stored: string | null): ContactKey {
  const known: readonly ContactKey[] = Object.values(CONTACT_KEY)
  return known.find((f) => f === stored) ?? CONTACT_KEY.email
}

/** The contact-key radio options. */
export const CONTACT_KEY_OPTIONS: readonly { value: ContactKey; label: string }[] = [
  { value: CONTACT_KEY.email, label: "Email" },
  { value: CONTACT_KEY.phone, label: "Phone" },
  { value: CONTACT_KEY.contactId, label: "Contact ID" },
  { value: CONTACT_KEY.externalRef, label: "External reference" },
]

/** The finish toast: caution tone, shown when \`connectorActivate\` answers. */
export const FINISH_TOAST = {
  title: "Activating the connector",
  message: "The first sync is starting. It usually finishes within a few minutes.",
} as const

/** Where every exit of the shell lands. */
export const ROUTE_CONNECTORS = "/connectors"

// ---- the page
// A connector settings shell shared by every channel of an invented app, built on the public API
// with generated-client GraphQL shapes (the api section above). One shell, two
// channels: Helpdesk sync (the snippet page appears only when a webhook transport is on) and Chat
// relay (server-relayed: always a snippet page, an add-on modal after the save, per-key dirty on
// the relay options). A part the engine cannot express yet would be a labelled placeholder.

// ── the shell (shared by every channel) ──────────────────────────────

/** Rules that read only the shell's app context (page, hosted install, step), so they fit any channel's form. */
const shellKit = kit<object>()

const onPage = (page: ShellPage): Cond => shellKit.c.eq(shellKit.e.ctx("page"), page)

/** Step 2 on the snippet page: the primary button says "Finish setup". */
const atStep2: Cond = shellKit.c.eq(shellKit.e.ctx("step"), 2)

/** What a code-page fetch settles to: the generated install snippet, or the server's message. */
type CodeResult = { ok: true; code: string } | { ok: false; message: string }

/** The page-level state the shell owns: which page shows, the loaded record, the code fetch, and where it leaves to. */
interface ShellController {
  server: ConnectorServer
  page: ShellPage
  record: Connector
  code: Promise<CodeResult> | null
  /** Show the snippet page; the snippet is requested as it opens. */
  openCode(): void
  /** Back from the code page; an active record with changes is re-read first. */
  backToForm(refetch: boolean): void
  /** Re-read the record (after a failed finish). */
  refetch(): void
  /** Navigate away (the demo shows where a real app would land and what it toasted). */
  leave(exit: ShellExit): void
}

/** One way out of the shell. */
interface ShellExit {
  to: string
  toast?: { title: string; message: string; tone: "caution" | "info" }
  why: string
}

/** The extra toast a server-relayed channel gets after finishing. */
const RELAY_HELP_TOAST = { title: "Questions?", message: "Our support team can check your relay settings with you. Just reply to the welcome email.", tone: "info" } as const

/** Thrown GraphQL client error → the SubmitError Form.Status shows: the server's first message, form-level. */
function asSubmitError(err: unknown): unknown {
  return mapErrors(err) ?? err
}

/**
 * The page around a channel form: owns \`setupPage\`, the loaded record and the
 * code fetch, and hands every form below them as app context (\`c.ctx\`), so
 * the channel's rules and the shell's buttons branch on them declaratively.
 */
function SetupPage({ server, onLeave, children }: { server: ConnectorServer; onLeave: (exit: ShellExit) => void; children: (shell: ShellController) => ReactNode }) {
  const [page, setPage] = useState<ShellPage>("form")
  const [record, setRecord] = useState<Connector>(() => server.get())
  const [code, setCode] = useState<Promise<CodeResult> | null>(null)
  const requestCode = (): Promise<CodeResult> =>
    server.generateCode(record.id).then(
      (c) => ({ ok: true, code: c }),
      (err: unknown) => ({ ok: false, message: mapErrors(err)?.message ?? "Could not load the code" }),
    )
  const shell: ShellController = {
    server,
    page,
    record,
    code,
    openCode: () => {
      setCode(requestCode())
      setPage("code")
    },
    backToForm: (refetch) => {
      if (refetch) setRecord(server.get())
      setPage("form")
    },
    refetch: () => setRecord(server.get()),
    leave: onLeave,
  }
  const context = { page, hosted: record.isHosted === true, step: record.step ?? 0, relay: isRelayChannel(record.channel) }
  return <AppContextProvider value={context}>{children(shell)}</AppContextProvider>
}

/** The generated install snippet with its copy button; suspends until the fetch settles. */
function CodeBlock({ code }: { code: Promise<CodeResult> }) {
  const result = use(code)
  const [copied, setCopied] = useState(false)
  if (!result.ok) return <p className="rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-[13px] text-destructive">Error — {capitalizeFirst(result.message)}</p>
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[13px] font-medium">Copy the snippet</p>
          <p className="text-[12px] text-muted-foreground">The snippet is ready. Copy it, then follow the steps below.</p>
        </div>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => {
            void navigator.clipboard?.writeText(result.code)
            setCopied(true)
          }}
        >
          {copied ? "Copied" : "Copy to clipboard"}
        </Button>
      </div>
      <pre className="overflow-x-auto rounded-md border bg-muted p-2 font-mono text-[12px]">{result.code}</pre>
    </div>
  )
}

/** The install steps (the last one is dropped for a server-relayed channel). */
function InstallSteps({ snippetName, relay }: { snippetName: string; relay: boolean }) {
  const steps = ["Open your helpdesk → Settings → Apps.", "Click “Add custom app”.", \`Name it “\${snippetName}”.\`, "Under Permissions, allow read access to tickets and conversations.", "Paste the whole snippet into the Script field.", "Click “Save”, then select “Enable”."]
  return (
    <ol className="list-decimal space-y-0.5 ps-5 text-[13px]">
      {steps.map((s) => (
        <li key={s}>{s}</li>
      ))}
      {relay ? null : <li>Disable the previous version of the app so events are not sent twice.</li>}
    </ol>
  )
}

/** Snippet-page footer: the primary button stays disabled until the "I added the snippet" box is ticked. */
function CodeFooter({ onBack, onFinish }: { onBack: () => void; onFinish: () => void }) {
  const connected = useValue<boolean>("snippetInstalled") === true
  const busy = useFormState((f) => BUSY_STATUSES.has(f.getStatus()))
  return (
    <div className="flex justify-end gap-2 border-t pt-3">
      <Button type="button" size="sm" variant="outline" onClick={onBack}>
        Go back
      </Button>
      <When if={atStep2}>
        <Button type="button" size="sm" disabled={!connected || busy} onClick={onFinish}>
          Finish setup
        </Button>
      </When>
      <When if={atStep2} not>
        <Button type="button" size="sm" disabled={!connected || busy} onClick={onFinish}>
          Save changes
        </Button>
      </When>
    </div>
  )
}

/** What one press of the primary button ended in (the submit's result). */
type ShellOutcome = "saved-stay" | "code" | "left" | "relay-addon" | "finished"

interface ShellFormProps<T extends object> {
  shell: ShellController
  form: FormStore<T>
  /** The channel's setup mutation, unwrapped (\`helpdeskSetup\` → the saved record). */
  save: (payload: T) => Promise<Connector>
  /** \`showCodePage()\`: when the install-code page follows the form. */
  showCode: Cond
  /** The app name the snippet page tells the user to use. */
  snippetName: string
  /** The channel's own fields (the card under the header). */
  fields: ReactNode
  /** The "Events" card. */
  events: ReactNode
  /** Snippet-page intro card (which webhook events the snippet carries). */
  codeIntro?: ReactNode
}

/** The shell: header card + channel fields + events, then the snippet page, one primary button whose job follows the page. */
function ShellForm<T extends object>({ shell, form, save, showCode, snippetName, fields, events, codeIntro }: ShellFormProps<T>) {
  const { record, server } = shell
  const name = record.edges.template.name
  const relay = isRelayChannel(record.channel)
  const active = record.status === CONNECTOR_STATUS.active
  const { confirm, dialog } = useConfirm()
  // "has changes" counts only what the payload sends: the UI-only acknowledgement never does (gap L)
  const hasChanges = (): boolean => form.isDirty({ sent: true })

  /** \`connectorActivate\`; a failure re-reads the record. */
  const finish = async (): Promise<boolean> => {
    try {
      return (await server.connectorActivate(record.id)).connectorActivate
    } catch (err) {
      shell.refetch()
      throw asSubmitError(err)
    }
  }
  const finished = (): void => shell.leave({ to: ROUTE_CONNECTORS, toast: { ...FINISH_TOAST, tone: "caution" }, why: relay ? \`Finished. A second toast follows: “\${RELAY_HELP_TOAST.title} \${RELAY_HELP_TOAST.message}”\` : "Finished." })

  /** The branch taken after a save (from the save's answer), or \`null\` when nothing was saved. */
  const routeOf = (results: Readonly<Record<string, unknown>>): NextAfterSave | null => {
    const saved = results.save
    return isConnector(saved) ? nextAfterSave(saved, { hosted: saved.isHosted === true, showsCode: truthy(form.evaluate(showCode)) }) : null
  }
  // ONE submission: save, then finish. Finish is skipped when the save stays on the page, and
  // waits (gap J \`gate\`) for the install-snippet page when the branch opens it: the snippet page's
  // button is the next submit, which resumes at Finish. A retry resumes at the failed phase.
  const phases: PipelinePhase<T>[] = [
    {
      id: "save",
      label: \`Save \${name}\`,
      // re-run the save only when what it sends changed
      inputs: (p) => p,
      run: async (p) => {
        try {
          return await save(p)
        } catch (err) {
          throw asSubmitError(err)
        }
      },
    },
    {
      id: "finish",
      label: "Finish setup",
      when: (_p, results) => {
        const next = routeOf(results)
        return next !== null && next !== "stay"
      },
      gate: (_p, results) => {
        const next = routeOf(results)
        return next === "code" || next === "relay-addon"
      },
      run: finish,
    },
  ]
  const pipeline = useSubmitPipeline(phases)
  // leaving the code page starts the submission over (the next Next saves again)
  const backToForm = (refetch: boolean): void => {
    pipeline.pipeline.reset()
    shell.backToForm(refetch)
  }

  const submit = async (payload: T, ctx: SubmitContext): Promise<ShellOutcome> => {
    if (shell.page === "code") {
      await pipeline.onSubmit(payload, ctx)
      finished()
      return "finished"
    }
    // an active connector with nothing changed skips the save entirely
    if (!hasChanges() && active) {
      if (truthy(form.evaluate(showCode))) {
        shell.openCode()
        return "code"
      }
      shell.leave({ to: ROUTE_CONNECTORS, why: "Nothing changed on an active connector: no request was sent." })
      return "left"
    }
    const next = routeOf(await pipeline.onSubmit(payload, ctx))
    if (next === null || next === "stay") return "saved-stay"
    if (next === "finish") finished()
    if (next === "code") shell.openCode()
    if (next === "relay-addon") {
      // stand-in for the relay add-on modal (its own form and mutation, outside the shell): Save continues to the snippet page
      void confirm({ title: "Relay add-on", body: "Stand-in for the relay add-on modal. Save continues to the install snippet; Cancel stays on the settings.", confirmLabel: "Save", cancelLabel: "Cancel" }).then((ok) => {
        if (ok) shell.openCode()
      })
    }
    return next === "finish" ? "finished" : next
  }

  const leaveBack = (): void => shell.leave({ to: ROUTE_CONNECTORS, why: isNewSetup(record.status, record.step) ? "Back from a new setup." : "Back to the connector's page." })
  const askLeave = async (): Promise<void> => {
    const ok = await confirm({ title: \`Adding \${name}\`, body: "Leave this setup? The connector is not active until every step is done. You can come back and finish it later.", confirmLabel: "Discard", cancelLabel: "Keep editing" })
    if (ok) leaveBack()
  }
  const askFinish = async (): Promise<void> => {
    if (!hasChanges() && active) {
      shell.leave({ to: ROUTE_CONNECTORS, why: "Nothing changed on an active connector: no request was sent." })
      return
    }
    const ok = await confirm({ title: "Is the app enabled?", body: \`Did you save and enable “\${snippetName}” in your helpdesk? If not, go back and finish that step first.\`, confirmLabel: "Yes, complete setup", cancelLabel: "No, go back" })
    if (ok) void form.submit(submit)
  }

  return (
    <Form form={form} onSubmit={submit} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button type="button" size="sm" variant="ghost" onClick={() => (shell.page === "code" ? backToForm(false) : leaveBack())}>
          ← Back
        </Button>
        <h3 className="text-sm font-semibold">Activating {name}</h3>
        <Badge variant="outline" className="ms-auto">
          {record.status} · step {record.step ?? "–"}
        </Badge>
      </div>
      <When if={onPage("form")}>
        <div className="flex flex-col gap-3 rounded-lg border p-3">
          <div>
            <p className="text-[13px] font-semibold">{name}</p>
            <p className="text-[12px] text-muted-foreground">{record.edges.template.subTitle}</p>
          </div>
          {fields}
        </div>
        {events}
        <div className="flex justify-end gap-2 border-t pt-3">
          <Button type="button" size="sm" variant="outline" onClick={() => void askLeave()}>
            Go back
          </Button>
          <When if={showCode}>
            <Form.Submit className="h-7 rounded-md bg-primary px-3 text-[13px] font-medium text-primary-foreground disabled:opacity-50">Next</Form.Submit>
          </When>
          <When if={showCode} not>
            <Form.Submit className="h-7 rounded-md bg-primary px-3 text-[13px] font-medium text-primary-foreground disabled:opacity-50">Save changes</Form.Submit>
          </When>
        </div>
        <SubmitPhases phases={pipeline.phases} />
      </When>
      <When if={onPage("code")}>
        {codeIntro}
        {relay ? <p className="rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5 text-[13px]">This snippet is shared by every relayed channel, so add it once; adding it twice relays each message twice.</p> : null}
        <div className="flex flex-col gap-3 rounded-lg border p-3">
          {shell.code ? (
            <Suspense fallback={<Skeleton className="h-24 w-full" />}>
              <CodeBlock code={shell.code} />
            </Suspense>
          ) : null}
          <p className="text-[13px] font-medium">Finish the connection with these steps:</p>
          <InstallSteps snippetName={snippetName} relay={relay} />
          {/* UI-only: gates the button, never sent */}
          <CheckboxField name="snippetInstalled" local label="I added the snippet and enabled the app." />
        </div>
        <CodeFooter onBack={() => backToForm(hasChanges() && active)} onFinish={() => void askFinish()} />
        <SubmitPhases phases={pipeline.phases} />
      </When>
      <Form.Status
        className="text-[13px]"
        error={(err) => (
          <p className="rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-destructive">
            <span className="font-medium">Error</span> — {capitalizeFirst(err.message)}
          </p>
        )}
      />
      {dialog}
    </Form>
  )
}

/** One event row: its in-app / webhook booleans side by side (the stored shape). */
function EventRow({ label, inApp, webhook, rules }: { label: string; inApp?: string; webhook: string; rules?: Validator[] }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border-b py-1 last:border-b-0">
      <span className="text-[13px]">{label}</span>
      {inApp ? <CheckboxField name={inApp} label="In-app" /> : <span className="w-24 text-[12px] text-muted-foreground">—</span>}
      <CheckboxField name={webhook} label="Webhook" rules={rules} />
    </div>
  )
}

// ── channel 1: Helpdesk sync ─────────────────────────────────────────

/** The helpdesk setup input + the snippet page's UI-only acknowledgement. */
interface HelpdeskValues {
  workspaceId: string
  helpdeskContactKey: ContactKey
  notify: HelpdeskEventsInput
  snippetInstalled: boolean
}

const hd = kit<HelpdeskValues>()

/** The backend rejects in-app and webhook both on for one event; turning one on clears the sibling. */
const exclusive = (inApp: "notify.eventCreated" | "notify.eventAssigned" | "notify.eventClosed", webhook: "notify.eventCreatedWebhook" | "notify.eventAssignedWebhook" | "notify.eventClosedWebhook") => [
  { on: [webhook], when: hd.c.eq(webhook, true), do: [{ set: inApp, to: false }] },
  { on: [inApp], when: hd.c.eq(inApp, true), do: [{ set: webhook, to: false }] },
]

const helpdeskModel = defineForm<HelpdeskValues>()(() => ({
  fields: [],
  // the code page hides the settings without dropping them AND they are still the payload
  // (both pages stay mounted and every key is sent) — so the code page's submit
  // resumes the paused pipeline with the same save inputs instead of saving again
  whenHidden: "keep-and-send",
  effects: [...exclusive("notify.eventClosed", "notify.eventClosedWebhook"), ...exclusive("notify.eventCreated", "notify.eventCreatedWebhook"), ...exclusive("notify.eventAssigned", "notify.eventAssignedWebhook")],
}))

/** The snippet page shows for the helpdesk channel when not hosted and any webhook transport is on. */
const helpdeskShowCode: Cond = hd.c.and(
  hd.c.not(hd.c.ctx("hosted")),
  hd.c.or(hd.c.eq("notify.eventClosedWebhook", true), hd.c.eq("notify.eventCreatedWebhook", true), hd.c.eq("notify.eventAssignedWebhook", true)),
)

/** The paths \`helpdeskSetup\` sends. */
/** Labels of the webhook events the snippet carries. */
const HELPDESK_WEBHOOK_LABELS: Readonly<Record<string, string>> = { eventClosedWebhook: "Ticket closed", eventAssignedWebhook: "Ticket assigned", eventCreatedWebhook: "Ticket created" }

/** The helpdesk form's defaults from the loaded record. */
function helpdeskDefaults(r: Connector): HelpdeskValues {
  return {
    workspaceId: r.workspaceId ?? "",
    helpdeskContactKey: toContactKey(r.contactKey),
    notify: {
      eventClosed: r.eventClosed ?? false,
      eventAssigned: r.eventAssigned ?? false,
      eventCreated: r.eventCreated ?? false,
      eventCreatedWebhook: r.eventHookCreated ?? false,
      eventClosedWebhook: r.eventHookClosed ?? false,
      eventAssignedWebhook: r.eventHookAssigned ?? false,
    },
    snippetInstalled: false,
  }
}

/**
 * The draft save of a NEW setup when the page is left — on unmount, whether or not
 * anything changed, and no call when the mapped input is empty.
 */
function draftOnLeave<T>(shell: ShellController, toInput: (values: T) => DraftInput | null) {
  const newSetup = isNewSetup(shell.record.status, shell.record.step)
  return saveOnLeave<T>({
    when: () => newSetup,
    save: async ({ values }) => {
      const input = toInput(values)
      if (input) await shell.server.connectorSaveDraft(shell.record.id, input)
    },
  })
}

function HelpdeskSetup({ shell }: { shell: ShellController }) {
  const form = useForm<HelpdeskValues>({ defaultValues: helpdeskDefaults(shell.record), model: helpdeskModel, plugins: [draftOnLeave<HelpdeskValues>(shell, (v) => toDraftInput(v.workspaceId, v.helpdeskContactKey))] })
  const save = async (v: HelpdeskValues): Promise<Connector> => {
    const input: HelpdeskSetupInput = { workspaceId: v.workspaceId, helpdeskContactKey: v.helpdeskContactKey, notify: v.notify }
    return (await shell.server.helpdeskSetup(shell.record.id, input)).helpdeskSetup
  }
  return (
    <ShellForm
      shell={shell}
      form={form}
      save={save}
      showCode={helpdeskShowCode}
      snippetName="Acme Connect – Helpdesk"
      fields={
        <>
          <TextField name="workspaceId" label="Helpdesk workspace ID" description="Helpdesk → Admin → Workspace." required requiredMessage="ID is required" />
          <RadioGroupField name="helpdeskContactKey" label="Match contacts by" options={[...CONTACT_KEY_OPTIONS]} />
        </>
      }
      events={
        <div className="rounded-lg border p-3">
          <p className="mb-1 text-[13px] font-semibold">Events</p>
          <EventRow label="Ticket closed" webhook="notify.eventClosedWebhook" />
          <EventRow
            label="Ticket created"
            inApp="notify.eventCreated"
            webhook="notify.eventCreatedWebhook"
            rules={[hd.v.assert(hd.c.not(hd.c.and(hd.c.eq("notify.eventCreated", true), hd.c.eq("notify.eventCreatedWebhook", true))), "In-app and webhook can’t both be on")]}
          />
          <EventRow label="Ticket assigned" inApp="notify.eventAssigned" webhook="notify.eventAssignedWebhook" />
        </div>
      }
      codeIntro={
        <div className="rounded-lg border p-3">
          <p className="text-[13px] font-semibold">Webhook events</p>
          <DisplayField
            name="notify"
            label="Sent by the install snippet"
            tone="inline"
            render={(adv) =>
              typeof adv === "object" && adv !== null
                ? Object.entries(adv)
                    .filter(([k, on]) => on === true && k in HELPDESK_WEBHOOK_LABELS)
                    .map(([k]) => HELPDESK_WEBHOOK_LABELS[k])
                    .join(", ")
                : ""
            }
          />
        </div>
      }
    />
  )
}

// ── channel 2: Chat relay (server-relayed) ───────────────────────────

/** The chat-relay setup input + the snippet page's acknowledgement. */
interface RelayValues {
  workspaceId: string
  accessToken: string
  contactKey: ContactKey
  notify: RelayEventsInput
  excludeSources: string
  archiveSources: string
  excludeInternal: boolean
  snippetInstalled: boolean
}

const rc = kit<RelayValues>()

const relayModel = defineForm<RelayValues>()(() => ({
  fields: [],
  whenHidden: "keep-and-send", // see helpdeskModel
  effects: [
    { on: ["notify.eventCreatedWebhook"], when: rc.c.eq("notify.eventCreatedWebhook", true), do: [{ set: "notify.eventCreated", to: false }] },
    { on: ["notify.eventCreated"], when: rc.c.eq("notify.eventCreated", true), do: [{ set: "notify.eventCreatedWebhook", to: false }] },
  ],
}))

/** The snippet page shows for a server-relayed channel always, unless the install is hosted. */
const relayShowCode: Cond = rc.c.not(rc.c.ctx("hosted"))

/** The relay option keys whose per-path dirty state the panel reports. */
const RELAY_OPTION_PATHS = ["excludeSources", "archiveSources", "excludeInternal"] as const

/** The helpdesk connector's workspace ID, as app context: the relay may not reuse it. */
const PRIMARY_WORKSPACE_ID = "555000111"

function relayDefaults(r: Connector): RelayValues {
  return {
    workspaceId: r.workspaceId ?? "",
    contactKey: toContactKey(r.contactKey),
    accessToken: r.accessToken ?? "",
    notify: {
      eventCreated: r.eventCreated ?? false,
      eventAssigned: r.eventAssigned ?? false,
      // relaying messages is the point of the connector: always on, locked in the UI
      relayMessages: true,
      eventCreatedWebhook: r.eventHookCreated ?? false,
      eventAssignedWebhook: r.eventHookAssigned ?? false,
      relayEdits: r.relayEdits ?? false,
    },
    excludeSources: r.excludeSources ?? "",
    archiveSources: r.archiveSources ?? "",
    excludeInternal: r.excludeInternal ?? false,
    snippetInstalled: false,
  }
}

/** Which server-side option keys differ from the loaded record — the engine's per-path dirty, replacing three hand comparisons. */
function RelayDirty() {
  const dirty = useFormState((f) => RELAY_OPTION_PATHS.filter((p) => f.isDirty(p)).join(", "))
  return <p className="text-[12px] text-muted-foreground">Changed server-side options: {dirty === "" ? "none" : dirty}</p>
}

/** The relay keys the settings modal edits: three SIBLING top-level keys of the flat input. */
const RELAY_SETTINGS_KEYS = ["excludeSources", "archiveSources", "excludeInternal"] as const

/**
 * The relay settings modal: a dialog over three sibling keys, seeded from the form and
 * written back as ONE edit on Save (\`pick\`); Cancel discards. The source pickers hold a
 * list while the form keeps the comma-joined string the input sends (\`views.commaList\`).
 */
function RelaySettings({ form }: { form: FormStore<RelayValues> }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button type="button" size="sm" variant="outline" className="w-fit" onClick={() => setOpen(true)}>
        Edit settings
      </Button>
      <PickSubFormDialog
        parent={form}
        pick={RELAY_SETTINGS_KEYS}
        empty={{ excludeSources: "", archiveSources: "", excludeInternal: false }}
        open={open}
        onOpenChange={setOpen}
        title="Relay settings"
        submitLabel="Save"
      >
        <MultiSelectField name="excludeSources" label="Skip these sources" options={[...SOURCE_OPTIONS]} view={views.commaList()} />
        <MultiSelectField name="archiveSources" label="Archive without notifying" options={[...SOURCE_OPTIONS]} view={views.commaList()} />
        <CheckboxField name="excludeInternal" label="Skip internal conversations" description="Don't relay conversations between teammates. Useful when staff also chat in the same inbox." />
      </PickSubFormDialog>
    </>
  )
}

function RelayChatSetup({ shell }: { shell: ShellController }) {
  const form = useForm<RelayValues>({ defaultValues: relayDefaults(shell.record), model: relayModel, context: { primaryWorkspaceId: PRIMARY_WORKSPACE_ID }, plugins: [draftOnLeave<RelayValues>(shell, (v) => toDraftInput(v.workspaceId, v.contactKey))] })
  const save = async (v: RelayValues): Promise<Connector> => {
    const input: RelayChatSetupInput = {
      workspaceId: v.workspaceId,
      accessToken: v.accessToken,
      contactKey: v.contactKey,
      notify: v.notify,
      excludeSources: v.excludeSources,
      archiveSources: v.archiveSources,
      excludeInternal: v.excludeInternal,
    }
    return (await shell.server.relayChatSetup(shell.record.id, input)).relayChatSetup
  }
  return (
    <ShellForm
      shell={shell}
      form={form}
      save={save}
      showCode={relayShowCode}
      snippetName="Acme Connect – Relay"
      fields={
        <>
          <TextField
            name="workspaceId"
            label="Chat workspace ID"
            required
            requiredMessage="ID is required"
            // app context: the helpdesk connector's workspace ID
            rules={[rc.v.assert(rc.c.ne("workspaceId", rc.e.ctx("primaryWorkspaceId")), "This workspace ID is already used by another connector.")]}
            description={\`Try \${PRIMARY_WORKSPACE_ID} (the helpdesk connector's ID) to see the rule.\`}
          />
          <TextField name="accessToken" label="Access token" required requiredMessage="Access token is required" />
          <RadioGroupField name="contactKey" label="Match contacts by" options={[...CONTACT_KEY_OPTIONS]} />
        </>
      }
      events={
        <div className="flex flex-col gap-2 rounded-lg border p-3">
          <p className="text-[13px] font-semibold">Events</p>
          <SwitchField name="notify.relayMessages" label="Messages (relayed, always on)" disabled />
          <SwitchField name="notify.relayEdits" label="Message edits (relayed)" />
          <EventRow label="Ticket created" inApp="notify.eventCreated" webhook="notify.eventCreatedWebhook" />
          <div className="flex flex-col gap-2 rounded-md bg-muted/40 p-2">
            <p className="text-[13px] font-medium">Relay settings</p>
            <DisplayField name="excludeSources" label="Skip these sources" tone="inline" render={(v) => (v === "" ? "none" : String(v))} />
            <DisplayField name="archiveSources" label="Archive without notifying" tone="inline" render={(v) => (v === "" ? "none" : String(v))} />
            <DisplayField name="excludeInternal" label="Skip internal conversations" tone="inline" render={(v) => (v === true ? "yes" : "no")} />
            <RelaySettings form={form} />
            <RelayDirty />
          </div>
        </div>
      }
    />
  )
}

/** Demo knobs: the record the server starts from, and a fail-once switch. */
interface DemoConfig {
  status: ConnectorStatus
  step: number
  hosted: boolean
}

const STEPS = [1, 2] as const

/** One channel on the shell, with the server knobs and the request log beside it. */
export function ChannelDemo({ channel }: { channel: Channel }) {
  const [config, setConfig] = useState<DemoConfig>({ status: CONNECTOR_STATUS.created, step: 1, hosted: false })
  const [server, setServer] = useState<ConnectorServer>(() => createConnectorServer(seedConnector(channel, config.status, config.step, config.hosted)))
  const [failNext, setFailNext] = useState<FailPoint>("none")
  const [visit, setVisit] = useState(0)
  const [left, setLeft] = useState<ShellExit | null>(null)
  const calls = useSyncExternalStore(server.subscribe, server.calls, server.calls)
  const reseed = (next: DemoConfig): void => {
    setConfig(next)
    setServer(createConnectorServer(seedConnector(channel, next.status, next.step, next.hosted)))
    setFailNext("none")
    setLeft(null)
    setVisit((v) => v + 1)
  }
  const reopen = (): void => {
    setLeft(null)
    setVisit((v) => v + 1)
  }
  return (
    <TwoCol>
      <div className="min-w-0">
        {left ? (
          <div className="flex flex-col gap-2 rounded-lg border p-3 text-[13px]">
            <p>
              Navigated to <code>{left.to}</code>. {left.why}
            </p>
            {left.toast ? (
              <p className="rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5">
                <span className="font-medium">{left.toast.title}</span> — {left.toast.message}
              </p>
            ) : null}
            <Button type="button" size="sm" className="w-fit" onClick={reopen}>
              Reopen the setup page
            </Button>
          </div>
        ) : (
          <SetupPage key={visit} server={server} onLeave={setLeft}>
            {(shell) => (channel === CHANNEL.helpdesk ? <HelpdeskSetup shell={shell} /> : <RelayChatSetup shell={shell} />)}
          </SetupPage>
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-3">
        <SidePanel title="Server record" meta="connectorGet">
          <div className="flex flex-col gap-2 p-3 text-[13px]">
            <div className="flex flex-wrap items-center gap-1">
              <span className="w-12 text-muted-foreground">status</span>
              {CONNECTOR_STATUSES.map((s) => (
                <Button key={s} type="button" size="sm" variant={config.status === s ? "default" : "outline"} className="h-6 px-2 text-[12px]" onClick={() => reseed({ ...config, status: s })}>
                  {s}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <span className="w-12 text-muted-foreground">step</span>
              {STEPS.map((s) => (
                <Button key={s} type="button" size="sm" variant={config.step === s ? "default" : "outline"} className="h-6 px-2 text-[12px]" onClick={() => reseed({ ...config, step: s })}>
                  {s}
                </Button>
              ))}
            </div>
            <label className="flex items-center justify-between gap-3">
              <span>Hosted install (isHosted)</span>
              <Switch checked={config.hosted} onCheckedChange={(on) => reseed({ ...config, hosted: on })} aria-label="Hosted install" />
            </label>
            <div className="flex flex-wrap items-center gap-1">
              <span className="w-12 text-muted-foreground">fail</span>
              {FAIL_POINTS.map((p) => (
                <Button
                  key={p}
                  type="button"
                  size="sm"
                  variant={failNext === p ? "default" : "outline"}
                  className="h-6 px-2 text-[12px]"
                  onClick={() => {
                    server.setFailNext(p)
                    setFailNext(p)
                  }}
                >
                  {p}
                </Button>
              ))}
            </div>
            <p className="text-[12px] text-muted-foreground">Changing the record reopens the page. “fail” makes the next such call answer a GraphQL error once.</p>
          </div>
        </SidePanel>
        <SidePanel title="Requests" meta={calls.length}>
          <PanelLog empty="No requests yet.">
            {calls.map((c) => (
              <div key={c.n} className={c.ok ? "" : "text-destructive"}>
                {c.n}. {c.operation} {c.ok ? "" : "(error)"}
                <pre className="overflow-x-auto whitespace-pre-wrap break-all text-muted-foreground">{JSON.stringify(c.variables)}</pre>
              </div>
            ))}
          </PanelLog>
        </SidePanel>
      </div>
    </TwoCol>
  )
}

// ---- page chrome: the panels beside the form
/** A short log as a panel body, with an empty-state line. */
function PanelLog({ empty, children }: { empty: ReactNode; children?: ReactNode }) {
  const items = Children.toArray(children)
  return <div className="space-y-0.5 p-3 font-mono text-[11px]">{items.length === 0 ? <p className="font-sans text-muted-foreground">{empty}</p> : items}</div>
}

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

/** The form beside its side panels (one column below lg). */
function TwoCol({ children, stack = false }: { children: ReactNode; stack?: boolean }) {
  return <div className={cn("grid grid-cols-1 gap-4", !stack && "lg:grid-cols-[minmax(0,1fr)_280px]")}>{Children.toArray(children)}</div>
}

// ---- the examples
export function HelpdeskSyncExample() {
  return (
    <ChannelDemo channel={CHANNEL.helpdesk} />
  )
}

export function ChatRelayExample() {
  return (
    <ChannelDemo channel={CHANNEL.relayChat} />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./settings-shell-AmrBwP47.js`),[]));function qe(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(n,{title:`Settings shell`,children:[`One settings page shared by every connector channel of an invented app, built on the public API with generated-client GraphQL shapes. Two pages on one form — settings, then an install-snippet page shown only when the rule `,(0,j.jsx)(`code`,{children:`showCode`}),` holds (`,(0,j.jsx)(`code`,{children:`<When>`}),` over app context `,(0,j.jsx)(`code`,{children:`c.ctx("page")`}),`); a phased submit (`,(0,j.jsx)(`code`,{children:`useSubmitPipeline`}),`) that saves, then finishes or opens the snippet page as the save's answer dictates, resuming at the failed phase; an active connector with nothing changed skips the save (per-path `,(0,j.jsx)(`code`,{children:`isDirty`}),`); confirms through `,(0,j.jsx)(`code`,{children:`useConfirm`}),`; server errors shown form-level (`,(0,j.jsx)(`code`,{children:`err.response.errors[0].message`}),` via `,(0,j.jsx)(`code`,{children:`mapErrors`}),`). Every part of the shell is on the public API (save-on-leave, a gated pipeline, a sub-form over sibling keys, a comma-list view).`]}),(0,j.jsx)(O,{n:1,title:`Helpdesk sync`,blurb:`Turn a webhook box on: the button becomes Next and the save leads to the install snippet. Set the record to active and press Save without changes: no request is sent.`,code:$,children:(0,j.jsx)(Ge,{})}),(0,j.jsx)(O,{n:2,title:`Chat relay (server-relayed channel)`,blurb:`Always a snippet page; after the save the add-on modal (a stand-in) leads there. The relay options report their own dirty state.`,code:$,children:(0,j.jsx)(Ke,{})})]})}export{qe as component};