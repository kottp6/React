import{r as n,W as j,C as o,j as e,L as g,B as t}from"./index-D1iCoGWQ.js";function N(){const{getWichList:f,deleteItem:m,wishListData:i}=n.useContext(j),{addToCart:x}=n.useContext(o);n.useState(null);const[r,b]=n.useState(!1);async function c(s){(await m(s)).status==="success"?t.success("Product Removed Successfully"):t.error("Product Not Removed")}async function h(s){const a=await x(s);a.status==="success"?t.success(a.message,{theme:"dark"}):t.error("Something went wrong",{theme:"dark"})}return e.jsx(e.Fragment,{children:e.jsx("section",{className:"py-10",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsx("h1",{className:"text-lg",children:"My Favourite"}),r?e.jsx(g,{}):e.jsx("div",{className:"row",children:i==null?void 0:i.map(s=>{var a,l;return e.jsxs("div",{className:"w-1/6 px-4 mb-4 product mx-5",children:[e.jsx("button",{onClick:()=>c(s._id),className:"btn btn-red",children:e.jsx("i",{className:"fa-solid fa-trash"})}),e.jsxs("div",{children:[e.jsx("img",{className:"mb-2",src:s==null?void 0:s.imageCover,alt:s.title}),e.jsx("span",{className:"mb-2 text-green-500",children:(a=s==null?void 0:s.brand)==null?void 0:a.name}),e.jsx("br",{}),e.jsx("span",{className:"mb-2 text-green-500",children:(l=s==null?void 0:s.category)==null?void 0:l.name}),e.jsx("h2",{className:"mb-2 text-lg font-semibold truncate",children:s==null?void 0:s.title}),e.jsxs("div",{className:"flex justify-between text-gray-500 font-light",children:[e.jsxs("span",{children:[s==null?void 0:s.price,"EGP"]}),e.jsxs("div",{children:[e.jsx("i",{className:"fas fa-star text-yellow-300"}),e.jsx("span",{children:s==null?void 0:s.ratingsAverage})]})]})]}),e.jsx("button",{onClick:()=>h(s.id),className:"btn btn-green w-full mt-3",children:"Add To Cart"})]},s.id)})})]})})})}export{N as default};