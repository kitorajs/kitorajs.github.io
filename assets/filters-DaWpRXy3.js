import{Ic as e}from"./index-q72zUtm9.js";import{n as t}from"./lib-CDU_56K6.js";var n=e(),r={title:`Filters`,description:`Filter field types, the two-stage filter picker, operators, buildWhere engine.`,order:3};function i(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Filters`}),`
`,(0,n.jsxs)(r.p,{children:[`Declare your filter fields once via `,(0,n.jsx)(r.code,{children:`defineFilterFields()`}),` (an
identity helper that preserves literal `,(0,n.jsx)(r.code,{children:`id`}),` types) and the grid
gives you:`]}),`
`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`A two-stage filter picker (field → value editor)`}),`
`,(0,n.jsx)(r.li,{children:`Editable filter pills with operator + value`}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`buildWhere(filters, fields)`}),` engine that merges every active pill
into a single typed `,(0,n.jsx)(r.code,{children:`TWhere`}),` for your adapter`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`<DataGridFilterBar>`}),` that wires everything together`]}),`
`]}),`
`,`
`,(0,n.jsx)(r.h2,{children:`Define fields`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"defineFilterFields"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"const"]," ",[12,"filterFields"]," ",[10,"="]," ",[5,"defineFilterFields"],[11,"<"],[6,"UserWhere"],[11,">()(["]],["  ",[11,"{"]],["    ",[9,"id"],[11,":"]," ",[3,"'status'"],[11,","]],["    ",[9,"label"],[11,":"]," ",[3,"'Status'"],[11,","]],["    ",[9,"type"],[11,":"]," ",[3,"'select'"],[11,","]],["    ",[9,"options"],[11,":"]," ",[11,"["]],["      ",[11,"{"]," ",[9,"value"],[11,":"]," ",[3,"'active'"],[11,","],"  ",[9,"label"],[11,":"]," ",[3,"'Active'"]," ",[11,"},"]],["      ",[11,"{"]," ",[9,"value"],[11,":"]," ",[3,"'invited'"],[11,","]," ",[9,"label"],[11,":"]," ",[3,"'Invited'"]," ",[11,"},"]],["      ",[11,"{"]," ",[9,"value"],[11,":"]," ",[3,"'paused'"],[11,","],"  ",[9,"label"],[11,":"]," ",[3,"'Paused'"]," ",[11,"},"]],["    ",[11,"],"]],["    ",[5,"toWhere"],[11,":"]," ",[11,"({"]," ",[12,"operator"],[11,","]," ",[12,"value"]," ",[11,"})"]," ",[2,"=>"]],["      ",[12,"operator"]," ",[10,"==="]," ",[3,"'eq'"]," ",[10,"?"]," ",[11,"{"]," ",[9,"status"],[11,":"]," ",[12,"value"]," ",[11,"}"]," ",[10,":"]," ",[11,"{"]," ",[9,"status_not"],[11,":"]," ",[12,"value"]," ",[11,"},"]],["  ",[11,"},"]],["  ",[11,"{"]],["    ",[9,"id"],[11,":"]," ",[3,"'team'"],[11,","]],["    ",[9,"label"],[11,":"]," ",[3,"'Team'"],[11,","]],["    ",[9,"type"],[11,":"]," ",[3,"'multi-select'"],[11,","]],["    ",[9,"options"],[11,":"]," ",[11,"["],[3,"'Platform'"],[11,","]," ",[3,"'Mobile'"],[11,","]," ",[3,"'Design'"],[11,"]."],[5,"map"],[11,"(("],[12,"v"],[11,")"]," ",[2,"=>"]," ",[11,"({"]," ",[9,"value"],[11,":"]," ",[12,"v"],[11,","]," ",[9,"label"],[11,":"]," ",[12,"v"]," ",[11,"})),"]],["    ",[5,"toWhere"],[11,":"]," ",[11,"({"]," ",[12,"operator"],[11,","]," ",[12,"value"]," ",[11,"})"]," ",[2,"=>"]],["      ",[12,"operator"]," ",[10,"==="]," ",[3,"'in'"]," ",[10,"?"]," ",[11,"{"]," ",[9,"team_in"],[11,":"]," ",[12,"value"]," ",[11,"}"]," ",[10,":"]," ",[11,"{"]," ",[9,"team_not_in"],[11,":"]," ",[12,"value"]," ",[11,"},"]],["  ",[11,"},"]],["  ",[11,"{"]],["    ",[9,"id"],[11,":"]," ",[3,"'tasks'"],[11,","]],["    ",[9,"label"],[11,":"]," ",[3,"'Open tasks'"],[11,","]],["    ",[9,"type"],[11,":"]," ",[3,"'number'"],[11,","]],["    ",[5,"toWhere"],[11,":"]," ",[11,"({"]," ",[12,"operator"],[11,","]," ",[12,"value"]," ",[11,"})"]," ",[2,"=>"]," ",[11,"{"]],["      ",[2,"if"]," ",[11,"("],[12,"operator"]," ",[10,"==="]," ",[3,"'gte'"],[11,")"]," ",[2,"return"]," ",[11,"{"]," ",[9,"tasks_gte"],[11,":"]," ",[12,"value"]," ",[11,"}"]],[[11,"      "],[1,"// … the rest of the numeric operators"]],["    ",[11,"},"]],["  ",[11,"},"]],[[11,"])"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { defineFilterFields } from '@kitora/datagrid'

const filterFields = defineFilterFields<UserWhere>()([
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { value: 'active',  label: 'Active' },
      { value: 'invited', label: 'Invited' },
      { value: 'paused',  label: 'Paused' },
    ],
    toWhere: ({ operator, value }) =>
      operator === 'eq' ? { status: value } : { status_not: value },
  },
  {
    id: 'team',
    label: 'Team',
    type: 'multi-select',
    options: ['Platform', 'Mobile', 'Design'].map((v) => ({ value: v, label: v })),
    toWhere: ({ operator, value }) =>
      operator === 'in' ? { team_in: value } : { team_not_in: value },
  },
  {
    id: 'tasks',
    label: 'Open tasks',
    type: 'number',
    toWhere: ({ operator, value }) => {
      if (operator === 'gte') return { tasks_gte: value }
      // … the rest of the numeric operators
    },
  },
])
`})}),`
`,(0,n.jsx)(r.p,{children:`Pass via the adapter:`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[12,"adapter"]," ",[10,"="]," ",[5,"createInMemoryAdapter"],[11,"<"],[6,"User"],[11,","]," ",[6,"UserWhere"],[11,">({"]],["  ",[9,"initial"],[11,":"]," ",[12,"rows"],[11,","]],["  ",[12,"filterFields"],[11,","]],[[11,"  "],[1,"// …"]],[[11,"})"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`const adapter = createInMemoryAdapter<User, UserWhere>({
  initial: rows,
  filterFields,
  // …
})
`})}),`
`,(0,n.jsx)(r.h2,{children:`Field types`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Type`}),(0,n.jsx)(r.th,{children:`Operators`}),(0,n.jsx)(r.th,{children:`Editor`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`text`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`contains`}),` / `,(0,n.jsx)(r.code,{children:`not_contains`}),` / `,(0,n.jsx)(r.code,{children:`eq`}),` / `,(0,n.jsx)(r.code,{children:`neq`}),` / `,(0,n.jsx)(r.code,{children:`starts_with`}),` / `,(0,n.jsx)(r.code,{children:`ends_with`}),` / `,(0,n.jsx)(r.code,{children:`is_empty`}),` / `,(0,n.jsx)(r.code,{children:`is_not_empty`})]}),(0,n.jsx)(r.td,{children:`Text input`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`number`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`eq`}),` / `,(0,n.jsx)(r.code,{children:`neq`}),` / `,(0,n.jsx)(r.code,{children:`gt`}),` / `,(0,n.jsx)(r.code,{children:`gte`}),` / `,(0,n.jsx)(r.code,{children:`lt`}),` / `,(0,n.jsx)(r.code,{children:`lte`}),` / `,(0,n.jsx)(r.code,{children:`between`}),` / `,(0,n.jsx)(r.code,{children:`is_empty`}),` / `,(0,n.jsx)(r.code,{children:`is_not_empty`})]}),(0,n.jsx)(r.td,{children:`Number input + range`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`boolean`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`eq`}),` / `,(0,n.jsx)(r.code,{children:`neq`})]}),(0,n.jsx)(r.td,{children:`True / False toggle (T/Y/F/N hotkeys)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`select`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`eq`}),` / `,(0,n.jsx)(r.code,{children:`neq`})]}),(0,n.jsx)(r.td,{children:`Single picker (search auto-shows at 4+ options)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`multi-select`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`in`}),` / `,(0,n.jsx)(r.code,{children:`not_in`})]}),(0,n.jsxs)(r.td,{children:[`The collections `,(0,n.jsx)(r.code,{children:`Listbox`}),` (multiple): Space / click toggles, Shift+Arrow range, Ctrl/Cmd+A, type to find; own search box above 3 options`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`date`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`eq`}),` / `,(0,n.jsx)(r.code,{children:`gt`}),` / `,(0,n.jsx)(r.code,{children:`gte`}),` / `,(0,n.jsx)(r.code,{children:`lt`}),` / `,(0,n.jsx)(r.code,{children:`lte`})]}),(0,n.jsxs)(r.td,{children:[`The pickers `,(0,n.jsx)(r.code,{children:`Calendar`}),` (single); a new filter starts on `,(0,n.jsx)(r.code,{children:`gte`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`date-range`})}),(0,n.jsx)(r.td,{children:`(range)`}),(0,n.jsxs)(r.td,{children:[`The pickers `,(0,n.jsx)(r.code,{children:`Calendar`}),` in range mode, two months, + 7 quick presets (Today / Yesterday / Last 7d / Last 30d / MTD / QTD / YTD)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`relation`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`eq`}),` / `,(0,n.jsx)(r.code,{children:`neq`})]}),(0,n.jsxs)(r.td,{children:[`Async combobox via `,(0,n.jsx)(r.code,{children:`loadOptions(query)`}),`, cached per query`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`relation-multi`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`in`}),` / `,(0,n.jsx)(r.code,{children:`not_in`})]}),(0,n.jsx)(r.td,{children:`Async multi-pick combobox`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`Override the operator list per field via `,(0,n.jsx)(r.code,{children:`operators: FilterOperator[]`}),`. A new filter starts on the type's smart default (`,(0,n.jsx)(r.code,{children:`smartDefaultOperator`}),`) when the field's list allows it, else on the first operator in that list (`,(0,n.jsx)(r.code,{children:`defaultOperatorForField(type, operators)`}),`).`]}),`
`,(0,n.jsx)(r.h3,{children:`Date values`}),`
`,(0,n.jsxs)(r.p,{children:[`A `,(0,n.jsx)(r.code,{children:`date`}),` filter stores the picked day's local midnight as a full ISO timestamp (`,(0,n.jsx)(r.code,{children:`new Date(y, m, d).toISOString()`}),`), and a `,(0,n.jsx)(r.code,{children:`date-range`}),` filter stores `,(0,n.jsx)(r.code,{children:`{ from, to, preset }`}),` with `,(0,n.jsx)(r.code,{children:`from`}),` at local midnight of the first day and `,(0,n.jsx)(r.code,{children:`to`}),` at the last millisecond of the last day, so both ends are inclusive (presets store the same shape with their id in `,(0,n.jsx)(r.code,{children:`preset`}),`). Row values are usually full timestamps, so a date `,(0,n.jsx)(r.code,{children:`eq`}),` ("is") means "on this calendar day": the in-memory adapter matches any value from that local midnight to the day's last millisecond, inclusive, and `,(0,n.jsx)(r.code,{children:`dayBounds(cond.value)`}),` (exported from `,(0,n.jsx)(r.code,{children:`@kitora/datagrid`}),`) returns the same `,(0,n.jsx)(r.code,{children:`{ from, to }`}),` ISO range for a `,(0,n.jsx)(r.code,{children:`toWhere`}),` to send, e.g. `,(0,n.jsx)(r.code,{children:`toWhere: (c) => ({ renews: c.operator === 'eq' ? dayBounds(c.value) : c.value })`}),`. The other date operators compare against the midnight instant. A new date filter starts on `,(0,n.jsx)(r.code,{children:`gte`}),` ("on or after"), the more common question.`]}),`
`,(0,n.jsxs)(r.p,{children:[`The Users demo on the overview page has one filter of each: `,(0,n.jsx)(r.strong,{children:`Joined`}),` (`,(0,n.jsx)(r.code,{children:`date-range`}),`) and `,(0,n.jsx)(r.strong,{children:`Renews`}),` (`,(0,n.jsx)(r.code,{children:`date`}),`, next plan renewal):`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[11,"{"]],["  id",[11,":"]," ",[3,"'renews'"],[11,","]],["  label",[11,":"]," ",[3,"'Renews'"],[11,","]],["  type",[11,":"]," ",[3,"'date'"],[11,","]],["  group",[11,":"]," ",[3,"'Account'"],[11,","]],[[11,"  "],[1,"// the value is that day's local midnight as an ISO timestamp, so ≥ / ≤ compare cleanly with ISO strings"]],["  toWhere",[11,":"]," ",[11,"("],[12,"cond"],[11,")"]," ",[2,"=>"]," ",[11,"({"]," ",[9,"renews"],[11,":"]," ",[12,"cond"],[11,"."],[9,"value"]," ",[11,"}),"]],[[11,"}"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`{
  id: 'renews',
  label: 'Renews',
  type: 'date',
  group: 'Account',
  // the value is that day's local midnight as an ISO timestamp, so ≥ / ≤ compare cleanly with ISO strings
  toWhere: (cond) => ({ renews: cond.value }),
}
`})}),`
`,(0,n.jsx)(r.h2,{children:`Mount the bar`}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"DataGridFilterBar"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[11,"<"],[7,"DataGridFilterBar"]," ",[8,"rightSlot"],[10,"="],[11,"{<"],[7,"DataGridSort"]," ",[8,"options"],[10,"="],[11,"{"],[12,"sortOptions"],[11,"}"]," ",[11,"/>}"]," ",[11,"/>"]]]`,"data-language":`tsx`,children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`import { DataGridFilterBar } from '@kitora/datagrid'

