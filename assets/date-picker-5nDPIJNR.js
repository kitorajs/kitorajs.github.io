import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./switch-CcCDBWVn.js";import{i as r,r as i,s as a,t as o}from"./field-E9FuDlTf.js";import{t as s}from"./input-CLjf4jLu.js";import{a as c}from"./responsive-CMvrjxlL.js";import{t as l}from"./builtin-languages-BBGHqN28.js";import{K as u,S as d,b as f,t as p}from"./time-CHK0yuAm.js";import{c as ee,n as m,p as h,y as te}from"./range-4a3xFGdf.js";import{t as ne}from"./calendar-BY88Q0lm.js";import{c as g,n as _,o as re,r as ie,s as v}from"./date-picker-DJgS8c6q.js";import{a as ae,m as oe,v as se}from"./zone-CNU5Cjz0.js";import{h as ce}from"./slots-CZAWbVQo.js";import{c as y,i as b,l as x,n as S,t as C}from"./select-C9p-qLj8.js";import{Dt as le,Ec as w,J as ue,Uc as de,ri as T,zc as fe}from"./index-BZuUy872.js";import{t as pe}from"./label-Cw7IrV7Q.js";import{a as me,i as he,n as ge,o as _e,r as ve,t as ye}from"./card-XcfOPVWP.js";import{t as E}from"./use-today-DTeyEg4P.js";import{t as be}from"./slot-picker-B9B5zRkD.js";import{n as D,t as O}from"./toggle-group-DGKH1xFk.js";import{t as k}from"./segmented-control-B-4xysrK.js";import{n as xe,t as Se}from"./month-picker-CDs3zXwf.js";import{t as Ce}from"./date-range-picker-Bq2DPGYu.js";var we=e({DatePickerAnalyticsCompare:()=>Te}),A=t(de(),1),j=fe();function Te(){let[e,t]=(0,A.useState)({preset:`last-30`,start:`2026-10-14`,end:`2026-11-12`}),[n,r]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{mode:`range`,presets:m,rollingPresets:!0,compare:`previous-period`,defaultCompareEnabled:!0,numberOfMonths:2,confirm:!0,value:e,onChange:(e,n)=>{t(e),r(n.compare??null)},"aria-label":`Report period`}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`compare `,(0,j.jsx)(`code`,{"data-demo-value":`compare`,children:JSON.stringify(n)})]})]})}var Ee=e({DatePickerAuto:()=>De});function De(){let[e,t]=(0,A.useState)(null),n=c();return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{value:e,onChange:t,"aria-label":`Delivery date`}),(0,j.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`opens as `,(0,j.jsx)(`code`,{"data-demo-value":`surface`,children:n}),` · value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var Oe=e({DatePickerBuildYourOwn:()=>ke});function M({today:e,name:t}){return(0,j.jsxs)(_.Root,{"aria-label":`Invoice date`,today:e,name:t,children:[(0,j.jsx)(_.Field,{end:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(_.Clear,{}),(0,j.jsx)(_.Surface,{children:(0,j.jsx)(`div`,{className:`flex w-max max-w-full flex-col`,children:(0,j.jsx)(_.Calendar,{})})})]})}),(0,j.jsx)(_.Announcer,{})]})}function N({today:e,name:t}){return(0,j.jsxs)(_.Root,{mode:`range`,confirm:!0,numberOfMonths:2,presets:m,"aria-label":`Booking window`,today:e,name:t,children:[(0,j.jsx)(_.Field,{end:(0,j.jsx)(_.Surface,{name:`Booking window`,align:`start`,className:`p-0`,children:(0,j.jsxs)(`div`,{className:`flex flex-col sm:flex-row`,children:[(0,j.jsx)(_.Presets,{className:`max-sm:w-0 max-sm:min-w-full`}),(0,j.jsxs)(`div`,{className:`flex flex-col`,children:[(0,j.jsx)(`div`,{className:`p-2`,children:(0,j.jsx)(_.Calendar,{})}),(0,j.jsxs)(_.Footer,{className:`w-0 min-w-full flex-wrap justify-end`,children:[(0,j.jsx)(_.Clear,{variant:`button`}),(0,j.jsx)(_.Cancel,{}),(0,j.jsx)(_.Apply,{})]})]})]})})}),(0,j.jsx)(_.Announcer,{})]})}function ke({mode:e,today:t,name:n}){return e===`single`?(0,j.jsx)(M,{today:t,name:n}):e===`range`?(0,j.jsx)(N,{today:t,name:n}):(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3 text-[13px]`,children:[(0,j.jsx)(M,{}),(0,j.jsx)(N,{})]})}var Ae=e({DatePickerCalendarSystems:()=>Me}),P=[{calendar:`gregory`,locale:`en-US`,dir:`ltr`},{calendar:`persian`,locale:`fa-IR`,dir:`rtl`},{calendar:`islamic-umalqura`,locale:`ar-SA`,dir:`rtl`},{calendar:`hebrew`,locale:`he-IL`,dir:`rtl`},{calendar:`japanese`,locale:`ja-JP`,dir:`ltr`},{calendar:`buddhist`,locale:`th-TH`,dir:`ltr`}],je=new Intl.DisplayNames(`en`,{type:`calendar`}),F=P.map(e=>({value:e.calendar,label:je.of(e.calendar)??e.calendar}));function Me(){let[e,t]=(0,A.useState)(`persian`),[r,i]=(0,A.useState)(!1),[a,o]=(0,A.useState)(null),s=P.find(t=>t.calendar===e)??P[0],c=r?`en-US`:s.locale;return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,j.jsxs)(C,{items:F,value:e,onValueChange:e=>t(P.find(t=>t.calendar===e)?.calendar??`gregory`),children:[(0,j.jsx)(y,{className:`w-60`,"aria-label":`Calendar`,children:(0,j.jsx)(x,{})}),(0,j.jsx)(S,{children:F.map(e=>(0,j.jsx)(b,{value:e.value,children:e.label},e.value))})]}),(0,j.jsx)(n,{checked:r,onCheckedChange:i,label:`English labels`})]}),(0,j.jsxs)(`div`,{dir:r?`ltr`:s.dir,className:`flex flex-col items-center gap-3`,children:[(0,j.jsx)(_,{calendar:e,locale:c,value:a,onChange:o,"aria-label":`Date`}),(0,j.jsx)(_,{calendar:e,locale:c,surface:`inline`,value:a,onChange:o,"aria-label":`Date, inline`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(a)})]})]})}var Ne=e({DatePickerComposeScheduleForm:()=>Pe}),I=30;function Pe(){let e=E();return(0,j.jsx)(Fe,{today:e},e)}function Fe({today:e}){let[t,n]=(0,A.useState)(`Release v2.4`),[r,i]=(0,A.useState)(d(e,1)),[a,o]=(0,A.useState)(null),c=(0,A.useId)(),l=(0,A.useId)(),u=(0,A.useId)(),f=e=>[0,6].includes(new Date(`${e}T00:00:00`).getDay()),p=r!==null&&r>=e&&r<=d(e,I)&&!f(r);return(0,j.jsxs)(ye,{className:`w-full max-w-sm`,children:[(0,j.jsxs)(me,{children:[(0,j.jsx)(_e,{children:`Schedule a release`}),(0,j.jsxs)(ve,{children:[`A weekday in the next `,I,` days.`]})]}),(0,j.jsx)(ge,{children:(0,j.jsxs)(`form`,{id:c,className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),p&&o(`${t} on ${r}`)},children:[(0,j.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,j.jsx)(pe,{htmlFor:l,children:`Title`}),(0,j.jsx)(s,{id:l,className:`h-7`,value:t,onChange:e=>n(e.currentTarget.value)})]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,j.jsx)(`span`,{className:`text-[13px] font-medium`,children:`Release day`}),(0,j.jsx)(_,{value:r,onChange:i,min:e,max:d(e,I),isDateDisabled:f,"aria-label":`Release day`,"aria-describedby":u,name:`day`}),(0,j.jsx)(`p`,{id:u,className:`text-[12px] text-muted-foreground`,children:r!==null&&!p?`Pick a weekday inside the window.`:`Weekends are greyed out.`})]})]})}),(0,j.jsxs)(he,{className:`flex items-center justify-between gap-2`,children:[(0,j.jsx)(`span`,{className:`truncate text-[12px] text-muted-foreground`,children:a??`Not scheduled`}),(0,j.jsx)(T,{size:`sm`,type:`submit`,form:c,disabled:!p,children:`Schedule`})]})]})}var Ie=e({DatePickerDateTime:()=>ze}),L=e=>e!==null&&(u(e)===0||u(e)===6),Le=e=>L(e)?`10:00`:`09:00`,Re=e=>L(e)?`16:00`:`18:00`;function ze(){let[e,t]=(0,A.useState)(null),[n,r]=(0,A.useState)({start:null,end:null}),[i,a]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-3`,children:[(0,j.jsx)(_,{granularity:`minute`,minuteStep:15,minTime:Le,maxTime:Re,timePresets:p,value:e,onChange:(e,n)=>{t(e),a(n)},"aria-label":`Appointment`}),(0,j.jsx)(_,{mode:`range`,granularity:`minute`,minuteStep:30,value:n,onChange:(e,t)=>{r(e),a(t)},"aria-label":`Meeting`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`appointment `,(0,j.jsx)(`code`,{"data-demo-value":`appointment`,children:JSON.stringify(e)}),` · meeting `,(0,j.jsx)(`code`,{"data-demo-value":`meeting`,children:JSON.stringify(n)}),` · details `,(0,j.jsx)(`code`,{"data-demo-value":`details`,children:i?JSON.stringify(i):`none yet`})]})]})}var Be=e({DatePickerDefault:()=>Ve});function Ve(){let[e,t]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{value:e,onChange:t,"aria-label":`Start date`,footer:e=>(0,j.jsx)(ie,{pick:e})}),(0,j.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`value: `,(0,j.jsx)(`code`,{children:JSON.stringify(e)})]})]})}var He=e({DatePickerDesignLanguage:()=>Ue}),R=l.map(e=>({value:e.id,label:e.label}));function Ue(){let e=E();return(0,j.jsx)(We,{today:e},e)}function We({today:e}){let[t,n]=(0,A.useState)(`macos`),[r,i]=(0,A.useState)({start:d(e,2),end:d(e,6)}),[a,o]=(0,A.useState)(null),s=l.find(e=>e.id===t)??le;return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(C,{items:R,value:t,onValueChange:e=>n(e??t),children:[(0,j.jsx)(y,{className:`w-40`,"aria-label":`Design language`,children:(0,j.jsx)(x,{})}),(0,j.jsx)(S,{children:R.map(e=>(0,j.jsx)(b,{value:e.value,children:e.label},e.value))})]}),(0,j.jsxs)(ue,{language:s,className:`flex w-full min-w-0 flex-col items-center gap-3 rounded-lg border bg-background p-3 text-foreground`,children:[(0,j.jsx)(_,{mode:`range`,surface:`inline`,value:r,onChange:i,"aria-label":`Stay in this language`}),(0,j.jsx)(_,{granularity:`minute`,minuteStep:30,value:a,onChange:o,"aria-label":`Meeting in this language`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`stay `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(r)}),` · meeting `,(0,j.jsx)(`code`,{"data-demo-value":`meeting`,children:JSON.stringify(a)})]})]})}var Ge=e({DatePickerDstDays:()=>Ke}),z=`America/New_York`,B=[{date:`2026-03-08`,label:`8 Mar (23 h)`},{date:`2026-11-01`,label:`1 Nov (25 h)`}];function Ke(){let[e,t]=(0,A.useState)(`2026-11-01`),[n,r]=(0,A.useState)(null),[i,a]=(0,A.useState)(null),[o,s]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(O,{value:[e],onValueChange:e=>{let n=B.find(t=>t.date===e[0]);n&&t(n.date)},variant:`outline`,size:`sm`,"aria-label":`Day`,children:B.map(e=>(0,j.jsx)(D,{value:e.date,children:e.label},e.date))}),(0,j.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-4`,children:[(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Floating: every wall time`}),(0,j.jsx)(v,{step:30,date:e,value:n,onChange:r,"aria-label":`Floating times`},`f-${e}`)]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsxs)(`span`,{className:`text-muted-foreground`,children:[z,`: `,se(e,z),` hours`]}),(0,j.jsx)(v,{step:30,date:e,timeZone:z,value:i?.time??null,occurrence:i?.details.occurrence===`later`?`later`:`earlier`,onChange:(e,t)=>a({time:e,details:t}),"aria-label":`New York times`},`z-${e}`)]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Columns: a gap's hour is disabled`}),(0,j.jsx)(re,{date:e,timeZone:z,hourCycle:24,minuteStep:15,value:o,onChange:s,"aria-label":`New York columns`},`c-${e}`)]})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`floating `,(0,j.jsx)(`code`,{"data-demo-value":`floating`,children:JSON.stringify(n)}),` · New York `,(0,j.jsx)(`code`,{"data-demo-value":`zoned`,children:i?JSON.stringify(i):`none yet`}),` · columns `,(0,j.jsx)(`code`,{"data-demo-value":`columns`,children:JSON.stringify(o)})]})]})}var qe=e({DatePickerErrors:()=>Je}),V=e=>u(e)===0||u(e)===6;function Je(){let e=E(),t=d(e,60),[n,r]=(0,A.useState)(null),[i,a]=(0,A.useState)(null),[o,s]=(0,A.useState)(`none`);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-3`,children:[(0,j.jsx)(_,{input:`text`,min:e,max:t,isDateDisabled:V,value:n,onChange:(e,t)=>{r(e),s(t.error??`none`)},"aria-label":`Delivery (text)`}),(0,j.jsx)(_,{min:e,max:t,isDateDisabled:V,value:i,onChange:(e,t)=>{a(e),s(t.error??`none`)},"aria-label":`Delivery (segments)`})]}),(0,j.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last details.error: `,(0,j.jsx)(`code`,{"data-demo-value":`error`,children:o})]})]})}var Ye=e({DatePickerFormSubmit:()=>Xe});function Xe(){let[e,t]=(0,A.useState)(null);return(0,j.jsxs)(`form`,{className:`flex max-w-md flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,j.jsxs)(o,{children:[(0,j.jsx)(a,{children:`Billing month`}),(0,j.jsx)(Se,{name:`month`,defaultValue:`2026-10`,required:!0}),(0,j.jsx)(i,{children:`Posts as YYYY-MM.`}),(0,j.jsx)(r,{match:`valueMissing`,children:`Pick a month.`})]}),(0,j.jsxs)(o,{children:[(0,j.jsx)(a,{children:`Fiscal year`}),(0,j.jsx)(xe,{name:`year`,min:2015,max:2030})]}),(0,j.jsxs)(o,{children:[(0,j.jsx)(a,{children:`Stay`}),(0,j.jsx)(Ce,{startName:`check-in`,endName:`check-out`,presets:[],required:!0}),(0,j.jsx)(i,{children:`Posts check-in and check-out as ISO dates.`})]}),(0,j.jsx)(T,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,j.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,j.jsx)(`code`,{children:e??`not submitted`})]})]})}var Ze=e({DatePickerFreeText:()=>$e}),Qe=[`en-US`,`en-GB`,`de-DE`];function $e(){let[e,t]=(0,A.useState)({});return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(`div`,{className:`flex flex-wrap items-start justify-center gap-3`,children:Qe.map(n=>(0,j.jsx)(_,{input:`text`,naturalLanguage:!1,locale:n,value:e[n]??null,onChange:e=>t(t=>({...t,[n]:e})),"aria-label":`Date (${n})`},n))}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`value: `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var et=e({DatePickerHolidays:()=>rt}),tt=e=>[e,e+1].flatMap(e=>[{date:`${e}-01-01`,reason:`New Year's Day`},{date:`${e}-07-04`,reason:`Independence Day`},{date:`${e}-12-25`,reason:`Christmas Day`},{date:`${e}-12-26`,reason:`Boxing Day`}]),nt=e=>[{dates:tt(e),reason:`Public holiday`},{ranges:[{start:`${e}-12-28`,end:`${e}-12-31`}],reason:`Year-end stocktake`},{weekdays:[0,6],reason:`Closed on weekends`}];function rt(){let e=Number(E().slice(0,4)),t=(0,A.useMemo)(()=>nt(e),[e]),[n,r]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{value:n,onChange:r,rules:t,disablePast:!0,"aria-label":`Delivery day`}),(0,j.jsx)(ne,{defaultMonth:`${e}-12-01`,rules:t,disablePast:!0,"aria-label":`December deliveries`,className:`rounded-lg border p-2`}),(0,j.jsxs)(`span`,{className:`text-muted-foreground`,children:[`value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:n??`null`})]})]})}var it=e({DatePickerHotelNights:()=>ot}),at=new Set([`2026-12-24`,`2026-12-25`,`2026-12-31`]);function ot(){let[e,t]=(0,A.useState)({start:`2026-12-04`,end:`2026-12-07`});return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{mode:`range`,lengthUnit:`nights`,minLength:2,maxLength:14,numberOfMonths:2,min:`2026-11-01`,isDateDisabled:e=>at.has(e),value:e,onChange:t,"aria-label":`Stay`}),(0,j.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[(0,j.jsx)(`code`,{"data-demo-value":`nights`,children:te(e,`nights`)}),` nights · value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var st=e({DatePickerInline:()=>ct});function ct(){let[e,t]=(0,A.useState)({start:null,end:null});return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{mode:`range`,surface:`inline`,numberOfMonths:2,value:e,onChange:t,name:`dates`}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var lt=e({DatePickerLeaveRequest:()=>dt}),H=e=>u(e)===0||u(e)===6;function ut(e){if(!e.start||!e.end)return 0;let t=0;for(let n=e.start;n<=e.end;n=d(n,1))H(n)||t++;return t}function dt(){let[e,t]=(0,A.useState)({start:`2026-12-21`,end:`2026-12-31`});return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{mode:`range`,allowsNonContiguousRanges:!0,fields:`one`,isDateDisabled:H,value:e,onChange:t,"aria-label":`Leave`}),(0,j.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[(0,j.jsx)(`code`,{"data-demo-value":`days`,children:ut(e)}),` working days · value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var ft=e({DatePickerMeetingZones:()=>mt}),pt=[`America/New_York`,`Europe/London`,`Asia/Kolkata`,`Asia/Tokyo`,`UTC+05:45`];function mt(){let[e,t]=(0,A.useState)(`America/New_York`),[n,r]=(0,A.useState)(`2026-11-11T14:00:00Z`),[i,a]=(0,A.useState)(null),[o,s]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-3`,children:[(0,j.jsx)(_,{granularity:`minute`,minuteStep:30,timeZone:e,onTimeZoneChange:t,zonePicker:!0,timeZones:pt,secondaryTimeZone:`Asia/Kolkata`,value:n,onChange:(e,t)=>{r(e),s(t)},"aria-label":`Team meeting`}),(0,j.jsx)(_,{granularity:`minute`,minuteStep:30,timeZone:`UTC+05:30`,valueKind:`zoned`,zoneDisplay:`offset`,value:n,onChange:(e,t)=>{a(e);let n=e===null?null:oe(e);r(n===null?null:ae(n)),s(t)},"aria-label":`Call at UTC+05:30`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`zone `,(0,j.jsx)(`code`,{"data-demo-value":`zone`,children:JSON.stringify(e)}),` · instant `,(0,j.jsx)(`code`,{"data-demo-value":`instant`,children:JSON.stringify(n)}),` · zoned `,(0,j.jsx)(`code`,{"data-demo-value":`zoned`,children:JSON.stringify(i)}),` · details `,(0,j.jsx)(`code`,{"data-demo-value":`details`,children:o?JSON.stringify(o):`none yet`})]})]})}var ht=e({DatePickerModes:()=>gt}),U=g.map(e=>({value:e,label:e}));function gt(){let[e,t]=(0,A.useState)(`week`),[n,r]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-2`,children:[(0,j.jsxs)(C,{items:U,value:e,onValueChange:e=>{let n=g.find(t=>t===e);n&&(t(n),r(null))},children:[(0,j.jsx)(y,{className:`w-36`,"aria-label":`Mode`,children:(0,j.jsx)(x,{})}),(0,j.jsx)(S,{children:U.map(e=>(0,j.jsx)(b,{value:e.value,children:e.label},e.value))})]}),(0,j.jsx)(_,{mode:e,onChange:(e,t)=>r({value:e,details:t}),"aria-label":`Any mode`},e)]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`onChange: `,(0,j.jsx)(`code`,{"data-demo-value":``,children:n?`${JSON.stringify(n.value)} ${JSON.stringify(n.details)}`:`none yet`})]})]})}var _t=e({DatePickerNaturalLanguage:()=>vt});function vt(){let[e,t]=(0,A.useState)(null),[n,r]=(0,A.useState)({start:null,end:null}),[i,a]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-3`,children:[(0,j.jsx)(_,{input:`text`,value:e,onChange:(e,n)=>{t(e),a(n)},"aria-label":`Due date`,placeholder:`Due: try next fri`}),(0,j.jsx)(_,{mode:`range`,input:`text`,value:n,onChange:(e,t)=>{r(e),a(t)},"aria-label":`Report range`,placeholder:`Range: try last 30 days`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`due `,(0,j.jsx)(`code`,{"data-demo-value":`due`,children:JSON.stringify(e)}),` · range `,(0,j.jsx)(`code`,{"data-demo-value":`range`,children:JSON.stringify(n)}),` · details `,(0,j.jsx)(`code`,{"data-demo-value":`details`,children:i?JSON.stringify(i):`none yet`})]})]})}var yt=e({DatePickerOpenEnded:()=>xt}),bt=[{id:`INV-1041`,date:`2025-12-18`},{id:`INV-1052`,date:`2026-01-09`},{id:`INV-1066`,date:`2026-03-02`},{id:`INV-1080`,date:`2026-06-21`},{id:`INV-1093`,date:`2026-10-30`}];function xt(){let[e,t]=(0,A.useState)({start:`2026-01-01`,end:null}),n=bt.filter(t=>ee(e,t.date));return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{mode:`range`,openEnded:!0,input:`text`,value:e,onChange:t,"aria-label":`Invoice dates`}),(0,j.jsx)(_,{mode:`range`,openEnded:!0,value:e,onChange:t,"aria-label":`Invoice dates (fields)`}),(0,j.jsxs)(`ul`,{"data-slot":`invoice-hits`,className:`w-full max-w-xs divide-y rounded-md border font-mono text-[12px]`,children:[n.length===0?(0,j.jsx)(`li`,{className:`px-2 py-1 text-muted-foreground`,children:`No invoices`}):null,n.map(e=>(0,j.jsxs)(`li`,{className:`flex justify-between px-2 py-1`,children:[(0,j.jsx)(`span`,{children:e.id}),(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:e.date})]},e.id))]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var St=e({DatePickerPeriods:()=>Ct});function Ct(){let[e,t]=(0,A.useState)({start:null,end:null}),[n,r]=(0,A.useState)({start:null,end:null}),[i,a]=(0,A.useState)(),[o,s]=(0,A.useState)(null),[c,l]=(0,A.useState)({start:null,end:null}),[u,d]=(0,A.useState)({start:`2026-01`,end:`2026-03`}),f=e=>(t,n)=>{e(t),a(n.isoWeek)};return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,j.jsx)(_,{mode:`week`,value:e,onChange:f(t),locale:`en-US`,"aria-label":`Week (en-US)`}),(0,j.jsx)(_,{mode:`week`,value:n,onChange:f(r),locale:`de-DE`,"aria-label":`Week (de-DE)`})]}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,j.jsx)(_,{mode:`quarter`,value:o,onChange:s,"aria-label":`Reporting quarter`}),(0,j.jsx)(_,{mode:`quarter-range`,value:c,onChange:l,"aria-label":`Quarters to compare`}),(0,j.jsx)(_,{mode:`month-range`,confirm:!0,value:u,onChange:d,"aria-label":`Billing months`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`en-US `,(0,j.jsx)(`code`,{"data-demo-value":`us`,children:JSON.stringify(e)}),` · de-DE `,(0,j.jsx)(`code`,{"data-demo-value":`de`,children:JSON.stringify(n)}),` · ISO week `,(0,j.jsx)(`code`,{"data-demo-value":`iso`,children:i??`–`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`quarter `,(0,j.jsx)(`code`,{"data-demo-value":`quarter`,children:JSON.stringify(o)}),` · quarters `,(0,j.jsx)(`code`,{"data-demo-value":`span`,children:JSON.stringify(c)}),` · months `,(0,j.jsx)(`code`,{"data-demo-value":`months`,children:JSON.stringify(u)})]})]})}var wt=e({DatePickerPresetsEveryMode:()=>Et}),W=g.map(e=>({value:e,label:e})),Tt=[{value:`accept`,label:`Pick and close`},{value:`stay`,label:`Pick and stay`}];function Et(){let[e,t]=(0,A.useState)(`month`),[r,i]=(0,A.useState)(`accept`),[a,o]=(0,A.useState)(!1),[s,c]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-lg flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-2`,children:[(0,j.jsxs)(C,{items:W,value:e,onValueChange:e=>{let n=g.find(t=>t===e);n&&(t(n),c(null))},children:[(0,j.jsx)(y,{className:`w-36`,"aria-label":`Preset mode`,children:(0,j.jsx)(x,{})}),(0,j.jsx)(S,{children:W.map(e=>(0,j.jsx)(b,{value:e.value,children:e.label},e.value))})]}),(0,j.jsx)(k,{semantics:`radio`,size:`xs`,options:Tt,value:r,onValueChange:i,"aria-label":`Preset behavior`}),(0,j.jsx)(n,{size:`sm`,checked:a,onCheckedChange:o,label:`Apply / Cancel`})]}),(0,j.jsx)(_,{mode:e,presets:h(e),presetBehavior:r,confirm:a,onChange:(e,t)=>c({value:e,details:t}),"aria-label":`Presets in any mode`},`${e}-${r}-${a}`),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`onChange: `,(0,j.jsx)(`code`,{"data-demo-value":``,children:s?`${JSON.stringify(s.value)} ${JSON.stringify(s.details)}`:`none yet`})]})]})}var Dt=e({DatePickerPriceCalendar:()=>Nt}),Ot=700,kt={usd:{symbol:`$`,rate:1},eur:{symbol:`€`,rate:.92}},At=[{value:`usd`,label:`USD`},{value:`eur`,label:`EUR`}];function jt(e){let t=Number(e.slice(8)),n=u(e)===0||u(e)===6;return 89+t*37%60+(n?40:0)}function Mt(e){let{symbol:t,rate:n}=kt[e];return(e,r)=>new Promise((i,a)=>{let o=setTimeout(()=>{let r={};for(let i=Number(e.start.slice(8));i<=Number(e.end.slice(8));i++){let a=`${e.start.slice(0,8)}${String(i).padStart(2,`0`)}`;if(i%11==0){r[a]={disabled:!0,reason:`Sold out`,label:`—`};continue}let o=Math.round(jt(a)*n);r[a]={label:`${t}${o}`,tone:o<110*n?`positive`:o>160*n?`negative`:`default`}}i(r)},Ot);r.addEventListener(`abort`,()=>{clearTimeout(o),a(r.reason)})})}function Nt(){let[e,t]=(0,A.useState)({start:null,end:null}),[n,r]=(0,A.useState)(`usd`);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(k,{semantics:`radio`,size:`xs`,options:At,value:n,onValueChange:r,"aria-label":`Currency`}),(0,j.jsx)(_,{mode:`range`,numberOfMonths:2,dayData:Mt(n),dayDataKey:n,disablePast:!0,value:e,onChange:t,"aria-label":`Trip`}),(0,j.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var Pt=e({DatePickerRightToLeft:()=>Ft});function Ft(){let[e,t]=(0,A.useState)({start:null,end:null}),[n,r]=(0,A.useState)(null),[i,a]=(0,A.useState)({start:null,end:null});return(0,j.jsxs)(`div`,{className:`flex w-full max-w-3xl flex-col items-center gap-4 text-[13px]`,children:[(0,j.jsxs)(`div`,{dir:`rtl`,lang:`fa`,className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,j.jsx)(_,{mode:`range`,locale:`fa-IR`,calendar:`persian`,presets:h(`range`),value:e,onChange:t,"aria-label":`اقامت`}),(0,j.jsx)(_,{mode:`range`,locale:`fa-IR`,calendar:`persian`,surface:`sheet`,value:e,onChange:t,"aria-label":`اقامت، برگه`})]}),(0,j.jsxs)(`div`,{dir:`rtl`,lang:`ar`,className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,j.jsx)(_,{granularity:`second`,locale:`ar-SA`,calendar:`islamic-umalqura`,value:n,onChange:r,"aria-label":`موعد`}),(0,j.jsx)(_,{mode:`range`,locale:`ar-SA`,calendar:`islamic-umalqura`,surface:`inline`,weekNumbers:!0,value:i,onChange:a,"aria-label":`رحلة`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[(0,j.jsx)(`code`,{"data-demo-value":`stay`,children:JSON.stringify(e)}),` · `,(0,j.jsx)(`code`,{"data-demo-value":`meeting`,children:JSON.stringify(n)}),` · `,(0,j.jsx)(`code`,{"data-demo-value":`trip`,children:JSON.stringify(i)})]})]})}var It=e({DatePickerSeconds:()=>Lt}),G=[12,24];function Lt(){let[e,t]=(0,A.useState)(null),[n,r]=(0,A.useState)(24);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-2`,children:[(0,j.jsx)(O,{value:[String(n)],onValueChange:e=>{let t=G.find(t=>String(t)===e[0]);t&&r(t)},variant:`outline`,size:`sm`,"aria-label":`Clock`,children:G.map(e=>(0,j.jsxs)(D,{value:String(e),children:[e,` h`]},e))}),(0,j.jsx)(_,{granularity:`second`,secondStep:5,hourCycle:n,value:e,onChange:t,"aria-label":`Log entry`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var Rt=e({DatePickerSheet:()=>zt});function zt(){let[e,t]=(0,A.useState)({start:null,end:null});return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{mode:`range`,surface:`sheet`,lengthUnit:`nights`,minLength:1,presets:h(`range`),value:e,onChange:t,"aria-label":`Getaway`}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`value `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var Bt=e({DatePickerShift:()=>Wt}),K=60,Vt=3600,Ht=4,Ut=10;function Wt(){let[e,t]=(0,A.useState)({start:`22:00`,end:`06:00`}),n=e.start&&e.end?f(e.start,e.end,!0):null;return(0,j.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{mode:`time-range`,overnight:!0,minuteStep:30,minLength:Ht*K,maxLength:Ut*K,value:e,onChange:t,"aria-label":`Shift`}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`shift `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)}),n===null?``:` · ${n/Vt} h`]})]})}var Gt=e({DatePickerSlotPicker:()=>Jt}),Kt={timeZone:`Asia/Kolkata`,weekly:ce({1:[[`10:00`,`13:00`]],2:[[`14:00`,`18:00`]],3:[[`10:00`,`13:00`]],4:[[`14:00`,`18:00`]]})},qt={load:()=>Promise.resolve({availability:Kt,busy:[]})};function Jt(){let[e,t]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,j.jsx)(be,{availability:qt,durations:[30,45],rules:{minNoticeMinutes:60},value:e,onChange:t,"aria-label":`Office hours`}),(0,j.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Value: `,(0,j.jsx)(`code`,{className:`break-all`,children:e?JSON.stringify(e):`null`})]})]})}var Yt=e({DatePickerTimeRange:()=>Xt});function Xt(){let[e,t]=(0,A.useState)(`07:30`),[n,r]=(0,A.useState)({start:`09:00`,end:`17:30`});return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-3`,children:[(0,j.jsx)(_,{mode:`time`,timePanel:`columns`,minuteStep:5,value:e,onChange:t,"aria-label":`Alarm`}),(0,j.jsx)(_,{mode:`time-range`,minuteStep:30,value:n,onChange:r,"aria-label":`Opening hours`})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`alarm `,(0,j.jsx)(`code`,{"data-demo-value":`alarm`,children:JSON.stringify(e)}),` · hours `,(0,j.jsx)(`code`,{"data-demo-value":`hours`,children:JSON.stringify(n)})]})]})}var Zt=e({DatePickerTypedDateTime:()=>$t}),Qt=[{locale:`en-US`,label:`Date and time (en-US)`},{locale:`de-DE`,label:`Datum und Uhrzeit (de-DE)`},{locale:`ko-KR`,label:`Date and time (ko-KR)`}];function $t(){let[e,t]=(0,A.useState)({"en-US":`2026-11-15T15:30`});return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(`div`,{className:`flex flex-wrap items-start justify-center gap-3`,children:Qt.map(({locale:n,label:r})=>(0,j.jsx)(_,{input:`text`,granularity:`minute`,locale:n,value:e[n]??null,onChange:e=>t(t=>({...t,[n]:e})),"aria-label":r},n))}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`value: `,(0,j.jsx)(`code`,{"data-demo-value":``,children:JSON.stringify(e)})]})]})}var en=e({DatePickerUtcLogSearch:()=>nn}),tn=[{at:`2026-11-12T07:58:12Z`,line:`worker: queue drained`},{at:`2026-11-12T08:04:40Z`,line:`api: 502 from billing`},{at:`2026-11-12T08:31:05Z`,line:`api: retry ok`},{at:`2026-11-12T09:12:59Z`,line:`cron: nightly export done`},{at:`2026-11-12T10:45:00Z`,line:`deploy: v2.4.1 live`}];function nn(){let[e,t]=(0,A.useState)({start:`2026-11-12T08:00:00Z`,end:`2026-11-12T09:30:00Z`}),n=tn.filter(t=>e.start!==null&&e.end!==null&&t.at>=e.start&&t.at<=e.end);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsx)(_,{mode:`range`,granularity:`minute`,minuteStep:30,timeZone:`UTC`,zonePicker:`locked`,hourCycle:24,value:e,onChange:t,"aria-label":`Log window`}),(0,j.jsxs)(`ul`,{"data-slot":`log-hits`,className:`w-full max-w-sm divide-y rounded-md border font-mono text-[12px]`,children:[n.length===0?(0,j.jsx)(`li`,{className:`px-2 py-1 text-muted-foreground`,children:`No lines in this window`}):null,n.map(e=>(0,j.jsxs)(`li`,{className:`flex gap-2 px-2 py-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:e.at.slice(11,19)}),(0,j.jsx)(`span`,{className:`truncate`,children:e.line})]},e.at))]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`window `,(0,j.jsx)(`code`,{"data-demo-value":`window`,children:JSON.stringify(e)})]}),(0,j.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[(0,j.jsx)(`code`,{"data-demo-value":`hits`,children:n.length}),` matching lines`]})]})}var rn=e({DatePickerWeekNumbers:()=>an});function an(){let[e,t]=(0,A.useState)(null),[n,r]=(0,A.useState)({start:null,end:null}),[i,a]=(0,A.useState)();return(0,j.jsxs)(`div`,{className:`flex w-full max-w-3xl flex-col items-center gap-3 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,j.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`de-DE, ISO weeks`}),(0,j.jsx)(_,{surface:`inline`,locale:`de-DE`,weekNumbers:!0,value:e,onChange:t,"aria-label":`Datum`})]}),(0,j.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`en-US, locale weeks`}),(0,j.jsx)(_,{mode:`week`,surface:`inline`,locale:`en-US`,weekNumbers:`locale`,value:n,onChange:(e,t)=>{r(e),a(t.isoWeek)},"aria-label":`Week`})]})]}),(0,j.jsxs)(`span`,{className:`max-w-full break-all text-center text-muted-foreground tabular-nums`,children:[`day `,(0,j.jsx)(`code`,{"data-demo-value":`day`,children:JSON.stringify(e)}),` · week `,(0,j.jsx)(`code`,{"data-demo-value":`week`,children:JSON.stringify(n)}),` · ISO week `,(0,j.jsx)(`code`,{"data-demo-value":`iso`,children:i??`–`})]})]})}var q=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { DEFAULT_RANGE_PRESETS, type DateRange, type RollingRange } from "@kitora/pickers/core"
import type { DatePickerAnyValue } from "@kitora/pickers/react"

