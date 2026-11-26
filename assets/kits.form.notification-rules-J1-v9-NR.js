import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t}from"./toaster-CxYvK1SV.js";import{t as n}from"./switch-CiJzHfYx.js";import{s as r}from"./kit-docs-BUovISd0.js";import{Bc as i,Cc as a,Ic as o,hi as s,mt as c,ti as l}from"./index-B9ukmIN1.js";import{t as u}from"./badge-uhFB8J9R.js";import{A as d,At as f,J as p,R as m,Y as h,c as g,f as _}from"./field-config-17kME8Vl.js";import{a as ee,c as v,h as y,i as b,n as x,t as S,y as C}from"./fields-CwxxBZgA.js";import{i as w,n as T}from"./wizard-D4W23MbD.js";import{n as te,t as ne}from"./wizard-chrome-D0CpQAFy.js";import{i as E}from"./choice-D87pJpHO.js";import{t as D}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var O=e(i(),1),k=o();function A(e){return new Promise(t=>setTimeout(t,e))}var re=1200,j={Instant:`instant`,Hourly:`hourly`,Daily:`daily`,Weekly:`weekly`},M={Summary:`summary`,Full:`full`},N=class extends Error{response;constructor(e){super(e[0]?.message??`GraphQL Error`),this.name=`ClientError`,this.response={errors:e,data:null}}},ie={channelVerifying:!1,agentDetected:!0,agentCheckDown:!1,routeAllFails:!1,settingsUpdateFails:!1},ae={workspaceSlug:`acme-support`,hostname:`acme-support.example.com`,agentActive:!1,skipAgentAutoActivate:!1,agentInstalled:!1,digestMode:j.Instant,agentLogging:!1,showOnTickets:!0,deliveryLogging:!1,escalationChannelId:``,redactPayloads:!1,batchLargeAlerts:!1,muteBots:!1,mergeDuplicates:!1,payloadDetail:M.Full,alertOnReassign:!0,batchSize:25},oe=`a channel is still verifying`;function se(e){let t={...ae},n=[],r=e=>{n.unshift(`${new Date().toLocaleTimeString()}  ${e}`)};return{me:()=>({...t}),log:()=>n,async generateAgentSnippet(){if(await A(450),r(`mutation generateAgentSnippet`),e().channelVerifying)throw new N([{message:oe,path:[`generateAgentSnippet`]}]);return{snippet:`<script>\n  // Relay agent for ${t.workspaceSlug}\n  relay.start({ host: "${t.hostname}" });\n<\/script>`}},async routeAllThroughAgent(t){if(await A(450),r(`mutation routeAllThroughAgent(enabled: ${t.enabled})`),e().routeAllFails)throw new N([{message:`failed to reroute channels`,path:[`routeAllThroughAgent`]}]);return{ok:!0}},async updateAlertSettings(n){if(await A(450),r(`mutation updateAlertSettings(input: ${JSON.stringify(n.input)})`),e().settingsUpdateFails)throw new N([{message:`settings could not be updated`,path:[`updateAlertSettings`]}]);return t={...t,...n.input},{ok:!0}},async setDigestMode(e){return await A(450),r(`mutation setDigestMode(digestMode: ${JSON.stringify(e.digestMode)})`),t={...t,digestMode:e.digestMode},{digestMode:e.digestMode}},async setAgentActive(e){return await A(450),r(`mutation setAgentActive(agentActive: ${e.agentActive})`),t={...t,agentActive:e.agentActive},{agentActive:e.agentActive}},async agentCheck(){if(await A(re),r(`GET /api/agent-check?host=${t.hostname}`),e().agentCheckDown)throw TypeError(`Failed to fetch`);return{agentActive:e().agentDetected}}}}var ce=[`Email hook`,`Chat webhook`,`SMS hook`],le=[`Auto-updates`,`One install`,`Every channel`],ue=1500;function P(e){return`https://relay.example.com/${e}/settings/hooks`}function F({title:e,steps:t}){return(0,k.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,k.jsx)(`p`,{className:`text-[13px] font-medium`,children:e}),(0,k.jsx)(`ol`,{className:`flex list-decimal flex-col gap-1.5 ps-5 text-[13px]`,children:t.map((e,t)=>(0,k.jsx)(`li`,{children:e},`step-${String(t)}`))})]})}function I({workspaceSlug:e}){return(0,k.jsxs)(k.Fragment,{children:[`Go to`,` `,(0,k.jsx)(`a`,{className:`text-primary underline-offset-2 hover:underline`,href:P(e),target:`_blank`,rel:`noreferrer`,children:`Workspace › Hooks ↗`})]})}function L(){return(0,k.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,k.jsx)(`p`,{children:`One delivery agent that sends every alert, on every channel. Updates arrive automatically, so your routing stays current without manual work.`}),(0,k.jsxs)(`div`,{className:`grid grid-cols-2 gap-3 rounded-md bg-muted/50 p-3`,children:[(0,k.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,k.jsxs)(`p`,{className:`font-semibold`,children:[`Before `,(0,k.jsx)(`span`,{className:`font-normal text-muted-foreground`,children:`(e.g.)`})]}),ce.map(e=>(0,k.jsxs)(`span`,{className:`flex items-center gap-2 rounded border bg-background px-2 py-1 text-[12px] font-medium`,children:[(0,k.jsx)(`span`,{className:`size-2 rounded-sm bg-muted-foreground/40`}),e]},e))]}),(0,k.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,k.jsx)(`p`,{className:`font-semibold`,children:`After`}),(0,k.jsxs)(`span`,{className:`flex items-center gap-2 rounded border bg-background px-2 py-1 text-[12px] font-medium`,children:[(0,k.jsx)(`span`,{className:`size-2 rounded-sm bg-emerald-500`}),`Relay agent`]}),le.map(e=>(0,k.jsxs)(`span`,{className:`text-[12px] text-emerald-700 dark:text-emerald-400`,children:[`✓ `,e]},e))]})]}),(0,k.jsxs)(`details`,{className:`rounded-md border px-3 py-2`,children:[(0,k.jsx)(`summary`,{className:`cursor-pointer`,children:`⚠ Built your own alert scripts? Talk to us before switching.`}),(0,k.jsx)(`p`,{className:`mt-2 border-t pt-2 text-muted-foreground`,children:`If a developer wrote custom hooks for your workspace, or you are unsure how alerts reach your team today, pause here and reach out. We will help you move over without missing an alert.`})]})]})}function R({workspaceSlug:e}){return(0,k.jsx)(F,{title:`Old hooks and the agent together send every alert twice. Retire them before continuing.`,steps:[(0,k.jsx)(I,{workspaceSlug:e},`goto`),(0,k.jsxs)(`span`,{children:[`Open the `,(0,k.jsx)(`b`,{children:`“Outgoing”`}),` tab`]},`tab`),(0,k.jsxs)(`span`,{children:[`Disable every hook named: `,(0,k.jsx)(`b`,{children:`Relay – [Channel]`})]},`disable`)]})}function z({code:e}){let[t,n]=(0,O.useState)(!1);return(0,k.jsxs)(`div`,{className:`relative rounded-md bg-muted`,children:[(0,k.jsx)(`pre`,{className:`max-h-[100px] overflow-auto p-2 pe-16 font-mono text-[12px]`,children:e}),(0,k.jsx)(l,{type:`button`,size:`sm`,variant:`outline`,className:`absolute end-1.5 top-1.5 h-6 px-2 text-[12px]`,onClick:()=>{navigator.clipboard?.writeText(e),n(!0),setTimeout(()=>n(!1),ue)},children:t?`Copied`:`Copy`})]})}function B({workspaceSlug:e,code:t}){return(0,k.jsx)(F,{title:`Install the Relay agent in a few steps.`,steps:[(0,k.jsx)(I,{workspaceSlug:e},`goto`),(0,k.jsxs)(`span`,{children:[`Click `,(0,k.jsx)(`b`,{children:`“Add script”`}),`.`]},`add`),(0,k.jsxs)(`span`,{children:[`Name it `,(0,k.jsx)(`code`,{className:`rounded bg-muted px-1`,children:`Relay agent`})]},`name`),(0,k.jsxs)(`span`,{children:[`Choose `,(0,k.jsx)(`b`,{children:`“All pages”`}),` under Scope.`]},`scope`),(0,k.jsxs)(`span`,{className:`flex flex-col gap-1.5`,children:[`Copy the snippet and paste it into the script box`,(0,k.jsx)(z,{code:t})]},`code`),(0,k.jsxs)(`span`,{children:[`Click `,(0,k.jsx)(`b`,{children:`“Save”`}),`, then `,(0,k.jsx)(`b`,{children:`“Enable”`}),` to start the agent.`]},`save`)]})}var V={retiredHooks:!1,installed:!1},H=h(),U={verifying:`One of your channels is still being verified. Wait until it finishes before generating the agent snippet.`,generateFailed:`Failed to generate the agent snippet`,switchFailed:`Failed to route channels through the agent. Please try again.`,connected:`The Relay agent is now running`,connectedSub:`Every channel now delivers through one agent.`,agentStatusFailed:`Failed to update the agent status`},de=`still verifying`;function fe(e){return{agentInstalled:e.agentInstalled,agentLogging:e.agentLogging,batchLargeAlerts:e.batchLargeAlerts,muteBots:e.muteBots,mergeDuplicates:e.mergeDuplicates,alertOnReassign:e.alertOnReassign,showOnTickets:e.showOnTickets,deliveryLogging:e.deliveryLogging,escalationChannelId:e.escalationChannelId,redactPayloads:e.redactPayloads,payloadDetail:e.payloadDetail,batchSize:e.batchSize}}async function W({server:e,profile:t,refetch:n,toast:r},i){try{await e.routeAllThroughAgent({enabled:i}),await e.updateAlertSettings({input:{...fe(t),agentInstalled:i}}),n()}catch{r.error(U.switchFailed)}}async function pe({server:e,profile:t,refetch:n,toast:r}){let i=await e.agentCheck();return!t.skipAgentAutoActivate&&i.agentActive!==t.agentActive&&e.setAgentActive({agentActive:i.agentActive}).then(n,()=>r.error(U.agentStatusFailed)),i.agentActive}function G({app:e,code:t}){let[n,r]=(0,O.useState)(`idle`);return(0,k.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,k.jsx)(B,{workspaceSlug:e.profile.workspaceSlug,code:t}),(0,k.jsx)(S,{name:`installed`,required:!0,label:`I added the snippet and enabled the agent.`,confirm:async t=>{r(`checking`);try{let n=await pe(e);return!e.profile.agentInstalled&&n&&W(e,!0),n&&e.toast.success(U.connected,{description:U.connectedSub}),r(n?`idle`:`notFound`),n===t}catch{return r(`idle`),t===!1}},rules:[H.v.oneOf([!0],`Add the snippet and enable the agent first`)]}),n===`checking`?(0,k.jsxs)(`p`,{role:`status`,className:`rounded-md border bg-muted/40 px-2.5 py-1.5 text-[13px]`,children:[(0,k.jsx)(`span`,{className:`font-semibold`,children:`Looking for your agent…`}),` `,(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`We’re pinging your workspace host. This usually takes a few seconds.`})]}):null,n===`notFound`?(0,k.jsxs)(`p`,{role:`status`,className:`rounded-md border bg-muted/40 px-2.5 py-1.5 text-[13px]`,children:[(0,k.jsx)(`span`,{className:`font-semibold`,children:`Still looking.`}),` `,(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`We haven’t heard from the agent yet, but we keep checking in the background and it can take a few minutes. If you’ve added the snippet, you can close this window.`})]}):null]})}function me({app:e,session:t,open:n,onOpenChange:r}){return(0,k.jsx)(v,{open:n,onOpenChange:r,title:`Switch to the Relay agent`,description:`Replace your per-channel hooks`,size:`lg`,submit:!1,confirmDiscard:!1,form:{defaultValues:V},onSubmit:()=>void 0,children:(0,k.jsxs)(T,{nextLabel:`Next`,backLabel:`Previous`,submitLabel:`Done`,progress:(0,k.jsx)(te,{}),nav:(0,k.jsx)(ne,{disableUntilComplete:!0}),onStepComplete:async t=>{t===`retire`&&await W(e,!0)},children:[(0,k.jsx)(T.Step,{id:`why`,label:`Why switch?`,children:(0,k.jsx)(L,{})}),(0,k.jsxs)(T.Step,{id:`retire`,label:`Retire old hooks`,children:[(0,k.jsx)(R,{workspaceSlug:e.profile.workspaceSlug}),(0,k.jsx)(S,{name:`retiredHooks`,label:`I've disabled every old Relay hook.`,required:!0,rules:[H.v.oneOf([!0],`Disable the old hooks first`)]}),(0,k.jsx)(he,{})]}),(0,k.jsx)(T.Step,{id:`code`,label:`Install the agent`,children:(0,k.jsx)(G,{app:e,code:t.code})})]})})}function he(){return w().pending?(0,k.jsx)(`p`,{role:`status`,className:`text-[13px] text-muted-foreground`,children:`Routing your channels through the Relay agent…`}):null}function ge({app:e,session:t,open:n,onOpenChange:r}){return(0,k.jsx)(v,{open:n,onOpenChange:r,title:`Install the Relay agent`,size:`lg`,submitLabel:`Done`,disableUntilComplete:!0,confirmDiscard:!1,form:{defaultValues:V},onSubmit:()=>void 0,children:(0,k.jsx)(G,{app:e,code:t.code})})}function _e({app:e,hasChannels:t}){let n=d({defaultValues:{}}),[r,i]=(0,O.useState)(null),[a,o]=(0,O.useState)(!1),s=async()=>{try{i({code:(await e.server.generateAgentSnippet()).snippet,switchFlow:t()&&!e.profile.agentInstalled}),o(!0)}catch(t){let n=(C(t)?.message??``).toLowerCase().includes(de)?U.verifying:U.generateFailed;throw e.toast.error(n),new f({message:n},{cause:t})}},c=e.profile.agentActive;return(0,k.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-lg border p-3`,children:[(0,k.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,k.jsx)(`h3`,{className:`text-sm font-semibold`,children:`Delivery agent`}),(0,k.jsx)(u,{variant:c?`default`:`outline`,children:c?`Running`:`Not running`})]}),(0,k.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Replace one hook per channel with a single agent. Finish setting up your channels (email, chat, SMS) first, then retire the old hooks from your workspace settings.`}),(0,k.jsxs)(g,{form:n,onSubmit:s,layout:`none`,className:`flex items-center justify-end gap-3`,children:[(0,k.jsx)(g.Status,{className:`text-[13px]`,error:e=>(0,k.jsx)(`span`,{className:`text-destructive`,children:e.message})}),(0,k.jsx)(g.Submit,{className:`h-7 rounded-md border px-3 text-[13px] font-medium hover:bg-muted`,children:`Get agent snippet`})]}),r&&r.switchFlow?(0,k.jsx)(me,{app:e,session:r,open:a,onOpenChange:o}):null,r&&!r.switchFlow?(0,k.jsx)(ge,{app:e,session:r,open:a,onOpenChange:o}):null]})}function ve(e){return{showOnTickets:e.showOnTickets,summaryOnly:e.payloadDetail===M.Summary,digestOn:e.digestMode!==null&&e.digestMode!==j.Instant,digestMode:e.digestMode,batchLargeAlerts:e.batchLargeAlerts,batchSize:e.batchSize,alertOnReassign:e.alertOnReassign,escalationOn:e.escalationChannelId!==``,escalationChannelId:e.escalationChannelId,muteBots:e.muteBots,mergeDuplicates:e.mergeDuplicates,agentLogging:e.agentLogging,deliveryLogging:e.deliveryLogging,redactPayloads:e.redactPayloads,agentInstalled:e.agentInstalled}}function ye(e){return{showOnTickets:e.showOnTickets,payloadDetail:e.summaryOnly?M.Summary:M.Full,batchLargeAlerts:e.batchLargeAlerts,batchSize:e.batchSize,alertOnReassign:e.alertOnReassign,escalationChannelId:e.escalationOn?e.escalationChannelId:``,muteBots:e.muteBots,mergeDuplicates:e.mergeDuplicates,agentLogging:e.agentLogging,deliveryLogging:e.deliveryLogging,redactPayloads:e.redactPayloads,agentInstalled:e.agentInstalled}}var be=[`digestOn`,`digestMode`],K=h(),xe=p()(()=>({fields:[],effects:[{on:[`escalationOn`],when:K.c.eq(`escalationOn`,!1),do:[{set:`escalationChannelId`,to:``}]},{on:[`digestOn`],when:K.c.eq(`digestOn`,!1),do:[{set:`digestMode`,to:j.Instant}]}]})),Se={[j.Hourly]:`Batched into an hourly digest.`,[j.Daily]:`Batched into a daily digest.`,[j.Weekly]:`Batched into a weekly digest.`},Ce=[{value:j.Hourly,label:`Hourly`,description:`Low-priority alerts collected for an hour and sent together. Good for busy queues where a ping per event would be noise.`},{value:j.Daily,label:`Daily`,description:`One summary each morning. A fit for teams that review alerts once a day rather than react to each one.`},{value:j.Weekly,label:`Weekly`,description:`A single weekly roundup. Best for trend-watching stakeholders who never act on individual alerts.`}];function q({name:e,title:t,description:n,tooltip:r,badge:i,needsPlan:a,confirm:o,children:s}){return(0,k.jsxs)(`div`,{className:`flex flex-col gap-1 border-b py-2 last:border-b-0`,children:[(0,k.jsx)(b,{name:e,disabledIf:a?K.c.not(K.c.ctx(`hasPaidPlan`)):void 0,confirm:o,label:(0,k.jsxs)(`span`,{className:`flex items-center gap-2`,children:[t,i?(0,k.jsx)(u,{variant:`secondary`,children:i}):null,(0,k.jsx)(`span`,{className:`cursor-help text-muted-foreground`,title:r,"aria-label":r,children:`ⓘ`})]}),description:n}),s]})}function J({label:e,onClick:t}){return(0,k.jsxs)(l,{type:`button`,size:`sm`,variant:`outline`,className:`h-6 w-fit px-2 text-[12px]`,onClick:t,children:[e,` ✎`]})}async function Y(e){try{await e()}catch(e){throw C(e)??e}}function X({form:e,api:t,modal:n,setModal:r}){let i=m(`batchSize`),a=m(`escalationChannelId`),o=m(`digestMode`),s=e=>{e||r(null)};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(v,{open:n===`batch`,onOpenChange:s,title:`Set max alerts per batch`,submitLabel:`Save`,form:{defaultValues:{batchSize:i}},onSubmit:async n=>{await Y(()=>t.saveInput({...e.getValues(),batchSize:n.batchSize})),y(e,`batchSize`,n.batchSize),e.commit(`batchSize`)},children:(0,k.jsx)(x,{name:`batchSize`,label:`By default a batch holds up to 25 alerts. You can change the cap at any time.`,placeholder:`Alerts per batch`})}),(0,k.jsx)(v,{open:n===`escalation`,onOpenChange:s,title:`Set escalation channel`,submitLabel:`Save`,form:{defaultValues:{escalationChannelId:a}},onSubmit:async n=>{await Y(()=>t.saveInput({...e.getValues(),escalationOn:!0,escalationChannelId:n.escalationChannelId})),y(e,`escalationChannelId`,n.escalationChannelId,[{path:`escalationOn`,value:n.escalationChannelId!==``}]),e.commit(`escalationChannelId`),e.commit(`escalationOn`)},children:(0,k.jsx)(ee,{name:`escalationChannelId`,label:`Escalation channel`,placeholder:`e.g. #on-call`})}),(0,k.jsx)(v,{open:n===`digest`,onOpenChange:s,title:`Digest schedule`,description:`Choose how often low-priority alerts are collected and delivered together. Urgent alerts are always sent right away.`,submitLabel:`Save`,size:`lg`,form:{defaultValues:{digestMode:o}},onSubmit:async n=>{await Y(()=>t.saveDigest(n.digestMode)),y(e,`digestMode`,n.digestMode,[{path:`digestOn`,value:n.digestMode!==null&&n.digestMode!==j.Instant}]),e.commit(`digestMode`),e.commit(`digestOn`)},children:(0,k.jsx)(E,{name:`digestMode`,label:`Schedule`,options:Ce,columns:1})})]})}function we({onClick:e}){let t=m(`batchSize`);return(0,k.jsx)(J,{label:`Max alerts per batch: ${String(t||25)}`,onClick:e})}function Te({onClick:e}){return(0,k.jsx)(J,{label:`Escalation channel: ${m(`escalationChannelId`)}`,onClick:e})}function Ee({onClick:e}){let t=m(`digestMode`);return(0,k.jsx)(J,{label:(t===null?void 0:Se[t])??`Choose a schedule`,onClick:e})}function De({app:e,hasPaidPlan:t}){let[n,r]=(0,O.useState)(null),i={async saveInput(t){await e.server.updateAlertSettings({input:ye(t)}),e.refetch()},async saveDigest(t){await e.server.setDigestMode({digestMode:t}),e.refetch()}},a=d({defaultValues:ve(e.profile),model:xe,context:{hasPaidPlan:t},autosave:{on:`change`,debounceMs:0,save:async(e,{path:t,values:n})=>{t===`digestOn`&&n.digestOn||t===`escalationOn`&&n.escalationOn||(be.includes(t)?await i.saveDigest(n.digestMode):await i.saveInput(n))}}}),o=e=>t=>t===!0?(r(e),!1):!0;return(0,k.jsxs)(g,{form:a,layout:`none`,className:`flex flex-col gap-3`,children:[(0,k.jsxs)(`section`,{className:`rounded-lg border px-3 py-1`,children:[(0,k.jsx)(`h3`,{className:`pt-2 text-sm font-semibold`,children:`Content & Privacy`}),(0,k.jsx)(q,{name:`showOnTickets`,title:`Show alert history on ticket pages`,needsPlan:!0,tooltip:`Alert history is always available in the Activity view. This also shows it next to each ticket.`,description:`An optional extra. Lists the alerts a ticket triggered right on the ticket page. Turning it off changes nothing else.`}),(0,k.jsx)(q,{name:`summaryOnly`,title:`Send summaries only`,tooltip:`By default every alert carries the full event payload so responders have the context they need.`,description:`Keep this off unless you have a reason to trim alerts. When on, alerts carry a one-line summary and leave out the payload, requester and attachments.`}),(0,k.jsx)(q,{name:`digestOn`,title:`Digest low-priority alerts`,confirm:o(`digest`),tooltip:`Some teams want every alert as it happens, others prefer a quieter batched summary.`,description:`By default every alert is sent immediately. Turn this on to collect low-priority alerts into a scheduled digest.`,children:(0,k.jsx)(_,{if:K.c.eq(`digestOn`,!0),children:(0,k.jsx)(Ee,{onClick:()=>r(`digest`)})})})]}),(0,k.jsxs)(`section`,{className:`rounded-lg border px-3 py-1`,children:[(0,k.jsx)(`h3`,{className:`pt-2 text-sm font-semibold`,children:`Delivery`}),(0,k.jsx)(q,{name:`batchLargeAlerts`,title:`Split large alert bursts`,tooltip:`Hundreds of alerts in one message can be truncated or dropped by chat tools.`,description:`When many alerts fire at once, this splits them into batches of at most 25 per message.`,children:(0,k.jsx)(_,{if:K.c.eq(`batchLargeAlerts`,!0),children:(0,k.jsx)(we,{onClick:()=>r(`batch`)})})}),(0,k.jsx)(q,{name:`alertOnReassign`,title:`Notify on reassignment`,tooltip:`Without this, the new assignee only finds out when they next open their queue.`,description:`When a ticket moves to another person or team, this sends a separate alert to the new assignee.`}),(0,k.jsx)(q,{name:`escalationOn`,title:`Escalation channel`,confirm:o(`escalation`),tooltip:`Unanswered urgent alerts are re-sent to this channel after the response window passes.`,description:`Name a channel that receives urgent alerts nobody has acknowledged in time.`,children:(0,k.jsx)(_,{if:K.c.eq(`escalationOn`,!0),children:(0,k.jsx)(Te,{onClick:()=>r(`escalation`)})})})]}),(0,k.jsxs)(`section`,{className:`rounded-lg border px-3 py-1`,children:[(0,k.jsx)(`h3`,{className:`pt-2 text-sm font-semibold`,children:`Noise & Diagnostics`}),(0,k.jsx)(q,{name:`muteBots`,title:`Mute bot activity`,badge:`Enable only if needed`,tooltip:`Automations and bots can trigger alerts on every update they make.`,description:`If automated accounts flood your channels with alerts, turn this on to ignore events they cause.`}),(0,k.jsx)(q,{name:`mergeDuplicates`,title:`Merge duplicate alerts`,badge:`Enable only if needed`,tooltip:`Two rules matching the same event each send an alert by default.`,description:`If overlapping rules send the same alert twice, turn this on to send it once.`}),(0,k.jsx)(q,{name:`agentLogging`,title:`Agent diagnostic logging`,badge:`Developer`,tooltip:`Covers the part of the agent running on your host.`,description:`Writes detailed activity logs for the delivery agent installed on your workspace host.`}),(0,k.jsx)(q,{name:`deliveryLogging`,title:`Delivery diagnostic logging`,badge:`Developer`,tooltip:`Shows each outgoing request in the delivery log.`,description:`Writes detailed logs for every message the service sends to a channel.`})]}),(0,k.jsx)(X,{form:a,api:i,modal:n,setModal:r})]})}function Oe({empty:e,children:t}){let n=O.Children.toArray(t);return(0,k.jsx)(`div`,{className:`space-y-0.5 p-3 font-mono text-[11px]`,children:n.length===0?(0,k.jsx)(`p`,{className:`font-sans text-muted-foreground`,children:e}):n})}function Z({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,k.jsxs)(`aside`,{className:s(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,k.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,k.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,k.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function Q({children:e,stack:t=!1}){return(0,k.jsx)(`div`,{className:s(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:O.Children.toArray(e)})}function ke(){let e=d({defaultValues:{...ie,hasChannels:!0}}),[t]=(0,O.useState)(()=>se(()=>e.getValues())),[n,r]=(0,O.useState)(()=>t.me()),[i]=(0,O.useState)(()=>c()),a={server:t,profile:n,refetch:()=>r(t.me()),toast:i},[o,s]=(0,O.useState)(!0);return{knobs:e,server:t,profile:n,app:a,hasPaidPlan:o,setHasPaidPlan:s}}function Ae({demo:e}){let{knobs:n,profile:r,app:i}=e;return(0,k.jsxs)(Q,{children:[(0,k.jsx)(_e,{app:i,hasChannels:()=>n.getValues().hasChannels}),(0,k.jsx)(t,{toaster:i.toast}),(0,k.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,k.jsx)(Z,{title:`Simulated server`,meta:`knobs`,children:(0,k.jsxs)(g,{form:n,layout:`none`,className:`flex flex-col gap-1.5 p-3`,children:[(0,k.jsx)(b,{name:`hasChannels`,label:`Workspace has channels (switch flow)`}),(0,k.jsx)(b,{name:`channelVerifying`,label:`A channel is still verifying`}),(0,k.jsx)(b,{name:`routeAllFails`,label:`routeAllThroughAgent fails`}),(0,k.jsx)(b,{name:`agentDetected`,label:`Agent check finds the agent`}),(0,k.jsx)(b,{name:`agentCheckDown`,label:`Agent check request fails`}),(0,k.jsx)(b,{name:`settingsUpdateFails`,label:`Settings update fails`})]})}),(0,k.jsx)(Z,{title:`Profile`,meta:`server state`,children:(0,k.jsxs)(`div`,{className:`flex flex-col gap-0.5 p-3 font-mono text-[12px]`,children:[(0,k.jsxs)(`span`,{children:[`agentInstalled: `,String(r.agentInstalled)]}),(0,k.jsxs)(`span`,{children:[`agentActive: `,String(r.agentActive)]}),(0,k.jsxs)(`span`,{children:[`escalationChannelId: `,JSON.stringify(r.escalationChannelId)]}),(0,k.jsxs)(`span`,{children:[`digestMode: `,JSON.stringify(r.digestMode)]}),(0,k.jsxs)(`span`,{children:[`payloadDetail: `,JSON.stringify(r.payloadDetail)]})]})})]})]})}function je({demo:e}){let{server:t,app:r,hasPaidPlan:i,setHasPaidPlan:a}=e;return(0,k.jsxs)(Q,{children:[(0,k.jsx)(De,{app:r,hasPaidPlan:i}),(0,k.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,k.jsx)(Z,{title:`Server log`,meta:`requests sent`,children:(0,k.jsx)(Oe,{empty:`No requests yet.`,children:t.log().map((e,t)=>(0,k.jsx)(`div`,{className:`break-all font-mono text-[11px]`,children:e},`${String(t)}-${e}`))})}),(0,k.jsx)(Z,{title:`App context`,meta:`c.ctx(…)`,children:(0,k.jsxs)(`label`,{className:`flex items-center justify-between gap-3 p-3 text-[13px]`,children:[(0,k.jsx)(`span`,{children:`Has a paid plan (ticket-page history needs one)`}),(0,k.jsx)(n,{checked:i,onCheckedChange:a,"aria-label":`Has a paid plan`})]})})]})]})}var $=`import { useState, type ReactNode, Children } from "react"
import { createToaster, type ToasterApi } from "@kitora/feedback/react"
import { Toaster } from "@kitora/feedback/ui"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Switch } from "@kitora/ui/switch"
import { commitSubForm, defineForm, kit, mapErrors, SubmitError, type FormStore } from "@kitora/form/core"
import { Form, When, Wizard, useForm, useValue, useWizard } from "@kitora/form/react"
import { CheckboxField, FormDialog, NumberField, RadioCardsField, SwitchField, TextField, WizardNav, WizardProgress, type ChoiceOption } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- the simulated server (stub: replace with your API)
/** Simulated round-trip of a mutation (ms). */
export const MUTATION_LATENCY_MS = 450

/** Simulated agent check: it pings the workspace's host, so it is slower (ms). */
export const AGENT_CHECK_LATENCY_MS = 1200

/** Digest modes: how often batched alerts are delivered (\`instant\` = no digest). */
export const DIGEST_MODES = { Instant: "instant", Hourly: "hourly", Daily: "daily", Weekly: "weekly" } as const

export type DigestMode = (typeof DIGEST_MODES)[keyof typeof DIGEST_MODES]

/** Default cap on alerts per batched delivery. */
export const DEFAULT_BATCH_SIZE = 25

/** \`payloadDetail\` values the page writes. */
export const PAYLOAD_DETAILS = { Summary: "summary", Full: "full" } as const

/** The settings input, every member sent on each save. */
export interface AlertSettingsInput {
  agentLogging: boolean
  showOnTickets: boolean
  deliveryLogging: boolean
  escalationChannelId: string
  redactPayloads: boolean
  agentInstalled: boolean
  batchLargeAlerts: boolean
  muteBots: boolean
  mergeDuplicates: boolean
  payloadDetail: string
  alertOnReassign: boolean
  batchSize: number
}

/** The account profile the page reads. */
export interface AccountProfile extends AlertSettingsInput {
  workspaceSlug: string
  hostname: string
  agentActive: boolean
  skipAgentAutoActivate: boolean
  digestMode: string | null
}

/** One entry of a GraphQL response's \`errors\` (GraphQL spec; the page reads only \`message\`). */
export interface GraphQLErrorEntry {
  message: string
  path?: string[]
}

/** A GraphQL client's error: the response rides on \`.response\`. */
export class ClientError extends Error {
  readonly response: { errors: GraphQLErrorEntry[]; data: null }
  constructor(errors: GraphQLErrorEntry[]) {
    super(errors[0]?.message ?? "GraphQL Error")
    this.name = "ClientError"
    this.response = { errors, data: null }
  }
}

/** The agent-check answer. */
export interface AgentCheckResponse {
  agentActive: boolean
}

/** Server-side switches the demo chrome flips to reach each branch. */
export interface ServerKnobs {
  /** A channel is still being verified → \`generateAgentSnippet\` fails with the "still verifying" error. */
  channelVerifying: boolean
  /** Whether the agent check finds the agent running. */
  agentDetected: boolean
  /** The agent-check request itself fails (network down). */
  agentCheckDown: boolean
  /** \`routeAllThroughAgent\` fails (the switch on the "Retire old hooks" step). */
  routeAllFails: boolean
  /** \`updateAlertSettings\` fails (every settings switch). */
  settingsUpdateFails: boolean
}

export const DEFAULT_KNOBS: ServerKnobs = { channelVerifying: false, agentDetected: true, agentCheckDown: false, routeAllFails: false, settingsUpdateFails: false }

export const INITIAL_PROFILE: AccountProfile = {
  workspaceSlug: "acme-support",
  hostname: "acme-support.example.com",
  agentActive: false,
  skipAgentAutoActivate: false,
  agentInstalled: false,
  digestMode: DIGEST_MODES.Instant,
  agentLogging: false,
  showOnTickets: true,
  deliveryLogging: false,
  escalationChannelId: "",
  redactPayloads: false,
  batchLargeAlerts: false,
  muteBots: false,
  mergeDuplicates: false,
  payloadDetail: PAYLOAD_DETAILS.Full,
  alertOnReassign: true,
  batchSize: DEFAULT_BATCH_SIZE,
}

/** Message the simulated server answers while a channel is being verified (contains the substring the page checks). */
export const VERIFYING_MESSAGE = "a channel is still verifying"

/** The simulated backend: one in-memory store (a demo stand-in, reset per page load) and its operations. */
export function createServer(knobs: () => ServerKnobs) {
  let profile: AccountProfile = { ...INITIAL_PROFILE }
  const log: string[] = []
  const record = (line: string): void => {
    log.unshift(\`\${new Date().toLocaleTimeString()}  \${line}\`)
  }

  return {
    /** The current profile. */
    me: (): AccountProfile => ({ ...profile }),
    log: (): readonly string[] => log,

    /** \`mutation generateAgentSnippet\` → \`{ snippet: string }\`. */
    async generateAgentSnippet(): Promise<{ snippet: string }> {
      await delay(MUTATION_LATENCY_MS)
      record("mutation generateAgentSnippet")
      if (knobs().channelVerifying) throw new ClientError([{ message: VERIFYING_MESSAGE, path: ["generateAgentSnippet"] }])
      return { snippet: \`<script>\\n  // Relay agent for \${profile.workspaceSlug}\\n  relay.start({ host: "\${profile.hostname}" });\\n<\/script>\` }
    },

    /** \`mutation routeAllThroughAgent($enabled: Boolean!)\` → \`{ ok: boolean }\`. */
    async routeAllThroughAgent(vars: { enabled: boolean }): Promise<{ ok: boolean }> {
      await delay(MUTATION_LATENCY_MS)
      record(\`mutation routeAllThroughAgent(enabled: \${vars.enabled})\`)
      if (knobs().routeAllFails) throw new ClientError([{ message: "failed to reroute channels", path: ["routeAllThroughAgent"] }])
      return { ok: true }
    },

    /** \`mutation updateAlertSettings($input: AlertSettingsInput!)\` → \`{ ok: boolean }\`. */
    async updateAlertSettings(vars: { input: AlertSettingsInput }): Promise<{ ok: boolean }> {
      await delay(MUTATION_LATENCY_MS)
      record(\`mutation updateAlertSettings(input: \${JSON.stringify(vars.input)})\`)
      if (knobs().settingsUpdateFails) throw new ClientError([{ message: "settings could not be updated", path: ["updateAlertSettings"] }])
      profile = { ...profile, ...vars.input }
      return { ok: true }
    },

    /** \`mutation setDigestMode($digestMode: String)\` → \`{ digestMode }\`. */
    async setDigestMode(vars: { digestMode: string | null }): Promise<{ digestMode: string | null }> {
      await delay(MUTATION_LATENCY_MS)
      record(\`mutation setDigestMode(digestMode: \${JSON.stringify(vars.digestMode)})\`)
      profile = { ...profile, digestMode: vars.digestMode }
      return { digestMode: vars.digestMode }
    },

    /** \`mutation setAgentActive($agentActive: Boolean!)\` → \`{ agentActive }\`. */
    async setAgentActive(vars: { agentActive: boolean }): Promise<{ agentActive: boolean }> {
      await delay(MUTATION_LATENCY_MS)
      record(\`mutation setAgentActive(agentActive: \${vars.agentActive})\`)
      profile = { ...profile, agentActive: vars.agentActive }
      return { agentActive: vars.agentActive }
    },

    /** \`GET /api/agent-check?host={hostname}\` → \`{ agentActive }\` (REST, not GraphQL). */
    async agentCheck(): Promise<AgentCheckResponse> {
      await delay(AGENT_CHECK_LATENCY_MS)
      record(\`GET /api/agent-check?host=\${profile.hostname}\`)
      if (knobs().agentCheckDown) throw new TypeError("Failed to fetch")
      return { agentActive: knobs().agentDetected }
    },
  }
}

export type DemoServer = ReturnType<typeof createServer>

// ---- content
/** The per-channel hooks the agent replaces, and what the agent brings. */
export const OLD_HOOKS = ["Email hook", "Chat webhook", "SMS hook"] as const

export const AGENT_BENEFITS = ["Auto-updates", "One install", "Every channel"] as const

/** How long the copy button reads "Copied" (ms). */
const COPIED_FEEDBACK_MS = 1500

/** The workspace's hook settings page in the invented app. */
export function hookSettingsUrl(workspaceSlug: string): string {
  return \`https://relay.example.com/\${workspaceSlug}/settings/hooks\`
}

/** A title and a numbered instruction list. */
export function InfoSteps({ title, steps }: { title: string; steps: readonly ReactNode[] }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[13px] font-medium">{title}</p>
      <ol className="flex list-decimal flex-col gap-1.5 ps-5 text-[13px]">
        {steps.map((s, i) => (
          // static instruction list: never reordered, so the position is a stable key
          <li key={\`step-\${String(i)}\`}>{s}</li>
        ))}
      </ol>
    </div>
  )
}

/** Link to the hook settings, opened in a new tab. */
export function HookSettingsLink({ workspaceSlug }: { workspaceSlug: string }) {
  return (
    <>
      Go to{" "}
      <a className="text-primary underline-offset-2 hover:underline" href={hookSettingsUrl(workspaceSlug)} target="_blank" rel="noreferrer">
        Workspace › Hooks ↗
      </a>
    </>
  )
}

/** Step 1 of the switch flow: the pitch, before/after, and the custom-setup warning. */
export function WhySwitchContent() {
  return (
    <div className="flex flex-col gap-3 text-[13px]">
      <p>One delivery agent that sends every alert, on every channel. Updates arrive automatically, so your routing stays current without manual work.</p>
      <div className="grid grid-cols-2 gap-3 rounded-md bg-muted/50 p-3">
        <div className="flex flex-col gap-1.5">
          <p className="font-semibold">
            Before <span className="font-normal text-muted-foreground">(e.g.)</span>
          </p>
          {OLD_HOOKS.map((h) => (
            <span key={h} className="flex items-center gap-2 rounded border bg-background px-2 py-1 text-[12px] font-medium">
              <span className="size-2 rounded-sm bg-muted-foreground/40" />
              {h}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="font-semibold">After</p>
          <span className="flex items-center gap-2 rounded border bg-background px-2 py-1 text-[12px] font-medium">
            <span className="size-2 rounded-sm bg-emerald-500" />
            Relay agent
          </span>
          {AGENT_BENEFITS.map((b) => (
            <span key={b} className="text-[12px] text-emerald-700 dark:text-emerald-400">
              ✓ {b}
            </span>
          ))}
        </div>
      </div>
      <details className="rounded-md border px-3 py-2">
        <summary className="cursor-pointer">⚠ Built your own alert scripts? Talk to us before switching.</summary>
        <p className="mt-2 border-t pt-2 text-muted-foreground">If a developer wrote custom hooks for your workspace, or you are unsure how alerts reach your team today, pause here and reach out. We will help you move over without missing an alert.</p>
      </details>
    </div>
  )
}

/** Step 2 instructions: retire the old per-channel hooks. */
export function RetireHooksContent({ workspaceSlug }: { workspaceSlug: string }) {
  return (
    <InfoSteps
      title="Old hooks and the agent together send every alert twice. Retire them before continuing."
      steps={[
        <HookSettingsLink key="goto" workspaceSlug={workspaceSlug} />,
        <span key="tab">
          Open the <b>“Outgoing”</b> tab
        </span>,
        <span key="disable">
          Disable every hook named: <b>Relay – [Channel]</b>
        </span>,
      ]}
    />
  )
}

/** A code block with its copy button. */
export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="relative rounded-md bg-muted">
      <pre className="max-h-[100px] overflow-auto p-2 pe-16 font-mono text-[12px]">{code}</pre>
      <Button
        type="button"
        size="sm"
        variant="outline"
        className="absolute end-1.5 top-1.5 h-6 px-2 text-[12px]"
        onClick={() => {
          void navigator.clipboard?.writeText(code)
          setCopied(true)
          setTimeout(() => setCopied(false), COPIED_FEEDBACK_MS)
        }}
      >
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  )
}

/** Step 3 instructions: install the agent snippet. */
export function AgentSnippetSteps({ workspaceSlug, code }: { workspaceSlug: string; code: string }) {
  return (
    <InfoSteps
      title="Install the Relay agent in a few steps."
      steps={[
        <HookSettingsLink key="goto" workspaceSlug={workspaceSlug} />,
        <span key="add">
          Click <b>“Add script”</b>.
        </span>,
        <span key="name">
          Name it <code className="rounded bg-muted px-1">Relay agent</code>
        </span>,
        <span key="scope">
          Choose <b>“All pages”</b> under Scope.
        </span>,
        <span key="code" className="flex flex-col gap-1.5">
          Copy the snippet and paste it into the script box
          <CodeBlock code={code} />
        </span>,
        <span key="save">
          Click <b>“Save”</b>, then <b>“Enable”</b> to start the agent.
        </span>,
      ]}
    />
  )
}

// ---- the page
// A real-world flow: an invented alerting app ("Relay") with a "Delivery agent" card that opens an
// install dialog, and a Notification rules card whose switches each autosave the whole settings
// input. The simulated server is the section above.

// ── the delivery-agent dialog ───────────────────────────────────────

/** The dialog's own values: the two acknowledgements. */
interface AgentFlow {
  retiredHooks: boolean
  installed: boolean
}

const EMPTY_FLOW: AgentFlow = { retiredHooks: false, installed: false }

const ak = kit<AgentFlow>()

/** Which dialog opens: decided when the button is pressed and frozen while it is open. */
interface AgentSession {
  code: string
  switchFlow: boolean
}

/** The page's toast texts. */
const MSG = {
  verifying: "One of your channels is still being verified. Wait until it finishes before generating the agent snippet.",
  generateFailed: "Failed to generate the agent snippet",
  switchFailed: "Failed to route channels through the agent. Please try again.",
  connected: "The Relay agent is now running",
  connectedSub: "Every channel now delivers through one agent.",
  agentStatusFailed: "Failed to update the agent status",
} as const

/** The substring matched in the server's message. */
const VERIFYING_MATCH = "still verifying"

/** The whole \`AlertSettingsInput\` rebuilt from the profile. */
function settingsInputOf(p: AccountProfile): AlertSettingsInput {
  return {
    agentInstalled: p.agentInstalled,
    agentLogging: p.agentLogging,
    batchLargeAlerts: p.batchLargeAlerts,
    muteBots: p.muteBots,
    mergeDuplicates: p.mergeDuplicates,
    alertOnReassign: p.alertOnReassign,
    showOnTickets: p.showOnTickets,
    deliveryLogging: p.deliveryLogging,
    escalationChannelId: p.escalationChannelId,
    redactPayloads: p.redactPayloads,
    payloadDetail: p.payloadDetail,
    batchSize: p.batchSize,
  }
}

/** The page's view of the server: the profile query plus its refetch. */
interface AppApi {
  server: DemoServer
  profile: AccountProfile
  refetch: () => void
  /** The page's toaster (drawn by the Delivery agent example). */
  toast: ToasterApi
}

/** Route every channel through the agent: two mutations in a row; a failure is a toast, never thrown. */
async function switchAllToAgent({ server, profile, refetch, toast }: AppApi, on: boolean): Promise<void> {
  try {
    await server.routeAllThroughAgent({ enabled: on })
    await server.updateAlertSettings({ input: { ...settingsInputOf(profile), agentInstalled: on } })
    refetch()
  } catch {
    toast.error(MSG.switchFailed)
  }
}

/** The agent check, then sync \`agentActive\` unless auto-activation is off. */
async function checkAgent({ server, profile, refetch, toast }: AppApi): Promise<boolean> {
  const data = await server.agentCheck()
  if (!profile.skipAgentAutoActivate && data.agentActive !== profile.agentActive) {
    server.setAgentActive({ agentActive: data.agentActive }).then(refetch, () => toast.error(MSG.agentStatusFailed))
  }
  return data.agentActive
}

/** Outcome of the last agent check, for the two banners. */
type VerifyState = "idle" | "checking" | "notFound"

/**
 * Step 3 / the install dialog body: the instructions, the snippet, and the "I installed the agent"
 * checkbox whose value is the RESULT of an agent check, not the click — the field's \`confirm\`
 * gate runs the check and applies the click only when it agrees.
 */
function AgentSnippetStep({ app, code }: { app: AppApi; code: string }) {
  const [verify, setVerify] = useState<VerifyState>("idle")
  const confirmInstalled = async (next: unknown): Promise<boolean> => {
    setVerify("checking")
    try {
      const active = await checkAgent(app)
      if (!app.profile.agentInstalled && active) void switchAllToAgent(app, true)
      if (active) app.toast.success(MSG.connected, { description: MSG.connectedSub })
      setVerify(active ? "idle" : "notFound")
      // the checkbox ends up equal to the check's answer: apply the click only when they agree
      return active === next
    } catch {
      // a failed check leaves the box unchecked
      setVerify("idle")
      return next === false
    }
  }
  return (
    <div className="flex flex-col gap-3">
      <AgentSnippetSteps workspaceSlug={app.profile.workspaceSlug} code={code} />
      <CheckboxField
        name="installed"
        required
        label="I added the snippet and enabled the agent."
        // the checkbox is busy by itself while the gate runs (N8); the banner below explains the wait
        confirm={confirmInstalled}
        rules={[ak.v.oneOf([true], "Add the snippet and enable the agent first")]}
      />
      {verify === "checking" ? (
        <p role="status" className="rounded-md border bg-muted/40 px-2.5 py-1.5 text-[13px]">
          <span className="font-semibold">Looking for your agent…</span> <span className="text-muted-foreground">We’re pinging your workspace host. This usually takes a few seconds.</span>
        </p>
      ) : null}
      {verify === "notFound" ? (
        <p role="status" className="rounded-md border bg-muted/40 px-2.5 py-1.5 text-[13px]">
          <span className="font-semibold">Still looking.</span>{" "}
          <span className="text-muted-foreground">We haven’t heard from the agent yet, but we keep checking in the background and it can take a few minutes. If you’ve added the snippet, you can close this window.</span>
        </p>
      ) : null}
    </div>
  )
}

/** The switch flow: three steps; Next on "Retire old hooks" routes every channel through the agent first. */
function SwitchToAgentDialog({ app, session, open, onOpenChange }: { app: AppApi; session: AgentSession; open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <FormDialog<AgentFlow, void>
      open={open}
      onOpenChange={onOpenChange}
      title="Switch to the Relay agent"
      description="Replace your per-channel hooks"
      size="lg"
      submit={false}
      // this dialog closes without asking (N3)
      confirmDiscard={false}
      form={{ defaultValues: EMPTY_FLOW }}
      onSubmit={() => undefined}
    >
      <Wizard
        nextLabel="Next"
        backLabel="Previous"
        submitLabel="Done"
        progress={<WizardProgress />}
        // Next / Done stay disabled until the step's acknowledgement is ticked (N2)
        nav={<WizardNav disableUntilComplete />}
        onStepComplete={async (id) => {
          if (id !== "retire") return
          // the flow advances whatever the switch answered: the failure is a toast;
          // while it runs the wizard's Next is busy (gap A) and the step shows the status line
          await switchAllToAgent(app, true)
        }}
      >
        <Wizard.Step id="why" label="Why switch?">
          <WhySwitchContent />
        </Wizard.Step>
        <Wizard.Step id="retire" label="Retire old hooks">
          <RetireHooksContent workspaceSlug={app.profile.workspaceSlug} />
          <CheckboxField name="retiredHooks" label="I've disabled every old Relay hook." required rules={[ak.v.oneOf([true], "Disable the old hooks first")]} />
          <SwitchingNotice />
        </Wizard.Step>
        <Wizard.Step id="code" label="Install the agent">
          <AgentSnippetStep app={app} code={session.code} />
        </Wizard.Step>
      </Wizard>
    </FormDialog>
  )
}

/** "Switching…" while the step commit (two mutations) runs: the wizard's own pending state. */
function SwitchingNotice() {
  const w = useWizard()
  return w.pending ? (
    <p role="status" className="text-[13px] text-muted-foreground">
      Routing your channels through the Relay agent…
    </p>
  ) : null
}

/** Fresh workspace: just the snippet step; Done needs the verified checkbox. */
function InstallAgentDialog({ app, session, open, onOpenChange }: { app: AppApi; session: AgentSession; open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <FormDialog<AgentFlow, void> open={open} onOpenChange={onOpenChange} title="Install the Relay agent" size="lg" submitLabel="Done" disableUntilComplete confirmDiscard={false} form={{ defaultValues: EMPTY_FLOW }} onSubmit={() => undefined}>
      <AgentSnippetStep app={app} code={session.code} />
    </FormDialog>
  )
}

/**
 * The "Delivery agent" card and its button: pressing it runs \`generateAgentSnippet\` FIRST and
 * opens the dialog only on success; the button is a field-less form so the engine owns pending + error.
 */
function DeliveryAgentCard({ app, hasChannels }: { app: AppApi; hasChannels: () => boolean }) {
  const trigger = useForm<Record<string, never>>({ defaultValues: {} })
  const [session, setSession] = useState<AgentSession | null>(null)
  const [open, setOpen] = useState(false)
  const generate = async (): Promise<void> => {
    try {
      const res = await app.server.generateAgentSnippet()
      // switch flow only when there are channels and the agent is not installed yet; frozen while open
      setSession({ code: res.snippet, switchFlow: hasChannels() && !app.profile.agentInstalled })
      setOpen(true)
    } catch (err) {
      // the server's own words decide which toast (mapErrors' default source reads errors[0].message)
      const serverMessage = mapErrors(err)?.message ?? ""
      const message = serverMessage.toLowerCase().includes(VERIFYING_MATCH) ? MSG.verifying : MSG.generateFailed
      app.toast.error(message)
      throw new SubmitError({ message }, { cause: err })
    }
  }
  const connected = app.profile.agentActive
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-3">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold">Delivery agent</h3>
        <Badge variant={connected ? "default" : "outline"}>{connected ? "Running" : "Not running"}</Badge>
      </div>
      <p className="text-[13px] text-muted-foreground">
        Replace one hook per channel with a single agent. Finish setting up your channels (email, chat, SMS) first, then retire the old hooks from your workspace settings.
      </p>
      <Form form={trigger} onSubmit={generate} layout="none" className="flex items-center justify-end gap-3">
        <Form.Status className="text-[13px]" error={(e) => <span className="text-destructive">{e.message}</span>} />
        <Form.Submit className="h-7 rounded-md border px-3 text-[13px] font-medium hover:bg-muted">Get agent snippet</Form.Submit>
      </Form>
      {session && session.switchFlow ? <SwitchToAgentDialog app={app} session={session} open={open} onOpenChange={setOpen} /> : null}
      {session && !session.switchFlow ? <InstallAgentDialog app={app} session={session} open={open} onOpenChange={setOpen} /> : null}
    </div>
  )
}

// ── notification rules ──────────────────────────────────────────────

/**
 * The page's values: the real input's switches, plus three UI switches that are views of a
 * non-boolean value (\`summaryOnly\` ↔ \`payloadDetail\`, \`escalationOn\` ↔ \`escalationChannelId\`,
 * \`digestOn\` ↔ \`digestMode\`); \`toInput\` maps them to the real input and the autosave adapter
 * picks the real mutation per path.
 */
interface RuleValues {
  showOnTickets: boolean
  summaryOnly: boolean
  digestOn: boolean
  digestMode: string | null
  batchLargeAlerts: boolean
  batchSize: number
  alertOnReassign: boolean
  escalationOn: boolean
  escalationChannelId: string
  muteBots: boolean
  mergeDuplicates: boolean
  agentLogging: boolean
  deliveryLogging: boolean
  // carried unchanged into every save, as the whole-input mutation needs
  redactPayloads: boolean
  agentInstalled: boolean
}

function ruleDefaults(p: AccountProfile): RuleValues {
  return {
    showOnTickets: p.showOnTickets,
    summaryOnly: p.payloadDetail === PAYLOAD_DETAILS.Summary,
    digestOn: p.digestMode !== null && p.digestMode !== DIGEST_MODES.Instant,
    digestMode: p.digestMode,
    batchLargeAlerts: p.batchLargeAlerts,
    batchSize: p.batchSize,
    alertOnReassign: p.alertOnReassign,
    escalationOn: p.escalationChannelId !== "",
    escalationChannelId: p.escalationChannelId,
    muteBots: p.muteBots,
    mergeDuplicates: p.mergeDuplicates,
    agentLogging: p.agentLogging,
    deliveryLogging: p.deliveryLogging,
    redactPayloads: p.redactPayloads,
    agentInstalled: p.agentInstalled,
  }
}

/** The whole \`AlertSettingsInput\` from the page's values (every field is sent on each toggle). */
function toInput(v: RuleValues): AlertSettingsInput {
  return {
    showOnTickets: v.showOnTickets,
    payloadDetail: v.summaryOnly ? PAYLOAD_DETAILS.Summary : PAYLOAD_DETAILS.Full,
    batchLargeAlerts: v.batchLargeAlerts,
    batchSize: v.batchSize,
    alertOnReassign: v.alertOnReassign,
    escalationChannelId: v.escalationOn ? v.escalationChannelId : "",
    muteBots: v.muteBots,
    mergeDuplicates: v.mergeDuplicates,
    agentLogging: v.agentLogging,
    deliveryLogging: v.deliveryLogging,
    redactPayloads: v.redactPayloads,
    agentInstalled: v.agentInstalled,
  }
}

/** Paths saved through \`setDigestMode\` instead of the settings input. */
const DIGEST_PATHS: readonly string[] = ["digestOn", "digestMode"]

const rv = kit<RuleValues>()

// turning a "view" switch off clears the value it stands for
const rulesModel = defineForm<RuleValues>()(() => ({
  fields: [],
  effects: [
    { on: ["escalationOn"], when: rv.c.eq("escalationOn", false), do: [{ set: "escalationChannelId", to: "" }] },
    { on: ["digestOn"], when: rv.c.eq("digestOn", false), do: [{ set: "digestMode", to: DIGEST_MODES.Instant }] },
  ],
}))

const DIGEST_LABELS: Readonly<Record<string, string>> = {
  [DIGEST_MODES.Hourly]: "Batched into an hourly digest.",
  [DIGEST_MODES.Daily]: "Batched into a daily digest.",
  [DIGEST_MODES.Weekly]: "Batched into a weekly digest.",
}

const DIGEST_OPTIONS: ChoiceOption[] = [
  { value: DIGEST_MODES.Hourly, label: "Hourly", description: "Low-priority alerts collected for an hour and sent together. Good for busy queues where a ping per event would be noise." },
  { value: DIGEST_MODES.Daily, label: "Daily", description: "One summary each morning. A fit for teams that review alerts once a day rather than react to each one." },
  { value: DIGEST_MODES.Weekly, label: "Weekly", description: "A single weekly roundup. Best for trend-watching stakeholders who never act on individual alerts." },
]

/** Which settings dialog is open (one at a time). */
type RulesModal = "batch" | "escalation" | "digest" | null

/** One rule row: the switch, its badge and tooltip, the description, and an optional edit button. */
function RuleRow({ name, title, description, tooltip, badge, needsPlan, confirm, children }: { name: keyof RuleValues; title: string; description: string; tooltip: string; badge?: string; needsPlan?: boolean; confirm?: (next: unknown) => boolean; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b py-2 last:border-b-0">
      <SwitchField
        name={name}
        // app context: the account's plan, not a form value
        disabledIf={needsPlan ? rv.c.not(rv.c.ctx("hasPaidPlan")) : undefined}
        confirm={confirm}
        label={
          <span className="flex items-center gap-2">
            {title}
            {badge ? <Badge variant="secondary">{badge}</Badge> : null}
            <span className="cursor-help text-muted-foreground" title={tooltip} aria-label={tooltip}>
              ⓘ
            </span>
          </span>
        }
        // the switch renders its own description, linked by aria-describedby (N1)
        description={description}
      />
      {children}
    </div>
  )
}

/** The edit button under a switch that is on. */
function EditValue({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <Button type="button" size="sm" variant="outline" className="h-6 w-fit px-2 text-[12px]" onClick={onClick}>
      {label} ✎
    </Button>
  )
}

/** The page's two save paths, shared by the autosave adapter and the dialogs. */
interface RulesApi {
  saveInput: (values: RuleValues) => Promise<void>
  saveDigest: (mode: string | null) => Promise<void>
}

/** A server failure as the form's submit error: the server's own message. */
async function serverCall(run: () => Promise<void>): Promise<void> {
  try {
    await run()
  } catch (err) {
    throw mapErrors(err) ?? err
  }
}

/**
 * The three settings dialogs: each edits ONE value in a scratch store. Save runs the mutation
 * FIRST and commits into the page only on success; a failure stays in the open dialog.
 */
function RulesModals({ form, api, modal, setModal }: { form: FormStore<RuleValues>; api: RulesApi; modal: RulesModal; setModal: (m: RulesModal) => void }) {
  const batch = useValue<number>("batchSize")
  const channelId = useValue<string>("escalationChannelId")
  const digest = useValue<string | null>("digestMode")
  const close = (open: boolean): void => {
    if (!open) setModal(null)
  }
  return (
    <>
      <FormDialog<{ batchSize: number }, void>
        open={modal === "batch"}
        onOpenChange={close}
        title="Set max alerts per batch"
        submitLabel="Save"
        form={{ defaultValues: { batchSize: batch } }}
        onSubmit={async (v) => {
          await serverCall(() => api.saveInput({ ...form.getValues(), batchSize: v.batchSize }))
          commitSubForm(form, "batchSize", v.batchSize)
          // the server has it: mark it saved, so the next toggle compares against it
          form.commit("batchSize")
        }}
      >
        <NumberField name="batchSize" label="By default a batch holds up to 25 alerts. You can change the cap at any time." placeholder="Alerts per batch" />
      </FormDialog>
      <FormDialog<{ escalationChannelId: string }, void>
        open={modal === "escalation"}
        onOpenChange={close}
        title="Set escalation channel"
        submitLabel="Save"
        form={{ defaultValues: { escalationChannelId: channelId } }}
        onSubmit={async (v) => {
          await serverCall(() => api.saveInput({ ...form.getValues(), escalationOn: true, escalationChannelId: v.escalationChannelId }))
          // the switch reads "on" exactly when a channel is set
          commitSubForm(form, "escalationChannelId", v.escalationChannelId, [{ path: "escalationOn", value: v.escalationChannelId !== "" }])
          form.commit("escalationChannelId")
          form.commit("escalationOn")
        }}
      >
        <TextField name="escalationChannelId" label="Escalation channel" placeholder="e.g. #on-call" />
      </FormDialog>
      <FormDialog<{ digestMode: string | null }, void>
        open={modal === "digest"}
        onOpenChange={close}
        title="Digest schedule"
        description="Choose how often low-priority alerts are collected and delivered together. Urgent alerts are always sent right away."
        submitLabel="Save"
        size="lg"
        form={{ defaultValues: { digestMode: digest } }}
        onSubmit={async (v) => {
          await serverCall(() => api.saveDigest(v.digestMode))
          commitSubForm(form, "digestMode", v.digestMode, [{ path: "digestOn", value: v.digestMode !== null && v.digestMode !== DIGEST_MODES.Instant }])
          form.commit("digestMode")
          form.commit("digestOn")
        }}
      >
        <RadioCardsField name="digestMode" label="Schedule" options={DIGEST_OPTIONS} columns={1} />
      </FormDialog>
    </>
  )
}

/** The rows' edit buttons, labelled with the current values. */
function BatchButton({ onClick }: { onClick: () => void }) {
  const n = useValue<number>("batchSize")
  return <EditValue label={\`Max alerts per batch: \${String(n || DEFAULT_BATCH_SIZE)}\`} onClick={onClick} />
}

function EscalationButton({ onClick }: { onClick: () => void }) {
  const id = useValue<string>("escalationChannelId")
  return <EditValue label={\`Escalation channel: \${id}\`} onClick={onClick} />
}

function DigestButton({ onClick }: { onClick: () => void }) {
  const m = useValue<string | null>("digestMode")
  return <EditValue label={(m !== null ? DIGEST_LABELS[m] : undefined) ?? "Choose a schedule"} onClick={onClick} />
}

/** Notification rules: every switch saves on change; two switches open a dialog instead of turning on. */
function NotificationRulesCard({ app, hasPaidPlan }: { app: AppApi; hasPaidPlan: boolean }) {
  const [modal, setModal] = useState<RulesModal>(null)
  const api: RulesApi = {
    async saveInput(values) {
      await app.server.updateAlertSettings({ input: toInput(values) })
      app.refetch()
    },
    async saveDigest(mode) {
      await app.server.setDigestMode({ digestMode: mode })
      app.refetch()
    },
  }
  const form = useForm<RuleValues>({
    defaultValues: ruleDefaults(app.profile),
    model: rulesModel,
    context: { hasPaidPlan },
    autosave: {
      on: "change",
      debounceMs: 0,
      // the autosave adapter: one switch → the real mutation with the WHOLE input;
      // a failure rejects, so the field shows "Couldn't save · Retry"
      save: async (_patch, { path, values }) => {
        // switching a "view" switch ON only opens its dialog, which saves itself
        if ((path === "digestOn" && values.digestOn) || (path === "escalationOn" && values.escalationOn)) return
        if (DIGEST_PATHS.includes(path)) await api.saveDigest(values.digestMode)
        else await api.saveInput(values)
      },
    },
  })
  // the two "view" switches: turning ON opens the dialog and leaves the switch off — the dialog's Save turns it on
  const openInstead = (m: RulesModal) => (next: unknown) => {
    if (next !== true) return true
    setModal(m)
    return false
  }
  return (
    <Form form={form} layout="none" className="flex flex-col gap-3">
      <section className="rounded-lg border px-3 py-1">
        <h3 className="pt-2 text-sm font-semibold">Content &amp; Privacy</h3>
        <RuleRow
          name="showOnTickets"
          title="Show alert history on ticket pages"
          needsPlan
          tooltip="Alert history is always available in the Activity view. This also shows it next to each ticket."
          description="An optional extra. Lists the alerts a ticket triggered right on the ticket page. Turning it off changes nothing else."
        />
        <RuleRow
          name="summaryOnly"
          title="Send summaries only"
          tooltip="By default every alert carries the full event payload so responders have the context they need."
          description="Keep this off unless you have a reason to trim alerts. When on, alerts carry a one-line summary and leave out the payload, requester and attachments."
        />
        <RuleRow
          name="digestOn"
          title="Digest low-priority alerts"
          confirm={openInstead("digest")}
          tooltip="Some teams want every alert as it happens, others prefer a quieter batched summary."
          description="By default every alert is sent immediately. Turn this on to collect low-priority alerts into a scheduled digest."
        >
          <When if={rv.c.eq("digestOn", true)}>
            <DigestButton onClick={() => setModal("digest")} />
          </When>
        </RuleRow>
      </section>
      <section className="rounded-lg border px-3 py-1">
        <h3 className="pt-2 text-sm font-semibold">Delivery</h3>
        <RuleRow
          name="batchLargeAlerts"
          title="Split large alert bursts"
          tooltip="Hundreds of alerts in one message can be truncated or dropped by chat tools."
          description="When many alerts fire at once, this splits them into batches of at most 25 per message."
        >
          <When if={rv.c.eq("batchLargeAlerts", true)}>
            <BatchButton onClick={() => setModal("batch")} />
          </When>
        </RuleRow>
        <RuleRow
          name="alertOnReassign"
          title="Notify on reassignment"
          tooltip="Without this, the new assignee only finds out when they next open their queue."
          description="When a ticket moves to another person or team, this sends a separate alert to the new assignee."
        />
        <RuleRow
          name="escalationOn"
          title="Escalation channel"
          confirm={openInstead("escalation")}
          tooltip="Unanswered urgent alerts are re-sent to this channel after the response window passes."
          description="Name a channel that receives urgent alerts nobody has acknowledged in time."
        >
          <When if={rv.c.eq("escalationOn", true)}>
            <EscalationButton onClick={() => setModal("escalation")} />
          </When>
        </RuleRow>
      </section>
      <section className="rounded-lg border px-3 py-1">
        <h3 className="pt-2 text-sm font-semibold">Noise &amp; Diagnostics</h3>
        <RuleRow name="muteBots" title="Mute bot activity" badge="Enable only if needed" tooltip="Automations and bots can trigger alerts on every update they make." description="If automated accounts flood your channels with alerts, turn this on to ignore events they cause." />
        <RuleRow name="mergeDuplicates" title="Merge duplicate alerts" badge="Enable only if needed" tooltip="Two rules matching the same event each send an alert by default." description="If overlapping rules send the same alert twice, turn this on to send it once." />
        <RuleRow name="agentLogging" title="Agent diagnostic logging" badge="Developer" tooltip="Covers the part of the agent running on your host." description="Writes detailed activity logs for the delivery agent installed on your workspace host." />
        <RuleRow name="deliveryLogging" title="Delivery diagnostic logging" badge="Developer" tooltip="Shows each outgoing request in the delivery log." description="Writes detailed logs for every message the service sends to a channel." />
      </section>
      <RulesModals form={form} api={api} modal={modal} setModal={setModal} />
    </Form>
  )
}

// ── demo chrome ─────────────────────────────────────────────────────

/** The knobs the chrome flips: the server's branches plus the app-state input the page reads. */
interface DemoKnobs extends ServerKnobs {
  hasChannels: boolean
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
/** One simulated server, knobs form and profile shared by both cards (they are one page). */
export function useNotificationDemo() {
  // demo-chrome: the simulated server's branches and the app state the page reads, as a small form of its own
  const knobs = useForm<DemoKnobs>({ defaultValues: { ...DEFAULT_KNOBS, hasChannels: true } })
  const [server] = useState(() => createServer(() => knobs.getValues()))
  const [profile, setProfile] = useState(() => server.me())
  // demo-chrome: a toaster of the page's own, so the toasts draw without an app-wide <Toaster />
  const [toast] = useState(() => createToaster())
  const app: AppApi = { server, profile, refetch: () => setProfile(server.me()), toast }
  // demo-chrome: the account's plan, read by a rule through app context
  const [hasPaidPlan, setHasPaidPlan] = useState(true)
  return { knobs, server, profile, app, hasPaidPlan, setHasPaidPlan }
}

/** What {@link useNotificationDemo} returns. */
export type NotificationDemo = ReturnType<typeof useNotificationDemo>

export function DeliveryAgentExample({ demo }: { demo: NotificationDemo }) {
  const { knobs, profile, app } = demo
  return (
    <TwoCol>
      <DeliveryAgentCard app={app} hasChannels={() => knobs.getValues().hasChannels} />
      <Toaster toaster={app.toast} />
      <div className="flex min-w-0 flex-col gap-3">
        <SidePanel title="Simulated server" meta="knobs">
          <Form form={knobs} layout="none" className="flex flex-col gap-1.5 p-3">
            <SwitchField name="hasChannels" label="Workspace has channels (switch flow)" />
            <SwitchField name="channelVerifying" label="A channel is still verifying" />
            <SwitchField name="routeAllFails" label="routeAllThroughAgent fails" />
            <SwitchField name="agentDetected" label="Agent check finds the agent" />
            <SwitchField name="agentCheckDown" label="Agent check request fails" />
            <SwitchField name="settingsUpdateFails" label="Settings update fails" />
          </Form>
        </SidePanel>
        <SidePanel title="Profile" meta="server state">
          <div className="flex flex-col gap-0.5 p-3 font-mono text-[12px]">
            <span>agentInstalled: {String(profile.agentInstalled)}</span>
            <span>agentActive: {String(profile.agentActive)}</span>
            <span>escalationChannelId: {JSON.stringify(profile.escalationChannelId)}</span>
            <span>digestMode: {JSON.stringify(profile.digestMode)}</span>
            <span>payloadDetail: {JSON.stringify(profile.payloadDetail)}</span>
          </div>
        </SidePanel>
      </div>
    </TwoCol>
  )
}

export function NotificationRulesExample({ demo }: { demo: NotificationDemo }) {
  const { server, app, hasPaidPlan, setHasPaidPlan } = demo
  return (
    <TwoCol>
      <NotificationRulesCard app={app} hasPaidPlan={hasPaidPlan} />
      <div className="flex min-w-0 flex-col gap-3">
        <SidePanel title="Server log" meta="requests sent">
          <PanelLog empty="No requests yet.">
            {server.log().map((line, i) => (
              // append-only log rendered newest first: the line text plus its position is unique
              <div key={\`\${String(i)}-\${line}\`} className="break-all font-mono text-[11px]">
                {line}
              </div>
            ))}
          </PanelLog>
        </SidePanel>
        <SidePanel title="App context" meta="c.ctx(…)">
          <label className="flex items-center justify-between gap-3 p-3 text-[13px]">
            <span>Has a paid plan (ticket-page history needs one)</span>
            <Switch checked={hasPaidPlan} onCheckedChange={setHasPaidPlan} aria-label="Has a paid plan" />
          </label>
        </SidePanel>
      </div>
    </TwoCol>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>a(()=>import(`./notification-rules-BujwbK7E.js`),[]));function Me(){let e=ke();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(r,{title:`Delivery agent + notification rules (real-world flow)`,children:[`An invented alerting app's “Delivery agent” card and Notification rules page, built on the public API against a simulated server. The button runs `,(0,k.jsx)(`code`,{children:`generateAgentSnippet`}),` before the dialog opens; the switch flow is a three-step `,(0,k.jsx)(`code`,{children:`Wizard`}),` in a `,(0,k.jsx)(`code`,{children:`FormDialog`}),`; the “I added the snippet” checkbox takes the agent check's answer through `,(0,k.jsx)(`code`,{children:`confirm`}),`; every rule switch autosaves the whole input, and two switches open a dialog instead of turning on.`]}),(0,k.jsx)(D,{n:1,title:`Delivery agent`,blurb:`Flip the server knobs on the right: a channel still verifying, the agent not detected yet, the reroute mutation failing.`,code:$,children:(0,k.jsx)(Ae,{demo:e})}),(0,k.jsx)(D,{n:2,title:`Notification rules`,blurb:`Each switch saves on change. Digest and escalation open a dialog; Cancel leaves the switch off.`,code:$,children:(0,k.jsx)(je,{demo:e})})]})}export{Me as component};