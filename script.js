/* ============================================
   LION CONSULTANCY — Enhanced Script
   Graphics · Animations · Vanilla JS
   ============================================ */

const CONFIG = {
  whatsapp: "[WHATSAPP NUMBER]",
  phone: "[PHONE]",
  email: "[EMAIL]"
};

/* [SAMPLE: REPLACE WITH REAL VACANCIES] */
const VACANCIES = [
  { id:"v1", title:"Construction Worker", country:"UAE", flag:"🇦🇪", type:"Construction", salaryMin:1200, salaryMax:1600, currency:"AED", contract:"24 months", accommodation:true, food:true, transport:true, experience:"0–2 years", fee:"[VERIFY]", sample:true, responsibilities:"General site work, mixing, lifting, assisting skilled trades under supervisor.", requirements:"Age 21–45, basic literacy, medically fit, valid passport.", hours:"8 hrs/day, 6 days/week", benefits:"Free accommodation, food allowance, transport, medical insurance.", documents:"passport,photos,medical,police", process:"Apply → document check → employer interview → offer letter → visa → medical → deployment." },
  { id:"v2", title:"Hotel Housekeeping", country:"Qatar", flag:"🇶🇦", type:"Hospitality", salaryMin:1100, salaryMax:1400, currency:"QAR", contract:"24 months", accommodation:true, food:true, transport:true, experience:"0–1 year", fee:"[VERIFY]", sample:true, responsibilities:"Room cleaning, linen handling, guest area upkeep.", requirements:"Age 21–40, basic English, presentable, medically fit.", hours:"9 hrs/day, 6 days/week", benefits:"Shared accommodation, duty meals, transport, medical insurance.", documents:"passport,photos,medical,police", process:"Apply → document check → employer selection → offer letter → visa → medical → deployment." },
  { id:"v3", title:"Light Vehicle Driver", country:"Saudi Arabia", flag:"🇸🇦", type:"Driving", salaryMin:1300, salaryMax:1700, currency:"SAR", contract:"24 months", accommodation:true, food:false, transport:true, experience:"2+ years, valid licence", fee:"[VERIFY]", sample:true, responsibilities:"Safe transport of goods/passengers, vehicle upkeep, logbook.", requirements:"Valid driving licence, age 24–45, clean record, medically fit.", hours:"10 hrs/day, 6 days/week", benefits:"Accommodation, transport, medical insurance, annual leave.", documents:"passport,photos,medical,police,licence", process:"Apply → licence verification → employer interview → offer letter → visa → medical → deployment." },
  { id:"v4", title:"Security Guard", country:"UAE", flag:"🇦🇪", type:"Security", salaryMin:1200, salaryMax:1500, currency:"AED", contract:"24 months", accommodation:true, food:false, transport:true, experience:"0–2 years", fee:"[VERIFY]", sample:true, responsibilities:"Access control, patrolling, incident reporting under supervisor.", requirements:"Age 21–40, height 5'6\"+, basic English, medically fit.", hours:"12 hrs/day, 6 days/week", benefits:"Accommodation, transport, uniform, medical insurance.", documents:"passport,photos,medical,police", process:"Apply → document check → employer selection → offer letter → visa → medical → deployment." },
  { id:"v5", title:"Factory Packing Operator", country:"Malaysia", flag:"🇲🇾", type:"Factory", salaryMin:1500, salaryMax:1900, currency:"MYR", contract:"24–36 months", accommodation:true, food:false, transport:true, experience:"0–1 year", fee:"[VERIFY]", sample:true, responsibilities:"Packing, labelling, line feeding, quality checks.", requirements:"Age 20–40, basic literacy, medically fit.", hours:"8–10 hrs/day, shift work", benefits:"Hostel, transport, medical insurance, overtime.", documents:"passport,photos,medical,police", process:"Apply → document check → employer interview → offer letter → visa → medical → deployment." },
  { id:"v6", title:"Care Assistant (Elderly)", country:"Europe", flag:"🇪🇺", type:"Healthcare", salaryMin:1400, salaryMax:1900, currency:"EUR", contract:"12–24 months", accommodation:true, food:false, transport:false, experience:"1+ year care experience", fee:"[VERIFY]", sample:true, responsibilities:"Personal care, mobility support, companionship, meal assistance.", requirements:"Care certificate preferred, basic language, medically fit.", hours:"40 hrs/week", benefits:"Accommodation support, medical insurance, paid leave.", documents:"passport,photos,medical,police,education,experience", process:"Apply → document check → language/employer interview → offer letter → visa → medical → deployment." },
  { id:"v7", title:"Restaurant Waiter", country:"Qatar", flag:"🇶🇦", type:"Hospitality", salaryMin:1000, salaryMax:1300, currency:"QAR", contract:"24 months", accommodation:true, food:true, transport:true, experience:"0–2 years", fee:"[VERIFY]", sample:true, responsibilities:"Table service, order taking, cleanliness, cash handling.", requirements:"Basic English, presentable, age 21–38, medically fit.", hours:"9 hrs/day, 6 days/week", benefits:"Accommodation, duty meals, transport, medical insurance.", documents:"passport,photos,medical,police", process:"Apply → document check → employer selection → offer letter → visa → medical → deployment." },
  { id:"v8", title:"Warehouse Assistant", country:"UAE", flag:"🇦🇪", type:"Factory", salaryMin:1100, salaryMax:1400, currency:"AED", contract:"24 months", accommodation:true, food:false, transport:true, experience:"0–1 year", fee:"[VERIFY]", sample:true, responsibilities:"Picking, packing, loading, stock movement.", requirements:"Age 21–40, physically fit, basic literacy.", hours:"8–10 hrs/day, 6 days/week", benefits:"Accommodation, transport, medical insurance, overtime.", documents:"passport,photos,medical,police", process:"Apply → document check → employer selection → offer letter → visa → medical → deployment." }
];

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

