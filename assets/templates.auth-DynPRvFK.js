import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n,n as r,t as i}from"./tabs-oUW2hCtt.js";import{t as a}from"./arrow-right-DCctyhz9.js";import{t as o}from"./github-DAtUYhAk.js";import{t as s}from"./sparkles-BCjOdQum.js";import{t as c}from"./input-C8M4VLUF.js";import{Bc as l,Cc as u,Ic as d,ti as f}from"./index-q72zUtm9.js";import{t as p}from"./label-DjxTNoON.js";import{t as m}from"./checkbox-UD-4dpOy.js";import{t as h}from"./separator-DbMx24vO.js";import{t as g}from"./otp-CZBYGVnC.js";import{t as _}from"./password-input-BcrYg2z2.js";import{t as v}from"./template-page-ImOqJCRR.js";var y=e(l(),1),b=d();function x(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`mb-6`,children:[(0,b.jsx)(`h1`,{className:`text-2xl font-semibold tracking-tighter`,children:`Welcome back`}),(0,b.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:`Sign in to your Kitora workspace.`})]}),(0,b.jsxs)(`div`,{className:`grid gap-2`,children:[(0,b.jsxs)(f,{variant:`outline`,className:`w-full`,children:[(0,b.jsx)(o,{}),`Continue with GitHub`]}),(0,b.jsx)(f,{variant:`outline`,className:`w-full`,children:`Continue with Google`})]}),(0,b.jsxs)(`div`,{className:`my-5 flex items-center gap-3 text-xs text-muted-foreground`,children:[(0,b.jsx)(h,{className:`flex-1`}),(0,b.jsx)(`span`,{children:`or`}),(0,b.jsx)(h,{className:`flex-1`})]}),(0,b.jsxs)(`form`,{className:`grid gap-4`,onSubmit:e=>e.preventDefault(),children:[(0,b.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,b.jsx)(p,{htmlFor:`signin-email`,children:`Email`}),(0,b.jsx)(c,{id:`signin-email`,type:`email`,placeholder:`you@example.com`})]}),(0,b.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,b.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,b.jsx)(p,{htmlFor:`signin-pw`,children:`Password`}),(0,b.jsx)(`button`,{type:`button`,className:`text-xs text-primary hover:underline`,children:`Forgot?`})]}),(0,b.jsx)(_,{id:`signin-pw`,placeholder:`••••••••`})]}),(0,b.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsx)(m,{id:`remember`,defaultChecked:!0}),(0,b.jsx)(p,{htmlFor:`remember`,className:`text-sm font-normal text-muted-foreground`,children:`Stay signed in for 30 days`})]}),(0,b.jsxs)(f,{type:`submit`,className:`w-full`,children:[`Sign in`,(0,b.jsx)(a,{})]})]}),(0,b.jsxs)(`p`,{className:`mt-6 text-center text-xs text-muted-foreground`,children:[`New here?`,` `,(0,b.jsx)(`button`,{type:`button`,className:`text-foreground hover:underline`,children:`Create an account`})]})]})}function S(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`mb-6`,children:[(0,b.jsx)(`h1`,{className:`text-2xl font-semibold tracking-tighter`,children:`Get started`}),(0,b.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:`Create a free workspace. No credit card.`})]}),(0,b.jsxs)(`form`,{className:`grid gap-4`,onSubmit:e=>e.preventDefault(),children:[(0,b.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,b.jsx)(p,{htmlFor:`su-name`,children:`Full name`}),(0,b.jsx)(c,{id:`su-name`,placeholder:`Ada Lovelace`})]}),(0,b.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,b.jsx)(p,{htmlFor:`su-email`,children:`Work email`}),(0,b.jsx)(c,{id:`su-email`,type:`email`,placeholder:`ada@example.com`})]}),(0,b.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,b.jsx)(p,{htmlFor:`su-pw`,children:`Password`}),(0,b.jsx)(_,{id:`su-pw`,placeholder:`At least 8 chars`,showStrength:!0})]}),(0,b.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,b.jsx)(m,{id:`terms`,className:`mt-0.5`}),(0,b.jsxs)(p,{htmlFor:`terms`,className:`text-xs font-normal leading-relaxed text-muted-foreground`,children:[`I agree to the`,` `,(0,b.jsx)(`button`,{type:`button`,className:`text-foreground hover:underline`,children:`terms`}),` `,`and`,` `,(0,b.jsx)(`button`,{type:`button`,className:`text-foreground hover:underline`,children:`privacy policy`}),`.`]})]}),(0,b.jsx)(f,{type:`submit`,className:`w-full`,children:`Create workspace`})]})]})}function C(){let[e,t]=(0,y.useState)(``);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`mb-6`,children:[(0,b.jsx)(`h1`,{className:`text-2xl font-semibold tracking-tighter`,children:`Verify it's you`}),(0,b.jsxs)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:[`We sent a 6-digit code to`,` `,(0,b.jsx)(`span`,{className:`font-medium text-foreground`,children:`alex@example.com`}),`.`]})]}),(0,b.jsxs)(`form`,{className:`grid gap-5`,onSubmit:e=>e.preventDefault(),children:[(0,b.jsxs)(`div`,{className:`grid gap-2`,children:[(0,b.jsx)(p,{children:`Verification code`}),(0,b.jsx)(g,{label:`Verification code`,groupSize:null,value:e,onValueChange:t})]}),(0,b.jsx)(f,{type:`submit`,className:`w-full`,disabled:e.length!==6,children:`Verify and continue`}),(0,b.jsxs)(`p`,{className:`text-center text-xs text-muted-foreground`,children:[`Didn't get it?`,` `,(0,b.jsx)(`button`,{type:`button`,className:`text-foreground hover:underline`,children:`Resend`}),` `,`·`,` `,(0,b.jsx)(`button`,{type:`button`,className:`text-foreground hover:underline`,children:`Use authenticator app`})]})]})]})}function w(){return(0,b.jsxs)(`div`,{className:`grid min-h-[calc(100dvh-3.5rem)] lg:grid-cols-2`,children:[(0,b.jsx)(`div`,{className:`flex items-center justify-center px-6 py-12`,children:(0,b.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,b.jsxs)(i,{defaultValue:`signin`,children:[(0,b.jsxs)(n,{className:`mb-6 w-full`,children:[(0,b.jsx)(t,{value:`signin`,className:`flex-1`,children:`Sign in`}),(0,b.jsx)(t,{value:`signup`,className:`flex-1`,children:`Create account`}),(0,b.jsx)(t,{value:`verify`,className:`flex-1`,children:`Verify`})]}),(0,b.jsx)(r,{value:`signin`,children:(0,b.jsx)(x,{})}),(0,b.jsx)(r,{value:`signup`,children:(0,b.jsx)(S,{})}),(0,b.jsx)(r,{value:`verify`,children:(0,b.jsx)(C,{})})]})})}),(0,b.jsxs)(`div`,{className:`relative hidden overflow-hidden border-l border-border bg-surface-1 lg:block`,children:[(0,b.jsx)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute inset-0 bg-grid mask-radial opacity-60`}),(0,b.jsx)(`div`,{className:`relative grid h-full place-items-center p-12`,children:(0,b.jsxs)(`blockquote`,{className:`max-w-md`,children:[(0,b.jsx)(s,{className:`mb-4 size-6 text-primary`}),(0,b.jsx)(`p`,{className:`text-balance text-2xl font-semibold tracking-tighter leading-snug`,children:`"Kitora cut our build time in half. Every component felt shipped, not generated."`}),(0,b.jsx)(`footer`,{className:`mt-5 text-sm text-muted-foreground`,children:`— Founding engineer, fictional unicorn`})]})})]})]})}var T=`import { Sparkles } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@kitora/ui/tabs'
import { SignInForm, SignUpForm, VerifyForm } from './forms'

/** A sign-in page: sign in, create an account and verify a code, in tabs beside a quote panel. */
export function AuthTemplate() {
  return (
    <div className="grid min-h-[calc(100dvh-3.5rem)] lg:grid-cols-2">
      {/* Form */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <Tabs defaultValue="signin">
            <TabsList className="mb-6 w-full">
              <TabsTrigger value="signin" className="flex-1">
                Sign in
              </TabsTrigger>
              <TabsTrigger value="signup" className="flex-1">
                Create account
              </TabsTrigger>
              <TabsTrigger value="verify" className="flex-1">
                Verify
              </TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <SignInForm />
            </TabsContent>
            <TabsContent value="signup">
              <SignUpForm />
            </TabsContent>
            <TabsContent value="verify">
              <VerifyForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Visual */}
      <div className="relative hidden overflow-hidden border-l border-border bg-surface-1 lg:block">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-60"
        />
        <div className="relative grid h-full place-items-center p-12">
          <blockquote className="max-w-md">
            <Sparkles className="mb-4 size-6 text-primary" />
            <p className="text-balance text-2xl font-semibold tracking-tighter leading-snug">
              "Kitora cut our build time in half. Every component felt
              shipped, not generated."
            </p>
            <footer className="mt-5 text-sm text-muted-foreground">
              — Founding engineer, fictional unicorn
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>u(()=>import(`./page-Bh_VjeTz.js`),[]));var E=`import { ArrowRight, Github } from 'lucide-react'
import { useState } from 'react'
import { OtpField } from '@kitora/auth/ui'
import { Button } from '@kitora/ui/button'
import { Checkbox } from '@kitora/ui/checkbox'
import { Input } from '@kitora/ui/input'
import { Label } from '@kitora/ui/label'
import { PasswordInput } from '@kitora/ui/password-input'
import { Separator } from '@kitora/ui/separator'

// The secondary actions on these mock screens (forgot, create account, terms, resend) lead nowhere yet,
// so they are buttons styled as links rather than \`href="#"\` links.
export function SignInForm() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tighter">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Sign in to your Kitora workspace.
        </p>
      </div>

      <div className="grid gap-2">
        <Button variant="outline" className="w-full">
          <Github />
          Continue with GitHub
        </Button>
        <Button variant="outline" className="w-full">
          Continue with Google
        </Button>
      </div>

      <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
        <Separator className="flex-1" />
        <span>or</span>
        <Separator className="flex-1" />
      </div>

      <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-1.5">
          <Label htmlFor="signin-email">Email</Label>
          <Input id="signin-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="signin-pw">Password</Label>
            <button type="button" className="text-xs text-primary hover:underline">
              Forgot?
            </button>
          </div>
          <PasswordInput id="signin-pw" placeholder="••••••••" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" defaultChecked />
          <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
            Stay signed in for 30 days
          </Label>
        </div>
        <Button type="submit" className="w-full">
          Sign in
          <ArrowRight />
        </Button>
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        New here?{' '}
        <button type="button" className="text-foreground hover:underline">
          Create an account
        </button>
      </p>
    </>
  )
}

export function SignUpForm() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tighter">Get started</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Create a free workspace. No credit card.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-1.5">
          <Label htmlFor="su-name">Full name</Label>
          <Input id="su-name" placeholder="Ada Lovelace" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="su-email">Work email</Label>
          <Input id="su-email" type="email" placeholder="ada@example.com" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="su-pw">Password</Label>
          <PasswordInput id="su-pw" placeholder="At least 8 chars" showStrength />
        </div>
        <div className="flex items-start gap-2">
          <Checkbox id="terms" className="mt-0.5" />
          <Label htmlFor="terms" className="text-xs font-normal leading-relaxed text-muted-foreground">
            I agree to the{' '}
            <button type="button" className="text-foreground hover:underline">
              terms
            </button>{' '}
            and{' '}
            <button type="button" className="text-foreground hover:underline">
              privacy policy
            </button>
            .
          </Label>
        </div>
        <Button type="submit" className="w-full">
          Create workspace
        </Button>
      </form>
    </>
  )
}

export function VerifyForm() {
  const [code, setCode] = useState('')
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tighter">Verify it's you</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          We sent a 6-digit code to{' '}
          <span className="font-medium text-foreground">alex@example.com</span>.
        </p>
      </div>

      <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-2">
          <Label>Verification code</Label>
          {/* Six single boxes, no separator; \`label\` names the group and each slot for screen readers. */}
          <OtpField label="Verification code" groupSize={null} value={code} onValueChange={setCode} />
        </div>
        <Button type="submit" className="w-full" disabled={code.length !== 6}>
          Verify and continue
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Didn't get it?{' '}
          <button type="button" className="text-foreground hover:underline">
            Resend
          </button>{' '}
          ·{' '}
          <button type="button" className="text-foreground hover:underline">
            Use authenticator app
          </button>
        </p>
      </form>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>u(()=>import(`./forms-DX-Q1oPu.js`),[]));var D=[{name:`page.tsx`,code:T},{name:`forms.tsx`,code:E}];function O(){return(0,b.jsx)(v,{slug:`auth`,files:D,children:(0,b.jsx)(w,{})})}export{O as component};