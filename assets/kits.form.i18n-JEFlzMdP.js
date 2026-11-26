import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n,ni as r}from"./index-9y5uwRd3.js";import{d as i}from"./field-options-BxYA8-No.js";import{$ as a,W as o,et as s,t as c}from"./messages-BpgLhfTN.js";import{A as l,c as u,h as d,t as f}from"./field-config-62hz5rv-.js";import{a as p}from"./fields-3rMiSNLY.js";import{i as m,r as h,t as g}from"./composites-BLtDqbKQ.js";import{n as _}from"./fields-extra-DjnCI2Jb.js";import{t as v}from"./date-DkHaI8Bm.js";import{t as y}from"./stepper-lIjlvXQB.js";import{t as b}from"./field-array-B0BhXTG7.js";import{t as x}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";import{o as S}from"./demo-fixtures-DpfwlbH0.js";var C=n(),w={name:``,code:`a`,delivery:null,items:[{sku:``,qty:1}]};function T({locale:e}){return(0,C.jsxs)(u,{form:l({defaultValues:w,messages:s(a[e])}),onSubmit:S,children:[(0,C.jsx)(`div`,{className:`text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:e}),(0,C.jsx)(p,{name:`name`,label:`Name`,required:!0}),(0,C.jsx)(p,{name:`code`,label:`Code`,minLength:3,maxLength:8,counter:!0}),(0,C.jsx)(v,{name:`delivery`,label:`Delivery`}),(0,C.jsxs)(b,{name:`items`,label:`Items`,rowLabel:e===`de`?`Artikel`:`Item`,min:1,max:3,layout:`table`,children:[(0,C.jsx)(p,{name:`.sku`,label:`SKU`}),(0,C.jsx)(y,{name:`.qty`,label:`Qty`}),(0,C.jsx)(b.RowActions,{move:!0,remove:!0})]}),(0,C.jsx)(b.Add,{to:`items`}),(0,C.jsx)(u.Submit,{className:r({size:`sm`,className:`w-fit`})})]})}function E(){return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,C.jsx)(T,{locale:`en`}),(0,C.jsx)(T,{locale:`de`})]})}var D=`import { buttonVariants } from "@kitora/ui/button"
import { createTranslator, MESSAGE_BUNDLES, type BuiltinLocale } from "@kitora/form/core"
import { DateField, FieldArray, NumberStepperField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { mockSave } from "@/kit/form/demo-fixtures"

type Order = { name: string; code: string; delivery: string | null; items: Array<{ sku: string; qty: number }> }

const defaultValues: Order = { name: "", code: "a", delivery: null, items: [{ sku: "", qty: 1 }] }

/** One order form; every text the engine adds comes from the store's catalog (mockSave: replace with your API, POST /orders). */
function LocalizedOrder({ locale }: { locale: BuiltinLocale }) {
  // one translator per form: validation issues, Add/Remove, row labels, Submit, pickers
  const form = useForm<Order>({ defaultValues, messages: createTranslator(MESSAGE_BUNDLES[locale]) })
  return (
    <Form form={form} onSubmit={mockSave}>
      <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{locale}</div>
      <TextField name="name" label="Name" required />
      <TextField name="code" label="Code" minLength={3} maxLength={8} counter />
      <DateField name="delivery" label="Delivery" />
      {/* your own labels stay as written: only the engine's texts follow the locale */}
      <FieldArray name="items" label="Items" rowLabel={locale === "de" ? "Artikel" : "Item"} min={1} max={3} layout="table">
        <TextField name=".sku" label="SKU" />
        <NumberStepperField name=".qty" label="Qty" />
        <FieldArray.RowActions move remove />
      </FieldArray>
      <FieldArray.Add to="items" />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} />
    </Form>
  )
}

