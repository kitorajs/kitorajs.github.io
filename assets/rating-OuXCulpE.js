import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,r,t as i}from"./rating-CXWiSGph.js";import{t as a}from"./heart-CjYyntwC.js";import{t as o}from"./star-Cbf2qr-O.js";import{t as s}from"./textarea-BzT4gNdi.js";import{Bc as c,Cc as l,Ic as u,ti as d}from"./index-q72zUtm9.js";import{t as f}from"./label-DjxTNoON.js";import{a as p,i as m,n as h,o as g,t as _}from"./card-WiouR7Ep.js";var v=e({RatingBuildYourOwn:()=>x}),y=u(),b=5;function x({value:e,defaultValue:t=e===void 0?3:void 0,onValueChange:i,allowHalf:a,clearable:s,readOnly:c,name:l}){return(0,y.jsx)(r,{"aria-label":`Order rating`,max:b,value:e,defaultValue:t,onValueChange:e=>i?.(e),allowHalf:a,clearable:s,readOnly:c,name:l,className:`inline-flex items-center gap-0.5`,children:Array.from({length:b},(e,t)=>(0,y.jsxs)(n,{index:t+1,className:`group/star relative inline-flex rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-5`,children:[(0,y.jsx)(`span`,{"aria-hidden":`true`,className:`inline-flex text-muted-foreground/45`,children:(0,y.jsx)(o,{})}),(0,y.jsx)(`span`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-y-0 start-0 w-0 overflow-hidden text-primary group-data-[fill=full]/star:w-full group-data-[fill=half]/star:w-1/2 [&_svg]:fill-current`,children:(0,y.jsx)(o,{})})]},t+1))})}var S=e({RatingComposeReviewForm:()=>w}),C=t(c(),1);function w(){let[e,t]=(0,C.useState)(0),[n,r]=(0,C.useState)(!1);return(0,y.jsxs)(_,{className:`w-full max-w-sm`,children:[(0,y.jsx)(p,{children:(0,y.jsx)(g,{children:`Rate your order`})}),(0,y.jsxs)(h,{className:`flex flex-col gap-3`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,y.jsx)(f,{id:`review-score-label`,children:`Overall`}),(0,y.jsx)(i,{"aria-labelledby":`review-score-label`,value:e,onValueChange:t,allowHalf:!0,name:`score`})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,y.jsx)(f,{htmlFor:`review-text`,children:`Review`}),(0,y.jsx)(s,{id:`review-text`,placeholder:`What did you like?`})]})]}),(0,y.jsxs)(m,{className:`justify-between`,children:[(0,y.jsx)(`span`,{className:`text-[13px] text-muted-foreground`,children:n?`Thanks for the review`:e>0?`${e} of 5`:`Not rated yet`}),(0,y.jsx)(d,{size:`sm`,disabled:e===0,onClick:()=>r(!0),children:`Send`})]})]})}var T=e({RatingCustomIcon:()=>E});function E(){return(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,y.jsx)(i,{"aria-label":`Love it`,icon:(0,y.jsx)(a,{}),defaultValue:3,clearable:!0,className:`[&_[data-slot=rating-fill]]:text-rose-500`}),(0,y.jsx)(i,{"aria-label":`Score out of 10`,max:10,size:`sm`,defaultValue:7,getItemLabel:e=>`${e} of 10`}),(0,y.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:"The hearts are `clearable`: press the chosen heart again to clear it."})]})}var D=e({RatingDefault:()=>O});function O(){let[e,t]=(0,C.useState)(3);return(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,y.jsx)(i,{"aria-label":`Uncontrolled rating`,defaultValue:2}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(i,{"aria-label":`Controlled rating`,value:e,onValueChange:t}),(0,y.jsxs)(`span`,{className:`text-[13px] text-muted-foreground tabular-nums`,children:[e,` / 5`]})]})]})}var k=e({RatingHalfAndStates:()=>A});function A(){return(0,y.jsxs)(`div`,{className:`grid grid-cols-[auto_auto] items-center gap-x-4 gap-y-3 text-[13px]`,children:[(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`allowHalf`}),(0,y.jsx)(i,{"aria-label":`Half stars`,allowHalf:!0,defaultValue:3.5}),(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`readOnly`}),(0,y.jsx)(i,{"aria-label":`Average 4.5 of 5`,allowHalf:!0,readOnly:!0,value:4.5}),(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`disabled`}),(0,y.jsx)(i,{"aria-label":`Disabled rating`,disabled:!0,defaultValue:2}),(0,y.jsx)(`span`,{className:`text-muted-foreground`,children:`sm / lg`}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(i,{"aria-label":`Small`,size:`sm`,defaultValue:4}),(0,y.jsx)(i,{"aria-label":`Large`,size:`lg`,defaultValue:4})]})]})}var j=`import { StarIcon } from "lucide-react"
import { Rating } from "@kitora/primitives/react"

const MAX = 5

/**
 * A star rating built from the primitives' \`Rating.Root\` and one \`Rating.Item\` per star (a radio group: one checked star, one tab stop,
 * arrows, Home / End). Each star stacks an outline icon and a filled copy clipped by the item's \`data-fill\` (\`full\`, \`half\`, \`empty\`), so
 * a half value and the pointer's preview fill too. \`name\` submits the value.
 */
export function RatingBuildYourOwn({
  value,
  defaultValue = value === undefined ? 3 : undefined,
  onValueChange,
  allowHalf,
  clearable,
  readOnly,
  name,
}: {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  allowHalf?: boolean
  clearable?: boolean
  readOnly?: boolean
  name?: string
}) {
  return (
    <Rating.Root
      aria-label="Order rating"
      max={MAX}
      value={value}
      defaultValue={defaultValue}
      onValueChange={(next) => onValueChange?.(next)}
      allowHalf={allowHalf}
      clearable={clearable}
      readOnly={readOnly}
      name={name}
      className="inline-flex items-center gap-0.5"
    >
      {Array.from({ length: MAX }, (_, i) => (
        <Rating.Item key={i + 1} index={i + 1} className="group/star relative inline-flex rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-5">
          <span aria-hidden="true" className="inline-flex text-muted-foreground/45">
            <StarIcon />
          </span>
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 start-0 w-0 overflow-hidden text-primary group-data-[fill=full]/star:w-full group-data-[fill=half]/star:w-1/2 [&_svg]:fill-current">
            <StarIcon />
          </span>
        </Rating.Item>
      ))}
    </Rating.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>l(()=>import(`./build-your-own-xrg3Byg_.js`),[]));var M=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Label } from "@kitora/ui/label"
import { Rating } from "@kitora/ui/rating"
import { Textarea } from "@kitora/ui/textarea"

export function RatingComposeReviewForm() {
  const [score, setScore] = useState(0)
  const [sent, setSent] = useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Rate your order</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <Label id="review-score-label">Overall</Label>
          <Rating aria-labelledby="review-score-label" value={score} onValueChange={setScore} allowHalf name="score" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="review-text">Review</Label>
          <Textarea id="review-text" placeholder="What did you like?" />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-[13px] text-muted-foreground">{sent ? "Thanks for the review" : score > 0 ? \`\${score} of 5\` : "Not rated yet"}</span>
        <Button size="sm" disabled={score === 0} onClick={() => setSent(true)}>
          Send
        </Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>l(()=>import(`./compose-V6WSkqV9.js`),[]));var N=`import { Heart } from "lucide-react"
import { Rating } from "@kitora/ui/rating"

export function RatingCustomIcon() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Rating aria-label="Love it" icon={<Heart />} defaultValue={3} clearable className="[&_[data-slot=rating-fill]]:text-rose-500" />
      <Rating aria-label="Score out of 10" max={10} size="sm" defaultValue={7} getItemLabel={(v) => \`\${v} of 10\`} />
      <p className="text-[13px] text-muted-foreground">The hearts are \`clearable\`: press the chosen heart again to clear it.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>l(()=>import(`./custom-icon-Bq1S3FGP.js`),[]));var P=`import { useState } from "react"
import { Rating } from "@kitora/ui/rating"

export function RatingDefault() {
  const [value, setValue] = useState(3)

  return (
    <div className="flex flex-col items-center gap-4">
      <Rating aria-label="Uncontrolled rating" defaultValue={2} />
      <div className="flex items-center gap-3">
        <Rating aria-label="Controlled rating" value={value} onValueChange={setValue} />
        <span className="text-[13px] text-muted-foreground tabular-nums">{value} / 5</span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>l(()=>import(`./default-DJX9ryaU.js`),[]));var F=`import { Rating } from "@kitora/ui/rating"

export function RatingHalfAndStates() {
  return (
    <div className="grid grid-cols-[auto_auto] items-center gap-x-4 gap-y-3 text-[13px]">
      <span className="text-muted-foreground">allowHalf</span>
      <Rating aria-label="Half stars" allowHalf defaultValue={3.5} />
      <span className="text-muted-foreground">readOnly</span>
      <Rating aria-label="Average 4.5 of 5" allowHalf readOnly value={4.5} />
      <span className="text-muted-foreground">disabled</span>
      <Rating aria-label="Disabled rating" disabled defaultValue={2} />
      <span className="text-muted-foreground">sm / lg</span>
      <div className="flex items-center gap-3">
        <Rating aria-label="Small" size="sm" defaultValue={4} />
        <Rating aria-label="Large" size="lg" defaultValue={4} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>l(()=>import(`./half-and-states-DJYG0UvB.js`),[]));var I={"./demos/rating/build-your-own.tsx":v,"./demos/rating/compose.tsx":S,"./demos/rating/custom-icon.tsx":T,"./demos/rating/default.tsx":D,"./demos/rating/half-and-states.tsx":k},L={"./demos/rating/build-your-own.tsx":j,"./demos/rating/compose.tsx":M,"./demos/rating/custom-icon.tsx":N,"./demos/rating/default.tsx":P,"./demos/rating/half-and-states.tsx":F};export{I as modules,L as sources};