import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{s as n,u as r}from"./trees-Dzclei_Q.js";import{Bc as i,Cc as a,Ic as o}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as s}from"./example-BGnSQG2Y.js";import{t as c}from"./-kits.whiteboard.shared-XdCZu-sb.js";var l=e(i(),1),u=o(),d=[`Ava`,`Ben`,`Chloe`,`Dev`,`Elena`,`Femi`,`Gus`,`Hana`,`Ivan`,`Jia`,`Kofi`,`Lara`,`Milo`,`Nora`,`Omar`,`Pia`,`Quinn`,`Rosa`,`Sven`,`Tara`,`Uma`,`Vik`,`Wen`,`Yara`,`Zeke`],f=[`Abe`,`Baker`,`Cruz`,`Dahl`,`Eze`,`Fox`,`Gill`,`Hart`,`Ito`,`Jain`,`Kerr`,`Lund`,`Moss`,`Ng`,`Ortiz`,`Park`,`Reyes`,`Shah`,`Toth`,`Vega`],p=[`Berlin`,`Lisbon`,`Austin`,`Toronto`,`Remote`];function m(){let e=0,t=()=>{let t=e++;return`${d[t%d.length]} ${f[t*7%f.length]}`},n=[{id:`ceo`,managerId:null,name:t(),title:`Chief Executive Officer`,department:`Executive`,location:`Berlin`}];for(let r of[{key:`eng`,head:`VP Engineering`,dept:`Engineering`,teams:[`Platform`,`Payments`,`Mobile`]},{key:`prod`,head:`VP Product`,dept:`Product`,teams:[`Growth`,`Core`]},{key:`design`,head:`Head of Design`,dept:`Design`,teams:[`Brand`]},{key:`sales`,head:`VP Sales`,dept:`Sales`,teams:[`EMEA`,`Americas`]},{key:`ops`,head:`COO`,dept:`Operations`,teams:[`People`,`Finance`]}])n.push({id:r.key,managerId:`ceo`,name:t(),title:r.head,department:r.dept,location:p[e%p.length]??`Remote`}),r.teams.forEach((i,a)=>{let o=`${r.key}-${a}`;n.push({id:o,managerId:r.key,name:t(),title:`${i} Lead`,department:r.dept,location:p[e%p.length]??`Remote`});let s=3+(a+r.key.length)%4;for(let a=0;a<s;a++)n.push({id:`${o}-${a}`,managerId:o,name:t(),title:a===0?`Senior ${i} ${r.dept===`Sales`?`AE`:`Specialist`}`:`${i} ${r.dept===`Engineering`?`Engineer`:`Specialist`}`,department:r.dept,location:p[(e+a)%p.length]??`Remote`})});return n}function h(){let e=(0,l.useMemo)(m,[]);return(0,u.jsxs)(`div`,{className:`relative h-full`,children:[(0,u.jsx)(n,{controller:r({people:e,initialDepth:1,searchFields:e=>[e.name,e.title,e.department,e.location]}),label:`Company org chart`}),(0,u.jsxs)(`div`,{className:`pointer-events-none absolute top-2 right-2 rounded-md border bg-card px-2 py-1 text-[12px] tabular-nums text-muted-foreground shadow-sm`,children:[e.length,` people`]})]})}var g=`import { useMemo } from "react"
import { type OrgPerson, OrgChartView, useOrgChart } from "@kitora/whiteboard"

interface Employee extends OrgPerson {
  readonly location: string
}

const FIRST = ["Ava", "Ben", "Chloe", "Dev", "Elena", "Femi", "Gus", "Hana", "Ivan", "Jia", "Kofi", "Lara", "Milo", "Nora", "Omar", "Pia", "Quinn", "Rosa", "Sven", "Tara", "Uma", "Vik", "Wen", "Yara", "Zeke"]
const LAST = ["Abe", "Baker", "Cruz", "Dahl", "Eze", "Fox", "Gill", "Hart", "Ito", "Jain", "Kerr", "Lund", "Moss", "Ng", "Ortiz", "Park", "Reyes", "Shah", "Toth", "Vega"]
const CITIES = ["Berlin", "Lisbon", "Austin", "Toronto", "Remote"]

/** A deterministic 70-person company: CEO, five departments, managers, teams. */
function buildCompany(): Employee[] {
  let n = 0
  const name = () => {
    const i = n++
    return \`\${FIRST[i % FIRST.length]} \${LAST[(i * 7) % LAST.length]}\`
  }
  const people: Employee[] = [{ id: "ceo", managerId: null, name: name(), title: "Chief Executive Officer", department: "Executive", location: "Berlin" }]
  const depts = [
    { key: "eng", head: "VP Engineering", dept: "Engineering", teams: ["Platform", "Payments", "Mobile"] },
    { key: "prod", head: "VP Product", dept: "Product", teams: ["Growth", "Core"] },
    { key: "design", head: "Head of Design", dept: "Design", teams: ["Brand"] },
    { key: "sales", head: "VP Sales", dept: "Sales", teams: ["EMEA", "Americas"] },
    { key: "ops", head: "COO", dept: "Operations", teams: ["People", "Finance"] },
  ]
  for (const d of depts) {
    people.push({ id: d.key, managerId: "ceo", name: name(), title: d.head, department: d.dept, location: CITIES[n % CITIES.length] ?? "Remote" })
    d.teams.forEach((team, ti) => {
      const lead = \`\${d.key}-\${ti}\`
      people.push({ id: lead, managerId: d.key, name: name(), title: \`\${team} Lead\`, department: d.dept, location: CITIES[n % CITIES.length] ?? "Remote" })
      const size = 3 + ((ti + d.key.length) % 4)
      for (let k = 0; k < size; k++) people.push({ id: \`\${lead}-\${k}\`, managerId: lead, name: name(), title: k === 0 ? \`Senior \${team} \${d.dept === "Sales" ? "AE" : "Specialist"}\` : \`\${team} \${d.dept === "Engineering" ? "Engineer" : "Specialist"}\`, department: d.dept, location: CITIES[(n + k) % CITIES.length] ?? "Remote" })
    })
  }
  return people
}

/** A whole company: search by name, title, team or city (Enter steps through hits), fold teams, arrow keys walk the chart. */
export function CompanyOrgChart() {
  const people = useMemo(buildCompany, [])
  const chart = useOrgChart({ people, initialDepth: 1, searchFields: (p) => [p.name, p.title, p.department, p.location] })
  return (
    <div className="relative h-full">
      <OrgChartView controller={chart} label="Company org chart" />
      <div className="pointer-events-none absolute top-2 right-2 rounded-md border bg-card px-2 py-1 text-[12px] tabular-nums text-muted-foreground shadow-sm">{people.length} people</div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>a(()=>import(`./company-org-BX7oj3nf.js`),[]));function _(){return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(t,{title:`Org chart`,children:`A tree laid out top-down from a flat people list. Search unfolds the path to every hit and centres the one in focus.`}),(0,u.jsx)(s,{n:1,title:`A 70-person company`,blurb:`Type “payments”, “Lisbon” or a name; Enter and Shift+Enter step through hits. Fold teams with the chip under a card; arrows walk the chart, Enter folds.`,code:g,children:(0,u.jsx)(c,{testId:`company-org`,height:560,children:(0,u.jsx)(h,{})})})]})}export{_ as component};