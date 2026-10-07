/* INTERAKSI, DATA, GRAFIK, DAN ANIMASI — jangan diedit jika hanya mengubah teks. */

const PROV_DATA = [{"province":"Aceh","official":24.68,"officialRaw":42.8818,"gt":47.7,"poverty":13.44,"tpt":5.66,"internet":62.93,"provinceId":"Aceh","quadrant":"Low GT–High Official"},{"province":"Bali","official":21.49,"officialRaw":37.3311,"gt":23.5,"poverty":3.9,"tpt":1.83,"internet":77.56,"provinceId":"Bali","quadrant":"Low GT–Low Official"},{"province":"Kepulauan Bangka Belitung","official":25.74,"officialRaw":44.7274,"gt":56.2,"poverty":4.82,"tpt":4.24,"internet":76.06,"provinceId":"Kepulauan Bangka Belitung","quadrant":"High GT–High Official"},{"province":"Banten","official":6.68,"officialRaw":11.6077,"gt":41.4,"poverty":5.77,"tpt":6.85,"internet":75.17,"provinceId":"Banten","quadrant":"Low GT–Low Official"},{"province":"Bengkulu","official":34.17,"officialRaw":59.3694,"gt":68.5,"poverty":13.04,"tpt":3.14,"internet":70.72,"provinceId":"Bengkulu","quadrant":"High GT–High Official"},{"province":"Jawa Tengah","official":3.68,"officialRaw":6.3918,"gt":29.1,"poverty":10.03,"tpt":4.58,"internet":73.15,"provinceId":"Jawa Tengah","quadrant":"Low GT–Low Official"},{"province":"Kalimantan Tengah","official":24.17,"officialRaw":41.9974,"gt":48.7,"poverty":5.21,"tpt":3.84,"internet":75.23,"provinceId":"Kalimantan Tengah","quadrant":"High GT–High Official"},{"province":"Sulawesi Tengah","official":52.58,"officialRaw":91.3576,"gt":38.6,"poverty":11.4,"tpt":3.04,"internet":62.44,"provinceId":"Sulawesi Tengah","quadrant":"Low GT–High Official"},{"province":"Jawa Timur","official":10.3,"officialRaw":17.9005,"gt":35.3,"poverty":9.68,"tpt":3.96,"internet":69.36,"provinceId":"Jawa Timur","quadrant":"Low GT–Low Official"},{"province":"Kalimantan Timur","official":19.92,"officialRaw":34.6029,"gt":44,"poverty":5.64,"tpt":5.45,"internet":84.44,"provinceId":"Kalimantan Timur","quadrant":"Low GT–Low Official"},{"province":"Nusa Tenggara Timur","official":20.9,"officialRaw":36.3154,"gt":70.2,"poverty":19.25,"tpt":3.1,"internet":54.84,"provinceId":"Nusa Tenggara Timur","quadrant":"High GT–Low Official"},{"province":"Gorontalo","official":9.98,"officialRaw":17.3481,"gt":54.7,"poverty":14.22,"tpt":3.09,"internet":65.92,"provinceId":"Gorontalo","quadrant":"High GT–Low Official"},{"province":"Jambi","official":28.37,"officialRaw":49.2979,"gt":50.7,"poverty":7.18,"tpt":4.46,"internet":71.76,"provinceId":"Jambi","quadrant":"High GT–High Official"},{"province":"Lampung","official":28.88,"officialRaw":50.1826,"gt":43.7,"poverty":10.65,"tpt":4.16,"internet":73.37,"provinceId":"Lampung","quadrant":"Low GT–High Official"},{"province":"Maluku","official":18.37,"officialRaw":31.9182,"gt":97.6,"poverty":15.91,"tpt":6.04,"internet":59.96,"provinceId":"Maluku","quadrant":"High GT–Low Official"},{"province":"Kalimantan Utara","official":24.51,"officialRaw":42.5791,"gt":47.9,"poverty":5.85,"tpt":3.96,"internet":77.44,"provinceId":"Kalimantan Utara","quadrant":"Low GT–High Official"},{"province":"Maluku Utara","official":6.5,"officialRaw":11.2865,"gt":64.5,"poverty":6.17,"tpt":4.09,"internet":59.17,"provinceId":"Maluku Utara","quadrant":"High GT–Low Official"},{"province":"Sulawesi Utara","official":23.18,"officialRaw":40.2694,"gt":57.9,"poverty":6.97,"tpt":5.92,"internet":68.44,"provinceId":"Sulawesi Utara","quadrant":"High GT–Low Official"},{"province":"Sumatera Utara","official":75.46,"officialRaw":131.1031,"gt":53.7,"poverty":7.59,"tpt":5.35,"internet":74.15,"provinceId":"Sumatera Utara","quadrant":"High GT–High Official"},{"province":"Papua","official":64.12,"officialRaw":111.412,"gt":98.2,"poverty":25.73,"tpt":2.92,"internet":31.8,"provinceId":"Papua","quadrant":"High GT–High Official"},{"province":"Riau","official":55.86,"officialRaw":97.0556,"gt":43.1,"poverty":6.51,"tpt":3.77,"internet":77.68,"provinceId":"Riau","quadrant":"Low GT–High Official"},{"province":"Kepulauan Riau","official":23.41,"officialRaw":40.6724,"gt":53.2,"poverty":5.08,"tpt":6.67,"internet":89.26,"provinceId":"Kepulauan Riau","quadrant":"High GT–High Official"},{"province":"Sulawesi Tenggara","official":12.3,"officialRaw":21.3741,"gt":31.8,"poverty":10.92,"tpt":3.15,"internet":70.36,"provinceId":"Sulawesi Tenggara","quadrant":"Low GT–Low Official"},{"province":"Kalimantan Selatan","official":13.35,"officialRaw":23.19,"gt":28.9,"poverty":4.07,"tpt":4.04,"internet":74.82,"provinceId":"Kalimantan Selatan","quadrant":"Low GT–Low Official"},{"province":"Sumatera Selatan","official":52.19,"officialRaw":90.6725,"gt":49.1,"poverty":10.74,"tpt":3.92,"internet":70.54,"provinceId":"Sumatera Selatan","quadrant":"High GT–High Official"},{"province":"DKI Jakarta","official":80.28,"officialRaw":139.4772,"gt":46.7,"poverty":4.22,"tpt":6.12,"internet":87.84,"provinceId":"DKI Jakarta","quadrant":"Low GT–High Official"},{"province":"DI Yogyakarta","official":12.84,"officialRaw":22.3168,"gt":34.4,"poverty":10.62,"tpt":3.36,"internet":80.1,"provinceId":"DI Yogyakarta","quadrant":"Low GT–Low Official"},{"province":"Sulawesi Selatan","official":46.17,"officialRaw":80.2143,"gt":56.2,"poverty":7.92,"tpt":4.54,"internet":70.1,"provinceId":"Sulawesi Selatan","quadrant":"High GT–High Official"},{"province":"Sumatera Barat","official":24.51,"officialRaw":42.5791,"gt":51,"poverty":5.7,"tpt":5.77,"internet":74.59,"provinceId":"Sumatera Barat","quadrant":"High GT–High Official"},{"province":"Jawa Barat","official":9.53,"officialRaw":16.5557,"gt":39.2,"poverty":7.27,"tpt":6.83,"internet":76.62,"provinceId":"Jawa Barat","quadrant":"Low GT–Low Official"},{"province":"Kalimantan Barat","official":15.95,"officialRaw":27.7061,"gt":44.8,"poverty":6.29,"tpt":4.53,"internet":71.57,"provinceId":"Kalimantan Barat","quadrant":"Low GT–Low Official"},{"province":"Nusa Tenggara Barat","official":16.05,"officialRaw":27.8781,"gt":45.8,"poverty":12.41,"tpt":3.02,"internet":68.52,"provinceId":"Nusa Tenggara Barat","quadrant":"Low GT–Low Official"},{"province":"Papua Barat","official":100.0,"officialRaw":173.7436,"gt":98.2,"poverty":19.38,"tpt":5.25,"internet":64.41,"provinceId":"Papua Barat","quadrant":"High GT–High Official"},{"province":"Sulawesi Barat","official":10.49,"officialRaw":18.2278,"gt":63.1,"poverty":10.96,"tpt":2.85,"internet":66.61,"provinceId":"Sulawesi Barat","quadrant":"High GT–Low Official"}];
const MED_OFF = 23.293474, MED_GT = 48.30;
const metricMeta={
 official:{label:"PencurianOfficial",suffix:"",digits:2},
 gt:{label:"PencurianGT",suffix:"",digits:2},
 poverty:{label:"Kemiskinan",suffix:"%",digits:2},
 tpt:{label:"TPT",suffix:"%",digits:2},
 internet:{label:"Akses Internet",suffix:"%",digits:2}
};
const fmt=(v,k)=>Number(v).toFixed(metricMeta[k].digits).replace(".",",")+metricMeta[k].suffix;
const byId=Object.fromEntries(PROV_DATA.map(d=>[d.provinceId,d]));
const aliases={
 "Bangka Belitung":"Kepulauan Bangka Belitung","Kepulauan Bangka Belitung":"Kepulauan Bangka Belitung",
 "Jakarta Raya":"DKI Jakarta","DKI Jakarta":"DKI Jakarta","Yogyakarta":"DI Yogyakarta","Daerah Istimewa Yogyakarta":"DI Yogyakarta",
 "Kepulauan Riau":"Kepulauan Riau","Nusatenggara Barat":"Nusa Tenggara Barat","NUSATENGGARA BARAT":"Nusa Tenggara Barat",
 "Nusa Tenggara Barat":"Nusa Tenggara Barat","Nusatenggara Timur":"Nusa Tenggara Timur","Nusa Tenggara Timur":"Nusa Tenggara Timur",
 "Papua Barat":"Papua Barat","Irian Jaya Barat":"Papua Barat","Papua":"Papua","Irian Jaya Timur":"Papua",
 "Sumatera Utara":"Sumatera Utara","Sumatera Barat":"Sumatera Barat","Sumatera Selatan":"Sumatera Selatan"
};
function normalizeGeoName(n){
 if(!n) return n;
 const t=n.toLowerCase().replace(/\s+/g," ").trim();
 const direct=Object.keys(byId).find(x=>x.toLowerCase()===t);
 if(direct) return direct;
 const a=Object.keys(aliases).find(x=>x.toLowerCase()===t);
 return a?aliases[a]:n;
}
function ramp(v,min,max){
 const t=max===min?.5:Math.max(0,Math.min(1,(v-min)/(max-min)));
 const a=[48,56,62], b=[227,59,50];
 return `rgb(${Math.round(a[0]+(b[0]-a[0])*t)},${Math.round(a[1]+(b[1]-a[1])*t)},${Math.round(a[2]+(b[2]-a[2])*t)})`;
}

