"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[546],{546:(e,s,t)=>{t.r(s),t.d(s,{default:()=>S});var r=t(791),i=t(420),n=t(689),l=t(959),o=t(927);const a="Profile_container__ev8pU",c="Profile_photoLarge__9AecM";var d=t(189),u=t(184);const x=e=>{let{status:s,updateUserStatus:t}=e;const[i,n]=(0,r.useState)(!1),[l,o]=(0,r.useState)(s);(0,r.useEffect)((()=>{o(s)}),[s]);const a=()=>{n(!i),i&&t(l)};return(0,u.jsxs)("div",{children:[!i&&(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"Status: "}),(0,u.jsx)("span",{onDoubleClick:()=>{a()},children:s})]}),i&&(0,u.jsx)("div",{children:(0,u.jsx)("input",{onChange:e=>{o(e.currentTarget.value)},autoFocus:!0,onBlur:()=>{a()},value:l})})]})};var j=t(915),h=t(705);const m="ProfileDataForm_errorInput__VmDSO",p="ProfileDataForm_errorText__MVPOd",v=e=>{let{profile:s,onSubmit:t,errors:i}=e;const[n,l]=(0,r.useState)(s.lookingForAJob);return(0,u.jsx)("div",{children:(0,u.jsx)(h.J9,{initialValues:s,onSubmit:t,children:(0,u.jsxs)(h.l0,{children:[(0,u.jsx)("div",{children:(0,u.jsx)("button",{type:"submit",children:"save"})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"Full name:"}),(0,u.jsx)(h.gN,{as:"input",name:"fullName",placeholder:"Full name",className:i&&i.fullname?m:""}),i&&i.fullname&&(0,u.jsx)("div",{className:p,children:i.fullname})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"About me:"}),(0,u.jsx)(h.gN,{as:"textarea",name:"aboutMe",placeholder:"About me",className:i&&i.aboutme?m:""}),i&&i.aboutme&&(0,u.jsx)("div",{className:p,children:i.aboutme})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"Looking for a job:"}),(0,u.jsx)(h.gN,{type:"checkbox",name:"lookingForAJob",onClick:()=>{l(!n)}})]}),n&&(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"My professional skills: "}),(0,u.jsx)(h.gN,{as:"textarea",name:"lookingForAJobDescription",placeholder:"My professional skills"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"Contacts:"})," ",Object.keys(s.contacts).map((e=>(0,u.jsxs)("div",{children:[(0,u.jsxs)("b",{children:[e,": "]}),(0,u.jsx)(h.gN,{as:"input",name:"contacts.".concat(e),placeholder:e,className:i&&i[e]?m:""}),i&&i[e]&&(0,u.jsx)("div",{className:p,children:i[e]})]},e)))]})]})})})},b=e=>{let{contactTitle:s,contactValue:t}=e;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("b",{children:[s,": "]}),t]})},g=e=>{let{profile:s,isCurrentUserProfile:t,activateEditMode:r}=e;return(0,u.jsxs)("div",{children:[t&&(0,u.jsx)("div",{children:(0,u.jsx)("button",{onClick:r,children:"edit"})}),(0,u.jsx)("div",{children:(0,u.jsxs)("b",{children:["Full name: ",s.fullName]})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"About me: "}),s.aboutMe]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"Looking for a job:"})," ",s.lookingForAJob?"yes":"no"]}),s.lookingForAJob&&(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"My professional skills:"}),"  ",s.lookingForAJobDescription," "]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"Contacts:"})," ",Object.entries(s.contacts).map((e=>{let[s,t]=e;return(0,u.jsx)(b,{contactTitle:s,contactValue:t},s)}))]})]})},f=e=>{let{profile:s,status:t,updateUserStatus:n,isCurrentUserProfile:o}=e;const h=(0,i.I0)(),[m,p]=(0,r.useState)(!1),[b,f]=(0,r.useState)(null);if(!s)return(0,u.jsx)(d.Z,{});return(0,u.jsxs)("div",{className:a,children:[(0,u.jsx)("img",{src:"https://www.topgear.com/sites/default/files/2022/07/13.jpg",alt:""}),(0,u.jsx)("img",{className:c,src:s.photos.large?s.photos.large:j,alt:""}),o&&(0,u.jsx)("input",{type:"file",onChange:e=>{var s,t;const r=null===(s=e.target)||void 0===s||null===(t=s.files)||void 0===t?void 0:t[0];r&&h((0,l.Ju)(r))}}),(0,u.jsx)("div",{children:(0,u.jsx)(x,{status:t,updateUserStatus:n})}),m?(0,u.jsx)(v,{profile:s,onSubmit:async e=>{h((0,l.Ii)(e,(e=>f(e)),(()=>{p(!1),f(null)})))},errors:b}):(0,u.jsx)(g,{activateEditMode:()=>p(!0),profile:s,isCurrentUserProfile:o})]})},_="Post_item__7qRG4",k=e=>{let{message:s,likesCount:t}=e;return(0,u.jsxs)("div",{className:_,children:[(0,u.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/279px-Dwayne_Johnson_2%2C_2013.jpg",alt:""}),s,(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{children:"like"})," ",t]})]})},N="MyPosts_postsBlock__Nkjpk",w="MyPosts_posts__gsmvq";var A=t(424),C=t(860);const y=r.memo((()=>{const e=(0,i.v9)((e=>e.profilePage.posts)),s=(0,i.I0)(),t=e.map((e=>(0,u.jsx)(k,{message:e.message,likesCount:e.likesCount},e.id)));return(0,u.jsxs)("div",{className:N,children:[(0,u.jsx)("h3",{children:"My posts"}),(0,u.jsx)(A.Z,{onSubmit:e=>{s(C.ef.addPost(e.newText)),e.newText=""},maxlength:50}),(0,u.jsx)("div",{className:w,children:t})]})})),S=(0,o.D)((()=>{const{userId:e}=(0,n.UO)(),s=(0,i.I0)(),t=(0,i.v9)((e=>e.auth.id)),o=(0,i.v9)((e=>e.profilePage.profile)),a=(0,i.v9)((e=>e.profilePage.status));return(0,r.useEffect)((()=>{let r=null;r=e?Number(e):t,s((0,l.et)(r)),s((0,l.Tq)(r))}),[e,t,s]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(f,{profile:o,status:a,updateUserStatus:l.OL,isCurrentUserProfile:!e}),(0,u.jsx)(y,{})]})}))},424:(e,s,t)=>{t.d(s,{Z:()=>o});t(791);var r=t(705);const i="AddTextForm_errorInput__QAGc9",n="AddTextForm_errorText__ALgRD";var l=t(184);const o=e=>{let{maxlength:s,onSubmit:t}=e,o=(a=s,e=>e?e.length>a?"Max length is ".concat(a," symbols"):void 0:"Required");var a;return(0,l.jsx)(r.J9,{initialValues:{newText:""},onSubmit:t,children:e=>{let{errors:s,touched:t}=e;return(0,l.jsxs)(r.l0,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(r.gN,{component:"textarea",name:"newText",placeholder:"Enter your text",validate:o,className:t.newText&&s.newText?i:""}),s.newText&&t.newText&&(0,l.jsx)("div",{className:n,children:s.newText})]}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{type:"submit",children:"Add"})})]})}})}},927:(e,s,t)=>{t.d(s,{D:()=>o});t(791);var r=t(420),i=t(689),n=t(184);const l=e=>({isAuth:e.auth.isAuth}),o=e=>(0,r.$j)(l)((s=>s.isAuth?(0,n.jsx)(e,{...s}):(0,n.jsx)(i.Fg,{to:"/login"})))},915:(e,s,t)=>{e.exports=t.p+"static/media/user.3c70c6dd4c2f7d7e6286.png"}}]);
//# sourceMappingURL=546.c4712332.chunk.js.map