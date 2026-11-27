import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CcCDBWVn.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{Ec as r,Uc as i,_i as a,ri as o,zc as s}from"./index-BZuUy872.js";import{t as c}from"./badge-zOMNRv4l.js";import{W as l}from"./messages-CylclMLI.js";import{A as u,Y as d,c as f,f as p,g as m,h}from"./field-config-53O_jYuu.js";import{a as g,f as _,r as v,t as y,y as b}from"./fields-DyVcPE0c.js";import{t as ee}from"./submit-pipeline-hDJS6vqr.js";import{i as x,n as S}from"./wizard-Bcle_sMB.js";import{n as C,t as w}from"./wizard-chrome-CqjVcSJ3.js";import{a as T}from"./choice-BX1Eh6ua.js";import{t as E}from"./display-DkvThEqp.js";import{t as te}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";var D=e(i(),1),O=s();function k(e){return new Promise(t=>setTimeout(t,e))}var A=Object.values({ClStd:`CL-STANDARD`,ClSrc:`CL-SOURCE-OTHER`,ClSso:`CL-SSO`,ClStdDns:`CL-STANDARD-LEGACY-DNS`,ClSrcDns:`CL-SOURCE-OTHER-LEGACY-DNS`,ClSsoDns:`CL-SSO-LEGACY-DNS`,ProStd:`PRO-STANDARD`,ProSrc:`PRO-SOURCE-OTHER`,ProSso:`PRO-SSO`,New:`NEW-ACCOUNT`,ProVerified:`PRO-DOMAIN-VERIFIED`}),ne=`OTHER`,j=[{label:`Ticketly`,value:`TICKETLY`},{label:`SupportHive`,value:`SUPPORTHIVE`},{label:`Deskpad`,value:`DESKPAD`},{label:`HelpNest`,value:`HELPNEST`},{label:`CaseFlow`,value:`CASEFLOW`},{label:`Inboxly`,value:`INBOXLY`},{label:`QueueCraft`,value:`QUEUECRAFT`},{label:`ServiceLoop`,value:`SERVICELOOP`},{label:`Other`,value:`OTHER`}];function re(e){return j.find(t=>t.label===e)?.value??`OTHER`}var ie=[`calendar`,`mailbox`,`domain`],M={"CL-STANDARD":[`routing`,`domainV1`],"CL-SOURCE-OTHER":[`routing`,`domainV1`,`source`],"CL-SSO":[`routing`,`sso`,`domainV1`],"CL-STANDARD-LEGACY-DNS":[`domainV1`],"CL-SOURCE-OTHER-LEGACY-DNS":[`domainV1`,`source`],"CL-SSO-LEGACY-DNS":[`sso`,`domainV1`],"PRO-STANDARD":[`domainV1`,`widget`],"PRO-SOURCE-OTHER":[`domainV1`,`widget`,`source`],"PRO-SSO":[`widget`,`sso`,`domainV1`],"NEW-ACCOUNT":ie,"PRO-DOMAIN-VERIFIED":ie},N={"CL-STANDARD":`Classic`,"CL-SOURCE-OTHER":`Classic, imported`,"CL-SSO":`Classic with SSO`,"CL-STANDARD-LEGACY-DNS":`Classic - legacy DNS`,"CL-SOURCE-OTHER-LEGACY-DNS":`Classic, imported - legacy DNS`,"CL-SSO-LEGACY-DNS":`Classic with SSO - legacy DNS`,"PRO-STANDARD":`Pro`,"PRO-SOURCE-OTHER":`Pro, imported`,"PRO-SSO":`Pro with SSO`,"NEW-ACCOUNT":`New account`,"PRO-DOMAIN-VERIFIED":``},ae=e=>e.startsWith(`CL-`),P=e=>e!==`PRO-DOMAIN-VERIFIED`&&e!==`NEW-ACCOUNT`,oe=e=>e===`CL-SSO-LEGACY-DNS`||e===`CL-SOURCE-OTHER-LEGACY-DNS`||e===`CL-STANDARD-LEGACY-DNS`;function se(e){return e.startsWith(`CL-`)?`The new workspace layout is optional for classic accounts: your current setup keeps working as it is. If you want to try the new layout, the steps below move your settings over. Afterwards you can re-enable your channels one at a time. Questions? Reach out any time.`:e.startsWith(`PRO-`)&&e!==`PRO-DOMAIN-VERIFIED`?`Your existing help widget keeps working with the new workspace, so nothing breaks today. Once the steps below are done, update the widget embed so it picks up the new features, or switch to one of the built-in channels instead.`:null}var ce=/^WGT-.{4,8}$/,F=`Widget ID format is not valid`,le=class extends Error{response;constructor(e){super(`${e[0]?.message??`GraphQL Error`}: ${JSON.stringify({response:{errors:e}})}`),this.name=`ClientError`,this.response={errors:e,data:null,status:200}}},ue=[`onboardingSetSource`,`routingImportRules`,`onboardingSetStep`,`accountRemoveLegacyRecords`],I=`stand-in server error (a real backend sends its own text)`,de=[{id:141210959999,name:`help.acme.test`,role:`primary`},{id:14121096e4,name:`staging-help.acme.test`,role:`staging`}],L={onboardingStep:0,workspaceSlug:`acme`,grantedScopes:`sites:read,dns:write`,source:null,otherSourceName:null,ssoDomainId:null,domainVerified:!1};function fe(){let e={origin:`CL-SSO`,me:L,widgetId:`WGT-AB12CD3`,recordFoundOnDomain:!1,failOnce:[],log:[]},t=new Set,n=new Map,r=n=>{e={...e,...n};for(let e of t)e()},i=t=>r({log:[...e.log,t]}),a=t=>{if(e.failOnce.includes(t))throw r({failOnce:e.failOnce.filter(e=>e!==t)}),i(`${t} → errors[0].message`),new le([{message:I,path:[t]}])},o=(e,t)=>{let r=n.get(e);if(r)return r;let i=t();return n.set(e,i),i};return{subscribe:e=>(t.add(e),()=>{t.delete(e)}),snapshot:()=>e,setOrigin:e=>r({origin:e}),setRecordFoundOnDomain:e=>r({recordFoundOnDomain:e}),armFailure:(t,n)=>r({failOnce:n?[...e.failOnce.filter(e=>e!==t),t]:e.failOnce.filter(e=>e!==t)}),reset:()=>r({me:L,recordFoundOnDomain:!1,failOnce:[],log:[]}),async accountDetectOrigin(){return await k(250),i(`accountDetectOrigin → "${e.origin}"`),oe(e.origin)&&i(`routingImportRules(input: { onCreate: false, onAssign: false, onClose: false }) (fired on load)`),e.me.grantedScopes?.split(`,`).includes(`dns:write`)||i(`accountReauthUrl → opens the re-auth URL in a new tab`),{accountDetectOrigin:e.origin}},me:()=>e.me,async siteList(){return await k(200),{siteList:[...de]}},async widgetProvision(){return await k(200),i(`widgetProvision → true`),{widgetProvision:!0}},async widgetGetPrimary(){return await k(150),{widgetGetPrimary:{widgetId:e.widgetId}}},ssoGenerateConfig(e){return o(`sso:${e}`,async()=>(await k(400),`<!-- Beacon SSO -->\n<meta name="beacon-sso" content="domain=${e}; mode=redirect" />`))},widgetGetEmbedScript(e){return o(`widget:${e}`,async()=>(await k(400),`<!-- Beacon help widget -->\n<script async src="https://cdn.beacon.example/widget.js" data-widget="${e}"><\/script>`))},async siteSettingsLink(t){await k(150);let n=`https://beacon.example/${e.me.workspaceSlug??``}/sites/${t}/domain`;return i(`siteSettingsLink(siteId: "${t}") → opened in a new tab`),{siteSettingsLink:n}},async accountCheckDomain(){await k(400);let t=e.recordFoundOnDomain;return r({me:{...e.me,domainVerified:t}}),i(`accountCheckDomain → { domainVerified: ${String(t)} }`),{accountCheckDomain:{domainVerified:t}}},async routingImportRules(e){return await k(400),a(`routingImportRules`),i(`routingImportRules(input: ${JSON.stringify(e)}) → true`),{routingImportRules:!0}},async onboardingSetSource(t,n){await k(400),a(`onboardingSetSource`);let o=j.find(e=>e.value===t)?.label??t;return r({me:{...e.me,source:o,otherSourceName:n}}),i(`onboardingSetSource(source: ${t}, otherSourceName: ${JSON.stringify(n)})`),{onboardingSetSource:t}},async onboardingSetStep(t){return await k(250),a(`onboardingSetStep`),r({me:{...e.me,onboardingStep:t}}),i(`onboardingSetStep(step: ${t}) → ${t}`),{onboardingSetStep:t}},async accountRemoveLegacyRecords(){return await k(400),a(`accountRemoveLegacyRecords`),i(`accountRemoveLegacyRecords → true`),{accountRemoveLegacyRecords:!0}}}}function pe(e){return`${e.name} (${e.role===`primary`?`live site`:e.role}) (${e.id})`}var{c:R,v:z,e:B}=d(),V=d(),H=d(),U=[{value:`true`,label:`True`},{value:`false`,label:`False`}],me=j.map(e=>({value:e.value,label:e.label})),he=5e3,ge=3,W=4e3,G={routing:`Review your imported routing rules`,sso:`Add the single sign-on config to your login page`,widget:`Embed the help widget on your site`,source:`Which help desk did you use before?`,domain:`Verify your help-center domain`,domainV1:`Verify your help-center domain`,calendar:`Connect your team calendar`,mailbox:`Connect your support mailbox`},_e={routing:`https://docs.beacon.example/routing-rules`,sso:`https://docs.beacon.example/single-sign-on`,widget:`https://docs.beacon.example/help-widget`,source:`https://docs.beacon.example/importing`},K=fe();async function q(){let e=await K.accountDetectOrigin(),t=A.find(t=>t===e.accountDetectOrigin)??`NEW-ACCOUNT`,{siteList:n}=await K.siteList(),r=``;return M[t].includes(`widget`)&&(await K.widgetProvision(),r=(await K.widgetGetPrimary()).widgetGetPrimary.widgetId??``),{origin:t,me:K.me(),sites:n,widgetId:r}}var J;function ve(){return J??=q(),J}function ye(e){return{routing:{onCreate:`false`,onAssign:`false`,onClose:`false`},routingSaved:!1,sso:{domainId:e.me.ssoDomainId??``,pasted:!1,oldRuleOff:!1},ssoDone:!1,widget:{widgetId:e.widgetId,added:!1},widgetDone:!1,source:{source:re(e.me.source),otherSourceName:e.me.otherSourceName??``},domain:{siteId:``,verified:!1}}}function be(e){let t=b(e)?.message??``;return t.charAt(0).toUpperCase()+t.slice(1)}function xe(){let[e,t]=(0,D.useState)([]);return{toasts:e,push:e=>{let n=Date.now()+Math.random();t(t=>[...t,{...e,id:n}]),setTimeout(()=>t(e=>e.filter(e=>e.id!==n)),W)}}}function Se({toasts:e}){return(0,O.jsx)(`div`,{role:`status`,"aria-live":`polite`,className:`pointer-events-none fixed end-4 bottom-4 z-50 flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-2`,children:e.map(e=>(0,O.jsxs)(`div`,{"data-toast":e.tone,className:e.tone===`critical`?`rounded-md border border-destructive/40 bg-background px-3 py-2 text-[13px] shadow-md`:`rounded-md border border-emerald-500/40 bg-background px-3 py-2 text-[13px] shadow-md`,children:[(0,O.jsx)(`p`,{className:e.tone===`critical`?`font-medium text-destructive`:`font-medium text-emerald-700 dark:text-emerald-400`,children:e.title}),(0,O.jsx)(`p`,{className:`text-muted-foreground`,children:e.message})]},e.id))})}function Y({id:e,children:t,actions:n,skip:r}){let i=_e[e];return(0,O.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-lg border p-3`,children:[(0,O.jsx)(`h3`,{className:`text-sm font-semibold`,children:G[e]}),t,(0,O.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,O.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[n,i?(0,O.jsx)(`a`,{className:`text-[13px] text-primary underline-offset-2 hover:underline`,href:i,target:`_blank`,rel:`noreferrer`,children:`Learn more`}):null]}),r]})]})}function X(e){let t=x();return{advance:async()=>{let{error:n}=await t.next();n&&e(n)},busy:t.pending}}function Z({disabled:e}){let t=x();return(0,O.jsx)(o,{type:`button`,size:`sm`,variant:`outline`,disabled:e||t.pending,onClick:()=>t.skip(),children:`Skip`})}function Ce({what:e}){return(0,O.jsxs)(`p`,{"data-not-supported":``,className:`rounded-md border border-dashed border-amber-500/50 bg-amber-500/5 px-2.5 py-1.5 text-[12px] text-amber-800 dark:text-amber-300`,children:[(0,O.jsx)(`span`,{className:`font-medium`,children:`Not yet supported:`}),` `,e]})}function we({text:e}){let[t,n]=(0,D.useState)(!1);return(0,O.jsx)(o,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>{navigator.clipboard?.writeText(e).catch(()=>void 0),n(!0),setTimeout(()=>n(!1),W)},children:t?`Copied`:`Copy to clipboard`})}function Te({load:e,caption:t}){let n=(0,D.use)(e);return(0,O.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,O.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-[13px] font-medium`,children:`Copy the code block`}),(0,O.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:t})]}),(0,O.jsx)(we,{text:n})]}),(0,O.jsx)(`pre`,{className:`max-h-40 overflow-auto rounded-md border bg-muted p-2 font-mono text-[11px] whitespace-pre-wrap break-all`,dir:`ltr`,children:n}),(0,O.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:`Stand-in snippet: a real server returns its own string.`})]})}function Q({load:e,caption:t}){return(0,O.jsx)(D.Suspense,{fallback:(0,O.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Generating the snippet…`}),children:(0,O.jsx)(Te,{load:e,caption:t})})}function $({steps:e}){return(0,O.jsx)(`ol`,{className:`list-decimal space-y-1 ps-5 text-[13px]`,children:e.map((e,t)=>(0,O.jsx)(`li`,{children:e},t))})}function Ee({form:e,report:t}){let{advance:n,busy:r}=X(t);return(0,O.jsxs)(Y,{id:`routing`,actions:(0,O.jsxs)(_,{parent:e,scope:`routing`,empty:{onCreate:`false`,onAssign:`false`,onClose:`false`},title:`Review your imported routing rules`,trigger:(0,O.jsx)(o,{type:`button`,size:`sm`,disabled:r,children:r?`Saving…`:`Start now`}),submitLabel:`Save`,set:()=>[{path:`routingSaved`,value:!0}],onCommit:()=>void n(),children:[(0,O.jsx)($,{steps:[`Open Settings › Routing in your old workspace.`,(0,O.jsxs)(O.Fragment,{children:[`Find the rule group named `,(0,O.jsx)(`b`,{children:`Default queue`}),`.`]}),`Open its notification section.`,`Compare the switches with the ones below.`,`Tell us which events the old rules notified on.`]}),(0,O.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Pick ‘True’ or ‘False’ to match what you see, then click Save.`}),(0,O.jsx)(T,{name:`onCreate`,label:`ticket_created`,options:U}),(0,O.jsx)(T,{name:`onAssign`,label:`ticket_assigned`,options:U}),(0,O.jsx)(T,{name:`onClose`,label:`ticket_closed`,options:U})]}),children:[(0,O.jsx)(`p`,{className:`text-[13px]`,children:`Click “Start now” and follow the steps.`}),(0,O.jsx)(E,{name:`routingSaved`,label:`Status`,tone:`inline`,render:e=>e===!0?`Saved`:`Not saved yet`,rules:[z.oneOf([!0],`Save the routing review first`)]})]})}function De({form:e,report:t,classic:n,site:r}){let{advance:i,busy:a}=X(t);return(0,O.jsxs)(Y,{id:`sso`,actions:(0,O.jsx)(_,{parent:e,scope:`sso`,empty:{domainId:``,pasted:!1,oldRuleOff:!1},title:`Add the single sign-on config to your login page`,trigger:(0,O.jsx)(o,{type:`button`,size:`sm`,disabled:a,children:`Start now`}),size:`lg`,submit:!1,form:{context:{classic:n}},set:()=>[{path:`ssoDone`,value:!0}],onCommit:()=>void i(),children:(0,O.jsxs)(S,{submitLabel:`Save`,progress:(0,O.jsx)(C,{}),nav:(0,O.jsx)(w,{}),children:[(0,O.jsxs)(S.Step,{id:`sso-id`,label:`Domain ID`,children:[(0,O.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Your old workspace used single sign-on. Check your identity provider's domain ID and add it if it's missing.`}),(0,O.jsx)(g,{name:`domainId`,label:`Domain ID`,placeholder:`Paste it here`,required:!0,dir:`ltr`})]}),(0,O.jsxs)(S.Step,{id:`sso-paste`,label:`Paste the config`,children:[r?(0,O.jsxs)(`p`,{className:`rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,children:[`Your live site: `,(0,O.jsx)(`b`,{children:r.name})]}):null,(0,O.jsx)(E,{name:`domainId`,label:`Sign-on config`,tone:`inline`,className:`flex-col items-stretch`,render:e=>typeof e==`string`&&e!==``?(0,O.jsx)(Q,{load:K.ssoGenerateConfig(e),caption:`Your sign-on config is ready!`}):null}),(0,O.jsx)($,{steps:[`Copy the code block above.`,(0,O.jsxs)(O.Fragment,{children:[`Open `,(0,O.jsx)(`b`,{children:`Help center › Appearance`}),`.`]}),(0,O.jsxs)(O.Fragment,{children:[`Choose `,(0,O.jsx)(`b`,{children:`Edit layout`}),` on the live site.`]}),(0,O.jsxs)(O.Fragment,{children:[`Paste the whole block inside the <head> of the `,(0,O.jsx)(`b`,{children:`login`}),` template.`]}),(0,O.jsxs)(O.Fragment,{children:[`Remember to `,(0,O.jsx)(`b`,{children:`Save`}),`.`]})]}),(0,O.jsx)(y,{name:`pasted`,label:`I’ve pasted the sign-on config into my login page.`,required:!0,rules:[V.v.oneOf([!0],`Confirm this step to continue`)]})]}),(0,O.jsxs)(S.Step,{id:`sso-rule`,label:`Turn off old rule`,visibleIf:V.c.not(V.c.ctx(`classic`)),children:[(0,O.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Disable the `,(0,O.jsx)(`b`,{children:`“Legacy password login”`}),` rule under Security › Access rules, then save.`]}),(0,O.jsx)(y,{name:`oldRuleOff`,label:`I've turned off the legacy login rule.`,required:!0,rules:[V.v.oneOf([!0],`Confirm this step to continue`)]})]})]})}),children:[(0,O.jsx)(`p`,{className:`text-[13px]`,children:`Before you begin, read the single sign-on guide.`}),(0,O.jsx)(E,{name:`ssoDone`,label:`Status`,tone:`inline`,render:e=>e===!0?`Saved`:`Not done yet`,rules:[z.oneOf([!0],`Finish the sign-on steps first`)]})]})}function Oe({form:e,report:t,workspaceSlug:n}){let{advance:r,busy:i}=X(t);return(0,O.jsxs)(Y,{id:`widget`,actions:(0,O.jsx)(_,{parent:e,scope:`widget`,empty:{widgetId:``,added:!1},title:`Embed the help widget on your site`,trigger:(0,O.jsx)(o,{type:`button`,size:`sm`,disabled:i,children:`Start now`}),size:`lg`,submit:!1,set:()=>[{path:`widgetDone`,value:!0}],onCommit:()=>void r(),children:(0,O.jsxs)(S,{submitLabel:`Save`,progress:(0,O.jsx)(C,{}),nav:(0,O.jsx)(w,{}),children:[(0,O.jsxs)(S.Step,{id:`widget-id`,label:`Widget ID`,children:[(0,O.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`We found a help widget on your old workspace. Check its widget ID before continuing, and add it if it's empty.`}),(0,O.jsx)(g,{name:`widgetId`,label:`Widget ID`,placeholder:`WGT-XXXXXXX`,required:F,dir:`ltr`,rules:[H.v.pattern(ce,F)]})]}),(0,O.jsxs)(S.Step,{id:`widget-script`,label:`Add the script`,children:[(0,O.jsx)(`p`,{className:`rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5 text-[13px]`,children:`If you already did this step, do not add the script a second time. Just tick the checkbox and move on.`}),(0,O.jsx)(E,{name:`widgetId`,label:`Widget script`,tone:`inline`,className:`flex-col items-stretch`,render:e=>typeof e==`string`&&e!==``?(0,O.jsx)(Q,{load:K.widgetGetEmbedScript(e),caption:`Your widget script is ready!`}):null}),(0,O.jsx)($,{steps:[(0,O.jsxs)(O.Fragment,{children:[`Go to`,` `,(0,O.jsxs)(`b`,{children:[`Settings > Channels > Web >`,` `,(0,O.jsx)(`a`,{className:`text-primary`,href:`https://beacon.example/${n}/channels/web`,target:`_blank`,rel:`noreferrer`,children:`Widget`})]}),`.`]}),(0,O.jsxs)(O.Fragment,{children:[`Open your website's page template and find the `,(0,O.jsx)(`b`,{children:`footer`}),`.`]}),`Repeat for every template that should show the widget.`,`Paste the script just before the closing </body> tag.`,`If you load a cookie banner, place it after the banner script.`,`Save and open the site to check the widget appears.`]}),(0,O.jsx)(y,{name:`added`,label:`I have added the widget script to my site.`,required:!0,rules:[H.v.oneOf([!0],`Confirm this step to continue`)]})]})]})}),children:[(0,O.jsx)(`p`,{className:`text-[13px]`,children:`Click Start now, then follow the instructions.`}),(0,O.jsx)(E,{name:`widgetDone`,label:`Status`,tone:`inline`,render:e=>e===!0?`Saved`:`Not done yet`,rules:[z.oneOf([!0],`Finish the widget steps first`)]})]})}function ke({report:e}){let{advance:t,busy:n}=X(e);return(0,O.jsxs)(Y,{id:`source`,actions:(0,O.jsx)(o,{type:`button`,size:`sm`,disabled:n,onClick:()=>void t(),children:n?`Saving…`:`Next`}),children:[(0,O.jsx)(v,{name:`source.source`,label:`Previous help desk`,placeholder:`Select a tool`,options:me,required:!0}),(0,O.jsx)(g,{name:`source.otherSourceName`,label:`Tool name`,placeholder:`Enter the name if it is not listed above`,visibleIf:R.eq(`source.source`,ne),required:!0})]})}function Ae({form:e,report:t,sites:n,migrated:r,onVisit:i,onVerified:a,toast:s}){let{advance:c,busy:l}=X(t),u=m(e,`domain.siteId`),d=r?`domainV1`:`domain`,f=async()=>{i(`opening`),await K.siteSettingsLink(u),setTimeout(()=>i(`visited`),he)};return(0,O.jsxs)(Y,{id:d,actions:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(p,{if:R.not(R.ctx(`domainVisited`)),children:(0,O.jsx)(o,{type:`button`,size:`sm`,disabled:u===``||l,onClick:()=>void f(),children:`Open domain settings`})}),(0,O.jsx)(p,{if:R.ctx(`domainVisited`),children:(0,O.jsx)(o,{type:`button`,size:`sm`,disabled:l,onClick:()=>void c(),children:`Confirm`})})]}),skip:r?void 0:(0,O.jsx)(Z,{}),children:[(0,O.jsx)(`p`,{className:`text-[13px]`,children:`Add a verification record for the site that will host your help center. If you are moving from an older workspace, remove its old record first.`}),(0,O.jsx)(v,{name:`domain.siteId`,label:`Site`,placeholder:`Select a site`,options:n.map(e=>({value:String(e.id),label:pe(e)})),required:!0}),(0,O.jsx)(p,{if:R.eq(B.ctx(`domainOpening`,!1),!0),children:(0,O.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Opening the domain settings… come back here once you have saved the record.`})}),(0,O.jsx)(y,{name:`domain.verified`,label:r?`Yes, I removed the old record and added the new one.`:`I understand the help center needs a verified domain. I added the record, or I’ll add it later.`,visibleIf:R.ctx(`domainVisited`),required:!0,rules:[z.oneOf([!0],`Add the verification record first`)],confirm:async e=>{let t=(await K.accountCheckDomain()).accountCheckDomain.domainVerified===!0;return s({title:`Domain check finished`,message:`Your changes have been saved`,tone:`success`}),a(t),e===t}}),(0,O.jsx)(p,{if:R.gte(B.ctx(`domainTries`,0),ge),children:(0,O.jsx)(`p`,{className:`rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,children:`We still can't find the verification record on the selected site. DNS changes can take a while; check the record and try again.`})})]})}function je({id:e,report:t,onAuth:n}){let{advance:r,busy:i}=X(t),a=e===`calendar`?`calendar`:`mailbox`,s=async()=>{await n(e),await r()};return(0,O.jsxs)(Y,{id:e,actions:(0,O.jsx)(o,{type:`button`,size:`sm`,disabled:i,onClick:()=>void s(),children:i?`Connecting…`:`Sign in`}),skip:(0,O.jsx)(Z,{disabled:i}),children:[(0,O.jsxs)(`p`,{className:`text-[13px]`,children:[`Connect your `,a,` so Beacon can set up the rest for you.`]}),(0,O.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Simulated OAuth: the real sign-in is its own flow.`})]})}function Me(){return x().allComplete?(0,O.jsx)(`div`,{className:`mt-3 border-t pt-3`,children:(0,O.jsx)(f.Submit,{className:`inline-flex h-7 items-center rounded-md bg-emerald-600 px-3 text-[13px] font-medium text-white hover:bg-emerald-700`,children:`Go to inbox`})}):null}var Ne=[{id:`legacy-records`,label:`Remove the old workspace's DNS records`,run:async()=>{try{return await K.accountRemoveLegacyRecords()}catch(e){throw b(e)??e}}},{id:`finish`,label:`Finish onboarding`,run:async()=>{try{return await K.onboardingSetStep(100)}catch(e){throw b(e)??e}}}];function Pe({data:e,toaster:t,side:n}){let r=M[e.origin],i=Math.floor((e.me.onboardingStep??0)/10),a=r.slice(0,i),[s,c]=(0,D.useState)(!1),[l,d]=(0,D.useState)(!1),[p,m]=(0,D.useState)(0),h=u({defaultValues:ye(e),context:{domainOpening:s,domainVisited:l,domainTries:p}}),g=ee(Ne),_=e=>t.push({title:`Error`,message:be(e),tone:`critical`}),v=e.sites.find(e=>e.role===`primary`),y=async e=>{let t=h.getValues();e===`routing`&&await K.routingImportRules({onCreate:t.routing.onCreate===`true`,onAssign:t.routing.onAssign===`true`,onClose:t.routing.onClose===`true`}),e===`source`&&t.source.source!==``&&await K.onboardingSetSource(t.source.source,t.source.otherSourceName);let n=r.findIndex(t=>t===e);K.onboardingSetStep((n+1)*10).catch(_)},b=n=>{switch(n){case`routing`:return(0,O.jsx)(Ee,{form:h,report:_});case`sso`:return(0,O.jsx)(De,{form:h,report:_,classic:ae(e.origin),site:v});case`widget`:return(0,O.jsx)(Oe,{form:h,report:_,workspaceSlug:e.me.workspaceSlug??``});case`source`:return(0,O.jsx)(ke,{report:_});case`domain`:case`domainV1`:return(0,O.jsx)(Ae,{form:h,report:_,sites:e.sites,migrated:n===`domainV1`,toast:t.push,onVisit:e=>{c(e===`opening`),d(e===`visited`)},onVerified:e=>{e?m(0):(m(e=>e+1),d(!1))}});case`calendar`:case`mailbox`:return(0,O.jsx)(je,{id:n,report:_,onAuth:()=>new Promise(e=>setTimeout(e,600))})}};return(0,O.jsxs)(ze,{children:[(0,O.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,O.jsx)(Fe,{origin:e.origin}),(0,O.jsxs)(f,{form:h,onSubmit:g.onSubmit,className:`flex flex-col gap-3`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`h3`,{className:`text-sm font-semibold`,children:`Set up your workspace`}),(0,O.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Finish these steps to get going. You can skip any of them and come back later from Settings.`})]}),(0,O.jsxs)(S,{completed:a,order:e.origin===`NEW-ACCOUNT`?`free`:`linear`,onStepComplete:y,progress:(0,O.jsx)(C,{}),nav:null,children:[r.map(e=>(0,O.jsx)(S.Step,{id:e,label:G[e],children:b(e)},e)),(0,O.jsx)(Me,{})]}),(0,O.jsx)(f.Status,{className:`text-sm`,pending:(0,O.jsx)(`p`,{className:`text-muted-foreground`,children:`Finishing onboarding…`}),success:()=>(0,O.jsx)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:`✓ onboardingStep is 100 — the app opens the inbox.`}),error:(e,{retry:t})=>(0,O.jsxs)(`p`,{className:`flex flex-wrap items-center gap-2 text-destructive`,children:[e.message,t?(0,O.jsx)(o,{type:`button`,size:`sm`,variant:`outline`,onClick:t,children:`Retry`}):null]})})]}),(0,O.jsx)(Ce,{what:`the help articles listed under the checklist are CMS content, not a form — omitted`})]}),(0,O.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[n,(0,O.jsx)(Ve,{store:h})]})]})}function Fe({origin:e}){let t=se(e);return(0,O.jsxs)(O.Fragment,{children:[t!==null||P(e)?(0,O.jsxs)(`div`,{className:`rounded-md border border-sky-500/30 bg-sky-500/5 px-3 py-2 text-[13px]`,children:[(0,O.jsx)(`p`,{className:`font-medium`,children:`Want us to move your workspace for you?`}),(0,O.jsx)(`p`,{children:`Our team can carry over your settings, rules and channels — just get in touch.`})]}):null,t===null?null:(0,O.jsxs)(`div`,{className:`rounded-md border border-amber-500/40 bg-amber-500/5 px-3 py-2 text-[13px]`,children:[(0,O.jsx)(`p`,{className:`font-medium`,children:`Your workspace was created on an earlier plan.`}),(0,O.jsx)(`p`,{children:t}),(0,O.jsx)(`a`,{className:`text-primary underline-offset-2 hover:underline`,href:`https://docs.beacon.example/moving-workspaces`,target:`_blank`,rel:`noreferrer`,children:`Read the moving guide`})]})]})}function Ie({load:e,toaster:t,side:n}){let r=(0,D.use)(e);return(r.me.onboardingStep??0)===100?(0,O.jsxs)(ze,{children:[(0,O.jsx)(`p`,{className:`rounded-lg border p-4 text-[13px] font-medium text-emerald-700 dark:text-emerald-400`,children:`onboardingStep is 100: the app opens the inbox instead of showing this page.`}),(0,O.jsx)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:n})]}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`p`,{className:`mb-2 text-[13px] text-muted-foreground`,children:[`Onboarding`,P(r.origin)&&N[r.origin]?` · Moved from: ${N[r.origin]}`:``]}),(0,O.jsx)(Pe,{data:r,toaster:t,side:n})]})}var Le={onboardingSetSource:`setSource`,routingImportRules:`importRules (routing)`,onboardingSetStep:`setStep`,accountRemoveLegacyRecords:`removeLegacyRecords`};function Re({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,O.jsxs)(`aside`,{className:a(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,O.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,O.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,O.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function ze({children:e,stack:t=!1}){return(0,O.jsx)(`div`,{className:a(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:D.Children.toArray(e)})}function Be({value:e,maxHeight:t=`max-h-[420px]`}){return(0,O.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:a(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function Ve({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=h(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),l);return(0,O.jsxs)(Re,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,O.jsx)(Be,{value:i}),s.length>0?(0,O.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,O.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function He(){let e=(0,D.useSyncExternalStore)(K.subscribe,K.snapshot,K.snapshot),[n,r]=(0,D.useState)(ve),[i,a]=(0,D.useState)(0),s=xe(),l=()=>{r(q()),a(e=>e+1)},u=(0,O.jsx)(Re,{title:`Server`,meta:`accountDetectOrigin · me.onboardingStep`,children:(0,O.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Account origin (decided by the server)`}),(0,O.jsx)(`div`,{className:`flex flex-wrap gap-1`,role:`group`,"aria-label":`Account origin`,children:A.map(t=>(0,O.jsx)(o,{type:`button`,size:`sm`,variant:e.origin===t?`default`:`outline`,"aria-pressed":e.origin===t,className:`h-6 px-1.5 font-mono text-[11px]`,onClick:()=>{K.setOrigin(t),l()},children:t},t))})]}),(0,O.jsxs)(`p`,{className:`tabular-nums`,children:[`onboardingStep `,(0,O.jsx)(`b`,{children:e.me.onboardingStep??0}),` · tasks `,M[e.origin].join(` → `)]}),(0,O.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,O.jsx)(`span`,{children:`Verification record found on the domain (DNS check)`}),(0,O.jsx)(t,{checked:e.recordFoundOnDomain,onCheckedChange:K.setRecordFoundOnDomain,"aria-label":`Verification record found on the domain`})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,O.jsxs)(`span`,{className:`text-muted-foreground`,children:[`Fail the next call (`,I.split(` (`)[0],`)`]}),ue.map(n=>(0,O.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,O.jsx)(`span`,{className:`font-mono text-[12px]`,children:Le[n]}),(0,O.jsx)(t,{checked:e.failOnce.includes(n),onCheckedChange:e=>K.armFailure(n,e),"aria-label":`Fail ${Le[n]}`})]},n))]}),(0,O.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,O.jsx)(o,{type:`button`,size:`sm`,variant:`outline`,onClick:l,children:`Reload from server`}),(0,O.jsx)(o,{type:`button`,size:`sm`,variant:`ghost`,onClick:()=>{K.reset(),l()},children:`Start over`})]}),e.log.length>0?(0,O.jsx)(`ol`,{className:`max-h-56 overflow-auto rounded border bg-muted/30 p-2 font-mono text-[11px]`,"data-server-log":``,children:e.log.map((e,t)=>(0,O.jsx)(`li`,{children:e},`${t}-${e}`))}):null,(0,O.jsx)(c,{variant:`outline`,className:`w-fit`,children:`errors: response.errors[0].message`})]})});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(D.Suspense,{fallback:(0,O.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Loading your workspace…`}),children:(0,O.jsx)(Ie,{load:n,toaster:s,side:u},i)}),(0,O.jsx)(Se,{toasts:s.toasts})]})}var Ue=`import { Suspense, use, useState, useSyncExternalStore, type ReactNode, Children } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Switch } from "@kitora/ui/switch"
import { kit, mapErrors, type FormStore, type PipelinePhase, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, useForm, useFormValue, useSubmitPipeline, useWizard, When, Wizard, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { CheckboxField, DisplayField, SegmentedField, SelectField, SubFormDialog, TextField, WizardNav, WizardProgress, type ChoiceOption } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- the simulated server (stub: replace with your API)
// ── enums ─────────────────────────────────────────────────────────────

/** Where the account came from: what \`accountDetectOrigin\` returns. \`CL-\` = a classic-plan workspace, \`PRO-\` = a pro one. */
export const ACCOUNT_ORIGINS = {
  ClStd: "CL-STANDARD",
  ClSrc: "CL-SOURCE-OTHER",
  ClSso: "CL-SSO",
  ClStdDns: "CL-STANDARD-LEGACY-DNS",
  ClSrcDns: "CL-SOURCE-OTHER-LEGACY-DNS",
  ClSsoDns: "CL-SSO-LEGACY-DNS",
  ProStd: "PRO-STANDARD",
  ProSrc: "PRO-SOURCE-OTHER",
  ProSso: "PRO-SSO",
  New: "NEW-ACCOUNT",
  ProVerified: "PRO-DOMAIN-VERIFIED",
} as const

export type AccountOrigin = (typeof ACCOUNT_ORIGINS)[keyof typeof ACCOUNT_ORIGINS]

export const ACCOUNT_ORIGIN_LIST: readonly AccountOrigin[] = Object.values(ACCOUNT_ORIGINS)

/** \`SourceTool\`: the \`source\` argument of \`onboardingSetSource\` (the help desk used before). */
export const SOURCE_TOOLS = ["CASEFLOW", "DESKPAD", "HELPNEST", "INBOXLY", "OTHER", "QUEUECRAFT", "SERVICELOOP", "SUPPORTHIVE", "TICKETLY"] as const

export type SourceTool = (typeof SOURCE_TOOLS)[number]

export const SOURCE_OTHER: SourceTool = "OTHER"

/** The source picker's options, in display order. */
export const SOURCE_LIST: readonly { label: string; value: SourceTool }[] = [
  { label: "Ticketly", value: "TICKETLY" },
  { label: "SupportHive", value: "SUPPORTHIVE" },
  { label: "Deskpad", value: "DESKPAD" },
  { label: "HelpNest", value: "HELPNEST" },
  { label: "CaseFlow", value: "CASEFLOW" },
  { label: "Inboxly", value: "INBOXLY" },
  { label: "QueueCraft", value: "QUEUECRAFT" },
  { label: "ServiceLoop", value: "SERVICELOOP" },
  { label: "Other", value: "OTHER" },
]

/**
 * The profile stores the source's LABEL; an unknown or empty label preselects "Other" — so an
 * account with no source on file opens the step with Other chosen.
 */
export function findSourceTool(label: string | null | undefined): SourceTool {
  return SOURCE_LIST.find((s) => s.label === label)?.value ?? SOURCE_OTHER
}

// ── the task list per origin ──────────────────────────────────────────

/** One task card. \`domainV1\` is the domain task for a migrated workspace (no Skip, "removed the old record" wording). */
export type TaskId = "routing" | "sso" | "widget" | "source" | "domain" | "domainV1" | "calendar" | "mailbox"

const NEW_ACCOUNT_TASKS: readonly TaskId[] = ["calendar", "mailbox", "domain"]

/** The origin → ordered tasks table. */
export const TASKS_BY_ORIGIN: Readonly<Record<AccountOrigin, readonly TaskId[]>> = {
  "CL-STANDARD": ["routing", "domainV1"],
  "CL-SOURCE-OTHER": ["routing", "domainV1", "source"],
  "CL-SSO": ["routing", "sso", "domainV1"],
  "CL-STANDARD-LEGACY-DNS": ["domainV1"],
  "CL-SOURCE-OTHER-LEGACY-DNS": ["domainV1", "source"],
  "CL-SSO-LEGACY-DNS": ["sso", "domainV1"],
  "PRO-STANDARD": ["domainV1", "widget"],
  "PRO-SOURCE-OTHER": ["domainV1", "widget", "source"],
  "PRO-SSO": ["widget", "sso", "domainV1"],
  "NEW-ACCOUNT": NEW_ACCOUNT_TASKS,
  "PRO-DOMAIN-VERIFIED": NEW_ACCOUNT_TASKS,
}

/** The page subtitle "Moved from: …". */
export const ORIGIN_NAMES: Readonly<Record<AccountOrigin, string>> = {
  "CL-STANDARD": "Classic",
  "CL-SOURCE-OTHER": "Classic, imported",
  "CL-SSO": "Classic with SSO",
  "CL-STANDARD-LEGACY-DNS": "Classic - legacy DNS",
  "CL-SOURCE-OTHER-LEGACY-DNS": "Classic, imported - legacy DNS",
  "CL-SSO-LEGACY-DNS": "Classic with SSO - legacy DNS",
  "PRO-STANDARD": "Pro",
  "PRO-SOURCE-OTHER": "Pro, imported",
  "PRO-SSO": "Pro with SSO",
  "NEW-ACCOUNT": "New account",
  "PRO-DOMAIN-VERIFIED": "",
}

/** A classic-plan workspace: its SSO dialog has two steps, not three. */
export const isClassicOrigin = (o: AccountOrigin): boolean => o.startsWith("CL-")

/** A workspace moved over from an earlier plan (not a fresh account). */
export const isMigratedAccount = (o: AccountOrigin): boolean => o !== "PRO-DOMAIN-VERIFIED" && o !== "NEW-ACCOUNT"

/** These origins fire \`routingImportRules\` with every flag false on load. */
export const hasLegacyDns = (o: AccountOrigin): boolean => o === "CL-SSO-LEGACY-DNS" || o === "CL-SOURCE-OTHER-LEGACY-DNS" || o === "CL-STANDARD-LEGACY-DNS"

/** The warning banner body for a migrated workspace, or \`null\` (no banner). */
export function originNotice(o: AccountOrigin): string | null {
  if (o.startsWith("CL-"))
    return "The new workspace layout is optional for classic accounts: your current setup keeps working as it is. If you want to try the new layout, the steps below move your settings over. Afterwards you can re-enable your channels one at a time. Questions? Reach out any time."
  if (o.startsWith("PRO-") && o !== "PRO-DOMAIN-VERIFIED")
    return "Your existing help widget keeps working with the new workspace, so nothing breaks today. Once the steps below are done, update the widget embed so it picks up the new features, or switch to one of the built-in channels instead."
  return null
}

/** \`onboardingStep\` is the count of finished tasks × 10; 100 means "done, go to the inbox". */
export const ONBOARDING_STEP_UNIT = 10

export const ONBOARDING_DONE = 100

/** The widget ID format and its message. */
export const WIDGET_ID_FORMAT = /^WGT-.{4,8}$/

export const WIDGET_ID_MESSAGE = "Widget ID format is not valid"

// ── wire shapes ───────────────────────────────────────────────────────

/** A site the help center can be served from — \`id\` is a 64-bit id, a JSON number on the wire. */
export interface Site {
  id: number
  name: string
  role: string
}

/** The account fields this page reads. */
export interface AccountInfo {
  onboardingStep: number | null
  workspaceSlug: string | null
  grantedScopes: string | null
  source: string | null
  otherSourceName: string | null
  ssoDomainId: string | null
  domainVerified: boolean | null
}

/** \`RoutingRulesInput\`: which events the imported routing rules notify on. */
export interface RoutingRulesInput {
  onCreate: boolean
  onAssign: boolean
  onClose: boolean
}

/** One entry of a GraphQL \`errors[]\` as the backend sends it (\`message\` + the field \`path\`). */
export interface GraphQLErrorItem {
  message: string
  path?: (string | number)[]
}

/**
 * A GraphQL client's error: an Error whose \`response\` holds the GraphQL envelope. The page reads
 * nothing but \`response.errors[0].message\`.
 */
export class GraphQLClientError extends Error {
  readonly response: { errors: GraphQLErrorItem[]; data: null; status: number }
  constructor(errors: GraphQLErrorItem[]) {
    super(\`\${errors[0]?.message ?? "GraphQL Error"}: \${JSON.stringify({ response: { errors } })}\`)
    this.name = "ClientError"
    this.response = { errors, data: null, status: 200 }
  }
}

// ── the in-memory server ──────────────────────────────────────────────

/** Operations the demo can make fail once (side panel switches). */
export const FAILABLE_OPS = ["onboardingSetSource", "routingImportRules", "onboardingSetStep", "accountRemoveLegacyRecords"] as const

export type FailableOp = (typeof FAILABLE_OPS)[number]

/** The demo's error text is a stand-in, labelled as such in the UI; the SHAPE — \`response.errors[0].message\` — is what matters. */
export const STAND_IN_ERROR = "stand-in server error (a real backend sends its own text)"

export interface ServerSnapshot {
  origin: AccountOrigin
  me: AccountInfo
  /** \`widgetGetPrimary().widgetId\` after \`widgetProvision\`. */
  widgetId: string | null
  /** Demo switch: whether the DNS check finds the verification record (the server checks it). */
  recordFoundOnDomain: boolean
  failOnce: readonly FailableOp[]
  log: readonly string[]
}

const SITES: readonly Site[] = [
  { id: 141210959999, name: "help.acme.test", role: "primary" },
  { id: 141210960000, name: "staging-help.acme.test", role: "staging" },
]

const INITIAL_ME: AccountInfo = { onboardingStep: 0, workspaceSlug: "acme", grantedScopes: "sites:read,dns:write", source: null, otherSourceName: null, ssoDomainId: null, domainVerified: false }

/** The page's server, in memory: queries and mutations by operation name. */
export function createOnboardingServer() {
  let state: ServerSnapshot = { origin: "CL-SSO", me: INITIAL_ME, widgetId: "WGT-AB12CD3", recordFoundOnDomain: false, failOnce: [], log: [] }
  const listeners = new Set<() => void>()
  const scriptCache = new Map<string, Promise<string>>()
  const set = (next: Partial<ServerSnapshot>) => {
    state = { ...state, ...next }
    for (const l of listeners) l()
  }
  const log = (line: string) => set({ log: [...state.log, line] })
  /** Throw the GraphQL envelope once if the demo armed a failure for \`op\`. */
  const maybeFail = (op: FailableOp) => {
    if (!state.failOnce.includes(op)) return
    set({ failOnce: state.failOnce.filter((o) => o !== op) })
    log(\`\${op} → errors[0].message\`)
    throw new GraphQLClientError([{ message: STAND_IN_ERROR, path: [op] }])
  }
  const cached = (key: string, make: () => Promise<string>): Promise<string> => {
    const hit = scriptCache.get(key)
    if (hit) return hit
    const p = make()
    scriptCache.set(key, p)
    return p
  }

  return {
    subscribe: (l: () => void) => {
      listeners.add(l)
      return () => {
        listeners.delete(l)
      }
    },
    snapshot: (): ServerSnapshot => state,

    // demo controls (not app operations)
    setOrigin: (origin: AccountOrigin) => set({ origin }),
    setRecordFoundOnDomain: (on: boolean) => set({ recordFoundOnDomain: on }),
    armFailure: (op: FailableOp, on: boolean) => set({ failOnce: on ? [...state.failOnce.filter((o) => o !== op), op] : state.failOnce.filter((o) => o !== op) }),
    reset: () => set({ me: INITIAL_ME, recordFoundOnDomain: false, failOnce: [], log: [] }),

    // ── mutation accountDetectOrigin → String!
    async accountDetectOrigin(): Promise<{ accountDetectOrigin: string }> {
      await delay(250)
      log(\`accountDetectOrigin → "\${state.origin}"\`)
      if (hasLegacyDns(state.origin)) log("routingImportRules(input: { onCreate: false, onAssign: false, onClose: false }) (fired on load)")
      if (!state.me.grantedScopes?.split(",").includes("dns:write")) log("accountReauthUrl → opens the re-auth URL in a new tab")
      return { accountDetectOrigin: state.origin }
    },
    // ── query me (the fields the page reads)
    me: (): AccountInfo => state.me,
    // ── query siteList { id name role }
    async siteList(): Promise<{ siteList: Site[] }> {
      await delay(200)
      return { siteList: [...SITES] }
    },
    // ── mutation widgetProvision → Boolean!, then query widgetGetPrimary { widgetId … }
    async widgetProvision(): Promise<{ widgetProvision: boolean }> {
      await delay(200)
      log("widgetProvision → true")
      return { widgetProvision: true }
    },
    async widgetGetPrimary(): Promise<{ widgetGetPrimary: { widgetId: string | null } }> {
      await delay(150)
      return { widgetGetPrimary: { widgetId: state.widgetId } }
    },
    // ── query ssoGenerateConfig($domainId: String!) → String!
    ssoGenerateConfig(domainId: string): Promise<string> {
      return cached(\`sso:\${domainId}\`, async () => {
        await delay(400)
        return \`<!-- Beacon SSO -->\\n<meta name="beacon-sso" content="domain=\${domainId}; mode=redirect" />\`
      })
    },
    // ── query widgetGetEmbedScript($widgetId: String!) → String!
    widgetGetEmbedScript(widgetId: string): Promise<string> {
      return cached(\`widget:\${widgetId}\`, async () => {
        await delay(400)
        return \`<!-- Beacon help widget -->\\n<script async src="https://cdn.beacon.example/widget.js" data-widget="\${widgetId}"><\/script>\`
      })
    },
    // ── query siteSettingsLink($id: String!) → String!
    async siteSettingsLink(id: string): Promise<{ siteSettingsLink: string }> {
      await delay(150)
      const link = \`https://beacon.example/\${state.me.workspaceSlug ?? ""}/sites/\${id}/domain\`
      log(\`siteSettingsLink(siteId: "\${id}") → opened in a new tab\`)
      return { siteSettingsLink: link }
    },
    // ── mutation accountCheckDomain { domainVerified } (no arguments: the server runs the DNS check)
    async accountCheckDomain(): Promise<{ accountCheckDomain: { domainVerified: boolean | null } }> {
      await delay(400)
      const domainVerified = state.recordFoundOnDomain
      set({ me: { ...state.me, domainVerified } })
      log(\`accountCheckDomain → { domainVerified: \${String(domainVerified)} }\`)
      return { accountCheckDomain: { domainVerified } }
    },
    // ── mutation routingImportRules($input: RoutingRulesInput!) → Boolean!
    async routingImportRules(input: RoutingRulesInput): Promise<{ routingImportRules: boolean }> {
      await delay(400)
      maybeFail("routingImportRules")
      log(\`routingImportRules(input: \${JSON.stringify(input)}) → true\`)
      return { routingImportRules: true }
    },
    // ── mutation onboardingSetSource($source: SourceTool!, $otherSourceName: String) → String! (the page never reads the result)
    async onboardingSetSource(source: SourceTool, otherSourceName: string | null): Promise<{ onboardingSetSource: string }> {
      await delay(400)
      maybeFail("onboardingSetSource")
      const label = SOURCE_LIST.find((s) => s.value === source)?.label ?? source
      set({ me: { ...state.me, source: label, otherSourceName } })
      log(\`onboardingSetSource(source: \${source}, otherSourceName: \${JSON.stringify(otherSourceName)})\`)
      return { onboardingSetSource: source }
    },
    // ── mutation onboardingSetStep($step: Int!) → Int!
    async onboardingSetStep(step: number): Promise<{ onboardingSetStep: number }> {
      await delay(250)
      maybeFail("onboardingSetStep")
      set({ me: { ...state.me, onboardingStep: step } })
      log(\`onboardingSetStep(step: \${step}) → \${step}\`)
      return { onboardingSetStep: step }
    },
    // ── mutation accountRemoveLegacyRecords → Boolean!
    async accountRemoveLegacyRecords(): Promise<{ accountRemoveLegacyRecords: boolean }> {
      await delay(400)
      maybeFail("accountRemoveLegacyRecords")
      log("accountRemoveLegacyRecords → true")
      return { accountRemoveLegacyRecords: true }
    },
  }
}

export type OnboardingServer = ReturnType<typeof createOnboardingServer>

/** The site select's option label. */
export function siteOptionLabel(s: Site): string {
  return \`\${s.name} (\${s.role === "primary" ? "live site" : s.role}) (\${s.id})\`
}

// ---- the page
// A real-world flow: the onboarding checklist of an invented help-desk app ("Beacon"), built on the
// public API. The server decides where the account came from; the origin picks which tasks show and
// in what order; \`onboardingStep\` (tasks done × 10) seeds the wizard (\`completed\`); each task's own
// mutation runs in \`onStepComplete\`; the routing, SSO and widget dialogs are sub-forms that commit
// into the page; the domain checkbox is verified by the server (\`confirm\`); "Go to inbox" is a
// two-phase submit. The stub server throws a GraphQL ClientError, read as \`response.errors[0].message\`.
// What the engine cannot express yet is shown as "Not yet supported".

/** Routing answers: a True / False pair per flag. */
type RuleFlag = "true" | "false"

interface RoutingSlice {
  onCreate: RuleFlag
  onAssign: RuleFlag
  onClose: RuleFlag
}

interface SsoSlice {
  domainId: string
  pasted: boolean
  oldRuleOff: boolean
}

interface WidgetSlice {
  widgetId: string
  added: boolean
}

interface OnboardingValues {
  routing: RoutingSlice
  routingSaved: boolean
  sso: SsoSlice
  ssoDone: boolean
  widget: WidgetSlice
  widgetDone: boolean
  source: { source: SourceTool | ""; otherSourceName: string }
  domain: { siteId: string; verified: boolean }
}

const { c, v, e } = kit<OnboardingValues>()

const ss = kit<SsoSlice>()

const wg = kit<WidgetSlice>()

const TRUE_FALSE: ChoiceOption[] = [
  { value: "true", label: "True" },
  { value: "false", label: "False" },
]

const SOURCE_OPTIONS = SOURCE_LIST.map((o) => ({ value: o.value, label: o.label }))

/** How long the page waits after opening the site settings before it shows the "I added the record" checkbox. */
const DOMAIN_REVEAL_MS = 5000

/** After this many server answers of \`domainVerified: false\` the page shows a hint banner. */
const DOMAIN_HINT_AFTER = 3

/** Toasts stay this long. */
const TOAST_MS = 4000

/** Task titles, as each task card renders them. */
const TASK_TITLES: Readonly<Record<TaskId, string>> = {
  routing: "Review your imported routing rules",
  sso: "Add the single sign-on config to your login page",
  widget: "Embed the help widget on your site",
  source: "Which help desk did you use before?",
  domain: "Verify your help-center domain",
  domainV1: "Verify your help-center domain",
  calendar: "Connect your team calendar",
  mailbox: "Connect your support mailbox",
}

const DOCS: Readonly<Partial<Record<TaskId, string>>> = {
  routing: "https://docs.beacon.example/routing-rules",
  sso: "https://docs.beacon.example/single-sign-on",
  widget: "https://docs.beacon.example/help-widget",
  source: "https://docs.beacon.example/importing",
}

const server = createOnboardingServer()

/** What the page has once its queries and the origin mutation answered. */
interface PageData {
  origin: AccountOrigin
  me: AccountInfo
  sites: Site[]
  widgetId: string
}

/** The page load: the origin mutation, the profile, the site list, and — when the widget task shows — the provision mutation plus the widget it prefills from. */
async function loadPage(): Promise<PageData> {
  const res = await server.accountDetectOrigin()
  const origin = ACCOUNT_ORIGIN_LIST.find((o) => o === res.accountDetectOrigin) ?? "NEW-ACCOUNT"
  const { siteList } = await server.siteList()
  let widgetId = ""
  if (TASKS_BY_ORIGIN[origin].includes("widget")) {
    await server.widgetProvision()
    widgetId = (await server.widgetGetPrimary()).widgetGetPrimary.widgetId ?? ""
  }
  return { origin, me: server.me(), sites: siteList, widgetId }
}

/** The first page load, shared so StrictMode's double initializer call does not run the origin mutation twice. */
let initialLoad: Promise<PageData> | undefined

function firstLoad(): Promise<PageData> {
  initialLoad ??= loadPage()
  return initialLoad
}

function defaultsFrom(data: PageData): OnboardingValues {
  return {
    routing: { onCreate: "false", onAssign: "false", onClose: "false" },
    routingSaved: false,
    sso: { domainId: data.me.ssoDomainId ?? "", pasted: false, oldRuleOff: false },
    ssoDone: false,
    widget: { widgetId: data.widgetId, added: false },
    widgetDone: false,
    source: { source: findSourceTool(data.me.source), otherSourceName: data.me.otherSourceName ?? "" },
    domain: { siteId: "", verified: false },
  }
}

/** The server's first error message, capitalised: mapErrors' default source reads \`response.errors[0].message\`. */
function errorText(err: unknown): string {
  const message = mapErrors(err)?.message ?? ""
  return message.charAt(0).toUpperCase() + message.slice(1)
}

// ── toasts ────────────────────────────────────────────────────────────

interface Toast {
  id: number
  title: string
  message: string
  tone: "critical" | "success"
}

interface Toaster {
  toasts: readonly Toast[]
  push: (t: Omit<Toast, "id">) => void
}

function useToaster(): Toaster {
  const [toasts, setToasts] = useState<readonly Toast[]>([])
  const push = (t: Omit<Toast, "id">) => {
    const id = Date.now() + Math.random()
    setToasts((list) => [...list, { ...t, id }])
    setTimeout(() => setToasts((list) => list.filter((x) => x.id !== id)), TOAST_MS)
  }
  return { toasts, push }
}

function Toasts({ toasts }: { toasts: readonly Toast[] }) {
  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed end-4 bottom-4 z-50 flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-2">
      {toasts.map((t) => (
        <div key={t.id} data-toast={t.tone} className={t.tone === "critical" ? "rounded-md border border-destructive/40 bg-background px-3 py-2 text-[13px] shadow-md" : "rounded-md border border-emerald-500/40 bg-background px-3 py-2 text-[13px] shadow-md"}>
          <p className={t.tone === "critical" ? "font-medium text-destructive" : "font-medium text-emerald-700 dark:text-emerald-400"}>{t.title}</p>
          <p className="text-muted-foreground">{t.message}</p>
        </div>
      ))}
    </div>
  )
}

// ── task chrome ───────────────────────────────────────────────────────

/** The task card body: title, text, the action row (primary actions start, Skip end). */
function TaskCard({ id, children, actions, skip }: { id: TaskId; children: ReactNode; actions: ReactNode; skip?: ReactNode }) {
  const docs = DOCS[id]
  return (
    <div className="flex flex-col gap-3 rounded-lg border p-3">
      <h3 className="text-sm font-semibold">{TASK_TITLES[id]}</h3>
      {children}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {actions}
          {docs ? (
            <a className="text-[13px] text-primary underline-offset-2 hover:underline" href={docs} target="_blank" rel="noreferrer">
              Learn more
            </a>
          ) : null}
        </div>
        {skip}
      </div>
    </div>
  )
}

/**
 * Run \`wizard.next()\` (which runs \`onStepComplete\`) and report a failed mutation as an error toast.
 * The wizard owns the pending state and normalises the failure (\`next()\` resolves \`{ error }\`, gap A).
 */
function useAdvance(report: (err: unknown) => void): { advance: () => Promise<void>; busy: boolean } {
  const w = useWizard()
  const advance = async () => {
    const { error } = await w.next()
    if (error) report(error)
  }
  return { advance, busy: w.pending }
}

/** The task's Skip: marks it skipped and moves on — no validation, no mutation (gap K). */
function SkipTask({ disabled }: { disabled?: boolean }) {
  const w = useWizard()
  return (
    <Button type="button" size="sm" variant="outline" disabled={disabled || w.pending} onClick={() => w.skip()}>
      Skip
    </Button>
  )
}

/** A labelled placeholder for behaviour the engine cannot express yet. */
function NotYetSupported({ what }: { what: string }) {
  return (
    <p data-not-supported="" className="rounded-md border border-dashed border-amber-500/50 bg-amber-500/5 px-2.5 py-1.5 text-[12px] text-amber-800 dark:text-amber-300">
      <span className="font-medium">Not yet supported:</span> {what}
    </p>
  )
}

/** Copy-to-clipboard with a "Copied" label. */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      onClick={() => {
        void navigator.clipboard?.writeText(text).catch(() => undefined)
        setCopied(true)
        setTimeout(() => setCopied(false), TOAST_MS)
      }}
    >
      {copied ? "Copied" : "Copy to clipboard"}
    </Button>
  )
}

/** A server-generated snippet (a query keyed by a field value), read with \`use()\` under Suspense. */
function ScriptBlock({ load, caption }: { load: Promise<string>; caption: string }) {
  const code = use(load)
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-[13px] font-medium">Copy the code block</p>
          <p className="text-[12px] text-muted-foreground">{caption}</p>
        </div>
        <CopyButton text={code} />
      </div>
      <pre className="max-h-40 overflow-auto rounded-md border bg-muted p-2 font-mono text-[11px] whitespace-pre-wrap break-all" dir="ltr">
        {code}
      </pre>
      <p className="text-[11px] text-muted-foreground">Stand-in snippet: a real server returns its own string.</p>
    </div>
  )
}

function ScriptFor({ load, caption }: { load: Promise<string>; caption: string }) {
  return (
    <Suspense fallback={<p className="text-[13px] text-muted-foreground">Generating the snippet…</p>}>
      <ScriptBlock load={load} caption={caption} />
    </Suspense>
  )
}

function InfoSteps({ steps }: { steps: readonly ReactNode[] }) {
  return (
    <ol className="list-decimal space-y-1 ps-5 text-[13px]">
      {steps.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ol>
  )
}

// ── the tasks ─────────────────────────────────────────────────────────

interface TaskProps {
  form: FormStore<OnboardingValues>
  report: (err: unknown) => void
}

/** Routing review: a dialog with three True/False flags; Save runs routingImportRules (in onStepComplete). */
function RoutingTask({ form, report }: TaskProps) {
  const { advance, busy } = useAdvance(report)
  return (
    <TaskCard
      id="routing"
      actions={
        <SubFormDialog
          parent={form}
          scope="routing"
          empty={{ onCreate: "false", onAssign: "false", onClose: "false" }}
          title="Review your imported routing rules"
          trigger={
            <Button type="button" size="sm" disabled={busy}>
              {busy ? "Saving…" : "Start now"}
            </Button>
          }
          submitLabel="Save"
          set={() => [{ path: "routingSaved", value: true }]}
          onCommit={() => void advance()}
        >
          <InfoSteps
            steps={[
              "Open Settings › Routing in your old workspace.",
              <>
                Find the rule group named <b>Default queue</b>.
              </>,
              "Open its notification section.",
              "Compare the switches with the ones below.",
              "Tell us which events the old rules notified on.",
            ]}
          />
          <p className="text-[13px] text-muted-foreground">Pick ‘True’ or ‘False’ to match what you see, then click Save.</p>
          <SegmentedField name="onCreate" label="ticket_created" options={TRUE_FALSE} />
          <SegmentedField name="onAssign" label="ticket_assigned" options={TRUE_FALSE} />
          <SegmentedField name="onClose" label="ticket_closed" options={TRUE_FALSE} />
        </SubFormDialog>
      }
    >
      <p className="text-[13px]">Click “Start now” and follow the steps.</p>
      <DisplayField name="routingSaved" label="Status" tone="inline" render={(saved) => (saved === true ? "Saved" : "Not saved yet")} rules={[v.oneOf([true], "Save the routing review first")]} />
    </TaskCard>
  )
}

/** SSO: a 3-step dialog (2 for a classic workspace); the domain ID drives a generated-config query. */
function SsoTask({ form, report, classic, site }: TaskProps & { classic: boolean; site: Site | undefined }) {
  const { advance, busy } = useAdvance(report)
  return (
    <TaskCard
      id="sso"
      actions={
        <SubFormDialog
          parent={form}
          scope="sso"
          empty={{ domainId: "", pasted: false, oldRuleOff: false }}
          title="Add the single sign-on config to your login page"
          trigger={
            <Button type="button" size="sm" disabled={busy}>
              Start now
            </Button>
          }
          size="lg"
          submit={false}
          form={{ context: { classic } }}
          set={() => [{ path: "ssoDone", value: true }]}
          onCommit={() => void advance()}
        >
          <Wizard submitLabel="Save" progress={<WizardProgress />} nav={<WizardNav />}>
            <Wizard.Step id="sso-id" label="Domain ID">
              <p className="text-[13px] text-muted-foreground">Your old workspace used single sign-on. Check your identity provider&apos;s domain ID and add it if it&apos;s missing.</p>
              <TextField name="domainId" label="Domain ID" placeholder="Paste it here" required dir="ltr" />
            </Wizard.Step>
            <Wizard.Step id="sso-paste" label="Paste the config">
              {site ? (
                <p className="rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]">
                  Your live site: <b>{site.name}</b>
                </p>
              ) : null}
              <DisplayField
                name="domainId"
                label="Sign-on config"
                tone="inline"
                className="flex-col items-stretch"
                render={(id) => (typeof id === "string" && id !== "" ? <ScriptFor load={server.ssoGenerateConfig(id)} caption="Your sign-on config is ready!" /> : null)}
              />
              <InfoSteps
                steps={[
                  "Copy the code block above.",
                  <>
                    Open <b>Help center › Appearance</b>.
                  </>,
                  <>
                    Choose <b>Edit layout</b> on the live site.
                  </>,
                  <>
                    Paste the whole block inside the &lt;head&gt; of the <b>login</b> template.
                  </>,
                  <>
                    Remember to <b>Save</b>.
                  </>,
                ]}
              />
              <CheckboxField name="pasted" label="I’ve pasted the sign-on config into my login page." required rules={[ss.v.oneOf([true], "Confirm this step to continue")]} />
            </Wizard.Step>
            {/* app context: a pro (non-classic) workspace also turns off the old login rule */}
            <Wizard.Step id="sso-rule" label="Turn off old rule" visibleIf={ss.c.not(ss.c.ctx("classic"))}>
              <p className="text-[13px] text-muted-foreground">
                Disable the <b>“Legacy password login”</b> rule under Security › Access rules, then save.
              </p>
              <CheckboxField name="oldRuleOff" label="I've turned off the legacy login rule." required rules={[ss.v.oneOf([true], "Confirm this step to continue")]} />
            </Wizard.Step>
          </Wizard>
        </SubFormDialog>
      }
    >
      <p className="text-[13px]">Before you begin, read the single sign-on guide.</p>
      <DisplayField name="ssoDone" label="Status" tone="inline" render={(done) => (done === true ? "Saved" : "Not done yet")} rules={[v.oneOf([true], "Finish the sign-on steps first")]} />
    </TaskCard>
  )
}

/** Widget: a 2-step dialog; the widget ID (prefilled from the provisioned widget) drives the embed-script query. */
function WidgetTask({ form, report, workspaceSlug }: TaskProps & { workspaceSlug: string }) {
  const { advance, busy } = useAdvance(report)
  return (
    <TaskCard
      id="widget"
      actions={
        <SubFormDialog
          parent={form}
          scope="widget"
          empty={{ widgetId: "", added: false }}
          title="Embed the help widget on your site"
          trigger={
            <Button type="button" size="sm" disabled={busy}>
              Start now
            </Button>
          }
          size="lg"
          submit={false}
          set={() => [{ path: "widgetDone", value: true }]}
          onCommit={() => void advance()}
        >
          <Wizard submitLabel="Save" progress={<WizardProgress />} nav={<WizardNav />}>
            <Wizard.Step id="widget-id" label="Widget ID">
              <p className="text-[13px] text-muted-foreground">We found a help widget on your old workspace. Check its widget ID before continuing, and add it if it&apos;s empty.</p>
              <TextField name="widgetId" label="Widget ID" placeholder="WGT-XXXXXXX" required={WIDGET_ID_MESSAGE} dir="ltr" rules={[wg.v.pattern(WIDGET_ID_FORMAT, WIDGET_ID_MESSAGE)]} />
            </Wizard.Step>
            <Wizard.Step id="widget-script" label="Add the script">
              <p className="rounded-md border border-amber-500/40 bg-amber-500/5 px-2.5 py-1.5 text-[13px]">If you already did this step, do not add the script a second time. Just tick the checkbox and move on.</p>
              <DisplayField
                name="widgetId"
                label="Widget script"
                tone="inline"
                className="flex-col items-stretch"
                render={(id) => (typeof id === "string" && id !== "" ? <ScriptFor load={server.widgetGetEmbedScript(id)} caption="Your widget script is ready!" /> : null)}
              />
              <InfoSteps
                steps={[
                  <>
                    Go to{" "}
                    <b>
                      Settings &gt; Channels &gt; Web &gt;{" "}
                      <a className="text-primary" href={\`https://beacon.example/\${workspaceSlug}/channels/web\`} target="_blank" rel="noreferrer">
                        Widget
                      </a>
                    </b>
                    .
                  </>,
                  <>
                    Open your website&apos;s page template and find the <b>footer</b>.
                  </>,
                  "Repeat for every template that should show the widget.",
                  "Paste the script just before the closing </body> tag.",
                  "If you load a cookie banner, place it after the banner script.",
                  "Save and open the site to check the widget appears.",
                ]}
              />
              <CheckboxField name="added" label="I have added the widget script to my site." required rules={[wg.v.oneOf([true], "Confirm this step to continue")]} />
            </Wizard.Step>
          </Wizard>
        </SubFormDialog>
      }
    >
      <p className="text-[13px]">Click Start now, then follow the instructions.</p>
      <DisplayField name="widgetDone" label="Status" tone="inline" render={(done) => (done === true ? "Saved" : "Not done yet")} rules={[v.oneOf([true], "Finish the widget steps first")]} />
    </TaskCard>
  )
}

/** Source: an inline select + "Other" name; Next runs onboardingSetSource (in onStepComplete). */
function SourceTask({ report }: { report: (err: unknown) => void }) {
  const { advance, busy } = useAdvance(report)
  return (
    <TaskCard
      id="source"
      actions={
        <Button type="button" size="sm" disabled={busy} onClick={() => void advance()}>
          {busy ? "Saving…" : "Next"}
        </Button>
      }
    >
      <SelectField name="source.source" label="Previous help desk" placeholder="Select a tool" options={SOURCE_OPTIONS} required />
      {/* sibling: shown and required only while source.source is "Other" */}
      <TextField name="source.otherSourceName" label="Tool name" placeholder="Enter the name if it is not listed above" visibleIf={c.eq("source.source", SOURCE_OTHER)} required />
    </TaskCard>
  )
}

/**
 * Domain: pick a site → "Open domain settings" (opens the settings, then waits) → "I added the
 * record", which the server verifies (\`accountCheckDomain\`); a \`false\` answer un-ticks it.
 */
function DomainTask({ form, report, sites, migrated, onVisit, onVerified, toast }: TaskProps & {
  sites: readonly Site[]
  migrated: boolean
  onVisit: (state: "opening" | "visited") => void
  onVerified: (status: boolean) => void
  toast: Toaster["push"]
}) {
  const { advance, busy } = useAdvance(report)
  const siteId = useFormValue(form, "domain.siteId")
  const id: TaskId = migrated ? "domainV1" : "domain"
  const openSiteSettings = async () => {
    onVisit("opening")
    await server.siteSettingsLink(siteId)
    setTimeout(() => onVisit("visited"), DOMAIN_REVEAL_MS)
  }
  return (
    <TaskCard
      id={id}
      actions={
        <>
          {/* app context: the site settings were opened and the wait ran out */}
          <When if={c.not(c.ctx("domainVisited"))}>
            <Button type="button" size="sm" disabled={siteId === "" || busy} onClick={() => void openSiteSettings()}>
              Open domain settings
            </Button>
          </When>
          {/* app context: shown once the user came back from the site settings */}
          <When if={c.ctx("domainVisited")}>
            <Button type="button" size="sm" disabled={busy} onClick={() => void advance()}>
              Confirm
            </Button>
          </When>
        </>
      }
      skip={migrated ? undefined : <SkipTask />}
    >
      <p className="text-[13px]">Add a verification record for the site that will host your help center. If you are moving from an older workspace, remove its old record first.</p>
      <SelectField name="domain.siteId" label="Site" placeholder="Select a site" options={sites.map((s) => ({ value: String(s.id), label: siteOptionLabel(s) }))} required />
      {/* app context: the "opening" wait is app state, not a value */}
      <When if={c.eq(e.ctx("domainOpening", false), true)}>
        <p className="text-[13px] text-muted-foreground">Opening the domain settings… come back here once you have saved the record.</p>
      </When>
      <CheckboxField
        name="domain.verified"
        label={migrated ? "Yes, I removed the old record and added the new one." : "I understand the help center needs a verified domain. I added the record, or I’ll add it later."}
        // app context: the checkbox appears only after the domain settings were opened
        visibleIf={c.ctx("domainVisited")}
        required
        rules={[v.oneOf([true], "Add the verification record first")]}
        confirm={async (next) => {
          const res = await server.accountCheckDomain()
          const status = res.accountCheckDomain.domainVerified === true
          toast({ title: "Domain check finished", message: "Your changes have been saved", tone: "success" })
          onVerified(status)
          return next === status
        }}
      />
      {/* app context: the count of \`domainVerified: false\` answers */}
      <When if={c.gte(e.ctx("domainTries", 0), DOMAIN_HINT_AFTER)}>
        <p className="rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]">We still can&apos;t find the verification record on the selected site. DNS changes can take a while; check the record and try again.</p>
      </When>
    </TaskCard>
  )
}

/** Connect: "Sign in" opens a simulated OAuth flow; its callback completes the task. */
function ConnectTask({ id, report, onAuth }: { id: "calendar" | "mailbox"; report: (err: unknown) => void; onAuth: (id: "calendar" | "mailbox") => Promise<void> }) {
  const { advance, busy } = useAdvance(report)
  const thing = id === "calendar" ? "calendar" : "mailbox"
  const signIn = async () => {
    await onAuth(id)
    await advance()
  }
  return (
    <TaskCard
      id={id}
      actions={
        <Button
          type="button"
          size="sm"
          disabled={busy}
          onClick={() => void signIn()}
        >
          {busy ? "Connecting…" : "Sign in"}
        </Button>
      }
      skip={<SkipTask disabled={busy} />}
    >
      <p className="text-[13px]">Connect your {thing} so Beacon can set up the rest for you.</p>
      <p className="text-[12px] text-muted-foreground">Simulated OAuth: the real sign-in is its own flow.</p>
    </TaskCard>
  )
}

/** "Go to inbox": shown once every task is completed or skipped. */
function GoToInbox() {
  const w = useWizard()
  if (!w.allComplete) return null
  return (
    <div className="mt-3 border-t pt-3">
      <Form.Submit className="inline-flex h-7 items-center rounded-md bg-emerald-600 px-3 text-[13px] font-medium text-white hover:bg-emerald-700">Go to inbox</Form.Submit>
    </div>
  )
}

/** "Go to inbox": remove the legacy DNS records, then mark onboarding done (step 100) — a retry never removes twice. */
const FINISH_PHASES: PipelinePhase<OnboardingValues>[] = [
  {
    id: "legacy-records",
    label: "Remove the old workspace's DNS records",
    run: async () => {
      try {
        return await server.accountRemoveLegacyRecords()
      } catch (err) {
        throw mapErrors(err) ?? err
      }
    },
  },
  {
    id: "finish",
    label: "Finish onboarding",
    run: async () => {
      try {
        return await server.onboardingSetStep(ONBOARDING_DONE)
      } catch (err) {
        throw mapErrors(err) ?? err
      }
    },
  },
]

// ── the page ──────────────────────────────────────────────────────────

/** The checklist form; remounted on "Reload from server" to show the server-seeded resume. */
function ChecklistForm({ data, toaster, side }: { data: PageData; toaster: Toaster; side: ReactNode }) {
  const tasks = TASKS_BY_ORIGIN[data.origin]
  const done = Math.floor((data.me.onboardingStep ?? 0) / ONBOARDING_STEP_UNIT)
  // G7: the server records how many tasks are done; those open as complete
  const completed = tasks.slice(0, done)
  // demo-chrome: app state the rules read — the domain-settings visit and the server's verify answers
  const [domainOpening, setDomainOpening] = useState(false)
  const [domainVisited, setDomainVisited] = useState(false)
  const [domainTries, setDomainTries] = useState(0)
  const form = useForm<OnboardingValues>({ defaultValues: defaultsFrom(data), context: { domainOpening, domainVisited, domainTries } })
  const finish = useSubmitPipeline(FINISH_PHASES)
  const report = (err: unknown) => toaster.push({ title: "Error", message: errorText(err), tone: "critical" })
  const liveSite = data.sites.find((s) => s.role === "primary")

  // each task's own mutation, then the progress write — fire-and-forget
  // (a failed progress write toasts but the task stays complete)
  const onStepComplete = async (id: string) => {
    const values = form.getValues()
    if (id === "routing") await server.routingImportRules({ onCreate: values.routing.onCreate === "true", onAssign: values.routing.onAssign === "true", onClose: values.routing.onClose === "true" })
    if (id === "source" && values.source.source !== "") await server.onboardingSetSource(values.source.source, values.source.otherSourceName)
    const index = tasks.findIndex((t) => t === id)
    void server.onboardingSetStep((index + 1) * ONBOARDING_STEP_UNIT).catch(report)
  }

  const step = (id: TaskId) => {
    switch (id) {
      case "routing":
        return <RoutingTask form={form} report={report} />
      case "sso":
        return <SsoTask form={form} report={report} classic={isClassicOrigin(data.origin)} site={liveSite} />
      case "widget":
        return <WidgetTask form={form} report={report} workspaceSlug={data.me.workspaceSlug ?? ""} />
      case "source":
        return <SourceTask report={report} />
      case "domain":
      case "domainV1":
      
  return (
          <DomainTask
            form={form}
            report={report}
            sites={data.sites}
            migrated={id === "domainV1"}
            toast={toaster.push}
            onVisit={(s) => {
              setDomainOpening(s === "opening")
              setDomainVisited(s === "visited")
            }}
            onVerified={(status) => {
              if (status) setDomainTries(0)
              else {
                setDomainTries((n) => n + 1)
                setDomainVisited(false)
              }
            }}
          />
        )
      case "calendar":
      case "mailbox":
        return <ConnectTask id={id} report={report} onAuth={() => new Promise((resolve) => setTimeout(resolve, 600))} />
    }
  }

  return (
    <TwoCol>
      <div className="flex min-w-0 flex-col gap-3">
        <PageBanners origin={data.origin} />
        <Form form={form} onSubmit={finish.onSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold">Set up your workspace</h3>
            <p className="text-[13px] text-muted-foreground">Finish these steps to get going. You can skip any of them and come back later from Settings.</p>
          </div>
          {/* a new account may open the tasks in any order — gap K */}
          <Wizard completed={completed} order={data.origin === "NEW-ACCOUNT" ? "free" : "linear"} onStepComplete={onStepComplete} progress={<WizardProgress />} nav={null}>
            {tasks.map((id) => (
              <Wizard.Step key={id} id={id} label={TASK_TITLES[id]}>
                {step(id)}
              </Wizard.Step>
            ))}
            <GoToInbox />
          </Wizard>
          <Form.Status
            className="text-sm"
            pending={<p className="text-muted-foreground">Finishing onboarding…</p>}
            success={() => <p className="font-medium text-emerald-700 dark:text-emerald-400">✓ onboardingStep is 100 — the app opens the inbox.</p>}
            error={(err, { retry }) => (
              <p className="flex flex-wrap items-center gap-2 text-destructive">
                {err.message}
                {retry ? (
                  <Button type="button" size="sm" variant="outline" onClick={retry}>
                    Retry
                  </Button>
                ) : null}
              </p>
            )}
          />
        </Form>
        <NotYetSupported what="the help articles listed under the checklist are CMS content, not a form — omitted" />
      </div>
      <div className="flex min-w-0 flex-col gap-3">
        {side}
        <LivePanel store={form} />
      </div>
    </TwoCol>
  )
}

/** The page's two banners. */
function PageBanners({ origin }: { origin: AccountOrigin }) {
  const text = originNotice(origin)
  return (
    <>
      {text !== null || isMigratedAccount(origin) ? (
        <div className="rounded-md border border-sky-500/30 bg-sky-500/5 px-3 py-2 text-[13px]">
          <p className="font-medium">Want us to move your workspace for you?</p>
          <p>Our team can carry over your settings, rules and channels — just get in touch.</p>
        </div>
      ) : null}
      {text !== null ? (
        <div className="rounded-md border border-amber-500/40 bg-amber-500/5 px-3 py-2 text-[13px]">
          <p className="font-medium">Your workspace was created on an earlier plan.</p>
          <p>{text}</p>
          <a className="text-primary underline-offset-2 hover:underline" href="https://docs.beacon.example/moving-workspaces" target="_blank" rel="noreferrer">
            Read the moving guide
          </a>
        </div>
      ) : null}
    </>
  )
}

/** Waits for the page load, then renders the checklist (or the inbox redirect at step 100). */
function LoadedPage({ load, toaster, side }: { load: Promise<PageData>; toaster: Toaster; side: ReactNode }) {
  const data = use(load)
  if ((data.me.onboardingStep ?? 0) === ONBOARDING_DONE) {
  
  return (
      <TwoCol>
        <p className="rounded-lg border p-4 text-[13px] font-medium text-emerald-700 dark:text-emerald-400">onboardingStep is 100: the app opens the inbox instead of showing this page.</p>
        <div className="flex min-w-0 flex-col gap-3">{side}</div>
      </TwoCol>
    )
  }
  return (
    <>
      <p className="mb-2 text-[13px] text-muted-foreground">
        Onboarding{isMigratedAccount(data.origin) && ORIGIN_NAMES[data.origin] ? \` · Moved from: \${ORIGIN_NAMES[data.origin]}\` : ""}
      </p>
      <ChecklistForm data={data} toaster={toaster} side={side} />
    </>
  )
}

const FAIL_LABELS: Readonly<Record<FailableOp, string>> = {
  onboardingSetSource: "setSource",
  routingImportRules: "importRules (routing)",
  onboardingSetStep: "setStep",
  accountRemoveLegacyRecords: "removeLegacyRecords",
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

/** The form beside its side panels (one column below lg). */
function TwoCol({ children, stack = false }: { children: ReactNode; stack?: boolean }) {
  return <div className={cn("grid grid-cols-1 gap-4", !stack && "lg:grid-cols-[minmax(0,1fr)_280px]")}>{Children.toArray(children)}</div>
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

// ---- the examples
export function OnboardingChecklistExample() {
  const srv = useSyncExternalStore(server.subscribe, server.snapshot, server.snapshot)
  // demo-chrome: one page load per "Reload from server"
  const [load, setLoad] = useState(firstLoad)
  const [loads, setLoads] = useState(0)
  const toaster = useToaster()
  const reload = () => {
    setLoad(loadPage())
    setLoads((n) => n + 1)
  }
  const side = (
    <SidePanel title="Server" meta="accountDetectOrigin · me.onboardingStep">
      <div className="flex flex-col gap-2 p-3 text-[13px]">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">Account origin (decided by the server)</span>
          <div className="flex flex-wrap gap-1" role="group" aria-label="Account origin">
            {ACCOUNT_ORIGIN_LIST.map((o) => (
              <Button
                key={o}
                type="button"
                size="sm"
                variant={srv.origin === o ? "default" : "outline"}
                aria-pressed={srv.origin === o}
                className="h-6 px-1.5 font-mono text-[11px]"
                onClick={() => {
                  server.setOrigin(o)
                  reload()
                }}
              >
                {o}
              </Button>
            ))}
          </div>
        </div>
        <p className="tabular-nums">
          onboardingStep <b>{srv.me.onboardingStep ?? 0}</b> · tasks {TASKS_BY_ORIGIN[srv.origin].join(" → ")}
        </p>
        <label className="flex items-center justify-between gap-3">
          <span>Verification record found on the domain (DNS check)</span>
          <Switch checked={srv.recordFoundOnDomain} onCheckedChange={server.setRecordFoundOnDomain} aria-label="Verification record found on the domain" />
        </label>
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground">Fail the next call ({STAND_IN_ERROR.split(" (")[0]})</span>
          {FAILABLE_OPS.map((op) => (
            <label key={op} className="flex items-center justify-between gap-3">
              <span className="font-mono text-[12px]">{FAIL_LABELS[op]}</span>
              <Switch checked={srv.failOnce.includes(op)} onCheckedChange={(on) => server.armFailure(op, on)} aria-label={\`Fail \${FAIL_LABELS[op]}\`} />
            </label>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" size="sm" variant="outline" onClick={reload}>
            Reload from server
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => {
              server.reset()
              reload()
            }}
          >
            Start over
          </Button>
        </div>
        {srv.log.length > 0 ? (
          <ol className="max-h-56 overflow-auto rounded border bg-muted/30 p-2 font-mono text-[11px]" data-server-log="">
            {srv.log.map((line, i) => (
              <li key={\`\${i}-\${line}\`}>{line}</li>
            ))}
          </ol>
        ) : null}
        <Badge variant="outline" className="w-fit">
          errors: response.errors[0].message
        </Badge>
      </div>
    </SidePanel>
  )
  return (
    <>
      <Suspense fallback={<p className="text-[13px] text-muted-foreground">Loading your workspace…</p>}>
        <LoadedPage key={loads} load={load} toaster={toaster} side={side} />
      </Suspense>
      <Toasts toasts={toaster.toasts} />
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Ue,()=>r(()=>import(`./onboarding-checklist-NziQmbaQ.js`),[]));function We(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(n,{title:`Onboarding checklist (real-world flow)`,children:[`The onboarding checklist of an invented help-desk app, built on the public API. The server decides where the account came from, which picks the tasks and their order; `,(0,O.jsx)(`code`,{children:`onboardingStep`}),` (tasks done × 10) seeds the wizard (`,(0,O.jsx)(`code`,{children:`<Wizard completed>`}),`) so a reload resumes; each task's own mutation runs in `,(0,O.jsx)(`code`,{children:`onStepComplete`}),`; the routing, sign-on and widget dialogs are sub-forms that commit into the page (`,(0,O.jsx)(`code`,{children:`SubFormDialog`}),`); the domain checkbox is verified by the server before it sticks (`,(0,O.jsx)(`code`,{children:`confirm`}),`); “Go to inbox” is a two-phase submit (`,(0,O.jsx)(`code`,{children:`useSubmitPipeline`}),`). Failures surface as a toast with`,` `,(0,O.jsx)(`code`,{children:`response.errors[0].message`}),` (`,(0,O.jsx)(`code`,{children:`mapErrors`}),`). Parts the engine cannot express are marked “Not yet supported”.`]}),(0,O.jsx)(te,{n:1,title:`Onboarding checklist`,blurb:`Pick an origin on the right, work through a task or two, then “Reload from server”: the checklist resumes where onboardingStep says.`,code:Ue,children:(0,O.jsx)(He,{})})]})}export{We as component};