/* ranking bars */
function renderBars(metric="gt"){
 const arr=[...PROV_DATA].sort((a,b)=>b[metric]-a[metric]).slice(0,10);
 const max=Math.max(...arr.map(d=>d[metric]));
 document.getElementById("rankTitle").textContent=`10 Provinsi dengan ${metricMeta[metric].label} Tertinggi`;
 document.getElementById("rankBars").innerHTML=arr.map(d=>`<div class="bar-row"><div class="bar-label" title="${d.provinceId}">${d.provinceId}</div><div class="bar-track"><div class="bar-fill" style="width:${d[metric]/max*100}%"></div></div><div class="bar-value">${fmt(d[metric],metric)}</div></div>`).join("");
}
document.getElementById("rankMetric").addEventListener("change",e=>renderBars(e.target.value)); renderBars();

/* scatter */
(function(){
 const svg=document.getElementById("scatter34"), tip=document.getElementById("scatterTip"),NS="http://www.w3.org/2000/svg";
 const W=1000,H=560,L=78,R=35,T=25,B=68, maxX=105,maxY=102;
 const sx=x=>L+x/maxX*(W-L-R), sy=y=>H-B-y/maxY*(H-T-B);
 function line(x1,y1,x2,y2,stroke,dash=""){let e=document.createElementNS(NS,"line");["x1","y1","x2","y2"].forEach((k,i)=>e.setAttribute(k,[x1,y1,x2,y2][i]));e.setAttribute("stroke",stroke);if(dash)e.setAttribute("stroke-dasharray",dash);svg.appendChild(e)}
 for(let i=0;i<=100;i+=20){line(L,sy(i),W-R,sy(i),"#222b31");line(sx(i),T,sx(i),H-B,"#222b31");}
 line(L,H-B,W-R,H-B,"#69737a");line(L,T,L,H-B,"#69737a");line(sx(MED_GT),T,sx(MED_GT),H-B,"#e9a23b","7 6");line(L,sy(MED_OFF),W-R,sy(MED_OFF),"#e9a23b","7 6");
 const tx=document.createElementNS(NS,"text");tx.setAttribute("x",(L+W-R)/2);tx.setAttribute("y",H-18);tx.setAttribute("fill","#929ba0");tx.setAttribute("text-anchor","middle");tx.textContent="PencurianGT (0–100)";svg.appendChild(tx);
 const ty=document.createElementNS(NS,"text");ty.setAttribute("x",18);ty.setAttribute("y",(T+H-B)/2);ty.setAttribute("fill","#929ba0");ty.setAttribute("text-anchor","middle");ty.setAttribute("transform",`rotate(-90 18 ${(T+H-B)/2})`);ty.textContent="PencurianOfficial";svg.appendChild(ty);
 PROV_DATA.forEach(d=>{
   const c=document.createElementNS(NS,"circle"), hot=d.quadrant==="High GT–Low Official";
   c.setAttribute("cx",sx(d.gt));c.setAttribute("cy",sy(d.official));c.setAttribute("r",hot?7:5);
   c.setAttribute("fill",hot?"#e33b32":"#6e7c84");c.setAttribute("stroke",hot?"#ff918a":"#9ca6ab");c.setAttribute("stroke-width","1");
   c.style.cursor="pointer";
   c.addEventListener("mousemove",ev=>{tip.style.display="block";tip.style.left=(ev.offsetX+14)+"px";tip.style.top=(ev.offsetY+8)+"px";tip.innerHTML=`<b>${d.provinceId}</b><br>Official: ${fmt(d.official,"official")}<br>GT: ${fmt(d.gt,"gt")}<br>${d.quadrant}`});
   c.addEventListener("mouseleave",()=>tip.style.display="none");svg.appendChild(c);
 });
})();

