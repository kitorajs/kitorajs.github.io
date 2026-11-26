import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{$ as t,F as n,G as r,I as i,R as a,Y as o,Z as s,n as c,t as l}from"./data-grid-highlight-CpMXzsVp.js";import{s as u}from"./kit-docs-BUovISd0.js";import{n as d}from"./kbd-BBrTDCPy.js";import{Bc as f,Cc as p,Ic as m,ti as h}from"./index-B9ukmIN1.js";import{r as g,s as _,t as v}from"./popover-Btm2pKCO.js";import{t as ee}from"./key-hint-Cx6mHwhK.js";import{a as y,i as te,n as b,r as ne,t as x}from"./data-grid-a0FFXgkb.js";import{a as S,c as C,d as w,f as T,i as E,l as re,m as ie,n as D,o as ae,p as oe,r as O,s as se,t as ce,u as le}from"./search-input-DsEV1jiZ.js";import{t as k}from"./data-grid-search-D_d2VLaX.js";import"./kit-gallery-Bph7isB2.js";import{t as A}from"./example-BGnSQG2Y.js";var j=e(f(),1),M=m(),N=[{id:`1`,name:`Grace Bennett`,role:`Engineer`},{id:`2`,name:`Linus Whitfield`,role:`Designer`},{id:`3`,name:`Maya Chamberlain`,role:`Manager`}],P=n()([{id:`name`,header:`Name`,cell:e=>e.name},{id:`role`,header:`Role`,cell:e=>e.role}]);function F(){return(0,M.jsx)(s,{children:(0,M.jsx)(o,{adapter:(0,j.useMemo)(()=>a({initial:N}),[]),children:(0,M.jsx)(b,{columns:P,selectable:!1})})})}var I=`import { useMemo } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"

interface Person {
  id: string
  name: string
  role: string
}

const people: Person[] = [
  { id: "1", name: "Grace Bennett", role: "Engineer" },
  { id: "2", name: "Linus Whitfield", role: "Designer" },
  { id: "3", name: "Maya Chamberlain", role: "Manager" },
]

const columns = defineColumns<Person>()([
  { id: "name", header: "Name", cell: (r) => r.name },
  { id: "role", header: "Role", cell: (r) => r.role },
])

/** The smallest grid: an array, two columns, one adapter. */
export function BasicTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: people }), [])
  return (
    <DataGridUIProvider>
      <DataGridProvider adapter={adapter}>
        <DataGrid columns={columns} selectable={false} />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>p(()=>import(`./table-D_Wo8Jz3.js`),[]));var L=[{id:`1`,name:`Grace Bennett`,age:34},{id:`2`,name:`Linus Whitfield`,age:27},{id:`3`,name:`Maya Chamberlain`,age:41}],R=n()([{id:`name`,header:`Name`,cell:e=>e.name,meta:{sortFieldId:`name`}},{id:`age`,header:`Age`,cell:e=>e.age,meta:{sortFieldId:`age`,align:`end`}}]);function z(){return(0,M.jsx)(s,{defaultSort:[{fieldId:`age`,direction:`desc`}],children:(0,M.jsx)(o,{adapter:(0,j.useMemo)(()=>a({initial:L}),[]),children:(0,M.jsx)(b,{columns:R,selectable:!1})})})}var B=`import { useMemo } from "react"