export function DatePickerAnalyticsCompare() {
  // A rolling value as it would come back from storage: "last 30 days" re-resolves against today when shown.
  const [range, setRange] = useState<DateRange | RollingRange>({ preset: "last-30", start: "2026-10-14", end: "2026-11-12" })
  const [compare, setCompare] = useState<DatePickerAnyValue | null>(null)
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      {/* rollingPresets: a preset pick stores { preset, start, end }; compare: DatePicker.Compare in the surface, the compare range in details.compare */}
      <DatePicker
        mode="range"
        presets={DEFAULT_RANGE_PRESETS}
        rollingPresets
        compare="previous-period"
        defaultCompareEnabled
        numberOfMonths={2}
        confirm
        value={range}
        onChange={(value, details) => {
          setRange(value)
          setCompare(details.compare ?? null)
        }}
        aria-label="Report period"
      />
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        value <code data-demo-value="">{JSON.stringify(range)}</code>
      </span>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        compare <code data-demo-value="compare">{JSON.stringify(compare)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>w(()=>import(`./analytics-compare-ChP0fnN2.js`),[]));var J=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { IsoDate } from "@kitora/pickers/core"
import { useFieldOverlaySurface } from "@kitora/overlay"

export function DatePickerAuto() {
  const [day, setDay] = useState<IsoDate | null>(null)
  // The same rule the picker reads: a sheet below md or under a touch pointer, a popover otherwise.
  const surface = useFieldOverlaySurface()
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      {/* surface="auto" is the default: resize the window below 768 px, or open this page on a phone, and the same picker opens a sheet (on a touch screen its field turns read-only, so a tap opens the sheet instead of the keyboard) */}
      <DatePicker value={day} onChange={setDay} aria-label="Delivery date" />
      <span className="text-muted-foreground tabular-nums">
        opens as <code data-demo-value="surface">{surface}</code> · value <code data-demo-value="">{JSON.stringify(day)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>w(()=>import(`./auto-DfoA7rf5.js`),[]));var Y=`import { DatePicker } from "@kitora/pickers/ui"
import { DEFAULT_RANGE_PRESETS, type IsoDate } from "@kitora/pickers/core"

/** A single date: the typed field, a clear button and a popover calendar, from \`DatePicker\`'s parts (the preset is built from the same ones). */
function SingleDate({ today, name }: { today?: IsoDate; name?: string }) {
  return (
    <DatePicker.Root aria-label="Invoice date" today={today} name={name}>
      <DatePicker.Field
        end={
          <>
            <DatePicker.Clear />
            <DatePicker.Surface>
              <div className="flex w-max max-w-full flex-col">
                <DatePicker.Calendar />
              </div>
            </DatePicker.Surface>
          </>
        }
      />
      <DatePicker.Announcer />
    </DatePicker.Root>
  )
}

/** A range with presets, two months and Apply / Cancel: what \`DateRangePicker\` draws, composed here from the same parts. */
function DateRange({ today, name }: { today?: IsoDate; name?: string }) {
  return (
    <DatePicker.Root mode="range" confirm numberOfMonths={2} presets={DEFAULT_RANGE_PRESETS} aria-label="Booking window" today={today} name={name}>
      <DatePicker.Field
        end={
          <DatePicker.Surface name="Booking window" align="start" className="p-0">
            <div className="flex flex-col sm:flex-row">
              <DatePicker.Presets className="max-sm:w-0 max-sm:min-w-full" />
              <div className="flex flex-col">
                <div className="p-2">
                  <DatePicker.Calendar />
                </div>
                <DatePicker.Footer className="w-0 min-w-full flex-wrap justify-end">
                  <DatePicker.Clear variant="button" />
                  <DatePicker.Cancel />
                  <DatePicker.Apply />
                </DatePicker.Footer>
              </div>
            </div>
          </DatePicker.Surface>
        }
      />
      <DatePicker.Announcer />
    </DatePicker.Root>
  )
}

/** A date picker and a range picker built from \`DatePicker\`'s public parts: \`Root\`, \`Field\`, \`Clear\`, \`Surface\`, \`Presets\`, \`Calendar\`, \`Footer\`, \`Apply\`, \`Cancel\`, \`Announcer\`. */
export function DatePickerBuildYourOwn({ mode, today, name }: { mode?: "single" | "range"; today?: IsoDate; name?: string }) {
  if (mode === "single") return <SingleDate today={today} name={name} />
  if (mode === "range") return <DateRange today={today} name={name} />
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 text-[13px]">
      <SingleDate />
      <DateRange />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>w(()=>import(`./build-your-own-OlrRnKXE.js`),[]));var X=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { CalendarId, IsoDate } from "@kitora/pickers/core"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"
import { Switch } from "@kitora/ui/switch"

/** Each calendar with the locale that writes it natively and that locale's direction. */
const SYSTEMS: readonly { readonly calendar: CalendarId; readonly locale: string; readonly dir: "ltr" | "rtl" }[] = [
  { calendar: "gregory", locale: "en-US", dir: "ltr" },
  { calendar: "persian", locale: "fa-IR", dir: "rtl" },
  { calendar: "islamic-umalqura", locale: "ar-SA", dir: "rtl" },
  { calendar: "hebrew", locale: "he-IL", dir: "rtl" },
  { calendar: "japanese", locale: "ja-JP", dir: "ltr" },
  { calendar: "buddhist", locale: "th-TH", dir: "ltr" },
]

/** The calendar names come from the engine (Intl.DisplayNames), in English. */
const names = new Intl.DisplayNames("en", { type: "calendar" })
const ITEMS = SYSTEMS.map((s) => ({ value: s.calendar, label: names.of(s.calendar) ?? s.calendar }))

export function DatePickerCalendarSystems() {
  const [calendar, setCalendar] = useState<CalendarId>("persian")
  const [english, setEnglish] = useState(false)
  const [value, setValue] = useState<IsoDate | null>(null)
  const system = SYSTEMS.find((s) => s.calendar === calendar) ?? SYSTEMS[0]
  const locale = english ? "en-US" : system.locale
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Select items={ITEMS} value={calendar} onValueChange={(next) => setCalendar(SYSTEMS.find((s) => s.calendar === next)?.calendar ?? "gregory")}>
          <SelectTrigger className="w-60" aria-label="Calendar">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ITEMS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Switch checked={english} onCheckedChange={setEnglish} label="English labels" />
      </div>
      {/* calendar= draws the grid, the caption, paging and the month / year drill views in that calendar; the value stays an ISO Gregorian date */}
      <div dir={english ? "ltr" : system.dir} className="flex flex-col items-center gap-3">
        <DatePicker calendar={calendar} locale={locale} value={value} onChange={setValue} aria-label="Date" />
        <DatePicker calendar={calendar} locale={locale} surface="inline" value={value} onChange={setValue} aria-label="Date, inline" />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        value <code data-demo-value="">{JSON.stringify(value)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>w(()=>import(`./calendar-systems-DUmddPYc.js`),[]));var Z=`import { useId, useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { useToday } from "@kitora/pickers/react"
import { addDays, type IsoDate } from "@kitora/pickers/core"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

const MAX_DAYS_OUT = 30

export function DatePickerComposeScheduleForm() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useToday()
  return <ScheduleForm key={today} today={today} />
}

function ScheduleForm({ today }: { today: IsoDate }) {
  const [title, setTitle] = useState("Release v2.4")
  const [day, setDay] = useState<IsoDate | null>(addDays(today, 1))
  const [saved, setSaved] = useState<string | null>(null)
  const formId = useId()
  const titleId = useId()
  const helpId = useId()
  // min / max bound the calendar and the typed value; weekends are blocked too
  const isWeekend = (iso: IsoDate) => [0, 6].includes(new Date(\`\${iso}T00:00:00\`).getDay())
  const valid = day !== null && day >= today && day <= addDays(today, MAX_DAYS_OUT) && !isWeekend(day)
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Schedule a release</CardTitle>
        <CardDescription>A weekday in the next {MAX_DAYS_OUT} days.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id={formId}
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            if (valid) setSaved(\`\${title} on \${day}\`)
          }}
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={titleId}>Title</Label>
            <Input id={titleId} className="h-7" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium">Release day</span>
            <DatePicker value={day} onChange={setDay} min={today} max={addDays(today, MAX_DAYS_OUT)} isDateDisabled={isWeekend} aria-label="Release day" aria-describedby={helpId} name="day" />
            <p id={helpId} className="text-[12px] text-muted-foreground">
              {day !== null && !valid ? "Pick a weekday inside the window." : "Weekends are greyed out."}
            </p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2">
        <span className="truncate text-[12px] text-muted-foreground">{saved ?? "Not scheduled"}</span>
        <Button size="sm" type="submit" form={formId} disabled={!valid}>
          Schedule
        </Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>w(()=>import(`./compose-D11Dv_Xu.js`),[]));var on=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { DEFAULT_TIME_PRESETS, weekdayOf, type IsoDate, type IsoDateTime, type PeriodRange } from "@kitora/pickers/core"
import type { DatePickerChangeDetails } from "@kitora/pickers/react"

/** Opening hours per date: 09:00–18:00 on weekdays, 10:00–16:00 at the weekend. */
const weekend = (date: IsoDate | null) => date !== null && (weekdayOf(date) === 0 || weekdayOf(date) === 6)
const opens = (date: IsoDate | null) => (weekend(date) ? "10:00" : "09:00")
const closes = (date: IsoDate | null) => (weekend(date) ? "16:00" : "18:00")

export function DatePickerDateTime() {
  const [start, setStart] = useState<IsoDateTime | null>(null)
  const [stay, setStay] = useState<PeriodRange<IsoDateTime>>({ start: null, end: null })
  const [details, setDetails] = useState<DatePickerChangeDetails | null>(null)
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-start justify-center gap-3">
        {/* granularity="minute": the value is a floating ISO date-time; Now, Noon and End of day sit above the list */}
        <DatePicker
          granularity="minute"
          minuteStep={15}
          minTime={opens}
          maxTime={closes}
          timePresets={DEFAULT_TIME_PRESETS}
          value={start}
          onChange={(value, d) => {
            setStart(value)
            setDetails(d)
          }}
          aria-label="Appointment"
        />
        {/* mode="range" with a granularity: two date-times; on one day the end list starts at the start time */}
        <DatePicker
          mode="range"
          granularity="minute"
          minuteStep={30}
          value={stay}
          onChange={(value, d) => {
            setStay(value)
            setDetails(d)
          }}
          aria-label="Meeting"
        />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        appointment <code data-demo-value="appointment">{JSON.stringify(start)}</code> · meeting <code data-demo-value="meeting">{JSON.stringify(stay)}</code> · details <code data-demo-value="details">{details ? JSON.stringify(details) : "none yet"}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(on,()=>w(()=>import(`./date-time-BzDFcqOu.js`),[]));var sn=`import { useState } from "react"
import { DatePicker, TodayButton } from "@kitora/pickers/ui"
import type { IsoDate } from "@kitora/pickers/core"

export function DatePickerDefault() {
  const [value, setValue] = useState<IsoDate | null>(null)
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 text-[13px]">
      {/* the field stays typeable (↑/↓ step a segment); the calendar writes into it */}
      <DatePicker value={value} onChange={setValue} aria-label="Start date" footer={(pick) => <TodayButton pick={pick} />} />
      <span className="text-muted-foreground tabular-nums">
        value: <code>{JSON.stringify(value)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(sn,()=>w(()=>import(`./default-CMz3FUVI.js`),[]));var cn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { useToday } from "@kitora/pickers/react"
import { addDays, type DateRange, type IsoDate, type IsoDateTime } from "@kitora/pickers/core"
import { BUILTIN_LANGUAGES, KITORA_LANGUAGE } from "@kitora/theme/core"
import { LanguageScope } from "@kitora/theme/react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const LANGUAGES = BUILTIN_LANGUAGES.map((l) => ({ value: l.id, label: l.label }))
export function DatePickerDesignLanguage() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const today = useToday()
  return <DesignLanguageDemo key={today} today={today} />
}

function DesignLanguageDemo({ today }: { today: IsoDate }) {
  const [languageId, setLanguageId] = useState("macos")
  const [stay, setStay] = useState<DateRange>({ start: addDays(today, 2), end: addDays(today, 6) })
  const [meeting, setMeeting] = useState<IsoDateTime | null>(null)
  const language = BUILTIN_LANGUAGES.find((l) => l.id === languageId) ?? KITORA_LANGUAGE
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <Select items={LANGUAGES} value={languageId} onValueChange={(next) => setLanguageId(next ?? languageId)}>
        <SelectTrigger className="w-40" aria-label="Design language">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {LANGUAGES.map((l) => (
            <SelectItem key={l.value} value={l.value}>
              {l.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* the language's calendar slot: cell size, corners, selected fill and shape, today, range band, weekday case, caption, time rows */}
      <LanguageScope language={language} className="flex w-full min-w-0 flex-col items-center gap-3 rounded-lg border bg-background p-3 text-foreground">
        <DatePicker mode="range" surface="inline" value={stay} onChange={setStay} aria-label="Stay in this language" />
        {/* the field reads the input slot; its popover the popover slot, its time list the calendar slot's row height */}
        <DatePicker granularity="minute" minuteStep={30} value={meeting} onChange={setMeeting} aria-label="Meeting in this language" />
      </LanguageScope>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        stay <code data-demo-value="">{JSON.stringify(stay)}</code> · meeting <code data-demo-value="meeting">{JSON.stringify(meeting)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(cn,()=>w(()=>import(`./design-language-Ur1GqpUT.js`),[]));var ln=`import { useState } from "react"
import { TimeColumns, TimeList } from "@kitora/pickers/ui"
import { zonedDayHours, type IsoDate, type IsoTime } from "@kitora/pickers/core"
import type { TimePanelChangeDetails } from "@kitora/pickers/react"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"

const ZONE = "America/New_York"
/** New York's 2026 changes: 8 March skips 02:00–02:59, 1 November repeats 01:00–01:59. */
const DAYS: readonly { readonly date: IsoDate; readonly label: string }[] = [
  { date: "2026-03-08", label: "8 Mar (23 h)" },
  { date: "2026-11-01", label: "1 Nov (25 h)" },
]

export function DatePickerDstDays() {
  const [date, setDate] = useState<IsoDate>("2026-11-01")
  const [floating, setFloating] = useState<IsoTime | null>(null)
  const [zoned, setZoned] = useState<{ time: IsoTime; details: TimePanelChangeDetails } | null>(null)
  const [columns, setColumns] = useState<IsoTime | null>(null)
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      <ToggleGroup
        value={[date]}
        onValueChange={(next) => {
          const picked = DAYS.find((d) => d.date === next[0])
          if (picked) setDate(picked.date)
        }}
        variant="outline"
        size="sm"
        aria-label="Day"
      >
        {DAYS.map((d) => (
          <ToggleGroupItem key={d.date} value={d.date}>
            {d.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">Floating: every wall time</span>
          {/* no zone: a floating time exists on every day, so the list has all 48 half hours */}
          <TimeList key={\`f-\${date}\`} step={30} date={date} value={floating} onChange={setFloating} aria-label="Floating times" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">
            {ZONE}: {zonedDayHours(date, ZONE)} hours
          </span>
          {/* with a zone: the gap's times are gone, the repeated hour shows twice (EDT, then EST) */}
          <TimeList key={\`z-\${date}\`} step={30} date={date} timeZone={ZONE} value={zoned?.time ?? null} occurrence={zoned?.details.occurrence === "later" ? "later" : "earlier"} onChange={(time, details) => setZoned({ time, details })} aria-label="New York times" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">Columns: a gap's hour is disabled</span>
          {/* columns cannot show an hour twice: they disable the gap and take the earlier pass of a repeated time */}
          <TimeColumns key={\`c-\${date}\`} date={date} timeZone={ZONE} hourCycle={24} minuteStep={15} value={columns} onChange={setColumns} aria-label="New York columns" />
        </div>
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        floating <code data-demo-value="floating">{JSON.stringify(floating)}</code> · New York <code data-demo-value="zoned">{zoned ? JSON.stringify(zoned) : "none yet"}</code> · columns <code data-demo-value="columns">{JSON.stringify(columns)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(ln,()=>w(()=>import(`./dst-days-DRJ2eCbp.js`),[]));var un=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { useToday } from "@kitora/pickers/react"
import { addDays, weekdayOf, type DateFieldError, type IsoDate } from "@kitora/pickers/core"

/** Weekends are closed: a typed or parsed Saturday commits with \`details.error: "disabled"\`. */
const closed = (iso: IsoDate) => weekdayOf(iso) === 0 || weekdayOf(iso) === 6

export function DatePickerErrors() {
  // today and 60 days out: the reader's (the build's until hydration, so the server HTML matches)
  const today = useToday()
  const max = addDays(today, 60)
  const [text, setText] = useState<IsoDate | null>(null)
  const [typed, setTyped] = useState<IsoDate | null>(null)
  const [error, setError] = useState<DateFieldError | "none">("none")
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-start justify-center gap-3">
        {/* text: "someday" is invalid, "15-20 dec" the wrong kind, "sat" disabled, "next year" out of range */}
        <DatePicker
          input="text"
          min={today}
          max={max}
          isDateDisabled={closed}
          value={text}
          onChange={(value, details) => {
            setText(value)
            setError(details.error ?? "none")
          }}
          aria-label="Delivery (text)"
        />
        {/* segments: the same rules; T, + and − land on a closed day too, and say so */}
        <DatePicker
          min={today}
          max={max}
          isDateDisabled={closed}
          value={typed}
          onChange={(value, details) => {
            setTyped(value)
            setError(details.error ?? "none")
          }}
          aria-label="Delivery (segments)"
        />
      </div>
      <span className="text-muted-foreground tabular-nums">
        last details.error: <code data-demo-value="error">{error}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(un,()=>w(()=>import(`./errors-GPXzeq9d.js`),[]));var dn=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { DateRangePicker, MonthPicker, YearPicker } from "@kitora/pickers"

/** Each picker posts with a plain \`<form>\`: \`name\` writes hidden inputs, \`required\` refuses an empty submit, a Field's label names it. */
export function DatePickerFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex max-w-md flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field>
        <FieldLabel>Billing month</FieldLabel>
        <MonthPicker name="month" defaultValue="2026-10" required />
        <FieldDescription>Posts as YYYY-MM.</FieldDescription>
        <FieldError match="valueMissing">Pick a month.</FieldError>
      </Field>
      <Field>
        <FieldLabel>Fiscal year</FieldLabel>
        <YearPicker name="year" min={2015} max={2030} />
      </Field>
      <Field>
        <FieldLabel>Stay</FieldLabel>
        <DateRangePicker startName="check-in" endName="check-out" presets={[]} required />
        <FieldDescription>Posts check-in and check-out as ISO dates.</FieldDescription>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(dn,()=>w(()=>import(`./form-submit-36R4GZ-i.js`),[]));var fn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { IsoDate } from "@kitora/pickers/core"

const LOCALES = ["en-US", "en-GB", "de-DE"] as const

export function DatePickerFreeText() {
  const [values, setValues] = useState<Record<string, IsoDate | null>>({})
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-start justify-center gap-3">
        {LOCALES.map((locale) => (
          // input="text": type in the locale's numeric order, a month name or ISO; formats only here
          <DatePicker
            key={locale}
            input="text"
            naturalLanguage={false}
            locale={locale}
            value={values[locale] ?? null}
            onChange={(value) => setValues((v) => ({ ...v, [locale]: value }))}
            aria-label={\`Date (\${locale})\`}
          />
        ))}
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        value: <code data-demo-value="">{JSON.stringify(values)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(fn,()=>w(()=>import(`./free-text-8yt2n-60.js`),[]));var pn=`import { useMemo, useState } from "react"
import { Calendar, DatePicker } from "@kitora/pickers/ui"
import { useToday } from "@kitora/pickers/react"
import type { DateRule, IsoDate } from "@kitora/pickers/core"

/** This year's and next year's public holidays, each with its own name as the reason. */
const holidaysFrom = (year: number) => [year, year + 1].flatMap((y) => [
  { date: \`\${y}-01-01\`, reason: "New Year's Day" },
  { date: \`\${y}-07-04\`, reason: "Independence Day" },
  { date: \`\${y}-12-25\`, reason: "Christmas Day" },
  { date: \`\${y}-12-26\`, reason: "Boxing Day" },
])

/** Rules as plain data: the same array can go into a form definition and be checked on the server. The first rule that matches gives the reason, so the named days come first. */
const rulesFor = (year: number): readonly DateRule[] => [
  { dates: holidaysFrom(year), reason: "Public holiday" },
  { ranges: [{ start: \`\${year}-12-28\`, end: \`\${year}-12-31\` }], reason: "Year-end stocktake" },
  { weekdays: [0, 6], reason: "Closed on weekends" },
]

export function DatePickerHolidays() {
  // this year: the reader's (the build's until hydration, so the server HTML matches)
  const year = Number(useToday().slice(0, 4))
  const RULES = useMemo(() => rulesFor(year), [year])
  const [day, setDay] = useState<IsoDate | null>(null)
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      {/* Hover or focus a greyed day: its reason shows under the grid, as a tooltip, and is read by screen readers. */}
      <DatePicker value={day} onChange={setDay} rules={RULES} disablePast aria-label="Delivery day" />
      <Calendar defaultMonth={\`\${year}-12-01\`} rules={RULES} disablePast aria-label="December deliveries" className="rounded-lg border p-2" />
      <span className="text-muted-foreground">
        value <code data-demo-value="">{day ?? "null"}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(pn,()=>w(()=>import(`./holidays-D8EBRmJ6.js`),[]));var mn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { rangeLengthIn, type DateRange, type IsoDate } from "@kitora/pickers/core"

/** Nights the hotel is full: no stay may run through them. */
const SOLD_OUT: ReadonlySet<IsoDate> = new Set(["2026-12-24", "2026-12-25", "2026-12-31"])

export function DatePickerHotelNights() {
  const [stay, setStay] = useState<DateRange>({ start: "2026-12-04", end: "2026-12-07" })
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      {/* lengthUnit="nights": a 3-night stay spans 4 days; minLength / maxLength count nights. Drag either end, or Shift+arrows on a focused end. */}
      <DatePicker
        mode="range"
        lengthUnit="nights"
        minLength={2}
        maxLength={14}
        numberOfMonths={2}
        min="2026-11-01"
        isDateDisabled={(iso) => SOLD_OUT.has(iso)}
        value={stay}
        onChange={setStay}
        aria-label="Stay"
      />
      <span className="text-muted-foreground tabular-nums">
        <code data-demo-value="nights">{rangeLengthIn(stay, "nights")}</code> nights · value <code data-demo-value="">{JSON.stringify(stay)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(mn,()=>w(()=>import(`./hotel-nights-CjcLKRpP.js`),[]));var hn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { DateRange } from "@kitora/pickers/core"

export function DatePickerInline() {
  const [range, setRange] = useState<DateRange>({ start: null, end: null })
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      {/* surface="inline": the panel sits in the page, no field and no trigger; it never closes and takes focus only when you move into it */}
      <DatePicker mode="range" surface="inline" numberOfMonths={2} value={range} onChange={setRange} name="dates" />
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        value <code data-demo-value="">{JSON.stringify(range)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(hn,()=>w(()=>import(`./inline-3FJ1gbxn.js`),[]));var gn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { addDays, weekdayOf, type DateRange, type IsoDate } from "@kitora/pickers/core"

const isWeekend = (iso: IsoDate) => weekdayOf(iso) === 0 || weekdayOf(iso) === 6

/** Working days in a range (weekends do not count against leave). */
function workingDays(range: DateRange): number {
  if (!range.start || !range.end) return 0
  let n = 0
  for (let d = range.start; d <= range.end; d = addDays(d, 1)) if (!isWeekend(d)) n++
  return n
}

export function DatePickerLeaveRequest() {
  const [leave, setLeave] = useState<DateRange>({ start: "2026-12-21", end: "2026-12-31" })
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      {/* allowsNonContiguousRanges: a range may run across disabled days (weekends) as long as both ends are open; fields="one": both ends in one field */}
      <DatePicker mode="range" allowsNonContiguousRanges fields="one" isDateDisabled={isWeekend} value={leave} onChange={setLeave} aria-label="Leave" />
      <span className="text-muted-foreground tabular-nums">
        <code data-demo-value="days">{workingDays(leave)}</code> working days · value <code data-demo-value="">{JSON.stringify(leave)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(gn,()=>w(()=>import(`./leave-request-phVPbo_5.js`),[]));var _n=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { formatInstant, parseToEpoch, type IsoInstant, type IsoZoned } from "@kitora/pickers/core"
import type { DatePickerChangeDetails } from "@kitora/pickers/react"

/** The zones the meeting's switch offers: three cities and a fixed offset. */
const ZONES = ["America/New_York", "Europe/London", "Asia/Kolkata", "Asia/Tokyo", "UTC+05:45"]

export function DatePickerMeetingZones() {
  const [zone, setZone] = useState("America/New_York")
  // One instant, the meeting; both pickers show it, each in its own zone.
  const [meeting, setMeeting] = useState<IsoInstant | null>("2026-11-11T14:00:00Z")
  const [zoned, setZoned] = useState<IsoZoned | null>(null)
  const [details, setDetails] = useState<DatePickerChangeDetails | null>(null)
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-start justify-center gap-3">
        {/* A zone makes the value a UTC instant; the switch in the surface keeps it, and the hint reads it in Kolkata */}
        <DatePicker
          granularity="minute"
          minuteStep={30}
          timeZone={zone}
          onTimeZoneChange={setZone}
          zonePicker
          timeZones={ZONES}
          secondaryTimeZone="Asia/Kolkata"
          value={meeting}
          onChange={(value, d) => {
            setMeeting(value)
            setDetails(d)
          }}
          aria-label="Team meeting"
        />
        {/* The same instant on a fixed offset, stored as RFC 9557 (valueKind="zoned") */}
        <DatePicker
          granularity="minute"
          minuteStep={30}
          timeZone="UTC+05:30"
          valueKind="zoned"
          zoneDisplay="offset"
          value={meeting}
          onChange={(value, d) => {
            setZoned(value)
            const epoch = value === null ? null : parseToEpoch(value)
            setMeeting(epoch === null ? null : formatInstant(epoch))
            setDetails(d)
          }}
          aria-label="Call at UTC+05:30"
        />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        zone <code data-demo-value="zone">{JSON.stringify(zone)}</code> · instant <code data-demo-value="instant">{JSON.stringify(meeting)}</code> · zoned <code data-demo-value="zoned">{JSON.stringify(zoned)}</code> · details <code data-demo-value="details">{details ? JSON.stringify(details) : "none yet"}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_n,()=>w(()=>import(`./meeting-zones-WhTE9L5m.js`),[]));var vn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { DATE_PICKER_MODES, type DatePickerAnyValue, type DatePickerChangeDetails, type DatePickerMode } from "@kitora/pickers/react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const MODES = DATE_PICKER_MODES.map((mode) => ({ value: mode, label: mode }))

export function DatePickerModes() {
  const [mode, setMode] = useState<DatePickerMode>("week")
  const [change, setChange] = useState<{ value: DatePickerAnyValue; details: DatePickerChangeDetails } | null>(null)
  const pickMode = (next: string | null) => {
    const found = DATE_PICKER_MODES.find((m) => m === next)
    if (!found) return
    setMode(found)
    setChange(null)
  }
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Select items={MODES} value={mode} onValueChange={pickMode}>
          <SelectTrigger className="w-36" aria-label="Mode">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {MODES.map((m) => (
              <SelectItem key={m.value} value={m.value}>
                {m.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* one component; the value's type follows \`mode\` (a fresh picker per mode) */}
        <DatePicker key={mode} mode={mode} onChange={(value, details) => setChange({ value, details })} aria-label="Any mode" />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        onChange: <code data-demo-value="">{change ? \`\${JSON.stringify(change.value)} \${JSON.stringify(change.details)}\` : "none yet"}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(vn,()=>w(()=>import(`./modes-DHpJgarD.js`),[]));var yn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { DateRange, IsoDate } from "@kitora/pickers/core"
import type { DatePickerChangeDetails } from "@kitora/pickers/react"

export function DatePickerNaturalLanguage() {
  const [due, setDue] = useState<IsoDate | null>(null)
  const [report, setReport] = useState<DateRange>({ start: null, end: null })
  const [details, setDetails] = useState<DatePickerChangeDetails | null>(null)
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-start justify-center gap-3">
        {/* "next fri", "in 2 weeks", "15 dec 3pm": the line under the field shows the reading; Enter or blur commits */}
        <DatePicker
          input="text"
          value={due}
          onChange={(value, d) => {
            setDue(value)
            setDetails(d)
          }}
          aria-label="Due date"
          placeholder="Due: try next fri"
        />
        {/* ranges: "last 30 days", "this month", "15 dec to 3 jan"; + and − step the whole range */}
        <DatePicker
          mode="range"
          input="text"
          value={report}
          onChange={(value, d) => {
            setReport(value)
            setDetails(d)
          }}
          aria-label="Report range"
          placeholder="Range: try last 30 days"
        />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        due <code data-demo-value="due">{JSON.stringify(due)}</code> · range <code data-demo-value="range">{JSON.stringify(report)}</code> · details <code data-demo-value="details">{details ? JSON.stringify(details) : "none yet"}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(yn,()=>w(()=>import(`./natural-language-BqJUZtli.js`),[]));var bn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { inOpenRange, type DateRange, type IsoDate } from "@kitora/pickers/core"

const INVOICES: readonly { readonly id: string; readonly date: IsoDate }[] = [
  { id: "INV-1041", date: "2025-12-18" },
  { id: "INV-1052", date: "2026-01-09" },
  { id: "INV-1066", date: "2026-03-02" },
  { id: "INV-1080", date: "2026-06-21" },
  { id: "INV-1093", date: "2026-10-30" },
]

export function DatePickerOpenEnded() {
  const [range, setRange] = useState<DateRange>({ start: "2026-01-01", end: null })
  const hits = INVOICES.filter((i) => inOpenRange(range, i.date))
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      {/* openEnded: one end is enough ("from jan 1", "until 31 mar", or "No start" / "No end" in the surface) */}
      <DatePicker mode="range" openEnded input="text" value={range} onChange={setRange} aria-label="Invoice dates" />
      <DatePicker mode="range" openEnded value={range} onChange={setRange} aria-label="Invoice dates (fields)" />
      <ul data-slot="invoice-hits" className="w-full max-w-xs divide-y rounded-md border font-mono text-[12px]">
        {hits.length === 0 ? <li className="px-2 py-1 text-muted-foreground">No invoices</li> : null}
        {hits.map((i) => (
          <li key={i.id} className="flex justify-between px-2 py-1">
            <span>{i.id}</span>
            <span className="text-muted-foreground">{i.date}</span>
          </li>
        ))}
      </ul>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        value <code data-demo-value="">{JSON.stringify(range)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(bn,()=>w(()=>import(`./open-ended-B5eU8hKu.js`),[]));var Q=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { DateRange, IsoMonth, IsoQuarter, PeriodRange } from "@kitora/pickers/core"
import type { DatePickerChangeDetails } from "@kitora/pickers/react"

export function DatePickerPeriods() {
  const [us, setUs] = useState<DateRange>({ start: null, end: null })
  const [de, setDe] = useState<DateRange>({ start: null, end: null })
  const [isoWeek, setIsoWeek] = useState<string | undefined>()
  const [quarter, setQuarter] = useState<IsoQuarter | null>(null)
  const [span, setSpan] = useState<PeriodRange<IsoQuarter>>({ start: null, end: null })
  const [months, setMonths] = useState<PeriodRange<IsoMonth>>({ start: "2026-01", end: "2026-03" })
  // details.isoWeek: the ISO 8601 week sharing most days with the picked locale week
  const pickWeek = (set: (week: DateRange) => void) => (week: DateRange, details: DatePickerChangeDetails) => {
    set(week)
    setIsoWeek(details.isoWeek)
  }
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* the locale's week: Sunday–Saturday in the US, Monday–Sunday in Germany */}
        <DatePicker mode="week" value={us} onChange={pickWeek(setUs)} locale="en-US" aria-label="Week (en-US)" />
        <DatePicker mode="week" value={de} onChange={pickWeek(setDe)} locale="de-DE" aria-label="Week (de-DE)" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <DatePicker mode="quarter" value={quarter} onChange={setQuarter} aria-label="Reporting quarter" />
        {/* a range of quarters: pick the first, page the year, pick the last */}
        <DatePicker mode="quarter-range" value={span} onChange={setSpan} aria-label="Quarters to compare" />
        {/* confirm: the clicks edit a draft; Apply commits it, Cancel drops it */}
        <DatePicker mode="month-range" confirm value={months} onChange={setMonths} aria-label="Billing months" />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        en-US <code data-demo-value="us">{JSON.stringify(us)}</code> · de-DE <code data-demo-value="de">{JSON.stringify(de)}</code> · ISO week <code data-demo-value="iso">{isoWeek ?? "–"}</code>
      </span>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        quarter <code data-demo-value="quarter">{JSON.stringify(quarter)}</code> · quarters <code data-demo-value="span">{JSON.stringify(span)}</code> · months <code data-demo-value="months">{JSON.stringify(months)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>w(()=>import(`./periods-aw3UyaST.js`),[]));var xn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { presetsForMode } from "@kitora/pickers/core"
import { DATE_PICKER_MODES, type DatePickerAnyValue, type DatePickerChangeDetails, type PresetBehavior } from "@kitora/pickers/react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"
import { SegmentedControl } from "@kitora/ui/segmented-control"
import { Switch } from "@kitora/ui/switch"

/** The date modes (the time modes have no presets). */
type DateMode = (typeof DATE_PICKER_MODES)[number]

const MODES = DATE_PICKER_MODES.map((mode) => ({ value: mode, label: mode }))
const BEHAVIORS: readonly { readonly value: PresetBehavior; readonly label: string }[] = [
  { value: "accept", label: "Pick and close" },
  { value: "stay", label: "Pick and stay" },
]

export function DatePickerPresetsEveryMode() {
  const [mode, setMode] = useState<DateMode>("month")
  const [behavior, setBehavior] = useState<PresetBehavior>("accept")
  const [confirm, setConfirm] = useState(false)
  const [change, setChange] = useState<{ value: DatePickerAnyValue; details: DatePickerChangeDetails } | null>(null)
  const pickMode = (next: string | null) => {
    const found = DATE_PICKER_MODES.find((m) => m === next)
    if (!found) return
    setMode(found)
    setChange(null)
  }
  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Select items={MODES} value={mode} onValueChange={pickMode}>
          <SelectTrigger className="w-36" aria-label="Preset mode">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {MODES.map((m) => (
              <SelectItem key={m.value} value={m.value}>
                {m.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <SegmentedControl semantics="radio" size="xs" options={BEHAVIORS} value={behavior} onValueChange={setBehavior} aria-label="Preset behavior" />
        <Switch size="sm" checked={confirm} onCheckedChange={setConfirm} label="Apply / Cancel" />
      </div>
      {/* the default list per mode (presetsForMode), labels from the pickers catalog */}
      <DatePicker key={\`\${mode}-\${behavior}-\${confirm}\`} mode={mode} presets={presetsForMode(mode)} presetBehavior={behavior} confirm={confirm} onChange={(value, details) => setChange({ value, details })} aria-label="Presets in any mode" />
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        onChange: <code data-demo-value="">{change ? \`\${JSON.stringify(change.value)} \${JSON.stringify(change.details)}\` : "none yet"}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(xn,()=>w(()=>import(`./presets-every-mode-BJc2iUWp.js`),[]));var Sn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { SegmentedControl, type SegmentedControlOption } from "@kitora/ui/segmented-control"
import { weekdayOf, type DateRange, type DayDataLoader, type DayDatum, type IsoDate } from "@kitora/pickers/core"

/** How long the fake fare service takes to answer one month. */
const LATENCY_MS = 700
const CURRENCIES = { usd: { symbol: "$", rate: 1 }, eur: { symbol: "€", rate: 0.92 } } as const
type Currency = keyof typeof CURRENCIES
const CURRENCY_OPTIONS: readonly SegmentedControlOption<Currency>[] = [
  { value: "usd", label: "USD" },
  { value: "eur", label: "EUR" },
]

/** A made-up but stable fare per day: weekends cost more, every 11th day is sold out. */
function fareFor(iso: IsoDate): number {
  const d = Number(iso.slice(8))
  const weekend = weekdayOf(iso) === 0 || weekdayOf(iso) === 6
  return 89 + ((d * 37) % 60) + (weekend ? 40 : 0)
}

/** The fare service: one month per call, after a delay, cancelled when the currency changes. */
function loaderFor(currency: Currency): DayDataLoader {
  const { symbol, rate } = CURRENCIES[currency]
  return (range, signal) =>
    new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        const days: Record<IsoDate, DayDatum> = {}
        for (let d = Number(range.start.slice(8)); d <= Number(range.end.slice(8)); d++) {
          const iso = \`\${range.start.slice(0, 8)}\${String(d).padStart(2, "0")}\`
          if (d % 11 === 0) {
            days[iso] = { disabled: true, reason: "Sold out", label: "—" }
            continue
          }
          const fare = Math.round(fareFor(iso) * rate)
          days[iso] = { label: \`\${symbol}\${fare}\`, tone: fare < 110 * rate ? "positive" : fare > 160 * rate ? "negative" : "default" }
        }
        resolve(days)
      }, LATENCY_MS)
      signal.addEventListener("abort", () => {
        clearTimeout(timer)
        reject(signal.reason)
      })
    })
}

export function DatePickerPriceCalendar() {
  const [trip, setTrip] = useState<DateRange>({ start: null, end: null })
  const [currency, setCurrency] = useState<Currency>("usd")
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <SegmentedControl semantics="radio" size="xs" options={CURRENCY_OPTIONS} value={currency} onValueChange={setCurrency} aria-label="Currency" />
      {/* dayData loads each visible month once (cached while the page lives); dayDataKey drops the cache when the currency changes. */}
      <DatePicker mode="range" numberOfMonths={2} dayData={loaderFor(currency)} dayDataKey={currency} disablePast value={trip} onChange={setTrip} aria-label="Trip" />
      <span className="text-muted-foreground tabular-nums">
        value <code data-demo-value="">{JSON.stringify(trip)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Sn,()=>w(()=>import(`./price-calendar-DKUkIesA.js`),[]));var Cn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { presetsForMode, type DateRange, type IsoDateTime } from "@kitora/pickers/core"

export function DatePickerRightToLeft() {
  const [stay, setStay] = useState<DateRange>({ start: null, end: null })
  const [meeting, setMeeting] = useState<IsoDateTime | null>(null)
  const [trip, setTrip] = useState<DateRange>({ start: null, end: null })
  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-4 text-[13px]">
      {/* dir="rtl": the chevrons flip, ← moves to the next day, the range band runs right to left and the sheet and time columns mirror */}
      <div dir="rtl" lang="fa" className="flex flex-wrap items-center justify-center gap-3">
        <DatePicker mode="range" locale="fa-IR" calendar="persian" presets={presetsForMode("range")} value={stay} onChange={setStay} aria-label="اقامت" />
        <DatePicker mode="range" locale="fa-IR" calendar="persian" surface="sheet" value={stay} onChange={setStay} aria-label="اقامت، برگه" />
      </div>
      <div dir="rtl" lang="ar" className="flex flex-wrap items-center justify-center gap-3">
        <DatePicker granularity="second" locale="ar-SA" calendar="islamic-umalqura" value={meeting} onChange={setMeeting} aria-label="موعد" />
        <DatePicker mode="range" locale="ar-SA" calendar="islamic-umalqura" surface="inline" weekNumbers value={trip} onChange={setTrip} aria-label="رحلة" />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        <code data-demo-value="stay">{JSON.stringify(stay)}</code> · <code data-demo-value="meeting">{JSON.stringify(meeting)}</code> · <code data-demo-value="trip">{JSON.stringify(trip)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Cn,()=>w(()=>import(`./right-to-left-BR7EtaYh.js`),[]));var wn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { HourCycle, IsoDateTime } from "@kitora/pickers/core"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"

const CYCLES: readonly HourCycle[] = [12, 24]

export function DatePickerSeconds() {
  const [value, setValue] = useState<IsoDateTime | null>(null)
  const [cycle, setCycle] = useState<HourCycle>(24)
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <ToggleGroup
          value={[String(cycle)]}
          onValueChange={(next) => {
            const picked = CYCLES.find((c) => String(c) === next[0])
            if (picked) setCycle(picked)
          }}
          variant="outline"
          size="sm"
          aria-label="Clock"
        >
          {CYCLES.map((c) => (
            <ToggleGroupItem key={c} value={String(c)}>
              {c} h
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        {/* granularity="second" opens columns (hours, minutes, seconds, and AM/PM on 12 hours); seconds step by 5 */}
        <DatePicker granularity="second" secondStep={5} hourCycle={cycle} value={value} onChange={setValue} aria-label="Log entry" />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        value <code data-demo-value="">{JSON.stringify(value)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(wn,()=>w(()=>import(`./seconds-D-4tX4Eg.js`),[]));var Tn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { presetsForMode, type DateRange } from "@kitora/pickers/core"

export function DatePickerSheet() {
  const [stay, setStay] = useState<DateRange>({ start: null, end: null })
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      {/* surface="sheet" at any width: a bottom sheet with months stacked in a vertical scroller (more load as you reach the end), presets as chips and Apply / Cancel pinned at the bottom */}
      <DatePicker mode="range" surface="sheet" lengthUnit="nights" minLength={1} presets={presetsForMode("range")} value={stay} onChange={setStay} aria-label="Getaway" />
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        value <code data-demo-value="">{JSON.stringify(stay)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Tn,()=>w(()=>import(`./sheet-Du6RwXnn.js`),[]));var En=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import { timeRangeSeconds, type IsoTime, type PeriodRange } from "@kitora/pickers/core"

const MINUTES_PER_HOUR = 60
const SECONDS_PER_HOUR = 3600
/** Shifts run 4 to 10 hours, on the half hour, and may cross midnight. */
const MIN_HOURS = 4
const MAX_HOURS = 10

export function DatePickerShift() {
  const [shift, setShift] = useState<PeriodRange<IsoTime>>({ start: "22:00", end: "06:00" })
  const length = shift.start && shift.end ? timeRangeSeconds(shift.start, shift.end, true) : null
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 text-[13px]">
      {/* overnight: an end before the start is the next morning; ends outside 4–10 hours are disabled */}
      <DatePicker mode="time-range" overnight minuteStep={30} minLength={MIN_HOURS * MINUTES_PER_HOUR} maxLength={MAX_HOURS * MINUTES_PER_HOUR} value={shift} onChange={setShift} aria-label="Shift" />
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        shift <code data-demo-value="">{JSON.stringify(shift)}</code>
        {length !== null ? \` · \${length / SECONDS_PER_HOUR} h\` : ""}
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(En,()=>w(()=>import(`./shift-DJWsKaLo.js`),[]));var Dn=`import { useState } from "react"
import { SlotPicker } from "@kitora/pickers/ui"
import { weeklyHours, type Availability, type SlotAvailabilityAdapter, type SlotValue } from "@kitora/pickers/core"

/** Office hours in Kolkata, Monday to Thursday; Friday is closed. */
const HOURS: Availability = { timeZone: "Asia/Kolkata", weekly: weeklyHours({ 1: [["10:00", "13:00"]], 2: [["14:00", "18:00"]], 3: [["10:00", "13:00"]], 4: [["14:00", "18:00"]] }) }

const availability: SlotAvailabilityAdapter = { load: () => Promise.resolve({ availability: HOURS, busy: [] }) }

/** The day's free times in your zone: pick a marked day, then a time; Next available jumps over the closed days. */
export function DatePickerSlotPicker() {
  const [slot, setSlot] = useState<SlotValue | null>(null)
  return (
    <div className="flex flex-col gap-2">
      <SlotPicker availability={availability} durations={[30, 45]} rules={{ minNoticeMinutes: 60 }} value={slot} onChange={setSlot} aria-label="Office hours" />
      <p className="text-[12px] text-muted-foreground">
        Value: <code className="break-all">{slot ? JSON.stringify(slot) : "null"}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Dn,()=>w(()=>import(`./slot-picker-RA5ay3jj.js`),[]));var On=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { IsoTime, PeriodRange } from "@kitora/pickers/core"

export function DatePickerTimeRange() {
  const [alarm, setAlarm] = useState<IsoTime | null>("07:30")
  const [hours, setHours] = useState<PeriodRange<IsoTime>>({ start: "09:00", end: "17:30" })
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-start justify-center gap-3">
        {/* mode="time": no calendar; columns with five-minute steps */}
        <DatePicker mode="time" timePanel="columns" minuteStep={5} value={alarm} onChange={setAlarm} aria-label="Alarm" />
        {/* mode="time-range": a start and an end list; the end may not come before the start */}
        <DatePicker mode="time-range" minuteStep={30} value={hours} onChange={setHours} aria-label="Opening hours" />
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        alarm <code data-demo-value="alarm">{JSON.stringify(alarm)}</code> · hours <code data-demo-value="hours">{JSON.stringify(hours)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(On,()=>w(()=>import(`./time-range-DK6wHXmz.js`),[]));var kn=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { IsoDateTime } from "@kitora/pickers/core"

/** Three clocks: en-US writes 12 hours with AM/PM after the time, de-DE 24 hours, ko-KR its day period in front (오후 3:30). */
const CLOCKS = [
  { locale: "en-US", label: "Date and time (en-US)" },
  { locale: "de-DE", label: "Datum und Uhrzeit (de-DE)" },
  { locale: "ko-KR", label: "Date and time (ko-KR)" },
] as const

export function DatePickerTypedDateTime() {
  const [values, setValues] = useState<Record<string, IsoDateTime | null>>({ "en-US": "2026-11-15T15:30" })
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-start justify-center gap-3">
        {CLOCKS.map(({ locale, label }) => (
          // input="text" with a time granularity: type "15 dec 3:30 pm", "tomorrow at 9" or the locale's own time
          <DatePicker
            key={locale}
            input="text"
            granularity="minute"
            locale={locale}
            value={values[locale] ?? null}
            onChange={(value) => setValues((v) => ({ ...v, [locale]: value }))}
            aria-label={label}
          />
        ))}
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        value: <code data-demo-value="">{JSON.stringify(values)}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(kn,()=>w(()=>import(`./typed-date-time-BjhH0CM_.js`),[]));var An=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { IsoInstant, PeriodRange } from "@kitora/pickers/core"

/** A few log lines, stamped with UTC instants. */
const LOGS: readonly { readonly at: IsoInstant; readonly line: string }[] = [
  { at: "2026-11-12T07:58:12Z", line: "worker: queue drained" },
  { at: "2026-11-12T08:04:40Z", line: "api: 502 from billing" },
  { at: "2026-11-12T08:31:05Z", line: "api: retry ok" },
  { at: "2026-11-12T09:12:59Z", line: "cron: nightly export done" },
  { at: "2026-11-12T10:45:00Z", line: "deploy: v2.4.1 live" },
]

export function DatePickerUtcLogSearch() {
  const [range, setRange] = useState<PeriodRange<IsoInstant>>({ start: "2026-11-12T08:00:00Z", end: "2026-11-12T09:30:00Z" })
  // Instants in the same \`Z\` form compare as strings.
  const hits = LOGS.filter((l) => range.start !== null && range.end !== null && l.at >= range.start && l.at <= range.end)
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 text-[13px]">
      {/* timeZone="UTC" with zonePicker="locked": UTC wall times in, UTC instants out, and no zone switch */}
      <DatePicker mode="range" granularity="minute" minuteStep={30} timeZone="UTC" zonePicker="locked" hourCycle={24} value={range} onChange={setRange} aria-label="Log window" />
      <ul data-slot="log-hits" className="w-full max-w-sm divide-y rounded-md border font-mono text-[12px]">
        {hits.length === 0 ? <li className="px-2 py-1 text-muted-foreground">No lines in this window</li> : null}
        {hits.map((l) => (
          <li key={l.at} className="flex gap-2 px-2 py-1">
            <span className="text-muted-foreground">{l.at.slice(11, 19)}</span>
            <span className="truncate">{l.line}</span>
          </li>
        ))}
      </ul>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        window <code data-demo-value="window">{JSON.stringify(range)}</code>
      </span>
      <span className="text-muted-foreground tabular-nums">
        <code data-demo-value="hits">{hits.length}</code> matching lines
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(An,()=>w(()=>import(`./utc-log-search-CEhZ8LOX.js`),[]));var $=`import { useState } from "react"
import { DatePicker } from "@kitora/pickers/ui"
import type { DateRange, IsoDate } from "@kitora/pickers/core"
import type { DatePickerChangeDetails } from "@kitora/pickers/react"

export function DatePickerWeekNumbers() {
  const [day, setDay] = useState<IsoDate | null>(null)
  const [week, setWeek] = useState<DateRange>({ start: null, end: null })
  const [isoWeek, setIsoWeek] = useState<string | undefined>()
  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-3 text-[13px]">
      <div className="flex flex-wrap items-start justify-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-muted-foreground">de-DE, ISO weeks</span>
          {/* weekNumbers (or "iso"): ISO 8601 weeks; Monday first and Saturday / Sunday tinted come from the locale's week info */}
          <DatePicker surface="inline" locale="de-DE" weekNumbers value={day} onChange={setDay} aria-label="Datum" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-muted-foreground">en-US, locale weeks</span>
          {/* weekNumbers="locale": the US rule, week 1 holds 1 January; mode="week" picks the row */}
          <DatePicker
            mode="week"
            surface="inline"
            locale="en-US"
            weekNumbers="locale"
            value={week}
            onChange={(next: DateRange, details: DatePickerChangeDetails) => {
              setWeek(next)
              setIsoWeek(details.isoWeek)
            }}
            aria-label="Week"
          />
        </div>
      </div>
      <span className="max-w-full break-all text-center text-muted-foreground tabular-nums">
        day <code data-demo-value="day">{JSON.stringify(day)}</code> · week <code data-demo-value="week">{JSON.stringify(week)}</code> · ISO week <code data-demo-value="iso">{isoWeek ?? "–"}</code>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>w(()=>import(`./week-numbers-VeXhn-HK.js`),[]));var jn={"./demos/date-picker/analytics-compare.tsx":we,"./demos/date-picker/auto.tsx":Ee,"./demos/date-picker/build-your-own.tsx":Oe,"./demos/date-picker/calendar-systems.tsx":Ae,"./demos/date-picker/compose.tsx":Ne,"./demos/date-picker/date-time.tsx":Ie,"./demos/date-picker/default.tsx":Be,"./demos/date-picker/design-language.tsx":He,"./demos/date-picker/dst-days.tsx":Ge,"./demos/date-picker/errors.tsx":qe,"./demos/date-picker/form-submit.tsx":Ye,"./demos/date-picker/free-text.tsx":Ze,"./demos/date-picker/holidays.tsx":et,"./demos/date-picker/hotel-nights.tsx":it,"./demos/date-picker/inline.tsx":st,"./demos/date-picker/leave-request.tsx":lt,"./demos/date-picker/meeting-zones.tsx":ft,"./demos/date-picker/modes.tsx":ht,"./demos/date-picker/natural-language.tsx":_t,"./demos/date-picker/open-ended.tsx":yt,"./demos/date-picker/periods.tsx":St,"./demos/date-picker/presets-every-mode.tsx":wt,"./demos/date-picker/price-calendar.tsx":Dt,"./demos/date-picker/right-to-left.tsx":Pt,"./demos/date-picker/seconds.tsx":It,"./demos/date-picker/sheet.tsx":Rt,"./demos/date-picker/shift.tsx":Bt,"./demos/date-picker/slot-picker.tsx":Gt,"./demos/date-picker/time-range.tsx":Yt,"./demos/date-picker/typed-date-time.tsx":Zt,"./demos/date-picker/utc-log-search.tsx":en,"./demos/date-picker/week-numbers.tsx":rn},Mn={"./demos/date-picker/analytics-compare.tsx":q,"./demos/date-picker/auto.tsx":J,"./demos/date-picker/build-your-own.tsx":Y,"./demos/date-picker/calendar-systems.tsx":X,"./demos/date-picker/compose.tsx":Z,"./demos/date-picker/date-time.tsx":on,"./demos/date-picker/default.tsx":sn,"./demos/date-picker/design-language.tsx":cn,"./demos/date-picker/dst-days.tsx":ln,"./demos/date-picker/errors.tsx":un,"./demos/date-picker/form-submit.tsx":dn,"./demos/date-picker/free-text.tsx":fn,"./demos/date-picker/holidays.tsx":pn,"./demos/date-picker/hotel-nights.tsx":mn,"./demos/date-picker/inline.tsx":hn,"./demos/date-picker/leave-request.tsx":gn,"./demos/date-picker/meeting-zones.tsx":_n,"./demos/date-picker/modes.tsx":vn,"./demos/date-picker/natural-language.tsx":yn,"./demos/date-picker/open-ended.tsx":bn,"./demos/date-picker/periods.tsx":Q,"./demos/date-picker/presets-every-mode.tsx":xn,"./demos/date-picker/price-calendar.tsx":Sn,"./demos/date-picker/right-to-left.tsx":Cn,"./demos/date-picker/seconds.tsx":wn,"./demos/date-picker/sheet.tsx":Tn,"./demos/date-picker/shift.tsx":En,"./demos/date-picker/slot-picker.tsx":Dn,"./demos/date-picker/time-range.tsx":On,"./demos/date-picker/typed-date-time.tsx":kn,"./demos/date-picker/utc-log-search.tsx":An,"./demos/date-picker/week-numbers.tsx":$};export{jn as modules,Mn as sources};