/* map */
let geoLayer=null,currentMetric="official";
const map=L.map("provinceMap",{zoomControl:true,attributionControl:true}).setView([-2.2,118],4.3);
L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{maxZoom:8,attribution:'&copy; OpenStreetMap &copy; CARTO'}).addTo(map);
const geoURL="https://raw.githubusercontent.com/arsofyan7/Indonesia-GeoJSON/master/indonesia-province.geojson";
function getGeoName(f){return normalizeGeoName(f.properties.NAME_1||f.properties.Propinsi||f.properties.province||f.properties.name);}
function mapStyle(f){
 const d=byId[getGeoName(f)], vals=PROV_DATA.map(x=>x[currentMetric]),mn=Math.min(...vals),mx=Math.max(...vals);
 return {color:"#14191d",weight:1,fillColor:d?ramp(d[currentMetric],mn,mx):"#343b40",fillOpacity:.83};
}
function popupHTML(d){return `<b>${d.provinceId}</b><br>PencurianOfficial: ${fmt(d.official,"official")}<br>PencurianGT: ${fmt(d.gt,"gt")}<br>Kemiskinan: ${fmt(d.poverty,"poverty")}<br>TPT: ${fmt(d.tpt,"tpt")}<br>Akses internet: ${fmt(d.internet,"internet")}<br><em>${d.quadrant}</em>`}
fetch(geoURL).then(r=>r.json()).then(geo=>{
 geoLayer=L.geoJSON(geo,{style:mapStyle,onEachFeature:(f,l)=>{
   const d=byId[getGeoName(f)]; if(d){l.bindPopup(popupHTML(d));l.bindTooltip(`${d.provinceId}: ${fmt(d[currentMetric],currentMetric)}`,{sticky:true});}
 }}).addTo(map); map.fitBounds(geoLayer.getBounds(),{padding:[8,8]});
}).catch(()=>{document.getElementById("provinceMap").innerHTML='<div style="padding:40px;color:#aeb5b9">Peta memerlukan koneksi internet saat halaman dibuka. Grafik lain tetap dapat digunakan secara offline.</div>'});
document.getElementById("mapMetric").addEventListener("change",e=>{
 currentMetric=e.target.value;if(!geoLayer)return;geoLayer.setStyle(mapStyle);
 geoLayer.eachLayer(l=>{const d=byId[getGeoName(l.feature)];if(d){l.unbindTooltip();l.bindTooltip(`${d.provinceId}: ${fmt(d[currentMetric],currentMetric)}`,{sticky:true});}});
});

