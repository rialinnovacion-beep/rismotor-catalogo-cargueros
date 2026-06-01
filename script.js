const WHATSAPP_NUMBER = "51967350685";
const basePath = "assets/cargueros/";

const galleryItems = [
    { title: "KEMA 400 CC - triple refrigeración", img: "kema-400-triple-refrigeracion.webp" },
    ...Array.from({ length: 19 }, (_, index) => ({
        title: `Ficha oficial ${String(index + 1).padStart(2, "0")}`,
        img: `carguero-page-${String(index + 1).padStart(2, "0")}.webp`
    }))
];

const modelos = [
    {
        key: "kema-400-triple",
        nombre: "KEMA 400 CC",
        categoria: ["cabina"],
        precio: "Por cotizar",
        cilindrada: "400 CC",
        potencia: "26 HP / 5500 RPM",
        carga: "2500 kg",
        refrigeracion: "Agua + aceite + aire",
        frenos: "Hidráulico",
        motor: "Monocilíndrico, 4 tiempos OHV",
        transmision: "5 velocidades + corona 8*24 + rooster",
        dimensiones: "4.30 m / 1.50 m / 1.75 m",
        descripcion: "Cabina con triple sistema de refrigeración para trabajo pesado y rutas exigentes.",
        cover: "kema-400-triple-refrigeracion.webp",
        gallery: ["kema-400-triple-refrigeracion.webp"],
        tags: ["Triple refrigeración", "Cabina", "2500 kg"]
    },
    {
        key: "kema-350",
        nombre: "KEMA 350 CC",
        categoria: ["cabina"],
        precio: "S/ 12,000",
        cilindrada: "350 CC",
        potencia: "23 HP / 6000 RPM",
        carga: "2500 kg",
        refrigeracion: "Aire + agua",
        frenos: "Zapata",
        motor: "Monocilíndrico, 4 tiempos OHV",
        transmision: "5 velocidades + corona",
        dimensiones: "4.30 m / 1.60 m / 1.80 m",
        descripcion: "Carguero con cabina para carga fuerte, caja amplia y uso comercial diario.",
        cover: "carguero-page-01.webp",
        gallery: ["carguero-page-01.webp", "carguero-page-02.webp"],
        tags: ["Cabina", "350 CC", "2500 kg"]
    },
    {
        key: "kema-r10-350",
        nombre: "KEMA R10 350 CC",
        categoria: ["cabina", "r10"],
        precio: "S/ 13,500",
        cilindrada: "350 CC",
        potencia: "23 HP / 6000 RPM",
        carga: "2500 kg",
        refrigeracion: "Aire + agua",
        frenos: "Zapata",
        motor: "Monocilíndrico, 4 tiempos OHV",
        transmision: "5 velocidades + corona",
        dimensiones: "4.30 m / 1.60 m / 2.35 m",
        descripcion: "Versión R10 con mayor presencia, cabina y chasis para rutas de trabajo.",
        cover: "carguero-page-03.webp",
        gallery: ["carguero-page-03.webp"],
        tags: ["R10", "350 CC", "Cabina"]
    },
    {
        key: "predator-r10-400",
        nombre: "PREDATOR R10 400 CC",
        categoria: ["4x4", "r10"],
        precio: "S/ 19,500",
        cilindrada: "400 CC",
        potencia: "26 HP / 5000 RPM",
        carga: "2500 kg",
        refrigeracion: "Aire + agua",
        frenos: "Hidráulico",
        motor: "Monocilíndrico, 4 tiempos OHV",
        transmision: "5 velocidades + corona",
        dimensiones: "4.10 m / 1.60 m / 2.80 m",
        descripcion: "Carguero tipo carro con caja incorporada, configuración 4x4 y motor 400 CC.",
        cover: "carguero-page-04.webp",
        gallery: ["carguero-page-04.webp", "carguero-page-05.webp"],
        tags: ["4x4", "R10", "400 CC"]
    },
    {
        key: "predator-400-4x4",
        nombre: "PREDATOR 400 CC 4X4",
        categoria: ["4x4"],
        precio: "S/ 18,000",
        cilindrada: "400 CC",
        potencia: "26 HP / 5000 RPM",
        carga: "2500 kg",
        refrigeracion: "Aire + agua",
        frenos: "Hidráulico",
        motor: "Monocilíndrico, 4 tiempos OHV",
        transmision: "5 velocidades + corona",
        dimensiones: "4.10 m / 1.60 m / 1.78 m",
        descripcion: "Modelo 4x4 para trocha, campo y terreno difícil, con caja de carga robusta.",
        cover: "carguero-page-06.webp",
        gallery: ["carguero-page-06.webp", "carguero-page-07.webp", "carguero-page-18.webp", "carguero-page-19.webp"],
        tags: ["4x4", "Todo terreno", "400 CC"]
    },
    {
        key: "sentinel-250",
        nombre: "SENTINEL 250 CC",
        categoria: ["compacto"],
        precio: "S/ 7,500",
        cilindrada: "250 CC",
        potencia: "18 HP / 6000 RPM",
        carga: "500 kg",
        refrigeracion: "Aire",
        frenos: "Zapata tambor",
        motor: "Monocilíndrico, 4 tiempos",
        transmision: "5 velocidades + corona 8*24 + rooster",
        dimensiones: "3.60 m / 1.30 m / 1.60 m",
        descripcion: "Carguero compacto para reparto urbano y carga ligera o media.",
        cover: "carguero-page-08.webp",
        gallery: ["carguero-page-08.webp", "carguero-page-09.webp"],
        tags: ["Compacto", "250 CC", "500 kg"]
    },
    {
        key: "sentinel-300",
        nombre: "SENTINEL 300 CC",
        categoria: ["compacto"],
        precio: "S/ 8,500",
        cilindrada: "300 CC",
        potencia: "20 HP / 6000 RPM",
        carga: "1000 kg",
        refrigeracion: "Aire + agua",
        frenos: "Zapata tambor",
        motor: "Monocilíndrico, 4 tiempos",
        transmision: "5 velocidades + corona 8*24 + rooster",
        dimensiones: "4.00 m / 1.30 m / 1.60 m",
        descripcion: "Versión Sentinel con más fuerza para reparto y trabajo comercial continuo.",
        cover: "carguero-page-10.webp",
        gallery: ["carguero-page-10.webp", "carguero-page-11.webp"],
        tags: ["Compacto", "300 CC", "1000 kg"]
    },
    {
        key: "kema-300",
        nombre: "KEMA 300 CC",
        categoria: ["cabina"],
        precio: "S/ 11,500",
        cilindrada: "300 CC",
        potencia: "20 HP / 6000 RPM",
        carga: "2000 kg",
        refrigeracion: "Aire + agua",
        frenos: "Hidráulico",
        motor: "Monocilíndrico, 4 tiempos OHV",
        transmision: "5 velocidades + corona",
        dimensiones: "4.30 m / 1.50 m / 1.80 m",
        descripcion: "Cabina KEMA de 300 CC con caja amplia y opciones de color para trabajo diario.",
        cover: "carguero-page-12.webp",
        gallery: ["carguero-page-12.webp", "carguero-page-13.webp"],
        tags: ["Cabina", "300 CC", "2000 kg"]
    },
    {
        key: "jepeta-400",
        nombre: "JEPETA 400 CC",
        categoria: ["cabina"],
        precio: "S/ 17,000",
        cilindrada: "400 CC",
        potencia: "26 HP / 5000 RPM",
        carga: "2500 kg",
        refrigeracion: "Aire + agua",
        frenos: "Hidráulico",
        motor: "Monocilíndrico, 4 tiempos OHV",
        transmision: "5 velocidades + corona",
        dimensiones: "4.10 m / 1.50 m / 1.75 m",
        descripcion: "Carguero tipo carro con cabina, motor 400 CC y caja incorporada.",
        cover: "carguero-page-14.webp",
        gallery: ["carguero-page-14.webp", "carguero-page-15.webp"],
        tags: ["Cabina", "400 CC", "2500 kg"]
    },
    {
        key: "kema-fmk-400",
        nombre: "KEMA FMK 400 CC",
        categoria: ["volquete", "cabina"],
        precio: "S/ 14,500",
        cilindrada: "400 CC",
        potencia: "26 HP / 5000 RPM",
        carga: "2500 kg",
        refrigeracion: "Aire + agua",
        frenos: "Tambor hidráulico",
        motor: "Monocilíndrico, 4 tiempos OHV",
        transmision: "5 velocidades + corona",
        dimensiones: "4.00 m / 2.00 m / 1.80 m",
        descripcion: "Versión FMK con sistema de pistón de 3 tiempos para descarga tipo volquete.",
        cover: "carguero-page-16.webp",
        gallery: ["carguero-page-16.webp", "carguero-page-17.webp"],
        tags: ["Volquete", "Pistón", "400 CC"]
    },
    {
        key: "predator-400-promo",
        nombre: "PREDATOR MOTOR CONVENCIONAL 400CC 4X4",
        categoria: ["4x4"],
        precio: "S/ 16,000",
        cilindrada: "400 CC",
        potencia: "26 HP / 5000 RPM",
        carga: "2500 kg",
        refrigeracion: "Aire + agua",
        frenos: "Hidráulico",
        motor: "Monocilíndrico, 4 tiempos OHV",
        transmision: "5 velocidades + corona",
        dimensiones: "4.30 m / 1.50 m / 1.75 m",
        descripcion: "Ficha adicional Predator motor convencional 400CC 4x4 con precio referencial corregido.",
        cover: "carguero-page-18.webp",
        gallery: ["carguero-page-18.webp", "carguero-page-19.webp"],
        tags: ["4x4", "Campaña", "400 CC"]
    }
];

