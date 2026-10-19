(() => {
  const links = [...document.querySelectorAll('nav .links a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-25% 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));

    const revealItems = document.querySelectorAll('.method-step, .metric-card, .stat, table.results tr');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    revealItems.forEach(item => { item.classList.add('reveal'); revealObserver.observe(item); });
  }

  // Grafik dibuat dari angka yang sudah tercantum di index.html/hasil skripsi.
  const style = document.createElement('style');
  style.textContent = `
    .research-chart{margin:28px 0 12px;padding:24px;background:#0d1318;border:1px solid #30363d;min-width:0}
    .research-chart h3{margin:0 0 6px;font-size:1.12rem;color:#e7e2d6}
    .research-chart .chart-subtitle{margin:0 0 20px;color:#9aa2a8;font-size:.88rem}
    .chart-bars{display:grid;gap:17px}
    .chart-row{display:grid;grid-template-columns:minmax(105px,155px) minmax(0,1fr) 82px;gap:12px;align-items:center}
    .chart-label{font-size:.88rem;color:#d5d8d9;overflow-wrap:anywhere}
    .chart-track{height:19px;background:#252b30;position:relative;overflow:hidden}
    .chart-fill{height:100%;width:0;transition:width .8s ease;background:#55a6b8}
    .chart-fill.negative{background:#e9a23b}
    .chart-value{text-align:right;font:700 .86rem 'Courier New',monospace;color:#e7e2d6}
    .chart-zero{font-size:.76rem;color:#9aa2a8;margin-top:12px}
    .sus-chart-layout{display:flex;align-items:center;gap:24px;flex-wrap:wrap}
    .sus-donut{width:150px;height:150px;border-radius:50%;background:conic-gradient(#55a6b8 0 80%,#e9a23b 80% 100%);display:grid;place-items:center;flex:none;position:relative}
    .sus-donut:before{content:"";position:absolute;inset:18px;border-radius:50%;background:#0d1318}
    .sus-donut span{position:relative;z-index:1;font:900 1.8rem 'Arial Black',sans-serif;color:#e7e2d6}
    .sus-legend{display:grid;gap:12px;flex:1;min-width:180px}
    .sus-legend div{display:flex;align-items:flex-start;gap:10px;color:#d5d8d9}
    .sus-key{width:11px;height:11px;margin-top:6px;flex:none}
    .sus-key.blue{background:#55a6b8}.sus-key.amber{background:#e9a23b}
    .chart-caveat{color:#9aa2a8;font-size:.8rem;margin:18px 0 0}
    @media(max-width:600px){.research-chart{padding:17px}.chart-row{grid-template-columns:90px minmax(0,1fr) 68px;gap:8px}.chart-label,.chart-value{font-size:.76rem}.sus-donut{width:125px;height:125px}}
    @media(prefers-reduced-motion:reduce){.chart-fill{transition:none}}
  `;
  document.head.appendChild(style);

  function addChart(parent, title, subtitle, rows, options = {}) {
    if (!parent || parent.querySelector(`[data-chart-title="${title}"]`)) return;
    const card = document.createElement('div');
    card.className = 'research-chart';
    card.dataset.chartTitle = title;

    const heading = document.createElement('h3');
    heading.textContent = title;

    const sub = document.createElement('p');
    sub.className = 'chart-subtitle';
    sub.textContent = subtitle;

    const bars = document.createElement('div');
    bars.className = 'chart-bars';

    const maxAbs = Math.max(...rows.map(r => Math.abs(r.value)), 1);

    rows.forEach(row => {
      const line = document.createElement('div');
      line.className = 'chart-row';

      const label = document.createElement('div');
      label.className = 'chart-label';
      label.textContent = row.label;

      const track = document.createElement('div');
      track.className = 'chart-track';

      const fill = document.createElement('div');
      fill.className = 'chart-fill' + (row.value < 0 ? ' negative' : '');
      fill.style.width = `${Math.max(2, Math.abs(row.value) / maxAbs * 100)}%`;
      track.appendChild(fill);

      const value = document.createElement('div');
      value.className = 'chart-value';
      value.textContent = row.display;

      line.append(label, track, value);
      bars.appendChild(line);
    });

    card.append(heading, sub, bars);

    if (options.note) {
      const note = document.createElement('p');
      note.className = 'chart-caveat';
      note.textContent = options.note;
      card.appendChild(note);
    }

    parent.appendChild(card);
  }

  // 1. Grafik korelasi Pearson.
  const pola = document.querySelector('#pola .metric-grid');

  addChart(
    pola?.parentElement,
    'Perbandingan korelasi Pearson',
    'Korelasi setiap indeks Google Trends dengan tingkat pencurian (r Pearson).',
    [
      { label: 'IGT “pencurian”', value: 0.8940, display: '0,8940' },
      { label: 'IGT “kemalingan”', value: 0.8846, display: '0,8846' }
    ],
    {
      note: 'Kedua koefisien menunjukkan hubungan positif yang sangat kuat. Korelasi tidak membuktikan sebab-akibat.'
    }
  );

  // 2. Grafik koefisien regresi linear berganda.
  const hasil = document.querySelector('#hasil .table-wrap');

  addChart(
    hasil,
    'Koefisien regresi linear berganda',
    'Nilai koefisien sesuai tabel hasil model. Panjang batang menunjukkan besar koefisien absolut; warna jingga menandai koefisien negatif.',
    [
      { label: 'IGT “pencurian”', value: 0.49046, display: '+0,49046' },
      { label: 'IGT “kemalingan”', value: 0.30382, display: '+0,30382' },
      { label: 'TPT', value: -7.47588, display: '−7,47588' },
      { label: 'Δ Persentase miskin', value: 5.72938, display: '+5,72938' }
    ],
    {
      note: 'Skala batang memakai nilai absolut karena koefisien memiliki satuan dan rentang yang berbeda. Interpretasikan arah dari tanda koefisien, bukan dari panjang batang saja.'
    }
  );

  // 3. Diagram donat hasil evaluasi SUS.
  const evalGrid = document.querySelector('#evaluasi .metric-grid');

  if (evalGrid && !evalGrid.querySelector('[data-sus-chart]')) {
    const card = document.createElement('div');
    card.className = 'research-chart';
    card.dataset.susChart = 'true';

    const title = document.createElement('h3');
    title.textContent = 'Sebaran kategori skor SUS';

    const subtitle = document.createElement('p');
    subtitle.className = 'chart-subtitle';
    subtitle.textContent = 'Proporsi responden berdasarkan ambang skor 68 dari 30 responden.';

    const layout = document.createElement('div');
    layout.className = 'sus-chart-layout';

    const donut = document.createElement('div');
    donut.className = 'sus-donut';
    donut.setAttribute('role', 'img');
    donut.setAttribute('aria-label', '80 persen responden memperoleh skor SUS minimal 68');

    const donutText = document.createElement('span');
    donutText.textContent = '80%';
    donut.appendChild(donutText);

    const legend = document.createElement('div');
    legend.className = 'sus-legend';
    legend.innerHTML = `
      <div>
        <span class="sus-key blue"></span>
        <span><b>24 responden (80%)</b><br>Skor SUS ≥ 68</span>
      </div>
      <div>
        <span class="sus-key amber"></span>
        <span><b>6 responden (20%)</b><br>Skor SUS &lt; 68</span>
      </div>
    `;

    layout.append(donut, legend);
    card.append(title, subtitle, layout);
    evalGrid.appendChild(card);
  }
})();
