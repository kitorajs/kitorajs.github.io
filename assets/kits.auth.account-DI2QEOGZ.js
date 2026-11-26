import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,n,r,t as i}from"./profile-DknbetuN.js";import{t as a}from"./bell-QnxoqhU6.js";import{t as o}from"./credit-card-ClJwDVr8.js";import{s}from"./kit-docs-CvNs0WqT.js";import{t as c}from"./key-round-DDzAVqxg.js";import{t as l}from"./mail-m_AeWWGR.js";import{Bc as u,Cc as d,Ic as f,Mi as p}from"./index-9y5uwRd3.js";import{n as m}from"./context-B0rBLGA7.js";import{i as h,o as g,r as _}from"./sidebar-VPUXi6Th.js";import{c as v,o as y}from"./parts-BCmKNJsH.js";import{d as b,t as x}from"./-kits.auth.shared-CYj83HY0.js";import{o as S,s as C}from"./use-action-CvrBxORJ.js";import"./kit-gallery-B-Yr9fP4.js";import{t as w}from"./example-CZLJLtIC.js";var T=p(`user-round`,[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]]),E=e(u(),1),D=f(),O={id:`usr_ada`,name:`Ada Lovelace`,email:S.email,emailVerified:!0,username:`ada`},k={profile:T,email:l,password:c,notifications:a,billing:o},A=[{id:`settings`,label:``,items:[{id:`profile`,label:`Profile`,href:`/profile`,icon:{name:`profile`}},{id:`email`,label:`Email`,href:`/email`,icon:{name:`email`}},{id:`password`,label:`Password`,href:`/password`,icon:{name:`password`}},{id:`notifications`,label:`Notifications`,href:`/notifications`,icon:{name:`notifications`},disabled:!0,badge:{text:`soon`}},{id:`billing`,label:`Billing`,href:`/billing`,icon:{name:`billing`},disabled:!0,badge:{text:`soon`}}]}];function j(){let[e]=(0,E.useState)(()=>C(O)),[a,o]=(0,E.useState)(O),[s,c]=(0,E.useState)(`/profile`),l=(0,D.jsxs)(`div`,{className:`flex items-center gap-2 px-2 py-1.5 text-[13px]`,children:[(0,D.jsx)(t,{user:a,size:28}),(0,D.jsxs)(`div`,{className:`min-w-0`,children:[(0,D.jsx)(`div`,{className:`truncate font-medium`,children:a.name}),(0,D.jsx)(`div`,{className:`truncate text-[11.5px] text-muted-foreground`,children:a.email})]})]});return(0,D.jsx)(b,{account:e,children:(0,D.jsxs)(`div`,{className:`h-full min-h-0 text-[13px]`,children:[(0,D.jsx)(y,{}),(0,D.jsx)(m,{icons:k,location:s,label:`Settings`,defaultState:{width:208},children:(0,D.jsx)(v,{sidebar:(0,D.jsx)(_,{header:l,children:(0,D.jsx)(h,{nav:A,onNavigate:(e,t)=>{t.preventDefault(),c(e.href??s)}})}),children:(0,D.jsx)(`div`,{className:`h-full min-w-0 overflow-y-auto p-4 sm:p-6`,children:(0,D.jsxs)(`div`,{className:`mx-auto grid max-w-2xl gap-4`,children:[(0,D.jsxs)(`header`,{className:`flex items-start gap-2`,children:[(0,D.jsx)(g,{}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h1`,{className:`text-[16px] font-semibold tracking-tight`,children:`Account`}),(0,D.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Password for the demo: `,(0,D.jsx)(`code`,{className:`font-mono`,children:S.password})]})]})]}),s===`/profile`?(0,D.jsx)(r,{user:a,onSaved:o}):null,s===`/email`?(0,D.jsx)(n,{user:a}):null,s===`/password`?(0,D.jsx)(i,{userInputs:[a.name,a.email]}):null]})})})})]})})}var M=`import { useState } from "react"
import { Bell, CreditCard, KeyRound, Mail, UserRound } from "lucide-react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, type NavSection } from "@kitora/sidebar"
import { AuthKitProvider, ChangePasswordForm, createFakeAccountAdapter, EmailSettings, FAKE_AUTH, ProfileSettings, UserAvatar, type AuthUser } from "@kitora/auth"

const initialUser: AuthUser = { id: "usr_ada", name: "Ada Lovelace", email: FAKE_AUTH.email, emailVerified: true, username: "ada" }

// The settings nav is @kitora/sidebar: active row from \`location\`, a sheet on phones.
const ICONS = { profile: UserRound, email: Mail, password: KeyRound, notifications: Bell, billing: CreditCard }
const NAV: readonly NavSection[] = [
  {
    id: "settings",
    label: "",
    items: [
      { id: "profile", label: "Profile", href: "/profile", icon: { name: "profile" } },
      { id: "email", label: "Email", href: "/email", icon: { name: "email" } },
      { id: "password", label: "Password", href: "/password", icon: { name: "password" } },
      { id: "notifications", label: "Notifications", href: "/notifications", icon: { name: "notifications" }, disabled: true, badge: { text: "soon" } },
      { id: "billing", label: "Billing", href: "/billing", icon: { name: "billing" }, disabled: true, badge: { text: "soon" } },
    ],
  },
]

export function AccountSettingsPage() {
  // one adapter for the whole page, through the provider; each preset reads it
  const [account] = useState(() => createFakeAccountAdapter(initialUser))
  const [user, setUser] = useState(initialUser)
  // page state stands in for the router's pathname
  const [location, setLocation] = useState("/profile")
  const header = (
    <div className="flex items-center gap-2 px-2 py-1.5 text-[13px]">
      <UserAvatar user={user} size={28} />
      <div className="min-w-0">
        <div className="truncate font-medium">{user.name}</div>
        <div className="truncate text-[11.5px] text-muted-foreground">{user.email}</div>
      </div>
    </div>
  )
  return (
    <AuthKitProvider account={account}>
      <div className="h-full min-h-0 text-[13px]">
        <SidebarStyles />
        <SidebarProvider icons={ICONS} location={location} label="Settings" defaultState={{ width: 208 }}>
          <SidebarLayout sidebar={<Sidebar header={header}><SidebarNav nav={NAV} onNavigate={(item, event) => { event.preventDefault(); setLocation(item.href ?? location) }} /></Sidebar>}>
            <div className="h-full min-w-0 overflow-y-auto p-4 sm:p-6">
              <div className="mx-auto grid max-w-2xl gap-4">
                <header className="flex items-start gap-2">
                  <SidebarTrigger />
                  <div>
                    <h1 className="text-[16px] font-semibold tracking-tight">Account</h1>
                    <p className="text-muted-foreground">Password for the demo: <code className="font-mono">{FAKE_AUTH.password}</code></p>
                  </div>
                </header>
                {location === "/profile" ? <ProfileSettings user={user} onSaved={setUser} /> : null}
                {location === "/email" ? <EmailSettings user={user} /> : null}
                {location === "/password" ? <ChangePasswordForm userInputs={[user.name, user.email]} /> : null}
              </div>
            </div>
          </SidebarLayout>
        </SidebarProvider>
      </div>
    </AuthKitProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>d(()=>import(`./account-settings-RGZ2RrQ6.js`),[]));function N(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(s,{title:`Account settings`,children:`A settings page with a section nav. One AccountAdapter goes into AuthKitProvider; ProfileSettings, EmailSettings and ChangePasswordForm read it from there.`}),(0,D.jsx)(w,{n:1,title:`An account page`,blurb:`Profile (the sidebar updates on save), email change with pending verification, and password change.`,code:M,children:(0,D.jsx)(x,{testId:`account-settings`,height:640,children:(0,D.jsx)(j,{})})})]})}export{N as component};