/* ===== next script layer ===== */

(function(){
 const tabs=[...document.querySelectorAll(".crisp-tab")],empty=document.getElementById("crispEmpty"),box=document.getElementById("crispDetail"),chase=document.querySelector(".chase-strip");
 if(!tabs.length||!empty||!box)return;
 const d={
  1:["BUSINESS UNDERSTANDING","Memahami persoalan penelitian","Memahami permasalahan <em>underreporting pencurian</em>, menetapkan tujuan, ruang lingkup, serta hasil yang ingin dicapai melalui pemanfaatan IGT sebagai sumber data pelengkap <em>official statistics</em>."],
  2:["DATA UNDERSTANDING","Memahami karakteristik data","Mengumpulkan dan mengeksplorasi data tingkat pencurian, data sosial ekonomi, akses internet, serta data Google Trends pada 34 provinsi tahun 2024."],
  3:["DATA PREPARATION","Menyiapkan data untuk analisis","Melakukan pembersihan, transformasi, penyiapan data antarprovinsi, eksplorasi kandidat kata kunci, serta pembentukan ukuran PencurianGT."],
  4:["MODELLING","Membangun analisis statistik","Menerapkan analisis deskriptif, korelasi, dan regresi linear berganda untuk membandingkan pola PencurianGT dan PencurianOfficial terhadap kovariat sosial ekonomi."],
  5:["EVALUATION","Mengevaluasi dan mengidentifikasi wilayah","Mengevaluasi validitas nomologis PencurianGT, kemudian menggunakan analisis kuadran dan Cook’s distance untuk mengidentifikasi provinsi yang menunjukkan indikasi <em>underreporting pencurian</em>."],
  6:["DEPLOYMENT","Menyajikan hasil penelitian","Mendiseminasikan hasil melalui <em>web story</em> agar temuan dapat dipahami dan dieksplorasi secara visual dan interaktif."]
 };
 const viz={
1:`<div class="stage-viz biz-board" aria-hidden="true">
<svg viewBox="0 0 250 138" preserveAspectRatio="none"><path d="M38 35 C80 45 120 70 130 95"/><path d="M207 38 C175 50 150 68 130 95"/></svg>
<span class="pin p1"></span><span class="pin p2"></span><span class="pin p3"></span>
<div class="note problem">MASALAH</div><div class="note question">KEBUTUHAN</div><div class="note target">TUJUAN</div><span class="viz-caption">MEMAHAMI KONTEKS</span></div>`,
2:`<div class="stage-viz data-viz" aria-hidden="true">
<div class="source s1">OFFICIAL</div><div class="source s2">GOOGLE</div><div class="source s3">SOSIAL-EKONOMI</div>
<i class="flow f1"></i><i class="flow f2"></i><i class="flow f3"></i><div class="lens"></div><div class="bars"><i></i><i></i><i></i></div><span class="viz-caption">MEMBACA DATA</span></div>`,
3:`<div class="stage-viz prep-viz" aria-hidden="true">
<div class="raw"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="funnel"></div><i class="spark"></i><div class="clean-table"></div><span class="viz-caption">RAW → READY</span></div>`,
4:`<div class="stage-viz model-viz" aria-hidden="true">
<div class="axis-x"></div><div class="axis-y"></div><i class="dot d1"></i><i class="dot d2"></i><i class="dot d3"></i><i class="dot d4"></i><i class="dot d5"></i><i class="dot d6"></i><div class="fit"></div><span class="formula">Y = β₀ + βX + ε</span><span class="viz-caption">MEMBENTUK MODEL</span></div>`,
5:`<div class="stage-viz eval-viz" aria-hidden="true">
<div class="checklist"><div><i class="tick">✓</i> ASUMSI</div><div><i class="tick">✓</i> VALIDITAS</div><div><i class="tick">✓</i> DIAGNOSTIK</div></div>
<div class="quad"><i class="qdot q1"></i><i class="qdot q2"></i><i class="qdot q3"></i><i class="qdot q4"></i></div><span class="threshold">INDIKASI</span><span class="viz-caption">MENGEVALUASI</span></div>`,
6:`<div class="stage-viz deploy-viz" aria-hidden="true">
<div class="screen desktop"></div><div class="world"></div><div class="signal"></div><div class="screen phone"></div><span class="viz-caption">HASIL → PEMBACA</span></div>`
 };
 function closePanel(){tabs.forEach(x=>x.classList.remove("active"));box.hidden=true;box.classList.remove("show");box.innerHTML="";box.removeAttribute("data-no");empty.style.display="flex";if(chase)chase.classList.remove("is-visible")}
 tabs.forEach(t=>t.addEventListener("click",()=>{
  if(t.classList.contains("active")){closePanel();return}
  tabs.forEach(x=>x.classList.remove("active"));t.classList.add("active");
  const n=t.dataset.step,x=d[n];empty.style.display="none";if(chase)chase.classList.add("is-visible");box.hidden=false;box.classList.remove("show");void box.offsetWidth;box.dataset.no=String(n).padStart(2,"0");
  box.innerHTML=`<div class="detail-side">TAHAP ${String(n).padStart(2,"0")}<br>${x[0]}</div><div><h3>${x[1]}</h3><p>${x[2]}</p></div>${viz[n]||""}`;box.classList.add("show");
 }))
})();

