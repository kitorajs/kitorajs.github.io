import{s as e}from"./kit-docs-BUovISd0.js";import{c as t,d as n,f as r,i,l as a,n as o,o as s,r as c,t as l,u}from"./trees-Dzclei_Q.js";import{Cc as d,Ic as f}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as p}from"./example-BGnSQG2Y.js";import{t as m}from"./-kits.whiteboard.shared-XdCZu-sb.js";var h=f(),g={id:`root`,text:`Weekend trip`,children:[{id:`go`,text:`Getting there`,children:[{id:`train`,text:`Train tickets`,children:[]},{id:`car`,text:`Car hire`,children:[]}]},{id:`stay`,text:`Where to stay`,children:[{id:`cabin`,text:`Lake cabin`,children:[]}]},{id:`do`,text:`Things to do`,children:[{id:`hike`,text:`Ridge hike`,children:[]},{id:`swim`,text:`Swim`,children:[]}]}]};function _(){return(0,h.jsx)(i,{defaultRoot:g,label:`Trip mind map`})}var v=`import { MindMap, type MindNode } from "@kitora/whiteboard"

const ROOT: MindNode = {
  id: "root",
  text: "Weekend trip",
  children: [
    { id: "go", text: "Getting there", children: [{ id: "train", text: "Train tickets", children: [] }, { id: "car", text: "Car hire", children: [] }] },
    { id: "stay", text: "Where to stay", children: [{ id: "cabin", text: "Lake cabin", children: [] }] },
    { id: "do", text: "Things to do", children: [{ id: "hike", text: "Ridge hike", children: [] }, { id: "swim", text: "Swim", children: [] }] },
  ],
}

/** A mind map from a tree. Click a topic, then Tab adds a child, Enter a sibling, Space folds, F2 or typing renames. */
export function BasicMindMap() {
  return <MindMap defaultRoot={ROOT} label="Trip mind map" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>d(()=>import(`./mindmap-58leTazU.js`),[]));var y=[{id:`1`,managerId:null,name:`Maya Ortiz`,title:`CEO`},{id:`2`,managerId:`1`,name:`Sam Patel`,title:`CTO`},{id:`3`,managerId:`1`,name:`Lena Brooks`,title:`COO`},{id:`4`,managerId:`2`,name:`Ravi Nair`,title:`Eng Manager`},{id:`5`,managerId:`2`,name:`Ines Costa`,title:`Design Lead`},{id:`6`,managerId:`4`,name:`Tom Becker`,title:`Engineer`},{id:`7`,managerId:`4`,name:`Ana Silva`,title:`Engineer`},{id:`8`,managerId:`3`,name:`Joe Kim`,title:`Ops Lead`}];function b(){return(0,h.jsx)(s,{people:y,initialDepth:3,label:`Small org chart`})}var x=`import { OrgChart, type OrgPerson } from "@kitora/whiteboard"

// A flat list with manager ids, the way HR systems export people.
const PEOPLE: readonly OrgPerson[] = [
  { id: "1", managerId: null, name: "Maya Ortiz", title: "CEO" },
  { id: "2", managerId: "1", name: "Sam Patel", title: "CTO" },
  { id: "3", managerId: "1", name: "Lena Brooks", title: "COO" },
  { id: "4", managerId: "2", name: "Ravi Nair", title: "Eng Manager" },
  { id: "5", managerId: "2", name: "Ines Costa", title: "Design Lead" },
  { id: "6", managerId: "4", name: "Tom Becker", title: "Engineer" },
  { id: "7", managerId: "4", name: "Ana Silva", title: "Engineer" },
  { id: "8", managerId: "3", name: "Joe Kim", title: "Ops Lead" },
]