import { DataGrid, DataGridProvider, DataGridUIProvider, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"

interface Person {
  id: string
  name: string
  age: number
}

const people: Person[] = [
  { id: "1", name: "Grace Bennett", age: 34 },
  { id: "2", name: "Linus Whitfield", age: 27 },
  { id: "3", name: "Maya Chamberlain", age: 41 },
]

// \`sortFieldId\` makes a header clickable: asc, desc, off.
const columns = defineColumns<Person>()([
  { id: "name", header: "Name", cell: (r) => r.name, meta: { sortFieldId: "name" } },
  { id: "age", header: "Age", cell: (r) => r.age, meta: { sortFieldId: "age", align: "end" } },
])

export function SortingTable() {
  const adapter = useMemo(() => createInMemoryAdapter({ initial: people }), [])
  return (
    <DataGridUIProvider defaultSort={[{ fieldId: "age", direction: "desc" }]}>
      <DataGridProvider adapter={adapter}>
        <DataGrid columns={columns} selectable={false} />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>p(()=>import(`./sorting-UVo4WlJk.js`),[]));var V=[{id:`1`,name:`Grace Bennett`,team:`Platform`},{id:`2`,name:`Linus Whitfield`,team:`Design`},{id:`3`,name:`Maya Chamberlain`,team:`Growth`},{id:`4`,name:`Nina Holloway`,team:`Platform`}],H=n()([{id:`name`,header:`Name`,cell:e=>e.name},{id:`team`,header:`Team`,cell:e=>e.team}]);function U(){return(0,M.jsx)(s,{children:(0,M.jsxs)(o,{adapter:(0,j.useMemo)(()=>a({initial:V,searchKeys:[`name`,`team`],search:{placeholder:`Search people…`,toWhere:()=>({})}}),[]),children:[(0,M.jsx)(k,{}),(0,M.jsx)(b,{columns:H,selectable:!1,className:`mt-2`})]})})}var W=`import { useMemo } from "react"
import { DataGrid, DataGridProvider, DataGridSearch, DataGridUIProvider, createInMemoryAdapter, defineColumns } from "@kitora/datagrid"

interface Person {
  id: string
  name: string
  team: string
}

const people: Person[] = [
  { id: "1", name: "Grace Bennett", team: "Platform" },
  { id: "2", name: "Linus Whitfield", team: "Design" },
  { id: "3", name: "Maya Chamberlain", team: "Growth" },
  { id: "4", name: "Nina Holloway", team: "Platform" },
]

const columns = defineColumns<Person>()([
  { id: "name", header: "Name", cell: (r) => r.name },
  { id: "team", header: "Team", cell: (r) => r.team },
])

export function SearchTable() {
  // \`search\` on the adapter turns the search box on; \`searchKeys\` says which fields it matches.
  const adapter = useMemo(
    () => createInMemoryAdapter({ initial: people, searchKeys: ["name", "team"], search: { placeholder: "Search people…", toWhere: () => ({}) } }),
    [],
  )
  return (
    <DataGridUIProvider>
      <DataGridProvider adapter={adapter}>
        <DataGridSearch />
        <DataGrid columns={columns} selectable={false} className="mt-2" />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>p(()=>import(`./search-ClRIuc9s.js`),[]));var ue=[`Grace moved the billing export to the Platform team.`,`Linus shipped the new invoice layout for Design.`,`Maya is reviewing the Growth onboarding emails.`];function de(){let[e,t]=(0,j.useState)(`platform invoice`);return(0,M.jsxs)(`div`,{className:`space-y-2`,children:[(0,M.jsx)(ce,{value:e,onChange:t,placeholder:`Highlight words…`,debounce:150}),(0,M.jsx)(c,{query:e,children:(0,M.jsx)(`ul`,{className:`space-y-1 text-sm`,children:ue.map(e=>(0,M.jsx)(`li`,{children:(0,M.jsx)(l,{children:e})},e))})})]})}var G=`import { useState } from "react"
import { DataGridHighlight, DataGridHighlightProvider, FilterSearchInput } from "@kitora/datagrid"

const notes = [
  "Grace moved the billing export to the Platform team.",
  "Linus shipped the new invoice layout for Design.",
  "Maya is reviewing the Growth onboarding emails.",
]

/** FilterSearchInput debounces the query; DataGridHighlight marks every matching word under the provider. */
export function HighlightedNotes() {
  const [query, setQuery] = useState("platform invoice")
  return (
    <div className="space-y-2">
      <FilterSearchInput value={query} onChange={setQuery} placeholder="Highlight words…" debounce={150} />
      <DataGridHighlightProvider query={query}>
        <ul className="space-y-1 text-sm">
          {notes.map((note) => (
            <li key={note}>
              <DataGridHighlight>{note}</DataGridHighlight>
            </li>
          ))}
        </ul>
      </DataGridHighlightProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>p(()=>import(`./highlight-B44Xt__F.js`),[]));var K={id:`seats`,label:`Seats`,type:`number`,toWhere:e=>({seats:{[e.operator]:e.value}})},q=i()([{id:`role`,label:`Role`,type:`select`,options:[{value:`Admin`,label:`Admin`},{value:`Editor`,label:`Editor`},{value:`Viewer`,label:`Viewer`}],toWhere:e=>({role:e.value})},K]);function J(){let[e,n]=(0,j.useState)([{id:`c1`,fieldId:`role`,operator:`eq`,value:`Admin`}]),[r,i]=(0,j.useState)({operator:`gte`,value:5}),[a,o]=(0,j.useState)(5),[s,c]=(0,j.useState)(!1),[l,u]=(0,j.useState)(!1);return(0,M.jsxs)(`div`,{className:`space-y-3 text-sm`,children:[(0,M.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,M.jsx)(E,{fields:q,onAdd:e=>n(t=>[...t,e])}),e.map(e=>{let t=q.find(t=>t.id===e.fieldId);return t?(0,M.jsx)(D,{field:t,condition:e,onUpdate:e=>n(t=>t.map(t=>t.id===e.id?e:t)),onRemove:()=>n(t=>t.filter(t=>t.id!==e.id))},e.id):null}),(0,M.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`press `,(0,M.jsx)(d,{binding:`f`}),` in a grid to open the picker`]})]}),(0,M.jsx)(`pre`,{className:`rounded bg-muted p-2 text-xs`,children:JSON.stringify(t({fields:q,filters:e})??{})}),(0,M.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,M.jsx)(O,{field:K,initialOperator:r.operator,initialValue:r.value,controlled:!0,open:s,onOpenChange:c,onApply:e=>i({operator:e.operator,value:e.value}),trigger:(0,M.jsxs)(`button`,{type:`button`,className:`h-7 rounded border border-border px-2 text-xs`,children:[`Seats `,r.operator,` `,String(r.value)]})}),l?(0,M.jsx)(`div`,{className:`w-40`,children:(0,M.jsx)(S,{field:K,operator:`gte`,value:a,onChange:o,onCommit:()=>{i({operator:`gte`,value:a}),u(!1)}})}):(0,M.jsx)(`button`,{type:`button`,className:`h-7 rounded border border-border px-2 text-xs`,onClick:()=>u(!0),children:`Edit seats inline`})]})]})}var Y=`import { useState } from "react"
import { ControlSwitch, FilterPicker, FilterPill, FilterValuePopover, buildWhere, defineFilterFields, type FilterCondition, type FilterFieldDef, type FilterOperator } from "@kitora/datagrid"
import { Kbd } from "@kitora/keyboard"

/** The where your API takes; each field's toWhere returns one piece of it. */
interface Where {
  role?: string | string[]
  seats?: Partial<Record<FilterOperator, unknown>>
}

const seatsField: FilterFieldDef<Where> = { id: "seats", label: "Seats", type: "number", toWhere: (c) => ({ seats: { [c.operator]: c.value } }) }
const fields: readonly FilterFieldDef<Where>[] = defineFilterFields<Where>()([
  { id: "role", label: "Role", type: "select", options: [{ value: "Admin", label: "Admin" }, { value: "Editor", label: "Editor" }, { value: "Viewer", label: "Viewer" }], toWhere: (c) => ({ role: c.value }) },
  seatsField,
])

/** Your own filter bar from the parts DataGridFilterBar uses: the picker adds, each pill edits or removes. */
export function FilterParts() {
  const [conditions, setConditions] = useState<FilterCondition[]>([{ id: "c1", fieldId: "role", operator: "eq", value: "Admin" }])
  // A seats editor of its own: FilterValuePopover on any button, ControlSwitch inline once "Edit seats inline" is pressed.
  const [seats, setSeats] = useState<{ operator: FilterOperator; value: unknown }>({ operator: "gte", value: 5 })
  const [draft, setDraft] = useState<unknown>(5)
  // Controlled here so the page can read whether the editor is open; uncontrolled it starts closed (pass defaultOpen to start open).
  const [seatsOpen, setSeatsOpen] = useState(false)
  const [inlineOpen, setInlineOpen] = useState(false)

  return (
    <div className="space-y-3 text-sm">
      <div className="flex flex-wrap items-center gap-1.5">
        <FilterPicker fields={fields} onAdd={(c) => setConditions((cs) => [...cs, c])} />
        {conditions.map((c) => {
          const field = fields.find((f) => f.id === c.fieldId)
          if (!field) return null
          return (
            <FilterPill
              key={c.id}
              field={field}
              condition={c}
              onUpdate={(next) => setConditions((cs) => cs.map((x) => (x.id === next.id ? next : x)))}
              onRemove={() => setConditions((cs) => cs.filter((x) => x.id !== c.id))}
            />
          )
        })}
        <span className="text-xs text-muted-foreground">
          press <Kbd binding="f" /> in a grid to open the picker
        </span>
      </div>
      <pre className="rounded bg-muted p-2 text-xs">{JSON.stringify(buildWhere({ fields, filters: conditions }) ?? {})}</pre>

      <div className="flex flex-wrap items-center gap-2">
        <FilterValuePopover
          field={seatsField}
          initialOperator={seats.operator}
          initialValue={seats.value}
          controlled
          open={seatsOpen}
          onOpenChange={setSeatsOpen}
          onApply={(next) => setSeats({ operator: next.operator, value: next.value })}
          trigger={
            <button type="button" className="h-7 rounded border border-border px-2 text-xs">
              Seats {seats.operator} {String(seats.value)}
            </button>
          }
        />
        {/* the value controls focus themselves as they mount, so the inline editor opens on a press, as your own would */}
        {inlineOpen ? (
          <div className="w-40">
            <ControlSwitch
              field={seatsField}
              operator="gte"
              value={draft}
              onChange={setDraft}
              onCommit={() => {
                setSeats({ operator: "gte", value: draft })
                setInlineOpen(false)
              }}
            />
          </div>
        ) : (
          <button type="button" className="h-7 rounded border border-border px-2 text-xs" onClick={() => setInlineOpen(true)}>
            Edit seats inline
          </button>
        )}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>p(()=>import(`./filter-parts-BwxWZ__j.js`),[]));var X=[{value:`admin`,label:`Admin`},{value:`editor`,label:`Editor`},{value:`viewer`,label:`Viewer`}],Z=async e=>[{value:`design`,label:`Design`},{value:`platform`,label:`Platform`},{value:`growth`,label:`Growth`}].filter(t=>t.label.toLowerCase().includes(e.toLowerCase())),fe=n()([{id:`name`,header:`Name`,cell:e=>e.name,meta:{sortFieldId:`name`}}]);function Q({label:e,value:t,children:n}){return(0,M.jsxs)(`div`,{className:`grid gap-1 rounded-md border border-border p-2`,children:[(0,M.jsxs)(`div`,{className:`flex items-center justify-between gap-2 text-xs text-muted-foreground`,children:[(0,M.jsx)(`span`,{children:e}),(0,M.jsx)(`code`,{className:`truncate`,children:JSON.stringify(t)??`—`})]}),(0,M.jsxs)(v,{children:[(0,M.jsx)(_,{asChild:!0,children:(0,M.jsx)(h,{variant:`outline`,size:`sm`,className:`justify-self-start`,children:`Edit value`})}),(0,M.jsx)(g,{className:`w-72`,children:n})]})]})}function pe(){let[e,t]=(0,j.useState)([]),[n,i]=(0,j.useState)(`ada`),[a,o]=(0,j.useState)(5),[s,c]=(0,j.useState)(!0),[l,u]=(0,j.useState)(`editor`),[d,f]=(0,j.useState)([`admin`]),[p,m]=(0,j.useState)(void 0),[h,g]=(0,j.useState)(void 0),[_,v]=(0,j.useState)(void 0),[b,S]=(0,j.useState)([]),E=fe[0],D=E?.meta?.sortFieldId,O=e.find(e=>e.fieldId===D)?.direction;return!E||!D?null:(0,M.jsxs)(`div`,{className:`grid gap-4 text-sm`,children:[(0,M.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,M.jsx)(`table`,{className:`rounded-md border border-border`,children:(0,M.jsx)(`thead`,{children:(0,M.jsx)(`tr`,{children:(0,M.jsx)(`th`,{"aria-sort":te(O),className:`px-3 py-2 text-start text-xs font-medium text-muted-foreground`,children:(0,M.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,M.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>y(e,D)),className:`inline-flex items-center gap-1.5 hover:text-foreground`,children:[`Name`,(0,M.jsx)(ne,{dir:O})]}),(0,M.jsx)(x,{col:E,currentDir:O,onSortAsc:()=>t([{fieldId:D,direction:`asc`}]),onSortDesc:()=>t([{fieldId:D,direction:`desc`}]),onClearSort:()=>t([]),onFilter:()=>void 0,onHide:()=>void 0})]})})})})}),(0,M.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 text-muted-foreground`,children:[`Search `,(0,M.jsx)(ee,{command:r.focusSearch,fallback:`/`})]}),(0,M.jsxs)(`code`,{className:`text-xs text-muted-foreground`,children:[`sort: `,JSON.stringify(e)]})]}),(0,M.jsxs)(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[(0,M.jsx)(Q,{label:`TextControl`,value:n,children:(0,M.jsx)(ae,{operator:`contains`,value:n,onChange:i})}),(0,M.jsx)(Q,{label:`NumberControl`,value:a,children:(0,M.jsx)(le,{operator:`gte`,value:a,onChange:o})}),(0,M.jsx)(Q,{label:`BooleanControl`,value:s,children:(0,M.jsx)(ie,{operator:`eq`,value:s,onChange:c})}),(0,M.jsx)(Q,{label:`SelectControl`,value:l,children:(0,M.jsx)(se,{operator:`eq`,value:l,onChange:u,options:X})}),(0,M.jsx)(Q,{label:`MultiSelectControl`,value:d,children:(0,M.jsx)(w,{operator:`in`,value:d,onChange:f,options:X})}),(0,M.jsx)(Q,{label:`RelationControl`,value:_,children:(0,M.jsx)(C,{operator:`eq`,value:_,onChange:v,loadOptions:Z})}),(0,M.jsx)(Q,{label:`RelationMultiControl`,value:b,children:(0,M.jsx)(re,{operator:`in`,value:b,onChange:S,loadOptions:Z})}),(0,M.jsx)(Q,{label:`DateControl`,value:p,children:(0,M.jsx)(oe,{operator:`eq`,value:p,onChange:m})}),(0,M.jsx)(Q,{label:`DateRangeControl`,value:h,children:(0,M.jsx)(T,{operator:`between`,value:h,onChange:g,showPresets:!1})})]})]})}var $=`import { useState, type ReactNode } from "react"
import { Button } from "@kitora/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@kitora/ui/popover"
import { ariaSortOf, BooleanControl, cycleHeaderSort, DataGridColumnHeaderMenu, DataGridKeyHint, DataGridSortIcon, DATAGRID_COMMANDS, DateControl, DateRangeControl, defineColumns, MultiSelectControl, NumberControl, RelationControl, RelationMultiControl, SelectControl, TextControl, type DataGridColumn, type DateRangeValue, type FilterOption, type SortRule } from "@kitora/datagrid"

const ROLES: FilterOption[] = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
]

// A relation control asks your API for options as the person types (stub: replace with your API).
const loadTeams = async (query: string): Promise<FilterOption[]> =>
  [
    { value: "design", label: "Design" },
    { value: "platform", label: "Platform" },
    { value: "growth", label: "Growth" },
  ].filter((team) => team.label.toLowerCase().includes(query.toLowerCase()))

interface Member {
  id: string
  name: string
}
const columns: readonly DataGridColumn<Member>[] = defineColumns<Member>()([{ id: "name", header: "Name", cell: (r) => r.name, meta: { sortFieldId: "name" } }])

/**
 * One labelled box per control, the control in a popover as a filter editor shows it: each value control focuses
 * itself when it mounts (it opens in a menu or popover), so opening it is what moves the focus, never the page load.
 */
function Cell({ label, value, children }: { label: string; value: unknown; children: ReactNode }) {
  return (
    <div className="grid gap-1 rounded-md border border-border p-2">
      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
        <span>{label}</span>
        <code className="truncate">{JSON.stringify(value) ?? "—"}</code>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="justify-self-start">
            Edit value
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">{children}</PopoverContent>
      </Popover>
    </div>
  )
}

/**
 * The datagrid's own parts outside \`<DataGrid>\`: a header cell from \`ariaSortOf\`, \`cycleHeaderSort\`, \`DataGridSortIcon\` and
 * \`DataGridColumnHeaderMenu\`, a toolbar key hint (\`DataGridKeyHint\`), and every filter value control \`ControlSwitch\` picks from, each
 * driven by its own state and opened in a popover, for a filter editor of your own.
 */
export function ComposeParts() {
  const [sort, setSort] = useState<SortRule[]>([])
  const [text, setText] = useState("ada")
  const [num, setNum] = useState<number | string>(5)
  const [bool, setBool] = useState<boolean | undefined>(true)
  const [role, setRole] = useState<string | undefined>("editor")
  const [roles, setRoles] = useState<string[]>(["admin"])
  const [day, setDay] = useState<string | undefined>(undefined)
  const [range, setRange] = useState<DateRangeValue | undefined>(undefined)
  const [team, setTeam] = useState<string | undefined>(undefined)
  const [teams, setTeams] = useState<string[]>([])
  const col = columns[0]
  const fieldId = col?.meta?.sortFieldId
  const dir = sort.find((s) => s.fieldId === fieldId)?.direction
  if (!col || !fieldId) return null
  return (
    <div className="grid gap-4 text-sm">
      <div className="flex flex-wrap items-center gap-4">
        <table className="rounded-md border border-border">
          <thead>
            <tr>
              <th aria-sort={ariaSortOf(dir)} className="px-3 py-2 text-start text-xs font-medium text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <button type="button" onClick={() => setSort((prev) => cycleHeaderSort(prev, fieldId))} className="inline-flex items-center gap-1.5 hover:text-foreground">
                    Name
                    <DataGridSortIcon dir={dir} />
                  </button>
                  <DataGridColumnHeaderMenu
                    col={col}
                    currentDir={dir}
                    onSortAsc={() => setSort([{ fieldId, direction: "asc" }])}
                    onSortDesc={() => setSort([{ fieldId, direction: "desc" }])}
                    onClearSort={() => setSort([])}
                    onFilter={() => undefined}
                    onHide={() => undefined}
                  />
                </span>
              </th>
            </tr>
          </thead>
        </table>
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          Search <DataGridKeyHint command={DATAGRID_COMMANDS.focusSearch} fallback="/" />
        </span>
        <code className="text-xs text-muted-foreground">sort: {JSON.stringify(sort)}</code>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <Cell label="TextControl" value={text}>
          <TextControl operator="contains" value={text} onChange={setText} />
        </Cell>
        <Cell label="NumberControl" value={num}>
          <NumberControl operator="gte" value={num} onChange={setNum} />
        </Cell>
        <Cell label="BooleanControl" value={bool}>
          <BooleanControl operator="eq" value={bool} onChange={setBool} />
        </Cell>
        <Cell label="SelectControl" value={role}>
          <SelectControl operator="eq" value={role} onChange={setRole} options={ROLES} />
        </Cell>
        <Cell label="MultiSelectControl" value={roles}>
          <MultiSelectControl operator="in" value={roles} onChange={setRoles} options={ROLES} />
        </Cell>
        <Cell label="RelationControl" value={team}>
          <RelationControl operator="eq" value={team} onChange={setTeam} loadOptions={loadTeams} />
        </Cell>
        <Cell label="RelationMultiControl" value={teams}>
          <RelationMultiControl operator="in" value={teams} onChange={setTeams} loadOptions={loadTeams} />
        </Cell>
        <Cell label="DateControl" value={day}>
          <DateControl operator="eq" value={day} onChange={setDay} />
        </Cell>
        <Cell label="DateRangeControl" value={range}>
          <DateRangeControl operator="between" value={range} onChange={setRange} showPresets={false} />
        </Cell>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>p(()=>import(`./compose-parts-DSc4AK4y.js`),[]));function me(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(u,{title:`Basics: table`,children:`The smallest grid: rows from an array through createInMemoryAdapter, then sorting and search added one prop at a time.`}),(0,M.jsx)(A,{n:1,title:`A table from an array`,blurb:`Two providers, one adapter over an array, and a column list.`,code:I,children:(0,M.jsx)(F,{})}),(0,M.jsx)(A,{n:2,title:`Sorting`,blurb:`Give a column meta.sortFieldId and its header sorts on click; defaultSort sets the first order.`,code:B,children:(0,M.jsx)(z,{})}),(0,M.jsx)(A,{n:3,title:`Search`,blurb:`The adapter's search config turns on DataGridSearch; searchKeys picks the fields it matches.`,code:W,children:(0,M.jsx)(U,{})}),(0,M.jsx)(A,{n:4,title:`Highlight matches`,blurb:`FilterSearchInput debounces a query; DataGridHighlightProvider shares it and DataGridHighlight marks each matching word.`,code:G,children:(0,M.jsx)(de,{})}),(0,M.jsx)(A,{n:5,title:`A filter bar from parts`,blurb:`FilterPicker adds a condition, FilterPill edits or removes it, FilterValuePopover and ControlSwitch edit one field, Kbd shows a key; buildWhere turns them into a where.`,code:Y,children:(0,M.jsx)(J,{})}),(0,M.jsx)(A,{n:6,title:`The grid's parts on their own`,blurb:`A sortable header cell from ariaSortOf, cycleHeaderSort, DataGridSortIcon and DataGridColumnHeaderMenu, a key hint from DataGridKeyHint, and every filter value control ControlSwitch picks from (TextControl, NumberControl, BooleanControl, SelectControl, MultiSelectControl, RelationControl, RelationMultiControl, DateControl, DateRangeControl).`,code:$,children:(0,M.jsx)(pe,{})})]})}export{me as component};