<DataGridFilterBar rightSlot={<DataGridSort options={sortOptions} />} />
`})}),`
`,(0,n.jsx)(r.p,{children:`The bar renders:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`<FilterSearchInput>`}),` (the global search; controlled by adapter's `,(0,n.jsx)(r.code,{children:`search`}),` config)`]}),`
`,(0,n.jsx)(r.li,{children:`"+ Filter" button → two-stage picker (field list → value editor)`}),`
`,(0,n.jsxs)(r.li,{children:[`One `,(0,n.jsx)(r.code,{children:`<FilterPill>`}),` per active filter: a group of two sibling buttons, the pill text (opens the operator + value editor) and × (removes the filter, named `,(0,n.jsx)(r.code,{children:`Remove <label> filter`}),`); Tab reaches both`]}),`
`,(0,n.jsx)(r.li,{children:`"Clear" button when filters are dirty`}),`
`]}),`
`,`
`,`
`,(0,n.jsxs)(r.h2,{children:[(0,n.jsx)(r.code,{children:`buildWhere`}),` engine`]}),`
`,(0,n.jsxs)(r.p,{children:[`Every field's `,(0,n.jsx)(r.code,{children:`toWhere(condition)`}),` partial is merged into one
adapter-typed `,(0,n.jsx)(r.code,{children:`TWhere`}),`. The grid does this for you on every load —
your adapter just receives `,(0,n.jsx)(r.code,{children:`query.where`}),`. To use the engine yourself:`]}),`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"import"]," ",[11,"{"]," ",[12,"buildWhere"]," ",[11,"}"]," ",[2,"from"]," ",[3,"'@kitora/datagrid'"]],[],[[2,"const"]," ",[12,"where"]," ",[10,"="]," ",[5,"buildWhere"],[11,"<"],[6,"UserWhere"],[11,">("],[12,"filters"],[11,","]," ",[12,"filterFields"],[11,")"]],[[1,"// → { status_in: ['active'], team_in: ['Platform'], tasks_gte: 3 }"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`import { buildWhere } from '@kitora/datagrid'

