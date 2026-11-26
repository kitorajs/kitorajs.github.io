import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,c as n,n as r,o as i,s as a,t as o}from"./avatar-DegXKoDd.js";import{Cc as s,Ic as c,ti as l}from"./index-q72zUtm9.js";import{t as u}from"./badge-Be8rVEaF.js";var d=e({AvatarBuildYourOwn:()=>m}),f=c(),p=[{name:`Grace Hopper`,initials:`GH`,src:`https://github.com/shadcn.png`},{name:`Alex Kim`,initials:`AK`}];function m({members:e=p}){return(0,f.jsx)(`ul`,{className:`grid w-full max-w-xs gap-2`,children:e.map(e=>(0,f.jsxs)(`li`,{className:`flex items-center gap-3 text-sm`,children:[(0,f.jsxs)(n,{className:`relative flex size-8 shrink-0 overflow-hidden rounded-full select-none`,children:[e.src?(0,f.jsx)(i,{src:e.src,alt:e.name,className:`aspect-square size-full object-cover`}):null,(0,f.jsx)(a,{className:`flex size-full items-center justify-center rounded-full bg-muted text-xs text-muted-foreground`,children:e.initials})]}),e.name]},e.name))})}var h=e({AvatarComposeMemberRows:()=>_}),g=[{name:`Grace Hopper`,email:`grace@example.com`,initials:`GH`,role:`Owner`,src:`https://github.com/shadcn.png`},{name:`Alex Kim`,email:`alex@example.com`,initials:`AK`,role:`Member`,src:``}];function _(){return(0,f.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,f.jsx)(`ul`,{className:`w-full max-w-md divide-y divide-border rounded-md border border-border bg-card`,children:g.map(e=>(0,f.jsxs)(`li`,{className:`flex flex-wrap items-center gap-3 px-3 py-2`,children:[(0,f.jsxs)(o,{children:[e.src?(0,f.jsx)(t,{src:e.src,alt:e.name}):null,(0,f.jsx)(r,{children:e.initials})]}),(0,f.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,f.jsx)(`div`,{className:`truncate text-sm font-medium`,children:e.name}),(0,f.jsx)(`div`,{className:`truncate text-xs text-muted-foreground`,children:e.email})]}),(0,f.jsx)(u,{variant:`outline`,children:e.role}),(0,f.jsx)(l,{size:`sm`,variant:`ghost`,children:`Manage`})]},e.email))})})}var v=e({AvatarImageFallback:()=>y});function y(){return(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,f.jsxs)(o,{children:[(0,f.jsx)(t,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),(0,f.jsx)(r,{children:`CN`})]}),(0,f.jsx)(o,{children:(0,f.jsx)(r,{children:`AK`})}),(0,f.jsx)(o,{className:`size-10`,children:(0,f.jsx)(r,{className:`bg-primary text-primary-foreground`,children:`GH`})})]})}var b=e({AvatarShapesSizes:()=>S}),x=[`xs`,`sm`,`default`,`lg`,`xl`];function S(){return(0,f.jsx)(`div`,{className:`flex flex-col items-center gap-4`,children:[`circle`,`square`].map(e=>(0,f.jsx)(`div`,{className:`flex items-center gap-3`,children:x.map(n=>(0,f.jsxs)(o,{size:n,shape:e,children:[(0,f.jsx)(t,{src:`https://github.com/shadcn.png`,alt:``}),(0,f.jsx)(r,{children:`CN`})]},n))},e))})}var C=`import { Avatar } from "@kitora/primitives/react"

/** One member of the list: a name, the initials the fallback shows and an optional picture. */
interface Member {
  readonly name: string
  readonly initials: string
  readonly src?: string
}

const MEMBERS: readonly Member[] = [
  { name: "Grace Hopper", initials: "GH", src: "https://github.com/shadcn.png" },
  { name: "Alex Kim", initials: "AK" },
]

/**
 * Avatars built from the primitives' parts only: \`Avatar.Root\`, \`Image\` (mounted once the picture has loaded) and \`Fallback\`
 * (the initials, while the picture loads, when it fails or when there is none), styled with your own classes.
 */
export function AvatarBuildYourOwn({ members = MEMBERS }: { members?: readonly Member[] }) {
  return (
    <ul className="grid w-full max-w-xs gap-2">
      {members.map((member) => (
        <li key={member.name} className="flex items-center gap-3 text-sm">
          <Avatar.Root className="relative flex size-8 shrink-0 overflow-hidden rounded-full select-none">
            {member.src ? <Avatar.Image src={member.src} alt={member.name} className="aspect-square size-full object-cover" /> : null}
            <Avatar.Fallback className="flex size-full items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">{member.initials}</Avatar.Fallback>
          </Avatar.Root>
          {member.name}
        </li>
      ))}
    </ul>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>s(()=>import(`./build-your-own-C0zo9HYt.js`),[]));var w=`import { Avatar, AvatarFallback, AvatarImage } from "@kitora/ui/avatar"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"

const MEMBERS = [
  { name: "Grace Hopper", email: "grace@example.com", initials: "GH", role: "Owner", src: "https://github.com/shadcn.png" },
  { name: "Alex Kim", email: "alex@example.com", initials: "AK", role: "Member", src: "" },
]

export function AvatarComposeMemberRows() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ul className="w-full max-w-md divide-y divide-border rounded-md border border-border bg-card">
        {MEMBERS.map((m) => (
          <li key={m.email} className="flex flex-wrap items-center gap-3 px-3 py-2">
            <Avatar>
              {m.src ? <AvatarImage src={m.src} alt={m.name} /> : null}
              <AvatarFallback>{m.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{m.name}</div>
              <div className="truncate text-xs text-muted-foreground">{m.email}</div>
            </div>
            <Badge variant="outline">{m.role}</Badge>
            <Button size="sm" variant="ghost">
              Manage
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>s(()=>import(`./compose-B5jvFgwD.js`),[]));var T=`import { Avatar, AvatarFallback, AvatarImage } from "@kitora/ui/avatar"

export function AvatarImageFallback() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
      <Avatar className="size-10">
        <AvatarFallback className="bg-primary text-primary-foreground">GH</AvatarFallback>
      </Avatar>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>s(()=>import(`./image-fallback-DrXirJaW.js`),[]));var E=`import { Avatar, AvatarFallback, AvatarImage } from "@kitora/ui/avatar"

const sizes = ["xs", "sm", "default", "lg", "xl"] as const

export function AvatarShapesSizes() {
  return (
    <div className="flex flex-col items-center gap-4">
      {(["circle", "square"] as const).map((shape) => (
        <div key={shape} className="flex items-center gap-3">
          {sizes.map((size) => (
            <Avatar key={size} size={size} shape={shape}>
              <AvatarImage src="https://github.com/shadcn.png" alt="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </div>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>s(()=>import(`./shapes-sizes-D6GsW58C.js`),[]));var D={"./demos/avatar/build-your-own.tsx":d,"./demos/avatar/compose.tsx":h,"./demos/avatar/image-fallback.tsx":v,"./demos/avatar/shapes-sizes.tsx":b},O={"./demos/avatar/build-your-own.tsx":C,"./demos/avatar/compose.tsx":w,"./demos/avatar/image-fallback.tsx":T,"./demos/avatar/shapes-sizes.tsx":E};export{D as modules,O as sources};