function toast(msg){
  let el = $("#lc-toast");
  if(!el){
    el = document.createElement("div");
    el.id = "lc-toast"; el.setAttribute("role","status");
    el.style.cssText = "position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:#0B1B33;color:#fff;padding:14px 22px;border-radius:12px;font-weight:600;font-size:.88rem;z-index:200;box-shadow:0 12px 32px rgba(0,0,0,.3);max-width:90%;text-align:center;transition:opacity .3s,transform .3s";
    document.body.appendChild(el);
  }
  el.textContent = msg; el.style.opacity = "1"; el.style.transform = "translateX(-50%) translateY(0)";
  clearTimeout(el._t);
  el._t = setTimeout(()=>{ el.style.opacity="0"; el.style.transform="translateX(-50%) translateY(10px)"; }, 3800);
}

/* ---------- Header scroll effect ---------- */
function initHeader(){
  const header = $(".site-header");
  if(header){
    let ticking = false;
    window.addEventListener("scroll", ()=>{
      if(!ticking){
        requestAnimationFrame(()=>{
          header.classList.toggle("scrolled", window.scrollY > 12);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive:true });
  }
  const toggle = $(".menu-toggle");
  const menu = $(".mobile-menu");
  if(toggle && menu){
    toggle.addEventListener("click", ()=>{
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$(".mobile-menu a").forEach(a=>a.addEventListener("click", ()=>{
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded","false");
    }));
  }
  const path = location.pathname.split("/").pop() || "index.html";
  $$(".nav-desktop a, .mobile-menu a").forEach(a=>{
    if(a.getAttribute("href") === path) a.setAttribute("aria-current","page");
  });
}

/* ---------- Language ---------- */
const I18N = {
  en:{ apply:"Apply on WhatsApp", vac:"See Current Vacancies", wa:"WhatsApp Us" },
  hi:{ apply:"WhatsApp पर आवेदन करें", vac:"वर्तमान नौकरियाँ देखें", wa:"WhatsApp करें" },
  gu:{ apply:"WhatsApp પર અરજી કરો", vac:"હાલની જગ્યાઓ જુઓ", wa:"WhatsApp કરો" }
};
function initLang(){
  const sel = $("#lang"); if(!sel) return;
  sel.addEventListener("change", ()=>{
    const lang = sel.value;
    $$("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(I18N[lang] && I18N[lang][key]) el.textContent = I18N[lang][key];
      else if(I18N.en[key]) el.textContent = I18N.en[key];
    });
    document.documentElement.lang = lang === "en" ? "en" : lang;
  });
}

/* ---------- WhatsApp wiring + ripple ---------- */
function initWA(){
  $$("[data-wa]").forEach(el=>{
    const preset = el.getAttribute("data-wa");
    const msg = preset || "Hello Lion Consultancy, I would like to know more about jobs abroad.";
    el.setAttribute("href", waLink(msg));
    el.setAttribute("target","_blank");
    el.setAttribute("rel","noopener");
    el.addEventListener("click", ()=>{
      if(typeof fbq === "function"){ fbq('track','Contact',{ method:'whatsapp' }); }
      ripple(el);
    });
  });
  $$("[data-call]").forEach(el=>{
    el.setAttribute("href", "tel:" + CONFIG.phone.replace(/\s/g,""));
  });
  $$("[data-mail]").forEach(el=>{
    el.setAttribute("href", "mailto:" + CONFIG.email);
  });
}

function ripple(el){
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const span = document.createElement("span");
  span.className = "ripple";
  span.style.width = span.style.height = size + "px";
  span.style.left = (event ? event.clientX - rect.left - size/2 : rect.width/2 - size/2) + "px";
  span.style.top = (event ? event.clientY - rect.top - size/2 : rect.height/2 - size/2) + "px";
  el.appendChild(span);
  setTimeout(()=>span.remove(), 650);
}

/* ---------- Scroll reveal (staggered) ---------- */
function initReveal(){
  const els = $$(".reveal");
  if(!("IntersectionObserver" in window) || !els.length){ els.forEach(e=>e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold:.12, rootMargin:"0px 0px -60px 0px" });
  els.forEach(e=>io.observe(e));
}

/* ---------- Counters ---------- */
function initCounters(){
  const els = $$("[data-count]");
  if(!els.length) return;
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const run = (el)=>{
    const target = parseFloat(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    if(isNaN(target)){ el.textContent = el.getAttribute("data-count") + suffix; return; }
    if(reduce){ el.textContent = target.toLocaleString() + suffix; return; }
    let start = 0; const dur = 1600; const t0 = performance.now();
    const tick = (t)=>{
      const p = Math.min((t-t0)/dur, 1);
      const val = Math.floor(start + (target-start) * (1-Math.pow(1-p,3)));
      el.textContent = val.toLocaleString() + suffix;
      if(p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ run(e.target); io.unobserve(e.target); } });
  }, { threshold:.4 });
  els.forEach(el=>io.observe(el));
}

/* ---------- Forms ---------- */
function initForms(){
  $$("form[data-form]").forEach(form=>{
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      let ok = true;
      $$("[required]", form).forEach(input=>{
        const field = input.closest(".field");
        if(!input.value.trim()){ ok = false; if(field) field.classList.add("invalid"); }
        else if(field){ field.classList.remove("invalid"); }
      });
      $$("input[type='tel'], input[data-phone]", form).forEach(input=>{
        const digits = input.value.replace(/\D/g,"");
        const field = input.closest(".field");
        if(input.value.trim() && (digits.length < 8 || digits.length > 15)){ ok = false; if(field) field.classList.add("invalid"); }
      });
      if(!ok){ toast("Please check the highlighted fields."); return; }
      if(typeof fbq === "function"){ fbq('track','Lead',{ form: form.getAttribute("data-form") }); }
      const success = $(".form-success", form.parentElement) || $(".form-success", form);
      if(success) success.classList.add("show");
      else toast("Thank you! A Lion Consultancy advisor will contact you within 24 hours.");
      form.reset();
      $$(".field.invalid", form).forEach(f=>f.classList.remove("invalid"));
    });
    $$("input, select, textarea", form).forEach(input=>{
      input.addEventListener("input", ()=>{
        const field = input.closest(".field");
        if(field) field.classList.remove("invalid");
      });
    });
  });
}

/* ---------- Consent ---------- */
function initConsent(){
  const banner = $("#consent"); if(!banner) return;
  let seen = false;
  try{ seen = sessionStorage.getItem("lc-consent") === "1"; }catch(e){}
  if(!seen) setTimeout(()=>banner.classList.add("show"), 1500);
  $$("[data-consent]", banner).forEach(btn=>{
    btn.addEventListener("click", ()=>{
      try{ sessionStorage.setItem("lc-consent","1"); }catch(e){}
      banner.classList.remove("show");
    });
  });
}

/* ---------- Jobs ---------- */
function initJobs(){
  const grid = $("#jobs-grid"); if(!grid) return;

  const render = (list)=>{
    grid.innerHTML = list.map((job, i)=>`
      <article class="card job-card reveal" data-id="${job.id}" style="transition-delay:${i*60}ms">
        <div class="job-top">
          <div>
            ${job.sample ? '<span class="badge-sample">Sample</span>' : ''}
            <h3 style="margin-top:6px">${job.title}</h3>
            <div style="font-size:.9rem;color:var(--muted)"><span class="flag">${job.flag}</span> ${job.country}</div>
          </div>
        </div>
        <div class="job-meta">
          <span><b>${job.salaryMin}–${job.salaryMax} ${job.currency}</b>/mo</span>
          <span><b>${job.contract}</b></span>
          <span>Exp: <b>${job.experience}</b></span>
        </div>
        <div class="job-meta" style="font-size:.8rem">
          <span>${job.accommodation ? "🏠 Accommodation" : "—"}</span>
          <span>${job.food ? "🍽 Food" : "—"}</span>
          <span>${job.transport ? "🚌 Transport" : "—"}</span>
        </div>
        <button class="btn btn-ghost btn-block" data-toggle="${job.id}" aria-expanded="false">View details</button>
        <div class="job-detail" id="detail-${job.id}" hidden style="margin-top:14px;font-size:.9rem;color:var(--muted);border-top:1px dashed var(--line);padding-top:14px;animation:fadeUp .4s var(--ease)">
          <p><b style="color:var(--ink)">Responsibilities:</b> ${job.responsibilities}</p>
          <p class="mt-2"><b style="color:var(--ink)">Requirements:</b> ${job.requirements}</p>
          <p class="mt-2"><b style="color:var(--ink)">Working hours:</b> ${job.hours}</p>
          <p class="mt-2"><b style="color:var(--ink)">Benefits:</b> ${job.benefits}</p>
          <p class="mt-2"><b style="color:var(--ink)">Selection process:</b> ${job.process}</p>
          <p class="mt-2"><b style="color:var(--ink)">Our fee:</b> <span class="verify-tag">${job.fee}</span></p>
          <p class="mt-2"><a href="documents.html" style="color:var(--gold);font-weight:700">See required documents →</a></p>
        </div>
        <a class="btn btn-wa btn-block" style="margin-top:14px" href="${waLink(`Hello Lion Consultancy, I want to apply for: ${job.title} in ${job.country}. Please share the full details and requirements.`)}" target="_blank" rel="noopener" data-job-apply="${job.id}">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.9.9-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5 0-.2 0-.3-.1-.5-.1-.2-.5-1.4-.7-1.9-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z"/></svg>
          Apply on WhatsApp
        </a>
      </article>
    `).join("");

    $$("[data-toggle]", grid).forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const id = btn.getAttribute("data-toggle");
        const panel = $("#detail-" + id);
        const open = !panel.hidden;
        panel.hidden = open;
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        btn.textContent = open ? "View details" : "Hide details";
      });
    });
    $$("[data-job-apply]", grid).forEach(a=>{
      a.addEventListener("click", ()=>{
        if(typeof fbq === "function"){ fbq('track','Contact',{ method:'whatsapp', job: a.getAttribute("data-job-apply") }); }
      });
    });
    initReveal();
  };

  const applyFilters = ()=>{
    const country = $("#f-country")?.value || "";
    const type = $("#f-type")?.value || "";
    const salary = $("#f-salary")?.value || "";
    const exp = $("#f-exp")?.value || "";
    let list = VACANCIES.slice();
    if(country) list = list.filter(j=>j.country === country);
    if(type) list = list.filter(j=>j.type === type);
    if(salary) list = list.filter(j=>j.salaryMax >= parseInt(salary,10));
    if(exp){
      if(exp === "0") list = list.filter(j=>/0/.test(j.experience));
      else if(exp === "2") list = list.filter(j=>/2\+|2 years|2–/.test(j.experience));
    }
    render(list);
    const count = $("#jobs-count");
    if(count) count.textContent = list.length + " vacancies";
  };

  const countries = [...new Set(VACANCIES.map(j=>j.country))];
  const types = [...new Set(VACANCIES.map(j=>j.type))];
  const fc = $("#f-country"); if(fc) fc.innerHTML = '<option value="">All countries</option>' + countries.map(c=>`<option>${c}</option>`).join("");
  const ft = $("#f-type"); if(ft) ft.innerHTML = '<option value="">All job types</option>' + types.map(t=>`<option>${t}</option>`).join("");
  ["#f-country","#f-type","#f-salary","#f-exp"].forEach(sel=>{ const el = $(sel); if(el) el.addEventListener("change", applyFilters); });
  render(VACANCIES); applyFilters();
}