const where = buildWhere<UserWhere>(filters, filterFields)
// → { status_in: ['active'], team_in: ['Platform'], tasks_gte: 3 }
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Search bridges in too — `,(0,n.jsx)(r.code,{children:`search.toWhere(q)`}),` is merged before filters.`]}),`
`,(0,n.jsx)(r.h2,{children:`Programmatic API`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`useDataGridUI()`}),` exposes:`]}),`
`,`
`,(0,n.jsx)(r.pre,{"data-tokens":`[[[2,"const"]," ",[11,"{"]],["  ",[12,"filters"],[11,","],"                 ",[1,"// FilterCondition[]"]],["  ",[12,"addFilter"],[11,","]],["  ",[12,"removeFilter"],[11,","]],["  ",[12,"updateFilter"],[11,","],"            ",[1,"// edit operator or value of an existing pill"]],["  ",[12,"setFilters"],[11,","],"              ",[1,"// replace all"]],["  ",[12,"clearFilters"],[11,","]],[[11,"}"]," ",[10,"="]," ",[5,"useDataGridUI"],[11,"()"]]]`,"data-language":`ts`,children:(0,n.jsx)(r.code,{className:`language-ts`,children:`const {
  filters,                 // FilterCondition[]
  addFilter,
  removeFilter,
  updateFilter,            // edit operator or value of an existing pill
  setFilters,              // replace all
  clearFilters,
} = useDataGridUI()
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Saved views capture the full `,(0,n.jsx)(r.code,{children:`filters`}),` array — they restore on
selection.`]}),`
`,(0,n.jsx)(r.h2,{children:`Keyboard shortcuts`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Key`}),(0,n.jsx)(r.th,{children:`Action`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`f`})}),(0,n.jsx)(r.td,{children:`Open filter picker`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`/`})}),(0,n.jsx)(r.td,{children:`Focus the search input`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Esc`})}),(0,n.jsx)(r.td,{children:`Close picker / clear focus`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Arrows + Enter`}),(0,n.jsx)(r.td,{children:`Navigate field list, commit value`})]})]})]})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as meta};