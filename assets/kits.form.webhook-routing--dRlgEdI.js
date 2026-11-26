import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CA6hUnoS.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{Bc as r,Cc as i,Ic as a,hi as o,ni as s,ti as c}from"./index-9y5uwRd3.js";import{t as ee}from"./badge-CMT8Lr82.js";import{W as l}from"./messages-BpgLhfTN.js";import{A as u,J as d,Y as f,c as p,f as m,h}from"./field-config-62hz5rv-.js";import{a as g,c as _,f as v,i as y,t as b,y as x}from"./fields-3rMiSNLY.js";import{i as te}from"./fields-extra-DjnCI2Jb.js";import{t as S}from"./async-select-B2ydu276.js";import{t as C}from"./async-multi-select-COIPgg-J.js";import{t as ne}from"./confirm-C3IgtwlA.js";import{t as w}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var T=e(r(),1),E=a();function D(e){return new Promise(t=>setTimeout(t,e))}var re=[`JSON`,`JSON_COMPACT`,`FORM`,`XML`],O=[{value:`JSON`,label:`JSON`},{value:`JSON_COMPACT`,label:`JSON (compact)`},{value:`FORM`,label:`Form-encoded`},{value:`XML`,label:`XML`}],ie=[`DEST_HTTP`,`DEST_QUEUE`,`DEST_WAREHOUSE`,`DEST_DIGEST`],k=[{label:`Invoice paid`,guaranteed:`invoicePaid`,locked:!0},{label:`Invoice refunded`,guaranteed:`invoiceRefunded`},{label:`Ticket events`,instant:`ticketInstant`,batched:`ticketBatched`},{label:`Comment added`,instant:`commentInstant`,batched:`commentBatched`},{label:`User signed up`,instant:`signupInstant`,batched:`signupBatched`},{label:`Record viewed`,instant:`recordViewed`},{label:`Search run`,instant:`searchRun`},{label:`Form submitted`,instant:`formSubmitted`}],A={DEST_HTTP:{name:`HTTPS webhook`,short:`Webhook`,idLabel:`Endpoint ID`,idRequiredMessage:`ID is required`,secretLabel:`Signing secret`,secretRequiredMessage:`Signing secret is required`,secretKey:`signingSecret`,hasArchive:!0,hasTestSkip:!0,uniqueAgainstPrimary:!0,banner:{title:`Webhook delivery tips`,body:`Verify every request's signature and answer within 5 seconds; slow receivers are retried with backoff and may see duplicates, so make your handler idempotent.`,link:`Read the receiver guide.`},events:k},DEST_QUEUE:{name:`Message queue`,short:`Queue`,idLabel:`Queue ID`,idRequiredMessage:`ID is required`,secretLabel:`Queue access key`,secretRequiredMessage:`Queue access key is required`,secretKey:`queueAccessKey`,hasArchive:!1,hasTestSkip:!0,uniqueAgainstPrimary:!1,banner:{title:`Queue delivery tips`,body:`Give the access key publish rights only, and size the queue's retention for at least a day of events so a stalled consumer loses nothing.`,link:`Read the queue guide.`},events:k},DEST_WAREHOUSE:{name:`Warehouse loader`,short:`Warehouse`,idLabel:`Dataset ID`,idRequiredMessage:`ID is required`,secretLabel:`Loader token`,secretRequiredMessage:`Loader token is required`,secretKey:`warehouseToken`,hasArchive:!1,hasTestSkip:!1,uniqueAgainstPrimary:!1,events:k.filter(e=>e.label!==`Invoice refunded`&&e.label!==`Form submitted`)},DEST_DIGEST:{name:`Email digest`,short:`Digest`,idLabel:`Digest list ID`,idRequiredMessage:`Digest list ID is required`,secretLabel:`Mailer API key`,secretRequiredMessage:`Mailer API key is required`,secretKey:`apiKey`,hasArchive:!1,hasTestSkip:!0,uniqueAgainstPrimary:!1,events:[{label:`Payment received`,guaranteed:`invoicePaid`,locked:!0},{label:`Ticket activity`,batched:`ticketBatched`},{label:`New comments`,instant:`commentInstant`,batched:`commentBatched`},{label:`New members`,instant:`signupInstant`,batched:`signupBatched`},{label:`Records opened`,instant:`recordViewed`},{label:`Lists opened`,instant:`listViewed`},{label:`Searches`,instant:`searchRun`}]}};function j(e){return e?e.split(`,`).filter(e=>e!==``):[]}function ae(e){let t=e.destination===`DEST_DIGEST`,n=j(e.skipSources),r=j(e.archiveSources);return{endpointId:e.endpointId??``,secret:(t?e.apiKey:e.signingSecret)??``,payloadFormat:e.payloadFormat??``,eventsInput:{commentInstant:e.commentInstant??!1,ticketInstant:t?!1:e.ticketInstant??!1,signupInstant:e.signupInstant??!1,recordViewed:e.recordViewed??!1,listViewed:e.listViewed??!1,searchRun:e.searchRun??!1,invoicePaid:!0,commentBatched:e.commentBatched??!1,signupBatched:e.signupBatched??!1,ticketBatched:e.ticketBatched??!1,invoiceRefunded:t?!1:e.invoiceRefunded??!1,formSubmitted:e.formSubmitted??!1},delivery:{skipOn:n.length>0,skipSources:n,archiveOn:r.length>0,archiveSources:r,skipTestEvents:e.skipTestEvents??!1}}}function M(e,t){return e?t.join(`,`):``}function N(e,t){let{listViewed:n,...r}=t.eventsInput,i=re.find(e=>e.toString()===t.payloadFormat)??`JSON`,a={endpointId:t.endpointId,payloadFormat:i,eventsInput:r,skipSources:M(t.delivery.skipOn,t.delivery.skipSources)},o={skipTestEvents:t.delivery.skipTestEvents};switch(e){case`DEST_HTTP`:return{...a,...o,signingSecret:t.secret,archiveSources:M(t.delivery.archiveOn,t.delivery.archiveSources)};case`DEST_QUEUE`:return{...a,...o,queueAccessKey:t.secret};case`DEST_WAREHOUSE`:return{...a,warehouseToken:t.secret};case`DEST_DIGEST`:return{...a,...o,apiKey:t.secret,listViewed:n}}}var P={DEST_HTTP:`routeHttpSetup`,DEST_QUEUE:`routeQueueSetup`,DEST_WAREHOUSE:`routeWarehouseSetup`,DEST_DIGEST:`routeDigestSetup`};function oe(e,t,n){return{id:`rt_7f3k2m9q`,destination:e,status:t,priority:n,step:t===`ACTIVE`?100:2,endpointId:t===`ACTIVE`?`ep_48213`:``,signingSecret:t===`ACTIVE`?`whsec_…redacted`:``,apiKey:t===`ACTIVE`?`mk_live_…redacted`:``,payloadFormat:t===`ACTIVE`?`JSON_COMPACT`:null,commentInstant:!0,ticketInstant:!1,signupInstant:!0,recordViewed:!0,listViewed:!1,searchRun:!1,commentBatched:!1,signupBatched:!1,ticketBatched:!0,invoiceRefunded:!0,formSubmitted:!1,skipSources:`import`,archiveSources:null,skipTestEvents:null}}var F=`ep_48213`,se=class extends Error{response;constructor(e){super(e[0]?.message??`GraphQL error`),this.name=`ClientError`,this.response={errors:e,data:null,status:200}}},ce=`000000`,le=`test delivery failed: the endpoint rejected the signing secret`,ue=[`web`,`api`,`import`,`mobile_ios`,`mobile_android`,`scheduler`,`admin_console`],I={async setup(e,t,n){if(await D(500),n.endpointId===`000000`)throw new se([{message:le,path:[P[e]]}]);return{[P[e]]:{id:t,destination:e,status:`PENDING`,step:2,endpointId:n.endpointId,payloadFormat:n.payloadFormat}}},async deliveryPolicyUpsert(e){return await D(400),{deliveryPolicyUpsert:!0}},async routeFinishSetup(e){return await D(400),{routeFinishSetup:!0}},async eventSourceNames(){return await D(300),{eventSourceNames:ue}}};async function L(e){let{eventSourceNames:t}=await I.eventSourceNames(),n=e.trim().toLowerCase();return{options:t.filter(e=>e.toLowerCase().includes(n)).map(e=>({value:e,label:e}))}}async function R(e){let t=e.trim();return{value:t,label:t}}var z={redactPersonal:!1,includeDrafts:!0,excludeSources:``,idFormat:`event_id`},B=[{id:`q_1001`,name:`events-dead-letter-primary-region`,kind:`DEAD_LETTER`,region:`eu-west`},{id:`q_1002`,name:`events-dead-letter`,kind:`DEAD_LETTER`,region:`us-east`},{id:`q_1003`,name:`events-ingest`,kind:`STANDARD`,region:`us-east`},{id:`q_1004`,name:`events-replay`,kind:`STANDARD`,region:`eu-west`}],V={async deadLetterQueues(){return await D(400),{deadLetterQueues:B}},async routeFallbackSetup(e,t){return await D(500),{routeFallbackSetup:{id:e,deadLetterQueueId:t.deadLetterQueueId,step:2}}}};async function H(e){let{deadLetterQueues:t}=await V.deadLetterQueues(),n=e.trim().toLowerCase();return t.filter(e=>e.kind===`DEAD_LETTER`).map(e=>({value:e.id,label:`${e.name.length>30?`${e.name.slice(0,30)}...`:e.name} (${e.region})`})).filter(e=>e.label.toLowerCase().includes(n))}var{c:U,e:de,v:fe}=f(),W=f(),pe=d()(()=>({fields:[],whenHidden:`keep`})),me=d()(()=>({fields:[],whenHidden:`keep`,effects:[{on:[`skipOn`],when:W.c.eq(`skipOn`,!1),do:[{set:`skipSources`,to:W.e.lit([])}]},{on:[`skipOn`],when:W.c.eq(`skipOn`,!0),do:[{reset:`skipSources`}]},{on:[`archiveOn`],when:W.c.eq(`archiveOn`,!1),do:[{set:`archiveSources`,to:W.e.lit([])}]},{on:[`archiveOn`],when:W.c.eq(`archiveOn`,!0),do:[{reset:`archiveSources`}]}]})),he={skipOn:!1,skipSources:[],archiveOn:!1,archiveSources:[],skipTestEvents:!1},ge=f();function _e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ve=`rounded-md border border-dashed border-amber-500/50 bg-amber-500/5 px-2.5 py-1.5 text-[12px] text-amber-800 dark:text-amber-300`;function G({children:e}){return(0,E.jsxs)(`p`,{className:ve,"data-not-supported":!0,children:[`Not yet supported: `,e]})}function ye(){return(0,E.jsxs)(`details`,{className:`rounded-md border bg-sky-500/5 px-2.5 py-1.5 text-[12px]`,children:[(0,E.jsx)(`summary`,{className:`cursor-pointer font-medium`,children:`How to find a source name`}),(0,E.jsxs)(`ol`,{className:`mt-1 list-decimal space-y-0.5 ps-5 text-muted-foreground`,children:[(0,E.jsx)(`li`,{children:`Open Activity and pick any event.`}),(0,E.jsx)(`li`,{children:`Expand the raw payload.`}),(0,E.jsx)(`li`,{children:`Find the "source" field — that is the source name (e.g., api, import).`})]})]})}function be({form:e,profile:t}){return(0,E.jsxs)(v,{parent:e,scope:`delivery`,empty:he,title:`Delivery settings`,description:`Choose which events reach the ${t.name}. Skip noisy sources entirely, or keep them out of live delivery.`,trigger:(0,E.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,className:`w-fit`,children:`Delivery settings`}),submitLabel:`Save`,form:{model:me,context:{hasArchive:t.hasArchive,hasTestSkip:t.hasTestSkip}},children:[(0,E.jsx)(y,{name:`skipOn`,label:`Skip event sources`,description:`When on, events from the listed sources are never delivered.`}),(0,E.jsx)(C,{name:`skipSources`,label:`Sources to skip`,description:`Enter source names`,placeholder:`api, import etc.`,visibleIf:W.c.eq(`skipOn`,!0),loadOptions:({query:e})=>L(e),onCreate:R}),(0,E.jsx)(m,{if:W.c.eq(`skipOn`,!0),children:(0,E.jsx)(ye,{})}),(0,E.jsx)(y,{name:`archiveOn`,label:`Archive instead of deliver`,description:`Events from these sources are stored for replay instead of being sent live.`,visibleIf:W.c.ctx(`hasArchive`)}),(0,E.jsx)(C,{name:`archiveSources`,label:`Sources to archive`,description:`Enter source names`,placeholder:`api, import etc.`,visibleIf:W.c.and(W.c.ctx(`hasArchive`),W.c.eq(`archiveOn`,!0)),loadOptions:({query:e})=>L(e),onCreate:R}),(0,E.jsx)(b,{name:`skipTestEvents`,label:`Skip test-mode events`,description:`Don't send events created in test mode to the ${t.name}.`,visibleIf:W.c.ctx(`hasTestSkip`)}),(0,E.jsx)(G,{children:`adding several comma-separated sources in one go (splitting the typed text on commas; onCreate returns one option).`})]})}function xe({row:e}){return(0,E.jsxs)(`div`,{className:`grid grid-cols-[minmax(8rem,1fr)_repeat(3,minmax(0,7rem))] items-center gap-2 border-t py-1 text-[13px] first:border-t-0`,children:[(0,E.jsx)(`span`,{className:`font-medium`,children:e.label}),e.instant?(0,E.jsx)(b,{name:`eventsInput.${e.instant}`,label:`Instant`}):(0,E.jsx)(`span`,{"aria-hidden":!0,className:`text-muted-foreground`,children:`—`}),e.batched?(0,E.jsx)(b,{name:`eventsInput.${e.batched}`,label:`Batched`}):(0,E.jsx)(`span`,{"aria-hidden":!0,className:`text-muted-foreground`,children:`—`}),e.guaranteed?(0,E.jsx)(b,{name:`eventsInput.${e.guaranteed}`,label:`Guaranteed`,disabled:e.locked===!0}):(0,E.jsx)(`span`,{"aria-hidden":!0,className:`text-muted-foreground`,children:`—`})]})}function Se({page:e,log:t}){let n=oe(e.destination,e.status,e.priority),r=A[e.destination],i=r.uniqueAgainstPrimary&&e.priority===`SECONDARY`?F:``,a=u({defaultValues:ae(n),model:pe,context:{primaryId:i}}),{confirm:o,dialog:s}=ne(),[l,d]=(0,T.useState)(`form`),[f,m]=(0,T.useState)(!1),[h,v]=(0,T.useState)(!0),[y,S]=(0,T.useState)(!1),C=e.status===`ACTIVE`,w=!e.managed,D=async()=>{S(!0);let e=await I.routeFinishSetup(n.id);t(`routeFinishSetup`,{id:n.id},JSON.stringify(e)),S(!1),d(`done`)};return(0,E.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,E.jsxs)(`h4`,{className:`text-sm font-semibold`,children:[`Setting up `,r.name]}),(0,E.jsx)(ee,{variant:C?`default`:`outline`,children:e.status})]}),l===`form`?(0,E.jsxs)(p,{form:a,onSubmit:async r=>{if(C&&!a.isDirty())return d(w?`code`:`done`),{skipped:!0};let i=N(e.destination,r);try{let r=await I.setup(e.destination,n.id,i);t(P[e.destination],{id:n.id,input:i},JSON.stringify(r))}catch(r){throw t(P[e.destination],{id:n.id,input:i},`ClientError: ${JSON.stringify(x(r)?.message)}`),x(r)??r}return e.managed?await D():d(`notice`),{skipped:!1}},className:`flex flex-col gap-4`,children:[r.banner&&h?(0,E.jsxs)(`div`,{className:`flex items-start justify-between gap-2 rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,children:[(0,E.jsxs)(`p`,{children:[(0,E.jsxs)(`span`,{className:`font-medium`,children:[r.banner.title,`.`]}),` `,r.banner.body,` `,(0,E.jsx)(`span`,{className:`underline`,children:r.banner.link})]}),(0,E.jsx)(c,{type:`button`,size:`sm`,variant:`ghost`,className:`h-6 px-1.5`,onClick:()=>v(!1),"aria-label":`Dismiss`,children:`×`})]}):null,(0,E.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,E.jsx)(g,{name:`endpointId`,label:r.idLabel,required:!0,requiredMessage:r.idRequiredMessage,rules:[fe.assert(U.or(U.empty(`endpointId`),U.ne(`endpointId`,de.ctx(`primaryId`))),`This endpoint ID is already used by another route.`)]}),(0,E.jsx)(g,{name:`secret`,label:r.secretLabel,required:!0,requiredMessage:r.secretRequiredMessage})]}),(0,E.jsx)(te,{name:`payloadFormat`,label:`Payload format`,options:O,required:!0,requiredMessage:`Please choose a payload format to continue.`}),(0,E.jsxs)(`section`,{className:`flex flex-col gap-2 rounded-lg border p-3`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,E.jsx)(`h5`,{className:`text-[13px] font-semibold`,children:`Events`}),(0,E.jsx)(be,{form:a,profile:r})]}),(0,E.jsx)(`div`,{className:`flex flex-col`,children:r.events.map(e=>(0,E.jsx)(xe,{row:e},e.label))})]}),(0,E.jsx)(`div`,{className:`flex items-center justify-end gap-2`,children:(0,E.jsx)(p.Submit,{className:J,children:w?`Next`:`Save Changes`})}),(0,E.jsx)(p.Status,{error:e=>(0,E.jsxs)(`p`,{className:`rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-[13px] text-destructive`,children:[(0,E.jsx)(`span`,{className:`font-semibold`,children:`Error`}),` · `,_e(e.message)]})})]}):null,(0,E.jsx)(_,{open:l===`notice`,onOpenChange:e=>{e||d(e=>e===`notice`?`form`:e)},title:`Data processing notice`,description:`Routed events may contain personal data from your workspace (names, email addresses, IP addresses, free-text fields). Failed deliveries are kept for up to 7 days so they can be retried, then deleted.`,submitLabel:`Save`,disableUntilComplete:!0,form:{defaultValues:{iUnderstand:!1}},onSubmit:async()=>{let e=await I.deliveryPolicyUpsert(z);t(`deliveryPolicyUpsert`,{input:z},JSON.stringify(e)),d(w?`code`:`done`)},children:(0,E.jsx)(b,{name:`iUnderstand`,label:`I understand how routed event data is processed and retained.`,required:!0,rules:[ge.v.oneOf([!0],`Confirm to continue`)]})}),l===`code`?(0,E.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-lg border p-3 text-[13px]`,children:[(0,E.jsx)(`p`,{className:`font-medium`,children:`Verify signatures on your receiver`}),(0,E.jsx)(`pre`,{className:`overflow-x-auto rounded-md bg-muted p-2 font-mono text-[12px]`,children:`relay.verify(request, "${n.id}")`}),(0,E.jsxs)(`div`,{className:`flex items-center justify-end gap-2`,children:[(0,E.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>d(`form`),children:`Go Back`}),(0,E.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>m(!0),children:f?`Copied`:`Copy code`}),(0,E.jsx)(c,{type:`button`,size:`sm`,disabled:!f||y,onClick:async()=>{await o({title:`Verify receiver`,body:`Have you deployed the signature check for the ${r.name}?`,confirmLabel:`Yes, complete setup`,cancelLabel:`No, go back`})&&await D()},children:n.step===2?`Finish Setup`:`Save Changes`})]})]}):null,l===`done`?(0,E.jsxs)(`p`,{className:`rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,"data-route-done":!0,children:[(0,E.jsx)(`span`,{className:`font-medium`,children:`Route is live.`}),` Send a test event from Activity to see it arrive.`]}):null,(0,E.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Saving a partial draft of a new setup on leave belongs to the settings shell demo, which does it with the `,(0,E.jsx)(`code`,{children:`saveOnLeave`}),` plugin.`]}),s,(0,E.jsx)(Z,{store:a,title:`Form values`})]})}function Ce(){let[e,n]=(0,T.useState)({destination:`DEST_HTTP`,status:`PENDING`,priority:`PRIMARY`,managed:!1}),[r,i]=(0,T.useState)([]);return(0,E.jsxs)(Q,{children:[(0,E.jsx)(Se,{page:e,log:(e,t,n)=>i(r=>[{n:r.length+1,op:e,variables:t,result:n},...r].slice(0,6))},`${e.destination}:${e.status}:${e.priority}:${e.managed}`),(0,E.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,E.jsx)(Y,{title:`App state`,meta:`not form values`,children:(0,E.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,E.jsx)(`div`,{className:`flex flex-wrap gap-1`,children:ie.map(t=>(0,E.jsx)(c,{type:`button`,size:`sm`,variant:e.destination===t?`default`:`outline`,className:`h-6 px-2 text-[12px]`,onClick:()=>n(e=>({...e,destination:t})),children:A[t].short},t))}),(0,E.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsx)(`span`,{children:`Already active (skip save when clean)`}),(0,E.jsx)(t,{checked:e.status===`ACTIVE`,onCheckedChange:e=>n(t=>({...t,status:e?`ACTIVE`:`PENDING`})),"aria-label":`Already active`})]}),(0,E.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsxs)(`span`,{children:[`Secondary route (primary ID `,F,`)`]}),(0,E.jsx)(t,{checked:e.priority===`SECONDARY`,onCheckedChange:e=>n(t=>({...t,priority:e?`SECONDARY`:`PRIMARY`})),"aria-label":`Secondary route`})]}),(0,E.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsx)(`span`,{children:`Managed receiver (no verify step)`}),(0,E.jsx)(t,{checked:e.managed,onCheckedChange:e=>n(t=>({...t,managed:e})),"aria-label":`Managed receiver`})]}),(0,E.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Type `,(0,E.jsx)(`code`,{children:ce}),` as the ID to see the server reject the save.`]})]})}),(0,E.jsx)(Y,{title:`GraphQL calls`,meta:`newest first`,children:(0,E.jsx)(X,{value:r})})]})]})}var K=f(),we=d()(()=>({fields:[]}));function Te(){let[e,n]=(0,T.useState)(!0),[r,i]=(0,T.useState)(!0),[a,o]=(0,T.useState)(!1),s=a?`q_9999`:`q_1001`;return(0,E.jsxs)(Q,{children:[(0,E.jsx)(q,{saved:s,linked:e,primary:r},s),(0,E.jsx)(Y,{title:`App state`,meta:`c.ctx(…)`,children:(0,E.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,E.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsx)(`span`,{children:`Cloud account linked`}),(0,E.jsx)(t,{checked:e,onCheckedChange:n,"aria-label":`Cloud account linked`})]}),(0,E.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsx)(`span`,{children:`Primary route`}),(0,E.jsx)(t,{checked:r,onCheckedChange:i,"aria-label":`Primary route`})]}),(0,E.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsx)(`span`,{children:`Cloud account switched (saved id gone)`}),(0,E.jsx)(t,{checked:a,onCheckedChange:o,"aria-label":`Cloud account switched`})]})]})})]})}function q({saved:e,linked:t,primary:n}){let r=u({defaultValues:{deadLetterQueueId:e},model:we,context:{linked:t,primary:n}});return(0,E.jsxs)(p,{form:r,onSubmit:async e=>(await V.routeFallbackSetup(`rt_fallback`,{deadLetterQueueId:e.deadLetterQueueId})).routeFallbackSetup,className:`flex flex-col gap-3`,children:[(0,E.jsxs)(m,{if:K.c.and(K.c.ctx(`linked`),K.c.ctx(`primary`)),children:[(0,E.jsx)(S,{name:`deadLetterQueueId`,label:`Dead-letter queue`,placeholder:`Not Set`,required:!0,requiredMessage:`Pick a dead-letter queue from the linked cloud account`,rules:[K.v.assert(K.c.ne(`deadLetterQueueId`,`0`),`Pick a dead-letter queue from the linked cloud account`)],loadOptions:({query:e})=>H(e)}),(0,E.jsx)(G,{children:`clearing a saved id (to the 0 sentinel, marked dirty) once a settled option list no longer carries it — today the stale id stays selected.`}),(0,E.jsx)(p.Submit,{className:J,children:`Next`}),(0,E.jsx)(p.Status,{success:e=>(0,E.jsxs)(`p`,{className:`text-[13px] font-medium text-emerald-700 dark:text-emerald-400`,children:[`Saved fallback queue `,e.deadLetterQueueId,`.`]}),error:e=>(0,E.jsx)(`p`,{className:`text-[13px] text-destructive`,children:e.message})})]}),(0,E.jsx)(m,{if:K.c.not(K.c.and(K.c.ctx(`linked`),K.c.ctx(`primary`))),children:(0,E.jsx)(`p`,{className:`rounded-md border px-2.5 py-1.5 text-[13px]`,children:`Link your cloud account to choose where undeliverable events go.`})}),(0,E.jsx)(Z,{store:r,title:`Form values`})]})}var J=o(s({size:`sm`}),`w-fit`);function Y({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,E.jsxs)(`aside`,{className:o(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,E.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,E.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,E.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function X({value:e,maxHeight:t=`max-h-[420px]`}){return(0,E.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:o(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function Z({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=h(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),l);return(0,E.jsxs)(Y,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,E.jsx)(X,{value:i}),s.length>0?(0,E.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,E.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function Q({children:e,stack:t=!1}){return(0,E.jsx)(`div`,{className:o(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:T.Children.toArray(e)})}var $=`import { useState, type ReactNode, Children } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button, buttonVariants } from "@kitora/ui/button"
import { Switch } from "@kitora/ui/switch"
import { defineForm, kit, mapErrors, type FormStore, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, When, useForm, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { AsyncMultiSelectField, AsyncSelectField, CheckboxField, FormDialog, RadioGroupField, SubFormDialog, SwitchField, TextField, useConfirm, type ComboOption, type RemoteOption, type RemotePage, type SelectOption } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- index
// ── wire types ───────────────────────────────────────────────────────────

/** The payload encodings a destination accepts. */
export const PAYLOAD_FORMATS = ["JSON", "JSON_COMPACT", "FORM", "XML"] as const

export type PayloadFormat = (typeof PAYLOAD_FORMATS)[number]

/** The four radios, in display order. */
export const PAYLOAD_FORMAT_OPTIONS: SelectOption[] = [
  { value: "JSON", label: "JSON" },
  { value: "JSON_COMPACT", label: "JSON (compact)" },
  { value: "FORM", label: "Form-encoded" },
  { value: "XML", label: "XML" },
]

/** The per-event switches — every key required on the wire. */
export interface RouteEventsInput {
  formSubmitted: boolean
  commentInstant: boolean
  commentBatched: boolean
  signupInstant: boolean
  signupBatched: boolean
  ticketInstant: boolean
  ticketBatched: boolean
  searchRun: boolean
  invoicePaid: boolean
  invoiceRefunded: boolean
  recordViewed: boolean
}

/** The base every destination's setup input shares (minus the per-destination secret key). */
interface RouteSetupBase {
  eventsInput: RouteEventsInput
  endpointId: string
  payloadFormat: PayloadFormat
  skipTestEvents?: boolean
  skipSources: string
}

/** The HTTPS webhook input: the only one with an archive list. */
export interface HttpRouteSetupInput extends RouteSetupBase {
  signingSecret: string
  archiveSources: string
}

export interface QueueRouteSetupInput extends RouteSetupBase {
  queueAccessKey: string
}

/** The warehouse loader input; its form never sends \`skipTestEvents\`. */
export interface WarehouseRouteSetupInput extends RouteSetupBase {
  warehouseToken: string
}

/** The email digest input: \`listViewed\` sits at the top level. */
export interface DigestRouteSetupInput extends RouteSetupBase {
  apiKey: string
  listViewed: boolean
}

/** What each destination's setup mutation receives as \`input\`. */
export type RouteSetupInput = HttpRouteSetupInput | QueueRouteSetupInput | WarehouseRouteSetupInput | DigestRouteSetupInput

/** The account-wide delivery policy the data-processing notice saves. */
export interface DeliveryPolicyInput {
  excludeSources: string
  idFormat?: string
  redactPersonal: boolean
  includeDrafts: boolean
}

/** A dead-letter queue as \`deadLetterQueues\` selects it. */
export interface DeadLetterQueue {
  id: string
  name: string
  kind: string
  region: string
}

/** The fallback-queue input: the select's string id. */
export interface FallbackSetupInput {
  deadLetterQueueId: string
}

// ── the saved record (the part these forms read) ─────────────────────────

/** The saved route fields the forms seed from. */
export interface RouteRecord {
  id: string
  destination: Destination
  status: "ACTIVE" | "PENDING"
  priority: "PRIMARY" | "SECONDARY"
  step: number
  endpointId: string | null
  signingSecret: string | null
  apiKey: string | null
  payloadFormat: PayloadFormat | null
  commentInstant: boolean | null
  ticketInstant: boolean | null
  signupInstant: boolean | null
  recordViewed: boolean | null
  listViewed: boolean | null
  searchRun: boolean | null
  commentBatched: boolean | null
  signupBatched: boolean | null
  ticketBatched: boolean | null
  invoiceRefunded: boolean | null
  formSubmitted: boolean | null
  skipSources: string | null
  archiveSources: string | null
  skipTestEvents: boolean | null
}

// ── the form's values ───────────────────────────────────────────────────

/** The delivery-modal slice: the two lists as arrays, plus each list's on/off switch. */
export interface DeliverySettings {
  /** UI-only: the "Skip event sources" switch (on when the saved list is non-blank). */
  skipOn: boolean
  skipSources: string[]
  /** UI-only: the "Archive instead of deliver" switch (HTTPS webhook only). */
  archiveOn: boolean
  archiveSources: string[]
  skipTestEvents: boolean
}

/** The destination form. \`secret\` is the per-destination secret key (signingSecret, queueAccessKey, …). */
export interface RouteValues {
  endpointId: string
  secret: string
  /** \`""\` until chosen: the saved record may carry null. */
  payloadFormat: string
  eventsInput: RouteEventsInput & { listViewed: boolean }
  delivery: DeliverySettings
}

// ── destination profiles: what differs between the four forms (decisions, not mechanism) ──

export const DESTINATIONS = ["DEST_HTTP", "DEST_QUEUE", "DEST_WAREHOUSE", "DEST_DIGEST"] as const

export type Destination = (typeof DESTINATIONS)[number]

/** One event-table row: the label and the eventsInput key behind each delivery column. */
export interface EventRow {
  label: string
  instant?: keyof RouteValues["eventsInput"]
  batched?: keyof RouteValues["eventsInput"]
  guaranteed?: keyof RouteValues["eventsInput"]
  /** Guaranteed "Invoice paid": always on, locked. */
  locked?: boolean
}

export interface DestinationProfile {
  name: string
  /** The short name on the app-state switcher. */
  short: string
  idLabel: string
  idRequiredMessage: string
  secretLabel: string
  secretRequiredMessage: string
  /** The wire key the secret is sent under. */
  secretKey: "signingSecret" | "queueAccessKey" | "warehouseToken" | "apiKey"
  /** HTTPS webhook only: archive some sources instead of delivering them. */
  hasArchive: boolean
  /** Webhook, queue, digest: the "Skip test-mode events" checkbox. */
  hasTestSkip: boolean
  /** HTTPS webhook only: a secondary route may not reuse the primary's endpoint ID. */
  uniqueAgainstPrimary: boolean
  /** The dismissible best-practice banner (webhook, queue). */
  banner?: { title: string; body: string; link: string }
  events: EventRow[]
}

/** Rows shared by the webhook and the queue. */
const FULL_EVENTS: EventRow[] = [
  { label: "Invoice paid", guaranteed: "invoicePaid", locked: true },
  { label: "Invoice refunded", guaranteed: "invoiceRefunded" },
  { label: "Ticket events", instant: "ticketInstant", batched: "ticketBatched" },
  { label: "Comment added", instant: "commentInstant", batched: "commentBatched" },
  { label: "User signed up", instant: "signupInstant", batched: "signupBatched" },
  { label: "Record viewed", instant: "recordViewed" },
  { label: "Search run", instant: "searchRun" },
  { label: "Form submitted", instant: "formSubmitted" },
]

export const DESTINATION_PROFILES: Readonly<Record<Destination, DestinationProfile>> = {
  DEST_HTTP: {
    name: "HTTPS webhook",
    short: "Webhook",
    idLabel: "Endpoint ID",
    idRequiredMessage: "ID is required",
    secretLabel: "Signing secret",
    secretRequiredMessage: "Signing secret is required",
    secretKey: "signingSecret",
    hasArchive: true,
    hasTestSkip: true,
    uniqueAgainstPrimary: true,
    banner: {
      title: "Webhook delivery tips",
      body: "Verify every request's signature and answer within 5 seconds; slow receivers are retried with backoff and may see duplicates, so make your handler idempotent.",
      link: "Read the receiver guide.",
    },
    events: FULL_EVENTS,
  },
  DEST_QUEUE: {
    name: "Message queue",
    short: "Queue",
    idLabel: "Queue ID",
    idRequiredMessage: "ID is required",
    secretLabel: "Queue access key",
    secretRequiredMessage: "Queue access key is required",
    secretKey: "queueAccessKey",
    hasArchive: false,
    hasTestSkip: true,
    uniqueAgainstPrimary: false,
    banner: {
      title: "Queue delivery tips",
      body: "Give the access key publish rights only, and size the queue's retention for at least a day of events so a stalled consumer loses nothing.",
      link: "Read the queue guide.",
    },
    events: FULL_EVENTS,
  },
  // the warehouse loads paid invoices only in bulk: refund and form rows are hidden
  DEST_WAREHOUSE: {
    name: "Warehouse loader",
    short: "Warehouse",
    idLabel: "Dataset ID",
    idRequiredMessage: "ID is required",
    secretLabel: "Loader token",
    secretRequiredMessage: "Loader token is required",
    secretKey: "warehouseToken",
    hasArchive: false,
    hasTestSkip: false,
    uniqueAgainstPrimary: false,
    events: FULL_EVENTS.filter((r) => r.label !== "Invoice refunded" && r.label !== "Form submitted"),
  },
  // the digest's own event names; no refund/form rows; ticket events are batched only
  DEST_DIGEST: {
    name: "Email digest",
    short: "Digest",
    idLabel: "Digest list ID",
    idRequiredMessage: "Digest list ID is required",
    secretLabel: "Mailer API key",
    secretRequiredMessage: "Mailer API key is required",
    secretKey: "apiKey",
    hasArchive: false,
    hasTestSkip: true,
    uniqueAgainstPrimary: false,
    events: [
      { label: "Payment received", guaranteed: "invoicePaid", locked: true },
      { label: "Ticket activity", batched: "ticketBatched" },
      { label: "New comments", instant: "commentInstant", batched: "commentBatched" },
      { label: "New members", instant: "signupInstant", batched: "signupBatched" },
      { label: "Records opened", instant: "recordViewed" },
      { label: "Lists opened", instant: "listViewed" },
      { label: "Searches", instant: "searchRun" },
    ],
  },
}

// ── load: record → form values ───────────────────────────────────────────

/** \`"api,import"\` → \`["api", "import"]\`. */
export function splitSources(saved: string | null): string[] {
  return saved ? saved.split(",").filter((s) => s !== "") : []
}

/** Nulls fall back to \`""\` / \`false\`; guaranteed "Invoice paid" is forced on. */
export function toFormValues(r: RouteRecord): RouteValues {
  const digest = r.destination === "DEST_DIGEST"
  const skip = splitSources(r.skipSources)
  const archive = splitSources(r.archiveSources)
  return {
    endpointId: r.endpointId ?? "",
    secret: (digest ? r.apiKey : r.signingSecret) ?? "",
    payloadFormat: r.payloadFormat ?? "",
    eventsInput: {
      commentInstant: r.commentInstant ?? false,
      // digest: ticket events are batched only and the resolver drops the instant switch
      ticketInstant: digest ? false : (r.ticketInstant ?? false),
      signupInstant: r.signupInstant ?? false,
      recordViewed: r.recordViewed ?? false,
      listViewed: r.listViewed ?? false,
      searchRun: r.searchRun ?? false,
      invoicePaid: true,
      commentBatched: r.commentBatched ?? false,
      signupBatched: r.signupBatched ?? false,
      ticketBatched: r.ticketBatched ?? false,
      // the digest has no refunds: required by the input, dropped by the resolver
      invoiceRefunded: digest ? false : (r.invoiceRefunded ?? false),
      formSubmitted: r.formSubmitted ?? false,
    },
    delivery: {
      skipOn: skip.length > 0,
      skipSources: skip,
      archiveOn: archive.length > 0,
      archiveSources: archive,
      skipTestEvents: r.skipTestEvents ?? false,
    },
  }
}

// ── submit: form values → the destination's exact mutation input ─────────

/** The modal slice's lists as the wire's comma-joined strings; a switched-off list sends \`""\`. */
function joined(on: boolean, list: readonly string[]): string {
  return on ? list.join(",") : ""
}

/** The \`input\` each destination's form sends. */
export function toSetupInput(destination: Destination, v: RouteValues): RouteSetupInput {
  const { listViewed, ...events } = v.eventsInput
  const payloadFormat = PAYLOAD_FORMATS.find((f) => f.toString() === v.payloadFormat) ?? "JSON"
  const base: RouteSetupBase = {
    endpointId: v.endpointId,
    payloadFormat,
    eventsInput: events,
    skipSources: joined(v.delivery.skipOn, v.delivery.skipSources),
  }
  // always sent, so a stored \`true\` can be switched off again; the warehouse never sends it
  const testSkip = { skipTestEvents: v.delivery.skipTestEvents }
  switch (destination) {
    case "DEST_HTTP":
      return { ...base, ...testSkip, signingSecret: v.secret, archiveSources: joined(v.delivery.archiveOn, v.delivery.archiveSources) }
    case "DEST_QUEUE":
      return { ...base, ...testSkip, queueAccessKey: v.secret }
    case "DEST_WAREHOUSE":
      return { ...base, warehouseToken: v.secret }
    case "DEST_DIGEST":
      return { ...base, ...testSkip, apiKey: v.secret, listViewed }
  }
}

/** The mutation name each destination calls. */
export const SETUP_MUTATION: Readonly<Record<Destination, string>> = {
  DEST_HTTP: "routeHttpSetup",
  DEST_QUEUE: "routeQueueSetup",
  DEST_WAREHOUSE: "routeWarehouseSetup",
  DEST_DIGEST: "routeDigestSetup",
}

// ── demo records ────────────────────────────────────────────────────────

/** A pending setup left half-done: no payload format yet, one skipped source. */
export function demoRecord(destination: Destination, status: RouteRecord["status"], priority: RouteRecord["priority"]): RouteRecord {
  return {
    id: "rt_7f3k2m9q",
    destination,
    status,
    priority,
    step: status === "ACTIVE" ? 100 : 2,
    endpointId: status === "ACTIVE" ? "ep_48213" : "",
    signingSecret: status === "ACTIVE" ? "whsec_…redacted" : "",
    apiKey: status === "ACTIVE" ? "mk_live_…redacted" : "",
    payloadFormat: status === "ACTIVE" ? "JSON_COMPACT" : null,
    commentInstant: true,
    ticketInstant: false,
    signupInstant: true,
    recordViewed: true,
    listViewed: false,
    searchRun: false,
    commentBatched: false,
    signupBatched: false,
    ticketBatched: true,
    invoiceRefunded: true,
    formSubmitted: false,
    skipSources: "import",
    archiveSources: null,
    skipTestEvents: null,
  }
}

/** The primary route's endpoint ID a secondary may not reuse. */
export const PRIMARY_ENDPOINT_ID = "ep_48213"

// ── the simulated server ────────────────────────────────────────────────

/** One entry of a GraphQL \`errors[]\` (the spec's shape; \`path\` names the failing root field). */
export interface GraphQLErrorEntry {
  message: string
  path?: string[]
}

/**
 * graphql-request's ClientError, as far as the page reads it: an Error carrying the HTTP response's
 * GraphQL envelope on \`.response\` (\`err.response.errors[0].message\`).
 */
export class GraphQLClientError extends Error {
  readonly response: { errors: GraphQLErrorEntry[]; data: null; status: number }
  constructor(errors: GraphQLErrorEntry[]) {
    super(errors[0]?.message ?? "GraphQL error")
    this.name = "ClientError"
    this.response = { errors, data: null, status: 200 }
  }
}

/** Typing this endpoint ID makes the stub server refuse the save, to show the error path. */
export const REJECTED_ENDPOINT_ID = "000000"

/** Example text only: the page shows whatever \`errors[0].message\` says, capitalised, in a toast titled "Error". */
export const REJECTED_MESSAGE = "test delivery failed: the endpoint rejected the signing secret"

/** The route the setup mutations return (the fields this demo reads). */
export interface SetupResult {
  id: string
  destination: Destination
  status: string
  step: number
  endpointId: string
  payloadFormat: PayloadFormat
}

/** Event source names the account has seen (eventSourceNames: [String!]!). */
const SOURCE_NAMES = ["web", "api", "import", "mobile_ios", "mobile_android", "scheduler", "admin_console"]

/** The demo calls made, newest first, for the side panel. */
export interface CallLogEntry {
  op: string
  variables: unknown
  result: string
}

export const routesApi = {
  /** routeHttpSetup / …Queue / …Warehouse / …Digest (id, input) → Route. */
  async setup(destination: Destination, id: string, input: RouteSetupInput): Promise<{ [op: string]: SetupResult }> {
    await delay(500)
    if (input.endpointId === REJECTED_ENDPOINT_ID) throw new GraphQLClientError([{ message: REJECTED_MESSAGE, path: [SETUP_MUTATION[destination]] }])
    return { [SETUP_MUTATION[destination]]: { id, destination, status: "PENDING", step: 2, endpointId: input.endpointId, payloadFormat: input.payloadFormat } }
  },
  /** deliveryPolicyUpsert(input) → Boolean. */
  async deliveryPolicyUpsert(_input: DeliveryPolicyInput): Promise<{ deliveryPolicyUpsert: boolean }> {
    await delay(400)
    return { deliveryPolicyUpsert: true }
  },
  /** routeFinishSetup(id) → Boolean. */
  async routeFinishSetup(_id: string): Promise<{ routeFinishSetup: boolean }> {
    await delay(400)
    return { routeFinishSetup: true }
  },
  /** eventSourceNames → [String!]! */
  async eventSourceNames(): Promise<{ eventSourceNames: string[] }> {
    await delay(300)
    return { eventSourceNames: SOURCE_NAMES }
  },
}

/** The source picker's options: the account's source names, filtered case-insensitively by the typed text. */
export async function loadSourceNames(query: string): Promise<RemotePage> {
  const { eventSourceNames } = await routesApi.eventSourceNames()
  const q = query.trim().toLowerCase()
  const options: RemoteOption[] = eventSourceNames.filter((s) => s.toLowerCase().includes(q)).map((s) => ({ value: s, label: s }))
  return { options }
}

/** "Add this source to the list": the typed text becomes a source name (trimmed). */
export async function createSourceName(label: string): Promise<RemoteOption> {
  const value = label.trim()
  return { value, label: value }
}

/** What the notice saves for an account with no delivery policy yet. */
export const DELIVERY_POLICY_DEFAULTS: DeliveryPolicyInput = { redactPersonal: false, includeDrafts: true, excludeSources: "", idFormat: "event_id" }

// ── fallback queue ──────────────────────────────────────────────────────

/** The linked cloud account's queues (deadLetterQueues). */
const QUEUES: DeadLetterQueue[] = [
  { id: "q_1001", name: "events-dead-letter-primary-region", kind: "DEAD_LETTER", region: "eu-west" },
  { id: "q_1002", name: "events-dead-letter", kind: "DEAD_LETTER", region: "us-east" },
  { id: "q_1003", name: "events-ingest", kind: "STANDARD", region: "us-east" },
  { id: "q_1004", name: "events-replay", kind: "STANDARD", region: "eu-west" },
]

/** Names longer than this are cut with an ellipsis. */
export const QUEUE_NAME_MAX = 30

export const queuesApi = {
  async deadLetterQueues(): Promise<{ deadLetterQueues: DeadLetterQueue[] }> {
    await delay(400)
    return { deadLetterQueues: QUEUES }
  },
  async routeFallbackSetup(id: string, input: FallbackSetupInput): Promise<{ routeFallbackSetup: { id: string; deadLetterQueueId: string; step: number } }> {
    await delay(500)
    return { routeFallbackSetup: { id, deadLetterQueueId: input.deadLetterQueueId, step: 2 } }
  },
}

/** The select's options: dead-letter queues only, \`name (region)\`. */
export async function loadDeadLetterQueues(query: string): Promise<ComboOption[]> {
  const { deadLetterQueues } = await queuesApi.deadLetterQueues()
  const q = query.trim().toLowerCase()
  return deadLetterQueues
    .filter((a) => a.kind === "DEAD_LETTER")
    .map((a) => ({ value: a.id, label: \`\${a.name.length > QUEUE_NAME_MAX ? \`\${a.name.slice(0, QUEUE_NAME_MAX)}...\` : a.name} (\${a.region})\` }))
    .filter((o) => o.label.toLowerCase().includes(q))
}

// ---- the page
// Real-world flow: an event-routing setup where each destination (HTTPS webhook, message queue,
// warehouse loader, email digest) has its own setup form built from one profile, with realistic
// GraphQL wire shapes (the wire section above). Gaps are rendered as labelled
// "Not yet supported" placeholders.

const { c, e, v } = kit<RouteValues>()

const dk = kit<DeliverySettings>()

/** The destination form: rules live in JSX; the model only sets the hide policy. */
const routeModel = defineForm<RouteValues>()(() => ({ fields: [], whenHidden: "keep" }))

// switching a list off empties it; switching it back on restores what the modal opened with
// (\`reset\` = the scratch store's seed, i.e. the parent's value at open).
const deliveryModel = defineForm<DeliverySettings>()(() => ({
  fields: [],
  whenHidden: "keep",
  effects: [
    { on: ["skipOn"], when: dk.c.eq("skipOn", false), do: [{ set: "skipSources", to: dk.e.lit([]) }] },
    { on: ["skipOn"], when: dk.c.eq("skipOn", true), do: [{ reset: "skipSources" }] },
    { on: ["archiveOn"], when: dk.c.eq("archiveOn", false), do: [{ set: "archiveSources", to: dk.e.lit([]) }] },
    { on: ["archiveOn"], when: dk.c.eq("archiveOn", true), do: [{ reset: "archiveSources" }] },
  ],
}))

const EMPTY_DELIVERY: DeliverySettings = { skipOn: false, skipSources: [], archiveOn: false, archiveSources: [], skipTestEvents: false }

/** The data-processing notice shown before a new route goes live. */
interface NoticeValues {
  iUnderstand: boolean
}

const nk = kit<NoticeValues>()

/** Where the page is in the flow: the form, the notice modal, the receiver step, then done. */
type Stage = "form" | "notice" | "code" | "done"

/** The toast shows the server message with its first letter capitalised. */
function capitalizeFirst(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const NOT_SUPPORTED_CLASS = "rounded-md border border-dashed border-amber-500/50 bg-amber-500/5 px-2.5 py-1.5 text-[12px] text-amber-800 dark:text-amber-300"

/** A labelled placeholder for behaviour the engine cannot express yet. */
function NotSupported({ children }: { children: string }) {
  return <p className={NOT_SUPPORTED_CLASS} data-not-supported>Not yet supported: {children}</p>
}

/** "How to find a source name". */
function SourceNameHelp() {
  return (
    <details className="rounded-md border bg-sky-500/5 px-2.5 py-1.5 text-[12px]">
      <summary className="cursor-pointer font-medium">How to find a source name</summary>
      <ol className="mt-1 list-decimal space-y-0.5 ps-5 text-muted-foreground">
        <li>Open Activity and pick any event.</li>
        <li>Expand the raw payload.</li>
        <li>Find the &quot;source&quot; field — that is the source name (e.g., api, import).</li>
      </ol>
    </details>
  )
}

/** "Delivery settings": edits the \`delivery\` slice, Save writes back, Cancel discards. */
function DeliveryDialog({ form, profile }: { form: FormStore<RouteValues>; profile: DestinationProfile }) {
  return (
    <SubFormDialog
      parent={form}
      scope="delivery"
      empty={EMPTY_DELIVERY}
      title="Delivery settings"
      description={\`Choose which events reach the \${profile.name}. Skip noisy sources entirely, or keep them out of live delivery.\`}
      trigger={<Button type="button" size="sm" variant="outline" className="w-fit">Delivery settings</Button>}
      submitLabel="Save"
      form={{ model: deliveryModel, context: { hasArchive: profile.hasArchive, hasTestSkip: profile.hasTestSkip } }}
    >
      <SwitchField name="skipOn" label="Skip event sources" description="When on, events from the listed sources are never delivered." />
      <AsyncMultiSelectField
        name="skipSources"
        label="Sources to skip"
        description="Enter source names"
        placeholder="api, import etc."
        // sibling: the "Skip event sources" switch
        visibleIf={dk.c.eq("skipOn", true)}
        loadOptions={({ query }) => loadSourceNames(query)}
        onCreate={createSourceName}
      />
      <When if={dk.c.eq("skipOn", true)}>
        <SourceNameHelp />
      </When>
      {/* app context: HTTPS webhook only (the form carries archiveSources) */}
      <SwitchField name="archiveOn" label="Archive instead of deliver" description="Events from these sources are stored for replay instead of being sent live." visibleIf={dk.c.ctx("hasArchive")} />
      <AsyncMultiSelectField
        name="archiveSources"
        label="Sources to archive"
        description="Enter source names"
        placeholder="api, import etc."
        // app context: HTTPS webhook only; sibling: the archive switch
        visibleIf={dk.c.and(dk.c.ctx("hasArchive"), dk.c.eq("archiveOn", true))}
        loadOptions={({ query }) => loadSourceNames(query)}
        onCreate={createSourceName}
      />
      {/* app context: webhook, queue and digest carry skipTestEvents */}
      <CheckboxField name="skipTestEvents" label="Skip test-mode events" description={\`Don't send events created in test mode to the \${profile.name}.\`} visibleIf={dk.c.ctx("hasTestSkip")} />
      <NotSupported>adding several comma-separated sources in one go (splitting the typed text on commas; onCreate returns one option).</NotSupported>
    </SubFormDialog>
  )
}

/** One event row: the label, then a checkbox per delivery mode the destination carries. */
function EventRowFields({ row }: { row: EventRow }) {
  return (
    <div className="grid grid-cols-[minmax(8rem,1fr)_repeat(3,minmax(0,7rem))] items-center gap-2 border-t py-1 text-[13px] first:border-t-0">
      <span className="font-medium">{row.label}</span>
      {row.instant ? <CheckboxField name={\`eventsInput.\${row.instant}\`} label="Instant" /> : <span aria-hidden className="text-muted-foreground">—</span>}
      {row.batched ? <CheckboxField name={\`eventsInput.\${row.batched}\`} label="Batched" /> : <span aria-hidden className="text-muted-foreground">—</span>}
      {row.guaranteed ? <CheckboxField name={\`eventsInput.\${row.guaranteed}\`} label="Guaranteed" disabled={row.locked === true} /> : <span aria-hidden className="text-muted-foreground">—</span>}
    </div>
  )
}

/** App state the page reads: never a form value. */
interface PageState {
  destination: Destination
  status: RouteRecord["status"]
  priority: RouteRecord["priority"]
  managed: boolean
}

/** One destination's setup page: the form, the delivery modal, the notice, then finish. */
function RouteSetupPage({ page, log }: { page: PageState; log: (op: string, variables: unknown, result: string) => void }) {
  const record = demoRecord(page.destination, page.status, page.priority)
  const profile = DESTINATION_PROFILES[page.destination]
  // only a secondary webhook route is checked against the active primary
  const primaryId = profile.uniqueAgainstPrimary && page.priority === "SECONDARY" ? PRIMARY_ENDPOINT_ID : ""
  const form = useForm<RouteValues>({ defaultValues: toFormValues(record), model: routeModel, context: { primaryId } })
  const { confirm, dialog } = useConfirm()
  // demo-chrome: the page's own flow state
  const [stage, setStage] = useState<Stage>("form")
  const [copied, setCopied] = useState(false)
  const [banner, setBanner] = useState(true)
  const [finishing, setFinishing] = useState(false)
  const active = page.status === "ACTIVE"
  // a self-hosted receiver needs the verification step; a managed receiver does not
  const hasCodePage = !page.managed

  const finish = async () => {
    setFinishing(true)
    const res = await routesApi.routeFinishSetup(record.id)
    log("routeFinishSetup", { id: record.id }, JSON.stringify(res))
    setFinishing(false)
    setStage("done")
  }

  const save = async (values: RouteValues) => {
    // an active route with nothing changed skips the save
    if (active && !form.isDirty()) {
      setStage(hasCodePage ? "code" : "done")
      return { skipped: true }
    }
    const input = toSetupInput(page.destination, values)
    try {
      const res = await routesApi.setup(page.destination, record.id, input)
      log(SETUP_MUTATION[page.destination], { id: record.id, input }, JSON.stringify(res))
    } catch (err) {
      log(SETUP_MUTATION[page.destination], { id: record.id, input }, \`ClientError: \${JSON.stringify(mapErrors(err)?.message)}\`)
      // \`err.response.errors[0].message\`, shown form-level (a toast titled "Error")
      throw mapErrors<RouteValues>(err) ?? err
    }
    // managed receiver → finish at once; otherwise → the data-processing notice
    if (page.managed) await finish()
    else setStage("notice")
    return { skipped: false }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-sm font-semibold">Setting up {profile.name}</h4>
        <Badge variant={active ? "default" : "outline"}>{page.status}</Badge>
      </div>
      {stage === "form" ? (
        <Form form={form} onSubmit={save} className="flex flex-col gap-4">
          {profile.banner && banner ? (
            <div className="flex items-start justify-between gap-2 rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]">
              <p>
                <span className="font-medium">{profile.banner.title}.</span> {profile.banner.body} <span className="underline">{profile.banner.link}</span>
              </p>
              <Button type="button" size="sm" variant="ghost" className="h-6 px-1.5" onClick={() => setBanner(false)} aria-label="Dismiss">
                ×
              </Button>
            </div>
          ) : null}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <TextField
              name="endpointId"
              label={profile.idLabel}
              required
              requiredMessage={profile.idRequiredMessage}
              // app context: the active primary route's endpoint ID ("" when this is the primary)
              rules={[v.assert(c.or(c.empty("endpointId"), c.ne("endpointId", e.ctx("primaryId"))), "This endpoint ID is already used by another route.")]}
            />
            <TextField name="secret" label={profile.secretLabel} required requiredMessage={profile.secretRequiredMessage} />
          </div>
          <RadioGroupField name="payloadFormat" label="Payload format" options={PAYLOAD_FORMAT_OPTIONS} required requiredMessage="Please choose a payload format to continue." />
          <section className="flex flex-col gap-2 rounded-lg border p-3">
            <div className="flex items-center justify-between gap-2">
              <h5 className="text-[13px] font-semibold">Events</h5>
              <DeliveryDialog form={form} profile={profile} />
            </div>
            <div className="flex flex-col">
              {profile.events.map((row) => (
                <EventRowFields key={row.label} row={row} />
              ))}
            </div>
          </section>
          <div className="flex items-center justify-end gap-2">
            <Form.Submit className={DEMO_BUTTON}>{hasCodePage ? "Next" : "Save Changes"}</Form.Submit>
          </div>
          <Form.Status error={(err) => <p className="rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-[13px] text-destructive"><span className="font-semibold">Error</span> · {capitalizeFirst(err.message)}</p>} />
        </Form>
      ) : null}
      <FormDialog<NoticeValues, void>
        open={stage === "notice"}
        // Cancel returns to the form; a successful Save has already moved the stage on, so it stays
        onOpenChange={(open) => {
          if (!open) setStage((s) => (s === "notice" ? "form" : s))
        }}
        title="Data processing notice"
        description="Routed events may contain personal data from your workspace (names, email addresses, IP addresses, free-text fields). Failed deliveries are kept for up to 7 days so they can be retried, then deleted."
        submitLabel="Save"
        // Save stays disabled until "I understand" is ticked (N2)
        disableUntilComplete
        form={{ defaultValues: { iUnderstand: false } }}
        onSubmit={async () => {
          const res = await routesApi.deliveryPolicyUpsert(DELIVERY_POLICY_DEFAULTS)
          log("deliveryPolicyUpsert", { input: DELIVERY_POLICY_DEFAULTS }, JSON.stringify(res))
          setStage(hasCodePage ? "code" : "done")
        }}
      >
        <CheckboxField name="iUnderstand" label="I understand how routed event data is processed and retained." required rules={[nk.v.oneOf([true], "Confirm to continue")]} />
      </FormDialog>
      {stage === "code" ? (
        <div className="flex flex-col gap-3 rounded-lg border p-3 text-[13px]">
          <p className="font-medium">Verify signatures on your receiver</p>
          <pre className="overflow-x-auto rounded-md bg-muted p-2 font-mono text-[12px]">{\`relay.verify(request, "\${record.id}")\`}</pre>
          <div className="flex items-center justify-end gap-2">
            <Button type="button" size="sm" variant="outline" onClick={() => setStage("form")}>Go Back</Button>
            <Button type="button" size="sm" variant="outline" onClick={() => setCopied(true)}>{copied ? "Copied" : "Copy code"}</Button>
            <Button
              type="button"
              size="sm"
              disabled={!copied || finishing}
              onClick={async () => {
                if (await confirm({ title: "Verify receiver", body: \`Have you deployed the signature check for the \${profile.name}?\`, confirmLabel: "Yes, complete setup", cancelLabel: "No, go back" })) await finish()
              }}
            >
              {record.step === 2 ? "Finish Setup" : "Save Changes"}
            </Button>
          </div>
        </div>
      ) : null}
      {stage === "done" ? (
        <p className="rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]" data-route-done>
          <span className="font-medium">Route is live.</span> Send a test event from Activity to see it arrive.
        </p>
      ) : null}
      <p className="text-[12px] text-muted-foreground">Saving a partial draft of a new setup on leave belongs to the settings shell demo, which does it with the <code>saveOnLeave</code> plugin.</p>
      {dialog}
      <LivePanel store={form} title="Form values" />
    </div>
  )
}

/** The call log the side panel shows: what each mutation was sent and answered. */
interface Call {
  n: number
  op: string
  variables: unknown
  result: string
}

export function DestinationsExample() {
  // demo-chrome: the app state that picks the destination and changes the flow
  const [page, setPage] = useState<PageState>({ destination: "DEST_HTTP", status: "PENDING", priority: "PRIMARY", managed: false })
  // demo-chrome: the call log
  const [calls, setCalls] = useState<Call[]>([])
  const log = (op: string, variables: unknown, result: string) => setCalls((prev) => [{ n: prev.length + 1, op, variables, result }, ...prev].slice(0, 6))
  return (
    <TwoCol>
      <RouteSetupPage key={\`\${page.destination}:\${page.status}:\${page.priority}:\${page.managed}\`} page={page} log={log} />
      <div className="flex min-w-0 flex-col gap-3">
        <SidePanel title="App state" meta="not form values">
          <div className="flex flex-col gap-2 p-3 text-[13px]">
            <div className="flex flex-wrap gap-1">
              {DESTINATIONS.map((d) => (
                <Button key={d} type="button" size="sm" variant={page.destination === d ? "default" : "outline"} className="h-6 px-2 text-[12px]" onClick={() => setPage((p) => ({ ...p, destination: d }))}>
                  {DESTINATION_PROFILES[d].short}
                </Button>
              ))}
            </div>
            <label className="flex items-center justify-between gap-3">
              <span>Already active (skip save when clean)</span>
              <Switch checked={page.status === "ACTIVE"} onCheckedChange={(on) => setPage((p) => ({ ...p, status: on ? "ACTIVE" : "PENDING" }))} aria-label="Already active" />
            </label>
            <label className="flex items-center justify-between gap-3">
              <span>Secondary route (primary ID {PRIMARY_ENDPOINT_ID})</span>
              <Switch checked={page.priority === "SECONDARY"} onCheckedChange={(on) => setPage((p) => ({ ...p, priority: on ? "SECONDARY" : "PRIMARY" }))} aria-label="Secondary route" />
            </label>
            <label className="flex items-center justify-between gap-3">
              <span>Managed receiver (no verify step)</span>
              <Switch checked={page.managed} onCheckedChange={(on) => setPage((p) => ({ ...p, managed: on }))} aria-label="Managed receiver" />
            </label>
            <p className="text-muted-foreground">
              Type <code>{REJECTED_ENDPOINT_ID}</code> as the ID to see the server reject the save.
            </p>
          </div>
        </SidePanel>
        <SidePanel title="GraphQL calls" meta="newest first">
          <PanelJson value={calls} />
        </SidePanel>
      </div>
    </TwoCol>
  )
}

/** Fallback queue: one id the page sends as the select's string id. */
interface FallbackValues {
  deadLetterQueueId: string
}

const f = kit<FallbackValues>()

const fallbackModel = defineForm<FallbackValues>()(() => ({ fields: [] }))

export function FallbackQueueExample() {
  // demo-chrome: the cloud-account link and the route priority the form gates on
  const [linked, setLinked] = useState(true)
  const [primary, setPrimary] = useState(true)
  const [accountSwitched, setAccountSwitched] = useState(false)
  // a saved id from the previous cloud account is not among the new account's queues
  const saved = accountSwitched ? "q_9999" : "q_1001"
  return (
    <TwoCol>
      <FallbackQueueForm key={saved} saved={saved} linked={linked} primary={primary} />
      <SidePanel title="App state" meta="c.ctx(…)">
        <div className="flex flex-col gap-2 p-3 text-[13px]">
          <label className="flex items-center justify-between gap-3">
            <span>Cloud account linked</span>
            <Switch checked={linked} onCheckedChange={setLinked} aria-label="Cloud account linked" />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span>Primary route</span>
            <Switch checked={primary} onCheckedChange={setPrimary} aria-label="Primary route" />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span>Cloud account switched (saved id gone)</span>
            <Switch checked={accountSwitched} onCheckedChange={setAccountSwitched} aria-label="Cloud account switched" />
          </label>
        </div>
      </SidePanel>
    </TwoCol>
  )
}

function FallbackQueueForm({ saved, linked, primary }: { saved: string; linked: boolean; primary: boolean }) {
  const form = useForm<FallbackValues>({ defaultValues: { deadLetterQueueId: saved }, model: fallbackModel, context: { linked, primary } })
  return (
    <Form
      form={form}
      onSubmit={async (values) => {
        const res = await queuesApi.routeFallbackSetup("rt_fallback", { deadLetterQueueId: values.deadLetterQueueId })
        return res.routeFallbackSetup
      }}
      className="flex flex-col gap-3"
    >
      {/* app context: the form renders only for a linked account on the primary route */}
      <When if={f.c.and(f.c.ctx("linked"), f.c.ctx("primary"))}>
        <AsyncSelectField
          name="deadLetterQueueId"
          label="Dead-letter queue"
          placeholder="Not Set"
          required
          requiredMessage="Pick a dead-letter queue from the linked cloud account"
          rules={[f.v.assert(f.c.ne("deadLetterQueueId", "0"), "Pick a dead-letter queue from the linked cloud account")]}
          loadOptions={({ query }) => loadDeadLetterQueues(query)}
        />
        <NotSupported>clearing a saved id (to the 0 sentinel, marked dirty) once a settled option list no longer carries it — today the stale id stays selected.</NotSupported>
        <Form.Submit className={DEMO_BUTTON}>Next</Form.Submit>
        <Form.Status<{ deadLetterQueueId: string }> success={(r) => <p className="text-[13px] font-medium text-emerald-700 dark:text-emerald-400">Saved fallback queue {r.deadLetterQueueId}.</p>} error={(err) => <p className="text-[13px] text-destructive">{err.message}</p>} />
      </When>
      {/* app context: the link-account screen replaces the form */}
      <When if={f.c.not(f.c.and(f.c.ctx("linked"), f.c.ctx("primary")))}>
        <p className="rounded-md border px-2.5 py-1.5 text-[13px]">Link your cloud account to choose where undeliverable events go.</p>
      </When>
      <LivePanel store={form} title="Form values" />
    </Form>
  )
}

// ---- page chrome: the panels beside the form
/** The primary-button look for \`Form.Submit\` (\`w-fit\`: form stacks are flex columns). */
const DEMO_BUTTON = cn(buttonVariants({ size: "sm" }), "w-fit")

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
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./webhook-routing-DoVhI5ez.js`),[]));function Ee(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(n,{title:`Webhook routing (real-world flow)`,children:[`An event-routing setup for four destinations — HTTPS webhook, message queue, warehouse loader and email digest — each built from one profile (labels, secret key, events, which delivery settings exist), plus a fallback dead-letter queue. Values seed from the saved route, the save sends each destination's exact mutation input, a failure shows`,` `,(0,E.jsx)(`code`,{children:`err.response.errors[0].message`}),` as a toast (`,(0,E.jsx)(`code`,{children:`mapErrors`}),` default source), and the delivery settings modal edits its slice in a scratch store that writes back on Save (`,(0,E.jsx)(`code`,{children:`SubFormDialog`}),`). Dashed amber boxes mark what the engine cannot express yet.`]}),(0,E.jsx)(w,{n:1,title:`Destination setup`,blurb:`Switch the destination, status, priority and managed mode on the right; the GraphQL panel shows each call's variables.`,code:$,children:(0,E.jsx)(Ce,{})}),(0,E.jsx)(w,{n:2,title:`Fallback queue`,blurb:`One dead-letter queue from the linked cloud account; the form exists only for a linked account on the primary route.`,code:$,children:(0,E.jsx)(Te,{})})]})}export{Ee as component};