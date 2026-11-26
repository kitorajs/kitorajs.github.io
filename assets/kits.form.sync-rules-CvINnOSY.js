import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-Clz4Lth_.js";import{t as n}from"./ellipsis-DbSYAn2x.js";import{s as r}from"./kit-docs-DpYhPoxM.js";import{Bc as i,Cc as a,Fn as o,Ic as s,Rn as c,Un as l,Yn as u,er as d,hi as f,ti as p}from"./index-q72zUtm9.js";import{t as m}from"./badge-Be8rVEaF.js";import{W as h}from"./messages-Bsb0m0Hq.js";import{A as ee,J as g,Y as _,c as v,et as te,f as y,g as b,h as x}from"./field-config-DXiPz8Cg.js";import{n as ne}from"./plugins-DTs_adI5.js";import{a as S,f as re,i as C,r as w,t as ie,y as T}from"./fields-CoJCsIMd.js";import{t as ae}from"./submit-pipeline-DZW1PgCy.js";import{i as oe}from"./fields-extra-uoDLzrFQ.js";import{t as se}from"./submit-phases-CFD6333u.js";import{t as ce}from"./confirm-CtFkqwAG.js";import{t as le}from"./display-DRDvnkNX.js";import{t as ue}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var E=e(i(),1),D=s();function O(e){return new Promise(t=>setTimeout(t,e))}var k=[`CONTACTS`,`COMPANIES`,`DEALS`,`TICKETS`,`INVOICES`],de=`EXTERNAL_ID`,fe=class extends Error{response;constructor(e){super(`${e[0]?.message??`GraphQL error`}: ${JSON.stringify({errors:e})}`),this.name=`ClientError`,this.response={errors:e,data:null,status:200}}},A={created:`created`,pending:`pending`,active:`active`};function j(e){let t=e.replace(/[^0-9]/g,``);return Number(t)===0?``:String(Number(t))}var M=`WS-11223344556`,N=450,pe={CONTACTS:`Contacts`,COMPANIES:`Companies`,DEALS:`Deals`,TICKETS:`Tickets`,INVOICES:`Invoices`};function P(){return{id:`sync_crm_1`,status:A.created,step:1,priority:`PRIMARY`,isHosted:!1,regionsEnabled:!1,workspaceNumber:``,matchKey:`DOMAIN`,contactsStream:``,companiesStream:``,dealsStream:``,ticketsStream:``,invoicesStream:``,contactsStreamId:``,contactsOn:!1,contactsBatchOn:!1,companiesRealtimeOn:!1,companiesBatchOn:!1,dealsRealtimeOn:!1,dealsBatchOn:!1,ticketsOn:!1,invoicesOn:!1,syncDeletes:!1,enrichmentActive:!1,enrichmentRegion:``,enrichmentLocale:``,enrichmentSourceId:``,syncOwners:!1,regionalIds:!1,skipArchived:!1,skipTestRecords:!1}}var F=[{id:`6600001`,name:`Contacts (legacy import)`,category:`CONTACTS`,workspaceRef:M,streamKey:`demo-key-001`},{id:`6600002`,name:`Companies (legacy import)`,category:`COMPANIES`,workspaceRef:M,streamKey:`demo-key-002`}],I={record:P(),actions:F,log:[],failNextSave:!1},L=new Set,R=0;function z(e){I={...I,...e};for(let e of L)e()}function B(e,t){z({log:[{at:new Date().toLocaleTimeString(),operation:e,variables:t},...I.log].slice(0,12)})}function V(e){return R+=1,{id:String(77e5+R),name:`Auto sync - ${pe[e]}`,category:e,workspaceRef:M,streamKey:`AutoGen${R}${e.slice(0,3)}x7`}}var H={subscribe(e){return L.add(e),()=>L.delete(e)},snapshot(){return I},reset(){R=0,z({record:P(),actions:F,log:[],failNextSave:!1})},setFailNextSave(e){z({failNextSave:e})},async listStreams(){return await O(N),{listStreams:[...I.actions]}},async fetchWorkspaceRef(){return await O(N*2),{fetchWorkspaceRef:M}},async createStream(e){B(`createStream`,e),await O(N);let t=V(e.type);return z({actions:[...I.actions,t]}),{createStream:t}},async createAllStreams(){B(`createAllStreams`,{}),await O(N*2);let e=k.map(V);return z({actions:[...I.actions,...e]}),{createAllStreams:e}},async syncSaveDraft(e){return B(`syncSaveDraft`,e),await O(N),{syncSaveDraft:I.record}},async syncSetup(e){if(B(`syncSetup`,e),await O(N),I.failNextSave)throw z({failNextSave:!1}),new fe([{message:`link the destination account and pick a contacts stream to sync deletions`,path:[`syncSetup`]}]);let t=e.input,n={...I.record,step:Math.max(I.record.step,2),workspaceNumber:t.workspaceNumber,matchKey:t.matchKey,contactsStream:t.contactsStream??``,companiesStream:t.companiesStream??``,dealsStream:t.dealsStream??``,ticketsStream:t.ticketsStream??``,invoicesStream:t.invoicesStream??``,contactsStreamId:String(t.contactsStreamId??``),contactsOn:t.contactsEnabled,companiesRealtimeOn:t.companiesEnabled&&t.companiesRealtime===!0,companiesBatchOn:t.companiesEnabled&&t.companiesRealtime!==!0,dealsRealtimeOn:t.dealsEnabled&&t.dealsRealtime===!0,dealsBatchOn:t.dealsEnabled&&t.dealsRealtime!==!0,ticketsOn:t.ticketsEnabled,invoicesOn:t.invoicesEnabled??!1,syncDeletes:t.syncDeletes??I.record.syncDeletes,enrichmentActive:t.enrichmentActive,enrichmentRegion:t.enrichmentRegion,enrichmentLocale:t.enrichmentLocale,enrichmentSourceId:t.enrichmentSourceId,syncOwners:t.syncOwners??!1,regionalIds:t.regionalIds??!1,skipArchived:t.skipArchived??!1,skipTestRecords:t.skipTestRecords??!1};return z({record:n}),{syncSetup:n}},async syncInstallSnippet(e){B(`syncInstallSnippet`,e),await O(N);let t=I.record;return{syncInstallSnippet:`// Auto sync webhook · CRM destination
const SYNC = { workspace: "WS-${t.workspaceNumber}", contacts: "${t.contactsStream}" };
hooks.on("record.updated", (e) => window.autoSync?.push(SYNC, e));`}},async syncActivate(e){return B(`syncActivate`,e),await O(N),z({record:{...I.record,status:A.active}}),{syncActivate:!0}},async syncRegionsSetup(e){return B(`syncRegionsSetup`,e),await O(N),z({record:{...I.record,regionsEnabled:e.input.regionsEnabled}}),{syncRegionsSetup:{id:e.id,regionsEnabled:e.input.regionsEnabled,regionOverrides:e.input.regionOverrides}}}};function U(e){let t={data:void 0,fetching:!1,settled:!1},n=!1,r=new Set,i=e=>{t=e;for(let e of r)e()},a=async()=>{n=!0,i({...t,fetching:!0,settled:!1});try{i({data:await e(),fetching:!1,settled:!0})}catch{i({...t,fetching:!1,settled:!1})}};return{subscribe(e){return r.add(e),n||a(),()=>r.delete(e)},snapshot:()=>t,refetch:a,clear(){n=!1,i({data:void 0,fetching:!1,settled:!1})}}}var me={data:void 0,fetching:!1,settled:!1},he=()=>()=>{},W=()=>me;function G(e,t=!0){return(0,E.useSyncExternalStore)(t?e.subscribe:he,t?e.snapshot:W,t?e.snapshot:W)}var K=[{category:`CONTACTS`,title:`Contacts`,menuName:`Contacts`,label:`contactsStream`,enabled:`contactsEnabled`,transportFixed:`nightly batch`},{category:`COMPANIES`,title:`Companies`,menuName:`Companies`,label:`companiesStream`,enabled:`companiesEnabled`,transport:`companiesRealtime`},{category:`DEALS`,title:`Deals`,menuName:`Deals`,label:`dealsStream`,enabled:`dealsEnabled`,transport:`dealsRealtime`},{category:`TICKETS`,title:`Tickets`,menuName:`Tickets`,label:`ticketsStream`,enabled:`ticketsEnabled`},{category:`INVOICES`,title:`Invoices`,menuName:`Invoices`,label:`invoicesStream`,enabled:`invoicesEnabled`,transportFixed:`real time`}],ge=/^[0-9]{6,14}$/,q={required:`Workspace number is required`,format:`Workspace number is too short. It must be at least 6 digits long.`,inUse:`This workspace number is already used by another sync.`},_e=`Please choose at least one sync stream to continue`,J={linked:`linked`,primary:`primary`,workspaceFetched:`workspaceFetched`,fetchedWorkspaceNumber:`fetchedWorkspaceNumber`,storedWorkspaceNumber:`storedWorkspaceNumber`,primaryWorkspaceNumber:`primaryWorkspaceNumber`,streams:`streams`,regionsEnabled:`regionsEnabled`,hosted:`hosted`,accountSignature:`accountSignature`,listSettled:`listSettled`};function ve(e){return typeof e==`object`&&!!e&&typeof Reflect.get(e,`streamKey`)==`string`&&typeof Reflect.get(e,`workspaceRef`)==`string`&&typeof Reflect.get(e,`id`)==`string`}function ye(e,t){if(!(typeof e!=`string`||e===``||!Array.isArray(t)))return t.filter(ve).find(t=>t.streamKey===e)}var be=te().operator(`streamWorkspace`,{fn:(e,t)=>j(ye(e,t)?.workspaceRef??``),arity:2,returns:`string`}).operator(`streamId`,{fn:(e,t)=>ye(e,t)?.id??``,arity:2,returns:`string`}),xe={locale:``,region:``,sourceId:``},Se=g()(({f:e,c:t,e:n,v:r})=>{let i=t.and(t.ctx(J.linked),t.ctx(J.primary),t.ctx(J.workspaceFetched),t.ne(`manualWorkspaceNumber`,!0)),a=e=>n.op(`streamWorkspace`,n.ref(e),n.ctx(J.streams)),o=e=>n.if(t.and(t.eq(e.enabled,!0),t.filled(e.label)),1,0),s=t.not(t.ctx(J.regionsEnabled));return{fields:[e.switch(`manualWorkspaceNumber`,{local:!0}),...k.map(t=>e.field(`custom`,`modes.${t}`,{local:!0}))],whenHidden:`keep-and-send`,derived:{workspaceNumber:{when:i,expr:n.ctx(J.fetchedWorkspaceNumber,``),readOnly:!0},syncDeletes:{when:t.ctx(J.regionsEnabled),expr:n.lit(!1),readOnly:!0},chosenCount:n.add(...K.map(o))},validate:[r.assert(t.or(t.empty(n.ctx(J.primaryWorkspaceNumber,``)),t.ne(`workspaceNumber`,n.ctx(J.primaryWorkspaceNumber,``))),q.inUse,{path:`workspaceNumber`})],effects:[...K.map(e=>({on:[e.label],when:t.and(t.filled(e.label),t.filled(a(e.label)),t.not(i)),do:[{set:`workspaceNumber`,to:a(e.label)}]})),{on:[`contactsStream`],do:[{set:`contactsStreamId`,to:n.op(`streamId`,n.ref(`contactsStream`),n.ctx(J.streams))}]},{on:[`contactsStream`],when:t.and(t.empty(`contactsStream`),s),do:[{set:`syncDeletes`,to:!1}]},{on:[`modes.CONTACTS`],when:t.and(t.eq(`modes.CONTACTS`,`manual`),s),do:[{set:`contactsStreamId`,to:``},{set:`syncDeletes`,to:!1}]},{on:[`matchKey`],when:t.ne(`matchKey`,de),do:[{set:`regionalIds`,to:!1}]},{on:[`enrichmentActive`],when:t.eq(`enrichmentActive`,!1),do:[{set:`enrichment`,to:n.lit({...xe})}]},...K.map(e=>({on:[`$ctx.${J.accountSignature}`],origins:[`context`],when:t.and(t.ctx(J.listSettled),t.ne(`modes.${e.category}`,`manual`),t.filled(e.label),t.empty(a(e.label))),do:e.category===`CONTACTS`?[{set:e.label,to:``},{set:`contactsStreamId`,to:``}]:[{set:e.label,to:``}]})),{on:[`manualWorkspaceNumber`],when:t.and(t.eq(`manualWorkspaceNumber`,!1),t.not(t.ctx(J.workspaceFetched))),do:[{set:`workspaceNumber`,to:n.ctx(J.storedWorkspaceNumber,``)}]}],actions:{toggleManualWorkspaceNumber:[{set:`manualWorkspaceNumber`,to:n.if(t.eq(`manualWorkspaceNumber`,!0),!1,!0)}],placeAllGenerated:K.flatMap(e=>[{set:e.label,to:n.arg(`labels.${e.category}`,``)},{set:e.enabled,to:!0},{set:`modes.${e.category}`,to:`select`}]),...Object.fromEntries(K.flatMap(e=>[[`manual:${e.category}`,[{set:`modes.${e.category}`,to:`manual`},{set:e.enabled,to:!0}]],[`select:${e.category}`,[{set:`modes.${e.category}`,to:`select`},{set:e.enabled,to:!0}]],[`disable:${e.category}`,[{set:e.label,to:``},{set:e.enabled,to:!1}]],[`placeGenerated:${e.category}`,[{set:e.label,to:n.arg(`streamKey`,``)},{set:e.enabled,to:!0}]]]))}}});function Ce(e){return(e.status===A.created||e.status===A.pending)&&e.step===1}function we(e,t,n){return e.priority===`SECONDARY`?`manual`:t&&e.status===A.created||t&&n!==``?`select`:`manual`}function Te(e,t){let n=Ce(e),r={CONTACTS:e.contactsStream,COMPANIES:e.companiesStream,DEALS:e.dealsStream,TICKETS:e.ticketsStream,INVOICES:e.invoicesStream},i=Object.fromEntries(k.map(n=>[n,we(e,t,r[n])]));return{workspaceNumber:j(e.workspaceNumber),matchKey:e.matchKey,contactsStream:e.contactsStream,contactsEnabled:n||e.contactsOn||e.contactsBatchOn,companiesStream:e.companiesStream,companiesEnabled:n||e.companiesRealtimeOn||e.companiesBatchOn,dealsStream:e.dealsStream,dealsEnabled:n||e.dealsRealtimeOn||e.dealsBatchOn,ticketsStream:e.ticketsStream,ticketsEnabled:n||e.ticketsOn,invoicesStream:e.invoicesStream,invoicesEnabled:n||e.invoicesOn,companiesRealtime:e.companiesRealtimeOn,dealsRealtime:e.dealsRealtimeOn,contactsStreamId:e.contactsStreamId,syncDeletes:e.syncDeletes,enrichmentActive:e.enrichmentActive,enrichment:{locale:e.enrichmentLocale,region:e.enrichmentRegion,sourceId:e.enrichmentSourceId},syncOwners:e.syncOwners,regionalIds:e.regionalIds,skipArchived:e.skipArchived,skipTestRecords:e.skipTestRecords,manualWorkspaceNumber:!1,modes:{CONTACTS:i.CONTACTS??`manual`,COMPANIES:i.COMPANIES??`manual`,DEALS:i.DEALS??`manual`,TICKETS:i.TICKETS??`manual`,INVOICES:i.INVOICES??`manual`},copied:!1}}function Ee(e){let t={matchKey:e.matchKey,companiesStream:e.companiesStream,contactsStream:e.contactsStream,dealsStream:e.dealsStream,ticketsStream:e.ticketsStream,contactsStreamId:e.contactsStreamId,workspaceNumber:j(e.workspaceNumber)},n=Object.fromEntries(Object.entries(t).filter(([,e])=>!!e));return Object.keys(n).length===0?null:n}function Y(e){return e===`EXTERNAL_ID`||e===`EMAIL`||e===`DOMAIN`||e===`INTERNAL_ID`}function De(e,t){let n=t.stored.syncDeletes;return{workspaceNumber:j(e.workspaceNumber),matchKey:Y(e.matchKey)?e.matchKey:t.stored.matchKey,contactsStream:e.contactsStream,contactsEnabled:e.contactsStream!==``,companiesStream:e.companiesStream,companiesEnabled:e.companiesStream!==``,dealsStream:e.dealsStream,dealsEnabled:e.dealsStream!==``,ticketsStream:e.ticketsStream,ticketsEnabled:e.ticketsStream!==``,invoicesStream:e.invoicesStream,invoicesEnabled:e.invoicesStream!==``,companiesRealtime:e.companiesRealtime,dealsRealtime:e.dealsRealtime,contactsStreamId:e.contactsStreamId===``?0:e.contactsStreamId,syncDeletes:t.regionsEnabled?!1:e.syncDeletes===n?void 0:e.syncDeletes,enrichmentActive:e.enrichmentActive,enrichmentLocale:e.enrichment.locale,enrichmentRegion:e.enrichment.region,enrichmentSourceId:e.enrichment.sourceId,syncOwners:e.syncOwners,regionalIds:e.regionalIds===!0&&e.matchKey===`EXTERNAL_ID`&&t.regionsEnabled,skipArchived:e.skipArchived,skipTestRecords:e.skipTestRecords}}function Oe(e){let t=e.record.priority===`PRIMARY`,n=e.linked&&t&&j(e.record.workspaceNumber)===``;return{[J.linked]:e.linked,[J.primary]:t,[J.workspaceFetched]:n&&e.workspaceRef.settled,[J.fetchedWorkspaceNumber]:j(e.workspaceRef.value??``),[J.storedWorkspaceNumber]:j(e.record.workspaceNumber),[J.primaryWorkspaceNumber]:t?``:e.primaryWorkspaceNumber,[J.streams]:e.actions.map(e=>({id:e.id,name:e.name,category:e.category,workspaceRef:e.workspaceRef,streamKey:e.streamKey})),[J.regionsEnabled]:e.regionsEnabled,[J.hosted]:e.record.isHosted,[J.accountSignature]:e.accountSignature,[J.listSettled]:e.listSettled}}var{c:X,e:ke,v:Ae}=_(),je=[{value:`EXTERNAL_ID`,label:`External ID`},{value:`EMAIL`,label:`Email`},{value:`DOMAIN`,label:`Company domain`},{value:`INTERNAL_ID`,label:`Internal ID`}],Me=[{value:`en`,label:`English`},{value:`de`,label:`German`},{value:`fr`,label:`French`},{value:`es`,label:`Spanish`},{value:`tr`,label:`Turkish`}],Ne=[{value:`US`,label:`United States`},{value:`GB`,label:`United Kingdom`},{value:`DE`,label:`Germany`},{value:`FR`,label:`France`},{value:`TR`,label:`Türkiye`}],Pe=`acct-4471-0921`,Fe=`acct-8830-1175`,Ie=`11223344556`;function Le(e,t){return e.filter(e=>e.category===t).map(e=>({value:e.streamKey,label:`${e.name.length>30?`${e.name.slice(0,30)}...`:e.name} (${e.streamKey})`}))}var Re=U(()=>H.listStreams()),ze=U(()=>H.fetchWorkspaceRef());function Be({form:e,row:t,onGenerate:r,linked:i,secondary:a,busy:s}){let f=b(e,t.enabled)===!0,m=b(e,`modes.${t.category}`)===`manual`;return(0,D.jsxs)(o,{children:[(0,D.jsx)(d,{asChild:!0,children:(0,D.jsx)(p,{type:`button`,variant:`outline`,size:`icon-sm`,"aria-label":`${t.title} options`,disabled:s,children:(0,D.jsx)(n,{})})}),(0,D.jsxs)(c,{align:`end`,children:[(0,D.jsx)(l,{disabled:a||!i||!f||m,onClick:()=>r(t.category),children:`Create a new sync stream`}),!m||!f?(0,D.jsx)(l,{disabled:f&&m,onClick:()=>e.run(`manual:${t.category}`),children:`Enter the stream key by hand`}):null,m||!f?(0,D.jsx)(l,{disabled:a||f&&!m&&!i,onClick:()=>e.run(`select:${t.category}`),children:`Select from existing streams`}):null,(0,D.jsx)(u,{}),(0,D.jsxs)(l,{variant:`destructive`,disabled:!f,onClick:()=>e.run(`disable:${t.category}`),children:[`Disable the `,t.menuName,` stream`]})]})]})}function Ve({form:e,row:t,actions:n,loading:r,linked:i,secondary:a,generating:o,onGenerate:s}){let c=X.ne(t.enabled,!0);return(0,D.jsxs)(`div`,{className:`flex flex-col gap-1.5 border-t pt-2.5 first:border-t-0 first:pt-0`,children:[(0,D.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,D.jsxs)(`span`,{className:`text-[13px] font-medium`,children:[t.title,` stream `,r?(0,D.jsx)(`span`,{className:`text-xs font-normal text-muted-foreground`,children:`· loading…`}):null]}),(0,D.jsx)(Be,{form:e,row:t,onGenerate:s,linked:i,secondary:a,busy:o})]}),(0,D.jsx)(y,{if:X.eq(`modes.${t.category}`,`select`),children:(0,D.jsx)(w,{name:t.label,label:`${t.title} sync stream`,options:Le(n,t.category),placeholder:`Not active`,disabledIf:c})}),(0,D.jsx)(y,{if:X.eq(`modes.${t.category}`,`manual`),children:(0,D.jsx)(S,{name:t.label,label:`${t.title} stream key`,placeholder:`Not active`,dir:`ltr`,disabledIf:c})}),t.transport?(0,D.jsx)(C,{name:t.transport,label:`Sync in real time`,description:`Off: nightly batch through a webhook you add on the next page.`,visibleIf:X.filled(t.label)}):null,t.transportFixed?(0,D.jsx)(y,{if:X.filled(t.label),children:(0,D.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Sent through `,t.transportFixed,`.`]})}):null]})}function He({what:e,gap:t}){return(0,D.jsxs)(`p`,{className:`rounded-md border border-dashed border-amber-500/50 bg-amber-500/5 px-2.5 py-1.5 text-xs text-amber-800 dark:text-amber-300`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Not yet supported:`}),` `,e,` `,(0,D.jsxs)(`span`,{className:`text-muted-foreground`,children:[`(`,t,`)`]})]})}function Z({title:e,children:t}){return(0,D.jsxs)(`section`,{className:`flex flex-col gap-2 rounded-lg border p-3`,children:[(0,D.jsx)(`h3`,{className:`text-sm font-semibold`,children:e}),t]})}function Ue({form:e,code:t,codeLoading:n}){let r=b(e,`contactsStream`),i=b(e,`companiesRealtime`),a=b(e,`companiesStream`),o=b(e,`dealsRealtime`),s=b(e,`dealsStream`),c=[r===``?null:`Contacts`,o===!1&&s!==``?`Deals`:null,i===!1&&a!==``?`Companies`:null].filter(e=>e!==null),[l,u]=(0,E.useState)(!1);return(0,D.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,D.jsxs)(`section`,{className:`flex flex-col gap-1 rounded-lg border p-3 text-[13px]`,children:[(0,D.jsx)(`h3`,{className:`text-sm font-semibold`,children:`Nightly batch objects`}),(0,D.jsxs)(`p`,{children:[c.join(`, `),` sync in the nightly batch, through the webhook below.`]})]}),(0,D.jsxs)(`section`,{className:`flex flex-col gap-2 rounded-lg border p-3`,children:[(0,D.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`p`,{className:`text-[13px] font-medium`,children:`Copy the snippet`}),(0,D.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`The snippet is ready. Copy it, then follow the steps below.`})]}),(0,D.jsx)(p,{type:`button`,size:`sm`,variant:`outline`,disabled:n,onClick:()=>{navigator.clipboard?.writeText(t),u(!0)},children:l?`Copied`:`Copy to clipboard`})]}),(0,D.jsx)(`pre`,{className:`overflow-x-auto rounded-md bg-muted p-2 font-mono text-[11px]`,children:n?`Generating…`:t}),(0,D.jsxs)(`ol`,{className:`list-decimal space-y-0.5 ps-5 text-xs text-muted-foreground`,children:[(0,D.jsx)(`li`,{children:`Open your source system → Settings → Webhooks.`}),(0,D.jsx)(`li`,{children:`Add a webhook, name it, paste the snippet, then Save and Enable.`})]}),(0,D.jsx)(ie,{name:`copied`,label:`I added the webhook snippet.`,local:!0,visibleIf:X.eq(ke.ctx(`page`),`code`),rules:[Ae.oneOf([!0],`Confirm you added the snippet to finish`)]})]})]})}var Q=new Map;function We(e,t){let n=`${e}#${t}`,r=Q.get(n);if(r)return r;let i=U(()=>H.syncInstallSnippet({id:e}));return Q.set(n,i),i}function Ge({record:e,account:n,onSignIn:r,side:i}){let a=e.priority===`PRIMARY`,o=!a,{linked:s}=n,c=G(Re,s&&a),l=G(ze,s&&a&&e.workspaceNumber===``),u=s&&a&&!n.otherAccount?c.data?.listStreams??[]:[],[d,f]=(0,E.useState)(!1),[h,g]=(0,E.useState)(null),[_,te]=(0,E.useState)(e.regionsEnabled),[x,ue]=(0,E.useState)(!1),[O,k]=(0,E.useState)(`form`),[de,fe]=(0,E.useState)(0),[j,M]=(0,E.useState)((e.status===A.created||e.step===1)&&s),{confirm:N,dialog:pe}=ce(),P=ee({defaultValues:Te(e,s),model:Se,registry:be,plugins:[ne({when:()=>Ce(e),save:async({values:t})=>{let n=Ee(t);n&&await H.syncSaveDraft({id:e.id,input:n})}})],context:{...Oe({linked:s,record:e,workspaceRef:{settled:l.settled,value:l.data?.fetchWorkspaceRef??null},actions:u,accountSignature:n.otherAccount?Fe:Pe,listSettled:s&&a&&!c.fetching,regionsEnabled:_,primaryWorkspaceNumber:Ie}),page:O,hasSubscriptionPlan:n.hasSubscriptionPlan}}),F=G(We(e.id,de),O===`code`),I=b(P,`contactsStream`),L=b(P,`contactsStreamId`),R=b(P,`companiesRealtime`),z=b(P,`companiesStream`),B=b(P,`dealsRealtime`),V=b(P,`dealsStream`),U=b(P,`enrichment.locale`),me=b(P,`enrichment.region`),he=b(P,`enrichment.sourceId`),W=!e.isHosted&&(I!==``||R===!1&&z!==``||B===!1&&V!==``),[ve,ye]=(0,E.useState)(null),we=async()=>{await H.syncActivate({id:e.id});let t={regions:_};return ye(t),t},Y=e=>T(e)??e,Le=[{id:`save`,label:`Save setup`,run:async t=>{if(e.status===A.active&&!P.isDirty({sent:!0}))return`unchanged`;try{return await H.syncSetup({id:e.id,input:De(t,{stored:e,regionsEnabled:_})})}catch(e){throw Y(e)}}},{id:`next`,label:W?`Open the snippet page`:`Finish setup`,run:async()=>{if(W)return fe(e=>e+1),k(`code`),`code page`;try{return await we()}catch(e){throw Y(e)}}}],Be=[{id:`finish`,label:`Finish setup`,run:async()=>{try{return await we()}catch(e){throw Y(e)}}}],Q=ae(Le),Ge=ae(Be),$=()=>Re.refetch(),Ke=async e=>{f(!0);try{let{createStream:t}=await H.createStream({type:e});await $(),P.run(`placeGenerated:${e}`,{args:{streamKey:t.streamKey}})}catch(e){g({tone:`error`,text:String(T(e)?.message??`Generating failed`)})}finally{f(!1)}},Ye=async()=>{f(!0);try{let{createAllStreams:e}=await H.createAllStreams();await $(),e.length===0?g({tone:`warn`,text:`Your streams were created in the destination but the answer came back empty, so we couldn't fill them in. Pick them from the dropdowns below rather than creating them again.`}):(P.run(`placeAllGenerated`,{args:{labels:Object.fromEntries(e.map(e=>[e.category,e.streamKey]))}}),g({tone:`ok`,text:`All streams created`})),M(!1)}catch(e){g({tone:`error`,text:String(T(e)?.message??`Generating failed`)})}finally{f(!1)}},Xe=async t=>{ue(!0);try{await H.syncRegionsSetup({id:e.id,input:{regionsEnabled:t,regionOverrides:[]}}),te(t)}catch(e){g({tone:`error`,text:String(T(e)?.message??`Failed to update regions.`)})}finally{ue(!1)}},Ze=!e.isHosted&&!_;return(0,D.jsxs)(Je,{children:[(0,D.jsxs)(v,{form:P,onSubmit:O===`form`?Q.onSubmit:Ge.onSubmit,className:`flex flex-col gap-3`,children:[(0,D.jsxs)(y,{if:X.eq(ke.ctx(`page`),`form`),children:[(0,D.jsxs)(`section`,{className:`flex flex-col gap-3 rounded-lg border p-3`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{className:`text-sm font-semibold`,children:`CRM sync rules`}),(0,D.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Sync contacts, companies, deals, tickets and invoices to your destination CRM.`})]}),(0,D.jsx)(`p`,{className:`rounded-md border bg-muted/40 px-2.5 py-1.5 text-[13px]`,children:a?`Link your destination account to pick streams from a list, or enter the stream keys by hand.`:`Enter the workspace number and stream keys by hand.`}),a&&s?(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 rounded-md bg-muted px-2.5 py-1.5 text-[13px]`,children:[(0,D.jsxs)(`span`,{className:`text-muted-foreground`,children:[`✓ `,Pe,` account linked.`]}),(0,D.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,D.jsxs)(p,{type:`button`,size:`sm`,variant:`link`,onClick:()=>P.run(`toggleManualWorkspaceNumber`),children:[(0,D.jsx)(y,{if:X.eq(`manualWorkspaceNumber`,!0),children:`Use connected account`}),(0,D.jsx)(y,{if:X.ne(`manualWorkspaceNumber`,!0),children:`Enter ID manually`})]})})]}):null,a&&s?(0,D.jsx)(He,{what:`Manage accounts (an accounts manager is its own surface, outside this form)`,gap:`out of scope`}):null,a&&!s?(0,D.jsx)(p,{type:`button`,size:`sm`,variant:`outline`,className:`w-fit`,onClick:r,children:`Link destination account`}):null,j&&a&&s?(0,D.jsxs)(`div`,{className:`flex flex-col gap-1.5 rounded-md border border-sky-500/30 bg-sky-500/5 p-2.5 text-[13px]`,children:[(0,D.jsxs)(`p`,{className:`flex items-center gap-1.5 font-medium`,children:[`Create all streams automatically `,(0,D.jsx)(m,{variant:`secondary`,children:`Recommended`})]}),(0,D.jsx)(`p`,{children:`One new stream per object type is created in the destination. Existing streams stay as they are.`}),(0,D.jsxs)(`div`,{className:`flex gap-2`,children:[(0,D.jsx)(p,{type:`button`,size:`sm`,disabled:d,onClick:()=>void Ye(),children:d?`Creating…`:`Create now`}),(0,D.jsx)(p,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>M(!1),children:`Close`})]})]}):null,h?(0,D.jsx)(`p`,{role:`status`,className:h.tone===`error`?`text-[13px] text-destructive`:h.tone===`warn`?`text-[13px] text-amber-700 dark:text-amber-300`:`text-[13px] text-emerald-700 dark:text-emerald-400`,children:h.text}):null,(0,D.jsx)(S,{name:`workspaceNumber`,label:`Workspace number`,description:`Found in your destination under Settings → Workspace.`,prefix:`WS-`,dir:`ltr`,inputMode:`numeric`,required:!0,requiredMessage:q.required,rules:[Ae.pattern(ge,q.format)],readOnlyIf:X.and(X.ctx(J.linked),X.ctx(J.primary),X.ne(`manualWorkspaceNumber`,!0))}),(0,D.jsx)(oe,{name:`matchKey`,label:`Match records by`,description:`Which key identifies the same record on both sides.`,options:je,required:!0,requiredMessage:`Please choose a match key to continue.`}),(0,D.jsx)(`div`,{className:`flex flex-col gap-2.5 rounded-md border p-2.5`,children:K.map(e=>(0,D.jsx)(Ve,{form:P,row:e,actions:u,loading:c.fetching,linked:s,secondary:o,generating:d,onGenerate:e=>void Ke(e)},e.category))}),(0,D.jsx)(le,{name:`chosenCount`,label:`Streams chosen`,tone:`inline`,rules:[Ae.min(1,_e)]})]}),(0,D.jsx)(Z,{title:`Sync record owners`,children:(0,D.jsx)(C,{name:`syncOwners`,label:`Assign each synced record to its owner in the destination.`})}),a?(0,D.jsxs)(Z,{title:`Per-region destinations`,children:[(0,D.jsxs)(`label`,{className:`flex items-center justify-between gap-3 text-[13px]`,children:[(0,D.jsxs)(`span`,{children:[`Sync each region to its own destination workspace `,x?(0,D.jsx)(`span`,{className:`text-muted-foreground`,children:`· saving…`}):null]}),(0,D.jsx)(t,{checked:_,disabled:Ze||x,onCheckedChange:e=>void Xe(e),"aria-label":`Per-region destinations`})]}),Ze?(0,D.jsxs)(`p`,{className:`rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5 text-xs`,children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Per-region destinations need the hosted install.`}),` This workspace uses the self-hosted webhook, which has one destination only.`]}):null,(0,D.jsx)(ie,{name:`regionalIds`,label:`Use regional record IDs`,description:`With the external-ID match key, each region prefixes its own code to the ID.`,visibleIf:X.ctx(J.regionsEnabled),whenHidden:`clear`,disabledIf:X.ne(`matchKey`,`EXTERNAL_ID`)})]}):null,(0,D.jsxs)(Z,{title:`Sync deletions`,children:[(0,D.jsx)(y,{if:X.ctx(`hasSubscriptionPlan`),children:(0,D.jsx)(C,{name:`syncDeletes`,label:`Delete a destination record when its source record is deleted`,disabledIf:X.or(X.ctx(J.regionsEnabled),X.not(X.ctx(J.linked)),X.empty(`contactsStreamId`))})}),(0,D.jsx)(y,{if:X.not(X.ctx(`hasSubscriptionPlan`)),children:(0,D.jsx)(p,{type:`button`,size:`sm`,variant:`outline`,className:`w-fit`,children:`Upgrade your plan`})}),(0,D.jsx)(y,{if:X.ctx(J.regionsEnabled),children:(0,D.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Not available with per-region destinations — deletions are not routed per region.`})}),(0,D.jsx)(y,{if:X.and(X.not(X.ctx(J.regionsEnabled)),X.not(X.ctx(J.linked))),children:(0,D.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Link the destination account above to sync deletions.`})}),(0,D.jsx)(y,{if:X.and(X.not(X.ctx(J.regionsEnabled)),X.ctx(J.linked),X.empty(`contactsStreamId`)),children:(0,D.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Pick your Contacts stream with "Select from existing streams" above — deletion sync needs the stream itself, not just its key.`})}),(0,D.jsx)(y,{if:X.and(X.eq(`syncDeletes`,!0),X.not(X.ctx(J.regionsEnabled))),children:(0,D.jsxs)(`p`,{className:`rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:[`Selected contacts stream key: `,I,` · ID: `,L]})})]}),(0,D.jsxs)(Z,{title:`Skip records`,children:[(0,D.jsx)(C,{name:`skipArchived`,label:`Skip archived records`,description:`Archived records stay in the source and are never sent.`}),(0,D.jsx)(C,{name:`skipTestRecords`,label:`Skip test records`,description:`Records flagged as test data are never sent.`})]}),(0,D.jsxs)(Z,{title:`Field enrichment`,children:[(0,D.jsx)(y,{if:X.not(X.ctx(`hasSubscriptionPlan`)),children:(0,D.jsx)(p,{type:`button`,size:`sm`,variant:`outline`,className:`w-fit`,children:`Upgrade your plan`})}),(0,D.jsx)(y,{if:X.and(X.ctx(`hasSubscriptionPlan`),X.ne(`enrichmentActive`,!0)),children:(0,D.jsxs)(re,{parent:P,scope:`enrichment`,empty:xe,title:`Enrich synced records`,trigger:(0,D.jsx)(p,{type:`button`,size:`sm`,variant:`outline`,className:`w-fit`,children:`Set up enrichment`}),submitLabel:`Save`,set:()=>[{path:`enrichmentActive`,value:!0}],children:[(0,D.jsx)(w,{name:`locale`,label:`Locale`,options:Me,required:!0}),(0,D.jsx)(w,{name:`region`,label:`Region`,options:Ne,required:!0}),(0,D.jsx)(S,{name:`sourceId`,label:`Enrichment source ID`,dir:`ltr`,required:!0})]})}),(0,D.jsxs)(y,{if:X.eq(`enrichmentActive`,!0),children:[(0,D.jsx)(C,{name:`enrichmentActive`,label:`Enrich synced records`,confirm:e=>e===!1?N({title:`Turn off enrichment`,body:`The locale, region and source ID are cleared.`,confirmLabel:`Save`,destructive:!0}):!0}),(0,D.jsxs)(`p`,{className:`font-mono text-[11px] text-muted-foreground`,children:[U,` · `,me,` · Source `,he]})]})]})]}),(0,D.jsx)(y,{if:X.eq(ke.ctx(`page`),`code`),children:(0,D.jsx)(Ue,{form:P,code:F.data?.syncInstallSnippet??``,codeLoading:!F.settled})}),(0,D.jsx)(se,{phases:O===`form`?Q.phases:Ge.phases}),(0,D.jsx)(v.Status,{className:`text-sm`,success:()=>ve===null?null:ve.regions?(0,D.jsxs)(`div`,{className:`flex flex-col gap-1.5 rounded-md border p-2.5`,children:[(0,D.jsx)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:`✓ Setup complete. Set up your regions?`}),(0,D.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Regions inherit this setup as their default.`})]}):(0,D.jsx)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:`✓ Sync activated — back to /syncs.`}),error:(e,{retry:t})=>(0,D.jsxs)(`p`,{className:`flex flex-wrap items-center gap-2 text-destructive`,children:[(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`span`,{className:`font-medium`,children:`Error:`}),` `,e.message]}),t?(0,D.jsx)(p,{type:`button`,size:`sm`,variant:`outline`,onClick:t,children:`Retry`}):null]})}),(0,D.jsxs)(`div`,{className:`flex justify-end gap-2 border-t pt-3`,children:[(0,D.jsx)(p,{type:`button`,variant:`outline`,size:`sm`,onClick:()=>k(`form`),disabled:O===`form`,children:`Go back`}),(0,D.jsx)(v.Submit,{className:`inline-flex h-7 items-center rounded-md bg-primary px-3 text-[13px] font-medium text-primary-foreground disabled:opacity-50`,children:O===`form`?W?`Next`:`Save changes`:e.step>=2?`Finish setup`:`Save changes`})]}),pe]}),(0,D.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[i,(0,D.jsx)(qe,{store:P})]})]})}function $({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,D.jsxs)(`aside`,{className:f(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,D.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,D.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function Ke({value:e,maxHeight:t=`max-h-[420px]`}){return(0,D.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:f(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function qe({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=x(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),h);return(0,D.jsxs)($,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,D.jsx)(Ke,{value:i}),s.length>0?(0,D.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,D.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function Je({children:e,stack:t=!1}){return(0,D.jsx)(`div`,{className:f(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:E.Children.toArray(e)})}function Ye(){let e=(0,E.useSyncExternalStore)(H.subscribe,H.snapshot,H.snapshot),[n,r]=(0,E.useState)({linked:!0,hasSubscriptionPlan:!0,otherAccount:!1}),[i,a]=(0,E.useState)(0),[o,s]=(0,E.useState)(`PRIMARY`),[c,l]=(0,E.useState)(!1),u={...e.record,priority:o,isHosted:c},d=()=>a(e=>e+1),f=()=>{H.reset(),Re.clear(),ze.clear(),d()},m=`${i}:${n.linked}:${o}:${c}`;return(0,D.jsx)(Ge,{record:u,account:n,onSignIn:()=>r(e=>({...e,linked:!0})),side:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)($,{title:`App context`,meta:`c.ctx(…)`,children:(0,D.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,D.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsx)(`span`,{children:`Destination account linked`}),(0,D.jsx)(t,{checked:n.linked,onCheckedChange:e=>r(t=>({...t,linked:e})),"aria-label":`Destination account linked`})]}),(0,D.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsx)(`span`,{children:`Switch to another destination account (its list lacks the picked streams)`}),(0,D.jsx)(t,{checked:n.otherAccount,onCheckedChange:e=>r(t=>({...t,otherAccount:e})),"aria-label":`Other destination account`})]}),(0,D.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsx)(`span`,{children:`Secondary sync`}),(0,D.jsx)(t,{checked:o===`SECONDARY`,onCheckedChange:e=>s(e?`SECONDARY`:`PRIMARY`),"aria-label":`Secondary sync`})]}),(0,D.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsx)(`span`,{children:`Hosted install (no snippet page)`}),(0,D.jsx)(t,{checked:c,onCheckedChange:l,"aria-label":`Hosted install`})]}),(0,D.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsx)(`span`,{children:`Subscription plan`}),(0,D.jsx)(t,{checked:n.hasSubscriptionPlan,onCheckedChange:e=>r(t=>({...t,hasSubscriptionPlan:e})),"aria-label":`Subscription plan`})]}),(0,D.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsx)(`span`,{children:`Server rejects next save`}),(0,D.jsx)(t,{checked:e.failNextSave,onCheckedChange:e=>H.setFailNextSave(e),"aria-label":`Server rejects next save`})]}),(0,D.jsxs)(`div`,{className:`flex gap-2`,children:[(0,D.jsx)(p,{type:`button`,size:`sm`,variant:`outline`,onClick:d,children:`Reload page`}),(0,D.jsx)(p,{type:`button`,size:`sm`,variant:`outline`,onClick:f,children:`Start over`})]}),(0,D.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Stored: status `,(0,D.jsx)(`code`,{children:e.record.status}),` · step `,e.record.step,` · ID `,(0,D.jsx)(`code`,{children:e.record.workspaceNumber||`—`})]})]})}),(0,D.jsx)($,{title:`Network`,meta:`GraphQL calls`,children:(0,D.jsxs)(`ol`,{className:`flex max-h-72 flex-col gap-1.5 overflow-auto p-3 font-mono text-[11px]`,children:[e.log.length===0?(0,D.jsx)(`li`,{className:`text-muted-foreground`,children:`No mutations yet.`}):null,e.log.map((e,t)=>(0,D.jsxs)(`li`,{className:`break-all`,children:[(0,D.jsx)(`span`,{className:`text-muted-foreground`,children:e.at}),` `,(0,D.jsx)(`span`,{className:`font-semibold`,children:e.operation}),` `,JSON.stringify(e.variables)]},`${e.at}-${t}`))]})})]})},m)}var Xe=`import { useState, useSyncExternalStore, type ReactNode, Children } from "react"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@kitora/ui/dropdown-menu"
import { Switch } from "@kitora/ui/switch"
import { kit, mapErrors, saveOnLeave, type FormStore, type PipelinePhase, catalogRegistry, defineForm, type FieldPath, type JsonObject, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, When, useForm, useFormValue, useSubmitPipeline, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { CheckboxField, DisplayField, RadioGroupField, SelectField, SubFormDialog, SubmitPhases, SwitchField, TextField, useConfirm, type SelectOption } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- the simulated server (stub: replace with your API)
/** The object types a sync stream can carry. */
export const SYNC_OBJECTS = ["CONTACTS", "COMPANIES", "DEALS", "TICKETS", "INVOICES"] as const

export type SyncObject = (typeof SYNC_OBJECTS)[number]

/** Which key matches a source record to a destination record. */
export const MATCH_KEYS = ["EXTERNAL_ID", "EMAIL", "DOMAIN", "INTERNAL_ID"] as const

export type MatchKey = (typeof MATCH_KEYS)[number]

export const EXTERNAL_ID: MatchKey = "EXTERNAL_ID"

/** A sync stream as \`listStreams\` selects it. */
export interface SyncStream {
  id: string
  name: string
  category: string
  workspaceRef: string
  streamKey: string
}

/** The setup mutation input. \`contactsStreamId\` is an \`Int64\` scalar (a codegen types it loosely). */
export interface SyncSetupInput {
  companiesRealtime?: boolean
  dealsRealtime?: boolean
  regionalIds?: boolean
  syncDeletes?: boolean
  skipArchived?: boolean
  skipTestRecords?: boolean
  enrichmentActive: boolean
  enrichmentLocale: string
  enrichmentRegion: string
  enrichmentSourceId: string
  companiesEnabled: boolean
  companiesStream?: string
  dealsEnabled: boolean
  dealsStream?: string
  workspaceNumber: string
  matchKey: MatchKey
  ticketsEnabled: boolean
  ticketsStream?: string
  contactsStreamId?: string | number
  contactsEnabled: boolean
  contactsStream?: string
  syncOwners?: boolean
  invoicesEnabled?: boolean
  invoicesStream?: string
}

/** The keys a draft save sends when a new setup is left. */
export interface SyncDraftInput {
  matchKey?: string
  companiesStream?: string
  contactsStream?: string
  dealsStream?: string
  ticketsStream?: string
  contactsStreamId?: string
  workspaceNumber?: string
}

/** The stored sync record the setup page reads its defaults from. */
export interface SyncRecord {
  id: string
  status: string
  step: number
  priority: "PRIMARY" | "SECONDARY"
  isHosted: boolean
  regionsEnabled: boolean
  workspaceNumber: string
  matchKey: MatchKey
  contactsStream: string
  companiesStream: string
  dealsStream: string
  ticketsStream: string
  invoicesStream: string
  contactsStreamId: string
  contactsOn: boolean
  contactsBatchOn: boolean
  companiesRealtimeOn: boolean
  companiesBatchOn: boolean
  dealsRealtimeOn: boolean
  dealsBatchOn: boolean
  ticketsOn: boolean
  invoicesOn: boolean
  syncDeletes: boolean
  enrichmentActive: boolean
  enrichmentRegion: string
  enrichmentLocale: string
  enrichmentSourceId: string
  syncOwners: boolean
  regionalIds: boolean
  skipArchived: boolean
  skipTestRecords: boolean
}

/** One entry of a GraphQL \`errors\` list (GraphQL specification, section 7.1.2). */
export interface GraphQLErrorEntry {
  message: string
  path?: readonly (string | number)[]
  extensions?: Readonly<Record<string, unknown>>
}

/**
 * What a GraphQL client throws on a GraphQL error: \`ClientError\` with the HTTP
 * \`response\` carrying \`errors\` and \`data\`. The page reads
 * \`err.response.errors[0].message\` and nothing else.
 */
export class ClientError extends Error {
  readonly response: {
    errors: GraphQLErrorEntry[]
    data: null
    status: number
  }
  constructor(errors: GraphQLErrorEntry[]) {
    super(\`\${errors[0]?.message ?? "GraphQL error"}: \${JSON.stringify({ errors })}\`)
    this.name = "ClientError"
    this.response = { errors, data: null, status: 200 }
  }
}

/** Record status values the page compares against. */
export const STATUS = {
  created: "created",
  pending: "pending",
  active: "active",
} as const

/** Digits only, "" for blank or zero. */
export function parseWorkspaceNumber(raw: string): string {
  const digits = raw.replace(/[^0-9]/g, "")
  return Number(digits) === 0 ? "" : String(Number(digits))
}

/** The destination workspace ref (\`WS-…\`) every generated stream carries. */
const ACCOUNT_WORKSPACE_REF = "WS-11223344556"

/** Server latency of a stub call (ms). */
const LATENCY_MS = 450

const OBJECT_NAME: Readonly<Record<SyncObject, string>> = {
  CONTACTS: "Contacts",
  COMPANIES: "Companies",
  DEALS: "Deals",
  TICKETS: "Tickets",
  INVOICES: "Invoices",
}

/** A new setup: created, step 1, nothing stored yet (what \`isNewSetup\` sees). */
export function freshSyncRecord(): SyncRecord {
  return {
    id: "sync_crm_1",
    status: STATUS.created,
    step: 1,
    priority: "PRIMARY",
    isHosted: false,
    regionsEnabled: false,
    workspaceNumber: "",
    matchKey: "DOMAIN",
    contactsStream: "",
    companiesStream: "",
    dealsStream: "",
    ticketsStream: "",
    invoicesStream: "",
    contactsStreamId: "",
    contactsOn: false,
    contactsBatchOn: false,
    companiesRealtimeOn: false,
    companiesBatchOn: false,
    dealsRealtimeOn: false,
    dealsBatchOn: false,
    ticketsOn: false,
    invoicesOn: false,
    syncDeletes: false,
    enrichmentActive: false,
    enrichmentRegion: "",
    enrichmentLocale: "",
    enrichmentSourceId: "",
    syncOwners: false,
    regionalIds: false,
    skipArchived: false,
    skipTestRecords: false,
  }
}

/** Two pre-existing streams in the account, so "Select from existing" has something to list. */
const SEED_STREAMS: readonly SyncStream[] = [
  {
    id: "6600001",
    name: "Contacts (legacy import)",
    category: "CONTACTS",
    workspaceRef: ACCOUNT_WORKSPACE_REF,
    streamKey: "demo-key-001",
  },
  {
    id: "6600002",
    name: "Companies (legacy import)",
    category: "COMPANIES",
    workspaceRef: ACCOUNT_WORKSPACE_REF,
    streamKey: "demo-key-002",
  },
]

/** One recorded call: the operation name and its variables, as the network tab would show them. */
export interface CallLogEntry {
  at: string
  operation: string
  variables: unknown
}

interface ServerState {
  record: SyncRecord
  actions: readonly SyncStream[]
  log: readonly CallLogEntry[]
  /** Demo switch: answer the next \`syncSetup\` with a GraphQL error. */
  failNextSave: boolean
}

let state: ServerState = {
  record: freshSyncRecord(),
  actions: SEED_STREAMS,
  log: [],
  failNextSave: false,
}

const listeners = new Set<() => void>()

let keySeq = 0

function update(next: Partial<ServerState>) {
  state = { ...state, ...next }
  for (const l of listeners) l()
}

function record(operation: string, variables: unknown) {
  update({
    log: [{ at: new Date().toLocaleTimeString(), operation, variables }, ...state.log].slice(0, 12),
  })
}

function newStream(category: SyncObject): SyncStream {
  keySeq += 1
  return {
    id: String(7700000 + keySeq),
    name: \`Auto sync - \${OBJECT_NAME[category]}\`,
    category,
    workspaceRef: ACCOUNT_WORKSPACE_REF,
    streamKey: \`AutoGen\${keySeq}\${category.slice(0, 3)}x7\`,
  }
}

/** The stub server: subscribe/snapshot for React, plus one method per GraphQL operation the page calls. */
export const syncServer = {
  subscribe(listener: () => void): () => void {
    listeners.add(listener)
    return () => listeners.delete(listener)
  },
  snapshot(): ServerState {
    return state
  },
  /** Demo control: start over with a new setup. */
  reset(): void {
    keySeq = 0
    update({
      record: freshSyncRecord(),
      actions: SEED_STREAMS,
      log: [],
      failNextSave: false,
    })
  },
  /** Demo control: the next save is rejected. */
  setFailNextSave(fail: boolean): void {
    update({ failNextSave: fail })
  },

  /** \`query listStreams($accountId)\` → \`SyncStream[]\`. */
  async listStreams(): Promise<{
    listStreams: SyncStream[]
  }> {
    await delay(LATENCY_MS)
    return { listStreams: [...state.actions] }
  },

  /** \`query fetchWorkspaceRef\` → the account's tracking id (scalar, may be null). */
  async fetchWorkspaceRef(): Promise<{
    fetchWorkspaceRef: string | null
  }> {
    await delay(LATENCY_MS * 2)
    return { fetchWorkspaceRef: ACCOUNT_WORKSPACE_REF }
  },

  /** \`mutation createStream($type)\` → the created stream. */
  async createStream(variables: { type: SyncObject }): Promise<{ createStream: SyncStream }> {
    record("createStream", variables)
    await delay(LATENCY_MS)
    const action = newStream(variables.type)
    update({ actions: [...state.actions, action] })
    return { createStream: action }
  },

  /** \`mutation createAllStreams\` → one stream per object type (may legitimately be \`[]\`). */
  async createAllStreams(): Promise<{
    createAllStreams: SyncStream[]
  }> {
    record("createAllStreams", {})
    await delay(LATENCY_MS * 2)
    const created = SYNC_OBJECTS.map(newStream)
    update({ actions: [...state.actions, ...created] })
    return { createAllStreams: created }
  },

  /** \`mutation syncSaveDraft($id, $input)\` (document.graphql:2044) — the draft a new setup saves when the page is left. */
  async syncSaveDraft(variables: { id: string; input: SyncDraftInput }): Promise<{ syncSaveDraft: SyncRecord }> {
    record("syncSaveDraft", variables)
    await delay(LATENCY_MS)
    return { syncSaveDraft: state.record }
  },

  /** \`mutation syncSetup($id, $input)\` → the saved record (status, step). */
  async syncSetup(variables: { id: string; input: SyncSetupInput }): Promise<{ syncSetup: SyncRecord }> {
    record("syncSetup", variables)
    await delay(LATENCY_MS)
    if (state.failNextSave) {
      update({ failNextSave: false })
      // The shape is the spec ClientError envelope; the text mirrors the client-side
      // gate on deletion sync (an illustrative wording).
      throw new ClientError([
        {
          message: "link the destination account and pick a contacts stream to sync deletions",
          path: ["syncSetup"],
        },
      ])
    }
    const i = variables.input
    const saved: SyncRecord = {
      ...state.record,
      step: Math.max(state.record.step, 2),
      workspaceNumber: i.workspaceNumber,
      matchKey: i.matchKey,
      contactsStream: i.contactsStream ?? "",
      companiesStream: i.companiesStream ?? "",
      dealsStream: i.dealsStream ?? "",
      ticketsStream: i.ticketsStream ?? "",
      invoicesStream: i.invoicesStream ?? "",
      contactsStreamId: String(i.contactsStreamId ?? ""),
      contactsOn: i.contactsEnabled,
      companiesRealtimeOn: i.companiesEnabled && i.companiesRealtime === true,
      companiesBatchOn: i.companiesEnabled && i.companiesRealtime !== true,
      dealsRealtimeOn: i.dealsEnabled && i.dealsRealtime === true,
      dealsBatchOn: i.dealsEnabled && i.dealsRealtime !== true,
      ticketsOn: i.ticketsEnabled,
      invoicesOn: i.invoicesEnabled ?? false,
      // omitted = keep the stored flag
      syncDeletes: i.syncDeletes ?? state.record.syncDeletes,
      enrichmentActive: i.enrichmentActive,
      enrichmentRegion: i.enrichmentRegion,
      enrichmentLocale: i.enrichmentLocale,
      enrichmentSourceId: i.enrichmentSourceId,
      syncOwners: i.syncOwners ?? false,
      regionalIds: i.regionalIds ?? false,
      skipArchived: i.skipArchived ?? false,
      skipTestRecords: i.skipTestRecords ?? false,
    }
    update({ record: saved })
    return { syncSetup: saved }
  },

  /** \`mutation syncInstallSnippet($id)\` → the webhook install snippet (a string). */
  async syncInstallSnippet(variables: { id: string }): Promise<{ syncInstallSnippet: string }> {
    record("syncInstallSnippet", variables)
    await delay(LATENCY_MS)
    const r = state.record
    return {
      syncInstallSnippet: \`// Auto sync webhook · CRM destination
const SYNC = { workspace: "WS-\${r.workspaceNumber}", contacts: "\${r.contactsStream}" };
hooks.on("record.updated", (e) => window.autoSync?.push(SYNC, e));\`,
    }
  },

  /** \`mutation syncActivate($id)\` → \`Boolean\`; the sync goes active. */
  async syncActivate(variables: { id: string }): Promise<{ syncActivate: boolean }> {
    record("syncActivate", variables)
    await delay(LATENCY_MS)
    update({ record: { ...state.record, status: STATUS.active } })
    return { syncActivate: true }
  },

  /** \`mutation syncRegionsSetup($id, $input: { regionsEnabled, regionOverrides })\` — the separate per-region write. */
  async syncRegionsSetup(variables: { id: string; input: { regionsEnabled: boolean; regionOverrides: readonly unknown[] } }): Promise<{
    syncRegionsSetup: {
      id: string
      regionsEnabled: boolean
      regionOverrides: readonly unknown[]
    }
  }> {
    record("syncRegionsSetup", variables)
    await delay(LATENCY_MS)
    update({
      record: {
        ...state.record,
        regionsEnabled: variables.input.regionsEnabled,
      },
    })
    return {
      syncRegionsSetup: {
        id: variables.id,
        regionsEnabled: variables.input.regionsEnabled,
        regionOverrides: variables.input.regionOverrides,
      },
    }
  },
}

// ---- query
/** One read's state, as the page consumes it. */
export interface StubQueryState<D> {
  data: D | undefined
  fetching: boolean
  /** A successful settle with no fetch in flight (never after an error). */
  settled: boolean
}

export interface StubQuery<D> {
  subscribe(listener: () => void): () => void
  snapshot(): StubQueryState<D>
  refetch(): Promise<void>
  /** Forget the cached answer (a demo reset); the next subscriber fetches again. */
  clear(): void
}

export function createStubQuery<D>(fetcher: () => Promise<D>): StubQuery<D> {
  let state: StubQueryState<D> = {
    data: undefined,
    fetching: false,
    settled: false,
  }
  let started = false
  const listeners = new Set<() => void>()
  const emit = (next: StubQueryState<D>) => {
    state = next
    for (const l of listeners) l()
  }
  const run = async () => {
    started = true
    emit({ ...state, fetching: true, settled: false })
    try {
      const data = await fetcher()
      emit({ data, fetching: false, settled: true })
    } catch {
      emit({ ...state, fetching: false, settled: false })
    }
  }
  return {
    subscribe(listener) {
      listeners.add(listener)
      if (!started) void run()
      return () => listeners.delete(listener)
    },
    snapshot: () => state,
    refetch: run,
    clear() {
      started = false
      emit({ data: undefined, fetching: false, settled: false })
    },
  }
}

const IDLE: StubQueryState<never> = {
  data: undefined,
  fetching: false,
  settled: false,
}

const NO_SUBSCRIBE = () => () => {}

const idleSnapshot = () => IDLE

/** Subscribe to a stub read; a disabled read (\`enabled: false\`) never fetches and reports idle. */
export function useStubQuery<D>(query: StubQuery<D>, enabled = true): StubQueryState<D> {
  return useSyncExternalStore<StubQueryState<D>>(enabled ? query.subscribe : NO_SUBSCRIBE, enabled ? query.snapshot : idleSnapshot, enabled ? query.snapshot : idleSnapshot)
}

// ---- model
/** Select from the account's list, or type a stream key by hand. */
export type StreamMode = "select" | "manual"

/** Enrichment params, edited together in their own dialog; flattened to \`enrichment*\` on send. */
export interface Enrichment {
  locale: string
  region: string
  sourceId: string
}

/** The form's values: \`SyncSetupInput\` plus three UI-only (\`local\`) parts. */
export interface SyncValues {
  workspaceNumber: string
  matchKey: string
  contactsStream: string
  contactsEnabled: boolean
  companiesStream: string
  companiesEnabled: boolean
  dealsStream: string
  dealsEnabled: boolean
  ticketsStream: string
  ticketsEnabled: boolean
  invoicesStream: string
  invoicesEnabled: boolean
  companiesRealtime: boolean
  dealsRealtime: boolean
  /** \`Int64\` id of the picked contacts stream; "" = none (sent as 0). */
  contactsStreamId: string
  syncDeletes: boolean
  enrichmentActive: boolean
  enrichment: Enrichment
  syncOwners: boolean
  regionalIds: boolean
  skipArchived: boolean
  skipTestRecords: boolean
  /** UI only: the user opted out of the account-resolved workspace number. */
  manualWorkspaceNumber: boolean
  /** UI only: select vs manual entry per stream row. */
  modes: Record<SyncObject, StreamMode>
  /** UI only: "I added the webhook snippet." on the snippet page. */
  copied: boolean
}

/** Computed keys outside the values: how many streams are chosen. */
export interface SyncComputed {
  chosenCount: number
}

type Path = FieldPath<SyncValues>

/** One stream row: its key and enabled paths and how the page titles it. */
export interface StreamRow {
  category: SyncObject
  title: string
  menuName: string
  label: Path
  enabled: Path
  /** The real-time / nightly-batch switch under the row, when it has one. */
  transport?: Path
  /** Contacts and Invoices show their transport, fixed. */
  transportFixed?: string
}

export const STREAM_ROWS: readonly StreamRow[] = [
  {
    category: "CONTACTS",
    title: "Contacts",
    menuName: "Contacts",
    label: "contactsStream",
    enabled: "contactsEnabled",
    transportFixed: "nightly batch",
  },
  {
    category: "COMPANIES",
    title: "Companies",
    menuName: "Companies",
    label: "companiesStream",
    enabled: "companiesEnabled",
    transport: "companiesRealtime",
  },
  {
    category: "DEALS",
    title: "Deals",
    menuName: "Deals",
    label: "dealsStream",
    enabled: "dealsEnabled",
    transport: "dealsRealtime",
  },
  {
    category: "TICKETS",
    title: "Tickets",
    menuName: "Tickets",
    label: "ticketsStream",
    enabled: "ticketsEnabled",
  },
  {
    category: "INVOICES",
    title: "Invoices",
    menuName: "Invoices",
    label: "invoicesStream",
    enabled: "invoicesEnabled",
    transportFixed: "real time",
  },
]

/** Client checks on the workspace number. */
export const WORKSPACE_NUMBER_FORMAT = /^[0-9]{6,14}$/

export const WORKSPACE_NUMBER_MESSAGES = {
  required: "Workspace number is required",
  format: "Workspace number is too short. It must be at least 6 digits long.",
  inUse: "This workspace number is already used by another sync.",
} as const

/** The blocking message while no stream is chosen. */
export const AT_LEAST_ONE_MESSAGE = "Please choose at least one sync stream to continue"

/** App-context keys the rules read (\`c.ctx\` / \`e.ctx\`). */
export const CTX = {
  linked: "linked",
  primary: "primary",
  workspaceFetched: "workspaceFetched",
  fetchedWorkspaceNumber: "fetchedWorkspaceNumber",
  storedWorkspaceNumber: "storedWorkspaceNumber",
  primaryWorkspaceNumber: "primaryWorkspaceNumber",
  streams: "streams",
  regionsEnabled: "regionsEnabled",
  hosted: "hosted",
  /** Which destination account the streams list belongs to; a change is the trigger of the evidence-gated wipe. */
  accountSignature: "accountSignature",
  /** The actions list finished loading for the signed-in primary (never wipe on a list that is still loading). */
  listSettled: "listSettled",
} as const

/** Narrow one entry of the context's actions list (context is JSON; the operators get \`unknown\`). */
function isStream(x: unknown): x is SyncStream {
  return typeof x === "object" && x !== null && typeof Reflect.get(x, "streamKey") === "string" && typeof Reflect.get(x, "workspaceRef") === "string" && typeof Reflect.get(x, "id") === "string"
}

function streamFor(label: unknown, actions: unknown): SyncStream | undefined {
  if (typeof label !== "string" || label === "" || !Array.isArray(actions)) return undefined
  return actions.filter(isStream).find((a) => a.streamKey === label)
}

/**
 * Named operators the model calls (serializable: a server registers the same names).
 * \`streamWorkspace(key, streams)\` — the workspace number of the picked stream, "" on a miss.
 * \`streamId(key, streams)\` — the picked contacts stream's id.
 */
export const syncRegistry = catalogRegistry()
  .operator("streamWorkspace", {
    fn: (label, actions) => parseWorkspaceNumber(streamFor(label, actions)?.workspaceRef ?? ""),
    arity: 2,
    returns: "string",
  })
  .operator("streamId", {
    fn: (label, actions) => streamFor(label, actions)?.id ?? "",
    arity: 2,
    returns: "string",
  })

const EMPTY_ENRICHMENT: Enrichment = {
  locale: "",
  region: "",
  sourceId: "",
}

export const syncModel = defineForm<SyncValues, SyncComputed>()(({ f, c, e, v }) => {
  /** The account-resolved number wins while the account is linked on the primary, the fetch settled, and the user did not opt out. */
  const mirrorFetched = c.and(c.ctx(CTX.linked), c.ctx(CTX.primary), c.ctx(CTX.workspaceFetched), c.ne("manualWorkspaceNumber", true))
  const workspaceOf = (label: Path) => e.op("streamWorkspace", e.ref(label), e.ctx(CTX.streams))
  const chosen = (row: StreamRow) => e.if(c.and(c.eq(row.enabled, true), c.filled(row.label)), 1, 0)
  const deletesFree = c.not(c.ctx(CTX.regionsEnabled))
  return {
    // the UI-only parts are \`local\`: never sent, and \`isDirty({ sent: true })\` ignores them (gap L),
    // so switching a row between select and manual does not make an active setup "changed"
    fields: [f.switch("manualWorkspaceNumber", { local: true }), ...SYNC_OBJECTS.map((cat) => f.field("custom", \`modes.\${cat}\`, { local: true }))],
    // switching a row between select and manual must not drop its label, and a hidden field
    // still SENDS its value (react-hook-form posts every key; the backend treats an absent
    // key as "keep stored") — gap G: \`keep\` alone leaves it out
    whenHidden: "keep-and-send",
    derived: {
      workspaceNumber: {
        when: mirrorFetched,
        expr: e.ctx(CTX.fetchedWorkspaceNumber, ""),
        readOnly: true,
      },
      // per-region destinations force deletion sync off
      syncDeletes: {
        when: c.ctx(CTX.regionsEnabled),
        expr: e.lit(false),
        readOnly: true,
      },
      chosenCount: e.add(...STREAM_ROWS.map(chosen)),
    },
    validate: [v.assert(c.or(c.empty(e.ctx(CTX.primaryWorkspaceNumber, "")), c.ne("workspaceNumber", e.ctx(CTX.primaryWorkspaceNumber, ""))), WORKSPACE_NUMBER_MESSAGES.inUse, { path: "workspaceNumber" })],
    effects: [
      // picking a stream back-fills the shared workspace number, never blanking it on a miss
      ...STREAM_ROWS.map((row) => ({
        on: [row.label],
        when: c.and(c.filled(row.label), c.filled(workspaceOf(row.label)), c.not(mirrorFetched)),
        do: [{ set: "workspaceNumber", to: workspaceOf(row.label) }],
      })),
      {
        on: ["contactsStream"],
        do: [
          {
            set: "contactsStreamId",
            to: e.op("streamId", e.ref("contactsStream"), e.ctx(CTX.streams)),
          },
        ],
      },
      // leaving select mode, or clearing the contacts stream, detaches the account-scoped pair
      {
        on: ["contactsStream"],
        when: c.and(c.empty("contactsStream"), deletesFree),
        do: [{ set: "syncDeletes", to: false }],
      },
      {
        on: ["modes.CONTACTS"],
        when: c.and(c.eq("modes.CONTACTS", "manual"), deletesFree),
        do: [
          { set: "contactsStreamId", to: "" },
          { set: "syncDeletes", to: false },
        ],
      },
      // regional record IDs only apply to the external-ID match key
      {
        on: ["matchKey"],
        when: c.ne("matchKey", EXTERNAL_ID),
        do: [{ set: "regionalIds", to: false }],
      },
      // turning enrichment off clears its params
      {
        on: ["enrichmentActive"],
        when: c.eq("enrichmentActive", false),
        do: [{ set: "enrichment", to: e.lit({ ...EMPTY_ENRICHMENT }) }],
      },
      // the destination account changed under a picked stream the new SETTLED list lacks: wipe it and
      // its contacts pair so the row demands a re-pick. An effect on
      // a context key, origin \`context\` (gap C); a list still loading never wipes.
      ...STREAM_ROWS.map((row) => ({
        on: [\`$ctx.\${CTX.accountSignature}\`],
        origins: ["context" as const],
        when: c.and(c.ctx(CTX.listSettled), c.ne(\`modes.\${row.category}\`, "manual"), c.filled(row.label), c.empty(workspaceOf(row.label))),
        do: row.category === "CONTACTS" ? [{ set: row.label, to: "" }, { set: "contactsStreamId", to: "" }] : [{ set: row.label, to: "" }],
      })),
      // back to the connected account with no fetch running: restore the stored number
      {
        on: ["manualWorkspaceNumber"],
        when: c.and(c.eq("manualWorkspaceNumber", false), c.not(c.ctx(CTX.workspaceFetched))),
        do: [{ set: "workspaceNumber", to: e.ctx(CTX.storedWorkspaceNumber, "") }],
      },
    ],
    actions: {
      toggleManualWorkspaceNumber: [
        {
          set: "manualWorkspaceNumber",
          to: e.if(c.eq("manualWorkspaceNumber", true), false, true),
        },
      ],
      // "Create Now": every row takes its generated label, passed as the action's
      // arguments \`{ labels: { CONTACTS: "…" } }\` — gap M
      placeAllGenerated: STREAM_ROWS.flatMap((row) => [
        { set: row.label, to: e.arg(\`labels.\${row.category}\`, "") },
        { set: row.enabled, to: true },
        { set: \`modes.\${row.category}\`, to: "select" },
      ]),
      ...Object.fromEntries(
        STREAM_ROWS.flatMap((row) => [
          [
            \`manual:\${row.category}\`,
            [
              { set: \`modes.\${row.category}\`, to: "manual" },
              { set: row.enabled, to: true },
            ],
          ],
          [
            \`select:\${row.category}\`,
            [
              { set: \`modes.\${row.category}\`, to: "select" },
              { set: row.enabled, to: true },
            ],
          ],
          [
            \`disable:\${row.category}\`,
            [
              { set: row.label, to: "" },
              { set: row.enabled, to: false },
            ],
          ],
          [
            \`placeGenerated:\${row.category}\`,
            [
              // the generated action's label, passed as \`{ streamKey }\` (gap M)
              { set: row.label, to: e.arg("streamKey", "") },
              { set: row.enabled, to: true },
            ],
          ],
        ]),
      ),
    },
  }
})

/** A new setup: created or pending, still at step 1. */
export function isNewSetup(r: SyncRecord): boolean {
  return (r.status === STATUS.created || r.status === STATUS.pending) && r.step === 1
}

/** Each row's mode at first render, before any list settles. */
function initialMode(r: SyncRecord, linked: boolean, label: string): StreamMode {
  if (r.priority === "SECONDARY") return "manual"
  if (linked && r.status === STATUS.created) return "select"
  return linked && label !== "" ? "select" : "manual"
}

/** \`defaultValues\` derived from the stored record. */
export function valuesFromRecord(r: SyncRecord, linked: boolean): SyncValues {
  const fresh = isNewSetup(r)
  const labels: Record<SyncObject, string> = {
    CONTACTS: r.contactsStream,
    COMPANIES: r.companiesStream,
    DEALS: r.dealsStream,
    TICKETS: r.ticketsStream,
    INVOICES: r.invoicesStream,
  }
  const modes = Object.fromEntries(SYNC_OBJECTS.map((cat) => [cat, initialMode(r, linked, labels[cat])]))
  return {
    workspaceNumber: parseWorkspaceNumber(r.workspaceNumber),
    matchKey: r.matchKey,
    contactsStream: r.contactsStream,
    contactsEnabled: fresh || r.contactsOn || r.contactsBatchOn,
    companiesStream: r.companiesStream,
    companiesEnabled: fresh || r.companiesRealtimeOn || r.companiesBatchOn,
    dealsStream: r.dealsStream,
    dealsEnabled: fresh || r.dealsRealtimeOn || r.dealsBatchOn,
    ticketsStream: r.ticketsStream,
    ticketsEnabled: fresh || r.ticketsOn,
    invoicesStream: r.invoicesStream,
    invoicesEnabled: fresh || r.invoicesOn,
    // nightly batch unless real time was stored
    companiesRealtime: r.companiesRealtimeOn,
    dealsRealtime: r.dealsRealtimeOn,
    contactsStreamId: r.contactsStreamId,
    syncDeletes: r.syncDeletes,
    enrichmentActive: r.enrichmentActive,
    enrichment: {
      locale: r.enrichmentLocale,
      region: r.enrichmentRegion,
      sourceId: r.enrichmentSourceId,
    },
    syncOwners: r.syncOwners,
    regionalIds: r.regionalIds,
    skipArchived: r.skipArchived,
    skipTestRecords: r.skipTestRecords,
    manualWorkspaceNumber: false,
    modes: {
      CONTACTS: modes.CONTACTS ?? "manual",
      COMPANIES: modes.COMPANIES ?? "manual",
      DEALS: modes.DEALS ?? "manual",
      TICKETS: modes.TICKETS ?? "manual",
      INVOICES: modes.INVOICES ?? "manual",
    },
    copied: false,
  }
}

/** What \`toSyncSetupInput\` needs besides the values: the stored record and live app state. */
export interface SendContext {
  stored: SyncRecord
  regionsEnabled: boolean
}

/**
 * The draft input of a new setup left early: every key only when non-empty (the workspace
 * number through \`parseWorkspaceNumber\`), and \`null\` — no
 * call — when nothing is left.
 */
export function toSyncDraftInput(values: SyncValues): SyncDraftInput | null {
  const candidate: SyncDraftInput = {
    matchKey: values.matchKey,
    companiesStream: values.companiesStream,
    contactsStream: values.contactsStream,
    dealsStream: values.dealsStream,
    ticketsStream: values.ticketsStream,
    contactsStreamId: values.contactsStreamId,
    workspaceNumber: parseWorkspaceNumber(values.workspaceNumber),
  }
  const input = Object.fromEntries(Object.entries(candidate).filter(([, v]) => Boolean(v)))
  return Object.keys(input).length === 0 ? null : input
}

function isMatchKey(x: string): x is MatchKey {
  return x === "EXTERNAL_ID" || x === "EMAIL" || x === "DOMAIN" || x === "INTERNAL_ID"
}

/**
 * The \`SyncSetupInput\` the page sends: enabled flags from "key is not blank",
 * the parsed workspace number (the model's mirror already resolved fetched vs
 * typed), \`regionalIds\` only with per-region destinations on AND the external-ID
 * match key, and \`syncDeletes\` an explicit \`false\` under per-region destinations,
 * otherwise sent only when it changed.
 */
export function toSyncSetupInput(values: SyncValues, sc: SendContext): SyncSetupInput {
  const storedDeletes = sc.stored.syncDeletes
  return {
    workspaceNumber: parseWorkspaceNumber(values.workspaceNumber),
    matchKey: isMatchKey(values.matchKey) ? values.matchKey : sc.stored.matchKey,
    contactsStream: values.contactsStream,
    contactsEnabled: values.contactsStream !== "",
    companiesStream: values.companiesStream,
    companiesEnabled: values.companiesStream !== "",
    dealsStream: values.dealsStream,
    dealsEnabled: values.dealsStream !== "",
    ticketsStream: values.ticketsStream,
    ticketsEnabled: values.ticketsStream !== "",
    invoicesStream: values.invoicesStream,
    invoicesEnabled: values.invoicesStream !== "",
    companiesRealtime: values.companiesRealtime,
    dealsRealtime: values.dealsRealtime,
    contactsStreamId: values.contactsStreamId === "" ? 0 : values.contactsStreamId,
    syncDeletes: sc.regionsEnabled ? false : values.syncDeletes === storedDeletes ? undefined : values.syncDeletes,
    enrichmentActive: values.enrichmentActive,
    enrichmentLocale: values.enrichment.locale,
    enrichmentRegion: values.enrichment.region,
    enrichmentSourceId: values.enrichment.sourceId,
    syncOwners: values.syncOwners,
    regionalIds: values.regionalIds === true && values.matchKey === EXTERNAL_ID && sc.regionsEnabled,
    skipArchived: values.skipArchived,
    skipTestRecords: values.skipTestRecords,
  }
}

/** The app context the rules read, from the page's live state (JSON only). */
export interface SyncContextInput {
  linked: boolean
  record: SyncRecord
  workspaceRef: { settled: boolean; value: string | null }
  actions: readonly SyncStream[]
  regionsEnabled: boolean
  primaryWorkspaceNumber: string
  /** The destination account behind \`actions\` (the wipe's trigger). */
  accountSignature: string
  /** \`actions\` is a settled answer for the signed-in primary, not a list still loading. */
  listSettled: boolean
}

export function syncContext(i: SyncContextInput): JsonObject {
  const primary = i.record.priority === "PRIMARY"
  const fetchEnabled = i.linked && primary && parseWorkspaceNumber(i.record.workspaceNumber) === ""
  return {
    [CTX.linked]: i.linked,
    [CTX.primary]: primary,
    [CTX.workspaceFetched]: fetchEnabled && i.workspaceRef.settled,
    [CTX.fetchedWorkspaceNumber]: parseWorkspaceNumber(i.workspaceRef.value ?? ""),
    [CTX.storedWorkspaceNumber]: parseWorkspaceNumber(i.record.workspaceNumber),
    [CTX.primaryWorkspaceNumber]: primary ? "" : i.primaryWorkspaceNumber,
    [CTX.streams]: i.actions.map((a) => ({
      id: a.id,
      name: a.name,
      category: a.category,
      workspaceRef: a.workspaceRef,
      streamKey: a.streamKey,
    })),
    [CTX.regionsEnabled]: i.regionsEnabled,
    [CTX.hosted]: i.record.isHosted,
    [CTX.accountSignature]: i.accountSignature,
    [CTX.listSettled]: i.listSettled,
  }
}

// ---- the page
// A CRM sync-rules settings page (an invented destination CRM), built on the declarative API. The
// model (the model section above) carries every cross-field behaviour as a mirror, an effect
// or an action; app state (the account link, priority, the streams list, the fetched workspace ref,
// per-region destinations, the page) is context. The stub server answers generated-client GraphQL
// shapes, including the spec ClientError envelope on failure. What the engine cannot express is shown
// as a labelled placeholder.

const { c, e, v } = kit<SyncValues>()

const MATCH_KEY_OPTIONS: SelectOption[] = [
  { value: "EXTERNAL_ID", label: "External ID" },
  { value: "EMAIL", label: "Email" },
  { value: "DOMAIN", label: "Company domain" },
  { value: "INTERNAL_ID", label: "Internal ID" },
]

/** A slice of locale / region tables for the enrichment provider. */
const ENRICH_LOCALES: SelectOption[] = [
  { value: "en", label: "English" },
  { value: "de", label: "German" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "tr", label: "Turkish" },
]

const ENRICH_REGIONS: SelectOption[] = [
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "TR", label: "Türkiye" },
]

/** The linked destination account shown on the connected row. */
const ACCOUNT_ID = "acct-4471-0921"

/** demo-chrome: a second destination account the user can switch to; the stub lists no streams for it. */
const OTHER_ACCOUNT_ID = "acct-8830-1175"

/** The primary sync's workspace number a secondary one may not reuse. */
const PRIMARY_WORKSPACE_NUMBER = "11223344556"

/** UI page of the setup: the form, then the webhook snippet page. */
type SetupPage = "form" | "code"

/** Options of one object type, names cut at 30 characters. */
function optionsFor(actions: readonly SyncStream[], category: SyncObject): SelectOption[] {
  return actions
    .filter((a) => a.category === category)
    .map((a) => ({
      value: a.streamKey,
      label: \`\${a.name.length > 30 ? \`\${a.name.slice(0, 30)}...\` : a.name} (\${a.streamKey})\`,
    }))
}

// Cached reads, as stub reads (started by their first subscriber).
const streamsQuery = createStubQuery(() => syncServer.listStreams())

const workspaceRefQuery = createStubQuery(() => syncServer.fetchWorkspaceRef())

/** The ••• menu of one stream row: every item is a named model action. */
function RowMenu({
  form,
  row,
  onGenerate,
  linked,
  secondary,
  busy,
}: {
  form: FormStore<SyncValues>
  row: StreamRow
  onGenerate: (category: SyncObject) => void
  linked: boolean
  secondary: boolean
  busy: boolean
}) {
  const enabled = useFormValue(form, row.enabled) === true
  const manual = useFormValue(form, \`modes.\${row.category}\`) === "manual"
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="outline" size="icon-sm" aria-label={\`\${row.title} options\`} disabled={busy}>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled={secondary || !linked || !enabled || manual} onClick={() => onGenerate(row.category)}>
          Create a new sync stream
        </DropdownMenuItem>
        {!manual || !enabled ? (
          <DropdownMenuItem disabled={enabled && manual} onClick={() => form.run(\`manual:\${row.category}\`)}>
            Enter the stream key by hand
          </DropdownMenuItem>
        ) : null}
        {manual || !enabled ? (
          <DropdownMenuItem disabled={secondary || (enabled && !manual && !linked)} onClick={() => form.run(\`select:\${row.category}\`)}>
            Select from existing streams
          </DropdownMenuItem>
        ) : null}
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" disabled={!enabled} onClick={() => form.run(\`disable:\${row.category}\`)}>
          Disable the {row.menuName} stream
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/** One stream row: a select over the account's streams, or a typed key; the transport under it. */
function StreamRowFields({
  form,
  row,
  actions,
  loading,
  linked,
  secondary,
  generating,
  onGenerate,
}: {
  form: FormStore<SyncValues>
  row: StreamRow
  actions: readonly SyncStream[]
  loading: boolean
  linked: boolean
  secondary: boolean
  generating: boolean
  onGenerate: (category: SyncObject) => void
}) {
  const off = c.ne(row.enabled, true)
  return (
    <div className="flex flex-col gap-1.5 border-t pt-2.5 first:border-t-0 first:pt-0">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13px] font-medium">
          {row.title} stream {loading ? <span className="text-xs font-normal text-muted-foreground">· loading…</span> : null}
        </span>
        <RowMenu form={form} row={row} onGenerate={onGenerate} linked={linked} secondary={secondary} busy={generating} />
      </div>
      <When if={c.eq(\`modes.\${row.category}\`, "select")}>
        <SelectField name={row.label} label={\`\${row.title} sync stream\`} options={optionsFor(actions, row.category)} placeholder="Not active" disabledIf={off} />
      </When>
      <When if={c.eq(\`modes.\${row.category}\`, "manual")}>
        <TextField name={row.label} label={\`\${row.title} stream key\`} placeholder="Not active" dir="ltr" disabledIf={off} />
      </When>
      {/* visibleIf reads the sibling stream key row.label */}
      {row.transport ? <SwitchField name={row.transport} label="Sync in real time" description="Off: nightly batch through a webhook you add on the next page." visibleIf={c.filled(row.label)} /> : null}
      {row.transportFixed ? (
        <When if={c.filled(row.label)}>
          <p className="text-xs text-muted-foreground">Sent through {row.transportFixed}.</p>
        </When>
      ) : null}
    </div>
  )
}

/** A clearly labelled stand-in for behaviour the engine cannot express yet. */
function NotYetSupported({ what, gap }: { what: string; gap: string }) {
  return (
    <p className="rounded-md border border-dashed border-amber-500/50 bg-amber-500/5 px-2.5 py-1.5 text-xs text-amber-800 dark:text-amber-300">
      <span className="font-medium">Not yet supported:</span> {what} <span className="text-muted-foreground">({gap})</span>
    </p>
  )
}

/** One toggle card: title, its switch field, and anything nested. */
function ToggleCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2 rounded-lg border p-3">
      <h3 className="text-sm font-semibold">{title}</h3>
      {children}
    </section>
  )
}

/** The snippet page's object list and generated webhook snippet. */
function CodePage({ form, code, codeLoading }: { form: FormStore<SyncValues>; code: string; codeLoading: boolean }) {
  const contactsKeyValue = useFormValue(form, "contactsStream")
  const companiesRt = useFormValue(form, "companiesRealtime")
  const companiesKey = useFormValue(form, "companiesStream")
  const dealsRt = useFormValue(form, "dealsRealtime")
  const dealsKey = useFormValue(form, "dealsStream")
  const companiesBatch = companiesRt === false && companiesKey !== ""
  const dealsBatch = dealsRt === false && dealsKey !== ""
  const events = [contactsKeyValue !== "" ? "Contacts" : null, dealsBatch ? "Deals" : null, companiesBatch ? "Companies" : null].filter((x) => x !== null)
  const [copiedClip, setCopiedClip] = useState(false)
  return (
    <div className="flex flex-col gap-3">
      <section className="flex flex-col gap-1 rounded-lg border p-3 text-[13px]">
        <h3 className="text-sm font-semibold">Nightly batch objects</h3>
        <p>{events.join(", ")} sync in the nightly batch, through the webhook below.</p>
      </section>
      <section className="flex flex-col gap-2 rounded-lg border p-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[13px] font-medium">Copy the snippet</p>
            <p className="text-xs text-muted-foreground">The snippet is ready. Copy it, then follow the steps below.</p>
          </div>
          <Button
            type="button"
            size="sm"
            variant="outline"
            disabled={codeLoading}
            onClick={() => {
              void navigator.clipboard?.writeText(code)
              setCopiedClip(true)
            }}
          >
            {copiedClip ? "Copied" : "Copy to clipboard"}
          </Button>
        </div>
        <pre className="overflow-x-auto rounded-md bg-muted p-2 font-mono text-[11px]">{codeLoading ? "Generating…" : code}</pre>
        <ol className="list-decimal space-y-0.5 ps-5 text-xs text-muted-foreground">
          <li>Open your source system → Settings → Webhooks.</li>
          <li>Add a webhook, name it, paste the snippet, then Save and Enable.</li>
        </ol>
        {/* visibleIf reads the app context: the page the flow is on */}
        <CheckboxField name="copied" label="I added the webhook snippet." local visibleIf={c.eq(e.ctx("page"), "code")} rules={[v.oneOf([true], "Confirm you added the snippet to finish")]} />
      </section>
    </div>
  )
}

/** What the setup page knows about the workspace and the signed-in account. */
interface AccountState {
  linked: boolean
  hasSubscriptionPlan: boolean
  /** The user switched to another destination account whose settled list lacks the picked streams (the stub's second account has none). */
  otherAccount: boolean
}

/** The finish outcome the status slot renders (navigate, or the post-setup regions prompt). */
interface FinishOutcome {
  regions: boolean
}

const codeQueries = new Map<string, StubQuery<{ syncInstallSnippet: string }>>()

/** The code page's \`syncInstallSnippet\` read; a new round per visit (a mutation on each visit). */
function codeQueryFor(id: string, round: number): StubQuery<{ syncInstallSnippet: string }> {
  const key = \`\${id}#\${round}\`
  const hit = codeQueries.get(key)
  if (hit) return hit
  const q = createStubQuery(() => syncServer.syncInstallSnippet({ id }))
  codeQueries.set(key, q)
  return q
}

export function SyncSetupForm({ record, account, onSignIn, side }: { record: SyncRecord; account: AccountState; onSignIn: () => void; side: ReactNode }) {
  const primary = record.priority === "PRIMARY"
  const secondary = !primary
  const { linked } = account
  const list = useStubQuery(streamsQuery, linked && primary)
  const tracking = useStubQuery(workspaceRefQuery, linked && primary && record.workspaceNumber === "")
  const actions = linked && primary && !account.otherAccount ? (list.data?.listStreams ?? []) : []
  const [generating, setGenerating] = useState(false)
  const [notice, setNotice] = useState<{
    tone: "ok" | "warn" | "error"
    text: string
  } | null>(null)
  // live per-region switch: a separate mutation, so it is app state, not a value of this form
  const [regionsEnabled, setRegionsEnabled] = useState(record.regionsEnabled)
  const [regionsSaving, setRegionsSaving] = useState(false)
  const [page, setPage] = useState<SetupPage>("form")
  const [codeRound, setCodeRound] = useState(0)
  const [showCreateAll, setShowCreateAll] = useState((record.status === STATUS.created || record.step === 1) && linked)
  const { confirm, dialog } = useConfirm()

  const form = useForm<SyncValues>({
    defaultValues: valuesFromRecord(record, linked),
    model: syncModel,
    registry: syncRegistry,
    // a NEW setup saves a server draft when the page is left, changed or not
    plugins: [
      saveOnLeave<SyncValues>({
        when: () => isNewSetup(record),
        save: async ({ values }) => {
          const input = toSyncDraftInput(values)
          if (input) await syncServer.syncSaveDraft({ id: record.id, input })
        },
      }),
    ],
    context: {
      ...syncContext({
        linked,
        record,
        workspaceRef: {
          settled: tracking.settled,
          value: tracking.data?.fetchWorkspaceRef ?? null,
        },
        actions,
        accountSignature: account.otherAccount ? OTHER_ACCOUNT_ID : ACCOUNT_ID,
        listSettled: linked && primary && !list.fetching,
        regionsEnabled,
        primaryWorkspaceNumber: PRIMARY_WORKSPACE_NUMBER,
      }),
      page,
      hasSubscriptionPlan: account.hasSubscriptionPlan,
    },
  })
  const code = useStubQuery(codeQueryFor(record.id, codeRound), page === "code")
  const contactsKey = useFormValue(form, "contactsStream")
  const contactsStreamIdValue = useFormValue(form, "contactsStreamId")
  const companiesRt = useFormValue(form, "companiesRealtime")
  const companiesKey = useFormValue(form, "companiesStream")
  const dealsRt = useFormValue(form, "dealsRealtime")
  const dealsKey = useFormValue(form, "dealsStream")
  const enrichLocale = useFormValue(form, "enrichment.locale")
  const enrichRegion = useFormValue(form, "enrichment.region")
  const enrichSource = useFormValue(form, "enrichment.sourceId")
  // whether the snippet page shows; the same condition gates the "next" phase
  const showsCode = !record.isHosted && (contactsKey !== "" || (companiesRt === false && companiesKey !== "") || (dealsRt === false && dealsKey !== ""))
  const [finished, setFinished] = useState<FinishOutcome | null>(null)

  const finish = async (): Promise<FinishOutcome> => {
    await syncServer.syncActivate({ id: record.id })
    const outcome = { regions: regionsEnabled }
    setFinished(outcome)
    return outcome
  }
  const failure = (err: unknown) => mapErrors<SyncValues>(err) ?? err

  // Form page: save (skipped when an active setup has no changes), then the snippet page or finish.
  const formPhases: PipelinePhase<SyncValues>[] = [
    {
      id: "save",
      label: "Save setup",
      run: async (payload) => {
        // only what the save sends counts: the UI-only row modes and manual toggle do not (gap L)
        if (record.status === STATUS.active && !form.isDirty({ sent: true })) return "unchanged"
        try {
          return await syncServer.syncSetup({
            id: record.id,
            input: toSyncSetupInput(payload, {
              stored: record,
              regionsEnabled,
            }),
          })
        } catch (err) {
          throw failure(err)
        }
      },
    },
    {
      id: "next",
      label: showsCode ? "Open the snippet page" : "Finish setup",
      run: async () => {
        if (showsCode) {
          setCodeRound((n) => n + 1)
          setPage("code")
          return "code page"
        }
        try {
          return await finish()
        } catch (err) {
          throw failure(err)
        }
      },
    },
  ]
  // Snippet page: confirm, then finish (then syncActivate).
  const codePhases: PipelinePhase<SyncValues>[] = [
    {
      id: "finish",
      label: "Finish setup",
      run: async () => {
        try {
          return await finish()
        } catch (err) {
          throw failure(err)
        }
      },
    },
  ]
  const formPipe = useSubmitPipeline(formPhases)
  const codePipe = useSubmitPipeline(codePhases)

  const refetchStreams = () => streamsQuery.refetch()
  const generateOne = async (category: SyncObject) => {
    setGenerating(true)
    try {
      const { createStream: a } = await syncServer.createStream({ type: category })
      await refetchStreams()
      // the mutation's answer goes straight into the row as the action's arguments (gap M)
      form.run(\`placeGenerated:\${category}\`, { args: { streamKey: a.streamKey } })
    } catch (err) {
      setNotice({
        tone: "error",
        text: String(mapErrors(err)?.message ?? "Generating failed"),
      })
    } finally {
      setGenerating(false)
    }
  }
  const generateAll = async () => {
    setGenerating(true)
    try {
      const { createAllStreams: created } = await syncServer.createAllStreams()
      await refetchStreams()
      if (created.length === 0) {
        setNotice({
          tone: "warn",
          text: "Your streams were created in the destination but the answer came back empty, so we couldn't fill them in. Pick them from the dropdowns below rather than creating them again.",
        })
      } else {
        form.run("placeAllGenerated", { args: { labels: Object.fromEntries(created.map((a) => [a.category, a.streamKey])) } })
        setNotice({
          tone: "ok",
          text: "All streams created",
        })
      }
      setShowCreateAll(false)
    } catch (err) {
      setNotice({
        tone: "error",
        text: String(mapErrors(err)?.message ?? "Generating failed"),
      })
    } finally {
      setGenerating(false)
    }
  }
  const toggleRegions = async (next: boolean) => {
    setRegionsSaving(true)
    try {
      await syncServer.syncRegionsSetup({
        id: record.id,
        input: { regionsEnabled: next, regionOverrides: [] },
      })
      setRegionsEnabled(next)
    } catch (err) {
      setNotice({
        tone: "error",
        text: String(mapErrors(err)?.message ?? "Failed to update regions."),
      })
    } finally {
      setRegionsSaving(false)
    }
  }
  const blockRegionsTurnOn = !record.isHosted && !regionsEnabled

  return (
    <TwoCol>
      <Form form={form} onSubmit={page === "form" ? formPipe.onSubmit : codePipe.onSubmit} className="flex flex-col gap-3">
        <When if={c.eq(e.ctx("page"), "form")}>
          <section className="flex flex-col gap-3 rounded-lg border p-3">
            <div>
              <h3 className="text-sm font-semibold">CRM sync rules</h3>
              <p className="text-[13px] text-muted-foreground">Sync contacts, companies, deals, tickets and invoices to your destination CRM.</p>
            </div>
            <p className="rounded-md border bg-muted/40 px-2.5 py-1.5 text-[13px]">
              {primary ? "Link your destination account to pick streams from a list, or enter the stream keys by hand." : "Enter the workspace number and stream keys by hand."}
            </p>
            {primary && linked ? (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-muted px-2.5 py-1.5 text-[13px]">
                <span className="text-muted-foreground">✓ {ACCOUNT_ID} account linked.</span>
                <div className="flex items-center gap-2">
                  <Button type="button" size="sm" variant="link" onClick={() => form.run("toggleManualWorkspaceNumber")}>
                    <When if={c.eq("manualWorkspaceNumber", true)}>Use connected account</When>
                    <When if={c.ne("manualWorkspaceNumber", true)}>Enter ID manually</When>
                  </Button>
                </div>
              </div>
            ) : null}
            {primary && linked ? <NotYetSupported what="Manage accounts (an accounts manager is its own surface, outside this form)" gap="out of scope" /> : null}
            {primary && !linked ? (
              <Button type="button" size="sm" variant="outline" className="w-fit" onClick={onSignIn}>
                Link destination account
              </Button>
            ) : null}
            {showCreateAll && primary && linked ? (
              <div className="flex flex-col gap-1.5 rounded-md border border-sky-500/30 bg-sky-500/5 p-2.5 text-[13px]">
                <p className="flex items-center gap-1.5 font-medium">
                  Create all streams automatically <Badge variant="secondary">Recommended</Badge>
                </p>
                <p>One new stream per object type is created in the destination. Existing streams stay as they are.</p>
                <div className="flex gap-2">
                  <Button type="button" size="sm" disabled={generating} onClick={() => void generateAll()}>
                    {generating ? "Creating…" : "Create now"}
                  </Button>
                  <Button type="button" size="sm" variant="outline" onClick={() => setShowCreateAll(false)}>
                    Close
                  </Button>
                </div>
              </div>
            ) : null}
            {notice ? (
              <p
                role="status"
                className={notice.tone === "error" ? "text-[13px] text-destructive" : notice.tone === "warn" ? "text-[13px] text-amber-700 dark:text-amber-300" : "text-[13px] text-emerald-700 dark:text-emerald-400"}
              >
                {notice.text}
              </p>
            ) : null}
            <TextField
              name="workspaceNumber"
              label="Workspace number"
              description="Found in your destination under Settings → Workspace."
              prefix="WS-"
              dir="ltr"
              inputMode="numeric"
              required
              requiredMessage={WORKSPACE_NUMBER_MESSAGES.required}
              rules={[v.pattern(WORKSPACE_NUMBER_FORMAT, WORKSPACE_NUMBER_MESSAGES.format)]}
              // app context: account-resolved while linked on the primary, unless the user opted out (sibling 'manualWorkspaceNumber')
              readOnlyIf={c.and(c.ctx(CTX.linked), c.ctx(CTX.primary), c.ne("manualWorkspaceNumber", true))}
            />
            <RadioGroupField
              name="matchKey"
              label="Match records by"
              description="Which key identifies the same record on both sides."
              options={MATCH_KEY_OPTIONS}
              required
              requiredMessage="Please choose a match key to continue."
            />
            <div className="flex flex-col gap-2.5 rounded-md border p-2.5">
              {STREAM_ROWS.map((row) => (
                <StreamRowFields
                  key={row.category}
                  form={form}
                  row={row}
                  actions={actions}
                  loading={list.fetching}
                  linked={linked}
                  secondary={secondary}
                  generating={generating}
                  onGenerate={(cat) => void generateOne(cat)}
                />
              ))}
            </div>
            <DisplayField name="chosenCount" label="Streams chosen" tone="inline" rules={[v.min(1, AT_LEAST_ONE_MESSAGE)]} />
          </section>

          <ToggleCard title="Sync record owners">
            <SwitchField name="syncOwners" label="Assign each synced record to its owner in the destination." />
          </ToggleCard>

          {primary ? (
            <ToggleCard title="Per-region destinations">
              <label className="flex items-center justify-between gap-3 text-[13px]">
                <span>Sync each region to its own destination workspace {regionsSaving ? <span className="text-muted-foreground">· saving…</span> : null}</span>
                <Switch checked={regionsEnabled} disabled={blockRegionsTurnOn || regionsSaving} onCheckedChange={(next) => void toggleRegions(next)} aria-label="Per-region destinations" />
              </label>
              {blockRegionsTurnOn ? (
                <p className="rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5 text-xs">
                  <span className="font-medium">Per-region destinations need the hosted install.</span> This workspace uses the self-hosted webhook, which has one destination only.
                </p>
              ) : null}
              <CheckboxField
                name="regionalIds"
                label="Use regional record IDs"
                description="With the external-ID match key, each region prefixes its own code to the ID."
                // app context: only with per-region destinations on; cleared when they go off
                visibleIf={c.ctx(CTX.regionsEnabled)}
                whenHidden="clear"
                // sibling 'matchKey'
                disabledIf={c.ne("matchKey", "EXTERNAL_ID")}
              />
            </ToggleCard>
          ) : null}

          <ToggleCard title="Sync deletions">
            <When if={c.ctx("hasSubscriptionPlan")}>
              <SwitchField
                name="syncDeletes"
                label="Delete a destination record when its source record is deleted"
                // app context + sibling 'contactsStreamId': mirrors the server's own gates
                disabledIf={c.or(c.ctx(CTX.regionsEnabled), c.not(c.ctx(CTX.linked)), c.empty("contactsStreamId"))}
              />
            </When>
            <When if={c.not(c.ctx("hasSubscriptionPlan"))}>
              <Button type="button" size="sm" variant="outline" className="w-fit">
                Upgrade your plan
              </Button>
            </When>
            <When if={c.ctx(CTX.regionsEnabled)}>
              <p className="text-xs text-muted-foreground">Not available with per-region destinations — deletions are not routed per region.</p>
            </When>
            <When if={c.and(c.not(c.ctx(CTX.regionsEnabled)), c.not(c.ctx(CTX.linked)))}>
              <p className="text-xs text-muted-foreground">Link the destination account above to sync deletions.</p>
            </When>
            <When if={c.and(c.not(c.ctx(CTX.regionsEnabled)), c.ctx(CTX.linked), c.empty("contactsStreamId"))}>
              <p className="text-xs text-muted-foreground">
                Pick your Contacts stream with &quot;Select from existing streams&quot; above — deletion sync needs the stream itself, not just its key.
              </p>
            </When>
            <When if={c.and(c.eq("syncDeletes", true), c.not(c.ctx(CTX.regionsEnabled)))}>
              <p className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground">
                Selected contacts stream key: {contactsKey} · ID: {contactsStreamIdValue}
              </p>
            </When>
          </ToggleCard>

          <ToggleCard title="Skip records">
            <SwitchField name="skipArchived" label="Skip archived records" description="Archived records stay in the source and are never sent." />
            <SwitchField name="skipTestRecords" label="Skip test records" description="Records flagged as test data are never sent." />
          </ToggleCard>

          <ToggleCard title="Field enrichment">
            <When if={c.not(c.ctx("hasSubscriptionPlan"))}>
              <Button type="button" size="sm" variant="outline" className="w-fit">
                Upgrade your plan
              </Button>
            </When>
            <When if={c.and(c.ctx("hasSubscriptionPlan"), c.ne("enrichmentActive", true))}>
              <SubFormDialog
                parent={form}
                scope="enrichment"
                empty={EMPTY_ENRICHMENT}
                title="Enrich synced records"
                trigger={
                  <Button type="button" size="sm" variant="outline" className="w-fit">
                    Set up enrichment
                  </Button>
                }
                submitLabel="Save"
                set={() => [{ path: "enrichmentActive", value: true }]}
              >
                <SelectField name="locale" label="Locale" options={ENRICH_LOCALES} required />
                <SelectField name="region" label="Region" options={ENRICH_REGIONS} required />
                <TextField name="sourceId" label="Enrichment source ID" dir="ltr" required />
              </SubFormDialog>
            </When>
            <When if={c.eq("enrichmentActive", true)}>
              <SwitchField
                name="enrichmentActive"
                label="Enrich synced records"
                confirm={(next) =>
                  next === false
                    ? confirm({
                        title: "Turn off enrichment",
                        body: "The locale, region and source ID are cleared.",
                        confirmLabel: "Save",
                        destructive: true,
                      })
                    : true
                }
              />
              <p className="font-mono text-[11px] text-muted-foreground">
                {enrichLocale} · {enrichRegion} · Source {enrichSource}
              </p>
            </When>
          </ToggleCard>

        </When>

        <When if={c.eq(e.ctx("page"), "code")}>
          <CodePage form={form} code={code.data?.syncInstallSnippet ?? ""} codeLoading={!code.settled} />
        </When>

        <SubmitPhases phases={page === "form" ? formPipe.phases : codePipe.phases} />
        <Form.Status
          className="text-sm"
          success={() =>
            finished === null ? null : finished.regions ? (
              <div className="flex flex-col gap-1.5 rounded-md border p-2.5">
                <p className="font-medium text-emerald-700 dark:text-emerald-400">✓ Setup complete. Set up your regions?</p>
                <p className="text-[13px] text-muted-foreground">Regions inherit this setup as their default.</p>
              </div>
            ) : (
              <p className="font-medium text-emerald-700 dark:text-emerald-400">✓ Sync activated — back to /syncs.</p>
            )
          }
          error={(err, { retry }) => (
            <p className="flex flex-wrap items-center gap-2 text-destructive">
              <span>
                <span className="font-medium">Error:</span> {err.message}
              </span>
              {retry ? (
                <Button type="button" size="sm" variant="outline" onClick={retry}>
                  Retry
                </Button>
              ) : null}
            </p>
          )}
        />
        <div className="flex justify-end gap-2 border-t pt-3">
          <Button type="button" variant="outline" size="sm" onClick={() => setPage("form")} disabled={page === "form"}>
            Go back
          </Button>
          <Form.Submit className="inline-flex h-7 items-center rounded-md bg-primary px-3 text-[13px] font-medium text-primary-foreground disabled:opacity-50">{page === "form" ? (showsCode ? "Next" : "Save changes") : record.step >= 2 ? "Finish setup" : "Save changes"}</Form.Submit>
        </div>
        {dialog}
      </Form>
      <div className="flex min-w-0 flex-col gap-3">
        {side}
        <LivePanel store={form} />
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
export function CrmSyncRulesExample() {
  const srv = useSyncExternalStore(syncServer.subscribe, syncServer.snapshot, syncServer.snapshot)
  // demo-chrome: the account state the page reads, toggled here to show the rules react
  const [account, setAccount] = useState<AccountState>({
    linked: true,
    hasSubscriptionPlan: true,
    otherAccount: false,
  })
  // demo-chrome: remounts the page (a real app reloads it) after a reset or an account change
  const [mount, setMount] = useState(0)
  const [priority, setPriority] = useState<"PRIMARY" | "SECONDARY">("PRIMARY")
  const [hosted, setHosted] = useState(false)
  const record: SyncRecord = {
    ...srv.record,
    priority,
    isHosted: hosted,
  }
  const reload = () => setMount((n) => n + 1)
  const startOver = () => {
    syncServer.reset()
    streamsQuery.clear()
    workspaceRefQuery.clear()
    reload()
  }
  const formKey = \`\${mount}:\${account.linked}:\${priority}:\${hosted}\`
  return (
    <SyncSetupForm
      key={formKey}
      record={record}
      account={account}
      onSignIn={() => setAccount((a) => ({ ...a, linked: true }))}
      side={
        <>
          <SidePanel title="App context" meta="c.ctx(…)">
            <div className="flex flex-col gap-2 p-3 text-[13px]">
              <label className="flex items-center justify-between gap-3">
                <span>Destination account linked</span>
                <Switch checked={account.linked} onCheckedChange={(on) => setAccount((a) => ({ ...a, linked: on }))} aria-label="Destination account linked" />
              </label>
              <label className="flex items-center justify-between gap-3">
                <span>Switch to another destination account (its list lacks the picked streams)</span>
                <Switch checked={account.otherAccount} onCheckedChange={(on) => setAccount((a) => ({ ...a, otherAccount: on }))} aria-label="Other destination account" />
              </label>
              <label className="flex items-center justify-between gap-3">
                <span>Secondary sync</span>
                <Switch checked={priority === "SECONDARY"} onCheckedChange={(on) => setPriority(on ? "SECONDARY" : "PRIMARY")} aria-label="Secondary sync" />
              </label>
              <label className="flex items-center justify-between gap-3">
                <span>Hosted install (no snippet page)</span>
                <Switch checked={hosted} onCheckedChange={setHosted} aria-label="Hosted install" />
              </label>
              <label className="flex items-center justify-between gap-3">
                <span>Subscription plan</span>
                <Switch checked={account.hasSubscriptionPlan} onCheckedChange={(on) => setAccount((a) => ({ ...a, hasSubscriptionPlan: on }))} aria-label="Subscription plan" />
              </label>
              <label className="flex items-center justify-between gap-3">
                <span>Server rejects next save</span>
                <Switch checked={srv.failNextSave} onCheckedChange={(on) => syncServer.setFailNextSave(on)} aria-label="Server rejects next save" />
              </label>
              <div className="flex gap-2">
                <Button type="button" size="sm" variant="outline" onClick={reload}>
                  Reload page
                </Button>
                <Button type="button" size="sm" variant="outline" onClick={startOver}>
                  Start over
                </Button>
              </div>
              <p className="text-muted-foreground">
                Stored: status <code>{srv.record.status}</code> · step {srv.record.step} · ID <code>{srv.record.workspaceNumber || "—"}</code>
              </p>
            </div>
          </SidePanel>
          <SidePanel title="Network" meta="GraphQL calls">
            <ol className="flex max-h-72 flex-col gap-1.5 overflow-auto p-3 font-mono text-[11px]">
              {srv.log.length === 0 ? <li className="text-muted-foreground">No mutations yet.</li> : null}
              {srv.log.map((entry, i) => (
                <li key={\`\${entry.at}-\${i}\`} className="break-all">
                  <span className="text-muted-foreground">{entry.at}</span> <span className="font-semibold">{entry.operation}</span> {JSON.stringify(entry.variables)}
                </li>
              ))}
            </ol>
          </SidePanel>
        </>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Xe,()=>a(()=>import(`./sync-rules-ChOoZ8Cf.js`),[]));function Ze(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(r,{title:`CRM sync rules`,children:[`A dense settings form on the declarative API. The workspace number is a conditional mirror of the account-resolved number (app context) with a manual opt-out that restores it; picking or creating a stream back-fills the number through a registered operator over the context's streams list; each row's ••• menu runs named model actions; per-region destinations (a separate mutation) are context that clears `,(0,D.jsx)(`code`,{children:`regionalIds`}),` and forces deletion sync off; a computed count blocks the save until one stream is chosen; the save → snippet page → finish chain is `,(0,D.jsx)(`code`,{children:`useSubmitPipeline`}),` and a failed save shows `,(0,D.jsx)(`code`,{children:`err.response.errors[0].message`}),` form-level through `,(0,D.jsx)(`code`,{children:`mapErrors`}),`. Dashed amber boxes are what the engine cannot express yet.`]}),(0,D.jsx)(ue,{n:1,title:`CRM sync rules`,blurb:`Toggle the account state on the right; turn on “Server rejects next save” to see the GraphQL error path.`,code:Xe,children:(0,D.jsx)(Ye,{})})]})}export{Ze as component};