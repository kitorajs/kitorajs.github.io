import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./avatar-DegXKoDd.js";import{i as r}from"./stats-CtcjhyCn.js";import{t as i}from"./circle-dot-DqLTQCLc.js";import{t as a}from"./circle-C8CJOATp.js";import{F as o,Q as s,R as c,Y as l,Z as ee}from"./data-grid-highlight-CsF6qD_A.js";import{t as u}from"./clock-Dkgn9bA4.js";import{t as d}from"./folder-open-C3AYBJTt.js";import{t as f}from"./folder-CcDNU7s5.js";import{t as p}from"./inbox-Bv6dlLdK.js";import{t as te}from"./layout-grid-BC3eZvLl.js";import{t as ne}from"./list-DrjEWVlb.js";import{t as m}from"./message-square-CNfB0thr.js";import{t as h}from"./plus-C7zFbiHD.js";import{t as g}from"./square-check-big-peU0HoXg.js";import{t as _}from"./star-Cbf2qr-O.js";import{t as re}from"./tag-8Vb0UltV.js";import{t as v}from"./users-ZX8x1RHA.js";import{t as ie}from"./user-CO_r6J-b.js";import{t as y}from"./input-C8M4VLUF.js";import{t as b}from"./textarea-BzT4gNdi.js";import{t as ae}from"./tree-view-p5ULiitJ.js";import{Bc as x,Cc as S,Ic as C,_n as oe,fn as se,gn as ce,hi as w,hn as le,ht as ue,mn as de,ti as T,vn as fe,yn as pe}from"./index-q72zUtm9.js";import{t as E}from"./badge-Be8rVEaF.js";import{t as D}from"./label-DjxTNoON.js";import{a as O}from"./people-Cg6ti21N.js";import{t as k}from"./page-5VykEPaJ.js";import{t as A}from"./bulk-action-bar-BQY7Wy-U.js";import{t as j}from"./button-group-ptoJBpd1.js";import{t as M}from"./select-CBN5RXbD.js";import{a as N,c as P,i as F,l as I,o as L,r as R,s as z,t as B}from"./dialog-DUcAD2bv.js";import{n as me}from"./data-grid-Bg_HGXIE.js";import{t as he}from"./search-input-DMTycdh7.js";import{t as ge}from"./filter-bar-DK-SmK2A.js";import{t as _e}from"./kanban-card-BE0pJdCq.js";import{t as ve}from"./template-page-ImOqJCRR.js";var V=e(x(),1),H=C(),U=[{id:`p0`,label:`P0 — urgent`},{id:`p1`,label:`P1 — high`},{id:`p2`,label:`P2 — medium`},{id:`p3`,label:`P3 — low`}],ye=[`Auth`,`Data`,`Infra`,`Onboarding`,`Design`,`Workspaces`,`Dashboard`].map(e=>({id:e,label:e})),be=[{id:`t-001`,title:`Wire OAuth callback to session cookie`,description:`Callback should mint a signed cookie + redirect to original path.`,project:`Auth`,status:`doing`,priority:`p1`,assignee:{name:`Alex Kim`},due:`May 9`,comments:3,subtasks:{done:2,total:4}},{id:`t-002`,title:`Datatable pagination — server-side`,project:`Data`,status:`review`,priority:`p1`,assignee:{name:`Grace H`},due:`May 11`,comments:1},{id:`t-003`,title:`Empty state for new workspaces`,project:`Onboarding`,status:`todo`,priority:`p2`,assignee:{name:`Linus T`},due:`May 14`},{id:`t-004`,title:"Migration: add `sessions` table",project:`Auth`,status:`done`,priority:`p1`,assignee:{name:`Alex Kim`}},{id:`t-005`,title:`Block deploys on failing migrations`,description:`Pre-deploy step needs to run migrate dry-run and exit non-zero on schema drift.`,project:`Infra`,status:`doing`,priority:`p0`,assignee:{name:`Grace H`},due:`May 8`,comments:5,subtasks:{done:1,total:3}},{id:`t-006`,title:`Avatar fallback color generator`,project:`Design`,status:`todo`,priority:`p3`,assignee:{name:`Linus T`},due:`May 21`},{id:`t-007`,title:`Bulk-archive selected projects`,project:`Workspaces`,status:`todo`,priority:`p2`,assignee:{name:`Grace H`},due:`May 12`},{id:`t-008`,title:`Rate-limit anon API`,project:`Infra`,status:`review`,priority:`p1`,assignee:{name:`Alex Kim`},due:`May 13`,subtasks:{done:3,total:3}},{id:`t-009`,title:`Activity feed: per-actor filter`,project:`Dashboard`,status:`todo`,priority:`p2`,assignee:{name:`Mira O`}},{id:`t-010`,title:`Onboarding checklist card`,project:`Onboarding`,status:`done`,priority:`p2`,assignee:{name:`Mira O`}}],xe=[{id:`all`,label:`All projects`,icon:(0,H.jsx)(p,{})},{id:`eng`,label:`Engineering`,icon:(0,H.jsx)(d,{}),children:[{id:`auth`,label:`Auth`,icon:(0,H.jsx)(f,{})},{id:`data`,label:`Data`,icon:(0,H.jsx)(f,{})},{id:`infra`,label:`Infra`,icon:(0,H.jsx)(f,{})}]},{id:`design`,label:`Design`,icon:(0,H.jsx)(f,{})},{id:`onboarding`,label:`Onboarding`,icon:(0,H.jsx)(f,{}),hint:`2`},{id:`workspaces`,label:`Workspaces`,icon:(0,H.jsx)(f,{})},{id:`starred`,label:`Starred`,icon:(0,H.jsx)(_,{})}],Se={todo:{label:`Todo`,tone:`bg-muted text-muted-foreground`,icon:(0,H.jsx)(a,{className:`size-3`})},doing:{label:`In progress`,tone:`bg-sky-500/10 text-sky-700 dark:text-sky-400`,icon:(0,H.jsx)(i,{className:`size-3`})},review:{label:`In review`,tone:`bg-amber-500/10 text-amber-700 dark:text-amber-400`,icon:(0,H.jsx)(u,{className:`size-3`})},done:{label:`Done`,tone:`bg-emerald-500/10 text-emerald-700 dark:text-emerald-400`,icon:(0,H.jsx)(g,{className:`size-3`})}},W={p0:{label:`P0`,tone:`border-rose-500/40 text-rose-700 dark:text-rose-400`},p1:{label:`P1`,tone:`border-amber-500/40 text-amber-700 dark:text-amber-400`},p2:{label:`P2`,tone:`border-border text-muted-foreground`},p3:{label:`P3`,tone:`border-border text-muted-foreground`}};function G({status:e}){let t=Se[e];return(0,H.jsxs)(`span`,{className:w(`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium`,t.tone),children:[t.icon,t.label]})}function K({priority:e}){let t=W[e];return(0,H.jsx)(E,{variant:`outline`,className:w(`font-mono text-[10px]`,t.tone),children:t.label})}function Ce({total:e,children:t}){let{selectedIds:n,setSelectedIds:r}=s();return(0,H.jsx)(A,{count:n.length,total:e,onClear:()=>r([]),children:t})}var we=()=>[{label:`Edit`,onAction:()=>void 0},{label:`Duplicate`,onAction:()=>void 0},{label:`Delete`,destructive:!0,onAction:()=>void 0}];function Te(e){return o()([{id:`title`,header:`Title`,meta:{sortFieldId:`title`,className:`min-w-64`},cell:t=>(0,H.jsxs)(`button`,{type:`button`,onClick:()=>e(t.id),className:`text-left hover:text-primary`,children:[(0,H.jsx)(`div`,{className:`text-[13px] font-medium`,children:t.title}),(0,H.jsx)(`div`,{className:`font-mono text-[10px] text-muted-foreground`,children:t.id})]})},{id:`status`,header:`Status`,meta:{sortFieldId:`status`,className:`whitespace-nowrap`},cell:e=>(0,H.jsx)(G,{status:e.status})},{id:`priority`,header:`Pri`,meta:{sortFieldId:`priority`},cell:e=>(0,H.jsx)(K,{priority:e.priority})},{id:`project`,header:`Project`,meta:{sortFieldId:`project`},cell:e=>(0,H.jsx)(E,{variant:`outline`,className:`text-[10px]`,children:e.project})},{id:`assignee`,header:`Assignee`,cell:e=>(0,H.jsx)(O,{person:{name:e.assignee.name},size:`xs`,className:`text-[13px]`})},{id:`due`,header:`Due`,meta:{sortFieldId:`due`},cell:e=>(0,H.jsx)(`span`,{className:`font-mono text-[12px] text-muted-foreground`,children:e.due??`—`})}])}function Ee({tasks:e,onOpenTask:t}){return(0,H.jsx)(l,{adapter:(0,V.useMemo)(()=>c({initial:e}),[e]),children:(0,H.jsx)(me,{columns:(0,V.useMemo)(()=>Te(t),[t]),selectable:!0,enableRowReorder:!1,rightMenuActions:we,rowLabel:e=>e.title,empty:`No tasks match your filters.`})})}function q({tasks:e,onOpenTask:t}){return(0,H.jsx)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[`todo`,`doing`,`review`,`done`].map(n=>{let r=e.filter(e=>e.status===n);return(0,H.jsxs)(`div`,{className:`flex min-h-[200px] flex-col rounded-lg border border-border bg-surface-1`,children:[(0,H.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border px-3 py-2`,children:[(0,H.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,H.jsx)(G,{status:n}),(0,H.jsx)(`span`,{className:`font-mono text-[11px] tabular-nums text-muted-foreground`,children:r.length})]}),(0,H.jsx)(T,{variant:`ghost`,size:`icon-xs`,"aria-label":`Add to column`,children:(0,H.jsx)(h,{})})]}),(0,H.jsxs)(`div`,{className:`flex-1 space-y-2 p-2`,children:[r.map(e=>(0,H.jsx)(_e,{title:e.title,description:e.description,badges:[{label:W[e.priority].label,tone:e.priority===`p0`?`danger`:e.priority===`p1`?`warning`:`default`},{label:e.project,tone:`primary`}],assignee:e.assignee,due:e.due,count:[...e.comments?[{icon:(0,H.jsx)(m,{}),value:e.comments}]:[],...e.subtasks?[{icon:(0,H.jsx)(g,{}),value:`${e.subtasks.done}/${e.subtasks.total}`}]:[]],onClick:()=>t(e.id)},e.id)),r.length===0?(0,H.jsx)(`div`,{className:`flex h-20 items-center justify-center text-[12px] text-muted-foreground`,children:`Empty`}):null]})]},n)})})}function De({task:e}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(fe,{children:[(0,H.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,H.jsx)(K,{priority:e.priority}),(0,H.jsx)(G,{status:e.status}),(0,H.jsx)(E,{variant:`outline`,className:`text-[10px]`,children:e.project})]}),(0,H.jsx)(pe,{className:`text-xl tracking-tighter`,children:e.title}),(0,H.jsxs)(ce,{children:[(0,H.jsx)(`span`,{className:`font-mono`,children:e.id}),` · created May 1`]})]}),(0,H.jsxs)(`div`,{className:`space-y-5 px-4`,children:[e.description?(0,H.jsx)(`p`,{className:`text-sm leading-relaxed text-foreground/90`,children:e.description}):null,(0,H.jsxs)(`dl`,{className:`grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2.5 text-[13px]`,children:[(0,H.jsx)(`dt`,{className:`text-muted-foreground`,children:`Assignee`}),(0,H.jsx)(`dd`,{children:(0,H.jsx)(O,{person:{name:e.assignee.name},size:`xs`})}),(0,H.jsx)(`dt`,{className:`text-muted-foreground`,children:`Due`}),(0,H.jsx)(`dd`,{className:`font-mono text-muted-foreground`,children:e.due??`—`}),(0,H.jsx)(`dt`,{className:`text-muted-foreground`,children:`Comments`}),(0,H.jsx)(`dd`,{className:`text-muted-foreground`,children:e.comments??0}),e.subtasks?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`dt`,{className:`text-muted-foreground`,children:`Subtasks`}),(0,H.jsxs)(`dd`,{className:`font-mono text-muted-foreground`,children:[e.subtasks.done,` / `,e.subtasks.total]})]}):null]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(D,{className:`mb-1.5 block text-xs text-muted-foreground`,children:`Comment`}),(0,H.jsx)(b,{placeholder:`Add a comment…`,rows:3}),(0,H.jsx)(`div`,{className:`mt-2 flex justify-end`,children:(0,H.jsx)(T,{size:`sm`,children:`Send`})})]})]}),(0,H.jsx)(oe,{children:(0,H.jsxs)(`div`,{className:`flex w-full items-center justify-between`,children:[(0,H.jsxs)(T,{variant:`ghost`,size:`sm`,children:[(0,H.jsx)(v,{}),`Watch`]}),(0,H.jsx)(de,{asChild:!0,children:(0,H.jsx)(T,{variant:`outline`,size:`sm`,children:`Close`})})]})})]})}function Oe({onCreate:e}){let[t,n]=(0,V.useState)(``),[r,i]=(0,V.useState)(`Auth`),[a,o]=(0,V.useState)(`p2`),[s]=(0,V.useState)({name:`Alex Kim`});return(0,H.jsxs)(F,{children:[(0,H.jsxs)(z,{children:[(0,H.jsx)(P,{children:`New task`}),(0,H.jsx)(N,{children:`Quick capture. Drop into the right project — assign + prioritize.`})]}),(0,H.jsxs)(`div`,{className:`space-y-3`,children:[(0,H.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,H.jsx)(D,{htmlFor:`t-title`,children:`Title`}),(0,H.jsx)(y,{id:`t-title`,value:t,onChange:e=>n(e.target.value),placeholder:`Wire OAuth callback…`,autoFocus:!0})]}),(0,H.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,H.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,H.jsx)(D,{id:`t-project`,children:`Project`}),(0,H.jsx)(M,{items:ye,value:r,onChange:e=>e&&i(e),"aria-labelledby":`t-project`})]}),(0,H.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,H.jsx)(D,{id:`t-priority`,children:`Priority`}),(0,H.jsx)(M,{items:U,value:a,onChange:e=>{let t=U.find(t=>t.id===e);t&&o(t.id)},"aria-labelledby":`t-priority`})]})]})]}),(0,H.jsxs)(L,{children:[(0,H.jsx)(R,{asChild:!0,children:(0,H.jsx)(T,{variant:`outline`,children:`Cancel`})}),(0,H.jsx)(T,{onClick:()=>{t.trim()&&e({id:`t-${Math.floor(Math.random()*9e3+1e3)}`,title:t,project:r,priority:a,status:`todo`,assignee:s})},children:`Create task`})]})]})}function ke(){let[e,i]=(0,V.useState)(be),[a,o]=(0,V.useState)(`list`),[s,c]=(0,V.useState)(``),[l,u]=(0,V.useState)([{id:`status`,label:`Status`,value:`open`}]),[d,f]=(0,V.useState)(null),[p,m]=(0,V.useState)(`all`),[_,v]=(0,V.useState)(!1),y=(0,V.useMemo)(()=>e.filter(e=>s?e.title.toLowerCase().includes(s.toLowerCase()):!0).filter(e=>p===`all`?!0:p===`starred`?!1:e.project.toLowerCase()===p).filter(e=>{let t=l.find(e=>e.id===`status`);return t?t.value===`open`?e.status!==`done`:t.value===`done`?e.status===`done`:!0:!0}),[e,s,p,l]),b=(0,V.useMemo)(()=>{let t=e.filter(e=>e.status!==`done`).length,n=e.filter(e=>e.status===`done`).length;return{open:t,done:n,overdue:1,ratio:e.length===0?0:Math.round(n/e.length*100)}},[e]),x=d?e.find(e=>e.id===d)??null:null;return(0,H.jsxs)(`div`,{className:`mx-auto flex h-[calc(100dvh-3.5rem)] w-full max-w-[1500px]`,children:[(0,H.jsxs)(`aside`,{className:`hidden w-60 shrink-0 border-r border-border bg-surface-1 lg:block`,children:[(0,H.jsx)(`div`,{className:`px-3 py-3`,children:(0,H.jsxs)(`div`,{className:`px-1`,children:[(0,H.jsx)(`div`,{className:`font-mono text-[10px] uppercase tracking-wider text-muted-foreground`,children:`Workspace`}),(0,H.jsx)(`div`,{className:`mt-0.5 text-sm font-semibold`,children:`Acme`})]})}),(0,H.jsx)(`nav`,{className:`px-2`,children:(0,H.jsx)(ae,{"aria-label":`Projects`,items:xe,value:[p],onChange:e=>e[0]&&m(e[0]),defaultExpanded:[`eng`]})}),(0,H.jsxs)(`div`,{className:`mt-6 px-3`,children:[(0,H.jsx)(`div`,{className:`px-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground`,children:`Team`}),(0,H.jsx)(`div`,{className:`mt-2 space-y-px`,children:[{name:`Alex Kim`,online:!0},{name:`Grace Hopper`,online:!0},{name:`Linus Torvalds`,online:!1},{name:`Mira Otieno`,online:!0}].map(e=>(0,H.jsxs)(`button`,{className:`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground`,children:[(0,H.jsx)(n,{className:`size-5`,children:(0,H.jsx)(t,{className:`text-[9px]`,children:e.name.split(` `).map(e=>e[0]).join(``)})}),(0,H.jsx)(`span`,{className:`flex-1 truncate`,children:e.name}),e.online?(0,H.jsx)(`span`,{className:`size-1.5 rounded-full bg-emerald-500`}):null]},e.name))})]})]}),(0,H.jsx)(ee,{children:(0,H.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,H.jsxs)(`div`,{className:`border-b border-border px-6 py-5`,children:[(0,H.jsx)(k.Header,{className:`border-border px-0 pt-0 pb-5 sm:px-0`,children:(0,H.jsxs)(k.Heading,{className:`gap-x-3 gap-y-3`,actions:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(T,{variant:`outline`,size:`sm`,children:[(0,H.jsx)(re,{}),`Tags`]}),(0,H.jsxs)(B,{open:_,onOpenChange:v,children:[(0,H.jsx)(I,{asChild:!0,children:(0,H.jsxs)(T,{size:`sm`,children:[(0,H.jsx)(h,{}),`New task`]})}),(0,H.jsx)(Oe,{onCreate:e=>{i(t=>[e,...t]),ue.success(`Task created`,{description:e.title}),v(!1)}})]})]}),children:[(0,H.jsx)(k.Title,{className:`text-2xl leading-8 tracking-tighter`,children:`Tasks`}),(0,H.jsxs)(k.Description,{className:`mt-1 max-w-2xl text-sm`,children:[`Track work across projects.`,` `,(0,H.jsx)(`span`,{className:`text-foreground`,children:b.open}),` open ·`,` `,(0,H.jsx)(`span`,{className:`text-foreground`,children:b.done}),` done ·`,` `,(0,H.jsx)(`span`,{className:`text-rose-700 dark:text-rose-400`,children:b.overdue}),` overdue`]})]})}),(0,H.jsxs)(`div`,{className:`mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4`,children:[(0,H.jsx)(r,{label:`Open`,value:b.open,series:[5,6,7,7,8,7,9,10,9,8],footnote:`${e.length} total`}),(0,H.jsxs)(r.Root,{children:[(0,H.jsx)(r.Label,{children:`In progress`}),(0,H.jsx)(r.Value,{children:e.filter(e=>e.status===`doing`).length}),(0,H.jsx)(r.Trend,{current:2,previous:1,format:()=>`+1`,className:`mt-1.5`})]}),(0,H.jsxs)(r.Root,{children:[(0,H.jsx)(r.Label,{children:`Done this week`}),(0,H.jsx)(r.Value,{children:`3`}),(0,H.jsx)(r.Trend,{current:4,previous:3,format:()=>`+33%`,className:`mt-1.5`})]}),(0,H.jsx)(r,{label:`Completion`,value:`${b.ratio}%`,footnote:`of all tasks`})]})]}),(0,H.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 border-b border-border bg-surface-1 px-6 py-2.5`,children:[(0,H.jsx)(he,{value:s,onValueChange:c,placeholder:`Search tasks…`,shortcut:`⌘K`,containerClassName:`w-72`}),(0,H.jsx)(ge,{filters:l,onRemove:e=>u(t=>t.filter(t=>t.id!==e)),onClear:()=>u([]),available:[{id:`priority`,label:`Priority`},{id:`assignee`,label:`Assignee`},{id:`due`,label:`Due date`}],onAdd:e=>u(t=>[...t,{id:e,label:e,value:`any`}])}),(0,H.jsx)(`div`,{className:`ml-auto`,children:(0,H.jsxs)(j,{children:[(0,H.jsxs)(T,{variant:a===`list`?`secondary`:`outline`,size:`sm`,onClick:()=>o(`list`),children:[(0,H.jsx)(ne,{}),`List`]}),(0,H.jsxs)(T,{variant:a===`board`?`secondary`:`outline`,size:`sm`,onClick:()=>o(`board`),children:[(0,H.jsx)(te,{}),`Board`]})]})})]}),(0,H.jsx)(`div`,{className:`flex-1 overflow-auto bg-background p-6`,children:a===`list`?(0,H.jsx)(Ee,{tasks:y,onOpenTask:f}):(0,H.jsx)(q,{tasks:y,onOpenTask:e=>f(e)})}),(0,H.jsxs)(Ce,{total:e.length,children:[(0,H.jsxs)(T,{size:`sm`,variant:`ghost`,children:[(0,H.jsx)(g,{}),`Mark done`]}),(0,H.jsxs)(T,{size:`sm`,variant:`ghost`,children:[(0,H.jsx)(ie,{}),`Assign`]}),(0,H.jsx)(T,{size:`sm`,variant:`ghost`,className:`text-destructive hover:text-destructive`,children:`Delete`})]}),(0,H.jsx)(se,{open:!!x,onOpenChange:e=>!e&&f(null),children:(0,H.jsx)(le,{className:`w-full sm:max-w-md`,children:x?(0,H.jsx)(De,{task:x}):null})})]})})]})}var J=`import { CheckSquare, LayoutGrid, List, Plus, Tag, User } from 'lucide-react'
import { useMemo, useState } from 'react'
import { TreeView } from '@kitora/collections/ui'
import { DataGridUIProvider } from '@kitora/datagrid'
import { StatCard } from '@kitora/display'
import { Avatar, AvatarFallback } from '@kitora/ui/avatar'
import { Button } from '@kitora/ui/button'
import { ButtonGroup } from '@kitora/ui/button-group'
import { Dialog, DialogTrigger } from '@kitora/ui/dialog'
import { Sheet, SheetContent } from '@kitora/ui/sheet'
import { SearchInput } from '@kitora/ui/search-input'
import { FilterBar, type FilterChip } from '@kitora/ui/filter-bar'
import { Page } from '@kitora/shell'
import { toast } from '@kitora/feedback'
import { type ProjectNode, projectsTree, seedTasks } from './data'
import { BoardView, ListView, TasksBulkBar } from './views'
import { TaskDetail } from './task-detail'
import { CreateTaskDialog } from './create-task-dialog'

