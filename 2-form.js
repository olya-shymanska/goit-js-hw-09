import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let t={email:"",message:""};const r=document.querySelector(".js-feedback-form"),s=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e==null)return;t=e;for(const o in e)r.elements[o].value=e[o]}catch(e){console.log(e)}};s();const m=e=>{const o=e.target,l=o.value,a=o.name;t[a]=l,localStorage.setItem("feedback-form-state",JSON.stringify(t))},n=e=>{e.preventDefault(),Object.values(t).some(l=>l==="")?alert("Please fill all fields"):(console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),t.email="",t.message="")};r.addEventListener("input",m);r.addEventListener("submit",n);
//# sourceMappingURL=2-form.js.map
