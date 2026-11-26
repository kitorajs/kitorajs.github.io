import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./bell-QnxoqhU6.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./file-text-jZN1FxYo.js";import{t as i}from"./hash-CTNxyfRR.js";import{t as a}from"./house-Bw0k7HMz.js";import{t as o}from"./inbox-CWroxAY7.js";import{t as s}from"./square-check-big-vyK9bL6X.js";import{t as c}from"./command-palette-0I3gVRbS.js";import{r as l,t as u}from"./provider-D0Iw1w2F.js";import{n as d,r as f,t as p}from"./regions-DCg8W9dJ.js";import{a as m,d as h}from"./hooks-BRcZguZq.js";import{t as g}from"./palette-DL2yt_sr.js";import{Bc as _,Cc as v,Ic as y}from"./index-9y5uwRd3.js";import{a as b,i as x,n as S}from"./context-B0rBLGA7.js";import{d as C,t as w}from"./match-P3PTXEG7.js";import{f as T,i as E,o as D,r as ee}from"./sidebar-VPUXi6Th.js";import{c as O,o as k}from"./parts-BCmKNJsH.js";import"./kit-gallery-B-Yr9fP4.js";import{t as A}from"./example-CZLJLtIC.js";import{t as j}from"./-kits.sidebar.shared-1cFvM_u_.js";var M=`sidebar`,N={toggle:`sidebar.toggle`,focus:`sidebar.focus`,nextSection:`sidebar.nextSection`,previousSection:`sidebar.previousSection`,nextUnread:`sidebar.nextUnread`,previousUnread:`sidebar.previousUnread`,collapseAll:`sidebar.collapseAll`},P=e=>`sidebar.goTo.${e}`,F={focus:`sidebarFocus`,collapsed:`sidebarCollapsed`},I=F.focus,L=[{key:`Mod+B`,command:N.toggle},{key:`[`,command:N.toggle},{key:`Mod+Shift+E`,command:N.focus},{key:`Alt+Shift+ArrowDown`,command:N.nextUnread},{key:`Alt+Shift+ArrowUp`,command:N.previousUnread},{key:`Mod+Alt+ArrowDown`,command:N.nextSection,when:I},{key:`Mod+Alt+ArrowUp`,command:N.previousSection,when:I}],R={category:`Sidebar`,toggle:`Toggle sidebar`,focus:`Focus sidebar`,nextSection:`Next section`,previousSection:`Previous section`,nextUnread:`Next unread`,previousUnread:`Previous unread`,collapseAll:`Collapse all folders`,goTo:e=>`Go to ${e}`};function z(e){return e.badge?.unread===!0||(e.badge?.mentions??0)>0}function B(e,t,n){let r=[];C(e,e=>{e.href!==void 0&&!e.disabled&&r.push(e)});let i=r.length;if(i===0)return null;let a=t===null?-1:r.findIndex(e=>e.id===t);for(let e=1;e<=i;e++){let o=r[a<0&&n===-1?i-e:((a+n*e)%i+i)%i];if(o&&z(o)&&o.id!==t)return o}return null}function V(e){if(!e)return!1;let t=e.querySelector(`[data-roving-item][tabindex="0"]`)??e.querySelector(`[data-roving-item]`);return t?.focus(),t!==null&&e.ownerDocument.activeElement===t}function H(e,t){if(!e)return!1;let n=[...e.querySelectorAll(`[data-nav-tree] [data-nav-row="section"]`)];if(n.length===0)return!1;let r=e.ownerDocument.activeElement,i=e=>r instanceof Node?r.compareDocumentPosition(e):0,a=t===1?n.find(e=>i(e)&Node.DOCUMENT_POSITION_FOLLOWING):n.toReversed().find(e=>i(e)&Node.DOCUMENT_POSITION_PRECEDING);return a?.focus(),a!==void 0}function U(e,t={}){let n={...R,...t.messages},r=N,i=(e,t,r)=>({title:e,category:n.category,...r?{when:r}:{},run:t}),a=()=>{let{store:t}=e;return e.band()===`desktop`?t.dispatch({type:`toggle`}):t.dispatch({type:`set-mobile-open`,open:!t.getState().mobileOpen}),!0},o=()=>{let{store:t}=e;return e.band()===`desktop`&&t.getState().collapsed&&!V(e.element())?(t.dispatch({type:`set-collapsed`,collapsed:!1}),requestAnimationFrame(()=>V(e.element())),!0):e.band()!==`desktop`&&!t.getState().mobileOpen?(t.dispatch({type:`set-mobile-open`,open:!0}),!0):V(e.element())},s=t=>()=>{let n=B(e.nav(),e.activeId(),t);return n?(e.navigate(n),!0):!1},c=[];C(e.nav(),e=>{e.shortcut&&e.href!==void 0&&c.push(e)});let l={[r.toggle]:i(n.toggle,a),[r.focus]:i(n.focus,o),[r.nextSection]:i(n.nextSection,()=>H(e.element(),1),I),[r.previousSection]:i(n.previousSection,()=>H(e.element(),-1),I),[r.nextUnread]:i(n.nextUnread,s(1)),[r.previousUnread]:i(n.previousUnread,s(-1)),[r.collapseAll]:i(n.collapseAll,()=>(e.store.dispatch({type:`collapse-all`}),!0)),...Object.fromEntries(c.map(t=>[P(t.id),i(n.goTo(t.label),()=>(e.navigate(t),!0))]))},u=t.itemShortcuts===!1?[]:c.flatMap(e=>e.shortcut?[{key:e.shortcut,command:P(e.id)}]:[]),d={keys:Object.values(F),get(t){let n=e.element();switch(t){case F.focus:return n!==null&&n.contains(n.ownerDocument.activeElement);case F.collapsed:return e.store.getState().collapsed;default:return}}};return{name:M,commands:l,keybindings:[...t.keybindings??L,...u],weight:t.weight,context:[d]}}var W=e(_(),1);function G(e,t){let n=l(),{store:r,panelId:i,band:a,location:o}=b(),s=(0,W.useRef)({nav:e,options:t,band:a,location:o});s.current={nav:e,options:t,band:a,location:o},(0,W.useEffect)(()=>{let e={store:r,nav:()=>s.current.nav,element:()=>typeof document>`u`?null:document.getElementById(i),band:()=>s.current.band,activeId:()=>w(s.current.nav,s.current.location)?.id??null,navigate:e=>s.current.options.navigate(e)};return n.plugin(U(e,s.current.options))},[n,r,i,K(e)]);let c=t.regions??!1,u=t.skipLinks??!1;(0,W.useEffect)(()=>{if(!c&&!u)return;let e=p(),t=c?n.plugin(f(e)):void 0,r=document.getElementById(i)?.closest(`[data-sidebar-layout]`),a=u&&r?d(e,{parent:r}):null;return()=>{a?.detach(),t?.(),e.detach()}},[n,i,c,u])}function K(e){let t=[],n=e=>{for(let r of e)r.shortcut&&t.push(`${r.id}=${r.shortcut}`),r.children&&n(r.children)};for(let t of e)n(t.items);return t.join(`;`)}var q=` › `;function J(e){let t=[],n=(e,r)=>{for(let i of e)i.href!==void 0&&!i.disabled&&t.push({id:i.id,label:i.label,detail:r.join(q),keywords:r,item:i}),i.children&&n(i.children,[...r,i.label])};for(let t of e)n(t.items,t.label?[t.label]:[]);return t}function Y(e,t,n={}){let r=n.limit??50;return{id:n.id??`sidebar`,title:n.title??`Go to…`,prefix:n.prefix??`@`,placeholder:n.placeholder??`Go to a page in the sidebar`,items(n){return J(e()).filter(e=>n.trim()===``||T(e.label,n)!==null||T(e.detail,n)!==null).slice(0,r).map(e=>({id:e.id,label:e.label,detail:e.detail||void 0,keywords:e.keywords,run:()=>t(e.item)}))}}}var X=y(),Z={bell:t,check:s,doc:r,hash:i,home:a,inbox:o},Q=[{id:`kb-top`,label:``,items:[{id:`kb-home`,label:`Home`,href:`/kb/home`,icon:{name:`home`},shortcut:`G H`},{id:`kb-inbox`,label:`Inbox`,href:`/kb/inbox`,icon:{name:`inbox`},shortcut:`G I`,badge:{count:3}},{id:`kb-activity`,label:`Activity`,href:`/kb/activity`,icon:{name:`bell`},shortcut:`G A`}]},{id:`kb-channels`,label:`Channels`,items:[{id:`kb-general`,label:`general`,href:`/kb/c/general`,icon:{name:`hash`}},{id:`kb-eng`,label:`engineering`,href:`/kb/c/eng`,icon:{name:`hash`},badge:{unread:!0}},{id:`kb-random`,label:`random`,href:`/kb/c/random`,icon:{name:`hash`}},{id:`kb-design`,label:`design`,href:`/kb/c/design`,icon:{name:`hash`},badge:{mentions:2}}]},{id:`kb-projects`,label:`Projects`,items:[{id:`kb-sidebar`,label:`Sidebar kit`,icon:{emoji:`🧭`},children:[{id:`kb-spec`,label:`Spec`,href:`/kb/p/spec`,icon:{name:`doc`}},{id:`kb-tasks`,label:`Tasks`,href:`/kb/p/tasks`,icon:{name:`check`},badge:{unread:!0}}]}]}],te={"--sb-accent":`#1264a3`};function ne({go:e}){let[t,n]=(0,W.useState)(!1);G(Q,{navigate:e,regions:!0,skipLinks:!0});let r=g({providers:[(0,W.useMemo)(()=>Y(()=>Q,e),[e])]});return m({"app.palette":{title:`Show command palette`,run:()=>n(!0)}}),h(`default`,[{key:`Mod+K`,command:`app.palette`}]),(0,X.jsx)(c,{...r.props,shortcut:!1,open:t,onOpenChange:e=>{n(e),e||r.reset()}})}function re(){let{mode:e}=x();return e===`panel`?null:(0,X.jsx)(D,{})}function ie(){let[e,t]=(0,W.useState)(`/kb/c/general`),n=(0,W.useMemo)(()=>e=>e.href?t(e.href):void 0,[]),r=(e,n)=>{e.external||!e.href||(n.preventDefault(),t(e.href))},i=Q.flatMap(e=>e.items).flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e);return(0,X.jsx)(u,{children:(0,X.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...te},children:[(0,X.jsx)(k,{}),(0,X.jsxs)(S,{icons:Z,location:e,label:`Workspace navigation`,defaultState:{width:240},children:[(0,X.jsx)(ne,{go:n}),(0,X.jsx)(O,{sidebar:(0,X.jsx)(ee,{header:(0,X.jsxs)(`div`,{className:`flex h-8 items-center gap-1 px-1`,children:[(0,X.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-[13px] font-semibold`,children:`Acme`}),(0,X.jsx)(D,{})]}),children:(0,X.jsx)(E,{nav:Q,onNavigate:r})}),children:(0,X.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col text-[13px]`,children:[(0,X.jsxs)(`div`,{className:`flex h-10 shrink-0 items-center gap-2 border-b px-3`,children:[(0,X.jsx)(re,{}),(0,X.jsx)(`h3`,{"data-kb-current":``,className:`font-medium`,children:i?.label??`Home`})]}),(0,X.jsx)(`div`,{className:`p-3 text-muted-foreground`,children:(0,X.jsx)(`button`,{type:`button`,className:`h-7 rounded-md border px-2 text-[12.5px] hover:bg-muted`,children:`A button in the content`})})]})})]})]})})}var $=`import { Bell, CheckSquare, FileText, Hash, Home, Inbox } from "lucide-react"
import { useMemo, useState } from "react"
import { KeyboardProvider, useCommandPalette, useCommands, useKeymap } from "@kitora/keyboard"
import { CommandPalette } from "@kitora/overlay"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, useSidebar, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"
import { sidebarPaletteProvider, useSidebarKeyboard } from "@kitora/sidebar/keyboard"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { bell: Bell, check: CheckSquare, doc: FileText, hash: Hash, home: Home, inbox: Inbox }