/** A task manager: a project tree, filters, list and board views of the same tasks, bulk actions, a detail sheet and a new-task dialog. */
export function TasksTemplate() {
  const [tasks, setTasks] = useState(seedTasks)
  const [view, setView] = useState<'list' | 'board'>('list')
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<FilterChip[]>([
    { id: 'status', label: 'Status', value: 'open' },
  ])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [activeProject, setActiveProject] = useState('all')
  const [createOpen, setCreateOpen] = useState(false)

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((t) => (search ? t.title.toLowerCase().includes(search.toLowerCase()) : true))
      .filter((t) => {
        if (activeProject === 'all') return true
        if (activeProject === 'starred') return false
        return t.project.toLowerCase() === activeProject
      })
      .filter((t) => {
        const status = filters.find((f) => f.id === 'status')
        if (!status) return true
        if (status.value === 'open') return t.status !== 'done'
        if (status.value === 'done') return t.status === 'done'
        return true
      })
  }, [tasks, search, activeProject, filters])

  const stats = useMemo(() => {
    const open = tasks.filter((t) => t.status !== 'done').length
    const done = tasks.filter((t) => t.status === 'done').length
    const overdue = 1
    const ratio = tasks.length === 0 ? 0 : Math.round((done / tasks.length) * 100)
    return { open, done, overdue, ratio }
  }, [tasks])

  const selectedTask = selectedId ? tasks.find((t) => t.id === selectedId) ?? null : null

  return (
    <div className="mx-auto flex h-[calc(100dvh-3.5rem)] w-full max-w-[1500px]">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-border bg-surface-1 lg:block">
        <div className="px-3 py-3">
          <div className="px-1">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Workspace
            </div>
            <div className="mt-0.5 text-sm font-semibold">Acme</div>
          </div>
        </div>
        <nav className="px-2">
          <TreeView<ProjectNode>
            aria-label="Projects"
            items={projectsTree}
            value={[activeProject]}
            // Single choice that never empties: re-picking the current project keeps it.
            onChange={(ids) => ids[0] && setActiveProject(ids[0])}
            defaultExpanded={['eng']}
          />
        </nav>

        <div className="mt-6 px-3">
          <div className="px-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Team
          </div>
          <div className="mt-2 space-y-px">
            {[
              { name: 'Alex Kim', online: true },
              { name: 'Grace Hopper', online: true },
              { name: 'Linus Torvalds', online: false },
              { name: 'Mira Otieno', online: true },
            ].map((p) => (
              <button
                key={p.name}
                className="flex w-full items-center gap-2 rounded px-2 py-1 text-left text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Avatar className="size-5">
                  <AvatarFallback className="text-[9px]">
                    {p.name.split(' ').map((s) => s[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="flex-1 truncate">{p.name}</span>
                {p.online ? (
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main. The datagrid's UI provider holds the row selection, so the bulk bar below reads it too. */}
      <DataGridUIProvider>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-border px-6 py-5">
          {/* The shell kit's page header: title, description and actions. */}
          <Page.Header className="border-border px-0 pt-0 pb-5 sm:px-0">
            <Page.Heading
              className="gap-x-3 gap-y-3"
              actions={
                <>
                  <Button variant="outline" size="sm">
                    <Tag />
                    Tags
                  </Button>
                  <Dialog open={createOpen} onOpenChange={setCreateOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <Plus />
                        New task
                      </Button>
                    </DialogTrigger>
                    <CreateTaskDialog
                      onCreate={(t) => {
                        setTasks((prev) => [t, ...prev])
                        toast.success('Task created', { description: t.title })
                        setCreateOpen(false)
                      }}
                    />
                  </Dialog>
                </>
              }
            >
              <Page.Title className="text-2xl leading-8 tracking-tighter">Tasks</Page.Title>
              <Page.Description className="mt-1 max-w-2xl text-sm">
                Track work across projects.{' '}
                <span className="text-foreground">{stats.open}</span> open ·{' '}
                <span className="text-foreground">{stats.done}</span> done ·{' '}
                <span className="text-rose-700 dark:text-rose-400">{stats.overdue}</span> overdue
              </Page.Description>
            </Page.Heading>
          </Page.Header>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard
              label="Open"
              value={stats.open}
              series={[5, 6, 7, 7, 8, 7, 9, 10, 9, 8]}
              footnote={\`\${tasks.length} total\`}
            />
            <StatCard.Root>
              <StatCard.Label>In progress</StatCard.Label>
              <StatCard.Value>{tasks.filter((t) => t.status === 'doing').length}</StatCard.Value>
              <StatCard.Trend current={2} previous={1} format={() => '+1'} className="mt-1.5" />
            </StatCard.Root>
            <StatCard.Root>
              <StatCard.Label>Done this week</StatCard.Label>
              <StatCard.Value>3</StatCard.Value>
              <StatCard.Trend current={4} previous={3} format={() => '+33%'} className="mt-1.5" />
            </StatCard.Root>
            <StatCard label="Completion" value={\`\${stats.ratio}%\`} footnote="of all tasks" />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-b border-border bg-surface-1 px-6 py-2.5">
          <SearchInput
            value={search}
            onValueChange={setSearch}
            placeholder="Search tasks…"
            shortcut="⌘K"
            containerClassName="w-72"
          />
          <FilterBar
            filters={filters}
            onRemove={(id) => setFilters((p) => p.filter((f) => f.id !== id))}
            onClear={() => setFilters([])}
            available={[
              { id: 'priority', label: 'Priority' },
              { id: 'assignee', label: 'Assignee' },
              { id: 'due', label: 'Due date' },
            ]}
            onAdd={(id) =>
              setFilters((p) => [...p, { id, label: id, value: 'any' }])
            }
          />
          <div className="ml-auto">
            <ButtonGroup>
              <Button
                variant={view === 'list' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setView('list')}
              >
                <List />
                List
              </Button>
              <Button
                variant={view === 'board' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setView('board')}
              >
                <LayoutGrid />
                Board
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-background p-6">
          {view === 'list' ? (
            <ListView tasks={filteredTasks} onOpenTask={setSelectedId} />
          ) : (
            <BoardView tasks={filteredTasks} onOpenTask={(id) => setSelectedId(id)} />
          )}
        </div>

        <TasksBulkBar total={tasks.length}>
          <Button size="sm" variant="ghost">
            <CheckSquare />
            Mark done
          </Button>
          <Button size="sm" variant="ghost">
            <User />
            Assign
          </Button>
          <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
            Delete
          </Button>
        </TasksBulkBar>

        {/* Detail sheet */}
        <Sheet open={!!selectedTask} onOpenChange={(open) => !open && setSelectedId(null)}>
          <SheetContent className="w-full sm:max-w-md">
            {selectedTask ? <TaskDetail task={selectedTask} /> : null}
          </SheetContent>
        </Sheet>
      </div>
      </DataGridUIProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>S(()=>import(`./page-UyuzPt7W.js`),[]));var Y=`import { CheckSquare, MessageSquare, Plus } from 'lucide-react'
import { useMemo } from 'react'
import { DataGrid, DataGridProvider, createInMemoryAdapter, defineColumns, useDataGridUI, type ActionItem } from '@kitora/datagrid'
import { PersonLabel } from '@kitora/display'
import { Badge } from '@kitora/ui/badge'
import { Button } from '@kitora/ui/button'
import { BulkActionBar } from '@kitora/ui/bulk-action-bar'
import { KanbanCard } from '@kitora/ui/kanban-card'
import type { Status, Task } from './data'
import { PriorityBadge, StatusPill, priorityMeta } from './badges'

/** The bulk bar over the datagrid's selection (it lives in the \`DataGridUIProvider\` above). */
export function TasksBulkBar({ total, children }: { total: number; children: React.ReactNode }) {
  const { selectedIds, setSelectedIds } = useDataGridUI()
  return (
    <BulkActionBar count={selectedIds.length} total={total} onClear={() => setSelectedIds([])}>
      {children}
    </BulkActionBar>
  )
}

/** The row menu (the actions are placeholders here). */
const rowMenu = (): ActionItem[] => [
  { label: 'Edit', onAction: () => undefined },
  { label: 'Duplicate', onAction: () => undefined },
  { label: 'Delete', destructive: true, onAction: () => undefined },
]

/** Builds the list columns; \`onOpenTask\` is the title button's click. \`sortFieldId\` makes a header sortable. */
function taskColumns(onOpenTask: (id: string) => void) {
  return defineColumns<Task>()([
    {
      id: 'title',
      header: 'Title',
      // A floor width keeps titles on one line on phones; the table scrolls sideways inside its frame instead.
      meta: { sortFieldId: 'title', className: 'min-w-64' },
      cell: (row) => (
        <button type="button" onClick={() => onOpenTask(row.id)} className="text-left hover:text-primary">
          <div className="text-[13px] font-medium">{row.title}</div>
          <div className="font-mono text-[10px] text-muted-foreground">{row.id}</div>
        </button>
      ),
    },
    { id: 'status', header: 'Status', meta: { sortFieldId: 'status', className: 'whitespace-nowrap' }, cell: (row) => <StatusPill status={row.status} /> },
    { id: 'priority', header: 'Pri', meta: { sortFieldId: 'priority' }, cell: (row) => <PriorityBadge priority={row.priority} /> },
    {
      id: 'project',
      header: 'Project',
      meta: { sortFieldId: 'project' },
      cell: (row) => (
        <Badge variant="outline" className="text-[10px]">
          {row.project}
        </Badge>
      ),
    },
    { id: 'assignee', header: 'Assignee', cell: (row) => <PersonLabel person={{ name: row.assignee.name }} size="xs" className="text-[13px]" /> },
    {
      id: 'due',
      header: 'Due',
      meta: { sortFieldId: 'due' },
      cell: (row) => <span className="font-mono text-[12px] text-muted-foreground">{row.due ?? '—'}</span>,
    },
  ])
}

/** The list view: the datagrid kit over an in-memory adapter of the already-filtered tasks (a new list reloads it). */
export function ListView({ tasks, onOpenTask }: { tasks: Task[]; onOpenTask: (id: string) => void }) {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: tasks }), [tasks])
  const columns = useMemo(() => taskColumns(onOpenTask), [onOpenTask])
  return (
    <DataGridProvider adapter={adapter}>
      {/* No drag handle: the list is a filtered view, so a manual order would not survive the next filter. */}
      <DataGrid columns={columns} selectable enableRowReorder={false} rightMenuActions={rowMenu} rowLabel={(row) => row.title} empty="No tasks match your filters." />
    </DataGridProvider>
  )
}

export function BoardView({
  tasks,
  onOpenTask,
}: {
  tasks: Task[]
  onOpenTask: (id: string) => void
}) {
  const cols: Status[] = ['todo', 'doing', 'review', 'done']
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cols.map((c) => {
        const colTasks = tasks.filter((t) => t.status === c)
        return (
          <div key={c} className="flex min-h-[200px] flex-col rounded-lg border border-border bg-surface-1">
            <div className="flex items-center justify-between border-b border-border px-3 py-2">
              <div className="flex items-center gap-2">
                <StatusPill status={c} />
                <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                  {colTasks.length}
                </span>
              </div>
              <Button variant="ghost" size="icon-xs" aria-label="Add to column">
                <Plus />
              </Button>
            </div>
            <div className="flex-1 space-y-2 p-2">
              {colTasks.map((t) => (
                <KanbanCard
                  key={t.id}
                  title={t.title}
                  description={t.description}
                  badges={[
                    { label: priorityMeta[t.priority].label, tone: t.priority === 'p0' ? 'danger' : t.priority === 'p1' ? 'warning' : 'default' },
                    { label: t.project, tone: 'primary' },
                  ]}
                  assignee={t.assignee}
                  due={t.due}
                  count={[
                    ...(t.comments ? [{ icon: <MessageSquare />, value: t.comments }] : []),
                    ...(t.subtasks ? [{ icon: <CheckSquare />, value: \`\${t.subtasks.done}/\${t.subtasks.total}\` }] : []),
                  ]}
                  onClick={() => onOpenTask(t.id)}
                />
              ))}
              {colTasks.length === 0 ? (
                <div className="flex h-20 items-center justify-center text-[12px] text-muted-foreground">
                  Empty
                </div>
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>S(()=>import(`./views-DI3UC_46.js`),[]));var X=`import { Users } from 'lucide-react'
import { PersonLabel } from '@kitora/display'
import { Badge } from '@kitora/ui/badge'
import { Button } from '@kitora/ui/button'
import { Label } from '@kitora/ui/label'
import { SheetClose, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@kitora/ui/sheet'
import { Textarea } from '@kitora/ui/textarea'
import type { Task } from './data'
import { PriorityBadge, StatusPill } from './badges'

export function TaskDetail({ task }: { task: Task }) {
  return (
    <>
      <SheetHeader>
        <div className="flex items-center gap-2">
          <PriorityBadge priority={task.priority} />
          <StatusPill status={task.status} />
          <Badge variant="outline" className="text-[10px]">
            {task.project}
          </Badge>
        </div>
        <SheetTitle className="text-xl tracking-tighter">{task.title}</SheetTitle>
        <SheetDescription>
          <span className="font-mono">{task.id}</span> · created May 1
        </SheetDescription>
      </SheetHeader>

      <div className="space-y-5 px-4">
        {task.description ? (
          <p className="text-sm leading-relaxed text-foreground/90">
            {task.description}
          </p>
        ) : null}

        <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2.5 text-[13px]">
          <dt className="text-muted-foreground">Assignee</dt>
          <dd>
            <PersonLabel person={{ name: task.assignee.name }} size="xs" />
          </dd>
          <dt className="text-muted-foreground">Due</dt>
          <dd className="font-mono text-muted-foreground">{task.due ?? '—'}</dd>
          <dt className="text-muted-foreground">Comments</dt>
          <dd className="text-muted-foreground">{task.comments ?? 0}</dd>
          {task.subtasks ? (
            <>
              <dt className="text-muted-foreground">Subtasks</dt>
              <dd className="font-mono text-muted-foreground">
                {task.subtasks.done} / {task.subtasks.total}
              </dd>
            </>
          ) : null}
        </dl>

        <div>
          <Label className="mb-1.5 block text-xs text-muted-foreground">
            Comment
          </Label>
          <Textarea placeholder="Add a comment…" rows={3} />
          <div className="mt-2 flex justify-end">
            <Button size="sm">Send</Button>
          </div>
        </div>
      </div>

      <SheetFooter>
        <div className="flex w-full items-center justify-between">
          <Button variant="ghost" size="sm">
            <Users />
            Watch
          </Button>
          <SheetClose asChild>
            <Button variant="outline" size="sm">
              Close
            </Button>
          </SheetClose>
        </div>
      </SheetFooter>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>S(()=>import(`./task-detail-BK7vNxt0.js`),[]));var Z=`import { useState } from 'react'
import { Button } from '@kitora/ui/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@kitora/ui/dialog'
import { Input } from '@kitora/ui/input'
import { Label } from '@kitora/ui/label'
import { Select } from '@kitora/collections/ui'
import { PRIORITY_OPTIONS, PROJECT_OPTIONS, type Priority, type Task } from './data'

export function CreateTaskDialog({ onCreate }: { onCreate: (t: Task) => void }) {
  const [title, setTitle] = useState('')
  const [project, setProject] = useState('Auth')
  const [priority, setPriority] = useState<Priority>('p2')
  const [assignee] = useState({ name: 'Alex Kim' })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New task</DialogTitle>
        <DialogDescription>
          Quick capture. Drop into the right project — assign + prioritize.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-3">
        <div className="grid gap-1.5">
          <Label htmlFor="t-title">Title</Label>
          <Input
            id="t-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Wire OAuth callback…"
            autoFocus
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-1.5">
            <Label id="t-project">Project</Label>
            <Select items={PROJECT_OPTIONS} value={project} onChange={(v) => v && setProject(v)} aria-labelledby="t-project" />
          </div>
          <div className="grid gap-1.5">
            <Label id="t-priority">Priority</Label>
            <Select
              items={PRIORITY_OPTIONS}
              value={priority}
              onChange={(v) => {
                const next = PRIORITY_OPTIONS.find((o) => o.id === v)
                if (next) setPriority(next.id)
              }}
              aria-labelledby="t-priority"
            />
          </div>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button
          onClick={() => {
            if (!title.trim()) return
            onCreate({
              id: \`t-\${Math.floor(Math.random() * 9000 + 1000)}\`,
              title,
              project,
              priority,
              status: 'todo',
              assignee,
            })
          }}
        >
          Create task
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>S(()=>import(`./create-task-dialog-C6pdIijD.js`),[]));var Q=`import { CheckSquare, Circle, CircleDot, Clock } from 'lucide-react'
import { Badge } from '@kitora/ui/badge'
import { cn } from '@kitora/ui/utils'
import type { Priority, Status } from './data'

const statusMeta: Record<Status, { label: string; tone: string; icon: React.ReactNode }> = {
  todo: { label: 'Todo', tone: 'bg-muted text-muted-foreground', icon: <Circle className="size-3" /> },
  doing: { label: 'In progress', tone: 'bg-sky-500/10 text-sky-700 dark:text-sky-400', icon: <CircleDot className="size-3" /> },
  review: { label: 'In review', tone: 'bg-amber-500/10 text-amber-700 dark:text-amber-400', icon: <Clock className="size-3" /> },
  done: { label: 'Done', tone: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400', icon: <CheckSquare className="size-3" /> },
}

export const priorityMeta: Record<Priority, { label: string; tone: string }> = {
  p0: { label: 'P0', tone: 'border-rose-500/40 text-rose-700 dark:text-rose-400' },
  p1: { label: 'P1', tone: 'border-amber-500/40 text-amber-700 dark:text-amber-400' },
  p2: { label: 'P2', tone: 'border-border text-muted-foreground' },
  p3: { label: 'P3', tone: 'border-border text-muted-foreground' },
}

export function StatusPill({ status }: { status: Status }) {
  const meta = statusMeta[status]
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium', meta.tone)}>
      {meta.icon}
      {meta.label}
    </span>
  )
}

export function PriorityBadge({ priority }: { priority: Priority }) {
  const meta = priorityMeta[priority]
  return (
    <Badge variant="outline" className={cn('font-mono text-[10px]', meta.tone)}>
      {meta.label}
    </Badge>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>S(()=>import(`./badges-DznYiqMf.js`),[]));var $=`import { Folder, FolderOpen, Inbox, Star } from 'lucide-react'

export type Status = 'todo' | 'doing' | 'review' | 'done'
export type Priority = 'p0' | 'p1' | 'p2' | 'p3'

/** The new-task dialog's priority choices; \`id\` is typed as \`Priority\` so a pick needs no cast. */
export const PRIORITY_OPTIONS: readonly { readonly id: Priority; readonly label: string }[] = [
  { id: 'p0', label: 'P0 — urgent' },
  { id: 'p1', label: 'P1 — high' },
  { id: 'p2', label: 'P2 — medium' },
  { id: 'p3', label: 'P3 — low' },
]

/** The new-task dialog's project choices. */
export const PROJECT_OPTIONS = ['Auth', 'Data', 'Infra', 'Onboarding', 'Design', 'Workspaces', 'Dashboard'].map((p) => ({ id: p, label: p }))

export interface Task {
  id: string
  title: string
  description?: string
  project: string
  status: Status
  priority: Priority
  assignee: { name: string; initials?: string }
  due?: string
  comments?: number
  subtasks?: { done: number; total: number }
}

export const seedTasks: Task[] = [
  {
    id: 't-001',
    title: 'Wire OAuth callback to session cookie',
    description: 'Callback should mint a signed cookie + redirect to original path.',
    project: 'Auth',
    status: 'doing',
    priority: 'p1',
    assignee: { name: 'Alex Kim' },
    due: 'May 9',
    comments: 3,
    subtasks: { done: 2, total: 4 },
  },
  {
    id: 't-002',
    title: 'Datatable pagination — server-side',
    project: 'Data',
    status: 'review',
    priority: 'p1',
    assignee: { name: 'Grace H' },
    due: 'May 11',
    comments: 1,
  },
  {
    id: 't-003',
    title: 'Empty state for new workspaces',
    project: 'Onboarding',
    status: 'todo',
    priority: 'p2',
    assignee: { name: 'Linus T' },
    due: 'May 14',
  },
  {
    id: 't-004',
    title: 'Migration: add \`sessions\` table',
    project: 'Auth',
    status: 'done',
    priority: 'p1',
    assignee: { name: 'Alex Kim' },
  },
  {
    id: 't-005',
    title: 'Block deploys on failing migrations',
    description: 'Pre-deploy step needs to run migrate dry-run and exit non-zero on schema drift.',
    project: 'Infra',
    status: 'doing',
    priority: 'p0',
    assignee: { name: 'Grace H' },
    due: 'May 8',
    comments: 5,
    subtasks: { done: 1, total: 3 },
  },
  {
    id: 't-006',
    title: 'Avatar fallback color generator',
    project: 'Design',
    status: 'todo',
    priority: 'p3',
    assignee: { name: 'Linus T' },
    due: 'May 21',
  },
  {
    id: 't-007',
    title: 'Bulk-archive selected projects',
    project: 'Workspaces',
    status: 'todo',
    priority: 'p2',
    assignee: { name: 'Grace H' },
    due: 'May 12',
  },
  {
    id: 't-008',
    title: 'Rate-limit anon API',
    project: 'Infra',
    status: 'review',
    priority: 'p1',
    assignee: { name: 'Alex Kim' },
    due: 'May 13',
    subtasks: { done: 3, total: 3 },
  },
  {
    id: 't-009',
    title: 'Activity feed: per-actor filter',
    project: 'Dashboard',
    status: 'todo',
    priority: 'p2',
    assignee: { name: 'Mira O' },
  },
  {
    id: 't-010',
    title: 'Onboarding checklist card',
    project: 'Onboarding',
    status: 'done',
    priority: 'p2',
    assignee: { name: 'Mira O' },
  },
]

/** A project in the sidebar tree (collections items: \`hint\` is the right-aligned count). */
export interface ProjectNode {
  readonly id: string
  readonly label: string
  readonly icon: React.ReactNode
  readonly hint?: string
  readonly children?: readonly ProjectNode[]
}

export const projectsTree: readonly ProjectNode[] = [
  { id: 'all', label: 'All projects', icon: <Inbox /> },
  {
    id: 'eng',
    label: 'Engineering',
    icon: <FolderOpen />,
    children: [
      { id: 'auth', label: 'Auth', icon: <Folder /> },
      { id: 'data', label: 'Data', icon: <Folder /> },
      { id: 'infra', label: 'Infra', icon: <Folder /> },
    ],
  },
  { id: 'design', label: 'Design', icon: <Folder /> },
  { id: 'onboarding', label: 'Onboarding', icon: <Folder />, hint: '2' },
  { id: 'workspaces', label: 'Workspaces', icon: <Folder /> },
  { id: 'starred', label: 'Starred', icon: <Star /> },
]
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>S(()=>import(`./data-Pt9bG4P1.js`),[]));var Ae=[{name:`page.tsx`,code:J},{name:`views.tsx`,code:Y},{name:`task-detail.tsx`,code:X},{name:`create-task-dialog.tsx`,code:Z},{name:`badges.tsx`,code:Q},{name:`data.tsx`,code:$}];function je(){return(0,H.jsx)(ve,{slug:`tasks`,files:Ae,children:(0,H.jsx)(ke,{})})}export{je as component};