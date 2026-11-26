import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-B9ukmIN1.js";import{t as o}from"./label-DoQXlIRk.js";import{n as s,r as c,t as l}from"./native-select-COgoa9dQ.js";var u=e({NativeSelectBasic:()=>m}),d=t(n(),1),f=i(),p=[{value:`sm`,label:`Small`},{value:`md`,label:`Medium`},{value:`lg`,label:`Large`},{value:`xl`,label:`Extra large (sold out)`,disabled:!0}];function m(){let e=(0,d.useId)(),[t,n]=(0,d.useState)(`md`);return(0,f.jsxs)(`div`,{className:`flex flex-wrap items-end justify-center gap-4`,children:[(0,f.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,f.jsx)(`label`,{htmlFor:`${e}-size`,className:`text-sm font-medium`,children:`Size`}),(0,f.jsx)(l,{id:`${e}-size`,value:t,options:p,onValueChange:n})]}),(0,f.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,f.jsx)(`label`,{htmlFor:`${e}-off`,className:`text-sm font-medium`,children:`Disabled`}),(0,f.jsx)(l,{id:`${e}-off`,value:`md`,options:p,onValueChange:n,disabled:!0})]})]})}var h=e({NativeSelectComposeRegionForm:()=>v}),g=[{value:`us-east`,label:`US East (Virginia)`},{value:`eu-west`,label:`EU West (Dublin)`},{value:`ap-south`,label:`Asia Pacific (Mumbai)`}],_=[{value:`utc`,label:`UTC`},{value:`local`,label:`Browser time`}];function v(){let e=(0,d.useId)(),[t,n]=(0,d.useState)(`eu-west`),[r,i]=(0,d.useState)(`utc`);return(0,f.jsxs)(`form`,{className:`grid w-full max-w-sm gap-3`,onSubmit:e=>e.preventDefault(),children:[(0,f.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,f.jsx)(o,{htmlFor:`${e}-region`,children:`Region`}),(0,f.jsx)(l,{id:`${e}-region`,className:`w-full`,value:t,options:g,onValueChange:n})]}),(0,f.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,f.jsx)(o,{htmlFor:`${e}-tz`,children:`Timezone`}),(0,f.jsx)(l,{id:`${e}-tz`,className:`w-full`,value:r,options:_,onValueChange:i})]}),(0,f.jsx)(a,{type:`submit`,className:`w-full`,children:`Create project`})]})}var y=e({NativeSelectUncontrolledAndGroups:()=>x}),b=[{label:`Standard`,options:[{value:`ground`,label:`Ground (5–7 days)`},{value:`economy`,label:`Economy (7–10 days)`}]},{label:`Fast`,options:[{value:`express`,label:`Express (2 days)`},{value:`overnight`,label:`Overnight`,disabled:!0}]}];function x(){let e=(0,d.useId)();return(0,f.jsxs)(`form`,{className:`grid w-full max-w-sm gap-4`,onSubmit:e=>e.preventDefault(),children:[(0,f.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,f.jsx)(`label`,{htmlFor:`${e}-shipping`,className:`text-sm font-medium`,children:`Shipping`}),(0,f.jsx)(l,{id:`${e}-shipping`,name:`shipping`,placeholder:`Choose a speed`,options:b,required:!0,size:`default`,className:`w-full`})]}),(0,f.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,f.jsx)(`label`,{htmlFor:`${e}-wrap`,className:`text-sm font-medium`,children:`Gift wrap`}),(0,f.jsxs)(l,{id:`${e}-wrap`,name:`wrap`,defaultValue:`none`,className:`w-full`,children:[(0,f.jsx)(c,{value:`none`,children:`No wrapping`}),(0,f.jsxs)(s,{label:`Paper`,children:[(0,f.jsx)(c,{value:`kraft`,children:`Kraft`}),(0,f.jsx)(c,{value:`gold`,children:`Gold foil`})]})]})]}),(0,f.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,f.jsx)(`label`,{htmlFor:`${e}-invalid`,className:`text-sm font-medium`,children:`Invalid`}),(0,f.jsx)(l,{id:`${e}-invalid`,"aria-invalid":!0,placeholder:`Required`,options:[{value:`a`,label:`A`}],className:`w-full`})]})]})}var S=`import { useId, useState } from "react"
import { NativeSelect } from "@kitora/ui/native-select"