/** Unread channels (for next unread) and items whose \`shortcut\` the plugin binds for real. */
const NAV: readonly NavSection[] = [
  {
    id: "kb-top",
    label: "",
    items: [
      { id: "kb-home", label: "Home", href: "/kb/home", icon: { name: "home" }, shortcut: "G H" },
      { id: "kb-inbox", label: "Inbox", href: "/kb/inbox", icon: { name: "inbox" }, shortcut: "G I", badge: { count: 3 } },
      { id: "kb-activity", label: "Activity", href: "/kb/activity", icon: { name: "bell" }, shortcut: "G A" },
    ],
  },
  {
    id: "kb-channels",
    label: "Channels",
    items: [
      { id: "kb-general", label: "general", href: "/kb/c/general", icon: { name: "hash" } },
      { id: "kb-eng", label: "engineering", href: "/kb/c/eng", icon: { name: "hash" }, badge: { unread: true } },
      { id: "kb-random", label: "random", href: "/kb/c/random", icon: { name: "hash" } },
      { id: "kb-design", label: "design", href: "/kb/c/design", icon: { name: "hash" }, badge: { mentions: 2 } },
    ],
  },
  {
    id: "kb-projects",
    label: "Projects",
    items: [
      {
        id: "kb-sidebar",
        label: "Sidebar kit",
        icon: { emoji: "🧭" },
        children: [
          { id: "kb-spec", label: "Spec", href: "/kb/p/spec", icon: { name: "doc" } },
          { id: "kb-tasks", label: "Tasks", href: "/kb/p/tasks", icon: { name: "check" }, badge: { unread: true } },
        ],
      },
    ],
  },
]

