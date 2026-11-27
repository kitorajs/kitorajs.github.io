import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as a}from"./example-B67lLz1F.js";import{a as o}from"./import-QRH5hwKN.js";import{t as s}from"./-kits.search.shared-Cuvf7mCH.js";var c=e(r(),1),l=i(),u=[{id:`email`,label:`Email`,type:`email`,required:!0,unique:!0,aliases:[`e-mail`,`mail`,`email address`]},{id:`name`,label:`Full name`,type:`text`,required:!0,aliases:[`name`,`contact`]},{id:`company`,label:`Company`,type:`text`,aliases:[`organisation`,`organization`,`org`]},{id:`seats`,label:`Seats`,type:`number`,validate:e=>Number(e.replace(/,/g,``))>1e4?`More than 10,000 seats needs a sales contract`:null},{id:`plan`,label:`Plan`,type:`select`,options:[`Free`,`Team`,`Business`,`Enterprise`],aliases:[`tier`,`subscription`]},{id:`signedUp`,label:`Signed up`,type:`date`,aliases:[`signup date`,`created`,`joined`]},{id:`newsletter`,label:`Newsletter`,type:`boolean`,aliases:[`opt in`,`marketing`]}],d=`E-mail,Name,Organisation,Seats,Tier,Signup date,Opt in,Notes
ada@analytical.io,Ada Lovelace,Analytical Engines,12,Team,2026-01-14,yes,Met at conf
grace@navy.mil,Grace Hopper,US Navy,"1,250",Enterprise,2025-11-02,no,
alan@bletchley.uk,Alan Turing,Bletchley Park,3,free,2026-02-30,yes,date is wrong
katherine@nasa,Katherine Johnson,NASA,40,Business,2026-03-08,yes,email missing TLD
linus@kernel.org,Linus Torvalds,Linux Foundation,8,Pro,2026-04-01,true,plan typo
margaret@mit.edu,Margaret Hamilton,MIT,25,Business,"Apr 12, 2026",yes,
ada@analytical.io,Ada L.,Analytical Engines,12,Team,2026-01-14,yes,duplicate
dennis@bell-labs.com,Dennis Ritchie,Bell Labs,six,Team,2026-05-19,no,seats as a word
barbara@mit.edu,Barbara Liskov,MIT,15,Team,2026-06-03,n,
,Ken Thompson,Bell Labs,2,Free,2026-06-21,yes,no email
radia@perlman.net,Radia Perlman,Intel,30000,Enterprise,2026-07-07,yes,too many seats
donald@stanford.edu,Donald Knuth,Stanford,1,Free,2026-07-30,no,
frances@ibm.com,Frances Allen,IBM,60,Business,2026-08-11,yes,
edsger@utexas.edu,Edsger Dijkstra,UT Austin,4,Team,2026-08-29,maybe,newsletter unclear
hedy@lamarr.com,Hedy Lamarr,,9,Team,2026-09-15,yes,
`;function f(e){return e==null?`—`:typeof e==`boolean`?e?`Yes`:`No`:typeof e==`number`?e.toLocaleString():e}function p(){let[e,t]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{className:`flex h-full flex-col gap-3 overflow-y-auto p-3 text-[13px]`,children:[(0,l.jsx)(o,{fields:u,sample:d,onImport:t}),e&&e.records.length>0?(0,l.jsxs)(`section`,{className:`rounded-lg border`,children:[(0,l.jsxs)(`h3`,{className:`border-b px-2.5 py-1.5 text-[12px] font-medium`,children:[`Contacts table · `,e.records.length,` new`]}),(0,l.jsx)(`div`,{className:`overflow-x-auto`,children:(0,l.jsxs)(`table`,{className:`w-full`,children:[(0,l.jsx)(`thead`,{className:`text-left text-[11px] tracking-wide text-muted-foreground uppercase`,children:(0,l.jsx)(`tr`,{children:u.map(e=>(0,l.jsx)(`th`,{className:`px-2.5 py-1 font-medium whitespace-nowrap`,children:e.label},e.id))})}),(0,l.jsx)(`tbody`,{children:e.records.map(e=>(0,l.jsx)(`tr`,{className:`border-t`,children:u.map(t=>(0,l.jsx)(`td`,{className:`px-2.5 py-1 whitespace-nowrap tabular-nums`,children:f(e[t.id])},t.id))},String(e.email)))})]})})]}):null]})}var m=`import { useState } from "react"
import { ImportWizard, type ImportResult, type ImportValue, type ImportField } from "@kitora/search"

// Demo data: the fields to import into, and a messy CSV export to import from.
const CONTACT_FIELDS: readonly ImportField[] = [
  { id: "email", label: "Email", type: "email", required: true, unique: true, aliases: ["e-mail", "mail", "email address"] },
  { id: "name", label: "Full name", type: "text", required: true, aliases: ["name", "contact"] },
  { id: "company", label: "Company", type: "text", aliases: ["organisation", "organization", "org"] },
  { id: "seats", label: "Seats", type: "number", validate: (v) => (Number(v.replace(/,/g, "")) > 10_000 ? "More than 10,000 seats needs a sales contract" : null) },
  { id: "plan", label: "Plan", type: "select", options: ["Free", "Team", "Business", "Enterprise"], aliases: ["tier", "subscription"] },
  { id: "signedUp", label: "Signed up", type: "date", aliases: ["signup date", "created", "joined"] },
  { id: "newsletter", label: "Newsletter", type: "boolean", aliases: ["opt in", "marketing"] },
]

/** A realistic messy export: a renamed header, an unmapped column, bad emails, a duplicate, a bad date and a typo'd plan. */
const CONTACTS_CSV = \`E-mail,Name,Organisation,Seats,Tier,Signup date,Opt in,Notes
ada@analytical.io,Ada Lovelace,Analytical Engines,12,Team,2026-01-14,yes,Met at conf
grace@navy.mil,Grace Hopper,US Navy,"1,250",Enterprise,2025-11-02,no,
alan@bletchley.uk,Alan Turing,Bletchley Park,3,free,2026-02-30,yes,date is wrong
katherine@nasa,Katherine Johnson,NASA,40,Business,2026-03-08,yes,email missing TLD
linus@kernel.org,Linus Torvalds,Linux Foundation,8,Pro,2026-04-01,true,plan typo
margaret@mit.edu,Margaret Hamilton,MIT,25,Business,"Apr 12, 2026",yes,
ada@analytical.io,Ada L.,Analytical Engines,12,Team,2026-01-14,yes,duplicate
dennis@bell-labs.com,Dennis Ritchie,Bell Labs,six,Team,2026-05-19,no,seats as a word
barbara@mit.edu,Barbara Liskov,MIT,15,Team,2026-06-03,n,
,Ken Thompson,Bell Labs,2,Free,2026-06-21,yes,no email
radia@perlman.net,Radia Perlman,Intel,30000,Enterprise,2026-07-07,yes,too many seats
donald@stanford.edu,Donald Knuth,Stanford,1,Free,2026-07-30,no,
frances@ibm.com,Frances Allen,IBM,60,Business,2026-08-11,yes,
edsger@utexas.edu,Edsger Dijkstra,UT Austin,4,Team,2026-08-29,maybe,newsletter unclear
hedy@lamarr.com,Hedy Lamarr,,9,Team,2026-09-15,yes,
\`

function show(value: ImportValue | undefined): string {
  if (value === null || value === undefined) return "—"
  if (typeof value === "boolean") return value ? "Yes" : "No"
  return typeof value === "number" ? value.toLocaleString() : value
}

// The whole import: drop or paste a CSV (or "Use sample data": a messy export with a renamed header, bad emails, a duplicate,
// an impossible date and a typo'd plan), check the auto-mapped columns, fix the red cells inline, import, and read the summary.
export function ImportContacts() {
  const [imported, setImported] = useState<ImportResult | null>(null)
  return (
    <div className="flex h-full flex-col gap-3 overflow-y-auto p-3 text-[13px]">
      <ImportWizard fields={CONTACT_FIELDS} sample={CONTACTS_CSV} onImport={setImported} />
      {imported && imported.records.length > 0 ? (
        <section className="rounded-lg border">
          <h3 className="border-b px-2.5 py-1.5 text-[12px] font-medium">Contacts table · {imported.records.length} new</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-left text-[11px] tracking-wide text-muted-foreground uppercase"><tr>{CONTACT_FIELDS.map((f) => <th key={f.id} className="px-2.5 py-1 font-medium whitespace-nowrap">{f.label}</th>)}</tr></thead>
              <tbody>
                {imported.records.map((record) => (
                  <tr key={String(record.email)} className="border-t">{CONTACT_FIELDS.map((f) => <td key={f.id} className="px-2.5 py-1 whitespace-nowrap tabular-nums">{show(record[f.id])}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>n(()=>import(`./import-contacts-BJfCxueL.js`),[]));function h(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(t,{title:`Import wizard`,children:`Import contacts from a CSV: drop a file, paste rows, or use the sample (a messy export). Columns auto-map by name and alias; the review grid flags every bad cell, and fixing one re-validates it. Rows still in error are skipped and can be downloaded.`}),(0,l.jsx)(a,{n:1,title:`Contacts import`,blurb:`Seven fields (email, text, number, select, date, yes/no), required and unique checks, a custom rule on seats.`,code:m,children:(0,l.jsx)(s,{testId:`import-wizard`,height:720,children:(0,l.jsx)(p,{})})})]})}export{h as component};