let activeFilter = "all";
let compareSelection = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const imgPath = (file) => `${basePath}${file}`;

function whatsappLink(modelo) {
    const text = `Hola RISMOTOR, quiero cotizar el carguero ${modelo.nombre}. Precio referencial: ${modelo.precio}. Cilindrada: ${modelo.cilindrada}. ¿Me ayudas con disponibilidad, colores y separación?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function matchesSearch(modelo, query) {
    const haystack = [
        modelo.nombre,
        modelo.descripcion,
        modelo.cilindrada,
        modelo.precio,
        modelo.carga,
        modelo.refrigeracion,
        modelo.tags.join(" ")
    ].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase());
}

function filteredModels() {
    const query = $("#searchInput").value.trim();
    return modelos.filter((modelo) => {
        const okFilter = activeFilter === "all" || modelo.categoria.includes(activeFilter);
        const okSearch = !query || matchesSearch(modelo, query);
        return okFilter && okSearch;
    });
}

function setActiveFilter(filter) {
    activeFilter = filter;
    $$(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.filter === filter));
    renderCatalog();
    setTimeout(() => document.querySelector("#modelos").scrollIntoView({ behavior: "smooth", block: "start" }), 40);
}

function cardTemplate(modelo, index) {
    const selected = compareSelection.includes(modelo.key);
    return `
        <article class="model-card" style="animation-delay:${index * 0.035}s">
            <div class="model-media">
                <img src="${imgPath(modelo.cover)}" alt="${modelo.nombre}" loading="lazy">
                <div class="badge-row">
                    <span class="badge red">${modelo.cilindrada}</span>
                    <span class="badge">${modelo.precio}</span>
                </div>
            </div>
            <div class="card-body">
                <div>
                    <h3 class="model-title">${modelo.nombre}</h3>
                    <p class="model-desc">${modelo.descripcion}</p>
                </div>
                <div class="tag-row">${modelo.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
                <div class="spec-grid">
                    <div class="spec-card"><span>Potencia</span><strong>${modelo.potencia}</strong></div>
                    <div class="spec-card"><span>Carga</span><strong>${modelo.carga}</strong></div>
                    <div class="spec-card"><span>Refrigeración</span><strong>${modelo.refrigeracion}</strong></div>
                    <div class="spec-card"><span>Frenos</span><strong>${modelo.frenos}</strong></div>
                </div>
                <div class="action-row">
                    <button class="outline-btn" type="button" data-detail="${modelo.key}"><i class="fa-solid fa-file-lines"></i> Ficha</button>
                    <button class="compare-btn ${selected ? "active" : ""}" type="button" data-compare="${modelo.key}"><i class="fa-solid fa-scale-balanced"></i> ${selected ? "Quitar" : "Comparar"}</button>
                </div>
                <a class="btn-whatsapp" href="${whatsappLink(modelo)}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Cotizar este modelo</a>
            </div>
        </article>`;
}

function renderCatalog() {
    const items = filteredModels();
    $("#catalogGrid").innerHTML = items.map(cardTemplate).join("");
    $("#emptyState").classList.toggle("hidden", items.length !== 0);
    $("#totalModels").textContent = modelos.length;
}

function renderGallery() {
    $("#galleryGrid").innerHTML = galleryItems.map((item, index) => `
        <button class="gallery-item" type="button" data-gallery-index="${index}">
            <img src="${imgPath(item.img)}" alt="${item.title}" loading="lazy">
            <span>${item.title}</span>
        </button>
    `).join("");
}

function setMainModalImage(file) {
    const img = $("#modalMainImage");
    if (img) img.src = imgPath(file);
    $$(".modal-gallery button").forEach((btn) => btn.classList.toggle("active", btn.dataset.img === file));
}

function openModelModal(modelo) {
    const gallery = modelo.gallery.map((file, index) => `
        <button type="button" class="${index === 0 ? "active" : ""}" data-img="${file}">
            <img src="${imgPath(file)}" alt="Vista ${modelo.nombre} ${index + 1}">
        </button>
    `).join("");

    $("#modalContent").innerHTML = `
        <div class="modal-content">
            <div class="modal-poster">
                <img id="modalMainImage" src="${imgPath(modelo.gallery[0])}" alt="Ficha técnica ${modelo.nombre}">
            </div>
            <div class="modal-info">
                <span class="eyebrow dark">Ficha técnica</span>
                <h2 id="modalTitle">${modelo.nombre}</h2>
                <span class="price">${modelo.precio}</span>
                <p>${modelo.descripcion}</p>
                <ul class="spec-list">
                    <li><span>Cilindrada</span><strong>${modelo.cilindrada}</strong></li>
                    <li><span>Potencia</span><strong>${modelo.potencia}</strong></li>
                    <li><span>Carga máxima</span><strong>${modelo.carga}</strong></li>
                    <li><span>Refrigeración</span><strong>${modelo.refrigeracion}</strong></li>
                    <li><span>Frenos</span><strong>${modelo.frenos}</strong></li>
                    <li><span>Motor</span><strong>${modelo.motor}</strong></li>
                    <li><span>Transmisión</span><strong>${modelo.transmision}</strong></li>
                    <li><span>Medidas</span><strong>${modelo.dimensiones}</strong></li>
                </ul>
                <a class="btn-whatsapp" href="${whatsappLink(modelo)}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Consultar este modelo</a>
                ${gallery ? `<div class="modal-gallery">${gallery}</div>` : ""}
            </div>
        </div>`;

    $("#productModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function openGalleryModal(index) {
    const item = galleryItems[index];
    $("#modalContent").innerHTML = `
        <div class="modal-content">
            <div class="modal-poster">
                <img id="modalMainImage" src="${imgPath(item.img)}" alt="${item.title}">
            </div>
            <div class="modal-info">
                <span class="eyebrow dark">Imagen oficial</span>
                <h2 id="modalTitle">${item.title}</h2>
                <p>Vista ampliada del material de cargueros RismotoR. Úsala como referencia visual y técnica.</p>
                <a class="btn-whatsapp" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola RISMOTOR, vi una ficha del catálogo de cargueros y quiero precio actualizado y disponibilidad.")}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Consultar por esta ficha</a>
            </div>
        </div>`;
    $("#productModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    $("#productModal").classList.add("hidden");
    document.body.style.overflow = "";
}

function toggleCompare(key) {
    if (compareSelection.includes(key)) {
        compareSelection = compareSelection.filter((item) => item !== key);
    } else {
        if (compareSelection.length >= 3) compareSelection.shift();
        compareSelection.push(key);
    }
    renderCatalog();
    renderCompare();
}

function renderCompare() {
    const wrap = $("#compareTableWrap");
    const selected = compareSelection.map((key) => modelos.find((modelo) => modelo.key === key)).filter(Boolean);
    if (!selected.length) {
        wrap.innerHTML = `<div class="compare-placeholder">Toca “Comparar” en una tarjeta para añadirla aquí.</div>`;
        return;
    }

    const rows = [
        ["Precio", "precio"],
        ["Cilindrada", "cilindrada"],
        ["Potencia", "potencia"],
        ["Carga", "carga"],
        ["Refrigeración", "refrigeracion"],
        ["Frenos", "frenos"],
        ["Motor", "motor"],
        ["Medidas", "dimensiones"]
    ];

    wrap.innerHTML = `
        <div class="compare-mobile-list">
            ${selected.map((modelo) => `
                <article class="compare-item">
                    <h3>${modelo.nombre}</h3>
                    <div class="compare-data">
                        ${rows.map(([label, prop]) => `<div><span>${label}</span><strong>${modelo[prop]}</strong></div>`).join("")}
                    </div>
                </article>
            `).join("")}
        </div>
        <table class="compare-table">
            <thead><tr><th>Dato</th>${selected.map((modelo) => `<th>${modelo.nombre}</th>`).join("")}</tr></thead>
            <tbody>${rows.map(([label, prop]) => `<tr><td>${label}</td>${selected.map((modelo) => `<td>${modelo[prop]}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>`;
}

function addChatMessage(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text;
    $("#advisorBody").appendChild(bubble);
    $("#advisorBody").scrollTop = $("#advisorBody").scrollHeight;
}

function advisorReply(message) {
    const msg = message.toLowerCase();
    if (msg.includes("250") || msg.includes("ligera") || msg.includes("500") || msg.includes("reparto")) return "Para reparto urbano o carga ligera, revisa el <b>SENTINEL 250 CC</b>. Es compacto y tiene precio referencial de S/ 7,500.";
    if (msg.includes("1000") || msg.includes("300") || msg.includes("media")) return "Para carga media, mira <b>SENTINEL 300 CC</b> o <b>KEMA 300 CC</b>. Si deseas cabina, KEMA 300 es mejor opción.";
    if (msg.includes("2500") || msg.includes("pesado") || msg.includes("400")) return "Para trabajo pesado, revisa <b>KEMA 400</b>, <b>JEPETA 400</b>, <b>PREDATOR 400 4X4</b> o <b>KEMA FMK 400</b>.";
    if (msg.includes("4x4") || msg.includes("trocha") || msg.includes("campo") || msg.includes("terreno")) return "Para trocha, campo o terreno difícil, enfócate en la línea <b>PREDATOR 400 4X4</b>.";
    if (msg.includes("volquete") || msg.includes("piston") || msg.includes("pistón") || msg.includes("descarga")) return "Para descarga rápida, el <b>KEMA FMK 400 CC</b> tiene sistema de pistón tipo volquete.";
    return "Dime cuánto peso quieres cargar, si será ciudad o trocha, y si necesitas cabina, 4x4 o volquete. También puedes pulsar WhatsApp para cotizar directo.";
}

function sendAdvisorMessage() {
    const input = $("#advisorInput");
    const message = input.value.trim();
    if (!message) return;
    addChatMessage(message, "user");
    input.value = "";
    setTimeout(() => addChatMessage(advisorReply(message), "bot"), 360);
}

function initEvents() {
    $("#filterButtons").addEventListener("click", (event) => {
        const btn = event.target.closest(".filter-chip");
        if (!btn) return;
        activeFilter = btn.dataset.filter;
        $$(".filter-chip").forEach((item) => item.classList.remove("active"));
        btn.classList.add("active");
        renderCatalog();
    });

    $("#intentScroll").addEventListener("click", (event) => {
        const card = event.target.closest("[data-filter-shortcut]");
        if (card) setActiveFilter(card.dataset.filterShortcut);
    });

    $("#searchInput").addEventListener("input", renderCatalog);

    $("#catalogGrid").addEventListener("click", (event) => {
        const detail = event.target.closest("[data-detail]");
        const compare = event.target.closest("[data-compare]");
        if (detail) openModelModal(modelos.find((modelo) => modelo.key === detail.dataset.detail));
        if (compare) toggleCompare(compare.dataset.compare);
    });

    $("#galleryGrid").addEventListener("click", (event) => {
        const item = event.target.closest("[data-gallery-index]");
        if (item) openGalleryModal(Number(item.dataset.galleryIndex));
    });

    $("#modalContent").addEventListener("click", (event) => {
        const thumb = event.target.closest(".modal-gallery button");
        if (thumb) setMainModalImage(thumb.dataset.img);
    });

    $("#modalClose").addEventListener("click", closeModal);
    $("#productModal").addEventListener("click", (event) => { if (event.target.id === "productModal") closeModal(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });

    $("#clearCompareBtn").addEventListener("click", () => {
        compareSelection = [];
        renderCatalog();
        renderCompare();
    });

    ["#advisorToggle", "#openAdvisorHero"].forEach((selector) => {
        const element = $(selector);
        if (element) element.addEventListener("click", () => $("#advisorWidget").classList.remove("closed"));
    });
    $("#closeAdvisor").addEventListener("click", () => $("#advisorWidget").classList.add("closed"));
    $("#sendAdvisor").addEventListener("click", sendAdvisorMessage);
    $("#advisorInput").addEventListener("keydown", (event) => { if (event.key === "Enter") sendAdvisorMessage(); });
}

function init() {
    renderCatalog();
    renderGallery();
    renderCompare();
    initEvents();
}

init();
