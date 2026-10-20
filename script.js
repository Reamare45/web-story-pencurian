
(() => {
  "use strict";

  const dataTren = [
    { tahun: 2012, pencurian: 46.38, igtPencurian: 68.30, igtKemalingan: 62.31 },
    { tahun: 2013, pencurian: 45.88, igtPencurian: 67.97, igtKemalingan: 62.03 },
    { tahun: 2014, pencurian: 43.39, igtPencurian: 54.26, igtKemalingan: 63.96 },
    { tahun: 2015, pencurian: 41.35, igtPencurian: 53.76, igtKemalingan: 52.35 },
    { tahun: 2016, pencurian: 42.82, igtPencurian: 54.34, igtKemalingan: 64.27 },
    { tahun: 2017, pencurian: 37.47, igtPencurian: 46.16, igtKemalingan: 42.58 },
    { tahun: 2018, pencurian: 33.01, igtPencurian: 39.02, igtKemalingan: 50.66 },
    { tahun: 2019, pencurian: 27.90, igtPencurian: 29.22, igtKemalingan: 40.67 },
    { tahun: 2020, pencurian: 25.25, igtPencurian: 34.37, igtKemalingan: 28.64 },
    { tahun: 2021, pencurian: 23.74, igtPencurian: 39.57, igtKemalingan: 35.19 },
    { tahun: 2022, pencurian: 32.36, igtPencurian: 50.19, igtKemalingan: 42.70 },
    { tahun: 2023, pencurian: 47.86, igtPencurian: 59.29, igtKemalingan: 60.85 },
    { tahun: 2024, pencurian: 41.17, igtPencurian: 53.55, igtKemalingan: 43.79 }
  ];

  const dataPrediksi = [
    { tahun: 2013, aktual: 45.88, prediksi: 46.65 },
    { tahun: 2014, aktual: 43.39, prediksi: 42.47 },
    { tahun: 2015, aktual: 41.35, prediksi: 39.60 },
    { tahun: 2016, aktual: 42.82, prediksi: 44.13 },
    { tahun: 2017, aktual: 37.47, prediksi: 34.54 },
    { tahun: 2018, aktual: 33.01, prediksi: 33.73 },
    { tahun: 2019, aktual: 27.90, prediksi: 27.83 },
    { tahun: 2020, aktual: 25.25, prediksi: 26.25 },
    { tahun: 2021, aktual: 23.74, prediksi: 23.84 },
    { tahun: 2022, aktual: 32.36, prediksi: 33.51 },
    { tahun: 2023, aktual: 47.86, prediksi: 47.93 },
    { tahun: 2024, aktual: 41.17, prediksi: 41.73 }
  ];

  const links = [...document.querySelectorAll("nav .links a")];

  const sections = links
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        links.forEach(link => {
          const isActive =
            link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("active", isActive);

          if (isActive) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0
    });

    sections.forEach(section => navObserver.observe(section));
  }

  const style = document.createElement("style");

  style.textContent = `
    .research-chart {
      background: #0d1318;
      border: 1px solid var(--line, #30363d);
      padding: clamp(14px, 3vw, 24px);
      margin: 24px 0;
      min-width: 0;
    }

    .research-chart h3 {
      margin: 0 0 8px;
      font-size: 1.1rem;
      line-height: 1.5;
    }

    .research-chart .chart-description {
      color: var(--muted, #9aa4ad);
      font-size: .9rem;
      line-height: 1.7;
      margin: 0 0 18px;
    }

    .research-chart .chart-scroll {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .research-chart svg {
      display: block;
      width: 100%;
      height: auto;
      min-width: 480px;
      overflow: visible;
    }

    .research-chart .chart-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 20px;
      margin-top: 16px;
      color: #d5d8d9;
      font-size: .85rem;
    }

    .research-chart .legend-item {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .research-chart .legend-line {
      width: 24px;
      height: 3px;
      display: inline-block;
      border-radius: 4px;
    }

    .research-chart .chart-source {
      color: var(--muted, #9aa4ad);
      font-size: .8rem;
      line-height: 1.6;
      margin: 16px 0 0;
    }

    .research-chart .chart-point {
      cursor: crosshair;
      outline: none;
    }

    .research-chart .chart-point:focus circle,
    .research-chart .chart-point:hover circle {
      stroke: #fff;
      stroke-width: 3;
      r: 6;
    }

    @media (max-width: 600px) {
      .research-chart {
        padding: 14px;
      }

      .research-chart svg {
        min-width: 460px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .reveal,
      .research-chart * {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  const formatAngka = (angka, desimal = 2) =>
    Number(angka).toLocaleString("id-ID", {
      minimumFractionDigits: desimal,
      maximumFractionDigits: desimal
    });

  function buatGrafikGaris({
    id,
    judul,
    deskripsi,
    data,
    series,
    minY = 0,
    maxY = 100,
    intervalY = 10,
    labelY,
    sumber
  }) {
    const lebar = 760;
    const tinggi = 350;

    const margin = {
      atas: 24,
      kanan: 24,
      bawah: 56,
      kiri: 64
    };

    const plotWidth = lebar - margin.kiri - margin.kanan;
    const plotHeight = tinggi - margin.atas - margin.bawah;

    const x = index =>
      margin.kiri + (index / (data.length - 1)) * plotWidth;

    const y = nilai =>
      margin.atas +
      ((maxY - nilai) / (maxY - minY)) * plotHeight;

    const svgNS = "http://www.w3.org/2000/svg";

    const el = (tag, attrs = {}, isi = "") => {
      const node = document.createElementNS(svgNS, tag);

      Object.entries(attrs).forEach(([key, value]) => {
        node.setAttribute(key, String(value));
      });

      if (isi !== "") node.textContent = isi;

      return node;
    };

    const svg = el("svg", {
      viewBox: `0 0 ${lebar} ${tinggi}`,
      role: "img",
      "aria-labelledby": `${id}-title ${id}-desc`
    });

    svg.append(
      el("title", { id: `${id}-title` }, judul),
      el("desc", { id: `${id}-desc` }, deskripsi)
    );

    for (
      let nilai = minY;
      nilai <= maxY + 0.0001;
      nilai += intervalY
    ) {
      const posisiY = y(nilai);

      svg.append(
        el("line", {
          x1: margin.kiri,
          y1: posisiY,
          x2: lebar - margin.kanan,
          y2: posisiY,
          stroke: "#30363d",
          "stroke-width": 1
        }),
        el("text", {
          x: margin.kiri - 10,
          y: posisiY + 4,
          fill: "#9aa4ad",
          "font-size": 12,
          "text-anchor": "end"
        }, formatAngka(nilai, 0))
      );
    }

    svg.append(
      el("line", {
        x1: margin.kiri,
        y1: margin.atas,
        x2: margin.kiri,
        y2: tinggi - margin.bawah,
        stroke: "#64707a",
        "stroke-width": 1
      }),
      el("line", {
        x1: margin.kiri,
        y1: tinggi - margin.bawah,
        x2: lebar - margin.kanan,
        y2: tinggi - margin.bawah,
        stroke: "#64707a",
        "stroke-width": 1
      })
    );

    data.forEach((item, index) => {
      svg.append(
        el("text", {
          x: x(index),
          y: tinggi - margin.bawah + 22,
          fill: "#9aa4ad",
          "font-size": 11,
          "text-anchor": "middle"
        }, String(item.tahun))
      );
    });

    svg.append(
      el("text", {
        x: 17,
        y: tinggi / 2,
        fill: "#d5d8d9",
        "font-size": 12,
        "text-anchor": "middle",
        transform: `rotate(-90 17 ${tinggi / 2})`
      }, labelY)
    );

    series.forEach(seri => {
      const titik = data.map((item, index) => ({
        x: x(index),
        y: y(item[seri.key]),
        tahun: item.tahun,
        nilai: item[seri.key]
      }));

      const garis = titik
        .map((point, index) =>
          `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
        )
        .join(" ");

      svg.append(
        el("path", {
          d: garis,
          fill: "none",
          stroke: seri.warna,
          "stroke-width": 3,
          "stroke-linejoin": "round",
          "stroke-linecap": "round"
        })
      );

      titik.forEach(point => {
        const group = el("g", {
          class: "chart-point",
          tabindex: 0,
          role: "img",
          "aria-label":
            `${seri.label}, tahun ${point.tahun}: ${formatAngka(point.nilai)}`
        });

        group.append(
          el("circle", {
            cx: point.x,
            cy: point.y,
            r: 3.5,
            fill: seri.warna,
            stroke: "#0d1318",
            "stroke-width": 1.5
          }),
          el("title", {},
            `${point.tahun}: ${formatAngka(point.nilai)}`
          )
        );

        svg.appendChild(group);
      });
    });

    const card = document.createElement("article");
    card.className = "research-chart";
    card.id = id;

    const heading = document.createElement("h3");
    heading.textContent = judul;

    const paragraph = document.createElement("p");
    paragraph.className = "chart-description";
    paragraph.textContent = deskripsi;

    const chartScroll = document.createElement("div");
    chartScroll.className = "chart-scroll";
    chartScroll.appendChild(svg);

    const legend = document.createElement("div");
    legend.className = "chart-legend";
    legend.setAttribute("aria-label", "Legenda grafik");

    series.forEach(seri => {
      const item = document.createElement("span");
      item.className = "legend-item";

      const swatch = document.createElement("span");
      swatch.className = "legend-line";
      swatch.style.backgroundColor = seri.warna;

      const label = document.createElement("span");
      label.textContent = seri.label;

      item.append(swatch, label);
      legend.appendChild(item);
    });

    const keterangan = document.createElement("p");
    keterangan.className = "chart-source";
    keterangan.textContent = sumber;

    card.append(heading, paragraph, chartScroll, legend, keterangan);

    return card;
  }

  const polaTarget = document.querySelector("#pola .wrap");

  if (
    polaTarget &&
    !document.getElementById("grafik-tren-pencurian")
  ) {
    const grafikPencurian = buatGrafikGaris({
      id: "grafik-tren-pencurian",
      judul: "Perkembangan tingkat pencurian di Indonesia",
      deskripsi:
        "Tingkat pencurian per 100.000 penduduk selama 2012–2024.",
      data: dataTren,
      series: [
        {
          key: "pencurian",
          label: "Tingkat pencurian",
          warna: "#55a6b8"
        }
      ],
      minY: 0,
      maxY: 50,
      intervalY: 10,
      labelY: "Kejadian per 100.000 penduduk",
      sumber: "Sumber: data penelitian, diolah."
    });

    const grafikIGTPencurian = buatGrafikGaris({
      id: "grafik-igt-pencurian",
      judul: "Perkembangan IGT kata kunci “pencurian”",
      deskripsi:
        "Indeks Google Trends kata kunci “pencurian” di Indonesia, 2012–2024.",
      data: dataTren,
      series: [
        {
          key: "igtPencurian",
          label: "IGT pencurian",
          warna: "#55a6b8"
        }
      ],
      minY: 0,
      maxY: 100,
      intervalY: 20,
      labelY: "Indeks Google Trends",
      sumber: "Sumber: Google Trends, diolah."
    });

    const grafikIGTKemalingan = buatGrafikGaris({
      id: "grafik-igt-kemalingan",
      judul: "Perkembangan IGT kata kunci “kemalingan”",
      deskripsi:
        "Indeks Google Trends kata kunci “kemalingan” di Indonesia, 2012–2024.",
      data: dataTren,
      series: [
        {
          key: "igtKemalingan",
          label: "IGT kemalingan",
          warna: "#e9a23b"
        }
      ],
      minY: 0,
      maxY: 100,
      intervalY: 20,
      labelY: "Indeks Google Trends",
      sumber: "Sumber: Google Trends, diolah."
    });

    const metricGrid = polaTarget.querySelector(".metric-grid");

    if (metricGrid) {
      polaTarget.insertBefore(grafikIGTKemalingan, metricGrid);
      polaTarget.insertBefore(grafikIGTPencurian, grafikIGTKemalingan);
      polaTarget.insertBefore(grafikPencurian, grafikIGTPencurian);
    } else {
      polaTarget.append(
        grafikPencurian,
        grafikIGTPencurian,
        grafikIGTKemalingan
      );
    }
  }

  const hasilTarget = document.querySelector("#hasil .wrap");

  if (
    hasilTarget &&
    !document.getElementById("grafik-aktual-prediksi")
  ) {
    const grafikAktualPrediksi = buatGrafikGaris({
      id: "grafik-aktual-prediksi",
      judul: "Perbandingan tingkat pencurian aktual dan prediksi",
      deskripsi:
        "Perbandingan tingkat pencurian aktual dengan hasil estimasi model RLB pada 2013–2024. Tahun 2012 tidak disertakan karena diferensiasi pertama variabel kemiskinan mengurangi satu pengamatan.",
      data: dataPrediksi,
      series: [
        {
          key: "aktual",
          label: "Aktual",
          warna: "#55a6b8"
        },
        {
          key: "prediksi",
          label: "Prediksi model RLB",
          warna: "#e9a23b"
        }
      ],
      minY: 0,
      maxY: 50,
      intervalY: 10,
      labelY: "Kejadian per 100.000 penduduk",
      sumber:
        "Sumber: data penelitian dan hasil estimasi model RLB. Nilai prediksi ditampilkan dengan pembulatan dua desimal."
    });

    const equation = hasilTarget.querySelector(".equation");
    const stats = hasilTarget.querySelector(".stats");
    const resultsTable = hasilTarget.querySelector(".table-wrap");

    if (stats) {
      stats.insertAdjacentElement("afterend", grafikAktualPrediksi);
    } else if (equation) {
      equation.insertAdjacentElement("afterend", grafikAktualPrediksi);
    } else if (resultsTable) {
      hasilTarget.insertBefore(grafikAktualPrediksi, resultsTable);
    } else {
      hasilTarget.appendChild(grafikAktualPrediksi);
    }
  }

  const revealItems = document.querySelectorAll(
    ".method-step, .metric-card, .stat, table.results tr, .research-chart"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.08
    });

    revealItems.forEach(item => {
      item.classList.add("reveal");
      revealObserver.observe(item);
    });
  }
})();
