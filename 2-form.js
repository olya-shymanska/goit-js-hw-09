import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let t={email:"",message:""};const l=document.querySelector(".js-feedback-form"),s=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));t=e;for(const o in e)l.elements[o].value=e[o]}catch(e){console.log(e)}};s();const m=e=>{const o=e.target,a=o.value,r=o.name;t[r]=a,localStorage.setItem("feedback-form-state",JSON.stringify(t))},n=e=>{e.preventDefault(),Object.values(t).some(a=>a==="")?alert("Please fill all fields"):(console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),t.email="",t.message="")};l.addEventListener("input",m);l.addEventListener("submit",n);
//# sourceMappingURL=2-form.js.map
