import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-Clz4Lth_.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{Bc as r,Cc as i,Ic as a,hi as o,ni as s,ti as c}from"./index-q72zUtm9.js";import{t as l}from"./badge-Be8rVEaF.js";import{W as u}from"./messages-Bsb0m0Hq.js";import{A as d,J as f,Y as p,_ as m,c as h,f as g,g as _,h as v,m as y}from"./field-config-DXiPz8Cg.js";import{a as b,c as x,i as ee,t as S,u as te,y as C}from"./fields-CoJCsIMd.js";import{i as w,n as T}from"./wizard-C3HGJR6y.js";import{t as E}from"./fields-extra-uoDLzrFQ.js";import{i as D}from"./choice-DBNpzPUu.js";import{t as ne}from"./confirm-CtFkqwAG.js";import{t as O}from"./display-DRDvnkNX.js";import{t as k}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var A=e(r(),1),j=a();function re(e){return new Promise(t=>setTimeout(t,e))}var M=[{key:`tasksEnabled`,label:`Tasks`},{key:`docsEnabled`,label:`Docs`},{key:`calendarEnabled`,label:`Calendar`},{key:`chatEnabled`,label:`Chat`},{key:`wikiEnabled`,label:`Wiki`},{key:`formsEnabled`,label:`Forms`},{key:`timesheetsEnabled`,label:`Timesheets`},{key:`invoicesEnabled`,label:`Invoices`},{key:`contactsEnabled`,label:`Contacts`},{key:`helpdeskEnabled`,label:`Help desk`},{key:`roadmapsEnabled`,label:`Roadmaps`},{key:`goalsEnabled`,label:`Goals`},{key:`filesEnabled`,label:`Files`},{key:`whiteboardsEnabled`,label:`Whiteboards`},{key:`pollsEnabled`,label:`Polls`},{key:`automationsEnabled`,label:`Automations`},{key:`reportsEnabled`,label:`Reports`}],N={restricted:`restricted`,open:`open`},ie=class extends Error{response;constructor(e,t){super(`${t}: ${e}`),this.name=`ClientError`,this.response={errors:[{message:t,path:[e]}],data:null,status:200}}},ae=[`workspaceSetPartial`,`workspaceSetup`,`workspaceFinishSetup`,`workspaceExportTemplate`],oe=[`new`,`hasWorkspaceId`,`feedOn`,`active`],P={id:`wsr_01`,kind:`SELF_HOSTED`,status:`created`,step:1,workspaceId:null,agentInstalled:!1,activityFeedEnabled:!1,isCloudHosted:!1,billingEnabled:!1,billingCurrency:``,billingCountry:``,billingAccountId:``},se={new:{},hasWorkspaceId:{workspaceId:`WS-K7Q2M9P`},feedOn:{workspaceId:`WS-K7Q2M9P`,activityFeedEnabled:!0},active:{status:`active`,step:100,workspaceId:`WS-K7Q2M9P`,activityFeedEnabled:!0,agentInstalled:!0}};function F(e){return(e.status===`created`||e.status===`pending`||e.status===`needs_upgrade`)&&e.step===1}function I(e,t,n){return`workspace-${e}-${t}-${new Date(n??Date.now()).toLocaleDateString(`en-GB`,{year:`2-digit`,month:`short`,day:`2-digit`}).replaceAll(` `,``).toLowerCase()}`}function ce(e){return M.filter(t=>e[t.key]===!0).map(e=>e.label)}function le(e){return{workspaceId:e.workspaceId||void 0,agentInstalled:e.agentInstalled||void 0,activityFeedEnabled:e.activityFeedEnabled||void 0}}function ue(e){return{workspaceId:e.workspaceId??``,agentInstalled:e.agentInstalled??!1,activityFeedEnabled:e.activityFeedEnabled??!1,billingEnabled:e.billingEnabled??!1,billingCurrency:e.billingCurrency??``,billingCountry:e.billingCountry??``,billingAccountId:e.billingAccountId??``}}function de(e,t){return{...e,workspaceId:t.workspaceId??e.workspaceId,agentInstalled:t.agentInstalled??e.agentInstalled,activityFeedEnabled:t.activityFeedEnabled??e.activityFeedEnabled}}function fe(){let e={record:{...P},templates:[],failNext:null,log:[]},t=new Set,n=(n,r)=>{e={...e,...n,log:r?[...e.log,r]:e.log};for(let e of t)e()},r=async(t,r)=>{if(await re(450),t!==`query`&&e.failNext===t)throw n({failNext:null},`✗ ${r}`),new ie(t,`workspace could not be updated, try again`)};return{subscribe(e){return t.add(e),()=>t.delete(e)},snapshot:()=>e,load(e,t){n({record:{...P,...se[e],isCloudHosted:t},templates:[],log:[]},`loaded preset "${e}"${t?` (cloud-hosted)`:``}`)},armFailure(e){n({failNext:e})},async workspaceSetPartial(t,i){await r(`workspaceSetPartial`,`workspaceSetPartial ${JSON.stringify(i)}`);let a=de(e.record,i);return n({record:a},`workspaceSetPartial(${t}) ${JSON.stringify(i)}`),{workspaceSetPartial:a}},async workspaceSetup(t,i){await r(`workspaceSetup`,`workspaceSetup ${JSON.stringify(i)}`);let a={...e.record,...i};return n({record:a},`workspaceSetup(${t}) ${JSON.stringify(i)}`),{workspaceSetup:a}},async workspaceFinishSetup(t){return await r(`workspaceFinishSetup`,`workspaceFinishSetup`),n({record:{...e.record,status:`active`}},`workspaceFinishSetup(${t}) → true`),{workspaceFinishSetup:!0}},async workspaceExportTemplate(t,i){await r(`workspaceExportTemplate`,`workspaceExportTemplate`);let a=e.templates.length+1,o=`https://files.example.com/templates/${t}/template-${a}.json`,{restricted:s,...c}=i;return n({templates:[{...c,id:`tpl_${a}`,createdAt:new Date().toISOString(),workspaceRecordId:t,downloadLink:o,version:`v4.0.0`,templateType:s?N.restricted:N.open},...e.templates]},`workspaceExportTemplate(${t}) restricted=${s} → ${o}`),{workspaceExportTemplate:o}},async workspaceTemplateList(t){return await r(`query`,`workspaceTemplateList`),{workspaceTemplateList:e.templates}},async workspaceVerificationRecord(e){return await r(`query`,`workspaceVerificationRecord`),{workspaceVerificationRecord:`; DNS TXT record for your workspace domain\n_workspace-verify.example.com.  3600  IN  TXT  "workspace-verification=${e}"`}},async workspaceGenerateAgentCode(t){return await r(`query`,`workspaceGenerateAgentCode`),{workspaceGenerateAgentCode:`# sync agent install (${t})\nexport WORKSPACE_ID="${e.record.workspaceId??``}"\ncurl -fsSL https://get.example.com/agent.sh | sh -s -- --workspace "$WORKSPACE_ID"\nsystemctl enable --now workspace-agent`}},download(e,t){n({},`download ${e} → ${t}.json`)}}}var L=fe(),pe=/^WS-.{4,8}$/,me=[`domain`,`billing`,`feed`,`agent`],he={domain:`Required`,billing:`Optional`,feed:`Workspace`,agent:`Your server`},ge=[{value:`usd`,label:`US dollar`},{value:`eur`,label:`Euro`},{value:`gbp`,label:`Pound sterling`},{value:`jpy`,label:`Japanese yen`},{value:`inr`,label:`Indian rupee`}],_e=[{value:`US`,label:`United States`},{value:`GB`,label:`United Kingdom`},{value:`DE`,label:`Germany`},{value:`FR`,label:`France`},{value:`IN`,label:`India`},{value:`CA`,label:`Canada`}],ve=`US`,{c:R,v:ye,e:be}=p(),xe=f()(()=>({fields:[],whenHidden:`keep-and-send`,effects:[{on:[`billingEnabled`],when:R.eq(`billingEnabled`,!0),do:[{set:`billingCountry`,to:be.ctx(`countryCode`,``)},{set:`billingCurrency`,to:`usd`}]},{on:[`billingEnabled`],when:R.eq(`billingEnabled`,!1),do:[{set:`billingCurrency`,to:``},{set:`billingCountry`,to:``},{set:`billingAccountId`,to:``}]}]}));function Se(e){return F(e)?e.activityFeedEnabled===!0?[`domain`,`billing`,`feed`]:e.workspaceId?[`domain`]:[]:[...me]}function z(e){return C(e)?.message??`Something went wrong`}async function B(e){try{return await e}catch(e){throw C(e)??e}}function V({children:e}){return(0,j.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:e})}function H({tone:e,title:t,open:n=!1,children:r}){return(0,j.jsxs)(`details`,{open:n,className:e===`info`?`rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`:`rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5 text-[13px]`,children:[(0,j.jsx)(`summary`,{className:`cursor-pointer font-medium`,children:t}),(0,j.jsx)(`div`,{className:`mt-1 space-y-1 text-muted-foreground`,children:r})]})}function U({code:e}){let[t,n]=(0,A.useState)(!1);return(0,j.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,j.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`text-[13px] font-medium`,children:`Copy the code block`}),(0,j.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Your code is ready! Click copy and move to the next step.`})]}),(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>{navigator.clipboard?.writeText(e).then(()=>n(!0))},children:t?`Copied`:`Copy to clipboard`})]}),(0,j.jsx)(`pre`,{dir:`ltr`,className:`max-h-40 overflow-auto rounded-md border bg-muted p-2 font-mono text-[11px]`,children:e})]})}var W=new Map,G=new Map;function Ce(e){let t=W.get(e)??L.workspaceVerificationRecord(e);return W.set(e,t),t}function we(e,t){let n=`${e}:${t}`,r=G.get(n)??L.workspaceGenerateAgentCode(e);return G.set(n,r),r}function Te({workspaceId:e}){return(0,j.jsx)(U,{code:(0,A.use)(Ce(e)).workspaceVerificationRecord})}function Ee({id:e,run:t}){return(0,j.jsx)(U,{code:(0,A.use)(we(e,t)).workspaceGenerateAgentCode})}var De=[{value:`cloud`,label:`Use the hosted workspace`,description:`We run everything for you: no servers, automatic updates, backups and full support included.`},{value:`self`,label:`Self-host the sync agent`,description:`Verify your domain, run our sync agent on your own server and export a starter template (suggested for IT teams)`}],K=p();function Oe({onStart:e}){return(0,j.jsxs)(h,{form:d({defaultValues:{mode:``}}),className:`flex flex-col gap-3`,children:[(0,j.jsx)(V,{children:`Most teams are best served by the hosted workspace. If your company needs data to stay on its own servers, you can self-host the sync agent instead.`}),(0,j.jsx)(`p`,{className:`rounded-md bg-amber-500/10 px-2.5 py-1.5 text-[12px] text-amber-800 dark:text-amber-300`,children:`Standard support covers the agent itself only. Network, firewall and server issues are covered by priority support.`}),(0,j.jsx)(D,{name:`mode`,label:`Where should your workspace run?`,options:De,columns:2}),(0,j.jsx)(g,{if:K.c.eq(`mode`,`cloud`),children:(0,j.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`→ A real app would create the hosted workspace here.`})}),(0,j.jsx)(g,{if:K.c.eq(`mode`,`self`),children:(0,j.jsx)(c,{type:`button`,size:`sm`,className:`w-fit`,onClick:e,children:`Start Setup →`})}),(0,j.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-md border px-2.5 py-1.5 text-[12px]`,children:[(0,j.jsxs)(`span`,{children:[(0,j.jsx)(`span`,{className:`font-medium`,children:`Need a hand?`}),` `,(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Our onboarding team can set up the agent with you for a one-time fee.`})]}),(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`link`,children:`Book onboarding`})]})]})}function ke({id:e,label:t,n}){let r=w(),i=r.current?.id===e;return(0,j.jsxs)(`button`,{type:`button`,onClick:()=>r.goTo(e),disabled:!r.canGoTo(e),"aria-current":i?`step`:void 0,className:`flex w-full items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-[13px] disabled:opacity-50 ${i?`border-primary/50 bg-muted/60`:`bg-muted/30`}`,children:[(0,j.jsx)(`span`,{className:`grid size-5 place-items-center rounded border bg-background text-[11px] tabular-nums`,children:n}),(0,j.jsx)(`span`,{className:`font-medium`,children:t}),(0,j.jsxs)(`span`,{className:`text-muted-foreground`,children:[`(`,he[e],`)`]}),e===`agent`?(0,j.jsx)(l,{variant:`outline`,children:`Self-hosted`}):null,r.isComplete(e)?(0,j.jsx)(`span`,{className:`ms-auto text-emerald-700 dark:text-emerald-400`,children:`✓`}):null]})}function q({part:e}){let t=w(),n=t.steps.map((e,t)=>({...e,n:t+1})).filter(n=>e===`before`?n.n<=t.index+1:n.n>t.index+1);return(0,j.jsx)(`div`,{className:e===`before`?`mb-2 flex flex-col gap-1.5`:`mt-2 flex flex-col gap-1.5`,children:n.map(e=>(0,j.jsx)(ke,{id:e.id,label:e.label,n:e.n},e.id))})}function Ae({onAgentSkip:e}){let t=w(),[n,r]=(0,A.useState)(!1),[i,a]=(0,A.useState)(``),o=t.pending||n,l=t.stepError?.message??i,u=()=>{r(!0),a(``),e().catch(e=>a(z(e))).finally(()=>r(!1))},d=t.current?.id,f=(0,j.jsx)(c,{type:`button`,size:`sm`,disabled:o,onClick:()=>void t.next(),children:t.pending?`Saving…`:`Next ›`}),p=(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,disabled:o,onClick:()=>void t.next(),children:`Skip`});return(0,j.jsxs)(`div`,{className:`mt-3 flex flex-col items-end gap-1 border-t pt-2`,children:[(0,j.jsxs)(`div`,{className:`flex gap-2`,children:[d===`billing`?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{if:R.ne(`activityFeedEnabled`,!0),children:p}),f]}):null,d===`feed`&&t.isLast?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{if:R.ne(`activityFeedEnabled`,!0),children:(0,j.jsx)(h.Submit,{className:s({size:`sm`,variant:`outline`}),children:`Skip`})}),(0,j.jsx)(g,{if:R.eq(`activityFeedEnabled`,!0),children:(0,j.jsx)(h.Submit,{className:s({size:`sm`}),children:`Next ›`})})]}):null,d===`feed`&&!t.isLast?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{if:R.ne(`activityFeedEnabled`,!0),children:p}),(0,j.jsx)(g,{if:R.eq(`activityFeedEnabled`,!0),children:f})]}):null,d===`domain`?f:null,d===`agent`?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,disabled:o,onClick:u,children:n?`Saving…`:`Skip`}),(0,j.jsx)(h.Submit,{className:s({size:`sm`}),pendingLabel:`Saving…`,children:`Next ›`})]}):null]}),l?(0,j.jsx)(`p`,{className:`text-[12px] text-destructive`,children:l}):null]})}var J=p();function je({form:e,markedComplete:t}){let n=w(),r=m(e,`workspaceId`),i=_(e,`workspaceId`);return(0,j.jsxs)(x,{title:`Add the verification record to your DNS`,trigger:(0,j.jsx)(c,{type:`button`,size:`sm`,className:`w-fit`,disabled:!r.complete,children:t?`✓ Marked as completed`:`Get DNS record`}),size:`lg`,submitLabel:`Save`,form:{defaultValues:{added:!1}},onSubmit:async()=>{let{error:e}=await n.next();if(e)throw e},children:[(0,j.jsx)(`p`,{className:`rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,children:`If you have verified this domain before, do not add the record again. Simply tick the checkbox and continue.`}),(0,j.jsx)(A.Suspense,{fallback:(0,j.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Loading your DNS record…`}),children:(0,j.jsx)(Te,{workspaceId:i})}),(0,j.jsxs)(`ol`,{className:`list-decimal space-y-0.5 ps-5 text-[13px]`,children:[(0,j.jsx)(`li`,{children:`Sign in to the provider that hosts your domain's DNS.`}),(0,j.jsx)(`li`,{children:`Open the DNS settings for the domain your team signs in with.`}),(0,j.jsx)(`li`,{children:`Add a new TXT record with the name and value shown above.`}),(0,j.jsx)(`li`,{children:`Keep the TTL at its default (or 3600 seconds).`}),(0,j.jsx)(`li`,{children:`If you use several domains, repeat for each one.`}),(0,j.jsx)(`li`,{children:`Save, then allow up to an hour for the change to propagate.`})]}),(0,j.jsx)(S,{name:`added`,label:`I have added the TXT record to my domain's DNS.`,rules:[J.v.oneOf([!0],`Confirm you added the record to save`)]})]})}function Me({record:e,markedDone:t,busy:n,error:r,open:i,run:a,onOpen:o,onClose:s,onSaved:l}){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(V,{children:`Install the sync agent on a server inside your network so files and records stay on your own infrastructure. You can install it fresh or update an existing agent.`}),(0,j.jsx)(H,{tone:`info`,title:`How to install or update the sync agent`,open:!0,children:(0,j.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`font-medium text-foreground`,children:`For a new install`}),(0,j.jsxs)(`ol`,{className:`list-decimal space-y-0.5 ps-5`,children:[(0,j.jsx)(`li`,{children:`Get the install script and copy it.`}),(0,j.jsx)(`li`,{children:`Open a shell on a Linux server with outbound HTTPS access.`}),(0,j.jsx)(`li`,{children:`Paste the script and run it as an administrator.`}),(0,j.jsx)(`li`,{children:`Wait for “agent connected” in the output.`}),(0,j.jsx)(`li`,{children:`Come back here and confirm.`})]})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`font-medium text-foreground`,children:`For updating an existing agent`}),(0,j.jsxs)(`ol`,{className:`list-decimal space-y-0.5 ps-5`,children:[(0,j.jsx)(`li`,{children:`Get the install script and copy it.`}),(0,j.jsx)(`li`,{children:`Stop the running agent service.`}),(0,j.jsx)(`li`,{children:`Run the new script; it keeps your settings.`}),(0,j.jsx)(`li`,{children:`Start the service again.`})]})]})]})}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,j.jsx)(c,{type:`button`,size:`sm`,disabled:n,onClick:o,children:n?`Generating…`:t?`✓ Marked as completed`:`Get agent install script`}),t?(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`link`,disabled:n,onClick:o,children:`Generate new script`}):null,r?(0,j.jsx)(`span`,{className:`text-[12px] text-destructive`,children:r}):null]}),(0,j.jsx)(O,{name:`agentInstalled`,label:`Sync agent`,tone:`inline`,render:e=>e===!0?`✓ Installed`:`Not installed yet`,rules:[ye.oneOf([!0],`Install the sync agent first, or Skip`)]}),(0,j.jsxs)(x,{open:i,onOpenChange:e=>e?void 0:s(),title:`Copy the agent install script`,size:`lg`,submitLabel:`Save`,form:{defaultValues:{added:!1}},onSubmit:()=>B(l()),children:[(0,j.jsx)(`p`,{className:`text-[13px] font-semibold`,children:`Sync agent (Linux)`}),(0,j.jsx)(A.Suspense,{fallback:(0,j.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Generating your install script…`}),children:(0,j.jsx)(Ee,{id:e.id,run:a})}),(0,j.jsx)(S,{name:`added`,label:`I've installed the sync agent and it reports “connected”.`,rules:[J.v.oneOf([!0],`Confirm you installed the agent to save`)]})]})]})}var Ne=[`billingCurrency`,`billingCountry`,`billingAccountId`];function Pe({form:e,record:t,onFinished:n}){let r=F(t),i=t.isCloudHosted===!0,{confirm:a,dialog:o}=ne(),[s,l]=(0,A.useState)({open:!1,busy:!1,run:0,error:``}),[u,d]=(0,A.useState)(!r),[f,p]=(0,A.useState)(!1),m=()=>t.status===`active`&&!e.isDirty(),_=()=>!e.isDirty()&&t.status===`processing`||m(),v=async()=>{m()||await L.workspaceFinishSetup(t.id)},y=async e=>{(i&&e.activityFeedEnabled===!0||!r&&e.agentInstalled===!0)&&await v()};return(0,j.jsxs)(h,{form:e,onSubmit:async e=>(i?await y((await B(L.workspaceSetup(t.id,e))).workspaceSetup):_()||(!r&&t.agentInstalled===!0?await y((await B(L.workspaceSetup(t.id,e))).workspaceSetup):await B(v())),n(),{title:`Workspace ready`,message:`Your workspace setup is complete`}),className:`flex flex-col gap-2`,children:[u?(0,j.jsxs)(`div`,{className:`flex items-start justify-between gap-2 rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,children:[(0,j.jsxs)(`span`,{children:[(0,j.jsx)(`span`,{className:`font-medium`,children:`Server and network issues are not covered by standard support.`}),` We support the agent itself; firewall and server troubleshooting is part of priority support.`]}),(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`ghost`,onClick:()=>d(!1),"aria-label":`Dismiss`,children:`✕`})]}):null,(0,j.jsxs)(T,{completed:Se(t),onStepComplete:async()=>{r&&await B(L.workspaceSetPartial(t.id,le(e.getValues())))},progress:(0,j.jsx)(q,{part:`before`}),nav:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ae,{onAgentSkip:async()=>{await L.workspaceSetup(t.id,{...e.getValues(),agentInstalled:!1}),n()}}),(0,j.jsx)(q,{part:`after`})]}),children:[(0,j.jsxs)(T.Step,{id:`domain`,label:`Verify your domain`,children:[(0,j.jsx)(V,{children:`Enter your Workspace ID so we can generate the DNS record that proves you own your sign-in domain. Add the record before moving on.`}),(0,j.jsx)(b,{name:`workspaceId`,label:`Workspace ID`,description:`Admin console → Workspace → General, under “Workspace ID”.`,placeholder:`WS-XXXXXXX`,required:!0,requiredMessage:`Workspace ID is required`,rules:[ye.pattern(pe,`Workspace ID format is wrong`)],dir:`ltr`}),(0,j.jsx)(V,{children:`If your domain is already verified, you can skip this step — adding the record twice does no harm, but it is not needed.`}),(0,j.jsx)(je,{form:e,markedComplete:!!t.workspaceId})]}),(0,j.jsxs)(T.Step,{id:`billing`,label:`Enable usage-based billing`,children:[(0,j.jsx)(V,{children:`Bill each team for what it uses instead of per seat. Make sure the billing account matches the one on your invoices.`}),(0,j.jsx)(g,{if:R.not(R.ctx(`hasPlan`)),children:(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,className:`w-fit`,children:`✨ Upgrade your plan`})}),(0,j.jsx)(ee,{name:`billingEnabled`,label:`Enable usage billing`,description:`Charges each team by active members and storage instead of a flat per-seat price.`,visibleIf:R.ctx(`hasPlan`),confirm:e=>e===!0?(p(!0),!1):a({title:`Turn off usage billing`,body:`Are you sure you want to turn off usage billing? This will remove your billing details.`,confirmLabel:`Save`,cancelLabel:`Cancel`})}),(0,j.jsxs)(g,{if:R.eq(`billingEnabled`,!0),children:[(0,j.jsx)(O,{name:`billingCurrency`,label:`Currency`,tone:`inline`}),(0,j.jsx)(O,{name:`billingCountry`,label:`Billing country`,tone:`inline`}),(0,j.jsx)(O,{name:`billingAccountId`,label:`Billing account ID`,tone:`inline`}),(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`link`,className:`h-auto w-fit p-0`,onClick:()=>p(!0),children:`Edit details`})]}),(0,j.jsxs)(te,{parent:e,pick:Ne,empty:{billingCurrency:`usd`,billingCountry:``,billingAccountId:``},set:()=>[{path:`billingEnabled`,value:!0}],open:f,onOpenChange:p,title:`Billing rates`,description:`Enter the billing details usage charges are invoiced to.`,submitLabel:`Save`,children:[(0,j.jsx)(E,{name:`billingCurrency`,label:`Currency`,options:ge,required:!0}),(0,j.jsx)(E,{name:`billingCountry`,label:`Billing country`,options:_e,required:!0}),(0,j.jsx)(b,{name:`billingAccountId`,label:`Billing account ID`,required:!0})]})]}),(0,j.jsxs)(T.Step,{id:`feed`,label:`Turn on the activity feed`,children:[(0,j.jsx)(V,{children:`The activity feed shows every change across the workspace in one stream. You can turn it on or off here at any time.`}),(0,j.jsx)(ee,{name:`activityFeedEnabled`,label:`Activity feed (workspace-wide)`})]}),(0,j.jsx)(T.Step,{id:`agent`,label:`Install the sync agent`,visibleIf:R.not(R.ctx(`cloud`)),children:(0,j.jsx)(Me,{record:t,markedDone:!r&&t.agentInstalled===!0,busy:s.busy,error:s.error,open:s.open,run:s.run,onOpen:()=>{if(_()){l(e=>({...e,open:!0,run:e.run+1}));return}l(e=>({...e,busy:!0,error:``})),L.workspaceSetup(t.id,{...e.getValues(),agentInstalled:!0}).then(()=>l(e=>({open:!0,busy:!1,run:e.run+1,error:``}))).catch(e=>l(t=>({...t,busy:!1,error:z(e)})))},onClose:()=>l(e=>({...e,open:!1})),onSaved:async()=>{_()||await v(),l(e=>({...e,open:!1})),n()}})})]}),(0,j.jsx)(h.Status,{className:`text-sm`,success:e=>(0,j.jsxs)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:[`✓ `,e.title,` — `,e.message,`.`]}),error:e=>(0,j.jsxs)(`p`,{className:`text-destructive`,children:[`Workspace setup failed: `,e.message]})}),o]})}var Y=p(),Fe=[{value:N.open,label:`Open template`,meta:(0,j.jsx)(l,{variant:`secondary`,children:`Everyone`}),description:`Every member can see every project and document`},{value:N.restricted,label:`Restricted template`,meta:(0,j.jsx)(l,{variant:`outline`,children:`Invite-only`}),description:`Guests see only the projects they are invited to`}],Ie=Y.c.or(...M.map(e=>Y.c.eq(e.key,!0)));function Le(e){return{tasksEnabled:e?.tasksEnabled??!1,docsEnabled:e?.docsEnabled??!1,calendarEnabled:e?.calendarEnabled??!1,chatEnabled:e?.chatEnabled??!1,wikiEnabled:e?.wikiEnabled??!1,formsEnabled:e?.formsEnabled??!1,timesheetsEnabled:e?.timesheetsEnabled??!1,invoicesEnabled:e?.invoicesEnabled??!1,contactsEnabled:e?.contactsEnabled??!1,helpdeskEnabled:e?.helpdeskEnabled??!1,roadmapsEnabled:e?.roadmapsEnabled??!1,goalsEnabled:e?.goalsEnabled??!1,filesEnabled:e?.filesEnabled??!1,whiteboardsEnabled:e?.whiteboardsEnabled??!1,pollsEnabled:e?.pollsEnabled??!1,automationsEnabled:e?.automationsEnabled??!1,reportsEnabled:e?.reportsEnabled??!1,templateType:e?.templateType??``}}var X=`download`;function Z({recordId:e,latest:t,onDownload:n}){let r=d({defaultValues:Le(t)}),i=y(r);return(0,j.jsxs)(h,{form:r,className:`flex flex-col gap-3`,onSubmit:async({templateType:t,...r},i)=>{let a=t===N.restricted?N.restricted:N.open,o={link:(await B(L.workspaceExportTemplate(e,{...r,restricted:a===N.restricted}))).workspaceExportTemplate,templateType:a};return i.intent===X&&n(o),o},children:[(0,j.jsx)(`p`,{className:`text-[13px] font-medium`,children:`If you want a starter template, select your options below and continue:`}),(0,j.jsx)(D,{name:`templateType`,label:`Template type`,options:Fe,columns:2,required:!0}),(0,j.jsxs)(`fieldset`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`legend`,{className:`mb-1 text-[13px] font-medium`,children:`Which modules should the template include?`}),(0,j.jsx)(`div`,{className:`grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3`,children:M.map(e=>(0,j.jsx)(S,{name:e.key,label:e.label},e.key))})]}),(0,j.jsx)(g,{if:Y.c.and(Y.c.filled(`templateType`),Ie),children:i.dirty?(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,j.jsx)(h.Submit,{className:s({size:`sm`}),pendingLabel:`Saving…`,children:`Save your choices`}),(0,j.jsx)(h.Submit,{intent:X,className:s({size:`sm`,variant:`outline`}),pendingLabel:`Saving…`,children:`⬇ Download template`}),(0,j.jsx)(`span`,{className:`text-[12px] italic text-muted-foreground`,children:`(After you save your choices, we’ll generate your starter template.)`})]}):null}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 border-t pt-2`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`text-[13px] font-medium`,children:`Download the file (.json) and import it in the admin console`}),(0,j.jsx)(h.Status,{className:`text-[12px]`,success:e=>(0,j.jsxs)(`span`,{className:`flex flex-wrap items-center gap-2`,children:[(0,j.jsx)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:`Template created — your file is ready to download and import.`}),(0,j.jsx)(c,{type:`button`,size:`sm`,onClick:()=>n(e),children:`⬇ Download template`})]}),error:e=>(0,j.jsxs)(`span`,{className:`text-destructive`,children:[`Template export: `,e.message]})}),i.status===`success`?null:(0,j.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`The template is generated from your choices.`})]}),(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,children:`View instructions`})]})]})}function Re({row:e,workspaceId:t}){let n=ce(e),r=e.templateType===N.restricted;return(0,j.jsxs)(`li`,{className:`flex flex-wrap items-center justify-between gap-2 rounded-md bg-muted/40 px-2.5 py-1.5 text-[13px]`,children:[(0,j.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[`Starter template `,e.version??`v4.0.0`,` exported. Workspace: `,(0,j.jsx)(`span`,{className:`font-medium`,children:t}),(0,j.jsx)(l,{variant:r?`outline`:`secondary`,children:r?`Invite-only`:`Everyone`}),(0,j.jsxs)(l,{variant:`secondary`,title:n.join(`, `),children:[n.length,` Modules`]}),(0,j.jsx)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:new Date(e.createdAt).toLocaleDateString(`en-GB`,{month:`short`,day:`2-digit`,year:`numeric`})})]}),(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`link`,disabled:!e.downloadLink,onClick:()=>L.download(e.downloadLink??``,I(t,e.templateType??N.open,e.createdAt)),children:`Download Again`})]})}function ze({n:e,reached:t,record:n,initial:r}){let[i,a]=(0,A.useState)(r),[o,s]=(0,A.useState)(r.length>0),l=n.workspaceId??``;return(0,j.jsxs)(`section`,{className:`flex flex-col gap-2 rounded-md border p-2.5`,children:[(0,j.jsxs)(`h4`,{className:`flex items-center gap-2 text-[13px] font-medium`,children:[(0,j.jsx)(`span`,{className:`grid size-5 place-items-center rounded border bg-background text-[11px] tabular-nums`,children:e}),`Create and download a starter template`,t&&i.length>0?(0,j.jsx)(`span`,{className:`ms-auto text-emerald-700 dark:text-emerald-400`,children:`✓`}):null]}),t?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(H,{tone:`warning`,title:`🔔 Template format changed (v3 and below)`,children:[(0,j.jsx)(`p`,{children:`Already on agent v3.3 or later? Your existing templates keep working.`}),(0,j.jsx)(`p`,{children:`For first-time users or older agents: export a new template; it carries your selected modules and visibility settings.`})]}),(0,j.jsx)(H,{tone:`info`,title:`Important Notice`,open:!0,children:(0,j.jsx)(`p`,{children:`Importing a template never overwrites existing projects — modules it enables are added next to what you already have.`})}),o?(0,j.jsx)(Z,{recordId:n.id,latest:i[0],onDownload:e=>{L.download(e.link,I(l,e.templateType)),L.workspaceTemplateList(n.id).then(e=>a(e.workspaceTemplateList))}}):null,!o&&i.length===0?(0,j.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,children:`I don’t need one`}),(0,j.jsx)(c,{type:`button`,size:`sm`,onClick:()=>s(!0),children:`I need a starter template ›`})]}):null,i.length>0?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`ul`,{className:`flex flex-col gap-1`,children:i.map(e=>(0,j.jsx)(Re,{row:e,workspaceId:l},e.id))}),(0,j.jsx)(c,{type:`button`,size:`sm`,className:`w-fit self-end`,children:`Finish`})]}):null]}):(0,j.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Opens when the setup steps above are finished.`})]})}function Be(e){return e.status!==`created`&&e.status!==`disabled`||(e.step??0)>1||!!e.workspaceId}function Ve({record:e,hasPlan:t,side:n}){let r=(0,A.useSyncExternalStore)(L.subscribe,L.snapshot,L.snapshot),[i,a]=(0,A.useState)(()=>Be(e)),[o,s]=(0,A.useState)(()=>!F(e)),c=e.isCloudHosted===!0,u=d({defaultValues:ue(e),model:xe,context:{cloud:c,hasPlan:t,countryCode:ve}});return(0,j.jsxs)(qe,{children:[(0,j.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Workspace setup`}),(0,j.jsx)(l,{variant:`secondary`,children:`Self-hosted`})]}),i?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Pe,{form:u,record:e,onFinished:()=>s(!0)}),(0,j.jsx)(ze,{n:c?4:5,reached:o,record:r.record,initial:r.templates})]}):(0,j.jsx)(Oe,{onStart:()=>a(!0)})]}),(0,j.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[n,(0,j.jsx)(Ge,{store:u,title:`Setup form payload`})]})]})}var He={new:`New setup`,hasWorkspaceId:`Saved workspace ID`,feedOn:`Activity feed on`,active:`Active setup`};function Ue(){let e=(0,A.useSyncExternalStore)(L.subscribe,L.snapshot,L.snapshot);return(0,j.jsxs)(qe,{children:[(0,j.jsx)(Z,{recordId:`wsr_01`,latest:{id:`tpl_seed`,createdAt:`2026-09-14T10:00:00.000Z`,workspaceRecordId:`wsr_01`,downloadLink:`https://files.example.com/templates/wsr_01/template-0.json`,version:`v4.0.0`,templateType:N.open,tasksEnabled:!0,docsEnabled:!0,chatEnabled:!0},onDownload:e=>L.download(e.link,I(`WS-K7Q2M9P`,e.templateType))}),(0,j.jsx)(Q,{title:`Server log`,meta:`${e.log.length} calls`,children:(0,j.jsx)(Ke,{empty:`Change a choice, then Save your choices.`,children:e.log.slice(-6).map((e,t)=>(0,j.jsx)(`p`,{className:`break-all`,children:e},`${t}-${e}`))})})]})}function Q({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,j.jsxs)(`aside`,{className:o(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,j.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,j.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,j.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function We({value:e,maxHeight:t=`max-h-[420px]`}){return(0,j.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:o(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function Ge({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=v(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),u);return(0,j.jsxs)(Q,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,j.jsx)(We,{value:i}),s.length>0?(0,j.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,j.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function Ke({empty:e,children:t}){let n=A.Children.toArray(t);return(0,j.jsx)(`div`,{className:`space-y-0.5 p-3 font-mono text-[11px]`,children:n.length===0?(0,j.jsx)(`p`,{className:`font-sans text-muted-foreground`,children:e}):n})}function qe({children:e,stack:t=!1}){return(0,j.jsx)(`div`,{className:o(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:A.Children.toArray(e)})}function Je(){let e=(0,A.useSyncExternalStore)(L.subscribe,L.snapshot,L.snapshot),[n,r]=(0,A.useState)(0),[i,a]=(0,A.useState)(!0),[o,s]=(0,A.useState)(!1),l=(e,t)=>{L.load(e,t),r(e=>e+1)},u=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Q,{title:`Server`,meta:`workspaceGet`,children:(0,j.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,j.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:oe.map(e=>(0,j.jsx)(c,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>l(e,o),children:He[e]},e))}),(0,j.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,j.jsx)(`span`,{children:`Cloud-hosted workspace (isCloudHosted)`}),(0,j.jsx)(t,{checked:o,onCheckedChange:e=>{s(e),l(`new`,e)},"aria-label":`Cloud-hosted workspace`})]}),(0,j.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,j.jsx)(`span`,{children:`Subscription plan (app context)`}),(0,j.jsx)(t,{checked:i,onCheckedChange:a,"aria-label":`Subscription plan`})]}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Fail next:`}),ae.map(t=>(0,j.jsx)(c,{type:`button`,size:`sm`,variant:e.failNext===t?`default`:`ghost`,className:`h-6 px-1.5 font-mono text-[11px]`,onClick:()=>L.armFailure(e.failNext===t?null:t),children:t.replace(`workspace`,``)},t))]})]})}),(0,j.jsx)(Q,{title:`Record`,meta:`${e.record.status} · step ${e.record.step??`–`}`,children:(0,j.jsx)(We,{value:e.record,maxHeight:`max-h-[220px]`})}),(0,j.jsx)(Q,{title:`GraphQL calls`,meta:`${e.log.length}`,children:(0,j.jsx)(Ke,{empty:`No calls yet.`,children:e.log.slice(-8).map((e,t)=>(0,j.jsx)(`p`,{className:`break-all`,children:e},`${t}-${e}`))})})]});return(0,j.jsx)(Ve,{record:e.record,hasPlan:i,side:u},n)}var $=`import { Suspense, use, useState, useSyncExternalStore, type ReactNode, Children } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button, buttonVariants } from "@kitora/ui/button"
import { Switch } from "@kitora/ui/switch"
import { defineForm, kit, mapErrors, type FormStore, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, When, Wizard, useForm, useFormMeta, useFormValue, useScopeStatus, useWizard, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { CheckboxField, ComboboxField, DisplayField, FormDialog, PickSubFormDialog, RadioCardsField, SwitchField, TextField, useConfirm, type ChoiceOption, type ComboOption } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- the simulated server (stub: replace with your API)
/** Mock network latency of one GraphQL call (ms). */
export const WORKSPACE_LATENCY_MS = 450

/** Setup status values the page branches on. */
export const WORKSPACE_STATUSES = ["created", "pending", "processing", "active", "disabled", "needs_upgrade"] as const

export type WorkspaceStatus = (typeof WORKSPACE_STATUSES)[number]

/** The fields of the \`Workspace\` record the setup reads (\`workspaceGet\` / \`workspaceSetPartial\` selection). */
export interface WorkspaceRecord {
  id: string
  kind: "SELF_HOSTED"
  status: WorkspaceStatus
  step: number | null
  workspaceId: string | null
  agentInstalled: boolean | null
  activityFeedEnabled: boolean | null
  isCloudHosted: boolean | null
  billingEnabled: boolean | null
  billingCurrency: string | null
  billingCountry: string | null
  billingAccountId: string | null
}

/** \`WorkspaceSetupInput\` — the setup form's values, sent whole by \`workspaceSetup\`. */
export interface WorkspaceSetupInput {
  workspaceId: string
  agentInstalled: boolean
  activityFeedEnabled: boolean
  billingEnabled: boolean
  billingCurrency: string
  billingCountry: string
  billingAccountId: string
}

/** The keys of \`WorkspaceSetPartialInput\` (every key optional; the caller drops falsy ones). */
export interface WorkspaceSetPartialInput {
  workspaceId?: string
  agentInstalled?: boolean
  activityFeedEnabled?: boolean
}

/** The 17 module flags of a starter template, in checkbox order. */
export const TEMPLATE_MODULES = [
  { key: "tasksEnabled", label: "Tasks" },
  { key: "docsEnabled", label: "Docs" },
  { key: "calendarEnabled", label: "Calendar" },
  { key: "chatEnabled", label: "Chat" },
  { key: "wikiEnabled", label: "Wiki" },
  { key: "formsEnabled", label: "Forms" },
  { key: "timesheetsEnabled", label: "Timesheets" },
  { key: "invoicesEnabled", label: "Invoices" },
  { key: "contactsEnabled", label: "Contacts" },
  { key: "helpdeskEnabled", label: "Help desk" },
  { key: "roadmapsEnabled", label: "Roadmaps" },
  { key: "goalsEnabled", label: "Goals" },
  { key: "filesEnabled", label: "Files" },
  { key: "whiteboardsEnabled", label: "Whiteboards" },
  { key: "pollsEnabled", label: "Polls" },
  { key: "automationsEnabled", label: "Automations" },
  { key: "reportsEnabled", label: "Reports" },
] as const

export type ModuleKey = (typeof TEMPLATE_MODULES)[number]["key"]

export type ModuleFlags = Record<ModuleKey, boolean>

/** \`WorkspaceTemplateExportInput\`: the 17 flags plus \`restricted\` (true = the guest-restricted template). */
export type WorkspaceTemplateExportInput = ModuleFlags & { restricted: boolean }

/** How a stored template records \`restricted\`. */
export const TEMPLATE_TYPES = { restricted: "restricted", open: "open" } as const

export type TemplateType = (typeof TEMPLATE_TYPES)[keyof typeof TEMPLATE_TYPES]

/** One \`workspaceTemplateList\` row (\`WorkspaceTemplate\`). */
export type WorkspaceTemplate = Partial<ModuleFlags> & {
  id: string
  createdAt: string
  workspaceRecordId: string
  downloadLink: string | null
  version: string | null
  templateType: TemplateType | null
}

/** graphql-request's \`ClientError\`: the page reads \`err.response.errors[0].message\`. */
export class GraphQLClientError extends Error {
  response: { errors: { message: string; path: string[] }[]; data: null; status: number }
  constructor(operation: string, message: string) {
    super(\`\${message}: \${operation}\`)
    this.name = "ClientError"
    this.response = { errors: [{ message, path: [operation] }], data: null, status: 200 }
  }
}

/** The operations a demo can make fail once (the side panel's switch). */
export const WORKSPACE_OPERATIONS = ["workspaceSetPartial", "workspaceSetup", "workspaceFinishSetup", "workspaceExportTemplate"] as const

export type WorkspaceOperation = (typeof WORKSPACE_OPERATIONS)[number]

/** Starting records the side panel can load: where a user may land on the page. */
export const WORKSPACE_PRESETS = ["new", "hasWorkspaceId", "feedOn", "active"] as const

export type WorkspacePreset = (typeof WORKSPACE_PRESETS)[number]

const RECORD_ID = "wsr_01"

const BASE: WorkspaceRecord = {
  id: RECORD_ID,
  kind: "SELF_HOSTED",
  status: "created",
  step: 1,
  workspaceId: null,
  agentInstalled: false,
  activityFeedEnabled: false,
  isCloudHosted: false,
  billingEnabled: false,
  billingCurrency: "",
  billingCountry: "",
  billingAccountId: "",
}

const PRESET_RECORDS: Readonly<Record<WorkspacePreset, Partial<WorkspaceRecord>>> = {
  new: {},
  hasWorkspaceId: { workspaceId: "WS-K7Q2M9P" },
  feedOn: { workspaceId: "WS-K7Q2M9P", activityFeedEnabled: true },
  active: { status: "active", step: 100, workspaceId: "WS-K7Q2M9P", activityFeedEnabled: true, agentInstalled: true },
}

/** Snapshot the page renders (stable identity between changes, for useSyncExternalStore). */
export interface WorkspaceServerState {
  record: WorkspaceRecord
  templates: readonly WorkspaceTemplate[]
  failNext: WorkspaceOperation | null
  log: readonly string[]
}

/** Is this a first-time setup? */
export function isNewSetup(r: Pick<WorkspaceRecord, "status" | "step">): boolean {
  return (r.status === "created" || r.status === "pending" || r.status === "needs_upgrade") && r.step === 1
}

/** The exported file's name: \`workspace-WS-X-open-10oct26\`. */
export function templateFileName(workspaceId: string, templateType: TemplateType, date?: string): string {
  const day = new Date(date ?? Date.now()).toLocaleDateString("en-GB", { year: "2-digit", month: "short", day: "2-digit" }).replaceAll(" ", "").toLowerCase()
  return \`workspace-\${workspaceId}-\${templateType}-\${day}\`
}

/** The module names a template row lists in its tooltip. */
export function selectedModules(t: WorkspaceTemplate): string[] {
  return TEMPLATE_MODULES.filter((m) => t[m.key] === true).map((m) => m.label)
}

/** The keys the per-step partial save sends: falsy → omitted. */
export function toSetPartialInput(v: WorkspaceSetupInput): WorkspaceSetPartialInput {
  return { workspaceId: v.workspaceId || undefined, agentInstalled: v.agentInstalled || undefined, activityFeedEnabled: v.activityFeedEnabled || undefined }
}

/** The setup form's starting values from the record. */
export function setupDefaults(r: WorkspaceRecord): WorkspaceSetupInput {
  return {
    workspaceId: r.workspaceId ?? "",
    agentInstalled: r.agentInstalled ?? false,
    activityFeedEnabled: r.activityFeedEnabled ?? false,
    billingEnabled: r.billingEnabled ?? false,
    billingCurrency: r.billingCurrency ?? "",
    billingCountry: r.billingCountry ?? "",
    billingAccountId: r.billingAccountId ?? "",
  }
}

/** Apply a partial input: an omitted key keeps the stored value (the backend's optional-input semantics). */
function applyPartial(r: WorkspaceRecord, i: WorkspaceSetPartialInput): WorkspaceRecord {
  return {
    ...r,
    workspaceId: i.workspaceId ?? r.workspaceId,
    agentInstalled: i.agentInstalled ?? r.agentInstalled,
    activityFeedEnabled: i.activityFeedEnabled ?? r.activityFeedEnabled,
  }
}

/** Create one in-memory workspace backend. */
export function createWorkspaceServer() {
  let state: WorkspaceServerState = { record: { ...BASE }, templates: [], failNext: null, log: [] }
  const listeners = new Set<() => void>()
  const emit = (patch: Partial<WorkspaceServerState>, line?: string) => {
    state = { ...state, ...patch, log: line ? [...state.log, line] : state.log }
    for (const l of listeners) l()
  }
  /** Wait like the network, then throw the armed failure for \`op\` once. */
  const call = async (op: WorkspaceOperation | "query", line: string) => {
    await delay(WORKSPACE_LATENCY_MS)
    if (op !== "query" && state.failNext === op) {
      emit({ failNext: null }, \`✗ \${line}\`)
      throw new GraphQLClientError(op, "workspace could not be updated, try again")
    }
  }
  return {
    subscribe(l: () => void) {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    snapshot: (): WorkspaceServerState => state,
    load(preset: WorkspacePreset, cloud: boolean) {
      emit({ record: { ...BASE, ...PRESET_RECORDS[preset], isCloudHosted: cloud }, templates: [], log: [] }, \`loaded preset "\${preset}"\${cloud ? " (cloud-hosted)" : ""}\`)
    },
    armFailure(op: WorkspaceOperation | null) {
      emit({ failNext: op })
    },
    /** mutation workspaceSetPartial($id, $input) → { workspaceSetPartial: Workspace } */
    async workspaceSetPartial(id: string, input: WorkspaceSetPartialInput): Promise<{ workspaceSetPartial: WorkspaceRecord }> {
      await call("workspaceSetPartial", \`workspaceSetPartial \${JSON.stringify(input)}\`)
      const record = applyPartial(state.record, input)
      emit({ record }, \`workspaceSetPartial(\${id}) \${JSON.stringify(input)}\`)
      return { workspaceSetPartial: record }
    },
    /** mutation workspaceSetup($id, $input) → { workspaceSetup: Workspace } */
    async workspaceSetup(id: string, input: WorkspaceSetupInput): Promise<{ workspaceSetup: WorkspaceRecord }> {
      await call("workspaceSetup", \`workspaceSetup \${JSON.stringify(input)}\`)
      const record = { ...state.record, ...input }
      emit({ record }, \`workspaceSetup(\${id}) \${JSON.stringify(input)}\`)
      return { workspaceSetup: record }
    },
    /** mutation workspaceFinishSetup($id) → { workspaceFinishSetup: Boolean } */
    async workspaceFinishSetup(id: string): Promise<{ workspaceFinishSetup: boolean }> {
      await call("workspaceFinishSetup", "workspaceFinishSetup")
      emit({ record: { ...state.record, status: "active" } }, \`workspaceFinishSetup(\${id}) → true\`)
      return { workspaceFinishSetup: true }
    },
    /** mutation workspaceExportTemplate($id, $input) → { workspaceExportTemplate: String } (the download link) */
    async workspaceExportTemplate(id: string, input: WorkspaceTemplateExportInput): Promise<{ workspaceExportTemplate: string }> {
      await call("workspaceExportTemplate", "workspaceExportTemplate")
      const n = state.templates.length + 1
      const link = \`https://files.example.com/templates/\${id}/template-\${n}.json\`
      const { restricted, ...flags } = input
      const row: WorkspaceTemplate = { ...flags, id: \`tpl_\${n}\`, createdAt: new Date().toISOString(), workspaceRecordId: id, downloadLink: link, version: "v4.0.0", templateType: restricted ? TEMPLATE_TYPES.restricted : TEMPLATE_TYPES.open }
      emit({ templates: [row, ...state.templates] }, \`workspaceExportTemplate(\${id}) restricted=\${restricted} → \${link}\`)
      return { workspaceExportTemplate: link }
    },
    /** query workspaceTemplateList($id) → { workspaceTemplateList: [WorkspaceTemplate] } */
    async workspaceTemplateList(_id: string): Promise<{ workspaceTemplateList: readonly WorkspaceTemplate[] }> {
      await call("query", "workspaceTemplateList")
      return { workspaceTemplateList: state.templates }
    },
    /** query workspaceVerificationRecord($workspaceId) → { workspaceVerificationRecord: String } */
    async workspaceVerificationRecord(workspaceId: string): Promise<{ workspaceVerificationRecord: string }> {
      await call("query", "workspaceVerificationRecord")
      return { workspaceVerificationRecord: \`; DNS TXT record for your workspace domain\\n_workspace-verify.example.com.  3600  IN  TXT  "workspace-verification=\${workspaceId}"\` }
    },
    /** mutation workspaceGenerateAgentCode($id) → { workspaceGenerateAgentCode: String } (the agent's install script) */
    async workspaceGenerateAgentCode(id: string): Promise<{ workspaceGenerateAgentCode: string }> {
      await call("query", "workspaceGenerateAgentCode")
      return { workspaceGenerateAgentCode: \`# sync agent install (\${id})\\nexport WORKSPACE_ID="\${state.record.workspaceId ?? ""}"\\ncurl -fsSL https://get.example.com/agent.sh | sh -s -- --workspace "$WORKSPACE_ID"\\nsystemctl enable --now workspace-agent\` }
    },
    /** What "Download" does on a real page (fetch the link, save \`<file>.json\`); logged here instead of downloading. */
    download(link: string, fileName: string) {
      emit({}, \`download \${link} → \${fileName}.json\`)
    },
  }
}

export type WorkspaceServer = ReturnType<typeof createWorkspaceServer>

// ---- the page
// Real-world flow: setting up a self-hosted team workspace in an invented collaboration app,
// on the declarative API. The entry choice, the four setup steps as an accordion wizard whose
// progress the server seeds (G7), the per-step partial save, the verification-record and
// agent-install modals with their acknowledgement gates, usage billing with confirm-before-off
// (G1) and app context (G2), the finish chain, and the starter-template export form. The
// simulated server answers realistic GraphQL shapes. Two pieces lean on newer engine API: the
// billing-rates modal over three root keys (PickSubFormDialog, gap D) and save-and-download in
// one click (Form.Submit intent, gap I).

const server = createWorkspaceServer()

// ── the setup form (WorkspaceSetupInput) ─────────────────────────────
/** Workspace ID format the server accepts. */
const WORKSPACE_ID_FORMAT = /^WS-.{4,8}$/

const SETUP_STEPS = ["domain", "billing", "feed", "agent"] as const

/** The detail and badges printed after each step title. */
const STEP_DETAIL: Readonly<Record<string, string>> = { domain: "Required", billing: "Optional", feed: "Workspace", agent: "Your server" }

const CURRENCIES: ComboOption[] = [
  { value: "usd", label: "US dollar" },
  { value: "eur", label: "Euro" },
  { value: "gbp", label: "Pound sterling" },
  { value: "jpy", label: "Japanese yen" },
  { value: "inr", label: "Indian rupee" },
]

const COUNTRIES: ComboOption[] = [
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "IN", label: "India" },
  { value: "CA", label: "Canada" },
]

/** The user's country (app data): the billing country the switch pre-fills. */
const COUNTRY_CODE = "US"

const { c, v, e } = kit<WorkspaceSetupInput>()

// Turning billing on pre-fills country and currency; turning it off clears the billing details.
// User changes only: a server prefill keeps them.
const model = defineForm<WorkspaceSetupInput>()(() => ({
  fields: [],
  // every key of WorkspaceSetupInput is non-null: a hidden billing field or the cloud-hosted
  // workspace's absent agent step still sends its value
  whenHidden: "keep-and-send",
  effects: [
    {
      on: ["billingEnabled"],
      when: c.eq("billingEnabled", true),
      do: [
        { set: "billingCountry", to: e.ctx("countryCode", "") },
        { set: "billingCurrency", to: "usd" },
      ],
    },
    {
      on: ["billingEnabled"],
      when: c.eq("billingEnabled", false),
      do: [
        { set: "billingCurrency", to: "" },
        { set: "billingCountry", to: "" },
        { set: "billingAccountId", to: "" },
      ],
    },
  ],
}))

/** Steps the server already records as done. */
function completedSteps(r: WorkspaceRecord): string[] {
  if (!isNewSetup(r)) return [...SETUP_STEPS]
  if (r.activityFeedEnabled === true) return ["domain", "billing", "feed"]
  if (r.workspaceId) return ["domain"]
  return []
}

/** The first GraphQL error's message (\`err.response.errors[0].message\`). */
function errorMessage(err: unknown): string {
  return mapErrors(err)?.message ?? "Something went wrong"
}

/** Run a server call and turn a thrown GraphQL error into a SubmitError for \`Form.Status\`. */
async function gql<R>(call: Promise<R>): Promise<R> {
  try {
    return await call
  } catch (err) {
    throw mapErrors(err) ?? err
  }
}

// ── shared bits ──────────────────────────────────────────────────────
function StepText({ children }: { children: ReactNode }) {
  return <p className="text-[13px] text-muted-foreground">{children}</p>
}

function Notice({ tone, title, open = false, children }: { tone: "info" | "warning"; title: string; open?: boolean; children: ReactNode }) {
  return (
    <details open={open} className={tone === "info" ? "rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]" : "rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5 text-[13px]"}>
      <summary className="cursor-pointer font-medium">{title}</summary>
      <div className="mt-1 space-y-1 text-muted-foreground">{children}</div>
    </details>
  )
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-[13px] font-medium">Copy the code block</p>
          <p className="text-[12px] text-muted-foreground">Your code is ready! Click copy and move to the next step.</p>
        </div>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => {
            void navigator.clipboard?.writeText(code).then(() => setCopied(true))
          }}
        >
          {copied ? "Copied" : "Copy to clipboard"}
        </Button>
      </div>
      <pre dir="ltr" className="max-h-40 overflow-auto rounded-md border bg-muted p-2 font-mono text-[11px]">
        {code}
      </pre>
    </div>
  )
}

// One promise per workspace ID / per "generate", so \`use()\` suspends once and re-renders read the cached answer.
const recordCache = new Map<string, Promise<{ workspaceVerificationRecord: string }>>()

const agentCache = new Map<string, Promise<{ workspaceGenerateAgentCode: string }>>()

function verificationFor(workspaceId: string) {
  const hit = recordCache.get(workspaceId) ?? server.workspaceVerificationRecord(workspaceId)
  recordCache.set(workspaceId, hit)
  return hit
}

function agentCodeFor(id: string, run: number) {
  const key = \`\${id}:\${run}\`
  const hit = agentCache.get(key) ?? server.workspaceGenerateAgentCode(id)
  agentCache.set(key, hit)
  return hit
}

function VerificationRecord({ workspaceId }: { workspaceId: string }) {
  return <CodeBlock code={use(verificationFor(workspaceId)).workspaceVerificationRecord} />
}

function AgentCode({ id, run }: { id: string; run: number }) {
  return <CodeBlock code={use(agentCodeFor(id, run)).workspaceGenerateAgentCode} />
}

// ── the entry choice ─────────────────────────────────────────────────
interface HostingChoice {
  mode: "" | "cloud" | "self"
}

const MODES: ChoiceOption[] = [
  { value: "cloud", label: "Use the hosted workspace", description: "We run everything for you: no servers, automatic updates, backups and full support included." },
  { value: "self", label: "Self-host the sync agent", description: "Verify your domain, run our sync agent on your own server and export a starter template (suggested for IT teams)" },
]

const choiceKit = kit<HostingChoice>()

function WorkspaceEntry({ onStart }: { onStart: () => void }) {
  const form = useForm<HostingChoice>({ defaultValues: { mode: "" } })
  return (
    <Form form={form} className="flex flex-col gap-3">
      <StepText>Most teams are best served by the hosted workspace. If your company needs data to stay on its own servers, you can self-host the sync agent instead.</StepText>
      <p className="rounded-md bg-amber-500/10 px-2.5 py-1.5 text-[12px] text-amber-800 dark:text-amber-300">
        Standard support covers the agent itself only. Network, firewall and server issues are covered by priority support.
      </p>
      <RadioCardsField name="mode" label="Where should your workspace run?" options={MODES} columns={2} />
      <When if={choiceKit.c.eq("mode", "cloud")}>
        <p className="text-[13px] text-muted-foreground">→ A real app would create the hosted workspace here.</p>
      </When>
      <When if={choiceKit.c.eq("mode", "self")}>
        <Button type="button" size="sm" className="w-fit" onClick={onStart}>
          Start Setup →
        </Button>
      </When>
      <div className="flex items-center justify-between gap-3 rounded-md border px-2.5 py-1.5 text-[12px]">
        <span>
          <span className="font-medium">Need a hand?</span> <span className="text-muted-foreground">Our onboarding team can set up the agent with you for a one-time fee.</span>
        </span>
        <Button type="button" size="sm" variant="link">
          Book onboarding
        </Button>
      </div>
    </Form>
  )
}

// ── the wizard chrome: accordion headers around the open step ────────
function StepHeader({ id, label, n }: { id: string; label: string; n: number }) {
  const w = useWizard()
  const current = w.current?.id === id
  return (
    <button
      type="button"
      onClick={() => w.goTo(id)}
      disabled={!w.canGoTo(id)}
      aria-current={current ? "step" : undefined}
      className={\`flex w-full items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-[13px] disabled:opacity-50 \${current ? "border-primary/50 bg-muted/60" : "bg-muted/30"}\`}
    >
      <span className="grid size-5 place-items-center rounded border bg-background text-[11px] tabular-nums">{n}</span>
      <span className="font-medium">{label}</span>
      <span className="text-muted-foreground">({STEP_DETAIL[id]})</span>
      {id === "agent" ? <Badge variant="outline">Self-hosted</Badge> : null}
      {w.isComplete(id) ? <span className="ms-auto text-emerald-700 dark:text-emerald-400">✓</span> : null}
    </button>
  )
}

/** Headers of the steps up to the open one (\`progress\` slot) or after it (\`nav\` slot). */
function StepHeaders({ part }: { part: "before" | "after" }) {
  const w = useWizard()
  const list = w.steps.map((s, i) => ({ ...s, n: i + 1 })).filter((s) => (part === "before" ? s.n <= w.index + 1 : s.n > w.index + 1))
  return (
    <div className={part === "before" ? "mb-2 flex flex-col gap-1.5" : "mt-2 flex flex-col gap-1.5"}>
      {list.map((s) => (
        <StepHeader key={s.id} id={s.id} label={s.label} n={s.n} />
      ))}
    </div>
  )
}

/**
 * Per-step Skip / Next. Next validates the step and runs \`onStepComplete\` (the partial save);
 * the wizard owns the spinner and the failure line (\`useWizard().pending\` / \`stepError\`, gap A).
 * Only the agent step's Skip is not a step commit (it saves the whole setup), so it keeps its own state.
 */
function StepNav({ onAgentSkip }: { onAgentSkip: () => Promise<void> }) {
  const w = useWizard()
  const [agentBusy, setAgentBusy] = useState(false)
  const [agentError, setAgentError] = useState("")
  const busy = w.pending || agentBusy
  const error = w.stepError?.message ?? agentError
  const skipAgent = () => {
    setAgentBusy(true)
    setAgentError("")
    onAgentSkip()
      .catch((err: unknown) => setAgentError(errorMessage(err)))
      .finally(() => setAgentBusy(false))
  }
  const id = w.current?.id
  const next = (
    <Button type="button" size="sm" disabled={busy} onClick={() => void w.next()}>
      {w.pending ? "Saving…" : "Next ›"}
    </Button>
  )
  const skip = (
    <Button type="button" size="sm" variant="outline" disabled={busy} onClick={() => void w.next()}>
      Skip
    </Button>
  )
  return (
    <div className="mt-3 flex flex-col items-end gap-1 border-t pt-2">
      <div className="flex gap-2">
        {id === "billing" ? (
          <>
            {/* Skip is offered while the activity feed is off */}
            <When if={c.ne("activityFeedEnabled", true)}>{skip}</When>
            {next}
          </>
        ) : null}
        {id === "feed" && w.isLast ? (
          // cloud-hosted workspace: this is the last step; Skip and Next both save the setup
          <>
            <When if={c.ne("activityFeedEnabled", true)}>
              <Form.Submit className={buttonVariants({ size: "sm", variant: "outline" })}>Skip</Form.Submit>
            </When>
            <When if={c.eq("activityFeedEnabled", true)}>
              <Form.Submit className={buttonVariants({ size: "sm" })}>Next ›</Form.Submit>
            </When>
          </>
        ) : null}
        {id === "feed" && !w.isLast ? (
          <>
            <When if={c.ne("activityFeedEnabled", true)}>{skip}</When>
            <When if={c.eq("activityFeedEnabled", true)}>{next}</When>
          </>
        ) : null}
        {id === "domain" ? next : null}
        {id === "agent" ? (
          <>
            <Button type="button" size="sm" variant="outline" disabled={busy} onClick={skipAgent}>
              {agentBusy ? "Saving…" : "Skip"}
            </Button>
            <Form.Submit className={buttonVariants({ size: "sm" })} pendingLabel="Saving…">
              Next ›
            </Form.Submit>
          </>
        ) : null}
      </div>
      {error ? <p className="text-[12px] text-destructive">{error}</p> : null}
    </div>
  )
}

// ── step 1: the DNS record modal ─────────────────────────────────────
interface Ack {
  added: boolean
}

const ackKit = kit<Ack>()

function VerificationDialog({ form, markedComplete }: { form: FormStore<WorkspaceSetupInput>; markedComplete: boolean }) {
  const w = useWizard()
  const id = useScopeStatus(form, "workspaceId")
  const workspaceId = useFormValue(form, "workspaceId")
  return (
    <FormDialog<Ack, void>
      title="Add the verification record to your DNS"
      trigger={
        <Button type="button" size="sm" className="w-fit" disabled={!id.complete}>
          {markedComplete ? "✓ Marked as completed" : "Get DNS record"}
        </Button>
      }
      size="lg"
      submitLabel="Save"
      form={{ defaultValues: { added: false } }}
      // Save = the step's Next: validate, partial-save, advance
      onSubmit={async () => {
        // a failed partial save keeps the dialog open with the server's message
        const { error } = await w.next()
        if (error) throw error
      }}
    >
      <p className="rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]">If you have verified this domain before, do not add the record again. Simply tick the checkbox and continue.</p>
      <Suspense fallback={<p className="text-[12px] text-muted-foreground">Loading your DNS record…</p>}>
        <VerificationRecord workspaceId={workspaceId} />
      </Suspense>
      <ol className="list-decimal space-y-0.5 ps-5 text-[13px]">
        <li>Sign in to the provider that hosts your domain&apos;s DNS.</li>
        <li>Open the DNS settings for the domain your team signs in with.</li>
        <li>Add a new TXT record with the name and value shown above.</li>
        <li>Keep the TTL at its default (or 3600 seconds).</li>
        <li>If you use several domains, repeat for each one.</li>
        <li>Save, then allow up to an hour for the change to propagate.</li>
      </ol>
      <CheckboxField name="added" label="I have added the TXT record to my domain's DNS." rules={[ackKit.v.oneOf([true], "Confirm you added the record to save")]} />
    </FormDialog>
  )
}

// ── step 4: the agent install button + modal ─────────────────────────
function AgentStep({ record, markedDone, busy, error, open, run, onOpen, onClose, onSaved }: {
  record: WorkspaceRecord
  markedDone: boolean
  busy: boolean
  error: string
  open: boolean
  run: number
  onOpen: () => void
  onClose: () => void
  onSaved: () => Promise<void>
}) {
  return (
    <>
      <StepText>Install the sync agent on a server inside your network so files and records stay on your own infrastructure. You can install it fresh or update an existing agent.</StepText>
      <Notice tone="info" title="How to install or update the sync agent" open>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <p className="font-medium text-foreground">For a new install</p>
            <ol className="list-decimal space-y-0.5 ps-5">
              <li>Get the install script and copy it.</li>
              <li>Open a shell on a Linux server with outbound HTTPS access.</li>
              <li>Paste the script and run it as an administrator.</li>
              <li>Wait for “agent connected” in the output.</li>
              <li>Come back here and confirm.</li>
            </ol>
          </div>
          <div>
            <p className="font-medium text-foreground">For updating an existing agent</p>
            <ol className="list-decimal space-y-0.5 ps-5">
              <li>Get the install script and copy it.</li>
              <li>Stop the running agent service.</li>
              <li>Run the new script; it keeps your settings.</li>
              <li>Start the service again.</li>
            </ol>
          </div>
        </div>
      </Notice>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" size="sm" disabled={busy} onClick={onOpen}>
          {busy ? "Generating…" : markedDone ? "✓ Marked as completed" : "Get agent install script"}
        </Button>
        {markedDone ? (
          <Button type="button" size="sm" variant="link" disabled={busy} onClick={onOpen}>
            Generate new script
          </Button>
        ) : null}
        {error ? <span className="text-[12px] text-destructive">{error}</span> : null}
      </div>
      {/* the submit gate: Next stays blocked until the agent is installed (Skip is offered instead) */}
      <DisplayField name="agentInstalled" label="Sync agent" tone="inline" render={(on) => (on === true ? "✓ Installed" : "Not installed yet")} rules={[v.oneOf([true], "Install the sync agent first, or Skip")]} />
      <FormDialog<Ack, void>
        open={open}
        onOpenChange={(next) => (next ? undefined : onClose())}
        title="Copy the agent install script"
        size="lg"
        submitLabel="Save"
        form={{ defaultValues: { added: false } }}
        onSubmit={() => gql(onSaved())}
      >
        <p className="text-[13px] font-semibold">Sync agent (Linux)</p>
        <Suspense fallback={<p className="text-[12px] text-muted-foreground">Generating your install script…</p>}>
          <AgentCode id={record.id} run={run} />
        </Suspense>
        <CheckboxField name="added" label="I've installed the sync agent and it reports “connected”." rules={[ackKit.v.oneOf([true], "Confirm you installed the agent to save")]} />
      </FormDialog>
    </>
  )
}

/** The billing details the rates modal edits: three root keys of \`WorkspaceSetupInput\`. */
const BILLING_KEYS = ["billingCurrency", "billingCountry", "billingAccountId"] as const

// ── the setup page ───────────────────────────────────────────────────
function WorkspaceWizard({ form, record, onFinished }: { form: FormStore<WorkspaceSetupInput>; record: WorkspaceRecord; onFinished: () => void }) {
  const newSetup = isNewSetup(record)
  const cloud = record.isCloudHosted === true
  const { confirm, dialog } = useConfirm()
  const [agent, setAgent] = useState({ open: false, busy: false, run: 0, error: "" })
  const [banner, setBanner] = useState(!newSetup)
  const [billingOpen, setBillingOpen] = useState(false)

  /** An active, untouched setup only moves on; a processing one with no edits does not save again. */
  const activeClean = () => record.status === "active" && !form.isDirty()
  const stopMutations = () => (!form.isDirty() && record.status === "processing") || activeClean()
  const finishSetup = async () => {
    if (activeClean()) return
    await server.workspaceFinishSetup(record.id)
  }
  /** After workspaceSetup: finish when a cloud workspace turned the feed on, or an existing setup has the agent installed. */
  const afterSetup = async (saved: WorkspaceRecord) => {
    if ((cloud && saved.activityFeedEnabled === true) || (!newSetup && saved.agentInstalled === true)) await finishSetup()
  }
  const submit = async (values: WorkspaceSetupInput) => {
    if (cloud) {
      await afterSetup((await gql(server.workspaceSetup(record.id, values))).workspaceSetup)
    } else if (stopMutations()) {
      // nothing to save
    } else if (!newSetup && record.agentInstalled === true) {
      await afterSetup((await gql(server.workspaceSetup(record.id, values))).workspaceSetup)
    } else {
      await gql(finishSetup())
    }
    onFinished()
    return { title: "Workspace ready", message: "Your workspace setup is complete" }
  }
  const agentSkip = async () => {
    await server.workspaceSetup(record.id, { ...form.getValues(), agentInstalled: false })
    onFinished()
  }
  const openAgent = () => {
    if (stopMutations()) {
      setAgent((p) => ({ ...p, open: true, run: p.run + 1 }))
      return
    }
    setAgent((p) => ({ ...p, busy: true, error: "" }))
    server
      .workspaceSetup(record.id, { ...form.getValues(), agentInstalled: true })
      .then(() => setAgent((p) => ({ open: true, busy: false, run: p.run + 1, error: "" })))
      .catch((err: unknown) => setAgent((p) => ({ ...p, busy: false, error: errorMessage(err) })))
  }
  const agentSaved = async () => {
    if (!stopMutations()) await finishSetup()
    setAgent((p) => ({ ...p, open: false }))
    onFinished()
  }

  return (
    <Form form={form} onSubmit={submit} className="flex flex-col gap-2">
      {banner ? (
        <div className="flex items-start justify-between gap-2 rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]">
          <span>
            <span className="font-medium">Server and network issues are not covered by standard support.</span> We support the agent itself; firewall and server troubleshooting is part of priority support.
          </span>
          <Button type="button" size="sm" variant="ghost" onClick={() => setBanner(false)} aria-label="Dismiss">
            ✕
          </Button>
        </div>
      ) : null}
      <Wizard
        completed={completedSteps(record)}
        // a first-time setup saves on every Next; an existing one only moves on
        onStepComplete={async () => {
          if (newSetup) await gql(server.workspaceSetPartial(record.id, toSetPartialInput(form.getValues())))
        }}
        progress={<StepHeaders part="before" />}
        nav={
          <>
            <StepNav onAgentSkip={agentSkip} />
            <StepHeaders part="after" />
          </>
        }
      >
        <Wizard.Step id="domain" label="Verify your domain">
          <StepText>Enter your Workspace ID so we can generate the DNS record that proves you own your sign-in domain. Add the record before moving on.</StepText>
          <TextField
            name="workspaceId"
            label="Workspace ID"
            description="Admin console → Workspace → General, under “Workspace ID”."
            placeholder="WS-XXXXXXX"
            required
            requiredMessage="Workspace ID is required"
            rules={[v.pattern(WORKSPACE_ID_FORMAT, "Workspace ID format is wrong")]}
            dir="ltr"
          />
          <StepText>If your domain is already verified, you can skip this step — adding the record twice does no harm, but it is not needed.</StepText>
          <VerificationDialog form={form} markedComplete={Boolean(record.workspaceId)} />
        </Wizard.Step>
        <Wizard.Step id="billing" label="Enable usage-based billing">
          <StepText>Bill each team for what it uses instead of per seat. Make sure the billing account matches the one on your invoices.</StepText>
          {/* app context: no subscription plan → an upgrade button instead of the switch */}
          <When if={c.not(c.ctx("hasPlan"))}>
            <Button type="button" size="sm" variant="outline" className="w-fit">
              ✨ Upgrade your plan
            </Button>
          </When>
          <SwitchField
            name="billingEnabled"
            label="Enable usage billing"
            description="Charges each team by active members and storage instead of a flat per-seat price."
            // app context: the plan
            visibleIf={c.ctx("hasPlan")}
            // turning ON opens the rates modal and leaves the switch off — its Save turns billing on
            confirm={(next) => {
              if (next !== true) return confirm({ title: "Turn off usage billing", body: "Are you sure you want to turn off usage billing? This will remove your billing details.", confirmLabel: "Save", cancelLabel: "Cancel" })
              setBillingOpen(true)
              return false
            }}
          />
          <When if={c.eq("billingEnabled", true)}>
            <DisplayField name="billingCurrency" label="Currency" tone="inline" />
            <DisplayField name="billingCountry" label="Billing country" tone="inline" />
            <DisplayField name="billingAccountId" label="Billing account ID" tone="inline" />
            <Button type="button" size="sm" variant="link" className="h-auto w-fit p-0" onClick={() => setBillingOpen(true)}>
              Edit details
            </Button>
          </When>
          {/* the three ROOT keys of the flat input in one modal (gap D \\\`pick\\\`); Save also turns billing on, Cancel leaves it off */}
          <PickSubFormDialog
            parent={form}
            pick={BILLING_KEYS}
            empty={{ billingCurrency: "usd", billingCountry: "", billingAccountId: "" }}
            set={() => [{ path: "billingEnabled", value: true }]}
            open={billingOpen}
            onOpenChange={setBillingOpen}
            title="Billing rates"
            description="Enter the billing details usage charges are invoiced to."
            submitLabel="Save"
          >
            <ComboboxField name="billingCurrency" label="Currency" options={CURRENCIES} required />
            <ComboboxField name="billingCountry" label="Billing country" options={COUNTRIES} required />
            <TextField name="billingAccountId" label="Billing account ID" required />
          </PickSubFormDialog>
        </Wizard.Step>
        <Wizard.Step id="feed" label="Turn on the activity feed">
          <StepText>The activity feed shows every change across the workspace in one stream. You can turn it on or off here at any time.</StepText>
          <SwitchField name="activityFeedEnabled" label="Activity feed (workspace-wide)" />
        </Wizard.Step>
        {/* app context: a cloud-hosted workspace has no agent step */}
        <Wizard.Step id="agent" label="Install the sync agent" visibleIf={c.not(c.ctx("cloud"))}>
          <AgentStep
            record={record}
            markedDone={!newSetup && record.agentInstalled === true}
            busy={agent.busy}
            error={agent.error}
            open={agent.open}
            run={agent.run}
            onOpen={openAgent}
            onClose={() => setAgent((p) => ({ ...p, open: false }))}
            onSaved={agentSaved}
          />
        </Wizard.Step>
      </Wizard>
      <Form.Status<{ title: string; message: string }>
        className="text-sm"
        success={(r) => (
          <p className="font-medium text-emerald-700 dark:text-emerald-400">
            ✓ {r.title} — {r.message}.
          </p>
        )}
        error={(err) => <p className="text-destructive">Workspace setup failed: {err.message}</p>}
      />
      {dialog}
    </Form>
  )
}

// ── the starter-template step ────────────────────────────────────────
type TemplateChoices = ModuleFlags & { templateType: "" | TemplateType }

const templateKit = kit<TemplateChoices>()

const TEMPLATE_TYPE_OPTIONS: ChoiceOption[] = [
  { value: TEMPLATE_TYPES.open, label: "Open template", meta: <Badge variant="secondary">Everyone</Badge>, description: "Every member can see every project and document" },
  { value: TEMPLATE_TYPES.restricted, label: "Restricted template", meta: <Badge variant="outline">Invite-only</Badge>, description: "Guests see only the projects they are invited to" },
]

const ANY_MODULE = templateKit.c.or(...TEMPLATE_MODULES.map((m) => templateKit.c.eq(m.key, true)))

function choicesFrom(row: WorkspaceTemplate | undefined): TemplateChoices {
  const flags: ModuleFlags = {
    tasksEnabled: row?.tasksEnabled ?? false,
    docsEnabled: row?.docsEnabled ?? false,
    calendarEnabled: row?.calendarEnabled ?? false,
    chatEnabled: row?.chatEnabled ?? false,
    wikiEnabled: row?.wikiEnabled ?? false,
    formsEnabled: row?.formsEnabled ?? false,
    timesheetsEnabled: row?.timesheetsEnabled ?? false,
    invoicesEnabled: row?.invoicesEnabled ?? false,
    contactsEnabled: row?.contactsEnabled ?? false,
    helpdeskEnabled: row?.helpdeskEnabled ?? false,
    roadmapsEnabled: row?.roadmapsEnabled ?? false,
    goalsEnabled: row?.goalsEnabled ?? false,
    filesEnabled: row?.filesEnabled ?? false,
    whiteboardsEnabled: row?.whiteboardsEnabled ?? false,
    pollsEnabled: row?.pollsEnabled ?? false,
    automationsEnabled: row?.automationsEnabled ?? false,
    reportsEnabled: row?.reportsEnabled ?? false,
  }
  return { ...flags, templateType: row?.templateType ?? "" }
}

interface TemplateReceipt {
  link: string
  templateType: TemplateType
}

/** Gap I — the submit intent of "Download template" before the choices are saved: save AND download in one click. */
const DOWNLOAD_INTENT = "download"

function StarterTemplate({ recordId, latest, onDownload }: { recordId: string; latest: WorkspaceTemplate | undefined; onDownload: (r: TemplateReceipt) => void }) {
  const form = useForm<TemplateChoices>({ defaultValues: choicesFrom(latest) })
  const meta = useFormMeta(form)
  return (
    <Form
      form={form}
      className="flex flex-col gap-3"
      onSubmit={async ({ templateType, ...flags }, ctx) => {
        // the radio holds the template's type string; the API takes restricted: Boolean
        const saved: TemplateType = templateType === TEMPLATE_TYPES.restricted ? TEMPLATE_TYPES.restricted : TEMPLATE_TYPES.open
        const res = await gql(server.workspaceExportTemplate(recordId, { ...flags, restricted: saved === TEMPLATE_TYPES.restricted }))
        const receipt: TemplateReceipt = { link: res.workspaceExportTemplate, templateType: saved }
        // "Download template" pressed before saving: the same save, then the download
        if (ctx.intent === DOWNLOAD_INTENT) onDownload(receipt)
        return receipt
      }}
    >
      <p className="text-[13px] font-medium">If you want a starter template, select your options below and continue:</p>
      <RadioCardsField name="templateType" label="Template type" options={TEMPLATE_TYPE_OPTIONS} columns={2} required />
      <fieldset className="flex flex-col gap-1">
        <legend className="mb-1 text-[13px] font-medium">Which modules should the template include?</legend>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
          {TEMPLATE_MODULES.map((m) => (
            <CheckboxField key={m.key} name={m.key} label={m.label} />
          ))}
        </div>
      </fieldset>
      {/* "Save your choices" appears once a type and a module are picked, and only while something changed */}
      <When if={templateKit.c.and(templateKit.c.filled("templateType"), ANY_MODULE)}>
        {meta.dirty ? (
          <div className="flex flex-wrap items-center gap-2">
            <Form.Submit className={buttonVariants({ size: "sm" })} pendingLabel="Saving…">
              Save your choices
            </Form.Submit>
            <Form.Submit intent={DOWNLOAD_INTENT} className={buttonVariants({ size: "sm", variant: "outline" })} pendingLabel="Saving…">
              ⬇ Download template
            </Form.Submit>
            <span className="text-[12px] italic text-muted-foreground">(After you save your choices, we’ll generate your starter template.)</span>
          </div>
        ) : null}
      </When>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-2">
        <div>
          <p className="text-[13px] font-medium">Download the file (.json) and import it in the admin console</p>
          <Form.Status<TemplateReceipt>
            className="text-[12px]"
            success={(r) => (
              <span className="flex flex-wrap items-center gap-2">
                <span className="text-emerald-700 dark:text-emerald-400">Template created — your file is ready to download and import.</span>
                <Button type="button" size="sm" onClick={() => onDownload(r)}>
                  ⬇ Download template
                </Button>
              </span>
            )}
            error={(err) => <span className="text-destructive">Template export: {err.message}</span>}
          />
          {meta.status === "success" ? null : <p className="text-[12px] text-muted-foreground">The template is generated from your choices.</p>}
        </div>
        <Button type="button" size="sm" variant="outline">
          View instructions
        </Button>
      </div>
    </Form>
  )
}

function TemplateRow({ row, workspaceId }: { row: WorkspaceTemplate; workspaceId: string }) {
  const modules = selectedModules(row)
  const restricted = row.templateType === TEMPLATE_TYPES.restricted
  return (
    <li className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-muted/40 px-2.5 py-1.5 text-[13px]">
      <span className="flex flex-wrap items-center gap-1.5">
        Starter template {row.version ?? "v4.0.0"} exported. Workspace: <span className="font-medium">{workspaceId}</span>
        <Badge variant={restricted ? "outline" : "secondary"}>{restricted ? "Invite-only" : "Everyone"}</Badge>
        <Badge variant="secondary" title={modules.join(", ")}>
          {modules.length} Modules
        </Badge>
        <span className="text-[12px] text-muted-foreground tabular-nums">{new Date(row.createdAt).toLocaleDateString("en-GB", { month: "short", day: "2-digit", year: "numeric" })}</span>
      </span>
      <Button type="button" size="sm" variant="link" disabled={!row.downloadLink} onClick={() => server.download(row.downloadLink ?? "", templateFileName(workspaceId, row.templateType ?? TEMPLATE_TYPES.open, row.createdAt))}>
        Download Again
      </Button>
    </li>
  )
}

function TemplateStep({ n, reached, record, initial }: { n: number; reached: boolean; record: WorkspaceRecord; initial: readonly WorkspaceTemplate[] }) {
  // the workspaceTemplateList query: refetched after each download
  const [templates, setTemplates] = useState(initial)
  const [open, setOpen] = useState(initial.length > 0)
  const workspaceId = record.workspaceId ?? ""
  const downloaded = (r: TemplateReceipt) => {
    server.download(r.link, templateFileName(workspaceId, r.templateType))
    void server.workspaceTemplateList(record.id).then((res) => setTemplates(res.workspaceTemplateList))
  }
  return (
    <section className="flex flex-col gap-2 rounded-md border p-2.5">
      <h4 className="flex items-center gap-2 text-[13px] font-medium">
        <span className="grid size-5 place-items-center rounded border bg-background text-[11px] tabular-nums">{n}</span>
        Create and download a starter template
        {reached && templates.length > 0 ? <span className="ms-auto text-emerald-700 dark:text-emerald-400">✓</span> : null}
      </h4>
      {!reached ? (
        <p className="text-[12px] text-muted-foreground">Opens when the setup steps above are finished.</p>
      ) : (
        <>
          <Notice tone="warning" title="🔔 Template format changed (v3 and below)">
            <p>Already on agent v3.3 or later? Your existing templates keep working.</p>
            <p>For first-time users or older agents: export a new template; it carries your selected modules and visibility settings.</p>
          </Notice>
          <Notice tone="info" title="Important Notice" open>
            <p>Importing a template never overwrites existing projects — modules it enables are added next to what you already have.</p>
          </Notice>
          {open ? <StarterTemplate recordId={record.id} latest={templates[0]} onDownload={downloaded} /> : null}
          {!open && templates.length === 0 ? (
            <div className="flex justify-end gap-2">
              <Button type="button" size="sm" variant="outline">
                I don’t need one
              </Button>
              <Button type="button" size="sm" onClick={() => setOpen(true)}>
                I need a starter template ›
              </Button>
            </div>
          ) : null}
          {templates.length > 0 ? (
            <>
              <ul className="flex flex-col gap-1">
                {templates.map((row) => (
                  <TemplateRow key={row.id} row={row} workspaceId={workspaceId} />
                ))}
              </ul>
              <Button type="button" size="sm" className="w-fit self-end">
                Finish
              </Button>
            </>
          ) : null}
        </>
      )}
    </section>
  )
}

// ── the page ─────────────────────────────────────────────────────────
/** Skip the entry choice once a setup is under way. */
function setupStarted(r: WorkspaceRecord): boolean {
  return (r.status !== "created" && r.status !== "disabled") || (r.step ?? 0) > 1 || Boolean(r.workspaceId)
}

export function WorkspacePage({ record, hasPlan, side }: { record: WorkspaceRecord; hasPlan: boolean; side: ReactNode }) {
  const srv = useSyncExternalStore(server.subscribe, server.snapshot, server.snapshot)
  const [started, setStarted] = useState(() => setupStarted(record))
  const [finished, setFinished] = useState(() => !isNewSetup(record))
  const cloud = record.isCloudHosted === true
  // the setup form's store lives on the page so the side panel can show its payload
  const form = useForm<WorkspaceSetupInput>({ defaultValues: setupDefaults(record), model, context: { cloud, hasPlan, countryCode: COUNTRY_CODE } })
  return (
    <TwoCol>
      <div className="flex min-w-0 flex-col gap-3">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold">Workspace setup</h4>
          <Badge variant="secondary">Self-hosted</Badge>
        </div>
        {started ? (
          <>
            <WorkspaceWizard form={form} record={record} onFinished={() => setFinished(true)} />
            <TemplateStep n={cloud ? 4 : 5} reached={finished} record={srv.record} initial={srv.templates} />
          </>
        ) : (
          <WorkspaceEntry onStart={() => setStarted(true)} />
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-3">
        {side}
        <LivePanel store={form} title="Setup form payload" />
      </div>
    </TwoCol>
  )
}

const PRESET_LABEL: Readonly<Record<WorkspacePreset, string>> = { new: "New setup", hasWorkspaceId: "Saved workspace ID", feedOn: "Activity feed on", active: "Active setup" }

export function TemplateOnly() {
  const srv = useSyncExternalStore(server.subscribe, server.snapshot, server.snapshot)
  const latest: WorkspaceTemplate = {
    id: "tpl_seed",
    createdAt: "2026-09-14T10:00:00.000Z",
    workspaceRecordId: "wsr_01",
    downloadLink: "https://files.example.com/templates/wsr_01/template-0.json",
    version: "v4.0.0",
    templateType: TEMPLATE_TYPES.open,
    tasksEnabled: true,
    docsEnabled: true,
    chatEnabled: true,
  }
  return (
    <TwoCol>
      <StarterTemplate recordId="wsr_01" latest={latest} onDownload={(r) => server.download(r.link, templateFileName("WS-K7Q2M9P", r.templateType))} />
      <SidePanel title="Server log" meta={\`\${srv.log.length} calls\`}>
        <PanelLog empty="Change a choice, then Save your choices.">
          {srv.log.slice(-6).map((line, i) => (
            <p key={\`\${i}-\${line}\`} className="break-all">
              {line}
            </p>
          ))}
        </PanelLog>
      </SidePanel>
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

/** A short log as a panel body, with an empty-state line. */
function PanelLog({ empty, children }: { empty: ReactNode; children?: ReactNode }) {
  const items = Children.toArray(children)
  return <div className="space-y-0.5 p-3 font-mono text-[11px]">{items.length === 0 ? <p className="font-sans text-muted-foreground">{empty}</p> : items}</div>
}

/** The form beside its side panels (one column below lg). */
function TwoCol({ children, stack = false }: { children: ReactNode; stack?: boolean }) {
  return <div className={cn("grid grid-cols-1 gap-4", !stack && "lg:grid-cols-[minmax(0,1fr)_280px]")}>{Children.toArray(children)}</div>
}

// ---- the examples
export function WorkspaceSetupExample() {
  const srv = useSyncExternalStore(server.subscribe, server.snapshot, server.snapshot)
  // demo-chrome: remount the page from the server record, as a page load does
  const [loads, setLoads] = useState(0)
  // demo-chrome: app state the page reads (the account's plan, the record's isCloudHosted)
  const [hasPlan, setHasPlan] = useState(true)
  const [cloud, setCloud] = useState(false)
  const load = (preset: WorkspacePreset, withCloud: boolean) => {
    server.load(preset, withCloud)
    setLoads((n) => n + 1)
  }
  const side = (
    <>
      <SidePanel title="Server" meta="workspaceGet">
        <div className="flex flex-col gap-2 p-3 text-[13px]">
          <div className="flex flex-wrap gap-1.5">
            {WORKSPACE_PRESETS.map((p) => (
              <Button key={p} type="button" size="sm" variant="outline" onClick={() => load(p, cloud)}>
                {PRESET_LABEL[p]}
              </Button>
            ))}
          </div>
          <label className="flex items-center justify-between gap-3">
            <span>Cloud-hosted workspace (isCloudHosted)</span>
            <Switch
              checked={cloud}
              onCheckedChange={(on) => {
                setCloud(on)
                load("new", on)
              }}
              aria-label="Cloud-hosted workspace"
            />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span>Subscription plan (app context)</span>
            <Switch checked={hasPlan} onCheckedChange={setHasPlan} aria-label="Subscription plan" />
          </label>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-muted-foreground">Fail next:</span>
            {WORKSPACE_OPERATIONS.map((op: WorkspaceOperation) => (
              <Button key={op} type="button" size="sm" variant={srv.failNext === op ? "default" : "ghost"} className="h-6 px-1.5 font-mono text-[11px]" onClick={() => server.armFailure(srv.failNext === op ? null : op)}>
                {op.replace("workspace", "")}
              </Button>
            ))}
          </div>
        </div>
      </SidePanel>
      <SidePanel title="Record" meta={\`\${srv.record.status} · step \${srv.record.step ?? "–"}\`}>
        <PanelJson value={srv.record} maxHeight="max-h-[220px]" />
      </SidePanel>
      <SidePanel title="GraphQL calls" meta={\`\${srv.log.length}\`}>
        <PanelLog empty="No calls yet.">
          {srv.log.slice(-8).map((line, i) => (
            <p key={\`\${i}-\${line}\`} className="break-all">
              {line}
            </p>
          ))}
        </PanelLog>
      </SidePanel>
    </>
  )
  return (
    <WorkspacePage key={loads} record={srv.record} hasPlan={hasPlan} side={side} />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./workspace-setup-CP7Ww1OM.js`),[]));function Ye(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(n,{title:`Workspace setup (real-world flow)`,children:[`A self-hosted team workspace setup, built on the declarative API against a server that answers realistic GraphQL shapes. The entry choice, then four setup steps as an accordion wizard: the server record seeds which steps are done (`,(0,j.jsx)(`code`,{children:`<Wizard completed>`}),`), each Next of a first-time setup runs `,(0,j.jsx)(`code`,{children:`workspaceSetPartial`}),`, the DNS-record and agent-install modals gate on an acknowledgement, usage billing asks before turning off (`,(0,j.jsx)(`code`,{children:`confirm`}),`) and reads the plan and country from app context (`,(0,j.jsx)(`code`,{children:`c.ctx`}),`), and the last step chains `,(0,j.jsx)(`code`,{children:`workspaceSetup`}),` →`,` `,(0,j.jsx)(`code`,{children:`workspaceFinishSetup`}),`. Then the starter-template form. Arm a failure on the right to see the server's `,(0,j.jsx)(`code`,{children:`errors[0].message`}),` surface.`]}),(0,j.jsx)(k,{n:1,title:`Workspace setup flow`,blurb:`Pick “Self-host the sync agent”, then walk the steps. Load another server record to see the wizard resume where the server says.`,code:$,children:(0,j.jsx)(Je,{})}),(0,j.jsx)(k,{n:2,title:`Starter template`,blurb:`An existing template seeds the choices; Save appears only once something changed, and the radio maps to restricted on the wire.`,code:$,children:(0,j.jsx)(Ue,{})})]})}export{Ye as component};