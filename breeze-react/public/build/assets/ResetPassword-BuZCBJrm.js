import{W as w,r as p,j as s}from"./app-COamctlB.js";import{t as i}from"./translations-BKPM-9oQ.js";import{AuthLayout as y}from"./AuthLayout-B41DCYf3.js";import{i as n}from"./chunk-TC4QW7OA-7veji21g.js";import{b as j}from"./chunk-NXTXE2B3-B4zyMc73.js";import"./Toastify-CmlVchBo.js";import"./brand-CA2sKZ_z.js";const h=({token:t,email:m})=>{const{data:o,setData:l,post:c,processing:f,errors:a,reset:u}=w({token:t,email:m,password:"",password_confirmation:""}),[r,d]=p.useState(!1);p.useEffect(()=>()=>{u("password","password_confirmation")},[]);const x=e=>{e.preventDefault(),c(route("password.store"))};return s.jsx(s.Fragment,{children:s.jsx("div",{className:"w-72 space-y-7",children:s.jsx("form",{onSubmit:x,children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("fieldset",{className:"space-y-1",children:s.jsx(n,{id:"email",type:"email",name:"email",label:"Email",value:o.email,autoComplete:"username",errorMessage:a.email,isInvalid:!!a.email,onValueChange:e=>l("email",e)})}),s.jsx("fieldset",{className:"space-y-1",children:s.jsx(n,{id:"password",type:r?"text":"password",name:"password",label:i("Password"),value:o.password,errorMessage:a.password,isInvalid:!!a.password,onValueChange:e=>l("password",e),endContent:s.jsx("button",{type:"button",onClick:()=>d(!r),children:r?s.jsx("i",{className:"ri-eye-fill ri-lg text-primary"}):s.jsx("i",{className:"ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600"})})})}),s.jsx("fieldset",{className:"space-y-1",children:s.jsx(n,{id:"password",type:r?"text":"password",name:"password_confirmation",label:i("Confirm password"),value:o.password_confirmation,errorMessage:a.password_confirmation,isInvalid:!!a.password,onValueChange:e=>l("password_confirmation",e),endContent:s.jsx("button",{type:"button",onClick:()=>d(!r),children:r?s.jsx("i",{className:"ri-eye-fill ri-lg text-primary"}):s.jsx("i",{className:"ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600"})})})}),s.jsx(j,{color:"primary",fullWidth:!0,type:"submit",spinner:s.jsx("i",{className:"ri-loader-line ri-lg animate-spin"}),isLoading:f,children:i("Reset Password")})]})})})})};h.layout=t=>s.jsx(y,{children:t,pageTitle:i("Reset password")});export{h as default};
