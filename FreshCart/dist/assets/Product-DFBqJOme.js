import{r,C as d,W as x,j as e,d as h,B as a}from"./index-D1iCoGWQ.js";function g({product:s}){const{addToCart:c}=r.useContext(d),{addToWichlist:l}=r.useContext(x),i=r.useRef();async function o(n){const t=await c(n);t.status==="success"?a.success(t.message,{theme:"dark"}):a.error("Something went wrong",{theme:"dark"})}async function m(n){const t=await l(n);t.status==="success"?(i.current.className="fa-solid fa-heart",a.success(t.message,{theme:"dark"})):a.error("Something went wrong",{theme:"dark"})}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-1/6 px-4 mb-4 product",children:[e.jsx("button",{onClick:()=>m(s.id),type:"button",className:"btn btn-green",children:e.jsx("i",{ref:i,className:"fa-regular text-xl fa-heart"})}),e.jsxs(h,{to:`/product-details/${s.category.name}/${s.id}`,children:[e.jsx("img",{className:"mb-2",src:s.imageCover,alt:s.title}),e.jsx("span",{className:"mb-2 text-green-500",children:s.category.name}),e.jsx("h2",{className:"mb-2 text-lg font-semibold truncate",children:s.title}),e.jsxs("div",{className:"flex justify-between text-gray-500 font-light",children:[e.jsxs("span",{children:[s.price,"EGP"]}),e.jsxs("div",{children:[e.jsx("i",{className:"fas fa-star text-yellow-300"}),e.jsx("span",{children:s.ratingsAverage})]})]})]}),e.jsx("button",{onClick:()=>o(s.id),className:"btn btn-green w-full mt-3",children:"Add To Cart"})]},s.id)})}export{g as P};