/* ---------- Checklist ---------- */
function initChecklist(){
  const list = $("#checklist"); if(!list) return;
  const items = $$("input[type=checkbox]", list);
  const bar = $("#ck-bar"); const countEl = $("#ck-count");
  const update = ()=>{
    const done = items.filter(i=>i.checked).length;
    const total = items.length || 1;
    const pct = Math.round(done/total*100);
    if(bar) bar.style.width = pct + "%";
    if(countEl) countEl.textContent = done + " / " + total;
  };
  items.forEach(i=>{
    i.checked = i.dataset._ck === "1" ? true : i.checked;
    i.addEventListener("change", ()=>{ i.dataset._ck = i.checked ? "1" : "0"; update(); });
  });
  update();
  const printBtn = $("#print-ck"); if(printBtn) printBtn.addEventListener("click", ()=>window.print());
}

/* ---------- Tabs ---------- */
function initTabs(){
  const tabs = $$("[role=tab]"); if(!tabs.length) return;
  tabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{
      const group = tab.closest("[data-tabs]");
      $$("[role=tab]", group).forEach(t=>t.setAttribute("aria-selected","false"));
      $$(".tab-panel", group).forEach(p=>p.classList.remove("active"));
      tab.setAttribute("aria-selected","true");
      const panel = $("#" + tab.getAttribute("aria-controls"));
      if(panel) panel.classList.add("active");
    });
  });
}

