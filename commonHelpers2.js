import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o="feedback-form-state",t=document.querySelector(".feedback-form");function l(e,a){const s=JSON.stringify(a);localStorage.setItem(e,s)}function n(e="empty"){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return a}}t.addEventListener("input",()=>{const e=t.elements.email.value,a=t.elements.message.value;l(o,{email:e,message:a})});function m(){const e=n(o)||{};t.elements.email.value=e.email||"",t.elements.message.value=e.message||""}m();t.addEventListener("submit",e=>{e.preventDefault();const a=t.elements.email.value,s=t.elements.message.value;if(a.trim()===""||s.trim()===""){alert("Please fill in both fields of the form");return}const r=n(o)||{};console.log(r),t.reset(),localStorage.removeItem(o)});
//# sourceMappingURL=commonHelpers2.js.map