const THEME: Readonly<Record<\`--sb-\${string}\`, string>> = { "--sb-accent": "#1264a3" }

/**
 * The keyboard wiring, inside both providers: the sidebar plugin (Mod+B / [ toggle, Mod+Shift+E focus,
 * Alt+Shift+Down next unread, G I and the other item jumps, F6 regions and skip links), and a ⌘K palette
 * that lists every nav item.
 */
function KeyboardWiring({ go }: { readonly go: (item: NavItem) => void }) {
  const [open, setOpen] = useState(false)
  useSidebarKeyboard(NAV, { navigate: go, regions: true, skipLinks: true })
  const provider = useMemo(() => sidebarPaletteProvider(() => NAV, go), [go])
  const palette = useCommandPalette({ providers: [provider] })
  useCommands({ "app.palette": { title: "Show command palette", run: () => setOpen(true) } })
  useKeymap("default", [{ key: "Mod+K", command: "app.palette" }])
  return (
    <CommandPalette
      {...palette.props}
      shortcut={false}
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) palette.reset()
      }}
    />
  )
}

/** The content's own toggle while the panel is not showing in full. */
function CollapsedTrigger() {
  const { mode } = useSidebar()
  return mode === "panel" ? null : <SidebarTrigger />
}

/** The sidebar on the keyboard kit. No \`toggleShortcut\` on the provider: the plugin owns the keys. */
export function KeyboardApp() {
  // In an app, pass the router's pathname as \`location\` and navigate with the router; this demo keeps navigation in the page.
  const [location, setLocation] = useState("/kb/c/general")
  const go = useMemo(() => (item: NavItem) => (item.href ? setLocation(item.href) : undefined), [])
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  const current = NAV.flatMap((s) => s.items).flatMap((i) => [i, ...(i.children ?? [])]).find((i) => i.href === location)
  return (
    <KeyboardProvider>
      <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
        <SidebarStyles />
        <SidebarProvider icons={ICONS} location={location} label="Workspace navigation" defaultState={{ width: 240 }}>
          <KeyboardWiring go={go} />
          <SidebarLayout
            sidebar={
              <Sidebar
                header={
                  <div className="flex h-8 items-center gap-1 px-1">
                    <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">Acme</span>
                    <SidebarTrigger />
                  </div>
                }
              >
                <SidebarNav nav={NAV} onNavigate={navigate} />
              </Sidebar>
            }
          >
            <div className="flex h-full min-h-0 flex-col text-[13px]">
              <div className="flex h-10 shrink-0 items-center gap-2 border-b px-3">
                <CollapsedTrigger />
                <h3 data-kb-current="" className="font-medium">
                  {current?.label ?? "Home"}
                </h3>
              </div>
              <div className="p-3 text-muted-foreground">
                <button type="button" className="h-7 rounded-md border px-2 text-[12.5px] hover:bg-muted">
                  A button in the content
                </button>
              </div>
            </div>
          </SidebarLayout>
        </SidebarProvider>
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>v(()=>import(`./keyboard-DPiOEwZS2.js`),[]));var ae={[N.toggle]:R.toggle,[N.focus]:R.focus,[N.nextUnread]:R.nextUnread,[N.previousUnread]:R.previousUnread,[N.nextSection]:R.nextSection,[N.previousSection]:R.previousSection};function oe(){return(0,X.jsxs)(`div`,{children:[(0,X.jsx)(n,{title:`Keyboard and commands`,children:`The sidebar's opt-in keyboard entry: commands on the keyboard kit's registry (rebindable, listed in the palette and the cheatsheet), a Go to command for every item that shows a shortcut, next and previous unread, a palette page listing every nav item, F6 to cycle between the sidebar and the content, and skip links from the same regions. Inside the tree: arrows, Home and End, typeahead, Left and Right, F2, Alt+Arrow and Shift+F10.`}),(0,X.jsx)(A,{n:1,title:`Commands, palette, regions`,blurb:`Click into the frame, then try ⌘K / Ctrl+K and type a page name (or @ for nav items only), G then I, Alt+Shift+↓, ⌘B / Ctrl+B or [, Ctrl+Shift+E, F6, and Tab from the top of the frame for the skip links.`,code:$,children:(0,X.jsx)(j,{testId:`keyboard`,height:440,children:(0,X.jsx)(ie,{})})}),(0,X.jsx)(A,{n:2,title:`Default keys`,blurb:`DEFAULT_SIDEBAR_KEYBINDINGS; item shortcuts (G H, G I, G A) are added from the nav.`,children:(0,X.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,X.jsx)(`tbody`,{children:L.map(e=>(0,X.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,X.jsx)(`td`,{className:`py-1.5 pr-3 font-mono text-[12px] whitespace-nowrap`,children:e.key}),(0,X.jsx)(`td`,{className:`py-1.5 pr-3`,children:ae[e.command]??e.command}),(0,X.jsx)(`td`,{className:`py-1.5 font-mono text-[12px] text-muted-foreground max-sm:[overflow-wrap:anywhere]`,children:e.command})]},`${e.key}-${e.command}`))})})})]})}export{oe as component};