/* ===== next script layer ===== */

(function(){
 const medO=23.29, medG=48.30;
 const tiles=[...document.querySelectorAll(".quad-tile")];
 const pills=document.getElementById("quadProvincePills");
 const label=document.getElementById("quadSelectionLabel");
 const count=document.getElementById("quadSelectionCount");
 const reset=document.getElementById("quadReset");
 const svg=document.getElementById("scatter34");
 if(!tiles.length||!pills||!label||!count||typeof PROV_DATA==="undefined") return;

 const names={HH:"HIGH GT · HIGH OFFICIAL",LH:"LOW GT · HIGH OFFICIAL",HL:"HIGH GT · LOW OFFICIAL",LL:"LOW GT · LOW OFFICIAL"};
 const official=d=>Number(d.PencurianOfficial ?? d.official ?? d.Official ?? 0);
 const gt=d=>Number(d.PencurianGT ?? d.gt ?? d.GT ?? 0);
 const province=d=>d.Provinsi ?? d.province ?? d.Province ?? d.nama ?? "Provinsi";
 const quadrant=d=>gt(d)>=medG ? (official(d)<medO?"HL":"HH") : (official(d)>=medO?"LH":"LL");

 function points(){
   if(!svg) return [];
   return [...svg.querySelectorAll("circle")].filter(c=>!c.closest("defs"));
 }
 function clear(){
   tiles.forEach(t=>t.classList.remove("active"));
   points().forEach(c=>c.classList.remove("dimmed","selected-point","selected-target"));
   label.textContent="PILIH KUADRAN";
   count.textContent="34";
   pills.innerHTML='<span class="muted-pill">Klik salah satu kuadran 10 · 7 · 7 · 10 untuk melihat nama provinsinya.</span>';
 }
 function show(q,tile){
   if(tile.classList.contains("active")){clear();return}
   tiles.forEach(t=>t.classList.remove("active")); tile.classList.add("active");
   const rows=PROV_DATA.filter(d=>quadrant(d)===q).sort((a,b)=>gt(b)-gt(a));
   label.textContent=names[q]; count.textContent=String(rows.length);
   pills.innerHTML=rows.map(d=>`<span class="province-pill ${q==="HL"?"focus":""}" title="PencurianGT ${gt(d).toFixed(2)} · PencurianOfficial ${official(d).toFixed(2)}">${province(d)}</span>`).join("");

   const cs=points();
   if(cs.length>=PROV_DATA.length){
     const dataCircles=cs.slice(-PROV_DATA.length);
     dataCircles.forEach((c,i)=>{
       c.classList.remove("dimmed","selected-point","selected-target");
       if(quadrant(PROV_DATA[i])!==q)c.classList.add("dimmed");
       else c.classList.add(q==="HL"?"selected-target":"selected-point");
     });
   }
 }
 tiles.forEach(tile=>tile.addEventListener("click",()=>show(tile.dataset.q,tile)));
 if(reset) reset.addEventListener("click",clear);
 clear();
})();