export function OrderForm() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <LocalizedOrder locale="en" />
      <LocalizedOrder locale="de" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>t(()=>import(`./locale-CmoOVVvG.js`),[]));var O={name:``};function k(){return(0,C.jsxs)(u,{form:l({defaultValues:O}),onSubmit:S,className:`max-w-sm items-start`,children:[(0,C.jsx)(p,{name:`name`,label:`Name`,required:!0}),(0,C.jsx)(u.Submit,{className:r({size:`sm`,className:`w-fit`})})]})}function A(){return(0,C.jsx)(c,{translator:s(a.de),messages:{"form.submit":`Speichern`,required:`Pflichtfeld`},children:(0,C.jsx)(k,{})})}var j=`import { buttonVariants } from "@kitora/ui/button"
import { createTranslator, MESSAGE_BUNDLES } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, MessagesProvider, useForm } from "@kitora/form/react"
import { mockSave } from "@/kit/form/demo-fixtures"

type Profile = { name: string }

const defaultValues: Profile = { name: "" }

function ProfileForm() {
  // no messages here: useForm takes the provider's locale, so core issues match the chrome
  const form = useForm<Profile>({ defaultValues })
  return (
    <Form form={form} onSubmit={mockSave} className="max-w-sm items-start">
      <TextField name="name" label="Name" required />
      <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} />
    </Form>
  )
}

export function App() {
  return (
    // the app's locale for every form below, and single keys reworded (keys: EN_MESSAGES)
    <MessagesProvider translator={createTranslator(MESSAGE_BUNDLES.de)} messages={{ "form.submit": "Speichern", required: "Pflichtfeld" }}>
      <ProfileForm />
    </MessagesProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>t(()=>import(`./provider-q_1c3adW.js`),[]));var M={name:``,email:``,phone:{country:`+966`,number:``},amount:{amount:1250,currency:`SAR`},iban:`SA03 8000 0000 6080 1016 7519`,website:``,address:{line1:``,line2:``,city:`الرياض`,state:``,postalCode:``,country:`SA`},copies:1,code:``},N={required:`هذا الحقل مطلوب`,"rule.email":`أدخل بريدًا إلكترونيًا صالحًا`,"phone.label":`الهاتف`,"phone.number":`الرقم`,"money.amount":`المبلغ`,"money.currency":`العملة`,"address.street":`الشارع ورقم المبنى`,"address.line2":`الحي`,"address.city":`المدينة`,"address.postalCode":`الرمز البريدي`,"address.country":`الدولة`},P=[{label:`🇸🇦 +966`,value:`+966`},{label:`🇦🇪 +971`,value:`+971`}],F=[{label:`ر.س`,value:`SAR`},{label:`د.إ`,value:`AED`}],I=[{label:`السعودية`,value:`SA`},{label:`الإمارات`,value:`AE`}];function L({form:e}){let t=d(e,e=>e.serialize(),o);return(0,C.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,dir:`ltr`,children:[(0,C.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,C.jsx)(`pre`,{tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}function R(){let e=l({defaultValues:M});return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]`,children:[(0,C.jsxs)(u,{form:e,onSubmit:S,children:[(0,C.jsxs)(i,{cols:{base:1,md:2},children:[(0,C.jsx)(p,{name:`name`,label:`الاسم الكامل`,required:!0}),(0,C.jsx)(p,{name:`email`,label:`البريد الإلكتروني`,type:`email`,required:!0})]}),(0,C.jsx)(m,{name:`phone`,dialCodes:P}),(0,C.jsx)(h,{name:`amount`,label:`المبلغ`,currencies:F}),(0,C.jsxs)(i,{cols:{base:1,md:2},children:[(0,C.jsx)(p,{name:`iban`,label:`رقم الآيبان`,dir:`ltr`}),(0,C.jsx)(p,{name:`website`,label:`الموقع`,type:`url`,placeholder:`https://`})]}),(0,C.jsx)(g,{name:`address`,label:`العنوان الوطني`,locale:`SA`,countries:I}),(0,C.jsxs)(i,{cols:{base:1,md:2},children:[(0,C.jsx)(y,{name:`copies`,label:`عدد النسخ`,min:1,max:5}),(0,C.jsx)(_,{name:`code`,label:`رمز التحقق`,length:4})]}),(0,C.jsx)(u.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`تحويل`})]}),(0,C.jsx)(L,{form:e})]})}function z(){return(0,C.jsx)(f,{dir:`rtl`,messages:N,children:(0,C.jsx)(`div`,{lang:`ar`,children:(0,C.jsx)(R,{})})})}var B=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, type MessageCatalog } from "@kitora/form/core"