/** An org chart from people with manager ids: search, fold a team, arrow keys to walk it. */
export function BasicOrgChart() {
  return <OrgChart people={PEOPLE} initialDepth={3} label="Small org chart" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>d(()=>import(`./orgchart-B6zFxCtr.js`),[]));var S={id:`root`,text:`Launch`,children:[{id:`copy`,text:`Copy`,children:[]},{id:`site`,text:`Site`,children:[]},{id:`press`,text:`Press`,children:[]}]},C=[{id:`1`,managerId:null,name:`Maya Ortiz`,title:`CEO`},{id:`2`,managerId:`1`,name:`Sam Patel`,title:`CTO`},{id:`3`,managerId:`1`,name:`Lena Brooks`,title:`COO`}],w=`relative h-full w-full overflow-hidden bg-background text-[13px] select-none`;function T(){let e=r({defaultRoot:S}),i=u({people:C});return(0,h.jsxs)(`div`,{className:`grid h-full grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0`,children:[(0,h.jsx)(n,{controller:e,label:`Launch mind map`,className:w,classNames:{topic:`group ${t}`},renderTopic:e=>(0,h.jsx)(c,{...e})}),(0,h.jsx)(a,{controller:i,label:`Leadership`,className:w,classNames:{card:l,link:`text-foreground`},renderCard:e=>(0,h.jsx)(o,{...e})})]})}var E=`import { MindMapCanvas, OrgChartCanvas, useMindMap, useOrgChart } from "@kitora/whiteboard/react"
import { CARD_CLASS, DefaultOrgCard, DefaultTopic, TOPIC_CLASS } from "@kitora/whiteboard/ui"
import type { MindNode, OrgPerson } from "@kitora/whiteboard/core"

const ROOT: MindNode = {
  id: "root",
  text: "Launch",
  children: [
    { id: "copy", text: "Copy", children: [] },
    { id: "site", text: "Site", children: [] },
    { id: "press", text: "Press", children: [] },
  ],
}

const PEOPLE: readonly OrgPerson[] = [
  { id: "1", managerId: null, name: "Maya Ortiz", title: "CEO" },
  { id: "2", managerId: "1", name: "Sam Patel", title: "CTO" },
  { id: "3", managerId: "1", name: "Lena Brooks", title: "COO" },
]

const SURFACE = "relative h-full w-full overflow-hidden bg-background text-[13px] select-none"

/**
 * The headless canvases with the kit's default looks: \`MindMapCanvas\` drawing each topic with
 * \`DefaultTopic\`, and \`OrgChartCanvas\` drawing each person with \`DefaultOrgCard\`. No toolbars: add your own.
 */
export function BasicTreesParts() {
  const mind = useMindMap({ defaultRoot: ROOT })
  const org = useOrgChart({ people: PEOPLE })
  return (
    <div className="grid h-full grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
      <MindMapCanvas controller={mind} label="Launch mind map" className={SURFACE} classNames={{ topic: \`group \${TOPIC_CLASS}\` }} renderTopic={(props) => <DefaultTopic {...props} />} />
      <OrgChartCanvas controller={org} label="Leadership" className={SURFACE} classNames={{ card: CARD_CLASS, link: "text-foreground" }} renderCard={(props) => <DefaultOrgCard {...props} />} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>d(()=>import(`./trees-parts-DjAv6zlE.js`),[]));function D(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(e,{title:`Basics: mind map and org chart`,children:`Both lay out a tree automatically and share the board's pan and zoom: drag the background to pan, scroll or pinch to zoom.`}),(0,h.jsx)(p,{n:1,title:`A mind map`,blurb:`Click a topic, then Tab adds a child, Enter a sibling, Space folds, Delete removes, F2 or just typing renames, arrows move.`,code:v,children:(0,h.jsx)(m,{testId:`basic-mindmap`,height:340,children:(0,h.jsx)(_,{})})}),(0,h.jsx)(p,{n:2,title:`An org chart`,blurb:`From a flat list with manager ids. Fold a team with the chip under a card, search by name or title, arrows walk the chart.`,code:x,children:(0,h.jsx)(m,{testId:`basic-orgchart`,height:360,children:(0,h.jsx)(b,{})})}),(0,h.jsx)(p,{n:3,title:`The canvases with default looks`,blurb:"`MindMapCanvas` drawing topics with `DefaultTopic` and `OrgChartCanvas` drawing people with `DefaultOrgCard`: the headless canvases without the presets' toolbars.",code:E,children:(0,h.jsx)(m,{testId:`basic-trees-parts`,height:320,children:(0,h.jsx)(T,{})})})]})}export{D as component};