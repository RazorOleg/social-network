"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[411],{411:(s,e,o)=>{o.r(e),o.d(e,{default:()=>N});var r=o(791),n=o(420);const t="User_container__XitVF",l="User_photo__9MZyN",i="User_infoContainer__cBeJE",a="User_info__71tsc";var c=o(915),u=o(87),d=o(184);const g=s=>{let{user:e,...o}=s;return(0,d.jsxs)("div",{className:t,children:[(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)(u.OL,{to:"/profile/"+e.id,children:(0,d.jsx)("img",{src:null!=e.photos.small?e.photos.small:c,alt:""})}),(0,d.jsx)("div",{children:e.followed?(0,d.jsx)("button",{disabled:o.followingInProgress.some((s=>s===e.id)),onClick:()=>{o.unFollowUser(e.id)},children:"Unfollow"}):(0,d.jsx)("button",{disabled:o.followingInProgress.some((s=>s===e.id)),onClick:()=>{o.followUser(e.id)},children:"Follow"})})]}),(0,d.jsxs)("div",{className:i,children:[(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("div",{children:e.name}),(0,d.jsx)("div",{children:e.status})]}),(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("div",{children:"City"}),(0,d.jsx)("div",{children:"Country"})]})]})]})},h="Paginator_selected__Ep0-k",p="Paginator_notSelected__O2CfG",P=s=>{let{totalItemsCount:e,sizePage:o,currentPage:n,onPageChanged:t,portionSize:l=10}=s;const[i,a]=(0,r.useState)(1),c=Math.ceil(e/o),u=[];for(let r=1;r<=c;r++)u.push(r);const g=Math.ceil(c/l),P=(i-1)*l+1,x=i*l;return(0,r.useEffect)((()=>{a(Math.ceil(n/l))}),[n,l]),(0,d.jsxs)("div",{children:[i>1&&(0,d.jsx)("button",{onClick:()=>{a(i-1)},children:"Prev"}),u.filter((s=>s>=P&&s<=x)).map(((s,e)=>(0,d.jsxs)("span",{className:n===s?h:p,onClick:()=>{t(s,o)},children:[" ",s," "]},e))),g>i&&(0,d.jsx)("button",{onClick:()=>{a(i+1)},children:"Next"})]})},x=s=>{let{usersCount:e,sizePage:o,currentPage:r,onPageChanged:n,...t}=s,l=t.users.map((s=>(0,d.jsx)(g,{user:s,unFollowUser:t.unFollowUser,followUser:t.followUser,followingInProgress:t.followingInProgress},s.id)));return(0,d.jsxs)("div",{children:[(0,d.jsx)(P,{totalItemsCount:e,sizePage:o,currentPage:r,onPageChanged:n}),(0,d.jsx)("div",{children:l})]})};var f=o(189),j=o(543),w=o(154),C=o(927);const m=(0,o(553).P1)([s=>s.usersPage.users],(s=>s.filter((s=>!0)))),_=s=>s.usersPage.currentPage,v=s=>s.usersPage.totalUsersCount,U=s=>s.usersPage.sizePage,F=s=>s.usersPage.isFetching,k=s=>s.usersPage.followingInProgress;class I extends r.Component{componentDidMount(){const{currentPage:s,sizePage:e}=this.props;this.props.requestUsers(s,e)}render(){return(0,d.jsxs)(d.Fragment,{children:[" ",this.props.isFetching&&(0,d.jsx)(f.Z,{}),(0,d.jsx)(x,{users:this.props.users,currentPage:this.props.currentPage,usersCount:this.props.usersCount,sizePage:this.props.sizePage,followingInProgress:this.props.followingInProgress,followUser:this.props.follow,unFollowUser:this.props.unFollow,onPageChanged:this.props.onPageChanged})]})}}const z=(0,n.$j)((s=>({users:m(s),currentPage:_(s),usersCount:v(s),sizePage:U(s),isFetching:F(s),followingInProgress:k(s)})),{follow:j.ZN,unFollow:j.IJ,onPageChanged:j.we,requestUsers:j.D7}),N=(0,w.qC)(z,C.D)(I)},927:(s,e,o)=>{o.d(e,{D:()=>i});o(791);var r=o(420),n=o(689),t=o(184);const l=s=>({isAuth:s.auth.isAuth}),i=s=>(0,r.$j)(l)((e=>e.isAuth?(0,t.jsx)(s,{...e}):(0,t.jsx)(n.Fg,{to:"/login"})))},915:(s,e,o)=>{s.exports=o.p+"static/media/user.3c70c6dd4c2f7d7e6286.png"}}]);
//# sourceMappingURL=411.8b4e0768.chunk.js.map