import { AddressField, FieldConfigProvider, FormGrid, MoneyField, OTPField, PhoneField, NumberStepperField, TextField } from "@kitora/form/fields"
import { Form, useForm, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { mockSave } from "@/kit/form/demo-fixtures"

type Transfer = {
  name: string
  email: string
  phone: { country: string; number: string }
  amount: { amount: number | undefined; currency: string }
  iban: string
  website: string
  address: { line1: string; line2: string; city: string; state: string; postalCode: string; country: string }
  copies: number
  code: string
}

const defaultValues: Transfer = {
  name: "",
  email: "",
  phone: { country: "+966", number: "" },
  amount: { amount: 1250, currency: "SAR" },
  iban: "SA03 8000 0000 6080 1016 7519",
  website: "",
  address: { line1: "", line2: "", city: "الرياض", state: "", postalCode: "", country: "SA" },
  copies: 1,
  code: "",
}
// the engine's own texts this form shows, in Arabic (a full Arabic catalog would define every key)
const ar: Partial<MessageCatalog> = {
  required: "هذا الحقل مطلوب",
  "rule.email": "أدخل بريدًا إلكترونيًا صالحًا",
  "phone.label": "الهاتف",
  "phone.number": "الرقم",
  "money.amount": "المبلغ",
  "money.currency": "العملة",
  "address.street": "الشارع ورقم المبنى",
  "address.line2": "الحي",
  "address.city": "المدينة",
  "address.postalCode": "الرمز البريدي",
  "address.country": "الدولة",
}
const dialCodes = [{ label: "🇸🇦 +966", value: "+966" }, { label: "🇦🇪 +971", value: "+971" }]
const currencies = [{ label: "ر.س", value: "SAR" }, { label: "د.إ", value: "AED" }]
const countries = [{ label: "السعودية", value: "SA" }, { label: "الإمارات", value: "AE" }]

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card" dir="ltr">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}

// dir="rtl": every field uses logical spacing, so labels, adornments and composites mirror.
// Values that are left-to-right in any language stay LTR: email/url/tel/number by default, dir="ltr" for an IBAN.
// mockSave is the gallery's stand-in: replace it with your API (POST /transfers)
function TransferForm() {
  const form = useForm<Transfer>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
      <Form form={form} onSubmit={mockSave}>
        <FormGrid cols={{ base: 1, md: 2 }}>
          <TextField name="name" label="الاسم الكامل" required />
          <TextField name="email" label="البريد الإلكتروني" type="email" required />
        </FormGrid>
        <PhoneField name="phone" dialCodes={dialCodes} />
        <MoneyField name="amount" label="المبلغ" currencies={currencies} />
        <FormGrid cols={{ base: 1, md: 2 }}>
          <TextField name="iban" label="رقم الآيبان" dir="ltr" />
          <TextField name="website" label="الموقع" type="url" placeholder="https://" />
        </FormGrid>
        <AddressField name="address" label="العنوان الوطني" locale="SA" countries={countries} />
        <FormGrid cols={{ base: 1, md: 2 }}>
          <NumberStepperField name="copies" label="عدد النسخ" min={1} max={5} />
          <OTPField name="code" label="رمز التحقق" length={4} />
        </FormGrid>
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>تحويل</Form.Submit>
      </Form>
      <Payload form={form} />
    </div>
  )
}

export function RtlTransfer() {
  return (
    <FieldConfigProvider dir="rtl" messages={ar}>
      <div lang="ar">
        <TransferForm />
      </div>
    </FieldConfigProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>t(()=>import(`./rtl-CSNLagUH.js`),[]));function V(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(e,{title:`Internationalization`,children:[`Every text the engine writes (validation issues, row actions and labels, picker titles, counters, save statuses, Submit) comes from one message catalog with `,(0,C.jsx)(`code`,{children:`{n}`}),` params and plural forms from `,(0,C.jsx)(`code`,{children:`Intl.PluralRules`}),`. Day and country names come from `,(0,C.jsx)(`code`,{children:`Intl`}),` itself. A test fails when a hard-coded English string comes back.`]}),(0,C.jsx)(x,{n:1,title:`The same form in English and German`,blurb:`Submit both empty, add rows up to the limit, type in Code: the issues, the disabled-button reasons, the row labels and the counter all follow the form's locale. Your own labels stay as you wrote them.`,code:D,children:(0,C.jsx)(E,{})}),(0,C.jsx)(x,{n:2,title:`An app-wide locale with reworded keys`,blurb:`MessagesProvider sets the locale for every form below and overrides single keys; useForm hands that locale to its store, so the required issue is German too.`,code:j,children:(0,C.jsx)(A,{})}),(0,C.jsx)(x,{n:3,title:`Right-to-left (Arabic)`,blurb:`dir="rtl" on FieldConfigProvider: logical spacing mirrors every field — labels, the phone's dial code and the money's currency move to the other side, the address follows the Saudi order. Emails, URLs, phone numbers, amounts, the IBAN and the code stay left-to-right (bidi-isolated), so their digits never reorder. Submit empty to see the Arabic messages.`,code:B,children:(0,C.jsx)(z,{})})]})}export{V as component};