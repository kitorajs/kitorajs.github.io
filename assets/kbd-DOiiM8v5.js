import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./provider-CJrNxsO0.js";import{i as n,n as r}from"./kbd-BBrTDCPy.js";import{Cc as i,Ic as a}from"./index-B9ukmIN1.js";var o=e({KbdInline:()=>c}),s=a();function c(){return(0,s.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,s.jsxs)(`p`,{className:`inline-flex flex-wrap items-center gap-1 text-sm text-muted-foreground`,children:[`Press `,(0,s.jsx)(r,{binding:`Mod+K`,platform:`mac`}),` to open the command palette, or `,(0,s.jsx)(r,{binding:`?`,platform:`mac`}),` for help.`]})})}var l=e({KbdPlatforms:()=>d}),u=[`Mod+K`,`Mod+Shift+P`,`g i`,`Escape`];function d(){return(0,s.jsx)(t,{children:(0,s.jsxs)(`div`,{className:`grid w-fit grid-cols-[auto_auto_auto] items-center gap-x-6 gap-y-1.5 text-xs`,children:[(0,s.jsx)(`span`,{className:`text-muted-foreground`,children:`Your platform`}),(0,s.jsx)(`span`,{className:`text-muted-foreground`,children:`macOS`}),(0,s.jsx)(`span`,{className:`text-muted-foreground`,children:`Windows`}),u.map(e=>[(0,s.jsx)(n,{binding:e},`${e}-own`),(0,s.jsx)(r,{binding:e,platform:`mac`},`${e}-mac`),(0,s.jsx)(r,{binding:e,platform:`win`},`${e}-win`)])]})})}var f=e({KbdSizesAndTones:()=>p});function p(){return(0,s.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-4 text-sm`,children:[(0,s.jsx)(r,{binding:`Mod+S`,platform:`mac`}),(0,s.jsx)(r,{binding:`Mod+S`,platform:`mac`,size:`md`}),(0,s.jsxs)(`span`,{className:`inline-flex items-center gap-2 rounded-md bg-foreground px-2 py-1 text-xs text-background`,children:[`Save `,(0,s.jsx)(r,{binding:`Mod+S`,platform:`mac`,tone:`inverted`})]})]})}var m=`import { Kbd } from "@kitora/keyboard"

// \`Kbd\` draws a binding in the keyboard kit's grammar as key caps. With \`platform\` it needs no provider:
// \`Mod\` reads ⌘ on macOS and Ctrl on Windows and Linux.
export function KbdInline() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <p className="inline-flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        Press <Kbd binding="Mod+K" platform="mac" /> to open the command palette, or <Kbd binding="?" platform="mac" /> for help.
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>i(()=>import(`./inline-BU1_GhUQ.js`),[]));var h=`import { Kbd, KeyboardProvider, ProviderKbd } from "@kitora/keyboard"

const BINDINGS = ["Mod+K", "Mod+Shift+P", "g i", "Escape"] as const

// \`ProviderKbd\` uses the platform the provider detected; \`Kbd\` with \`platform\` draws a fixed one. A
// sequence (\`g i\`) draws one group per chord.
export function KbdPlatforms() {
  return (
    <KeyboardProvider>
      <div className="grid w-fit grid-cols-[auto_auto_auto] items-center gap-x-6 gap-y-1.5 text-xs">
        <span className="text-muted-foreground">Your platform</span>
        <span className="text-muted-foreground">macOS</span>
        <span className="text-muted-foreground">Windows</span>
        {BINDINGS.map((binding) => [
          <ProviderKbd key={\`\${binding}-own\`} binding={binding} />,
          <Kbd key={\`\${binding}-mac\`} binding={binding} platform="mac" />,
          <Kbd key={\`\${binding}-win\`} binding={binding} platform="win" />,
        ])}
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>i(()=>import(`./platforms-RI9xa6uO.js`),[]));var g=`import { Kbd } from "@kitora/keyboard"

// \`size\` is \`sm\` (the default) or \`md\`; \`tone="inverted"\` is for caps on a dark surface such as a tooltip.
export function KbdSizesAndTones() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
      <Kbd binding="Mod+S" platform="mac" />
      <Kbd binding="Mod+S" platform="mac" size="md" />
      <span className="inline-flex items-center gap-2 rounded-md bg-foreground px-2 py-1 text-xs text-background">
        Save <Kbd binding="Mod+S" platform="mac" tone="inverted" />
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>i(()=>import(`./sizes-and-tones-BqSGtXOo.js`),[]));var _={"./demos/kbd/inline.tsx":o,"./demos/kbd/platforms.tsx":l,"./demos/kbd/sizes-and-tones.tsx":f},v={"./demos/kbd/inline.tsx":m,"./demos/kbd/platforms.tsx":h,"./demos/kbd/sizes-and-tones.tsx":g};export{_ as modules,v as sources};