/* ---------- Theme ---------- */
function initTheme(){
  const btn = $("#theme-toggle"); if(!btn) return;
  const stored = (()=>{ try{return localStorage.getItem("lc-theme")}catch(e){return null} })();
  if(stored) document.documentElement.setAttribute("data-theme", stored);
  btn.addEventListener("click", ()=>{
    const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", cur);
    try{ localStorage.setItem("lc-theme", cur); }catch(e){}
  });
}

/* ---------- Floating particles (hero) ---------- */
function initParticles(){
  const wrap = $(".hero-particles"); if(!wrap) return;
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  if(reduce) return;
  const count = window.innerWidth < 640 ? 14 : 26;
  for(let i=0;i<count;i++){
    const s = document.createElement("span");
    s.style.left = Math.random()*100 + "%";
    s.style.bottom = Math.random()*100 + "%";
    s.style.animationDuration = (6 + Math.random()*8) + "s";
    s.style.animationDelay = (Math.random()*8) + "s";
    s.style.width = s.style.height = (2 + Math.random()*4) + "px";
    wrap.appendChild(s);
  }
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  initHeader(); initLang(); initWA(); initReveal(); initCounters();
  initForms(); initConsent(); initJobs(); initChecklist(); initTabs();
  initTheme(); initParticles();
});