const sizes = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
  { value: "xl", label: "Extra large (sold out)", disabled: true },
]

export function NativeSelectBasic() {
  const id = useId()
  const [size, setSize] = useState("md")
  return (
    <div className="flex flex-wrap items-end justify-center gap-4">
      <div className="grid gap-1.5">
        <label htmlFor={\`\${id}-size\`} className="text-sm font-medium">
          Size
        </label>
        <NativeSelect id={\`\${id}-size\`} value={size} options={sizes} onValueChange={setSize} />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={\`\${id}-off\`} className="text-sm font-medium">
          Disabled
        </label>
        <NativeSelect id={\`\${id}-off\`} value="md" options={sizes} onValueChange={setSize} disabled />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>r(()=>import(`./basic-fw8s_dll.js`),[]));var C=`import { useId, useState } from "react"
import { Button } from "@kitora/ui/button"
import { Label } from "@kitora/ui/label"
import { NativeSelect } from "@kitora/ui/native-select"

const regions = [
  { value: "us-east", label: "US East (Virginia)" },
  { value: "eu-west", label: "EU West (Dublin)" },
  { value: "ap-south", label: "Asia Pacific (Mumbai)" },
]

const timezones = [
  { value: "utc", label: "UTC" },
  { value: "local", label: "Browser time" },
]

export function NativeSelectComposeRegionForm() {
  const id = useId()
  const [region, setRegion] = useState("eu-west")
  const [tz, setTz] = useState("utc")
  return (
    <form className="grid w-full max-w-sm gap-3" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-1.5">
        <Label htmlFor={\`\${id}-region\`}>Region</Label>
        <NativeSelect id={\`\${id}-region\`} className="w-full" value={region} options={regions} onValueChange={setRegion} />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor={\`\${id}-tz\`}>Timezone</Label>
        <NativeSelect id={\`\${id}-tz\`} className="w-full" value={tz} options={timezones} onValueChange={setTz} />
      </div>
      <Button type="submit" className="w-full">
        Create project
      </Button>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>r(()=>import(`./compose-BNo_xjo1.js`),[]));var w=`import { useId } from "react"
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@kitora/ui/native-select"

// Grouped \`options\` become \`<optgroup>\`s; the placeholder is a disabled empty first option, so \`required\` holds the form until a real choice.
const SHIPPING = [
  { label: "Standard", options: [{ value: "ground", label: "Ground (5–7 days)" }, { value: "economy", label: "Economy (7–10 days)" }] },
  { label: "Fast", options: [{ value: "express", label: "Express (2 days)" }, { value: "overnight", label: "Overnight", disabled: true }] },
]

export function NativeSelectUncontrolledAndGroups() {
  const id = useId()
  return (
    <form className="grid w-full max-w-sm gap-4" onSubmit={(event) => event.preventDefault()}>
      <div className="grid gap-1.5">
        <label htmlFor={\`\${id}-shipping\`} className="text-sm font-medium">
          Shipping
        </label>
        <NativeSelect id={\`\${id}-shipping\`} name="shipping" placeholder="Choose a speed" options={SHIPPING} required size="default" className="w-full" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={\`\${id}-wrap\`} className="text-sm font-medium">
          Gift wrap
        </label>
        {/* Uncontrolled: \`defaultValue\`, and the parts as children instead of \`options\`. */}
        <NativeSelect id={\`\${id}-wrap\`} name="wrap" defaultValue="none" className="w-full">
          <NativeSelectOption value="none">No wrapping</NativeSelectOption>
          <NativeSelectOptGroup label="Paper">
            <NativeSelectOption value="kraft">Kraft</NativeSelectOption>
            <NativeSelectOption value="gold">Gold foil</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={\`\${id}-invalid\`} className="text-sm font-medium">
          Invalid
        </label>
        <NativeSelect id={\`\${id}-invalid\`} aria-invalid placeholder="Required" options={[{ value: "a", label: "A" }]} className="w-full" />
      </div>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>r(()=>import(`./uncontrolled-and-groups-BUQkEEZk.js`),[]));var T={"./demos/native-select/basic.tsx":u,"./demos/native-select/compose.tsx":h,"./demos/native-select/uncontrolled-and-groups.tsx":y},E={"./demos/native-select/basic.tsx":S,"./demos/native-select/compose.tsx":C,"./demos/native-select/uncontrolled-and-groups.tsx":w};export{T as modules,E as sources};